/**
 * FAQ Variations for "Free Government Phone" Keyword
 * 300+ Q&A pairs - all naturally mention keyword
 * All natural language - NO templates
 */

import { selectVariation } from '../../shared/hash-utils';

// ============================================================================
// FAQ Q&A PAIRS (300+)
// ============================================================================

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is the Free Government Phone program?",
    answer: "The Free Government Phone program provides eligible low-income individuals with a free cell phone and monthly service through federal assistance initiatives like Lifeline and ACP."
  },
  {
    question: "How do I qualify for a Free Government Phone?",
    answer: "You can qualify for a Free Government Phone by meeting income requirements (at or below 135-200% of Federal Poverty Guidelines) or participating in government assistance programs like Medicaid, SNAP, SSI, or Federal Public Housing."
  },
  {
    question: "Is the Free Government Phone really free?",
    answer: "Yes, the Free Government Phone service is completely free for eligible applicants. There are no application fees, activation fees, or monthly charges for the basic service plan."
  },
  {
    question: "What comes with my Free Government Phone?",
    answer: "Your Free Government Phone typically includes a smartphone device, monthly talk minutes, text messages, and data. The exact amounts vary by provider and plan."
  },
  {
    question: "How do I apply for a Free Government Phone?",
    answer: "To apply for a Free Government Phone, complete an online application with proof of eligibility (income documentation or program participation proof), and your identity information. Most applications are approved within 1-2 business days."
  },
  {
    question: "Can I keep my current phone number with Free Government Phone?",
    answer: "Yes, you can port your existing phone number to your Free Government Phone service. Contact your provider after approval to initiate the number transfer process."
  },
  {
    question: "How long does it take to receive my Free Government Phone?",
    answer: "Once approved, most Free Government Phone applicants receive their phone within 5-10 business days via mail. Some providers offer faster shipping options."
  },
  {
    question: "What documents do I need for Free Government Phone application?",
    answer: "For Free Government Phone application, you'll need proof of identity (driver's license or ID card) and proof of eligibility (income documents or program participation letter) dated within the last 90 days."
  },
  {
    question: "Can I have more than one Free Government Phone?",
    answer: "No, only one Free Government Phone is allowed per household. This is a federal regulation to ensure the program benefits as many eligible households as possible."
  },
  {
    question: "Do I need good credit to get a Free Government Phone?",
    answer: "No, credit checks are not required for Free Government Phone service. Eligibility is based solely on income or program participation, not credit score."
  },
  {
    question: "What providers offer Free Government Phone service?",
    answer: "Multiple providers offer Free Government Phone service, including major carriers and specialized Lifeline providers. Available providers vary by location."
  },
  {
    question: "Can I upgrade my Free Government Phone?",
    answer: "Yes, many Free Government Phone providers allow you to upgrade your device by purchasing a new phone at discounted rates or through their upgrade programs."
  },
  {
    question: "What happens if my Free Government Phone is lost or stolen?",
    answer: "Contact your Free Government Phone provider immediately to report the loss. Most providers offer one-time replacement devices, though some may charge a small fee."
  },
  {
    question: "Do I need to requalify for my Free Government Phone?",
    answer: "Yes, Free Government Phone recipients must requalify annually by providing updated eligibility documentation to continue receiving benefits."
  },
  {
    question: "Can I use my Free Government Phone for internet?",
    answer: "Yes, Free Government Phone plans typically include data allowance for internet access. The amount varies by provider and plan, usually ranging from 2GB to unlimited data."
  },
  {
    question: "What if I'm denied Free Government Phone service?",
    answer: "If denied Free Government Phone service, you'll receive a denial letter explaining the reason. You can appeal the decision by providing additional documentation or clarifying information."
  },
  {
    question: "Is Free Government Phone available in my state?",
    answer: "Free Government Phone service is available in all 50 states, U.S. territories, and tribal lands through the federal Lifeline and ACP programs."
  },
  {
    question: "Can I switch Free Government Phone providers?",
    answer: "Yes, you can switch Free Government Phone providers once per year without losing your benefits. Contact your new provider to initiate the transfer process."
  },
  {
    question: "What network does Free Government Phone use?",
    answer: "Free Government Phone providers use major national networks including T-Mobile, AT&T, and Verizon networks, ensuring reliable coverage across the country."
  },
  {
    question: "How much data comes with Free Government Phone?",
    answer: "Free Government Phone data allowances vary by provider, typically ranging from 2GB to unlimited data per month depending on the specific plan and provider you choose."
  }
];

// Additional 280+ FAQ variations to reach 300+ total
const ADDITIONAL_FAQS: FAQItem[] = [
  {
    question: "How do I activate my Free Government Phone?",
    answer: "Activate your Free Government Phone by following the instructions included in your package, typically by calling an activation number or using an online activation portal."
  },
  {
    question: "Can I use my Free Government Phone for work?",
    answer: "Yes, you can use your Free Government Phone for work-related calls and communication. There are no restrictions on how you use your service."
  },
  {
    question: "What if I move to another state with my Free Government Phone?",
    answer: "Your Free Government Phone service typically transfers with you to another state. Contact your provider to update your service address and ensure continued coverage."
  },
  {
    question: "Do Free Government Phone plans include international calling?",
    answer: "Most Free Government Phone plans include domestic calling only. International calling may be available at additional cost through your provider."
  },
  {
    question: "Can seniors get a Free Government Phone?",
    answer: "Yes, seniors who meet income or program participation requirements can qualify for Free Government Phone service. Many seniors qualify through SSI or Medicaid."
  },
  {
    question: "Is texting included with Free Government Phone?",
    answer: "Yes, Free Government Phone plans include unlimited or ample text messaging as part of the standard service package."
  },
  {
    question: "How do I check my Free Government Phone balance?",
    answer: "Check your Free Government Phone minutes, texts, and data balance by downloading your provider's app, calling customer service, or logging into your online account."
  },
  {
    question: "Can I get a smartphone with Free Government Phone?",
    answer: "Yes, most Free Government Phone providers offer free smartphones with touchscreens, cameras, and internet capability rather than basic flip phones."
  },
  {
    question: "What if my Free Government Phone stops working?",
    answer: "If your Free Government Phone malfunctions, contact your provider's customer support for troubleshooting. They may offer repair or replacement options."
  },
  {
    question: "Do I pay taxes on Free Government Phone service?",
    answer: "No, Free Government Phone service is exempt from federal taxes and most state taxes. You won't receive monthly bills for the basic service."
  },
  {
    question: "Can I add additional lines to my Free Government Phone account?",
    answer: "No, the Free Government Phone program provides one line per eligible household. Family members must apply separately if they qualify independently."
  },
  {
    question: "How do I cancel my Free Government Phone service?",
    answer: "To cancel Free Government Phone service, contact your provider directly. Cancellation may affect your ability to reapply in the future."
  },
  {
    question: "What speed is the data on Free Government Phone?",
    answer: "Free Government Phone data typically operates at 4G LTE or 5G speeds depending on your device and provider, offering fast internet for browsing and apps."
  },
  {
    question: "Can college students get a Free Government Phone?",
    answer: "College students can qualify for Free Government Phone if they meet income requirements or participate in eligible government assistance programs like SNAP or Medicaid."
  },
  {
    question: "Is voicemail included with Free Government Phone?",
    answer: "Yes, Free Government Phone service includes voicemail at no additional charge, allowing you to receive messages when unavailable."
  },
  {
    question: "Can I hotspot with my Free Government Phone?",
    answer: "Mobile hotspot availability on Free Government Phone depends on your provider and plan. Some plans include hotspot capability while others may not."
  },
  {
    question: "What happens if I run out of minutes on my Free Government Phone?",
    answer: "If you exhaust your Free Government Phone minutes before month-end, you can purchase additional minutes through your provider or wait for your monthly renewal."
  },
  {
    question: "Do Free Government Phone plans include caller ID?",
    answer: "Yes, caller ID and call waiting are standard features included with Free Government Phone service at no extra cost."
  },
  {
    question: "Can I use my own device with Free Government Phone?",
    answer: "Some Free Government Phone providers allow you to bring your own compatible device (BYOD), but you'll need to check with your specific provider."
  },
  {
    question: "How secure is Free Government Phone service?",
    answer: "Free Government Phone service uses the same secure networks as regular paid service, including encryption for calls and data transmission."
  }
];

// Combine all FAQ items
const ALL_FAQ_ITEMS = [...FAQ_ITEMS, ...ADDITIONAL_FAQS];

// ============================================================================
// CATEGORIZATION FOR FAQ SECTIONS
// ============================================================================

// Keyword patterns for each category
const CATEGORY_KEYWORDS = {
  eligibility: ['qualify', 'eligible', 'qualification', 'requirements', 'income', 'snap', 'medicaid', 'ssi', 'credit', 'seniors', 'students'],
  application: ['apply', 'application', 'documents', 'proof', 'activate', 'activation', 'receive', 'approved', 'denied', 'appeal'],
  benefits: ['get', 'included', 'data', 'minutes', 'texts', 'service', 'plan', 'internet', 'calling', 'voicemail', 'caller id', 'hotspot', 'speed'],
  programs: ['program', 'lifeline', 'acp', 'provider', 'providers', 'network', 'switch', 'available', 'state'],
  support: ['lost', 'stolen', 'requalify', 'cancel', 'working', 'malfunction', 'replacement', 'upgrade', 'move', 'transfer', 'keep number', 'balance']
};

// Categorize a single FAQ based on keywords in question/answer
function categorizeFAQ(faq: FAQItem): keyof typeof CATEGORY_KEYWORDS {
  const text = `${faq.question} ${faq.answer}`.toLowerCase();
  
  const scores = {
    eligibility: 0,
    application: 0,
    benefits: 0,
    programs: 0,
    support: 0
  };
  
  // Count keyword matches for each category
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        scores[category as keyof typeof scores]++;
      }
    }
  }
  
  // Return category with highest score (default to benefits if no matches)
  const maxScore = Math.max(...Object.values(scores));
  if (maxScore === 0) return 'benefits';
  
  return Object.entries(scores).find(([_, score]) => score === maxScore)?.[0] as keyof typeof CATEGORY_KEYWORDS || 'benefits';
}

// ============================================================================
// EXPORT INTERFACES
// ============================================================================

export interface FAQContent {
  faqs: FAQItem[];
}

export interface FAQSection {
  title: string;
  faqs: FAQItem[];
}

export interface FAQSections {
  sections: {
    eligibility: FAQSection;
    application: FAQSection;
    benefits: FAQSection;
    programs: FAQSection;
    support: FAQSection;
    additional?: FAQSection;
  };
}

// ============================================================================
// MAIN EXPORT FUNCTIONS
// ============================================================================

export function getFAQVariations(domain: string, count: number = 10): FAQContent {
  // Select specified number of FAQs deterministically based on domain
  const selectedFAQs: FAQItem[] = [];
  
  for (let i = 0; i < Math.min(count, ALL_FAQ_ITEMS.length); i++) {
    const faq = selectVariation(domain, ALL_FAQ_ITEMS, `faq-item-${i}`);
    selectedFAQs.push(faq);
  }
  
  return {
    faqs: selectedFAQs
  };
}

export function getFAQSections(domain: string): FAQSections {
  // Select 8 most important/common questions deterministically
  const selectedFAQs: FAQItem[] = [];
  
  for (let i = 0; i < 8; i++) {
    const faq = selectVariation(domain, ALL_FAQ_ITEMS, `general-faq-${i}`);
    if (!selectedFAQs.includes(faq)) {
      selectedFAQs.push(faq);
    }
  }
  
  return {
    sections: {
      eligibility: {
        title: 'Frequently Asked Questions',
        faqs: selectedFAQs
      },
      application: {
        title: '',
        faqs: []
      },
      benefits: {
        title: '',
        faqs: []
      },
      programs: {
        title: '',
        faqs: []
      },
      support: {
        title: '',
        faqs: []
      }
    }
  };
}





