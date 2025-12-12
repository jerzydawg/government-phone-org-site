/**
 * Slug utilities for handling special characters in city names
 */

/**
 * Convert a city name to a URL-safe slug
 * Handles special characters like apostrophes, accents, hyphens, etc.
 */
export function createCitySlug(cityName) {
  if (!cityName) return '';
  
  return cityName
    // Handle accented characters (ñ → n, é → e, etc.)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    
    // Handle special characters
    .replace(/[''′]/g, '') // Remove various apostrophe types
    .replace(/[""″]/g, '') // Remove various quote types
    .replace(/[–—]/g, '-') // Convert various dashes to hyphens
    .replace(/\./g, '') // Remove periods (St. → St)
    .replace(/[^\w\s-]/g, '') // Remove all non-word chars except spaces and hyphens
    
    // Convert to lowercase and replace spaces with hyphens
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    
    // Clean up multiple hyphens
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Convert a slug back to a readable city name
 * Handles various formats including Township names
 */
export function slugToCityName(slug) {
  if (!slug) return '';
  
  // Convert slug to title case with spaces
  let cityName = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
  
  return cityName;
}

/**
 * Generate possible city name variations for database lookup
 * Returns array of possible names to try when looking up a city by slug
 */
export function generateCityNameVariationsForLookup(slug) {
  if (!slug) return [];
  
  const baseName = slugToCityName(slug);
  const variations = [baseName];
  
  // Split slug into words early for use throughout
  const hyphenWords = slug.split('-');
  
  // ============================================
  // HYPHENATED NAMES (keep hyphens from slug)
  // ============================================
  // "helena-west-helena" should try "Helena-West Helena"
  const hyphenatedName = hyphenWords
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
  if (hyphenatedName !== baseName) {
    variations.unshift(hyphenatedName);
  }
  
  // ============================================
  // ST. / STE. HANDLING
  // ============================================
  // "port-st-lucie" → "Port St. Lucie"
  // "ste-marie" → "Ste. Marie"
  if (/\bSt\b/i.test(baseName)) {
    variations.unshift(baseName.replace(/\bSt\b/gi, 'St.'));
  }
  if (/\bSte\b/i.test(baseName)) {
    variations.unshift(baseName.replace(/\bSte\b/gi, 'Ste.'));
  }
  // Also try "Saint" variation
  if (/\bSt\b/i.test(baseName)) {
    variations.push(baseName.replace(/\bSt\b/gi, 'Saint'));
  }
  
  // Combined St. with hyphenated
  if (hyphenatedName !== baseName) {
    if (/\bSt\b/i.test(hyphenatedName)) {
      variations.unshift(hyphenatedName.replace(/\bSt\b/gi, 'St.'));
    }
    if (/\bSte\b/i.test(hyphenatedName)) {
      variations.unshift(hyphenatedName.replace(/\bSte\b/gi, 'Ste.'));
    }
  }
  
  // ============================================
  // MT. HANDLING (Mt Bullion → Mt. Bullion)
  // ============================================
  if (/\bMt\b/i.test(baseName)) {
    variations.unshift(baseName.replace(/\bMt\b/gi, 'Mt.'));
  }
  
  // ============================================
  // APOSTROPHE HANDLING - O'Names
  // ============================================
  // "ofallon" → "O'Fallon"
  // "obrien" → "O'Brien"
  // "oneil" → "O'Neil" or "O'Neill"
  if (/^o[a-z]/i.test(baseName)) {
    const oApostrophe = baseName.replace(/^O([a-z])/i, (m, letter) => `O'${letter.toUpperCase()}`);
    variations.unshift(oApostrophe);
  }
  // Handle in middle of name: "Port Oconnor" → "Port O'Connor"
  if (/\sO[a-z]/i.test(baseName)) {
    const oApostrophe = baseName.replace(/\sO([a-z])/gi, (m, letter) => ` O'${letter.toUpperCase()}`);
    variations.unshift(oApostrophe);
  }
  
  // ============================================
  // APOSTROPHE HANDLING - Possessives (Lee's, Bailey's, etc.)
  // ============================================
  // "lees-summit" → "Lee's Summit"
  // "jacksons-gap" → "Jacksons' Gap"
  const words = baseName.split(' ');
  
  // Common possessive patterns
  const possessivePatterns = [
    { match: /^Lees$/i, replace: "Lee's" },
    { match: /^Baileys$/i, replace: "Bailey's" },
    { match: /^Jacksons$/i, replace: "Jacksons'" },
    { match: /^Martins$/i, replace: "Martin's" },
    { match: /^Devils$/i, replace: "Devils" }, // Keep as is (Devils Lake)
  ];
  
  for (const pattern of possessivePatterns) {
    if (pattern.match.test(words[0])) {
      const newWords = [pattern.replace, ...words.slice(1)];
      variations.unshift(newWords.join(' '));
    }
  }
  
  // Generic possessive: word ending in 's' might need apostrophe
  if (words[0] && words[0].endsWith('s') && words[0].length > 3) {
    // Try both possessive forms
    const withApostropheS = words[0].slice(0, -1) + "'s";
    const withApostrophe = words[0] + "'";
    variations.push([withApostropheS, ...words.slice(1)].join(' '));
    variations.push([withApostrophe, ...words.slice(1)].join(' '));
  }
  
  // ============================================
  // 'N' VARIATIONS (Town 'n' Country, etc.)
  // ============================================
  // "town-n-country" → "Town 'n' Country"
  // "hill-n-dale" → "Hill 'n Dale"
  if (/\bN\b/i.test(baseName)) {
    variations.unshift(baseName.replace(/\bN\b/gi, "'n'"));
    variations.unshift(baseName.replace(/\bN\b/gi, "'n"));
    variations.unshift(baseName.replace(/\bN\b/gi, "N'"));
  }
  
  // ============================================
  // SPANISH Ñ HANDLING
  // ============================================
  // "canon-city" → "Cañon City"
  // "cesar-chavez" → "César Chávez"
  const spanishPatterns = [
    { from: /\bCanon\b/gi, to: 'Cañon' },
    { from: /\bCesar\b/gi, to: 'César' },
    { from: /\bChavez\b/gi, to: 'Chávez' },
    { from: /\bPenasco\b/gi, to: 'Peñasco' },
    { from: /\bPinon\b/gi, to: 'Piñon' },
    { from: /\bCanada\b/gi, to: 'Cañada' },
    { from: /\bDona\b/gi, to: 'Doña' },
    { from: /\bEspanola\b/gi, to: 'Española' },
  ];
  
  for (const { from, to } of spanishPatterns) {
    if (from.test(baseName)) {
      variations.unshift(baseName.replace(from, to));
    }
  }
  
  // Handle combined Spanish patterns (César Chávez)
  let spanishCombined = baseName;
  for (const { from, to } of spanishPatterns) {
    spanishCombined = spanishCombined.replace(from, to);
  }
  if (spanishCombined !== baseName) {
    variations.unshift(spanishCombined);
  }
  
  // ============================================
  // PARENTHETICAL SUFFIXES
  // ============================================
  // Try with common parenthetical suffixes
  const suffixes = ['Township', 'CDP', 'Town', 'Village', 'City', 'Borough', 'Charter Township'];
  for (const suffix of suffixes) {
    variations.push(`${baseName} (${suffix})`);
    // Also try with St. variation
    if (/\bSt\b/i.test(baseName)) {
      variations.push(baseName.replace(/\bSt\b/gi, 'St.') + ` (${suffix})`);
    }
    if (/\bSte\b/i.test(baseName)) {
      variations.push(baseName.replace(/\bSte\b/gi, 'Ste.') + ` (${suffix})`);
    }
  }
  
  // Handle "X-township" slug pattern → "X (Township)"
  if (slug.endsWith('-township')) {
    const withoutTownship = slug.slice(0, -9); // Remove "-township"
    const cityPart = withoutTownship.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    variations.unshift(`${cityPart} (Township)`);
    // With St.
    if (/\bSt\b/i.test(cityPart)) {
      variations.unshift(cityPart.replace(/\bSt\b/gi, 'St.') + ' (Township)');
    }
    if (/\bSte\b/i.test(cityPart)) {
      variations.unshift(cityPart.replace(/\bSte\b/gi, 'Ste.') + ' (Township)');
    }
  }
  
  // ============================================
  // PARENTHETICAL ALTERNATE NAMES
  // ============================================
  // "fredonia-biscoe" → "Fredonia (Biscoe)"
  // "san-buenaventura-ventura" → "San Buenaventura (Ventura)"
  // "raymer-new-raymer" → "Raymer (New Raymer)"
  if (hyphenWords.length >= 2) {
    // Try last word(s) in parentheses
    for (let i = 1; i < hyphenWords.length; i++) {
      const mainPart = hyphenWords.slice(0, i).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const parenPart = hyphenWords.slice(i).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      variations.push(`${mainPart} (${parenPart})`);
    }
  }
  
  // ============================================
  // COMPLEX MULTI-HYPHEN NAMES
  // ============================================
  // "shorewood-tower-hills-harbert" → "Shorewood-Tower Hills-Harbert"
  // "encantada-ranchito-el-calaboz" → "Encantada-Ranchito-El Calaboz"
  // Try various combinations of hyphens and spaces
  if (hyphenWords.length >= 4) {
    // Pattern: First-Second Third-Fourth
    const complexPattern1 = hyphenWords[0].charAt(0).toUpperCase() + hyphenWords[0].slice(1) + '-' +
      hyphenWords[1].charAt(0).toUpperCase() + hyphenWords[1].slice(1) + ' ' +
      hyphenWords.slice(2).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-');
    variations.unshift(complexPattern1);
    
    // Pattern: First-Second Third Fourth
    const complexPattern2 = hyphenWords[0].charAt(0).toUpperCase() + hyphenWords[0].slice(1) + '-' +
      hyphenWords.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    variations.unshift(complexPattern2);
    
    // Pattern: First-Second-Third Fourth (hyphen on first 3, space before last)
    const complexPattern3 = hyphenWords.slice(0, -1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-') + ' ' +
      hyphenWords[hyphenWords.length - 1].charAt(0).toUpperCase() + hyphenWords[hyphenWords.length - 1].slice(1);
    variations.unshift(complexPattern3);
  }
  
  // ============================================
  // "-ON-" PATTERN (Fontana-on-Geneva Lake)
  // ============================================
  if (slug.includes('-on-')) {
    const onPattern = slug.replace(/-on-/g, '-on-')
      .split('-')
      .map((w, i) => w === 'on' ? 'on' : w.charAt(0).toUpperCase() + w.slice(1))
      .join('-')
      .replace(/-on-/g, '-on-');
    // "fontana-on-geneva-lake" → "Fontana-on-Geneva Lake"
    const parts = slug.split('-on-');
    if (parts.length === 2) {
      const before = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
      const afterWords = parts[1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      variations.unshift(`${before}-on-${afterWords}`);
    }
  }
  
  // ============================================
  // MULTI-HYPHEN-ELT NAMES (Qui-nai-elt)
  // ============================================
  // Keep all hyphens but add space before "Village" etc
  if (hyphenWords.length >= 3) {
    const lastWord = hyphenWords[hyphenWords.length - 1];
    if (['village', 'city', 'town', 'park', 'lake', 'ranch'].includes(lastWord.toLowerCase())) {
      const prefix = hyphenWords.slice(0, -1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-');
      const suffix = lastWord.charAt(0).toUpperCase() + lastWord.slice(1);
      variations.unshift(`${prefix} ${suffix}`);
    }
  }
  
  // ============================================
  // FRENCH APOSTROPHE (d'Iberville, L'Anse)
  // ============================================
  if (/\bD[a-z]/i.test(baseName)) {
    variations.unshift(baseName.replace(/\bD([a-z])/gi, (m, l) => `D'${l.toUpperCase()}`));
    variations.unshift(baseName.replace(/\bD([a-z])/gi, (m, l) => `d'${l.toUpperCase()}`));
  }
  if (/\bL[a-z]/i.test(baseName)) {
    variations.unshift(baseName.replace(/\bL([a-z])/gi, (m, l) => `L'${l.toUpperCase()}`));
  }
  
  // ============================================
  // E. AND H. ABBREVIATIONS
  // ============================================
  // "e-lopez" → "E. Lopez"
  // "h-cuellar-estates" → "H. Cuellar Estates"
  if (/^E\s/i.test(baseName)) {
    variations.unshift(baseName.replace(/^E\s/i, 'E. '));
  }
  if (/^H\s/i.test(baseName)) {
    variations.unshift(baseName.replace(/^H\s/i, 'H. '));
  }
  
  // ============================================
  // SPECIAL COMPOUND NAMES
  // ============================================
  // Handle special cases like "Ak Chin" → "Ak-Chin"
  const specialCases = {
    'ak chin village': 'Ak-Chin Village',
    'k bar ranch': 'K-Bar Ranch',
    'y o ranch': 'Y-O Ranch',
    'hide a way lake': 'Hide-A-Way Lake',
    'hide a way hills': 'Hide-A-Way Hills',
    'land o lakes': "Land O' Lakes",
    'land olakes': "Land O'Lakes",
    'chain o lakes': "Chain O' Lakes",
  };
  
  const lowerBase = baseName.toLowerCase();
  if (specialCases[lowerBase]) {
    variations.unshift(specialCases[lowerBase]);
  }
  
  // ============================================
  // HYPHENATED COMPOUND CITIES
  // ============================================
  // Many cities have hyphens in their actual names
  // "helena-west-helena" → "Helena-West Helena"
  // "parsippany-troy-hills" → "Parsippany-Troy Hills"
  // Try various hyphen placement combinations
  if (hyphenWords.length >= 3) {
    // Try: First-Second Third (hyphen after first word)
    const firstHyphen = hyphenWords[0].charAt(0).toUpperCase() + hyphenWords[0].slice(1) + '-' +
      hyphenWords.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    variations.unshift(firstHyphen);
    
    // Try: First-Second-Third (all hyphenated)
    const allHyphens = hyphenWords.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-');
    variations.unshift(allHyphens);
    
    // Try: First Second-Third (hyphen in middle)
    if (hyphenWords.length >= 3) {
      for (let i = 1; i < hyphenWords.length; i++) {
        const before = hyphenWords.slice(0, i).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const after = hyphenWords.slice(i).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        variations.push(`${before}-${after}`);
        variations.push(`${before} ${hyphenWords.slice(i).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-')}`);
      }
    }
  }
  
  // ============================================
  // AFB (Air Force Base) handling
  // ============================================
  if (/\bAfb\b/i.test(baseName)) {
    variations.unshift(baseName.replace(/\bAfb\b/gi, 'AFB'));
  }
  // Also try with hyphenated version
  if (/\bAfb\b/i.test(hyphenatedName)) {
    variations.unshift(hyphenatedName.replace(/\bAfb\b/gi, 'AFB'));
  }
  
  // Try exact case variations
  variations.push(baseName.toLowerCase());
  variations.push(baseName.toUpperCase());
  
  return [...new Set(variations)]; // Remove duplicates
}

/**
 * Create a database-friendly city name for querying
 */
export function createDatabaseCityName(cityName) {
  if (!cityName) return '';
  
  let normalized = cityName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[''′]/g, "'")
    .replace(/[""″]/g, '"')
    .trim();
  
  return normalized.replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * Generate multiple possible city names for database querying
 */
export function generateCityNameVariations(cityName) {
  if (!cityName) return [];
  
  const baseName = createDatabaseCityName(cityName);
  const variations = [baseName];
  
  if (baseName.includes("'")) {
    variations.push(baseName.replace(/'/g, ''));
  }
  
  if (baseName.includes('-')) {
    variations.push(baseName.replace(/-/g, ' '));
  }
  
  if (baseName.includes(' ') && !baseName.includes('-')) {
    variations.push(baseName.replace(/\s+/g, '-'));
  }
  
  variations.push(baseName.toLowerCase());
  variations.push(baseName.replace(/\b\w/g, c => c.toUpperCase()));
  
  return [...new Set(variations)];
}
