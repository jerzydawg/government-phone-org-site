/**
 * Legal Footer Disclaimer Variations
 * Generates unique disclaimers for each site to avoid duplicate content
 */

export interface LegalFooter {
  disclaimer: string
  fontSize: string
  className: string
}

/**
 * Generate a unique disclaimer variation based on domain
 */
export function getDisclaimerVariation(domain: string): LegalFooter {
  // Remove www and https
  const cleanDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '')
  
  // Hash domain to get consistent variation index
  const hash = hashCode(cleanDomain)
  const variationIndex = Math.abs(hash) % DISCLAIMER_TEMPLATES.length
  
  const template = DISCLAIMER_TEMPLATES[variationIndex]
  const disclaimer = template.replace(/{DOMAIN}/g, cleanDomain)
  
  return {
    disclaimer,
    fontSize: 'text-xs', // Recommended: 10-12px
    className: 'text-zinc-400 leading-relaxed'
  }
}

/**
 * Simple hash function for consistent variation selection
 */
function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash
}

/**
 * 50+ Disclaimer Variations
 * Mix of formal, conversational, and detailed styles
 */
const DISCLAIMER_TEMPLATES = [
  // Standard formal variations (1-10)
  '{DOMAIN} is a non-government website and is not associated with or endorsed by the U.S. Government or any other government agency.',
  
  '{DOMAIN} is an independent, non-governmental website that is not affiliated with, endorsed by, or connected to the U.S. Government or any federal, state, or local government agency.',
  
  'Please note that {DOMAIN} is a privately operated website and is not associated with, endorsed by, or sponsored by the United States Government or any government entity.',
  
  '{DOMAIN} operates as an independent information resource and is not affiliated with, endorsed by, or connected to any U.S. Government agency or department.',
  
  'Important: {DOMAIN} is a private, non-governmental website. We are not endorsed by, affiliated with, or connected to the U.S. Government or any federal or state agency.',
  
  '{DOMAIN} is an independently operated website and does not represent, is not endorsed by, and is not affiliated with the U.S. Government or any governmental organization.',
  
  'Disclaimer: {DOMAIN} is a non-government information website. We are not associated with, endorsed by, or sponsored by any U.S. Government agency or entity.',
  
  '{DOMAIN} is a privately-owned website providing information services. We are not affiliated with, endorsed by, or connected to any government agency or the U.S. Government.',
  
  'This website, {DOMAIN}, is an independent platform and is not associated with, endorsed by, or sponsored by the United States Government or any federal, state, or local government body.',
  
  '{DOMAIN} operates independently and is not affiliated with, endorsed by, or approved by the U.S. Government or any other governmental authority.',

  // Detailed variations (11-20)
  '{DOMAIN} is a private, independently-operated website that provides information and resources. We are not affiliated with, endorsed by, or connected to the U.S. Government, federal agencies, or state government entities.',
  
  'Legal Notice: {DOMAIN} is a non-governmental website. We are not endorsed by, affiliated with, or representing the United States Government or any government department, agency, or program.',
  
  '{DOMAIN} is an independent information service. This website is not associated with, endorsed by, sponsored by, or approved by the U.S. Government or any federal, state, county, or municipal government agency.',
  
  'Please be aware that {DOMAIN} is a privately operated website and is not affiliated with, endorsed by, or connected to any government agency, including federal, state, or local government entities.',
  
  '{DOMAIN} is a non-government website providing informational resources. We are not associated with, endorsed by, or sponsored by the U.S. Government or any governmental organization at any level.',
  
  'Notice: {DOMAIN} is an independent, private website. We are not affiliated with, endorsed by, or approved by the United States Government or any government agency, department, or program.',
  
  '{DOMAIN} operates as a private information resource and is not associated with, endorsed by, or connected to the U.S. Government, federal agencies, state governments, or local government entities.',
  
  'Important Disclaimer: {DOMAIN} is a non-governmental website. We are not endorsed by, affiliated with, or representing any U.S. Government agency, department, or governmental authority.',
  
  '{DOMAIN} is an independently-operated website providing information services. We are not affiliated with, sponsored by, or endorsed by the United States Government or any government entity.',
  
  '{DOMAIN} is a private website and is not associated with, endorsed by, connected to, or approved by the U.S. Government or any federal, state, or local government agency or department.',

  // Conversational variations (21-30)
  'Just so you know: {DOMAIN} is a non-government website. We are not affiliated with, endorsed by, or connected to the U.S. Government or any government agency.',
  
  '{DOMAIN} is a privately-run website. We want to make it clear that we are not associated with, endorsed by, or connected to the United States Government or any government entity.',
  
  'To be clear: {DOMAIN} is an independent website and is not affiliated with, endorsed by, or sponsored by the U.S. Government or any federal, state, or local government agency.',
  
  '{DOMAIN} is a non-governmental information resource. We are not endorsed by, affiliated with, or representing the U.S. Government or any government organization.',
  
  'Please understand that {DOMAIN} is a private website. We are not associated with, endorsed by, or connected to any government agency or the United States Government.',
  
  '{DOMAIN} operates independently as a private website. We are not affiliated with, endorsed by, or approved by the U.S. Government or any governmental authority.',
  
  'For your information: {DOMAIN} is a non-government website. We are not endorsed by, affiliated with, or sponsored by the United States Government or any government agency.',
  
  '{DOMAIN} is an independent, privately-operated website. We are not associated with, endorsed by, or connected to the U.S. Government or any government entity.',
  
  'It\'s important to note that {DOMAIN} is a non-governmental website. We are not affiliated with, endorsed by, or representing any U.S. Government agency or department.',
  
  '{DOMAIN} is a private information website. We want you to know that we are not associated with, endorsed by, or connected to the United States Government or any government organization.',

  // Extended formal variations (31-40)
  '{DOMAIN} is a non-government website operated by a private entity. This site is not associated with, endorsed by, sponsored by, or approved by the U.S. Government or any government agency.',
  
  'Legal Disclaimer: {DOMAIN} is an independent, privately-owned website. We are not affiliated with, endorsed by, or connected to the United States Government, its agencies, or any other governmental entity.',
  
  '{DOMAIN} provides information as an independent service. This website is not associated with, endorsed by, or representing the U.S. Government or any federal, state, or local government body.',
  
  '{DOMAIN} is a non-governmental information platform. We are not affiliated with, endorsed by, sponsored by, or approved by the United States Government or any government agency or program.',
  
  'Please note: {DOMAIN} is a privately-operated website. We are not associated with, endorsed by, connected to, or approved by the U.S. Government or any governmental authority at any level.',
  
  '{DOMAIN} is an independent website providing information services. We are not affiliated with, endorsed by, or sponsored by the United States Government or any federal, state, county, or municipal agency.',
  
  '{DOMAIN} operates as a private, non-governmental website. We are not associated with, endorsed by, or connected to the U.S. Government or any government department, agency, or entity.',
  
  'Disclaimer Notice: {DOMAIN} is a non-government website. We are not affiliated with, endorsed by, approved by, or representing the United States Government or any governmental organization.',
  
  '{DOMAIN} is an independently-run website. This site is not associated with, endorsed by, sponsored by, or connected to the U.S. Government or any federal, state, or local government agency.',
  
  '{DOMAIN} is a private information resource. We are not affiliated with, endorsed by, or approved by the United States Government or any government entity, agency, or program.',

  // Shorter variations (41-50)
  '{DOMAIN} is not affiliated with the U.S. Government or any government agency. This is a privately-operated, non-governmental website.',
  
  'This is a non-government website. {DOMAIN} is not endorsed by or affiliated with the U.S. Government or any government entity.',
  
  '{DOMAIN} is a private website. We are not associated with or endorsed by the United States Government or any government agency.',
  
  'Non-government website: {DOMAIN} is not affiliated with, endorsed by, or connected to any U.S. Government agency or entity.',
  
  '{DOMAIN} is independently operated. This website is not associated with or endorsed by the U.S. Government or any government organization.',
  
  'Private website notice: {DOMAIN} is not affiliated with, endorsed by, or sponsored by the United States Government or any government agency.',
  
  '{DOMAIN} is a non-governmental website. We are not associated with, endorsed by, or approved by the U.S. Government or any government entity.',
  
  'This website is privately owned. {DOMAIN} is not affiliated with or endorsed by the United States Government or any government agency.',
  
  '{DOMAIN} is an independent website. We are not associated with, endorsed by, or connected to any U.S. Government agency or department.',
  
  'Non-government disclaimer: {DOMAIN} is not affiliated with, endorsed by, or sponsored by the U.S. Government or any governmental authority.'
]

export default DISCLAIMER_TEMPLATES



