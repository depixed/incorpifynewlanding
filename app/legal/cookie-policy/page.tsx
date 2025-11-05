import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Incorpify",
  description:
    "Learn about how Incorpify uses cookies and similar tracking technologies to enhance your experience on our platform.",
};

// Placeholder navigation and sections - content to be added later
const cookieNavigationItems = [
  { id: 1, label: "What Are Cookies", sectionId: "what-are-cookies" },
  { id: 2, label: "Types of Cookies We Use", sectionId: "types-of-cookies" },
  { id: 3, label: "How We Use Cookies", sectionId: "how-we-use-cookies" },
  { id: 4, label: "Managing Cookies", sectionId: "managing-cookies" },
  { id: 5, label: "Third-Party Cookies", sectionId: "third-party-cookies" },
  { id: 6, label: "Updates to This Policy", sectionId: "updates" },
];

const cookieSections = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies",
    content: [
      {
        id: "what-1",
        text: "Content for What Are Cookies will be added here...",
      },
    ],
  },
  {
    id: "types-of-cookies",
    title: "2. Types of Cookies We Use",
    content: [
      {
        id: "types-1",
        text: "Content for Types of Cookies will be added here...",
      },
    ],
  },
  {
    id: "how-we-use-cookies",
    title: "3. How We Use Cookies",
    content: [
      {
        id: "how-1",
        text: "Content for How We Use Cookies will be added here...",
      },
    ],
  },
  {
    id: "managing-cookies",
    title: "4. Managing Cookies",
    content: [
      {
        id: "manage-1",
        text: "Content for Managing Cookies will be added here...",
      },
    ],
  },
  {
    id: "third-party-cookies",
    title: "5. Third-Party Cookies",
    content: [
      {
        id: "third-1",
        text: "Content for Third-Party Cookies will be added here...",
      },
    ],
  },
  {
    id: "updates",
    title: "6. Updates to This Policy",
    content: [
      {
        id: "updates-1",
        text: "Content for Updates will be added here...",
      },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageTemplate
      title="Cookie Policy"
      subtitle="Learn about how we use cookies and tracking technologies on our platform."
      navigationItems={cookieNavigationItems}
      sections={cookieSections}
    />
  );
}

