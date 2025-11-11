import { Header } from "@/components/Header";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { OtherServicesList } from "@/components/shared/OtherServicesList";
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
    title: "Select service",
    description:
      "Choose the compliance service that fits your business requirements.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variants/bg-variant-3.png",
      overlayImage: "/img/other-services-how-it-works/select-services.png",
      backgroundImage: "/img/bg-variants/bg-variant-3.png",
    },
    isActive: true,
    alignment: "right",
  },
  {
    number: "02",
    title: "Follow the workflow",
    description:
      "Easily navigate step-by-step processes designed for simplicity and clarity.",
    image: {
      type: "simple",
      mainImage: "/img/other-services-how-it-works/follow-workflow.png",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Get AI/Expert support",
    description:
      "Leverage AI-powered tools and professional expertise to stay on track.",
    image: {
      type: "simple",
      mainImage: "/img/other-services-how-it-works/get-ai-expert-support.png",
      secondOverlayImage: "/img/other-services-how-it-works/with-ai-expert-support.png",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Monitor using the tracker",
    description:
      "Keep real-time visibility on progress with automated status updates.",
    image: {
      type: "simple",
      mainImage: "/img/other-services-how-it-works/monitor-tracker.png",
    },
    isActive: false,
    alignment: "left",
  },
];

const otherServicesBenefits = [
  {
    title: "All-in-one dashboard",
    description: "All the services you don't know you need yet, in one place.",
    image: "/img/other-services-benefits/all-in-one-dashboard.png",
    imageAlt: "All-in-one dashboard showing various services",
  },
  {
    title: "Smart Reminders",
    description: "Never miss a deadline or renewal.",
    image: "/img/other-services-benefits/smart-reminder.png",
    imageAlt: "Smart reminders notification system",
  },
  {
    title: "Local Expertise",
    description: "Built for GCC businesses.",
    image: "/img/other-services-benefits/local-expertise.png",
    imageAlt: "Local expertise for GCC businesses",
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
            src: "/img/other-services-hero-5x.png",
            alt: "Business services dashboard showing various support services and solutions",
            width: 1247,
            height: 1441,
          }}
          variant="accounting"
        />
        <OtherServicesList />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="How We Help You Stay Compliant?"
          steps={otherServicesSteps}
        />
        <ServiceBenefits
          badge={{
            icon: "/img/stars-02.svg",
            text: "Benefits",
          }}
          heading="Why Incorpify for Extra Services?"
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
            src: "/img/other-services-cta/cta-image.png",
            alt: "Business services call to action",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

