/**
 * Keyword Configuration System
 * Defines available keywords and enforces proper module mapping
 * CRITICAL: Only add keywords after complete variation modules are built
 */

export interface KeywordConfig {
  id: string;              // 'free-government-phone'
  label: string;           // 'Free Government Phone'
  moduleFolder: string;    // 'free-government-phone'
  category: 'phone' | 'program' | 'benefit' | 'service';
  enabled: boolean;        // For phased rollout
  description?: string;    // Optional admin help text
}

/**
 * Available keywords - START WITH ONE, ADD MORE AFTER TESTING
 * Each keyword must have complete variation modules before enabling
 */
export const AVAILABLE_KEYWORDS: KeywordConfig[] = [
  {
    id: 'free-government-phone',
    label: 'Free Government Phone',
    moduleFolder: 'free-government-phone',
    category: 'phone',
    enabled: true,
    description: 'Primary keyword targeting government phone assistance programs'
  }
  // Future keywords:
  // {
  //   id: 'lifeline-program',
  //   label: 'Lifeline Program',
  //   moduleFolder: 'lifeline-program',
  //   category: 'program',
  //   enabled: false  // Set to true only after variations are complete
  // }
];

/**
 * Get keyword configuration by ID
 */
export function getKeywordConfig(keywordId: string): KeywordConfig | null {
  return AVAILABLE_KEYWORDS.find(kw => kw.id === keywordId) || null;
}

/**
 * Get all enabled keywords (for admin dropdown)
 */
export function getEnabledKeywords(): KeywordConfig[] {
  return AVAILABLE_KEYWORDS.filter(kw => kw.enabled);
}

/**
 * Validate keyword ID exists and is enabled
 * CRITICAL: This prevents site creation with invalid keywords
 */
export function validateKeyword(keywordId: string): boolean {
  const config = getKeywordConfig(keywordId);
  return config !== null && config.enabled === true;
}

/**
 * Get keyword label for display purposes
 */
export function getKeywordLabel(keywordId: string): string {
  const config = getKeywordConfig(keywordId);
  return config?.label || keywordId;
}

/**
 * Get module folder name for keyword
 */
export function getKeywordModuleFolder(keywordId: string): string {
  const config = getKeywordConfig(keywordId);
  if (!config) {
    throw new Error(`Invalid keyword ID: ${keywordId}`);
  }
  return config.moduleFolder;
}

/**
 * Get all keyword IDs (for testing/validation)
 */
export function getAllKeywordIds(): string[] {
  return AVAILABLE_KEYWORDS.map(kw => kw.id);
}

/**
 * Check if keyword module exists (for validation)
 */
export function isKeywordModuleAvailable(keywordId: string): boolean {
  const config = getKeywordConfig(keywordId);
  return config !== null;
}





