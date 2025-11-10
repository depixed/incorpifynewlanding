import { Header } from "@/components/Header";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { VisaSolutions } from "@/components/services/visa-residency/VisaSolutions";
import { ServiceHowItWorks, Step } from "@/components/shared/ServiceHowItWorks";
import { VisaBenefits } from "@/components/services/visa-residency/VisaBenefits";
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
    title: "Application Submission",
    description:
      "Submit your visa application online with guided support and zero paperwork hassle.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/visa-bg-variant-1.png",
      overlayImage: "/img/visa-residency-how-it-works/application submission.png",
    },
    isActive: true,
    alignment: "right",
  },
  {
    number: "02",
    title: "Medical & ID Processing",
    description:
      "We coordinate your medical checks and ID verifications to meet all legal requirements.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variant-2.png",
      overlayImage: "/img/visa-residency-how-it-works/Medical and id proccessing.png",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Approval & Visa Issuance",
    description:
      "Receive timely updates on approval status and get your visa issued without delays.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variant-6.png",
      overlayImage: "/img/visa-residency-how-it-works/Aproval and visa issuance.png",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Renewal Notifications",
    description:
      "Stay compliant with proactive reminders before your visa or residency expires.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/visa-bg-variant-4.png",
      overlayImage: "/img/visa-residency-how-it-works/Renewal notification.png",
    },
    isActive: false,
    alignment: "left",
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
            src: "/img/visa-residency-hero-8x.png",
            alt: "Visa application dashboard showing document tracking and approval status",
            width: 3000,
            height: 2413,
          }}
          variant="accounting"
        />
        <VisaSolutions />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="Your Path to Residency Made Simple"
          steps={visaSteps}
        />
        <VisaBenefits />
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
            src: "/img/visa-residency-cta-image.png",
            alt: "Visa and residency services call to action",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

