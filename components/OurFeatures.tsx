"use client";

import React, { useRef, useState, useEffect } from "react";
import { ServiceFeatureCard } from "./ServiceFeatureCard";
import { ExtraServicesCard } from "./ExtraServicesCard";

interface Feature {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface ServiceCard {
  id: string;
  category: string;
  categoryIcon: string;
  title: string;
  description: string;
  features: Feature[];
  backgroundImage: string;
  foregroundImage: string;
  ctaText: string;
}

export const OurFeatures = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const serviceCards: ServiceCard[] = [
    {
      id: "incorporation",
      category: "Incorporation",
      categoryIcon: "/img/building-07.svg",
      title: "Incorporate your new Company with the help of AI",
      description:
        "Start your Company in the GCC and manage everything from one smart, centralized dashboard.",
      features: [
        {
          icon: "/img/lightbulb-02.svg",
          iconAlt: "Lightbulb",
          title: "Smart Jurisdiction",
          description: "Choose the best setup location.",
        },
        {
          icon: "/img/dataflow-03.svg",
          iconAlt: "Dataflow",
          title: "End-to-End Setup",
          description: "Automate licensing & approvals.",
        },
        {
          icon: "/img/bar-chart-square-02.svg",
          iconAlt: "Bar chart",
          title: "Digital Dashboard",
          description: "Manage everything in one place.",
        },
        {
          icon: "/img/file-shield-01.svg",
          iconAlt: "File shield",
          title: "Post-Support",
          description: "Full coverage after setup.",
        },
      ],
      backgroundImage: "/img/888-1.png",
      foregroundImage: "/img/frame-1686557309.png",
      ctaText: "Get Started",
    },
    {
      id: "accounting",
      category: "Accounting & Tax",
      categoryIcon: "/img/calculator.svg",
      title: "Automated Accounting and Smart Tax Filing",
      description:
        "Handle bookkeeping, VAT, and taxes easily with AI and real-time alerts.",
      features: [
        {
          icon: "/img/calculator-1.svg",
          iconAlt: "Calculator",
          title: "Automated Bookkeeping",
          description: "AI handles filing.",
        },
        {
          icon: "/img/bank-note-01.svg",
          iconAlt: "Bank note",
          title: "Corporate Tax Made Easy",
          description: "Quick tax submissions",
        },
        {
          icon: "/img/bank-note-02.svg",
          iconAlt: "Bank note",
          title: "Real-Time Bank Integration",
          description: "Instant account sync.",
        },
        {
          icon: "/img/cpu-chip-01.svg",
          iconAlt: "Cpu chip",
          title: "AI Insights & Audits",
          description: "Smart compliance checks.",
        },
      ],
      backgroundImage: "/img/777-1.png",
      foregroundImage: "/img/frame-1686557310.png",
      ctaText: "Get Started",
    },
    {
      id: "visa",
      category: "Visa & Residency",
      categoryIcon: "/img/credit-card-02.svg",
      title: "Fast Track Your Visa and Residency",
      description:
        "Get your UAE or KSA visa fast with everything automated, tracked, and renewed in one place.",
      features: [
        {
          icon: "/img/credit-card-02-1.svg",
          iconAlt: "Credit card",
          title: "Complete Visa Support",
          description: "Easy applications & renewals.",
        },
        {
          icon: "/img/calendar.svg",
          iconAlt: "Calendar",
          title: "Smart Scheduling",
          description: "Automated bookings & updates.",
        },
        {
          icon: "/img/home-03.svg",
          iconAlt: "Home",
          title: "Easy Family Relocation",
          description: "Visas, housing & school support.",
        },
        {
          icon: "/img/dataflow-01.svg",
          iconAlt: "Dataflow",
          title: "Seamless Flow Integration",
          description: "All services in sync.",
        },
      ],
      backgroundImage: "/img/666-1.png",
      foregroundImage: "/img/frame-1686557309.png",
      ctaText: "Get Started",
    },
    {
      id: "banking",
      category: "Banking",
      categoryIcon: "/img/bank-note-02.svg",
      title: "Open Business Bank Accounts Faster",
      description:
        "Open a business bank account quickly with no delays and no hassle.",
      features: [
        {
          icon: "/img/bank.svg",
          iconAlt: "Bank",
          title: "Fast Account Opening",
          description: "Quick setup & KYC.",
        },
        {
          icon: "/img/file-05.svg",
          iconAlt: "File",
          title: "Smart Document Handling",
          description: "Auto checklists.",
        },
        {
          icon: "/img/bar-chart-square-02.svg",
          iconAlt: "Bar chart",
          title: "Live Tracking Dashboard",
          description: "Real-time updates.",
        },
        {
          icon: "/img/bank-note-02-1.svg",
          iconAlt: "Bank note",
          title: "All-in Banking Support",
          description: "Multi-currency & help.",
        },
      ],
      backgroundImage: "/img/555-1.png",
      foregroundImage: "/img/frame-1686557310.png",
      ctaText: "Get Started",
    },
    {
      id: "insurance",
      category: "Insurance",
      categoryIcon: "/img/shield-03.svg",
      title: "Protect Your Business and Your Family with Smart Coverage",
      description:
        "Manage all your business insurance such as health, liability, property, and more in one platform.",
      features: [
        {
          icon: "/img/shield-03-1.svg",
          iconAlt: "Shield",
          title: "Essential Coverage",
          description: "Health, liability & assets.",
        },
        {
          icon: "/img/clipboard-check.svg",
          iconAlt: "Clipboard",
          title: "Tailored Plans",
          description: "Custom by industry & size.",
        },
        {
          icon: "/img/server-06.svg",
          iconAlt: "Server",
          title: "Trusted Network",
          description: "Pre-vetted insurers & quotes.",
        },
        {
          icon: "/img/bar-chart-square-02.svg",
          iconAlt: "Bar chart",
          title: "Smart Policy Management",
          description: "Track & renew in one place.",
        },
      ],
      backgroundImage: "/img/444-1.png",
      foregroundImage: "/img/frame-2147225522.png",
      ctaText: "Get Started",
    },
    {
      id: "payroll",
      category: "Payroll",
      categoryIcon: "/img/user-check-01.svg",
      title: "Automated Payroll That Works for Your Business",
      description:
        "Run payroll in the UAE & KSA with ease including automated salaries, WPS, payslips, and filings.",
      features: [
        {
          icon: "/img/bank-note-01.svg",
          iconAlt: "Bank note",
          title: "Automated Salary",
          description: "Fast disbursals & payslips.",
        },
        {
          icon: "/img/scales-02.svg",
          iconAlt: "Scales",
          title: "Jurisdiction Accuracy",
          description: "Tax & legal compliance.",
        },
        {
          icon: "/img/users-01.svg",
          iconAlt: "Users",
          title: "Easy Onboarding",
          description: "Add employees with full setup.",
        },
        {
          icon: "/img/file-07.svg",
          iconAlt: "File",
          title: "Smart Payroll",
          description: "Track leave, bonuses & reports.",
        },
      ],
      backgroundImage: "/img/333-1.png",
      foregroundImage: "/img/frame-1686557309.png",
      ctaText: "Get Started",
    },
    {
      id: "legal",
      category: "Legal",
      categoryIcon: "/img/scales-02.svg",
      title: "Expert Lawyers for Protection and Compliance on Demand",
      description:
        "Create contracts, resolve disputes, and stay compliant with fast access to trusted lawyers with no delays.",
      features: [
        {
          icon: "/img/file-shield-02.svg",
          iconAlt: "File shield",
          title: "Smart Contracts",
          description: "Generate instantly.",
        },
        {
          icon: "/img/scales-02-1.svg",
          iconAlt: "Scales",
          title: "Legal Review",
          description: "Advisors check compliance.",
        },
        {
          icon: "/img/shield-tick.svg",
          iconAlt: "Shield tick",
          title: "Regulatory Compliance",
          description: "Aligned with UAE & KSA rules.",
        },
        {
          icon: "/img/file-lock-02.svg",
          iconAlt: "File lock",
          title: "IP & Disputes",
          description: "Trademark & legal help.",
        },
      ],
      backgroundImage: "/img/222-1.png",
      foregroundImage: "/img/frame-2147225523.png",
      ctaText: "Get Started",
    },
    {
      id: "extra",
      category: "More",
      categoryIcon: "/img/dots-grid.svg",
      title: "Extra Services. Fully Covered",
      description: "",
      features: [],
      backgroundImage: "",
      foregroundImage: "",
      ctaText: "Get Started",
    },
  ];

  const handleSkip = () => {
    // Scroll to next section after OurFeatures
    const nextSection = sectionRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section
      // Progress goes from 0 (start of section) to totalCards (end of section)
      const distanceFromTop = scrollPosition - sectionTop + windowHeight * 0.3;
      const totalScrollDistance = sectionHeight - windowHeight;
      
      // Map the scroll to card progress (0 to serviceCards.length)
      const progress = (distanceFromTop / totalScrollDistance) * serviceCards.length;
      
      // Clamp between 0 and totalCards
      setScrollProgress(Math.max(0, Math.min(serviceCards.length, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [serviceCards.length]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative"
      aria-labelledby="features-heading"
      style={{ minHeight: `${(serviceCards.length + 0.5) * 100}vh` }}
    >
      <div className="flex flex-col w-full max-w-[1280px] mx-auto items-center justify-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-24 px-4 md:px-8 lg:px-[var(--3-spacing-spacing-8xl)] pb-16 md:pb-20 lg:pb-24 relative sticky top-0">
        {/* Background blur effect */}
        <div
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-px w-full max-w-[1080px] h-[800px] rounded-[540px/400px] blur-[60.49px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(29,24,52,0.06)_0%,rgba(29,24,52,0)_100%)]"
          aria-hidden="true"
        />

        {/* Header Section */}
        <header className="flex flex-col w-full max-w-[600px] items-center gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-3xl)] relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[var(--3-spacing-spacing-md)] py-2 md:py-2.5 lg:pt-[var(--3-spacing-spacing-md)] px-3 md:px-4 lg:pr-[var(--3-spacing-spacing-lg)] lg:pb-[var(--3-spacing-spacing-md)] lg:pl-[var(--3-spacing-spacing-lg)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8">
          <img
            className="relative w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6"
            alt=""
            src="/img/magic-wand-02.svg"
            aria-hidden="true"
          />

          <div className="inline-flex flex-col items-start relative">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-incorpify-primary text-xs md:text-sm tracking-[0] leading-5 whitespace-nowrap">
              Our Features
            </span>
          </div>

          <div
            className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
            aria-hidden="true"
          />
        </div>

        {/* Heading */}
        <h2
          id="features-heading"
          className="relative w-full [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-[32px] md:leading-[40px] lg:leading-[44px] px-4"
        >
          Integrated Business Services
        </h2>
      </header>

            {/* Stacking Feature Cards */}
            <div className="relative w-full z-10 h-[550px] md:h-[600px] lg:h-[468px]">
              {serviceCards.map((card, index) => {
                // Render special ExtraServicesCard for the last card
                if (card.id === "extra") {
                  return (
                    <ExtraServicesCard
                      key={card.id}
                      cardIndex={index}
                      scrollProgress={scrollProgress}
                      totalCards={serviceCards.length}
                    />
                  );
                }

                // Render normal ServiceFeatureCard for all other cards
                return (
                  <ServiceFeatureCard
                    key={card.id}
                    category={card.category}
                    categoryIcon={card.categoryIcon}
                    title={card.title}
                    description={card.description}
                    features={card.features}
                    backgroundImage={card.backgroundImage}
                    foregroundImage={card.foregroundImage}
                    ctaText={card.ctaText}
                    cardIndex={index}
                    scrollProgress={scrollProgress}
                    totalCards={serviceCards.length}
                  />
                );
              })}
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="gap-2.5 py-3 md:pt-[var(--3-spacing-spacing-xl)] md:pb-[var(--3-spacing-spacing-xl)] px-5 md:px-[22px] rounded-lg md:rounded-[var(--2-radius-radius-lg)] inline-flex items-center justify-center relative overflow-hidden hover:bg-gray-50 transition-colors cursor-pointer z-30"
              type="button"
              aria-label="Skip to next section"
            >
              <div className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-sm md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
                  Skip this section
                </span>
              </div>

              <img
                className="relative w-5 h-5 md:w-6 md:h-6"
                alt=""
                src="/img/arrow-down.svg"
                aria-hidden="true"
              />
            </button>
      </div>
    </section>
  );
};

