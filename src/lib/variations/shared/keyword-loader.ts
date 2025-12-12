/**
 * Keyword Module Loader
 * Loads keyword-specific variations + global shared variations
 * CRITICAL: Uses STATIC imports only for Vercel bundler compatibility
 */

import { validateKeyword, getKeywordConfig, getKeywordModuleFolder } from '../keyword-config';
import { getFormVariations } from './form-variations';
import { getTrustVariations } from './trust-variations';
import { getProgramVariations } from './program-variations';
import { getProviderVariations } from './provider-variations';
import { getSchemaVariations } from './schema-variations';
import { getCTAVariation } from './cta-variations';

// STATIC IMPORTS - All keyword modules imported at top level
import * as freeGovPhone from '../keywords/free-government-phone/index';

/**
 * Load variation module for specific keyword + global variations
 * Throws error if keyword is invalid or disabled
 * @param keywordId - Keyword identifier (e.g., 'free-government-phone')
 * @returns Module containing keyword-specific + global variation functions
 */
export async function loadKeywordVariations(keywordId: string) {
  // Ensure keywordId is valid - normalize and fallback to default if invalid
  let normalizedKeywordId = 'free-government-phone'; // Default fallback
  
  if (keywordId && typeof keywordId === 'string' && keywordId.trim()) {
    normalizedKeywordId = keywordId.trim().toLowerCase();
  } else {
    console.warn(`Invalid keyword ID: "${keywordId}". Falling back to 'free-government-phone'.`);
  }
  
  // Validate keyword exists and is enabled - if not, use default
  if (!validateKeyword(normalizedKeywordId)) {
    const config = getKeywordConfig(normalizedKeywordId);
    if (!config || !config.enabled) {
      console.warn(
        `Keyword "${normalizedKeywordId}" not found or disabled. ` +
        `Falling back to 'free-government-phone' module.`
      );
      normalizedKeywordId = 'free-government-phone';
    }
  }

  // STATIC MODULE MAPPING - No dynamic imports
  // Always fallback to free-government-phone if keyword not found
  let keywordModule;
  
  switch (normalizedKeywordId) {
    case 'free-government-phone':
      keywordModule = freeGovPhone;
      break;
    default:
      // Always fallback to free-government-phone - never throw
      console.warn(`Keyword module not found for: ${normalizedKeywordId}. Using 'free-government-phone' module.`);
      keywordModule = freeGovPhone;
  }
  
  // Merge keyword-specific + global variations
  return {
    // Keyword-specific (H1, H2, H3, Meta, FAQ)
    ...keywordModule,
    
    // Global shared functions
    getFormVariations,
    getTrustVariations,
    getProgramVariations,
    getProviderVariations,
    getSchemaVariations,
    getCTAVariation,
  };
}

/**
 * Preload check - verify keyword module exists without loading it
 * Useful for validation during site creation
 */
export function canLoadKeyword(keywordId: string): boolean {
  try {
    return validateKeyword(keywordId);
  } catch {
    return false;
  }
}

/**
 * Get keyword label for display
 */
export function getKeywordLabel(keywordId: string): string {
  const config = getKeywordConfig(keywordId);
  return config?.label || keywordId;
}

/**
 * Get keyword module folder name
 */
export function getKeywordModule(keywordId: string): string {
  return getKeywordModuleFolder(keywordId);
}
