/**
 * Netlify Serverless Function: Gemini AI Proxy & BrandDNA Generator Engine
 * Path: netlify/functions/gemini.mjs
 * 
 * Powered by Google Gemini 2.5 Flash (gemini-2.5-flash)
 * Handles:
 * - action === 'generateLogos': 3 brand-new, geometrically distinct SVG vector marks
 * - action === 'suggestNames': 6 fresh names (with 2-3 culturally rooted Indian/Sanskrit modern names)
 * - action === 'regenerateTagline': 1 fresh hero tagline excluding vault taglines
 * - action === 'rewriteVoice': Voice rewrite matching active tone (Minimalist/Bold/Playful)
 * - action === 'generateBrandExtras': Brand-specific Instagram ideas, 8 tagline vault angles, 6 campaign templates
 * - raw Gemini request: Forwards requestBody directly to gemini-2.5-flash
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

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;

    // Helper: Call Gemini 2.5 Flash with prompt & parse JSON
    async function callGemini(promptText, temperature = 0.85) {
      const payload = {
        contents: [{ parts: [{ text: promptText }] }],
        generationConfig: {
          temperature: temperature,
          responseMimeType: "application/json"
        }
      };

      const res = await fetch(geminiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Gemini API returned status ${res.status}: ${errText}`);
      }

      const resJson = await res.json();
      const rawText = resJson?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) throw new Error('No text returned from Gemini API');

      let cleaned = rawText.trim();
      if (cleaned.startsWith('```json')) cleaned = cleaned.slice(7);
      if (cleaned.startsWith('```')) cleaned = cleaned.slice(3);
      if (cleaned.endsWith('```')) cleaned = cleaned.slice(0, -3);
      return JSON.parse(cleaned.trim());
    }

    // 4. Action-based dispatch
    const action = requestBody.action;

    // -------------------------------------------------------------------------
    // ACTION 1: True AI Vector Logo Generator (Regenerate Logos)
    // -------------------------------------------------------------------------
    if (action === 'generateLogos') {
      const brandName = requestBody.brandName || 'BrandDNA';
      const niche = requestBody.niche || requestBody.sector || 'Specialty Coffee & Chai Cafe';
      const sector = requestBody.sector || niche;
      const colors = Array.isArray(requestBody.colors) 
        ? requestBody.colors.map(c => typeof c === 'string' ? c : c.hex).join(', ') 
        : (requestBody.colors || '#141413, #E63926, #F4F1EA');
      const seed = requestBody.seed || Date.now();

      const prompt = `You are a legendary vector logo designer and identity systems director at a world-class design studio (like Pentagram or Braun).
Design 3 brand-new, geometrically distinct, professional, standalone vector logos as valid SVG code tailored specifically to:
- Brand Name: "${brandName}"
- Niche / Custom Niche: "${niche}"
- Sector: "${sector}"
- Palette Colors to Use: "${colors}"
- Random Seed: ${seed}

STRICT SPECIFICATIONS:
1. Concept 1 (Minimal Geometric Monogram / Architectural Emblem):
   - A bold, modern monogram, typographic emblem, or minimalist geometric structure.
   - Architectural poise, clean lines, and crisp negative space.
2. Concept 2 (Niche-Specific Symbolic Vector Mark):
   - An evocative, highly stylized, niche-specific icon or organic emblem that directly represents "${niche}".
   - Thoughtful visual metaphor tailored to "${brandName}".
3. Concept 3 (Modern Dynamic Wordmark & Signature Crest):
   - A distinct typographic brand lockup or framed badge combining stylized initials/symbol with editorial typographic balance.

CRITICAL SVG RULES:
- Every logo MUST be a complete, self-contained SVG element starting with <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg"> and ending with </svg>.
- Use the provided brand colors (${colors}) for fills and strokes.
- Do NOT include markdown code blocks. Return strict JSON.

Output JSON format:
{
  "concept1": "<svg viewBox=\\"0 0 400 240\\" xmlns=\\"http://www.w3.org/2000/svg\\">...</svg>",
  "concept2": "<svg viewBox=\\"0 0 400 240\\" xmlns=\\"http://www.w3.org/2000/svg\\">...</svg>",
  "concept3": "<svg viewBox=\\"0 0 400 240\\" xmlns=\\"http://www.w3.org/2000/svg\\">...</svg>"
}`;

      const logosData = await callGemini(prompt, 0.85);
      return new Response(JSON.stringify(logosData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // -------------------------------------------------------------------------
    // ACTION 2: Niche-Aware Name Generator + Indian / Sanskrit Names
    // -------------------------------------------------------------------------
    if (action === 'suggestNames') {
      const niche = requestBody.niche || requestBody.sector || 'Specialty Coffee & Chai Cafe';
      const sector = requestBody.sector || niche;
      const seed = requestBody.seed || Date.now();

      const prompt = `You are a premier global brand nomenclature agency.
Generate EXACTLY 6 fresh, distinct, market-ready modern brand names tailored specifically to:
- Niche / Custom Niche: "${niche}"
- Sector: "${sector}"
- Random Variation Seed: ${seed}

MANDATORY NAMING RULES:
1. At least 2 to 3 names MUST be culturally rooted Indian or Sanskrit-inspired modern brand names (e.g., using meaningful Sanskrit root words, Vedic metaphors, or contemporary Indian luxury/tech/craft styling like Veda, Prana, Sutra, Amaya, Aaroh, Ananda, Ojas, Kaivalya, Dhara, Samaya, Tara, etc. adapted seamlessly with global phonetic elegance for "${niche}").
2. The remaining 3 to 4 names should be sharp, contemporary brand names (minimalist compound, modern coined, or evocative metaphor) strictly tailored to "${niche}".
3. For each name, provide:
   - "name": The exact brand name (e.g. "Prana Botanics", "Aaroh Audio", "Komorebi", "Veda Craft")
   - "archetype": e.g. "Sanskrit Heritage", "Modern Coined", "Minimalist Compound", "Sensory Metaphor"
   - "rationale": Exactly a 3-word punchy descriptor (e.g. "Rooted • Botanical • Pure")

Output JSON format:
{
  "names": [
    { "name": "...", "archetype": "...", "rationale": "..." },
    { "name": "...", "archetype": "...", "rationale": "..." },
    { "name": "...", "archetype": "...", "rationale": "..." },
    { "name": "...", "archetype": "...", "rationale": "..." },
    { "name": "...", "archetype": "...", "rationale": "..." },
    { "name": "...", "archetype": "...", "rationale": "..." }
  ]
}`;

      const namesData = await callGemini(prompt, 0.85);
      return new Response(JSON.stringify(namesData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // -------------------------------------------------------------------------
    // ACTION 4: Independent Hero Tagline Regenerator
    // -------------------------------------------------------------------------
    if (action === 'regenerateTagline' || action === 'generateTagline') {
      const brandName = requestBody.brandName || 'Brand';
      const niche = requestBody.niche || 'Design Studio';
      const tone = requestBody.tone || 'Bold';
      const excludeTaglines = Array.isArray(requestBody.excludeTaglines) ? requestBody.excludeTaglines : [];

      const prompt = `You are an elite Brand Strategist & Lead Copywriter.
Write ONE punchy, unforgettable, 4 to 8 word hero brand tagline for:
- Brand Name: "${brandName}"
- Industry / Niche: "${niche}"
- Active Brand Tone: "${tone}" (Options: Minimalist, Bold, or Playful)

CRITICAL EXCLUSION RULE:
Do NOT use, repeat, or closely paraphrase ANY of these existing taglines from our vault:
${JSON.stringify(excludeTaglines.slice(0, 30))}

Guidelines:
- Match the active tone "${tone}" (Minimalist = distilled, quiet poise; Bold = commanding, high-impact authority; Playful = witty, vibrant delight).
- Keep length strictly between 4 and 8 words.

Output JSON format:
{
  "tagline": "The fresh 4 to 8 word hero tagline here."
}`;

      const taglineData = await callGemini(prompt, 0.88);
      return new Response(JSON.stringify(taglineData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // -------------------------------------------------------------------------
    // ACTION 5: Brand Voice Rewriter & Tone Guardrail
    // -------------------------------------------------------------------------
    if (action === 'rewriteVoice') {
      const brandName = requestBody.brandName || 'Brand';
      const niche = requestBody.niche || 'Lifestyle';
      const tone = requestBody.tone || 'Bold';
      const inputText = requestBody.text || 'We sell good products';

      const prompt = `You are the Executive Brand Voice Director and Tone Architect for "${brandName}" in the ${niche} sector.
Active Tone: "${tone}" (Options: Minimalist, Bold, or Playful)

Rewrite the following generic sentence into this brand's exact vocabulary, emotional cadence, and "${tone}" tone:
"${inputText}"

Tone Principles:
- If Minimalist: Understated, architectural precision, quiet confidence, distilled words.
- If Bold: Commanding, high-impact presence, unapologetic, standard-setting.
- If Playful: Witty, high-energy, vibrant, clever, delightfully memorable.
- Length: 1-2 punchy sentences. Never generic.

Output JSON format:
{
  "rewritten": "The rewritten brand voice sentence here."
}`;

      const voiceData = await callGemini(prompt, 0.75);
      return new Response(JSON.stringify(voiceData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // -------------------------------------------------------------------------
    // ACTION 6: Brand-Specific Instagram Feed, Tagline Vault & Templates
    // -------------------------------------------------------------------------
    if (action === 'generateBrandExtras' || action === 'generateSocialKit') {
      const brandName = requestBody.brandName || 'Brand';
      const niche = requestBody.niche || requestBody.sector || 'Studio';
      const sector = requestBody.sector || niche;
      const audience = requestBody.audience || 'Discerning design lovers';
      const vibe = requestBody.vibe || 'minimalist-luxury';

      const prompt = `You are the Chief Creative Officer generating a comprehensive brand launch ecosystem for:
- Brand Name: "${brandName}"
- Niche: "${niche}"
- Sector: "${sector}"
- Target Audience: "${audience}"
- Vibe Archetype: "${vibe}"

Generate the complete launch collateral strictly tailored to "${brandName}" and "${niche}" (never generic placeholder text):

1. "instagramIdeas": Array of exactly 3 distinct, high-converting social media concepts:
   - Each object has: "format" (e.g. "Carousel (5 Slides)", "Reel (15s Audio Hook)", "Aesthetic Still"), "hook" (8-14 words scroll-stopper), "caption" (25-45 words high-conversion copy speaking to this audience), "hashtags" (5 relevant hashtags starting with #${brandName.replace(/[^a-zA-Z0-9]/g, '')}).

2. "taglineVault": Object with exactly 8 distinct strategic angles for "${brandName}":
   - "bold": Commanding, high-impact standard-setting tagline (4-8 words).
   - "minimal": Quiet precision, distilled pure form tagline (3-6 words).
   - "emotional": Deep human connection and memorable ritual tagline (4-8 words).
   - "playful": Witty, clever, delightful tagline (5-9 words).
   - "benefit": Clear functional excellence and performance tagline (5-9 words).
   - "rebel": Category disruption and bold challenge tagline (4-8 words).
   - "heritage": Timeless craft and generational permanence tagline (4-8 words).
   - "poetic": Evocative, atmospheric sensory resonance tagline (4-8 words).

3. "campaignTemplates": Object with 6 launch campaign templates tailored to "${brandName}" and "${niche}":
   - "launch": { "kicker": "GLOBAL DEBUT // PHASE 01", "headline": "Introducing ${brandName}...", "subtext": "...", "cta": "Explore Collection" }
   - "drop": { "badge": "PRIORITY ACCESS • 48H", "offer": "...", "hook": "...", "code": "${brandName.slice(0, 4).toUpperCase()}25" }
   - "testimonial": { "badge": "EDITORIAL ACCLAIM", "quote": "...", "author": "...", "title": "..." }
   - "founder": { "badge": "BEHIND THE CRAFT", "chapter": "CHAPTER 01 // THE ORIGIN", "headline": "...", "subtext": "...", "author": "Founder's Journal" }
   - "infographic": { "badge": "ARCHITECTURAL INTEGRITY", "headline": "3 Tenets of ${brandName}", "p1Title": "...", "p1Desc": "...", "p2Title": "...", "p2Desc": "...", "p3Title": "...", "p3Desc": "..." }
   - "countdown": { "badge": "COMMUNITY INITIATION", "timer": "T-MINUS 72 HOURS", "headline": "...", "subtext": "...", "cta": "Join the Guestlist" }

Output strict JSON with keys: "instagramIdeas", "taglineVault", "campaignTemplates".`;

      const extrasData = await callGemini(prompt, 0.8);
      return new Response(JSON.stringify(extrasData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // -------------------------------------------------------------------------
    // DEFAULT: Standard Gemini Forwarding (Raw payload with contents)
    // -------------------------------------------------------------------------
    let response = await fetch(geminiUrl, {
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
