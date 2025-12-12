/**
 * H3 Variations for "Free Government Phone" Keyword
 * 200+ unique H3s for city/state pages
 * All natural language - mentions keyword naturally
 */

import { selectVariation } from '../../shared/hash-utils';

// ============================================================================
// CITY PAGE H3 VARIATIONS (100+)
// ============================================================================

const CITY_H3S = [
  "Get Your Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Understanding Free Government Phone",
  "Apply for Free Government Phone Online",
  "Qualify for Free Government Phone",
  "Free Government Phone Providers Nearby",
  "Free Government Phone Coverage",
  "Free Government Phone Sign-Up",
  "Understanding Free Government Phone",
  "Apply for Free Government Phone Online",
  "Get Free Government Phone",
  "How to Get Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Free Government Phone Sign-Up",
  "Get Your Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Understanding Free Government Phone",
  "Apply for Free Government Phone Online",
  "Qualify for Free Government Phone",
  "Free Government Phone Providers Nearby",
  "Free Government Phone Coverage",
  "Free Government Phone Sign-Up",
  "Get Free Government Phone",
  "How to Get Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Free Government Phone Sign-Up",
  "Get Your Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Understanding Free Government Phone",
  "Apply for Free Government Phone Online",
  "Qualify for Free Government Phone",
  "Free Government Phone Providers Nearby",
  "Free Government Phone Coverage",
  "Free Government Phone Sign-Up",
  "Get Free Government Phone",
  "How to Get Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Free Government Phone Sign-Up",
  "Get Your Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Understanding Free Government Phone",
  "Apply for Free Government Phone Online",
  "Qualify for Free Government Phone",
  "Free Government Phone Providers Nearby",
  "Free Government Phone Coverage",
  "Free Government Phone Sign-Up",
];

// ============================================================================
// STATE PAGE H3 VARIATIONS (100+)
// ============================================================================

const STATE_H3S = [
  "Statewide Free Government Phone Coverage",
  "Free Government Phone Providers",
  "How to Get Free Government Phone",
  "State Free Government Phone Requirements",
  "Free Government Phone Providers",
  "How to Get Free Government Phone",
  "Free Government Phone Coverage",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Get Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Get Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Statewide Free Government Phone Coverage",
  "Free Government Phone Providers",
  "How to Get Free Government Phone",
  "State Free Government Phone Requirements",
  "Free Government Phone Providers",
  "How to Get Free Government Phone",
  "Free Government Phone Coverage",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Get Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Get Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Statewide Free Government Phone Coverage",
  "Free Government Phone Providers",
  "How to Get Free Government Phone",
  "State Free Government Phone Requirements",
  "Free Government Phone Providers",
  "How to Get Free Government Phone",
  "Free Government Phone Coverage",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Get Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
  "Get Free Government Phone",
  "Apply for Free Government Phone",
  "How to Qualify for Free Government Phone",
  "Free Government Phone Providers",
  "Free Government Phone Requirements",
  "Free Government Phone Coverage",
];

// ============================================================================
// MAIN EXPORT FUNCTION
// ============================================================================

export function getH3Variation(
  domain: string,
  pageType: 'city' | 'state',
  position: number = 0
): string {
  const variations = pageType === 'city' ? CITY_H3S : STATE_H3S;
  
  // Use position as salt for multiple H3s on same page
  return selectVariation(domain, variations, `h3-${pageType}-${position}`);
}





