import { Header } from "@/components/Header";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { IncorporationFeaturedTitle } from "@/components/services/incorporation/IncorporationFeaturedTitle";
import { ServiceHowItWorks, Step } from "@/components/shared/ServiceHowItWorks";
import { IncorporationJurisdiction } from "@/components/services/incorporation/IncorporationJurisdiction";
import { ServiceBenefits } from "@/components/shared/ServiceBenefits";
import { ServiceFAQ, FAQItem } from "@/components/shared/ServiceFAQ";
import { ServiceReadyToLaunch } from "@/components/shared/ServiceReadyToLaunch";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Company Incorporation Services | Incorpify",
  description:
    "Set up your company powered by AI. Company formation in the UAE, KSA, Kuwait, Qatar and more. Seamless, digital, and fast.",
};

// Steps for How It Works section
const incorporationSteps: Step[] = [
  {
    number: "01",
    title: "Select jurisdiction",
    description:
      "Tell us about your business and personal needs. Our AI recommends the best location based on costs, timelines, tax advantages, and legal structures. For you.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/our-features/bg Variant=3.png",
      overlayImage: "/img/incorporation-step-1-select-jurisdiction.png",
    },
    isActive: true,
    alignment: "right",
  },
  {
    number: "02",
    title: "Upload Documents",
    description:
      "Securely upload your ID, proof of address, and any relevant company documents. We'll guide you through exactly what's needed.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/our-features/bg Variant=5.png",
      overlayImage: "/img/incorporation-step-2-upload-document.png",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "AI Document Processing",
    description:
      "We handle your submitted documents, verify them for compliance, and coordinate with authorities to ensure smooth approvals across jurisdictions.",
    image: {
      type: "processing",
      stars: [
        {
          className: "ml-[-5279.9px] w-[17.59px] h-[16.06px] mt-[-2745.1px]",
          src: "/img/star-1.svg",
        },
        {
          className: "ml-[51.6px] w-[13.03px] h-[13.22px] mt-[2753.1px]",
          src: "/img/star-4.svg",
        },
      ],
      message: "Just a moment, we working on this for you...",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Get Approved",
    description:
      "Receive real-time updates as your company registration moves through government systems. We'll notify you the moment it's approved.",
    image: {
      type: "approved",
      confettiGif: "/img/incorporation-step-4-approved.gif",
      congratsTitle: "Congratulations!",
      congratsMessage: "You've finished onboarding with Incorpify!",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "05",
    title: "Go Live",
    description:
      "With your company officially registered, you can immediately start operating, opening bank accounts, and building your business.",
    image: {
      type: "golive",
      mainImage: "/img/our-features/bg Variant=7.png",
      overlayImage: "/img/incorporation-step-5-go-live.png",
    },
    isActive: false,
    alignment: "right",
  },
];

// Benefits with images
const incorporationBenefits = [
  {
    title: "AI-powered execution",
    description: "Incorpify uses AI not just to automate, but to execute.",
    image: "/img/incorporation-benefit-ai-powered.png",
    imageAlt: "AI-powered execution interface showing intelligent automation",
  },
  {
    title: "Zero Paperwork",
    description: "Launch and manage your company with complete clarity.",
    image: "/img/incorporation-benefit-zero-paperwork.png",
    imageAlt: "Zero paperwork digital document management interface",
  },
  {
    title: "All-in-one dashboard",
    description:
      "From setup to banking and taxes, all in one smart dashboard.",
    image: "/img/incorporation-benefit-all-in-one.png",
    imageAlt: "All-in-one dashboard showing integrated business management",
  },
];

// FAQ items
const incorporationFaqs: FAQItem[] = [
  {
    id: 1,
    question: "How fast can I incorporate my company with Incorpify?",
    answer:
      "Depending on the jurisdiction and the business type, most incorporations are completed within 48-72 hours once documents are submitted correctly.",
  },
  {
    id: 2,
    question: "What types of company structures can you support?",
    answer:
      "We support various company structures including LLC, Free Zone Company, Mainland Company, and more depending on your jurisdiction and business needs.",
  },
  {
    id: 3,
    question: "How do you ensure accuracy in the incorporation process?",
    answer:
      "Our AI-powered system combined with expert review ensures all documents are accurate and compliant with local regulations before submission.",
  },
  {
    id: 4,
    question: "Can you advise on which jurisdiction is best for my business?",
    answer:
      "Yes, our platform provides personalized jurisdiction recommendations based on your business type, target market, and specific requirements.",
  },
  {
    id: 5,
    question: "Do I need to be in the country to set up a business?",
    answer:
      "No, you can complete the entire incorporation process remotely. We handle all documentation and coordination with local authorities on your behalf.",
  },
  {
    id: 6,
    question: "What documents are required to start the process?",
    answer:
      "Typically, you'll need passport copies, proof of address, business plan outline, and initial capital details. Specific requirements vary by jurisdiction.",
  },
  {
    id: 7,
    question: "How do I track the progress of my incorporation?",
    answer:
      "You can track your incorporation status in real-time through your dashboard, which shows each step of the process and any pending actions.",
  },
  {
    id: 8,
    question:
      "Can I apply for visas, licenses, and corporate bank accounts during incorporation?",
    answer:
      "Yes, we offer integrated services for visas, trade licenses, and corporate banking setup as part of your incorporation package.",
  },
];

export default function IncorporationPage() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <ServiceHero
          title="Set up your Company powered by AI"
          description="Company formation in the UAE, KSA, Kuwait, Qatar and more. Seamless, digital, and fast."
          primaryCta={{
            text: "Get Started Now",
            href: "#get-started",
            ariaLabel: "Get started with company formation",
          }}
          heroImage={{
            src: "/img/incorporation-hero.png",
            alt: "Company formation platform interface showing incorporation services powered by AI",
            width: 3499,
            height: 2486,
          }}
          variant="incorporation"
        />
        <IncorporationFeaturedTitle />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="How You Get Incorporated"
          steps={incorporationSteps}
        />
        <IncorporationJurisdiction />
        <ServiceBenefits
          badge={{
            icon: "/img/marker-pin-06.svg",
            text: "Benefits",
          }}
          heading="Why Choose Incorpify?"
          benefits={incorporationBenefits}
          backgroundBlur={false}
        />
        <ServiceFAQ
          badge={{
            icon: "/img/message-question-square.svg",
            text: "FAQ",
          }}
          heading="Frequently Asked Questions"
          faqs={incorporationFaqs}
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
          heading="Ready to incorporate?"
          description="Start managing payroll the modern way!"
          primaryCta={{
            text: "Get started",
            ariaLabel: "Get started with incorporation",
          }}
          secondaryCta={{
            text: "Request demo",
            ariaLabel: "Request a demo",
          }}
          image={{
            src: "/img/incorporation-cta-image.png",
            alt: "Company incorporation CTA showing business setup interface",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
