import { Header } from "@/components/Header";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { CoverageOptions } from "@/components/shared/CoverageOptions";
import { ServiceHowItWorks, Step } from "@/components/shared/ServiceHowItWorks";
import { BackedBy } from "@/components/shared/BackedBy";
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
    title: "Compare Quotes",
    description:
      "Instantly view offers from trusted insurance providers in seconds with no need to fill out multiple forms.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variants/bg-variant-3.png",
      overlayImage: "/img/insurance/how-it-works/compare-quotes.png",
    },
    isActive: true,
    alignment: "right",
  },
  {
    number: "02",
    title: "Select a Policy",
    description:
      "Choose the plan that matches your business or family needs, with full pricing transparency.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variants/bg-variant-7.png",
      overlayImage: "/img/insurance/how-it-works/select-policy.png",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "Smart Document Handling",
    description:
      "Our system auto completes, verifies, and submits your application so you can skip the manual work.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variants/bg-variant-2.png",
      overlayImage: "/img/insurance/how-it-works/smart-document-handling.png",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Track Renewals",
    description:
      "Never miss a deadline by getting notified before your policy expires and renewing in just a few clicks.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/bg-variants/bg-variant-5.png",
      overlayImage: "/img/insurance/how-it-works/track-renewals.png",
    },
    isActive: false,
    alignment: "left",
  },
];

const insuranceBenefits = [
  {
    title: "Choose Freely",
    description: "Find the best insurance coverage available",
    image: "/img/insurance/benefits/benefit-1.png",
    imageAlt: "Choose freely insurance coverage options",
  },
  {
    title: "Clear, Upfront Pricing",
    description: "No hidden fees, just clean, honest quotes.",
    image: "/img/insurance/benefits/benefit-2.png",
    imageAlt: "Clear upfront pricing for insurance",
  },
  {
    title: "Fast, Digital Processing",
    description: "Save time with streamlined, paperless workflows.",
    image: "/img/insurance/benefits/benefit-3.png",
    imageAlt: "Fast digital processing for insurance",
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
            src: "/img/insurance-hero-5x.png",
            alt: "Insurance management dashboard showing policy overview and coverage details",
            width: 1875,
            height: 1508,
          }}
          variant="accounting"
        />
        <CoverageOptions
          badge={{
            icon: "/img/file-shield-01.svg",
            text: "Coverage Options",
          }}
          heading="Tailored Coverage for Every Need"
          cards={[
            {
              title: "Health Insurance",
              description: "Protect your team's well-being with flexible health plans.",
              image: "/img/insurance-coverage-card-1.png",
              imageAlt: "Health insurance coverage options",
            },
            {
              title: "Liability & Property",
              description: "Secure your assets and operations from risk.",
              image: "/img/insurance-coverage-card-2.png",
              imageAlt: "Liability and property insurance coverage",
            },
            {
              title: "Custom Plans",
              description: "Mix and match coverage that fits your business stage and industry.",
              image: "/img/insurance-coverage-card-3.png",
              imageAlt: "Custom insurance plans",
            },
          ]}
        />
        <ServiceHowItWorks
          badge={{
            icon: "/img/dataflow-03.svg",
            text: "How It Works",
          }}
          heading="How Can You Get Covered Effortlessly?"
          steps={insuranceSteps}
        />
        <BackedBy
          badge={{
            icon: "/img/shield-03.svg",
            text: "Backed by",
          }}
          heading="Backed by the Best in Insurance"
          description="Access competitive policies from our network of licensed providers, vetted for speed, transparency, and service."
          partners={[
            {
              name: "Partner 1",
              logo: "/img/insurance/backed-by/company-logo-1.png",
              alt: "Insurance partner logo 1",
            },
            {
              name: "Partner 2",
              logo: "/img/insurance/backed-by/company-logo-2.png",
              alt: "Insurance partner logo 2",
            },
            {
              name: "Partner 3",
              logo: "/img/insurance/backed-by/company-logo-3.png",
              alt: "Insurance partner logo 3",
            },
            {
              name: "Partner 4",
              logo: "/img/insurance/backed-by/company-logo-4.png",
              alt: "Insurance partner logo 4",
            },
            {
              name: "Partner 5",
              logo: "/img/insurance/backed-by/company-logo-5.png",
              alt: "Insurance partner logo 5",
            },
            {
              name: "Partner 6",
              logo: "/img/insurance/backed-by/company-logo-6.png",
              alt: "Insurance partner logo 6",
            },
            {
              name: "Partner 7",
              logo: "/img/insurance/backed-by/company-logo-7.png",
              alt: "Insurance partner logo 7",
            },
            {
              name: "Partner 8",
              logo: "/img/insurance/backed-by/company-logo-8.png",
              alt: "Insurance partner logo 8",
            },
            {
              name: "Partner 9",
              logo: "/img/insurance/backed-by/company-logo-9.png",
              alt: "Insurance partner logo 9",
            },
          ]}
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
            src: "/img/insurance/cta/insurance-cta-image.png",
            alt: "Insurance CTA image showing business protection",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

