/**
 * MICROCOPY VARIATIONS
 * All small UI text elements that could create footprints
 * Each element has 20-50 variations to ensure uniqueness at scale
 */

// Hash function for deterministic variation selection
function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) + hash) ^ char;
  }
  hash = hash ^ (hash >>> 16);
  hash = Math.imul(hash, 0x85ebca6b);
  hash = hash ^ (hash >>> 13);
  return Math.abs(hash);
}

// ============================================================================
// URGENCY BADGES - Top of page urgent messaging
// ============================================================================
export const URGENCY_BADGE_VARIATIONS = [
  { mobile: "LIMITED TIME OFFER", desktop: "LIMITED TIME: Offer expires soon" },
  { mobile: "ACT NOW", desktop: "Limited Availability - Apply Today" },
  { mobile: "EXCLUSIVE OFFER", desktop: "Special Enrollment Period Active" },
  { mobile: "HURRY", desktop: "Time Sensitive: Applications Open Now" },
  { mobile: "DON'T WAIT", desktop: "Urgent: Program Capacity Limited" },
  { mobile: "LAST CHANCE", desktop: "Final Opportunity: Register Today" },
  { mobile: "ENDING SOON", desktop: "Program Deadline Approaching Fast" },
  { mobile: "TODAY ONLY", desktop: "Priority Access Available Today" },
  { mobile: "APPLY NOW", desktop: "Immediate Enrollment Available Now" },
  { mobile: "TIME LIMITED", desktop: "Temporary Registration Period Open" },
  { mobile: "SPOTS LIMITED", desktop: "Limited Spaces: Enroll Before Full" },
  { mobile: "URGENT", desktop: "Critical: Application Window Closing" },
  { mobile: "FLASH OFFER", desktop: "Short-Term Opportunity Available" },
  { mobile: "EXPIRING SOON", desktop: "Time-Bound: Register Before Expiry" },
  { mobile: "QUICK ACTION", desktop: "Rapid Response Required - Apply" },
  { mobile: "INSTANT ACCESS", desktop: "Immediate Acceptance Period Active" },
  { mobile: "PRIORITY TIME", desktop: "Premium Application Window Open" },
  { mobile: "SPECIAL PERIOD", desktop: "Exclusive Registration Phase Active" },
  { mobile: "FAST TRACK", desktop: "Accelerated Processing Available" },
  { mobile: "NOW OPEN", desktop: "Active Enrollment - Start Today" },
  { mobile: "ACTIVE NOW", desktop: "Current Opportunity - Don't Miss Out" },
  { mobile: "BRIEF WINDOW", desktop: "Short Application Phase - Act Fast" },
  { mobile: "URGENT NOTICE", desktop: "Important: Limited Time Remaining" },
  { mobile: "TIME CRITICAL", desktop: "Deadline Approaching - Apply Soon" },
  { mobile: "RUSH PERIOD", desktop: "Express Enrollment Phase Active" },
  { mobile: "ACT FAST", desktop: "Quick Registration Required Today" },
  { mobile: "CLOSING SOON", desktop: "Application Period Ending Shortly" },
  { mobile: "DON'T DELAY", desktop: "Important: Register Without Delay" },
  { mobile: "OPEN NOW", desktop: "Current Application Period Active" },
  { mobile: "FINAL HOURS", desktop: "Last Hours: Complete Application" },
  { mobile: "HAPPENING NOW", desktop: "Live Enrollment - Join Today" },
  { mobile: "LIMITED SLOTS", desktop: "Restricted Availability - Hurry" },
  { mobile: "TIME EXPIRES", desktop: "Expiration Warning - Act Quickly" },
  { mobile: "EXCLUSIVE TIME", desktop: "Special Access Period Available" },
  { mobile: "DEADLINE NEAR", desktop: "Approaching Cutoff - Register Now" },
  { mobile: "SWIFT ACTION", desktop: "Prompt Response Needed - Apply" },
  { mobile: "OPEN ACCESS", desktop: "Current Registration Phase Active" },
  { mobile: "BRIEF OFFER", desktop: "Short-Duration Opportunity Here" },
  { mobile: "ACT TODAY", desktop: "Today's Deadline - Don't Miss It" },
  { mobile: "PRIORITY ALERT", desktop: "High-Priority Registration Active" },
  { mobile: "QUICK START", desktop: "Immediate Start Available Now" },
  { mobile: "WINDOW OPEN", desktop: "Application Window Currently Open" },
  { mobile: "URGENT CALL", desktop: "Critical Period - Respond Now" },
  { mobile: "FAST ENTRY", desktop: "Rapid Enrollment Available Today" },
  { mobile: "SEIZE NOW", desktop: "Opportunity Window - Take Action" },
  { mobile: "CLOSING TIME", desktop: "Final Phase - Complete Registration" },
  { mobile: "ACT QUICK", desktop: "Speedy Response Required Today" },
  { mobile: "TIME TICKING", desktop: "Clock Running - Register Soon" },
  { mobile: "FINAL CALL", desktop: "Ultimate Opportunity - Apply Now" },
  { mobile: "ACTIVE PERIOD", desktop: "Current Acceptance Phase Running" },
];

// ============================================================================
// SECONDARY HEADLINES - Supporting hero text
// ============================================================================
export const SECONDARY_HEADLINE_VARIATIONS = [
  "Get Yours Today",
  "Claim Your Benefits",
  "Start Your Journey",
  "Begin Your Application",
  "Secure Your Service",
  "Access Your Benefits",
  "Join the Program",
  "Enroll Right Now",
  "Reserve Your Spot",
  "Activate Your Service",
  "Unlock Your Benefits",
  "Register Your Account",
  "Obtain Your Service",
  "Acquire Your Phone",
  "Sign Up Today",
  "Get Connected Now",
  "Start Immediately",
  "Claim Today",
  "Apply Right Now",
  "Enroll Immediately",
  "Register Today",
  "Start Your Application",
  "Secure Yours Now",
  "Access Yours Today",
  "Join Right Now",
  "Start Your Claim",
  "Get Started Today",
  "Apply This Instant",
  "Enroll This Moment",
  "Sign Up Immediately",
  "Reserve Right Now",
  "Activate Today",
  "Unlock Right Now",
  "Obtain Today",
  "Acquire Immediately",
  "Connect This Instant",
  "Begin Right Now",
  "Claim This Moment",
  "Secure This Instant",
  "Access Right Now",
  "Join This Moment",
  "Register Immediately",
  "Start This Instant",
  "Apply This Moment",
  "Enroll This Instant",
  "Sign Up This Moment",
  "Reserve This Instant",
  "Activate Immediately",
  "Unlock This Moment",
  "Get It Right Now",
];

// ============================================================================
// CTA BUTTONS - Learn More, View Programs, etc.
// ============================================================================
export const LEARN_MORE_VARIATIONS = [
  "Learn More",
  "Read More",
  "Discover More",
  "Find Out More",
  "See Details",
  "View Details",
  "Get Info",
  "More Information",
  "Full Details",
  "Complete Info",
  "Read Details",
  "See More",
  "Explore Further",
  "Learn Details",
  "Get Details",
  "View More",
  "See Full Info",
  "Read Further",
  "More Info",
  "Full Information",
  "Complete Details",
  "View Information",
  "See Information",
  "Learn Further",
  "Discover Details",
  "Find Details",
  "Explore More",
  "Get More Info",
  "See Complete Info",
  "Read Complete Details",
  "More Details",
  "View Full Details",
  "Learn Complete Info",
  "Discover Information",
  "Find Information",
  "Explore Details",
  "Get Complete Details",
  "See Full Details",
  "Read Information",
  "More Information Here",
  "Full Details Here",
  "Complete Info Here",
  "View Details Here",
  "See More Info",
  "Learn More Here",
  "Discover More Here",
  "Find Out Details",
  "Explore Information",
  "Get Full Info",
  "See Complete Details",
];

export const VIEW_PROGRAMS_VARIATIONS = [
  "View Programs →",
  "See Programs →",
  "Explore Programs →",
  "Browse Programs →",
  "Check Programs →",
  "Find Programs →",
  "Discover Programs →",
  "Review Programs →",
  "Access Programs →",
  "Show Programs →",
  "View Options →",
  "See Options →",
  "Explore Options →",
  "Browse Options →",
  "Check Options →",
  "Find Options →",
  "Discover Options →",
  "Review Options →",
  "Access Options →",
  "Show Options →",
  "View Offerings →",
  "See Offerings →",
  "Explore Offerings →",
  "Browse Offerings →",
  "Check Offerings →",
  "View Services →",
  "See Services →",
  "Explore Services →",
  "Browse Services →",
  "Check Services →",
  "View Benefits →",
  "See Benefits →",
  "Explore Benefits →",
  "Browse Benefits →",
  "Check Benefits →",
  "View Available Programs →",
  "See Available Programs →",
  "Explore Available Options →",
  "Browse All Programs →",
  "Check All Programs →",
  "View Program Details →",
  "See Program Info →",
  "Explore Program Options →",
  "Browse Program List →",
  "Check Program Availability →",
  "View Full Programs →",
  "See Complete Programs →",
  "Explore Program Benefits →",
  "Browse Program Services →",
  "Check Program Features →",
];

// ============================================================================
// NAVIGATION TEXT - Top nav labels
// ============================================================================
export const ELIGIBILITY_NAV_VARIATIONS = [
  "Eligibility",
  "Qualify",
  "Check Eligibility",
  "Am I Eligible",
  "Who Qualifies",
  "Qualification",
  "Qualify Check",
  "Eligibility Info",
  "Do I Qualify",
  "Check If Eligible",
  "Qualification Check",
  "Who's Eligible",
  "Eligibility Test",
  "Qualify Today",
  "Check Qualify",
  "Am I Qualified",
  "Qualification Info",
  "Eligibility Help",
  "Qualify Info",
  "Check Status",
  "Qualify Status",
  "Eligibility Quiz",
  "Qualification Test",
  "Qualify Here",
  "Check Here",
  "Eligibility Check",
  "Qualify Guide",
  "Eligibility Guide",
  "Qualification Guide",
  "Qualify Now",
];

export const GET_STARTED_CTA_VARIATIONS = [
  "Get Started",
  "Start Now",
  "Begin",
  "Apply Now",
  "Apply Free",
  "Start Free",
  "Begin Now",
  "Start Today",
  "Apply Today",
  "Get Started Free",
  "Begin Today",
  "Start Application",
  "Apply Here",
  "Get Started Now",
  "Begin Free",
  "Start Here",
  "Apply Free Now",
  "Get Started Today",
  "Begin Application",
  "Start Your App",
  "Apply Right Now",
  "Get Going",
  "Begin Here",
  "Start Process",
  "Apply Instantly",
  "Get Started Here",
  "Begin Process",
  "Start Journey",
  "Apply Quick",
  "Get Started Fast",
];

// ============================================================================
// PROGRAM NAMES - Variations for program references
// ============================================================================
export const LIFELINE_PROGRAM_VARIATIONS = [
  "Lifeline Program",
  "Lifeline Service",
  "Lifeline Benefits",
  "Federal Lifeline",
  "Lifeline Assistance",
  "Lifeline Support",
  "Lifeline Plan",
  "Lifeline Benefit",
  "Government Lifeline",
  "Lifeline Initiative",
  "Lifeline Offering",
  "Lifeline Option",
  "Lifeline Aid",
  "Lifeline Help",
  "Lifeline Coverage",
  "Federal Lifeline Aid",
  "Lifeline Service Plan",
  "Government Lifeline Program",
  "Lifeline Assistance Plan",
  "Federal Lifeline Support",
];

export const ACP_PROGRAM_VARIATIONS = [
  "ACP Program",
  "ACP Service",
  "ACP Benefits",
  "Affordable Connectivity",
  "ACP Assistance",
  "ACP Support",
  "ACP Plan",
  "ACP Benefit",
  "Connectivity Program",
  "ACP Initiative",
  "ACP Offering",
  "ACP Option",
  "ACP Aid",
  "ACP Help",
  "ACP Coverage",
  "Affordable Connectivity Program",
  "ACP Service Plan",
  "Federal ACP",
  "ACP Assistance Plan",
  "Government ACP",
];

export const TRIBAL_PROGRAMS_VARIATIONS = [
  "Tribal Programs",
  "Tribal Services",
  "Tribal Benefits",
  "Tribal Support",
  "Tribal Assistance",
  "Native Programs",
  "Tribal Plans",
  "Indigenous Programs",
  "Tribal Aid",
  "Tribal Help",
  "Native Benefits",
  "Tribal Offerings",
  "Native Services",
  "Tribal Options",
  "Indigenous Benefits",
  "Native Assistance",
  "Tribal Coverage",
  "Indigenous Services",
  "Native Support",
  "Tribal Initiatives",
];

export const STATE_PROGRAMS_VARIATIONS = [
  "State Programs",
  "State Services",
  "State Benefits",
  "State Support",
  "State Assistance",
  "Regional Programs",
  "State Plans",
  "Local Programs",
  "State Aid",
  "State Help",
  "Regional Benefits",
  "State Offerings",
  "Local Services",
  "State Options",
  "Regional Services",
  "Local Assistance",
  "State Coverage",
  "Regional Support",
  "Local Benefits",
  "State Initiatives",
];

// ============================================================================
// FOOTER TEXT - Contact, All States, etc.
// ============================================================================
export const CONTACT_US_VARIATIONS = [
  "Contact Us",
  "Get in Touch",
  "Reach Out",
  "Contact",
  "Help & Support",
  "Get Help",
  "Support",
  "Contact Support",
  "Customer Service",
  "Assistance",
  "Need Help",
  "Ask Us",
  "Questions",
  "Support Center",
  "Help Center",
  "Contact Form",
  "Message Us",
  "Talk to Us",
  "Connect",
  "Get Support",
  "Service Desk",
  "Help Desk",
  "Support Team",
  "Contact Team",
  "Assistance Center",
];

export const ALL_STATES_VARIATIONS = [
  "All States",
  "View All States",
  "Browse States",
  "All Locations",
  "See All States",
  "State List",
  "Every State",
  "States & Territories",
  "All 50 States",
  "State Directory",
  "Full State List",
  "Complete States",
  "All Regions",
  "State Index",
  "All Areas",
  "States Overview",
  "Nationwide",
  "All US States",
  "State Listings",
  "All Available States",
];

// ============================================================================
// SECTION TITLES - Similar Cities, Related Content, etc.
// ============================================================================
export const SIMILAR_CITIES_VARIATIONS = [
  "Similar Cities in Other States",
  "Related Cities Nationwide",
  "Comparable Cities Elsewhere",
  "Similar Locations Nationwide",
  "Cities Like This One",
  "Nearby Cities in Other States",
  "Similar Places Nationwide",
  "Comparable Locations Elsewhere",
  "Related Cities in Other Areas",
  "Similar Communities Nationwide",
  "Like-Sized Cities Nationwide",
  "Comparable Cities in Other States",
  "Related Locations Nationwide",
  "Similar Areas Elsewhere",
  "Cities Across America",
  "Comparable Places Nationwide",
  "Related Communities Elsewhere",
  "Similar Cities Nationwide",
  "Other Cities Like This",
  "Related Cities Elsewhere",
];

export const RELATED_CONTENT_VARIATIONS = [
  "Related Content",
  "More Resources",
  "Additional Information",
  "Further Reading",
  "Related Resources",
  "More Information",
  "Additional Resources",
  "Further Resources",
  "Related Articles",
  "More Articles",
  "Additional Reading",
  "Further Information",
  "Related Topics",
  "More Topics",
  "Additional Content",
  "Further Content",
  "Related Info",
  "More Details",
  "Additional Details",
  "Further Topics",
];

export const RELATED_CONTENT_SUBTITLE_VARIATIONS = [
  "Explore more resources to help you get your free government phone service.",
  "Discover additional information about federal assistance programs.",
  "Find more details to guide your application process.",
  "Learn more about government phone benefit programs.",
  "Access additional guides for your enrollment journey.",
  "Review further resources about free phone services.",
  "See more information to help with your application.",
  "Browse additional content about eligibility and benefits.",
  "Find helpful resources for your program enrollment.",
  "Explore guides to maximize your phone service benefits.",
  "Discover more ways to access free communication services.",
  "Learn about related federal assistance opportunities.",
  "Access comprehensive information about program benefits.",
  "Review detailed resources for successful enrollment.",
  "Find everything you need to apply for free service.",
  "Explore additional support for your application needs.",
  "Discover helpful guides for program qualification.",
  "Learn more about available communication benefits.",
  "Access useful resources for program navigation.",
  "Review important information about free phone services.",
];

// ============================================================================
// STATE SELECTOR TEXT
// ============================================================================
export const STATE_SELECTOR_SEARCH_VARIATIONS = [
  "Search or select your state to check eligibility",
  "Find your state to see available programs",
  "Choose your state to view eligibility requirements",
  "Select your location to check qualification",
  "Pick your state to see program details",
  "Search for your state to check benefits",
  "Find your location to view programs",
  "Choose your state to check availability",
  "Select your state to see qualifications",
  "Pick your location to view benefits",
  "Search your state for program info",
  "Find your state to check programs",
  "Choose your location to see details",
  "Select your state for benefit info",
  "Pick your state to check eligibility",
];

export const POPULAR_STATES_VARIATIONS = [
  "Popular states:",
  "Top states:",
  "Most searched:",
  "Common searches:",
  "Frequently selected:",
  "Popular locations:",
  "Top locations:",
  "Most viewed:",
  "Trending states:",
  "Popular picks:",
  "Top picks:",
  "Most popular:",
  "Common states:",
  "Frequently viewed:",
  "Popular selections:",
];

export const SHOW_ALL_STATES_VARIATIONS = [
  "Show All States",
  "View All States",
  "See All States",
  "Display All States",
  "Show Complete List",
  "View Full List",
  "See Complete List",
  "Display Full List",
  "Show All Locations",
  "View All Locations",
  "See All Locations",
  "Display All Locations",
  "Show Every State",
  "View Every State",
  "See Every State",
];

export const BROWSE_CITIES_VARIATIONS = [
  "Browse All Cities",
  "View All Cities",
  "See All Cities",
  "Explore All Cities",
  "Show All Cities",
  "Browse Cities",
  "View Cities",
  "See Cities",
  "Explore Cities",
  "City Directory",
  "All Cities",
  "City List",
  "Browse Locations",
  "View Locations",
  "See Locations",
  "Explore Locations",
  "All Locations",
  "Location List",
  "City Index",
  "Location Directory",
];

export const EXPLORE_ALL_STATES_VARIATIONS = [
  "Explore All States",
  "Browse All States",
  "View All States",
  "See All States",
  "Discover All States",
  "Check All States",
  "Review All States",
  "Find All States",
  "Search All States",
  "Show All States",
  "Explore States",
  "Browse States",
  "View States",
  "See States",
  "Discover States",
  "Check States",
  "Review States",
  "Find States",
  "Search States",
  "Show States",
];

// ============================================================================
// MISCELLANEOUS UI TEXT
// ============================================================================
export const MOST_POPULAR_CITIES_VARIATIONS = [
  "Most Popular Cities",
  "Top Cities",
  "Popular Cities",
  "Featured Cities",
  "Top Locations",
  "Popular Locations",
  "Featured Locations",
  "Trending Cities",
  "Most Viewed Cities",
  "Common Cities",
  "Frequently Searched",
  "Top Picks",
  "Popular Picks",
  "Featured Picks",
  "Trending Locations",
];

export const LOADING_STATES_VARIATIONS = [
  "Loading states...",
  "Please wait...",
  "Loading...",
  "Fetching states...",
  "Getting states...",
  "Loading data...",
  "Retrieving states...",
  "Just a moment...",
  "Loading information...",
  "Preparing states...",
];

export const LIMITED_TIME_STICKY_VARIATIONS = [
  "Limited time offer",
  "Special offer available",
  "Exclusive opportunity",
  "Time-sensitive offer",
  "Act now - limited time",
  "Brief period offer",
  "Short-term opportunity",
  "Current special offer",
  "Today's special",
  "Active promotion",
  "Current opportunity",
  "Special period active",
  "Exclusive window open",
  "Priority offer available",
  "Flash opportunity",
];

// ============================================================================
// COUNTDOWN TIMER TEXT
// ============================================================================
export const COUNTDOWN_LABEL_VARIATIONS = [
  "Hours : Minutes : Seconds",
  "Hrs : Mins : Secs",
  "H : M : S",
  "Hours | Minutes | Seconds",
  "HRS | MIN | SEC",
  "Time Remaining",
  "Hours Left : Minutes Left : Seconds Left",
  "Hr : Min : Sec",
  "Hours / Minutes / Seconds",
  "H | M | S",
];

export const COUNTDOWN_MESSAGE_VARIATIONS = [
  "Get FREE phone service before this offer expires!",
  "Claim your free phone before time runs out!",
  "Apply now before this opportunity ends!",
  "Don't miss out - enroll before deadline!",
  "Register before spots fill up!",
  "Act fast - limited availability remaining!",
  "Hurry - application window closing soon!",
  "Quick - secure your free service now!",
  "Time sensitive - start your application!",
  "Limited slots - apply while available!",
];

export const CHECK_ELIGIBILITY_CTA_VARIATIONS = [
  "Check Eligibility Now →",
  "See If You Qualify →",
  "Verify Eligibility →",
  "Check Your Status →",
  "Am I Eligible? →",
  "Check Now →",
  "See Qualification →",
  "Verify Status →",
  "Check If Qualified →",
  "View Eligibility →",
  "Determine Eligibility →",
  "Check My Status →",
  "See If Eligible →",
  "Verify Qualification →",
  "Check Qualification →",
];

export const CHECK_ELIGIBILITY_BUTTON_VARIATIONS = [
  "CHECK ELIGIBILITY NOW",
  "SEE IF YOU QUALIFY",
  "VERIFY ELIGIBILITY",
  "CHECK YOUR STATUS",
  "AM I ELIGIBLE?",
  "CHECK NOW",
  "SEE QUALIFICATION",
  "VERIFY STATUS",
  "CHECK IF QUALIFIED",
  "VIEW ELIGIBILITY",
  "DETERMINE ELIGIBILITY",
  "CHECK MY STATUS",
  "SEE IF ELIGIBLE",
  "VERIFY QUALIFICATION",
  "CHECK QUALIFICATION",
];

export const SEARCH_PLACEHOLDER_VARIATIONS = [
  "Search for your state...",
  "Find your state...",
  "Type your state...",
  "Enter state name...",
  "Search states...",
  "Locate your state...",
  "State search...",
  "Find state...",
  "Search by state...",
  "Enter your state...",
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get variation based on domain hash
 */
function getVariation<T>(domain: string, variations: T[]): T {
  const hash = hashString(domain);
  const index = hash % variations.length;
  return variations[index];
}

/**
 * Get urgency badge for a domain
 */
export function getUrgencyBadge(domain: string) {
  return getVariation(domain, URGENCY_BADGE_VARIATIONS);
}

/**
 * Get secondary headline
 */
export function getSecondaryHeadline(domain: string) {
  return getVariation(domain, SECONDARY_HEADLINE_VARIATIONS);
}

/**
 * Get "Learn More" variant
 */
export function getLearnMoreText(domain: string) {
  return getVariation(domain, LEARN_MORE_VARIATIONS);
}

/**
 * Get "View Programs" variant
 */
export function getViewProgramsText(domain: string) {
  return getVariation(domain, VIEW_PROGRAMS_VARIATIONS);
}

/**
 * Get navigation text
 */
export function getEligibilityNavText(domain: string) {
  return getVariation(domain, ELIGIBILITY_NAV_VARIATIONS);
}

export function getGetStartedCTAText(domain: string) {
  return getVariation(domain, GET_STARTED_CTA_VARIATIONS);
}

/**
 * Get program names
 */
export function getLifelineProgramText(domain: string) {
  return getVariation(domain, LIFELINE_PROGRAM_VARIATIONS);
}

export function getACPProgramText(domain: string) {
  return getVariation(domain, ACP_PROGRAM_VARIATIONS);
}

export function getTribalProgramsText(domain: string) {
  return getVariation(domain, TRIBAL_PROGRAMS_VARIATIONS);
}

export function getStateProgramsText(domain: string) {
  return getVariation(domain, STATE_PROGRAMS_VARIATIONS);
}

/**
 * Get footer text
 */
export function getContactUsText(domain: string) {
  return getVariation(domain, CONTACT_US_VARIATIONS);
}

export function getAllStatesText(domain: string) {
  return getVariation(domain, ALL_STATES_VARIATIONS);
}

/**
 * Get section titles
 */
export function getSimilarCitiesTitle(domain: string) {
  return getVariation(domain, SIMILAR_CITIES_VARIATIONS);
}

export function getRelatedContentTitle(domain: string) {
  return getVariation(domain, RELATED_CONTENT_VARIATIONS);
}

export function getRelatedContentSubtitle(domain: string) {
  return getVariation(domain, RELATED_CONTENT_SUBTITLE_VARIATIONS);
}

/**
 * Get state selector text
 */
export function getStateSelectorSearchText(domain: string) {
  return getVariation(domain, STATE_SELECTOR_SEARCH_VARIATIONS);
}

export function getPopularStatesText(domain: string) {
  return getVariation(domain, POPULAR_STATES_VARIATIONS);
}

export function getShowAllStatesText(domain: string) {
  return getVariation(domain, SHOW_ALL_STATES_VARIATIONS);
}

export function getBrowseCitiesText(domain: string) {
  return getVariation(domain, BROWSE_CITIES_VARIATIONS);
}

export function getExploreAllStatesText(domain: string) {
  return getVariation(domain, EXPLORE_ALL_STATES_VARIATIONS);
}

/**
 * Get miscellaneous UI text
 */
export function getMostPopularCitiesText(domain: string) {
  return getVariation(domain, MOST_POPULAR_CITIES_VARIATIONS);
}

export function getLoadingStatesText(domain: string) {
  return getVariation(domain, LOADING_STATES_VARIATIONS);
}

export function getLimitedTimeStickyText(domain: string) {
  return getVariation(domain, LIMITED_TIME_STICKY_VARIATIONS);
}

/**
 * Get countdown timer text
 */
export function getCountdownLabelText(domain: string) {
  return getVariation(domain, COUNTDOWN_LABEL_VARIATIONS);
}

export function getCountdownMessageText(domain: string) {
  return getVariation(domain, COUNTDOWN_MESSAGE_VARIATIONS);
}

export function getCheckEligibilityCTAText(domain: string) {
  return getVariation(domain, CHECK_ELIGIBILITY_CTA_VARIATIONS);
}

export function getCheckEligibilityButtonText(domain: string) {
  return getVariation(domain, CHECK_ELIGIBILITY_BUTTON_VARIATIONS);
}

export function getSearchPlaceholderText(domain: string) {
  return getVariation(domain, SEARCH_PLACEHOLDER_VARIATIONS);
}

/**
 * Get all microcopy for a domain (convenience function)
 */
export function getMicrocopy(domain: string) {
  return {
    urgencyBadge: getUrgencyBadge(domain),
    secondaryHeadline: getSecondaryHeadline(domain),
    learnMore: getLearnMoreText(domain),
    viewPrograms: getViewProgramsText(domain),
    eligibilityNav: getEligibilityNavText(domain),
    getStartedCTA: getGetStartedCTAText(domain),
    lifelineProgram: getLifelineProgramText(domain),
    acpProgram: getACPProgramText(domain),
    tribalPrograms: getTribalProgramsText(domain),
    statePrograms: getStateProgramsText(domain),
    contactUs: getContactUsText(domain),
    allStates: getAllStatesText(domain),
    similarCitiesTitle: getSimilarCitiesTitle(domain),
    relatedContentTitle: getRelatedContentTitle(domain),
    relatedContentSubtitle: getRelatedContentSubtitle(domain),
    stateSelectorSearch: getStateSelectorSearchText(domain),
    popularStates: getPopularStatesText(domain),
    showAllStates: getShowAllStatesText(domain),
    browseCities: getBrowseCitiesText(domain),
    exploreAllStates: getExploreAllStatesText(domain),
    mostPopularCities: getMostPopularCitiesText(domain),
    loadingStates: getLoadingStatesText(domain),
    limitedTimeSticky: getLimitedTimeStickyText(domain),
    countdownLabel: getCountdownLabelText(domain),
    countdownMessage: getCountdownMessageText(domain),
    checkEligibilityCTA: getCheckEligibilityCTAText(domain),
    checkEligibilityButton: getCheckEligibilityButtonText(domain),
    searchPlaceholder: getSearchPlaceholderText(domain),
  };
}

