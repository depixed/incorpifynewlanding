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
  title: "Payroll Management Services | Incorpify",
  description:
    "Automated payroll processing for UAE and GCC businesses. WPS compliance, salary calculations, and employee management made easy.",
};

const payrollSteps: Step[] = [
  {
    number: "01",
    title: "Add your team",
    description:
      "Upload employee details, salary structures, and benefit information. Our system validates everything for WPS compliance.",
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
    title: "Configure payroll",
    description:
      "Set up salary schedules, allowances, deductions, and overtime rules. Our AI ensures accuracy and compliance with UAE labor law.",
    image: {
      type: "documents",
      content: {
        step: "1 of 3 steps",
        title: "Payroll Setup",
        description:
          "Configure salary structures, allowances, and deductions. Ensure WPS compliance from day one.",
      },
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Automated processing",
    description:
      "Payroll runs automatically each month. We calculate salaries, deductions, end-of-service benefits, and generate all required reports.",
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
      message: "Processing payroll calculations...",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "WPS submission",
    description:
      "We submit your payroll to WPS (Wage Protection System) and coordinate bank transfers. All documentation is handled automatically.",
    image: {
      type: "approved",
      confettiGif:
        "/img/https-lottiefiles-com-animations-confetti-partyyy-wa6zqqu2jw.gif",
      congratsTitle: "Payroll Complete!",
      congratsMessage: "Your team's salaries have been processed.",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "05",
    title: "Employee portal",
    description:
      "Employees access payslips, leave balances, and salary history through their personal portal. Everything is transparent and accessible 24/7.",
    image: {
      type: "golive",
      mainImage: "/img/333-1.png",
      overlayImage: "/img/image-1374-1.png",
    },
    isActive: false,
    alignment: "right",
  },
];

const payrollFeatures: Feature[] = [
  {
    title: "WPS Compliance",
    description: "Automated Wage Protection System submissions and bank file generation.",
    image: "/img/frame-1686557310.png",
    imageAlt: "WPS compliance dashboard",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_182px)] w-[364px] h-[242px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Leave Management",
    description: "Track annual leave, sick leave, and time-off requests seamlessly.",
    image: "/img/frame-1686557312.png",
    imageAlt: "Leave management system",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_94px)] left-[calc(50%_-_239px)] w-[478px] h-[228px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "End of Service",
    description: "Automatic calculation of gratuity and end-of-service benefits.",
    image: "/img/frame-1686557312-1.png",
    imageAlt: "End of service calculator",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_93px)] left-[calc(50%_-_241px)] w-[483px] h-[223px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Payslip Portal",
    description: "Digital payslips accessible to employees anytime, anywhere.",
    image: "/img/frame-2095585970.png",
    imageAlt: "Employee payslip portal",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_101px)] left-[calc(50%_-_210px)] w-[420px] h-[248px]",
    mobileImageStyles: "w-full h-auto object-contain",
  },
];

const payrollBenefits = [
  {
    title: "Automated calculations",
    description: "No more manual errors - automated salary, overtime, and deduction calculations",
    image: "/img/frame-2095585971.png",
    imageAlt: "Automated payroll calculations",
  },
  {
    title: "Multi-currency support",
    description: "Pay international teams in their local currency with automatic conversions",
    image: "/img/frame-2095585971-1.png",
    imageAlt: "Multi-currency payroll",
  },
  {
    title: "Compliance guaranteed",
    description: "Stay compliant with UAE labor law and WPS regulations automatically",
    image: "/img/frame-1686557309.png",
    imageAlt: "Compliance management",
    additionalImage: {
      src: "/img/14-a-1.png",
      alt: "Compliance icon",
      className:
        "absolute top-[calc(50%-24px)] left-[calc(50%+67px)] w-[103px] h-[103px] object-cover",
    },
  },
];

const payrollFaqs: FAQItem[] = [
  {
    id: 1,
    question: "What is WPS and why is it important?",
    answer:
      "WPS (Wage Protection System) is a mandatory electronic salary transfer system in the UAE. All companies must pay salaries through WPS-registered banks. We handle all WPS submissions, SIF file generation, and bank coordination to ensure your compliance.",
  },
  {
    id: 2,
    question: "How do you calculate end-of-service benefits?",
    answer:
      "End-of-service gratuity is calculated based on UAE labor law: 21 days of basic salary per year (first 5 years) and 30 days per year thereafter. Our system automatically tracks employment duration and calculates accurate gratuity provisions.",
  },
  {
    id: 3,
    question: "Can you handle payroll for multiple entities?",
    answer:
      "Yes, we support multi-entity payroll processing. You can manage payroll for multiple companies, cost centers, or subsidiaries from a single dashboard while maintaining separate WPS submissions and reports for each entity.",
  },
  {
    id: 4,
    question: "How do employees access their payslips?",
    answer:
      "Employees receive secure login credentials to our employee portal where they can view and download all payslips, track leave balances, submit time-off requests, and access their employment documents anytime.",
  },
  {
    id: 5,
    question: "Do you integrate with our existing HR system?",
    answer:
      "Yes, we offer integrations with popular HR and accounting systems. We can import employee data, export payroll entries to your accounting software, and sync time & attendance records from your existing systems.",
  },
  {
    id: 6,
    question: "What happens if there's an error in payroll?",
    answer:
      "Our system validates all calculations before processing. If an error occurs, we correct it immediately and reprocess affected salaries. We can issue supplementary payments or adjustments in the next cycle with full audit trails.",
  },
  {
    id: 7,
    question: "Can you handle variable pay components?",
    answer:
      "Absolutely. We support all variable components including commissions, bonuses, overtime, allowances, and deductions. You can configure custom pay elements specific to your business and industry requirements.",
  },
  {
    id: 8,
    question: "How secure is our payroll data?",
    answer:
      "We use bank-grade encryption for all data. Your payroll information is stored in secure, ISO-certified data centers with regular backups. Access is restricted and monitored with comprehensive audit logs.",
  },
];

export default function PayrollPage() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <ServiceHero
          title="Payroll Processing Made Effortless"
          description="Automated payroll, WPS compliance, and employee management. Focus on your business while we handle your payroll."
          primaryCta={{
            text: "Get Started",
            href: "#get-started",
            ariaLabel: "Get started with payroll services",
          }}
          secondaryCta={{
            text: "Talk to Payroll Expert",
            href: "#talk-to-expert",
            ariaLabel: "Talk to a payroll expert",
            icon: "/img/chevron-right.svg",
          }}
          heroImage={{
            src: "/img/accounting-transaction.png",
            alt: "Payroll management dashboard showing salary processing and WPS compliance",
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
          heading="Everything You Need for Payroll"
          features={payrollFeatures}
          layout="4-cards"
        />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="Automated Payroll in 5 Steps"
          steps={payrollSteps}
        />
        <ServiceBenefits
          badge={{
            icon: "/img/stars-02.svg",
            text: "Benefits",
          }}
          heading="Why Choose Incorpify for Payroll?"
          benefits={payrollBenefits}
        />
        <ServiceFAQ
          badge={{
            icon: "/img/message-question-square.svg",
            text: "FAQ",
          }}
          heading="Frequently Asked Questions"
          faqs={payrollFaqs}
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
          heading="Ready to automate your payroll?"
          description="Start managing payroll the modern way!"
          primaryCta={{
            text: "Get started",
            ariaLabel: "Get started with payroll services",
          }}
          secondaryCta={{
            text: "Request demo",
            ariaLabel: "Request a demo",
          }}
          image={{
            src: "/img/progress-tracker-bank-account.png",
            alt: "Payroll processing progress tracker",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

