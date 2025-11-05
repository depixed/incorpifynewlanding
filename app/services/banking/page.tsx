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
  title: "Corporate Banking Services | Incorpify",
  description:
    "Open corporate bank accounts seamlessly. Multi-currency accounts, payment solutions, and banking support for UAE, KSA, and GCC businesses.",
};

// Steps for How It Works section
const bankingSteps: Step[] = [
  {
    number: "01",
    title: "Choose your bank",
    description:
      "Browse our partner banks and compare features, fees, and benefits. Our AI recommends the best banking options based on your business needs.",
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
    title: "Submit your documents",
    description:
      "Upload your trade license, Emirates ID, passport, and business documents. We ensure everything is complete before submission.",
    image: {
      type: "documents",
      content: {
        step: "1 of 3 steps",
        title: "Passport",
        description:
          "A government-issued document that serves as a form of identification and proof of citizenship. It is essential for international travel and often required for business incorporation in foreign countries, including the UAE.",
      },
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Bank review & verification",
    description:
      "Our team coordinates with the bank for KYC verification and compliance checks. We handle all communication on your behalf.",
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
    title: "Account approved",
    description:
      "Receive your account details, debit cards, and online banking credentials. Your corporate account is ready to use.",
    image: {
      type: "approved",
      confettiGif:
        "/img/https-lottiefiles-com-animations-confetti-partyyy-wa6zqqu2jw.gif",
      congratsTitle: "Congratulations!",
      congratsMessage: "Your corporate account is now active!",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "05",
    title: "Start banking",
    description:
      "Begin making payments, receiving funds, and managing your finances. Access 24/7 online banking and dedicated support.",
    image: {
      type: "golive",
      mainImage: "/img/333-1.png",
      overlayImage: "/img/image-1374-1.png",
    },
    isActive: false,
    alignment: "right",
  },
];

// Benefits
const bankingBenefits = [
  {
    title: "Multi-currency accounts",
    description: "Hold and transfer funds in multiple currencies with competitive exchange rates",
    image: "/img/frame-2095585971.png",
    imageAlt: "Multi-currency banking dashboard",
  },
  {
    title: "Fast account opening",
    description: "Get your corporate account opened in 5-7 days with our streamlined process",
    image: "/img/frame-2095585971-1.png",
    imageAlt: "Fast account opening process",
  },
  {
    title: "Dedicated support",
    description: "Access relationship managers and banking specialists whenever you need assistance",
    image: "/img/frame-1686557309.png",
    imageAlt: "Banking support team",
    additionalImage: {
      src: "/img/14-a-1.png",
      alt: "Support icon",
      className:
        "absolute top-[calc(50%-24px)] left-[calc(50%+67px)] w-[103px] h-[103px] object-cover",
    },
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

// Features for Our Features section (4-card layout example)
const bankingFeatures: Feature[] = [
  {
    title: "Multi-Currency Accounts",
    description: "Hold and transact in AED, USD, EUR, GBP, and more currencies seamlessly.",
    image: "/img/frame-1686557310.png",
    imageAlt: "Multi-currency account interface",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_182px)] w-[364px] h-[242px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Payment Gateway Integration",
    description: "Accept payments online with secure, compliant payment processing.",
    image: "/img/frame-1686557312.png",
    imageAlt: "Payment gateway dashboard",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_94px)] left-[calc(50%_-_239px)] w-[478px] h-[228px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "International Wire Transfers",
    description: "Send and receive money globally with competitive FX rates.",
    image: "/img/frame-1686557312-1.png",
    imageAlt: "Wire transfer interface",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_93px)] left-[calc(50%_-_241px)] w-[483px] h-[223px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Real-time Account Monitoring",
    description: "Track all transactions, balances, and activities from your dashboard.",
    image: "/img/frame-2095585970.png",
    imageAlt: "Account monitoring dashboard",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_101px)] left-[calc(50%_-_210px)] w-[420px] h-[248px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
];

export default function BankingPage() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <ServiceHero
          title="Corporate Banking Made Simple"
          description="Open business accounts with leading UAE and regional banks. Multi-currency solutions, payment processing, and dedicated support."
          primaryCta={{
            text: "Get Started",
            href: "#get-started",
            ariaLabel: "Get started with corporate banking",
          }}
          secondaryCta={{
            text: "Talk to Banking Expert",
            href: "#talk-to-expert",
            ariaLabel: "Talk to a banking expert",
            icon: "/img/chevron-right.svg",
          }}
          heroImage={{
            src: "/img/accounting-transaction.png",
            alt: "Corporate banking dashboard showing account overview and transaction management",
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
          heading="Banking Features Designed for Your Business"
          features={bankingFeatures}
          layout="4-cards"
        />
        <ServiceBenefits
          badge={{
            icon: "/img/stars-02.svg",
            text: "Benefits",
          }}
          heading="Why Choose Incorpify for Banking?"
          benefits={bankingBenefits}
        />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="Your Path to Corporate Banking"
          steps={bankingSteps}
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
            src: "/img/progress-tracker-bank-account.png",
            alt: "Banking application progress tracker showing document verification status",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

