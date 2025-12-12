/**
 * Site Configuration Loader
 * Loads site-specific customizations embedded at build time
 * This file is generated during deployment with unique values per site
 */

import { generateDesignDNA, type DesignDNA, type DesignStyle } from './design-dna'

export interface SiteConfig {
  domain: string
  siteName: string
  keyword: string
  keywordId: string  // e.g., 'free-government-phone' - used to load correct variation module
  keywordLabel: string  // e.g., 'Free Government Phone' - display name
  ownerEmail: string
  designStyle: DesignStyle  // 'basic' or 'advanced'
  designDNA?: Partial<DesignDNA>
  useSubdomains?: boolean  // Enable subdomain routing for city pages (e.g., city-state.domain.com)
  content?: {
    homepage?: {
      h1?: string
      description?: string
    }
  }
  environment: 'staging' | 'production'
  createdAt: string
  version: string
}

// ===== SITE CONFIG - REPLACED AT BUILD TIME =====
// DO NOT MODIFY THIS SECTION MANUALLY - IT IS AUTO-GENERATED
const SITE_CONFIG_DATA = {
  domain: "government-phone.org",
  siteName: "Government Phone",
  keyword: "Free Government Phone",
  keywordId: "free-government-phone",
  keywordLabel: "Free Government Phone",
  ownerEmail: "smartguru6892@gmail.com",
  designStyle: "advanced" as DesignStyle,
  useSubdomains: false,
  environment: "production" as const,
  createdAt: "2025-12-12T14:16:25.666Z",
  version: "1.0.0"
};
// ===== END SITE CONFIG =====

// Default configuration (fallback)
const DEFAULT_CONFIG: SiteConfig = {
  domain: 'example.com',
  siteName: 'Free Phone Service',
  keyword: 'Free Government Phone',
  keywordId: 'free-government-phone',
  keywordLabel: 'Free Government Phone',
  ownerEmail: 'admin@example.com',
  designStyle: 'basic',
  environment: 'staging',
  createdAt: new Date().toISOString(),
  version: '1.0.0'
}

let cachedConfig: SiteConfig | null = null
let cachedDesignDNA: DesignDNA | null = null

/**
 * Load site configuration
 */
export function getSiteConfig(): SiteConfig {
  if (cachedConfig) {
    return cachedConfig
  }

  // Use embedded config data
  cachedConfig = {
    domain: SITE_CONFIG_DATA.domain || DEFAULT_CONFIG.domain,
    siteName: SITE_CONFIG_DATA.siteName || DEFAULT_CONFIG.siteName,
    keyword: SITE_CONFIG_DATA.keyword || DEFAULT_CONFIG.keyword,
    keywordId: SITE_CONFIG_DATA.keywordId || DEFAULT_CONFIG.keywordId,
    keywordLabel: SITE_CONFIG_DATA.keywordLabel || DEFAULT_CONFIG.keywordLabel,
    ownerEmail: SITE_CONFIG_DATA.ownerEmail || DEFAULT_CONFIG.ownerEmail,
    designStyle: SITE_CONFIG_DATA.designStyle || DEFAULT_CONFIG.designStyle,
    designDNA: (SITE_CONFIG_DATA as any).designDNA || undefined, // Custom design from Claude
    useSubdomains: (SITE_CONFIG_DATA as any).useSubdomains !== undefined 
      ? (SITE_CONFIG_DATA as any).useSubdomains 
      : undefined, // Per-site subdomain configuration
    environment: SITE_CONFIG_DATA.environment || DEFAULT_CONFIG.environment,
    createdAt: SITE_CONFIG_DATA.createdAt || DEFAULT_CONFIG.createdAt,
    version: SITE_CONFIG_DATA.version || DEFAULT_CONFIG.version
  }
  
  return cachedConfig
}

/**
 * Get the site's Design DNA
 * ALWAYS uses Claude AI colors from site-config.json (Option 1)
 * Falls back to hash-based palette ONLY if Claude colors don't exist
 */
export function getDesignDNA(): DesignDNA {
  if (cachedDesignDNA) {
    return cachedDesignDNA
  }

  const config = getSiteConfig()
  
  // If we have Claude-generated designDNA, use it directly (Option 1)
  if (config.designDNA && config.designDNA.colors) {
    const customColors = config.designDNA.colors
    const customFonts = config.designDNA.fonts
    
    cachedDesignDNA = {
      designStyle: config.designStyle,
      colors: {
        primary: customColors.primary,
        secondary: customColors.secondary,
        accent: customColors.accent,
        background: customColors.background,
        text: customColors.text,
        textOnPrimary: customColors.textOnPrimary,
      },
      gradients: {
        primary: `linear-gradient(135deg, ${customColors.primary}, ${customColors.secondary})`,
        hero: `linear-gradient(180deg, ${customColors.primary}15 0%, ${customColors.background} 100%)`,
        accent: `linear-gradient(135deg, ${customColors.accent}, ${customColors.primary})`,
      },
      fonts: customFonts ? {
        heading: customFonts.heading,
        body: customFonts.body,
      } : {
        heading: 'Inter',
        body: 'Inter'
      },
      layout: {
        heroStyle: 'centered',
        cardStyle: 'rounded',
        ctaStyle: 'pill'
      }
    }
  } else {
    // FALLBACK: Use hash-based palette only if no Claude colors exist
    cachedDesignDNA = generateDesignDNA(config.domain, config.keyword, config.designStyle)
  }
  
  return cachedDesignDNA
}

/**
 * Get design style
 */
export function getDesignStyle(): DesignStyle {
  return getSiteConfig().designStyle
}

/**
 * Get site name
 */
export function getSiteName(): string {
  return getSiteConfig().siteName
}

/**
 * Get target keyword (display version)
 */
export function getKeyword(): string {
  return getSiteConfig().keyword
}

/**
 * Get keyword ID (for loading variation modules)
 * Returns default 'free-government-phone' if not set to prevent runtime errors
 */
export function getKeywordId(): string {
  const keywordId = getSiteConfig().keywordId;
  // Always return a valid keyword ID, default to 'free-government-phone' if not set
  return keywordId || 'free-government-phone';
}

/**
 * Get keyword label (formatted display name)
 */
export function getKeywordLabel(): string {
  return getSiteConfig().keywordLabel
}

/**
 * Get domain
 */
export function getDomain(): string {
  return getSiteConfig().domain
}

/**
 * Get site URL
 * CRITICAL: Always returns unique URL per site to prevent canonical URL duplication
 */
export function getSiteURL(): string {
  const domain = getDomain()
  
  // Validate domain is not default/placeholder
  if (!domain || domain === 'example.com' || domain.includes('example')) {
    console.error('CRITICAL: Domain not properly set! Using fallback. This will cause canonical URL issues.')
    // In production, this should never happen - domain must be set during deployment
    throw new Error(`Domain not properly configured for site. Expected unique domain, got: ${domain}`)
  }
  
  return `https://${domain}`
}

/**
 * Get canonical URL for a specific path
 * Ensures each site has unique canonical URLs
 */
export function getCanonicalURL(path: string = '/'): string {
  const siteURL = getSiteURL()
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  // Ensure trailing slash for consistency
  const finalPath = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`
  return `${siteURL}${finalPath}`
}

/**
 * Get owner email
 */
export function getOwnerEmail(): string {
  return getSiteConfig().ownerEmail
}

/**
 * Check if subdomain mode is enabled for this site
 * Checks site config first (allows per-site configuration), then falls back to domain check
 * This enables mass deployment where each site can independently enable/disable subdomain routing
 */
export function useSubdomains(): boolean {
  const config = getSiteConfig();
  
  // Check site config first (allows per-site configuration)
  if (config.useSubdomains !== undefined) {
    return config.useSubdomains;
  }
  
  // Fallback to domain check for backward compatibility
  const domain = getDomain();
  return domain === 'free-government-phone.org' || domain === 'government-phone.org';
}

/**
 * Parse subdomain to extract city and state
 * Format: {city-slug}-{state-abbr}.free-government-phone.org
 * Example: wayne-mi.free-government-phone.org -> { city: 'wayne', state: 'mi' }
 */
export function parseSubdomain(hostname: string): { city: string; state: string } | null {
  const domain = getDomain()
  if (!useSubdomains()) return null
  
  // Remove port if present
  const host = hostname.split(':')[0].toLowerCase()
  
  // Check if it's a subdomain of our domain
  if (!host.endsWith(`.${domain}`)) return null
  
  // Extract subdomain part
  const subdomain = host.replace(`.${domain}`, '')
  
  // Skip www and other non-city subdomains
  if (subdomain === 'www' || subdomain === '') return null
  
  // Parse format: {city-slug}-{state-abbr}
  // Find the last hyphen which should separate city from state
  const lastHyphenIndex = subdomain.lastIndexOf('-')
  if (lastHyphenIndex === -1) return null
  
  const citySlug = subdomain.substring(0, lastHyphenIndex)
  const stateAbbr = subdomain.substring(lastHyphenIndex + 1)
  
  // Validate state abbreviation is 2 characters
  if (stateAbbr.length !== 2) return null
  
  return {
    city: citySlug,
    state: stateAbbr.toLowerCase()
  }
}

/**
 * Generate subdomain URL for a state
 * Format: https://{state-abbr}.free-government-phone.org/
 */
export function getStateSubdomainURL(stateAbbr: string): string {
  const domain = getDomain()
  if (!useSubdomains()) {
    // Fallback to path-based URL
    return `https://${domain}/${stateAbbr.toLowerCase()}/`
  }
  return `https://${stateAbbr.toLowerCase()}.${domain}/`
}

/**
 * Generate subdomain URL for a city
 * Format: https://{city-slug}-{state-abbr}.free-government-phone.org/
 */
export function getCitySubdomainURL(citySlug: string, stateAbbr: string): string {
  const domain = getDomain()
  if (!useSubdomains()) {
    // Fallback to path-based URL
    return `https://${domain}/${stateAbbr.toLowerCase()}/${citySlug}/`
  }
  return `https://${citySlug}-${stateAbbr.toLowerCase()}.${domain}/`
}

/**
 * Get current request's subdomain info (if any)
 * Should be called from page context where Astro.request is available
 */
export function getCurrentSubdomain(request: Request): { city: string; state: string } | null {
  const url = new URL(request.url)
  return parseSubdomain(url.hostname)
}

