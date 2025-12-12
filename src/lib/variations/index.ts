/**
 * Main Exports for Keyword-Based Variation System
 * 
 * ARCHITECTURE:
 * - Keyword-Specific: H1, H2, H3, Meta, FAQ (mention keyword naturally)
 * - Global Shared: Forms, Trust, Programs, Providers, Schema (generic, no keyword)
 */

// Core utilities (shared across all keywords)
export * from './shared/hash-utils';
export * from './shared/keyword-loader';

// Keyword configuration
export * from './keyword-config';

// Global shared variations (exported for direct use)
export * from './shared/form-variations';
export * from './shared/trust-variations';
export * from './shared/program-variations';
export * from './shared/provider-variations';
export * from './shared/schema-variations';

// Note: Keyword-specific variations (H1, H2, H3, Meta, FAQ) are loaded
// dynamically via loadKeywordVariations(keywordId) which merges both
// keyword-specific + global variations into a unified module

