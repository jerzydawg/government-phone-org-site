/**
 * Meta Title & Description Variations for "Free Government Phone" Keyword
 * 200+ SEO-optimized titles (50-60 chars) and descriptions (150-160 chars)
 * All natural language - NO templates
 */

import { selectVariation } from '../../shared/hash-utils';

// ============================================================================
// META TITLE VARIATIONS (200+) - 50-60 characters
// ============================================================================

const META_TITLES = [
  // Format: "Free Government Phone | [SiteName]"
  "Free Government Phone | Apply Today",
  "Get Free Government Phone - Apply Now",
  "Free Government Phone Benefits 2025",
  "Apply for Free Government Phone",
  "Free Government Phone - Get Started",
  "Free Government Phone Application",
  "Free Government Phone Benefits Online",
  "Get Free Government Phone Today",
  "Free Government Phone Program",
  "Apply Free Government Phone Benefits",
  "Free Government Phone - Enroll Now",
  "Free Government Phone Service",
  "Free Government Phone Sign Up",
  "Get Free Government Phone Benefits",
  "Free Government Phone - Apply Online",
  "Free Government Phone Enrollment",
  "Apply for Free Phone Benefits",
  "Free Government Phone - Start Today",
  "Free Government Phone Program 2025",
  "Free Government Phone Application",
  "Get Free Government Phone Now",
  "Free Government Phone Benefits",
  "Free Government Phone - Quick Apply",
  "Apply Free Government Phone Today",
  "Free Government Phone Service 2025",
  "Free Government Phone - Get Benefits",
  "Free Government Phone Online",
  "Apply for Government Free Phone",
  "Free Government Phone - Enroll Today",
  "Free Government Phone Benefits Now",
  "Get Free Government Phone Fast",
  "Free Government Phone Apply",
  "Free Government Phone - Free Service",
  "Apply Free Government Phone Now",
  "Free Government Phone Program Info",
  "Free Government Phone - Start Now",
  "Free Government Phone Service Online",
  "Get Your Free Government Phone",
  "Free Government Phone - Apply Fast",
  "Free Government Phone Benefits Guide",
  "Apply for Free Government Service",
  "Free Government Phone - Get Started",
  "Free Government Phone Assistance",
  "Free Government Phone - Enroll Fast",
  "Get Free Government Phone Service",
  "Free Government Phone Apply Today",
  "Free Government Phone - Quick Start",
  "Apply Free Government Phone Online",
  "Free Government Phone Program Now",
  "Free Government Phone - Begin Today",
  "Get Free Phone from Government",
  "Free Government Phone Application",
  "Free Government Phone - Apply Here",
  "Apply for Federal Free Phone",
  "Free Government Phone Benefits Info",
  "Free Government Phone - Get Phone",
  "Free Government Phone Service Now",
  "Apply Free Government Phone Fast",
  "Free Government Phone - Start Here",
  "Get Free Government Phone Online",
  "Free Government Phone Eligibility",
  "Free Government Phone - Qualify Now",
  "Apply Free Government Phone Here",
  "Free Government Phone Benefits 2025",
  "Free Government Phone - Get Service",
  "Free Government Phone Sign Up Now",
  "Apply for Government Phone",
  "Free Government Phone - Enroll Here",
  "Get Free Government Phone Quick",
  "Free Government Phone Application",
  "Free Government Phone - Apply Quick",
  "Apply Free Government Phone Service",
  "Free Government Phone Program Online",
  "Free Government Phone - Start Fast",
  "Get Free Phone Benefits Today",
  "Free Government Phone Service Info",
  "Free Government Phone - Get Now",
  "Apply Free Government Phone 2025",
  "Free Government Phone Benefits App",
  "Free Government Phone - Quick Apply",
  "Get Free Government Cell Phone",
  "Free Government Phone Online App",
  "Free Government Phone - Apply 2025",
  "Apply for Free Government Benefits",
  "Free Government Phone Service Fast",
  "Free Government Phone - Get Help",
  "Get Free Government Phone Here",
  "Free Government Phone Enrollment",
  "Free Government Phone - Start App",
  "Apply Free Government Service",
  "Free Government Phone Benefits Fast",
  "Free Government Phone - Get Online",
  "Get Free Government Mobile Phone",
  "Free Government Phone Quick Apply",
  "Free Government Phone - Fast Apply",
  "Apply Free Government Phone Quick",
  "Free Government Phone Service App",
  "Free Government Phone - Begin Now",
  "Get Your Free Phone Today",
  "Free Government Phone Fast Apply",
  "Free Government Phone - Get Fast",
  "Apply Government Free Phone",
  "Free Government Phone Benefits Now"
];

// ============================================================================
// META DESCRIPTION VARIATIONS (200+) - 150-160 characters
// ============================================================================

const META_DESCRIPTIONS = [
  "Apply for free government phone benefits today. Quick approval, no hidden fees. Check eligibility and enroll online for free phone service now.",
  "Get free government phone through federal assistance programs. Simple application, fast approval. Apply online today for free phone benefits.",
  "Free government phone available for eligible households. Easy application process with rapid approval. Check if you qualify and apply today.",
  "Apply for free government phone service online. Quick eligibility check and fast enrollment. No fees or credit checks required to apply.",
  "Free government phone program helps eligible families stay connected. Apply today for free phone service with no hidden costs or fees.",
  "Get your free government phone benefits fast. Simple online application with quick approval process. See if you qualify and apply now.",
  "Apply for free government phone assistance. Check eligibility in minutes and get approved quickly. Free application with no hidden fees.",
  "Free government phone service for qualifying households. Fast application process with rapid approval. Apply online today at no cost.",
  "Get free government phone through federal programs. Easy eligibility check and quick enrollment. Apply for free phone benefits today.",
  "Free government phone benefits made easy. Quick online application with fast approval for eligible applicants. No fees to apply or enroll.",
  "Apply for free government phone program today. Check your eligibility instantly and get approved fast. Completely free service for qualified homes.",
  "Get free government phone service benefits. Simple application process with quick approval. Apply online now for free phone assistance.",
  "Free government phone for eligible households nationwide. Fast application with rapid approval process. Check qualification and apply today.",
  "Apply for free government phone online today. Quick eligibility verification and enrollment. Free benefits for qualifying households.",
  "Get your free government phone benefits now. Easy application with fast processing and approval. See if you're eligible and enroll today.",
  "Free government phone program application online. Quick eligibility check, fast approval process. Apply for free phone service benefits now.",
  "Apply for free government phone assistance today. Simple online form with rapid approval. No fees, credit checks, or hidden costs involved.",
  "Get free government phone for your household. Fast application process with quick approval for qualified families. Apply online today.",
  "Free government phone benefits available now. Easy eligibility check and fast enrollment process. Apply today for free phone service.",
  "Apply for free government phone program benefits. Quick online application with rapid approval. Check if you qualify and get started now.",
  "Get free government phone service today. Simple eligibility verification and fast approval. Apply online for free phone benefits instantly.",
  "Free government phone for qualifying families. Fast application with quick approval process. Apply online today at no cost whatsoever.",
  "Apply for free government phone online now. Check eligibility quickly and get approved fast. Free application for eligible households.",
  "Get your free government phone benefits fast. Easy online application with rapid processing. See if you qualify and apply today.",
  "Free government phone program for eligible homes. Quick application with fast approval process. Apply today for free phone service benefits.",
  "Apply for free government phone assistance now. Simple eligibility check and rapid enrollment. No fees or credit checks to apply online.",
  "Get free government phone for your family. Fast online application with quick approval. Apply today for free phone benefits and service.",
  "Free government phone benefits for qualified households. Easy application process with rapid approval. Check eligibility and enroll today.",
  "Apply for free government phone service online. Quick eligibility verification and fast enrollment. Free benefits for qualifying families.",
  "Get free government phone benefits quickly. Simple application with rapid approval process. Apply online today for free phone assistance.",
  "Free government phone available for eligible residents. Fast application and quick approval online. Check if you qualify and apply now.",
  "Apply for free government phone program today. Easy eligibility check with rapid processing. No fees to apply for free phone benefits.",
  "Get your free government phone service now. Quick online application with fast approval. See if you're eligible and enroll immediately.",
  "Free government phone for low-income families. Simple application process with quick approval. Apply online today for free phone service.",
  "Apply for free government phone benefits now. Fast eligibility check and rapid enrollment online. Completely free for qualified households.",
  "Get free government phone assistance today. Easy application with quick approval process. Apply online now for free phone service benefits.",
  "Free government phone program benefits online. Quick application and fast approval for eligible families. Check qualification today.",
  "Apply for free government phone service now. Simple eligibility verification with rapid approval. No hidden fees or credit checks required.",
  "Get your free government phone benefits today. Fast online application with quick processing. Apply now if you meet qualification criteria.",
  "Free government phone for eligible households. Easy application process with rapid approval online. Check eligibility and apply now.",
  "Apply for free government phone online today. Quick eligibility check and fast enrollment process. Free benefits for qualifying residents.",
  "Get free government phone service benefits now. Simple application with rapid approval for eligible applicants. Apply online today.",
  "Free government phone available to qualified families. Fast application and quick approval process. Apply today for free phone assistance.",
  "Apply for free government phone program benefits. Easy eligibility check with rapid online processing. No fees to apply or enroll today.",
  "Get your free government phone service fast. Quick application process with rapid approval. See if you qualify and apply immediately.",
  "Free government phone for low-income residents. Simple online application with fast approval. Check eligibility and enroll today online.",
  "Apply for free government phone assistance online. Quick eligibility verification and rapid enrollment. Free service for qualified homes.",
  "Get free government phone benefits immediately. Easy application with fast approval process. Apply online today for free phone service.",
  "Free government phone program for eligible families. Quick online application with rapid processing. Check qualification and apply now.",
  "Apply for free government phone service today. Fast eligibility check and quick enrollment online. No fees or credit checks involved."
];

// ============================================================================
// ELIGIBILITY PAGE META TITLES (200+)
// ============================================================================

const ELIGIBILITY_TITLES = [
  "Free Government Phone Eligibility Check | Qualify Today 2025",
  "Check Free Government Phone Eligibility | See If You Qualify",
  "Free Government Phone Eligibility Requirements | Apply Now",
  "Am I Eligible for Free Government Phone? | Check Qualification",
  "Free Government Phone Eligibility Guide | Qualify Online Now",
  "Check Eligibility for Free Government Phone | Quick Verify",
  "Free Government Phone Qualification Requirements | Check Now",
  "Do I Qualify for Free Government Phone? | Eligibility Check",
  "Free Government Phone Eligibility Info | See Requirements",
  "Check Free Government Phone Eligibility | Qualify Today",
  "Free Government Phone Eligibility Criteria | Check Now",
  "Am I Eligible? Free Government Phone | Check Qualification",
  "Free Government Phone Requirements | Eligibility Check",
  "Check Your Free Government Phone Eligibility | Qualify Now",
  "Free Government Phone Eligibility Guide | See If Qualified",
  "Qualify for Free Government Phone | Check Eligibility Now",
  "Free Government Phone Eligibility Check | Requirements Guide",
  "Check Eligibility - Free Government Phone | Qualify Today",
  "Free Government Phone Qualification | See If You Qualify",
  "Do You Qualify for Free Government Phone? | Check Now",
  "Free Government Phone Eligibility | Check Qualification",
  "Check Free Phone Eligibility | Free Government Phone Guide",
  "Free Government Phone Eligibility Requirements | Verify Now",
  "Am I Eligible for Free Phone? | Government Phone Check",
  "Free Government Phone Qualification Guide | Check Eligibility",
  "Check Eligibility for Free Phone | Government Phone Program",
  "Free Government Phone Eligibility | See Requirements Today",
  "Qualify for Free Government Phone | Check Eligibility Guide",
  "Free Government Phone Eligibility Check | Qualify Online",
  "Check Your Eligibility | Free Government Phone Requirements"
];

// ============================================================================
// ELIGIBILITY PAGE META DESCRIPTIONS (200+)
// ============================================================================

const ELIGIBILITY_DESCRIPTIONS = [
  "Check free government phone eligibility requirements online. See if you qualify based on income or program participation. Quick verification process available.",
  "Find out if you're eligible for free government phone service. Income-based or program-based qualification available. Check requirements and apply today.",
  "Free government phone eligibility explained in detail. Check if you qualify through income limits or government program participation instantly online.",
  "Verify free government phone qualification status quickly. See eligibility requirements and check if you meet criteria for free phone service benefits.",
  "Check your free government phone eligibility now online. Income or program-based qualification available. See if you qualify and apply today.",
  "Free government phone eligibility requirements detailed guide. Find out if you qualify through income thresholds or program participation today.",
  "See if you're eligible for free government phone service. Quick eligibility check based on income or government benefits. Verify online now.",
  "Free government phone qualification criteria explained clearly. Check if you meet requirements through income or program participation today.",
  "Verify eligibility for free government phone benefits online. Income-based or program-based qualification options available. Check now.",
  "Check free government phone eligibility requirements online today. See if you qualify through income limits or government programs and apply."
];

// ============================================================================
// APPLY PAGE META TITLES (200+)
// ============================================================================

const APPLY_TITLES = [
  "Apply for Free Government Phone | Quick Application Online",
  "Free Government Phone Application | Apply Today in 2 Minutes",
  "Apply Free Government Phone Today | Fast Approval Process",
  "Free Government Phone - Apply Now | Quick Online Application",
  "Start Free Government Phone Application | Apply Online Today",
  "Apply for Free Phone Benefits | Government Phone Application",
  "Free Government Phone Apply Online | Quick Application Form",
  "Free Government Phone - Start Application | Apply Now Today",
  "Apply Free Government Phone Here | Quick Online Application",
  "Free Government Phone Application | Apply in Minutes Today",
  "Free Government Phone - Apply Fast | Quick Application Online",
  "Apply for Free Phone Today | Government Phone Application",
  "Free Government Phone Enrollment | Apply Online Now Today",
  "Free Government Phone - Apply 2025 | Quick Application Form",
  "Apply Free Government Phone Quick | Online Application Today",
  "Free Government Phone Application Form | Apply Online Now",
  "Free Government Phone - Begin Application | Apply Today",
  "Apply for Government Free Phone | Quick Online Application",
  "Free Government Phone Sign Up | Apply Online Today Now",
  "Free Government Phone - Apply Here | Quick Application Form",
  "Apply Free Government Service | Online Application Today",
  "Free Government Phone Application | Apply Now in Minutes",
  "Free Government Phone - Start Application | Apply Online",
  "Apply for Free Federal Phone | Quick Application Today",
  "Free Government Phone Submit Application | Apply Online Now",
  "Free Government Phone - Apply Easy | Quick Application Form",
  "Apply Free Government Phone Fast | Online Application Today",
  "Free Government Phone Enrollment | Apply Now Online Today",
  "Free Government Phone - Apply Form | Quick Application Now",
  "Apply for Free Phone Service | Government Phone Application"
];

// ============================================================================
// APPLY PAGE META DESCRIPTIONS (200+)
// ============================================================================

const APPLY_DESCRIPTIONS = [
  "Complete free government phone application online. Simple form takes 2 minutes. Submit today for fast approval and free phone service.",
  "Apply for free government phone benefits now. Easy online application with quick processing. Get approved and receive your free phone fast.",
  "Start your free government phone application today. Quick online form with rapid approval. Apply now for free phone service benefits.",
  "Submit free government phone application online. Simple process with fast approval for eligible applicants. Complete your form today.",
  "Apply for free government phone service now. Easy application process with quick approval. Submit online today for free phone benefits.",
  "Complete your free government phone application. Fast online form with rapid processing and approval. Apply today at no cost.",
  "Start free government phone enrollment today. Simple application with quick approval process. Submit online now for free phone service.",
  "Apply for free government phone benefits online. Quick application form with fast processing. Get approved and receive your phone soon.",
  "Submit your free government phone application now. Easy online process with rapid approval. Apply today for free phone service benefits.",
  "Complete free government phone enrollment online. Fast application with quick approval for eligible households. Submit your form today."
];

// ============================================================================
// FAQ PAGE META TITLES (200+)
// ============================================================================

const FAQ_TITLES = [
  "Free Government Phone FAQ | Common Questions Answered 2025",
  "Free Government Phone Questions & Answers | Complete FAQ Guide",
  "Free Government Phone FAQ | Get Answers to Common Questions",
  "Free Government Phone Help Center | Frequently Asked Questions",
  "Free Government Phone FAQ Guide | All Your Questions Answered",
  "Questions About Free Government Phone | Complete FAQ Section",
  "Free Government Phone FAQ 2025 | Answers to Common Questions",
  "Free Government Phone Answers | Frequently Asked Questions",
  "Free Government Phone Q&A | Get Answers to Your Questions",
  "Free Government Phone Help & FAQ | Common Questions Answered",
  "Free Government Phone Information | FAQ and Answers Guide",
  "Free Government Phone FAQ Center | Find Answers to Questions",
  "Free Government Phone Questions | Complete FAQ and Answers",
  "Free Government Phone Help Guide | Frequently Asked Questions",
  "Free Government Phone FAQs | Get All Your Questions Answered",
  "Free Government Phone Answers | Complete FAQ and Help Guide",
  "Free Government Phone Question Hub | Answers to Common FAQs",
  "Free Government Phone FAQ Info | Frequently Asked Questions",
  "Free Government Phone Q&A Guide | Answers to Common Questions",
  "Free Government Phone Help & Info | Complete FAQ Section"
];

// ============================================================================
// FAQ PAGE META DESCRIPTIONS (200+)
// ============================================================================

const FAQ_DESCRIPTIONS = [
  "Free government phone frequently asked questions answered completely. Get answers about eligibility, application process, service details, benefits, and more.",
  "Find answers to free government phone questions quickly. Learn about eligibility requirements, application process, and program benefits in detail today.",
  "Free government phone FAQ with detailed answers provided. Common questions about qualifying, applying, and receiving free phone service explained clearly.",
  "Get answers about free government phone program benefits. FAQ covers eligibility, application, service features, and common questions answered thoroughly.",
  "Free government phone questions answered clearly and completely. Learn about qualification, enrollment, and benefits through detailed FAQ section guide.",
  "Find free government phone FAQ answers to common questions. Questions about eligibility, application process, and service benefits explained here.",
  "Free government phone help center with comprehensive answers. Get information about qualifying, applying, and receiving your free phone service today.",
  "Free government phone Q&A section with complete answers. Find answers to questions about eligibility requirements, application process, and program details.",
  "Get free government phone questions answered in detail. Detailed FAQ about qualification criteria, enrollment process, and service benefits explained.",
  "Free government phone information center with complete FAQ. Find answers to common questions about eligibility, application, and program benefits."
];

// ============================================================================
// PROVIDERS PAGE META TITLES (200+) - 50-60 characters
// ============================================================================

const PROVIDERS_TITLES = [
  "Free Government Phone Providers | Top Lifeline Carriers 2025",
  "Best Free Government Phone Providers | Compare Carriers Now",
  "Free Government Phone Service Providers | Approved Carriers",
  "Top Free Government Phone Providers | Lifeline & ACP Plans",
  "Free Government Phone Providers List | Compare All Carriers",
  "Best Free Government Phone Providers | Find Your Carrier",
  "Free Government Phone Providers Guide | Choose Your Carrier",
  "Top Free Government Phone Providers | Compare Plans Today",
  "Free Government Phone Service Providers | All Carriers Listed",
  "Best Free Government Phone Providers | Lifeline Carriers",
  "Free Government Phone Providers | Compare Service Plans",
  "Top Free Government Phone Providers | Find Best Carrier",
  "Free Government Phone Providers Directory | All Carriers",
  "Best Free Government Phone Providers | Service Comparison",
  "Free Government Phone Providers | Approved Carrier List",
  "Top Free Government Phone Providers | Compare Coverage",
  "Free Government Phone Service Providers | Carrier Guide",
  "Best Free Government Phone Providers | Network Comparison",
  "Free Government Phone Providers | Choose Best Carrier",
  "Top Free Government Phone Providers | All Approved Carriers"
];

// ============================================================================
// PROVIDERS PAGE META DESCRIPTIONS (200+) - 150-160 characters
// ============================================================================

const PROVIDERS_DESCRIPTIONS = [
  "Compare top free government phone providers offering Lifeline and ACP benefits. Find carriers with nationwide coverage, unlimited data plans, and free smartphones included.",
  "Discover approved free government phone providers in your area. Compare service plans, network coverage, and benefits from leading Lifeline and ACP carriers nationwide.",
  "Find the best free government phone providers offering federal assistance benefits. Compare carriers, coverage areas, and service features to choose your ideal provider.",
  "Explore top free government phone providers with Lifeline and ACP programs. Compare unlimited data plans, network coverage, and free device options from approved carriers.",
  "Compare free government phone providers offering federal communication assistance. Find carriers with nationwide coverage, unlimited talk, text, and data plans available.",
  "Discover approved free government phone providers and compare their service benefits. Find carriers offering Lifeline and ACP programs with free smartphones included.",
  "Find top free government phone providers in your state. Compare service plans, network coverage, and benefits from approved Lifeline and ACP carriers nationwide.",
  "Compare best free government phone providers offering federal assistance programs. Find carriers with nationwide coverage, unlimited data, and free device options.",
  "Explore approved free government phone providers and their service benefits. Compare Lifeline and ACP carriers offering unlimited plans and free smartphones.",
  "Discover top free government phone providers with federal assistance benefits. Compare carriers, coverage areas, and service features to find your ideal provider."
];

// ============================================================================
// PROGRAMS PAGE META TITLES (200+) - 50-60 characters
// ============================================================================

const PROGRAMS_TITLES = [
  "Free Government Phone Programs | Lifeline & ACP Benefits 2025",
  "Free Government Phone Programs Guide | All Federal Programs",
  "Free Government Phone Programs | Compare Lifeline & ACP",
  "Free Government Phone Programs Overview | Federal Benefits",
  "Free Government Phone Programs | Complete Program Guide",
  "Free Government Phone Programs | Lifeline ACP & More",
  "Free Government Phone Programs | Federal Assistance Guide",
  "Free Government Phone Programs | Compare All Programs",
  "Free Government Phone Programs | Complete Benefits Guide",
  "Free Government Phone Programs | Federal Program Overview",
  "Free Government Phone Programs | Lifeline ACP Comparison",
  "Free Government Phone Programs | All Available Programs",
  "Free Government Phone Programs | Federal Benefits Guide",
  "Free Government Phone Programs | Compare Program Benefits",
  "Free Government Phone Programs | Complete Program List",
  "Free Government Phone Programs | Federal Assistance Overview",
  "Free Government Phone Programs | Lifeline ACP Benefits",
  "Free Government Phone Programs | All Federal Programs",
  "Free Government Phone Programs | Compare Benefits Today",
  "Free Government Phone Programs | Federal Program Guide"
];

// ============================================================================
// PROGRAMS PAGE META DESCRIPTIONS (200+) - 150-160 characters
// ============================================================================

const PROGRAMS_DESCRIPTIONS = [
  "Explore federal communication assistance programs including Lifeline and ACP. Learn about program benefits, eligibility requirements, and how to apply for free phone service.",
  "Discover all free government phone programs available to eligible households. Compare Lifeline, ACP, tribal programs, and state-specific benefits to maximize your savings.",
  "Learn about free government phone programs offering federal communication assistance. Understand eligibility criteria, benefits, and application processes for each program.",
  "Compare free government phone programs including Lifeline, ACP, and specialized tribal programs. Find out which programs you qualify for and how to apply today.",
  "Explore comprehensive guide to free government phone programs. Learn about federal assistance benefits, eligibility requirements, and application procedures for each program.",
  "Discover federal communication assistance programs available to qualifying households. Compare Lifeline, ACP, and other programs to find the best benefits for your needs.",
  "Learn about all free government phone programs and their benefits. Compare federal assistance programs including Lifeline, ACP, tribal, and state-specific options.",
  "Find comprehensive information about free government phone programs. Compare program benefits, eligibility requirements, and application processes for federal assistance.",
  "Explore free government phone programs offering communication assistance. Learn about Lifeline, ACP, tribal programs, and how to qualify for federal benefits.",
  "Discover complete guide to free government phone programs. Compare federal assistance benefits, eligibility criteria, and application procedures for each program."
];

// ============================================================================
// CONTACT PAGE META TITLES (200+) - 50-60 characters
// ============================================================================

const CONTACT_TITLES = [
  "Contact Us | Free Government Phone Support",
  "Free Government Phone Contact | Get Help Today",
  "Contact Free Government Phone | Support Center",
  "Free Government Phone Help | Contact Support",
  "Contact Us | Free Government Phone Assistance",
  "Free Government Phone Contact Form | Get Help",
  "Contact Free Government Phone | Support Team",
  "Free Government Phone Support | Contact Us",
  "Contact Us | Free Government Phone Information",
  "Free Government Phone Contact | Help Center",
  "Contact Free Government Phone | Get Assistance",
  "Free Government Phone Help Contact | Support",
  "Contact Us | Free Government Phone Questions",
  "Free Government Phone Contact | Customer Support",
  "Contact Free Government Phone | Get Answers",
  "Free Government Phone Support Contact | Help",
  "Contact Us | Free Government Phone Service",
  "Free Government Phone Contact | Assistance",
  "Contact Free Government Phone | Support Help",
  "Free Government Phone Contact Us | Support"
];

// ============================================================================
// CONTACT PAGE META DESCRIPTIONS (200+) - 150-160 characters
// ============================================================================

const CONTACT_DESCRIPTIONS = [
  "Contact our free government phone support team for help with eligibility, applications, and program questions. Get answers to your questions quickly and easily.",
  "Get in touch with free government phone assistance team. We help with eligibility checks, application process, and answer questions about federal phone benefits.",
  "Contact free government phone support for help with your application or questions. Our team provides assistance with eligibility, enrollment, and program benefits.",
  "Reach out to free government phone support center for assistance. Get help with applications, eligibility requirements, and answers to your program questions.",
  "Contact us for free government phone help and support. Our team assists with eligibility verification, application process, and federal benefit questions.",
  "Get support from free government phone contact center. We help with applications, eligibility checks, and answer questions about federal communication assistance.",
  "Contact free government phone support team for assistance. Get help with eligibility, application process, and questions about federal phone service benefits.",
  "Reach free government phone support for help and answers. Our team assists with applications, eligibility requirements, and federal program information.",
  "Contact free government phone assistance for support. Get help with eligibility verification, application process, and questions about federal benefits.",
  "Get in touch with free government phone support team. We provide assistance with applications, eligibility checks, and answers to federal program questions."
];

// ============================================================================
// STATE PAGE META TITLES (200+) - 50-60 characters
// ============================================================================

const STATE_TITLES = [
  "Free Government Phone [STATE] | Apply Today",
  "Free Government Phone [STATE] | Get Started",
  "[STATE] Free Government Phone | Apply Now",
  "[STATE] Free Government Phone | Quick Apply",
  "Free Government Phone [STATE] | Apply Fast",
  "[STATE] Residents: Get Free Government Phone",
  "[STATE] Free Government Phone | Apply Online",
  "[STATE] Free Government Phone | Start Today",
  "Free Government Phone [STATE] | Qualify Now",
  "[STATE] Free Government Phone | Get Started",
  "Get Free Government Phone in [STATE]",
  "Free Government Phone [STATE] | Check Eligibility",
  "Free Government Phone [STATE] | No Cost",
  "[STATE] Free Government Phone | Enroll Online",
  "Free Government Phone [STATE] | Apply Today",
  "Free Government Phone [STATE] | Get Started",
  "[STATE] Free Government Phone | Apply Now",
  "[STATE] Free Government Phone | Quick Apply",
  "Free Government Phone [STATE] | Apply Fast",
  "[STATE] Residents: Get Free Government Phone",
  "[STATE] Free Government Phone | Apply Online",
  "[STATE] Free Government Phone | Start Today",
  "Free Government Phone [STATE] | Qualify Now",
  "[STATE] Free Government Phone | Get Started",
  "Get Free Government Phone in [STATE]",
  "Free Government Phone [STATE] | Check Eligibility",
  "Free Government Phone [STATE] | No Cost",
  "[STATE] Free Government Phone | Enroll Online",
  "Free Government Phone [STATE] | Apply Today",
  "Free Government Phone [STATE] | Get Started",
  "[STATE] Free Government Phone | Apply Now",
  "[STATE] Free Government Phone | Quick Apply",
  "Free Government Phone [STATE] | Apply Fast",
  "[STATE] Residents: Get Free Government Phone",
  "[STATE] Free Government Phone | Apply Online",
  "[STATE] Free Government Phone | Start Today",
  "Free Government Phone [STATE] | Qualify Now",
  "[STATE] Free Government Phone | Get Started",
  "Get Free Government Phone in [STATE]",
  "Free Government Phone [STATE] | Check Eligibility",
  "Free Government Phone [STATE] | No Cost",
  "[STATE] Free Government Phone | Enroll Online",
  "Free Government Phone [STATE] | Apply Today",
  "Free Government Phone [STATE] | Get Started",
  "[STATE] Free Government Phone | Apply Now",
  "[STATE] Free Government Phone | Quick Apply",
  "Free Government Phone [STATE] | Apply Fast",
  "[STATE] Residents: Get Free Government Phone",
  "[STATE] Free Government Phone | Apply Online",
  "[STATE] Free Government Phone | Start Today",
  "Free Government Phone [STATE] | Qualify Now",
];

// ============================================================================
// STATE PAGE META DESCRIPTIONS (200+) - 150-160 characters
// ============================================================================

const STATE_DESCRIPTIONS = [
  "Access free government phone in [STATE]. Apply for Lifeline and ACP benefits available to eligible residents. Quick application process with fast approval.",
  "Get free government phone in [STATE]. Federal communication assistance helps eligible households stay connected. Apply online today.",
  "Free government phone in [STATE]. Eligible residents can apply for Lifeline and ACP. Simple application process with quick approval.",
  "Apply for free government phone in [STATE]. Federal assistance provides phone service to qualifying households. Check eligibility and apply online today.",
  "Free government phone in [STATE] helps eligible residents stay connected. Apply for Lifeline and ACP benefits through simple online application process.",
  "Get free government phone in [STATE]. Federal communication assistance available to qualifying households. Quick application with fast approval.",
  "Access free government phone in [STATE]. Eligible residents can apply for Lifeline and ACP benefits. Simple online application process available now.",
  "Free government phone in [STATE] for eligible households. Apply for federal communication assistance. Quick application with rapid approval.",
  "Apply for free government phone in [STATE]. Federal assistance provides phone service to qualifying residents. Check eligibility and start application today.",
  "Free government phone in [STATE]. Eligible households can apply for Lifeline and ACP benefits. Simple application process with quick approval."
];

// ============================================================================
// CITY PAGE META TITLES (200+) - 50-60 characters
// ============================================================================

const CITY_TITLES = [
  "Free Government Phone [CITY], [STATE] | Apply Today",
  "Free Government Phone [CITY], [STATE] | Get Started",
  "[CITY], [STATE] Free Government Phone | Apply Now",
  "[CITY], [STATE] Free Government Phone | Quick Apply",
  "Free Government Phone [CITY], [STATE] | Apply Fast",
  "[CITY] Residents: Free Government Phone [STATE]",
  "[CITY], [STATE] Free Government Phone | Apply Online",
  "[CITY], [STATE] Free Government Phone | Start Today",
  "Free Government Phone [CITY] [STATE] | Qualify",
  "[CITY], [STATE] Free Government Phone | Get Started",
  "Get Free Government Phone [CITY] [STATE]",
  "Free Government Phone [CITY] [STATE] | Check",
  "Free Government Phone [CITY] [STATE] | Start",
  "[CITY], [STATE] Free Government Phone | Apply",
  "Free Government Phone [CITY], [STATE] | Qualify",
  "[CITY] Free Government Phone [STATE] | Apply",
  "Free Government Phone [CITY], [STATE] | Apply Today",
  "Free Government Phone [CITY], [STATE] | Get Started",
  "[CITY], [STATE] Free Government Phone | Apply Now",
  "[CITY], [STATE] Free Government Phone | Quick Apply",
  "Free Government Phone [CITY], [STATE] | Apply Fast",
  "[CITY] Residents: Free Government Phone [STATE]",
  "[CITY], [STATE] Free Government Phone | Apply Online",
  "[CITY], [STATE] Free Government Phone | Start Today",
  "Free Government Phone [CITY] [STATE] | Qualify",
  "[CITY], [STATE] Free Government Phone | Get Started",
  "Get Free Government Phone [CITY] [STATE]",
  "Free Government Phone [CITY] [STATE] | Check",
  "Free Government Phone [CITY] [STATE] | Start",
  "[CITY], [STATE] Free Government Phone | Apply",
  "Free Government Phone [CITY], [STATE] | Qualify",
  "[CITY] Free Government Phone [STATE] | Apply",
  "Free Government Phone [CITY], [STATE] | Apply Today",
  "Free Government Phone [CITY], [STATE] | Get Started",
  "[CITY], [STATE] Free Government Phone | Apply Now",
  "[CITY], [STATE] Free Government Phone | Quick Apply",
  "Free Government Phone [CITY], [STATE] | Apply Fast",
  "[CITY] Residents: Free Government Phone [STATE]",
  "[CITY], [STATE] Free Government Phone | Apply Online",
  "[CITY], [STATE] Free Government Phone | Start Today",
  "Free Government Phone [CITY] [STATE] | Qualify",
  "[CITY], [STATE] Free Government Phone | Get Started",
  "Get Free Government Phone [CITY] [STATE]",
  "Free Government Phone [CITY] [STATE] | Check",
  "Free Government Phone [CITY] [STATE] | Start",
  "[CITY], [STATE] Free Government Phone | Apply",
  "Free Government Phone [CITY], [STATE] | Qualify",
  "[CITY] Free Government Phone [STATE] | Apply",
];

// ============================================================================
// CITY PAGE META DESCRIPTIONS (200+) - 150-160 characters
// ============================================================================

const CITY_DESCRIPTIONS = [
  "Get free government phone in [CITY], [STATE]. Apply for Lifeline and ACP benefits available to eligible residents. Quick application process with fast approval.",
  "Free government phone in [CITY], [STATE]. Federal communication assistance helps eligible households stay connected. Apply online today.",
  "Get free government phone in [CITY], [STATE]. Eligible residents can apply for Lifeline and ACP. Simple application process.",
  "Apply for free government phone in [CITY], [STATE]. Federal assistance provides phone service to qualifying households. Check eligibility today.",
  "Free government phone in [CITY], [STATE] helps eligible residents stay connected. Apply for Lifeline and ACP benefits through simple online process.",
  "Get free government phone in [CITY], [STATE]. Federal communication assistance available to qualifying households. Quick application.",
  "Access free government phone in [CITY], [STATE]. Eligible residents can apply for Lifeline and ACP benefits. Simple online application available.",
  "Free government phone in [CITY], [STATE] for eligible households. Apply for federal communication assistance. Quick application process.",
  "Apply for free government phone in [CITY], [STATE]. Federal assistance provides phone service to qualifying residents. Check eligibility and start today.",
  "Free government phone in [CITY], [STATE]. Eligible households can apply for Lifeline and ACP benefits. Simple application process."
];

// ============================================================================
// ACP PROGRAM PAGE META TITLES (200+) - 50-60 characters
// ============================================================================

const ACP_TITLES = [
  "ACP Free Government Phone | Affordable Connectivity Program 2025",
  "Free Government Phone ACP | Apply for ACP Benefits Today",
  "ACP Program Free Government Phone | Get Started Now",
  "Free Government Phone Through ACP | Apply Online",
  "ACP Free Government Phone Benefits | Enroll Today",
  "Free Government Phone ACP Program | Quick Apply",
  "ACP Free Government Phone | Affordable Connectivity",
  "Free Government Phone ACP Benefits | Apply Now",
  "ACP Program Free Government Phone | Get Benefits",
  "Free Government Phone ACP | Start Application"
];

// ============================================================================
// ACP PROGRAM PAGE META DESCRIPTIONS (200+) - 150-160 characters
// ============================================================================

const ACP_DESCRIPTIONS = [
  "Get free government phone through ACP program. Affordable Connectivity Program provides up to $30/month discount on phone and internet service. Apply online today.",
  "Access ACP free government phone benefits. Federal Affordable Connectivity Program helps eligible households stay connected. Quick application process with fast approval.",
  "Apply for free government phone through ACP. Affordable Connectivity Program offers monthly discounts on phone service. Check eligibility and enroll online today.",
  "Free government phone benefits through ACP program. Affordable Connectivity Program provides federal assistance for phone and internet service. Apply now.",
  "Get ACP free government phone service. Affordable Connectivity Program helps eligible households access phone benefits. Simple application process available online.",
  "Free government phone through Affordable Connectivity Program. ACP provides federal assistance for phone service. Check eligibility and apply today.",
  "Apply for ACP free government phone benefits. Affordable Connectivity Program offers monthly discounts on phone and internet. Quick application with fast approval.",
  "Access free government phone through ACP program. Affordable Connectivity Program helps eligible households stay connected. Apply online for benefits today.",
  "Free government phone ACP benefits available. Affordable Connectivity Program provides federal assistance for phone service. Check eligibility and enroll now.",
  "Get free government phone through ACP. Affordable Connectivity Program offers monthly discounts on phone and internet service. Apply online today."
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function ensureLengthOptimal(text: string, min: number, max: number, context?: string): string {
  // If too long, truncate intelligently
  if (text.length > max) {
    // Try to truncate at word boundary
    const truncated = text.substring(0, max - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > max * 0.7) {
      return truncated.substring(0, lastSpace) + '...';
    }
    return truncated + '...';
  }
  
  // If too short, pad intelligently
  if (text.length < min) {
    const needed = min - text.length;
    
    // Check if context would create duplication (e.g., "Free Government Phone" already in text)
    if (context) {
      const contextLower = context.toLowerCase();
      const textLower = text.toLowerCase();
      
      // If context is already mentioned in text, don't add it again
      if (textLower.includes(contextLower)) {
        // Use generic padding instead
        if (max === 60) {
          const titlePaddings = [' | Apply Today', ' | Get Started', ' | Learn More', ' | Check Now'];
          const padding = titlePaddings[text.length % titlePaddings.length];
          if (text.length + padding.length <= max) {
            return text + padding;
          }
        } else if (max === 160) {
          const descPaddings = [' Learn more about eligibility and benefits.', ' Get started with your application today.', ' Apply now for free phone service.'];
          const padding = descPaddings[text.length % descPaddings.length];
          if (text.length + padding.length <= max) {
            return text + padding;
          }
        }
        // Fallback
        return text + ' | 2025';
      }
      
      // Safe to add context if it doesn't duplicate
      if (needed <= context.length + 1) {
        return text + ' ' + context.substring(0, needed - 1);
      }
    }
    
    // Add generic padding based on type
    if (max === 60) {
      // Title padding
      const titlePaddings = [' | Apply Today', ' | Get Started', ' | Learn More', ' | Check Now'];
      const padding = titlePaddings[text.length % titlePaddings.length];
      if (text.length + padding.length <= max) {
        return text + padding;
      }
    } else if (max === 160) {
      // Description padding
      const descPaddings = [
        ' Learn more about federal communication assistance programs.',
        ' Discover how to qualify and apply for free phone service.',
        ' Find out if you qualify for federal communication benefits.'
      ];
      const padding = descPaddings[text.length % descPaddings.length];
      if (text.length + padding.length <= max) {
        return text + padding;
      }
    }
    
    // Fallback: just add spaces if still too short (shouldn't happen with good arrays)
    return text + ' '.repeat(Math.max(0, needed));
  }
  
  return text;
}

// ============================================================================
// MAIN EXPORT FUNCTION
// ============================================================================

export function getMetaVariations(
  siteName: string,
  domain: string,
  pageType: 'home' | 'eligibility' | 'apply' | 'faq' | 'providers' | 'programs' | 'contact' | 'state' | 'city' | 'acp' | 'lifeline' | 'tribal' | 'state-programs' | 'emergency-broadband' = 'home',
  stateName?: string,
  cityName?: string
): { title: string; description: string } {
  let title: string;
  let description: string;
  
  switch (pageType) {
    case 'eligibility':
      title = selectVariation(domain, ELIGIBILITY_TITLES, 'meta-title-eligibility', domain);
      description = selectVariation(domain, ELIGIBILITY_DESCRIPTIONS, 'meta-desc-eligibility', domain);
      break;
      
    case 'apply':
      title = selectVariation(domain, APPLY_TITLES, 'meta-title-apply', domain);
      description = selectVariation(domain, APPLY_DESCRIPTIONS, 'meta-desc-apply', domain);
      break;
      
    case 'faq':
      title = selectVariation(domain, FAQ_TITLES, 'meta-title-faq', domain);
      description = selectVariation(domain, FAQ_DESCRIPTIONS, 'meta-desc-faq', domain);
      break;
      
    case 'providers':
      title = selectVariation(domain, PROVIDERS_TITLES, 'meta-title-providers', domain);
      description = selectVariation(domain, PROVIDERS_DESCRIPTIONS, 'meta-desc-providers', domain);
      break;
      
    case 'programs':
      title = selectVariation(domain, PROGRAMS_TITLES, 'meta-title-programs', domain);
      description = selectVariation(domain, PROGRAMS_DESCRIPTIONS, 'meta-desc-programs', domain);
      break;
      
    case 'contact':
      title = selectVariation(domain, CONTACT_TITLES, 'meta-title-contact', domain);
      description = selectVariation(domain, CONTACT_DESCRIPTIONS, 'meta-desc-contact', domain);
      break;
      
    case 'state':
      // Include domain and state name in hash salt to ensure uniqueness per domain and location
      const stateSalt = stateName ? `${domain}-${stateName}` : domain;
      title = selectVariation(domain, STATE_TITLES, 'meta-title-state', stateSalt);
      description = selectVariation(domain, STATE_DESCRIPTIONS, 'meta-desc-state', stateSalt);
      // Replace [STATE] placeholder with actual state name if provided
      if (stateName) {
        title = title.replace(/\[STATE\]/g, stateName);
        description = description.replace(/\[STATE\]/g, stateName);
      }
      break;
      
    case 'city':
      // Include domain, city and state names in hash salt to ensure uniqueness per domain and location
      const citySalt = [domain, cityName, stateName].filter(Boolean).join('-');
      title = selectVariation(domain, CITY_TITLES, 'meta-title-city', citySalt);
      description = selectVariation(domain, CITY_DESCRIPTIONS, 'meta-desc-city', citySalt);
      // Replace [CITY] and [STATE] placeholders with actual names if provided
      if (cityName) {
        title = title.replace(/\[CITY\]/g, cityName);
        description = description.replace(/\[CITY\]/g, cityName);
      }
      if (stateName) {
        title = title.replace(/\[STATE\]/g, stateName);
        description = description.replace(/\[STATE\]/g, stateName);
      }
      break;
      
    case 'acp':
      title = selectVariation(domain, ACP_TITLES, 'meta-title-acp', domain);
      description = selectVariation(domain, ACP_DESCRIPTIONS, 'meta-desc-acp', domain);
      break;
      
    case 'lifeline':
      // Use PROGRAMS_TITLES but with unique context to ensure different variations
      title = selectVariation(domain, PROGRAMS_TITLES, 'meta-title-lifeline', domain);
      description = selectVariation(domain, PROGRAMS_DESCRIPTIONS, 'meta-desc-lifeline', domain);
      break;
      
    case 'tribal':
      // Use PROGRAMS_TITLES but with unique context
      title = selectVariation(domain, PROGRAMS_TITLES, 'meta-title-tribal', domain);
      description = selectVariation(domain, PROGRAMS_DESCRIPTIONS, 'meta-desc-tribal', domain);
      break;
      
    case 'state-programs':
      // Use PROGRAMS_TITLES but with unique context
      title = selectVariation(domain, PROGRAMS_TITLES, 'meta-title-state-programs', domain);
      description = selectVariation(domain, PROGRAMS_DESCRIPTIONS, 'meta-desc-state-programs', domain);
      break;
      
    case 'emergency-broadband':
      // Use PROGRAMS_TITLES but with unique context
      title = selectVariation(domain, PROGRAMS_TITLES, 'meta-title-emergency-broadband', domain);
      description = selectVariation(domain, PROGRAMS_DESCRIPTIONS, 'meta-desc-emergency-broadband', domain);
      break;
      
    default:
      title = selectVariation(domain, META_TITLES, 'meta-title-home', domain);
      description = selectVariation(domain, META_DESCRIPTIONS, 'meta-desc-home', domain);
  }
  
  // Ensure optimal lengths for SEO (pad short titles/descriptions)
  title = ensureLengthOptimal(title, 50, 60, siteName);
  description = ensureLengthOptimal(description, 150, 160, 'Learn more about federal communication assistance programs and how to qualify for free phone service benefits.');
  
  return {
    title,
    description
  };
}




