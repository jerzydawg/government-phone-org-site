/**
 * AI Content Generator for Static Pages
 * Uses Claude API to generate 100% unique, SEO-optimized content at deployment time
 * Supports parallel generation with batched workers for faster deployment
 */

import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs/promises';
import * as path from 'path';

export interface SiteConfig {
  domain: string;
  siteName: string;
  keyword: string;
  ownerEmail?: string;
  designStyle?: 'basic' | 'advanced';
}

export interface GenerateOptions {
  homepage: boolean;      // Template-based homepage (no AI)
  staticPages: boolean;   // AI-generated: eligibility, faq, providers, apply, contact, programs
  programPages: boolean;  // AI-generated: lifeline-program, acp-program, tribal-programs, state-programs, emergency-broadband
  cityStatePages: boolean; // Template-based city/state pages (no AI)
  forceRegenerate?: boolean; // Force regeneration of all pages, even if they already exist
}

export type ProgressCallback = (pageName: string, current: number, total: number, status: 'generating' | 'skipped' | 'generated' | 'batch-complete') => void;

// Define which pages belong to which category
const STATIC_PAGE_NAMES = ['faq', 'programs', 'providers', 'eligibility', 'contact', 'apply', 'states-index', '404'];
export const PROGRAM_PAGE_NAMES = ['state-programs', 'lifeline-program', 'acp-program', 'tribal-programs', 'emergency-broadband'];

// Parallel generation settings - OPTIMIZED for speed with better rate limit handling
// Claude API limit: 8,000 output tokens/minute
// Each page generates ~2,500-3,500 tokens (avg ~3,000)
// Strategy: 3 workers with 20s delay = safer rate limit handling
const PARALLEL_WORKERS = 3; // Reduced from 4 to 3 for better rate limit safety
const BATCH_DELAY_MS = 20000; // 20 second delay between batches (more conservative)

// Retry settings for rate limit handling - improved exponential backoff
const MAX_RETRIES = 8; // Increased retries
const INITIAL_RETRY_DELAY_MS = 5000; // 5 second initial delay (more conservative)
const MAX_RETRY_DELAY_MS = 60000; // Max 60 second delay

// Track rate limit hits for adaptive delays
let lastRateLimitHit = 0;
let consecutiveRateLimitHits = 0;

/**
 * Validate ANTHROPIC_API_KEY is set
 * @throws Error if API key is missing
 */
function validateAnthropicApiKey(): string {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error(
      'Missing required environment variable: ANTHROPIC_API_KEY\n' +
      'This is required for content generation. Please set it in your .env.local file or environment variables.'
    )
  }
  return apiKey
}

// Initialize Anthropic client with validation
const anthropic = new Anthropic({
  apiKey: validateAnthropicApiKey(),
});

/**
 * Sleep helper for retry delays
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Execute a function with exponential backoff retry on rate limit errors
 */
async function withRetry<T>(
  fn: () => Promise<T>,
  pageName: string,
  maxRetries: number = MAX_RETRIES
): Promise<T> {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      
      // Check if it's a rate limit error (429) or overloaded error (529)
      const isRateLimitError = 
        error.status === 429 || 
        error.status === 529 ||
        error.message?.includes('rate') ||
        error.message?.includes('overloaded');
      
      if (isRateLimitError && attempt < maxRetries) {
        // Track rate limit for adaptive delays
        lastRateLimitHit = Date.now();
        
        // Exponential backoff: 2s, 4s, 8s
        const delay = INITIAL_RETRY_DELAY_MS * Math.pow(2, attempt);
        console.log(`⚠ Rate limited on ${pageName}, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})...`);
        await sleep(delay);
        continue;
      }
      
      // Not a rate limit error or max retries exceeded
      throw error;
    }
  }
  
  throw lastError || new Error(`Failed after ${maxRetries} retries`);
}

/**
 * Execute function with timeout - prevents infinite hangs
 */
async function withTimeout<T>(
  fn: () => Promise<T>,
  timeoutMs: number,
  pageName: string
): Promise<T> {
  return Promise.race([
    fn(),
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout after ${timeoutMs}ms generating ${pageName}`)), timeoutMs)
    )
  ]);
}

/**
 * Page definitions with their SEO focus and structure requirements
 * NOTE: index.astro (homepage) is NOT included here - it uses the template with dynamic tokens
 * and content variations system for uniqueness. AI generation caused truncation issues.
 */
const PAGE_DEFINITIONS = [
  {
    name: 'state-programs',
    outputPath: 'src/pages/state-programs.astro',
    title: '{keyword} - Get Your Free Phone Today',
    focus: 'how to get a free phone in your state, free phone programs by state, state-specific free phone options',
    sections: ['intro', 'how-to-get-free-phone', 'what-you-get', 'who-qualifies', 'popular-states', 'faq', 'cta'],
  },
  {
    name: 'lifeline-program',
    outputPath: 'src/pages/lifeline-program.astro',
    title: '{keyword} - Lifeline Free Phone Program',
    focus: 'Lifeline free phone program, how to get a free Lifeline phone, free monthly service',
    sections: ['intro', 'what-is-lifeline', 'what-you-get', 'who-qualifies', 'how-to-apply', 'faq', 'cta'],
  },
  {
    name: 'acp-program',
    outputPath: 'src/pages/acp-program.astro',
    title: '{keyword} - ACP Free Internet & Phone',
    focus: 'ACP program, free internet, free phone with data, how to get free internet',
    sections: ['intro', 'what-is-acp', 'what-you-get', 'who-qualifies', 'how-to-apply', 'faq', 'cta'],
  },
  {
    name: 'faq',
    outputPath: 'src/pages/faq.astro',
    title: '{keyword} - Common Questions Answered',
    focus: 'free phone FAQ, how to get a free phone, eligibility questions, application help',
    sections: ['intro', 'eligibility-faqs', 'application-faqs', 'service-faqs', 'provider-faqs'],
  },
  {
    name: 'programs',
    outputPath: 'src/pages/programs.astro',
    title: '{keyword} - All Free Phone Programs',
    focus: 'all free phone programs, Lifeline, ACP, ways to get a free phone',
    sections: ['intro', 'federal-programs', 'state-programs', 'special-programs', 'how-to-choose', 'cta'],
  },
  {
    name: 'providers',
    outputPath: 'src/pages/providers.astro',
    title: '{keyword} - Top Free Phone Providers',
    focus: 'best free phone providers, free phone companies, which provider to choose',
    sections: ['intro', 'top-providers', 'how-to-choose', 'provider-comparison', 'faq', 'cta'],
  },
  {
    name: 'eligibility',
    outputPath: 'src/pages/eligibility.astro',
    title: '{keyword} - Do You Qualify? Check Now',
    focus: 'free phone eligibility, who qualifies for a free phone, income requirements, how to check',
    sections: ['intro', 'income-eligibility', 'program-eligibility', 'documents-needed', 'check-eligibility', 'faq'],
  },
  {
    name: 'tribal-programs',
    outputPath: 'src/pages/tribal-programs.astro',
    title: '{keyword} - Tribal Lands Free Phone',
    focus: 'tribal free phone, enhanced Lifeline for tribal lands, free phone on reservations',
    sections: ['intro', 'tribal-benefits', 'what-you-get', 'who-qualifies', 'how-to-apply', 'faq', 'cta'],
  },
  {
    name: 'emergency-broadband',
    outputPath: 'src/pages/emergency-broadband.astro',
    title: '{keyword} - Free Internet Program',
    focus: 'free internet program, EBB to ACP transition, how to get free internet',
    sections: ['intro', 'what-was-ebb', 'transition-to-acp', 'current-options', 'how-to-apply', 'faq'],
  },
  {
    name: 'contact',
    outputPath: 'src/pages/contact.astro',
    title: '{keyword} - Get Help Now',
    focus: 'contact us, get help with application, free phone support',
    sections: ['intro', 'contact-form', 'other-ways-to-reach', 'faq'],
  },
  {
    name: 'apply',
    outputPath: 'src/pages/apply.astro',
    title: '{keyword} - Apply in 2 Minutes',
    focus: 'apply for free phone, quick application, get approved fast',
    sections: ['intro', 'eligibility-checker', 'application-steps', 'what-to-expect', 'faq'],
  },
  {
    name: 'states-index',
    outputPath: 'src/pages/states/index.astro',
    title: '{keyword} by State',
    focus: 'state directory, find programs by state, local assistance',
    sections: ['intro', 'state-grid', 'how-state-programs-work', 'faq'],
  },
  {
    name: '404',
    outputPath: 'src/pages/404.astro',
    title: 'Page Not Found',
    focus: 'error page, helpful navigation, find what you need',
    sections: ['error-message', 'helpful-links', 'search-suggestion'],
  },
];

/**
 * Generate the system prompt for Claude
 */
function getSystemPrompt(config: SiteConfig): string {
  return `You are an expert SEO content writer specializing in government assistance programs for phone and internet services.

SITE DETAILS:
- Site Name: ${config.siteName}
- Target Keyword: ${config.keyword}
- Domain: ${config.domain}

CONTENT REQUIREMENTS:
1. Write 500-650 words of unique, high-quality content
2. Naturally incorporate the keyword "${config.keyword}" 4-6 times (1-2% density)
3. Use the site name "${config.siteName}" 2-3 times naturally
4. Write in a helpful, authoritative, yet accessible tone
5. Include actionable information that helps readers
6. NO duplicate phrases or content that could appear on other sites
7. Every sentence must be originally written - no templates or boilerplate

SEO REQUIREMENTS:
1. Use proper heading hierarchy (H1, H2, H3)
2. Include the keyword in the first paragraph
3. Use semantic variations of the keyword throughout
4. Write compelling meta descriptions
5. Structure content for featured snippets where appropriate
6. Include internal linking opportunities

FORBIDDEN:
- Do NOT use phrases like "In today's digital age" or "In this comprehensive guide"
- Do NOT use generic filler content
- Do NOT repeat the same information in different words
- Do NOT use the exact same sentence structures repeatedly
- Do NOT include any placeholder text
- Do NOT use bureaucratic/formal language like "state benefits", "communication assistance", "state programs"
- Do NOT use words like "comprehensive", "initiative", "facilitate", "utilize"
- Do NOT include testimonials, reviews, user quotes, or "What Our Users Say" sections
- Do NOT include fake customer reviews or star ratings

TONE & LANGUAGE:
- Use simple, action-oriented language that speaks directly to the reader
- Instead of "state benefits" say "Get a Free Phone" or "Free Phone Program"
- Instead of "communication assistance" say "free phone service" or "free phone and data"
- Instead of "apply for benefits" say "get your free phone" or "check if you qualify"
- Write like you're helping a friend, not writing a government document
- Focus on what the user GETS: free phone, free service, free data, no cost
- Use power words: FREE, instant, easy, quick, no cost, no credit check

KEYWORD GRAMMAR RULES (CRITICAL):
- ALWAYS verify sentences are grammatically correct before outputting
- When inserting the keyword "${config.keyword}", adjust surrounding words for natural flow
- If keyword starts with "my", "your", "a", "an", "the" - do NOT add duplicate articles/possessives
  - BAD: "Get Your my gov phone" or "Apply for a free government phone program"
  - GOOD: "Get my gov phone" or "Apply for the free government phone program"
- If keyword doesn't fit grammatically in a sentence, paraphrase it naturally while keeping SEO intent
- Read each sentence mentally - if it sounds awkward or broken, rewrite it
- The keyword must flow naturally in every sentence - never force it where it doesn't fit

CRITICAL UNIQUENESS REQUIREMENTS (MANDATORY FOR 50+ SITES):
- Domain: ${config.domain} | Site Name: ${config.siteName}
- EVERY element must be unique per domain - use domain/siteName to influence variation
- H2/H3 headings MUST be phrased differently for each site (never identical)
- CTA button text MUST vary per site (different action words, different phrasing)
- CTA subtext MUST be unique per site (different benefits, different phrasing)
- Article schema headline MUST be unique per site (different focus, different wording)
- Article schema description MUST be unique per site (different angles, different phrasing)
- FAQPage questions MUST be phrased differently per site (different question angles)
- FAQPage answers MUST be written differently per site (same facts, different wording)
- HowTo step names MUST vary per site (different action verbs, different phrasing)
- HowTo step descriptions MUST be unique per site (different explanations)
- Service/GovernmentService descriptions MUST be unique per site
- Use domain name "${config.domain}" and site name "${config.siteName}" to naturally influence variation
- NEVER output identical headings, CTAs, or structured data that could match another site

BODY CONTENT UNIQUENESS REQUIREMENTS (CRITICAL FOR PROGRAM PAGES):
- Every body paragraph MUST be 100% unique per domain - never reuse identical paragraphs
- Vary paragraph structure: some start with questions, others with statements, some with facts
- Mix sentence lengths: combine short punchy sentences (5-10 words) with longer explanatory ones (15-25 words)
- Use different word choices: if one site says "qualify", another says "eligible", another says "meet requirements"
- Vary paragraph flow: some use bullet points, others use narrative paragraphs, some use numbered lists
- Change sentence complexity: mix simple sentences with compound/complex sentences
- Use different transition words: vary between "however", "additionally", "furthermore", "meanwhile", etc.
- Vary paragraph length: some paragraphs 2-3 sentences, others 4-5 sentences
- Use different examples and analogies per domain
- Domain "${config.domain}" should influence: tone (conversational vs formal), examples used, phrasing style
- Section introductions must be unique: vary opening sentences, questions asked, facts presented
- Never use identical paragraph structures, wording, or sentence patterns across domains
- Each paragraph should read as if written fresh specifically for "${config.domain}" - not templated

STYLING REQUIREMENTS (CRITICAL - for consistent design across all pages):
- ALL primary buttons MUST use: class="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-lg"
- ALL secondary/outline buttons MUST use: class="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold py-3 px-6 rounded-xl"
- ALL accent colors MUST use CSS variable: style="color: var(--color-primary)" or class="text-[var(--color-primary)]"
- ALL accent backgrounds MUST use: style="background-color: var(--color-primary)" or class="bg-[var(--color-primary)]"
- NEVER use hardcoded colors like blue-600, green-500, etc. Always use CSS variables
- Link colors should use: class="text-[var(--color-primary)] hover:underline"
- Icon backgrounds should use: style="background-color: var(--color-primary)"

OUTPUT FORMAT:
Return ONLY valid Astro component code. No explanations, no markdown code blocks, just the raw .astro file content starting with --- and ending with </Layout>.`;
}

/**
 * Calculate the relative import path based on file depth
 * e.g., 'src/pages/index.astro' -> '../' 
 *       'src/pages/states/index.astro' -> '../../'
 */
function getImportPrefix(outputPath: string): string {
  // Count directory depth from src/pages/
  const pathFromPages = outputPath.replace('src/pages/', '');
  const depth = pathFromPages.split('/').length - 1; // -1 for the filename itself
  
  if (depth === 0) {
    return '../'; // Files directly in src/pages/
  }
  return '../'.repeat(depth + 1); // Files in subdirectories
}

/**
 * Generate content for a single page using Claude API
 */
async function generatePageWithClaude(
  pageDef: typeof PAGE_DEFINITIONS[0],
  config: SiteConfig
): Promise<string> {
  const currentYear = new Date().getFullYear();
  const dateStr = new Date().toISOString().split('T')[0];
  
  const title = pageDef.title
    .replace('{keyword}', config.keyword)
    .replace('{siteName}', config.siteName);

  // Calculate correct import path based on file location
  const importPrefix = getImportPrefix(pageDef.outputPath);

  const prompt = `Generate a complete Astro page component for: ${title}

PAGE TYPE: ${pageDef.name}
FILE LOCATION: ${pageDef.outputPath}
SEO FOCUS: ${pageDef.focus}
REQUIRED SECTIONS: ${pageDef.sections.join(', ')}

CRITICAL H1 REQUIREMENT:
- The H1 MUST be ONLY the exact keyword "${config.keyword}" with no additional text
- Do NOT add suffixes like "Guide", "2025", "Get Yours Today", etc.
- NEVER put other words before or after the keyword in the H1

CRITICAL IMPORT PATHS (use these EXACT paths):
- Layout: import Layout from '${importPrefix}layouts/Layout.astro';
- Site config: import { getSiteName, getKeyword, getDomain, getSiteURL } from '${importPrefix}lib/site-config';

CRITICAL VARIATION REQUIREMENTS FOR THIS SITE:
- Domain: ${config.domain} | Site Name: ${config.siteName}
- Generate H2/H3 headings that are phrased differently from other sites
- Create unique CTA button text (vary action words: "Check", "Verify", "See If", "Find Out", "Confirm", "Review", etc.)
- Write unique CTA subtext (vary benefits and phrasing)
- Generate Article schema with unique headline and description based on siteName
- Create FAQPage with 3-5 questions phrased differently (different angles, different wording)
- Write FAQ answers with same facts but different wording/phrasing
- Generate HowTo schema with unique step names (vary verbs: "Check", "Verify", "Confirm", "Review", "Assess", etc.)
- Write HowTo step descriptions that explain the same process differently
- Create Service/GovernmentService schemas with unique descriptions
- Use "${config.domain}" and "${config.siteName}" to naturally influence all content variation

EXAMPLES OF PROPER VARIATION:

H2 Headings (same topic, different phrasing):
- Site 1: "Verify Your Lifeline Qualification"
- Site 2: "Check If You Qualify for Lifeline"
- Site 3: "See If You're Eligible for Free Phone Service"

CTA Buttons (same action, different wording):
- Site 1: "CHECK ELIGIBILITY NOW"
- Site 2: "See If You Qualify"
- Site 3: "Verify Your Eligibility Fast"

FAQ Questions (same topic, different angles):
- Site 1: "Can I combine Lifeline with other federal assistance programs?"
- Site 2: "Is it possible to receive both Lifeline and ACP benefits together?"
- Site 3: "Can eligible households get Lifeline and ACP at the same time?"

HowTo Step Names (same action, different verbs):
- Site 1: "Check Eligibility"
- Site 2: "Verify Requirements"
- Site 3: "Confirm Qualification Status"

VARIATION STRATEGY:
- Use domain "${config.domain}" to influence: tone, phrasing style, word choices
- Use site name "${config.siteName}" to influence: focus points, emphasis
- Create natural variation by thinking: "How would ${config.siteName} explain this differently?"
- Vary sentence structures, word choices, and phrasing patterns based on domain

BODY CONTENT VARIATION REQUIREMENTS (CRITICAL FOR PROGRAM PAGES):
- Every body paragraph MUST be 100% unique per domain - never reuse identical paragraphs across sites
- Vary paragraph structure: some start with questions ("Want to know...?"), others with statements ("The program offers..."), some with facts ("Over 2 million people...")
- Mix sentence lengths: combine short punchy sentences (5-10 words) with longer explanatory ones (15-25 words)
- Use different word choices: if one site says "qualify", another says "eligible", another says "meet requirements", another says "fit the criteria"
- Vary paragraph flow: some use bullet points, others use narrative paragraphs, some use numbered lists, some use short paragraphs
- Change sentence complexity: mix simple sentences with compound/complex sentences
- Use different transition words: vary between "however", "additionally", "furthermore", "meanwhile", "moreover", "consequently", etc.
- Vary paragraph length: some paragraphs 2-3 sentences, others 4-5 sentences, some single long sentences
- Use different examples and analogies per domain: reference different scenarios, use different comparisons
- Section introductions must be unique: vary opening sentences, questions asked, facts presented, angles taken
- Domain "${config.domain}" should influence: tone (conversational vs formal), examples used, phrasing style, sentence rhythm
- Each paragraph should read as if written fresh specifically for "${config.domain}" - not templated or copied
- Never use identical paragraph structures, wording, sentence patterns, or phrasing across domains
- Think: "How would I explain this differently if I were writing ONLY for ${config.siteName}?"

The page must:
1. Use the EXACT import paths shown above (this is critical for the build)
2. Include proper JSON-LD structured data (Article schema and FAQPage schema if applicable)
3. Have a breadcrumb navigation
4. Include 500-650 words of unique SEO content optimized for "${config.keyword}"
5. Have a clear call-to-action linking to /apply
6. Include internal links to related pages
7. Use Tailwind CSS classes for styling
8. Be fully responsive

IMPORTANT: 
- The H1 tag MUST begin with "${config.keyword}" - this is critical for SEO
- The content must be 100% unique - as if written fresh for this specific site
- Incorporate "${config.keyword}" naturally 4-6 times throughout the body
- Use "${config.siteName}" 2-3 times
- Current year is ${currentYear}
- Date for schema: ${dateStr}

BEFORE OUTPUTTING, VERIFY:
✓ All H2/H3 headings are phrased differently from other sites
✓ CTA button text uses different wording than other sites
✓ CTA subtext is unique per site
✓ Article headline/description are unique per site
✓ FAQ questions are phrased differently (different angles)
✓ FAQ answers use different wording (same facts, different phrasing)
✓ HowTo step names use different action verbs
✓ HowTo step descriptions explain differently
✓ All structured data content would not match another site's structured data
✓ Domain "${config.domain}" and site name "${config.siteName}" influenced the variation
✓ Every body paragraph is 100% unique - no identical paragraphs across sites
✓ Paragraph structures vary (questions vs statements, bullets vs narrative)
✓ Sentence lengths are mixed (short and long sentences)
✓ Word choices differ (synonyms used: qualify/eligible/meet requirements)
✓ Transition words vary throughout the content
✓ Paragraph lengths vary (some short, some long)
✓ Examples and analogies are unique to this domain
✓ Section introductions are phrased differently
✓ Content reads as if written fresh for "${config.domain}" only

Generate the complete .astro file now:`;

  // Use retry wrapper to handle rate limits with exponential backoff
  // Homepage needs more tokens (~3500), other pages need less (~2500)
  const maxTokens = pageDef.name === 'homepage' ? 3500 : 2500;
  
  const response = await withRetry(
    () => anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: maxTokens,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      system: getSystemPrompt(config),
    }),
    pageDef.name
  );

  // Extract the text content from the response
  const content = response.content[0];
  if (content.type !== 'text') {
    throw new Error('Unexpected response type from Claude');
  }

  let astroContent = content.text;
  
  // Clean up the response - remove any markdown code blocks if present
  astroContent = astroContent.replace(/^```astro\n?/gm, '');
  astroContent = astroContent.replace(/^```\n?/gm, '');
  astroContent = astroContent.trim();
  
  // Ensure it starts with ---
  if (!astroContent.startsWith('---')) {
    astroContent = '---\n' + astroContent;
  }

  // Fix import paths - Claude sometimes ignores the correct paths we specify
  // This ensures all imports use the correct relative path for the file's location
  const correctPrefix = importPrefix;
  
  // Fix Layout import
  astroContent = astroContent.replace(
    /import\s+Layout\s+from\s+['"]\.\.\/+layouts\/Layout\.astro['"]/g,
    `import Layout from '${correctPrefix}layouts/Layout.astro'`
  );
  
  // Fix site-config import
  astroContent = astroContent.replace(
    /from\s+['"]\.\.\/+lib\/site-config['"]/g,
    `from '${correctPrefix}lib/site-config'`
  );

  return astroContent;
}

/**
 * Validate that a page file contains valid Astro content
 * Checks for basic structure: frontmatter, HTML content, proper file structure
 */
export async function validatePageContent(filePath: string): Promise<boolean> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Must have reasonable size (at least 500 bytes for a valid page)
    if (content.length < 500) {
      return false;
    }
    
    // Must contain Astro frontmatter (--- markers)
    if (!content.includes('---')) {
      return false;
    }
    
    // Must contain HTML structure (common Astro elements)
    if (!content.includes('<html') && !content.includes('<!doctype') && !content.includes('<Layout')) {
      return false;
    }
    
    // Must not be just an error message or placeholder
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes('error') && lowerContent.includes('failed') && content.length < 1000) {
      return false;
    }
    
    // Must contain some actual content (not just boilerplate)
    if (content.split('\n').filter(line => line.trim().length > 0).length < 20) {
      return false;
    }
    
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Filter PAGE_DEFINITIONS based on generateOptions
 */
export function filterPageDefinitions(options?: GenerateOptions): typeof PAGE_DEFINITIONS {
  if (!options) {
    // Default: generate all pages
    return PAGE_DEFINITIONS;
  }
  
  return PAGE_DEFINITIONS.filter(pageDef => {
    // Check if this page belongs to static pages category
    if (STATIC_PAGE_NAMES.includes(pageDef.name)) {
      return options.staticPages;
    }
    // Check if this page belongs to program pages category
    if (PROGRAM_PAGE_NAMES.includes(pageDef.name)) {
      return options.programPages;
    }
    // Default: include the page
    return true;
  });
}

/**
 * Generate all page content for a site using Claude API
 * Uses parallel batch processing for faster generation
 */
export async function generateAllPageContent(
  sitePath: string,
  config: SiteConfig,
  onProgress?: ProgressCallback,
  generateOptions?: GenerateOptions
): Promise<void> {
  // Filter pages based on options
  const pagesToGenerate = filterPageDefinitions(generateOptions);
  const total = pagesToGenerate.length;
  
  if (total === 0) {
    console.log('No AI pages to generate (all skipped based on options)');
    return;
  }
  
  let completedCount = 0;
  
  // Split pages into batches for parallel processing
  const batches: typeof PAGE_DEFINITIONS[] = [];
  for (let i = 0; i < pagesToGenerate.length; i += PARALLEL_WORKERS) {
    batches.push(pagesToGenerate.slice(i, i + PARALLEL_WORKERS));
  }
  
  console.log(`Generating ${total} pages in ${batches.length} batches (${PARALLEL_WORKERS} parallel workers)...`);
  
  // Track statistics
  let skippedCount = 0;
  let generatedCount = 0;
  
  for (const [batchIndex, batch] of batches.entries()) {
    console.log(`[Batch ${batchIndex + 1}/${batches.length}] Starting: ${batch.map(p => p.name).join(', ')}`);
    
    // Adaptive delay: increase delay if we've hit rate limits recently
    if (batchIndex > 0) {
      const timeSinceLastRateLimit = Date.now() - lastRateLimitHit;
      const adaptiveDelay = consecutiveRateLimitHits > 2 
        ? BATCH_DELAY_MS * 2 // Double delay if multiple rate limits
        : timeSinceLastRateLimit < 60000 
          ? BATCH_DELAY_MS * 1.5 // 1.5x delay if rate limit hit in last minute
          : BATCH_DELAY_MS; // Normal delay
      
      console.log(`⏳ Waiting ${Math.round(adaptiveDelay)}ms before next batch (rate limit safety)...`);
      await sleep(adaptiveDelay);
    }
    
    // Process batch in parallel
    const batchPromises = batch.map(async (pageDef) => {
      const startTime = Date.now();
      const fullPath = path.join(sitePath, pageDef.outputPath);
      
      try {
        // CREDIT SAVER: Check if page already exists AND is valid (from previous failed deployment)
        // EXCEPTION: Always regenerate domain-specific pages to prevent duplicate content across sites
        const isProgramPage = PROGRAM_PAGE_NAMES.includes(pageDef.name);
        const isProvidersPage = pageDef.name === 'providers';
        const isProgramsPage = pageDef.name === 'programs';
        const isFaqPage = pageDef.name === 'faq'; // FAQ includes domain-specific content
        const isStatesIndexPage = pageDef.name === 'states-index'; // States index includes domain references
        
        // Pages that should ALWAYS regenerate (domain-specific content)
        const mustRegenerate = isProgramPage || isProvidersPage || isProgramsPage || isFaqPage || isStatesIndexPage;
        
        // If forceRegenerate is enabled, always regenerate all pages
        const shouldForceRegenerate = generateOptions?.forceRegenerate === true;
        
        if (!mustRegenerate && !shouldForceRegenerate) {
          try {
            const existingStat = await fs.stat(fullPath);
            // Validate content quality, not just file size
            const isValid = await validatePageContent(fullPath);
            
            if (isValid && existingStat.size > 500) {
              completedCount++;
              skippedCount++;
              console.log(`[${pageDef.name}] ⤭ SKIP (already exists and valid, ${existingStat.size} bytes) (${completedCount}/${total})`);
              
              // Report progress
              if (onProgress) {
                onProgress(pageDef.name, completedCount, total, 'skipped');
              }
              
              return { success: true, page: pageDef.name, duration: 0, skipped: true };
            } else if (existingStat.size > 0) {
              // File exists but is invalid/corrupted - regenerate it
              console.log(`[${pageDef.name}] ⚠ File exists but invalid (${existingStat.size} bytes), regenerating...`);
            }
          } catch (err) {
            // File doesn't exist, proceed with generation
          }
        } else {
          // Force regeneration of domain-specific pages or when forceRegenerate is enabled
          // Delete if exists to ensure Claude generates unique content
          try {
            await fs.rm(fullPath, { force: true });
            let pageType = 'domain-specific page';
            if (isProgramPage) pageType = 'program page';
            else if (isProvidersPage) pageType = 'providers page';
            else if (isProgramsPage) pageType = 'programs overview page';
            else if (isFaqPage) pageType = 'FAQ page';
            else if (isStatesIndexPage) pageType = 'states index page';
            else if (shouldForceRegenerate) pageType = 'page (force regenerate)';
            console.log(`[${pageDef.name}] ✓ Forcing regeneration (${pageType} must be unique per domain)`);
          } catch (err) {
            // File doesn't exist, that's fine
          }
        }
        
        console.log(`[${pageDef.name}] Starting generation...`);
        
        // Generate content using Claude API
        const content = await generatePageWithClaude(pageDef, config);
        
        // Write to file
        await fs.mkdir(path.dirname(fullPath), { recursive: true });
        await fs.writeFile(fullPath, content, 'utf-8');
        
        // Update progress
        completedCount++;
        generatedCount++;
        const duration = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`[${pageDef.name}] ✓ Generated in ${duration}s (${completedCount}/${total})`);
        
        // Report progress
        if (onProgress) {
          onProgress(pageDef.name, completedCount, total, 'generated');
        }
        
        return { success: true, page: pageDef.name, duration };
      } catch (error: any) {
        const duration = ((Date.now() - startTime) / 1000).toFixed(1);
        console.error(`[${pageDef.name}] ✗ FAILED after ${duration}s:`, error.message);
        console.error(`[${pageDef.name}] Error details:`, {
          status: error.status,
          type: error.type,
          message: error.message
        });
        
        // Log to deployment logs
        throw new Error(`Failed to generate ${pageDef.name}: ${error.message}`);
      }
    });
    
    // Wait for all pages in batch to complete with allSettled
    const batchResults = await Promise.allSettled(batchPromises);
    console.log(`[Batch ${batchIndex + 1}/${batches.length}] ✓ Complete`);
    
    // Report batch completion (only if multiple batches to avoid noise)
    if (onProgress && batches.length > 1) {
      onProgress(`batch-${batchIndex + 1}`, completedCount, total, 'batch-complete');
    }
    
    // Check for failures and retry
    for (const [index, result] of batchResults.entries()) {
      if (result.status === 'rejected') {
        const failedPage = batch[index];
        const fullPath = path.join(sitePath, failedPage.outputPath);
        
        // CREDIT SAVER: Check if the page was actually written AND is valid before the error
        try {
          const existingStat = await fs.stat(fullPath);
          const isValid = await validatePageContent(fullPath);
          
          if (isValid && existingStat.size > 500) {
            completedCount++;
            skippedCount++;
            console.log(`[${failedPage.name}] ⤭ SKIP retry (file was written and valid, ${existingStat.size} bytes) (${completedCount}/${total})`);
            if (onProgress) {
              onProgress(failedPage.name, completedCount, total, 'skipped');
            }
            continue; // Skip to next failed page
          } else {
            // File exists but is invalid - try to regenerate
            console.log(`[${failedPage.name}] ⚠ File exists but invalid, attempting retry...`);
          }
        } catch (err) {
          // File doesn't exist, proceed with retry
        }
        
        console.warn(`[${failedPage.name}] Initial attempt failed, retrying once...`);
        
        try {
          const content = await generatePageWithClaude(failedPage, config);
          await fs.mkdir(path.dirname(fullPath), { recursive: true });
          await fs.writeFile(fullPath, content, 'utf-8');
          
          completedCount++;
          generatedCount++;
          console.log(`[${failedPage.name}] ✓ Generated on retry (${completedCount}/${total})`);
          
          if (onProgress) {
            onProgress(failedPage.name, completedCount, total, 'generated');
          }
        } catch (retryError: any) {
          console.error(`[${failedPage.name}] ✗ SKIPPED after retry: ${retryError.message}`);
          // Don't throw - continue with other pages
        }
      }
    }
    
    // Adaptive delay: only if not last batch
    if (batchIndex < batches.length - 1) {
      const timeSinceRateLimit = Date.now() - lastRateLimitHit;
      const delay = timeSinceRateLimit < 60000 ? BATCH_DELAY_MS : 10000; // 10s if no recent rate limits
      console.log(`[Rate Limit] Waiting ${delay / 1000}s before next batch... (last rate limit: ${(timeSinceRateLimit / 1000).toFixed(0)}s ago)`);
      await sleep(delay);
    }
  }
  
  // Final summary with credit savings info
  console.log(`\n✓ All ${total} pages complete!`);
  console.log(`  - ${generatedCount} pages generated (used Claude API credits)`);
  console.log(`  - ${skippedCount} pages skipped (saved ${skippedCount} API calls)`);
  if (skippedCount > 0) {
    console.log(`  💰 Credit savings: ~${(skippedCount * 0.03).toFixed(2)} USD saved by skipping existing pages`);
  }
}

/**
 * Generate content for a single page
 */
export async function generatePageContent(
  pageType: string,
  config: SiteConfig
): Promise<string> {
  const pageDef = PAGE_DEFINITIONS.find(p => p.name === pageType);
  if (!pageDef) {
    throw new Error(`Unknown page type: ${pageType}`);
  }
  return generatePageWithClaude(pageDef, config);
}

/**
 * Get the total number of pages that will be generated
 */
export function getTotalPages(options?: GenerateOptions): number {
  return filterPageDefinitions(options).length;
}

/**
 * Get list of all page names
 */
export function getPageNames(): string[] {
  return PAGE_DEFINITIONS.map(p => p.name);
}
