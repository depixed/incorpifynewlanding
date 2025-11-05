import { Header } from "@/components/Header";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceHowItWorks, Step } from "@/components/shared/ServiceHowItWorks";
import { ServiceBenefits } from "@/components/shared/ServiceBenefits";
import { ServiceFAQ, FAQItem } from "@/components/shared/ServiceFAQ";
import { ServiceReadyToLaunch } from "@/components/shared/ServiceReadyToLaunch";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa & Residency Services | Incorpify",
  description:
    "Streamline your visa and residency application process. Expert guidance for UAE, KSA, and GCC country visas.",
};

// Steps for How It Works section
const visaSteps: Step[] = [
  {
    number: "01",
    title: "Choose your visa type",
    description:
      "Select from various visa options including residence, investor, golden visa, and more. Our AI helps recommend the best option for your needs.",
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
    title: "Submit documents",
    description:
      "Upload your passport, photos, and required supporting documents. We guide you through exactly what's needed for your specific visa type.",
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
    title: "Application processing",
    description:
      "Our team handles your visa application, medical screenings, and biometric appointments. Track everything in real-time through your dashboard.",
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
    title: "Visa approval",
    description:
      "Receive instant notification when your visa is approved. We'll coordinate all final steps including Emirates ID application.",
    image: {
      type: "approved",
      confettiGif:
        "/img/https-lottiefiles-com-animations-confetti-partyyy-wa6zqqu2jw.gif",
      congratsTitle: "Congratulations!",
      congratsMessage: "Your visa has been approved!",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "05",
    title: "Welcome to your new home",
    description:
      "Start your new chapter with full residency. We continue to support you with renewals and any additional documentation needed.",
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
const visaFaqs: FAQItem[] = [
  {
    id: 1,
    question: "What types of visas do you help with?",
    answer:
      "We assist with all types of UAE visas including residence visas, investor visas, golden visas, employment visas, and dependent visas. We also support visa applications for other GCC countries including Saudi Arabia, Kuwait, and Qatar.",
  },
  {
    id: 2,
    question: "How long does the visa process take?",
    answer:
      "Processing times vary by visa type and country. UAE residence visas typically take 7-14 days from document submission. Golden visas can take 2-4 weeks. We provide estimated timelines for each specific visa type during your consultation.",
  },
  {
    id: 3,
    question: "What is a Golden Visa and am I eligible?",
    answer:
      "The Golden Visa is a long-term residency program (5-10 years) for investors, entrepreneurs, specialized talents, and outstanding students. Eligibility criteria include property investment (AED 2M+), business ownership, or exceptional achievements in your field.",
  },
  {
    id: 4,
    question: "Can I bring my family on my visa?",
    answer:
      "Yes, most residence and employment visas allow you to sponsor family members including spouse, children, and in some cases, parents. We help you process all family sponsorship applications together.",
  },
  {
    id: 5,
    question: "What documents are required for a UAE residence visa?",
    answer:
      "Typical requirements include: valid passport (6+ months), passport-size photos, Emirates ID application, medical fitness certificate, and proof of accommodation. Specific requirements vary by visa type and we provide a complete checklist.",
  },
  {
    id: 6,
    question: "Do you handle medical screenings and biometrics?",
    answer:
      "Yes, we coordinate all required medical screenings and biometric appointments. We schedule appointments at approved medical centers and guide you through the entire process.",
  },
  {
    id: 7,
    question: "What happens when my visa expires?",
    answer:
      "We send automated reminders before your visa expiration and handle the entire renewal process. You can track renewal deadlines in your dashboard and initiate renewals with a single click.",
  },
  {
    id: 8,
    question: "Can you help with visa cancellations and status changes?",
    answer:
      "Yes, we assist with all visa modifications including cancellations, status changes (e.g., switching from employment to investor visa), and transfers between sponsors.",
  },
];

export default function VisaResidencyPage() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <ServiceHero
          title="Streamlined Visa & Residency Solutions"
          description="Fast-track your visa application with AI-powered guidance. Expert support for UAE, KSA, and GCC residency."
          primaryCta={{
            text: "Get Started",
            href: "#get-started",
            ariaLabel: "Get started with visa application",
          }}
          secondaryCta={{
            text: "Talk to Visa Expert",
            href: "#talk-to-expert",
            ariaLabel: "Talk to a visa expert",
            icon: "/img/chevron-right.svg",
          }}
          heroImage={{
            src: "/img/accounting-transaction.png",
            alt: "Visa application dashboard showing document tracking and approval status",
            width: 604,
            height: 474,
          }}
          variant="accounting"
        />
        <ServiceBenefits
          badge={{
            icon: "/img/stars-02.svg",
            text: "Benefits",
          }}
          heading="Why Choose Incorpify for Your Visa?"
          benefits={[
            {
              title: "Expert guidance",
              description: "Local visa specialists guide you through every step",
              image: "/img/frame-2095585971-1.png",
              imageAlt: "Visa expert consultation",
            },
            {
              title: "Fast processing",
              description: "Expedited applications with priority handling",
              image: "/img/frame-2095585971.png",
              imageAlt: "Fast visa processing dashboard",
            },
            {
              title: "Real-time tracking",
              description:
                "Monitor your application status 24/7 from your dashboard",
              image: "/img/frame-1686557309.png",
              imageAlt: "Application tracking interface",
              additionalImage: {
                src: "/img/14-a-1.png",
                alt: "Tracking icon",
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
          heading="Your Path to Residency Made Simple"
          steps={visaSteps}
        />
        <ServiceFAQ
          badge={{
            icon: "/img/message-question-square.svg",
            text: "FAQ",
          }}
          heading="Frequently Asked Questions"
          faqs={visaFaqs}
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
          heading="Ready to start your visa application?"
          description="Begin your journey to residency today!"
          primaryCta={{
            text: "Get started",
            ariaLabel: "Get started with visa services",
          }}
          secondaryCta={{
            text: "Request demo",
            ariaLabel: "Request a demo",
          }}
          image={{
            src: "/img/progress-tracker-bank-account.png",
            alt: "Visa application progress tracker showing document submission status",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

