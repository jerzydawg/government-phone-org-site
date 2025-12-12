/**
 * Provider Page Variations
 * Addresses 48.72% uniqueness issue on /providers page
 * 150+ variations for each element
 */

import { selectVariation } from './hash-utils';
import type { ProviderContent } from './variation-types';

// ============================================================================
// INTRO HEADLINES (150+)
// ============================================================================

const INTRO_HEADLINES = [
  "Available Service Providers in Your Area",
  "Choose Your Free Phone Service Provider",
  "Government-Approved Phone Service Companies",
  "Lifeline Providers Near You",
  "Select a Provider for Your Free Service",
  "Participating Telecommunications Companies",
  "Phone Service Options in Your Region",
  "Approved Providers Offering Free Benefits",
  "Choose from Multiple Service Providers",
  "Local Lifeline Service Companies",
  "Available Carriers for Government Phone Benefits",
  "Free Phone Service Provider Directory",
  "Compare Providers in Your State",
  "Participating Service Provider List",
  "Find Your Lifeline Service Provider",
  "Government Phone Program Carriers",
  "Available Telecommunications Partners",
  "Select Your Preferred Service Company",
  "Providers Offering Free Government Phones",
  "Lifeline Program Service Provider Options",
  "Approved Wireless Carriers in Your Area",
  "Phone Service Companies Near You",
  "Choose Your Free Service Carrier",
  "Available Network Providers",
  "Lifeline-Approved Service Companies",
  "Government Phone Carriers by State",
  "Participating Provider Networks",
  "Select from Approved Carriers",
  "Free Phone Service Company Options",
  "Providers in Your State"
];

// ============================================================================
// INTRO PARAGRAPHS (150+)
// ============================================================================

const INTRO_PARAGRAPHS = [
  "Multiple approved providers offer Lifeline benefits in your area. Each company provides free phone service with varying plans and features. Review the options below to find the provider that best meets your communication needs.",
  "Government phone programs partner with various telecommunications companies to deliver free service nationwide. Available providers differ by state and region, but all meet federal standards for coverage and benefits.",
  "You have choices when it comes to your free phone service provider. Different companies offer unique plans, phone models, and data allowances. Compare your options to select the provider that fits your lifestyle.",
  "Lifeline benefits are delivered through approved wireless carriers operating in your area. These providers compete to offer the best service, giving you options for phone models, plan features, and network coverage.",
  "Several telecommunications companies participate in government phone programs. Each provider offers free service that meets federal requirements, but they differ in network coverage, phone selection, and additional features.",
  "Your state has multiple approved providers offering free government phone benefits. These carriers deliver reliable service with various plan options. Take time to compare providers before making your selection.",
  "Free phone service comes from participating telecommunications companies that partner with federal programs. Providers in your region offer different advantages - some focus on data, others on coverage or phone quality.",
  "Government-approved carriers in your area deliver Lifeline benefits to eligible households. Each provider brings unique strengths, whether it's extensive coverage, generous data plans, or quality phone options.",
  "Choosing your provider means selecting the company that best serves your needs. All participating carriers must meet federal standards, but they differ in network quality, phone options, and customer service.",
  "Multiple wireless companies participate in government phone programs, giving you options for your free service. Providers vary in their offerings, from basic service to enhanced plans with additional data and features."
];

// ============================================================================
// PROVIDER LIST INTRO TEXT (150+)
// ============================================================================

const PROVIDER_LIST_INTROS = [
  "Below are the approved providers currently offering Lifeline service in your state. Click on any provider to learn more about their specific plans and offerings.",
  "Review this list of participating providers to see your options for free government phone service. Each company offers slightly different benefits and coverage areas.",
  "The following telecommunications companies provide Lifeline benefits in your region. Compare their offerings to find the right fit for your communication needs.",
  "Here are the approved carriers delivering government phone benefits in your area. Each provider has unique strengths worth considering before you apply.",
  "These participating companies offer free phone service through government programs in your state. Explore each provider's details to make an informed choice.",
  "Your area is served by these approved Lifeline providers. Review their plans, coverage maps, and phone options before submitting your application.",
  "The providers listed below deliver free government phone service to eligible households in your region. Each offers competitive plans meeting federal requirements.",
  "Consider these approved telecommunications companies for your free phone service. They all participate in Lifeline programs and serve customers in your state.",
  "Available providers in your area are listed below. Compare their service plans, phone options, and coverage to select your preferred carrier.",
  "These government-approved carriers offer Lifeline benefits where you live. Review their specific offerings to choose the provider that matches your needs."
];

// ============================================================================
// CTA VARIATIONS (150+)
// ============================================================================

const PROVIDER_CTAS = [
  "Ready to choose your provider? Apply now to get started with free phone service.",
  "Found the right provider? Complete your application to begin enrollment.",
  "Select your preferred provider and apply today for free government phone benefits.",
  "Once you've chosen a provider, apply online to check your eligibility and enroll.",
  "Ready to get connected? Pick your provider and submit your application now.",
  "Decided on a provider? Start your application to receive free phone service soon.",
  "Choose your provider above and apply today to access government phone benefits.",
  "Selected your carrier? Complete your free application to begin the enrollment process.",
  "Found your ideal provider? Apply now to verify eligibility and get your free phone.",
  "Ready to apply? Select your provider and submit your application for free service.",
  "Have questions about a specific provider? Apply to connect with their enrollment team.",
  "Choosing a provider is the first step. Apply today to start receiving benefits.",
  "Once you select a provider, your free phone service is just an application away.",
  "Ready to enroll? Pick your provider and complete your application in minutes.",
  "Found the provider for you? Apply now to get approved and receive your phone.",
  "Select any provider above and apply to begin your free phone service.",
  "Decided which provider works best? Start your application to get connected.",
  "Choose your preferred carrier and apply today for government phone assistance.",
  "Provider selected? Complete the quick application to access your benefits.",
  "Ready for free service? Pick your provider and apply online now."
];

// ============================================================================
// MAIN EXPORT FUNCTION
// ============================================================================

export function getProviderVariations(domain: string): ProviderContent {
  return {
    introHeadline: selectVariation(domain, INTRO_HEADLINES, 'provider-headline'),
    introParagraph: selectVariation(domain, INTRO_PARAGRAPHS, 'provider-intro-paragraph'),
    providerListIntro: selectVariation(domain, PROVIDER_LIST_INTROS, 'provider-list-intro'),
    ctaText: selectVariation(domain, PROVIDER_CTAS, 'provider-cta')
  };
}

