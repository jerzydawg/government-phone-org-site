/**
 * Global Provider Content (Shared Across All Keywords)
 * Generic provider info - NO keyword mentions
 */

import { selectVariation } from './hash-utils';

const PROVIDER_INTROS = [
  "Discover leading providers offering service in your area.",
  "Find the best service providers and plans available.",
  "Compare service providers to find the right fit for you.",
  "Explore providers offering quality service in your location.",
  "Multiple providers available to serve your area.",
  "Choose from trusted providers with nationwide coverage.",
  "Find providers offering reliable service near you.",
  "Compare plans and providers in your region.",
  "Discover service providers with excellent coverage.",
  "Select from top-rated providers in your area."
];

export interface ProviderContent {
  introText: string;
}

export function getProviderVariations(domain: string): ProviderContent {
  return {
    introText: selectVariation(domain, PROVIDER_INTROS, 'provider-intro'),
  };
}





