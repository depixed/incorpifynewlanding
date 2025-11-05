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
      mainImage: "/img/888-1.png",
      overlayImage: "/img/image-1374.png",
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
    title: "Go Live",
    description:
      "With your company officially registered, you can immediately start operating, opening bank accounts, and building your business.",
    image: {
      type: "golive",
      mainImage: "/img/333-1.png",
      overlayImage: "/img/image-1374-1.png",
    },
    isActive: false,
    alignment: "right",
  },
];

// Benefits with custom content
const incorporationBenefits = [
  {
    title: "AI-powered execution",
    description: "Incorpify uses AI not just to automate, but to execute.",
    content: (
      <div className="relative flex-1 self-stretch w-full grow">
        <div className="flex w-[336.14px] items-start justify-end gap-[var(--3-spacing-spacing-md)] absolute top-[37px] left-[-17px]">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-end justify-center gap-[12.88px] pt-[var(--3-spacing-spacing-xl)] pr-[var(--3-spacing-spacing-xl)] pb-[var(--3-spacing-spacing-xl)] pl-[var(--3-spacing-spacing-xl)] relative flex-[0_0_auto] rounded-[4.83px_0px_4.83px_4.83px] bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)]">
              <div className="inline-flex items-start gap-[var(--3-spacing-spacing-xl)] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start justify-center gap-[1.61px] relative flex-[0_0_auto]">
                  <p className="relative mt-[-0.40px] [font-family:'Inter',Helvetica] font-medium text-[color:var(--1-color-modes-colors-text-text-white)] text-[5.6px] tracking-[0] leading-[8.1px]">
                    Can you give me a quick summary of our financials for this
                    quarter?
                  </p>
                </div>
              </div>
            </div>
            <img
              className="relative w-[5.64px] h-[4.83px]"
              alt="Vector"
              src="/img/vector.svg"
            />
          </div>
        </div>
        <div className="flex w-[336px] items-start gap-[var(--3-spacing-spacing-xl-duplicate)] pl-0 pr-[64.41px] py-0 absolute top-[74px] left-[13px]">
          <div className="relative w-[19.32px] h-[19.32px] bg-1-color-modes-colors-foreground-fg-white rounded-[4093.87px] shadow-[0px_0.81px_1.61px_-0.81px_#1018280f,0px_1.61px_3.22px_-0.81px_#1018281a]">
            <img
              className="absolute w-full h-full top-0 left-0 object-cover"
              alt="Contrast border"
              src="/img/contrast-border.svg"
            />
            <img
              className="absolute right-px bottom-px w-1.5 h-1.5"
              alt="Verified tick"
              src="/img/verified-tick.svg"
            />
          </div>
          <div className="flex flex-col items-end justify-center gap-[var(--3-spacing-spacing-xl)] p-[var(--3-spacing-spacing-xl)] relative flex-1 grow bg-white rounded-[4.83px] border-[0.4px] border-solid border-1-color-modes-colors-border-border-secondary shadow-[0px_1.61px_2.42px_-0.81px_#10182808,0px_4.83px_6.44px_-1.61px_#10182814] mb-2">
            <div className="flex items-center gap-[4.83px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start justify-center gap-[1.61px] relative flex-1 grow">
                <div className="flex items-center gap-[var(--3-spacing-spacing-md)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-0.40px] [font-family:'Inter',Helvetica] font-medium text-gray-900 text-[6.4px] tracking-[0] leading-[9.7px] whitespace-nowrap">
                    AI Advisor
                  </div>
                  <div className="relative w-[1.61px] h-[1.61px] bg-1-color-modes-colors-foreground-fg-quaternary-500 rounded-[0.81px]" />
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-gray-500 text-[5.6px] tracking-[0] leading-[8.1px] whitespace-nowrap">
                    09.10 AM
                  </div>
                </div>
                <div className="flex items-center gap-[var(--3-spacing-spacing-xl)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col h-[38px] items-start gap-[5.64px]">
                    <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-colors-text-text-primary-900 text-[5.6px] tracking-[0] leading-[8.1px]">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#101828] text-[5.6px] tracking-[0] leading-[8.1px]">
                        Sure! For Q2 2025 (April – June):
                      </span>
                    </p>
                    <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-colors-text-text-primary-900 text-[5.6px] tracking-[0] leading-[8.1px]">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#101828] text-[5.6px] tracking-[0] leading-[8.1px]">
                        Revenue (YTD): AED 1,250,000 (+12% from last year)
                      </span>
                    </p>
                    <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-colors-text-text-primary-900 text-[5.6px] tracking-[0] leading-[8.1px]">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#101828] text-[5.6px] tracking-[0] leading-[8.1px]">
                        Expenses (YTD): AED 780,000 (+8% from last year)
                      </span>
                    </p>
                    <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-colors-text-text-primary-900 text-[5.6px] tracking-[0] leading-[8.1px]">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#101828] text-[5.6px] tracking-[0] leading-[8.1px]">
                        Pending Entries: 12 journal entries need to be posted.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[-4985px] left-[-4090px] w-[60px] h-[60px]"
          alt="Component"
          src="/img/component-4.png"
        />
        <img
          className="absolute top-[calc(50.00%_-_32px)] left-[calc(50.00%_+_53px)] w-[107px] h-[107px] object-cover"
          alt="Element a"
          src="/img/14-a-1.png"
        />
      </div>
    ),
  },
  {
    title: "Zero Paperwork",
    description: "Launch and manage your company with complete clarity.",
    content: (
      <div className="relative flex-1 self-stretch w-full grow">
        <div className="relative top-[calc(50.00%_-_82px)] left-[calc(50.00%_-_150px)] w-[300px] h-[164px] flex flex-col gap-[16.2px]">
          <div className="flex -ml-20 h-[43.77px] w-[220px] self-center relative items-center gap-[4.65px] px-[11.63px] py-[9.3px] bg-white rounded-lg overflow-hidden border border-solid border-gray-200 shadow-lg">
            <img
              className="relative w-[23.26px] h-[23.26px]"
              alt="Face id"
              src="/img/face-id.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[1.16px] relative flex-1 grow">
              <div className="relative w-fit mt-[-0.58px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                Emirates ID
              </div>
              <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-gray-600 text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                Biometric: Scheduled – 16 May
              </p>
            </div>
            <div className="relative w-[24px] h-[24px] flex items-center justify-center flex-shrink-0">
              <img
                className="absolute w-full h-full"
                alt="Background"
                src="/img/background-1.svg"
              />
              <img
                className="absolute w-[21px] h-[21px]"
                alt="Line"
                src="/img/line-1.svg"
              />
              <div className="relative [font-family:'Inter',Helvetica] font-semibold text-gray-900 text-[5.8px] text-center tracking-[0] leading-[9.3px] whitespace-nowrap z-10">
                4/5
              </div>
            </div>
          </div>
          <div className="ml-20 flex w-[220px] h-[43.77px] relative items-center gap-[4.65px] px-[11.63px] py-[9.3px] bg-white rounded-lg overflow-hidden border border-solid border-gray-200 shadow-lg">
            <img
              className="relative w-[23.26px] h-[23.26px]"
              alt="File lock"
              src="/img/file-lock-02.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[1.16px] relative flex-1 grow">
              <div className="relative w-fit mt-[-0.58px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                Trade license
              </div>
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-gray-600 text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                Trade name approval
              </div>
            </div>
            <div className="relative w-[24px] h-[24px] flex items-center justify-center flex-shrink-0">
              <img
                className="absolute w-full h-full"
                alt="Background"
                src="/img/background-1.svg"
              />
              <img
                className="absolute w-[21px] h-[21px]"
                alt="Line"
                src="/img/line.svg"
              />
              <div className="relative [font-family:'Inter',Helvetica] font-semibold text-gray-900 text-[5.8px] text-center tracking-[0] leading-[9.3px] whitespace-nowrap z-10">
                2/6
              </div>
            </div>
          </div>
          <div className="flex w-[220px] h-[43.77px] relative items-center gap-[4.65px] px-[11.63px] py-[9.3px] bg-white rounded-lg overflow-hidden border border-solid border-gray-200 shadow-lg">
            <img
              className="relative w-[23.26px] h-[23.26px]"
              alt="Certificate"
              src="/img/certificate-02.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[1.16px] relative flex-1 grow">
              <div className="relative w-fit mt-[-0.58px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                Corporate tax
              </div>
              <div className="inline-flex items-center gap-[3.49px] relative flex-[0_0_auto]">
                <div className="relative w-[9.3px] h-[9.3px]">
                  <div className="absolute w-[80.00%] h-full top-0 left-[17.50%] bg-[url(/img/page-background.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[35.94%] h-[28.75%] top-0 left-[59.04%]"
                      alt="Earmark"
                      src="/img/earmark.svg"
                    />
                  </div>
                  <div className="inline-flex items-start gap-[1.86px] px-[0.7px] py-[0.47px] absolute w-[68.75%] h-[42.25%] top-[43.88%] left-0 bg-primitives-colors-error-600 rounded-[0.47px]">
                    <div className="relative w-fit mt-[-0.23px] [font-family:'Inter',Helvetica] font-bold text-1-color-modes-colors-foreground-fg-white text-[2.3px] text-center tracking-[0] leading-[normal]">
                      PDF
                    </div>
                  </div>
                </div>
                <div className="relative w-fit mt-[-0.58px] [font-family:'Inter',Helvetica] font-medium text-gray-600 text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                  taxreturn_sept2024.pdf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "All-in-one dashboard",
    description:
      "From setup to banking and taxes, all in one smart dashboard.",
    content: (
      <div className="relative flex-1 self-stretch w-full grow">
        <div className="flex flex-col w-[169px] items-start gap-2 absolute top-[73px] left-[18px] rotate-[-4.00deg]">
          <div className="flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
            <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
              <img
                className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                alt="Stars"
                src="/img/stars-01.svg"
              />
              <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                Advanced AI
              </div>
            </div>
          </div>
          <div className="w-[169px] shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814] flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
            <div className="flex w-[151.53px] items-center gap-[var(--3-spacing-spacing-lg)] relative mr-[-0.01px]">
              <div className="absolute top-1 left-0.5 w-[11px] h-[11px] bg-1-color-modes-component-colors-utility-blue-utility-blue-50" />
              <img
                className="relative w-[16.33px] h-[16.33px] ml-[-0.51px] rotate-[4.00deg]"
                alt="Bar chart square"
                src="/img/bar-chart-square-02.svg"
              />
              <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-[11.7px] tracking-[0] leading-[17.5px]">
                Dashboard
              </div>
            </div>
          </div>
          <div className="self-stretch w-full flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
            <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
              <img
                className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                alt="File"
                src="/img/file-06.svg"
              />
              <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                Financial Reports
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[169px] items-start gap-2 absolute top-3 left-40 rotate-[-4.00deg]">
          <div className="self-stretch w-full flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
            <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
              <img
                className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                alt="Calculator"
                src="/img/calculator.svg"
              />
              <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                Accounting
              </div>
            </div>
          </div>
          <div className="self-stretch w-full flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
            <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
              <img
                className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                alt="Certificate"
                src="/img/certificate-02-1.svg"
              />
              <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                Taxes
              </div>
            </div>
          </div>
          <div className="self-stretch w-full flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
            <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
              <img
                className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                alt="Bank note"
                src="/img/bank-note-02.svg"
              />
              <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                Banking
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
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
            src: "/img/tv-316.png",
            alt: "Company formation platform interface showing free zone options including IFZA, Meydan City, and Dubai Multi Commodities Centre",
            width: 983,
            height: 645,
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
            src: "/img/progress-tracker-bank-account.png",
            alt: "Progress tracker showing bank account setup interface with multiple zone options",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
