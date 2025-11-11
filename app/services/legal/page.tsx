import { Header } from "@/components/Header";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceOurFeatures, Feature } from "@/components/shared/ServiceOurFeatures";
import { ServiceHowItWorks, Step } from "@/components/shared/ServiceHowItWorks";
import { ServiceBenefits } from "@/components/shared/ServiceBenefits";
import { ServiceFAQ, FAQItem } from "@/components/shared/ServiceFAQ";
import { ServiceReadyToLaunch } from "@/components/shared/ServiceReadyToLaunch";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Services | Incorpify",
  description:
    "Expert legal support for your business. Contract drafting, IP protection, compliance, and corporate legal services in the UAE and GCC.",
};

const legalSteps: Step[] = [
  {
    number: "01",
    title: "Choose a Document Type",
    description:
      "Select from a wide range of legal documents tailored to your business needs.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variants/bg-variant-1.png",
      overlayImage: "/img/legal-how-it-works/choose document type.png",
      backgroundImage: "/img/bg-variants/bg-variant-1.png",
    },
    isActive: true,
    alignment: "right",
  },
  {
    number: "02",
    title: "Explain What you Need",
    description:
      "Describe your unique request and let our system process it.",
    image: {
      type: "simple",
      mainImage: "/img/legal-how-it-works/what you need.png",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Get a Quote",
    description:
      "Our connected legal offices review your request and quote their fee.",
    image: {
      type: "simple",
      mainImage: "/img/legal-how-it-works/Get quote.png",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Download, Sign, and Share",
    description:
      "Securely finalize your document, ready to sign, store, and share with stakeholders.",
    image: {
      type: "simple",
      mainImage: "/img/legal-how-it-works/Download,sign.png",
    },
    isActive: false,
    alignment: "left",
  },
];

const legalFeatures: Feature[] = [
  {
    title: "Contract Generator",
    description: "Create custom contracts in a few clicks",
    image: "/img/legal-features/with contract generator.png",
    imageAlt: "Contract generator interface",
    containerWidth: "w-full lg:w-[calc(33.333%-16px)]",
    imageStyles:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] h-auto object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Investor & Shareholder Docs",
    description: "Auto-generate cap tables, SHA, and board resolutions.",
    image: "/img/legal-features/investor and shareholder.png",
    imageAlt: "Investor and shareholder documents",
    containerWidth: "w-full lg:w-[calc(33.333%-16px)]",
    imageStyles:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-auto object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Dispute Handling",
    description: "Resolve business or shareholder conflicts quickly.",
    image: "/img/legal-features/dispute handling.png",
    imageAlt: "Dispute handling services",
    containerWidth: "w-full lg:w-[calc(33.333%-16px)]",
    imageStyles:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] h-auto object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Legal Review",
    description: "Have your documents checked by our legal team.",
    image: "/img/legal-features/legal review.png",
    imageAlt: "Legal review services",
    containerWidth: "w-full lg:w-[calc(33.333%-16px)]",
    imageStyles:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-auto object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Compliance Checks",
    description: "Ensure your operations meet country-specific regulatory standards.",
    image: "/img/legal-features/compliance check.png",
    imageAlt: "Compliance checks",
    containerWidth: "w-full lg:w-[calc(33.333%-16px)]",
    imageStyles:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-auto object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Trademark & IP Protection",
    description: "Register and protect your brand assets with expert guidance",
    image: "/img/legal-features/trademark.png",
    imageAlt: "Trademark and IP protection",
    containerWidth: "w-full lg:w-[calc(33.333%-16px)]",
    imageStyles:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] h-auto object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
    backgroundImage: "/img/legal-features/BG for trademark.png",
    backgroundImageOpacity: 0.6,
  },
];

const legalBenefits = [
  {
    title: "No Retainers, No Surprises",
    description: "Only pay for what you use",
    image: "/img/legal-benefits/benefit 1.png",
    imageAlt: "No retainers, no surprises",
  },
  {
    title: "Built-In Platform Integration",
    description: "Seamlessly linked with your payroll, HR, and compliance modules.",
    image: "/img/legal-benefits/benefit 2.png",
    imageAlt: "Built-in platform integration",
  },
  {
    title: "Deadline-Driven Legal Help",
    description: "Track progress, set timelines, and get real-time updates.",
    image: "/img/legal-benefits/benefit 3.png",
    imageAlt: "Deadline-driven legal help",
  },
];

const legalFaqs: FAQItem[] = [
  {
    id: 1,
    question: "Are your lawyers licensed in the UAE?",
    answer:
      "Yes, all our lawyers are licensed and registered with the UAE Ministry of Justice and local bar associations. They have extensive experience in UAE commercial law, labor law, and industry-specific regulations.",
  },
  {
    id: 2,
    question: "What types of contracts can you draft?",
    answer:
      "We draft all business contracts including employment contracts, shareholder agreements, partnership agreements, service agreements, NDAs, lease agreements, supplier contracts, and more. All contracts comply with UAE law.",
  },
  {
    id: 3,
    question: "How long does trademark registration take?",
    answer:
      "UAE trademark registration typically takes 6-12 months. We handle the entire process including preliminary searches, application filing, correspondence with the Ministry of Economy, and certificate collection.",
  },
  {
    id: 4,
    question: "Do you provide legal representation in court?",
    answer:
      "Yes, our lawyers can represent your company in UAE courts for commercial disputes, labor cases, and contractual matters. We also handle arbitration and alternative dispute resolution processes.",
  },
  {
    id: 5,
    question: "Can you review existing contracts?",
    answer:
      "Absolutely. We review contracts for legal compliance, identify risks, suggest amendments, and provide detailed explanations of obligations and liabilities. We can also help negotiate better terms.",
  },
  {
    id: 6,
    question: "What is your pricing structure?",
    answer:
      "We offer fixed-fee pricing for most services. Simple contracts start from AED 1,500, trademark registration from AED 5,000, and consultations from AED 500/hour. Complex matters are quoted after initial review.",
  },
  {
    id: 7,
    question: "Do you handle employment law matters?",
    answer:
      "Yes, we provide comprehensive employment law support including contract drafting, labor dispute resolution, termination procedures, gratuity calculations, and representation at the Ministry of Human Resources.",
  },
  {
    id: 8,
    question: "Can you help with regulatory compliance?",
    answer:
      "Yes, we help businesses comply with sector-specific regulations, obtain necessary licenses and approvals, handle regulatory audits, and ensure ongoing compliance with changing UAE laws.",
  },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <ServiceHero
          title="Expert Legal Services for Your Business"
          description="Professional legal support from licensed UAE lawyers. Contracts, IP protection, compliance, and corporate legal matters."
          primaryCta={{
            text: "Get Started",
            href: "#get-started",
            ariaLabel: "Get started with legal services",
          }}
          secondaryCta={{
            text: "Talk to Legal Expert",
            href: "#talk-to-expert",
            ariaLabel: "Talk to a legal expert",
            icon: "/img/chevron-right.svg",
          }}
          heroImage={{
            src: "/img/legal-hero-8x.png",
            alt: "Legal services dashboard showing document management and compliance tracking",
            width: 3000,
            height: 2413,
          }}
          variant="accounting"
        />
        <ServiceOurFeatures
          badge={{
            icon: "/img/grid-01.svg",
            text: "Our Features",
          }}
          heading="Comprehensive Legal Solutions"
          features={legalFeatures}
          layout="6-cards-3cols"
        />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="How Does Legal Support Work?"
          steps={legalSteps}
        />
        <ServiceBenefits
          badge={{
            icon: "/img/stars-02.svg",
            text: "Benefits",
          }}
          heading="Why Choose Incorpify for Legal Services?"
          benefits={legalBenefits}
        />
        <ServiceFAQ
          badge={{
            icon: "/img/message-question-square.svg",
            text: "FAQ",
          }}
          heading="Frequently Asked Questions"
          faqs={legalFaqs}
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
          heading="Ready for legal support?"
          description="Get expert legal advice for your business today!"
          primaryCta={{
            text: "Get started",
            ariaLabel: "Get started with legal services",
          }}
          secondaryCta={{
            text: "Request demo",
            ariaLabel: "Request a demo",
          }}
          image={{
            src: "/img/legal-cta/CTA image.png",
            alt: "Legal services call to action",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

