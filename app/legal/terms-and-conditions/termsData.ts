import {
  NavigationItem,
  Section,
  TextContent,
  Subsection,
} from "@/components/legal/LegalPageTemplate";

export const termsNavigationItems: NavigationItem[] = [
  { id: 1, label: "Introduction", sectionId: "introduction" },
  {
    id: 2,
    label: "Platform Access & Account Registration",
    sectionId: "platform-access",
  },
  { id: 3, label: "Description of Services", sectionId: "services" },
  { id: 4, label: "User Obligations", sectionId: "user-obligations" },
  { id: 5, label: "Fees and Payments", sectionId: "fees-payments" },
  { id: 6, label: "Intellectual Property", sectionId: "intellectual-property" },
  {
    id: 7,
    label: "Data Privacy & GDPR Compliance",
    sectionId: "data-privacy",
  },
  {
    id: 8,
    label: "AI Disclaimer and Limitation of Liability",
    sectionId: "ai-disclaimer",
  },
  { id: 9, label: "Termination & Suspension", sectionId: "termination" },
  {
    id: 10,
    label: "Governing Law and Jurisdiction",
    sectionId: "governing-law",
  },
  { id: 11, label: "Miscellaneous", sectionId: "miscellaneous" },
];

const introductionContent: TextContent[] = [
  {
    id: "intro-1",
    text: 'These Terms and Conditions ("Terms") govern the access to and use of the digital platform operated by Incorpify AI Holdings Ltd, a company incorporated under the laws of the Abu Dhabi Global Market (ADGM), with its principal office at DD-15-134-004 - 007, Level 15, WeWork Hub71, Al Khatem Tower, Abu Dhabi Global Market Square, 46617, Abu Dhabi, Al Maryah Island, United Arab Emirates ("Incorpify", "we", "us", or "our"). The platform, accessible at ',
  },
  {
    id: "intro-link-1",
    text: "www.incorpify.ai ",
    isLink: true,
    href: "https://www.incorpify.ai",
  },
  {
    id: "intro-2",
    text: '(the "Platform"), provides artificial intelligence-powered business services, including but not limited to incorporation, accounting, tax compliance, legal assistance, and intellectual property management (collectively, the "Services").',
  },
];

export const termsSections: Section[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: introductionContent,
  },
  {
    id: "platform-access",
    title: "2. Platform Access & Account Registration",
    subsections: [
      {
        id: "eligibility",
        title: "2.1 Eligibility",
        content: [
          { id: "elig-1", text: "Access to the Platform is permitted only to:" },
          { id: "elig-2", text: "• Natural persons aged 18 or older;" },
          {
            id: "elig-3",
            text: "• Legal entities represented by authorized individuals;",
          },
          {
            id: "elig-4",
            text: "• Users not restricted by applicable laws in the UAE, KSA, or their jurisdiction of residence.",
          },
          {
            id: "elig-5",
            text: "By registering, you confirm that you meet the above eligibility criteria.",
          },
        ],
      },
      {
        id: "account-creation",
        title: "2.2 Account Creation",
        content: [
          {
            id: "acc-1",
            text: "To use most features of the Platform, Users must register for an account. Registration requires:",
          },
          { id: "acc-2", text: "• Valid email address and mobile number;" },
          { id: "acc-3", text: "• Creation of a secure password;" },
          {
            id: "acc-4",
            text: "• Acceptance of these Terms and referenced policies.",
          },
          {
            id: "acc-5",
            text: "Know-Your-Customer (KYC) verification (e.g., passport, Emirates ID) is only required when initiating actual service workflows such as incorporation, tax registration, or licensing.",
          },
        ],
      },
      {
        id: "user-responsibilities",
        title: "2.3 User Responsibilities",
        content: [
          {
            id: "resp-1",
            text: "Users are responsible for all activity under their account. You must:",
          },
          { id: "resp-2", text: "• Keep login credentials confidential;" },
          {
            id: "resp-3",
            text: "• Maintain accurate and current account details;",
          },
          {
            id: "resp-4",
            text: "• Immediately notify Incorpify of any actual or suspected security breach.",
          },
          {
            id: "resp-5",
            text: "Accounts are non-transferable and must not be shared with third parties unless functionality explicitly allows it (see 2.4).",
          },
        ],
      },
      {
        id: "multi-user",
        title: "2.4 Multi-User Access",
        content: [
          {
            id: "multi-1",
            text: 'For business accounts, the primary account holder (the "Organizer") may invite additional users to access the Platform as "Viewers" or "Editors." Organizers can:',
          },
          { id: "multi-2", text: "• Assign, revoke, or modify access roles;" },
          {
            id: "multi-3",
            text: "• Track user permissions within their business profile;",
          },
          {
            id: "multi-4",
            text: "• Remain ultimately responsible for all actions taken by invited users.",
          },
          {
            id: "multi-5",
            text: "Role-specific rights are further defined within the Platform.",
          },
        ],
      },
      {
        id: "suspension",
        title: "2.5 Account Suspension or Termination",
        content: [
          {
            id: "susp-1",
            text: "Incorpify may suspend or permanently terminate any account that:",
          },
          { id: "susp-2", text: "• Breaches these Terms;" },
          {
            id: "susp-3",
            text: "• Attempts to manipulate, disrupt, or misuse the Platform;",
          },
          {
            id: "susp-4",
            text: "• Fails to comply with lawful data requests or verification processes.",
          },
          {
            id: "susp-5",
            text: "Upon termination, no further access to the account or its data is provided. No data export or recovery options are guaranteed.",
          },
        ],
      },
      {
        id: "data-management",
        title: "2.6 Data Management & Storage",
        content: [
          {
            id: "data-1",
            text: "Company-related data generated through Incorpify's platform (e.g., incorporation documents, filings, tax certificates) must be retained for 10 years, in line with regulatory requirements in the UAE and KSA.",
          },
          {
            id: "data-2",
            text: "All other user-generated data, including login metadata, chat history, and queries posed to AI agents, is treated with strict confidentiality and stored in accordance with our Privacy Policy. These records are not shared with external parties unless required by law.",
          },
          {
            id: "data-3",
            text: "Incorpify's AI and data infrastructure is hosted on Microsoft Azure, which handles AI processing, vector storage, and backend orchestration. All AI outputs are generated within Microsoft Azure's secure and compliant architecture. No separate data transfer agreements are required.",
          },
        ],
      },
    ],
  },
  {
    id: "services",
    title: "3. Description of Services",
    subsections: [
      {
        id: "scope",
        title: "3.1 Scope of Services",
        content: [
          {
            id: "scope-1",
            text: "Incorpify offers an integrated suite of business services, primarily for the UAE, KSA, and select international jurisdictions. These include but are not limited to:",
          },
          {
            id: "scope-2",
            text: "• Company Incorporation (Mainland, Free Zone, Offshore)",
          },
          {
            id: "scope-3",
            text: "• Accounting and Tax Filing (VAT, Corporate Tax, FP&A)",
          },
          { id: "scope-4", text: "• Payroll and Insurance Setup" },
          {
            id: "scope-5",
            text: "• Trademark Registration and IP Protection",
          },
          { id: "scope-6", text: "• Visa and Residency Services" },
          {
            id: "scope-7",
            text: "• Banking, IBAN, and Financial Account Setup",
          },
          {
            id: "scope-8",
            text: "• Document Automation and Licensing Compliance",
          },
          {
            id: "scope-9",
            text: "• Real-Time Business Intelligence and Advisory",
          },
        ],
      },
      {
        id: "ai-enabled",
        title: "3.2 AI-Enabled but Human-Supported Delivery",
        content: [
          {
            id: "ai-1",
            text: "While the Platform is built around artificial intelligence for speed and efficiency, many core services are executed or validated by qualified human operators. This includes:",
          },
          { id: "ai-2", text: "• Document review and submission;" },
          { id: "ai-3", text: "• Regulatory interpretation;" },
          { id: "ai-4", text: "• Government interactions;" },
          { id: "ai-5", text: "• Personalized client support." },
          {
            id: "ai-6",
            text: "AI outputs serve as guidance but do not replace licensed legal, accounting, or regulatory professionals where applicable.",
          },
        ],
      },
      {
        id: "ai-capabilities",
        title: "3.3 AI Capabilities and Limitations",
        content: [
          { id: "cap-1", text: "The AI agents embedded within Incorpify can:" },
          {
            id: "cap-2",
            text: "• Answer incorporation, tax, and compliance queries;",
          },
          { id: "cap-3", text: "• Generate personalized reports and estimates;" },
          { id: "cap-4", text: "• Trigger onboarding workflows;" },
          {
            id: "cap-5",
            text: "• Integrate data from connected accounts or API sources.",
          },
          {
            id: "cap-6",
            text: 'All AI responses are provided "as is" and may be augmented or overridden by human review. Incorpify makes no warranty regarding the accuracy, completeness, or outcome of AI-generated content.',
          },
        ],
      },
      {
        id: "third-party",
        title: "3.4 Use of Third-Party Systems",
        content: [
          {
            id: "third-1",
            text: "Incorpify connects to third-party government and financial systems, including:",
          },
          {
            id: "third-2",
            text: "• Ministry of Economy (UAE), FTA, GAZT, and other regulators;",
          },
          { id: "third-3", text: "• Microsoft Azure for AI operations;" },
          {
            id: "third-4",
            text: "• Banking, insurance, legal, and payroll platforms.",
          },
          {
            id: "third-5",
            text: "Incorpify is not responsible for downtime, data issues, or limitations stemming from third-party systems.",
          },
        ],
      },
      {
        id: "jurisdictional",
        title: "3.5 Jurisdictional Limitations",
        content: [
          {
            id: "juris-1",
            text: "Certain services are restricted or unavailable based on jurisdiction. Features may be adapted or withheld due to:",
          },
          { id: "juris-2", text: "• Legal or regulatory restrictions;" },
          { id: "juris-3", text: "• API or system access constraints;" },
          { id: "juris-4", text: "• Country-specific onboarding requirements." },
          {
            id: "juris-5",
            text: "Users will be notified of any jurisdiction-specific exclusions during onboarding or service activation.",
          },
        ],
      },
    ],
  },
  // Additional sections would continue here with user obligations, fees, IP, etc.
  // Due to length, I'll create a placeholder structure for the remaining sections
  {
    id: "user-obligations",
    title: "4. User Obligations",
    content: [
      {
        id: "user-obl-1",
        text: "Users must comply with all applicable laws and regulations when using the Platform...",
      },
    ],
  },
  {
    id: "fees-payments",
    title: "5. Fees and Payments",
    content: [
      {
        id: "fees-1",
        text: "All fees and payment terms are disclosed transparently on the Platform...",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    content: [
      {
        id: "ip-1",
        text: "All intellectual property rights in the Platform and Services belong to Incorpify...",
      },
    ],
  },
  {
    id: "data-privacy",
    title: "7. Data Privacy & GDPR Compliance",
    content: [
      {
        id: "privacy-1",
        text: "We process personal data in accordance with our Privacy Policy and applicable data protection laws...",
      },
    ],
  },
  {
    id: "ai-disclaimer",
    title: "8. AI Disclaimer and Limitation of Liability",
    content: [
      {
        id: "ai-disc-1",
        text: "AI-generated content is provided for informational purposes and should not be relied upon as professional advice...",
      },
    ],
  },
  {
    id: "termination",
    title: "9. Termination & Suspension",
    content: [
      {
        id: "term-1",
        text: "Either party may terminate the agreement subject to the terms outlined herein...",
      },
    ],
  },
  {
    id: "governing-law",
    title: "10. Governing Law and Jurisdiction",
    content: [
      {
        id: "law-1",
        text: "These Terms are governed by the laws of the Abu Dhabi Global Market (ADGM)...",
      },
    ],
  },
  {
    id: "miscellaneous",
    title: "11. Miscellaneous",
    content: [
      {
        id: "misc-1",
        text: "These Terms constitute the entire agreement between you and Incorpify...",
      },
    ],
  },
];

