/**
 * CTA Button Text Variations (Shared Across All Keywords)
 * High-converting call-to-action text variations for government benefit sites
 */

import { selectVariation } from './hash-utils';

// Conversion-Optimized CTA Variations (Title Case, No All-Caps)
// 30 variations for maximum diversity across 200+ sites
const CTA_TEXTS = [
  // Eligibility-Focused (9 variations)
  "Check If You Qualify",
  "See If You're Eligible",
  "Check Your Eligibility",
  "Find Out If You Qualify",
  "Verify Your Eligibility",
  "Check Qualification Now",
  "See If You Qualify",
  "Verify Eligibility Fast",
  "Check Your Status",
  
  // Benefit-Focused (9 variations)
  "Get Your Free Phone",
  "Apply for Free Phone",
  "Get Started Free",
  "Claim Your Free Phone",
  "Get Free Service",
  "Claim Your Benefit",
  "Get Your Phone Today",
  "Apply for Your Phone",
  "Start Getting Benefits",
  
  // Action-Oriented (12 variations)
  "Start Application",
  "Apply Now",
  "Get Started",
  "Begin Application",
  "Apply for Free Service",
  "Start Your Application",
  "Begin Your Application",
  "Apply Today",
  "Get Started Now",
  "Apply in 2 Minutes",
  "Check Eligibility Fast",
  "Start Now"
];

/**
 * Get CTA button text variation based on domain and context
 * @param domain - Site domain (used for deterministic selection)
 * @param context - Page context (e.g., 'faq', 'programs', 'contact')
 * @returns High-converting CTA button text
 */
export function getCTAVariation(domain: string, context: string = 'default'): string {
  return selectVariation(domain, CTA_TEXTS, `cta-${context}`);
}



