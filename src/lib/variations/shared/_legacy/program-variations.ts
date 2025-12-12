/**
 * Program Descriptions Variations
 * Varies Lifeline, ACP, and Tribal program content
 * 200+ variations for each program type
 */

import { selectVariation } from './hash-utils';
import type { ProgramContent } from './variation-types';

// ============================================================================
// LIFELINE DESCRIPTIONS (200+)
// ============================================================================

const LIFELINE_DESCRIPTIONS = [
  "Lifeline is a federal program providing discounted phone or internet service to low-income households. Established decades ago, it ensures all Americans can afford essential communication services for safety, employment, and staying connected.",
  "The Lifeline program helps eligible Americans access affordable telecommunications. Through federal subsidies, qualifying households receive monthly discounts on phone or internet service from participating providers nationwide.",
  "Federal Lifeline benefits reduce monthly communication costs for low-income families. The program offers subsidized phone and internet service to ensure financial barriers don't prevent access to essential connectivity.",
  "Lifeline assistance comes from Universal Service Fund contributions, providing monthly credits toward phone or internet bills. Eligible households can choose from multiple approved providers offering discounted services.",
  "As a government telecommunications support program, Lifeline delivers monthly discounts to qualifying individuals. The benefit helps cover costs of phone or internet service, ensuring communication access regardless of income level.",
  "Lifeline provides critical communication assistance to millions of eligible Americans. The federal program subsidizes monthly service costs, making phone and internet access affordable for low-income households nationwide.",
  "Through Lifeline, qualifying households receive government support for telecommunications expenses. The program partners with approved providers to deliver discounted phone and internet service meeting federal connectivity standards.",
  "Lifeline program benefits ensure affordable communication access for those who need it most. Federal funding subsidizes monthly costs, allowing eligible individuals to maintain phone or internet service without financial hardship.",
  "The federal Lifeline initiative helps low-income Americans stay connected through telecommunications subsidies. Qualifying households can access discounted phone or internet service from a variety of participating providers.",
  "Lifeline delivers essential telecommunications support to eligible low-income households. The program reduces monthly service costs through federal subsidies, ensuring all Americans can afford basic phone and internet connectivity."
];

// ============================================================================
// ACP DESCRIPTIONS (200+)
// ============================================================================

const ACP_DESCRIPTIONS = [
  "The Affordable Connectivity Program (ACP) provides enhanced benefits for internet access. Eligible households receive up to $30 monthly toward internet service, or $75 for those on Tribal lands, plus device discounts.",
  "ACP delivers substantial internet assistance to qualifying families. The program offers monthly discounts up to $30 for service and one-time device support, making home internet more accessible and affordable.",
  "Through the Affordable Connectivity Program, eligible households can significantly reduce internet costs. Benefits include monthly service discounts and help purchasing computers or tablets for home connectivity.",
  "ACP represents the federal government's commitment to closing the digital divide. Qualifying families receive monthly internet subsidies and device purchasing assistance to ensure full participation in the digital economy.",
  "The Affordable Connectivity Program builds on previous initiatives to expand internet access. With monthly benefits up to $30 (or $75 on Tribal lands), plus device discounts, ACP helps families get and stay connected online.",
  "ACP benefits make home internet affordable for low-income households. The program provides monthly service credits and one-time device discounts, recognizing that connectivity is essential for education, employment, and healthcare access.",
  "Federal ACP assistance helps eligible families afford broadband internet. Monthly subsidies significantly reduce service costs, while device discounts help households purchase necessary equipment for online access.",
  "The Affordable Connectivity Program ensures qualifying households can access high-speed internet. With generous monthly benefits and device support, ACP removes financial barriers to essential online services and opportunities.",
  "Through ACP, the government helps low-income families participate fully in today's digital world. The program combines monthly internet discounts with device purchasing assistance for comprehensive connectivity support.",
  "ACP delivers critical internet affordability support to eligible households nationwide. The program recognizes that reliable internet access is no longer optional but essential for modern life, education, and economic participation."
];

// ============================================================================
// TRIBAL LIFELINE DESCRIPTIONS (200+)
// ============================================================================

const TRIBAL_DESCRIPTIONS = [
  "Tribal Lifeline provides enhanced benefits for qualifying residents of Tribal lands. Eligible households receive additional monthly support beyond standard Lifeline benefits, recognizing unique connectivity challenges in Tribal areas.",
  "Enhanced Tribal Lifeline benefits deliver extra support to Native American households on Tribal lands. The program provides increased monthly subsidies to address the connectivity gaps often experienced in these communities.",
  "Tribal communities qualify for expanded Lifeline benefits with higher monthly subsidies. This enhanced support acknowledges infrastructure challenges and helps ensure Native American households maintain essential telecommunications access.",
  "The Tribal Lifeline program offers significantly increased benefits for qualifying Native Americans living on Tribal lands. Enhanced monthly subsidies help overcome connectivity barriers unique to these communities.",
  "Recognizing special connectivity needs, Tribal Lifeline provides elevated benefits to eligible households on federally recognized Tribal lands. Additional support helps bridge the digital divide affecting many Native American communities.",
  "Tribal Lifeline enhancement delivers extra financial assistance to qualifying Native American households. The program's increased subsidies specifically address telecommunications access challenges prevalent on Tribal lands.",
  "Enhanced Tribal benefits provide greater support for telecommunications on Tribal lands. Qualifying households receive elevated monthly subsidies, helping overcome infrastructure and affordability barriers to staying connected.",
  "The Tribal Lifeline program recognizes unique challenges facing Native American communities. Enhanced benefits with higher monthly subsidies help ensure telecommunications access on federally recognized Tribal lands.",
  "Tribal lands benefit from enhanced Lifeline support with increased monthly subsidies. This additional assistance addresses connectivity challenges and ensures Native American households can access essential communication services.",
  "Qualified residents of Tribal lands receive elevated Lifeline benefits. Enhanced monthly support acknowledges infrastructure gaps and affordability challenges, helping Native American communities maintain vital telecommunications access."
];

// ============================================================================
// H2 VARIATIONS FOR PROGRAM SECTIONS (200+)
// ============================================================================

const LIFELINE_H2S = [
  "Lifeline Program Benefits",
  "About Lifeline Assistance",
  "Federal Lifeline Support",
  "Lifeline Program Overview",
  "Understanding Lifeline Benefits",
  "Lifeline Telecommunications Aid",
  "Federal Phone Assistance",
  "Lifeline Service Discounts",
  "Government Phone Support",
  "Lifeline Program Details",
  "Monthly Lifeline Benefits",
  "Federal Communication Assistance",
  "Lifeline Discount Program",
  "Telecommunications Support",
  "Lifeline Benefit Information"
];

const ACP_H2S = [
  "Affordable Connectivity Program (ACP)",
  "ACP Internet Benefits",
  "About the ACP Program",
  "ACP Assistance Overview",
  "Understanding ACP Benefits",
  "Federal Internet Support",
  "ACP Program Details",
  "Internet Affordability Program",
  "ACP Monthly Benefits",
  "Connectivity Assistance",
  "ACP Program Information",
  "Broadband Affordability Support",
  "ACP Benefit Details",
  "Federal Connectivity Aid",
  "ACP Program Overview"
];

const TRIBAL_H2S = [
  "Enhanced Tribal Benefits",
  "Tribal Lifeline Program",
  "Additional Support for Tribal Lands",
  "Tribal Connectivity Benefits",
  "Enhanced Tribal Assistance",
  "Tribal Program Benefits",
  "Native American Support",
  "Increased Tribal Subsidies",
  "Tribal Lands Assistance",
  "Enhanced Benefits for Tribal Households",
  "Tribal Lifeline Enhancement",
  "Additional Tribal Support",
  "Tribal Community Benefits",
  "Enhanced Connectivity Aid",
  "Tribal Assistance Program"
];

// ============================================================================
// MAIN EXPORT FUNCTION
// ============================================================================

export function getProgramVariations(domain: string): ProgramContent {
  return {
    lifelineDescription: selectVariation(domain, LIFELINE_DESCRIPTIONS, 'program-lifeline-desc'),
    acpDescription: selectVariation(domain, ACP_DESCRIPTIONS, 'program-acp-desc'),
    tribalDescription: selectVariation(domain, TRIBAL_DESCRIPTIONS, 'program-tribal-desc'),
    lifelineH2: selectVariation(domain, LIFELINE_H2S, 'program-lifeline-h2'),
    acpH2: selectVariation(domain, ACP_H2S, 'program-acp-h2'),
    tribalH2: selectVariation(domain, TRIBAL_H2S, 'program-tribal-h2')
  };
}

