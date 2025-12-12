/**
 * Global Form Variations (Shared Across All Keywords)
 * Generic form labels, instructions, validation - NO keyword mentions
 */

import { selectVariation } from './hash-utils';

const FIRST_NAME_LABELS = ["First Name", "Given Name", "Your First Name", "Enter First Name", "First Name (Required)", "Legal First Name"];
const LAST_NAME_LABELS = ["Last Name", "Family Name", "Surname", "Last Name (Required)", "Your Last Name"];
const EMAIL_LABELS = ["Email Address", "Your Email", "Email", "Contact Email", "Email (Required)", "Valid Email"];
const PHONE_LABELS = ["Phone Number", "Contact Number", "Mobile Number", "Phone (Required)", "Your Phone"];
const ADDRESS_LABELS = ["Street Address", "Your Address", "Mailing Address", "Address Line 1", "Current Address"];
const CITY_LABELS = ["City", "Your City", "City Name", "Enter City", "City (Required)"];
const STATE_LABELS = ["State", "Your State", "Select State", "State (Required)", "Current State"];
const ZIP_LABELS = ["ZIP Code", "Postal Code", "Your ZIP Code", "Enter ZIP", "ZIP (Required)"];
const DOB_LABELS = ["Date of Birth", "Birth Date", "DOB", "Enter Birth Date", "Date of Birth (MM/DD/YYYY)"];

const FORM_INSTRUCTIONS = [
  "Please fill out all required fields marked with an asterisk (*).",
  "Complete the form below with accurate information.",
  "All required fields must be filled out to submit.",
  "Provide accurate information to ensure proper processing.",
  "Fields marked with (*) are required.",
  "Please ensure all information is correct before submitting.",
  "Complete all mandatory fields to proceed.",
  "Fill in the required fields below to continue."
];

const SUBMIT_BUTTONS = ["Submit", "Submit Application", "Continue", "Next Step", "Proceed", "Apply Now", "Send", "Complete", "Submit Form", "Next"];

export interface FormLabels {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dob: string;
}

export interface FormContent {
  labels: FormLabels;
  instructions: string;
  submitButton: string;
}

export function getFormVariations(domain: string): FormContent {
  return {
    labels: {
      firstName: selectVariation(domain, FIRST_NAME_LABELS, 'form-firstname'),
      lastName: selectVariation(domain, LAST_NAME_LABELS, 'form-lastname'),
      email: selectVariation(domain, EMAIL_LABELS, 'form-email'),
      phone: selectVariation(domain, PHONE_LABELS, 'form-phone'),
      address: selectVariation(domain, ADDRESS_LABELS, 'form-address'),
      city: selectVariation(domain, CITY_LABELS, 'form-city'),
      state: selectVariation(domain, STATE_LABELS, 'form-state'),
      zip: selectVariation(domain, ZIP_LABELS, 'form-zip'),
      dob: selectVariation(domain, DOB_LABELS, 'form-dob'),
    },
    instructions: selectVariation(domain, FORM_INSTRUCTIONS, 'form-instructions'),
    submitButton: selectVariation(domain, SUBMIT_BUTTONS, 'form-submit'),
  };
}
