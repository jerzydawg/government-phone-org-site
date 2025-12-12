/**
 * TypeScript Interfaces for All Variation Modules
 * Ensures type safety and consistency across variation system
 */

export interface ApplyPageContent {
  headline: string;
  subheadline: string;
  formIntro: string;
  fieldLabels: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    income: string;
    household: string;
  };
  instructions: string[];
  helpText: {
    income: string;
    household: string;
    privacy: string;
  };
  trustIndicators: string[];
  privacyStatement: string;
  successMessage: string;
  errorMessage: string;
  submitButtonText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'eligibility' | 'program' | 'process' | 'technical' | 'general';
}

export interface FAQContent {
  questions: FAQItem[];
  introText: string;
  ctaText: string;
  h1: string;
  h2: string;
}

export interface EligibilityContent {
  h1: string;
  h2s: string[];
  introText: string;
  incomeRequirements: string;
  programBenefits: string[];
  qualificationChecklist: string[];
  callToAction: string;
  examples: string[];
}

export interface ProviderContent {
  introHeadline: string;
  introParagraph: string;
  providerListIntro: string;
  ctaText: string;
}

export interface ProgramContent {
  lifelineDescription: string;
  acpDescription: string;
  tribalDescription: string;
  lifelineH2: string;
  acpH2: string;
  tribalH2: string;
}

export interface MetaContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface HeadingVariations {
  h1: string;
  h2s: string[];
  h3s: string[];
}

export interface SchemaHowToStep {
  name: string;
  text: string;
  url: string;
}

export interface SchemaVariations {
  howToSteps: SchemaHowToStep[];
  organizationDescription: string;
}

export interface LSIKeyword {
  original: string;
  alternatives: string[];
}

