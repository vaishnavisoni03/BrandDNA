/**
 * BrandDNA Studio — Core Application Controller
 * Vanilla JavaScript (No React, No Tailwind build steps, No external libraries)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Curated 24x24 Vector SVG Niche Icons Library
  // =========================================================================
  const NICHE_24X24_ICONS = {
    coffee: "M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3",
    leaf: "M11 20A7 7 0 0 1 4 13C4 8.5 7.5 5 12 3a16.5 16.5 0 0 1 8 4c0 4.5-3.5 8-8 10a11.9 11.9 0 0 1-1 3zm-7-7c5 0 9-4 9-9",
    bolt: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    prism: "M6 3h12l4 6-10 12L2 9l4-6zm-4 6h20M12 21L8 9l4-6 4 6-4 12z",
    crown: "M2 4l3 12h14l3-12-5 6-5-6-5 6-5-6zm2 14h16v2H4v-2z",
    node: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    lotus: "M12 22c-4-3-8-8-8-12a8 8 0 0 1 16 0c0 4-4 9-8 12zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    arch: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
    compass: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm4.24-14.24l-2.83 8.48-5.65-2.83 2.83-8.48 5.65 2.83z",
    mic: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8",
    bakery: "M12 2a9 9 0 0 0-9 9c0 4 3 6 4 9h10c1-3 4-5 4-9a9 9 0 0 0-9-9zM8 12h8M9 16h6",
    pet: "M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm14 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM5 18c0-2.5 3-4 7-4s7 1.5 7 4-3 4-7 4-7-1.5-7-4z",
    sparkle: "M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"
  };

  function getNiche24x24IconPath(industry, vibe) {
    const s = ((industry || '') + ' ' + (vibe || '')).toLowerCase();
    if (s.includes('coffee') || s.includes('cafe') || s.includes('tea') || s.includes('beverage')) return NICHE_24X24_ICONS.coffee;
    if (s.includes('bakery') || s.includes('kitchen') || s.includes('food')) return NICHE_24X24_ICONS.bakery;
    if (s.includes('organic') || s.includes('skincare') || s.includes('vegan') || s.includes('nature') || s.includes('plant')) return NICHE_24X24_ICONS.leaf;
    if (s.includes('gaming') || s.includes('esports') || s.includes('bold') || s.includes('gen-z') || s.includes('energy') || s.includes('drop')) return NICHE_24X24_ICONS.bolt;
    if (s.includes('jewelry') || s.includes('watch') || s.includes('luxury') || s.includes('fintech') || s.includes('crypto')) return NICHE_24X24_ICONS.prism;
    if (s.includes('sovereign') || s.includes('couture') || s.includes('heritage') || s.includes('estate') || s.includes('prestige')) return NICHE_24X24_ICONS.crown;
    if (s.includes('ai') || s.includes('saas') || s.includes('tech') || s.includes('cloud') || s.includes('developer')) return NICHE_24X24_ICONS.node;
    if (s.includes('security') || s.includes('protect') || s.includes('shield') || s.includes('cyber')) return NICHE_24X24_ICONS.shield;
    if (s.includes('yoga') || s.includes('mindful') || s.includes('wellness') || s.includes('fitness') || s.includes('mental')) return NICHE_24X24_ICONS.lotus;
    if (s.includes('pet') || s.includes('grooming') || s.includes('animal')) return NICHE_24X24_ICONS.pet;
    if (s.includes('interior') || s.includes('architecture') || s.includes('home') || s.includes('design')) return NICHE_24X24_ICONS.arch;
    if (s.includes('travel') || s.includes('stay') || s.includes('eco-travel')) return NICHE_24X24_ICONS.compass;
    if (s.includes('podcast') || s.includes('creator') || s.includes('media')) return NICHE_24X24_ICONS.mic;
    return NICHE_24X24_ICONS.sparkle;
  }

  // =========================================================================
  // 2. Curated Brand Archetypes & Presets
  // =========================================================================
  const PRESET_BRANDS = {
    komorebi: {
      name: "Komorebi Living",
      industry: "Artisanal Home & Bio-Wellness",
      audience: "Mindful design connoisseurs & urban dwellers seeking restorative living rituals",
      vibe: "eco-organic",
      tagline: "Sanctuary for the intentional senses.",
      headingFont: "Fraunces",
      bodyFont: "Plus Jakarta Sans",
      voiceTone: ["Restorative", "Tactile", "Discerning"],
      tones: ["Restorative", "Tactile", "Discerning"],
      svgIconPath: NICHE_24X24_ICONS.leaf,
      palette: [
        { hex: "#2D5A46", role: "Primary Dominant", name: "Deep Forest Pine", psychology: "Grounding and restorative; evokes biophilic harmony and sanctuary." },
        { hex: "#C27D53", role: "Secondary Accent", name: "Sun-Baked Terracotta", psychology: "Handcrafted warmth; connects to tactile earthen pottery and raw clay." },
        { hex: "#FAF6EE", role: "Surface Canvas", name: "Warm Alabaster Linen", psychology: "Purity without sterility; provides breathable, sunlit negative space." },
        { hex: "#E9C46A", role: "Highlight Ember", name: "Morning Sun Gold", psychology: "Vitality and optimism; channels dappled light filtering through foliage." },
        { hex: "#1A3025", role: "Contrast Anchor", name: "Ancient Evergreen", psychology: "Unwavering stability; anchors typographic legibility with editorial depth." }
      ],
      colors: [
        { hex: "#2D5A46", role: "Primary Dominant", name: "Deep Forest Pine" },
        { hex: "#C27D53", role: "Secondary Accent", name: "Sun-Baked Terracotta" },
        { hex: "#FAF6EE", role: "Surface Canvas", name: "Warm Alabaster Linen" },
        { hex: "#E9C46A", role: "Highlight Ember", name: "Morning Sun Gold" },
        { hex: "#1A3025", role: "Contrast Anchor", name: "Ancient Evergreen" }
      ],
      paletteNarrative: "A restorative synthesis of deep forest grounding, sun-baked clay warmth, and luminous linen openness designed to evoke intentional sanctuary.",
      fonts: {
        heading: "Fraunces",
        headingWeight: "Bold 700",
        body: "Plus Jakarta Sans",
        bodyWeight: "Regular 400"
      },
      sampleHeadline: "Breathe room into the everyday.",
      sampleBody: "Designed for modern dwellers who seek refuge in tactile materials, natural circadian rhythms, and conscious stillness.",
      social: {
        handle: "komorebi.living",
        location: "Kyoto &bull; Studio Sanctuary",
        category: "New Collection &bull; SS26",
        caption: "Simplicity isn't the absence of clutter—it's the presence of intention. Our new collection of circadian vessels and raw clay lighting is now unveiled.",
        hashtags: "#KomorebiLiving #MindfulLiving #IntentionalDesign #BiophilicHome #QuietLuxury"
      }
    },

    hyperpop: {
      name: "HyperPop Studio",
      industry: "Gaming & Esports",
      audience: "Gen-Z visual creatives, rave culture archivists & irreverent digital natives",
      vibe: "bold-genz",
      tagline: "Turn reality all the way up.",
      headingFont: "Syne",
      bodyFont: "Space Grotesk",
      voiceTone: ["Hyper-Electric", "Irreverent", "Dopamine-Fueled"],
      tones: ["Hyper-Electric", "Irreverent", "Dopamine-Fueled"],
      svgIconPath: NICHE_24X24_ICONS.bolt,
      palette: [
        { hex: "#EC4899", role: "Primary Dominant", name: "Electric Magenta", psychology: "Audacious dopamine rush; commands instant, unapologetic visual gravity." },
        { hex: "#F97316", role: "Secondary Accent", name: "Hyper Tangerine", psychology: "Restless youthful momentum; sparks playful friction and high-voltage curiosity." },
        { hex: "#8B5CF6", role: "Electric Pop", name: "Cyber Violet", psychology: "Surreal digital fantasy; bridges IRL street culture with metaverse flair." },
        { hex: "#FACC15", role: "High-Beam Glow", name: "Solar Acid Yellow", psychology: "Hyper-energetic exclamation; drives instant button and sticker clickability." },
        { hex: "#18181B", role: "Obsidian Base", name: "Deep Licorice Noir", psychology: "Deep sub-bass contrast that makes hyper-saturated neon pigments pop." }
      ],
      colors: [
        { hex: "#EC4899", role: "Primary Dominant", name: "Electric Magenta" },
        { hex: "#F97316", role: "Secondary Accent", name: "Hyper Tangerine" },
        { hex: "#8B5CF6", role: "Electric Pop", name: "Cyber Violet" },
        { hex: "#FACC15", role: "High-Beam Glow", name: "Solar Acid Yellow" },
        { hex: "#18181B", role: "Obsidian Base", name: "Deep Licorice Noir" }
      ],
      paletteNarrative: "An unapologetic dopamine shock of electric magenta, hyper tangerine, and cyber violet engineered for high-engagement viral visibility.",
      fonts: {
        heading: "Syne",
        headingWeight: "ExtraBold 800",
        body: "Space Grotesk",
        bodyWeight: "Medium 500"
      },
      sampleHeadline: "Zero boredom. Pure visual velocity.",
      sampleBody: "Wearable artifacts and digital collectibles for people who refuse to fade into the background. Plug in, turn up, live loud.",
      social: {
        handle: "hyperpop.studio",
        location: "Neo-Seoul &bull; Digital Outpost",
        category: "Drop 04 &bull; Sold Out Fast",
        caption: "Why blend in when you were engineered to vibrate at 120Hz? The Drop 04 chromatic knitwear series is now live. Blink and you miss it.",
        hashtags: "#HyperPopStudio #GenZFashion #NeoBrutalism #DopamineDressing #InternetCulture"
      }
    },

    saintgermain: {
      name: "Maison Saint-Germain",
      industry: "Luxury Jewelry & Watches",
      audience: "Discerning luxury collectors, global aesthetes & modern minimalists",
      vibe: "minimalist-luxury",
      tagline: "Time, mastered with quiet precision.",
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      voiceTone: ["Archival", "Sovereign", "Discreet"],
      tones: ["Archival", "Sovereign", "Discreet"],
      svgIconPath: NICHE_24X24_ICONS.crown,
      palette: [
        { hex: "#B48A4E", role: "Primary Accent", name: "Champagne Bronze", psychology: "Refined heritage and understated luxury; evokes hand-polished brass and time-tested poise." },
        { hex: "#1C1917", role: "Primary Dominant", name: "Caviar Noir", psychology: "Absolute gravitas and uncompromising editorial discipline; the hallmark of classic prestige." },
        { hex: "#F7F5F0", role: "Surface Canvas", name: "Bone Ivory Silk", psychology: "Whisper-quiet elegance; creates an archival museum-like gallery atmosphere." },
        { hex: "#78716C", role: "Neutral Midtone", name: "Warm Truffle Stone", psychology: "Harmonious transitional balance; softens high contrast without sacrificing sharp clarity." },
        { hex: "#44403C", role: "Supporting Depth", name: "Smoked Espresso", psychology: "Rich artisanal depth; evokes patinated leather bindings and tailored evening suiting." }
      ],
      colors: [
        { hex: "#B48A4E", role: "Primary Accent", name: "Champagne Bronze" },
        { hex: "#1C1917", role: "Primary Dominant", name: "Caviar Noir" },
        { hex: "#F7F5F0", role: "Surface Canvas", name: "Bone Ivory Silk" },
        { hex: "#78716C", role: "Neutral Midtone", name: "Warm Truffle Stone" },
        { hex: "#44403C", role: "Supporting Depth", name: "Smoked Espresso" }
      ],
      paletteNarrative: "A disciplined architectural palette of champagne bronze, caviar noir, and bone ivory built on restraint, symmetry, and enduring prestige.",
      fonts: {
        heading: "Cinzel",
        headingWeight: "SemiBold 600",
        body: "Plus Jakarta Sans",
        bodyWeight: "Regular 400"
      },
      sampleHeadline: "Elegance is the art of leaving things unsaid.",
      sampleBody: "Hand-finished chronographs crafted in Geneva, paired with vegetal-tanned French calfskin. Created for generations, not seasons.",
      social: {
        handle: "maison.saintgermain",
        location: "Place Vendôme &bull; Paris",
        category: "Editions Limitées &bull; No. 08",
        caption: "True luxury never shouts. Every hand-beveled angle of the Tourbillon Chrono 08 tells a century-old story of Parisian horological mastery.",
        hashtags: "#MaisonSaintGermain #HauteHorlogerie #QuietLuxury #ParisianDesign #TimeMastered"
      }
    },

    aether: {
      name: "Aether Quantum",
      industry: "AI & Automation SaaS",
      audience: "Deep-tech researchers, AI system architects & frontier aerospace pioneers",
      vibe: "tech-futuristic",
      tagline: "Computing at the speed of thought.",
      headingFont: "Space Grotesk",
      bodyFont: "JetBrains Mono",
      voiceTone: ["Algorithmic", "Luminescent", "Frontier"],
      tones: ["Algorithmic", "Luminescent", "Frontier"],
      svgIconPath: NICHE_24X24_ICONS.node,
      palette: [
        { hex: "#2563EB", role: "Primary Dominant", name: "Quantum Cobalt", psychology: "Analytical authority and neural precision; evokes crystalline optical computing." },
        { hex: "#10B981", role: "Secondary Pulse", name: "Bio-Synthetic Mint", psychology: "Algorithmic vitality and next-generation green computing; signifies organic silicon convergence." },
        { hex: "#0F172A", role: "Deep Slate Matrix", name: "Deep Void Obsidian", psychology: "Infinite cosmos and cryptographic silence; serves as the command-line foundation." },
        { hex: "#38BDF8", role: "Telemetry Cyan", name: "Ion Beam Cyan", psychology: "Hyper-speed data transfer; provides luminous optical cues for interactive HUDs." },
        { hex: "#F8FAFC", role: "Clean Terminal", name: "Photon White", psychology: "Razor-sharp clarity; maximum legible contrast for high-density mission dashboards." }
      ],
      colors: [
        { hex: "#2563EB", role: "Primary Dominant", name: "Quantum Cobalt" },
        { hex: "#10B981", role: "Secondary Pulse", name: "Bio-Synthetic Mint" },
        { hex: "#0F172A", role: "Deep Slate Matrix", name: "Deep Void Obsidian" },
        { hex: "#38BDF8", role: "Telemetry Cyan", name: "Ion Beam Cyan" },
        { hex: "#F8FAFC", role: "Clean Terminal", name: "Photon White" }
      ],
      paletteNarrative: "A precision cyber-aesthetic balancing deep void obsidian, quantum cobalt, and bio-synthetic mint for frontier intelligence platforms.",
      fonts: {
        heading: "Space Grotesk",
        headingWeight: "Bold 700",
        body: "JetBrains Mono",
        bodyWeight: "Regular 400"
      },
      sampleHeadline: "Next-era intelligence, engineered at the photon level.",
      sampleBody: "Sub-millisecond neural compute architectures designed to power planetary-scale inference with zero thermodynamic waste.",
      social: {
        handle: "aether.quantum",
        location: "Palo Alto &bull; Quantum Labs",
        category: "Kernel Release &bull; v4.2",
        caption: "We broke the optical latency ceiling. The Aether-X photonic core benchmarked 10x throughput with 90% thermal efficiency. The frontier is open.",
        hashtags: "#AetherQuantum #DeepTech #NeuralArchitecture #FrontierAI #SiliconFuture"
      }
    },

    solstice: {
      name: "Solstice Roast Co.",
      industry: "Specialty Coffee & Chai Cafe",
      audience: "Craft beverage devotees, intentional morning ritualists & terroir explorers",
      vibe: "eco-organic",
      tagline: "Every bean tells an elevation story.",
      headingFont: "Fraunces",
      bodyFont: "Plus Jakarta Sans",
      voiceTone: ["Warm-Artisanal", "Direct-Terroir", "Sensory-Ritual"],
      tones: ["Warm-Artisanal", "Direct-Terroir", "Sensory-Ritual"],
      svgIconPath: NICHE_24X24_ICONS.coffee,
      palette: [
        { hex: "#D97706", role: "Primary Dominant", name: "Golden Amber Crema", psychology: "Warm radiance and sensory awakening; evokes roasted caramelization and morning sunlight." },
        { hex: "#78350F", role: "Secondary Accent", name: "Roasted Cacao Bean", psychology: "Deep artisanal terroir; grounds the sensory palate in small-batch craft authenticity." },
        { hex: "#FEF3C7", role: "Canvas Base", name: "Steamed Oat Cream", psychology: "Velvety comfort and sensory softness; provides an inviting, buttery background." },
        { hex: "#15803D", role: "Terroir Leaf", name: "High-Altitude Canopy", psychology: "Direct origin and regenerative agroforestry; honors shade-grown volcanic soils." },
        { hex: "#292524", role: "Cast Iron Base", name: "Hearth Charcoal", psychology: "Vintage roaster cast iron; ensures bold contrast and artisanal confidence." }
      ],
      colors: [
        { hex: "#D97706", role: "Primary Dominant", name: "Golden Amber Crema" },
        { hex: "#78350F", role: "Secondary Accent", name: "Roasted Cacao Bean" },
        { hex: "#FEF3C7", role: "Canvas Base", name: "Steamed Oat Cream" },
        { hex: "#15803D", role: "Terroir Leaf", name: "High-Altitude Canopy" },
        { hex: "#292524", role: "Cast Iron Base", name: "Hearth Charcoal" }
      ],
      paletteNarrative: "An artisanal symphony of roasted cacao, golden crema amber, and steamed oat foam celebrating mindful morning rituals and direct terroir origin.",
      fonts: {
        heading: "Fraunces",
        headingWeight: "SemiBold 600",
        body: "Plus Jakarta Sans",
        bodyWeight: "Regular 400"
      },
      sampleHeadline: "Honoring the journey from volcanic soil to cup.",
      sampleBody: "Direct-trade, high-altitude Bourbon variety sourced directly from micro-lots in Huila. Roasted slowly over cast iron drums.",
      social: {
        handle: "solstice.roasters",
        location: "Portland &bull; Roastery &amp; Lab",
        category: "Harvest Batch &bull; Huila 1900m",
        caption: "Drying on raised African beds at 1,900 meters elevation. Notes of candied orange zest, roasted hazelnut, and dark wild honey. Pour with care.",
        hashtags: "#SolsticeRoasters #SpecialtyCoffee #SingleOrigin #DirectTrade #PourOverCulture"
      }
    }
  };

  // =========================================================================
  // 3. Procedural Synthesis Database (For Offline / Demo Mode)
  // =========================================================================
  const PROCEDURAL_VIBE_KITS = {
    "minimalist-luxury": {
      palettes: [
        [
          { hex: "#B48A4E", role: "Primary Accent", name: "Gilded Bronze", psychology: "Understated prestige and architectural distinction." },
          { hex: "#1C1917", role: "Primary Dominant", name: "Charcoal Noir", psychology: "Editorial gravity and uncompromising discipline." },
          { hex: "#F5F3EF", role: "Surface Canvas", name: "Linen Alabaster", psychology: "Open, breathable negative space celebrating pure form." },
          { hex: "#78716C", role: "Muted Neutral", name: "Flint Truffle", psychology: "Sophisticated balance connecting light and shadow." },
          { hex: "#E7E5E4", role: "Border Line", name: "Warm Stone", psychology: "Hairline precision and quiet tactile craftsmanship." }
        ],
        [
          { hex: "#9A7B56", role: "Primary Accent", name: "Cognac Amber", psychology: "Patinated warmth evoking curated vintage heritage." },
          { hex: "#18181B", role: "Primary Dominant", name: "Obsidian Slate", psychology: "Classic Parisian monochrome with unyielding confidence." },
          { hex: "#FAFAF9", role: "Surface Canvas", name: "Silken Ivory", psychology: "Museum-grade serenity allowing product silhouettes to breathe." },
          { hex: "#57534E", role: "Midtone Depth", name: "Pebble Umber", psychology: "Quiet authority and tactile materiality." },
          { hex: "#D6D3D1", role: "Subtle Trim", name: "Polished Travertine", psychology: "Sculptural mineral calm inspired by classical facades." }
        ]
      ],
      fontPairings: [
        { heading: "Cinzel", headingWeight: "SemiBold 600", body: "Plus Jakarta Sans", bodyWeight: "Regular 400" },
        { heading: "Playfair Display", headingWeight: "Bold 700", body: "Inter", bodyWeight: "Regular 400" }
      ],
      taglinePatterns: [
        "The quiet discipline of enduring form.",
        "Refinement without excess.",
        "Where restraint becomes the ultimate statement.",
        "Designed to outlast every fleeting season."
      ],
      tonesPool: ["Archival", "Sovereign", "Discreet", "Editorial", "Statuesque", "Poised"],
      socialCategories: ["Private Salon", "Maison Heritage", "Couture Atelier", "Limited Archive"],
      locations: ["Paris &bull; Place Vendôme", "Milan &bull; Via Montenapoleone", "Zurich &bull; Studio", "Kyoto &bull; Gion"]
    },

    "bold-genz": {
      palettes: [
        [
          { hex: "#EC4899", role: "Primary Dominant", name: "Acid Fuchsia", psychology: "High-voltage dopamine shock demanding instant eyeballs." },
          { hex: "#F97316", role: "Secondary Spark", name: "Hyper Tangerine", psychology: "Irreverent kinetic energy and boundary-pushing vitality." },
          { hex: "#8B5CF6", role: "Electric Accent", name: "Cyber Violet", psychology: "Digital-native imagination spanning URL and IRL aesthetics." },
          { hex: "#FACC15", role: "Flash Highlight", name: "Solar Neon", psychology: "Hyper-optimistic accent that screams playfulness." },
          { hex: "#09090B", role: "Sub-Bass Base", name: "Pitch Void", psychology: "Deep contrast platform making saturated neon hues sing." }
        ],
        [
          { hex: "#06B6D4", role: "Primary Dominant", name: "Hyper Cyan", psychology: "Electric clarity and viral digital subculture spirit." },
          { hex: "#F43F5E", role: "Secondary Clash", name: "Laser Coral", psychology: "Unfiltered rebellious heat with streetwear attitude." },
          { hex: "#A855F7", role: "Deep Glow", name: "Ultraviolet Ray", psychology: "Hypnotic rave frequency and creator energy." },
          { hex: "#22C55E", role: "Toxic Mint", name: "Acid Sprite", psychology: "Unconventional, tongue-in-cheek refreshing shock." },
          { hex: "#18181B", role: "Contrast Anchor", name: "Midnight Licorice", psychology: "Solid anchor grounding playful asymmetrical chaos." }
        ]
      ],
      fontPairings: [
        { heading: "Syne", headingWeight: "ExtraBold 800", body: "Space Grotesk", bodyWeight: "Medium 500" },
        { heading: "Outfit", headingWeight: "Black 900", body: "Plus Jakarta Sans", bodyWeight: "SemiBold 600" }
      ],
      taglinePatterns: [
        "Unapologetic. Hyper-saturated. Always on.",
        "Zero filters. 100% frequency.",
        "Too loud to ignore. Too fun to stop.",
        "Engineered for the chronically curious."
      ],
      tonesPool: ["Electric", "Irreverent", "Dopamine-Infused", "Hyperspeed", "Fearless", "Iconoclastic"],
      socialCategories: ["Drop Series", "IRL Experiment", "Viral Archive", "Creator Prototype"],
      locations: ["Tokyo &bull; Shibuya", "London &bull; Hackney", "Berlin &bull; Kreuzberg", "Brooklyn &bull; Bushwick"]
    },

    "eco-organic": {
      palettes: [
        [
          { hex: "#2D5A46", role: "Primary Dominant", name: "Botanical Forest", psychology: "Grounding restorative calm; invokes circadian biophilic balance." },
          { hex: "#C27D53", role: "Secondary Accent", name: "Warm Terracotta", psychology: "Earthen tactile warmth; links to handmade clay and raw soil." },
          { hex: "#FAF6EE", role: "Surface Canvas", name: "Sunlit Alabaster", psychology: "Airy, wholesome spaciousness that lets ideas breathe." },
          { hex: "#E9C46A", role: "Highlight Ember", name: "Morning Sunbeam", psychology: "Natural optimism, photosynthetic vitality, and gentle warmth." },
          { hex: "#1A3025", role: "Contrast Depth", name: "Deep Spruce", psychology: "Rooted organic permanence ensuring pristine editorial clarity." }
        ],
        [
          { hex: "#3F6212", role: "Primary Dominant", name: "Olive Canopy", psychology: "Ancient agricultural heritage and restorative balance." },
          { hex: "#D97706", role: "Secondary Warmth", name: "Harvest Amber", psychology: "Nourishing warmth connecting to golden fields and dried herbs." },
          { hex: "#FEF3C7", role: "Soft Canvas", name: "Oat Silk", psychology: "Gentle comfort providing a breathable, restorative backdrop." },
          { hex: "#15803D", role: "Leaf Pulse", name: "Sage Biome", psychology: "Vibrant living soil and regenerative vitality." },
          { hex: "#1C1917", role: "Root Foundation", name: "Compost Umber", psychology: "Rich nutrient-dense foundation grounding typographic layouts." }
        ]
      ],
      fontPairings: [
        { heading: "Fraunces", headingWeight: "Bold 700", body: "Plus Jakarta Sans", bodyWeight: "Regular 400" },
        { heading: "DM Serif Display", headingWeight: "Regular 400", body: "DM Sans", bodyWeight: "Regular 400" }
      ],
      taglinePatterns: [
        "Rooted in intention, grown with care.",
        "Cultivating sanctuary in the everyday.",
        "Designed in harmony with natural rhythms.",
        "Conscious living, naturally crafted."
      ],
      tonesPool: ["Restorative", "Tactile", "Discerning", "Grounded", "Circadian", "Earthy"],
      socialCategories: ["Harvest Journal", "Living Rituals", "Botanical Archive", "Sanctuary Notes"],
      locations: ["Kyoto &bull; Arashiyama", "Portland &bull; Studio Lab", "Byron Bay &bull; Atelier", "Stockholm &bull; Studio"]
    },

    "tech-futuristic": {
      palettes: [
        [
          { hex: "#2563EB", role: "Primary Dominant", name: "Quantum Cobalt", psychology: "Analytical authority and neural precision." },
          { hex: "#10B981", role: "Secondary Pulse", name: "Bio-Synthetic Mint", psychology: "Algorithmic vitality and next-generation green silicon." },
          { hex: "#0F172A", role: "Deep Slate Matrix", name: "Deep Void Obsidian", psychology: "Cryptographic silence and infinite cosmos." },
          { hex: "#38BDF8", role: "Telemetry Cyan", name: "Ion Beam Cyan", psychology: "Hyper-speed data transfer and luminous optical cues." },
          { hex: "#F8FAFC", role: "Clean Terminal", name: "Photon White", psychology: "Razor-sharp clarity for high-density interfaces." }
        ],
        [
          { hex: "#6366F1", role: "Primary Dominant", name: "Cortex Indigo", psychology: "Cognitive depth and neural architecture authority." },
          { hex: "#06B6D4", role: "Telemetry Cyan", name: "Synapse Cyan", psychology: "High-throughput data velocity and optical telemetry." },
          { hex: "#030712", role: "Deep Matrix", name: "Null Void", psychology: "Infinite cryptographic depth making luminous UI tokens sing." },
          { hex: "#A855F7", role: "Laser Pulse", name: "Photon Violet", psychology: "Next-era quantum computing and speculative silicon." },
          { hex: "#F9FAFB", role: "Readout Canvas", name: "Clean Monolith", psychology: "Pristine terminal contrast for precision telemetry." }
        ]
      ],
      fontPairings: [
        { heading: "Space Grotesk", headingWeight: "Bold 700", body: "JetBrains Mono", bodyWeight: "Regular 400" },
        { heading: "Syne", headingWeight: "Bold 700", body: "Plus Jakarta Sans", bodyWeight: "Regular 400" }
      ],
      taglinePatterns: [
        "Computing at the speed of thought.",
        "Architecture for the next intelligence era.",
        "Frontier scale. Zero compromise.",
        "Autonomous intelligence, orchestrated."
      ],
      tonesPool: ["Algorithmic", "Luminescent", "Frontier", "Systemic", "Kinetic", "Cryptographic"],
      socialCategories: ["Kernel Dispatch", "Telemetry Feed", "Neural Research", "System Architecture"],
      locations: ["Palo Alto &bull; Quantum Labs", "Zurich &bull; Robotics Center", "Tokyo &bull; Cybernetics", "San Francisco &bull; AI HQ"]
    }
  };

  // =========================================================================
  // 4. LocalStorage Keys & State Management
  // =========================================================================
  const STORAGE_KEY_API = 'branddna_gemini_key';
  const STORAGE_KEY_PROJECTS = 'branddna_projects_history';
  const STORAGE_KEY_ACTIVE_SLUG = 'branddna_active_slug';

  const state = {
    apiKey: '',
    selectedVibe: 'eco-organic',
    currentBrand: null,
    isGenerating: false,
    isRewritingVoice: false,
    isGeneratingMoreIdeas: false,
    studioMode: 'scratch',
    uploadedLogoDataUrl: null,
    uploadedLogoFileName: '',
    isGeneratingExisting: false,
    isSuggestingNames: false,
    suggestedNames: [],
    taglineCount: 8,
    auditBgColor: '#2563EB',
    auditTextColor: '#FFFFFF',
    isLiked: false,
    likedCount: 1420,
    isSaved: false,
    activeModalTab: 'all',
    launchCalendar: [],
    instagramIdeas: []
  };

  // Cached DOM Elements
  const elements = {
    engineStatusBadge: document.getElementById('engine-status'),
    apiKeyInput: document.getElementById('api-key-input'),
    btnToggleKeyVisibility: document.getElementById('btn-toggle-key-visibility'),
    eyeIcon: document.getElementById('eye-icon'),
    btnClearKey: document.getElementById('btn-clear-key'),
    btnSampleBrand: document.getElementById('btn-sample-brand'),
    sampleDropdown: document.getElementById('sample-dropdown'),
    btnCopyCode: document.getElementById('btn-copy-code'),

    historyCountBadge: document.getElementById('history-count-badge'),
    btnNewBrand: document.getElementById('btn-new-brand'),
    historyList: document.getElementById('history-list'),

    brandForm: document.getElementById('brand-form'),
    inputBrandName: document.getElementById('input-brand-name'),
    btnSuggestNames: document.getElementById('btn-suggest-names'),
    suggestBtnText: document.getElementById('suggest-btn-text'),
    suggestSpinner: document.getElementById('suggest-spinner'),
    nameSuggestionsTray: document.getElementById('name-suggestions-tray'),
    btnRefreshNames: document.getElementById('btn-refresh-names'),
    refreshBtnText: document.getElementById('refresh-btn-text'),
    btnCloseTray: document.getElementById('btn-close-tray'),
    suggestedNamesList: document.getElementById('suggested-names-list'),
    industrySelect: document.getElementById('industry-select'),
    customNicheGroup: document.getElementById('custom-niche-group'),
    inputCustomNiche: document.getElementById('input-custom-niche'),
    inputAudience: document.getElementById('input-audience'),
    vibeCards: document.querySelectorAll('.vibe-card'),
    btnGenerate: document.getElementById('btn-generate'),
    btnGenerateText: document.getElementById('btn-generate-text'),
    generateSpinner: document.getElementById('generate-spinner'),
    generationSourceHint: document.getElementById('generation-source-hint'),

    brandHeroBar: document.getElementById('brand-hero-bar'),
    heroVibePill: document.getElementById('hero-vibe-pill'),
    heroBrandName: document.getElementById('hero-brand-name'),
    heroBrandSub: document.getElementById('hero-brand-sub'),
    btnCopyBrief: document.getElementById('btn-copy-brief'),

    logoConcept1Stage: document.getElementById('logo-concept-1-stage'),
    logoConcept2Stage: document.getElementById('logo-concept-2-stage'),
    logoConcept3Stage: document.getElementById('logo-concept-3-stage'),
    btnDownloadLogo1: document.getElementById('btn-download-logo-1'),
    btnCopyLogo1: document.getElementById('btn-copy-logo-1'),
    btnDownloadLogo2: document.getElementById('btn-download-logo-2'),
    btnCopyLogo2: document.getElementById('btn-copy-logo-2'),
    btnDownloadLogo3: document.getElementById('btn-download-logo-3'),
    btnCopyLogo3: document.getElementById('btn-copy-logo-3'),

    swatchesGrid: document.getElementById('swatches-grid'),
    paletteNarrative: document.getElementById('palette-narrative'),
    wcagAuditBadge: document.getElementById('wcag-audit-badge'),
    wcagRatioVal: document.getElementById('wcag-ratio-val'),
    wcagGradeVal: document.getElementById('wcag-grade-val'),
    wcagExplainer: document.getElementById('wcag-explainer'),
    wcagBgLabel: document.getElementById('wcag-bg-label'),
    wcagTextLabel: document.getElementById('wcag-text-label'),
    wcagSwatchPicker: document.getElementById('wcag-swatch-picker'),
    wcagToggleBtns: document.querySelectorAll('.wcag-toggle-btn'),

    fontHeadingName: document.getElementById('font-heading-name'),
    fontHeadingWeight: document.getElementById('font-heading-weight'),
    fontHeadingPreview: document.getElementById('font-heading-preview'),
    fontHeadingSample: document.getElementById('font-heading-sample'),
    fontBodyName: document.getElementById('font-body-name'),
    fontBodyWeight: document.getElementById('font-body-weight'),
    fontBodyPreview: document.getElementById('font-body-preview'),
    fontBodySample: document.getElementById('font-body-sample'),
    sampleHeadline: document.getElementById('sample-headline'),
    sampleBody: document.getElementById('sample-body'),
    toneTagsRow: document.getElementById('tone-tags-row'),
    punchyTaglineText: document.getElementById('punchy-tagline-text'),
    inputVoiceRewrite: document.getElementById('voiceInput'),
    btnRewriteVoice: document.getElementById('btn-rewrite-voice'),
    rewriteSpinner: document.getElementById('rewrite-spinner'),
    btnRewriteText: document.getElementById('btn-rewrite-text'),
    voiceOutputBadge: document.getElementById('voice-output-badge'),
    voiceTransformedText: document.getElementById('voice-transformed-text'),
    btnCopyRewritten: document.getElementById('btn-copy-rewritten'),
    voiceChipBtns: document.querySelectorAll('.voice-chip-btn'),

    igAvatar: document.getElementById('ig-avatar'),
    igHandle: document.getElementById('ig-handle'),
    igLocation: document.getElementById('ig-location'),
    igMediaCanvas: document.getElementById('ig-media-canvas'),
    igCategoryTag: document.getElementById('ig-category-tag'),
    igPostHeadline: document.getElementById('ig-post-headline'),
    igPostSubtext: document.getElementById('ig-post-subtext'),
    igPostPill: document.getElementById('ig-post-pill'),
    igWatermark: document.getElementById('ig-watermark'),
    btnIgHeart: document.getElementById('btn-ig-heart'),
    btnIgBookmark: document.getElementById('btn-ig-bookmark'),
    igLikesNumber: document.getElementById('ig-likes-number'),
    igCaptionHandle: document.getElementById('ig-caption-handle'),
    igCaptionText: document.getElementById('ig-caption-text'),
    igHashtags: document.getElementById('ig-hashtags'),
    btnCopyCaption: document.getElementById('btn-copy-caption'),

    calendarProgressLabel: document.getElementById('calendar-progress-label'),
    calendarProgressBar: document.getElementById('calendar-progress-bar'),
    btnResetCalendar: document.getElementById('btn-reset-calendar'),
    launchCalendarGrid: document.getElementById('launch-calendar-grid'),

    ideasCountBadge: document.getElementById('ideas-count-badge'),
    ideasCardsGrid: document.getElementById('ideas-cards-grid'),
    btnGenerateMoreIdeas: document.getElementById('btn-generate-more-ideas'),
    btnGenerateMoreText: document.getElementById('btn-generate-more-text'),
    moreIdeasSpinner: document.getElementById('more-ideas-spinner'),

    devCodeModal: document.getElementById('dev-code-modal'),
    btnCloseDevModal: document.getElementById('btn-close-dev-modal'),
    devCodeSnippet: document.getElementById('dev-code-snippet'),
    modalTabBtns: document.querySelectorAll('.modal-tab-btn'),
    btnCopyModalCode: document.getElementById('btn-copy-modal-code'),

    toastContainer: document.getElementById('toast-container'),

    // Dual Mode Elements
    btnTabScratch: document.getElementById('btn-tab-scratch'),
    btnTabExisting: document.getElementById('btn-tab-existing'),
    panelScratch: document.getElementById('panel-scratch'),
    panelExisting: document.getElementById('panel-existing'),
    inputExistingName: document.getElementById('input-existing-name'),
    existingIndustrySelect: document.getElementById('existing-industry-select'),
    inputExistingDesc: document.getElementById('input-existing-desc'),
    btnPresetCobaltPalette: document.getElementById('btn-preset-cobalt-palette'),
    inputExistingLogo: document.getElementById('input-existing-logo'),
    logoUploadDropzone: document.getElementById('logo-upload-dropzone'),
    dropzonePrompt: document.getElementById('dropzone-prompt'),
    logoPreviewBox: document.getElementById('logo-preview-box'),
    logoPreviewImg: document.getElementById('logo-preview-img'),
    logoFileDetails: document.getElementById('logo-file-details'),
    btnRemoveLogo: document.getElementById('btn-remove-logo'),
    btnGenerateExisting: document.getElementById('btn-generate-existing'),
    existingSpinner: document.getElementById('existing-spinner'),
    btnGenerateExistingText: document.getElementById('btn-generate-existing-text'),

    // Bento Card 7: Social Campaign Templates & Tagline Vault
    cardCampaigns: document.getElementById('card-campaigns'),
    campaignVaultMeta: document.getElementById('campaign-vault-meta'),

    // Template 1: Launch Banner
    campaignCardLaunch: document.getElementById('campaign-card-launch'),
    campaignLaunchLogo: document.getElementById('campaign-launch-logo'),
    campaignLaunchKicker: document.getElementById('campaign-launch-kicker'),
    campaignLaunchHeadline: document.getElementById('campaign-launch-headline'),
    campaignLaunchSubtext: document.getElementById('campaign-launch-subtext'),
    campaignLaunchCta: document.getElementById('campaign-launch-cta'),
    btnCopyLaunchCopy: document.getElementById('btn-copy-launch-copy'),
    btnDownloadLaunchPng: document.getElementById('btn-download-launch-png'),

    // Template 2: Flash Drop Story
    campaignCardDrop: document.getElementById('campaign-card-drop'),
    campaignDropLogo: document.getElementById('campaign-drop-logo'),
    campaignDropBadge: document.getElementById('campaign-drop-badge'),
    campaignDropOffer: document.getElementById('campaign-drop-offer'),
    campaignDropHook: document.getElementById('campaign-drop-hook'),
    campaignDropCode: document.getElementById('campaign-drop-code'),
    btnCopyDropCopy: document.getElementById('btn-copy-drop-copy'),
    btnDownloadDropPng: document.getElementById('btn-download-drop-png'),

    // Template 3: Editorial Testimonial
    campaignCardTest: document.getElementById('campaign-card-testimonial'),
    campaignTestLogo: document.getElementById('campaign-test-logo'),
    campaignTestBadge: document.getElementById('campaign-test-badge'),
    campaignTestRating: document.getElementById('campaign-test-rating'),
    campaignTestQuote: document.getElementById('campaign-test-quote'),
    campaignTestAuthor: document.getElementById('campaign-test-author'),
    campaignTestTitle: document.getElementById('campaign-test-title'),
    btnCopyTestCopy: document.getElementById('btn-copy-test-copy'),
    btnDownloadTestPng: document.getElementById('btn-download-test-png'),

    // Template 4: Founder Story
    campaignCardFounder: document.getElementById('campaign-card-founder'),
    campaignFounderLogo: document.getElementById('campaign-founder-logo'),
    campaignFounderBadge: document.getElementById('campaign-founder-badge'),
    campaignFounderChapter: document.getElementById('campaign-founder-chapter'),
    campaignFounderHeadline: document.getElementById('campaign-founder-headline'),
    campaignFounderSubtext: document.getElementById('campaign-founder-subtext'),
    campaignFounderAuthor: document.getElementById('campaign-founder-author'),
    btnCopyFounderCopy: document.getElementById('btn-copy-founder-copy'),
    btnDownloadFounderPng: document.getElementById('btn-download-founder-png'),

    // Template 5: Infographic
    campaignCardInfo: document.getElementById('campaign-card-infographic'),
    campaignInfoLogo: document.getElementById('campaign-info-logo'),
    campaignInfoBadge: document.getElementById('campaign-info-badge'),
    campaignInfoHeadline: document.getElementById('campaign-info-headline'),
    campaignInfoPoint1: document.getElementById('campaign-info-point1'),
    campaignInfoPoint2: document.getElementById('campaign-info-point2'),
    campaignInfoPoint3: document.getElementById('campaign-info-point3'),
    campaignInfoFooterText: document.getElementById('campaign-info-footer-text'),
    btnCopyInfoCopy: document.getElementById('btn-copy-info-copy'),
    btnDownloadInfoPng: document.getElementById('btn-download-info-png'),

    // Template 6: Countdown
    campaignCardCountdown: document.getElementById('campaign-card-countdown'),
    campaignCountdownLogo: document.getElementById('campaign-countdown-logo'),
    campaignCountdownBadge: document.getElementById('campaign-countdown-badge'),
    campaignCountdownTimer: document.getElementById('campaign-countdown-timer'),
    campaignCountdownHeadline: document.getElementById('campaign-countdown-headline'),
    campaignCountdownSubtext: document.getElementById('campaign-countdown-subtext'),
    campaignCountdownCta: document.getElementById('campaign-countdown-cta'),
    btnCopyCountdownCopy: document.getElementById('btn-copy-countdown-copy'),
    btnDownloadCountdownPng: document.getElementById('btn-download-countdown-png'),

    // Tagline Vault
    taglinesCountBadge: document.getElementById('taglines-count-badge'),
    btnGenerateMoreTaglines: document.getElementById('btn-generate-more-taglines'),
    moreTaglinesSpinner: document.getElementById('more-taglines-spinner'),
    btnMoreTaglinesText: document.getElementById('btn-more-taglines-text'),
    taglineVaultGrid: document.getElementById('tagline-vault-grid'),
    taglineTextBold: document.getElementById('tagline-text-bold'),
    btnCopyTaglineBold: document.getElementById('btn-copy-tagline-bold'),
    taglineTextMinimal: document.getElementById('tagline-text-minimal'),
    btnCopyTaglineMinimal: document.getElementById('btn-copy-tagline-minimal'),
    taglineTextEmotional: document.getElementById('tagline-text-emotional'),
    btnCopyTaglineEmotional: document.getElementById('btn-copy-tagline-emotional'),
    taglineTextPlayful: document.getElementById('tagline-text-playful'),
    btnCopyTaglinePlayful: document.getElementById('btn-copy-tagline-playful'),
    taglineTextBenefit: document.getElementById('tagline-text-benefit'),
    btnCopyTaglineBenefit: document.getElementById('btn-copy-tagline-benefit'),
    taglineTextRebel: document.getElementById('tagline-text-rebel'),
    btnCopyTaglineRebel: document.getElementById('btn-copy-tagline-rebel'),
    taglineTextHeritage: document.getElementById('tagline-text-heritage'),
    btnCopyTaglineHeritage: document.getElementById('btn-copy-tagline-heritage'),
    taglineTextPoetic: document.getElementById('tagline-text-poetic'),
    btnCopyTaglinePoetic: document.getElementById('btn-copy-tagline-poetic')
  };

  // =========================================================================
  // 5. Toast Notifications & Utility Helpers
  // =========================================================================
  function showToast(message, type = 'success', duration = 3000) {
    if (!elements.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
    } else {
      iconSvg = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    }

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-message">${message}</div>
    `;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards';
      setTimeout(() => toast.remove(), 260);
    }, duration);
  }

  function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage, 'success');
      }).catch(() => fallbackCopy(text, successMessage));
    } else {
      fallbackCopy(text, successMessage);
    }
  }

  function fallbackCopy(text, successMessage) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(successMessage, 'success');
    } catch (e) {
      showToast('Failed to copy', 'warning');
    }
    document.body.removeChild(ta);
  }

  function downloadFile(filename, content, mimeType = 'text/plain') {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function sanitizeHandle(name) {
    if (!name) return 'brand';
    return name.toLowerCase().replace(/[^a-z0-9]/g, '.').replace(/\.+/g, '.').replace(/^\.|\.$/g, '');
  }

  function getInitials(name) {
    if (!name) return "BD";
    const parts = name.trim().split(/[\s-_]+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }

  function cleanFontName(fontStr) {
    if (!fontStr) return 'Plus Jakarta Sans';
    return fontStr.split(',')[0].replace(/['"]/g, '').trim();
  }

  // =========================================================================
  // 6. Dynamic Google Fonts Loader
  // =========================================================================
  const loadedFonts = new Set(['Plus Jakarta Sans', 'Fraunces', 'Cinzel', 'Syne', 'Space Grotesk', 'JetBrains Mono']);

  function loadGoogleFontPairing(rawHeadingFont, rawBodyFont) {
    const headingFont = cleanFontName(rawHeadingFont);
    const bodyFont = cleanFontName(rawBodyFont);

    const fontsToLoad = [];
    if (headingFont && !loadedFonts.has(headingFont)) {
      fontsToLoad.push(headingFont);
      loadedFonts.add(headingFont);
    }
    if (bodyFont && bodyFont !== headingFont && !loadedFonts.has(bodyFont)) {
      fontsToLoad.push(bodyFont);
      loadedFonts.add(bodyFont);
    }

    if (fontsToLoad.length > 0) {
      const familyParams = fontsToLoad
        .map(f => `family=${encodeURIComponent(f)}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400`)
        .join('&');

      let link = document.getElementById('dynamic-google-fonts');
      if (!link) {
        link = document.createElement('link');
        link.id = 'dynamic-google-fonts';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
      link.href = `https://fonts.googleapis.com/css2?${familyParams}&display=swap`;
    }

    const root = document.documentElement;
    if (headingFont) {
      root.style.setProperty('--dynamic-heading-font', `'${headingFont}', Georgia, serif`);
    }
    if (bodyFont) {
      root.style.setProperty('--dynamic-body-font', `'${bodyFont}', -apple-system, sans-serif`);
    }
  }

  // =========================================================================
  // 7. 3-Concept Vector SVG Logo Studio (viewBox 0 0 240 120)
  // =========================================================================
  function createStandaloneSvgMarkup(innerSvgContent, headingFont, bodyFont) {
    const cleanHeading = cleanFontName(headingFont);
    const cleanBody = cleanFontName(bodyFont);
    const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${encodeURIComponent(cleanHeading)}:wght@600;700;800&family=${encodeURIComponent(cleanBody)}:wght@400;500;600&display=swap');`;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" width="240" height="120">
  <defs>
    <style>
      ${fontImport}
      .brand-heading-text { font-family: '${cleanHeading}', Georgia, serif; font-weight: 700; }
      .brand-body-text { font-family: '${cleanBody}', sans-serif; font-weight: 500; }
    </style>
  </defs>
  ${innerSvgContent}
</svg>`.trim();
  }

  function generateThreeLogoConcepts(brand) {
    const name = brand.name || "BrandDNA";
    const initials = getInitials(name);
    const colors = brand.palette || brand.colors || [];
    const p1 = colors[0]?.hex || '#2D5A46';
    const p2 = colors[1]?.hex || '#C27D53';
    const p3 = colors[2]?.hex || '#FAF6EE';
    const p4 = colors[3]?.hex || '#E9C46A';
    const darkColor = colors[4]?.hex || '#1C1917';

    const heading = cleanFontName(brand.headingFont || brand.fonts?.heading);
    const body = cleanFontName(brand.bodyFont || brand.fonts?.body);

    // Clean 24x24 SVG Path
    let rawPath = brand.svgIconPath || getNiche24x24IconPath(brand.industry, brand.vibe);
    rawPath = String(rawPath)
      .replace(/^<path[^>]*d=["']/i, '')
      .replace(/["'][^>]*\/?>(<\/path>)?$/i, '')
      .trim();

    const displayName = name.length > 15 ? name.slice(0, 14) + '…' : name;
    const subSnippet = (brand.tagline || brand.industry || 'STUDIO EDITION').toUpperCase().slice(0, 24);

    // Concept 1: Icon + Wordmark Lockup
    const concept1Inner = `
  <!-- Concept 1: Icon + Wordmark Lockup -->
  <rect width="240" height="120" rx="12" fill="#FFFFFF"/>
  <rect x="1" y="1" width="238" height="118" rx="11" fill="none" stroke="#E7E5E4" stroke-width="1"/>
  
  <!-- Icon Emblem Stage -->
  <g transform="translate(18, 22)">
    <rect width="66" height="74" rx="12" fill="${p3}" stroke="${p1}" stroke-opacity="0.25" stroke-width="1.2"/>
    <g transform="translate(33, 37) translate(-18, -18) scale(1.5)">
      <path d="${rawPath}" fill="${p1}" fill-opacity="0.14" stroke="${p1}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>

  <!-- Wordmark Lockup -->
  <g transform="translate(96, 42)">
    <text x="0" y="16" class="brand-heading-text" font-family="'${heading}', Georgia, serif" font-weight="700" font-size="18" fill="${darkColor}" letter-spacing="-0.3">${displayName}</text>
    <text x="0" y="34" class="brand-body-text" font-family="'${body}', sans-serif" font-weight="600" font-size="7" fill="${p2}" letter-spacing="2">${subSnippet}</text>
    <line x1="0" y1="44" x2="68" y2="44" stroke="${p4}" stroke-width="1.5" stroke-linecap="round"/>
  </g>
`.trim();

    // Concept 2: Monogram Crest
    const concept2Inner = `
  <!-- Concept 2: Monogram Crest -->
  <rect width="240" height="120" rx="12" fill="#FFFFFF"/>
  <rect x="1" y="1" width="238" height="118" rx="11" fill="none" stroke="#E7E5E4" stroke-width="1"/>

  <!-- Center Crest Shield -->
  <g transform="translate(120, 48)">
    <polygon points="0,-32 26,-18 26,14 0,32 -26,14 -26,-18" fill="${p3}" stroke="${p1}" stroke-width="1.8"/>
    <polygon points="0,-24 19,-13 19,10 0,23 -19,10 -19,-13" fill="none" stroke="${p2}" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="0" y="8" class="brand-heading-text" font-family="'${heading}', Georgia, serif" font-weight="700" font-size="20" fill="${darkColor}" text-anchor="middle" letter-spacing="2">${initials}</text>
    <circle cx="0" cy="-16" r="2.2" fill="${p4}"/>
  </g>

  <!-- Wordmark below Crest -->
  <g transform="translate(120, 95)">
    <text x="0" y="6" class="brand-heading-text" font-family="'${heading}', Georgia, serif" font-weight="700" font-size="12" fill="${darkColor}" text-anchor="middle" letter-spacing="2.5">${displayName.toUpperCase()}</text>
    <text x="0" y="17" class="brand-body-text" font-family="'${body}', sans-serif" font-weight="600" font-size="6" fill="${p2}" text-anchor="middle" letter-spacing="3.5">EST. 2026 &bull; IDENTITY MARK</text>
  </g>
`.trim();

    // Concept 3: Minimalist Dark-Card Variant
    const concept3Inner = `
  <!-- Concept 3: Minimalist Dark-Card Variant -->
  <rect width="240" height="120" rx="12" fill="${darkColor}"/>
  <rect x="1" y="1" width="238" height="118" rx="11" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  
  <circle cx="210" cy="20" r="70" fill="${p1}" opacity="0.25"/>

  <g transform="translate(24, 26)">
    <circle cx="34" cy="34" r="30" fill="none" stroke="${p4}" stroke-width="1.8"/>
    <circle cx="34" cy="34" r="24" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-dasharray="3 3"/>
    <g transform="translate(34, 34) translate(-14, -14) scale(1.15)">
      <path d="${rawPath}" fill="${p4}" fill-opacity="0.2" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>

  <g transform="translate(100, 44)">
    <text x="0" y="14" class="brand-heading-text" font-family="'${heading}', sans-serif" font-weight="700" font-size="18" fill="#FFFFFF" letter-spacing="-0.2">${displayName}</text>
    <text x="0" y="32" class="brand-body-text" font-family="'${body}', sans-serif" font-weight="600" font-size="7.5" fill="${p4}" letter-spacing="2">${subSnippet}</text>
    <g transform="translate(0, 42)">
      <circle cx="4" cy="0" r="2.2" fill="${p2}"/>
      <circle cx="13" cy="0" r="2.2" fill="${p1}"/>
      <circle cx="22" cy="0" r="2.2" fill="${p4}"/>
    </g>
  </g>
`.trim();

    return {
      concept1: createStandaloneSvgMarkup(concept1Inner, heading, body),
      concept2: createStandaloneSvgMarkup(concept2Inner, heading, body),
      concept3: createStandaloneSvgMarkup(concept3Inner, heading, body)
    };
  }

  function renderThreeLogoStudio(brand) {
    const logos = generateThreeLogoConcepts(brand);

    if (elements.logoConcept1Stage) {
      if (brand.customLogoUrl) {
        elements.logoConcept1Stage.innerHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; width:100%; height:100%; padding:10px;">
            <span style="font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; background:#EFF6FF; color:#2563EB; padding:3px 8px; border-radius:9999px;">✓ Active Uploaded Logo</span>
            <img src="${brand.customLogoUrl}" alt="${brand.name}" style="max-height:85px; max-width:85%; object-fit:contain;">
          </div>
        `;
      } else {
        elements.logoConcept1Stage.innerHTML = logos.concept1;
      }
    }
    if (elements.logoConcept2Stage) elements.logoConcept2Stage.innerHTML = logos.concept2;
    if (elements.logoConcept3Stage) elements.logoConcept3Stage.innerHTML = logos.concept3;

    const brandSlug = sanitizeHandle(brand.name);

    if (elements.btnDownloadLogo1) {
      elements.btnDownloadLogo1.onclick = () => {
        if (brand.customLogoUrl) {
          const a = document.createElement('a');
          a.href = brand.customLogoUrl;
          a.download = `${brandSlug}-active-logo`;
          a.click();
          showToast('Downloaded active logo asset!', 'success');
        } else {
          downloadFile(`${brandSlug}-logo-concept1.svg`, logos.concept1, 'image/svg+xml');
          showToast('Downloaded Concept 1 SVG!', 'success');
        }
      };
    }
    if (elements.btnCopyLogo1) {
      elements.btnCopyLogo1.onclick = () => {
        copyToClipboard(logos.concept1, 'Concept 1 SVG code copied!');
      };
    }

    if (elements.btnDownloadLogo2) {
      elements.btnDownloadLogo2.onclick = () => {
        downloadFile(`${brandSlug}-logo-concept2.svg`, logos.concept2, 'image/svg+xml');
        showToast('Downloaded Concept 2 SVG!', 'success');
      };
    }
    if (elements.btnCopyLogo2) {
      elements.btnCopyLogo2.onclick = () => {
        copyToClipboard(logos.concept2, 'Concept 2 SVG code copied!');
      };
    }

    if (elements.btnDownloadLogo3) {
      elements.btnDownloadLogo3.onclick = () => {
        downloadFile(`${brandSlug}-logo-concept3.svg`, logos.concept3, 'image/svg+xml');
        showToast('Downloaded Concept 3 SVG!', 'success');
      };
    }
    if (elements.btnCopyLogo3) {
      elements.btnCopyLogo3.onclick = () => {
        copyToClipboard(logos.concept3, 'Concept 3 SVG code copied!');
      };
    }
  }

  // =========================================================================
  // 8. WCAG 2.1 Luminance & Contrast Ratio Engine
  // =========================================================================
  function hexToRgb(hex) {
    if (!hex) return [0, 0, 0];
    let c = hex.replace('#', '').trim();
    if (c.length === 3) {
      c = c.split('').map(x => x + x).join('');
    }
    const num = parseInt(c, 16);
    if (isNaN(num)) return [0, 0, 0];
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }

  function getRelativeLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(val => {
      const s = val / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  function calculateContrastRatio(hex1, hex2) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    const lum1 = getRelativeLuminance(...rgb1);
    const lum2 = getRelativeLuminance(...rgb2);
    const brighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    return (brighter + 0.05) / (darker + 0.05);
  }

  function updateWcagAudit(bgColor, textColor) {
    state.auditBgColor = bgColor;
    state.auditTextColor = textColor;

    const ratio = calculateContrastRatio(bgColor, textColor);
    const ratioFormatted = ratio.toFixed(1) + ':1';

    if (elements.wcagRatioVal) elements.wcagRatioVal.textContent = ratioFormatted;
    if (elements.wcagBgLabel) elements.wcagBgLabel.textContent = bgColor.toUpperCase();
    if (elements.wcagTextLabel) elements.wcagTextLabel.textContent = textColor.toUpperCase();

    let grade = 'AAA Pass';
    let badgeClass = 'wcag-audit-badge pass-aaa';
    let desc = `WCAG 2.1 AAA Compliant (${ratioFormatted}). Exceeds highest accessibility standards for all text sizes.`;

    if (ratio >= 7.0) {
      grade = 'AAA Pass';
      badgeClass = 'wcag-audit-badge pass-aaa';
    } else if (ratio >= 4.5) {
      grade = 'AA Pass';
      badgeClass = 'wcag-audit-badge pass-aa';
      desc = `WCAG 2.1 AA Compliant (${ratioFormatted}). Pristine readability for standard body copy.`;
    } else if (ratio >= 3.0) {
      grade = 'AA Large';
      badgeClass = 'wcag-audit-badge pass-aa-large';
      desc = `WCAG 2.1 AA Large Only (${ratioFormatted}). Recommended for large headings and UI icons.`;
    } else {
      grade = 'Low Contrast';
      badgeClass = 'wcag-audit-badge pass-fail';
      desc = `Low Contrast Warning (${ratioFormatted}). Below minimum WCAG standards. Consider switching to ${textColor === '#FFFFFF' ? 'Charcoal' : 'White'} text.`;
    }

    if (elements.wcagGradeVal) elements.wcagGradeVal.textContent = grade;
    if (elements.wcagAuditBadge) elements.wcagAuditBadge.className = badgeClass;
    if (elements.wcagExplainer) elements.wcagExplainer.textContent = desc;

    if (elements.igMediaCanvas) {
      elements.igMediaCanvas.style.backgroundColor = bgColor;
      elements.igMediaCanvas.style.color = textColor;
    }
  }

  function renderWcagSwatches(palette) {
    if (!elements.wcagSwatchPicker) return;
    elements.wcagSwatchPicker.innerHTML = '';

    palette.forEach((swatch, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `wcag-mini-swatch ${idx === 0 ? 'active' : ''}`;
      dot.style.backgroundColor = swatch.hex;
      dot.setAttribute('title', `Audit ${swatch.name} (${swatch.hex})`);

      dot.addEventListener('click', () => {
        elements.wcagSwatchPicker.querySelectorAll('.wcag-mini-swatch').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        updateWcagAudit(swatch.hex, state.auditTextColor);
      });

      elements.wcagSwatchPicker.appendChild(dot);
    });
  }

  // =========================================================================
  // 9. Brand Voice Rewriter Engine
  // =========================================================================
  function proceduralVoiceRewrite(inputText, brand) {
    const text = (inputText || '').trim();
    if (!text) return "Please paste or type a sentence to transform.";

    const vibe = brand?.vibe || 'eco-organic';
    const tones = brand?.voiceTone || brand?.tones || ['Intentional', 'Aesthetic'];
    const lower = text.toLowerCase();

    if (lower.includes('coffee') && (lower.includes('good') || lower.includes('sell') || lower.includes('best') || lower.includes('our'))) {
      if (vibe === 'eco-organic') {
        return "Slow-roasted single-origin harvests honoring volcanic terroir, smallholder agroforestry, and morning stillness.";
      } else if (vibe === 'minimalist-luxury') {
        return "Artisanal single-origin extractions, meticulously calibrated for discerning palates and quiet morning contemplation.";
      } else if (vibe === 'bold-genz') {
        return "High-voltage caffeine drops engineered to overclock your creative dopamine. Zero bitter notes, pure speed.";
      } else {
        return "Sub-millisecond cognitive fuel, molecularly roasted for peak neural throughput and zero thermodynamic latency.";
      }
    }

    if (lower.includes('app') || lower.includes('mobile') || lower.includes('download')) {
      if (vibe === 'eco-organic') {
        return "Step into a gentler digital sanctuary. Our mobile experience is curated for mindful presence and calm focus.";
      } else if (vibe === 'minimalist-luxury') {
        return "Enter the private digital salon. A minimalist interface curated exclusively for patrons of enduring craft.";
      } else if (vibe === 'bold-genz') {
        return "Your pocket portal to zero boredom. Tap in, turn up, and unlock exclusive community drops instantly.";
      } else {
        return "Initialize the neural telemetry client. Seamless edge compute and autonomous intelligence at your fingertips.";
      }
    }

    if (lower.includes('clothes') || lower.includes('fashion') || lower.includes('sustainable') || lower.includes('wear')) {
      if (vibe === 'eco-organic') {
        return "Tactile natural fibers harvested in harmony with living soils, tailored with quiet architectural reverence.";
      } else if (vibe === 'minimalist-luxury') {
        return "Archival silhouettes sculpted from noble regenerative textiles. Created for generations, never for fleeting seasons.";
      } else if (vibe === 'bold-genz') {
        return "Main-character silhouettes with zero planetary guilt. Sustainable drip that hits different from every angle.";
      } else {
        return "Bio-synthetic vector garments engineered with quantum-weave durability and closed-loop thermal regulation.";
      }
    }

    if (lower.includes('delivery') || lower.includes('door') || lower.includes('fast') || lower.includes('shipping')) {
      if (vibe === 'eco-organic') {
        return "Carefully enveloped in compostable plant fibers, journeying with quiet intention directly to your sanctuary.";
      } else if (vibe === 'minimalist-luxury') {
        return "Discreet white-glove arrival, preserved in archival tissue and delivered directly to your private residence.";
      } else if (vibe === 'bold-genz') {
        return "Hyper-speed logistics straight to your doorstep before the hype even cools down. Blink and it’s there.";
      } else {
        return "Autonomous low-latency dispatch routing your payload with sub-millisecond telemetry precision.";
      }
    }

    const cleanText = text.replace(/^[“"']|[”"']$/g, '').replace(/\.$/, '');
    if (vibe === 'minimalist-luxury') {
      return `“${cleanText}—refined through the lens of ${tones[0]?.toLowerCase() || 'archival'} restraint and uncompromising material poise.”`;
    } else if (vibe === 'bold-genz') {
      return `“Why play it safe? ${cleanText}—hyper-amplified with pure ${tones[0]?.toLowerCase() || 'electric'} dopamine!”`;
    } else if (vibe === 'tech-futuristic') {
      return `“${cleanText}—optimized at the system layer for ${tones[0]?.toLowerCase() || 'frontier'} scale and quantum velocity.”`;
    } else {
      return `“Rooted in ${tones[0]?.toLowerCase() || 'restorative'} intention: ${cleanText}, cultivated with gentle care for everyday sanctuary.”`;
    }
  }

  async function rewriteWithGemini(inputText, brand) {
    const tones = (brand.voiceTone || brand.tones || ['Authentic', 'Creative']).join(', ');
    const promptText = `
You are the Executive Brand Director and Tone Guardrail Architect for "${brand.name}".
Brand Archetype / Vibe: ${brand.vibe}
Industry: ${brand.industry}
Target Audience: ${brand.audience}
Brand Tagline: "${brand.tagline}"
Brand Tone: ${tones}

Rewrite the following generic sentence into this brand's exact vocabulary, emotional resonance, and distinct style:
"${inputText}"

Guidelines:
- Embody the brand's exact tone: ${tones}
- Keep it punchy, evocative, and culturally fluent (1-2 sentences).
- Output ONLY a JSON object with this format:
{
  "rewritten": "The rewritten sentence here."
}
`.trim();

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json"
      }
    };

    const data = await callGeminiEndpoint(payload);
    const parsed = extractJsonFromGeminiResponse(data);
    if (parsed && parsed.rewritten) {
      return parsed.rewritten.trim().replace(/^["']|["']$/g, '');
    }
    throw new Error('Invalid response structure from Gemini Voice API');
  }

  async function handleVoiceRewrite() {
    if (!state.currentBrand || state.isRewritingVoice) return;

    const inputSentence = elements.inputVoiceRewrite.value.trim();
    if (!inputSentence) {
      showToast('Please enter a sentence to rewrite', 'warning');
      elements.inputVoiceRewrite.focus();
      return;
    }

    state.isRewritingVoice = true;
    elements.btnRewriteVoice.disabled = true;
    elements.rewriteSpinner.classList.remove('hidden');
    elements.btnRewriteText.textContent = "Rewriting...";

    try {
      let rewrittenText = '';

      try {
        rewrittenText = await rewriteWithGemini(inputSentence, state.currentBrand);
        const topTone = (state.currentBrand.voiceTone || state.currentBrand.tones || ['Active'])[0];
        elements.voiceOutputBadge.textContent = `Tone: ${topTone} (Gemini AI)`;
        showToast('Rewritten in brand voice via Gemini AI!', 'success');
      } catch (apiErr) {
        console.warn('Gemini voice rewrite failed, engaging procedural guardrail:', apiErr);
        rewrittenText = proceduralVoiceRewrite(inputSentence, state.currentBrand);
        const topTone = (state.currentBrand.voiceTone || state.currentBrand.tones || ['Active'])[0];
        elements.voiceOutputBadge.textContent = `Tone: ${topTone} (Procedural Guardrail)`;
        showToast('Rewritten with Smart Brand Voice Guardrail', 'info');
      }

      if (!rewrittenText) {
        rewrittenText = proceduralVoiceRewrite(inputSentence, state.currentBrand);
      }

      elements.voiceTransformedText.textContent = rewrittenText;
      saveActiveProjectToStorage();
    } catch (err) {
      console.error('Voice rewrite error:', err);
      showToast('Could not rewrite sentence. Please try again.', 'warning');
    } finally {
      state.isRewritingVoice = false;
      elements.btnRewriteVoice.disabled = false;
      elements.rewriteSpinner.classList.add('hidden');
      elements.btnRewriteText.textContent = "Rewrite in Brand Voice";
    }
  }

  // =========================================================================
  // 9c. 8 Distinct Archetypes AI & Procedural Business Name Generator Engine
  // =========================================================================
  const NAMING_ARCHETYPES = [
    { id: 'short-coined', label: 'Short Coined', icon: '⚡', desc: '4–5 letter punchy invented name' },
    { id: 'two-word-metaphor', label: 'Two-Word Metaphor', icon: '🌿', desc: 'Poetic, evocative imagery pairing' },
    { id: 'sanskrit-latin', label: 'Sanskrit / Latin Root', icon: '🏛️', desc: 'Ancient root word with timeless depth' },
    { id: 'sensory-texture', label: 'Sensory & Texture', icon: '✨', desc: 'Tactile, visceral, sensory-evoking word' },
    { id: 'action-verb', label: 'Action Verb', icon: '🚀', desc: 'Active, kinetic, forward-motion command' },
    { id: 'cultural-heritage', label: 'Cultural & Heritage', icon: '🏺', desc: 'Authentic regional or artisanal tribute' },
    { id: 'minimalist-compound', label: 'Minimalist Compound', icon: '📐', desc: 'Clean juxtaposition of two concrete nouns' },
    { id: 'modern-playful', label: 'Modern Playful', icon: '🎨', desc: 'High-energy, witty, contemporary twist' }
  ];

  const NICHE_ARCHETYPE_POOLS = {
  "coffee-chai": {
    "short-coined": [
      {
        "name": "Kaffo",
        "rationale": "Punchy • Coined • Modern"
      },
      {
        "name": "Chaiku",
        "rationale": "Minimal • Coined • Warm"
      },
      {
        "name": "Velo",
        "rationale": "Fluid • Sleek • Distinctive"
      },
      {
        "name": "Brimm",
        "rationale": "Compact • Crisp • Fresh"
      },
      {
        "name": "Zora",
        "rationale": "Luminous • Short • Memorable"
      },
      {
        "name": "Roav",
        "rationale": "Kinetic • Roastery • Bold"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Solstice & Bean",
        "rationale": "Celestial • Warm • Poetic"
      },
      {
        "name": "Amber & Hearth",
        "rationale": "Tactile • Spiced • Grounded"
      },
      {
        "name": "Quiet Ember",
        "rationale": "Atmospheric • Slow • Rich"
      },
      {
        "name": "Distant Sun",
        "rationale": "Evocative • Luminous • Serene"
      },
      {
        "name": "Golden Steep",
        "rationale": "Radiant • Artisanal • Deep"
      },
      {
        "name": "Velvet Hearth",
        "rationale": "Comfort • Roasted • Mellow"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Kavita Brew",
        "rationale": "Poetic • Sanskrit • Heritage"
      },
      {
        "name": "Terroir Craft",
        "rationale": "Latin Root • Earth • Origin"
      },
      {
        "name": "Prana Infusion",
        "rationale": "Vital Force • Ancient • Pure"
      },
      {
        "name": "Caelum Roasters",
        "rationale": "Latin Sky • Celestial • Elevated"
      },
      {
        "name": "Amrita Chai",
        "rationale": "Nectar • Traditional • Sacred"
      },
      {
        "name": "Sylvan Bean",
        "rationale": "Forest-Grown • Pure • Wild"
      }
    ],
    "sensory-texture": [
      {
        "name": "Velvety Roast",
        "rationale": "Visceral • Smooth • Indulgent"
      },
      {
        "name": "Silken Drip",
        "rationale": "Fluid • Tactile • Refined"
      },
      {
        "name": "Crisp Crema",
        "rationale": "Aromatic • Fresh • Distinct"
      },
      {
        "name": "Smoky Cardamom",
        "rationale": "Sensory • Rich • Pungent"
      },
      {
        "name": "Warm Froth",
        "rationale": "Comforting • Tactile • Fluffy"
      },
      {
        "name": "Glazed Bean",
        "rationale": "Glossy • Caramelized • Sweet"
      }
    ],
    "action-verb": [
      {
        "name": "SteepCraft",
        "rationale": "Active • Kinetic • Methodical"
      },
      {
        "name": "Awaken Co.",
        "rationale": "Command • Inspiring • Fresh"
      },
      {
        "name": "Stirwell",
        "rationale": "Balanced • Purposeful • Pure"
      },
      {
        "name": "Brewrise",
        "rationale": "Ascending • Dynamic • Bold"
      },
      {
        "name": "Pourwise",
        "rationale": "Deliberate • Precision • Craft"
      },
      {
        "name": "Pressforward",
        "rationale": "Forward-Moving • Energetic • Sleek"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Malabar Steeps",
        "rationale": "Monsoon • Western Ghats • Origin"
      },
      {
        "name": "Deccan Chai",
        "rationale": "Historic • Southern • Authentic"
      },
      {
        "name": "Kashi Spiceworks",
        "rationale": "Ancient • Artisanal • Sacred"
      },
      {
        "name": "Nilgiri Mist",
        "rationale": "High-Grown • Fresh • Fragrant"
      },
      {
        "name": "Darjeeling Hearth",
        "rationale": "Single-Estate • Heritage • Fine"
      },
      {
        "name": "Coorg Roasters",
        "rationale": "Estate-Grown • Shaded • Rich"
      }
    ],
    "minimalist-compound": [
      {
        "name": "BeanVault",
        "rationale": "Concrete • Minimal • Industrial"
      },
      {
        "name": "ChaiPress",
        "rationale": "Functional • Clean • Direct"
      },
      {
        "name": "SteamLine",
        "rationale": "Architectural • Linear • Crisp"
      },
      {
        "name": "DripHouse",
        "rationale": "Pure • Structured • Grounded"
      },
      {
        "name": "RoastLab",
        "rationale": "Experimental • Clean • Scientific"
      },
      {
        "name": "LeafWard",
        "rationale": "Protected • Botanical • Modern"
      }
    ],
    "modern-playful": [
      {
        "name": "SipHappens",
        "rationale": "Witty • GenZ • Energetic"
      },
      {
        "name": "WiredChai",
        "rationale": "Electric • Funky • Modern"
      },
      {
        "name": "DailyDrip Co.",
        "rationale": "Habitual • Approachable • Upbeat"
      },
      {
        "name": "HappyBean",
        "rationale": "Cheerful • Friendly • Vibrant"
      },
      {
        "name": "Chaiwala Club",
        "rationale": "Playful Nod • Community • High-Energy"
      },
      {
        "name": "FrothBomb",
        "rationale": "Expressive • Bold • Pop"
      }
    ]
  },
  "bakery-kitchen": {
    "short-coined": [
      {
        "name": "Briox",
        "rationale": "Coined • French-Nod • Punchy"
      },
      {
        "name": "Krum",
        "rationale": "Tactile • Minimal • Crisp"
      },
      {
        "name": "Flou",
        "rationale": "Soft • Coined • Modern"
      },
      {
        "name": "Loafy",
        "rationale": "Friendly • Distinct • Warm"
      },
      {
        "name": "Ovn",
        "rationale": "Sleek • Abstract • Compact"
      },
      {
        "name": "Bakey",
        "rationale": "Playful • Short • Clear"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Golden Crust",
        "rationale": "Warm • Oven-Baked • Radiant"
      },
      {
        "name": "Warm Hearth",
        "rationale": "Comfort • Communal • Wholesome"
      },
      {
        "name": "Whispering Grain",
        "rationale": "Poetic • Farm-Fresh • Earthy"
      },
      {
        "name": "Velvet Crumb",
        "rationale": "Tactile • Decadent • Soft"
      },
      {
        "name": "Sunlit Flour",
        "rationale": "Luminous • Natural • Pure"
      },
      {
        "name": "Amber Loaf",
        "rationale": "Slow-Ferment • Rich • Honest"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Annapurna Table",
        "rationale": "Sanskrit Nourishment • Sacred • Warm"
      },
      {
        "name": "Panis Craft",
        "rationale": "Latin Bread • Traditional • Honest"
      },
      {
        "name": "Artis Terra",
        "rationale": "Latin Earth • Wholesome • Slow"
      },
      {
        "name": "Farina Atelier",
        "rationale": "Latin Flour • Refined • Artisanal"
      },
      {
        "name": "Rustica Maison",
        "rationale": "Heritage • Rustic • Timeless"
      },
      {
        "name": "Aethel Sourdough",
        "rationale": "Noble • Fermented • Distinct"
      }
    ],
    "sensory-texture": [
      {
        "name": "Flaky Butter",
        "rationale": "Visceral • Pastry-Rich • Crisp"
      },
      {
        "name": "Toasted Brioche",
        "rationale": "Sensory • Rich • Golden"
      },
      {
        "name": "Airy Crumb",
        "rationale": "Light • Sourdough • Open"
      },
      {
        "name": "Buttery Glaze",
        "rationale": "Indulgent • Shiny • Sweet"
      },
      {
        "name": "Silken Choux",
        "rationale": "Delicate • French • Precise"
      },
      {
        "name": "Crispy Crust",
        "rationale": "Textural • Fresh-Baked • Sound"
      }
    ],
    "action-verb": [
      {
        "name": "RiseCraft",
        "rationale": "Ascending • Ferment • Active"
      },
      {
        "name": "Kneadwell",
        "rationale": "Purposeful • Methodical • Hand-Worked"
      },
      {
        "name": "Bakeforward",
        "rationale": "Kinetic • Modern • Ambitious"
      },
      {
        "name": "Whiskworks",
        "rationale": "Dynamic • Craft • Energetic"
      },
      {
        "name": "Provewise",
        "rationale": "Patient • Precision • True"
      },
      {
        "name": "Hearthfire",
        "rationale": "Passionate • Woodfired • Warm"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Bandra Bakehouse",
        "rationale": "Iconic Mumbai • Portuguese Nod • Heritage"
      },
      {
        "name": "Old Delhi Hearth",
        "rationale": "Historic • Fragrant • Rich"
      },
      {
        "name": "French Quarter Ovens",
        "rationale": "Pondicherry • Colonial • Artisanal"
      },
      {
        "name": "Goa Pao Atelier",
        "rationale": "Traditional • Wood-Fired • Distinct"
      },
      {
        "name": "Parisian Crumb",
        "rationale": "European Patisserie • Classic • Fine"
      },
      {
        "name": "Bengaluru Loaf Co.",
        "rationale": "Contemporary Hub • Fresh • Local"
      }
    ],
    "minimalist-compound": [
      {
        "name": "CrumbVault",
        "rationale": "Industrial • Solid • Minimal"
      },
      {
        "name": "FlourBox",
        "rationale": "Clean • Structured • Direct"
      },
      {
        "name": "HearthStone",
        "rationale": "Grounded • Earthy • Architectural"
      },
      {
        "name": "LoafCraft",
        "rationale": "Modern • Concrete • Sharp"
      },
      {
        "name": "OvenLine",
        "rationale": "Linear • Precision • Warm"
      },
      {
        "name": "CrustLab",
        "rationale": "Experimental • Scientific • Fresh"
      }
    ],
    "modern-playful": [
      {
        "name": "RollingScones",
        "rationale": "Witty Pun • British • Cheerful"
      },
      {
        "name": "DoughReMi",
        "rationale": "Musical • Catchy • Friendly"
      },
      {
        "name": "BakeMyDay",
        "rationale": "Pop • Approachable • Upbeat"
      },
      {
        "name": "BatterUp",
        "rationale": "Sporty • Energetic • Fast"
      },
      {
        "name": "CrumbTogether",
        "rationale": "Communal • Warm • Humorous"
      },
      {
        "name": "GlazeSquad",
        "rationale": "GenZ • Sweet • High-Energy"
      }
    ]
  },
  "craft-beverages": {
    "short-coined": [
      {
        "name": "Fizzo",
        "rationale": "Bubbly • Coined • Punchy"
      },
      {
        "name": "Tonik",
        "rationale": "Clean • Modern • Functional"
      },
      {
        "name": "Kombu",
        "rationale": "Raw • Fermented • Compact"
      },
      {
        "name": "Verva",
        "rationale": "Effervescent • Alive • Sleek"
      },
      {
        "name": "Zyma",
        "rationale": "Ferment-Root • Greek • Short"
      },
      {
        "name": "Nekt",
        "rationale": "Juicy • Coined • Fresh"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Wild Elixir",
        "rationale": "Untamed • Botanical • Pure"
      },
      {
        "name": "Botanical Spark",
        "rationale": "Herbal • Effervescent • Luminous"
      },
      {
        "name": "Liquid Flora",
        "rationale": "Plant-Powered • Flowing • Fresh"
      },
      {
        "name": "Forest Nectar",
        "rationale": "Earthy • Shaded • Restorative"
      },
      {
        "name": "Living Amber",
        "rationale": "Fermented • Golden • Vital"
      },
      {
        "name": "Dawn Dew",
        "rationale": "Pristine • Morning-Cold • Clean"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Rasayana Craft",
        "rationale": "Sanskrit Rejuvenation • Vital • Deep"
      },
      {
        "name": "Amrita Botanics",
        "rationale": "Sacred Nectar • Herbal • Pure"
      },
      {
        "name": "Aqua Vitae",
        "rationale": "Latin Water of Life • Potent • Fine"
      },
      {
        "name": "Fermentum Flora",
        "rationale": "Latin Ferment • Living • Wild"
      },
      {
        "name": "Herbarium Tonics",
        "rationale": "Botanical Archive • Preserved • Crisp"
      },
      {
        "name": "Soma Sips",
        "rationale": "Ancient Elixir • Celestial • Calming"
      }
    ],
    "sensory-texture": [
      {
        "name": "Effervescent Zest",
        "rationale": "Sparkling • Citrus • Electric"
      },
      {
        "name": "Crisp Juniper",
        "rationale": "Piney • Dry • Refreshing"
      },
      {
        "name": "Tart Berry",
        "rationale": "Tangy • Visceral • Bright"
      },
      {
        "name": "Bubbly Citrus",
        "rationale": "Sensory • Punchy • Alive"
      },
      {
        "name": "Herbal Spark",
        "rationale": "Aromatic • Tingling • Restorative"
      },
      {
        "name": "Velvet Kombucha",
        "rationale": "Smooth Ferment • Probiotic • Rich"
      }
    ],
    "action-verb": [
      {
        "name": "BrewCraft",
        "rationale": "Kinetic • Methodical • Pure"
      },
      {
        "name": "Infusewell",
        "rationale": "Balanced • Plant-Extracted • Deep"
      },
      {
        "name": "Sparkforward",
        "rationale": "Bright • Dynamic • Uplifting"
      },
      {
        "name": "Fermentwise",
        "rationale": "Scientific • Controlled • Living"
      },
      {
        "name": "Quenchworks",
        "rationale": "Direct • Thirst-Relieving • Bold"
      },
      {
        "name": "DistilPure",
        "rationale": "Clarified • Clean • Focused"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Himalayan Elixirs",
        "rationale": "High-Altitude • Mineral • Pristine"
      },
      {
        "name": "Coorg Botanics",
        "rationale": "Spiced Estate • Rainforest • Wild"
      },
      {
        "name": "Malabar Tonics",
        "rationale": "Spice-Coast • Traditional • Healing"
      },
      {
        "name": "Konkan Shrub",
        "rationale": "Coastal • Kokum-Infused • Heritage"
      },
      {
        "name": "Vedic Ferments",
        "rationale": "Ancient Recipe • Fermented • Restorative"
      },
      {
        "name": "Assam Botanicals",
        "rationale": "Tea-Origin • Rain-Fed • Deep"
      }
    ],
    "minimalist-compound": [
      {
        "name": "TonicVault",
        "rationale": "Modern • Solid • Shielded"
      },
      {
        "name": "FloraPress",
        "rationale": "Botanical • Industrial • Fresh"
      },
      {
        "name": "FermentLab",
        "rationale": "Scientific • Clean • Experimental"
      },
      {
        "name": "SparkLine",
        "rationale": "Linear • Effervescent • Minimal"
      },
      {
        "name": "DraftCold",
        "rationale": "Chilled • Crisp • Unfiltered"
      },
      {
        "name": "HerbWater",
        "rationale": "Elementary • Pure • Honest"
      }
    ],
    "modern-playful": [
      {
        "name": "PopCulture Tonics",
        "rationale": "Witty • Double-Meaning • Trendy"
      },
      {
        "name": "SipWild",
        "rationale": "Carefree • Outdoorsy • Energetic"
      },
      {
        "name": "BubbleTrouble",
        "rationale": "GenZ • Funky • Punchy"
      },
      {
        "name": "KombuchaClub",
        "rationale": "Community • Modern • Approachable"
      },
      {
        "name": "FizzPops",
        "rationale": "Playful • Sparkly • Colorful"
      },
      {
        "name": "DailyElixir",
        "rationale": "Habit • Wellness • Easy"
      }
    ]
  },
  "vegan-health": {
    "short-coined": [
      {
        "name": "Natu",
        "rationale": "Pure • Coined • Earthy"
      },
      {
        "name": "Sprow",
        "rationale": "Sprouting • Kinetic • Compact"
      },
      {
        "name": "Verd",
        "rationale": "Green • Root-Word • Crisp"
      },
      {
        "name": "Pura",
        "rationale": "Clean-Label • Direct • Honest"
      },
      {
        "name": "Seedz",
        "rationale": "Modern • Wholesome • Snappy"
      },
      {
        "name": "Tofik",
        "rationale": "Coined • Plant-Based • Fresh"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Verdant Table",
        "rationale": "Lush • Abundant • Wholesome"
      },
      {
        "name": "Honest Harvest",
        "rationale": "Authentic • Transparent • Earthy"
      },
      {
        "name": "Clean Soil",
        "rationale": "Regenerative • Grounded • Pure"
      },
      {
        "name": "Living Earth",
        "rationale": "Biophilic • Circular • Deep"
      },
      {
        "name": "Green Canopy",
        "rationale": "Shaded • Organic • Protective"
      },
      {
        "name": "Sunlit Sprout",
        "rationale": "Vibrant • Seed-Grown • Fresh"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Prakriti Bowl",
        "rationale": "Sanskrit Nature • Wholesome • Ancient"
      },
      {
        "name": "Ahimsa Clean",
        "rationale": "Compassionate • Non-Harm • Pure"
      },
      {
        "name": "Nativa Greens",
        "rationale": "Latin Native • Untouched • Wild"
      },
      {
        "name": "Terra Vitalis",
        "rationale": "Latin Living Earth • Robust • Strong"
      },
      {
        "name": "Annapurna Vegan",
        "rationale": "Goddess of Nourishment • Bountiful • Real"
      },
      {
        "name": "Sylvan Harvest",
        "rationale": "Forest-Grown • Biophilic • Clean"
      }
    ],
    "sensory-texture": [
      {
        "name": "Crunchy Sprout",
        "rationale": "Tactile • Fresh • Audible"
      },
      {
        "name": "Crisp Leaf",
        "rationale": "Sensory • Garden-Picked • Snappy"
      },
      {
        "name": "Creamy Cashew",
        "rationale": "Smooth • Decadent • Plant-Rich"
      },
      {
        "name": "Earthen Root",
        "rationale": "Grounded • Nutrient-Dense • Warm"
      },
      {
        "name": "Silken Tofu",
        "rationale": "Delicate • Protein-Dense • Soft"
      },
      {
        "name": "Juicy Botanicals",
        "rationale": "Hydrating • Sun-Ripened • Vivid"
      }
    ],
    "action-verb": [
      {
        "name": "NourishCraft",
        "rationale": "Methodical • Sustaining • Healing"
      },
      {
        "name": "GrowForward",
        "rationale": "Ascending • Future-Focused • Real"
      },
      {
        "name": "Harvestwell",
        "rationale": "Conscious • Bountiful • Honest"
      },
      {
        "name": "SproutWorks",
        "rationale": "Active • Germinating • Alive"
      },
      {
        "name": "Healwise",
        "rationale": "Mindful • Restorative • Scientific"
      },
      {
        "name": "SeedClean",
        "rationale": "Elementary • Unadulterated • Direct"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Sattvic Table",
        "rationale": "Ayurvedic Purity • Balanced • Mindful"
      },
      {
        "name": "Kerala Plantfood",
        "rationale": "Coconut-Rich • Coastal • Ancestral"
      },
      {
        "name": "Deccan Harvest",
        "rationale": "Millet-Forward • Drought-Resilient • Heritage"
      },
      {
        "name": "Malwa Roots",
        "rationale": "Central Plains • Wholesome • Organic"
      },
      {
        "name": "Indus Greenery",
        "rationale": "Ancient Agriculture • Fertile • True"
      },
      {
        "name": "Nilgiri Organics",
        "rationale": "Hill-Grown • Clean-Air • Native"
      }
    ],
    "minimalist-compound": [
      {
        "name": "PlantVault",
        "rationale": "Concrete • Protected • Minimal"
      },
      {
        "name": "CleanRoot",
        "rationale": "Elementary • Soil-Grown • Honest"
      },
      {
        "name": "GreenPantry",
        "rationale": "Domestic • Wholesome • Direct"
      },
      {
        "name": "SproutLab",
        "rationale": "Microgreens • Precision • Fresh"
      },
      {
        "name": "SeedBowl",
        "rationale": "Everyday • Nourishing • Clean"
      },
      {
        "name": "NutriLine",
        "rationale": "Structured • Functional • Pure"
      }
    ],
    "modern-playful": [
      {
        "name": "Plantastic Co.",
        "rationale": "Exclamatory • Joyful • Approachable"
      },
      {
        "name": "HolyKale",
        "rationale": "GenZ Pun • Witty • Green"
      },
      {
        "name": "GreenBeast",
        "rationale": "Energetic • Protein-Packed • Bold"
      },
      {
        "name": "VeggieVibes",
        "rationale": "Upbeat • Friendly • Casual"
      },
      {
        "name": "PeaPlease",
        "rationale": "Playful Rhyme • High-Protein • Fun"
      },
      {
        "name": "EarthBaby",
        "rationale": "Affectionate • Eco-Conscious • Warm"
      }
    ]
  },
  "organic-skincare": {
    "short-coined": [
      {
        "name": "Curo",
        "rationale": "Care • Latin Root • Punchy"
      },
      {
        "name": "Flor",
        "rationale": "Botanical • Crisp • Compact"
      },
      {
        "name": "Derma",
        "rationale": "Clinical • Pure • Direct"
      },
      {
        "name": "Lumie",
        "rationale": "Glowing • Light • Soft"
      },
      {
        "name": "Sylv",
        "rationale": "Forest-Inspired • Minimal • Sleek"
      },
      {
        "name": "Aura",
        "rationale": "Luminous • Distinct • Elegant"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Dewy Dawn",
        "rationale": "Hydrating • Morning Light • Pristine"
      },
      {
        "name": "Botanical Veil",
        "rationale": "Protective • Plant-Powered • Soft"
      },
      {
        "name": "Velvet Petal",
        "rationale": "Visceral • Floral • Tender"
      },
      {
        "name": "Liquid Silk",
        "rationale": "Sensory • Gliding • Restorative"
      },
      {
        "name": "Forest Remedy",
        "rationale": "Herbal • Ancient • Grounding"
      },
      {
        "name": "Golden Nectar",
        "rationale": "Nourishing • Glow-Inducing • Rich"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Soundarya Rituals",
        "rationale": "Sanskrit Radiance • Royal • Ancestral"
      },
      {
        "name": "Nativa Derma",
        "rationale": "Latin Native • Barrier-Repair • Clean"
      },
      {
        "name": "Floralis Lab",
        "rationale": "Botanical Science • Active • Pure"
      },
      {
        "name": "Ojas Skin",
        "rationale": "Vital Radiance • Inner Glow • Ancient"
      },
      {
        "name": "Curatio Atelier",
        "rationale": "Latin Healing • Bespoke • Clinical"
      },
      {
        "name": "Botanica Aethel",
        "rationale": "Noble Flora • Biophilic • Prestigious"
      }
    ],
    "sensory-texture": [
      {
        "name": "Velvety Dew",
        "rationale": "Hydrating • Barrier-Support • Soft"
      },
      {
        "name": "Silken Serum",
        "rationale": "Fluid • Micro-Molecular • Gliding"
      },
      {
        "name": "Balm Glaze",
        "rationale": "Nourishing • Protective • Glossy"
      },
      {
        "name": "Calming Mist",
        "rationale": "Restorative • Micro-Fine • Cooling"
      },
      {
        "name": "Whipped Butter",
        "rationale": "Rich • Indulgent • Cocooning"
      },
      {
        "name": "Dewy Petal",
        "rationale": "Fresh • Hydrated • Plump"
      }
    ],
    "action-verb": [
      {
        "name": "GlowCraft",
        "rationale": "Active • Radiant • Intentional"
      },
      {
        "name": "Soothewell",
        "rationale": "Gentle • Anti-Inflammatory • Calm"
      },
      {
        "name": "RadiateCo",
        "rationale": "Luminous • Outward • Vibrant"
      },
      {
        "name": "Repairwise",
        "rationale": "Clinical • Cellular • Barrier-First"
      },
      {
        "name": "BloomPure",
        "rationale": "Flourishing • Natural • Clean"
      },
      {
        "name": "Restorworks",
        "rationale": "Scientific • Rejuvenating • Direct"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Kashmiri Saffron Skin",
        "rationale": "High-Altitude Saffron • Royal • Ancient"
      },
      {
        "name": "Kumkumadi Atelier",
        "rationale": "16-Herb Ayurvedic Oil • Prestigious • Iconic"
      },
      {
        "name": "Mysore Sandal Rituals",
        "rationale": "Heritage Sandalwood • Calming • Sacred"
      },
      {
        "name": "Nilgiri Botanicals",
        "rationale": "Eucalyptus & Tea • Hill-Grown • Fresh"
      },
      {
        "name": "Kerala Herbalist",
        "rationale": "Monsoon Herbs • Traditional • Pure"
      },
      {
        "name": "Udaipur Rose Water",
        "rationale": "Palatial Distillation • Fragrant • Crisp"
      }
    ],
    "minimalist-compound": [
      {
        "name": "DewVault",
        "rationale": "Moisture-Lock • Minimal • Strong"
      },
      {
        "name": "DermaLab",
        "rationale": "Clinical • Transparent • Modern"
      },
      {
        "name": "SkinPress",
        "rationale": "Cold-Pressed • Direct • Functional"
      },
      {
        "name": "BotanicLine",
        "rationale": "Linear • Clean-Label • Architectural"
      },
      {
        "name": "GlowWard",
        "rationale": "Protective • Illuminating • Sleek"
      },
      {
        "name": "BalmHouse",
        "rationale": "Artisanal • Cocooning • Honest"
      }
    ],
    "modern-playful": [
      {
        "name": "BareFaced Co.",
        "rationale": "Confident • Makeup-Free • Fresh"
      },
      {
        "name": "GlowGetter",
        "rationale": "Ambitious • Vibrant • Pop"
      },
      {
        "name": "DewYou",
        "rationale": "Individualistic • Catchy • GenZ"
      },
      {
        "name": "SkinPops",
        "rationale": "Juicy • Fun • Approachable"
      },
      {
        "name": "CheekyClean",
        "rationale": "Witty • Honest • Playful"
      },
      {
        "name": "SerumDrop",
        "rationale": "Snappy • Habitual • Modern"
      }
    ]
  },
  "streetwear-fashion": {
    "short-coined": [
      {
        "name": "Verv",
        "rationale": "Kinetic • Punchy • Modern"
      },
      {
        "name": "Strc",
        "rationale": "Structural • Coined • Sharp"
      },
      {
        "name": "Dropp",
        "rationale": "Street-Culture • Snappy • Heavy"
      },
      {
        "name": "Knyt",
        "rationale": "Textile • Minimal • Edgy"
      },
      {
        "name": "Raww",
        "rationale": "Unfinished • Gritty • Bold"
      },
      {
        "name": "Riff",
        "rationale": "Subversive • Musical • Crisp"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Heavy Stitch",
        "rationale": "Substantial • Industrial • Grounded"
      },
      {
        "name": "Monolith Thread",
        "rationale": "Monumental • Architectural • Dark"
      },
      {
        "name": "Asphalt Drift",
        "rationale": "Urban • Kinetic • Understated"
      },
      {
        "name": "Raw Loom",
        "rationale": "Authentic • Unwashed • Structural"
      },
      {
        "name": "Iron Shadow",
        "rationale": "Monochrome • Heavyweight • Bold"
      },
      {
        "name": "Kinetic Warp",
        "rationale": "Dynamic • Weft • Future-Street"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Vastra Studio",
        "rationale": "Sanskrit Garment • Timeless • Pure"
      },
      {
        "name": "Sutra Raw",
        "rationale": "Sanskrit Thread • Minimal • Grounded"
      },
      {
        "name": "Textura Atelier",
        "rationale": "Latin Weave • Tactile • Tailored"
      },
      {
        "name": "Opus Street",
        "rationale": "Latin Masterpiece • High-Fashion • Sharp"
      },
      {
        "name": "Fabrica Archive",
        "rationale": "Latin Workshop • Archival • Raw"
      },
      {
        "name": "Aethel Wear",
        "rationale": "Noble • Underground • Premium"
      }
    ],
    "sensory-texture": [
      {
        "name": "Heavyweight Fleece",
        "rationale": "450GSM • Dense • Cocooning"
      },
      {
        "name": "Raw Denim",
        "rationale": "Rigid • Selvedge • Character"
      },
      {
        "name": "Distressed Canvas",
        "rationale": "Worn • Tactile • Durable"
      },
      {
        "name": "Boxy Cotton",
        "rationale": "Drop-Shoulder • Structural • Crisp"
      },
      {
        "name": "Ribbed Knit",
        "rationale": "Textured • Elastic • Form"
      },
      {
        "name": "Crisp Nylon",
        "rationale": "Technical • Lightweight • Sound"
      }
    ],
    "action-verb": [
      {
        "name": "DropCraft",
        "rationale": "Urgent • Limited-Edition • Active"
      },
      {
        "name": "Stitchwell",
        "rationale": "Constructed • Built-to-Last • Honest"
      },
      {
        "name": "Weaveforward",
        "rationale": "Futuristic • Textile • Progressive"
      },
      {
        "name": "Wearbold",
        "rationale": "Empowering • Expressive • Direct"
      },
      {
        "name": "Threadwise",
        "rationale": "Technical • Smart • Crafted"
      },
      {
        "name": "CutRaw",
        "rationale": "Unhemmed • Brutalist • Sharp"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Dharavi Threads",
        "rationale": "Iconic Mumbai Hub • Craft-Rich • Global"
      },
      {
        "name": "Chanderi Street",
        "rationale": "Handloom Heritage • Translucent • Bold"
      },
      {
        "name": "Varanasi Loom",
        "rationale": "Centuries-Old Weave • Royal • Urban"
      },
      {
        "name": "Bombay Underground",
        "rationale": "Subcultural • Gritty • Midnight"
      },
      {
        "name": "Deccan Denim",
        "rationale": "Cotton-Belt • Heavy • Authentic"
      },
      {
        "name": "Kashmir Cashmere Lab",
        "rationale": "Ultra-Soft • Mountain • Heirloom"
      }
    ],
    "minimalist-compound": [
      {
        "name": "ThreadVault",
        "rationale": "Archival • Solid • Industrial"
      },
      {
        "name": "RawDrop",
        "rationale": "Instant • Concrete • Pure"
      },
      {
        "name": "LoomArchive",
        "rationale": "Historical • Curated • Clean"
      },
      {
        "name": "StitchLab",
        "rationale": "Experimental • Modular • Sharp"
      },
      {
        "name": "ClothWard",
        "rationale": "Protected • Structural • Minimal"
      },
      {
        "name": "IronLine",
        "rationale": "Linear • Heavy • Monochrome"
      }
    ],
    "modern-playful": [
      {
        "name": "DropDeadCool",
        "rationale": "Bold • GenZ • Hype"
      },
      {
        "name": "ThreadHeads",
        "rationale": "Enthusiast • Community • Catchy"
      },
      {
        "name": "OverSized Co.",
        "rationale": "Literal • Relaxed • Trending"
      },
      {
        "name": "OffGrid Wear",
        "rationale": "Rebellious • Utilitarian • Modern"
      },
      {
        "name": "StitchPlease",
        "rationale": "Irreverent • Fun • Memorable"
      },
      {
        "name": "HypeBox Studio",
        "rationale": "Collectible • Street-First • High-Energy"
      }
    ]
  },
  "luxury-jewelry": {
    "short-coined": [
      {
        "name": "Aure",
        "rationale": "Golden • Coined • Elegant"
      },
      {
        "name": "Orum",
        "rationale": "Latin Gold • Compact • Noble"
      },
      {
        "name": "Vespr",
        "rationale": "Evening Star • Poetic • Sleek"
      },
      {
        "name": "Glint",
        "rationale": "Radiant • Crisp • Luminous"
      },
      {
        "name": "Gemm",
        "rationale": "Precious • Minimal • Punchy"
      },
      {
        "name": "Cavr",
        "rationale": "Luxury-Nod • Rare • Refined"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Sovereign Crest",
        "rationale": "Imperial • Heirloom • Regal"
      },
      {
        "name": "Nocturne Spark",
        "rationale": "Midnight Gem • Starlit • Rare"
      },
      {
        "name": "Sculpted Dawn",
        "rationale": "Handcrafted • Sun-Gold • Luminous"
      },
      {
        "name": "Heirloom Ember",
        "rationale": "Generational • Warm • Enduring"
      },
      {
        "name": "Gilded Horizon",
        "rationale": "Panoramic • Polished • Prestigious"
      },
      {
        "name": "Silent Karat",
        "rationale": "Understated • Pure • Substantial"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Suvarna Atelier",
        "rationale": "Sanskrit Pure Gold • Royal • Sacred"
      },
      {
        "name": "Orum Maison",
        "rationale": "Latin Aurum • Haute-Joaillerie • Fine"
      },
      {
        "name": "Gemina Archive",
        "rationale": "Latin Twin-Gems • Symmetry • Timeless"
      },
      {
        "name": "Ratna Jewels",
        "rationale": "Sanskrit Precious Stone • Vedic • Rare"
      },
      {
        "name": "Aurum Imperial",
        "rationale": "Regal Gold • Monastic • Enduring"
      },
      {
        "name": "Elysian Carat",
        "rationale": "Mythic Perfection • Bespoke • Poised"
      }
    ],
    "sensory-texture": [
      {
        "name": "Solid 18K",
        "rationale": "Heavyweight • Rich • Uncompromising"
      },
      {
        "name": "Hammered Gold",
        "rationale": "Artisanal • Tactile • Textured"
      },
      {
        "name": "Polished Lustre",
        "rationale": "Mirror-Finish • Glossy • Flawless"
      },
      {
        "name": "Pavé Shimmer",
        "rationale": "Diamond-Set • Sparkling • Intricate"
      },
      {
        "name": "Matte Platinum",
        "rationale": "Muted-Luxe • Modern • Understated"
      },
      {
        "name": "Faceted Prisms",
        "rationale": "Light-Refracting • Geometric • Sharp"
      }
    ],
    "action-verb": [
      {
        "name": "ForgeCraft",
        "rationale": "Hand-Hammered • Fire • Permanent"
      },
      {
        "name": "Castwell",
        "rationale": "Molten-Metal • Exacting • Pure"
      },
      {
        "name": "SetPrecious",
        "rationale": "Prong-Setting • Master-Jeweler • Secure"
      },
      {
        "name": "SculptGems",
        "rationale": "Three-Dimensional • Wearable-Art • Fine"
      },
      {
        "name": "CraftHeirloom",
        "rationale": "Enduring • Timeless • Generational"
      },
      {
        "name": "ShapeGold",
        "rationale": "Fluid • Form-Giving • Sovereign"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Jaipur Gemworks",
        "rationale": "World Polishing Capital • Royal • Colored-Stone"
      },
      {
        "name": "Nizam Solitaire",
        "rationale": "Hyderabad Royalty • Golconda • Iconic"
      },
      {
        "name": "Chettinad Gold",
        "rationale": "South Indian Temple Jewelry • Heavy • Sacred"
      },
      {
        "name": "Mewar Atelier",
        "rationale": "Rajasthan Royalty • Enamel • Heritage"
      },
      {
        "name": "Varanasi Filigree",
        "rationale": "Fine-Wire Silver • Ancient • Delicate"
      },
      {
        "name": "Golconda Diamonds",
        "rationale": "World-Famous Type IIa • Pure • Historic"
      }
    ],
    "minimalist-compound": [
      {
        "name": "KaratVault",
        "rationale": "Solid • Fortified • Minimal"
      },
      {
        "name": "GemHouse",
        "rationale": "Prestigious • Architectural • Grounded"
      },
      {
        "name": "GoldArchive",
        "rationale": "Curated • Rare • Timeless"
      },
      {
        "name": "PrismStudio",
        "rationale": "Geometric • Precision • Light"
      },
      {
        "name": "JewelWard",
        "rationale": "Safeguarded • Pure • Clean"
      },
      {
        "name": "CastLine",
        "rationale": "Linear • Sculptural • Modern"
      }
    ],
    "modern-playful": [
      {
        "name": "KaratClub",
        "rationale": "Exclusive • Casual • Modern"
      },
      {
        "name": "GoldRush Co.",
        "rationale": "Exciting • Adventurous • Pop"
      },
      {
        "name": "BlingBling Maison",
        "rationale": "High-Spirited • Glitzy • Witty"
      },
      {
        "name": "RockStar Jewels",
        "rationale": "Edgy • Fine • Approachable"
      },
      {
        "name": "LittleGems Co.",
        "rationale": "Charming • Delicate • Friendly"
      },
      {
        "name": "ShineOn Fine",
        "rationale": "Optimistic • Everyday-Luxe • Bright"
      }
    ]
  },
  "fitness-yoga": {
    "short-coined": [
      {
        "name": "Kinet",
        "rationale": "Movement • Kinetic • Punchy"
      },
      {
        "name": "Pran",
        "rationale": "Breath • Ancient • Compact"
      },
      {
        "name": "Verve",
        "rationale": "Vibrant • Energetic • Sharp"
      },
      {
        "name": "Movv",
        "rationale": "Kinetic • Minimal • Modern"
      },
      {
        "name": "Pulx",
        "rationale": "Heartbeat • High-Intensity • Sleek"
      },
      {
        "name": "Stryd",
        "rationale": "Stride • Dynamic • Grounded"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Centered Pulse",
        "rationale": "Grounded • Cardiovascular • Aligned"
      },
      {
        "name": "Kinetic Flow",
        "rationale": "Fluid • Seamless • Dynamic"
      },
      {
        "name": "Grounded Breath",
        "rationale": "Rooted • Calming • Powerful"
      },
      {
        "name": "Ascending Form",
        "rationale": "Progressive • Postural • Clean"
      },
      {
        "name": "Silent Apex",
        "rationale": "Peak • Mindful • Disciplined"
      },
      {
        "name": "Inner Core",
        "rationale": "Central • Stabilizing • Unshakeable"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Prana Movement",
        "rationale": "Sanskrit Life-Force • Breath • Pure"
      },
      {
        "name": "Asana Dynamics",
        "rationale": "Sanskrit Posture • Biomechanical • Flow"
      },
      {
        "name": "Kinesis Athletics",
        "rationale": "Greek Movement • High-Performance • Sharp"
      },
      {
        "name": "Soma Flow",
        "rationale": "Ancient Body-Mind • Vital • Restorative"
      },
      {
        "name": "Vinyasa Lab",
        "rationale": "Sequential Motion • Breath-Synchronized • Fine"
      },
      {
        "name": "Zenith Somatics",
        "rationale": "Peak • Bodily-Awareness • Precision"
      }
    ],
    "sensory-texture": [
      {
        "name": "Deep Stretch",
        "rationale": "Visceral • Lengthening • Relieving"
      },
      {
        "name": "Fluid Motion",
        "rationale": "Gliding • Low-Impact • Seamless"
      },
      {
        "name": "Rhythmic Pulse",
        "rationale": "Audible • Cardiovascular • Pumping"
      },
      {
        "name": "Grounded Posture",
        "rationale": "Earthy • Stable • Solid"
      },
      {
        "name": "Dynamic Core",
        "rationale": "Tense • Stabilizing • Muscular"
      },
      {
        "name": "Breathwork Heat",
        "rationale": "Internal Fire • Cleansing • Deep"
      }
    ],
    "action-verb": [
      {
        "name": "FlowCraft",
        "rationale": "Sequential • Graceful • Intentional"
      },
      {
        "name": "Alignwell",
        "rationale": "Postural • Orthopedic • Balanced"
      },
      {
        "name": "Stridewise",
        "rationale": "Athletic • Forward • Rhythmic"
      },
      {
        "name": "Breatheforward",
        "rationale": "Oxygenated • Revitalizing • Progressive"
      },
      {
        "name": "Movebold",
        "rationale": "Courageous • High-Power • Confident"
      },
      {
        "name": "Elevatworks",
        "rationale": "Ascending • Conditioning • Functional"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Rishikesh Breathworks",
        "rationale": "World Capital of Yoga • Himalayan • Pristine"
      },
      {
        "name": "Mysore Ashtanga Lab",
        "rationale": "Pioneering Ashtanga Tradition • Rigorous • Pure"
      },
      {
        "name": "Himalayan Somatics",
        "rationale": "High-Altitude • Mindful • Restorative"
      },
      {
        "name": "Kerala Kalari Core",
        "rationale": "Ancient Martial Discipline • Flexible • Deadly"
      },
      {
        "name": "Vedic Movement",
        "rationale": "Centuries-Old Body Science • Harmonic • Whole"
      },
      {
        "name": "Ganges Flow Sanctuary",
        "rationale": "River-Bank Stillness • Sacred • Calming"
      }
    ],
    "minimalist-compound": [
      {
        "name": "FlowVault",
        "rationale": "Solid • Protective • Pure"
      },
      {
        "name": "CoreStudio",
        "rationale": "Clean • Functional • Structured"
      },
      {
        "name": "PulseLab",
        "rationale": "Scientific • Metric-Driven • Modern"
      },
      {
        "name": "MoveWard",
        "rationale": "Protective • Dedicated • Architectural"
      },
      {
        "name": "FormLine",
        "rationale": "Linear • Biomechanical • Sleek"
      },
      {
        "name": "BreathHouse",
        "rationale": "Sheltered • Oxygenated • Communal"
      }
    ],
    "modern-playful": [
      {
        "name": "SweatClub",
        "rationale": "Direct • High-Energy • Social"
      },
      {
        "name": "BendyBeast",
        "rationale": "Fun • Flexible • Empowering"
      },
      {
        "name": "PulsePunch",
        "rationale": "Combative • Upbeat • Fast"
      },
      {
        "name": "AlignMe",
        "rationale": "Personal • Casual • Catchy"
      },
      {
        "name": "FlexyCo",
        "rationale": "Friendly • Modern • GenZ"
      },
      {
        "name": "MatPack",
        "rationale": "Tribal • Community • Snappy"
      }
    ]
  },
  "mental-health": {
    "short-coined": [
      {
        "name": "Seren",
        "rationale": "Serene • Coined • Gentle"
      },
      {
        "name": "Mindu",
        "rationale": "Cognitive • Soft • Approachable"
      },
      {
        "name": "Solas",
        "rationale": "Solace • Warm • Compact"
      },
      {
        "name": "Calmo",
        "rationale": "Calm • Italian-Nod • Peaceful"
      },
      {
        "name": "Lucee",
        "rationale": "Lucid • Light • Clear"
      },
      {
        "name": "Aequ",
        "rationale": "Equanimity • Latin • Short"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Still Horizon",
        "rationale": "Expansive • Quiet • Grounding"
      },
      {
        "name": "Quiet Sanctuary",
        "rationale": "Safe • Protected • Peaceful"
      },
      {
        "name": "Gentle Harbor",
        "rationale": "Welcoming • Storm-Free • Steady"
      },
      {
        "name": "Clear Clearing",
        "rationale": "Uncluttered • Open • Forest-Light"
      },
      {
        "name": "Lucid Haven",
        "rationale": "Self-Aware • Restorative • Calm"
      },
      {
        "name": "Unburdened Sky",
        "rationale": "Weightless • Vast • Free"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Shanti Mind",
        "rationale": "Sanskrit Peace • Soulful • Ancient"
      },
      {
        "name": "Samadhi Calm",
        "rationale": "Total Absorption • Still • Sacred"
      },
      {
        "name": "Sukha Space",
        "rationale": "Sanskrit Authentic Happiness • Warm • Ease"
      },
      {
        "name": "Serena Psyche",
        "rationale": "Latin Serenity • Evidence-Based • Clear"
      },
      {
        "name": "Equanimity Health",
        "rationale": "Balanced Mind • Resilient • Steady"
      },
      {
        "name": "Ananda Haven",
        "rationale": "Pure Bliss • Restorative • Safe"
      }
    ],
    "sensory-texture": [
      {
        "name": "Soft Sigh",
        "rationale": "Audible Relief • Releasing • Gentle"
      },
      {
        "name": "Calming Presence",
        "rationale": "Subtle • Grounding • Empathetic"
      },
      {
        "name": "Deep Breath",
        "rationale": "Oxygenating • Diaphragmatic • Slow"
      },
      {
        "name": "Quiet Space",
        "rationale": "Noise-Free • Restful • Minimal"
      },
      {
        "name": "Gentle Warmth",
        "rationale": "Comforting • Supportive • Tender"
      },
      {
        "name": "Uncluttered Mind",
        "rationale": "Spacious • Clear • Light"
      }
    ],
    "action-verb": [
      {
        "name": "PauseCraft",
        "rationale": "Deliberate Stop • Mindful • Healthy"
      },
      {
        "name": "Breathewell",
        "rationale": "Respiratory • Grounding • Easy"
      },
      {
        "name": "Groundwise",
        "rationale": "Sensory Anchoring • Stable • Practical"
      },
      {
        "name": "SootheForward",
        "rationale": "Compassionate • Healing • Progressive"
      },
      {
        "name": "HealMind",
        "rationale": "Direct • Therapeutic • Kind"
      },
      {
        "name": "MindClear",
        "rationale": "Decluttering • Focused • Honest"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Vipassana Harbor",
        "rationale": "Insight Meditation • Ancient • Silent"
      },
      {
        "name": "Buddhist Stillness",
        "rationale": "Mindfulness Tradition • Compassionate • Deep"
      },
      {
        "name": "Ashoka Sanctuary",
        "rationale": "Imperial Rest-Stops • Caring • Historical"
      },
      {
        "name": "Vedic Mindfulness",
        "rationale": "Consciousness Science • Grounding • Timeless"
      },
      {
        "name": "Zen Compassion Lab",
        "rationale": "Non-Judgmental • Minimalist • Clear"
      },
      {
        "name": "Dhyana Retreats",
        "rationale": "Deep Contemplation • Forest • Serene"
      }
    ],
    "minimalist-compound": [
      {
        "name": "CalmVault",
        "rationale": "Protected Peace • Solid • Safe"
      },
      {
        "name": "MindHaven",
        "rationale": "Sheltered Mental Space • Warm • Pure"
      },
      {
        "name": "PauseSpace",
        "rationale": "Structured Break • Clean • Modern"
      },
      {
        "name": "StillLab",
        "rationale": "Clinical • Quiet • Scientific"
      },
      {
        "name": "SolaceHouse",
        "rationale": "Domestic Comfort • Supportive • Real"
      },
      {
        "name": "PeaceWard",
        "rationale": "Defended Wellbeing • Linear • Minimal"
      }
    ],
    "modern-playful": [
      {
        "name": "ChillPill Co.",
        "rationale": "Colloquial • Friendly • Lighthearted"
      },
      {
        "name": "BrainBuddy",
        "rationale": "Empathetic • Accessible • Approachable"
      },
      {
        "name": "DeepBreath Club",
        "rationale": "Community • Actionable • Casual"
      },
      {
        "name": "HeadSpacey",
        "rationale": "Playful Twist • Relatable • Catchy"
      },
      {
        "name": "MindOverMatter",
        "rationale": "Empowering • Familiar • Upbeat"
      },
      {
        "name": "HappyNoodle App",
        "rationale": "Warm • Quirky • Non-Intimidating"
      }
    ]
  },
  "pet-care": {
    "short-coined": [
      {
        "name": "Pawsy",
        "rationale": "Affectionate • Short • Friendly"
      },
      {
        "name": "Barko",
        "rationale": "Canine-Nod • Playful • Punchy"
      },
      {
        "name": "Feln",
        "rationale": "Feline-Minimal • Modern • Sleek"
      },
      {
        "name": "Kibo",
        "rationale": "Kibble • Japanese-Sound • Compact"
      },
      {
        "name": "Meww",
        "rationale": "Cat-Sound • Whimsical • Snappy"
      },
      {
        "name": "Tails",
        "rationale": "Direct • Anatomical • Warm"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Noble Companion",
        "rationale": "Loyal • Aristocratic • Cherished"
      },
      {
        "name": "Wagging Hearth",
        "rationale": "Domestic • Joyful • Warm"
      },
      {
        "name": "Gentle Paw",
        "rationale": "Tender • Caring • Soft"
      },
      {
        "name": "Velvet Whisker",
        "rationale": "Sensory • Delicate • Feline"
      },
      {
        "name": "Loyal Shadow",
        "rationale": "Devoted • Following • Constant"
      },
      {
        "name": "Playful Meadow",
        "rationale": "Outdoors • Energetic • Free"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Pashu Care",
        "rationale": "Sanskrit Animals • Compassionate • Ancient"
      },
      {
        "name": "Fauna Atelier",
        "rationale": "Latin Animals • Bespoke • Refined"
      },
      {
        "name": "Canis Haven",
        "rationale": "Latin Dog • Protected • Clean"
      },
      {
        "name": "Felis Pure",
        "rationale": "Latin Cat • Elegant • Dedicated"
      },
      {
        "name": "Mitra Pets",
        "rationale": "Sanskrit Faithful Friend • Loyal • Warm"
      },
      {
        "name": "Vayu Provisions",
        "rationale": "Vital Energy • Nutritious • Fast"
      }
    ],
    "sensory-texture": [
      {
        "name": "Fluffy Fur",
        "rationale": "Visceral • Huggable • Soft"
      },
      {
        "name": "Silken Coat",
        "rationale": "Groomed • Glossy • Healthy"
      },
      {
        "name": "Soft Nuzzle",
        "rationale": "Affectionate • Tactile • Loving"
      },
      {
        "name": "Chewy Bite",
        "rationale": "Satisfying • Dental-Clean • Palatable"
      },
      {
        "name": "Warm Snuggle",
        "rationale": "Cozy • Comforting • Safe"
      },
      {
        "name": "Gentle Lick",
        "rationale": "Playful • Friendly • Pure"
      }
    ],
    "action-verb": [
      {
        "name": "WagCraft",
        "rationale": "Joy-Inducing • Purposeful • Active"
      },
      {
        "name": "Groomwell",
        "rationale": "Clean • Professional • Pampering"
      },
      {
        "name": "Fetchwise",
        "rationale": "Playful • Intelligent • Agile"
      },
      {
        "name": "Careforward",
        "rationale": "Preventative • Veterinary • Modern"
      },
      {
        "name": "NurturePets",
        "rationale": "Compassionate • Wholesome • True"
      },
      {
        "name": "PamperPure",
        "rationale": "Spa-Grade • Chemical-Free • Gentle"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Mudhol Hound Co.",
        "rationale": "Royal Indian Breed • Swift • Historic"
      },
      {
        "name": "Rajapalayam Royals",
        "rationale": "Ghost Hounds of Tamil Nadu • Majestic • Noble"
      },
      {
        "name": "DesiPaws Sanctuary",
        "rationale": "Indie Dog Love • Compassionate • Native"
      },
      {
        "name": "Caravan Pets",
        "rationale": "Deccan Plateau Working Dogs • Resilient • True"
      },
      {
        "name": "Himalayan Mastiff Club",
        "rationale": "Guardian Heritage • Strong • Loyal"
      },
      {
        "name": "Kombai Guard Atelier",
        "rationale": "Ancient Southern Breed • Fearless • Proud"
      }
    ],
    "minimalist-compound": [
      {
        "name": "PawVault",
        "rationale": "Protected Nutrition • Minimal • Solid"
      },
      {
        "name": "BarkHouse",
        "rationale": "Communal • Domestic • Clean"
      },
      {
        "name": "PetWard",
        "rationale": "Safeguarded Wellness • Architectural • Pure"
      },
      {
        "name": "TailLab",
        "rationale": "Veterinary Science • Experimental • Sharp"
      },
      {
        "name": "HoundBox",
        "rationale": "Subscription • Curated • Practical"
      },
      {
        "name": "FurLine",
        "rationale": "Grooming Standard • Linear • Modern"
      }
    ],
    "modern-playful": [
      {
        "name": "GoodBoy Club",
        "rationale": "Heartwarming Meme • Universal • Cheerful"
      },
      {
        "name": "Zoomies Co.",
        "rationale": "High-Energy Burst • Relatable • Fun"
      },
      {
        "name": "BarkingMad",
        "rationale": "Humorous British Pun • Quirky • Bold"
      },
      {
        "name": "WhiskersUp",
        "rationale": "Optimistic • Alert • Friendly"
      },
      {
        "name": "PawsAndClaws",
        "rationale": "Comprehensive • Catchy • Approachable"
      },
      {
        "name": "FurReal Pets",
        "rationale": "GenZ Slang Pun • Authentic • Playful"
      }
    ]
  },
  "interior-design": {
    "short-coined": [
      {
        "name": "Habt",
        "rationale": "Habitation • Minimal • Architectural"
      },
      {
        "name": "Spat",
        "rationale": "Spatial • Modern • Crisp"
      },
      {
        "name": "Archy",
        "rationale": "Architectural • Friendly • Compact"
      },
      {
        "name": "Formx",
        "rationale": "Sculptural • Geometric • Sharp"
      },
      {
        "name": "Lomu",
        "rationale": "Textile Loom • Warm • Compact"
      },
      {
        "name": "Terx",
        "rationale": "Terra • Earthen • Modern"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Sunlit Alcove",
        "rationale": "Warm • Private • Architectural"
      },
      {
        "name": "Sculpted Hearth",
        "rationale": "Tactile • Central • Grounded"
      },
      {
        "name": "Monastic Shadow",
        "rationale": "Wabi-Sabi • Understated • Serene"
      },
      {
        "name": "Tactile Dwelling",
        "rationale": "Material-Driven • Sensory • Rich"
      },
      {
        "name": "Balanced Horizon",
        "rationale": "Harmonious • Proportional • Calm"
      },
      {
        "name": "Quiet Arch",
        "rationale": "Curved • Timeless • Monumental"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Vastu Living",
        "rationale": "Vedic Spatial Harmony • Ancient • Energy"
      },
      {
        "name": "Habitus Atelier",
        "rationale": "Latin Dwelling • Sociological • Bespoke"
      },
      {
        "name": "Spatia Maison",
        "rationale": "Latin Space • French Elegance • Grand"
      },
      {
        "name": "Forma Terra",
        "rationale": "Earth-Shaped • Raw • Sculptural"
      },
      {
        "name": "Structura Studio",
        "rationale": "Architectural Bones • Linear • Pure"
      },
      {
        "name": "Domus Aethel",
        "rationale": "Noble Home • Enduring • Classical"
      }
    ],
    "sensory-texture": [
      {
        "name": "Honed Travertine",
        "rationale": "Porous Stone • Matte • Luxurious"
      },
      {
        "name": "Raw Linen",
        "rationale": "Textured Weave • Draped • Breathable"
      },
      {
        "name": "Brushed Brass",
        "rationale": "Warm Metal • Patinated • Tactile"
      },
      {
        "name": "Textured Plaster",
        "rationale": "Hand-Troweled • Monastic • Organic"
      },
      {
        "name": "Fluted Oak",
        "rationale": "Linear Woodwork • Tactile • Tailored"
      },
      {
        "name": "Earthen Clay",
        "rationale": "Terracotta • Grounded • Warm"
      }
    ],
    "action-verb": [
      {
        "name": "ShapeCraft",
        "rationale": "Three-Dimensional • Sculptural • Intentional"
      },
      {
        "name": "Curatewell",
        "rationale": "Selective • Discerning • Harmonic"
      },
      {
        "name": "Spaceforward",
        "rationale": "Innovative Layout • Open-Plan • Modern"
      },
      {
        "name": "AlignHome",
        "rationale": "Symmetrical • Functional • Peaceful"
      },
      {
        "name": "Buildwise",
        "rationale": "Practical • Structural • Solid"
      },
      {
        "name": "DesignPure",
        "rationale": "Unadorned • Essence-First • Honest"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Chettinad Courtyards",
        "rationale": "Pillared Athangudi Tiles • Grand • Heritage"
      },
      {
        "name": "Jaipur Haveli Living",
        "rationale": "Jharokha Screens • Carved Stone • Royal"
      },
      {
        "name": "Kerala Thinnai Atelier",
        "rationale": "Teak Verandahs • Monsoon-Proof • Communal"
      },
      {
        "name": "Scandinavian Monastic",
        "rationale": "Light-Filled Wood • Functional • Clean"
      },
      {
        "name": "Kyoto Woodworks",
        "rationale": "Joinery • Cedar • Minimalist"
      },
      {
        "name": "Goa Portuguese Villa",
        "rationale": "Oyster-Shell Windows • High Ceilings • Historic"
      }
    ],
    "minimalist-compound": [
      {
        "name": "SpatialVault",
        "rationale": "Architectural • Monolithic • Clean"
      },
      {
        "name": "FormStudio",
        "rationale": "Geometric • Creative • Focused"
      },
      {
        "name": "ArchHouse",
        "rationale": "Structural • Sheltered • Modern"
      },
      {
        "name": "HabitusLab",
        "rationale": "Living Science • Experimental • Minimal"
      },
      {
        "name": "RoomWard",
        "rationale": "Protected Interior • Linear • Sharp"
      },
      {
        "name": "TerraLine",
        "rationale": "Earthy Materials • Architectural • Pure"
      }
    ],
    "modern-playful": [
      {
        "name": "Roomies Co.",
        "rationale": "Friendly • Communal • Casual"
      },
      {
        "name": "SpaceCadet Design",
        "rationale": "Futuristic • Quirky • Imaginative"
      },
      {
        "name": "LivingGood",
        "rationale": "Optimistic • Lifestyle • Warm"
      },
      {
        "name": "ArchDork Studio",
        "rationale": "Self-Deprecating • Passionate • Nerdy"
      },
      {
        "name": "CasaBlanca Lab",
        "rationale": "Chic • Playful • Cosmopolitan"
      },
      {
        "name": "CouchPotato Atelier",
        "rationale": "Comfort-First • Witty • High-End"
      }
    ]
  },
  "event-planning": {
    "short-coined": [
      {
        "name": "Feto",
        "rationale": "Fête • Celebration • Compact"
      },
      {
        "name": "Galx",
        "rationale": "Gala • Cosmic • Punchy"
      },
      {
        "name": "Vowz",
        "rationale": "Matrimonial • Modern • Snappy"
      },
      {
        "name": "Solx",
        "rationale": "Solstice • Radiant • Short"
      },
      {
        "name": "Lumy",
        "rationale": "Lumiere • Light • Warm"
      },
      {
        "name": "Evnt",
        "rationale": "Minimal • Direct • Modern"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Golden Hour",
        "rationale": "Cinematic • Perfect Light • Memorable"
      },
      {
        "name": "Curated Soiree",
        "rationale": "Intimate • Sophisticated • Bespoke"
      },
      {
        "name": "Starlit Canopy",
        "rationale": "Open-Air • Romantic • Celestial"
      },
      {
        "name": "Velvet Prelude",
        "rationale": "Anticipatory • Luxurious • Smooth"
      },
      {
        "name": "Whispered Toast",
        "rationale": "Poignant • Celebratory • Heartfelt"
      },
      {
        "name": "Memorable Solstice",
        "rationale": "Seasonal • Milestone • Epic"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Utsav Atelier",
        "rationale": "Sanskrit Festival • Joyous • Grand"
      },
      {
        "name": "Festum Maison",
        "rationale": "Latin Feast • European Flair • Haute"
      },
      {
        "name": "Vivaha Productions",
        "rationale": "Sanskrit Sacred Union • Royal • Deep"
      },
      {
        "name": "Elysian Affairs",
        "rationale": "Mythic Elegance • Perfect • Bespoke"
      },
      {
        "name": "Celebratio Design",
        "rationale": "Latin Celebration • Formal • Classical"
      },
      {
        "name": "Opus Soirees",
        "rationale": "Masterpiece Gatherings • Grand • Distinct"
      }
    ],
    "sensory-texture": [
      {
        "name": "Sparkling Champagne",
        "rationale": "Effervescent • Bubbly • Luxury"
      },
      {
        "name": "Candlelit Warmth",
        "rationale": "Atmospheric • Romantic • Soft"
      },
      {
        "name": "Velvet Drapes",
        "rationale": "Theatrical • Heavy • Decadent"
      },
      {
        "name": "Floral Cascade",
        "rationale": "Botanical Overflow • Fragrant • Lush"
      },
      {
        "name": "Crisp Satin",
        "rationale": "Smooth • Bridal • Shimmering"
      },
      {
        "name": "Crystal Clink",
        "rationale": "Audible Toast • Toasting • Festive"
      }
    ],
    "action-verb": [
      {
        "name": "GatherCraft",
        "rationale": "Communal • Hand-Crafted • Warm"
      },
      {
        "name": "Hostwell",
        "rationale": "Gracious • Seamless • Attentive"
      },
      {
        "name": "Celebratwise",
        "rationale": "Joyful • Strategic • Coordinated"
      },
      {
        "name": "CurateMagic",
        "rationale": "Enchanting • Precision-Staged • Special"
      },
      {
        "name": "Planforward",
        "rationale": "Flawless Execution • Forward • Calm"
      },
      {
        "name": "SparkEvents",
        "rationale": "Igniting Joy • Dynamic • Fast"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Udaipur Royal Weddings",
        "rationale": "Lake Palaces • Regal Shehnai • Legendary"
      },
      {
        "name": "Goa Sunkissed Galas",
        "rationale": "Beachside Romance • Sunset • Breezy"
      },
      {
        "name": "Varanasi Ghat Soirees",
        "rationale": "Diya-Lit River • Spiritual • Sacred"
      },
      {
        "name": "Delhi Darbar Fetes",
        "rationale": "Mughal Splendor • Grand Banquets • Historic"
      },
      {
        "name": "Jaipur Palatial Events",
        "rationale": "Amber Fort Royalty • Marigold • Grand"
      },
      {
        "name": "Chettinad Mansion Weddings",
        "rationale": "Heritage Pillar Halls • Traditional • Deep"
      }
    ],
    "minimalist-compound": [
      {
        "name": "EventVault",
        "rationale": "Curated • Structured • Impeccable"
      },
      {
        "name": "FeteStudio",
        "rationale": "Creative • Modern • Artistic"
      },
      {
        "name": "SoireeHouse",
        "rationale": "Warm Hospitality • Intimate • Clean"
      },
      {
        "name": "GalaLab",
        "rationale": "Experimental Production • High-Tech • Sharp"
      },
      {
        "name": "OccasionWard",
        "rationale": "Safeguarded Memories • Linear • Minimal"
      },
      {
        "name": "ToastLine",
        "rationale": "Linear Flow • Coordinated • Sleek"
      }
    ],
    "modern-playful": [
      {
        "name": "PartyPeople Co.",
        "rationale": "Social • High-Spirited • Fun"
      },
      {
        "name": "BigDay Squad",
        "rationale": "Friendly Team • Wedding-First • Energetic"
      },
      {
        "name": "ConfettiPop",
        "rationale": "Explosive Joy • Colorful • Pop"
      },
      {
        "name": "KnotKidding",
        "rationale": "Wedding Pun • Irreverent • GenZ"
      },
      {
        "name": "BashMakers",
        "rationale": "Dynamic • Celebratory • Loud"
      },
      {
        "name": "HighVibe Events",
        "rationale": "Electric • Positive • Modern"
      }
    ]
  },
  "eco-travel": {
    "short-coined": [
      {
        "name": "Roamm",
        "rationale": "Movement • Wanderlust • Compact"
      },
      {
        "name": "Wandr",
        "rationale": "Exploration • Minimal • Modern"
      },
      {
        "name": "Nomd",
        "rationale": "Nomad • Global • Snappy"
      },
      {
        "name": "Trekk",
        "rationale": "Active • Mountain • Strong"
      },
      {
        "name": "Lodg",
        "rationale": "Sheltered • Eco • Clean"
      },
      {
        "name": "Canpy",
        "rationale": "Canopy • Treetop • Compact"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Cloud Sanctuary",
        "rationale": "High-Altitude • Misty • Protected"
      },
      {
        "name": "Forest Outpost",
        "rationale": "Wilderness Edge • Remote • Minimal"
      },
      {
        "name": "Silent Ridge",
        "rationale": "Panoramic • Wind-Swept • Still"
      },
      {
        "name": "River Crossing",
        "rationale": "Threshold • Flowing • Natural"
      },
      {
        "name": "Starlit Glade",
        "rationale": "Zero Light-Pollution • Night Sky • Pure"
      },
      {
        "name": "Wilderness Hearth",
        "rationale": "Warm Fire • Campfire • Untamed"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Yatra Stays",
        "rationale": "Sanskrit Pilgrimage • Mindful Journey • Deep"
      },
      {
        "name": "Terra Nomada",
        "rationale": "Latin Roaming Earth • Free • Biophilic"
      },
      {
        "name": "Vana Sanctuary",
        "rationale": "Sanskrit Forest • Sacred Grove • Untouched"
      },
      {
        "name": "Aranya Lodges",
        "rationale": "Sanskrit Deep Woods • Wilderness • Quiet"
      },
      {
        "name": "Silva Expeditions",
        "rationale": "Latin Forest • Exploratory • Pure"
      },
      {
        "name": "Pravas Retreats",
        "rationale": "Sanskrit Travel • Transformative • Restful"
      }
    ],
    "sensory-texture": [
      {
        "name": "Pine Scent",
        "rationale": "Aromatic • Mountain • Fresh"
      },
      {
        "name": "Mountain Breeze",
        "rationale": "Crisp • Cold • Invigorating"
      },
      {
        "name": "Woodsmoke Air",
        "rationale": "Campfire • Nostalgic • Grounding"
      },
      {
        "name": "Mossy Trail",
        "rationale": "Soft Footing • Rainforest • Green"
      },
      {
        "name": "Starlit Chill",
        "rationale": "Night Air • Zero-Pollution • Clear"
      },
      {
        "name": "Crisp Riverbed",
        "rationale": "Glacial Stones • Flowing • Clean"
      }
    ],
    "action-verb": [
      {
        "name": "WanderCraft",
        "rationale": "Intentional Exploration • Slow • Deep"
      },
      {
        "name": "Roamwell",
        "rationale": "Respectful Travel • Sustainable • Mindful"
      },
      {
        "name": "Escapewise",
        "rationale": "Smart Retreat • Unplugged • Healthy"
      },
      {
        "name": "Trekforward",
        "rationale": "Ascending Trail • Determined • Active"
      },
      {
        "name": "ExplorePure",
        "rationale": "Leave No Trace • Untainted • Honest"
      },
      {
        "name": "SeekWild",
        "rationale": "Untamed Discovery • Adventurous • Direct"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Spiti High Outposts",
        "rationale": "Tibetan Plateau • Mud-Brick • Zero-Waste"
      },
      {
        "name": "Western Ghats Glamping",
        "rationale": "Biodiversity Hotspot • Rainforest • Cloud"
      },
      {
        "name": "Coorg Coffee Estates",
        "rationale": "Canopy-Shaded Coffee • Waterfalls • Heritage"
      },
      {
        "name": "Ladakh Nomad Lodges",
        "rationale": "Solar-Powered • High-Desert • Monastic"
      },
      {
        "name": "Sundarbans Canopy",
        "rationale": "Mangrove Sanctuary • Tiger Trail • Eco-First"
      },
      {
        "name": "Kerala Backwater Stays",
        "rationale": "Solar Houseboats • Silent • Ancestral"
      }
    ],
    "minimalist-compound": [
      {
        "name": "NomadVault",
        "rationale": "Off-Grid Base • Protected • Industrial"
      },
      {
        "name": "TrailHouse",
        "rationale": "Rustic Minimal • Wayfarer • Clean"
      },
      {
        "name": "RidgeWard",
        "rationale": "Panoramic • Elevated • Architectural"
      },
      {
        "name": "CabinLab",
        "rationale": "Compact Living • Sustainable • Sharp"
      },
      {
        "name": "OutpostLine",
        "rationale": "Remote Nodes • Connected • Linear"
      },
      {
        "name": "ForestStays",
        "rationale": "Direct • Honest • Biophilic"
      }
    ],
    "modern-playful": [
      {
        "name": "OffGridGo",
        "rationale": "Adventurous • Fast • Digital-Detox"
      },
      {
        "name": "WildNFree Co.",
        "rationale": "Spontaneous • Youthful • Energetic"
      },
      {
        "name": "CampVibes",
        "rationale": "Relaxed • Cozy • Community"
      },
      {
        "name": "TrailBlaze Pack",
        "rationale": "Pioneering • Fast • High-Spirit"
      },
      {
        "name": "LostAndFound Stays",
        "rationale": "Witty • Introspective • Fun"
      },
      {
        "name": "HappyCamper Lab",
        "rationale": "Optimistic • Cheerful • Modern"
      }
    ]
  },
  "creator-media": {
    "short-coined": [
      {
        "name": "Podx",
        "rationale": "Podcast • Variable • Punchy"
      },
      {
        "name": "Castr",
        "rationale": "Broadcast • Modern • Sleek"
      },
      {
        "name": "Chrom",
        "rationale": "Color Spectrum • Visual • Sharp"
      },
      {
        "name": "Micc",
        "rationale": "Microphone • Intimate • Snappy"
      },
      {
        "name": "Echoo",
        "rationale": "Resonant Sound • Repetitive • Warm"
      },
      {
        "name": "Vibe",
        "rationale": "Culture • Energy • Direct"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Resonant Signal",
        "rationale": "Clear • Authentic • High-Reach"
      },
      {
        "name": "Cultural Current",
        "rationale": "Flowing • Trend-Shaping • Dynamic"
      },
      {
        "name": "Broad Spectrum",
        "rationale": "Diverse Perspectives • Vibrant • Deep"
      },
      {
        "name": "Silver Frequency",
        "rationale": "Electromagnetic • Clear • Acoustic"
      },
      {
        "name": "Kinetic Voice",
        "rationale": "Actionable Commentary • Strong • Bold"
      },
      {
        "name": "Prism Channel",
        "rationale": "Refracting Light • Multichannel • Crisp"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Dhwani Media",
        "rationale": "Sanskrit Sound • Reverberating • Pure"
      },
      {
        "name": "Vani Broadcast",
        "rationale": "Sanskrit Goddess of Speech • Eloquent • Clear"
      },
      {
        "name": "Vox Collective",
        "rationale": "Latin Voice • Plural • Democratic"
      },
      {
        "name": "Chroma Network",
        "rationale": "Visual Richness • High-Fidelity • Modern"
      },
      {
        "name": "Sonus Productions",
        "rationale": "Latin Acoustic Sound • Sonic • Fine"
      },
      {
        "name": "Katha Studios",
        "rationale": "Sanskrit Narrative & Story • Deep • Ancient"
      }
    ],
    "sensory-texture": [
      {
        "name": "Crisp Audio",
        "rationale": "Noise-Free • High-Fidelity • Sharp"
      },
      {
        "name": "Deep Bass",
        "rationale": "Visceral • Resonating • Rhythmic"
      },
      {
        "name": "Warm Tube-Mic",
        "rationale": "Analog • Intimate • Velvet"
      },
      {
        "name": "Studio Acoustics",
        "rationale": "Padded • Echo-Free • Isolated"
      },
      {
        "name": "High-Definition Stream",
        "rationale": "Crystal Clear • Low-Buffer • Fluid"
      },
      {
        "name": "Resonant Vocal",
        "rationale": "Rich Pitch • Carrying • Clear"
      }
    ],
    "action-verb": [
      {
        "name": "CastCraft",
        "rationale": "Methodical Podcasting • Polished • Active"
      },
      {
        "name": "Speakwell",
        "rationale": "Articulate • Thoughtful • Authentic"
      },
      {
        "name": "Broadcastwise",
        "rationale": "Smart Distribution • Omnichannel • Fast"
      },
      {
        "name": "Streamforward",
        "rationale": "Live-Action • Future-Oriented • Kinetic"
      },
      {
        "name": "RecordPure",
        "rationale": "Unfiltered • Honest • High-Quality"
      },
      {
        "name": "TuneIn Co.",
        "rationale": "Engaging • Audience-Focused • Catchy"
      }
    ],
    "cultural-heritage": [
      {
        "name": "DesiNarratives",
        "rationale": "South Asian Perspectives • Rooted • Global"
      },
      {
        "name": "Bombay Studio Lot",
        "rationale": "Bollywood Heritage • Cinematic • Energetic"
      },
      {
        "name": "Deccan Voices",
        "rationale": "Southern Stories • Plural • Authentic"
      },
      {
        "name": "Delhi Dialogue Co.",
        "rationale": "Political & Cultural Discourse • Bold • Sharp"
      },
      {
        "name": "Indus Radio Network",
        "rationale": "Ancient River Valley • Broad • Timeless"
      },
      {
        "name": "Calcutta Chronicle",
        "rationale": "Literary Hub • Intellectual • Deep"
      }
    ],
    "minimalist-compound": [
      {
        "name": "SignalVault",
        "rationale": "Archival • High-Bitrate • Minimal"
      },
      {
        "name": "CastStudio",
        "rationale": "Functional • Dedicated • Clean"
      },
      {
        "name": "WaveHouse",
        "rationale": "Acoustic Shelter • Communal • Modern"
      },
      {
        "name": "AudioLab",
        "rationale": "Experimental Sound • Precision • Sharp"
      },
      {
        "name": "VoiceWard",
        "rationale": "Protected Opinion • Linear • Pure"
      },
      {
        "name": "MediaLine",
        "rationale": "Linear Network • Modern • Direct"
      }
    ],
    "modern-playful": [
      {
        "name": "MicDrop Co.",
        "rationale": "Decisive Statement • Pop Culture • Bold"
      },
      {
        "name": "LoudMouths Studio",
        "rationale": "Unapologetic • High-Energy • Fun"
      },
      {
        "name": "PodCulture",
        "rationale": "Community • Trendy • Approachable"
      },
      {
        "name": "EarCandy Network",
        "rationale": "Sweet Sound • Bingeable • Catchy"
      },
      {
        "name": "TalkyTalk",
        "rationale": "Informal • Friendly • Chatty"
      },
      {
        "name": "StudioBinge",
        "rationale": "Addictive Content • Marathon • GenZ"
      }
    ]
  },
  "ai-saas": {
    "short-coined": [
      {
        "name": "Synx",
        "rationale": "Synapse • Neural • Punchy"
      },
      {
        "name": "Neur",
        "rationale": "Neuron • Minimal • Sleek"
      },
      {
        "name": "Tensr",
        "rationale": "Tensor • Linear Algebra • Fast"
      },
      {
        "name": "Exaa",
        "rationale": "Exascale • Supercomputing • Bold"
      },
      {
        "name": "Crtx",
        "rationale": "Cortex • Intelligence • Compact"
      },
      {
        "name": "Optm",
        "rationale": "Optimization • Mathematical • Clean"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Neural Horizon",
        "rationale": "Frontier Intelligence • Expansive • Deep"
      },
      {
        "name": "Autonomous Engine",
        "rationale": "Self-Driving Logic • Reliable • Active"
      },
      {
        "name": "Cognitive Protocol",
        "rationale": "Machine Thinking • Structured • Formal"
      },
      {
        "name": "Silent Compute",
        "rationale": "Background Efficiency • Zero-Noise • Swift"
      },
      {
        "name": "Quantum Synapse",
        "rationale": "Next-Generation Processing • Interconnected • Rapid"
      },
      {
        "name": "Vector Lattice",
        "rationale": "Multi-Dimensional Space • Precision • Clean"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Budhi Systems",
        "rationale": "Sanskrit Intellect & Wisdom • Ancient • Deep"
      },
      {
        "name": "Yantra AI",
        "rationale": "Sanskrit Sacred Mechanism • Algorithmic • Powerful"
      },
      {
        "name": "Cortex Logic",
        "rationale": "Latin Cerebral Cortex • Reasoning • High-Speed"
      },
      {
        "name": "Cogito Neural",
        "rationale": "Latin I Think • Philosophical • Modern"
      },
      {
        "name": "Machina Protocol",
        "rationale": "Latin Machine • Deterministic • Robust"
      },
      {
        "name": "Nexus Intelligentia",
        "rationale": "Latin Hub of Intelligence • Enterprise • Scalable"
      }
    ],
    "sensory-texture": [
      {
        "name": "Zero-Latency",
        "rationale": "Sub-Millisecond • Instantaneous • Crisp"
      },
      {
        "name": "Silicon Logic",
        "rationale": "Semiconductor Grade • Hardened • Exacting"
      },
      {
        "name": "Deterministic Flow",
        "rationale": "Predictable • Reproducible • Robust"
      },
      {
        "name": "Photonic Speed",
        "rationale": "Light-Based • Ultra-Fast • Limitless"
      },
      {
        "name": "High-Throughput",
        "rationale": "Bulk Processing • High-Volume • Dense"
      },
      {
        "name": "Seamless Pipeline",
        "rationale": "Frictionless Integration • Continuous • Fluid"
      }
    ],
    "action-verb": [
      {
        "name": "ComputeCraft",
        "rationale": "Engineered Algorithms • Methodical • Strong"
      },
      {
        "name": "Automatewell",
        "rationale": "Self-Healing • Error-Free • Purposeful"
      },
      {
        "name": "ScaleForward",
        "rationale": "High-Growth Infrastructure • Future-First • Resilient"
      },
      {
        "name": "Inferwise",
        "rationale": "Intelligent Inference • Low-Token • Efficient"
      },
      {
        "name": "OptimizePure",
        "rationale": "Algorithmic Efficiency • Lean • Direct"
      },
      {
        "name": "PredictEngine",
        "rationale": "Forecasting Accuracy • Machine-Driven • Sharp"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Aryabhata Logic",
        "rationale": "Ancient Indian Mathematician • Zero Pioneer • Deep"
      },
      {
        "name": "Bengaluru Silicon Labs",
        "rationale": "India's Tech Capital • Innovation Hub • Elite"
      },
      {
        "name": "Ramanujan Math Systems",
        "rationale": "Infinite Formulas • Intuitive • Pure Genius"
      },
      {
        "name": "Indus AI Research",
        "rationale": "Ancient Civilization • Structured • Timeless"
      },
      {
        "name": "Deccan Neural Labs",
        "rationale": "Southern Tech Corridor • High-Velocity • Sound"
      },
      {
        "name": "Cyberabad Cloud",
        "rationale": "Hyderabad Tech Metropolis • Scalable • Modern"
      }
    ],
    "minimalist-compound": [
      {
        "name": "TensorVault",
        "rationale": "Encrypted Weights • Monolithic • Safe"
      },
      {
        "name": "LogicBox",
        "rationale": "Deterministic Compute • Clean • Structured"
      },
      {
        "name": "NeuralLab",
        "rationale": "Experimental AI • Research-Grade • Sharp"
      },
      {
        "name": "VectorWard",
        "rationale": "Embedding Space • Protected • Minimal"
      },
      {
        "name": "CortexLine",
        "rationale": "Linear Inference • Pipeline • Modern"
      },
      {
        "name": "ModelHouse",
        "rationale": "Registry of Models • Central • Solid"
      }
    ],
    "modern-playful": [
      {
        "name": "SmartyPants AI",
        "rationale": "Cheeky • Hyper-Intelligent • Approachable"
      },
      {
        "name": "BrainyBot Co.",
        "rationale": "Friendly Assistant • Catchy • Clear"
      },
      {
        "name": "SuperFast AI",
        "rationale": "Benefit-Driven • Literal • High-Conversion"
      },
      {
        "name": "AlgoRhythm",
        "rationale": "Musical Pun • Harmonious Data • Clever"
      },
      {
        "name": "NextGenie",
        "rationale": "Wish-Fulfilling • Magical Automations • Pop"
      },
      {
        "name": "PromptHero",
        "rationale": "Developer Empowerment • Catchy • GenZ"
      }
    ]
  },
  "fintech-crypto": {
    "short-coined": [
      {
        "name": "Ledgr",
        "rationale": "Accounting • Immutable • Punchy"
      },
      {
        "name": "Payy",
        "rationale": "Payments • Instant • Snappy"
      },
      {
        "name": "Vult",
        "rationale": "Vault • Secure • Compact"
      },
      {
        "name": "Mintt",
        "rationale": "Coin Generation • Fresh • Crisp"
      },
      {
        "name": "Solv",
        "rationale": "Solvency • Mathematical • Sharp"
      },
      {
        "name": "Ciph",
        "rationale": "Cipher • Cryptographic • Sleek"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Sovereign Vault",
        "rationale": "Self-Custodial • Fortified • Dignified"
      },
      {
        "name": "Frictionless Rail",
        "rationale": "Zero-Latency Settlement • Smooth • High-Speed"
      },
      {
        "name": "Trust Protocol",
        "rationale": "Mathematical Verification • Fair • Transparent"
      },
      {
        "name": "Golden Ledger",
        "rationale": "Double-Entry • Wealth-Building • Enduring"
      },
      {
        "name": "Meridian Mint",
        "rationale": "Global Standard • Precision • Solid"
      },
      {
        "name": "Liquid Apex",
        "rationale": "Maximum Liquidity • Peak Capital • Dynamic"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Artha Finance",
        "rationale": "Sanskrit Wealth & Material Purpose • Sacred • True"
      },
      {
        "name": "Kuber Wealth",
        "rationale": "Lord of Treasury • Abundant • Prestigious"
      },
      {
        "name": "Fiscus Capital",
        "rationale": "Latin Public Treasury • Institutional • Solid"
      },
      {
        "name": "Moneta Protocol",
        "rationale": "Roman Goddess of Money • Ancient • Sovereign"
      },
      {
        "name": "Credo Trust",
        "rationale": "Latin Belief • Audited • Fiduciary"
      },
      {
        "name": "Sovereign Pay",
        "rationale": "Decentralized • Uncensorable • Royal"
      }
    ],
    "sensory-texture": [
      {
        "name": "Instant Settlement",
        "rationale": "Sub-Second • Finality • Real-Time"
      },
      {
        "name": "Cryptographic Hash",
        "rationale": "SHA-256 • Unalterable • Hardened"
      },
      {
        "name": "Cold-Storage Security",
        "rationale": "Air-Gapped • Ice-Cold • Protected"
      },
      {
        "name": "Solid Liquidity",
        "rationale": "Deep Orderbook • Slippage-Free • Dense"
      },
      {
        "name": "Audited Precision",
        "rationale": "Zero-Variance • Clean • Verified"
      },
      {
        "name": "Frictionless Checkout",
        "rationale": "Single-Click • Seamless • Swift"
      }
    ],
    "action-verb": [
      {
        "name": "SettleCraft",
        "rationale": "Precision Clearing • Reliable • Active"
      },
      {
        "name": "Paywell",
        "rationale": "Fair Exchange • Generous • Seamless"
      },
      {
        "name": "Yieldwise",
        "rationale": "Intelligent Compounding • High-Return • Smart"
      },
      {
        "name": "TransactForward",
        "rationale": "Future Rails • Borderless • Modern"
      },
      {
        "name": "MintPure",
        "rationale": "Unbacked Currency-Free • Sound • Honest"
      },
      {
        "name": "VaultSafe",
        "rationale": "Custodial Shield • Fortified • Direct"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Hundi Rails",
        "rationale": "Centuries-Old Indian Credit Note • Trust-Based • Iconic"
      },
      {
        "name": "Chanakya Capital",
        "rationale": "Ancient Economic Strategist • Arthashastra • Sage"
      },
      {
        "name": "Bombay Stock Labs",
        "rationale": "Asia's Oldest Exchange • Street • Veteran"
      },
      {
        "name": "Lakshmi Treasury",
        "rationale": "Goddess of Fortune • Auspicious • Abundant"
      },
      {
        "name": "Marwari Mercantile",
        "rationale": "Legendary Business Acumen • Frugal • Prosperous"
      },
      {
        "name": "Chettiar Trust",
        "rationale": "Pioneering Indian Bankers • Integrity • Historic"
      }
    ],
    "minimalist-compound": [
      {
        "name": "LedgerVault",
        "rationale": "Double-Entry • Fortified • Minimal"
      },
      {
        "name": "CoinHouse",
        "rationale": "Digital Assets • Domestic • Solid"
      },
      {
        "name": "AssetLab",
        "rationale": "Quantitative Models • Experimental • Clean"
      },
      {
        "name": "PayWard",
        "rationale": "Escrow • Protected • Structured"
      },
      {
        "name": "TokenLine",
        "rationale": "Linear Protocol • Modern • Direct"
      },
      {
        "name": "TrustBox",
        "rationale": "Simple Interface • Audited • Clear"
      }
    ],
    "modern-playful": [
      {
        "name": "MoneyHoney",
        "rationale": "Sweet Finances • Catchy • Upbeat"
      },
      {
        "name": "CryptoChai",
        "rationale": "Indian Web3 • Casual • Community"
      },
      {
        "name": "CashFlow Co.",
        "rationale": "Direct • Goal-Oriented • Snappy"
      },
      {
        "name": "SmartSpend",
        "rationale": "Budget-Friendly • Sensible • Pop"
      },
      {
        "name": "PocketRocket Pay",
        "rationale": "Fast • High-Growth • Fun"
      },
      {
        "name": "PennyWise App",
        "rationale": "Prudent • Clever • Approachable"
      }
    ]
  },
  "cybersecurity": {
    "short-coined": [
      {
        "name": "Wardn",
        "rationale": "Warden • Security • Punchy"
      },
      {
        "name": "Aegs",
        "rationale": "Aegis Shield • Greek • Sleek"
      },
      {
        "name": "Ciphx",
        "rationale": "Cipher • Cryptographic • Compact"
      },
      {
        "name": "Bastn",
        "rationale": "Bastion Fortress • Strong • Clean"
      },
      {
        "name": "Sentr",
        "rationale": "Sentry • Guard • Sharp"
      },
      {
        "name": "Lockd",
        "rationale": "Hardened • Protected • Snappy"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Iron Fortress",
        "rationale": "Impenetrable • Heavyweight • Hardened"
      },
      {
        "name": "Zero Boundary",
        "rationale": "Zero-Trust Architecture • Infinite • Vigilant"
      },
      {
        "name": "Deep Shield",
        "rationale": "Multi-Layered Defense • Resilient • Covert"
      },
      {
        "name": "Sentinel Watch",
        "rationale": "24/7 Monitoring • Alert • Unblinking"
      },
      {
        "name": "Diamond Perimeter",
        "rationale": "Unbreakable Edge • Faceted • Crystalline"
      },
      {
        "name": "Silent Ward",
        "rationale": "Invisible Protection • Quiet • Strong"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Raksha Cyber",
        "rationale": "Sanskrit Protection • Patriotic • Unfailing"
      },
      {
        "name": "Kavach Security",
        "rationale": "Sanskrit Invulnerable Armor • Ancient • Solid"
      },
      {
        "name": "Aegis Defensio",
        "rationale": "Latin Shield of Gods • Sovereign • Invincible"
      },
      {
        "name": "Custos Protocol",
        "rationale": "Latin Guardian • Dedicated • Strict"
      },
      {
        "name": "Praetorian Labs",
        "rationale": "Elite Roman Guard • Hardened • Elite"
      },
      {
        "name": "Vallum Guard",
        "rationale": "Latin Defensive Wall • Fortified • Deep"
      }
    ],
    "sensory-texture": [
      {
        "name": "Air-Gapped Isolation",
        "rationale": "Zero Network Contact • Cold • Unbreachable"
      },
      {
        "name": "Military Hardened",
        "rationale": "Battle-Tested • Tamper-Resistant • Rugged"
      },
      {
        "name": "Encrypted Payload",
        "rationale": "Inscrutable • Mathematical • Sealed"
      },
      {
        "name": "Kernel-Level Lock",
        "rationale": "Ring 0 Access • Root Defense • Absolute"
      },
      {
        "name": "Cryptographic Wall",
        "rationale": "Quantum-Resistant • Dense • Solid"
      },
      {
        "name": "Real-Time Defense",
        "rationale": "Zero-Second Reaction • Fluid • Electric"
      }
    ],
    "action-verb": [
      {
        "name": "ShieldCraft",
        "rationale": "Constructed Defense • Active • Methodical"
      },
      {
        "name": "Defendwell",
        "rationale": "Ethical Defense • Resilient • True"
      },
      {
        "name": "Guardwise",
        "rationale": "Intelligent Surveillance • Predictive • Sharp"
      },
      {
        "name": "FortifyForward",
        "rationale": "Proactive Hardening • Progressive • Strong"
      },
      {
        "name": "ProtectPure",
        "rationale": "Uncompromising Integrity • Clean • Direct"
      },
      {
        "name": "LockDown",
        "rationale": "Emergency Containment • Decisive • Rapid"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Shivaji Fort Security",
        "rationale": "Hill Fort Strategy • Guerrilla Defense • Legendary"
      },
      {
        "name": "RedFort Systems",
        "rationale": "Imperial Citadel Walls • Monumental • Historic"
      },
      {
        "name": "Ashoka Guard Labs",
        "rationale": "Four-Lions Emblem • Sovereign • Steadfast"
      },
      {
        "name": "Vijayanagar Aegis",
        "rationale": "Impenetrable Granite Bastions • Ancient • Royal"
      },
      {
        "name": "Chhatrapati Cyber",
        "rationale": "Warrior Legacy • High-Honor • Unbreakable"
      },
      {
        "name": "Golconda Bulwark",
        "rationale": "Diamond Fortress • Acoustic Warning • Wise"
      }
    ],
    "minimalist-compound": [
      {
        "name": "ShieldVault",
        "rationale": "Encrypted Isolation • Monolithic • Safe"
      },
      {
        "name": "CipherLab",
        "rationale": "Cryptographic Research • Clean • Scientific"
      },
      {
        "name": "BastionHouse",
        "rationale": "Perimeter Citadel • Structured • Modern"
      },
      {
        "name": "GuardWard",
        "rationale": "Dual-Layer Security • Architectural • Minimal"
      },
      {
        "name": "SentinelLine",
        "rationale": "Boundary Defense • Linear • Sharp"
      },
      {
        "name": "ThreatBox",
        "rationale": "Sandbox Isolation • Contained • Direct"
      }
    ],
    "modern-playful": [
      {
        "name": "HackerBlock",
        "rationale": "Direct Action • Conversational • Punchy"
      },
      {
        "name": "ZeroTrust Me",
        "rationale": "Security Pun • Witty • GenZ"
      },
      {
        "name": "LockBoxy",
        "rationale": "Approachably Secure • Clean • Snappy"
      },
      {
        "name": "BugBusters",
        "rationale": "Pop-Culture Tribute • Energetic • Fun"
      },
      {
        "name": "GhostShield",
        "rationale": "Invisible Defense • Stealth • Cool"
      },
      {
        "name": "SafeKeepers Co.",
        "rationale": "Trustworthy • Friendly • Simple"
      }
    ]
  },
  "edtech-learning": {
    "short-coined": [
      {
        "name": "Skilz",
        "rationale": "Skills • Punchy • Modern"
      },
      {
        "name": "Pedg",
        "rationale": "Pedagogy • Compact • Educational"
      },
      {
        "name": "Mast",
        "rationale": "Mastery • Clean • Direct"
      },
      {
        "name": "Lurn",
        "rationale": "Learn • Coined • Approachable"
      },
      {
        "name": "Asnd",
        "rationale": "Ascend • Growth • Sharp"
      },
      {
        "name": "Curio",
        "rationale": "Curiosity • Inquisitive • Snappy"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Illuminating Path",
        "rationale": "Enlightening • Step-by-Step • Clear"
      },
      {
        "name": "Curious Mind",
        "rationale": "Inquisitive • Exploratory • Open"
      },
      {
        "name": "Ascending Horizon",
        "rationale": "Progressive • Broadening • Hopeful"
      },
      {
        "name": "Knowledge Spring",
        "rationale": "Abundant Fountain • Fresh • Life-Giving"
      },
      {
        "name": "Deep Insight",
        "rationale": "Profound Understanding • Grounded • True"
      },
      {
        "name": "Mastery Tree",
        "rationale": "Branching Skills • Deep Roots • Enduring"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Vidya Learning",
        "rationale": "Sanskrit True Knowledge • Sacred • Illuminating"
      },
      {
        "name": "Gurukul Interactive",
        "rationale": "Ancient Residential Academy • Mentorship • Deep"
      },
      {
        "name": "Schola Academy",
        "rationale": "Latin School of Thought • Rigorous • Classic"
      },
      {
        "name": "Pedagogia Labs",
        "rationale": "Teaching Science • Methodical • Modern"
      },
      {
        "name": "Cognitio Platform",
        "rationale": "Latin Understanding • Cognitive • Precision"
      },
      {
        "name": "Dnyan Tech",
        "rationale": "Sanskrit Wisdom • Applied Science • Pure"
      }
    ],
    "sensory-texture": [
      {
        "name": "Interactive Mastery",
        "rationale": "Hands-On • Engaging • Tactile"
      },
      {
        "name": "Micro-Learning",
        "rationale": "Bite-Sized • Digestible • Fast"
      },
      {
        "name": "Crisp Pedagogy",
        "rationale": "Structured • No-Fluff • Sharp"
      },
      {
        "name": "Self-Paced Flow",
        "rationale": "Pressure-Free • Adaptive • Fluid"
      },
      {
        "name": "Gamified Feedback",
        "rationale": "Immediate Reward • Visual • Electric"
      },
      {
        "name": "Deep Retention",
        "rationale": "Spaced Repetition • Permanent • Sound"
      }
    ],
    "action-verb": [
      {
        "name": "LearnCraft",
        "rationale": "Constructed Understanding • Active • Methodical"
      },
      {
        "name": "Teachwell",
        "rationale": "Empathetic Mentorship • High-Standard • True"
      },
      {
        "name": "Masterwise",
        "rationale": "Competency-Driven • Intelligent • Steady"
      },
      {
        "name": "UpskillForward",
        "rationale": "Career-Ready • Future-Proof • Ambitious"
      },
      {
        "name": "MentorPure",
        "rationale": "Unfiltered Guidance • Direct • Honest"
      },
      {
        "name": "AscendSkills",
        "rationale": "Vertical Growth • High-Achievement • Clean"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Nalanda Classrooms",
        "rationale": "World's First University • Ancient Bihar • Grand"
      },
      {
        "name": "Takshashila EdTech",
        "rationale": "Ancient Center of Higher Learning • Legendary • Deep"
      },
      {
        "name": "Kashi Scholars",
        "rationale": "Seat of Sanskrit Debate • Intellectual • Venerable"
      },
      {
        "name": "Shantiniketan Online",
        "rationale": "Tagore's Open-Air Education • Creative • Wholesome"
      },
      {
        "name": "Vedic Academy",
        "rationale": "Holistic Inquiry • Mind-Body-Soul • Timeless"
      },
      {
        "name": "Ujjain Astronomy Lab",
        "rationale": "Ancient Mathematical Meridian • Precise • Historic"
      }
    ],
    "minimalist-compound": [
      {
        "name": "SkillVault",
        "rationale": "Curated Knowledge • Protected • Structured"
      },
      {
        "name": "LearnHouse",
        "rationale": "Communal Study • Welcoming • Clean"
      },
      {
        "name": "StudyLab",
        "rationale": "Empirical Learning • Modern • Sharp"
      },
      {
        "name": "MentorWard",
        "rationale": "Protected Guidance • Linear • Minimal"
      },
      {
        "name": "KnowledgeLine",
        "rationale": "Sequential Curriculum • Modern • Direct"
      },
      {
        "name": "ClassBox",
        "rationale": "Modular Education • Practical • Compact"
      }
    ],
    "modern-playful": [
      {
        "name": "BrainBox Learning",
        "rationale": "Catchy • Smart • Approachable"
      },
      {
        "name": "StudyBuddy Co.",
        "rationale": "Peer-to-Peer • Friendly • Casual"
      },
      {
        "name": "SkillUp Now",
        "rationale": "Urgent • Actionable • Pop"
      },
      {
        "name": "SmartCookies",
        "rationale": "Affectionate • Witty • High-Spirit"
      },
      {
        "name": "QuizWiz",
        "rationale": "Rhyming • Gamified • Fun"
      },
      {
        "name": "Learnr App",
        "rationale": "Vowel-Dropped • Modern Tech • Snappy"
      }
    ]
  },
  "gaming-esports": {
    "short-coined": [
      {
        "name": "Nexx",
        "rationale": "Nexus • Gaming • Punchy"
      },
      {
        "name": "Vrtx",
        "rationale": "Vortex • Kinetic • Compact"
      },
      {
        "name": "Gltch",
        "rationale": "Glitch • Counter-Culture • Sharp"
      },
      {
        "name": "Fragg",
        "rationale": "FPS Elimination • High-Energy • Snappy"
      },
      {
        "name": "Spwn",
        "rationale": "Spawn Point • Game Mechanic • Clean"
      },
      {
        "name": "Rogu",
        "rationale": "Rogue-Like • Independent • Edgy"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Electric Arena",
        "rationale": "High-Voltage • Esports • Neon"
      },
      {
        "name": "Crimson Respawn",
        "rationale": "High-Stakes • Instant Recovery • Bold"
      },
      {
        "name": "Quantum Havoc",
        "rationale": "Unpredictable • Multi-Dimensional • Wild"
      },
      {
        "name": "Neon Horizon",
        "rationale": "Cyberpunk Aesthetic • Luminous • Future"
      },
      {
        "name": "Titan Clash",
        "rationale": "Monumental • Competitive • Heavy"
      },
      {
        "name": "Cyber Odyssey",
        "rationale": "Epic Narrative • Futuristic • Deep"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Astra Gaming",
        "rationale": "Sanskrit Celestial Weapon • Devastating • Epic"
      },
      {
        "name": "Veera Esports",
        "rationale": "Sanskrit Heroic Warrior • Competitive • Bold"
      },
      {
        "name": "Ludus Interactive",
        "rationale": "Latin Gladiatorial Game • Training • Classical"
      },
      {
        "name": "Titanus Studios",
        "rationale": "Mythic Giant • High-Production • Heavy"
      },
      {
        "name": "Invictus Arena",
        "rationale": "Latin Unconquered • Esports Trophy • Champion"
      },
      {
        "name": "Bellum Play",
        "rationale": "Latin Warfare • Tactical • Direct"
      }
    ],
    "sensory-texture": [
      {
        "name": "Low-Latency 240Hz",
        "rationale": "Fluid Frame-Rate • Twitch Reaction • Smooth"
      },
      {
        "name": "Mechanical Click",
        "rationale": "Tactile Switches • Audible • Precision"
      },
      {
        "name": "Neon Glow",
        "rationale": "Cyberpunk RGB • Visceral • Electric"
      },
      {
        "name": "Haptic Rumble",
        "rationale": "Immersive Feedback • Visceral • Shaking"
      },
      {
        "name": "Surround Audio",
        "rationale": "Spatial Sound • Footsteps • Directional"
      },
      {
        "name": "Adrenaline Spike",
        "rationale": "High-Heart-Rate • Clutch Play • Electric"
      }
    ],
    "action-verb": [
      {
        "name": "PlayCraft",
        "rationale": "Game Design • Interactive • Intentional"
      },
      {
        "name": "Respawnwell",
        "rationale": "Quick Recovery • Competitive • Relentless"
      },
      {
        "name": "FragForward",
        "rationale": "Offensive Momentum • Fast • Bold"
      },
      {
        "name": "Levelwise",
        "rationale": "Skill Progression • Strategic • Steady"
      },
      {
        "name": "CompetePure",
        "rationale": "Fair Play • High-Stakes • Honest"
      },
      {
        "name": "WinMatch",
        "rationale": "Victory-Driven • Direct • Uncompromising"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Kurukshetra Arena",
        "rationale": "Epic Battlefield of Mahabharata • Tactical • Mythic"
      },
      {
        "name": "Maratha Gaming Lot",
        "rationale": "Guerrilla Tactics • High-Courage • Historic"
      },
      {
        "name": "Indus Warriors",
        "rationale": "Ancient Fighters • Competitive • United"
      },
      {
        "name": "Bombay Esports League",
        "rationale": "Urban Megacity • Fast-Paced • High-Energy"
      },
      {
        "name": "Vedic Astra Studios",
        "rationale": "Mythological Weapons IP • Cinematic • Deep"
      },
      {
        "name": "Deccan Titans",
        "rationale": "Southern Champions • Resilient • Heavy"
      }
    ],
    "minimalist-compound": [
      {
        "name": "ApexVault",
        "rationale": "Loot Locker • Fortified • Minimal"
      },
      {
        "name": "PixelStudio",
        "rationale": "Retro & Modern Art • Clean • Geometric"
      },
      {
        "name": "ArenaLab",
        "rationale": "Competitive Tuning • High-Tech • Sharp"
      },
      {
        "name": "GlitchWard",
        "rationale": "Cyber Security • Sheltered • Dark"
      },
      {
        "name": "SpawnHouse",
        "rationale": "Starting Base • Communal • Direct"
      },
      {
        "name": "GameLine",
        "rationale": "Production Pipeline • Linear • Modern"
      }
    ],
    "modern-playful": [
      {
        "name": "GGNoobs Co.",
        "rationale": "Gaming Slang • Witty • GenZ"
      },
      {
        "name": "RespawnZone",
        "rationale": "Safe Haven • Catchy • Upbeat"
      },
      {
        "name": "JoystickJunkies",
        "rationale": "Enthusiast Fanbase • Relatable • Fun"
      },
      {
        "name": "FragSquad",
        "rationale": "Multiplayer Team • High-Energy • Snappy"
      },
      {
        "name": "NoScope Studio",
        "rationale": "Trickshot Meme • Skilled • Bold"
      },
      {
        "name": "GameOverMan",
        "rationale": "Classic Movie Quote • Nostalgic • Pop"
      }
    ]
  },
  "developer-tools": {
    "short-coined": [
      {
        "name": "Bytt",
        "rationale": "Byte • Computing • Punchy"
      },
      {
        "name": "Krnl",
        "rationale": "Kernel • OS Core • Compact"
      },
      {
        "name": "Pyp",
        "rationale": "Pipe • Unix Philosophy • Snappy"
      },
      {
        "name": "Daem",
        "rationale": "Daemon • Background Service • Sleek"
      },
      {
        "name": "Gitx",
        "rationale": "Version Control • Modern • Sharp"
      },
      {
        "name": "Term",
        "rationale": "Terminal • Command-Line • Direct"
      }
    ],
    "two-word-metaphor": [
      {
        "name": "Declarative Pipe",
        "rationale": "Idempotent Flow • Functional • Elegant"
      },
      {
        "name": "Compiler Loom",
        "rationale": "Weaving Source Code • Precise • Structured"
      },
      {
        "name": "Kernel Core",
        "rationale": "Central Execution • Low-Level • Unshakable"
      },
      {
        "name": "Branching River",
        "rationale": "Git Branches • Fluid • Collaborative"
      },
      {
        "name": "Terminal Beacon",
        "rationale": "Guiding Output • Clear • Illuminating"
      },
      {
        "name": "Syntax Bridge",
        "rationale": "Connecting Paradigms • Seamless • Solid"
      }
    ],
    "sanskrit-latin": [
      {
        "name": "Sutra Syntax",
        "rationale": "Sanskrit Aphorism / Rule • Declarative • Concise"
      },
      {
        "name": "Karman Runtime",
        "rationale": "Sanskrit Action & Execution • Deterministic • Fast"
      },
      {
        "name": "Machina Dev",
        "rationale": "Latin Machine • High-Throughput • Clean"
      },
      {
        "name": "Fabrica Code",
        "rationale": "Latin Workshop • Hand-Crafted Software • Solid"
      },
      {
        "name": "Modus Engine",
        "rationale": "Latin Method • Architectural • Extensible"
      },
      {
        "name": "Praxis Infra",
        "rationale": "Greek Practical Application • Cloud-Native • Real"
      }
    ],
    "sensory-texture": [
      {
        "name": "Zero-Overhead",
        "rationale": "C-Level Efficiency • Bare-Metal • Lightweight"
      },
      {
        "name": "Sub-Millisecond Build",
        "rationale": "Instant Compilation • Fluid • Fast"
      },
      {
        "name": "Type-Safe Guarantee",
        "rationale": "Compiler-Verified • Zero-Crash • Robust"
      },
      {
        "name": "Terminal-Native CLI",
        "rationale": "Keyboard-First • Minimalist • Ergonomic"
      },
      {
        "name": "Single-Binary Footprint",
        "rationale": "Self-Contained • Portable • Dense"
      },
      {
        "name": "Deterministic Artifact",
        "rationale": "Byte-for-Byte Exact • Pure • Sound"
      }
    ],
    "action-verb": [
      {
        "name": "BuildCraft",
        "rationale": "Constructed Tooling • Methodical • Clean"
      },
      {
        "name": "Deploywell",
        "rationale": "Zero-Downtime • Continuous • Sound"
      },
      {
        "name": "Compilewise",
        "rationale": "Smart Optimization • Tree-Shaking • Fast"
      },
      {
        "name": "ShipForward",
        "rationale": "High-Velocity CI/CD • Ambitious • Rapid"
      },
      {
        "name": "CodePure",
        "rationale": "Zero-Boilerplate • Readable • Honest"
      },
      {
        "name": "TestFast",
        "rationale": "Instant Feedback Loop • Parallel • Sharp"
      }
    ],
    "cultural-heritage": [
      {
        "name": "Silicon Bengaluru",
        "rationale": "India's Tech Capital • Open Source • Global"
      },
      {
        "name": "Indus Kernel Project",
        "rationale": "Ancient Civil Engineering • Foundational • Deep"
      },
      {
        "name": "Cyberabad Systems",
        "rationale": "Modern Cloud Corridor • Enterprise-Ready • Sound"
      },
      {
        "name": "Deccan Devs Collective",
        "rationale": "Southern Hacker Culture • High-Impact • Real"
      },
      {
        "name": "Aryabhata Algorithms",
        "rationale": "Pioneering Computing Heritage • Exact • Pure"
      },
      {
        "name": "Pune Linux Guild",
        "rationale": "Grassroots Open Source • Community • Strong"
      }
    ],
    "minimalist-compound": [
      {
        "name": "StackVault",
        "rationale": "Infrastructure Registry • Monolithic • Safe"
      },
      {
        "name": "KernelLab",
        "rationale": "Low-Level Systems • Research-Grade • Sharp"
      },
      {
        "name": "PipeHouse",
        "rationale": "Composable Unix Tools • Structured • Clean"
      },
      {
        "name": "DevWard",
        "rationale": "Isolated Sandbox • Protected • Minimal"
      },
      {
        "name": "DeployLine",
        "rationale": "Linear Automation • GitOps • Modern"
      },
      {
        "name": "ToolBox CLI",
        "rationale": "Everyday Utilities • Ergonomic • Practical"
      }
    ],
    "modern-playful": [
      {
        "name": "ShipItBro",
        "rationale": "Hacker Culture Meme • Action-Oriented • Funny"
      },
      {
        "name": "CodeMonkey Co.",
        "rationale": "Self-Deprecating • Relatable • Catchy"
      },
      {
        "name": "BugFree Life",
        "rationale": "Aspirational • Cheerful • Modern"
      },
      {
        "name": "GitGud Tools",
        "rationale": "Gamer/Coder Crossover • High-Skill • Bold"
      },
      {
        "name": "CtrlZ Club",
        "rationale": "Safe Undos • Forgiving Systems • Pop"
      },
      {
        "name": "TerminalNinja",
        "rationale": "Command-Line Master • Fast • Stealthy"
      }
    ]
  }
};

  function getNicheDictionaryKey(niche = '') {
    const s = (niche || '').toLowerCase();
    if (s.includes('coffee') || s.includes('chai') || s.includes('tea') || s.includes('cafe')) return 'coffee-chai';
    if (s.includes('bakery') || s.includes('bread') || s.includes('cake') || s.includes('cloud kitchen')) return 'bakery-kitchen';
    if (s.includes('kombucha') || s.includes('beverage') || s.includes('tonic') || s.includes('juice') || s.includes('drink')) return 'craft-beverages';
    if (s.includes('vegan') || s.includes('plant') || s.includes('health food') || s.includes('organic food')) return 'vegan-health';
    if (s.includes('skincare') || s.includes('beauty') || s.includes('cosmetic') || s.includes('serum') || s.includes('candle') || s.includes('perfume') || s.includes('fragrance')) return 'organic-skincare';
    if (s.includes('streetwear') || s.includes('fashion') || s.includes('apparel') || s.includes('clothing')) return 'streetwear-fashion';
    if (s.includes('jewelry') || s.includes('watch') || s.includes('gem') || s.includes('gold')) return 'luxury-jewelry';
    if (s.includes('fitness') || s.includes('yoga') || s.includes('gym') || s.includes('pilates')) return 'fitness-yoga';
    if (s.includes('mental health') || s.includes('mindfulness') || s.includes('meditation') || s.includes('therapy')) return 'mental-health';
    if (s.includes('pet') || s.includes('dog') || s.includes('cat') || s.includes('animal') || s.includes('grooming')) return 'pet-care';
    if (s.includes('interior') || s.includes('decor') || s.includes('furniture') || s.includes('architect')) return 'interior-design';
    if (s.includes('wedding') || s.includes('event') || s.includes('party') || s.includes('soiree')) return 'event-planning';
    if (s.includes('travel') || s.includes('stay') || s.includes('resort') || s.includes('hotel') || s.includes('retreat')) return 'eco-travel';
    if (s.includes('podcast') || s.includes('creator') || s.includes('media') || s.includes('youtube') || s.includes('broadcast')) return 'creator-media';
    if (s.includes('ai') || s.includes('saas') || s.includes('automation') || s.includes('machine learning')) return 'ai-saas';
    if (s.includes('fintech') || s.includes('crypto') || s.includes('bank') || s.includes('payment') || s.includes('wealth')) return 'fintech-crypto';
    if (s.includes('cyber') || s.includes('security') || s.includes('infosec') || s.includes('firewall')) return 'cybersecurity';
    if (s.includes('edtech') || s.includes('learn') || s.includes('education') || s.includes('course') || s.includes('academy')) return 'edtech-learning';
    if (s.includes('game') || s.includes('gaming') || s.includes('esport') || s.includes('arcade')) return 'gaming-esports';
    if (s.includes('dev') || s.includes('developer') || s.includes('code') || s.includes('api') || s.includes('infra')) return 'developer-tools';
    return 'organic-skincare'; // default fallback
  }

  function getAffixes(name) {
    const clean = (name || '').toLowerCase().replace(/[^a-z]/g, '');
    const prefix = clean.slice(0, 3);
    const suffix = clean.slice(-3);
    return { prefix, suffix };
  }

  function generateProceduralSuggestedNames(niche = '', vibe = 'eco-organic', count = 8) {
    const dictKey = getNicheDictionaryKey(niche);
    const pool = NICHE_ARCHETYPE_POOLS[dictKey] || NICHE_ARCHETYPE_POOLS['coffee-chai'];

    const results = [];
    const usedPrefixes = new Set();
    const usedSuffixes = new Set();

    // Generate exactly one name per archetype across all 8 archetypes
    for (const arch of NAMING_ARCHETYPES) {
      const candidates = [...(pool[arch.id] || [])].sort(() => Math.random() - 0.5);
      let selected = null;

      for (const cand of candidates) {
        const { prefix, suffix } = getAffixes(cand.name);
        if (prefix.length >= 3 && suffix.length >= 3) {
          if (!usedPrefixes.has(prefix) && !usedSuffixes.has(suffix)) {
            selected = cand;
            usedPrefixes.add(prefix);
            usedSuffixes.add(suffix);
            break;
          }
        }
      }

      if (!selected && candidates.length > 0) {
        selected = candidates[0];
        const { prefix, suffix } = getAffixes(selected.name);
        usedPrefixes.add(prefix);
        usedSuffixes.add(suffix);
      }

      if (selected) {
        results.push({
          archetype: arch.label,
          archetypeId: arch.id,
          archetypeIcon: arch.icon,
          name: selected.name,
          rationale: selected.rationale
        });
      }
    }

    return results.slice(0, count);
  }

  async function generateSuggestedNamesWithGemini(niche, vibe, audience) {
    const promptText = `
You are an elite Brand Naming Strategist & Identity Specialist.
Generate EXACTLY 8 distinct, highly brandable business name ideas for:
- Industry / Sector: "${niche}"
- Brand Vibe / Archetype: "${vibe}" (minimalist-luxury, bold-genz, eco-organic, tech-futuristic)
- Target Audience: "${audience}"

CRITICAL REQUIREMENT — 8 SEPARATE NAMING ARCHETYPES:
Each of the 8 names MUST strictly follow one of the 8 distinct naming archetypes below in exact order:
1. Short 4-5 letter coined word (e.g., Zora, Kaffo, Velo)
2. Evocative two-word metaphor (e.g., Solstice & Bean, Amber & Hearth)
3. Sanskrit or Latin root word (e.g., Kavita, Terroir, Prana)
4. Sensory or texture word (e.g., Velvety, Silken, Crisp)
5. Action-driven verb name (e.g., SteepCraft, Awaken Co., Stirwell)
6. Cultural or heritage nod (e.g., Malabar Steeps, Deccan Chai)
7. Minimalist compound (e.g., BeanVault, ChaiPress, SteamLine)
8. Modern playful twist (e.g., SipHappens, WiredChai, DailyDrip)

STRICT DIVERSITY RULE:
- NEVER repeat the same prefix (first 3 letters) or suffix (last 3 letters) across the 8 names.
- Each name must have a completely unique phonetic opening, cadence, and ending.
- Each name must be distinct, memorable, and market-ready (avoid generic dictionary words alone).
- Provide a punchy 3-word rationale tag for each name (e.g., "Artisanal • Roasted • Slow-Crafted").

Return a SINGLE valid JSON object matching this schema strictly:
{
  "names": [
    { "name": "Name1", "archetype": "Short Coined", "rationale": "Word1 • Word2 • Word3" },
    { "name": "Name2", "archetype": "Two-Word Metaphor", "rationale": "Word1 • Word2 • Word3" },
    { "name": "Name3", "archetype": "Sanskrit / Latin Root", "rationale": "Word1 • Word2 • Word3" },
    { "name": "Name4", "archetype": "Sensory & Texture", "rationale": "Word1 • Word2 • Word3" },
    { "name": "Name5", "archetype": "Action Verb", "rationale": "Word1 • Word2 • Word3" },
    { "name": "Name6", "archetype": "Cultural & Heritage", "rationale": "Word1 • Word2 • Word3" },
    { "name": "Name7", "archetype": "Minimalist Compound", "rationale": "Word1 • Word2 • Word3" },
    { "name": "Name8", "archetype": "Modern Playful", "rationale": "Word1 • Word2 • Word3" }
  ]
}
`;

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        temperature: 0.85,
        responseMimeType: "application/json"
      }
    };

    const data = await callGeminiEndpoint(payload);
    const parsed = extractJsonFromGeminiResponse(data);
    if (parsed && Array.isArray(parsed.names) && parsed.names.length >= 4) {
      return parsed.names.slice(0, 8).map((item, idx) => ({
        name: (item.name || '').trim().replace(/^["']|["']$/g, ''),
        archetype: item.archetype || (NAMING_ARCHETYPES[idx] ? NAMING_ARCHETYPES[idx].label : 'Brandable'),
        archetypeIcon: (NAMING_ARCHETYPES[idx] ? NAMING_ARCHETYPES[idx].icon : '✨'),
        rationale: (item.rationale || 'Distinctive • Protectable • Evocative').trim()
      }));
    }
    throw new Error('Invalid names schema from Gemini response');
  }

  function renderSuggestedNames(namesList) {
    if (!elements.suggestedNamesList || !elements.nameSuggestionsTray) return;
    elements.suggestedNamesList.innerHTML = '';

    namesList.forEach((item, idx) => {
      const archLabel = item.archetype || (NAMING_ARCHETYPES[idx] ? NAMING_ARCHETYPES[idx].label : 'Brandable');
      const archIcon = item.archetypeIcon || (NAMING_ARCHETYPES[idx] ? NAMING_ARCHETYPES[idx].icon : '✨');

      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'name-pill';
      pill.setAttribute('data-name', item.name);
      pill.setAttribute('title', `Use "${item.name}" (${archLabel})`);
      pill.innerHTML = `
        <div class="name-pill-header">
          <span class="name-pill-arch">${archIcon} ${archLabel}</span>
        </div>
        <span class="name-pill-text">${item.name}</span>
        <span class="name-pill-tag">${item.rationale}</span>
        <svg class="name-pill-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      `;

      pill.addEventListener('click', () => {
        if (elements.inputBrandName) {
          elements.inputBrandName.value = item.name;
          elements.inputBrandName.focus();
        }
        showToast(`Selected "${item.name}" (${archLabel})!`, 'info', 1800);
      });

      elements.suggestedNamesList.appendChild(pill);
    });

    elements.nameSuggestionsTray.classList.remove('hidden');
    elements.nameSuggestionsTray.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  async function handleSuggestNames() {
    if (state.isSuggestingNames) return;

    let niche = elements.industrySelect ? elements.industrySelect.value : 'Specialty Coffee & Chai Cafe';
    if (niche === 'Other / Custom') {
      niche = (elements.inputCustomNiche && elements.inputCustomNiche.value.trim()) || 'Creative Studio';
    }
    const vibe = state.selectedVibe || 'eco-organic';
    const audience = (elements.inputAudience && elements.inputAudience.value.trim()) || 'Modern design lovers';

    state.isSuggestingNames = true;
    if (elements.btnSuggestNames) elements.btnSuggestNames.disabled = true;
    if (elements.suggestSpinner) elements.suggestSpinner.classList.remove('hidden');
    if (elements.suggestBtnText) elements.suggestBtnText.textContent = "Suggesting...";
    if (elements.btnRefreshNames) elements.btnRefreshNames.disabled = true;
    if (elements.refreshBtnText) elements.refreshBtnText.textContent = "Loading...";

    try {
      let names = [];
      try {
        names = await generateSuggestedNamesWithGemini(niche, vibe, audience);
        showToast('Generated 8 brand names via Gemini AI!', 'success');
      } catch (apiErr) {
        console.warn('Gemini name generation failed, using smart procedural synthesizer:', apiErr);
        names = generateProceduralSuggestedNames(niche, vibe, 8);
        showToast('Generated 8 names (Smart Procedural Synthesizer)', 'info');
      }

      if (!names || names.length === 0) {
        names = generateProceduralSuggestedNames(niche, vibe, 8);
      }

      state.suggestedNames = names;
      renderSuggestedNames(names);

    } catch (err) {
      console.error('Failed to generate business names:', err);
      const fallback = generateProceduralSuggestedNames(niche, vibe, 8);
      renderSuggestedNames(fallback);
      showToast('Generated 8 business names (Offline Mode)', 'info');
    } finally {
      state.isSuggestingNames = false;
      if (elements.btnSuggestNames) elements.btnSuggestNames.disabled = false;
      if (elements.suggestSpinner) elements.suggestSpinner.classList.add('hidden');
      if (elements.suggestBtnText) elements.suggestBtnText.textContent = "✨ Suggest Names";
      if (elements.btnRefreshNames) elements.btnRefreshNames.disabled = false;
      if (elements.refreshBtnText) elements.refreshBtnText.textContent = "More Names";
    }
  }

  // =========================================================================
  // 10. 7-Day Brand Launch Calendar Generator & Controller
  // =========================================================================
  function getLaunchCalendarBlueprint(brand) {
    const name = brand.name || "BrandDNA";
    const vibe = brand.vibe || "eco-organic";

    let dayHooks = [];
    if (vibe === 'bold-genz') {
      dayHooks = [
        `"Forget everything you thought was normal. ${name} drops in 7 days."`,
        `"We built this because everything else was putting us to sleep."`,
        `"First look: The prototype that broke our group chat."`,
        `"Unfiltered behind-the-scenes chaos at the lab."`,
        `"Our beta community reacted to the first batch. It’s loud."`,
        `"THE VAULT IS UNLOCKED. Drop 01 is officially live."`,
        `"Live Q&A: Answering your unhinged questions."`
      ];
    } else if (vibe === 'minimalist-luxury') {
      dayHooks = [
        `"Silence precedes the enduring statement. Autumn archive reveals soon."`,
        `"The philosophy of restraint: Why we spent years on one silhouette."`,
        `"The Premiere: Edition No. 01 crafted for sovereign patrons."`,
        `"Inside the Parisian atelier: Precision in every hand-beveled angle."`,
        `"Quiet praise: What curators remarked during the private viewing."`,
        `"The Salon is open: Private acquisition now accessible."`,
        `"Dialogue with the master artisan: Longevity over novelty."`
      ];
    } else if (vibe === 'tech-futuristic') {
      dayHooks = [
        `"Telemetry online. Initializing protocol countdown for next-era compute."`,
        `"From speculative whitepaper to living silicon architecture."`,
        `"Benchmark reveal: 10x throughput with zero thermodynamic waste."`,
        `"Cleanroom telemetry: Testing photonic cores at sub-zero latency."`,
        `"Independent verification: What deep-tech researchers logged."`,
        `"Mainnet dispatch: Kernel v1.0 unlocked for global access."`,
        `"Architecture deep dive & real-time telemetry AMA."`
      ];
    } else {
      dayHooks = [
        `"Cultivated in stillness. A restorative new chapter begins."`,
        `"Soil, season, and hands: The origin story of our smallholder craft."`,
        `"First harvest reveal: Designed in harmony with natural rhythms."`,
        `"The tactile journey: Sourcing organic materials without shortcuts."`,
        `"What morning ritualists felt when they welcomed ${name} home."`,
        `"Sanctuary opens: Direct-trade harvest is now accessible."`,
        `"Fireside Q&A: Cultivating mindful living in modern spaces."`
      ];
    }

    return [
      { day: 1, title: "Teaser & Story Poll", format: "Story", formatClass: "format-story", hook: dayHooks[0], desc: "Interactive poll on audience lifestyle habits + aesthetic mystery silhouette." },
      { day: 2, title: "Founder / Origin Story", format: "Carousel", formatClass: "format-carousel", hook: dayHooks[1], desc: "5-slide photo & typographic essay unpacking the core 'why' and craft heritage." },
      { day: 3, title: "Product Reveal", format: "Reel", formatClass: "format-reel", hook: dayHooks[2], desc: "Macro cinematic close-up showcasing tactile materials, packaging, and scale." },
      { day: 4, title: "Behind-the-Scenes", format: "Reel", formatClass: "format-reel", hook: dayHooks[3], desc: "Raw, transparent studio documentation of testing, assembly, or color mixing." },
      { day: 5, title: "Social Proof / Community", format: "Carousel", formatClass: "format-carousel", hook: dayHooks[4], desc: "Unboxing reactions, editorial patron quotes, and early review testimonials." },
      { day: 6, title: "Launch Offer / Drop", format: "Post / Reel", formatClass: "format-post", hook: dayHooks[5], desc: "High-urgency release announcement with direct bio link and launch privilege perk." },
      { day: 7, title: "Recap & Q&A", format: "Story / Live", formatClass: "format-story", hook: dayHooks[6], desc: "Addressing community questions, honoring patrons, and sharing upcoming roadmap." }
    ];
  }

  function getFormatClass(fmt) {
    const s = (fmt || '').toLowerCase();
    if (s.includes('story')) return 'format-story';
    if (s.includes('carousel')) return 'format-carousel';
    if (s.includes('reel')) return 'format-reel';
    return 'format-post';
  }

  function renderLaunchCalendar(brand, savedProgress = {}) {
    if (!elements.launchCalendarGrid) return;
    elements.launchCalendarGrid.innerHTML = '';

    const items = (Array.isArray(brand.launchCalendar) && brand.launchCalendar.length === 7)
      ? brand.launchCalendar
      : getLaunchCalendarBlueprint(brand);

    state.launchCalendar = items.map((item, idx) => ({
      day: item.day || (idx + 1),
      title: item.title || `Day ${idx + 1}`,
      format: item.format || 'Post',
      formatClass: getFormatClass(item.format),
      hook: item.hook || '',
      desc: item.desc || item.caption || item.hook || '',
      completed: Boolean(savedProgress[item.day || (idx + 1)])
    }));

    state.launchCalendar.forEach(item => {
      const card = document.createElement('div');
      card.className = `day-card ${item.completed ? 'completed' : ''}`;
      card.dataset.day = item.day;

      card.innerHTML = `
        <div class="day-card-header">
          <div class="day-badge-wrap">
            <input type="checkbox" class="day-checkbox" data-day="${item.day}" title="Mark Day ${item.day} completed" ${item.completed ? 'checked' : ''}>
            <span class="day-badge">DAY ${item.day}</span>
          </div>
          <span class="day-format-pill ${item.formatClass}">${item.format}</span>
        </div>
        <h4 class="day-title">${item.title}</h4>
        <p class="day-hook">${item.hook}</p>
        <p class="day-desc">${item.desc}</p>
      `;

      const checkbox = card.querySelector('.day-checkbox');
      checkbox.addEventListener('change', (e) => {
        handleDayCheck(item.day, e.target.checked);
      });

      elements.launchCalendarGrid.appendChild(card);
    });

    updateCalendarProgressUI();
  }

  function handleDayCheck(dayNumber, isChecked) {
    const item = state.launchCalendar.find(d => d.day === dayNumber);
    if (item) item.completed = isChecked;

    const card = elements.launchCalendarGrid.querySelector(`.day-card[data-day="${dayNumber}"]`);
    if (card) card.classList.toggle('completed', isChecked);

    updateCalendarProgressUI();
    saveActiveProjectToStorage();
    if (isChecked) showToast(`Day ${dayNumber} marked completed! 🚀`, 'success', 2000);
  }

  function updateCalendarProgressUI() {
    const total = state.launchCalendar.length || 7;
    const completedCount = state.launchCalendar.filter(d => d.completed).length;
    const pct = Math.round((completedCount / total) * 100);

    if (elements.calendarProgressLabel) {
      elements.calendarProgressLabel.textContent = `${completedCount} of ${total} Completed (${pct}%)`;
    }
    if (elements.calendarProgressBar) {
      elements.calendarProgressBar.style.width = `${pct}%`;
    }
  }

  function resetLaunchCalendar() {
    state.launchCalendar.forEach(item => item.completed = false);
    if (elements.launchCalendarGrid) {
      elements.launchCalendarGrid.querySelectorAll('.day-card').forEach(card => {
        card.classList.remove('completed');
        const cb = card.querySelector('.day-checkbox');
        if (cb) cb.checked = false;
      });
    }
    updateCalendarProgressUI();
    saveActiveProjectToStorage();
    showToast('Launch calendar progress reset', 'info', 2000);
  }

  // =========================================================================
  // 11. Infinite Instagram Idea Studio
  // =========================================================================
  function getIdeaFormatClass(fmt) {
    const f = (fmt || '').toLowerCase();
    if (f.includes('carousel')) return 'format-carousel';
    if (f.includes('reel')) return 'format-reel';
    if (f.includes('still')) return 'format-still';
    return 'format-carousel';
  }

  function generateProceduralIdea(brand, index) {
    const name = brand.name || "BrandDNA";
    const audience = brand.audience || "modern consumers";
    const tones = brand.voiceTone || brand.tones || ["Authentic", "Creative"];
    const handle = sanitizeHandle(name);

    const ideaBlueprints = [
      {
        format: "Carousel (5 Slides)",
        hook: `"The 3 design rules behind ${name} that change everything."`,
        caption: `Every detail of ${name} was engineered for ${audience.toLowerCase()}. Here's what happens when you prioritize intentional craft over noise.`,
        hashtags: `#${handle} #IntentionalDesign #BrandStrategy #VisualIdentity #DropNo1`
      },
      {
        format: "Reel (15s Audio Hook)",
        hook: `"POV: You finally stopped buying generic and chose ${tones[0]?.toLowerCase() || 'pure'} quality."`,
        caption: `Watch what goes into one batch of ${name}. No shortcuts. No fillers. Just uncompromising dedication to the aesthetic.`,
        hashtags: `#${handle} #BehindTheScenes #CreativeStudio #ModernAesthetic #CraftFirst`
      },
      {
        format: "Aesthetic Still",
        hook: `"Quiet moments speak the loudest. Unveiling our signature series."`,
        caption: `Curated for ${audience.toLowerCase()} who believe sanctuary is a discipline, not a coincidence. Link in bio to explore the archive.`,
        hashtags: `#${handle} #MinimalistMood #QuietLuxury #CuratedSpaces #DesignObjects`
      },
      {
        format: "Infographic Breakdown",
        hook: `"The anatomy of ${name}: Why materials matter."`,
        caption: `We mapped every touchpoint from sourcing to final hand-finish. Here is the transparent breakdown of our debut collection.`,
        hashtags: `#${handle} #MaterialTransparency #SustainableCraft #DesignDetails #Editorial`
      },
      {
        format: "Carousel (5 Slides)",
        hook: `"Why we spent 18 months perfecting one single detail."`,
        caption: `In a world moving at 120Hz, ${name} is built to endure. Swipe through our archival journey from raw sketch to physical artifact.`,
        hashtags: `#${handle} #SlowDesign #StudioNotes #EnduringForm #BrandCraft`
      },
      {
        format: "Reel (15s Audio Hook)",
        hook: `"What everyone asks when they see ${name} in person."`,
        caption: `Tactile materials. Unmistakable gravity. Created exclusively for discerning patrons who demand the extraordinary.`,
        hashtags: `#${handle} #FirstImpressions #AestheticStudio #LuxuryDesign #ReelsViral`
      }
    ];

    const template = ideaBlueprints[index % ideaBlueprints.length];
    const conceptNum = index + 1;

    return {
      id: `idea-${Date.now()}-${index}`,
      conceptNum: `#${conceptNum < 10 ? '0' + conceptNum : conceptNum}`,
      format: template.format,
      formatClass: getIdeaFormatClass(template.format),
      hook: template.hook,
      caption: template.caption,
      hashtags: template.hashtags
    };
  }

  async function generateIdeasWithGemini(brand, currentIdeas) {
    const previousHooks = (currentIdeas || []).map(i => i.hook).join(' | ');
    const tones = (brand.voiceTone || brand.tones || ['Authentic', 'Creative']).join(', ');

    const promptText = `
You are the Lead Creative Content Director for "${brand.name}".
Brand Vibe: ${brand.vibe}
Industry: ${brand.industry}
Target Audience: ${brand.audience}
Tagline: "${brand.tagline}"
Tone: ${tones}
Previously generated hooks (DO NOT REPEAT): ${previousHooks || 'None yet'}

Generate exactly 3 brand-new, NON-REPEATING Instagram post concepts that speak directly to this audience.
Return ONLY a valid JSON array of 3 objects matching this schema:
[
  {
    "format": "Carousel (5 Slides) OR Reel (15s Audio Hook) OR Aesthetic Still OR Infographic Breakdown",
    "hook": "Punchy, scroll-stopping headline (8-14 words)",
    "caption": "An engaging, high-conversion on-brand caption speaking directly to this audience (25-45 words)",
    "hashtags": "#5 #Relevant #Creative #Hashtags"
  }
]
`.trim();

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        temperature: 0.8,
        responseMimeType: "application/json"
      }
    };

    const data = await callGeminiEndpoint(payload);
    const parsed = extractJsonFromGeminiResponse(data);
    return Array.isArray(parsed) ? parsed : [];
  }

  function renderInstagramIdeas(ideas) {
    state.instagramIdeas = ideas;
    if (!elements.ideasCardsGrid) return;
    elements.ideasCardsGrid.innerHTML = '';

    ideas.forEach((idea, index) => {
      const card = createIdeaCardElement(idea, index);
      elements.ideasCardsGrid.appendChild(card);
    });

    if (elements.ideasCountBadge) {
      elements.ideasCountBadge.textContent = `${ideas.length} Ideas Ready`;
    }
  }

  function createIdeaCardElement(idea, index) {
    const card = document.createElement('div');
    card.className = 'idea-card';
    card.dataset.index = index;

    const formatClass = idea.formatClass || getIdeaFormatClass(idea.format);
    const conceptLabel = idea.conceptNum || `#${index + 1 < 10 ? '0' + (index + 1) : index + 1}`;

    card.innerHTML = `
      <div class="idea-card-header">
        <span class="idea-concept-pill">${conceptLabel}</span>
        <span class="idea-format-badge ${formatClass}">${idea.format}</span>
      </div>
      <h4 class="idea-hook">${idea.hook}</h4>
      <p class="idea-caption">${idea.caption}</p>
      <div class="idea-hashtags">${idea.hashtags}</div>
      <div class="idea-card-footer">
        <button type="button" class="btn-copy-idea" title="Copy this Instagram concept">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <span>Copy Post</span>
        </button>
      </div>
    `;

    const copyBtn = card.querySelector('.btn-copy-idea');
    copyBtn.addEventListener('click', () => {
      const fullText = `${idea.hook}\n\n${idea.caption}\n\n${idea.hashtags}`;
      copyToClipboard(fullText, `Copied Concept ${conceptLabel} to clipboard!`);
    });

    return card;
  }

  async function handleGenerateMoreIdeas() {
    if (!state.currentBrand || state.isGeneratingMoreIdeas) return;

    state.isGeneratingMoreIdeas = true;
    elements.btnGenerateMoreIdeas.disabled = true;
    elements.moreIdeasSpinner.classList.remove('hidden');
    elements.btnGenerateMoreText.textContent = "Generating 3 More Ideas...";

    try {
      let freshIdeas = [];

      try {
        const geminiIdeas = await generateIdeasWithGemini(state.currentBrand, state.instagramIdeas);
        freshIdeas = geminiIdeas.map((item, idx) => {
          const countIndex = state.instagramIdeas.length + idx + 1;
          return {
            id: `idea-${Date.now()}-${idx}`,
            conceptNum: `#${countIndex < 10 ? '0' + countIndex : countIndex}`,
            format: item.format || "Carousel (5 Slides)",
            formatClass: getIdeaFormatClass(item.format),
            hook: item.hook,
            caption: item.caption,
            hashtags: item.hashtags
          };
        });
        showToast('Added 3 fresh Instagram concepts via Gemini AI!', 'success');
      } catch (apiErr) {
        console.warn('Gemini ideas generator failed, using procedural synthesis:', apiErr);
        freshIdeas = [
          generateProceduralIdea(state.currentBrand, state.instagramIdeas.length),
          generateProceduralIdea(state.currentBrand, state.instagramIdeas.length + 1),
          generateProceduralIdea(state.currentBrand, state.instagramIdeas.length + 2)
        ];
        showToast('Added 3 fresh procedural concepts (Demo Mode)', 'info');
      }

      if (!freshIdeas || freshIdeas.length === 0) {
        freshIdeas = [
          generateProceduralIdea(state.currentBrand, state.instagramIdeas.length),
          generateProceduralIdea(state.currentBrand, state.instagramIdeas.length + 1),
          generateProceduralIdea(state.currentBrand, state.instagramIdeas.length + 2)
        ];
      }

      freshIdeas.forEach((idea) => {
        state.instagramIdeas.push(idea);
        const card = createIdeaCardElement(idea, state.instagramIdeas.length - 1);
        card.style.animation = 'scaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both';
        elements.ideasCardsGrid.appendChild(card);
      });

      if (elements.ideasCountBadge) {
        elements.ideasCountBadge.textContent = `${state.instagramIdeas.length} Ideas Ready`;
      }

      saveActiveProjectToStorage();
      const lastCard = elements.ideasCardsGrid.lastElementChild;
      if (lastCard) lastCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    } catch (err) {
      console.error('Failed to generate more ideas:', err);
      showToast('Could not generate more ideas. Please try again.', 'warning');
    } finally {
      state.isGeneratingMoreIdeas = false;
      elements.btnGenerateMoreIdeas.disabled = false;
      elements.moreIdeasSpinner.classList.add('hidden');
      elements.btnGenerateMoreText.textContent = "+ Generate 3 More Fresh Ideas";
    }
  }

  // =========================================================================
  // 12. Left 'Brand History' Sidebar Controller (localStorage)
  // =========================================================================
  function getProjectsStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROJECTS);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveProjectsStorage(projects) {
    try {
      localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.warn('Storage quota exceeded:', e);
    }
  }

  function saveActiveProjectToStorage() {
    if (!state.currentBrand) return;
    const slug = sanitizeHandle(state.currentBrand.name);
    const projects = getProjectsStorage();

    const calendarProgress = {};
    state.launchCalendar.forEach(item => {
      if (item.completed) calendarProgress[item.day] = true;
    });

    projects[slug] = {
      slug: slug,
      name: state.currentBrand.name,
      vibe: state.currentBrand.vibe,
      industry: state.currentBrand.industry,
      audience: state.currentBrand.audience,
      savedAt: Date.now(),
      brand: state.currentBrand,
      calendarProgress: calendarProgress,
      instagramIdeas: state.instagramIdeas
    };

    saveProjectsStorage(projects);
    localStorage.setItem(STORAGE_KEY_ACTIVE_SLUG, slug);
    renderBrandHistorySidebar();
  }

  function deleteProjectFromHistory(slug, e) {
    if (e) e.stopPropagation();
    const projects = getProjectsStorage();
    if (projects[slug]) {
      delete projects[slug];
      saveProjectsStorage(projects);
      showToast('Brand deleted from history', 'info');
      renderBrandHistorySidebar();

      const activeSlug = localStorage.getItem(STORAGE_KEY_ACTIVE_SLUG);
      if (activeSlug === slug) {
        localStorage.removeItem(STORAGE_KEY_ACTIVE_SLUG);
        renderBrand(PRESET_BRANDS.komorebi);
      }
    }
  }

  function renderBrandHistorySidebar() {
    if (!elements.historyList) return;
    const projects = getProjectsStorage();
    const entries = Object.values(projects).sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));

    elements.historyList.innerHTML = '';
    const activeSlug = localStorage.getItem(STORAGE_KEY_ACTIVE_SLUG) || sanitizeHandle(state.currentBrand?.name);

    if (elements.historyCountBadge) {
      elements.historyCountBadge.textContent = `${entries.length} Brand${entries.length === 1 ? '' : 's'}`;
    }

    if (entries.length === 0) {
      elements.historyList.innerHTML = `
        <div class="history-empty-state">
          <p>No saved brands yet.</p>
          <small>Click "Generate Complete Brand" to start your collection!</small>
        </div>
      `;
      return;
    }

    entries.forEach(proj => {
      const item = document.createElement('div');
      item.className = `history-item ${proj.slug === activeSlug ? 'active' : ''}`;
      item.dataset.slug = proj.slug;

      const colors = proj.brand?.palette || proj.brand?.colors || [];
      const dotsHtml = colors.slice(0, 5).map(c => `<span class="history-color-dot" style="background-color: ${c.hex}" title="${c.name}"></span>`).join('');

      item.innerHTML = `
        <div class="history-item-top">
          <span class="history-item-name" title="${proj.name}">${proj.name}</span>
          <button type="button" class="btn-delete-history" title="Delete brand from history" aria-label="Delete ${proj.name}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
        <span class="history-item-niche">${proj.industry || 'Design Studio'}</span>
        <div class="history-palette-dots">
          ${dotsHtml}
        </div>
      `;

      item.addEventListener('click', () => {
        loadSavedProject(proj.slug);
      });

      const delBtn = item.querySelector('.btn-delete-history');
      delBtn.addEventListener('click', (e) => {
        deleteProjectFromHistory(proj.slug, e);
      });

      elements.historyList.appendChild(item);
    });
  }

  function loadSavedProject(slug) {
    const projects = getProjectsStorage();
    const proj = projects[slug];
    if (!proj) return;

    localStorage.setItem(STORAGE_KEY_ACTIVE_SLUG, slug);

    if (elements.inputBrandName) elements.inputBrandName.value = proj.name || '';
    if (elements.industrySelect) {
      elements.industrySelect.value = proj.industry || 'Specialty Coffee & Chai Cafe';
      if (!Array.from(elements.industrySelect.options).some(o => o.value === proj.industry)) {
        elements.industrySelect.value = 'Other / Custom';
        elements.customNicheGroup.classList.remove('hidden');
        elements.inputCustomNiche.value = proj.industry || '';
      } else {
        elements.customNicheGroup.classList.add('hidden');
      }
    }
    if (elements.inputAudience) elements.inputAudience.value = proj.audience || '';

    state.selectedVibe = proj.vibe || 'eco-organic';
    elements.vibeCards.forEach(card => {
      const match = card.dataset.vibe === state.selectedVibe;
      card.classList.toggle('active', match);
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = match;
    });

    renderBrand(proj.brand, proj.calendarProgress, proj.instagramIdeas);
    renderBrandHistorySidebar();
    showToast(`Loaded "${proj.name}" from history`, 'info');
  }

  function handleNewBrandClick() {
    if (elements.inputBrandName) {
      elements.inputBrandName.value = '';
      elements.inputBrandName.focus();
    }
    if (elements.nameSuggestionsTray) {
      elements.nameSuggestionsTray.classList.add('hidden');
    }
    if (elements.industrySelect) {
      elements.industrySelect.selectedIndex = 0;
      elements.customNicheGroup.classList.add('hidden');
      if (elements.inputCustomNiche) elements.inputCustomNiche.value = '';
    }
    if (elements.inputAudience) {
      elements.inputAudience.value = '';
    }

    localStorage.removeItem(STORAGE_KEY_ACTIVE_SLUG);
    renderBrandHistorySidebar();

    const formCard = document.querySelector('.input-panel-card');
    if (formCard) formCard.scrollIntoView({ behavior: 'smooth' });

    showToast('Ready to create a new brand!', 'info', 2000);
  }

  // =========================================================================
  // 13. Developer Code Export Bundle Generator
  // =========================================================================
  function generateProductionDevBundle(brand, tab = 'all') {
    const colors = brand.palette || brand.colors || [];
    const p1 = colors[0]?.hex || '#2D5A46';
    const p2 = colors[1]?.hex || '#C27D53';
    const p3 = colors[2]?.hex || '#FAF6EE';
    const p4 = colors[3]?.hex || '#E9C46A';
    const p5 = colors[4]?.hex || '#1A3025';

    const headingFont = cleanFontName(brand.headingFont || brand.fonts?.heading);
    const bodyFont = cleanFontName(brand.bodyFont || brand.fonts?.body);

    const cssImports = `/* 1. Google Fonts Production Import */\n@import url('https://fonts.googleapis.com/css2?family=${encodeURIComponent(headingFont)}:wght@600;700;800&family=${encodeURIComponent(bodyFont)}:wght@400;500;600&display=swap');`;

    const cssTokens = `/* 2. Brand Design Tokens (:root) */\n:root {\n  /* Chromatic Palette */\n  --brand-primary: ${p1}; /* ${colors[0]?.name || 'Primary'} */\n  --brand-secondary: ${p2}; /* ${colors[1]?.name || 'Secondary'} */\n  --brand-surface: ${p3}; /* ${colors[2]?.name || 'Surface'} */\n  --brand-highlight: ${p4}; /* ${colors[3]?.name || 'Highlight'} */\n  --brand-dark: ${p5}; /* ${colors[4]?.name || 'Contrast Anchor'} */\n\n  /* Typography System */\n  --font-brand-heading: '${headingFont}', Georgia, serif;\n  --font-brand-body: '${bodyFont}', sans-serif;\n\n  /* Brand Voice Metadata */\n  --brand-name: "${brand.name}";\n  --brand-vibe: "${brand.vibe}";\n  --brand-tagline: "${(brand.tagline || '').replace(/"/g, '\\"')}";\n}`;

    const logos = generateThreeLogoConcepts(brand);
    const svgSection = `<!-- 3. Scalable Production Vector SVG Logos -->\n<!-- Concept 1: Icon + Wordmark Lockup -->\n${logos.concept1}\n\n<!-- Concept 2: Monogram Crest -->\n${logos.concept2}\n\n<!-- Concept 3: Minimalist Dark-Card Variant -->\n${logos.concept3}`;

    if (tab === 'css') {
      return `${cssImports}\n\n${cssTokens}`;
    } else if (tab === 'svg') {
      return svgSection;
    } else {
      return `/* ==========================================================================\n   BrandDNA Studio — Production Asset Bundle\n   Brand: ${brand.name} | Archetype: ${brand.vibe}\n   ========================================================================== */\n\n${cssImports}\n\n${cssTokens}\n\n${svgSection}`;
    }
  }

  function openDevModal(tab = 'all') {
    if (!state.currentBrand) return;
    state.activeModalTab = tab;

    elements.modalTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    const code = generateProductionDevBundle(state.currentBrand, tab);
    elements.devCodeSnippet.textContent = code;
    elements.devCodeModal.classList.remove('hidden');
    elements.devCodeModal.setAttribute('aria-hidden', 'false');
  }

  function closeDevModal() {
    elements.devCodeModal.classList.add('hidden');
    elements.devCodeModal.setAttribute('aria-hidden', 'true');
  }

  // =========================================================================
  // 14. Unified Gemini AI Proxy & Serverless Dispatcher
  // =========================================================================
  async function callGeminiEndpoint(payload) {
    const rawKey = elements.apiKeyInput ? elements.apiKeyInput.value.trim() : '';
    const hasHeaderKey = Boolean(rawKey && rawKey.length > 5);

    if (hasHeaderKey) {
      const primaryUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${encodeURIComponent(rawKey)}`;
      let res = await fetch(primaryUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': rawKey
        },
        body: JSON.stringify(payload)
      });

      if (res.status === 404) {
        console.warn('gemini-3.8-flash direct returned 404, attempting fallback to gemini-1.5-flash');
        const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(rawKey)}`;
        res = await fetch(fallbackUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': rawKey
          },
          body: JSON.stringify(payload)
        });
      }

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Direct Gemini API error ${res.status}: ${errorText}`);
      }

      return await res.json();
    } else {
      const res = await fetch('/.netlify/functions/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Netlify Gemini proxy error (status ${res.status})`);
      }

      return await res.json();
    }
  }

  function extractJsonFromGeminiResponse(data) {
    const rawCandidate = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawCandidate) throw new Error('No content returned from Gemini API response');
    let cleanJson = rawCandidate.trim();
    if (cleanJson.startsWith('```json')) {
      cleanJson = cleanJson.slice(7);
    } else if (cleanJson.startsWith('```')) {
      cleanJson = cleanJson.slice(3);
    }
    if (cleanJson.endsWith('```')) {
      cleanJson = cleanJson.slice(0, -3);
    }
    return JSON.parse(cleanJson.trim());
  }

  // =========================================================================
  // 15. Procedural & AI Brand Dispatchers
  // =========================================================================
  function generateProceduralBrand(name, industry, audience, vibe) {
    const kit = PROCEDURAL_VIBE_KITS[vibe] || PROCEDURAL_VIBE_KITS["eco-organic"];

    const paletteIndex = Math.floor(Math.random() * kit.palettes.length);
    const fontIndex = Math.floor(Math.random() * kit.fontPairings.length);
    const taglineIndex = Math.floor(Math.random() * kit.taglinePatterns.length);

    const chosenPalette = kit.palettes[paletteIndex];
    const chosenFonts = kit.fontPairings[fontIndex];
    const chosenTagline = kit.taglinePatterns[taglineIndex];

    const shuffledTones = [...kit.tonesPool].sort(() => 0.5 - Math.random());
    const tones = shuffledTones.slice(0, 3);

    const colors = chosenPalette.map(c => ({
      hex: c.hex,
      name: c.name,
      role: c.role,
      psychology: c.psychology
    }));

    const svgIconPath = getNiche24x24IconPath(industry, vibe);
    const launchCalendar = getLaunchCalendarBlueprint({ name, vibe, industry });
    const instagramIdeas = [
      generateProceduralIdea({ name, vibe, industry, audience, tones }, 0),
      generateProceduralIdea({ name, vibe, industry, audience, tones }, 1),
      generateProceduralIdea({ name, vibe, industry, audience, tones }, 2)
    ];

    return {
      tagline: chosenTagline,
      colors: colors,
      headingFont: chosenFonts.heading,
      bodyFont: chosenFonts.body,
      voiceTone: tones,
      svgIconPath: svgIconPath,
      launchCalendar: launchCalendar,
      instagramIdeas: instagramIdeas,
      name: name || "BrandDNA Venture",
      industry: industry || "Design & Lifestyle",
      audience: audience || "Discerning creatives",
      vibe: vibe,
      palette: colors,
      fonts: chosenFonts,
      tones: tones,
      sampleHeadline: chosenTagline,
      sampleBody: `Crafted for ${(audience || 'discerning individuals').toLowerCase()} who value intentional craftsmanship and distinct character.`,
      paletteNarrative: `${name} harmonizes ${colors[0].name.toLowerCase()} and ${colors[1].name.toLowerCase()} with airy ${colors[2].name.toLowerCase()} space to define an unforgettable presence.`,
      social: {
        handle: sanitizeHandle(name),
        location: kit.locations[0],
        category: `${kit.socialCategories[0]} • Release 01`,
        caption: `${chosenTagline} Designed for ${(audience || 'discerning individuals').toLowerCase()}. Discover the debut release and explore our complete visual ecosystem.`,
        hashtags: `#${(name || 'BrandDNA').replace(/[^a-zA-Z0-9]/g, '')} #${tones[0]} #${vibe === 'bold-genz' ? 'DopamineDesign' : 'ModernIdentity'} #BrandDNA`
      }
    };
  }

  async function generateBrandWithAI(name, industry, audience, vibe) {
    const promptText = `
You are the world's elite Brand Identity Strategist & Design Director.
Generate a complete, high-aesthetic, production-ready brand identity in strict JSON for:
- Brand Name: "${name}"
- Industry / Niche: "${industry}"
- Target Audience: "${audience}"
- Brand Vibe / Archetype: "${vibe}" (Options: minimalist-luxury, bold-genz, eco-organic, tech-futuristic)

You MUST return a single valid JSON object strictly matching this schema:
{
  "tagline": "A punchy, memorable 4-8 word brand tagline.",
  "colors": [
    { "hex": "#HEX", "name": "Creative Color Name", "role": "Primary Dominant" },
    { "hex": "#HEX", "name": "Creative Color Name", "role": "Secondary Accent" },
    { "hex": "#HEX", "name": "Creative Color Name", "role": "Surface Canvas" },
    { "hex": "#HEX", "name": "Creative Color Name", "role": "Highlight Ember" },
    { "hex": "#HEX", "name": "Creative Color Name", "role": "Contrast Anchor" }
  ],
  "headingFont": "Real Google Font (e.g. Fraunces, Syne, Cinzel, Space Grotesk, Plus Jakarta Sans, Outfit)",
  "bodyFont": "Real Google Font (e.g. Plus Jakarta Sans, Space Grotesk, Inter, JetBrains Mono, DM Sans)",
  "voiceTone": ["ToneWord1", "ToneWord2", "ToneWord3"],
  "svgIconPath": "A clean, valid 24x24 viewBox SVG <path d='...'> string representing the brand's specific niche (e.g. M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z)",
  "launchCalendar": [
    { "day": 1, "title": "Teaser & Curiosity Poll", "format": "Story", "hook": "Day 1 Hook Headline" },
    { "day": 2, "title": "Founder / Origin Story", "format": "Carousel", "hook": "Day 2 Hook Headline" },
    { "day": 3, "title": "Product Reveal", "format": "Reel", "hook": "Day 3 Hook Headline" },
    { "day": 4, "title": "Behind-the-Scenes", "format": "Reel", "hook": "Day 4 Hook Headline" },
    { "day": 5, "title": "Social Proof / Community", "format": "Carousel", "hook": "Day 5 Hook Headline" },
    { "day": 6, "title": "Launch Offer / Drop", "format": "Post / Reel", "hook": "Day 6 Hook Headline" },
    { "day": 7, "title": "Recap & Q&A", "format": "Story / Live", "hook": "Day 7 Hook Headline" }
  ],
  "instagramIdeas": [
    { "format": "Carousel (5 Slides)", "hook": "Scroll-stopping hook headline", "caption": "Engaging high-conversion caption speaking to this audience", "hashtags": "#5 #Relevant #Creative #Hashtags" },
    { "format": "Reel (15s Audio Hook)", "hook": "Scroll-stopping hook headline", "caption": "Engaging high-conversion caption speaking to this audience", "hashtags": "#5 #Relevant #Creative #Hashtags" },
    { "format": "Aesthetic Still", "hook": "Scroll-stopping hook headline", "caption": "Engaging high-conversion caption speaking to this audience", "hashtags": "#5 #Relevant #Creative #Hashtags" }
  ]
}

STRICT CONSTRAINTS:
1. "colors" MUST have exactly 5 objects with distinct hex codes, names, and roles.
2. "headingFont" and "bodyFont" MUST be real Google Fonts.
3. "voiceTone" MUST be an array of exactly 3 distinct words.
4. "svgIconPath" MUST be a clean, valid 24x24 viewBox SVG <path d="..."> string representing the brand's specific niche.
5. "launchCalendar" MUST be an array of exactly 7 objects for Days 1 to 7.
6. "instagramIdeas" MUST be an array of exactly 3 objects.
7. Return ONLY valid JSON, with NO preamble or conversational text.
`.trim();

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json"
      }
    };

    const data = await callGeminiEndpoint(payload);
    const parsed = extractJsonFromGeminiResponse(data);
    return parsed;
  }

  function normalizeBrandKit(raw, name, industry, audience, vibe) {
    const kit = PROCEDURAL_VIBE_KITS[vibe] || PROCEDURAL_VIBE_KITS["eco-organic"];
    const fallbackPalette = kit.palettes[0];
    const fallbackFonts = kit.fontPairings[0];

    const tagline = raw?.tagline || kit.taglinePatterns[0];

    let colors = Array.isArray(raw?.colors) && raw.colors.length >= 5
      ? raw.colors.slice(0, 5)
      : (Array.isArray(raw?.palette) && raw.palette.length >= 5 ? raw.palette.slice(0, 5) : fallbackPalette);

    colors = colors.map((c, i) => ({
      hex: (c.hex && c.hex.startsWith('#')) ? c.hex : (fallbackPalette[i]?.hex || '#1C1917'),
      name: c.name || fallbackPalette[i]?.name || `Tone ${i + 1}`,
      role: c.role || fallbackPalette[i]?.role || `Role ${i + 1}`,
      psychology: c.psychology || fallbackPalette[i]?.psychology || 'Harmonizes aesthetic balance and visual gravity.'
    }));

    const headingFont = raw?.headingFont || raw?.fonts?.heading || fallbackFonts.heading;
    const bodyFont = raw?.bodyFont || raw?.fonts?.body || fallbackFonts.body;

    let voiceTone = Array.isArray(raw?.voiceTone) && raw.voiceTone.length >= 3
      ? raw.voiceTone.slice(0, 3)
      : (Array.isArray(raw?.tones) && raw.tones.length >= 3 ? raw.tones.slice(0, 3) : kit.tonesPool.slice(0, 3));

    let svgIconPath = raw?.svgIconPath;
    if (!svgIconPath || typeof svgIconPath !== 'string' || svgIconPath.length < 5) {
      svgIconPath = getNiche24x24IconPath(industry || raw?.industry, vibe);
    }
    // Clean any accidental SVG tags from AI
    svgIconPath = svgIconPath.replace(/^<path[^>]*d=["']/i, '').replace(/["'][^>]*\/?>(<\/path>)?$/i, '').trim();

    let launchCalendar = Array.isArray(raw?.launchCalendar) && raw.launchCalendar.length === 7
      ? raw.launchCalendar
      : getLaunchCalendarBlueprint({ name, vibe, industry });

    let instagramIdeas = Array.isArray(raw?.instagramIdeas) && raw.instagramIdeas.length >= 3
      ? raw.instagramIdeas.slice(0, 3)
      : [
        generateProceduralIdea({ name, vibe, industry, audience, tones: voiceTone }, 0),
        generateProceduralIdea({ name, vibe, industry, audience, tones: voiceTone }, 1),
        generateProceduralIdea({ name, vibe, industry, audience, tones: voiceTone }, 2)
      ];

    return {
      name: name || raw?.name || "BrandDNA Venture",
      industry: industry || raw?.industry || "Design & Lifestyle",
      audience: audience || raw?.audience || "Discerning creatives",
      vibe: vibe,
      tagline: tagline,
      colors: colors,
      palette: colors,
      headingFont: headingFont,
      bodyFont: bodyFont,
      fonts: {
        heading: headingFont,
        headingWeight: raw?.fonts?.headingWeight || "Bold 700",
        body: bodyFont,
        bodyWeight: raw?.fonts?.bodyWeight || "Regular 400"
      },
      voiceTone: voiceTone,
      tones: voiceTone,
      svgIconPath: svgIconPath,
      launchCalendar: launchCalendar,
      instagramIdeas: instagramIdeas,
      sampleHeadline: raw?.sampleHeadline || tagline,
      sampleBody: raw?.sampleBody || `Crafted for ${(audience || 'modern creators').toLowerCase()} who value intentional craftsmanship and distinct character.`,
      paletteNarrative: raw?.paletteNarrative || `${name} harmonizes ${colors[0].name.toLowerCase()} and ${colors[1].name.toLowerCase()} with airy ${colors[2].name.toLowerCase()} space.`,
      social: raw?.social || {
        handle: sanitizeHandle(name),
        location: kit.locations[0],
        category: `${kit.socialCategories[0]} • Release 01`,
        caption: `${tagline} Designed for ${(audience || 'modern creators').toLowerCase()}. Discover the debut release and explore our complete visual ecosystem.`,
        hashtags: `#${(name || 'BrandDNA').replace(/[^a-zA-Z0-9]/g, '')} #${voiceTone[0]} #${vibe === 'bold-genz' ? 'DopamineDesign' : 'ModernIdentity'} #BrandDNA`
      }
    };
  }

  // =========================================================================
  // 16. View Renderer (Updating Bento Cards & DOM)
  // =========================================================================
  function renderBrand(rawBrand, savedCalendarProgress = null, savedIdeas = null) {
    const brand = normalizeBrandKit(rawBrand, rawBrand.name, rawBrand.industry, rawBrand.audience, rawBrand.vibe);
    state.currentBrand = brand;

    const root = document.documentElement;
    const colors = brand.palette;
    if (colors && colors.length >= 5) {
      root.style.setProperty('--dynamic-primary', colors[0].hex);
      root.style.setProperty('--dynamic-secondary', colors[1].hex);
      root.style.setProperty('--dynamic-light', colors[2].hex);
      root.style.setProperty('--dynamic-accent', colors[3].hex);
      root.style.setProperty('--dynamic-dark', colors[4].hex);
    }

    if (brand.headingFont || brand.bodyFont) {
      loadGoogleFontPairing(brand.headingFont, brand.bodyFont);
      root.style.setProperty('--dynamic-heading-font', `'${brand.headingFont}', serif`);
      root.style.setProperty('--dynamic-body-font', `'${brand.bodyFont}', sans-serif`);
    }

    if (elements.heroBrandName) elements.heroBrandName.textContent = brand.name;
    if (elements.heroBrandSub) elements.heroBrandSub.innerHTML = `${brand.industry} &bull; Crafted for ${brand.audience}`;
    const vibeNameMap = {
      'minimalist-luxury': 'Minimalist Luxury Archetype',
      'bold-genz': 'Bold & Gen-Z Archetype',
      'eco-organic': 'Eco-Organic Archetype',
      'tech-futuristic': 'Tech Futuristic Archetype'
    };
    if (elements.heroVibePill) elements.heroVibePill.textContent = vibeNameMap[brand.vibe] || `${brand.vibe} Archetype`;

    renderThreeLogoStudio(brand);

    if (elements.swatchesGrid) {
      elements.swatchesGrid.innerHTML = '';
      brand.palette.forEach((swatch) => {
        const swatchItem = document.createElement('div');
        swatchItem.className = 'swatch-item';
        swatchItem.setAttribute('title', `Click to copy ${swatch.hex} and audit contrast`);
        swatchItem.innerHTML = `
          <div class="swatch-color-box" style="background-color: ${swatch.hex};">
            <div class="swatch-copy-hint">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy &amp; Audit</span>
            </div>
          </div>
          <div class="swatch-details">
            <div class="swatch-header-row">
              <span class="swatch-hex">${swatch.hex.toUpperCase()}</span>
              <span class="swatch-role-pill">${swatch.role.split(' ')[0]}</span>
            </div>
            <div class="swatch-name">${swatch.name}</div>
            <div class="swatch-psychology">${swatch.psychology}</div>
          </div>
        `;

        swatchItem.addEventListener('click', () => {
          copyToClipboard(swatch.hex, `Copied ${swatch.hex} & updated live contrast audit!`);
          updateWcagAudit(swatch.hex, state.auditTextColor);
        });

        elements.swatchesGrid.appendChild(swatchItem);
      });
    }

    if (elements.paletteNarrative) {
      elements.paletteNarrative.textContent = brand.paletteNarrative || "A balanced harmony of intentional tones.";
    }

    if (elements.fontHeadingName) elements.fontHeadingName.textContent = brand.fonts.heading;
    if (elements.fontHeadingWeight) elements.fontHeadingWeight.textContent = brand.fonts.headingWeight;
    if (elements.fontHeadingPreview) {
      elements.fontHeadingPreview.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.fontHeadingSample) {
      elements.fontHeadingSample.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }

    if (elements.fontBodyName) elements.fontBodyName.textContent = brand.fonts.body;
    if (elements.fontBodyWeight) elements.fontBodyWeight.textContent = brand.fonts.bodyWeight;
    if (elements.fontBodyPreview) {
      elements.fontBodyPreview.style.fontFamily = `'${brand.fonts.body}', sans-serif`;
    }
    if (elements.fontBodySample) {
      elements.fontBodySample.style.fontFamily = `'${brand.fonts.body}', sans-serif`;
    }

    if (elements.sampleHeadline) {
      elements.sampleHeadline.textContent = `“${brand.sampleHeadline || brand.tagline}”`;
      elements.sampleHeadline.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }

    if (elements.sampleBody) {
      elements.sampleBody.textContent = brand.sampleBody;
      elements.sampleBody.style.fontFamily = `'${brand.fonts.body}', sans-serif`;
    }

    if (elements.punchyTaglineText) {
      elements.punchyTaglineText.textContent = brand.tagline;
      elements.punchyTaglineText.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }

    if (elements.toneTagsRow) {
      elements.toneTagsRow.innerHTML = '';
      brand.tones.forEach(tone => {
        const tag = document.createElement('span');
        tag.className = 'tone-tag';
        tag.textContent = tone;
        elements.toneTagsRow.appendChild(tag);
      });
    }

    renderWcagSwatches(brand.palette);
    const initialBgColor = brand.palette[0]?.hex || '#2D5A46';
    updateWcagAudit(initialBgColor, state.auditTextColor);

    renderInstagramMockup(brand);

    const currentInputSentence = elements.inputVoiceRewrite ? (elements.inputVoiceRewrite.value || "We sell good coffee") : "We sell good coffee";
    const initialRewrite = proceduralVoiceRewrite(currentInputSentence, brand);
    if (elements.voiceTransformedText) elements.voiceTransformedText.textContent = initialRewrite;
    if (elements.voiceOutputBadge) elements.voiceOutputBadge.textContent = `Tone: ${brand.tones.slice(0, 2).join(' • ')}`;

    renderLaunchCalendar(brand, savedCalendarProgress || {});

    if (savedIdeas && Array.isArray(savedIdeas) && savedIdeas.length > 0) {
      renderInstagramIdeas(savedIdeas);
    } else if (brand.instagramIdeas && Array.isArray(brand.instagramIdeas) && brand.instagramIdeas.length >= 3) {
      renderInstagramIdeas(brand.instagramIdeas);
    } else {
      const initial3Ideas = [
        generateProceduralIdea(brand, 0),
        generateProceduralIdea(brand, 1),
        generateProceduralIdea(brand, 2)
      ];
      renderInstagramIdeas(initial3Ideas);
    }

    renderCampaignTemplates(brand);
    renderTaglineVault(brand);

    saveActiveProjectToStorage();
  }

  function renderInstagramMockup(brand) {
    const initials = getInitials(brand.name);
    if (elements.igAvatar) {
      if (brand.customLogoUrl) {
        elements.igAvatar.innerHTML = `<img src="${brand.customLogoUrl}" alt="${brand.name}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 50%; background: #FFFFFF; padding: 2px;">`;
      } else {
        elements.igAvatar.innerHTML = `
          <svg viewBox="0 0 40 40" width="40" height="40">
            <circle cx="20" cy="20" r="19" fill="${brand.palette[0]?.hex || '#2563EB'}"/>
            <text x="20" y="25" font-family="'${cleanFontName(brand.headingFont)}', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF" text-anchor="middle">${initials}</text>
          </svg>
        `;
      }
    }

    if (elements.igHandle) elements.igHandle.textContent = brand.social?.handle || sanitizeHandle(brand.name);
    if (elements.igLocation) elements.igLocation.innerHTML = brand.social?.location || "Global Studio";
    if (elements.igCategoryTag) elements.igCategoryTag.textContent = brand.social?.category || "Debut Collection";
    if (elements.igPostHeadline) {
      elements.igPostHeadline.textContent = brand.tagline;
      elements.igPostHeadline.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.igPostSubtext) {
      elements.igPostSubtext.textContent = brand.sampleBody;
      elements.igPostSubtext.style.fontFamily = `'${brand.fonts.body}', sans-serif`;
    }

    if (elements.igWatermark) {
      if (brand.customLogoUrl) {
        elements.igWatermark.innerHTML = `<img src="${brand.customLogoUrl}" alt="${brand.name}" style="max-width: 140px; max-height: 80px; object-fit: contain; opacity: 0.85; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));">`;
      } else {
        elements.igWatermark.innerHTML = `
          <span style="font-family:'${brand.fonts.heading}', serif; font-size: 5rem; font-weight: 800; color: ${state.auditTextColor}; line-height: 1;">
            ${initials}
          </span>
        `;
      }
    }

    if (elements.igCaptionHandle) elements.igCaptionHandle.textContent = brand.social?.handle || sanitizeHandle(brand.name);
    if (elements.igCaptionText) elements.igCaptionText.textContent = brand.social?.caption;
    if (elements.igHashtags) elements.igHashtags.textContent = brand.social?.hashtags;
    if (elements.igLikesNumber) elements.igLikesNumber.textContent = `${state.likedCount.toLocaleString()} others`;
  }

  // =========================================================================
  // 17b. Social Campaign Templates & Tagline Vault Controller
  // =========================================================================
  function getProceduralCampaignKit(brand) {
    const name = brand?.name || "BrandDNA Studio";
    const niche = brand?.industry || "Design";
    const audience = brand?.audience || "discerning clients";
    const cleanCode = ((name || 'DROP').replace(/[^A-Za-z]/g, '').slice(0, 6).toUpperCase() || 'LAUNCH') + '25';
    const cleanNiche = niche.split('&')[0].replace(/[\/]/g, '').trim();

    return {
      campaignTemplates: {
        launch: {
          kicker: "GLOBAL DROP • PHASE 01",
          headline: `Introducing ${name}: Redefining Modern ${cleanNiche}.`,
          subtext: `Architected for ${audience.toLowerCase()}. Discover tactile intention, uncompromising poise, and modern aesthetic gravity.`,
          cta: "Shop Debut Collection ➔"
        },
        drop: {
          badge: "FLASH DROP • 48 HRS ONLY",
          offer: "25% OFF DEBUT",
          code: cleanCode,
          hook: `Unlock priority access to the inaugural studio edition of ${name}.`
        },
        testimonial: {
          badge: "EDITORIAL SPOTLIGHT",
          quote: `“${name} is an extraordinary synthesis of purpose, tactile refinement, and singular vision. A revelation for the industry.”`,
          author: "Architectural Digest",
          title: "Design Critic • Tokyo Dispatch",
          rating: "★★★★★"
        },
        founder: {
          badge: "BEHIND THE CRAFT • ISSUE 01",
          chapter: "CHAPTER 01 // ORIGINS",
          headline: `Why We Spent 18 Months Perfecting A Single Seam.`,
          subtext: `Mass production took the soul out of daily rituals. We founded ${name} to restore slow, intentional artistry to the objects you touch every day.`,
          author: "Founder’s Journal • 3 Min Read"
        },
        infographic: {
          badge: "DID YOU KNOW? • MASTERCLASS",
          headline: `3 Industry Truths Most Brands Keep Secret.`,
          point1: `Natural textures reduce cortisol & restore cognitive clarity.`,
          point2: `Circadian warmth beats harsh lux: light temperature dictates focus.`,
          point3: `Less is regenerative: fewer objects, infinitely higher craft.`,
          footerHint: `Save this post for your weekly mindful ritual 🔖`
        },
        countdown: {
          badge: "COMMUNITY DROP • LAUNCH DAY",
          timer: "T-MINUS 72 HOURS // LAUNCH PROTOCOL",
          headline: `The Curated Vault Opens This Friday.`,
          subtext: `We're gifting 3 Founding Member Bundles ($450 value) to celebrate our debut. Tap notify to join the private guestlist.`,
          cta: "Enter Founding Giveaway ➔"
        }
      },
      taglineVault: {
        bold: `Command the room. Set the standard.`,
        minimal: `Quiet precision. Pure form.`,
        emotional: `Made for moments that linger forever.`,
        playful: `Seriously good design for delightfully chaotic days.`,
        benefit: `Engineered for effortless daily clarity and peak performance.`,
        rebel: `Break the ordinary. Rewrite the category from scratch.`,
        heritage: `Generational integrity. Built to outlive every passing trend.`,
        poetic: `Where quiet stillness meets uncompromising craft.`
      }
    };
  }

  function renderCampaignTemplates(brand) {
    const kit = brand.campaignTemplates || getProceduralCampaignKit(brand).campaignTemplates;
    const launch = kit.launch || {};
    const drop = kit.drop || {};
    const test = kit.testimonial || {};
    const founder = kit.founder || {};
    const info = kit.infographic || {};
    const countdown = kit.countdown || {};

    const pPrimary = (brand.palette && brand.palette[0]?.hex) || '#2563EB';
    const pSecondary = (brand.palette && brand.palette[1]?.hex) || '#0D9488';
    const pDark = (brand.palette && brand.palette[4]?.hex) || '#0F172A';

    const lightLogoHtml = brand.customLogoUrl
      ? `<img src="${brand.customLogoUrl}" alt="${brand.name}" style="max-height: 24px; max-width: 70px; object-fit: contain;">`
      : `<span style="font-family:'${cleanFontName(brand.headingFont)}', serif; font-weight: 800; font-size: 0.95rem; color: #FFFFFF;">${brand.name}</span>`;

    const darkLogoHtml = brand.customLogoUrl
      ? `<img src="${brand.customLogoUrl}" alt="${brand.name}" style="max-height: 24px; max-width: 70px; object-fit: contain;">`
      : `<span style="font-family:'${cleanFontName(brand.headingFont)}', serif; font-weight: 800; font-size: 0.95rem; color: ${pPrimary};">${brand.name}</span>`;

    // 1. Launch Banner (1:1 Hero)
    if (elements.campaignLaunchLogo) elements.campaignLaunchLogo.innerHTML = lightLogoHtml;
    if (elements.campaignLaunchKicker) elements.campaignLaunchKicker.textContent = launch.kicker || "GLOBAL DROP • PHASE 01";
    if (elements.campaignLaunchHeadline) {
      elements.campaignLaunchHeadline.textContent = launch.headline || `Introducing ${brand.name}: Redefining the Standard.`;
      elements.campaignLaunchHeadline.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.campaignLaunchSubtext) {
      elements.campaignLaunchSubtext.textContent = launch.subtext || brand.sampleBody;
      elements.campaignLaunchSubtext.style.fontFamily = `'${brand.fonts.body}', sans-serif`;
    }
    if (elements.campaignLaunchCta) {
      elements.campaignLaunchCta.innerHTML = `<span>${launch.cta || 'Explore Collection'}</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      elements.campaignLaunchCta.style.background = pPrimary;
    }
    if (elements.campaignCardLaunch) {
      elements.campaignCardLaunch.style.background = `linear-gradient(135deg, ${pDark}, #1E293B)`;
    }

    // 2. Drop Story Card (9:16 Vertical)
    if (elements.campaignDropLogo) elements.campaignDropLogo.innerHTML = lightLogoHtml;
    if (elements.campaignDropBadge) elements.campaignDropBadge.textContent = drop.badge || "FLASH DROP • 48 HRS ONLY";
    if (elements.campaignDropOffer) {
      elements.campaignDropOffer.textContent = drop.offer || "25% OFF DEBUT";
      elements.campaignDropOffer.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.campaignDropHook) {
      elements.campaignDropHook.textContent = drop.hook || `Unlock priority access for ${brand.name}.`;
      elements.campaignDropHook.style.fontFamily = `'${brand.fonts.body}', sans-serif`;
    }
    if (elements.campaignDropCode) {
      elements.campaignDropCode.textContent = drop.code || ((brand.name || 'DROP').toUpperCase().slice(0, 6) + '25');
    }
    if (elements.campaignCardDrop) {
      elements.campaignCardDrop.style.background = `linear-gradient(135deg, #0F172A, ${pPrimary})`;
    }

    // 3. Testimonial Card (Editorial Square)
    if (elements.campaignTestLogo) elements.campaignTestLogo.innerHTML = darkLogoHtml;
    if (elements.campaignTestBadge) elements.campaignTestBadge.textContent = test.badge || "EDITORIAL SPOTLIGHT";
    if (elements.campaignTestRating) elements.campaignTestRating.textContent = test.rating || "★★★★★";
    if (elements.campaignTestQuote) {
      elements.campaignTestQuote.textContent = `“${(test.quote || '').replace(/^["“”']|["“”']$/g, '')}”`;
      elements.campaignTestQuote.style.fontFamily = `'${brand.fonts.heading}', serif`;
      elements.campaignTestQuote.style.borderLeftColor = pPrimary;
    }
    if (elements.campaignTestAuthor) elements.campaignTestAuthor.textContent = test.author || "Architectural Digest";
    if (elements.campaignTestTitle) elements.campaignTestTitle.textContent = test.title || "Design Critic • Tokyo Dispatch";

    // 4. Founder Story (Carousel Cover 4:5)
    if (elements.campaignFounderLogo) elements.campaignFounderLogo.innerHTML = darkLogoHtml;
    if (elements.campaignFounderBadge) elements.campaignFounderBadge.textContent = founder.badge || "BEHIND THE CRAFT • ISSUE 01";
    if (elements.campaignFounderChapter) elements.campaignFounderChapter.textContent = founder.chapter || "CHAPTER 01 // ORIGINS";
    if (elements.campaignFounderHeadline) {
      elements.campaignFounderHeadline.textContent = founder.headline || "Why We Spent 18 Months Perfecting A Single Seam.";
      elements.campaignFounderHeadline.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.campaignFounderSubtext) {
      elements.campaignFounderSubtext.textContent = founder.subtext || "Mass production took the soul out of daily rituals. We founded this studio to restore slow, intentional artistry.";
      elements.campaignFounderSubtext.style.fontFamily = `'${brand.fonts.body}', sans-serif`;
    }
    if (elements.campaignFounderAuthor) elements.campaignFounderAuthor.textContent = founder.author || "Founder’s Journal • 3 Min Read";

    // 5. Educational Infographic
    if (elements.campaignInfoLogo) elements.campaignInfoLogo.innerHTML = darkLogoHtml;
    if (elements.campaignInfoBadge) elements.campaignInfoBadge.textContent = info.badge || "DID YOU KNOW? • MASTERCLASS";
    if (elements.campaignInfoHeadline) {
      elements.campaignInfoHeadline.textContent = info.headline || "3 Industry Truths Most Brands Keep Secret.";
      elements.campaignInfoHeadline.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.campaignInfoPoint1) elements.campaignInfoPoint1.textContent = info.point1 || "Natural textures reduce cortisol & restore cognitive clarity.";
    if (elements.campaignInfoPoint2) elements.campaignInfoPoint2.textContent = info.point2 || "Circadian warmth beats harsh lux: light temperature dictates focus.";
    if (elements.campaignInfoPoint3) elements.campaignInfoPoint3.textContent = info.point3 || "Less is regenerative: fewer objects, infinitely higher craft.";
    if (elements.campaignInfoFooterText) elements.campaignInfoFooterText.textContent = info.footerHint || "Save this post for your weekly mindful ritual 🔖";

    // 6. Community Giveaway / Launch Countdown
    if (elements.campaignCountdownLogo) elements.campaignCountdownLogo.innerHTML = lightLogoHtml;
    if (elements.campaignCountdownBadge) elements.campaignCountdownBadge.textContent = countdown.badge || "COMMUNITY DROP • LAUNCH DAY";
    if (elements.campaignCountdownTimer) elements.campaignCountdownTimer.textContent = countdown.timer || "T-MINUS 72 HOURS // LAUNCH PROTOCOL";
    if (elements.campaignCountdownHeadline) {
      elements.campaignCountdownHeadline.textContent = countdown.headline || "The Curated Vault Opens This Friday.";
      elements.campaignCountdownHeadline.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.campaignCountdownSubtext) {
      elements.campaignCountdownSubtext.textContent = countdown.subtext || "We're gifting 3 Founding Member Bundles ($450 value) to celebrate our inaugural drop. Tap notify to enter the private guestlist.";
      elements.campaignCountdownSubtext.style.fontFamily = `'${brand.fonts.body}', sans-serif`;
    }
    if (elements.campaignCountdownCta) {
      elements.campaignCountdownCta.innerHTML = `<span>${countdown.cta || 'Enter Founding Giveaway'}</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
      elements.campaignCountdownCta.style.background = `linear-gradient(135deg, ${pPrimary}, ${pSecondary})`;
    }
    if (elements.campaignCardCountdown) {
      elements.campaignCardCountdown.style.background = `linear-gradient(135deg, #090D16, ${pDark})`;
    }
  }

  function renderTaglineVault(brand) {
    const vault = brand.taglineVault || getProceduralCampaignKit(brand).taglineVault;
    state.taglineCount = 8;

    if (elements.taglineTextBold) {
      elements.taglineTextBold.textContent = vault.bold || `Command the room. Set the standard.`;
      elements.taglineTextBold.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextMinimal) {
      elements.taglineTextMinimal.textContent = vault.minimal || `Quiet precision. Pure form.`;
      elements.taglineTextMinimal.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextEmotional) {
      elements.taglineTextEmotional.textContent = vault.emotional || `Made for moments that linger forever.`;
      elements.taglineTextEmotional.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextPlayful) {
      elements.taglineTextPlayful.textContent = vault.playful || `Seriously good design for delightfully chaotic days.`;
      elements.taglineTextPlayful.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextBenefit) {
      elements.taglineTextBenefit.textContent = vault.benefit || `Engineered for effortless daily clarity and peak performance.`;
      elements.taglineTextBenefit.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextRebel) {
      elements.taglineTextRebel.textContent = vault.rebel || `Break the ordinary. Rewrite the category from scratch.`;
      elements.taglineTextRebel.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextHeritage) {
      elements.taglineTextHeritage.textContent = vault.heritage || `Generational integrity. Built to outlive every passing trend.`;
      elements.taglineTextHeritage.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextPoetic) {
      elements.taglineTextPoetic.textContent = vault.poetic || `Where quiet stillness meets uncompromising craft.`;
      elements.taglineTextPoetic.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }

    if (elements.taglinesCountBadge) {
      elements.taglinesCountBadge.textContent = '8 Angles Ready';
    }
  }

  async function downloadCampaignTemplateAsPNG(templateIndex) {
    const brand = state.currentBrand || getProceduralBrand("Komorebi Living", "minimalist-luxury", "Home Goods & Ceramics", "Connoisseurs");
    const kit = brand.campaignTemplates || getProceduralCampaignKit(brand).campaignTemplates;
    const pPrimary = (brand.palette && brand.palette[0]?.hex) || '#2563EB';
    const pSecondary = (brand.palette && brand.palette[1]?.hex) || '#0D9488';
    const pDark = (brand.palette && brand.palette[4]?.hex) || '#0F172A';
    const headingFont = brand.fonts?.heading || 'Plus Jakarta Sans';
    const bodyFont = brand.fonts?.body || 'Plus Jakarta Sans';

    let width = 1080;
    let height = 1080;
    let filename = `${(brand.name || 'Brand').replace(/[^a-zA-Z0-9]/g, '_')}`;

    if (templateIndex === 2) {
      width = 1080;
      height = 1920;
      filename += '_Promo_Story';
    } else if (templateIndex === 4) {
      width = 1080;
      height = 1350;
      filename += '_Founder_Story';
    } else if (templateIndex === 1) {
      filename += '_Launch_Banner';
    } else if (templateIndex === 3) {
      filename += '_Editorial_Review';
    } else if (templateIndex === 5) {
      filename += '_Infographic_Guide';
    } else if (templateIndex === 6) {
      filename += '_Launch_Countdown';
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function wrapText(context, text, x, y, maxWidth, lineHeight) {
      const words = String(text || '').split(' ');
      let line = '';
      let curY = y;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          context.fillText(line.trim(), x, curY);
          line = words[n] + ' ';
          curY += lineHeight;
        } else {
          line = testLine;
        }
      }
      context.fillText(line.trim(), x, curY);
      return curY + lineHeight;
    }

    function fillRoundedRect(context, x, y, w, h, radius, fillStyle) {
      context.beginPath();
      context.moveTo(x + radius, y);
      context.lineTo(x + w - radius, y);
      context.quadraticCurveTo(x + w, y, x + w, y + radius);
      context.lineTo(x + w, y + h - radius);
      context.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
      context.lineTo(x + radius, y + h);
      context.quadraticCurveTo(x, y + h, x, y + h - radius);
      context.lineTo(x, y + radius);
      context.quadraticCurveTo(x, y, x + radius, y);
      context.closePath();
      context.fillStyle = fillStyle;
      context.fill();
    }

    let logoImg = null;
    if (brand.customLogoUrl) {
      try {
        logoImg = await new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = brand.customLogoUrl;
        });
      } catch (e) {
        logoImg = null;
      }
    }

    if (templateIndex === 1) {
      // 1. Hero Product Drop Banner (1080x1080)
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, pDark);
      grad.addColorStop(1, '#090D16');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const radial = ctx.createRadialGradient(width * 0.8, height * 0.2, 50, width * 0.8, height * 0.2, 600);
      radial.addColorStop(0, pPrimary + '44');
      radial.addColorStop(1, 'transparent');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 2;
      ctx.strokeRect(60, 60, width - 120, height - 120);

      if (logoImg) {
        ctx.drawImage(logoImg, 100, 110, 160, 50);
      } else {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold 38px '${headingFont}', sans-serif`;
        ctx.fillText(brand.name, 100, 150);
      }

      fillRoundedRect(ctx, width - 380, 115, 280, 48, 24, pPrimary);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold 16px '${bodyFont}', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(kit.launch?.kicker || 'GLOBAL DROP • PHASE 01', width - 240, 145);
      ctx.textAlign = 'left';

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `800 58px '${headingFont}', sans-serif`;
      let nextY = wrapText(ctx, kit.launch?.headline || `Introducing ${brand.name}`, 100, 380, width - 200, 72);

      ctx.fillStyle = '#94A3B8';
      ctx.font = `400 28px '${bodyFont}', sans-serif`;
      nextY = wrapText(ctx, kit.launch?.subtext || '', 100, nextY + 30, width - 200, 44);

      fillRoundedRect(ctx, 100, Math.min(nextY + 60, height - 190), 320, 72, 36, pPrimary);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold 24px '${bodyFont}', sans-serif`;
      ctx.fillText(kit.launch?.cta || 'Explore Collection ➔', 140, Math.min(nextY + 60, height - 190) + 45);

    } else if (templateIndex === 2) {
      // 2. Flash Offer Story (1080x1920)
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#0F172A');
      grad.addColorStop(0.5, pPrimary);
      grad.addColorStop(1, '#090D16');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      if (logoImg) {
        ctx.drawImage(logoImg, (width - 240) / 2, 220, 240, 75);
      } else {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold 52px '${headingFont}', sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(brand.name, width / 2, 270);
      }

      ctx.textAlign = 'center';
      fillRoundedRect(ctx, (width - 460) / 2, 420, 460, 56, 28, 'rgba(255, 255, 255, 0.15)');
      ctx.fillStyle = '#FDE047';
      ctx.font = `bold 20px '${bodyFont}', sans-serif`;
      ctx.fillText(kit.drop?.badge || 'FLASH DROP • 48 HRS ONLY', width / 2, 456);

      ctx.fillStyle = '#FDE047';
      ctx.font = `900 110px '${headingFont}', sans-serif`;
      ctx.fillText(kit.drop?.offer || '25% OFF DEBUT', width / 2, 750);

      ctx.fillStyle = '#E2E8F0';
      ctx.font = `500 34px '${bodyFont}', sans-serif`;
      wrapText(ctx, kit.drop?.hook || '', 120, 880, width - 240, 52);

      fillRoundedRect(ctx, 160, 1140, width - 320, 160, 24, 'rgba(255, 255, 255, 0.1)');
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 3;
      ctx.strokeRect(160, 1140, width - 320, 160);

      ctx.fillStyle = '#93C5FD';
      ctx.font = `bold 22px '${bodyFont}', sans-serif`;
      ctx.fillText('PROMO CODE', width / 2, 1190);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold 52px monospace`;
      ctx.fillText(kit.drop?.code || 'DEBUT25', width / 2, 1260);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = `600 24px '${bodyFont}', sans-serif`;
      ctx.fillText('Tap or Visit Website to Claim ➔', width / 2, height - 180);
      ctx.textAlign = 'left';

    } else if (templateIndex === 3) {
      // 3. Editorial Spotlight / Customer Review (1080x1080)
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      const topGrad = ctx.createLinearGradient(0, 0, width, 0);
      topGrad.addColorStop(0, pPrimary);
      topGrad.addColorStop(1, pSecondary);
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, width, 16);

      if (logoImg) {
        ctx.drawImage(logoImg, 100, 90, 180, 55);
      } else {
        ctx.fillStyle = pPrimary;
        ctx.font = `bold 38px '${headingFont}', sans-serif`;
        ctx.fillText(brand.name, 100, 130);
      }

      fillRoundedRect(ctx, width - 380, 95, 280, 48, 24, '#F1F5F9');
      ctx.fillStyle = '#475569';
      ctx.font = `bold 16px '${bodyFont}', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(kit.testimonial?.badge || 'EDITORIAL SPOTLIGHT', width - 240, 125);
      ctx.textAlign = 'left';

      ctx.fillStyle = '#EAB308';
      ctx.font = `44px sans-serif`;
      ctx.fillText(kit.testimonial?.rating || '★★★★★', 100, 260);

      ctx.fillStyle = pPrimary;
      ctx.fillRect(100, 310, 8, 380);

      ctx.fillStyle = '#0F172A';
      ctx.font = `italic 600 44px '${headingFont}', serif`;
      const cleanQ = (kit.testimonial?.quote || '').replace(/^["“”']|["“”']$/g, '');
      const endY = wrapText(ctx, `“${cleanQ}”`, 140, 360, width - 260, 64);

      ctx.fillStyle = '#0F172A';
      ctx.font = `bold 32px '${bodyFont}', sans-serif`;
      ctx.fillText(kit.testimonial?.author || 'Architectural Digest', 140, Math.max(endY + 60, 780));

      ctx.fillStyle = '#64748B';
      ctx.font = `500 24px '${bodyFont}', sans-serif`;
      ctx.fillText(kit.testimonial?.title || 'Design Critic • Global Dispatch', 140, Math.max(endY + 105, 825));

    } else if (templateIndex === 4) {
      // 4. Founder Story / Behind-the-Craft (1080x1350)
      ctx.fillStyle = '#FAF9F6';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = '#E7E5E4';
      ctx.lineWidth = 2;
      ctx.strokeRect(50, 50, width - 100, height - 100);

      if (logoImg) {
        ctx.drawImage(logoImg, 100, 100, 180, 55);
      } else {
        ctx.fillStyle = '#1C1917';
        ctx.font = `bold 36px '${headingFont}', sans-serif`;
        ctx.fillText(brand.name, 100, 140);
      }

      fillRoundedRect(ctx, width - 400, 105, 300, 48, 24, '#FEF3C7');
      ctx.fillStyle = '#B45309';
      ctx.font = `bold 15px '${bodyFont}', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(kit.founder?.badge || 'BEHIND THE CRAFT • 01', width - 250, 135);
      ctx.textAlign = 'left';

      ctx.fillStyle = '#D97706';
      ctx.font = `bold 22px '${bodyFont}', sans-serif`;
      ctx.fillText(kit.founder?.chapter || 'CHAPTER 01 // ORIGINS', 100, 290);

      ctx.fillStyle = '#1C1917';
      ctx.font = `800 56px '${headingFont}', sans-serif`;
      let curY = wrapText(ctx, kit.founder?.headline || "Why We Spent 18 Months Perfecting A Single Seam.", 100, 380, width - 200, 72);

      ctx.strokeStyle = pPrimary;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(100, curY + 20);
      ctx.lineTo(220, curY + 20);
      ctx.stroke();

      ctx.fillStyle = '#57534E';
      ctx.font = `400 32px '${bodyFont}', sans-serif`;
      curY = wrapText(ctx, kit.founder?.subtext || '', 100, curY + 90, width - 200, 52);

      fillRoundedRect(ctx, 100, height - 180, width - 200, 64, 12, '#FFFFFF');
      ctx.strokeStyle = '#E7E5E4';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(100, height - 180, width - 200, 64);

      ctx.fillStyle = '#78716C';
      ctx.font = `600 22px '${bodyFont}', sans-serif`;
      ctx.fillText(kit.founder?.author || 'Founder’s Journal • 3 Min Read', 130, height - 140);

    } else if (templateIndex === 5) {
      // 5. 'Did You Know?' Educational Infographic (1080x1080)
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      if (logoImg) {
        ctx.drawImage(logoImg, 90, 80, 180, 55);
      } else {
        ctx.fillStyle = pPrimary;
        ctx.font = `bold 36px '${headingFont}', sans-serif`;
        ctx.fillText(brand.name, 90, 120);
      }

      fillRoundedRect(ctx, width - 390, 85, 300, 48, 24, '#E0F2FE');
      ctx.fillStyle = '#0369A1';
      ctx.font = `bold 15px '${bodyFont}', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(kit.infographic?.badge || 'DID YOU KNOW? • GUIDE', width - 240, 115);
      ctx.textAlign = 'left';

      ctx.fillStyle = '#0F172A';
      ctx.font = `800 46px '${headingFont}', sans-serif`;
      let nextY = wrapText(ctx, kit.infographic?.headline || "3 Industry Truths Most Brands Keep Secret.", 90, 230, width - 180, 60);

      const points = [
        kit.infographic?.point1 || 'Natural textures reduce cortisol & calm daily cognitive load.',
        kit.infographic?.point2 || 'Circadian warmth beats harsh lux: light temperature dictates focus.',
        kit.infographic?.point3 || 'Less is regenerative: fewer objects, infinitely higher craft.'
      ];

      nextY = Math.max(nextY + 30, 360);
      points.forEach((pt, idx) => {
        fillRoundedRect(ctx, 90, nextY, width - 180, 110, 16, '#F8FAFC');
        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1;
        ctx.strokeRect(90, nextY, width - 180, 110);

        fillRoundedRect(ctx, 115, nextY + 30, 50, 48, 8, pPrimary);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold 20px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(`0${idx + 1}`, 140, nextY + 62);
        ctx.textAlign = 'left';

        ctx.fillStyle = '#1E293B';
        ctx.font = `600 24px '${bodyFont}', sans-serif`;
        wrapText(ctx, pt.replace(/^[0-9]+\s*\/\s*/, ''), 190, nextY + 62, width - 320, 34);

        nextY += 135;
      });

      ctx.fillStyle = '#0D9488';
      ctx.font = `600 22px '${bodyFont}', sans-serif`;
      ctx.fillText(kit.infographic?.footerHint || 'Save this post for your weekly ritual 🔖', 90, height - 80);

    } else if (templateIndex === 6) {
      // 6. Community Giveaway / Launch Countdown (1080x1080)
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#090D16');
      grad.addColorStop(0.6, pDark);
      grad.addColorStop(1, '#1E293B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      if (logoImg) {
        ctx.drawImage(logoImg, 90, 90, 180, 55);
      } else {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold 36px '${headingFont}', sans-serif`;
        ctx.fillText(brand.name, 90, 130);
      }

      fillRoundedRect(ctx, width - 390, 95, 300, 48, 24, '#FEE2E2');
      ctx.fillStyle = '#DC2626';
      ctx.font = `bold 15px '${bodyFont}', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(kit.countdown?.badge || 'COMMUNITY DROP', width - 240, 125);
      ctx.textAlign = 'left';

      fillRoundedRect(ctx, 90, 240, 440, 50, 10, 'rgba(239, 68, 68, 0.2)');
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(90, 240, 440, 50);

      ctx.fillStyle = '#EF4444';
      ctx.font = `bold 20px monospace`;
      ctx.fillText(kit.countdown?.timer || 'T-MINUS 72 HOURS // LAUNCH PROTOCOL', 115, 273);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `800 58px '${headingFont}', sans-serif`;
      let nextY = wrapText(ctx, kit.countdown?.headline || "The Curated Vault Opens This Friday.", 90, 390, width - 180, 72);

      ctx.fillStyle = '#94A3B8';
      ctx.font = `400 28px '${bodyFont}', sans-serif`;
      nextY = wrapText(ctx, kit.countdown?.subtext || '', 90, nextY + 30, width - 180, 44);

      fillRoundedRect(ctx, 90, Math.min(nextY + 60, height - 180), 380, 72, 36, pPrimary);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold 24px '${bodyFont}', sans-serif`;
      ctx.fillText(kit.countdown?.cta || 'Enter Founding Giveaway ➔', 125, Math.min(nextY + 60, height - 180) + 45);
    }

    try {
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(`Exported high-res PNG for ${filename.replace(/_/g, ' ')}! 🎨`, 'success', 3000);
      }, 'image/png');
    } catch (err) {
      console.error('PNG export error:', err);
      showToast('Could not export PNG image. Please try again.', 'warning');
    }
  }

  async function handleGenerateMoreTaglines() {
    const brand = state.currentBrand || getProceduralBrand("Komorebi Living", "minimalist-luxury", "Home Goods & Ceramics", "Connoisseurs");
    if (!elements.taglineVaultGrid) return;

    if (elements.btnGenerateMoreTaglines) elements.btnGenerateMoreTaglines.disabled = true;
    if (elements.moreTaglinesSpinner) elements.moreTaglinesSpinner.classList.remove('hidden');
    if (elements.btnMoreTaglinesText) elements.btnMoreTaglinesText.textContent = "Writing 4 More...";

    const currentCount = state.taglineCount || 8;
    const name = brand.name || "Brand";
    const niche = brand.industry || "Design";
    const vibe = brand.vibe || "minimalist-luxury";

    const freshArchetypes = [
      { badgeClass: 'badge-benefit', icon: '🎯', label: 'Precision & Focus', text: `Engineered without compromise. Designed for ${name}.` },
      { badgeClass: 'badge-minimal', icon: '✦', label: 'Understated Poise', text: `True confidence never needs to raise its voice.` },
      { badgeClass: 'badge-poetic', icon: '🌊', label: 'Sensory Resonance', text: `Craft you experience long before you speak.` },
      { badgeClass: 'badge-rebel', icon: '🔥', label: 'Category Disruptor', text: `The new rules of ${niche.split('&')[0].trim()} begin right here.` },
      { badgeClass: 'badge-heritage', icon: '🏛️', label: 'Timeless Gravity', text: `Built for permanence in an era of disposable noise.` },
      { badgeClass: 'badge-bold', icon: '⚡', label: 'High Velocity', text: `Accelerate into distinction. Never look back.` },
      { badgeClass: 'badge-playful', icon: '🎉', label: 'Clever Wit', text: `Impossibly high standards, delightfully low pretense.` },
      { badgeClass: 'badge-emotional', icon: '♥', label: 'Human Connection', text: `For the daily rituals that define who you become.` }
    ];

    const startIndex = (currentCount - 8) % freshArchetypes.length;
    const selected4 = [];
    for (let i = 0; i < 4; i++) {
      selected4.push(freshArchetypes[(startIndex + i) % freshArchetypes.length]);
    }

    const apiKey = getStoredApiKey();
    if (apiKey) {
      try {
        const promptText = `
You are a legendary Brand Strategist & Copywriter.
Create 4 additional novel, punchy taglines for:
- Brand Name: "${name}"
- Sector: "${niche}"
- Brand Vibe: "${vibe}"

Return JSON matching this schema:
[
  { "label": "Angle Name (e.g. Futuristic Vision)", "icon": "🚀", "badgeClass": "badge-benefit", "text": "Punchy 4-8 word tagline." },
  { "label": "Angle Name (e.g. Quiet Confidence)", "icon": "✦", "badgeClass": "badge-minimal", "text": "Punchy 4-8 word tagline." },
  { "label": "Angle Name (e.g. Visceral Craft)", "icon": "🌊", "badgeClass": "badge-poetic", "text": "Punchy 4-8 word tagline." },
  { "label": "Angle Name (e.g. Bold Defiance)", "icon": "🔥", "badgeClass": "badge-rebel", "text": "Punchy 4-8 word tagline." }
]
`.trim();

        const data = await callGeminiEndpoint({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: { temperature: 0.8, responseMimeType: "application/json" }
        });
        const parsed = extractJsonFromGeminiResponse(data);
        if (Array.isArray(parsed) && parsed.length >= 4) {
          selected4.forEach((item, idx) => {
            if (parsed[idx] && parsed[idx].text) {
              item.text = parsed[idx].text;
              if (parsed[idx].label) item.label = parsed[idx].label;
            }
          });
        }
      } catch (err) {
        console.warn('AI more taglines fallback to procedural:', err);
      }
    }

    selected4.forEach((angle, idx) => {
      const card = document.createElement('div');
      card.className = 'tagline-angle-card';
      card.style.animation = 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both';
      const angleId = `tagline-more-${currentCount + idx + 1}`;

      card.innerHTML = `
        <div class="angle-header">
          <span class="angle-badge ${angle.badgeClass}">${angle.icon} ${angle.label}</span>
          <button type="button" class="btn-copy-idea btn-copy-angle" id="btn-copy-${angleId}" title="Copy tagline">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy</span>
          </button>
        </div>
        <p class="tagline-text" id="text-${angleId}" style="font-family:'${brand.fonts?.heading || 'Plus Jakarta Sans'}', serif;">${angle.text}</p>
      `;

      elements.taglineVaultGrid.appendChild(card);

      const copyBtn = card.querySelector(`#btn-copy-${angleId}`);
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          copyToClipboard(angle.text, `${angle.label} Tagline copied!`);
        });
      }
    });

    state.taglineCount = currentCount + 4;
    if (elements.taglinesCountBadge) {
      elements.taglinesCountBadge.textContent = `${state.taglineCount} Angles Ready`;
    }

    showToast(`Generated 4 new strategic taglines! Total: ${state.taglineCount}`, 'success', 2500);

    if (elements.btnGenerateMoreTaglines) elements.btnGenerateMoreTaglines.disabled = false;
    if (elements.moreTaglinesSpinner) elements.moreTaglinesSpinner.classList.add('hidden');
    if (elements.btnMoreTaglinesText) elements.btnMoreTaglinesText.textContent = "+ 4 More Taglines";
  }

  // =========================================================================
  // 17c. Dual-Mode Toggle, Existing Brand Form & Logo Upload
  // =========================================================================
  function initModeToggle() {
    if (!elements.btnTabScratch || !elements.btnTabExisting) return;

    elements.btnTabScratch.addEventListener('click', () => {
      state.studioMode = 'scratch';
      elements.btnTabScratch.classList.add('active');
      elements.btnTabScratch.setAttribute('aria-selected', 'true');
      elements.btnTabExisting.classList.remove('active');
      elements.btnTabExisting.setAttribute('aria-selected', 'false');

      if (elements.panelScratch) elements.panelScratch.classList.remove('hidden');
      if (elements.panelExisting) elements.panelExisting.classList.add('hidden');
    });

    elements.btnTabExisting.addEventListener('click', () => {
      state.studioMode = 'existing';
      elements.btnTabExisting.classList.add('active');
      elements.btnTabExisting.setAttribute('aria-selected', 'true');
      elements.btnTabScratch.classList.remove('active');
      elements.btnTabScratch.setAttribute('aria-selected', 'false');

      if (elements.panelExisting) elements.panelExisting.classList.remove('hidden');
      if (elements.panelScratch) elements.panelScratch.classList.add('hidden');
    });
  }

  function initExistingColorPickers() {
    for (let i = 1; i <= 5; i++) {
      const picker = document.getElementById(`existing-picker-${i}`);
      const hexInput = document.getElementById(`existing-hex-${i}`);
      if (!picker || !hexInput) continue;

      picker.addEventListener('input', (e) => {
        hexInput.value = e.target.value.toUpperCase();
      });

      hexInput.addEventListener('input', (e) => {
        let val = e.target.value.trim();
        if (!val.startsWith('#')) val = '#' + val;
        if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
          picker.value = val;
        }
      });
    }

    if (elements.btnPresetCobaltPalette) {
      elements.btnPresetCobaltPalette.addEventListener('click', () => {
        const presets = ['#2563EB', '#0D9488', '#38BDF8', '#F8FAFC', '#0F172A'];
        presets.forEach((hex, idx) => {
          const picker = document.getElementById(`existing-picker-${idx + 1}`);
          const hexInput = document.getElementById(`existing-hex-${idx + 1}`);
          if (picker) picker.value = hex;
          if (hexInput) hexInput.value = hex;
        });
        showToast('Reset to Electric Cobalt & Mint Teal palette', 'info', 1500);
      });
    }
  }

  function initLogoUpload() {
    if (!elements.logoUploadDropzone || !elements.inputExistingLogo) return;

    elements.logoUploadDropzone.addEventListener('click', (e) => {
      if (e.target.closest('#btn-remove-logo')) return;
      elements.inputExistingLogo.click();
    });

    elements.logoUploadDropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        elements.inputExistingLogo.click();
      }
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      elements.logoUploadDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        elements.logoUploadDropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      elements.logoUploadDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        elements.logoUploadDropzone.classList.remove('dragover');
      });
    });

    elements.logoUploadDropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        handleLogoFile(files[0]);
      }
    });

    elements.inputExistingLogo.addEventListener('change', (e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleLogoFile(files[0]);
      }
    });

    if (elements.btnRemoveLogo) {
      elements.btnRemoveLogo.addEventListener('click', (e) => {
        e.stopPropagation();
        state.uploadedLogoDataUrl = null;
        state.uploadedLogoFileName = '';
        elements.inputExistingLogo.value = '';
        if (elements.logoPreviewBox) elements.logoPreviewBox.classList.add('hidden');
        if (elements.dropzonePrompt) elements.dropzonePrompt.classList.remove('hidden');
        showToast('Logo removed', 'info', 1500);
      });
    }
  }

  function handleLogoFile(file) {
    if (!file.type.match(/^image\/(png|jpeg|jpg|svg\+xml|webp)$/)) {
      showToast('Please upload a valid PNG, SVG, or JPG image', 'warning');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast('File size exceeds 5MB limit', 'warning');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      state.uploadedLogoDataUrl = event.target.result;
      state.uploadedLogoFileName = file.name;

      if (elements.logoPreviewImg) elements.logoPreviewImg.src = state.uploadedLogoDataUrl;
      if (elements.logoFileDetails) elements.logoFileDetails.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
      if (elements.logoPreviewBox) elements.logoPreviewBox.classList.remove('hidden');
      if (elements.dropzonePrompt) elements.dropzonePrompt.classList.add('hidden');

      showToast(`Uploaded ${file.name} successfully!`, 'success');
    };
    reader.readAsDataURL(file);
  }

  function generateProceduralExistingBrand(name, industry, desc, colors) {
    const proceduralCampaigns = getProceduralCampaignKit({ name, industry, audience: "modern clients", vibe: "minimalist-luxury" });
    const cleanCode = ((name || 'AURA').replace(/[^A-Za-z]/g, '').slice(0, 6).toUpperCase() || 'AURA') + '25';

    return {
      name: name,
      industry: industry,
      audience: "Discerning clients & design connoisseurs",
      vibe: "minimalist-luxury",
      tagline: `${name}: Engineered for distinction.`,
      colors: colors,
      palette: colors,
      headingFont: "Plus Jakarta Sans",
      bodyFont: "Plus Jakarta Sans",
      fonts: {
        heading: "Plus Jakarta Sans",
        headingWeight: "Bold 700",
        body: "Plus Jakarta Sans",
        bodyWeight: "Regular 400"
      },
      voiceTone: ["Discerning", "Tactile", "Resolute"],
      tones: ["Discerning", "Tactile", "Resolute"],
      svgIconPath: getNiche24x24IconPath(industry, "minimalist-luxury"),
      launchCalendar: getLaunchCalendarBlueprint({ name, vibe: "minimalist-luxury", industry }),
      instagramIdeas: [
        generateProceduralIdea({ name, vibe: "minimalist-luxury", industry, audience: "discerning clients", tones: ["Discerning", "Tactile", "Resolute"] }, 0),
        generateProceduralIdea({ name, vibe: "minimalist-luxury", industry, audience: "discerning clients", tones: ["Discerning", "Tactile", "Resolute"] }, 1),
        generateProceduralIdea({ name, vibe: "minimalist-luxury", industry, audience: "discerning clients", tones: ["Discerning", "Tactile", "Resolute"] }, 2)
      ],
      campaignTemplates: {
        launch: {
          kicker: "GROWTH RELEASE • VOL 01",
          headline: `Introducing the Next Evolution of ${name}.`,
          subtext: desc || `Architected for uncompromising precision. Designed to establish an authoritative visual presence across every touchpoint.`,
          cta: "Discover the Release ➔"
        },
        drop: {
          badge: "COMMUNITY DROP • 48 HRS ONLY",
          offer: "25% OFF EXCLUSIVE DROP",
          code: cleanCode,
          hook: `Unlock priority access to the new ${name} collection. Enter promo code at checkout.`
        },
        testimonial: {
          badge: "EDITORIAL SPOTLIGHT",
          quote: `“${name} continues to set the benchmark in modern execution. Distinct, tactile, and immediately recognizable.”`,
          author: "Monocle Design Review",
          title: "Senior Contributing Editor",
          rating: "★★★★★"
        },
        founder: {
          badge: "BEHIND THE CRAFT • ISSUE 01",
          chapter: "CHAPTER 01 // ORIGINS",
          headline: `Why We Built ${name} From The Ground Up.`,
          subtext: desc || `We founded ${name} to restore slow, intentional artistry to the modern landscape.`,
          author: "Founder’s Journal • 3 Min Read"
        },
        infographic: {
          badge: "DID YOU KNOW? • MASTERCLASS",
          headline: `3 Principles Behind The ${name} Standard.`,
          point1: `Obsessive precision in every tangible touchpoint.`,
          point2: `Timeless aesthetics engineered to outlast micro-trends.`,
          point3: `Uncompromising material integrity from concept to release.`,
          footerHint: `Save this post for your weekly mindful ritual 🔖`
        },
        countdown: {
          badge: "COMMUNITY DROP • LAUNCH DAY",
          timer: "T-MINUS 72 HOURS // LAUNCH PROTOCOL",
          headline: `The New ${name} Edition Unveils This Friday.`,
          subtext: `Priority access opens to our founding members. Reserve your place now.`,
          cta: "Join Founding Guestlist ➔"
        }
      },
      taglineVault: {
        bold: `Command the standard. Own ${name}.`,
        minimal: `Pure form. Uncompromising intention.`,
        emotional: `Crafted for the connections that outlast trends.`,
        playful: `Seriously exceptional design for delightfully ambitious ventures.`,
        benefit: `Engineered for effortless distinction and peak operational clarity.`,
        rebel: `Reject the cookie-cutter standard. Build what endures.`,
        heritage: `Rooted in authentic craft. Built for generations.`,
        poetic: `Quiet excellence that speaks in every nuance.`
      },
      sampleHeadline: `${name}: Engineered for distinction.`,
      sampleBody: desc || `Crafted for modern connoisseurs who value intentional craftsmanship and distinct character.`,
      paletteNarrative: `${name} harmonizes custom tones to convey an authoritative, singular presence.`,
      social: {
        handle: sanitizeHandle(name),
        location: "Global Flagship",
        category: "Growth & Expansion",
        caption: `${name}: Engineered for distinction. Discover the new campaign release and explore our complete visual ecosystem.`,
        hashtags: `#${name.replace(/[^a-zA-Z0-9]/g, '')} #BrandGrowth #ModernIdentity #DesignStandard`
      }
    };
  }

  async function generateExistingBrandWithAI(name, industry, desc, colors) {
    const promptText = `
You are the world's elite Brand Growth Strategist & Campaign Creative Director.
The client has an EXISTING BRAND with established assets.
- Brand Name: "${name}"
- Sector: "${industry}"
- Current Brand Description & Essence: "${desc}"
- Brand Colors: ${colors.map(c => `${c.role}: ${c.hex}`).join(', ')}

Generate high-conversion growth campaign assets and tagline angles in strict JSON matching this schema:
{
  "tagline": "A punchy, memorable 4-8 word brand tagline.",
  "headingFont": "Real Google Font (e.g. Plus Jakarta Sans, Outfit, Cinzel, Space Grotesk, Syne)",
  "bodyFont": "Real Google Font (e.g. Plus Jakarta Sans, Inter, Space Grotesk)",
  "voiceTone": ["ToneWord1", "ToneWord2", "ToneWord3"],
  "launchCalendar": [
    { "day": 1, "title": "Teaser & Curiosity Poll", "format": "Story", "hook": "Day 1 Hook Headline" },
    { "day": 2, "title": "Founder / Origin Story", "format": "Carousel", "hook": "Day 2 Hook Headline" },
    { "day": 3, "title": "Product Reveal", "format": "Reel", "hook": "Day 3 Hook Headline" },
    { "day": 4, "title": "Behind-the-Scenes", "format": "Reel", "hook": "Day 4 Hook Headline" },
    { "day": 5, "title": "Social Proof / Community", "format": "Carousel", "hook": "Day 5 Hook Headline" },
    { "day": 6, "title": "Launch Offer / Drop", "format": "Post / Reel", "hook": "Day 6 Hook Headline" },
    { "day": 7, "title": "Recap & Q&A", "format": "Story / Live", "hook": "Day 7 Hook Headline" }
  ],
  "instagramIdeas": [
    { "format": "Carousel (5 Slides)", "hook": "Scroll-stopping hook headline", "caption": "Engaging high-conversion caption", "hashtags": "#5 #Relevant #Hashtags" },
    { "format": "Reel (15s Audio Hook)", "hook": "Scroll-stopping hook headline", "caption": "Engaging high-conversion caption", "hashtags": "#5 #Relevant #Hashtags" },
    { "format": "Aesthetic Still", "hook": "Scroll-stopping hook headline", "caption": "Engaging high-conversion caption", "hashtags": "#5 #Relevant #Hashtags" }
  ],
  "campaignTemplates": {
    "launch": {
      "kicker": "Short punchy kicker badge (e.g. GLOBAL DROP • VOL 01)",
      "headline": "High-impact product launch headline tailored to this brand",
      "subtext": "Compelling 1-2 sentence campaign subtext",
      "cta": "Call to action text (e.g. Claim Early Access ➔)"
    },
    "drop": {
      "badge": "Flash drop badge (e.g. LIMITED DROP • 48 HRS ONLY)",
      "offer": "Clear compelling offer headline (e.g. 25% OFF INAUGURAL DROP)",
      "code": "Creative promo code (e.g. ${name.toUpperCase().slice(0, 4)}25)",
      "hook": "Urgent drop hook sentence"
    },
    "testimonial": {
      "badge": "EDITORIAL SPOTLIGHT",
      "quote": "Glowing editorial endorsement quote speaking to the craft",
      "author": "Publication or customer name",
      "title": "Critic or verified collector title",
      "rating": "★★★★★"
    },
    "founder": {
      "badge": "BEHIND THE CRAFT • ISSUE 01",
      "chapter": "CHAPTER 01 // ORIGINS",
      "headline": "Personal, compelling founder/maker revelation headline",
      "subtext": "Rich 2-sentence manifesto on why this brand was founded",
      "author": "Founder’s Journal • 3 Min Read"
    },
    "infographic": {
      "badge": "DID YOU KNOW? • MASTERCLASS",
      "headline": "Educational 3-pillar truth headline",
      "point1": "Insightful industry pillar 1",
      "point2": "Insightful industry pillar 2",
      "point3": "Insightful industry pillar 3",
      "footerHint": "Save this post for your weekly ritual 🔖"
    },
    "countdown": {
      "badge": "COMMUNITY DROP • LAUNCH DAY",
      "timer": "T-MINUS 72 HOURS // LAUNCH PROTOCOL",
      "headline": "Urgent launch/vault opening headline",
      "subtext": "Prize or exclusive debut allocation terms",
      "cta": "Enter Founding Giveaway ➔"
    }
  },
  "taglineVault": {
    "bold": "A bold, commanding, unapologetic tagline angle.",
    "minimal": "A quiet, poetic, minimalist tagline angle.",
    "emotional": "A deep, evocative, emotional tagline angle.",
    "playful": "A clever, witty, delightful tagline angle.",
    "benefit": "A crisp, benefit-driven outcome tagline.",
    "rebel": "A category-disrupting rebel tagline.",
    "heritage": "A timeless trust and craft heritage tagline.",
    "poetic": "A rhythmic, evocative poetic tagline."
  }
}

Return ONLY valid JSON with NO commentary.
`.trim();

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json"
      }
    };

    const data = await callGeminiEndpoint(payload);
    const parsed = extractJsonFromGeminiResponse(data);
    return parsed;
  }

  async function handleGenerateExistingBrand() {
    if (state.isGeneratingExisting) return;

    const name = elements.inputExistingName ? elements.inputExistingName.value.trim() : 'Aura Soundworks';
    if (!name) {
      showToast('Please enter your existing brand name', 'warning');
      if (elements.inputExistingName) elements.inputExistingName.focus();
      return;
    }

    const industry = elements.existingIndustrySelect ? elements.existingIndustrySelect.value : 'Boutique Interior Design';
    const desc = elements.inputExistingDesc ? elements.inputExistingDesc.value.trim() : 'Modern design & tech venture.';

    const colors = [];
    const roles = ['Primary Accent', 'Secondary Tone', 'Vibrant Highlight', 'Neutral Light', 'Dark / Text'];
    for (let i = 1; i <= 5; i++) {
      const hexEl = document.getElementById(`existing-hex-${i}`);
      const pickerEl = document.getElementById(`existing-picker-${i}`);
      let hex = (hexEl ? hexEl.value.trim() : '') || (pickerEl ? pickerEl.value : '#2563EB');
      if (!hex.startsWith('#')) hex = '#' + hex;
      if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) hex = ['#2563EB', '#0D9488', '#38BDF8', '#F8FAFC', '#0F172A'][i - 1];
      colors.push({
        hex: hex.toUpperCase(),
        name: `Brand Tone 0${i}`,
        role: roles[i - 1],
        psychology: `Custom brand swatch ${i} establishing consistent visual equity across all touchpoints.`
      });
    }

    state.isGeneratingExisting = true;
    if (elements.btnGenerateExisting) elements.btnGenerateExisting.disabled = true;
    if (elements.existingSpinner) elements.existingSpinner.classList.remove('hidden');
    if (elements.btnGenerateExistingText) elements.btnGenerateExistingText.textContent = "Analyzing Brand & Crafting Kit...";

    try {
      let brand;
      const rawKey = elements.apiKeyInput ? elements.apiKeyInput.value.trim() : '';
      const hasKey = Boolean(rawKey && rawKey.length > 6);

      if (hasKey || typeof fetch !== 'undefined') {
        try {
          const aiRaw = await generateExistingBrandWithAI(name, industry, desc, colors);
          brand = normalizeBrandKit(aiRaw, name, industry, "Modern discerning clients", "minimalist-luxury");
        } catch (apiErr) {
          console.warn('AI Existing Brand generation failed, falling back to smart procedural synthesis:', apiErr);
          brand = generateProceduralExistingBrand(name, industry, desc, colors);
        }
      } else {
        brand = generateProceduralExistingBrand(name, industry, desc, colors);
      }

      brand.palette = colors;
      brand.colors = colors;
      brand.customLogoUrl = state.uploadedLogoDataUrl || null;
      brand.mode = 'existing';

      state.currentBrand = brand;
      renderBrand(brand);

      if (elements.brandHeroBar) {
        elements.brandHeroBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      showToast(`Growth & Campaign Kit generated for "${name}"! 🚀`, 'success');

    } catch (err) {
      console.error('Error generating existing brand kit:', err);
      showToast('Could not complete generation. Please try again.', 'error');
    } finally {
      state.isGeneratingExisting = false;
      if (elements.btnGenerateExisting) elements.btnGenerateExisting.disabled = false;
      if (elements.existingSpinner) elements.existingSpinner.classList.add('hidden');
      if (elements.btnGenerateExistingText) elements.btnGenerateExistingText.textContent = "Generate Growth & Campaign Kit";
    }
  }

  // =========================================================================
  // 17. Main Generation Controller
  // =========================================================================
  async function handleGenerate() {
    if (state.isGenerating) return;

    const brandName = elements.inputBrandName ? elements.inputBrandName.value.trim() : '';
    if (!brandName) {
      showToast('Please enter a Brand Name', 'warning');
      if (elements.inputBrandName) elements.inputBrandName.focus();
      return;
    }

    let industry = elements.industrySelect ? elements.industrySelect.value : 'Specialty Coffee & Chai Cafe';
    if (industry === 'Other / Custom') {
      industry = (elements.inputCustomNiche && elements.inputCustomNiche.value.trim()) || 'Creative Studio & Lifestyle';
    }

    const audience = (elements.inputAudience && elements.inputAudience.value.trim()) || 'Modern design lovers';
    const vibe = state.selectedVibe;

    setGeneratingState(true);

    try {
      let brandRaw = null;
      const hasHeaderKey = Boolean(elements.apiKeyInput && elements.apiKeyInput.value.trim().length > 6);

      try {
        if (elements.generationSourceHint) {
          elements.generationSourceHint.textContent = hasHeaderKey
            ? "✨ Direct Gemini 3.8 Flash synthesis in progress..."
            : "✨ Synthesizing via Netlify Serverless Proxy...";
        }

        brandRaw = await generateBrandWithAI(brandName, industry, audience, vibe);
        showToast('Complete Brand DNA generated via Gemini AI!', 'success');
      } catch (apiError) {
        console.warn("AI generation unavailable, smoothly engaging Demo Mode:", apiError);
        showToast('Generated in Demo Mode (Smart Procedural Engine)', 'info', 4000);
        brandRaw = generateProceduralBrand(brandName, industry, audience, vibe);
      }

      const brandResult = normalizeBrandKit(brandRaw, brandName, industry, audience, vibe);
      renderBrand(brandResult);

    } catch (err) {
      console.error("Brand generation failed:", err);
      showToast("Generation failed. Please try again.", "warning");
    } finally {
      setGeneratingState(false);
      updateEngineBadge();
    }
  }

  function setGeneratingState(isGenerating) {
    state.isGenerating = isGenerating;
    if (isGenerating) {
      if (elements.btnGenerate) elements.btnGenerate.disabled = true;
      if (elements.generateSpinner) elements.generateSpinner.classList.remove('hidden');
      if (elements.btnGenerateText) elements.btnGenerateText.textContent = "Synthesizing DNA...";
    } else {
      if (elements.btnGenerate) elements.btnGenerate.disabled = false;
      if (elements.generateSpinner) elements.generateSpinner.classList.add('hidden');
      if (elements.btnGenerateText) elements.btnGenerateText.textContent = "Generate Complete Brand";
    }
  }

  // =========================================================================
  // 18. API Key & Engine Badge Handling
  // =========================================================================
  function initApiKey() {
    const savedKey = localStorage.getItem(STORAGE_KEY_API) || '';
    if (savedKey) {
      state.apiKey = savedKey;
      if (elements.apiKeyInput) elements.apiKeyInput.value = savedKey;
      if (elements.btnClearKey) elements.btnClearKey.classList.remove('hidden');
    }
    updateEngineBadge();

    if (elements.apiKeyInput) {
      elements.apiKeyInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        state.apiKey = val;
        if (val) {
          localStorage.setItem(STORAGE_KEY_API, val);
          if (elements.btnClearKey) elements.btnClearKey.classList.remove('hidden');
        } else {
          localStorage.removeItem(STORAGE_KEY_API);
          if (elements.btnClearKey) elements.btnClearKey.classList.add('hidden');
        }
        updateEngineBadge();
      });
    }

    if (elements.btnClearKey) {
      elements.btnClearKey.addEventListener('click', () => {
        if (elements.apiKeyInput) elements.apiKeyInput.value = '';
        state.apiKey = '';
        localStorage.removeItem(STORAGE_KEY_API);
        elements.btnClearKey.classList.add('hidden');
        updateEngineBadge();
        showToast('API Key cleared. Switched to Netlify Serverless / Demo mode.', 'info');
      });
    }

    if (elements.btnToggleKeyVisibility) {
      elements.btnToggleKeyVisibility.addEventListener('click', () => {
        const isPassword = elements.apiKeyInput.type === 'password';
        elements.apiKeyInput.type = isPassword ? 'text' : 'password';
        if (elements.eyeIcon) {
          elements.eyeIcon.innerHTML = isPassword
            ? '<line x1="1" y1="1" x2="23" y2="23"/><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>'
            : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
        }
      });
    }
  }

  function updateEngineBadge() {
    const hasKey = Boolean(elements.apiKeyInput && elements.apiKeyInput.value.trim().length > 6);
    if (!elements.engineStatusBadge) return;

    if (hasKey) {
      elements.engineStatusBadge.className = 'engine-badge mode-ai';
      elements.engineStatusBadge.innerHTML = '<span class="status-dot"></span><span class="status-label">Direct Gemini AI</span>';
      if (elements.generationSourceHint) elements.generationSourceHint.textContent = "✨ Direct Gemini 3.8 Flash Endpoint active";
    } else {
      elements.engineStatusBadge.className = 'engine-badge mode-procedural';
      elements.engineStatusBadge.innerHTML = '<span class="status-dot"></span><span class="status-label">Netlify AI / Demo</span>';
      if (elements.generationSourceHint) elements.generationSourceHint.textContent = "⚡ Auto Proxy /.netlify/functions/gemini (Demo Fallback)";
    }
  }

  // =========================================================================
  // 19. Event Listeners & UI Wiring
  // =========================================================================
  function initEventListeners() {
    if (elements.btnSuggestNames) {
      elements.btnSuggestNames.addEventListener('click', handleSuggestNames);
    }

    if (elements.btnRefreshNames) {
      elements.btnRefreshNames.addEventListener('click', handleSuggestNames);
    }

    if (elements.btnCloseTray) {
      elements.btnCloseTray.addEventListener('click', () => {
        if (elements.nameSuggestionsTray) {
          elements.nameSuggestionsTray.classList.add('hidden');
        }
      });
    }

    if (elements.btnGenerate) {
      elements.btnGenerate.addEventListener('click', handleGenerate);
    }
    if (elements.inputBrandName) {
      elements.inputBrandName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleGenerate();
      });
    }

    if (elements.industrySelect) {
      elements.industrySelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'Other / Custom') {
          elements.customNicheGroup.classList.remove('hidden');
          if (elements.inputCustomNiche) elements.inputCustomNiche.focus();
        } else {
          elements.customNicheGroup.classList.add('hidden');
        }
      });
    }

    elements.vibeCards.forEach(card => {
      card.addEventListener('click', () => {
        elements.vibeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        state.selectedVibe = card.dataset.vibe;
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    if (elements.btnNewBrand) {
      elements.btnNewBrand.addEventListener('click', handleNewBrandClick);
    }

    if (elements.btnSampleBrand) {
      elements.btnSampleBrand.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.sampleDropdown.classList.toggle('hidden');
      });
    }

    document.addEventListener('click', (e) => {
      if (elements.sampleDropdown && !elements.sampleDropdown.contains(e.target) && e.target !== elements.btnSampleBrand) {
        elements.sampleDropdown.classList.add('hidden');
      }
    });

    if (elements.sampleDropdown) {
      elements.sampleDropdown.querySelectorAll('.sample-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const presetKey = btn.dataset.preset;
          const preset = PRESET_BRANDS[presetKey];
          if (preset) {
            if (elements.inputBrandName) elements.inputBrandName.value = preset.name;
            if (elements.industrySelect) {
              elements.industrySelect.value = preset.industry;
              if (!Array.from(elements.industrySelect.options).some(o => o.value === preset.industry)) {
                elements.industrySelect.value = 'Other / Custom';
                elements.customNicheGroup.classList.remove('hidden');
                elements.inputCustomNiche.value = preset.industry;
              } else {
                elements.customNicheGroup.classList.add('hidden');
              }
            }
            if (elements.inputAudience) elements.inputAudience.value = preset.audience;

            state.selectedVibe = preset.vibe;
            elements.vibeCards.forEach(card => {
              const match = card.dataset.vibe === preset.vibe;
              card.classList.toggle('active', match);
              const radio = card.querySelector('input[type="radio"]');
              if (radio) radio.checked = match;
            });

            const slug = sanitizeHandle(preset.name);
            const projects = getProjectsStorage();
            const existingProject = projects[slug];

            renderBrand(
              preset,
              existingProject ? existingProject.calendarProgress : null,
              existingProject ? existingProject.instagramIdeas : null
            );

            elements.sampleDropdown.classList.add('hidden');
            showToast(`Loaded "${preset.name}" archetype`, 'info');
          }
        });
      });
    }

    if (elements.wcagToggleBtns) {
      elements.wcagToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          elements.wcagToggleBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const textColor = btn.dataset.textColor;
          updateWcagAudit(state.auditBgColor, textColor);
          showToast(`Auditing with ${textColor === '#FFFFFF' ? 'White' : 'Charcoal'} text`, 'info', 1500);
        });
      });
    }

    if (elements.btnRewriteVoice) {
      elements.btnRewriteVoice.addEventListener('click', handleVoiceRewrite);
    }
    if (elements.inputVoiceRewrite) {
      elements.inputVoiceRewrite.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleVoiceRewrite();
      });
    }

    elements.voiceChipBtns.forEach(chip => {
      chip.addEventListener('click', () => {
        const sentence = chip.dataset.sentence;
        if (elements.inputVoiceRewrite) {
          elements.inputVoiceRewrite.value = sentence;
          handleVoiceRewrite();
        }
      });
    });

    if (elements.btnCopyRewritten) {
      elements.btnCopyRewritten.addEventListener('click', () => {
        const text = elements.voiceTransformedText ? elements.voiceTransformedText.textContent.trim() : '';
        if (text) copyToClipboard(text, 'Rewritten sentence copied!');
      });
    }

    if (elements.btnIgHeart) {
      elements.btnIgHeart.addEventListener('click', () => {
        state.isLiked = !state.isLiked;
        elements.btnIgHeart.classList.toggle('liked', state.isLiked);
        state.likedCount += state.isLiked ? 1 : -1;
        if (elements.igLikesNumber) elements.igLikesNumber.textContent = `${state.likedCount.toLocaleString()} others`;
        showToast(state.isLiked ? 'Post liked ❤️' : 'Post unliked', 'info', 1500);
      });
    }

    if (elements.btnIgBookmark) {
      elements.btnIgBookmark.addEventListener('click', () => {
        state.isSaved = !state.isSaved;
        elements.btnIgBookmark.classList.toggle('saved', state.isSaved);
        showToast(state.isSaved ? 'Post saved to collection 🔖' : 'Post unsaved', 'info', 1500);
      });
    }

    if (elements.btnCopyCaption) {
      elements.btnCopyCaption.addEventListener('click', () => {
        if (!state.currentBrand) return;
        const soc = state.currentBrand.social || {};
        const fullText = `@${soc.handle || sanitizeHandle(state.currentBrand.name)}\n\n${soc.caption || ''}\n\n${soc.hashtags || ''}`;
        copyToClipboard(fullText, 'Instagram caption & hashtags copied!');
      });
    }

    if (elements.btnCopyBrief) {
      elements.btnCopyBrief.addEventListener('click', () => {
        if (!state.currentBrand) return;
        const b = state.currentBrand;
        const markdown = `
# Brand DNA Kit: ${b.name}
**Archetype:** ${b.vibe.toUpperCase()} | **Sector:** ${b.industry}
**Audience:** ${b.audience}

## Tagline & Voice
- **Tagline:** "${b.tagline}"
- **Tone Adjectives:** ${(b.voiceTone || b.tones).join(' • ')}
- **Manifesto:** ${b.sampleBody}

## Color Palette
${(b.palette || b.colors).map(c => `- **${c.hex}** | ${c.name} (${c.role}): ${c.psychology || ''}`).join('\n')}

## Typography Pairing
- **Headline Font:** ${b.headingFont || b.fonts?.heading}
- **Body Font:** ${b.bodyFont || b.fonts?.body}

## Social Media Copy
- **Handle:** @${b.social?.handle || sanitizeHandle(b.name)}
- **Caption:** ${b.social?.caption || ''}
- **Hashtags:** ${b.social?.hashtags || ''}
`.trim();

        copyToClipboard(markdown, 'Brand brief copied as Markdown!');
      });
    }

    if (elements.btnCopyCode) {
      elements.btnCopyCode.addEventListener('click', () => openDevModal('all'));
    }
    if (elements.btnCloseDevModal) {
      elements.btnCloseDevModal.addEventListener('click', closeDevModal);
    }
    if (elements.devCodeModal) {
      elements.devCodeModal.addEventListener('click', (e) => {
        if (e.target === elements.devCodeModal) closeDevModal();
      });
    }
    elements.modalTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        openDevModal(btn.dataset.tab);
      });
    });
    if (elements.btnCopyModalCode) {
      elements.btnCopyModalCode.addEventListener('click', () => {
        const code = elements.devCodeSnippet.textContent;
        copyToClipboard(code, 'Production code copied to clipboard!');
      });
    }

    if (elements.btnResetCalendar) {
      elements.btnResetCalendar.addEventListener('click', resetLaunchCalendar);
    }

    if (elements.btnGenerateMoreIdeas) {
      elements.btnGenerateMoreIdeas.addEventListener('click', handleGenerateMoreIdeas);
    }

    // Existing Brand Kit Generator & Input bindings
    if (elements.btnGenerateExisting) {
      elements.btnGenerateExisting.addEventListener('click', handleGenerateExistingBrand);
    }
    if (elements.inputExistingName) {
      elements.inputExistingName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleGenerateExistingBrand();
      });
    }

    // Campaign Templates: 6 Copy Template Copy Buttons
    if (elements.btnCopyLaunchCopy) {
      elements.btnCopyLaunchCopy.addEventListener('click', () => {
        const kicker = elements.campaignLaunchKicker ? elements.campaignLaunchKicker.textContent.trim() : '';
        const headline = elements.campaignLaunchHeadline ? elements.campaignLaunchHeadline.textContent.trim() : '';
        const subtext = elements.campaignLaunchSubtext ? elements.campaignLaunchSubtext.textContent.trim() : '';
        const cta = elements.campaignLaunchCta ? elements.campaignLaunchCta.textContent.trim() : '';
        const fullText = `${kicker}\n\n${headline}\n\n${subtext}\n\nCTA: ${cta}`;
        copyToClipboard(fullText, 'Launch Campaign copy copied to clipboard!');
      });
    }

    if (elements.btnCopyDropCopy) {
      elements.btnCopyDropCopy.addEventListener('click', () => {
        const badge = elements.campaignDropBadge ? elements.campaignDropBadge.textContent.trim() : '';
        const offer = elements.campaignDropOffer ? elements.campaignDropOffer.textContent.trim() : '';
        const hook = elements.campaignDropHook ? elements.campaignDropHook.textContent.trim() : '';
        const code = elements.campaignDropCode ? elements.campaignDropCode.textContent.trim() : '';
        const fullText = `${badge}\n\n${offer}\n\n${hook}\n\nPromo Code: ${code}`;
        copyToClipboard(fullText, 'Flash Drop copy copied to clipboard!');
      });
    }

    if (elements.btnCopyTestCopy) {
      elements.btnCopyTestCopy.addEventListener('click', () => {
        const rating = elements.campaignTestRating ? elements.campaignTestRating.textContent.trim() : '★★★★★';
        const quote = elements.campaignTestQuote ? elements.campaignTestQuote.textContent.trim() : '';
        const author = elements.campaignTestAuthor ? elements.campaignTestAuthor.textContent.trim() : '';
        const title = elements.campaignTestTitle ? elements.campaignTestTitle.textContent.trim() : '';
        const fullText = `${rating}\n${quote}\n— ${author}, ${title}`;
        copyToClipboard(fullText, 'Editorial Testimonial quote copied!');
      });
    }

    if (elements.btnCopyFounderCopy) {
      elements.btnCopyFounderCopy.addEventListener('click', () => {
        const badge = elements.campaignFounderBadge ? elements.campaignFounderBadge.textContent.trim() : '';
        const chapter = elements.campaignFounderChapter ? elements.campaignFounderChapter.textContent.trim() : '';
        const headline = elements.campaignFounderHeadline ? elements.campaignFounderHeadline.textContent.trim() : '';
        const subtext = elements.campaignFounderSubtext ? elements.campaignFounderSubtext.textContent.trim() : '';
        const author = elements.campaignFounderAuthor ? elements.campaignFounderAuthor.textContent.trim() : '';
        const fullText = `${badge} | ${chapter}\n\n${headline}\n\n${subtext}\n\n${author}`;
        copyToClipboard(fullText, 'Founder Story copy copied to clipboard!');
      });
    }

    if (elements.btnCopyInfoCopy) {
      elements.btnCopyInfoCopy.addEventListener('click', () => {
        const badge = elements.campaignInfoBadge ? elements.campaignInfoBadge.textContent.trim() : '';
        const headline = elements.campaignInfoHeadline ? elements.campaignInfoHeadline.textContent.trim() : '';
        const p1 = elements.campaignInfoPoint1 ? elements.campaignInfoPoint1.textContent.trim() : '';
        const p2 = elements.campaignInfoPoint2 ? elements.campaignInfoPoint2.textContent.trim() : '';
        const p3 = elements.campaignInfoPoint3 ? elements.campaignInfoPoint3.textContent.trim() : '';
        const hint = elements.campaignInfoFooterText ? elements.campaignInfoFooterText.textContent.trim() : '';
        const fullText = `${badge}\n\n${headline}\n\n01 / ${p1}\n02 / ${p2}\n03 / ${p3}\n\n${hint}`;
        copyToClipboard(fullText, 'Infographic copy copied to clipboard!');
      });
    }

    if (elements.btnCopyCountdownCopy) {
      elements.btnCopyCountdownCopy.addEventListener('click', () => {
        const badge = elements.campaignCountdownBadge ? elements.campaignCountdownBadge.textContent.trim() : '';
        const timer = elements.campaignCountdownTimer ? elements.campaignCountdownTimer.textContent.trim() : '';
        const headline = elements.campaignCountdownHeadline ? elements.campaignCountdownHeadline.textContent.trim() : '';
        const subtext = elements.campaignCountdownSubtext ? elements.campaignCountdownSubtext.textContent.trim() : '';
        const cta = elements.campaignCountdownCta ? elements.campaignCountdownCta.textContent.trim() : '';
        const fullText = `${badge} [${timer}]\n\n${headline}\n\n${subtext}\n\nCTA: ${cta}`;
        copyToClipboard(fullText, 'Countdown Giveaway copy copied to clipboard!');
      });
    }

    // Campaign Templates: 6 High-Res PNG Download Buttons
    if (elements.btnDownloadLaunchPng) {
      elements.btnDownloadLaunchPng.addEventListener('click', () => downloadCampaignTemplateAsPNG(1));
    }
    if (elements.btnDownloadDropPng) {
      elements.btnDownloadDropPng.addEventListener('click', () => downloadCampaignTemplateAsPNG(2));
    }
    if (elements.btnDownloadTestPng) {
      elements.btnDownloadTestPng.addEventListener('click', () => downloadCampaignTemplateAsPNG(3));
    }
    if (elements.btnDownloadFounderPng) {
      elements.btnDownloadFounderPng.addEventListener('click', () => downloadCampaignTemplateAsPNG(4));
    }
    if (elements.btnDownloadInfoPng) {
      elements.btnDownloadInfoPng.addEventListener('click', () => downloadCampaignTemplateAsPNG(5));
    }
    if (elements.btnDownloadCountdownPng) {
      elements.btnDownloadCountdownPng.addEventListener('click', () => downloadCampaignTemplateAsPNG(6));
    }

    // Tagline Vault: 8 Tone Angle Copy Buttons
    const copyTagline = (el, label) => {
      const text = el ? el.textContent.trim() : '';
      if (text) copyToClipboard(text, `${label} Tagline copied!`);
    };

    if (elements.btnCopyTaglineBold) elements.btnCopyTaglineBold.addEventListener('click', () => copyTagline(elements.taglineTextBold, 'Bold & Punchy'));
    if (elements.btnCopyTaglineMinimal) elements.btnCopyTaglineMinimal.addEventListener('click', () => copyTagline(elements.taglineTextMinimal, 'Minimalist Luxury'));
    if (elements.btnCopyTaglineEmotional) elements.btnCopyTaglineEmotional.addEventListener('click', () => copyTagline(elements.taglineTextEmotional, 'Emotional & Warm'));
    if (elements.btnCopyTaglinePlayful) elements.btnCopyTaglinePlayful.addEventListener('click', () => copyTagline(elements.taglineTextPlayful, 'Playful & Gen-Z'));
    if (elements.btnCopyTaglineBenefit) elements.btnCopyTaglineBenefit.addEventListener('click', () => copyTagline(elements.taglineTextBenefit, 'Benefit-Driven'));
    if (elements.btnCopyTaglineRebel) elements.btnCopyTaglineRebel.addEventListener('click', () => copyTagline(elements.taglineTextRebel, 'Rebel / Disruptor'));
    if (elements.btnCopyTaglineHeritage) elements.btnCopyTaglineHeritage.addEventListener('click', () => copyTagline(elements.taglineTextHeritage, 'Heritage & Trust'));
    if (elements.btnCopyTaglinePoetic) elements.btnCopyTaglinePoetic.addEventListener('click', () => copyTagline(elements.taglineTextPoetic, 'Poetic / Rhythmic'));

    // Tagline Vault: + Generate 4 More Button
    if (elements.btnGenerateMoreTaglines) {
      elements.btnGenerateMoreTaglines.addEventListener('click', handleGenerateMoreTaglines);
    }
  }

  // =========================================================================
  // 20. Initial Bootstrapping
  // =========================================================================
  function init() {
    initApiKey();
    initModeToggle();
    initExistingColorPickers();
    initLogoUpload();
    initEventListeners();
    renderBrandHistorySidebar();

    const activeSlug = localStorage.getItem(STORAGE_KEY_ACTIVE_SLUG);
    const projects = getProjectsStorage();

    if (activeSlug && projects[activeSlug]) {
      loadSavedProject(activeSlug);
    } else {
      renderBrand(PRESET_BRANDS.komorebi);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
