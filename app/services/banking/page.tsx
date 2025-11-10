import { Header } from "@/components/Header";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { BankPartners } from "@/components/shared/BankPartners";
import { ServiceHowItWorks, Step } from "@/components/shared/ServiceHowItWorks";
import { ServiceBenefits } from "@/components/shared/ServiceBenefits";
import { ServiceFAQ, FAQItem } from "@/components/shared/ServiceFAQ";
import { ServiceReadyToLaunch } from "@/components/shared/ServiceReadyToLaunch";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Banking Services | Incorpify",
  description:
    "Open corporate bank accounts seamlessly. Multi-currency accounts, payment solutions, and banking support for UAE, KSA, and GCC businesses.",
};

// Steps for How It Works section
const bankingSteps: Step[] = [
  {
    number: "01",
    title: "Add Banking Option",
    description:
      "Choose to link an existing bank account or open a brand-new business bank account.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variant-2.png",
      overlayImage: "/img/banking-step-1-add-banking-option.png",
    },
    isActive: true,
    alignment: "right",
  },
  {
    number: "02",
    title: "Select Application Type",
    description:
      "Pick between Standard processing or Fast Track for approval within 24 hours.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variant-5.png",
      overlayImage: "/img/banking-step-2-select-application-type.png",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Track in Real-Time",
    description:
      "Monitor your application status instantly with live updates on your dashboard.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variant-7.png",
      overlayImage: "/img/banking-step-3-track-real-time.png",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Account Ready",
    description:
      "Once approved, start managing your business banking with ease and confidence.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variant-3.png",
      overlayImage: "/img/banking-step-4-account-ready.png",
    },
    isActive: false,
    alignment: "left",
  },
];

// Benefits
const bankingBenefits = [
  {
    title: "Trusted Bank Partners",
    description: "Get access to trusted local and international banks.",
    image: "/img/banking-benefit-1.png",
    imageAlt: "Trusted bank partners",
  },
  {
    title: "Lower Rejection Risk",
    description: "Pre-checked documents mean smoother approvals.",
    image: "/img/banking-benefit-2.png",
    imageAlt: "Lower rejection risk with pre-checked documents",
  },
  {
    title: "Fully Digital Compliance",
    description: "Apply, track, and manage everything online.",
    image: "/img/banking-benefit-3.png",
    imageAlt: "Fully digital compliance and management",
  },
];

// FAQ items
const bankingFaqs: FAQItem[] = [
  {
    id: 1,
    question: "Which banks do you work with?",
    answer:
      "We partner with leading UAE and regional banks including Emirates NBD, Mashreq, ADCB, FAB, RAKBank, and several international banks. We help you choose the best fit based on your business requirements, transaction volumes, and preferred features.",
  },
  {
    id: 2,
    question: "How long does it take to open a corporate bank account?",
    answer:
      "Typical processing time is 5-7 business days once all documents are submitted. Some banks may take up to 2 weeks depending on their due diligence process. We expedite wherever possible and keep you updated throughout.",
  },
  {
    id: 3,
    question: "What documents are required for corporate account opening?",
    answer:
      "You'll need: trade license, memorandum of association, shareholder passport copies, Emirates ID, proof of business address, and business plan. Specific requirements vary by bank and we provide a detailed checklist based on your chosen bank.",
  },
  {
    id: 4,
    question: "Can I open accounts in multiple banks?",
    answer:
      "Yes, many businesses maintain accounts with multiple banks for different purposes - local transactions, international payments, or backup banking relationships. We can help you open and manage accounts across several banks simultaneously.",
  },
  {
    id: 5,
    question: "Do I need to visit the bank in person?",
    answer:
      "Most banks require at least one in-person visit for account activation and signature verification. However, we coordinate the meeting, prepare all documents, and ensure the process is quick and efficient. Some digital banks offer fully remote onboarding.",
  },
  {
    id: 6,
    question: "What types of accounts can I open?",
    answer:
      "We help you open current accounts, savings accounts, multi-currency accounts, escrow accounts, and specialized accounts like payroll accounts. We also assist with credit facilities, trade finance, and treasury solutions as your business grows.",
  },
  {
    id: 7,
    question: "Are there minimum balance requirements?",
    answer:
      "Minimum balance requirements vary by bank and account type, typically ranging from AED 25,000 to AED 100,000 for corporate accounts. Some banks waive this for the first year or based on transaction volumes. We help you find options that suit your cash flow.",
  },
  {
    id: 8,
    question: "Can you help with international banking and SWIFT transfers?",
    answer:
      "Yes, all our partner banks support international wire transfers via SWIFT. We can also help you set up multi-currency accounts, international payment gateways, and correspondent banking relationships for seamless global transactions.",
  },
];

export default function BankingPage() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <ServiceHero
          title="Open Business Bank Accounts Faster"
          description="Connect with banks, track progress, and launch fast."
          primaryCta={{
            text: "Open a Business Bank Account",
            href: "#get-started",
            ariaLabel: "Open a business bank account",
          }}
          secondaryCta={{
            text: "Explore Banking Options",
            href: "#explore-options",
            ariaLabel: "Explore banking options",
            icon: "/img/chevron-right.svg",
          }}
          heroImage={{
            src: "/img/banking-hero-8x.png",
            alt: "Corporate banking dashboard showing account overview and transaction management",
            width: 1200,
            height: 800,
          }}
          variant="banking"
        />
        <BankPartners
          badge={{
            icon: "/img/building-07.svg",
            text: "Bank Partners",
          }}
          heading="Find the Right Bank for Your Business Needs"
          partners={[
            {
              name: "Emirates NBD",
              logo: "/img/bank-emirates-nbd.png",
              alt: "Emirates NBD bank logo",
            },
            {
              name: "Mashreq",
              logo: "/img/bank-mashreq.png",
              alt: "Mashreq bank logo",
            },
            {
              name: "Wio",
              logo: "/img/bank-wio.png",
              alt: "Wio bank logo",
            },
          ]}
        />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="Your Path to Corporate Banking"
          steps={bankingSteps}
        />
        <ServiceBenefits
          badge={{
            icon: "/img/stars-02.svg",
            text: "Benefits",
          }}
          heading="Why Choose Incorpify for Banking?"
          benefits={bankingBenefits}
        />
        <ServiceFAQ
          badge={{
            icon: "/img/message-question-square.svg",
            text: "FAQ",
          }}
          heading="Frequently Asked Questions"
          faqs={bankingFaqs}
          supportCard={{
            heading: "Still have questions?",
            description:
              "Can't find the answer you're looking for? Please chat to our friendly team.",
            buttonText: "Contact support",
            buttonIcon: "/img/phone-call-01.svg",
          }}
        />
        <ServiceReadyToLaunch
          badge={{
            text: "Become a Part of Us",
          }}
          heading="Ready to open your corporate account?"
          description="Start banking with the best financial institutions today!"
          primaryCta={{
            text: "Get started",
            ariaLabel: "Get started with banking services",
          }}
          secondaryCta={{
            text: "Request demo",
            ariaLabel: "Request a demo",
          }}
          image={{
            src: "/img/banking-cta-image.png",
            alt: "Banking CTA image showing business banking services",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

