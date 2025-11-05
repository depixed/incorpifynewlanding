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
    title: "Describe your legal need",
    description:
      "Tell us about your legal requirement - contracts, agreements, IP registration, or compliance. Our AI matches you with the right legal expert.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/888-1.png",
      overlayImage: "/img/image-1374.png",
    },
    isActive: true,
    alignment: "right",
  },
  {
    number: "02",
    title: "Consultation & review",
    description:
      "Get expert consultation from licensed lawyers. They review your situation and provide clear recommendations and next steps.",
    image: {
      type: "documents",
      content: {
        step: "1 of 3 steps",
        title: "Legal Consultation",
        description:
          "Connect with experienced lawyers who understand your business and local regulations.",
      },
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Document preparation",
    description:
      "Our legal team drafts, reviews, or amends your documents. Everything is tailored to UAE law and your specific business needs.",
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
      message: "Preparing your legal documents...",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Review & finalize",
    description:
      "You review the documents with explanations of key terms. Request revisions if needed before finalizing.",
    image: {
      type: "approved",
      confettiGif:
        "/img/https-lottiefiles-com-animations-confetti-partyyy-wa6zqqu2jw.gif",
      congratsTitle: "Documents Ready!",
      congratsMessage: "Your legal documents are finalized.",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "05",
    title: "Ongoing support",
    description:
      "Access your legal documents anytime. Get ongoing support, updates for regulatory changes, and annual compliance reviews.",
    image: {
      type: "golive",
      mainImage: "/img/333-1.png",
      overlayImage: "/img/image-1374-1.png",
    },
    isActive: false,
    alignment: "right",
  },
];

const legalFeatures: Feature[] = [
  {
    title: "Contract Drafting",
    description: "Employment contracts, NDAs, service agreements, and commercial contracts.",
    image: "/img/frame-1686557310.png",
    imageAlt: "Contract drafting interface",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_182px)] w-[364px] h-[242px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "IP Protection",
    description: "Trademark registration, copyright protection, and brand protection services.",
    image: "/img/frame-1686557312.png",
    imageAlt: "IP protection services",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_94px)] left-[calc(50%_-_239px)] w-[478px] h-[228px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Compliance Management",
    description: "Stay compliant with UAE commercial law, labor law, and industry regulations.",
    image: "/img/frame-1686557312-1.png",
    imageAlt: "Compliance management",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_93px)] left-[calc(50%_-_241px)] w-[483px] h-[223px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Dispute Resolution",
    description: "Legal representation and support for commercial disputes and negotiations.",
    image: "/img/frame-2095585970.png",
    imageAlt: "Dispute resolution",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_101px)] left-[calc(50%_-_210px)] w-[420px] h-[248px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
];

const legalBenefits = [
  {
    title: "Licensed lawyers",
    description: "All legal work handled by UAE-licensed attorneys with local expertise",
    image: "/img/frame-2095585971-1.png",
    imageAlt: "Licensed legal professionals",
  },
  {
    title: "Fixed pricing",
    description: "Transparent, predictable legal costs with no hidden fees or surprises",
    image: "/img/frame-2095585971.png",
    imageAlt: "Fixed legal pricing",
  },
  {
    title: "Fast turnaround",
    description: "Most legal documents delivered within 2-5 business days",
    image: "/img/frame-1686557309.png",
    imageAlt: "Fast legal services",
    additionalImage: {
      src: "/img/14-a-1.png",
      alt: "Speed icon",
      className:
        "absolute top-[calc(50%-24px)] left-[calc(50%+67px)] w-[103px] h-[103px] object-cover",
    },
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
            src: "/img/accounting-transaction.png",
            alt: "Legal services dashboard showing document management and compliance tracking",
            width: 604,
            height: 474,
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
          layout="4-cards"
        />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="Legal Support Made Simple"
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
            src: "/img/progress-tracker-bank-account.png",
            alt: "Legal services progress tracker",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

