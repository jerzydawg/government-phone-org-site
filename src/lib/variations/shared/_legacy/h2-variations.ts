/**
 * H2 Heading Variations
 * 200+ H2 variations with LSI keywords for proper hierarchy
 */

import { selectVariation, selectUniqueVariations } from './hash-utils';

// ============================================================================
// H2 VARIATIONS FOR DIFFERENT CONTEXTS (200+)
// ============================================================================

const BENEFITS_H2S = [
  "Program Benefits",
  "What You'll Get",
  "Your Benefits",
  "Service Features",
  "Program Features",
  "Benefit Details",
  "What's Included",
  "Your Advantages",
  "Program Perks",
  "Service Benefits",
  "Key Benefits",
  "Why Choose This Program",
  "Benefit Overview",
  "What to Expect",
  "Your Program Benefits",
  "Service Advantages",
  "Program Offerings",
  "Benefit Highlights",
  "Features Included",
  "Program Value"
];

const ELIGIBILITY_H2S = [
  "Who Qualifies",
  "Eligibility Requirements",
  "Do You Qualify?",
  "Qualification Criteria",
  "Who's Eligible",
  "Requirements Overview",
  "Eligibility Standards",
  "Who Can Apply",
  "Qualification Requirements",
  "Am I Eligible?",
  "Eligibility Basics",
  "Who Meets Requirements",
  "Qualification Standards",
  "Eligibility Details",
  "Who Qualifies for Benefits",
  "Requirements Explained",
  "Eligibility Information",
  "Who Can Participate",
  "Qualification Guidelines",
  "Eligibility Criteria"
];

const HOW_IT_WORKS_H2S = [
  "How It Works",
  "The Process",
  "Getting Started",
  "Simple Steps",
  "Application Process",
  "How to Apply",
  "Easy Enrollment",
  "Quick Steps",
  "The Application Process",
  "Getting Your Benefits",
  "How to Enroll",
  "Application Steps",
  "Enrollment Process",
  "How to Get Started",
  "The Enrollment Process",
  "Applying for Benefits",
  "Sign-Up Process",
  "Registration Steps",
  "How to Join",
  "Getting Enrolled"
];

const PROGRAM_INFO_H2S = [
  "About the Program",
  "Program Information",
  "Program Overview",
  "Program Details",
  "Understanding the Program",
  "Program Background",
  "What Is This Program?",
  "Program Explained",
  "About This Benefit",
  "Program History",
  "Program Purpose",
  "Why This Program Exists",
  "Program Mission",
  "Program Goals",
  "About Federal Assistance",
  "Government Program Details",
  "Federal Program Information",
  "Program Description",
  "Understanding Benefits",
  "About Government Support"
];

const PROVIDERS_H2S = [
  "Available Providers",
  "Service Providers",
  "Choose Your Provider",
  "Provider Options",
  "Participating Companies",
  "Select a Provider",
  "Service Companies",
  "Available Carriers",
  "Provider List",
  "Approved Providers",
  "Network Providers",
  "Carrier Options",
  "Provider Directory",
  "Service Options",
  "Participating Carriers",
  "Provider Choices",
  "Available Networks",
  "Carrier List",
  "Service Provider Options",
  "Provider Information"
];

const FAQ_SECTION_H2S = [
  "Common Questions",
  "Frequently Asked Questions",
  "Your Questions Answered",
  "FAQ",
  "Questions & Answers",
  "Get Answers",
  "Have Questions?",
  "Need Help?",
  "Questions",
  "Answers to Common Questions",
  "Popular Questions",
  "What People Ask",
  "Helpful Answers",
  "Question Center",
  "Information & Help",
  "Support & FAQ",
  "Common Concerns",
  "Quick Answers",
  "Help & Information",
  "Frequently Requested Info"
];

const INCOME_H2S = [
  "Income Requirements",
  "Income Guidelines",
  "Income Limits",
  "Income Eligibility",
  "Financial Requirements",
  "Income Thresholds",
  "Income-Based Qualification",
  "Income Standards",
  "Financial Eligibility",
  "Income Criteria",
  "Income Level Requirements",
  "Financial Guidelines",
  "Income Qualification",
  "Income-Based Eligibility",
  "Financial Thresholds",
  "Income Limits Explained",
  "Qualifying Income Levels",
  "Income Requirements Overview",
  "Financial Standards",
  "Income Eligibility Guidelines"
];

const DOCUMENTS_H2S = [
  "Required Documentation",
  "What Documents You'll Need",
  "Document Requirements",
  "Necessary Documents",
  "Required Papers",
  "Documentation Needed",
  "What to Prepare",
  "Document Checklist",
  "Required Information",
  "What You'll Need",
  "Documentation Overview",
  "Needed Documents",
  "Required Documents List",
  "Documentation Requirements",
  "What to Bring",
  "Document Guidelines",
  "Necessary Paperwork",
  "Required Materials",
  "Documentation Details",
  "Information Requirements"
];

const APPLY_SECTION_H2S = [
  "Ready to Apply?",
  "Start Your Application",
  "Apply Today",
  "Get Started",
  "Begin Application",
  "Apply Now",
  "Start Enrollment",
  "Submit Your Application",
  "Apply for Benefits",
  "Start the Process",
  "Begin Your Application",
  "Get Your Benefits",
  "Apply Online",
  "Start Today",
  "Take the First Step",
  "Begin Enrollment",
  "Apply for Assistance",
  "Get Started Today",
  "Start Your Request",
  "Submit Application"
];

const TESTIMONIAL_H2S = [
  "Success Stories",
  "What People Say",
  "Real Experiences",
  "Testimonials",
  "Customer Stories",
  "Hear From Others",
  "Real People, Real Benefits",
  "Member Experiences",
  "Success Examples",
  "What Participants Say",
  "Customer Feedback",
  "User Experiences",
  "Real Results",
  "Member Stories",
  "People We've Helped",
  "Participant Testimonials",
  "Actual Experiences",
  "Success Examples",
  "What Members Say",
  "Real People Benefits"
];

// ============================================================================
// LSI KEYWORD VARIATIONS FOR SEO (200+)
// ============================================================================

const LSI_H2S = [
  "Federal Phone Assistance Programs",
  "Telecommunications Support Options",
  "Government Communication Benefits",
  "Low-Income Phone Service",
  "Affordable Connectivity Solutions",
  "Federal Communication Aid",
  "Phone Service Assistance",
  "Wireless Support Programs",
  "Mobile Service Benefits",
  "Federal Telecom Assistance",
  "Communication Affordability Programs",
  "Phone Bill Assistance",
  "Wireless Service Support",
  "Mobile Connectivity Aid",
  "Telecommunications Subsidies",
  "Federal Phone Support",
  "Communication Service Benefits",
  "Wireless Assistance Programs",
  "Mobile Phone Support",
  "Telecom Affordability Options"
];

// ============================================================================
// ALL H2S COMBINED
// ============================================================================

const ALL_H2_VARIATIONS = [
  ...BENEFITS_H2S,
  ...ELIGIBILITY_H2S,
  ...HOW_IT_WORKS_H2S,
  ...PROGRAM_INFO_H2S,
  ...PROVIDERS_H2S,
  ...FAQ_SECTION_H2S,
  ...INCOME_H2S,
  ...DOCUMENTS_H2S,
  ...APPLY_SECTION_H2S,
  ...TESTIMONIAL_H2S,
  ...LSI_H2S
];

// ============================================================================
// MAIN EXPORT FUNCTIONS
// ============================================================================

/**
 * Get a single H2 variation for a specific context
 */
export function getH2Variation(
  domain: string,
  context: 'benefits' | 'eligibility' | 'how-it-works' | 'program-info' | 
           'providers' | 'faq' | 'income' | 'documents' | 'apply' | 'testimonials' | 'lsi'
): string {
  let variations: string[];
  
  switch (context) {
    case 'benefits':
      variations = BENEFITS_H2S;
      break;
    case 'eligibility':
      variations = ELIGIBILITY_H2S;
      break;
    case 'how-it-works':
      variations = HOW_IT_WORKS_H2S;
      break;
    case 'program-info':
      variations = PROGRAM_INFO_H2S;
      break;
    case 'providers':
      variations = PROVIDERS_H2S;
      break;
    case 'faq':
      variations = FAQ_SECTION_H2S;
      break;
    case 'income':
      variations = INCOME_H2S;
      break;
    case 'documents':
      variations = DOCUMENTS_H2S;
      break;
    case 'apply':
      variations = APPLY_SECTION_H2S;
      break;
    case 'testimonials':
      variations = TESTIMONIAL_H2S;
      break;
    case 'lsi':
      variations = LSI_H2S;
      break;
    default:
      variations = ALL_H2_VARIATIONS;
  }
  
  return selectVariation(domain, variations, `h2-${context}`);
}

/**
 * Get multiple H2 variations for a page
 */
export function getH2Variations(
  domain: string,
  contexts: Array<'benefits' | 'eligibility' | 'how-it-works' | 'program-info' | 
                   'providers' | 'faq' | 'income' | 'documents' | 'apply' | 'testimonials' | 'lsi'>
): string[] {
  return contexts.map((context, index) => 
    selectVariation(domain, 
      context === 'lsi' ? LSI_H2S : 
      context === 'benefits' ? BENEFITS_H2S :
      context === 'eligibility' ? ELIGIBILITY_H2S :
      context === 'how-it-works' ? HOW_IT_WORKS_H2S :
      context === 'program-info' ? PROGRAM_INFO_H2S :
      context === 'providers' ? PROVIDERS_H2S :
      context === 'faq' ? FAQ_SECTION_H2S :
      context === 'income' ? INCOME_H2S :
      context === 'documents' ? DOCUMENTS_H2S :
      context === 'apply' ? APPLY_SECTION_H2S :
      TESTIMONIAL_H2S,
      `h2-${context}-${index}`
    )
  );
}

/**
 * Get random H2s from all variations
 */
export function getRandomH2Variations(
  domain: string,
  count: number
): string[] {
  return selectUniqueVariations(domain, ALL_H2_VARIATIONS, count, 'h2-random');
}

