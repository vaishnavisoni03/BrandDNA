/**
 * Netlify Serverless Function: Gemini AI & Imagen 3 Proxy
 * Path: netlify/functions/gemini.mjs
 * 
 * Securely forwards AI requests to Google Gemini 3.8 Flash and Imagen 3
 * (imagen-3.0-generate-002) using the GEMINI_API_KEY environment variable.
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
    const apiKey = (typeof process !== 'undefined' && process.env ? process.env.GEMINI_API_KEY : null)
      || (typeof Netlify !== 'undefined' && Netlify.env ? Netlify.env.get('GEMINI_API_KEY') : null)
      || headerKey
      || requestBody.apiKey;

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

    // 4. Action: Image Generation via Google Imagen 3 (imagen-3.0-generate-002)
    if (requestBody.action === 'generateImage') {
      const promptText = requestBody.prompt || requestBody.instances?.[0]?.prompt || '';
      const aspectRatio = requestBody.aspectRatio || requestBody.parameters?.aspectRatio || '1:1';

      // Supported Imagen 3 aspect ratios: '1:1', '3:4', '4:3', '9:16', '16:9'
      let imagenRatio = aspectRatio;
      if (aspectRatio === '4:5') {
        imagenRatio = '3:4'; // Imagen 3 nearest standard portrait ratio
      }

      const imagenUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${encodeURIComponent(apiKey)}`;

      const imagenPayload = {
        instances: [
          { prompt: promptText }
        ],
        parameters: {
          sampleCount: 1,
          aspectRatio: imagenRatio,
          outputMimeType: 'image/png'
        }
      };

      const response = await fetch(imagenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(imagenPayload)
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Imagen 3 API Error:', responseData);
        return new Response(JSON.stringify({
          error: responseData.error?.message || 'Error generating visual with Imagen 3',
          status: response.status,
          fallbackMode: true
        }), {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      const base64Data = responseData.predictions?.[0]?.bytesBase64Encoded;
      const mimeType = responseData.predictions?.[0]?.mimeType || 'image/png';

      if (!base64Data) {
        return new Response(JSON.stringify({
          error: 'No image data returned from Imagen 3',
          fallbackMode: true
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      return new Response(JSON.stringify({
        success: true,
        image: `data:${mimeType};base64,${base64Data}`,
        base64: base64Data,
        mimeType: mimeType,
        aspectRatio: aspectRatio,
        prompt: promptText,
        predictions: responseData.predictions
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // 5. Default Action: Gemini Text / Brand Identity Generation (gemini-3.8-flash)
    const primaryUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent';
    
    let response = await fetch(primaryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(requestBody)
    });

    // Fallback if gemini-3.8-flash returns 404
    if (response.status === 404) {
      console.warn('gemini-3.8-flash returned 404, attempting fallback to gemini-1.5-flash');
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
