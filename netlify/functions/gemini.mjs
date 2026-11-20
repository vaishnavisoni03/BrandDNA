/**
 * Netlify Serverless Function: Gemini AI & Image Generation Proxy
 * Path: netlify/functions/gemini.mjs
 * 
 * Securely forwards AI requests to Google Gemini 3.8 Flash and Gemini 2.5 Flash Image
 * (gemini-2.5-flash-image) using the GEMINI_API_KEY environment variable.
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
    // 4. Action: Image Generation via Gemini 2.5 Flash Free Tier (Clean 800x800 SVG Commercial Studio Illustration)
    if (requestBody.action === 'generateImage') {
      const promptText = requestBody.prompt || requestBody.instances?.[0]?.prompt || '';
      const aspectRatio = requestBody.aspectRatio || '1:1';

      const systemPrompt = `You are an elite vector artist and 3D industrial product packaging illustrator.
Your task is to create a stunning, professional, high-end 800x800 SVG vector commercial studio product & packaging illustration based on the user's brand brief.

CRITICAL INSTRUCTIONS:
1. Return ONLY pure, raw, valid SVG code starting with <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800"> and ending with </svg>.
2. Do NOT output markdown code blocks (NO \`\`\`xml or \`\`\`svg), NO conversational text, NO explanations before or after.
3. VISUAL QUALITY REQUIREMENTS:
   - Rich studio backdrop with soft atmospheric radial gradient lighting (<radialGradient>, <linearGradient> in <defs>).
   - Pedestal or architectural stage surface with realistic soft drop shadow blur (<filter id="blur"> or <filter id="dropShadow">).
   - A hyper-detailed, photorealistic commercial product & packaging container (bottle, jar, box, vessel, device, or can) tailored to the niche and prompt.
   - Clean luxury brand typography and label design on the packaging.
   - Distinctive layered vector highlights, specular light reflections, metallic/glass finishes, and realistic textures.
   - Strictly incorporate the specified Brand DNA colors into the product, label, and environmental lighting.
4. Ensure all XML tags are closed properly and self-contained with no external resource dependencies.`;

      const userPrompt = `Brand DNA Commercial Product Brief:
${promptText}
Target Canvas: 800x800 studio product mockup (Aspect ratio: ${aspectRatio}). Output ONLY valid SVG.`;

      const requestPayload = {
        contents: [
          {
            parts: [
              { text: `${systemPrompt}\n\n${userPrompt}` }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 8192
        }
      };

      let modelUsed = 'gemini-2.5-flash';
      let endpointUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;

      console.log(`[generateImage] Synthesizing 800x800 SVG studio asset via ${modelUsed}`);
      let response = await fetch(endpointUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestPayload)
      });

      // Fallback to gemini-1.5-flash if 404
      if (response.status === 404) {
        console.warn(`[generateImage] ${modelUsed} returned 404. Falling back to gemini-1.5-flash`);
        modelUsed = 'gemini-1.5-flash';
        endpointUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
        response = await fetch(endpointUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestPayload)
        });
      }

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error(`[generateImage] Error from ${modelUsed} - Status: ${response.status}:`, responseData);
        return new Response(JSON.stringify({
          error: responseData.error?.message || `Gemini API returned status ${response.status}`,
          status: response.status,
          model: modelUsed,
          fallbackMode: true
        }), {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      // Extract generated SVG text from candidates
      const rawText = responseData.candidates?.[0]?.content?.parts?.[0]?.text || '';
      
      let cleanSvg = '';
      const svgMatch = rawText.match(/<svg[\s\S]*?<\/svg>/i);
      if (svgMatch) {
        cleanSvg = svgMatch[0].trim();
      } else if (rawText.includes('<svg')) {
        const startIdx = rawText.indexOf('<svg');
        cleanSvg = rawText.slice(startIdx).trim();
        if (!cleanSvg.endsWith('</svg>')) cleanSvg += '</svg>';
      }

      if (!cleanSvg || cleanSvg.length < 50) {
        console.warn(`[generateImage] Model ${modelUsed} returned invalid or empty SVG payload:`, rawText.slice(0, 200));
        return new Response(JSON.stringify({
          error: 'Model response did not contain valid SVG illustration markup',
          status: 500,
          model: modelUsed,
          fallbackMode: true
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      // Base64 encode the clean SVG
      const base64Svg = Buffer.from(cleanSvg, 'utf-8').toString('base64');
      const dataUri = `data:image/svg+xml;base64,${base64Svg}`;

      console.log(`[generateImage] Successfully generated 800x800 SVG product illustration via ${modelUsed} (${cleanSvg.length} chars)`);

      return new Response(JSON.stringify({
        success: true,
        imageUrl: dataUri,
        image: dataUri,
        imageBase64: base64Svg,
        base64: base64Svg,
        svg: cleanSvg,
        mimeType: 'image/svg+xml',
        model: modelUsed,
        prompt: promptText
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
