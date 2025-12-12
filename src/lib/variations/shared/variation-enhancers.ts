/**
 * Variation Enhancers - Add small variations to multiply uniqueness
 * Turns 200 base variations into 1000+ unique combinations
 */

import { selectVariation } from './hash-utils';

/**
 * H1 formatting variants - adds subtle differences to base H1s
 * Each base H1 can be rendered in multiple ways
 */
const H1_FORMATS = [
  (h1: string) => h1, // Original
  (h1: string) => h1.endsWith('?') ? h1 : `${h1}!`, // Add emphasis
  (h1: string) => `${h1} | Get Started`, // Add suffix
  (h1: string) => h1.includes(':') ? h1 : `${h1}: Official Site`, // Add qualifier
  (h1: string) => `✓ ${h1}`, // Add checkmark (subtle visual difference)
];

/**
 * Meta title variants - adds prefixes/suffixes for uniqueness
 */
const META_TITLE_MODIFIERS = [
  (title: string) => title, // Original
  (title: string) => `${title} | 2024`, // Add year
  (title: string) => `${title} - Official`, // Add official
  (title: string) => `✓ ${title}`, // Add checkmark
  (title: string) => `${title} | Apply Today`, // Add CTA
];

/**
 * Meta description variants - adds introductory phrases
 */
const META_DESC_INTROS = [
  '', // No intro
  'Official Site: ', // Official intro
  'Verified Program: ', // Verified intro
  'Start Today: ', // Action intro
  'Limited Time: ', // Urgency intro
];

/**
 * Enhance H1 with subtle variations
 * @param baseH1 - Original H1 from variations
 * @param domain - Site domain for consistent selection
 * @returns Enhanced H1 with subtle formatting
 */
export function enhanceH1(baseH1: string, domain: string): string {
  // Select formatting variant based on domain
  const format = selectVariation(domain, H1_FORMATS, 'h1-format');
  const enhanced = format(baseH1);
  
  // Remove duplicate punctuation if created
  return enhanced.replace(/([!?.])\1+/g, '$1');
}

/**
 * Enhance meta title with subtle variations
 * @param baseTitle - Original title from variations
 * @param domain - Site domain for consistent selection
 * @returns Enhanced title
 */
export function enhanceMetaTitle(baseTitle: string, domain: string): string {
  const modifier = selectVariation(domain, META_TITLE_MODIFIERS, 'meta-title-modifier');
  return modifier(baseTitle);
}

/**
 * Enhance meta description with subtle variations
 * @param baseDesc - Original description from variations
 * @param domain - Site domain for consistent selection
 * @returns Enhanced description
 */
export function enhanceMetaDescription(baseDesc: string, domain: string): string {
  const intro = selectVariation(domain, META_DESC_INTROS, 'meta-desc-intro');
  return `${intro}${baseDesc}`;
}

/**
 * Inject site name into content for uniqueness
 * @param content - Original content
 * @param siteName - Site name to inject
 * @param domain - Domain for consistent placement
 * @returns Content with site name contextually inserted
 */
export function injectSiteName(content: string, siteName: string, domain: string): string {
  // Use domain hash to decide if/where to inject site name
  const hash = domain.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const shouldInject = hash % 3 === 0; // Inject in 33% of cases
  
  if (!shouldInject || !siteName) return content;
  
  // Inject at the end with a separator
  const separators = ['at', 'with', 'via', 'through'];
  const separator = separators[hash % separators.length];
  
  return `${content} ${separator} ${siteName}`;
}

/**
 * Apply all enhancements to H1
 * @param baseH1 - Original H1
 * @param domain - Site domain
 * @param siteName - Optional site name
 * @returns Fully enhanced H1
 */
export function applyH1Enhancements(
  baseH1: string, 
  domain: string, 
  siteName?: string
): string {
  let enhanced = enhanceH1(baseH1, domain);
  
  // Optionally inject site name (only in some cases)
  if (siteName) {
    enhanced = injectSiteName(enhanced, siteName, domain);
  }
  
  return enhanced;
}

/**
 * Calculate total unique combinations possible
 * @param baseVariations - Number of base variations
 * @returns Total unique combinations
 */
export function calculateUniqueCapacity(baseVariations: number): {
  withFormatting: number;
  withSiteNames: number;
  theoretical: number;
} {
  return {
    withFormatting: baseVariations * H1_FORMATS.length, // 200 × 5 = 1,000
    withSiteNames: baseVariations * H1_FORMATS.length * 2, // × 2 for inject/no inject = 2,000
    theoretical: baseVariations * H1_FORMATS.length * 4, // × 4 for separator variants = 4,000
  };
}




