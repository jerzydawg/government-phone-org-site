/**
 * Global Program Descriptions (Shared Across All Keywords)
 * Generic Lifeline, ACP, Tribal program info - NO keyword mentions
 */

import { selectVariation } from './hash-utils';

const LIFELINE_DESCRIPTIONS = [
  "The Lifeline program is a federal benefit that helps low-income households pay for phone and internet services.",
  "Lifeline provides discounts on monthly phone and internet bills for eligible low-income consumers.",
  "Through Lifeline, eligible individuals receive support for essential communication services.",
  "Lifeline is a government assistance program that makes phone and internet services affordable.",
  "The federal Lifeline program helps qualifying households stay connected with discounted services.",
  "Lifeline offers reduced-cost phone and internet access to eligible low-income households.",
  "This federal program provides monthly discounts on communication services for qualified applicants.",
  "Lifeline ensures eligible households can afford essential phone and internet connectivity.",
  "The program helps low-income consumers access vital communication services at reduced costs.",
  "Lifeline provides crucial support for phone and internet access to qualifying families."
];

const ACP_DESCRIPTIONS = [
  "The Affordable Connectivity Program (ACP) helps ensure households can afford internet access.",
  "ACP provides a discount on monthly internet service for eligible households.",
  "The Affordable Connectivity Program offers up to $30/month toward internet service.",
  "ACP is a federal benefit program that helps eligible households pay for internet connectivity.",
  "This program provides discounts on internet service and devices for qualifying families.",
  "The Affordable Connectivity Program makes broadband more affordable for eligible households.",
  "ACP helps low-income households access high-speed internet at reduced rates.",
  "Through ACP, eligible families receive monthly support for internet service costs.",
  "The program ensures affordable internet access for qualifying low-income households.",
  "ACP provides essential support for internet connectivity to eligible applicants."
];

const TRIBAL_DESCRIPTIONS = [
  "Tribal Lifeline provides enhanced support for eligible residents on tribal lands.",
  "This program offers increased benefits for qualifying individuals living on federally recognized tribal lands.",
  "Enhanced Tribal Lifeline benefits are available to eligible residents of tribal areas.",
  "The program provides additional support for qualifying households on tribal lands.",
  "Tribal residents may qualify for enhanced benefits through this federal program.",
  "Special provisions exist for eligible individuals living on federally recognized tribal lands.",
  "Enhanced assistance is available for qualifying households in designated tribal areas.",
  "The program offers increased support levels for eligible tribal land residents.",
  "Additional benefits are provided to qualifying individuals on tribal territories.",
  "Enhanced program benefits serve eligible households on federally recognized tribal lands."
];

const ELIGIBILITY_INFO = [
  "Eligibility is based on income level or participation in certain government assistance programs.",
  "You may qualify through income requirements or by participating in federal assistance programs.",
  "Qualification is determined by household income or enrollment in eligible government programs.",
  "Eligibility criteria include income thresholds or participation in qualifying assistance programs.",
  "You can qualify based on your income level or through participation in federal benefit programs.",
  "Requirements include meeting income guidelines or receiving benefits from eligible programs.",
  "Eligibility is established through income verification or proof of program participation.",
  "You may qualify if your income meets guidelines or you receive qualifying government benefits.",
  "Qualification depends on household income or enrollment in eligible federal programs.",
  "Eligibility requires meeting income standards or participating in qualifying assistance programs."
];

export interface ProgramContent {
  lifelineDescription: string;
  acpDescription: string;
  tribalDescription: string;
  eligibilityInfo: string;
}

export function getProgramVariations(domain: string): ProgramContent {
  return {
    lifelineDescription: selectVariation(domain, LIFELINE_DESCRIPTIONS, 'program-lifeline'),
    acpDescription: selectVariation(domain, ACP_DESCRIPTIONS, 'program-acp'),
    tribalDescription: selectVariation(domain, TRIBAL_DESCRIPTIONS, 'program-tribal'),
    eligibilityInfo: selectVariation(domain, ELIGIBILITY_INFO, 'program-eligibility'),
  };
}





