import { Header } from "@/components/Header";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceHowItWorks, Step } from "@/components/shared/ServiceHowItWorks";
import { ServiceBenefits } from "@/components/shared/ServiceBenefits";
import { ServiceFAQ, FAQItem } from "@/components/shared/ServiceFAQ";
import { ServiceReadyToLaunch } from "@/components/shared/ServiceReadyToLaunch";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Additional Business Services | Incorpify",
  description:
    "Complete business solutions beyond incorporation. PRO services, office space, virtual offices, and business support services in the UAE.",
};

const otherServicesSteps: Step[] = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your business requirements - from PRO services and office space to government approvals and licensing. We'll create a custom solution.",
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
    title: "Get a tailored proposal",
    description:
      "Receive a comprehensive proposal with service options, timelines, and transparent pricing. No hidden fees or surprises.",
    image: {
      type: "documents",
      content: {
        step: "1 of 3 steps",
        title: "Service Proposal",
        description:
          "Detailed breakdown of services, deliverables, timelines, and costs tailored to your needs.",
      },
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "We handle everything",
    description:
      "Our team coordinates with government departments, arranges approvals, and manages all documentation. You track progress in real-time.",
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
      message: "Processing your requirements...",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Service delivered",
    description:
      "Receive all completed documents, approvals, or access to services. Everything is organized and ready for your business operations.",
    image: {
      type: "approved",
      confettiGif:
        "/img/https-lottiefiles-com-animations-confetti-partyyy-wa6zqqu2jw.gif",
      congratsTitle: "All Set!",
      congratsMessage: "Your services are ready to use.",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "05",
    title: "Ongoing support",
    description:
      "Access continuous support for renewals, modifications, and additional services as your business grows and evolves.",
    image: {
      type: "golive",
      mainImage: "/img/333-1.png",
      overlayImage: "/img/image-1374-1.png",
    },
    isActive: false,
    alignment: "right",
  },
];

const otherServicesBenefits = [
  {
    title: "PRO services",
    description: "Government liaison, visa processing, and documentation services",
    image: "/img/frame-2095585971.png",
    imageAlt: "PRO services",
  },
  {
    title: "Office solutions",
    description: "Physical offices, virtual offices, and co-working space arrangements",
    image: "/img/frame-2095585971-1.png",
    imageAlt: "Office space solutions",
  },
  {
    title: "Business support",
    description: "Meeting rooms, mail handling, phone answering, and admin support",
    image: "/img/frame-1686557309.png",
    imageAlt: "Business support services",
    additionalImage: {
      src: "/img/14-a-1.png",
      alt: "Support icon",
      className:
        "absolute top-[calc(50%-24px)] left-[calc(50%+67px)] w-[103px] h-[103px] object-cover",
    },
  },
];

const otherServicesFaqs: FAQItem[] = [
  {
    id: 1,
    question: "What are PRO services?",
    answer:
      "PRO (Public Relations Officer) services handle all government-related procedures including visa processing, license renewals, Emirates ID processing, labor card applications, and document attestation. We act as your liaison with UAE government departments.",
  },
  {
    id: 2,
    question: "Do you provide virtual office services?",
    answer:
      "Yes, we offer complete virtual office solutions including business address registration, mail handling, call forwarding, and meeting room access. Perfect for businesses that don't need a physical office but require a professional UAE address.",
  },
  {
    id: 3,
    question: "Can you help with office space?",
    answer:
      "Absolutely. We have partnerships with premium office providers across Dubai, Abu Dhabi, and other emirates. We help you find and set up the right office space, co-working desk, or serviced office based on your needs and budget.",
  },
  {
    id: 4,
    question: "What is document attestation and do you handle it?",
    answer:
      "Document attestation is the official verification of documents by UAE authorities and your home country. We handle the entire process including MOFA attestation, embassy attestation, and translation services for personal and commercial documents.",
  },
  {
    id: 5,
    question: "Can you arrange meeting rooms and event spaces?",
    answer:
      "Yes, we provide access to professional meeting rooms, conference facilities, and event spaces across the UAE. Book by the hour or day with full AV equipment, catering options, and administrative support.",
  },
  {
    id: 6,
    question: "Do you offer business consulting services?",
    answer:
      "Yes, we provide business consulting for market entry strategies, business planning, feasibility studies, partner searches, and local market insights. Our consultants have deep expertise in UAE and GCC markets.",
  },
  {
    id: 7,
    question: "Can you help with government approvals and licenses?",
    answer:
      "Yes, we assist with all types of approvals including municipality approvals, health department permits, civil defense permits, environmental permits, and industry-specific licenses. We navigate the bureaucracy for you.",
  },
  {
    id: 8,
    question: "What other services do you provide?",
    answer:
      "We offer comprehensive business support including translation services, notary services, courier and logistics, IT setup, telephone systems, website development, marketing support, and more. Contact us for any business service need.",
  },
];

export default function OtherServicesPage() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <ServiceHero
          title="Complete Business Solutions"
          description="Everything else your business needs. PRO services, office space, virtual offices, and comprehensive business support."
          primaryCta={{
            text: "Get Started",
            href: "#get-started",
            ariaLabel: "Get started with business services",
          }}
          secondaryCta={{
            text: "Talk to Expert",
            href: "#talk-to-expert",
            ariaLabel: "Talk to a business services expert",
            icon: "/img/chevron-right.svg",
          }}
          heroImage={{
            src: "/img/accounting-transaction.png",
            alt: "Business services dashboard showing various support services and solutions",
            width: 604,
            height: 474,
          }}
          variant="accounting"
        />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="Seamless Business Support"
          steps={otherServicesSteps}
        />
        <ServiceBenefits
          badge={{
            icon: "/img/stars-02.svg",
            text: "Benefits",
          }}
          heading="Why Choose Incorpify?"
          benefits={otherServicesBenefits}
        />
        <ServiceFAQ
          badge={{
            icon: "/img/message-question-square.svg",
            text: "FAQ",
          }}
          heading="Frequently Asked Questions"
          faqs={otherServicesFaqs}
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
          heading="Ready to get started?"
          description="Let us handle your business needs today!"
          primaryCta={{
            text: "Get started",
            ariaLabel: "Get started with business services",
          }}
          secondaryCta={{
            text: "Request demo",
            ariaLabel: "Request a demo",
          }}
          image={{
            src: "/img/progress-tracker-bank-account.png",
            alt: "Business services progress tracker",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

