/**
 * Global Schema.org Variations (Shared Across All Keywords)
 * Generic structured data - NO keyword mentions
 */

import { selectVariation } from './hash-utils';

const HOWTO_STEPS = [
  ["Check your eligibility", "Complete the application", "Receive approval and device"],
  ["Verify qualification", "Submit required documents", "Get approved and activated"],
  ["Confirm eligibility status", "Fill out enrollment form", "Receive service activation"],
  ["Review requirements", "Apply online", "Start using your service"],
  ["Check if you qualify", "Complete enrollment", "Activate your device"],
  ["Verify you meet criteria", "Submit application", "Receive and activate"],
  ["Confirm qualification", "Complete online form", "Get connected"],
  ["Review eligibility", "Apply for service", "Start service"],
  ["Check requirements", "Submit enrollment", "Begin using service"],
  ["Verify eligibility", "Complete application process", "Receive activation"]
];

export interface SchemaContent {
  howToSteps: string[];
}

export function getSchemaVariations(domain: string): SchemaContent {
  return {
    howToSteps: selectVariation(domain, HOWTO_STEPS, 'schema-howto'),
  };
}





