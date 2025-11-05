import { Header } from "@/components/Header";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceHowItWorks, Step } from "@/components/shared/ServiceHowItWorks";
import { ServiceBenefits } from "@/components/shared/ServiceBenefits";
import { ServiceFAQ, FAQItem } from "@/components/shared/ServiceFAQ";
import { ServiceReadyToLaunch } from "@/components/shared/ServiceReadyToLaunch";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Insurance Services | Incorpify",
  description:
    "Comprehensive insurance solutions for your business. Health insurance, liability coverage, and commercial insurance for UAE and GCC companies.",
};

const insuranceSteps: Step[] = [
  {
    number: "01",
    title: "Assess your needs",
    description:
      "Tell us about your business, team size, and industry. Our AI analyzes your requirements and recommends the right insurance coverage.",
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
    title: "Compare quotes",
    description:
      "Review tailored quotes from leading insurance providers. Compare coverage, premiums, and benefits side-by-side.",
    image: {
      type: "documents",
      content: {
        step: "1 of 3 steps",
        title: "Insurance Quote",
        description:
          "Compare comprehensive coverage options from multiple providers. Get the best rates for your business needs.",
      },
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Select your plan",
    description:
      "Choose the coverage that fits your budget and needs. We help you understand policy terms and make informed decisions.",
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
      message: "Processing your insurance application...",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Get covered",
    description:
      "Your policy is activated instantly. Receive digital policy documents and insurance cards for your entire team.",
    image: {
      type: "approved",
      confettiGif:
        "/img/https-lottiefiles-com-animations-confetti-partyyy-wa6zqqu2jw.gif",
      congratsTitle: "You're Covered!",
      congratsMessage: "Your business insurance is now active.",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "05",
    title: "Ongoing support",
    description:
      "File claims, add team members, and manage renewals through your dashboard. Our support team is here whenever you need assistance.",
    image: {
      type: "golive",
      mainImage: "/img/333-1.png",
      overlayImage: "/img/image-1374-1.png",
    },
    isActive: false,
    alignment: "right",
  },
];

const insuranceBenefits = [
  {
    title: "Health insurance",
    description: "Comprehensive medical coverage for you and your employees",
    image: "/img/frame-2095585971.png",
    imageAlt: "Health insurance coverage",
  },
  {
    title: "Liability protection",
    description: "Professional and general liability insurance for your business",
    image: "/img/frame-2095585971-1.png",
    imageAlt: "Liability insurance",
  },
  {
    title: "Claims made easy",
    description: "Simple claims process with dedicated support and fast approvals",
    image: "/img/frame-1686557309.png",
    imageAlt: "Claims processing",
    additionalImage: {
      src: "/img/14-a-1.png",
      alt: "Support icon",
      className:
        "absolute top-[calc(50%-24px)] left-[calc(50%+67px)] w-[103px] h-[103px] object-cover",
    },
  },
];

const insuranceFaqs: FAQItem[] = [
  {
    id: 1,
    question: "What types of insurance do you offer?",
    answer:
      "We provide comprehensive business insurance including health insurance for employees, professional indemnity, general liability, commercial property insurance, workers' compensation, and cyber insurance. Coverage options are tailored to your industry and business size.",
  },
  {
    id: 2,
    question: "Is health insurance mandatory for employees in the UAE?",
    answer:
      "Yes, employers in the UAE are legally required to provide health insurance for all employees and their dependents. We help you comply with DHA (Dubai) and HAAD (Abu Dhabi) regulations while finding the most cost-effective plans.",
  },
  {
    id: 3,
    question: "How quickly can insurance coverage start?",
    answer:
      "Most insurance policies can be activated within 24-48 hours after approval. Health insurance typically takes 3-5 business days. Emergency coverage can sometimes be arranged same-day depending on the provider and policy type.",
  },
  {
    id: 4,
    question: "Can I add or remove employees from the policy?",
    answer:
      "Yes, you can add new employees anytime through your dashboard. The premium is adjusted pro-rata based on the coverage period. When employees leave, we help process cancellations and refunds according to policy terms.",
  },
  {
    id: 5,
    question: "What does professional indemnity insurance cover?",
    answer:
      "Professional indemnity protects your business against claims of negligence, errors, or omissions in professional services. It covers legal costs, compensation payments, and defense expenses. Essential for consultants, advisors, and service providers.",
  },
  {
    id: 6,
    question: "Do you help with insurance claims?",
    answer:
      "Absolutely. We provide full claims support including documentation assistance, liaison with insurance providers, claim tracking, and follow-up. Our team ensures your claims are processed smoothly and settled promptly.",
  },
  {
    id: 7,
    question: "Can I customize coverage for different employee categories?",
    answer:
      "Yes, we can set up tiered coverage plans. For example, executive packages with enhanced benefits, standard employee coverage, and basic plans for certain categories. This helps optimize costs while meeting everyone's needs.",
  },
  {
    id: 8,
    question: "What happens during policy renewal?",
    answer:
      "We notify you 60 days before renewal, review your coverage needs, obtain competitive renewal quotes, and recommend any adjustments. The renewal process is seamless with no coverage gaps if you renew on time.",
  },
];

export default function InsurancePage() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <ServiceHero
          title="Business Insurance Made Simple"
          description="Comprehensive coverage for your team and business. Health insurance, liability protection, and more from leading providers."
          primaryCta={{
            text: "Get Started",
            href: "#get-started",
            ariaLabel: "Get started with business insurance",
          }}
          secondaryCta={{
            text: "Talk to Insurance Expert",
            href: "#talk-to-expert",
            ariaLabel: "Talk to an insurance expert",
            icon: "/img/chevron-right.svg",
          }}
          heroImage={{
            src: "/img/accounting-transaction.png",
            alt: "Insurance management dashboard showing policy overview and coverage details",
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
          heading="Get Covered in 5 Simple Steps"
          steps={insuranceSteps}
        />
        <ServiceBenefits
          badge={{
            icon: "/img/stars-02.svg",
            text: "Benefits",
          }}
          heading="Why Choose Incorpify for Insurance?"
          benefits={insuranceBenefits}
        />
        <ServiceFAQ
          badge={{
            icon: "/img/message-question-square.svg",
            text: "FAQ",
          }}
          heading="Frequently Asked Questions"
          faqs={insuranceFaqs}
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
          heading="Ready to protect your business?"
          description="Get comprehensive coverage for your team today!"
          primaryCta={{
            text: "Get started",
            ariaLabel: "Get started with insurance services",
          }}
          secondaryCta={{
            text: "Request demo",
            ariaLabel: "Request a demo",
          }}
          image={{
            src: "/img/progress-tracker-bank-account.png",
            alt: "Insurance application progress tracker",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

