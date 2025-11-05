import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { termsNavigationItems, termsSections } from "./termsData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Incorpify",
  description:
    "Guidelines for using our services safely and transparently. Read Incorpify's Terms and Conditions for platform access, services, and user obligations.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageTemplate
      title="Terms & Conditions"
      subtitle="Guidelines for using our services safely and transparently."
      navigationItems={termsNavigationItems}
      sections={termsSections}
    />
  );
}

