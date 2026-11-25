/**
 * Netlify Serverless Function: Gemini AI Proxy
 * Path: netlify/functions/gemini.mjs
 * 
 * Securely forwards AI requests to Google Gemini 2.5 Flash
 * using the server-side GEMINI_API_KEY environment variable.
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

  try {
    const requestBody = await req.json().catch(() => ({}));
    const headerKey = req.headers.get('x-goog-api-key');

    // 3. Retrieve server-side GEMINI_API_KEY with fallback to header or body
    const rawApiKey = (typeof process !== 'undefined' && process.env ? (process.env.GEMINI_API_KEY || process.env.API_KEY || process.env.GOOGLE_API_KEY) : null)
      || (typeof Netlify !== 'undefined' && Netlify.env ? (Netlify.env.get('GEMINI_API_KEY') || Netlify.env.get('API_KEY') || Netlify.env.get('GOOGLE_API_KEY')) : null)
      || headerKey
      || requestBody.apiKey;

    const apiKey = typeof rawApiKey === 'string' ? rawApiKey.trim() : null;

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

    // 4. Gemini 2.5 Flash (Text, JSON Brand Kits, SVG Logos, Tagline Rewrites)
    const primaryUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
    
    let response = await fetch(primaryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(requestBody)
    });

    const responseData = await response.json().catch(() => ({}));

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
