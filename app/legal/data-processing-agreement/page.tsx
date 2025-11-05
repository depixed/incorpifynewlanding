import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement | Incorpify",
  description:
    "Our Data Processing Agreement outlines how we handle and process your data in compliance with GDPR and other data protection regulations.",
};

// Placeholder navigation and sections - content to be added later
const dpaNavigationItems = [
  { id: 1, label: "Introduction", sectionId: "introduction" },
  { id: 2, label: "Definitions", sectionId: "definitions" },
  { id: 3, label: "Data Processing", sectionId: "data-processing" },
  { id: 4, label: "Security Measures", sectionId: "security" },
  { id: 5, label: "Sub-processors", sectionId: "sub-processors" },
  { id: 6, label: "Data Subject Rights", sectionId: "data-subject-rights" },
  { id: 7, label: "Term and Termination", sectionId: "term-termination" },
];

const dpaSections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      {
        id: "intro-1",
        text: "Content for Data Processing Agreement will be added here...",
      },
    ],
  },
  {
    id: "definitions",
    title: "2. Definitions",
    content: [
      {
        id: "def-1",
        text: "Content for Definitions will be added here...",
      },
    ],
  },
  {
    id: "data-processing",
    title: "3. Data Processing",
    content: [
      {
        id: "process-1",
        text: "Content for Data Processing will be added here...",
      },
    ],
  },
  {
    id: "security",
    title: "4. Security Measures",
    content: [
      {
        id: "security-1",
        text: "Content for Security Measures will be added here...",
      },
    ],
  },
  {
    id: "sub-processors",
    title: "5. Sub-processors",
    content: [
      {
        id: "sub-1",
        text: "Content for Sub-processors will be added here...",
      },
    ],
  },
  {
    id: "data-subject-rights",
    title: "6. Data Subject Rights",
    content: [
      {
        id: "rights-1",
        text: "Content for Data Subject Rights will be added here...",
      },
    ],
  },
  {
    id: "term-termination",
    title: "7. Term and Termination",
    content: [
      {
        id: "term-1",
        text: "Content for Term and Termination will be added here...",
      },
    ],
  },
];

export default function DataProcessingAgreementPage() {
  return (
    <LegalPageTemplate
      title="Data Processing Agreement"
      subtitle="How we handle and process your data in compliance with GDPR and data protection regulations."
      navigationItems={dpaNavigationItems}
      sections={dpaSections}
    />
  );
}

