/**
 * Global Trust & Privacy Variations (Shared Across All Keywords)
 * Generic trust indicators, privacy statements - NO keyword mentions
 */

import { selectVariation } from './hash-utils';

const TRUST_INDICATORS = [
  "✓ Secure & Confidential",
  "✓ Fast Processing",
  "✓ No Hidden Fees",
  "✓ 100% Free Application",
  "✓ Privacy Protected",
  "✓ Quick Approval",
  "✓ Trusted Service",
  "✓ Safe & Secure",
  "✓ No Credit Check",
  "✓ Simple Process",
  "✓ Expert Support Available",
  "✓ Verified Program",
  "✓ Nationwide Service",
  "✓ No Obligations",
  "✓ Confidential Application",
  "✓ Bank-Level Security",
  "✓ Easy Enrollment",
  "✓ Dedicated Support",
  "✓ Transparent Process",
  "✓ Established Program"
];

const PRIVACY_STATEMENTS = [
  "Your privacy is important to us. All information provided is kept confidential and secure.",
  "We protect your personal data with industry-standard encryption and security measures.",
  "Your information is only used to verify eligibility and process your application.",
  "We never sell or share your personal information with unauthorized third parties.",
  "All data is stored securely and accessed only by authorized verification personnel.",
  "Your application details are protected by strict privacy policies and federal regulations.",
  "We maintain the highest standards of data security to protect your information.",
  "Personal information is used solely for program administration and eligibility verification.",
  "Your data is encrypted during transmission and storage for maximum security.",
  "We comply with all federal privacy laws and regulations regarding your information."
];

const SECURITY_MESSAGES = [
  "SSL encrypted connection protects your data",
  "Your information is secured with 256-bit encryption",
  "Bank-level security protects all transactions",
  "Advanced security measures protect your privacy",
  "All data transmissions are fully encrypted",
  "Industry-standard security protocols in use",
  "Your personal information is always protected",
  "Secure platform with continuous monitoring",
  "Protected by advanced encryption technology",
  "Maximum security for all your information"
];

export interface TrustContent {
  trustIndicators: string[];
  privacyStatement: string;
  securityMessage: string;
}

export function getTrustVariations(domain: string): TrustContent {
  return {
    trustIndicators: [
      selectVariation(domain, TRUST_INDICATORS, 'trust-1'),
      selectVariation(domain, TRUST_INDICATORS, 'trust-2'),
      selectVariation(domain, TRUST_INDICATORS, 'trust-3'),
    ],
    privacyStatement: selectVariation(domain, PRIVACY_STATEMENTS, 'privacy'),
    securityMessage: selectVariation(domain, SECURITY_MESSAGES, 'security'),
  };
}





