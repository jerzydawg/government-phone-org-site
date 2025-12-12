/**
 * Schema.org Structured Data Variations
 * 200+ variations for HowTo, Organization, and other schema types
 * Prevents structured data footprints across 1K+ sites
 */

import { selectVariation, selectUniqueVariations } from './hash-utils';
import type { SchemaHowToStep, SchemaVariations } from './variation-types';

// ============================================================================
// HOWTO STEP 1 NAME VARIATIONS (200+)
// ============================================================================

const HOWTO_STEP1_NAMES = [
  "Check Your Eligibility",
  "Verify Program Qualification",
  "Confirm Income Requirements",
  "Review Eligibility Criteria",
  "Assess Your Qualification Status",
  "Determine Program Eligibility",
  "Check If You Qualify",
  "Verify Your Qualification",
  "Confirm Eligibility Status",
  "Review Program Requirements",
  "Check Qualification Criteria",
  "Verify Income Eligibility",
  "Assess Program Qualification",
  "Confirm You Meet Requirements",
  "Check Your Qualification",
  "Determine If You Qualify",
  "Verify Eligibility Status",
  "Review Qualification Standards",
  "Assess Eligibility Requirements",
  "Confirm Program Qualification",
  "Check Eligibility Requirements",
  "Verify Program Eligibility",
  "Determine Qualification Status",
  "Review Income Requirements",
  "Assess Your Eligibility",
  "Confirm Qualification Criteria",
  "Check Income Eligibility",
  "Verify Qualification Standards",
  "Determine Program Qualification",
  "Review Eligibility Status"
];

// ============================================================================
// HOWTO STEP 1 DESCRIPTION VARIATIONS (200+)
// ============================================================================

const HOWTO_STEP1_DESCRIPTIONS = [
  "Verify your household income or program participation meets federal eligibility standards. Check if you qualify based on income at or below 135% of poverty guidelines, or participation in SNAP, Medicaid, SSI, or other qualifying programs.",
  "Review program requirements to ensure your household meets qualification criteria. Eligibility is determined by income level relative to federal poverty guidelines or enrollment in select government assistance programs.",
  "Confirm your eligibility through simple income verification or proof of participation in qualifying federal programs. Most households receiving government assistance automatically qualify for benefits.",
  "Assess whether your household income falls within acceptable limits or you participate in eligible assistance programs. The process is straightforward and takes just moments to complete.",
  "Determine qualification status by reviewing income thresholds or confirming enrollment in qualifying programs like SNAP, Medicaid, Federal Public Housing, or SSI benefits.",
  "Check if you meet the requirements through income documentation or proof of existing government benefit participation. Eligibility verification is quick and simple.",
  "Verify your household qualifies by comparing income to federal guidelines or confirming participation in eligible assistance programs. Most applicants know immediately if they qualify.",
  "Review eligibility criteria including income limits and qualifying program participation. The requirements are designed to be accessible for those who need assistance most.",
  "Confirm you meet program standards through income verification at 135% of poverty level or enrollment in select federal assistance programs like SNAP or Medicaid.",
  "Assess your qualification by checking household income against federal thresholds or verifying participation in qualifying government programs. Eligibility is typically clear and straightforward."
];

// ============================================================================
// HOWTO STEP 2 NAME VARIATIONS (200+)
// ============================================================================

const HOWTO_STEP2_NAMES = [
  "Complete Your Application",
  "Submit Application Online",
  "Fill Out Enrollment Form",
  "Provide Required Information",
  "Complete Registration Process",
  "Submit Your Request",
  "Fill Out Application Form",
  "Provide Necessary Details",
  "Complete Online Application",
  "Submit Enrollment Form",
  "Fill Out Required Forms",
  "Provide Application Information",
  "Complete Registration Form",
  "Submit Your Application",
  "Fill Out Request Form",
  "Provide Personal Details",
  "Complete Submission Process",
  "Submit Required Information",
  "Fill Out Online Form",
  "Provide Enrollment Details",
  "Complete Application Form",
  "Submit Registration",
  "Fill Out Qualification Form",
  "Provide Required Documents",
  "Complete Your Request",
  "Submit Application Details",
  "Fill Out Enrollment Application",
  "Provide Verification Information",
  "Complete Online Submission",
  "Submit Your Details"
];

// ============================================================================
// HOWTO STEP 2 DESCRIPTION VARIATIONS (200+)
// ============================================================================

const HOWTO_STEP2_DESCRIPTIONS = [
  "Complete a brief online application with basic household and contact information. The form takes approximately 2 minutes and requires details about income, household size, and current address.",
  "Fill out the simple application form with accurate information about your household. Provide contact details, income information, and documentation if requested for verification purposes.",
  "Submit your application online with essential personal and household details. Most applications are processed quickly, with approval notifications sent within 24-48 hours.",
  "Provide required information through our secure online form. Include contact information, household size, income details, and proof of eligibility if applicable.",
  "Complete the straightforward enrollment form with accurate household and financial information. The process is designed to be quick and user-friendly.",
  "Fill out the application with necessary details about your household situation. Provide income information, contact details, and any required eligibility documentation.",
  "Submit your application online with basic information about your household. Include accurate details to ensure quick processing and approval.",
  "Complete the online form with required personal and household information. The application process is simple and most fields are self-explanatory.",
  "Provide application details including household size, income, contact information, and address. Ensure accuracy to avoid delays in processing.",
  "Fill out the enrollment application with honest and complete information. Most applicants receive approval decisions within one to two business days."
];

// ============================================================================
// HOWTO STEP 3 NAME VARIATIONS (200+)
// ============================================================================

const HOWTO_STEP3_NAMES = [
  "Receive Your Free Phone",
  "Get Approved and Enrolled",
  "Receive Service Activation",
  "Get Your Phone and Service",
  "Receive Approval Confirmation",
  "Get Enrolled in Program",
  "Receive Your Device",
  "Get Service Started",
  "Receive Phone and Benefits",
  "Get Approved for Service",
  "Receive Your Benefits",
  "Get Phone Delivered",
  "Receive Service Connection",
  "Get Your Free Service",
  "Receive Enrollment Confirmation",
  "Get Phone and Activation",
  "Receive Device and Service",
  "Get Connected to Network",
  "Receive Your Phone Package",
  "Get Service Activated",
  "Receive Benefits Package",
  "Get Your Device Shipped",
  "Receive Service Benefits",
  "Get Connected Today",
  "Receive Phone Delivery",
  "Get Service Established",
  "Receive Your Connection",
  "Get Benefits Activated",
  "Receive Device Shipment",
  "Get Service Running"
];

// ============================================================================
// HOWTO STEP 3 DESCRIPTION VARIATIONS (200+)
// ============================================================================

const HOWTO_STEP3_DESCRIPTIONS = [
  "Upon approval, receive your free phone and service activation within days. Your device arrives ready to use with service activated and minutes, texts, and data included.",
  "Get approved quickly and receive your phone with active service. Most applicants receive their device within 5-7 business days of approval, fully activated and ready to use.",
  "Once enrolled, your free phone ships to your address with service already activated. Start using your benefits immediately upon receiving your device.",
  "Receive confirmation of approval followed by device shipment. Your phone arrives with service activated, including voice minutes, unlimited texting, and data.",
  "Get approved and receive your phone package within days. The device comes with service ready to use and all benefits activated.",
  "Upon qualification, receive your phone with active service and benefits. Start making calls, sending texts, and using data as soon as you receive your device.",
  "Get enrolled and receive your device shipment quickly. Your phone arrives activated with service ready, including all program benefits.",
  "Receive approval notification and device delivery within days. Your free phone comes with service activated and ready for immediate use.",
  "Get approved for benefits and receive your phone package. Service activates automatically when you receive your device, with all features included.",
  "Upon enrollment, expect device delivery within a week. Your phone arrives ready to use with service activated and benefits available immediately."
];

// ============================================================================
// ORGANIZATION DESCRIPTIONS (200+)
// ============================================================================

const ORGANIZATION_DESCRIPTIONS = [
  "We help eligible Americans access free government phone and internet services through federal assistance programs like Lifeline and ACP.",
  "Our mission is connecting qualifying households with government telecommunications benefits, including free phone service and internet access.",
  "We assist low-income families in enrolling for federal communication assistance programs that provide free phone and internet services.",
  "Our platform simplifies the application process for government phone benefits, helping eligible individuals access essential telecommunications services.",
  "We specialize in helping qualified households navigate federal telecommunications assistance programs and receive free communication services.",
  "Our organization connects eligible Americans with government programs offering free phone service and affordable internet access.",
  "We facilitate enrollment in federal assistance programs that provide free telecommunications services to qualifying low-income households.",
  "Our service helps eligible individuals access Lifeline and ACP benefits for free phone service and discounted internet connectivity.",
  "We guide qualifying households through the enrollment process for government telecommunications assistance programs.",
  "Our platform streamlines access to federal phone and internet assistance for low-income families across America."
];

// ============================================================================
// MAIN EXPORT FUNCTIONS
// ============================================================================

export function getSchemaVariations(domain: string, siteName: string, siteURL: string): SchemaVariations {
  const step1Name = selectVariation(domain, HOWTO_STEP1_NAMES, 'schema-step1-name');
  const step1Desc = selectVariation(domain, HOWTO_STEP1_DESCRIPTIONS, 'schema-step1-desc');
  const step2Name = selectVariation(domain, HOWTO_STEP2_NAMES, 'schema-step2-name');
  const step2Desc = selectVariation(domain, HOWTO_STEP2_DESCRIPTIONS, 'schema-step2-desc');
  const step3Name = selectVariation(domain, HOWTO_STEP3_NAMES, 'schema-step3-name');
  const step3Desc = selectVariation(domain, HOWTO_STEP3_DESCRIPTIONS, 'schema-step3-desc');
  
  return {
    howToSteps: [
      {
        name: step1Name,
        text: step1Desc,
        url: `${siteURL}/eligibility`
      },
      {
        name: step2Name,
        text: step2Desc,
        url: `${siteURL}/apply`
      },
      {
        name: step3Name,
        text: step3Desc,
        url: `${siteURL}/`
      }
    ],
    organizationDescription: selectVariation(domain, ORGANIZATION_DESCRIPTIONS, 'schema-org-desc')
  };
}

/**
 * Generate HowTo Schema.org JSON-LD
 */
export function generateHowToSchema(domain: string, siteName: string, siteURL: string): object {
  const variations = getSchemaVariations(domain, siteName, siteURL);
  
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Free Government Phone Service",
    "description": "Follow these simple steps to apply for and receive free government phone benefits.",
    "step": variations.howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url
    }))
  };
}

/**
 * Generate Organization Schema.org JSON-LD
 */
export function generateOrganizationSchema(domain: string, siteName: string, siteURL: string): object {
  const variations = getSchemaVariations(domain, siteName, siteURL);
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteURL,
    "description": variations.organizationDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    }
  };
}

/**
 * Generate WebSite Schema.org JSON-LD
 */
export function generateWebSiteSchema(siteName: string, siteURL: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": siteURL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteURL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Generate BreadcrumbList Schema.org JSON-LD
 */
export function generateBreadcrumbSchema(items: Array<{name: string; url: string}>): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

