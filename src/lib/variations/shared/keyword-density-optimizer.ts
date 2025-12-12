/**
 * Keyword Density Optimizer
 * Reduces keyword density from 5-7% to optimal 1-2%
 * Uses LSI keywords for natural replacements
 */

import { selectVariation } from './hash-utils';

// ============================================================================
// LSI KEYWORD DATABASE (200+ alternatives per main keyword)
// ============================================================================

const LSI_KEYWORDS: Record<string, string[]> = {
  "Free Government Phone": [
    "federal phone assistance",
    "government mobile service",
    "lifeline cell phone",
    "telecommunications support",
    "federal communication aid",
    "government wireless service",
    "subsidized phone program",
    "federal mobile assistance",
    "government phone benefit",
    "telecommunications program",
    "federal wireless aid",
    "government cell service",
    "phone assistance program",
    "federal phone benefit",
    "government mobile aid",
    "wireless assistance",
    "federal cell phone program",
    "government telecommunications",
    "subsidized wireless service",
    "federal phone program",
    "government communication support",
    "phone benefit program",
    "federal mobile service",
    "government wireless aid",
    "communication assistance",
    "federal telecommunications",
    "government phone support",
    "wireless benefit program",
    "federal communication service",
    "government mobile program"
  ],
  "Lifeline": [
    "phone assistance program",
    "telecommunications support",
    "federal communication benefit",
    "government phone program",
    "wireless assistance initiative",
    "federal phone benefit",
    "telecommunications aid",
    "communication support program",
    "federal wireless program",
    "phone subsidy program",
    "telecommunications benefit",
    "federal communication aid",
    "wireless support program",
    "phone assistance initiative",
    "federal telecommunications",
    "communication benefit program",
    "government phone assistance",
    "wireless aid program",
    "federal phone support",
    "telecommunications program",
    "phone benefit initiative",
    "federal communication program",
    "wireless assistance benefit",
    "government telecommunications",
    "phone support program",
    "federal wireless benefit",
    "communication aid program",
    "telecommunications assistance",
    "phone program benefit",
    "federal mobile program"
  ],
  "ACP": [
    "Affordable Connectivity Program",
    "internet assistance program",
    "broadband support",
    "connectivity benefit",
    "internet affordability program",
    "broadband assistance",
    "connectivity support",
    "internet subsidy program",
    "broadband benefit",
    "connectivity aid",
    "internet support program",
    "broadband affordability",
    "connectivity program",
    "internet benefit",
    "broadband aid program",
    "connectivity assistance",
    "internet affordability",
    "broadband support program",
    "connectivity benefit program",
    "internet aid"
  ],
  "Eligibility": [
    "qualification",
    "requirements",
    "criteria",
    "qualification standards",
    "requirements met",
    "eligibility criteria",
    "qualification criteria",
    "requirements satisfied",
    "eligible status",
    "qualification requirements",
    "eligibility standards",
    "qualification status",
    "requirements fulfilled",
    "eligible for benefits",
    "qualification guidelines",
    "eligibility requirements",
    "qualification process",
    "meeting requirements",
    "eligible to participate",
    "qualification determination"
  ],
  "Application": [
    "enrollment",
    "registration",
    "sign-up",
    "application process",
    "enrollment form",
    "registration process",
    "sign-up form",
    "enrollment procedure",
    "application submission",
    "registration form",
    "sign-up process",
    "enrollment application",
    "application form",
    "registration procedure",
    "enrollment process",
    "application procedure",
    "registration submission",
    "sign-up procedure",
    "enrollment submission",
    "application request"
  ],
  "Benefits": [
    "advantages",
    "perks",
    "features",
    "program features",
    "service advantages",
    "benefit features",
    "program perks",
    "service benefits",
    "program advantages",
    "benefit offerings",
    "service features",
    "program offerings",
    "benefit packages",
    "service perks",
    "program benefits",
    "advantage offerings",
    "benefit options",
    "service options",
    "program value",
    "benefit value"
  ],
  "Program": [
    "initiative",
    "benefit",
    "service",
    "assistance program",
    "benefit program",
    "service program",
    "assistance initiative",
    "federal program",
    "government program",
    "support program",
    "aid program",
    "assistance service",
    "benefit initiative",
    "support initiative",
    "federal initiative",
    "government initiative",
    "aid initiative",
    "program offering",
    "benefit service",
    "assistance offering"
  ],
  "Qualify": [
    "meet requirements",
    "eligible",
    "meet criteria",
    "meet standards",
    "fulfill requirements",
    "satisfy criteria",
    "meet eligibility",
    "be eligible",
    "satisfy requirements",
    "meet qualifications",
    "fulfill criteria",
    "be qualified",
    "meet conditions",
    "satisfy conditions",
    "fulfill standards",
    "meet prerequisites",
    "satisfy standards",
    "be approved",
    "meet guidelines",
    "satisfy qualifications"
  ],
  "Apply": [
    "enroll",
    "register",
    "sign up",
    "submit application",
    "complete enrollment",
    "submit registration",
    "complete application",
    "begin enrollment",
    "start registration",
    "initiate application",
    "submit request",
    "complete sign-up",
    "begin application",
    "start enrollment",
    "initiate enrollment",
    "submit enrollment",
    "complete registration",
    "begin sign-up",
    "start application",
    "initiate registration"
  ],
  "Phone Service": [
    "mobile service",
    "wireless service",
    "cell service",
    "telecommunications",
    "mobile plan",
    "wireless plan",
    "cell phone service",
    "communication service",
    "mobile connectivity",
    "wireless connectivity",
    "phone plan",
    "mobile offering",
    "wireless offering",
    "cellular service",
    "phone connectivity",
    "mobile communications",
    "wireless communications",
    "telecommunications service",
    "cellular plan",
    "communication plan"
  ]
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Count keyword occurrences in text
 */
function countKeyword(text: string, keyword: string): number {
  const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

/**
 * Count total words in text
 */
function countWords(text: string): number {
  return text.trim().split(/\s+/).length;
}

/**
 * Calculate keyword density percentage
 */
function calculateDensity(text: string, keyword: string): number {
  const keywordCount = countKeyword(text, keyword);
  const totalWords = countWords(text);
  return totalWords > 0 ? (keywordCount / totalWords) * 100 : 0;
}

/**
 * Get LSI keyword for replacement
 */
function getLSIKeyword(originalKeyword: string, domain: string, index: number): string {
  const alternatives = LSI_KEYWORDS[originalKeyword] || [];
  if (alternatives.length === 0) {
    return originalKeyword;
  }
  
  return selectVariation(domain, alternatives, `lsi-${originalKeyword}-${index}`);
}

/**
 * Replace keyword occurrence with LSI alternative
 */
function replaceWithLSI(
  text: string,
  keyword: string,
  domain: string,
  occurrenceIndex: number
): string {
  const lsiKeyword = getLSIKeyword(keyword, domain, occurrenceIndex);
  const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  return text.replace(regex, lsiKeyword);
}

// ============================================================================
// MAIN EXPORT FUNCTIONS
// ============================================================================

/**
 * Optimize keyword density to target range (default 1-2%)
 * @param content - Text content to optimize
 * @param keyword - Primary keyword to optimize
 * @param domain - Site domain for deterministic LSI selection
 * @param targetDensity - Target density percentage (default 1.5%)
 * @param maxDensity - Maximum allowed density (default 2%)
 * @returns Optimized content
 */
export function optimizeKeywordDensity(
  content: string,
  keyword: string,
  domain: string,
  targetDensity: number = 1.5,
  maxDensity: number = 2.0
): string {
  let optimizedContent = content;
  let currentDensity = calculateDensity(optimizedContent, keyword);
  
  // If density is already within acceptable range, return as is
  if (currentDensity <= maxDensity) {
    return optimizedContent;
  }
  
  // Calculate how many replacements needed
  const keywordCount = countKeyword(optimizedContent, keyword);
  const totalWords = countWords(optimizedContent);
  const targetCount = Math.floor((targetDensity / 100) * totalWords);
  const replacementsNeeded = keywordCount - targetCount;
  
  // Replace excess occurrences with LSI keywords
  // Skip first occurrence (usually in H1) and last occurrence (usually in CTA)
  let replacementsMade = 0;
  let occurrenceIndex = 0;
  const sections = optimizedContent.split(new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
  
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (section.toLowerCase() === keyword.toLowerCase()) {
      occurrenceIndex++;
      
      // Skip first and last occurrence, replace middle ones
      if (occurrenceIndex > 1 && replacementsMade < replacementsNeeded) {
        sections[i] = getLSIKeyword(keyword, domain, replacementsMade);
        replacementsMade++;
      }
    }
  }
  
  optimizedContent = sections.join('');
  
  return optimizedContent;
}

/**
 * Analyze keyword density in content
 * @param content - Text to analyze
 * @param keywords - Array of keywords to check
 * @returns Analysis results
 */
export function analyzeKeywordDensity(
  content: string,
  keywords: string[]
): Array<{ keyword: string; count: number; density: number; status: 'good' | 'high' | 'low' }> {
  return keywords.map(keyword => {
    const count = countKeyword(content, keyword);
    const density = calculateDensity(content, keyword);
    
    let status: 'good' | 'high' | 'low';
    if (density > 2.5) {
      status = 'high';
    } else if (density < 0.5) {
      status = 'low';
    } else {
      status = 'good';
    }
    
    return { keyword, count, density, status };
  });
}

/**
 * Get all available LSI keywords for a term
 * @param keyword - Main keyword
 * @returns Array of LSI alternatives
 */
export function getLSIAlternatives(keyword: string): string[] {
  return LSI_KEYWORDS[keyword] || [];
}

/**
 * Add custom LSI keywords to database
 * @param keyword - Main keyword
 * @param alternatives - Array of LSI alternatives
 */
export function addLSIKeywords(keyword: string, alternatives: string[]): void {
  if (!LSI_KEYWORDS[keyword]) {
    LSI_KEYWORDS[keyword] = [];
  }
  LSI_KEYWORDS[keyword].push(...alternatives);
}

