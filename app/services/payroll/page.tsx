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
    title: "Add Employees",
    description:
      "Easily onboard your team by adding employee details to the system in minutes.",
    image: {
      type: "simple",
      mainImage: "/img/payroll-how-it-works/add-employees.png",
      backgroundImage: "/img/bg-variants/bg-variant-3.png",
    },
    isActive: true,
    alignment: "right",
  },
  {
    number: "02",
    title: "AI Calculates Payroll",
    description:
      "Let AI handle salary, benefits, and deductions with speed and precision.",
    image: {
      type: "simple",
      mainImage: "/img/payroll-how-it-works/ai-calculates.png",
      secondOverlayImage: "/img/payroll-how-it-works/with-ai-calculates.png",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Send Payslips",
    description:
      "Distribute professional payslips directly to employees' accounts securely.",
    image: {
      type: "simple",
      mainImage: "/img/payroll-how-it-works/send-payslips.png",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "WPS File Submitted",
    description:
      "Stay compliant with WPS by automatically generating and submitting files on time.",
    image: {
      type: "simple",
      mainImage: "/img/payroll-how-it-works/wps-file.png",
    },
    isActive: false,
    alignment: "left",
  },
];

const payrollFeatures: Feature[] = [
  {
    title: "Salary Processing",
    description: "Seamlessly calculate and disburse salaries on time, every time.",
    image: "/img/payroll-features/salary-processing.png",
    imageAlt: "Salary processing dashboard",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_200px)] w-[400px] h-[240px] object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Tax & GOSI Deductions",
    description: "Handle complex deductions without spreadsheets.",
    image: "/img/payroll-features/tax-and-gosi.png",
    imageAlt: "Tax and GOSI deductions management",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_200px)] w-[400px] h-[240px] object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "WPS Compliance",
    description: "Stay fully compliant with WPS regulations.",
    image: "/img/payroll-features/wps.png",
    imageAlt: "WPS compliance dashboard",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_200px)] w-[400px] h-[240px] object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
    backgroundImage: "/img/payroll-features/wps-background.png",
  },
  {
    title: "Employee Onboarding",
    description: "Onboard new hires and auto-sync their payroll setup in minutes.",
    image: "/img/payroll-features/employee-onboarding.png",
    imageAlt: "Employee onboarding system",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_200px)] w-[400px] h-[240px] object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Leave & Bonus Management",
    description: "Manage time-off, holidays, and bonus payouts with ease.",
    image: "/img/payroll-features/leave-and-bonus.png",
    imageAlt: "Leave and bonus management",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_200px)] w-[400px] h-[240px] object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
  {
    title: "Payroll Reports",
    description: "Get instant access to payroll history and downloadable reports.",
    image: "/img/payroll-features/payroll-reports.png",
    imageAlt: "Payroll reports dashboard",
    containerWidth: "w-full lg:w-[calc(50%-12px)]",
    imageStyles:
      "absolute top-[calc(50%_-_120px)] left-[calc(50%_-_200px)] w-[400px] h-[240px] object-contain",
    mobileImageStyles: "w-full h-auto object-contain",
  },
];

const payrollBenefits = [
  {
    title: "Seamless Integrations",
    description: "Connect directly with banks, tax, and visa systems.",
    image: "/img/payroll-benefits/seamless-integrations.png",
    imageAlt: "Seamless integrations with banks and systems",
  },
  {
    title: "100% Local Compliance",
    description: "Stay aligned with WPS, GOSI, and tax rules by default.",
    image: "/img/payroll-benefits/100-local.png",
    imageAlt: "100% local compliance with regulations",
  },
  {
    title: "Fewer Errors, Less Stress",
    description: "Automation reduces mistakes and saves valuable time.",
    image: "/img/payroll-benefits/fewer-errors.png",
    imageAlt: "Fewer errors with automation",
    additionalImage: {
      src: "/img/payroll-benefits/with-fewer-errors.png",
      alt: "Error reduction icon",
      className:
        "absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 object-contain z-10",
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
          title="Automated Payroll That Works for You"
          description="Run compliant payroll in UAE & KSA, zero hassle."
          primaryCta={{
            text: "Speak to a Payroll Specialist",
            href: "#get-started",
            ariaLabel: "Speak to a payroll specialist",
          }}
          heroImage={{
            src: "/img/hero/payroll-tab-desktop.png",
            alt: "Payroll management dashboard showing salary processing and WPS compliance",
            width: 1200,
            height: 800,
          }}
          variant="payroll"
        />
        <ServiceOurFeatures
          badge={{
            icon: "/img/grid-01.svg",
            text: "Our Features",
          }}
          heading="Everything You Need for Payroll"
          features={payrollFeatures}
          layout="6-cards"
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
            src: "/img/payroll-cta/cta-image.png",
            alt: "Payroll processing progress tracker",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

