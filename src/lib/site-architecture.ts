/**
 * Site Architecture Configuration
 * Defines unique structure for each domain to reduce duplicate content
 */

export interface SiteArchitecture {
  style: 'detailed' | 'quick' | 'educational';
  sections: string[];
  providerCount: number;
  faqCount: number;
  wordTarget: number;
  contentLength: 'concise' | 'detailed' | 'comprehensive';
  eligibilityFormat: 'numbered-list' | 'checklist' | 'table';
}

export const SITE_ARCHITECTURES: Record<string, SiteArchitecture> = {
  'final-1.com': {
    style: 'detailed',
    sections: ['intro', 'cityinfo', 'toc', 'eligibility', 'howto', 'providers', 'benefits', 'faq', 'stateinfo', 'contact', 'cta'],
    providerCount: 4,
    faqCount: 8,
    wordTarget: 1600,
    contentLength: 'detailed',
    eligibilityFormat: 'numbered-list'
  },
  'final-2.com': {
    style: 'quick',
    sections: ['intro', 'quickstart', 'howto', 'providers', 'eligibility', 'faq', 'cta'],
    providerCount: 2,
    faqCount: 4,
    wordTarget: 1000,
    contentLength: 'concise',
    eligibilityFormat: 'checklist'
  },
  'final-3.com': {
    style: 'educational',
    sections: ['intro', 'cityinfo', 'program-deep', 'toc', 'eligibility', 'benefits', 'providers', 'howto', 'faq', 'testimonials', 'resources', 'contact', 'cta'],
    providerCount: 4,
    faqCount: 6,
    wordTarget: 1800,
    contentLength: 'comprehensive',
    eligibilityFormat: 'table'
  }
};

export function getSiteArchitecture(domain: string): SiteArchitecture {
  return SITE_ARCHITECTURES[domain] || SITE_ARCHITECTURES['final-1.com'];
}

