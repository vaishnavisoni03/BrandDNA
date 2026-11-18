/**
 * Netlify Serverless Function: Gemini AI Proxy
 * Path: netlify/functions/gemini.mjs
 * 
 * Securely forwards AI requests to Google Gemini 3.8 Flash using the
 * GEMINI_API_KEY environment variable configured in Netlify.
 */

export default async (req, context) => {
  // 1. Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, x-goog-api-key, Authorization',
      }
    });
  }

  // 2. Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed. Use POST.' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  // 3. Retrieve server-side GEMINI_API_KEY from process.env with fallback to Netlify.env.get
  const apiKey = (typeof process !== 'undefined' && process.env ? process.env.GEMINI_API_KEY : null)
    || (typeof Netlify !== 'undefined' && Netlify.env ? Netlify.env.get('GEMINI_API_KEY') : null);

  if (!apiKey) {
    return new Response(JSON.stringify({
      error: 'GEMINI_API_KEY is not configured in Netlify environment variables. Please add GEMINI_API_KEY in your Netlify site settings or enter a key directly in the header input.',
      fallbackMode: true
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  try {
    const requestBody = await req.json();

    // 4. Primary endpoint: Gemini 3.8 Flash
    const primaryUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent';
    
    let response = await fetch(primaryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(requestBody)
    });

    // 5. Fallback endpoint if gemini-3.8-flash returns 404 (model identifier variation)
    if (response.status === 404) {
      console.warn('gemini-3.8-flash returned 404, attempting fallback to gemini-2.5-flash / gemini-1.5-flash');
      const fallbackUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
      response = await fetch(fallbackUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify(requestBody)
      });
    }

    const responseData = await response.json();

    return new Response(JSON.stringify(responseData), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Netlify Gemini Proxy Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Internal Server Error while contacting Gemini API',
      fallbackMode: true
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
