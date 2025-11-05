import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Incorpify",
  description:
    "Learn how Incorpify collects, uses, and protects your personal information. Our privacy policy outlines data handling practices and your rights.",
};

// Placeholder navigation and sections - content to be added later
const privacyNavigationItems = [
  { id: 1, label: "Introduction", sectionId: "introduction" },
  { id: 2, label: "Data Collection", sectionId: "data-collection" },
  { id: 3, label: "Data Usage", sectionId: "data-usage" },
  { id: 4, label: "Data Sharing", sectionId: "data-sharing" },
  { id: 5, label: "Your Rights", sectionId: "your-rights" },
  { id: 6, label: "Contact Us", sectionId: "contact" },
];

const privacySections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      {
        id: "intro-1",
        text: "Content for Privacy Policy will be added here...",
      },
    ],
  },
  {
    id: "data-collection",
    title: "2. Data Collection",
    content: [
      {
        id: "collect-1",
        text: "Content for Data Collection will be added here...",
      },
    ],
  },
  {
    id: "data-usage",
    title: "3. Data Usage",
    content: [
      {
        id: "usage-1",
        text: "Content for Data Usage will be added here...",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing",
    content: [
      {
        id: "sharing-1",
        text: "Content for Data Sharing will be added here...",
      },
    ],
  },
  {
    id: "your-rights",
    title: "5. Your Rights",
    content: [
      {
        id: "rights-1",
        text: "Content for Your Rights will be added here...",
      },
    ],
  },
  {
    id: "contact",
    title: "6. Contact Us",
    content: [
      {
        id: "contact-1",
        text: "Content for Contact information will be added here...",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      subtitle="Learn how we collect, use, and protect your personal information."
      navigationItems={privacyNavigationItems}
      sections={privacySections}
    />
  );
}

