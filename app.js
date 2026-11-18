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
    isCheckingTrademark: false,
    isSuggestingNames: false,
    suggestedNames: [],
    lastTrademarkCheck: null,
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
    btnCloseTray: document.getElementById('btn-close-tray'),
    suggestedNamesList: document.getElementById('suggested-names-list'),
    btnCheckTrademark: document.getElementById('btn-check-trademark'),
    trademarkBtnText: document.getElementById('trademark-btn-text'),
    trademarkSpinner: document.getElementById('trademark-spinner'),
    trademarkStatusCard: document.getElementById('trademark-status-card'),
    tmClassBadge: document.getElementById('tm-class-badge'),
    tmClassDesc: document.getElementById('tm-class-desc'),
    tmStatusPill: document.getElementById('tm-status-pill'),
    tmStatusText: document.getElementById('tm-status-text'),
    tmConflictsWrap: document.getElementById('tm-conflicts-wrap'),
    tmConflictsList: document.getElementById('tm-conflicts-list'),
    tmClearNote: document.getElementById('tm-clear-note'),
    tmAlternativesList: document.getElementById('tm-alternatives-list'),
    tmVerifyLink: document.getElementById('tm-verify-link'),
    tmVerifyLinkText: document.getElementById('tm-verify-link-text'),
    tmQuickCompanyWrap: document.getElementById('tm-quickcompany-wrap'),
    tmQcCountBadge: document.getElementById('tm-qc-count-badge'),
    btnFetchQuickcompany: document.getElementById('btn-fetch-quickcompany'),
    qcFetchIcon: document.getElementById('qc-fetch-icon'),
    qcFetchSpinner: document.getElementById('qc-fetch-spinner'),
    qcFetchText: document.getElementById('qc-fetch-text'),
    tmQcLoading: document.getElementById('tm-qc-loading'),
    tmQcResultsList: document.getElementById('tm-qc-results-list'),
    tmQcEmpty: document.getElementById('tm-qc-empty'),
    tmQcEmptyText: document.getElementById('tm-qc-empty-text'),
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
    campaignLaunchLogo: document.getElementById('campaign-launch-logo'),
    campaignLaunchKicker: document.getElementById('campaign-launch-kicker'),
    campaignLaunchHeadline: document.getElementById('campaign-launch-headline'),
    campaignLaunchSubtext: document.getElementById('campaign-launch-subtext'),
    campaignLaunchCta: document.getElementById('campaign-launch-cta'),
    btnCopyLaunchCopy: document.getElementById('btn-copy-launch-copy'),

    campaignDropLogo: document.getElementById('campaign-drop-logo'),
    campaignDropBadge: document.getElementById('campaign-drop-badge'),
    campaignDropOffer: document.getElementById('campaign-drop-offer'),
    campaignDropHook: document.getElementById('campaign-drop-hook'),
    campaignDropCode: document.getElementById('campaign-drop-code'),
    btnCopyDropCopy: document.getElementById('btn-copy-drop-copy'),

    campaignTestLogo: document.getElementById('campaign-test-logo'),
    campaignTestRating: document.getElementById('campaign-test-rating'),
    campaignTestQuote: document.getElementById('campaign-test-quote'),
    campaignTestAuthor: document.getElementById('campaign-test-author'),
    campaignTestTitle: document.getElementById('campaign-test-title'),
    btnCopyTestCopy: document.getElementById('btn-copy-test-copy'),

    taglineTextBold: document.getElementById('tagline-text-bold'),
    btnCopyTaglineBold: document.getElementById('btn-copy-tagline-bold'),
    taglineTextMinimal: document.getElementById('tagline-text-minimal'),
    btnCopyTaglineMinimal: document.getElementById('btn-copy-tagline-minimal'),
    taglineTextEmotional: document.getElementById('tagline-text-emotional'),
    btnCopyTaglineEmotional: document.getElementById('btn-copy-tagline-emotional'),
    taglineTextPlayful: document.getElementById('tagline-text-playful'),
    btnCopyTaglinePlayful: document.getElementById('btn-copy-tagline-playful')
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
  // 9b. Trademark Conflict Checker & NICE Classification Engine
  // =========================================================================
  const NICE_CLASSES_CLIENT = {
    cosmetics: { classNum: 3, label: "Class 3", desc: "Cosmetics, soaps, perfumery, skincare, essential oils" },
    pharma: { classNum: 5, label: "Class 5", desc: "Pharmaceuticals, medical preparations, dietary supplements & adaptogens" },
    tech: { classNum: 9, label: "Class 9", desc: "Software, computers, mobile apps, electronics, digital equipment & AI models" },
    jewelry: { classNum: 14, label: "Class 14", desc: "Precious metals, jewelry, timepieces & horological instruments" },
    stationery: { classNum: 16, label: "Class 16", desc: "Paper, printed matter, stationery, packaging & books" },
    leather: { classNum: 18, label: "Class 18", desc: "Leather goods, luggage, handbags, wallets & travel gear" },
    furniture: { classNum: 20, label: "Class 20", desc: "Furniture, mirrors, home decor & artisanal wooden artifacts" },
    kitchenware: { classNum: 21, label: "Class 21", desc: "Household or kitchen utensils, glassware, ceramics & pottery" },
    textiles: { classNum: 24, label: "Class 24", desc: "Textiles, fabrics, bed covers & household linens" },
    apparel: { classNum: 25, label: "Class 25", desc: "Clothing, footwear, headwear, apparel & streetwear" },
    games: { classNum: 28, label: "Class 28", desc: "Games, toys, video ga/*  */me apparatus & sporting equipment" },
    foods: { classNum: 29, label: "Class 29", desc: "Meat, preserved fruits, vegetables, dairy & edible oils" },
    staples: { classNum: 30, label: "Class 30", desc: "Coffee, tea, chai, cocoa, spices, bakery & confectionery" },
    beverages: { classNum: 32, label: "Class 32", desc: "Beers, mineral waters, juices & functional non-alcoholic beverages" },
    spirits: { classNum: 33, label: "Class 33", desc: "Alcoholic beverages, craft spirits, fermentation & wines" },
    retail: { classNum: 35, label: "Class 35", desc: "Advertising, business management, marketing & retail/e-commerce services" },
    fintech: { classNum: 36, label: "Class 36", desc: "Financial services, banking, insurance, fintech & crypto" },
    telecom: { classNum: 38, label: "Class 38", desc: "Telecommunications, messaging services & digital streaming" },
    education: { classNum: 41, label: "Class 41", desc: "Education, training, entertainment, media production & podcasts" },
    saas: { classNum: 42, label: "Class 42", desc: "SaaS, software development, cloud computing, architecture & tech services" },
    hospitality: { classNum: 43, label: "Class 43", desc: "Services for providing food and drink (cafes, restaurants) & hotels" },
    wellness: { classNum: 44, label: "Class 44", desc: "Medical services, wellness spas, beauty salons & therapeutic care" },
    legal: { classNum: 45, label: "Class 45", desc: "Legal services, brand protection & personal social services" }
  };

  function getNiceClassForNiche(niche = '') {
    const s = (niche || '').toLowerCase();
    if (s.includes('coffee') || s.includes('chai') || s.includes('tea') || s.includes('bakery') || s.includes('kitchen') || s.includes('cafe')) {
      return NICE_CLASSES_CLIENT.staples; // Class 30
    }
    if (s.includes('spirit') || s.includes('wine') || s.includes('ferment') || s.includes('alcohol') || s.includes('brew')) {
      return NICE_CLASSES_CLIENT.spirits; // Class 33
    }
    if (s.includes('beverage') || s.includes('tonic') || s.includes('juice') || s.includes('water') || s.includes('kombucha')) {
      return NICE_CLASSES_CLIENT.beverages; // Class 32
    }
    if (s.includes('clothing') || s.includes('apparel') || s.includes('streetwear') || s.includes('fashion') || s.includes('wear')) {
      return NICE_CLASSES_CLIENT.apparel; // Class 25
    }
    if (s.includes('jewelry') || s.includes('watch') || s.includes('gem') || s.includes('gold') || s.includes('silver')) {
      return NICE_CLASSES_CLIENT.jewelry; // Class 14
    }
    if (s.includes('leather') || s.includes('bag') || s.includes('luggage') || s.includes('travel gear')) {
      return NICE_CLASSES_CLIENT.leather; // Class 18
    }
    if (s.includes('skincare') || s.includes('cosmetic') || s.includes('beauty') || s.includes('perfume') || s.includes('soap')) {
      return NICE_CLASSES_CLIENT.cosmetics; // Class 3
    }
    if (s.includes('adaptogen') || s.includes('wellness') || s.includes('pharma') || s.includes('supplement')) {
      return NICE_CLASSES_CLIENT.pharma; // Class 5
    }
    if (s.includes('saas') || s.includes('ai') || s.includes('automation') || s.includes('developer') || s.includes('cloud') || s.includes('cyber')) {
      return NICE_CLASSES_CLIENT.saas; // Class 42
    }
    if (s.includes('fintech') || s.includes('crypto') || s.includes('bank') || s.includes('invest') || s.includes('finance')) {
      return NICE_CLASSES_CLIENT.fintech; // Class 36
    }
    if (s.includes('gaming') || s.includes('esport') || s.includes('game') || s.includes('toy')) {
      return NICE_CLASSES_CLIENT.games; // Class 28
    }
    if (s.includes('podcast') || s.includes('media') || s.includes('edtech') || s.includes('learning') || s.includes('entertainment') || s.includes('creator')) {
      return NICE_CLASSES_CLIENT.education; // Class 41
    }
    if (s.includes('furniture') || s.includes('home') || s.includes('decor') || s.includes('interior')) {
      return NICE_CLASSES_CLIENT.furniture; // Class 20
    }
    if (s.includes('hospitality') || s.includes('hotel') || s.includes('retreat') || s.includes('stay') || s.includes('travel')) {
      return NICE_CLASSES_CLIENT.hospitality; // Class 43
    }
    if (s.includes('agency') || s.includes('marketing') || s.includes('retail') || s.includes('commerce') || s.includes('store') || s.includes('pet')) {
      return NICE_CLASSES_CLIENT.retail; // Class 35
    }
    return NICE_CLASSES_CLIENT.tech;
  }

  // 100+ Verified Major Indian & Global Registered Trademarks Database
  const MAJOR_TRADEMARKS_DATABASE = [
    { key: 'zomato', name: 'Zomato', owner: 'Zomato Limited (formerly Info Edge / Deepinder Goyal)', classNums: [30, 35, 39, 43], aliases: ['zomato', 'zomaato', 'zomato cafe', 'zomato delivery', 'blinkit zomato'], reason: 'Identical and phonetic collision with registered Indian trademark Zomato owned by Zomato Limited in food delivery, restaurant services (Class 30, 43) and advertising (Class 35).' },
    { key: 'swiggy', name: 'Swiggy', owner: 'Bundl Technologies Private Limited', classNums: [30, 35, 39, 43], aliases: ['swiggy', 'swigy', 'instamart', 'swiggy instamart', 'swiggy delivery', 'swiggy dineout'], reason: 'Direct collision with famous registered Indian trademark Swiggy owned by Bundl Technologies Pvt Ltd in food logistics and online commerce.' },
    { key: 'chaayos', name: 'Chaayos', owner: 'Sunshine Teahouse Private Limited', classNums: [30, 43], aliases: ['chaayos', 'chayos', 'chaayos cafe'], reason: 'Direct identical collision with Chaayos owned by Sunshine Teahouse Pvt Ltd, registered in Class 30 (tea/chai) and Class 43 (cafe services).' },
    { key: 'chaipoint', name: 'Chai Point', owner: 'Mountain Trail Foods Private Limited', classNums: [30, 43], aliases: ['chai point', 'chaipoint'], reason: 'Direct collision with registered Indian beverage chain Chai Point owned by Mountain Trail Foods Pvt Ltd in Class 30 and 43.' },
    { key: 'bluetokai', name: 'Blue Tokai Coffee Roasters', owner: 'Rollatainers Limited / Blue Tokai Coffee Roasters Pvt Ltd', classNums: [30, 43], aliases: ['blue tokai', 'bluetokai', 'blue tokai coffee'], reason: 'Confusingly and deceptively similar to specialty coffee leader Blue Tokai Coffee Roasters in Class 30 and 43.' },
    { key: 'starbucks', name: 'Starbucks Coffee', owner: 'Starbucks Corporation', classNums: [30, 35, 43], aliases: ['starbucks', 'starbuck', 'starbucks cafe', 'starbucks reserve'], reason: 'Direct identical collision with globally protected house mark Starbucks owned by Starbucks Corporation in Class 30 & 43.' },
    { key: 'thirdwavecoffee', name: 'Third Wave Coffee', owner: 'Heisetasse Beverages Private Limited', classNums: [30, 43], aliases: ['third wave coffee', 'third wave', 'thirdwave'], reason: 'Direct collision with Indian specialty coffee brand Third Wave Coffee owned by Heisetasse Beverages Pvt Ltd.' },
    { key: 'cafecoffeeday', name: 'Café Coffee Day (CCD)', owner: 'Coffee Day Global Limited', classNums: [30, 43], aliases: ['cafe coffee day', 'cafecoffeeday', 'coffee day', 'ccd'], reason: 'Direct collision with pioneering Indian cafe chain mark Café Coffee Day owned by Coffee Day Global Limited.' },
    { key: 'costacoffee', name: 'Costa Coffee', owner: 'Costa Limited (The Coca-Cola Company)', classNums: [30, 43], aliases: ['costa coffee', 'costa'], reason: 'Direct collision with Costa Coffee registered globally and in India in Class 30 and 43.' },
    { key: 'dunkin', name: 'Dunkin\' Donuts', owner: 'DD IP Holder LLC', classNums: [30, 43], aliases: ['dunkin', 'dunkin donuts'], reason: 'Direct collision with registered global mark Dunkin\' in Class 30 & 43.' },
    { key: 'mcdonalds', name: 'McDonald\'s', owner: 'McDonald\'s Corporation', classNums: [29, 30, 43], aliases: ['mcdonalds', 'mcdonald', 'mcd'], reason: 'Famous global mark McDonald\'s enjoying well-known trademark status under Section 11(6) of Trade Marks Act.' },
    { key: 'burgerking', name: 'Burger King', owner: 'Burger King Company LLC', classNums: [29, 30, 43], aliases: ['burger king', 'burgerking', 'bk'], reason: 'Direct collision with registered restaurant brand Burger King in Class 43 & 30.' },
    { key: 'dominos', name: 'Domino\'s Pizza', owner: 'Domino\'s Pizza IP Holder LLC (Jubilant FoodWorks)', classNums: [30, 43], aliases: ['dominos', 'domino\'s', 'domino pizza'], reason: 'Direct collision with world-renowned pizza mark Domino\'s.' },
    { key: 'pizzahut', name: 'Pizza Hut', owner: 'Pizza Hut International, LLC (Yum! Brands)', classNums: [30, 43], aliases: ['pizza hut', 'pizzahut'], reason: 'Direct collision with Yum! Brands registered mark Pizza Hut in Class 30 & 43.' },
    { key: 'haldirams', name: 'Haldiram\'s', owner: 'Haldiram India Private Limited / Haldiram Foods International Pvt Ltd', classNums: [29, 30, 43], aliases: ['haldiram', 'haldirams', 'haldiram\'s'], reason: 'Famous well-known Indian mark Haldiram\'s in snacks, sweets, and quick service restaurants.' },
    { key: 'bikanervala', name: 'Bikanervala / Bikano', owner: 'Bikanervala Foods Private Limited', classNums: [29, 30, 43], aliases: ['bikanervala', 'bikano'], reason: 'Direct collision with registered traditional Indian foods mark Bikanervala / Bikano.' },
    { key: 'theobroma', name: 'Theobroma', owner: 'Theobroma Foods Private Limited', classNums: [30, 43], aliases: ['theobroma', 'theobroma bakery', 'theo'], reason: 'Direct collision with iconic Indian artisanal patisserie brand Theobroma registered in Class 30 & 43.' },
    { key: 'bakingo', name: 'Bakingo', owner: 'FA Crafts Private Limited', classNums: [30, 35, 43], aliases: ['bakingo', 'bakingo cakes'], reason: 'Direct collision with registered cloud bakery brand Bakingo in Class 30 and 43.' },
    { key: 'rebelfoods', name: 'Rebel Foods / Faasos / Behrouz', owner: 'Rebel Foods Private Limited', classNums: [29, 30, 43], aliases: ['rebel foods', 'faasos', 'behrouz biryani', 'ovenstory'], reason: 'Direct conflict with India’s largest cloud kitchen company Rebel Foods.' },
    { key: 'curefoods', name: 'Curefoods / EatFit', owner: 'Curefoods India Private Limited', classNums: [29, 30, 43], aliases: ['curefoods', 'eatfit', 'eat fit'], reason: 'Direct collision with cloud kitchen and nutrition brand Curefoods / EatFit.' },
    { key: 'zepto', name: 'Zepto', owner: 'KiranaKart Technologies Private Limited', classNums: [35, 39, 42], aliases: ['zepto', 'zepto delivery', 'zepto cafe'], reason: 'Direct collision with quick-commerce leader Zepto owned by KiranaKart Technologies Pvt Ltd in Class 35 & 39.' },
    { key: 'blinkit', name: 'Blinkit', owner: 'Blink Commerce Private Limited (Zomato Ltd)', classNums: [35, 39, 42], aliases: ['blinkit', 'grofers', 'blink commerce'], reason: 'Direct identical collision with quick-commerce mark Blinkit owned by Blink Commerce Pvt Ltd.' },
    { key: 'flipkart', name: 'Flipkart', owner: 'Flipkart Internet Private Limited (Walmart)', classNums: [9, 35, 38, 42], aliases: ['flipkart', 'flipkart internet'], reason: 'Direct collision with leading Indian e-commerce marketplace Flipkart in Class 35 & 9.' },
    { key: 'amazon', name: 'Amazon', owner: 'Amazon Technologies, Inc.', classNums: [9, 35, 38, 42], aliases: ['amazon', 'amazon india', 'aws', 'amazon prime'], reason: 'Famous global mark Amazon enjoying broad multi-class protection under Sec 29(4) Indian Trade Marks Act.' },
    { key: 'meesho', name: 'Meesho', owner: 'Fashnear Technologies Private Limited', classNums: [35, 38, 42], aliases: ['meesho', 'meesho app'], reason: 'Direct collision with registered social commerce platform Meesho.' },
    { key: 'bigbasket', name: 'BigBasket', owner: 'Supermarket Grocery Supplies Private Limited (Tata)', classNums: [29, 30, 31, 35, 39], aliases: ['bigbasket', 'big basket', 'bb daily'], reason: 'Direct collision with Tata-owned online grocery pioneer BigBasket in Class 35.' },
    { key: 'jiomart', name: 'JioMart', owner: 'Reliance Retail Limited', classNums: [35, 39, 42], aliases: ['jiomart', 'jio mart', 'reliance jiomart'], reason: 'Direct collision with Reliance house brand JioMart in Class 35.' },
    { key: 'myntra', name: 'Myntra', owner: 'Myntra Designs Private Limited (Flipkart/Walmart)', classNums: [25, 35, 42], aliases: ['myntra', 'myntra fashion'], reason: 'Direct collision with premier Indian fashion platform Myntra in Class 25 & 35.' },
    { key: 'ajio', name: 'AJIO', owner: 'Reliance Retail Limited', classNums: [25, 35], aliases: ['ajio', 'ajio luxe', 'reliance ajio'], reason: 'Direct collision with Reliance fashion marketplace AJIO in Class 25 and 35.' },
    { key: 'nykaa', name: 'Nykaa', owner: 'FSN E-Commerce Ventures Limited', classNums: [3, 25, 35, 44], aliases: ['nykaa', 'nykaa cosmetics', 'nykaa fashion', 'nykaa man'], reason: 'Direct collision with registered beauty and lifestyle giant Nykaa (FSN E-Commerce Ventures Ltd).' },
    { key: 'mamaearth', name: 'Mamaearth', owner: 'Honasa Consumer Limited', classNums: [3, 5, 35], aliases: ['mamaearth', 'mama earth', 'honasa'], reason: 'Direct identical collision with listed D2C beauty leader Mamaearth owned by Honasa Consumer Limited.' },
    { key: 'sugarcosmetics', name: 'Sugar Cosmetics', owner: 'Vellvette Lifestyle Private Limited', classNums: [3, 35], aliases: ['sugar cosmetics', 'sugar', 'trysugar'], reason: 'Direct collision with leading Indian cosmetics brand Sugar registered in Class 3 by Vellvette Lifestyle Pvt Ltd.' },
    { key: 'boat', name: 'boAt Lifestyle', owner: 'Imagine Marketing Limited', classNums: [9, 35], aliases: ['boat', 'boat lifestyle', 'boataudio', 'boat nirvana'], reason: 'Direct phonetic and conceptual collision with India’s #1 audio wearables trademark boAt (Imagine Marketing Ltd).' },
    { key: 'noise', name: 'Noise', owner: 'Nexxbase Marketing Private Limited', classNums: [9, 35], aliases: ['noise', 'gonoise', 'noisefit', 'colorfit'], reason: 'Direct collision with registered smart wearables brand Noise owned by Nexxbase Marketing Pvt Ltd.' },
    { key: 'boult', name: 'Boult Audio', owner: 'Excellence Technologies Private Limited', classNums: [9, 35], aliases: ['boult', 'boult audio', 'boultaudio'], reason: 'Direct collision with registered audio wearables brand Boult.' },
    { key: 'fireboltt', name: 'Fire-Boltt', owner: 'Savex Technologies Private Limited', classNums: [9, 35], aliases: ['fire boltt', 'fireboltt', 'boltt'], reason: 'Direct collision with Indian smartwatch brand Fire-Boltt.' },
    { key: 'plumgoodness', name: 'Plum Goodness', owner: 'Pureplay Skin Sciences (India) Private Limited', classNums: [3, 35], aliases: ['plum', 'plum goodness', 'pureplay'], reason: 'Direct collision with clean beauty brand Plum Goodness in Class 3.' },
    { key: 'wowskinscience', name: 'WOW Skin Science', owner: 'Fit & Glow Healthcare Private Limited / Body Cupid Pvt Ltd', classNums: [3, 5], aliases: ['wow skin science', 'wow skin', 'buywow'], reason: 'Direct collision with D2C personal care brand WOW Skin Science.' },
    { key: 'minimalist', name: 'Minimalist (Be Minimalist)', owner: 'Uprising Science Private Limited', classNums: [3, 5], aliases: ['minimalist', 'be minimalist', 'beminimalist'], reason: 'Direct collision with science-backed skincare brand Minimalist in Class 3.' },
    { key: 'dotandkey', name: 'Dot & Key', owner: 'Dot & Key Wellness Private Limited (Nykaa)', classNums: [3, 35], aliases: ['dot and key', 'dot & key', 'dotandkey'], reason: 'Direct collision with registered skincare brand Dot & Key in Class 3.' },
    { key: 'mcaffeine', name: 'mCaffeine', owner: 'PEP Technologies Private Limited', classNums: [3, 35], aliases: ['mcaffeine', 'm caffeine'], reason: 'Direct collision with caffeinated personal care trademark mCaffeine in Class 3.' },
    { key: 'foxtale', name: 'Foxtale', owner: 'Foxtale Consumer Private Limited', classNums: [3, 35], aliases: ['foxtale', 'foxtale skin'], reason: 'Direct collision with trending skincare brand Foxtale in Class 3.' },
    { key: 'forestessentials', name: 'Forest Essentials', owner: 'Mountain Valley Springs (India) Private Limited', classNums: [3, 35, 44], aliases: ['forest essentials', 'forestessentials'], reason: 'Direct collision with luxury Ayurvedic cosmetics house Forest Essentials in Class 3.' },
    { key: 'kamaayurveda', name: 'Kama Ayurveda', owner: 'Kama Ayurveda Private Limited (Puig Group)', classNums: [3, 35, 44], aliases: ['kama ayurveda', 'kamaayurveda'], reason: 'Direct collision with luxury Ayurvedic wellness brand Kama Ayurveda in Class 3.' },
    { key: 'loreal', name: 'L\'Oréal', owner: 'L\'Oréal S.A.', classNums: [3, 35, 44], aliases: ['loreal', 'l\'oreal', 'l oreal'], reason: 'Famous global beauty mark L\'Oréal with well-known status across multiple classes.' },
    { key: 'nivea', name: 'Nivea', owner: 'Beiersdorf AG', classNums: [3, 5], aliases: ['nivea', 'beiersdorf'], reason: 'Famous global skincare mark Nivea registered in Class 3.' },
    { key: 'lakme', name: 'Lakmé', owner: 'Hindustan Unilever Limited', classNums: [3, 35, 44], aliases: ['lakme', 'lakmé', 'lakme salon'], reason: 'Famous Indian beauty house mark Lakmé owned by HUL.' },
    { key: 'dermaco', name: 'The Derma Co.', owner: 'Honasa Consumer Limited', classNums: [3, 5], aliases: ['the derma co', 'derma co', 'dermaco'], reason: 'Direct collision with clinical skincare brand The Derma Co. (Honasa).' },
    { key: 'snitch', name: 'Snitch', owner: 'Snitch Apparels Private Limited', classNums: [25, 35], aliases: ['snitch', 'snitch apparel', 'snitch clothing'], reason: 'Direct collision with viral D2C menswear and streetwear brand Snitch registered in Class 25 and 35.' },
    { key: 'bewakoof', name: 'Bewakoof', owner: 'Aditya Birla Digital Fashion Ventures / Pratyaksha Processors', classNums: [25, 35], aliases: ['bewakoof', 'bewakoof.com', 'bewakoof brands'], reason: 'Direct collision with registered Indian apparel brand Bewakoof in Class 25.' },
    { key: 'thesouledstore', name: 'The Souled Store', owner: 'The Souled Store Private Limited', classNums: [25, 35], aliases: ['the souled store', 'souled store', 'souledstore'], reason: 'Direct collision with pop-culture merchandise and apparel brand The Souled Store in Class 25.' },
    { key: 'fabindia', name: 'Fabindia', owner: 'Fabindia Overseas Private Limited', classNums: [24, 25, 30, 35], aliases: ['fabindia', 'fab india'], reason: 'Direct collision with iconic Indian craft and retail brand Fabindia in Class 25 & 35.' },
    { key: 'manyavar', name: 'Manyavar / Mohey', owner: 'Vedant Fashions Limited', classNums: [25, 35], aliases: ['manyavar', 'mohey', 'vedant fashions'], reason: 'Direct collision with India’s leading celebration wear brand Manyavar in Class 25.' },
    { key: 'raymond', name: 'Raymond', owner: 'Raymond Limited', classNums: [24, 25, 35], aliases: ['raymond', 'the complete man', 'raymonds'], reason: 'Famous Indian suiting and apparel mark Raymond registered in Class 24 & 25.' },
    { key: 'allensolly', name: 'Allen Solly', owner: 'Aditya Birla Fashion and Retail Limited (ABFRL)', classNums: [25, 35], aliases: ['allen solly', 'allensolly'], reason: 'Direct collision with ABFRL registered apparel trademark Allen Solly.' },
    { key: 'peterengland', name: 'Peter England', owner: 'Aditya Birla Fashion and Retail Limited (ABFRL)', classNums: [25, 35], aliases: ['peter england', 'peterengland'], reason: 'Direct collision with ABFRL registered menswear trademark Peter England in Class 25.' },
    { key: 'louisphilippe', name: 'Louis Philippe', owner: 'Aditya Birla Fashion and Retail Limited (ABFRL)', classNums: [25, 35], aliases: ['louis philippe', 'louisphilippe'], reason: 'Direct collision with premium menswear mark Louis Philippe in Class 25.' },
    { key: 'vanheusen', name: 'Van Heusen', owner: 'Aditya Birla Fashion and Retail Limited / PVH Corp.', classNums: [25, 35], aliases: ['van heusen', 'vanheusen'], reason: 'Direct collision with formalwear trademark Van Heusen in Class 25.' },
    { key: 'flyingmachine', name: 'Flying Machine', owner: 'Arvind Fashions Limited', classNums: [25, 35], aliases: ['flying machine', 'flyingmachine'], reason: 'Direct collision with Arvind Fashions registered denim brand Flying Machine.' },
    { key: 'zara', name: 'Zara', owner: 'Industria de Diseño Textil, S.A. (Inditex)', classNums: [25, 35], aliases: ['zara', 'zara man', 'zara home'], reason: 'Famous global fast-fashion mark Zara (Inditex) heavily defended across courts in India.' },
    { key: 'hm', name: 'H&M', owner: 'H & M Hennes & Mauritz AB', classNums: [25, 35], aliases: ['h&m', 'hm', 'hennes mauritz'], reason: 'Famous global fashion mark H&M in Class 25 and 35.' },
    { key: 'nike', name: 'Nike', owner: 'Nike, Inc.', classNums: [25, 28, 35], aliases: ['nike', 'nike air', 'jordan', 'just do it'], reason: 'Famous global trademark Nike enjoying cross-class statutory protection under Sec 29(4).' },
    { key: 'adidas', name: 'Adidas', owner: 'Adidas AG', classNums: [25, 28, 35], aliases: ['adidas', 'adidas originals'], reason: 'Famous global athletic brand Adidas in footwear and apparel.' },
    { key: 'puma', name: 'Puma', owner: 'Puma SE', classNums: [25, 28, 35], aliases: ['puma', 'puma motorsport'], reason: 'Famous global sportswear brand Puma registered in Class 25.' },
    { key: 'underarmour', name: 'Under Armour', owner: 'Under Armour, Inc.', classNums: [25, 28, 35], aliases: ['under armour', 'underarmour'], reason: 'Direct collision with athletic performance mark Under Armour in Class 25.' },
    { key: 'levis', name: 'Levi\'s', owner: 'Levi Strauss & Co.', classNums: [25, 35], aliases: ['levis', 'levi\'s', 'levi strauss'], reason: 'Iconic global denim house mark Levi\'s registered in Class 25.' },
    { key: 'uniqlo', name: 'Uniqlo', owner: 'Fast Retailing Co., Ltd.', classNums: [25, 35], aliases: ['uniqlo', 'life wear'], reason: 'Famous global casualwear brand Uniqlo in Class 25.' },
    { key: 'gucci', name: 'Gucci', owner: 'Guccio Gucci S.p.A. (Kering)', classNums: [14, 18, 25, 35], aliases: ['gucci', 'guccio gucci'], reason: 'Famous luxury fashion house mark Gucci protected across all classes.' },
    { key: 'louisvuitton', name: 'Louis Vuitton (LV)', owner: 'Louis Vuitton Malletier (LVMH)', classNums: [14, 18, 25, 35], aliases: ['louis vuitton', 'louisvuitton', 'lv'], reason: 'Famous luxury house mark Louis Vuitton (LVMH) protected globally.' },
    { key: 'zerodha', name: 'Zerodha', owner: 'Zerodha Broking Limited', classNums: [36, 42], aliases: ['zerodha', 'kite', 'varsity zerodha'], reason: 'Direct collision with India’s leading discount brokerage and fintech mark Zerodha.' },
    { key: 'groww', name: 'Groww', owner: 'Nextbillion Technology Private Limited', classNums: [36, 42], aliases: ['groww', 'groww app', 'grow'], reason: 'Direct collision with premier Indian investment platform Groww in Class 36.' },
    { key: 'razorpay', name: 'Razorpay', owner: 'Razorpay Software Private Limited', classNums: [36, 42], aliases: ['razorpay', 'razor pay', 'razorpayx'], reason: 'Direct collision with India’s leading payment gateway and fintech unicorn Razorpay.' },
    { key: 'paytm', name: 'Paytm', owner: 'One97 Communications Limited', classNums: [36, 38, 42], aliases: ['paytm', 'pay tm', 'one97'], reason: 'Direct collision with famous Indian payments and fintech house mark Paytm.' },
    { key: 'phonepe', name: 'PhonePe', owner: 'PhonePe Private Limited (Walmart)', classNums: [36, 42], aliases: ['phonepe', 'phone pe', 'phonepe app'], reason: 'Direct collision with India’s largest UPI payments mark PhonePe.' },
    { key: 'cred', name: 'CRED', owner: 'Dreamplug Technologies Private Limited', classNums: [36, 42], aliases: ['cred', 'cred app', 'dreamplug'], reason: 'Direct collision with high-net-worth credit rewards platform CRED.' },
    { key: 'bharatpe', name: 'BharatPe', owner: 'Resilient Innovations Private Limited', classNums: [36, 42], aliases: ['bharatpe', 'bharat pe', 'postpe'], reason: 'Direct collision with merchant fintech platform BharatPe in Class 36.' },
    { key: 'pinelabs', name: 'Pine Labs', owner: 'Pine Labs Private Limited', classNums: [36, 42], aliases: ['pine labs', 'pinelabs'], reason: 'Direct collision with merchant commerce and POS fintech leader Pine Labs.' },
    { key: 'mobikwik', name: 'MobiKwik', owner: 'One Mobikwik Systems Limited', classNums: [36, 42], aliases: ['mobikwik', 'mobicash', 'zaakpay'], reason: 'Direct collision with digital wallet and credit fintech MobiKwik.' },
    { key: 'jupiter', name: 'Jupiter Money', owner: 'Amica Financial Technologies Private Limited', classNums: [36, 42], aliases: ['jupiter money', 'jupiter bank', 'amica'], reason: 'Direct collision with Indian neobanking brand Jupiter Money in Class 36.' },
    { key: 'fimoney', name: 'Fi Money', owner: 'Epifi Technologies Private Limited', classNums: [36, 42], aliases: ['fi money', 'fimoney', 'epifi'], reason: 'Direct collision with neobanking platform Fi Money in Class 36.' },
    { key: 'coindcx', name: 'CoinDCX', owner: 'Neblio Technologies Private Limited', classNums: [36, 42], aliases: ['coindcx', 'coin dcx'], reason: 'Direct collision with India’s leading crypto exchange CoinDCX in Class 36.' },
    { key: 'coinswitch', name: 'CoinSwitch (CoinSwitch Kuber)', owner: 'Bitcipher Labs LLP', classNums: [36, 42], aliases: ['coinswitch', 'coin switch', 'coinswitch kuber'], reason: 'Direct collision with crypto and trading platform CoinSwitch in Class 36.' },
    { key: 'hdfc', name: 'HDFC Bank', owner: 'HDFC Bank Limited', classNums: [36], aliases: ['hdfc', 'hdfc bank', 'hdfc securities'], reason: 'Famous Indian banking institution mark HDFC Bank in Class 36.' },
    { key: 'icici', name: 'ICICI Bank', owner: 'ICICI Bank Limited', classNums: [36], aliases: ['icici', 'icici bank', 'icici direct'], reason: 'Famous Indian private bank mark ICICI in Class 36.' },
    { key: 'sbi', name: 'State Bank of India (SBI)', owner: 'State Bank of India', classNums: [36], aliases: ['sbi', 'state bank of india', 'yono sbi'], reason: 'Famous statutory Indian banking institution mark SBI.' },
    { key: 'axisbank', name: 'Axis Bank', owner: 'Axis Bank Limited', classNums: [36], aliases: ['axis bank', 'axisbank'], reason: 'Famous Indian private banking institution mark Axis Bank in Class 36.' },
    { key: 'kotak', name: 'Kotak Mahindra Bank', owner: 'Kotak Mahindra Bank Limited', classNums: [36], aliases: ['kotak', 'kotak bank', 'kotak mahindra'], reason: 'Famous Indian banking and asset management mark Kotak in Class 36.' },
    { key: 'stripe', name: 'Stripe', owner: 'Stripe, Inc.', classNums: [36, 42], aliases: ['stripe', 'stripe payments'], reason: 'Famous global payment infrastructure mark Stripe in Class 36 & 42.' },
    { key: 'paypal', name: 'PayPal', owner: 'PayPal, Inc.', classNums: [36, 42], aliases: ['paypal', 'pay pal'], reason: 'Famous global digital payment platform mark PayPal in Class 36.' },
    { key: 'apple', name: 'Apple Inc.', owner: 'Apple Inc.', classNums: [9, 35, 38, 42], aliases: ['apple', 'apple store', 'iphone', 'macbook', 'ipad'], reason: 'Famous global trademark Apple Inc. having multi-class protection under Sec 29(4) Indian Trademarks Act.' },
    { key: 'google', name: 'Google', owner: 'Google LLC (Alphabet Inc.)', classNums: [9, 35, 38, 42], aliases: ['google', 'alphabet', 'android', 'youtube', 'gemini'], reason: 'Famous global trademark Google with total well-known mark protection under Sec 11(6).' },
    { key: 'microsoft', name: 'Microsoft', owner: 'Microsoft Corporation', classNums: [9, 35, 38, 42], aliases: ['microsoft', 'azure', 'windows', 'xbox'], reason: 'Famous global computing mark Microsoft Corporation.' },
    { key: 'meta', name: 'Meta (Facebook / Instagram / WhatsApp)', owner: 'Meta Platforms, Inc.', classNums: [9, 35, 38, 42], aliases: ['meta', 'facebook', 'instagram', 'whatsapp'], reason: 'Famous social technology house mark Meta Platforms, Inc.' },
    { key: 'tata', name: 'Tata Group', owner: 'Tata Sons Private Limited', classNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], aliases: ['tata', 'tata sons', 'tata motors', 'tcs', 'tata tea', 'tata salt'], reason: 'Identical / deceptive similarity to well-known Indian conglomerate Tata (cross-class protection across all 45 NICE classes).' },
    { key: 'reliance', name: 'Reliance Industries / Jio', owner: 'Reliance Industries Limited', classNums: [9, 35, 36, 38, 42], aliases: ['reliance', 'jio', 'reliance retail', 'ril'], reason: 'Direct collision with Reliance / Jio registered conglomerate house mark.' },
    { key: 'infosys', name: 'Infosys', owner: 'Infosys Limited', classNums: [9, 35, 42], aliases: ['infosys', 'infy'], reason: 'Famous Indian IT services mark Infosys Limited in Class 42.' },
    { key: 'wipro', name: 'Wipro', owner: 'Wipro Limited', classNums: [9, 35, 42], aliases: ['wipro', 'wipro technologies'], reason: 'Famous Indian tech conglomerate mark Wipro in Class 42.' },
    { key: 'hcl', name: 'HCL Technologies', owner: 'HCL Technologies Limited', classNums: [9, 35, 42], aliases: ['hcl', 'hcl tech'], reason: 'Famous Indian tech multinational mark HCL in Class 42.' },
    { key: 'zoho', name: 'Zoho Corporation', owner: 'Zoho Corporation Private Limited', classNums: [9, 42], aliases: ['zoho', 'zoho crm', 'manageengine'], reason: 'Direct collision with SaaS giant Zoho Corporation in Class 42.' },
    { key: 'freshworks', name: 'Freshworks', owner: 'Freshworks Inc.', classNums: [9, 42], aliases: ['freshworks', 'freshdesk', 'freshservice'], reason: 'Direct collision with listed SaaS leader Freshworks in Class 42.' },
    { key: 'postman', name: 'Postman', owner: 'Postdot Technologies Inc.', classNums: [9, 42], aliases: ['postman', 'postman api'], reason: 'Direct collision with world-leading API platform Postman in Class 42.' },
    { key: 'hasura', name: 'Hasura', owner: 'Hasura Inc.', classNums: [9, 42], aliases: ['hasura', 'hasura graphql'], reason: 'Direct collision with developer tooling unicorn Hasura in Class 42.' },
    { key: 'browserstack', name: 'BrowserStack', owner: 'BrowserStack Inc.', classNums: [9, 42], aliases: ['browserstack', 'browser stack'], reason: 'Direct collision with software testing cloud platform BrowserStack.' },
    { key: 'inmobi', name: 'InMobi', owner: 'InMobi Pte. Ltd.', classNums: [35, 42], aliases: ['inmobi', 'glance inMobi'], reason: 'Direct collision with ad-tech and mobile unicorn InMobi.' },
    { key: 'salesforce', name: 'Salesforce', owner: 'Salesforce, Inc.', classNums: [9, 42], aliases: ['salesforce', 'salesforce crm'], reason: 'Famous global enterprise SaaS mark Salesforce in Class 42.' },
    { key: 'adobe', name: 'Adobe', owner: 'Adobe Inc.', classNums: [9, 42], aliases: ['adobe', 'photoshop', 'illustrator', 'figma'], reason: 'Famous creative software house mark Adobe in Class 9 & 42.' },
    { key: 'canva', name: 'Canva', owner: 'Canva Pty Ltd', classNums: [9, 42], aliases: ['canva', 'canva pro'], reason: 'Famous visual design SaaS mark Canva in Class 42.' },
    { key: 'figma', name: 'Figma', owner: 'Figma, Inc.', classNums: [9, 42], aliases: ['figma', 'figjam'], reason: 'Famous collaborative design tool mark Figma in Class 42.' },
    { key: 'slack', name: 'Slack', owner: 'Slack Technologies LLC (Salesforce)', classNums: [9, 38, 42], aliases: ['slack', 'slack app'], reason: 'Famous workplace messaging mark Slack in Class 38 & 42.' },
    { key: 'notion', name: 'Notion', owner: 'Notion Labs, Inc.', classNums: [9, 42], aliases: ['notion', 'notion ai', 'notion workspace'], reason: 'Direct collision with productivity workspace mark Notion in Class 42.' },
    { key: 'cultfit', name: 'Cult.fit / Cure.fit', owner: 'Curefit Healthcare Private Limited', classNums: [41, 44], aliases: ['cult.fit', 'cultfit', 'cure.fit', 'curefit', 'cult'], reason: 'Direct collision with premier Indian fitness chain Cult.fit in Class 41 & 44.' },
    { key: 'healthifyme', name: 'HealthifyMe', owner: 'HealthifyMe Wellness Products and Services Pvt Ltd', classNums: [9, 41, 44], aliases: ['healthifyme', 'healthify me', 'healthify'], reason: 'Direct collision with fitness and wellness app HealthifyMe in Class 44.' },
    { key: 'byjus', name: 'BYJU\'S', owner: 'Think & Learn Private Limited', classNums: [9, 41], aliases: ['byjus', 'byju\'s', 'byju'], reason: 'Direct collision with registered Indian edtech brand BYJU\'S in Class 41.' },
    { key: 'unacademy', name: 'Unacademy', owner: 'Sorting Hat Technologies Private Limited', classNums: [9, 41], aliases: ['unacademy', 'sorting hat'], reason: 'Direct collision with edtech platform Unacademy in Class 41.' },
    { key: 'physicswallah', name: 'Physics Wallah (PW)', owner: 'Physicswallah Private Limited', classNums: [9, 41], aliases: ['physics wallah', 'physicswallah', 'pw'], reason: 'Direct collision with edtech unicorn Physics Wallah in Class 41.' },
    { key: 'headsupfortails', name: 'Heads Up For Tails (HUFT)', owner: 'Pre Parenting Solutions Private Limited', classNums: [18, 28, 31, 35], aliases: ['heads up for tails', 'huft', 'headsupfortails'], reason: 'Direct collision with India’s leading premium pet care brand Heads Up For Tails (HUFT) in Class 31 & 35.' },
    { key: 'supertails', name: 'Supertails', owner: 'Chetanya Supertails Private Limited', classNums: [31, 35, 44], aliases: ['supertails', 'super tails'], reason: 'Direct collision with D2C pet care and telehealth brand Supertails in Class 35 & 44.' },
    { key: 'lenskart', name: 'Lenskart', owner: 'Lenskart Solutions Limited', classNums: [9, 35, 44], aliases: ['lenskart', 'lens kart', 'john jacobs', 'vincent chase'], reason: 'Direct collision with eyewear giant Lenskart Solutions Ltd registered in Class 9 & 35.' },
    { key: 'practo', name: 'Practo', owner: 'Practo Technologies Private Limited', classNums: [9, 42, 44], aliases: ['practo', 'practo care'], reason: 'Direct collision with digital health and telehealth platform Practo in Class 44.' },
    { key: 'pharmeasy', name: 'PharmEasy', owner: 'API Holdings Limited', classNums: [35, 44], aliases: ['pharmeasy', 'pharm easy'], reason: 'Direct collision with digital pharmacy and diagnostic brand PharmEasy in Class 35 & 44.' },
    { key: 'tata1mg', name: '1mg / Tata 1mg', owner: 'Tata 1mg Technologies Private Limited', classNums: [35, 44], aliases: ['1mg', 'tata 1mg', 'tata1mg'], reason: 'Direct collision with healthcare e-commerce platform Tata 1mg in Class 35.' },
    { key: 'ola', name: 'Ola / Ola Electric', owner: 'ANI Technologies Private Limited / Ola Electric Mobility Ltd', classNums: [9, 12, 39], aliases: ['ola', 'ola cabs', 'ola electric'], reason: 'Direct collision with mobility and EV giant Ola in Class 39 & 12.' },
    { key: 'uber', name: 'Uber', owner: 'Uber Technologies, Inc.', classNums: [9, 39], aliases: ['uber', 'uber eats', 'uber ride'], reason: 'Famous global mobility trademark Uber in Class 39.' },
    { key: 'rapido', name: 'Rapido', owner: 'Roppen Transportation Services Private Limited', classNums: [9, 39], aliases: ['rapido', 'rapido bike'], reason: 'Direct collision with bike-taxi and mobility platform Rapido in Class 39.' },
    { key: 'makemytrip', name: 'MakeMyTrip (MMT)', owner: 'MakeMyTrip (India) Private Limited', classNums: [39, 43], aliases: ['makemytrip', 'make my trip', 'mmt'], reason: 'Famous Indian online travel booking house mark MakeMyTrip in Class 39 & 43.' },
    { key: 'oyo', name: 'OYO Rooms', owner: 'Oravel Stays Limited', classNums: [35, 43], aliases: ['oyo', 'oyo rooms', 'oravel'], reason: 'Direct collision with hospitality network mark OYO / Oravel Stays in Class 43.' },
    { key: 'airbnb', name: 'Airbnb', owner: 'Airbnb, Inc.', classNums: [35, 43], aliases: ['airbnb', 'air bnb'], reason: 'Famous global hospitality platform mark Airbnb in Class 43.' },
    { key: 'zostel', name: 'Zostel', owner: 'Zostel Hospitality Private Limited', classNums: [43], aliases: ['zostel', 'zostel home', 'zostel plus'], reason: 'Direct collision with India’s leading backpacker hostel chain Zostel in Class 43.' }
  ];

  function checkDatabaseTrademarkCollision(brandName) {
    const rawClean = (brandName || '').trim().toLowerCase();
    const stripped = rawClean.replace(/[^a-z0-9]/g, '');
    if (!stripped || stripped.length < 2) return null;

    const words = rawClean.split(/[\s\-_\.,\/]+/).filter(w => w.length > 0);

    for (const entry of MAJOR_TRADEMARKS_DATABASE) {
      const entryKey = entry.key.toLowerCase().replace(/[^a-z0-9]/g, '');
      const entryName = entry.name.toLowerCase();

      // 1. Exact match (stripped or raw)
      if (stripped === entryKey || rawClean === entryName) {
        return {
          matchedBrand: entry.name,
          owner: entry.owner,
          primaryClasses: entry.classNums,
          reason: entry.reason
        };
      }

      // 2. Word match: check if any constituent word exactly matches entryKey or entryName
      const hasWordMatch = words.some(w => {
        const wClean = w.replace(/[^a-z0-9]/g, '');
        return wClean === entryKey || (entryKey.length >= 3 && wClean === entryKey);
      });
      if (hasWordMatch) {
        return {
          matchedBrand: entry.name,
          owner: entry.owner,
          primaryClasses: entry.classNums,
          reason: entry.reason
        };
      }

      // 3. Substring match
      if (entryKey.length >= 4 && (stripped.includes(entryKey) || rawClean.includes(entryName))) {
        return {
          matchedBrand: entry.name,
          owner: entry.owner,
          primaryClasses: entry.classNums,
          reason: entry.reason
        };
      }

      if (stripped.length >= 4 && entryKey.includes(stripped)) {
        return {
          matchedBrand: entry.name,
          owner: entry.owner,
          primaryClasses: entry.classNums,
          reason: entry.reason
        };
      }

      // 4. Aliases match
      if (entry.aliases && entry.aliases.length > 0) {
        for (const alias of entry.aliases) {
          const aClean = alias.toLowerCase().replace(/[^a-z0-9]/g, '');
          if (stripped === aClean || rawClean === alias.toLowerCase() || (aClean.length >= 4 && stripped.includes(aClean))) {
            return {
              matchedBrand: entry.name,
              owner: entry.owner,
              primaryClasses: entry.classNums,
              reason: entry.reason
            };
          }
          if (words.some(w => w.replace(/[^a-z0-9]/g, '') === aClean)) {
            return {
              matchedBrand: entry.name,
              owner: entry.owner,
              primaryClasses: entry.classNums,
              reason: entry.reason
            };
          }
        }
      }
    }

    return null;
  }

  function proceduralTrademarkCheck(brandName = '', niche = '') {
    const cleanName = (brandName || '').trim();
    const lower = cleanName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const nice = getNiceClassForNiche(niche);

    const conflicts = [];
    let status = 'Clear';

    // 1. Comprehensive Check against 100+ Major Registered Trademarks
    const dbMatch = checkDatabaseTrademarkCollision(cleanName);
    if (dbMatch) {
      status = 'Conflict';
      conflicts.push({
        name: `${dbMatch.matchedBrand} (Registered to ${dbMatch.owner})`,
        reason: dbMatch.reason
      });
    }

    // 2. Check phonetic / generic caution terms
    if (status !== 'Conflict') {
      const genericWords = ['coffee', 'cafe', 'tech', 'studio', 'pay', 'mart', 'kart', 'super', 'hyper', 'aura', 'urban', 'luxe'];
      const matchedGeneric = genericWords.find(w => lower === w || lower === w + 's' || lower === 'the' + w);

      if (matchedGeneric) {
        status = 'Caution';
        conflicts.push({
          name: `Descriptive / Generic Mark ("${matchedGeneric}")`,
          reason: `Term is highly descriptive or crowded in ${nice.label}. Trademarks Registry routinely raises Section 9 (Descriptiveness) objections unless distinctively modified.`
        });
      } else if (cleanName.length <= 3) {
        status = 'Caution';
        conflicts.push({
          name: 'Short Letter Combination / Acronym',
          reason: '2-3 letter marks face heavy opposition in Indian Trademarks Journal unless backed by extensive prior commercial usage proof.'
        });
      }
    }

    // 3. Smart Alternative Generator based on niche
    const nameBase = cleanName.replace(/Living|Studio|Lab|Venture|Co|Club|Craft|House|Roasters/gi, '').trim() || 'Veritas';
    let alternatives = [];

    if (nice.classNum === 30 || nice.classNum === 43) {
      alternatives = [`${nameBase} Roasters`, `Komorebi Brew Co.`, `Solstice & Bean`];
    } else if (nice.classNum === 25 || nice.classNum === 14) {
      alternatives = [`Atelier ${nameBase}`, `${nameBase} Archive`, `Verve Studio`];
    } else if (nice.classNum === 42 || nice.classNum === 9) {
      alternatives = [`${nameBase} Logic`, `Synapse ${nameBase}`, `OmniCore Systems`];
    } else if (nice.classNum === 3) {
      alternatives = [`Botanica ${nameBase}`, `Floralis Care`, `Nativa Rituals`];
    } else if (nice.classNum === 36) {
      alternatives = [`Apex ${nameBase}`, `Meridian Trust`, `Solvent Pay`];
    } else {
      alternatives = [`${nameBase}ara`, `Aethel ${nameBase}`, `Maison ${nameBase}`];
    }

    return {
      status: status,
      statusLabel: status === 'Conflict' ? 'Conflict — Existing Trademark Detected' : (status === 'Caution' ? 'Caution — Potential Overlap' : 'Clear — High Likelihood of Registration'),
      trademarkClass: nice.label,
      classDesc: nice.desc,
      conflicts: conflicts,
      alternatives: alternatives,
      quickCompanyUrl: `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(cleanName)}`
    };
  }

  async function checkTrademarkConflict(brandName, niche) {
    const rawKey = elements.apiKeyInput ? elements.apiKeyInput.value.trim() : '';
    const hasHeaderKey = Boolean(rawKey && rawKey.length > 5);

    // 1. Direct registry database collision test
    const dbMatch = checkDatabaseTrademarkCollision(brandName);

    try {
      const res = await fetch('/.netlify/functions/trademark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brandName: brandName,
          niche: niche,
          apiKey: hasHeaderKey ? rawKey : undefined
        })
      });

      if (res.ok) {
        const netlifyData = await res.json();
        // Guarantee registry collision is enforced
        if (dbMatch) {
          netlifyData.status = 'Conflict';
          netlifyData.statusLabel = 'Conflict — Existing Trademark Detected';
          const already = (netlifyData.conflicts || []).some(c => c.name.toLowerCase().includes(dbMatch.matchedBrand.toLowerCase()));
          if (!already) {
            netlifyData.conflicts = netlifyData.conflicts || [];
            netlifyData.conflicts.unshift({
              name: `${dbMatch.matchedBrand} (Registered to ${dbMatch.owner})`,
              reason: dbMatch.reason
            });
          }
        }
        return netlifyData;
      }
      console.warn('Netlify trademark endpoint returned non-OK status:', res.status);
    } catch (fetchErr) {
      console.warn('Could not reach /.netlify/functions/trademark, engaging procedural fallback:', fetchErr);
    }

    // Direct Gemini REST client fallback if header key is provided
    if (hasHeaderKey) {
      try {
        const niceClass = getNiceClassForNiche(niche);
        const promptText = `
You are a senior Intellectual Property & Trademark Attorney specializing in Indian Trademark Law (IP India) and QuickCompany live registry audits.
Evaluate trademark registration availability, phonetic similarity, and conflict risk for:
- Proposed Brand Name: "${brandName}"
- Sector / Niche: "${niche}"
- Mapped NICE Trademark Class: "${niceClass.label}: ${niceClass.desc}"
${dbMatch ? `CRITICAL: The name matches registered brand "${dbMatch.matchedBrand}" owned by "${dbMatch.owner}". Set status to "Conflict".` : ''}

Return a SINGLE valid JSON object matching this schema strictly:
{
  "status": "Clear" | "Caution" | "Conflict",
  "trademarkClass": "${niceClass.label}",
  "classDesc": "${niceClass.desc}",
  "conflicts": [
    { "name": "Existing Conflicting Mark or Legal Ground", "reason": "Clear explanation of identical/phonetic overlap or Section 9 objection" }
  ],
  "alternatives": ["CoinedAlternative1", "CoinedAlternative2", "CoinedAlternative3"]
}
`;
        const payload = {
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: { temperature: 0.2, responseMimeType: 'application/json' }
        };
        const data = await callGeminiEndpoint(payload);
        const parsed = extractJsonFromGeminiResponse(data);
        const conflictsList = Array.isArray(parsed.conflicts) ? parsed.conflicts : [];
        let finalStatus = ['Clear', 'Caution', 'Conflict'].includes(parsed.status) ? parsed.status : 'Clear';
        if (dbMatch) {
          finalStatus = 'Conflict';
          const already = conflictsList.some(c => c.name.toLowerCase().includes(dbMatch.matchedBrand.toLowerCase()));
          if (!already) {
            conflictsList.unshift({
              name: `${dbMatch.matchedBrand} (Registered to ${dbMatch.owner})`,
              reason: dbMatch.reason
            });
          }
        }

        return {
          status: finalStatus,
          statusLabel: finalStatus === 'Conflict' ? 'Conflict — Existing Trademark Detected' : (finalStatus === 'Caution' ? 'Caution — Potential Overlap' : 'Clear — High Likelihood of Registration'),
          trademarkClass: parsed.trademarkClass || niceClass.label,
          classDesc: parsed.classDesc || niceClass.desc,
          conflicts: conflictsList,
          alternatives: Array.isArray(parsed.alternatives) && parsed.alternatives.length >= 3 ? parsed.alternatives.slice(0, 3) : proceduralTrademarkCheck(brandName, niche).alternatives,
          quickCompanyUrl: `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(brandName)}`
        };
      } catch (geminiErr) {
        console.warn('Direct Gemini trademark check failed:', geminiErr);
      }
    }

    // Procedural Fallback Engine
    return proceduralTrademarkCheck(brandName, niche);
  }

  function renderTrademarkStatus(result, brandName = null) {
    if (!elements.trademarkStatusCard) return;

    const currentBrand = (brandName || (elements.inputBrandName ? elements.inputBrandName.value.trim() : '') || 'Brand').trim();

    // 1. Trademark Class Badge & Description
    if (elements.tmClassBadge) elements.tmClassBadge.textContent = result.trademarkClass || "Class 30";
    if (elements.tmClassDesc) elements.tmClassDesc.textContent = result.classDesc || "Staple Foods & Beverages";

    // 2. Status Pill (Clear | Caution | Conflict)
    const status = (result.status || 'Clear').toLowerCase();
    if (elements.tmStatusPill) {
      elements.tmStatusPill.className = `trademark-status-pill pill-${status}`;
    }
    if (elements.tmStatusText) {
      if (status === 'conflict') {
        elements.tmStatusText.textContent = 'Conflict — Existing Trademark Detected';
      } else if (status === 'caution') {
        elements.tmStatusText.textContent = 'Caution — Potential Overlap';
      } else {
        elements.tmStatusText.textContent = 'Clear — High Likelihood of Registration';
      }
    }

    // 3. Conflicts List vs Clear Note
    const conflicts = Array.isArray(result.conflicts) ? result.conflicts : [];
    if (conflicts.length > 0 && status !== 'clear') {
      if (elements.tmConflictsWrap) elements.tmConflictsWrap.classList.remove('hidden');
      if (elements.tmClearNote) elements.tmClearNote.classList.add('hidden');
      if (elements.tmConflictsList) {
        elements.tmConflictsList.innerHTML = conflicts.map(c => `
          <div class="tm-conflict-item">
            <div class="conflict-head">
              <span class="conflict-warning-badge">${status === 'conflict' ? 'Direct Collision' : 'Caution Ground'}</span>
              <strong>${c.name}</strong>
            </div>
            <p class="conflict-desc">${c.reason}</p>
          </div>
        `).join('');
      }
    } else {
      if (elements.tmConflictsWrap) elements.tmConflictsWrap.classList.add('hidden');
      if (elements.tmClearNote) elements.tmClearNote.classList.remove('hidden');
    }

    // 4. Clickable Alternatives List
    const alts = Array.isArray(result.alternatives) && result.alternatives.length > 0
      ? result.alternatives.slice(0, 3)
      : [`${currentBrand} Roasters`, `Komorebi Brew Co.`, `Solstice Studio`];

    if (elements.tmAlternativesList) {
      elements.tmAlternativesList.innerHTML = '';
      alts.forEach(altName => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'tm-alt-btn';
        btn.title = `Switch brand name to "${altName}"`;
        btn.innerHTML = `
          <span>${altName}</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        `;
        btn.addEventListener('click', () => {
          if (elements.inputBrandName) {
            elements.inputBrandName.value = altName;
            elements.inputBrandName.focus();
            showToast(`Switched brand name to "${altName}"! Re-checking trademark...`, 'info', 2000);
            handleCheckTrademark(altName);
          }
        });
        elements.tmAlternativesList.appendChild(btn);
      });
    }

    // 5. Update QuickCompany Live Verification Link with pre-searched brand name
    if (elements.tmVerifyLink) {
      const qcUrl = result.quickCompanyUrl || `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(currentBrand)}`;
      elements.tmVerifyLink.href = qcUrl;
      elements.tmVerifyLink.setAttribute('title', `Search "${currentBrand}" live on QuickCompany Indian Trademark database`);
      if (elements.tmVerifyLinkText) {
        elements.tmVerifyLinkText.textContent = `Verify Live on QuickCompany (IP India)`;
      }
    }

    // Reveal the card
    elements.trademarkStatusCard.classList.remove('hidden');
    elements.trademarkStatusCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  async function handleCheckTrademark(overrideName = null) {
    if (state.isCheckingTrademark) return;

    const brandName = (overrideName || (elements.inputBrandName ? elements.inputBrandName.value.trim() : '')).trim();
    if (!brandName) {
      showToast('Please enter a Brand Name to check trademark availability', 'warning');
      if (elements.inputBrandName) elements.inputBrandName.focus();
      return;
    }

    let niche = elements.industrySelect ? elements.industrySelect.value : 'Specialty Coffee & Chai Cafe';
    if (niche === 'Other / Custom') {
      niche = (elements.inputCustomNiche && elements.inputCustomNiche.value.trim()) || 'Creative Studio';
    }

    state.isCheckingTrademark = true;
    if (elements.btnCheckTrademark) elements.btnCheckTrademark.disabled = true;
    if (elements.trademarkSpinner) elements.trademarkSpinner.classList.remove('hidden');
    if (elements.trademarkBtnText) elements.trademarkBtnText.textContent = "Auditing...";

    try {
      const result = await checkTrademarkConflict(brandName, niche);
      state.lastTrademarkCheck = result;
      renderTrademarkStatus(result, brandName);

      // Fetch and display live QuickCompany trademark registry filings
      if (result.quickCompanyMatches && result.quickCompanyMatches.length > 0) {
        renderQuickCompanyRecords(result.quickCompanyMatches, brandName);
      } else {
        fetchAndRenderQuickCompany(brandName);
      }

      if (result.status === 'Clear') {
        showToast(`Trademark Clear in ${result.trademarkClass}! High registration likelihood.`, 'success', 3500);
      } else if (result.status === 'Caution') {
        showToast(`Trademark Caution: potential overlaps found in ${result.trademarkClass}`, 'warning', 3500);
      } else {
        showToast(`Trademark Conflict: registered mark detected in ${result.trademarkClass}!`, 'error', 3500);
      }
    } catch (err) {
      console.error('Failed to check trademark:', err);
      const fallback = proceduralTrademarkCheck(brandName, niche);
      renderTrademarkStatus(fallback, brandName);
      fetchAndRenderQuickCompany(brandName);
      showToast('Trademark audited (Smart Procedural Fallback)', 'info', 3000);
    } finally {
      state.isCheckingTrademark = false;
      if (elements.btnCheckTrademark) elements.btnCheckTrademark.disabled = false;
      if (elements.trademarkSpinner) elements.trademarkSpinner.classList.add('hidden');
      if (elements.trademarkBtnText) elements.trademarkBtnText.textContent = "Check Trademark";
    }
  }

  // =========================================================================
  // Live QuickCompany Indian Trademark Data Fetcher & Renderer
  // =========================================================================
  function parseQuickCompanyResultsClient(html = '', query = '') {
    const matches = [];
    if (!html || typeof html !== 'string') return matches;

    const seen = new Set();
    const linkRegex = /<a[^>]+href=["'](\/trademarks\/([0-9]+)-([^"']+))["'][^>]*>([\s\S]*?)<\/a>/gi;
    let linkMatch;

    while ((linkMatch = linkRegex.exec(html)) !== null && matches.length < 8) {
      const relativeUrl = linkMatch[1];
      const appNumber = linkMatch[2];
      let rawTitle = linkMatch[4].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

      if (!rawTitle || rawTitle.length < 2) continue;
      const lower = rawTitle.toLowerCase();
      if (lower.includes('view all') || lower.includes('quickcompany') || lower.includes('trademark search') || lower.includes('filter')) {
        continue;
      }

      if (seen.has(lower)) continue;
      seen.add(lower);

      const idx = linkMatch.index;
      const context = html.slice(Math.max(0, idx - 200), Math.min(html.length, idx + 600));

      const classMatch = context.match(/Class\s*([0-9]{1,2})/i);
      const classStr = classMatch ? `Class ${classMatch[1]}` : 'Class 30';

      const statusMatch = context.match(/\b(Registered|Objected|Opposed|Pending|Abandoned|Refused|Accepted &amp; Advertised|Advertised|Accepted|Formalities Chk Pass)\b/i);
      const statusStr = statusMatch ? statusMatch[1].replace('&amp;', '&') : 'Active Filing';

      const appMatch = context.match(/(?:Proprietor|Applicant|By)\s*[:\-]?\s*<[^>]+>([^<]+)<\/[^>]+>/i)
        || context.match(/(?:Proprietor|Applicant|Owner)\s*[:\-]?\s*([A-Za-z0-9\s,\.]{3,45})/i);
      const applicantStr = appMatch ? appMatch[1].trim() : 'Registered Proprietor';

      matches.push({
        name: rawTitle,
        applicationNumber: appNumber || 'TM Record',
        trademarkClass: classStr,
        status: statusStr,
        applicant: applicantStr,
        url: `https://www.quickcompany.in${relativeUrl}`
      });
    }

    return matches;
  }

  async function fetchQuickCompanyData(brandName = '') {
    const query = (brandName || '').trim();
    if (!query) return [];

    // 1. Try dedicated Netlify quickcompany serverless function
    try {
      const res = await fetch(`/.netlify/functions/quickcompany?q=${encodeURIComponent(query)}`);
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.results) && data.results.length > 0) {
          return data.results;
        }
      }
    } catch (e) {
      console.warn('Could not query /.netlify/functions/quickcompany:', e.message);
    }

    // 2. Try Netlify trademark endpoint quickCompanyMatches
    try {
      const res = await fetch('/.netlify/functions/trademark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brandName: query, niche: 'General' })
      });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.quickCompanyMatches) && data.quickCompanyMatches.length > 0) {
          return data.quickCompanyMatches;
        }
      }
    } catch (e) {
      console.warn('Netlify trademark endpoint query error:', e.message);
    }

    // 3. Resilient client-side CORS proxy (AllOrigins / corsproxy)
    try {
      const targetUrl = `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(query)}`;
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(proxyUrl, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const html = await res.text();
        const matches = parseQuickCompanyResultsClient(html, query);
        if (matches && matches.length > 0) {
          return matches;
        }
      }
    } catch (proxyErr) {
      console.warn('CORS proxy query to QuickCompany failed / offline:', proxyErr.message);
    }

    // 4. Registry database fallback for 100+ major Indian marks
    const dbMatch = checkDatabaseTrademarkCollision(query);
    if (dbMatch) {
      return [{
        name: dbMatch.matchedBrand.toUpperCase(),
        applicationNumber: 'IP India Verified Filing',
        trademarkClass: `Class ${dbMatch.primaryClasses[0]}`,
        status: 'Registered',
        applicant: dbMatch.owner,
        url: `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(dbMatch.matchedBrand)}`,
        verified: true
      }];
    }

    return [];
  }

  function renderQuickCompanyRecords(records = [], brandName = '') {
    if (!elements.tmQcResultsList) return;

    if (elements.tmQcCountBadge) {
      elements.tmQcCountBadge.textContent = `${records.length} Found`;
    }

    if (!records || records.length === 0) {
      elements.tmQcResultsList.innerHTML = '';
      if (elements.tmQcEmpty) elements.tmQcEmpty.classList.remove('hidden');
      if (elements.tmQcEmptyText) {
        elements.tmQcEmptyText.textContent = `No conflicting active filings found on QuickCompany for "${brandName}". Mark appears available for registration.`;
      }
      return;
    }

    if (elements.tmQcEmpty) elements.tmQcEmpty.classList.add('hidden');

    elements.tmQcResultsList.innerHTML = records.map(r => {
      const statusKey = (r.status || 'registered').toLowerCase().replace(/[^a-z]/g, '');
      let statusClass = 'status-pending';
      if (statusKey.includes('registered') || statusKey.includes('accepted')) statusClass = 'status-registered';
      else if (statusKey.includes('refused') || statusKey.includes('abandoned')) statusClass = 'status-refused';

      return `
        <div class="tm-qc-card">
          <div class="tm-qc-card-top">
            <span class="tm-qc-card-title">${r.name}</span>
            <div class="tm-qc-card-badges">
              <span class="tm-qc-badge-app">App #${r.applicationNumber || 'TM'}</span>
              <span class="tm-qc-badge-class">${r.trademarkClass || 'Class 30'}</span>
              <span class="tm-qc-status-pill ${statusClass}">${r.status || 'Active'}</span>
            </div>
          </div>
          <div class="tm-qc-card-proprietor">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span><strong>Proprietor:</strong> ${r.applicant || 'Registered Entity'}</span>
          </div>
          <a href="${r.url || `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(brandName)}`}" target="_blank" rel="noopener noreferrer" class="tm-qc-card-link" title="Open full filing details on QuickCompany">
            <span>View Record on QuickCompany.in</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      `;
    }).join('');
  }

  async function fetchAndRenderQuickCompany(brandName) {
    if (!elements.tmQuickCompanyWrap) return;
    const currentName = (brandName || (elements.inputBrandName ? elements.inputBrandName.value.trim() : '')).trim();
    if (!currentName) return;

    if (elements.tmQcLoading) elements.tmQcLoading.classList.remove('hidden');
    if (elements.qcFetchSpinner) elements.qcFetchSpinner.classList.remove('hidden');
    if (elements.qcFetchIcon) elements.qcFetchIcon.classList.add('hidden');
    if (elements.btnFetchQuickcompany) elements.btnFetchQuickcompany.disabled = true;

    try {
      const records = await fetchQuickCompanyData(currentName);
      renderQuickCompanyRecords(records, currentName);
    } catch (err) {
      console.warn('Error fetching QuickCompany data:', err);
      renderQuickCompanyRecords([], currentName);
    } finally {
      if (elements.tmQcLoading) elements.tmQcLoading.classList.add('hidden');
      if (elements.qcFetchSpinner) elements.qcFetchSpinner.classList.add('hidden');
      if (elements.qcFetchIcon) elements.qcFetchIcon.classList.remove('hidden');
      if (elements.btnFetchQuickcompany) elements.btnFetchQuickcompany.disabled = false;
    }
  }

  // =========================================================================
  // 9c. AI Business Name Generator Engine (Gemini + Smart Procedural Fallback)
  // =========================================================================
  const NICHE_NAME_DICTIONARIES = {
    "coffee-chai": {
      roots: ["Komorebi", "Aroma", "Chai", "Velvet", "Roast", "Drip", "Steam", "Elevation", "Kavita", "Saffron", "Terroir", "Amber", "Kafique", "Brim", "Crema", "Moka", "Solstice", "Infusion"],
      modifiers: ["Roasters", "Brew Lab", "Botanical Chai", "Coffee Bar", "Collective", "Atelier", "Craft Co.", "Social", "Boutique", "Press", "House"],
      compounds: ["Chaikarma", "VelourBean", "Roastology", "AromaCraft", "ChaiKulture", "CaelumRoasters", "KomorebiChai", "SolsticeBrew", "ArtisanChai", "TerraRoast", "DripHouse", "KavitaTea"],
      rationales: [
        "Artisanal • Roasted • Slow-Crafted",
        "Heritage • Spiced • Warm",
        "Elevation • Single-Origin • Pure",
        "Circadian • Tactile • Grounded",
        "Modern • Infused • Conscious",
        "Boutique • Steamed • Rich",
        "Velvet • Handcrafted • Comfort",
        "Community • Aromatic • Distinct"
      ]
    },
    "bakery-kitchen": {
      roots: ["Brioche", "Crumb", "Artisan", "Flourish", "Sourdough", "Maison", "Golden", "Oven", "Whisk", "Patisserie", "Crumble", "Veloute", "Rustic", "Hearth", "Butter", "Pastry"],
      modifiers: ["Bakery", "Patisserie", "Cloud Kitchen", "Bakehouse", "Atelier", "Table", "Provisions", "Oven", "Craft Bake", "Kitchen"],
      compounds: ["CrumbCrafters", "MaisonBrioche", "FlourishBake", "GoldenCrust", "OvenCraft", "PatisserieLuxe", "HearthstoneBake", "WhiskTable", "VelvetPastry", "ArtisanLoaf", "BakeTheory", "SourdoughCo"],
      rationales: [
        "Flaky • Butter-Rich • Artisanal",
        "Slow-Ferment • Golden • Warm",
        "Patisserie • Refined • Crafted",
        "Comfort • Fresh-Baked • Tactile",
        "Rustic • Woodfired • Wholesome",
        "French-Inspired • Delicate • Pure",
        "Cloud-Crafted • Gourmet • Fresh",
        "Bespoke • Indulgent • Crisp"
      ]
    },
    "craft-beverages": {
      roots: ["Ferment", "Botanica", "Kombu", "Elixir", "Wild", "Tonic", "Nectar", "Spark", "Fizz", "Flora", "Aura", "Citrus", "Living", "Infuse", "Zest", "Draft"],
      modifiers: ["Brewing", "Botanicals", "Elixirs", "Tonics", "Ferments", "Craft Co.", "Labs", "Living Drinks", "Social", "Alchemy"],
      compounds: ["KombuCraft", "WildElixir", "LivingFerment", "BotanicaFizz", "AuraTonic", "NectarDraft", "SparkFlora", "ZestAlchemy", "CitrusBotanicals", "InfuseLab", "PureFerment", "VerveTonics"],
      rationales: [
        "Living • Fermented • Effervescent",
        "Botanical • Adaptogenic • Crisp",
        "Craft-Brewed • Clean • Functional",
        "Raw • Micro-Batch • Vibrant",
        "Herbal • Sparkling • Refreshing",
        "Probiotic • Pure • Restorative",
        "Artisanal • Cold-Pressed • Wild",
        "Elevated • Social • Tonic"
      ]
    },
    "vegan-health": {
      roots: ["Sprout", "Verdant", "Nativa", "PlantBase", "Harvest", "Pure", "Flora", "Greenery", "Vital", "Root", "Nutri", "Bounty", "Earthly", "Elysian", "Seed", "Organix"],
      modifiers: ["Kitchen", "Table", "Organics", "Harvest", "Nourish", "Clean Foods", "Pantry", "Bowl Co.", "Vitality", "Eats"],
      compounds: ["VerdantTable", "SproutHarvest", "NourishOrganics", "PlantCraft", "FloraKitchen", "VitalGreen", "EarthlyBowl", "CleanRoot", "NutriHarvest", "VitalSeed", "BountyVegan", "PurePantry"],
      rationales: [
        "Nourishing • Plant-Based • Honest",
        "Clean-Label • Wholesome • Fresh",
        "Earth-Forward • Vibrant • Whole",
        "Nutrient-Dense • Healing • Green",
        "Conscious • Compassionate • Pure",
        "Regenerative • Farm-to-Table • Real",
        "Vital • Vibrant • Sustainable",
        "Crisp • Restorative • Guilt-Free"
      ]
    },
    "organic-skincare": {
      roots: ["Botanica", "Sylvan", "Nativa", "Floralis", "Aura", "BioHaven", "Cura", "Lumina", "Derma", "Cellular", "Earthen", "Velvet", "Glow", "Radiance", "Soothe", "Oasis"],
      modifiers: ["Skin", "Botanicals", "Rituals", "Atelier", "Laboratory", "Aesthetics", "Care", "Essence", "Therapy", "Naturals"],
      compounds: ["BotanicaRituals", "NativaSkin", "FloralisLab", "LuminaAura", "CuraBotanics", "CellularGlow", "SylvanSkin", "EarthenEssence", "BioRadiance", "VelvetDerma", "PureSoothe", "OasisAesthetics"],
      rationales: [
        "Restorative • Botanical • Dewy",
        "Clean • Biophilic • Calming",
        "Dermatological • Pure • Radiant",
        "Circadian • Earthen • Glowing",
        "Active-Botanical • Gentle • Clinical",
        "Holistic • Barrier-Repair • Velvet",
        "Adaptive • Plant-Powered • Pure",
        "Conscious • Minimalist • Nourishing"
      ]
    },
    "streetwear-fashion": {
      roots: ["Verve", "Atelier", "Archive", "Knit", "Chroma", "Raw", "Flux", "Drop", "Volt", "District", "Silhouette", "Thread", "Monolith", "Drift", "Loom", "Structure"],
      modifiers: ["Apparel", "Archive", "Studio", "Worldwide", "Drop", "Club", "Collective", "Goods", "Wear", "Edition"],
      compounds: ["ArchiveVerve", "RawChroma", "VibeDrop", "AtelierThread", "MonolithWear", "VoltDistrict", "FluxSilhouette", "LoomCollective", "DriftApparel", "UrbanKnit", "AethelApparel", "ApexStreet"],
      rationales: [
        "Heavyweight • Raw • Structured",
        "Monochrome • Archival • Underground",
        "Kinetic • High-Street • Bold",
        "Minimalist • Tactile • Tailored",
        "Subcultural • Drop-Only • Sharp",
        "Sustainable • Heavy-Cotton • Timeless",
        "Oversized • Gritty • Distinctive",
        "Contemporary • Modular • Pure"
      ]
    },
    "luxury-jewelry": {
      roots: ["Aurelia", "Caviar", "Velour", "Sovereign", "Solstice", "Nocturne", "Valmont", "Vesper", "Elysian", "Crest", "Gemina", "Orum", "Prism", "Carat", "Lustre", "Bespoke"],
      modifiers: ["Jewels", "Maison", "Fine Jewelry", "Atelier", "Archive", "Gems", "Bespoke", "Orum", "Timepieces", "Paris"],
      compounds: ["MaisonAurelia", "VesperJewels", "SovereignGems", "ElysianOrum", "CaviarAtelier", "SolsticeLustre", "NocturneCarat", "ValmontFine", "PrismBespoke", "GeminaArchive", "AethelJewels", "OpusOrum"],
      rationales: [
        "Heirloom • Sovereign • 18K-Solid",
        "Bespoke • Poised • Sculptural",
        "Understated • Archival • Luminous",
        "Timeless • Hand-Set • Lustrous",
        "Artisanal • Rare-Gem • Pure",
        "Monastic • Precision • Precious",
        "Sovereign • Polished • Enduring",
        "Haute-Joaillerie • Refined • Sleek"
      ]
    },
    "fitness-yoga": {
      roots: ["Kinetix", "Prana", "Aura", "Movement", "Pulse", "Form", "Apex", "Flow", "Align", "Core", "Verve", "Zenith", "Somatics", "Rhythm", "Tempo", "Motion"],
      modifiers: ["Studio", "Athletics", "Movement", "Yoga Lab", "Collective", "Space", "Club", "Sanctuary", "Dynamics", "Perform"],
      compounds: ["PranaMovement", "KinetixFlow", "AuraAlign", "ApexAthletics", "PulseYoga", "CoreZenith", "SomaticsSpace", "TempoStudio", "MotionCollective", "FormSanctuary", "VervePerform", "AlignAthletics"],
      rationales: [
        "Biomechanical • Mindful • Powerful",
        "Breathwork • Dynamic • Centered",
        "High-Performance • Kinetic • Crisp",
        "Holistic • Restorative • Aligned",
        "Endurance • Conditioning • Flow",
        "Athletic • Functional • Elevate",
        "Vibrant • Somatic • Strength",
        "Calm • Grounded • Intentional"
      ]
    },
    "mental-health": {
      roots: ["MindHaven", "Aura", "Stillness", "Serena", "Breathe", "Calm", "Solace", "Komorebi", "Equanimity", "Sanctuary", "Zenith", "Pause", "Clarity", "Lucid", "Haven", "Soothe"],
      modifiers: ["Mind", "Health", "Mindfulness", "Sanctuary", "App", "Therapy", "Space", "Collective", "Rituals", "Wellbeing"],
      compounds: ["MindHaven", "StillnessSpace", "SerenaMind", "ClarityPause", "EquanimityApp", "LucidSanctuary", "CalmHaven", "SolaceRituals", "BreatheWell", "AuraMindfulness", "MindZenith", "SootheHealth"],
      rationales: [
        "Centering • Evidence-Based • Gentle",
        "Mindful • Compassionate • Serene",
        "Circadian • Grounding • Peaceful",
        "Cognitive • Soothing • Restorative",
        "Accessible • Therapeutic • Clear",
        "Private • Sanctuary • Supportive",
        "Equanimous • Quiet • Empathetic",
        "Deep-Breath • Safe • Healing"
      ]
    },
    "pet-care": {
      roots: ["Pawsome", "Canine", "Feline", "TailWag", "Bark", "Whiskers", "Fauna", "Kibble", "Paws", "Companion", "Haven", "Hound", "Nuzzle", "Fur", "PetVerve", "Noble"],
      modifiers: ["Pet Care", "Atelier", "Grooming", "Provisions", "Club", "Collective", "Sanctuary", "Wellness", "Co.", "Living"],
      compounds: ["PawsomeClub", "CanineHaven", "FaunaPet", "HoundAtelier", "NuzzleGrooming", "WhiskersProvisions", "NoblePet", "CompanionCare", "TailWagWellness", "BarkCollective", "FurSanctuary", "PetVerveCo"],
      rationales: [
        "Playful • Premium • Compassionate",
        "Veterinary-Approved • Gentle • Loving",
        "Tail-Wagging • Wholesome • Pure",
        "Artisanal • Hypoallergenic • Soft",
        "Companion-First • Reliable • Warm",
        "Nutritious • Gourmet • Healthy",
        "Spa-Grade • Pampered • Clean",
        "Modern • Breed-Specific • Caring"
      ]
    },
    "interior-design": {
      roots: ["Atelier", "Habitus", "Spatial", "Maison", "Earthen", "Arch", "Studio", "Forma", "Proportions", "Loom", "Terra", "Vesper", "Luxe", "Haven", "Aura", "Veritas"],
      modifiers: ["Interiors", "Studio", "Design Lab", "Atelier", "Living", "Spaces", "Architecture", "Collective", "Home", "Bespoke"],
      compounds: ["HabitusStudio", "SpatialAtelier", "FormaInteriors", "MaisonTerra", "ArchLiving", "ProportionsDesign", "LoomSpaces", "TerraHaven", "VesperHome", "AtelierAura", "VeritasInteriors", "EarthenHabitus"],
      rationales: [
        "Tactile • Monastic • Organic-Luxe",
        "Warm-Minimalist • Biophilic • Calm",
        "Architectural • Sculptural • Pure",
        "Curated • Bespoke • Harmonic",
        "Earthy • Stone & Wood • Textural",
        "Understated • Timeless • Balanced",
        "Tailored • Proportional • Refined",
        "Contemporary • Light-Filled • Serene"
      ]
    },
    "event-planning": {
      roots: ["Solstice", "Occasion", "Curated", "Aura", "Celebration", "Maison", "Verve", "Fete", "Gala", "Lumiere", "Elysian", "Affair", "Soiree", "Velvet", "Opus", "Ceremony"],
      modifiers: ["Events", "Weddings", "Experiences", "Atelier", "Productions", "Collective", "Design Co.", "Soirees", "Occasions", "Studio"],
      compounds: ["SolsticeEvents", "FeteAtelier", "CuratedAffair", "LumiereSoiree", "MaisonGala", "ElysianWeddings", "VelvetOccasion", "OpusProductions", "VerveCelebrations", "AuraExperiences", "CeremonyStudio", "FeteCollective"],
      rationales: [
        "Cinematic • Bespoke • Unforgettable",
        "Graceful • High-Touch • Seamless",
        "Romantic • Curated • Luxurious",
        "Tailored • Precision-Planned • Warm",
        "Vibrant • Immersive • Joyful",
        "Artisanal • Memorable • Polished",
        "Atmospheric • Elegant • Timeless",
        "Celebratory • Modern • Flawless"
      ]
    },
    "eco-travel": {
      roots: ["Wander", "Terra", "Haven", "Nomad", "Solstice", "Roam", "Earthen", "Wilderness", "Sanctuary", "Retreat", "Verdant", "Aura", "Drift", "Lodge", "Canopy", "Komorebi"],
      modifiers: ["Stays", "Travel", "Escapes", "Retreats", "Lodges", "Expeditions", "Sanctuaries", "Eco-Resorts", "Collective", "Outposts"],
      compounds: ["TerraHaven", "NomadRetreats", "WildCanopy", "WanderSanctuary", "SolsticeStays", "RoamLodges", "VerdantEscapes", "KomorebiRetreats", "CanopyOutposts", "EarthenLodges", "AuraExpeditions", "DriftStays"],
      rationales: [
        "Off-Grid • Regenerative • Biophilic",
        "Slow-Travel • Immersive • Earthen",
        "Wilderness • Mindful • Restorative",
        "Boutique • Low-Impact • Sacred",
        "Curated • Serene • Architectural",
        "Unplugged • Pristine • Soulful",
        "Sustainable • Elevated • Native",
        "Panoramic • Tranquil • Conscious"
      ]
    },
    "creator-media": {
      roots: ["Aura", "Wave", "Cast", "Signal", "Studio", "Chroma", "Echo", "Voice", "Current", "Lens", "Frequency", "Pulse", "Broadcast", "Prism", "Verve", "Fable"],
      modifiers: ["Media", "Podcasts", "Productions", "Studios", "Network", "Collective", "Content", "Audio", "Creative Lab", "Broadcast"],
      compounds: ["AuraCast", "SignalEcho", "ChromaMedia", "WaveCurrent", "LensFrequency", "PulseBroadcast", "PrismVoice", "VerveStudios", "FableNetwork", "EchoProductions", "CurrentMedia", "CastCollective"],
      rationales: [
        "High-Fidelity • Authentic • Resonant",
        "Culture-Shaping • Narrative • Crisp",
        "Unfiltered • Kinetic • Engaging",
        "Cinematic • Engaging • Viral",
        "Thought-Provoking • Sharp • Dynamic",
        "Episodic • Compelling • Clean",
        "Vibrant • Multichannel • Impactful",
        "Story-Driven • Sonically-Rich • Bold"
      ]
    },
    "ai-saas": {
      roots: ["Synapse", "Tensor", "Neural", "Exa", "Omni", "Quantum", "Nexus", "Aether", "Cortex", "Vector", "Optima", "Compute", "Logic", "Kestrel", "Prism", "Cognitive"],
      modifiers: ["AI", "Logic", "Systems", "Automation", "Labs", "Compute", "Dynamics", "Platform", "Intelligence", "Engine"],
      compounds: ["SynapseAI", "TensorLogic", "NexusCompute", "OmniCortex", "QuantumVector", "OptimaAutomation", "AetherNeural", "KestrelLogic", "ExaCompute", "NeuralNexus", "CognitiveEngine", "VectorLabs"],
      rationales: [
        "Algorithmic • Neural • Scalable",
        "Photonic • Next-Era • Latency-Zero",
        "Silicon • Protocol • High-Throughput",
        "Autonomous • Self-Optimizing • Crisp",
        "Enterprise • Predictive • Seamless",
        "Cognitive • Cloud-Native • Precision",
        "Intelligent • Deterministic • Fast",
        "Adaptive • High-Velocity • Pure"
      ]
    },
    "fintech-crypto": {
      roots: ["Ledger", "Apex", "Vault", "Solvent", "Prime", "Kite", "Fount", "Stasis", "Equiti", "Trust", "Yield", "Mint", "Cipher", "Sovereign", "Meridian", "Capital"],
      modifiers: ["Capital", "Pay", "Financial", "Vault", "Protocol", "Ledger", "Assets", "Exchange", "Technologies", "Credit"],
      compounds: ["ApexLedger", "VaultPrime", "CipherCapital", "SolventPay", "MeridianTrust", "YieldSovereign", "KiteFinancial", "StasisProtocol", "FountAssets", "MintCredit", "EquitiVault", "PrimeExchange"],
      rationales: [
        "Institutional-Grade • Solvent • Swift",
        "Decentralized • Immutable • Cryptographic",
        "Algorithmic • High-Yield • Protected",
        "Seamless • Frictionless • Modern",
        "Audited • Sovereign • Trust-Engine",
        "Next-Gen • Zero-Fee • Transparent",
        "Capital-Efficient • Secure • Fast",
        "Compliant • Sovereign • Robust"
      ]
    },
    "cybersecurity": {
      roots: ["Sentinel", "Shield", "Fortress", "Bastion", "Cipher", "Ironclad", "Aegis", "Vanguard", "ZeroTrust", "Parapet", "Kestrel", "Ward", "Crypta", "Bulwark", "Lock", "Enclave"],
      modifiers: ["Security", "Defense", "Cyber", "Labs", "Shield", "Threat Intel", "Technologies", "Protocol", "Systems", "Networks"],
      compounds: ["SentinelDefense", "BastionCyber", "AegisSecurity", "IroncladLabs", "CipherShield", "ZeroTrustSystems", "BulwarkNetworks", "VanguardProtocol", "CryptaEnclave", "FortressDefense", "WardSecurity", "ParapetLabs"],
      rationales: [
        "Zero-Trust • Military-Grade • Resilient",
        "Cryptographic • Hardened • Proactive",
        "Threat-Neutralizing • Quantum-Safe • Fast",
        "Defensive • Automated • Unbreachable",
        "Continuous • Air-Gapped • Secure",
        "Enterprise-Fortified • Vigilant • Pure",
        "Adaptive • Autonomous • Armored",
        "Kernel-Level • Immutable • Vigilant"
      ]
    },
    "edtech-learning": {
      roots: ["Scholar", "Cognitive", "Synapse", "Academy", "Pedagogy", "Luminary", "Mentor", "Ascend", "Brainwave", "Mastery", "Aethel", "Curio", "Knowledge", "Skill", "Nexus", "Insight"],
      modifiers: ["Learning", "Academy", "EdTech", "Institute", "Classrooms", "Interactive", "Skills", "Platform", "Labs", "Mastery"],
      compounds: ["CognitiveScholar", "AscendAcademy", "LuminaryLearn", "CurioEdTech", "MasterySkills", "SynapseClassrooms", "PedagogyLabs", "BrainwaveInstitute", "ScholarNexus", "MentorInteractive", "KnowledgeAscend", "InsightAcademy"],
      rationales: [
        "Pedagogical • Adaptive • Empowering",
        "Cognitive • Skill-First • Accelerated",
        "Gamified • Mastery-Based • Engaging",
        "Inclusive • Self-Paced • Transformative",
        "Intuitive • Career-Ready • Dynamic",
        "Evidence-Based • Mentorship • Inspiring",
        "Interactive • Immersive • Future-Proof",
        "Empowering • Insightful • Accessible"
      ]
    },
    "gaming-esports": {
      roots: ["Vortex", "Apex", "Nova", "Glitch", "Pulse", "Cyber", "Titan", "Rogue", "Respawn", "Pixel", "Havoc", "Hyper", "Overdrive", "Arcade", "Shadow", "Vector"],
      modifiers: ["Gaming", "Esports", "Studios", "Interactive", "Arena", "Clan", "Labs", "Play", "Worlds", "Protocol"],
      compounds: ["VortexEsports", "ApexGaming", "NovaStudios", "GlitchArena", "CyberHavoc", "TitanRespawn", "PixelOverdrive", "HyperGlitch", "RogueInteractive", "ShadowEsports", "ArcadeWorlds", "VectorPlay"],
      rationales: [
        "Low-Latency • High-FPS • Adrenaline",
        "Competitive • Immersive • Electric",
        "Cinematic • Unreal • Next-Gen",
        "Tactical • High-Stakes • Kinetic",
        "Esports-Ready • Cyber • Hyper-Charged",
        "Community-Driven • Dynamic • Sharp",
        "Uncompromising • Neon • Intense",
        "Multiplayer • Futuristic • Fast"
      ]
    },
    "developer-tools": {
      roots: ["Stack", "Kernel", "Compiler", "Daemon", "Byte", "Syntax", "Pipe", "Branch", "Commit", "Thread", "Prompt", "Binary", "Deploy", "Runtime", "Loom", "Terminal"],
      modifiers: ["Dev", "Tools", "Engine", "CLI", "Cloud", "Systems", "Labs", "Kit", "Infra", "Protocol"],
      compounds: ["StackKernel", "SyntaxCLI", "DeployLoom", "DaemonTools", "ByteCompiler", "RuntimeDev", "PipeInfra", "CommitCloud", "PromptTerminal", "BranchKit", "BinarySystems", "ThreadEngine"],
      rationales: [
        "Developer-First • High-Throughput • Clean",
        "Type-Safe • Low-Overhead • Declarative",
        "CLI-Native • Blazing-Fast • Modular",
        "Cloud-Native • Extensible • Ergonomic",
        "Zero-Config • Distributed • Resilient",
        "Open-Standard • Scalable • Expressive",
        "Deterministic • Frictionless • Powerful",
        "Automated • Git-Native • Intuitive"
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

  function generateProceduralSuggestedNames(niche = '', vibe = 'eco-organic', count = 8) {
    const dictKey = getNicheDictionaryKey(niche);
    const dict = NICHE_NAME_DICTIONARIES[dictKey] || NICHE_NAME_DICTIONARIES['coffee-chai'];

    const results = [];
    const used = new Set();

    const shuffledCompounds = [...dict.compounds].sort(() => 0.5 - Math.random());
    const shuffledRoots = [...dict.roots].sort(() => 0.5 - Math.random());
    const shuffledMods = [...dict.modifiers].sort(() => 0.5 - Math.random());
    const shuffledRationales = [...dict.rationales].sort(() => 0.5 - Math.random());

    // Helper to adapt based on Vibe
    function formatForVibe(name) {
      if (vibe === 'minimalist-luxury') {
        if (!name.startsWith('Maison') && !name.startsWith('Atelier') && !name.includes('&')) {
          return Math.random() > 0.5 ? `Maison ${name}` : `${name} Atelier`;
        }
      } else if (vibe === 'bold-genz') {
        return name.replace(/\s+/g, '');
      } else if (vibe === 'tech-futuristic') {
        if (!name.endsWith('Logic') && !name.endsWith('AI') && !name.endsWith('Labs')) {
          return Math.random() > 0.5 ? `${name} Labs` : name;
        }
      }
      return name;
    }

    // 1. Pick from compounds
    for (let i = 0; i < shuffledCompounds.length && results.length < 4; i++) {
      const raw = shuffledCompounds[i];
      const styled = formatForVibe(raw);
      const key = styled.toLowerCase();
      if (!used.has(key)) {
        used.add(key);
        results.push({
          name: styled,
          rationale: shuffledRationales[results.length % shuffledRationales.length]
        });
      }
    }

    // 2. Pair root + modifier
    for (let i = 0; i < shuffledRoots.length && results.length < count; i++) {
      const root = shuffledRoots[i];
      const mod = shuffledMods[i % shuffledMods.length];
      const raw = `${root} ${mod}`;
      const styled = formatForVibe(raw);
      const key = styled.toLowerCase();
      if (!used.has(key)) {
        used.add(key);
        results.push({
          name: styled,
          rationale: shuffledRationales[results.length % shuffledRationales.length]
        });
      }
    }

    return results.slice(0, count);
  }

  async function generateSuggestedNamesWithGemini(niche, vibe, audience) {
    const promptText = `
You are an elite Brand Naming Strategist & Trademark Clearance Specialist.
Generate exactly 8 distinct, highly brandable, creative business name ideas tailored to:
- Industry / Sector: "${niche}"
- Brand Vibe / Archetype: "${vibe}" (minimalist-luxury, bold-genz, eco-organic, tech-futuristic)
- Target Audience: "${audience}"

Naming Criteria:
- Names must be legally distinctive, memorable, and trademark-friendly (avoid generic dictionary terms alone).
- Provide diverse naming styles: coined, compound mark, archival/prestige mark, punchy short mark, evocative metaphor.
- For each name, provide a punchy 3-word rationale tag (e.g. "Restorative • Tactile • Grounding", "Electric • Kinetic • Bold").

Return a SINGLE valid JSON object matching this schema strictly:
{
  "names": [
    { "name": "BrandNameOne", "rationale": "Word1 • Word2 • Word3" },
    { "name": "BrandNameTwo", "rationale": "Word1 • Word2 • Word3" },
    { "name": "BrandNameThree", "rationale": "Word1 • Word2 • Word3" },
    { "name": "BrandNameFour", "rationale": "Word1 • Word2 • Word3" },
    { "name": "BrandNameFive", "rationale": "Word1 • Word2 • Word3" },
    { "name": "BrandNameSix", "rationale": "Word1 • Word2 • Word3" },
    { "name": "BrandNameSeven", "rationale": "Word1 • Word2 • Word3" },
    { "name": "BrandNameEight", "rationale": "Word1 • Word2 • Word3" }
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
      return parsed.names.slice(0, 8).map(item => ({
        name: (item.name || '').trim().replace(/^["']|["']$/g, ''),
        rationale: (item.rationale || 'Distinctive • Protectable • Evocative').trim()
      }));
    }
    throw new Error('Invalid names schema from Gemini response');
  }

  function renderSuggestedNames(namesList) {
    if (!elements.suggestedNamesList || !elements.nameSuggestionsTray) return;
    elements.suggestedNamesList.innerHTML = '';

    namesList.forEach((item) => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'name-pill';
      pill.setAttribute('data-name', item.name);
      pill.setAttribute('title', `Use "${item.name}" & check trademark clearance`);
      pill.innerHTML = `
        <span class="name-pill-text">${item.name}</span>
        <span class="name-pill-tag">${item.rationale}</span>
        <svg class="name-pill-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      `;

      pill.addEventListener('click', () => {
        if (elements.inputBrandName) {
          elements.inputBrandName.value = item.name;
          elements.inputBrandName.focus();
        }
        showToast(`Selected "${item.name}"! Auditing live QuickCompany & NICE Class clearance...`, 'info', 2500);
        handleCheckTrademark(item.name);
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
    if (elements.trademarkStatusCard) {
      elements.trademarkStatusCard.classList.add('hidden');
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
    const name = brand?.name || "BrandDNA Venture";
    const niche = brand?.industry || "Design";
    const audience = brand?.audience || "creatives";
    const cleanCode = ((name || 'DROP').replace(/[^A-Za-z]/g, '').slice(0, 6).toUpperCase() || 'LAUNCH') + '25';

    return {
      campaignTemplates: {
        launch: {
          kicker: "GLOBAL DROP • PHASE 01",
          headline: `Introducing ${name}: Redefining Modern ${niche.split('&')[0].trim()}.`,
          subtext: `Architected for ${audience.toLowerCase()}. Discover tactile intention, uncompromising poise, and modern aesthetic gravity.`,
          cta: "Shop Debut Collection ➔"
        },
        drop: {
          badge: "EXCLUSIVE ACCESS • 48 HRS ONLY",
          offer: "25% OFF FIRST ORDER",
          code: cleanCode,
          hook: `Unlock priority tier access for the ${name} debut. Enter promo code at checkout.`
        },
        testimonial: {
          quote: `“${name} is an extraordinary synthesis of purpose, tactile refinement, and singular vision. A revelation for the industry.”`,
          author: "Monocle & Atelier Review",
          title: "Senior Design Editor",
          rating: "★★★★★"
        }
      },
      taglineVault: {
        bold: `Command the standard. Own ${name}.`,
        minimal: `Quiet intention. Pure form.`,
        emotional: `Made for the moments that truly stay with you.`,
        playful: `Seriously exceptional craftsmanship for delightfully ambitious days.`
      }
    };
  }

  function renderCampaignTemplates(brand) {
    const kit = brand.campaignTemplates || getProceduralCampaignKit(brand).campaignTemplates;
    const launch = kit.launch || {};
    const drop = kit.drop || {};
    const test = kit.testimonial || {};

    const pPrimary = (brand.palette && brand.palette[0]?.hex) || '#2563EB';
    const pDark = (brand.palette && brand.palette[4]?.hex) || '#0F172A';

    const lightLogoHtml = brand.customLogoUrl
      ? `<img src="${brand.customLogoUrl}" alt="${brand.name}" style="max-height: 24px; max-width: 70px; object-fit: contain;">`
      : `<span style="font-family:'${cleanFontName(brand.headingFont)}', serif; font-weight: 800; font-size: 0.95rem; color: #FFFFFF;">${brand.name}</span>`;

    const darkLogoHtml = brand.customLogoUrl
      ? `<img src="${brand.customLogoUrl}" alt="${brand.name}" style="max-height: 24px; max-width: 70px; object-fit: contain;">`
      : `<span style="font-family:'${cleanFontName(brand.headingFont)}', serif; font-weight: 800; font-size: 0.95rem; color: ${pPrimary};">${brand.name}</span>`;

    // 1. Launch Banner
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

    const launchCard = document.getElementById('campaign-card-launch');
    if (launchCard) {
      launchCard.style.background = `linear-gradient(135deg, ${pDark}, #1E293B)`;
    }

    // 2. Drop Story Card
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

    const dropCard = document.getElementById('campaign-card-drop');
    if (dropCard) {
      dropCard.style.background = `linear-gradient(135deg, #0F172A, ${pPrimary})`;
    }

    // 3. Testimonial Card
    if (elements.campaignTestLogo) elements.campaignTestLogo.innerHTML = darkLogoHtml;
    if (elements.campaignTestRating) elements.campaignTestRating.textContent = test.rating || "★★★★★";
    if (elements.campaignTestQuote) {
      elements.campaignTestQuote.textContent = `“${(test.quote || '').replace(/^["“”']|["“”']$/g, '')}”`;
      elements.campaignTestQuote.style.fontFamily = `'${brand.fonts.heading}', serif`;
      elements.campaignTestQuote.style.borderLeftColor = pPrimary;
    }
    if (elements.campaignTestAuthor) elements.campaignTestAuthor.textContent = test.author || "Elena Vance";
    if (elements.campaignTestTitle) elements.campaignTestTitle.textContent = test.title || "Design Critic • Architectural Digest";
  }

  function renderTaglineVault(brand) {
    const vault = brand.taglineVault || getProceduralCampaignKit(brand).taglineVault;

    if (elements.taglineTextBold) {
      elements.taglineTextBold.textContent = vault.bold || `Command the standard. Own ${brand.name}.`;
      elements.taglineTextBold.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextMinimal) {
      elements.taglineTextMinimal.textContent = vault.minimal || `Quiet intention. Pure form.`;
      elements.taglineTextMinimal.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextEmotional) {
      elements.taglineTextEmotional.textContent = vault.emotional || `Made for the moments that truly stay with you.`;
      elements.taglineTextEmotional.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
    if (elements.taglineTextPlayful) {
      elements.taglineTextPlayful.textContent = vault.playful || `Seriously exceptional design for delightfully ambitious days.`;
      elements.taglineTextPlayful.style.fontFamily = `'${brand.fonts.heading}', serif`;
    }
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
          quote: `“${name} continues to set the benchmark in modern execution. Distinct, tactile, and immediately recognizable.”`,
          author: "Monocle Design Review",
          title: "Senior Contributing Editor",
          rating: "★★★★★"
        }
      },
      taglineVault: {
        bold: `Command the standard. Own ${name}.`,
        minimal: `Pure form. Uncompromising intention.`,
        emotional: `Crafted for the connections that outlast trends.`,
        playful: `Seriously exceptional design for delightfully ambitious ventures.`
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
      "quote": "Glowing editorial endorsement quote speaking to the craft",
      "author": "Publication or customer name",
      "title": "Critic or verified collector title",
      "rating": "★★★★★"
    }
  },
  "taglineVault": {
    "bold": "A bold, commanding, unapologetic tagline angle.",
    "minimal": "A quiet, poetic, minimalist tagline angle.",
    "emotional": "A deep, evocative, emotional tagline angle.",
    "playful": "A clever, witty, delightful tagline angle."
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

    if (elements.btnCheckTrademark) {
      elements.btnCheckTrademark.addEventListener('click', () => handleCheckTrademark());
    }

    if (elements.tmVerifyLink) {
      elements.tmVerifyLink.addEventListener('click', () => {
        const currentName = (elements.inputBrandName ? elements.inputBrandName.value.trim() : '') || 'Brand';
        elements.tmVerifyLink.href = `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(currentName)}`;
      });
    }

    if (elements.btnFetchQuickcompany) {
      elements.btnFetchQuickcompany.addEventListener('click', () => {
        const currentName = (elements.inputBrandName ? elements.inputBrandName.value.trim() : '');
        if (!currentName) {
          showToast('Enter a brand name to fetch QuickCompany filings', 'warning');
          if (elements.inputBrandName) elements.inputBrandName.focus();
          return;
        }
        showToast(`Fetching live records for "${currentName}" from QuickCompany...`, 'info', 2000);
        fetchAndRenderQuickCompany(currentName);
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

    // Campaign Templates Copy Buttons
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

    // Tagline Vault Copy Buttons
    if (elements.btnCopyTaglineBold) {
      elements.btnCopyTaglineBold.addEventListener('click', () => {
        const text = elements.taglineTextBold ? elements.taglineTextBold.textContent.trim() : '';
        if (text) copyToClipboard(text, 'Bold Tagline copied!');
      });
    }

    if (elements.btnCopyTaglineMinimal) {
      elements.btnCopyTaglineMinimal.addEventListener('click', () => {
        const text = elements.taglineTextMinimal ? elements.taglineTextMinimal.textContent.trim() : '';
        if (text) copyToClipboard(text, 'Minimal Tagline copied!');
      });
    }

    if (elements.btnCopyTaglineEmotional) {
      elements.btnCopyTaglineEmotional.addEventListener('click', () => {
        const text = elements.taglineTextEmotional ? elements.taglineTextEmotional.textContent.trim() : '';
        if (text) copyToClipboard(text, 'Emotional Tagline copied!');
      });
    }

    if (elements.btnCopyTaglinePlayful) {
      elements.btnCopyTaglinePlayful.addEventListener('click', () => {
        const text = elements.taglineTextPlayful ? elements.taglineTextPlayful.textContent.trim() : '';
        if (text) copyToClipboard(text, 'Playful Tagline copied!');
      });
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
