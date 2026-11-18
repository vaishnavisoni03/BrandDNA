/**
 * Netlify Serverless Function: Trademark Conflict Checker
 * Path: netlify/functions/trademark.mjs
 * 
 * Maps niche to Indian NICE Trademark Class (1–45), queries QuickCompany's live
 * Indian trademark database (https://www.quickcompany.in/trademarks?q=...), cross-checks
 * against a 100+ verified major Indian & global trademark database, and uses Google
 * Gemini 3.8 Flash (with fallback to gemini-1.5-flash and smart procedural synthesis)
 * to evaluate identical and phonetic conflicts against Indian & global registered trademarks.
 */

// Comprehensive NICE Trademark Classification Dictionary (Classes 1–45)
export const NICE_CLASSES = {
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
  games: { classNum: 28, label: "Class 28", desc: "Games, toys, video game apparatus & sporting equipment" },
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

export function mapNicheToNiceClass(niche = '') {
  const s = (niche || '').toLowerCase();

  if (s.includes('coffee') || s.includes('chai') || s.includes('tea') || s.includes('bakery') || s.includes('kitchen') || s.includes('cafe')) {
    return NICE_CLASSES.staples; // Class 30
  }
  if (s.includes('spirit') || s.includes('wine') || s.includes('ferment') || s.includes('alcohol') || s.includes('brew')) {
    return NICE_CLASSES.spirits; // Class 33
  }
  if (s.includes('beverage') || s.includes('tonic') || s.includes('juice') || s.includes('water') || s.includes('kombucha')) {
    return NICE_CLASSES.beverages; // Class 32
  }
  if (s.includes('clothing') || s.includes('apparel') || s.includes('streetwear') || s.includes('fashion') || s.includes('wear')) {
    return NICE_CLASSES.apparel; // Class 25
  }
  if (s.includes('jewelry') || s.includes('watch') || s.includes('gem') || s.includes('gold') || s.includes('silver')) {
    return NICE_CLASSES.jewelry; // Class 14
  }
  if (s.includes('leather') || s.includes('bag') || s.includes('luggage') || s.includes('travel gear')) {
    return NICE_CLASSES.leather; // Class 18
  }
  if (s.includes('skincare') || s.includes('cosmetic') || s.includes('beauty') || s.includes('perfume') || s.includes('soap')) {
    return NICE_CLASSES.cosmetics; // Class 3
  }
  if (s.includes('adaptogen') || s.includes('wellness') || s.includes('pharma') || s.includes('supplement')) {
    return NICE_CLASSES.pharma; // Class 5
  }
  if (s.includes('saas') || s.includes('ai') || s.includes('automation') || s.includes('developer') || s.includes('cloud') || s.includes('cyber')) {
    return NICE_CLASSES.saas; // Class 42
  }
  if (s.includes('fintech') || s.includes('crypto') || s.includes('bank') || s.includes('invest') || s.includes('finance')) {
    return NICE_CLASSES.fintech; // Class 36
  }
  if (s.includes('gaming') || s.includes('esport') || s.includes('game') || s.includes('toy')) {
    return NICE_CLASSES.games; // Class 28
  }
  if (s.includes('podcast') || s.includes('media') || s.includes('edtech') || s.includes('learning') || s.includes('entertainment') || s.includes('creator')) {
    return NICE_CLASSES.education; // Class 41
  }
  if (s.includes('furniture') || s.includes('home') || s.includes('decor') || s.includes('interior')) {
    return NICE_CLASSES.furniture; // Class 20
  }
  if (s.includes('hospitality') || s.includes('hotel') || s.includes('retreat') || s.includes('stay') || s.includes('travel')) {
    return NICE_CLASSES.hospitality; // Class 43
  }
  if (s.includes('agency') || s.includes('marketing') || s.includes('retail') || s.includes('commerce') || s.includes('store') || s.includes('pet')) {
    return NICE_CLASSES.retail; // Class 35
  }

  return NICE_CLASSES.tech;
}

// 100+ Verified Major Indian & Global Registered Trademarks Database
export const MAJOR_TRADEMARKS_DATABASE = [
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

export function checkDatabaseTrademarkCollision(brandName) {
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

// Live QuickCompany Indian Trademark Search Scraper & Query Engine
export function parseQuickCompanyResults(html = '', query = '') {
  const matches = [];
  if (!html || typeof html !== 'string') return matches;

  const seen = new Set();

  // Pattern 1: Links to /trademarks/<id>-<slug>
  const linkRegex = /<a[^>]+href=["'](\/trademarks\/([0-9]+)-([^"']+))["'][^>]*>([\s\S]*?)<\/a>/gi;
  let linkMatch;

  while ((linkMatch = linkRegex.exec(html)) !== null && matches.length < 8) {
    const relativeUrl = linkMatch[1];
    const appNumber = linkMatch[2];
    let rawTitle = linkMatch[4]
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!rawTitle || rawTitle.length < 2) continue;
    const lower = rawTitle.toLowerCase();
    if (lower.includes('view all') || lower.includes('quickcompany') || lower.includes('trademark search') || lower.includes('filter')) {
      continue;
    }

    if (seen.has(lower)) continue;
    seen.add(lower);

    // Surrounding context for Class, Status, and Applicant
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

  // Pattern 2 Fallback: Table or Card structure if pattern 1 returned empty
  if (matches.length === 0) {
    const cardRegex = /class=["'][^"']*trademark[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi;
    let cardMatch;
    while ((cardMatch = cardRegex.exec(html)) !== null && matches.length < 3) {
      const cardContent = cardMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (cardContent.length > 3 && cardContent.length < 80) {
        matches.push({
          name: cardContent.slice(0, 40),
          trademarkClass: 'Indian Class',
          status: 'Live Filing',
          applicant: null,
          url: `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(query)}`
        });
      }
    }
  }

  return matches;
}

export async function queryQuickCompanyTrademarks(brandName = '') {
  const query = (brandName || '').trim();
  if (!query) return [];

  const targetUrl = `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(query)}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4-second resilient timeout

    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`QuickCompany live search returned HTTP ${response.status}`);
      return [];
    }

    const html = await response.text();
    return parseQuickCompanyResults(html, query);
  } catch (err) {
    console.warn('QuickCompany live query error / timeout:', err.message);
    return [];
  }
}

// Live Wikidata / Wikipedia Global Entity & Trademark Search Engine (CORS-friendly OpenSearch API)
export async function queryWikipediaBrandSearch(brandName = '') {
  const query = (brandName || '').trim();
  if (!query) return [];

  const targetUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=5&format=json&origin=*`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4-second timeout

    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'BrandDNA-Studio/2.0 (Trademark Conflict Checker)',
        'Accept': 'application/json'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`Wikipedia OpenSearch returned HTTP ${response.status}`);
      return [];
    }

    const data = await response.json();
    if (!Array.isArray(data) || data.length < 4) return [];

    const [, titles, descs, urls] = data;
    const matches = [];

    const commercialKeywords = /\b(company|startup|brand|business|corporation|firm|enterprise|retail|retailer|conglomerate|platform|app|application|service|software|chain|store|manufacturer|brewery|patisserie|restaurant|e-commerce|fintech|agency|holdings|inc|ltd|llc|pvt|co\.)\b/i;

    const cleanQuery = query.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < Math.min(titles.length, 5); i++) {
      const title = titles[i] || '';
      if (!title) continue;

      let desc = (descs[i] || '').trim();
      const url = urls[i] || `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;
      const cleanTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '');

      const isExactMatch = cleanTitle === cleanQuery || title.toLowerCase() === query.toLowerCase();
      const isPartialMatch = cleanTitle.includes(cleanQuery) || cleanQuery.includes(cleanTitle);

      // If description was empty, attempt quick REST summary fetch for exact or top titles
      if (!desc && (isExactMatch || i < 2)) {
        try {
          const sumCtrl = new AbortController();
          const sumTimeout = setTimeout(() => sumCtrl.abort(), 2000);
          const sumRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`, {
            signal: sumCtrl.signal,
            headers: { 'User-Agent': 'BrandDNA-Studio/2.0' }
          });
          clearTimeout(sumTimeout);
          if (sumRes.ok) {
            const sumJson = await sumRes.json();
            desc = sumJson.description || (sumJson.extract ? sumJson.extract.slice(0, 160) : '');
          }
        } catch (sumErr) {
          // Ignore summary fetch timeout/error
        }
      }

      const isCommercial = commercialKeywords.test(desc) || commercialKeywords.test(title);

      if (isExactMatch || isCommercial || isPartialMatch) {
        matches.push({
          title,
          description: desc || 'Wikipedia global entity entry',
          url,
          isExactMatch,
          isCommercial
        });
      }
    }

    return matches;
  } catch (err) {
    console.warn('Wikipedia brand search query error / timeout:', err.message);
    return [];
  }
}

// Procedural Trademark Conflict Evaluator (for offline, demo, or fallback)
export function evaluateProceduralTrademark(brandName = '', niche = '', liveMatches = [], wikiMatches = []) {
  const cleanName = (brandName || '').trim();
  const lower = cleanName.toLowerCase().replace(/[^a-z0-9]/g, '');
  const nice = mapNicheToNiceClass(niche);

  const conflicts = [];
  let status = 'Clear';

  // 1. Comprehensive Check against 100+ Major Trademarks Database
  const dbMatch = checkDatabaseTrademarkCollision(cleanName);
  if (dbMatch) {
    status = 'Conflict';
    conflicts.push({
      name: `${dbMatch.matchedBrand} (Registered to ${dbMatch.owner})`,
      reason: dbMatch.reason
    });
  }

  // 2. Check live Wikipedia / Wikidata global entity records
  if (Array.isArray(wikiMatches) && wikiMatches.length > 0) {
    wikiMatches.forEach(wiki => {
      if (wiki.isExactMatch && wiki.isCommercial) {
        status = 'Conflict';
        conflicts.unshift({
          name: `${wiki.title} (Live Global Entity / Brand Record)`,
          reason: `Existing registered commercial company or brand identified via global encyclopedia & entity archives: "${wiki.description}". Direct trademark conflict.`
        });
      } else if (wiki.isExactMatch) {
        if (status !== 'Conflict') status = 'Caution';
        conflicts.push({
          name: `${wiki.title} (Global Entity Record)`,
          reason: `Exact title match with existing public global entity: "${wiki.description}". May face prior-use objection.`
        });
      } else if (wiki.isCommercial) {
        if (status === 'Clear') status = 'Caution';
        conflicts.push({
          name: `${wiki.title} (Commercial Entity Overlap)`,
          reason: `Phonetically / conceptually similar commercial entity operating: "${wiki.description}".`
        });
      }
    });
  }

  // 3. Check live QuickCompany matches if available
  if (Array.isArray(liveMatches) && liveMatches.length > 0) {
    liveMatches.forEach(live => {
      const liveName = (live.name || '').trim();
      const isExact = liveName.toLowerCase() === cleanName.toLowerCase();
      const isPartial = liveName.toLowerCase().includes(cleanName.toLowerCase()) || cleanName.toLowerCase().includes(liveName.toLowerCase());

      if (isExact || isPartial) {
        conflicts.unshift({
          name: `${liveName} (QuickCompany Live Indian Filing)`,
          reason: `Found active IP India record in ${live.trademarkClass || nice.label} with status "${live.status || 'Active'}"${live.applicant ? ` filed by ${live.applicant}` : ''}.`
        });
        if (status !== 'Conflict') {
          status = (isExact || (live.status && live.status.toLowerCase().includes('registered'))) ? 'Conflict' : 'Caution';
        }
      }
    });
  }

  // 4. Check phonetic / generic caution terms
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

  // 5. Smart Alternative Generator based on niche
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
    quickCompanyUrl: `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(cleanName)}`,
    quickCompanyMatches: liveMatches || [],
    wikiMatches: wikiMatches || []
  };
}

export default async (req, context) => {
  // 1. CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, x-goog-api-key, Authorization'
      }
    });
  }

  // 2. Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed. Use POST.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  let brandName = '';
  let niche = '';
  let clientApiKey = '';

  try {
    const body = await req.json();
    brandName = (body.brandName || '').trim();
    niche = (body.niche || '').trim();
    clientApiKey = (body.apiKey || '').trim();
  } catch (e) {
    return new Response(JSON.stringify(evaluateProceduralTrademark("BrandDNA", "Creative")), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  if (!brandName) {
    return new Response(JSON.stringify({ error: 'brandName is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  const niceClass = mapNicheToNiceClass(niche);

  // 3. Direct 100+ Trademark DB Collision Check
  const dbMatch = checkDatabaseTrademarkCollision(brandName);

  // 4. Query QuickCompany live database and Wikipedia/Wikidata in parallel
  const [liveMatches, wikiMatches] = await Promise.all([
    queryQuickCompanyTrademarks(brandName),
    queryWikipediaBrandSearch(brandName)
  ]);

  // 5. Check for API key
  const serverApiKey = (typeof process !== 'undefined' && process.env ? process.env.GEMINI_API_KEY : null)
    || (typeof Netlify !== 'undefined' && Netlify.env ? Netlify.env.get('GEMINI_API_KEY') : null);

  const activeApiKey = clientApiKey || serverApiKey;

  // If no API key configured, use procedural synthesis incorporating live QuickCompany, Wikipedia hits & DB collision
  if (!activeApiKey) {
    const proceduralResult = evaluateProceduralTrademark(brandName, niche, liveMatches, wikiMatches);
    return new Response(JSON.stringify(proceduralResult), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  // 6. Construct AI Prompt for Gemini 3.8 Flash with QuickCompany, Wikipedia & DB context
  let liveContextSection = '';
  if (liveMatches && liveMatches.length > 0) {
    liveContextSection = `
LIVE QUICKCOMPANY (IP INDIA) DATABASE SEARCH RESULTS:
${liveMatches.map(m => `- Mark: "${m.name}" | Class: ${m.trademarkClass} | Status: ${m.status}${m.applicant ? ` | Applicant: ${m.applicant}` : ''}`).join('\n')}

INSTRUCTIONS REGARDING LIVE QUICKCOMPANY DATA:
- Incorporate any direct, identical, or closely confusing matches from the QuickCompany results above into the "conflicts" array.
- If an exact or near-identical mark is registered or active on QuickCompany in this or related classes, mark status as "Conflict".
`;
  }

  let wikiContextSection = '';
  if (wikiMatches && wikiMatches.length > 0) {
    wikiContextSection = `
LIVE WIKIDATA / WIKIPEDIA BRAND & ENTITY RECORDS:
${wikiMatches.map(m => `- "${m.title}": ${m.description} [Commercial Entity: ${m.isCommercial ? 'Yes' : 'Unconfirmed'}]`).join('\n')}

INSTRUCTIONS REGARDING LIVE WIKIPEDIA / WIKIDATA RECORDS:
- If "${brandName}" matches or sounds like an active company, startup, D2C brand, mobile app, or platform found above, mark status as "Conflict" and identify the real-world operating company.
`;
  }

  let dbContextSection = '';
  if (dbMatch) {
    dbContextSection = `
CRITICAL REGISTERED TRADEMARK COLLISION DETECTED:
The name "${brandName}" matches existing registered brand "${dbMatch.matchedBrand}" owned by "${dbMatch.owner}" (Primary Classes: ${dbMatch.primaryClasses.join(', ')}).
You MUST set status to "Conflict", include this registered owner in the conflicts array, and provide 3 distinctive coined alternative names.
`;
  }

  const promptText = `
You are a senior Intellectual Property & Trademark Attorney specializing in Indian Trademark Law (Controller General of Patents, Designs and Trade Marks / IP India) and QuickCompany live registry audits.

Evaluate trademark registration availability, phonetic similarity, and conflict risk for:
- Proposed Brand Name: "${brandName}"
- Sector / Niche: "${niche}"
- Mapped NICE Trademark Class: "${niceClass.label}: ${niceClass.desc}"
${dbContextSection}
${liveContextSection}
${wikiContextSection}
Analyze:
1. Identical conflicts with existing registered Indian & global trademarks in this NICE Class or closely related classes (e.g. Zomato, Swiggy, Chaayos, Chai Point, Blue Tokai, Starbucks, Nykaa, Mamaearth, Sugar, boAt, Noise, Zepto, Blinkit, Razorpay, Paytm, Nike, Apple, Zara, Snitch, Lenskart, Dunzo, Zerodha, Tata, Reliance, etc.).
2. Real-world existence: Check if this name belongs to any existing company, startup, D2C brand, app, or registered mark—returning Conflict (if an exact brand/company exists), Caution (if similar phonetic names exist), or Clear (only if genuinely unused), along with the real owner/industry found.
3. Phonetic / Sound-alike conflicts (e.g. Kaffe vs Cafe, Nyke vs Nike, BoAt vs Boat, etc.).
4. Deceptiveness or Section 9 absolute grounds of refusal under Indian Trade Marks Act 1999 (descriptiveness, laudatory terms, generic words).

Return a SINGLE valid JSON object matching this schema strictly:
{
  "status": "Clear" | "Caution" | "Conflict",
  "trademarkClass": "${niceClass.label}",
  "classDesc": "${niceClass.desc}",
  "conflicts": [
    {
      "name": "Existing Conflicting Mark, Company or Legal Ground (including owner/industry)",
      "reason": "Clear explanation of identical/phonetic overlap, commercial company existence, or Section 9 objection"
    }
  ],
  "alternatives": [
    "CoinedDistinctiveAlternative1",
    "CoinedDistinctiveAlternative2",
    "CoinedDistinctiveAlternative3"
  ]
}

Rules:
- If there is an active, identical or direct commercial collision found on QuickCompany, Wikipedia, or known registry (or noted above), status MUST be "Conflict".
- If the word is crowded, descriptive, or has borderline phonetic similarity, status MUST be "Caution".
- If the mark is distinctive, coined, or clear of notable collisions, status MUST be "Clear" (and conflicts array should be empty []).
- "alternatives" must be 3 legally strong, distinctive, protectable coined names tailored to the niche.
- Do NOT include markdown code blocks other than raw JSON.
`;

  try {
    const primaryUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent';
    const payload = {
      contents: [{
        parts: [{ text: promptText }]
      }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: 'application/json'
      }
    };

    let response = await fetch(primaryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': activeApiKey
      },
      body: JSON.stringify(payload)
    });

    if (response.status === 404) {
      console.warn('gemini-3.8-flash returned 404, falling back to gemini-1.5-flash');
      const fallbackUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
      response = await fetch(fallbackUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': activeApiKey
        },
        body: JSON.stringify(payload)
      });
    }

    if (!response.ok) {
      console.warn('Gemini API call returned non-OK status:', response.status);
      const fallback = evaluateProceduralTrademark(brandName, niche, liveMatches, wikiMatches);
      return new Response(JSON.stringify(fallback), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    const data = await response.json();
    let rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      throw new Error('No candidate content returned');
    }

    rawText = rawText.trim();
    if (rawText.startsWith('```json')) rawText = rawText.slice(7);
    else if (rawText.startsWith('```')) rawText = rawText.slice(3);
    if (rawText.endsWith('```')) rawText = rawText.slice(0, -3);

    const parsed = JSON.parse(rawText.trim());

    // Normalize output structure
    let finalStatus = ['Clear', 'Caution', 'Conflict'].includes(parsed.status) ? parsed.status : 'Clear';
    const conflictsList = Array.isArray(parsed.conflicts) ? parsed.conflicts : [];

    // ENFORCE 100+ DATABASE COLLISION: If matched in registry DB, status MUST be Conflict
    if (dbMatch) {
      finalStatus = 'Conflict';
      const alreadyPresent = conflictsList.some(c => c.name.toLowerCase().includes(dbMatch.matchedBrand.toLowerCase()));
      if (!alreadyPresent) {
        conflictsList.unshift({
          name: `${dbMatch.matchedBrand} (Registered to ${dbMatch.owner})`,
          reason: dbMatch.reason
        });
      }
    }

    // ENFORCE WIKIPEDIA COMMERCIAL ENTITY COLLISION: If real-world company/brand matches, status MUST be Conflict
    if (wikiMatches && wikiMatches.length > 0) {
      wikiMatches.forEach(wiki => {
        const already = conflictsList.some(c => c.name.toLowerCase().includes(wiki.title.toLowerCase()));
        if (wiki.isExactMatch && wiki.isCommercial) {
          finalStatus = 'Conflict';
          if (!already) {
            conflictsList.unshift({
              name: `${wiki.title} (Live Global Entity / Brand Record)`,
              reason: `Existing registered commercial company or brand identified: "${wiki.description}". Direct trademark conflict.`
            });
          }
        } else if (wiki.isExactMatch && !already) {
          if (finalStatus !== 'Conflict') finalStatus = 'Caution';
          conflictsList.push({
            name: `${wiki.title} (Global Entity Record)`,
            reason: `Exact match with public global entity: "${wiki.description}". Potential prior-use objection.`
          });
        }
      });
    }

    // Guarantee any live QuickCompany matches are merged into conflicts
    if (liveMatches && liveMatches.length > 0) {
      liveMatches.forEach(live => {
        const liveName = live.name.trim();
        const isExact = liveName.toLowerCase() === brandName.toLowerCase();
        const isPartial = liveName.toLowerCase().includes(brandName.toLowerCase()) || brandName.toLowerCase().includes(liveName.toLowerCase());

        const alreadyPresent = conflictsList.some(c => c.name.toLowerCase().includes(liveName.toLowerCase()));

        if (!alreadyPresent && (isExact || isPartial)) {
          conflictsList.unshift({
            name: `${liveName} (QuickCompany Live Indian Filing)`,
            reason: `Found active IP India record in ${live.trademarkClass} with status "${live.status}"${live.applicant ? ` by ${live.applicant}` : ''}.`
          });
          if (finalStatus === 'Clear') {
            finalStatus = (isExact || live.status.toLowerCase().includes('registered')) ? 'Conflict' : 'Caution';
          }
        }
      });
    }

    const result = {
      status: finalStatus,
      statusLabel: finalStatus === 'Conflict' ? 'Conflict — Existing Trademark Detected' : (finalStatus === 'Caution' ? 'Caution — Potential Overlap' : 'Clear — High Likelihood of Registration'),
      trademarkClass: parsed.trademarkClass || niceClass.label,
      classDesc: parsed.classDesc || niceClass.desc,
      conflicts: conflictsList,
      alternatives: Array.isArray(parsed.alternatives) && parsed.alternatives.length >= 3
        ? parsed.alternatives.slice(0, 3)
        : evaluateProceduralTrademark(brandName, niche, liveMatches, wikiMatches).alternatives,
      quickCompanyUrl: `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(brandName)}`,
      quickCompanyMatches: liveMatches || [],
      wikiMatches: wikiMatches || []
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });

  } catch (err) {
    console.error('Trademark AI analysis error, using smart procedural fallback:', err);
    const fallback = evaluateProceduralTrademark(brandName, niche, liveMatches, wikiMatches);
    return new Response(JSON.stringify(fallback), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
};
