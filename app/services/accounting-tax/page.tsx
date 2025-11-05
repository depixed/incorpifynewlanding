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
  title: "Accounting & Tax Services | Incorpify",
  description:
    "Automated bookkeeping and smart tax filing. A centralized dashboard for bookkeeping, VAT, and corporate tax.",
};

// Steps for How It Works section
const accountingSteps: Step[] = [
  {
    number: "01",
    title: "Upload bank statements",
    description:
      "Easily upload your monthly statements in just a few clicks, no manual entry required.",
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
    title: "AI categorizes",
    description:
      "Our smart AI automatically classifies transactions for accurate bookkeeping.",
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
    title: "Dashboard insights",
    description:
      "Get real-time financial insights and tax-ready reports from a simple dashboard.",
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
    title: "Filing reminders",
    description:
      "Never miss a deadline with automated alerts for your tax and compliance filings.",
    image: {
      type: "approved",
      confettiGif:
        "/img/https-lottiefiles-com-animations-confetti-partyyy-wa6zqqu2jw.gif",
      congratsTitle: "Congratulations!",
      congratsMessage: "You've finished onboarding with Incorpify!",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "05",
    title: "Expert review",
    description:
      "Certified professionals double-check your reports to ensure accuracy and compliance.",
    image: {
      type: "golive",
      mainImage: "/img/333-1.png",
      overlayImage: "/img/image-1374-1.png",
    },
    isActive: false,
    alignment: "right",
  },
];

// FAQ items
const accountingFaqs: FAQItem[] = [
  {
    id: 1,
    question: "What kind of taxes apply to companies and individuals in the UAE?",
    answer:
      "Companies are typically subject to Corporate Tax (9% on profits above AED 375,000) and VAT (5%). There is no personal income tax or capital gains tax for individuals. We help clients navigate and optimize Corporate Tax compliance.",
  },
  {
    id: 2,
    question: "What kind of taxes apply to companies and individuals in KSA?",
    answer:
      "In Saudi Arabia, companies are subject to Corporate Income Tax (20% for non-GCC entities) or Zakat (2.5% for Saudi/GCC entities). VAT is applied at 15%. Our platform helps you stay compliant with both tax regimes and ensures accurate filing.",
  },
  {
    id: 3,
    question: "Do you provide full accounting services in-house?",
    answer:
      "Yes, we offer comprehensive accounting services including bookkeeping, financial statement preparation, reconciliation, and regulatory compliance. Our team of certified accountants works alongside AI-powered automation to ensure accuracy and efficiency.",
  },
  {
    id: 4,
    question: "Can you manage VAT registration and filing?",
    answer:
      "Absolutely. We handle the complete VAT process from registration with tax authorities to preparing and filing your VAT returns on time. Our system automatically tracks your VAT obligations and sends reminders before deadlines.",
  },
  {
    id: 5,
    question: "What kind of financial reporting do I receive?",
    answer:
      "You'll receive comprehensive financial reports including profit & loss statements, balance sheets, cash flow statements, and tax-ready reports. All reports are available in real-time through your dashboard and can be customized to your needs.",
  },
  {
    id: 6,
    question: "Do you also provide audit services?",
    answer:
      "Yes, we provide audit preparation and support services. Our certified professionals ensure your financial records are audit-ready and can coordinate with external auditors when required for statutory or internal audits.",
  },
  {
    id: 7,
    question: "Do you support global companies expanding into UAE or KSA?",
    answer:
      "Yes, we specialize in supporting international companies establishing operations in the UAE and KSA. We handle local tax registration, compliance setup, and ongoing accounting in accordance with both local regulations and international standards.",
  },
  {
    id: 8,
    question: "Can you assist with tax optimization and planning?",
    answer:
      "Absolutely. Our tax advisors provide strategic tax planning to help you optimize your tax position legally. We identify opportunities for tax efficiency, ensure you benefit from available exemptions, and develop strategies aligned with your business goals.",
  },
];

// Features for Our Features section
const accountingFeatures: Feature[] = [
  {
    title: "Bookkeeping Automation",
    description: "Track income and expenses without lifting a finger.",
    image: "/img/frame-1686557310.png",
    imageAlt: "Bookkeeping Automation Dashboard",
    containerWidth: "w-full lg:w-[calc(45%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_182px)] w-[364px] h-[242px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "VAT Filing",
    description: "Never miss a filing—automated and on time.",
    image: "/img/frame-1686557312.png",
    imageAlt: "VAT Filing Interface",
    containerWidth: "w-full lg:w-[calc(55%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_94px)] left-[calc(50%_-_239px)] w-[478px] h-[228px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Corporate Tax",
    description: "Smart calculations and AI-assisted compliance.",
    image: "/img/frame-1686557312-1.png",
    imageAlt: "Corporate Tax Calculator",
    containerWidth: "w-full lg:w-[calc(55%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_93px)] left-[calc(50%_-_241px)] w-[483px] h-[223px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Bank Integration",
    description: "Securely sync your bank for real-time insights.",
    image: "/img/frame-2095585970.png",
    imageAlt: "Bank Integration",
    containerWidth: "w-full lg:w-[calc(45%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_101px)] left-[calc(50%_-_210px)] w-[420px] h-[248px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Financial Insights",
    description: "See what matters—profitability, cash flow, and trends.",
    image: "/img/frame-1686557312-2.png",
    imageAlt: "Financial Insights Dashboard",
    containerWidth: "w-full lg:w-[calc(45%-12px)]",
    imageStyles:
      "relative w-full h-auto object-contain mt-[-12.74px] ml-[-34.21px] mr-[-7.89px] rotate-[-4deg]",
    mobileImageStyles: "w-full h-auto object-contain",
    specialRender: "financial-insights",
  },
  {
    title: "Audits",
    description: "Prepare with confidence, backed by data and experts.",
    image: "/img/audit-compliance-1.png",
    imageAlt: "Audit Compliance",
    containerWidth: "w-full lg:w-[calc(55%-12px)]",
    imageStyles: "relative w-[415.66px] h-[241.74px] object-cover",
    mobileImageStyles: "w-full h-auto object-contain",
    specialRender: "audits",
  },
];

export default function AccountingTaxPage() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <ServiceHero
          title="Automated Bookkeeping & Smart Tax Filing"
          description="A Centralized Dashboard for Bookkeeping, VAT, and Corporate Tax."
          primaryCta={{
            text: "Get Started",
            href: "#get-started",
            ariaLabel: "Get started with automated bookkeeping",
          }}
          secondaryCta={{
            text: "Talk to a Tax Advisor",
            href: "#talk-to-advisor",
            ariaLabel: "Talk to a tax advisor",
            icon: "/img/chevron-right.svg",
          }}
          heroImage={{
            src: "/img/accounting-transaction.png",
            alt: "Accounting transaction dashboard showing financial records and statements",
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
          heading="Your Finances, Handled the Smart Way"
          features={accountingFeatures}
          layout="6-cards"
        />
        <ServiceBenefits
          badge={{
            icon: "/img/stars-02.svg",
            text: "Benefits",
          }}
          heading="Why Choose Incorpify?"
          benefits={[
            {
              title: "Alerts for deadlines",
              description: "Get alerts before tax deadlines and compliance issues",
              image: "/img/frame-2095585971.png",
              imageAlt: "Deadline alerts dashboard",
            },
            {
              title: "Local tax advisors",
              description: "Get expert help when you need it",
              image: "/img/frame-2095585971-1.png",
              imageAlt: "Tax advisor consultation",
            },
            {
              title: "AI explanations",
              description:
                "Our AI breaks down financial reports into clear, actionable insights",
              image: "/img/frame-1686557309.png",
              imageAlt: "AI financial analysis",
              additionalImage: {
                src: "/img/14-a-1.png",
                alt: "AI icon",
                className:
                  "absolute top-[calc(50%-24px)] left-[calc(50%+67px)] w-[103px] h-[103px] object-cover",
              },
            },
          ]}
        />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="How Your Financials Runs on Autopilot"
          steps={accountingSteps}
        />
        <ServiceFAQ
          badge={{
            icon: "/img/message-question-square.svg",
            text: "FAQ",
          }}
          heading="Frequently Asked Questions"
          faqs={accountingFaqs}
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
          heading="Ready to automate your bookkeeping?"
          description="Simplify your finances today!"
          primaryCta={{
            text: "Get started",
            ariaLabel: "Get started with accounting services",
          }}
          secondaryCta={{
            text: "Request demo",
            ariaLabel: "Request a demo",
          }}
          image={{
            src: "/img/progress-tracker-bank-account.png",
            alt: "Progress tracker showing bank account setup interface with multiple zone options",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
