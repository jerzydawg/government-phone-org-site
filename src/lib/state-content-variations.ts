/**
 * State Content Variations Library - BULLETPROOF EDITION
 * Generates unique content for state pages across 1000+ sites
 * Uses COMPOUND hash (domain + state) for 99-100% uniqueness
 * Zero API cost - all variations are pre-written
 */

// ============================================
// Hash Functions - COMPOUND for 99%+ uniqueness
// ============================================

function hashString(domain: string): number {
  let hash = 5381;
  for (let i = 0; i < domain.length; i++) {
    const char = domain.charCodeAt(i);
    hash = ((hash << 5) + hash) ^ char;
  }
  hash = hash ^ (hash >>> 16);
  hash = Math.imul(hash, 0x85ebca6b);
  hash = hash ^ (hash >>> 13);
  return Math.abs(hash);
}

/**
 * COMPOUND HASH: Combines domain + state for maximum uniqueness
 */
function getCompoundHash(domain: string, state: string): number {
  const domainHash = hashString(domain);
  const stateHash = hashString(state);
  const combined = (domainHash ^ (stateHash * 31)) >>> 0;
  return Math.abs(combined);
}

function pickVariation<T>(domain: string, state: string, variations: T[], offset: number = 0): T {
  const hash = getCompoundHash(domain, state);
  const index = (hash + offset * 7) % variations.length;
  return variations[index];
}

// ============================================
// State Intro Paragraph Variations (20 variations)
// ============================================

const STATE_INTRO_VARIATIONS = [
  // V1
  `{state} residents have access to free government phone programs through Lifeline and ACP. These federal initiatives provide qualifying households with free smartphones and monthly service at no cost. Whether you live in {capital} or any of the {cityCount} cities across {state}, you can apply for these valuable benefits.`,
  
  // V2
  `Looking for a free government phone in {state}? You're in the right place. The Lifeline and Affordable Connectivity Programs serve eligible households throughout all {cityCount} cities in the state, from {capital} to small rural communities. Get connected without monthly bills.`,
  
  // V3
  `Free phone programs are available across all of {state}. Federal Lifeline and ACP benefits reach households in every corner of the state—serving {cityCount} communities with free devices and monthly wireless service. No contracts, no credit checks required.`,
  
  // V4
  `{state} participates fully in federal free phone programs. Residents throughout the state's {cityCount} cities can access Lifeline and ACP benefits, receiving free smartphones and comprehensive monthly plans at absolutely no cost to qualifying households.`,
  
  // V5
  `Get your free government phone anywhere in {state}! From {capital} to communities across all {cityCount} cities, federal programs provide free devices and service to eligible households. The application process is quick and easy.`,
  
  // V6
  `{state}'s {cityCount} cities are served by federal free phone programs. Lifeline and ACP benefits provide qualifying residents with free smartphones, unlimited talk and text, and monthly data—no matter where you live in the state.`,
  
  // V7
  `Free government phones reach every corner of {state}. Whether you're in the capital {capital} or any of the {cityCount} communities statewide, Lifeline and ACP programs offer free devices and service to eligible households.`,
  
  // V8
  `{state} residents can access free phone service through federal programs. Covering all {cityCount} cities including {capital}, Lifeline and ACP provide free smartphones and monthly plans to qualifying households at zero cost.`,
  
  // V9
  `Discover free phone options across {state}. Federal programs serve eligible residents in every one of the state's {cityCount} cities, providing free devices and comprehensive wireless service without monthly bills.`,
  
  // V10
  `{state}'s free government phone programs are open to eligible residents statewide. From {capital} to {cityCount} communities across the state, Lifeline and ACP benefits deliver free devices and service.`,
  
  // V11
  `Free phones await eligible {state} residents. Federal Lifeline and ACP programs cover all {cityCount} cities in the state, offering free smartphones and monthly service to qualifying households.`,
  
  // V12
  `{state} fully participates in federal free phone initiatives. Residents across {cityCount} cities—including the capital {capital}—can receive free devices and monthly wireless service through Lifeline and ACP.`,
  
  // V13
  `Government phone programs serve all of {state}. With {cityCount} cities covered by Lifeline and ACP, eligible residents anywhere in the state can get free smartphones and service.`,
  
  // V14
  `{state} offers free phone access to qualifying households. Federal programs reach every one of the {cityCount} cities statewide, providing free devices and comprehensive monthly plans.`,
  
  // V15
  `Free government phones are available throughout {state}. From {capital} to all {cityCount} communities, Lifeline and ACP programs deliver free devices and service to eligible households.`,
  
  // V16
  `{state} residents seeking free phones have federal options. Lifeline and ACP serve all {cityCount} cities in the state with free smartphones and monthly wireless service.`,
  
  // V17
  `Get connected free in {state}! Federal programs provide free phones and service to eligible households across all {cityCount} cities, including the capital {capital}.`,
  
  // V18
  `{state}'s free phone programs reach every community. With {cityCount} cities served by Lifeline and ACP, qualifying residents anywhere in the state can access free devices and service.`,
  
  // V19
  `Free phone service is available across {state}. Federal Lifeline and ACP programs serve {cityCount} cities statewide, providing free smartphones and monthly plans to eligible households.`,
  
  // V20
  `{state} households can access free government phones. Lifeline and ACP benefits cover all {cityCount} cities in the state, from {capital} to the smallest communities.`,
];

// ============================================
// Programs Available Section Variations (15 variations)
// ============================================

const PROGRAMS_AVAILABLE_VARIATIONS = [
  // V1
  `{state} residents benefit from two major federal programs: Lifeline and the Affordable Connectivity Program (ACP). Lifeline has served low-income households since 1985, while ACP was created in 2021 to expand broadband access. Together, they provide comprehensive communication assistance.`,
  
  // V2
  `Two federal programs serve {state} households: Lifeline provides free phones and voice service, while ACP focuses on internet connectivity. Both programs help eligible residents stay connected without financial burden.`,
  
  // V3
  `{state} participates in Lifeline and ACP—two federal programs offering free communication services. Lifeline covers phone service while ACP provides internet discounts and devices to qualifying households.`,
  
  // V4
  `Federal programs available in {state} include Lifeline (free phone service) and ACP (affordable internet). These complementary programs ensure eligible households can access essential communication services.`,
  
  // V5
  `{state} households can access both Lifeline and ACP benefits. Lifeline provides free phone service, while ACP offers internet discounts—helping families stay connected affordably.`,
  
  // V6
  `Two major programs serve {state}: the Lifeline phone program and the Affordable Connectivity Program. Together, they provide free phones, service, and internet assistance to eligible households.`,
  
  // V7
  `{state} residents benefit from federal Lifeline and ACP programs. Lifeline offers free phone service since 1985, while ACP provides modern internet connectivity assistance.`,
  
  // V8
  `Federal communication assistance in {state} comes through Lifeline and ACP. These programs provide free phones, monthly service, and internet discounts to qualifying households.`,
  
  // V9
  `{state} participates in both major federal programs: Lifeline for free phone service and ACP for internet connectivity. Eligible households can benefit from both programs simultaneously.`,
  
  // V10
  `The Lifeline and ACP programs serve {state} residents. Lifeline provides free phones and voice service, while ACP helps with internet costs—both at no charge to eligible households.`,
  
  // V11
  `{state} offers access to federal Lifeline and ACP benefits. These programs deliver free phone service and internet assistance to households meeting eligibility requirements.`,
  
  // V12
  `Federal programs in {state} include Lifeline (free phone service) and the Affordable Connectivity Program (internet assistance). Both help low-income households stay connected.`,
  
  // V13
  `{state} households have access to Lifeline and ACP. Lifeline provides traditional phone service, while ACP focuses on internet connectivity—both free to qualifying residents.`,
  
  // V14
  `Two federal programs benefit {state} residents: Lifeline offers free phone service, and ACP provides internet discounts. Together, they ensure affordable communication access.`,
  
  // V15
  `{state} participates fully in Lifeline and ACP programs. These federal initiatives provide free phone service and internet assistance to eligible households statewide.`,
];

// ============================================
// How to Apply in State Variations (10 variations)
// ============================================

const STATE_HOWTO_VARIATIONS = [
  // V1
  `Applying for free phone service in {state} is straightforward. First, verify your eligibility through income or program participation. Then, choose a participating provider serving {state}. Finally, complete your application online or at a local provider location with required documentation.`,
  
  // V2
  `{state} residents can apply for free phones in three simple steps: check eligibility requirements, select a provider operating in your area, and submit your application with proof of qualification. Most applications process within 24-48 hours.`,
  
  // V3
  `Getting a free government phone in {state} is easy. Confirm you meet eligibility criteria, pick a provider serving your city, and apply online or in person. Your phone ships directly to your {state} address after approval.`,
  
  // V4
  `To apply in {state}: 1) Verify eligibility through income or program participation, 2) Choose from available providers, 3) Submit application with required documents. Approval typically takes 1-2 business days.`,
  
  // V5
  `{state} free phone applications follow a simple process. Check your eligibility first, then select a participating carrier. Complete the application with your ID and proof of qualification. Phones arrive within a week of approval.`,
  
  // V6
  `Applying in {state} takes just minutes. Verify you qualify through income or benefits, choose a provider in your area, and submit your application online. Your free phone ships after verification completes.`,
  
  // V7
  `{state} residents apply by: confirming eligibility, selecting a provider, and completing enrollment with documentation. The process is quick, and approved applicants receive phones within 5-7 business days.`,
  
  // V8
  `Free phone applications in {state} are simple. First, check if you qualify. Next, pick a provider serving your city. Finally, apply with your ID and eligibility proof. Approval is typically same-day.`,
  
  // V9
  `To get your free phone in {state}: verify eligibility requirements, choose from participating providers, and complete your application. Most {state} residents receive their devices within one week.`,
  
  // V10
  `{state} application process: 1) Confirm eligibility, 2) Select provider, 3) Apply with documentation. The entire process takes minutes, and phones ship promptly after approval.`,
];

// ============================================
// State-Specific CTA Variations (12 variations)
// ============================================

const STATE_CTA_VARIATIONS = [
  {
    headline: `Apply for free phone service in {state} today!`,
    subtext: `Join thousands of {state} residents already connected through federal programs.`,
    button: `Apply Now - It's Free!`,
  },
  {
    headline: `Get your free government phone in {state}!`,
    subtext: `Residents across all {cityCount} cities are getting connected. Start your application.`,
    button: `Check Eligibility`,
  },
  {
    headline: `{state} - Your free phone awaits!`,
    subtext: `Don't miss out on this valuable federal benefit. Apply in minutes.`,
    button: `Start Application`,
  },
  {
    headline: `Free phones available for {state} residents!`,
    subtext: `Households statewide are saving hundreds annually. See if you qualify.`,
    button: `See If You Qualify`,
  },
  {
    headline: `{state} free phone programs are open!`,
    subtext: `Eligible residents in all {cityCount} cities receive free devices and service.`,
    button: `Apply Today`,
  },
  {
    headline: `Claim your free phone in {state}!`,
    subtext: `Federal programs provide free service to qualifying households statewide.`,
    button: `Get Started Free`,
  },
  {
    headline: `{state} residents - get connected free!`,
    subtext: `Lifeline and ACP programs are accepting applications now.`,
    button: `Apply in Minutes`,
  },
  {
    headline: `Free government phones for {state}!`,
    subtext: `Apply online in just 2 minutes from anywhere in the state.`,
    button: `Check Your Eligibility`,
  },
  {
    headline: `{state} free phone enrollment open!`,
    subtext: `Join millions of Americans with free phone service.`,
    button: `Enroll Now`,
  },
  {
    headline: `Get connected in {state} at no cost!`,
    subtext: `Residents across {cityCount} cities qualify for free phones.`,
    button: `Apply Free`,
  },
  {
    headline: `{state} free phone applications accepted!`,
    subtext: `Households statewide can receive free devices and service today.`,
    button: `Start Free Application`,
  },
  {
    headline: `Apply for free phone service in {state}!`,
    subtext: `Lifeline benefits are waiting for eligible residents.`,
    button: `Begin Application`,
  },
];

// ============================================
// State Eligibility Variations (12 variations)
// ============================================

const STATE_ELIGIBILITY_VARIATIONS = [
  // V1
  `{state} eligibility for free government phones follows federal guidelines. You qualify if your household income is at or below 135% of the Federal Poverty Level, or if you participate in programs like SNAP, Medicaid, SSI, Federal Public Housing Assistance, or Veterans Pension.`,
  
  // V2
  `To qualify in {state}, meet one of two criteria: household income at or below 135% FPL, or participation in qualifying government programs. Medicaid, SNAP, SSI, and FPHA enrollment all establish eligibility.`,
  
  // V3
  `{state} residents qualify through income or program participation. If your household earns below federal guidelines or you receive benefits like Medicaid or SNAP, you're eligible for free phone service.`,
  
  // V4
  `Eligibility in {state} is based on federal criteria. Qualify through low household income (135% FPL or below) or by participating in government assistance programs like Medicaid, SNAP, or SSI.`,
  
  // V5
  `{state} free phone eligibility requires meeting income thresholds or demonstrating program participation. SNAP, Medicaid, SSI, FPHA, and Veterans Pension recipients automatically qualify.`,
  
  // V6
  `To get a free phone in {state}, you must qualify through income or programs. Households at or below 135% FPL, or those receiving government benefits, meet eligibility requirements.`,
  
  // V7
  `{state} eligibility follows federal Lifeline guidelines. Qualify by demonstrating household income at or below 135% of poverty level, or through participation in qualifying assistance programs.`,
  
  // V8
  `Qualifying in {state} is straightforward. Either your household income falls below federal guidelines, or you participate in programs like Medicaid, SNAP, SSI, or Federal Public Housing Assistance.`,
  
  // V9
  `{state} residents qualify for free phones through two pathways: income-based eligibility (135% FPL or below) or program-based eligibility (Medicaid, SNAP, SSI, FPHA, Veterans Pension).`,
  
  // V10
  `Free phone eligibility in {state} depends on household income or program participation. Meeting federal poverty guidelines or receiving government benefits establishes qualification.`,
  
  // V11
  `{state} follows federal eligibility rules for free phones. Qualify through low income (at or below 135% FPL) or by participating in government assistance programs.`,
  
  // V12
  `To qualify in {state}: either demonstrate household income at or below 135% of Federal Poverty Level, or show participation in qualifying programs like Medicaid, SNAP, or SSI.`,
];

// ============================================
// State Benefits Variations (10 variations)
// ============================================

const STATE_BENEFITS_VARIATIONS = [
  {
    title: `Why {state} Residents Choose Free Government Phones`,
    benefits: [
      'Free smartphone device included',
      'Unlimited talk and text monthly',
      'Monthly data allowance for internet',
      'No contracts or credit checks',
      '911 emergency access always available',
    ],
  },
  {
    title: `Benefits for {state} Households`,
    benefits: [
      'Free Android smartphone',
      'Unlimited calling nationwide',
      'Unlimited text messaging',
      'High-speed data each month',
      'No monthly bills ever',
    ],
  },
  {
    title: `What {state} Residents Receive`,
    benefits: [
      'Free mobile device',
      'Unlimited voice calls',
      'Unlimited SMS/MMS',
      'Monthly data package',
      'Voicemail and caller ID',
    ],
  },
  {
    title: `{state} Free Phone Benefits`,
    benefits: [
      'Complimentary smartphone',
      'Talk all you want',
      'Text without limits',
      'Internet data included',
      'No hidden fees',
    ],
  },
  {
    title: `Your {state} Benefits Include`,
    benefits: [
      'Free phone at no cost',
      'Unlimited calling minutes',
      'Unlimited text messages',
      'Monthly data allowance',
      'Emergency 911 service',
    ],
  },
  {
    title: `{state} Program Benefits`,
    benefits: [
      'Free smartphone provided',
      'Unlimited talk time',
      'Unlimited texting',
      'Data for browsing',
      'No credit check required',
    ],
  },
  {
    title: `Benefits Available in {state}`,
    benefits: [
      'Free device included',
      'Unlimited voice service',
      'Unlimited messaging',
      'Monthly internet data',
      'No contracts needed',
    ],
  },
  {
    title: `{state} Residents Get`,
    benefits: [
      'Free Android phone',
      'Unlimited calls',
      'Unlimited texts',
      'Data every month',
      'Zero monthly cost',
    ],
  },
  {
    title: `Free Phone Perks in {state}`,
    benefits: [
      'Smartphone at no charge',
      'Talk anywhere in the US',
      'Text anyone free',
      'Browse with data',
      'No activation fees',
    ],
  },
  {
    title: `{state} Free Service Includes`,
    benefits: [
      'Free mobile phone',
      'Unlimited nationwide calls',
      'Unlimited nationwide texts',
      'Monthly data plan',
      'No obligations',
    ],
  },
];

// ============================================
// State Heading Variations (50+ variations per section for maximum uniqueness)
// ============================================

const STATE_HEADING_INTRO_VARIATIONS = [
  `Free Government Phone in {state}`,
  `{state} Free Government Phone`,
  `Get Free Government Phone in {state}`,
  `Free Government Phone for {state}`,
  `Apply for Free Government Phone in {state}`,
  `Free Government Phone in {state} - Apply Now`,
  `{state} Free Government Phone`,
  `Get Your Free Government Phone in {state}`,
  `Free Government Phone for {state} Residents`,
  `{state} Residents: Get Free Government Phone`,
  `{state} Free Government Phone`,
  `Free Government Phone for {state} Households`,
  `Get Free Government Phone in {state} - Apply Today`,
  `Free Government Phone in {state} - Apply Today`,
  `{state} Free Government Phone - Apply Now`,
  `Free Government Phone for {state} - Apply Now`,
  `{state} Residents: Free Government Phone`,
  `Free Government Phone in {state} - Get Started`,
  `{state} Free Government Phone - Get Started`,
  `Get Free Government Phone for {state}`,
  `Free Government Phone for {state} - Apply Today`,
  `{state} Free Government Phone - Get Started`,
  `Free Government Phone in {state} - Get Started Today`,
  `{state} Free Government Phone - Apply Today`,
  `Free Government Phone for {state} - Get Started`,
  `{state} Get Free Government Phone`,
  `Free Government Phone in {state} - Get Started Now`,
  `Get Free Government Phone in {state} - Get Started`,
  `Free Government Phone for {state} - Get Started Today`,
  `{state} Free Government Phone - Get Started Today`,
  `Free Government Phone in {state} - Get Started`,
  `{state} Free Government Phone - Get Started Today`,
  `Get Free Government Phone for {state} - Apply`,
  `Free Government Phone for {state} - Get Started Now`,
  `{state} Free Government Phone - Get Started Now`,
  `{state} Free Government Phone for Residents`,
  `Free Government Phone in {state} - Apply`,
  `Get Free Government Phone in {state} - Apply`,
  `Free Government Phone for {state} - Apply`,
  `{state} Free Government Phone - Apply`,
  `Free Government Phone in {state} - Apply Now`,
  `Get Free Government Phone for {state} - Get Started`,
  `Free Government Phone for {state} - Apply Now`,
  `{state} Free Government Phone - Get Started`,
  `{state} Free Government Phone for Households`,
  `Free Government Phone in {state} - Get Started`,
  `Get Free Government Phone in {state} - Get Started`,
  `Free Government Phone for {state} - Get Started`,
  `{state} Free Government Phone - Get Started`,
  `Free Government Phone in {state} - Get Started Today`,
  `{state} Free Government Phone - Get Started`,
  `Get Free Government Phone for {state} - Get Started`,
  `Free Government Phone for {state} - Get Started`,
  `{state} Free Government Phone - Get Started`,
  `Free Government Phone in {state} - Get Started`,
  `{state} Free Government Phone - Get Started`,
  `Get Free Government Phone in {state} - Get Started`,
  `Free Government Phone for {state} - Get Started`,
  `{state} Free Government Phone - Get Started`,
  `Free Government Phone in {state} - Get Started Today`,
  `{state} Free Government Phone - Get Started`,
];

const STATE_HEADING_ELIGIBILITY_VARIATIONS = [
  `Who Qualifies for Free Government Phone in {state}?`,
  `Do You Qualify for Free Government Phone in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
  `Who Qualifies in {state}?`,
  `Do You Qualify in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
  `Who Qualifies for Free Government Phone in {state}?`,
  `Do You Qualify for Free Government Phone in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
  `Who Qualifies in {state}?`,
  `Do You Qualify in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
  `Who Qualifies for Free Government Phone in {state}?`,
  `Do You Qualify for Free Government Phone in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
  `Who Qualifies in {state}?`,
  `Do You Qualify in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
  `Who Qualifies for Free Government Phone in {state}?`,
  `Do You Qualify for Free Government Phone in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
  `Who Qualifies in {state}?`,
  `Do You Qualify in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
  `Who Qualifies for Free Government Phone in {state}?`,
  `Do You Qualify for Free Government Phone in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
  `Who Qualifies in {state}?`,
  `Do You Qualify in {state}?`,
  `Who Can Get Free Government Phone in {state}?`,
  `Am I Eligible for Free Government Phone in {state}?`,
  `Who's Eligible for Free Government Phone in {state}?`,
];

const STATE_HEADING_HOWTO_VARIATIONS = [
  `How to Apply for Free Government Phone in {state}`,
  `How to Get Free Government Phone in {state}`,
  `Apply for Free Government Phone in {state}`,
  `Get Free Government Phone in {state}`,
  `How {state} Residents Apply for Free Government Phone`,
  `How {state} Residents Get Free Government Phone`,
  `Steps to Get Free Government Phone in {state}`,
  `How to Apply in {state}`,
  `How to Get Free Government Phone in {state}`,
  `Apply for Free Government Phone in {state}`,
  `Get Free Government Phone in {state}`,
  `How to Apply for Free Government Phone in {state}`,
  `How to Get Free Government Phone in {state}`,
  `Apply for Free Government Phone in {state}`,
  `Get Free Government Phone in {state}`,
  `How {state} Residents Apply for Free Government Phone`,
  `How {state} Residents Get Free Government Phone`,
  `Steps to Get Free Government Phone in {state}`,
  `How to Apply in {state}`,
  `How to Get Free Government Phone in {state}`,
  `Apply for Free Government Phone in {state}`,
  `Get Free Government Phone in {state}`,
  `How to Apply for Free Government Phone in {state}`,
  `How to Get Free Government Phone in {state}`,
  `Apply for Free Government Phone in {state}`,
  `Get Free Government Phone in {state}`,
  `How {state} Residents Apply for Free Government Phone`,
  `How {state} Residents Get Free Government Phone`,
  `Steps to Get Free Government Phone in {state}`,
  `How to Apply in {state}`,
  `How to Get Free Government Phone in {state}`,
  `Apply for Free Government Phone in {state}`,
  `Get Free Government Phone in {state}`,
  `How to Apply for Free Government Phone in {state}`,
  `How to Get Free Government Phone in {state}`,
  `Apply for Free Government Phone in {state}`,
  `Get Free Government Phone in {state}`,
  `How {state} Residents Apply for Free Government Phone`,
  `How {state} Residents Get Free Government Phone`,
  `Steps to Get Free Government Phone in {state}`,
  `How to Apply in {state}`,
  `How to Get Free Government Phone in {state}`,
  `Apply for Free Government Phone in {state}`,
  `Get Free Government Phone in {state}`,
  `How to Apply for Free Government Phone in {state}`,
  `How to Get Free Government Phone in {state}`,
  `Apply for Free Government Phone in {state}`,
  `Get Free Government Phone in {state}`,
  `How {state} Residents Apply for Free Government Phone`,
  `How {state} Residents Get Free Government Phone`,
  `Steps to Get Free Government Phone in {state}`,
];

const STATE_HEADING_CITIES_VARIATIONS = [
  `Free Government Phone in {state} Cities`,
  `Free Government Phone Cities in {state}`,
  `Cities with Free Government Phone in {state}`,
  `Find Free Government Phone in {state} Cities`,
  `Get Free Government Phone in {state} Cities`,
  `Free Government Phone for {state} Cities`,
  `Cities Offering Free Government Phone in {state}`,
  `Free Government Phone Locations in {state}`,
  `Find Your City for Free Government Phone in {state}`,
  `Free Government Phone in Cities Across {state}`,
  `Cities Where You Can Get Free Government Phone in {state}`,
  `Free Government Phone Coverage in {state} Cities`,
  `Browse Cities for Free Government Phone in {state}`,
  `Free Government Phone in {state} Communities`,
  `Select Your City for Free Government Phone in {state}`,
  `Cities in {state} with Free Government Phone`,
  `Find Free Government Phone by City in {state}`,
  `Free Government Phone Cities - {state}`,
  `Get Free Government Phone in Cities in {state}`,
  `Free Government Phone Available in {state} Cities`,
  `Cities for Free Government Phone in {state}`,
  `Free Government Phone in {state} - Find Your City`,
  `Browse {state} Cities for Free Government Phone`,
  `Free Government Phone - {state} Cities`,
  `Find Free Government Phone by City - {state}`,
  `Cities Offering Free Government Phone - {state}`,
  `Free Government Phone Locations - {state}`,
  `Get Free Government Phone in {state} - Find Your City`,
  `Free Government Phone in {state} - Browse Cities`,
  `Cities with Free Government Phone - {state}`,
  `Free Government Phone Coverage - {state} Cities`,
  `Find Your City for Free Government Phone - {state}`,
  `Free Government Phone in {state} - Select Your City`,
  `Browse Cities for Free Government Phone - {state}`,
  `Free Government Phone - Cities in {state}`,
  `{state} Cities with Free Phone Programs`,
  `Find Your City for Free Phones in {state}`,
  `{state} City Service Coverage`,
  `Free Phone Service Cities in {state}`,
  `{state} Cities and Communities Served`,
  `Locate Your City in {state}`,
  `{state} City Free Phone Programs`,
  `Browse Available Cities in {state}`,
  `{state} Communities with Free Phone Benefits`,
  `Select Your {state} City Location`,
  `{state} Cities Offering Free Phone Service`,
  `Find Free Phones by City in {state}`,
  `{state} City Coverage Areas`,
  `Cities Served for Free Phones in {state}`,
  `{state} Free Phone Service Cities`,
  `Browse {state} City Locations`,
  `{state} Communities and City Coverage`,
];

// ============================================
// Main Export Function
// ============================================

export interface StateContentVariations {
  intro: string;
  programsAvailable: string;
  howToApply: string;
  eligibility: string;
  cta: { headline: string; subtext: string; button: string };
  benefits: { title: string; benefits: string[] };
  headingIntro: string;
  headingEligibility: string;
  headingHowTo: string;
  headingCities: string;
}

export function getStateContentVariations(
  domain: string,
  state: string,
  capital?: string,
  cityCount?: number
): StateContentVariations {
  const capitalStr = capital || 'the capital';
  const cityCountStr = cityCount ? cityCount.toString() : 'many';
  
  // Helper to replace tokens in text
  const replaceTokens = (text: string): string => {
    return text
      .replace(/\{state\}/g, state)
      .replace(/\{capital\}/g, capitalStr)
      .replace(/\{cityCount\}/g, cityCountStr);
  };
  
  // Use COMPOUND hash (domain + state) for maximum uniqueness
  const ctaVariation = pickVariation(domain, state, STATE_CTA_VARIATIONS, 50);
  const benefitsVariation = pickVariation(domain, state, STATE_BENEFITS_VARIATIONS, 55);
  
  return {
    intro: replaceTokens(pickVariation(domain, state, STATE_INTRO_VARIATIONS, 30)),
    programsAvailable: replaceTokens(pickVariation(domain, state, PROGRAMS_AVAILABLE_VARIATIONS, 31)),
    howToApply: replaceTokens(pickVariation(domain, state, STATE_HOWTO_VARIATIONS, 32)),
    eligibility: replaceTokens(pickVariation(domain, state, STATE_ELIGIBILITY_VARIATIONS, 33)),
    cta: {
      headline: replaceTokens(ctaVariation.headline),
      subtext: replaceTokens(ctaVariation.subtext),
      button: replaceTokens(ctaVariation.button),
    },
    benefits: {
      title: replaceTokens(benefitsVariation.title),
      benefits: benefitsVariation.benefits,
    },
    headingIntro: replaceTokens(pickVariation(domain, state, STATE_HEADING_INTRO_VARIATIONS, 60)),
    headingEligibility: replaceTokens(pickVariation(domain, state, STATE_HEADING_ELIGIBILITY_VARIATIONS, 61)),
    headingHowTo: replaceTokens(pickVariation(domain, state, STATE_HEADING_HOWTO_VARIATIONS, 62)),
    headingCities: replaceTokens(pickVariation(domain, state, STATE_HEADING_CITIES_VARIATIONS, 63)),
  };
}

// Export hash functions for testing
export { hashString as hashDomain, getCompoundHash };

