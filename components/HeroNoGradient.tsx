"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PrimaryCTA } from "./PrimaryCTA";

interface ServiceCategory {
  id: string;
  icon: string;
  label: string;
  image: string;
}

interface CompanyLogo {
  id: string;
  src: string;
  alt: string;
  className: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "incorporation",
    icon: "/img/building-07.svg",
    label: "Incorporation",
    image: "/img/hero/incorporation-tab-desktop.png",
  },
  {
    id: "accounting-tax",
    icon: "/img/calculator.svg",
    label: "Accounting & Tax",
    image: "/img/hero/Accounting&tax-tab-desktop.png",
  },
  {
    id: "visa-residency",
    icon: "/img/credit-card-02.svg",
    label: "Visa & Residency",
    image: "/img/hero/visa&residency-tab-desktop.png",
  },
  {
    id: "banking",
    icon: "/img/bank-note-02.svg",
    label: "Banking",
    image: "/img/hero/Banking-tab-desktop.png",
  },
  {
    id: "insurance",
    icon: "/img/shield-03.svg",
    label: "Insurance",
    image: "/img/hero/Insuranc-tab-desktop.png",
  },
  {
    id: "payroll",
    icon: "/img/user-check-01.svg",
    label: "Payroll",
    image: "/img/hero/payroll-tab-desktop.png",
  },
  {
    id: "legal",
    icon: "/img/scales-02.svg",
    label: "Legal",
    image: "/img/hero/Legal-tab-tsaktop.png",
  },
];

const companyLogos: CompanyLogo[] = [
  {
    id: "logo-1",
    src: "/img/company-logo.svg",
    alt: "Company logo",
    className: "relative flex-[0_0_auto] mb-[-4.00px] ml-[-2.00px]",
  },
  {
    id: "logo-2",
    src: "/img/company-logo-1.svg",
    alt: "Company logo",
    className: "relative flex-[0_0_auto] mb-[-4.00px] -ml-3",
  },
  {
    id: "logo-3",
    src: "/img/company-logo-2.svg",
    alt: "Company logo",
    className: "mr-[-2.00px] relative flex-[0_0_auto] mb-[-4.00px] -ml-3",
  },
];

export const HeroNoGradient = (): JSX.Element => {
  const [activeService, setActiveService] = useState("incorporation");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation effect - cycles through all services every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % serviceCategories.length;
        setActiveService(serviceCategories[nextIndex].id);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Handle manual tab click
  const handleServiceClick = (categoryId: string, index: number) => {
    setActiveService(categoryId);
    setCurrentIndex(index);
  };

  // Get current service image
  const currentService = serviceCategories.find(
    (service) => service.id === activeService
  );

  return (
    <section
      className="flex flex-col w-full max-w-[1280px] mx-auto items-center gap-8 md:gap-12 lg:gap-[var(--3-spacing-spacing-7xl)] pt-20 md:pt-28 lg:pt-[var(--3-spacing-spacing-11xl)] pb-12 md:pb-16 lg:pb-[var(--3-spacing-spacing-7xl)] px-4 md:px-6 lg:px-8 relative overflow-hidden bg-[linear-gradient(0deg,rgba(29,24,52,1)_0%,rgba(29,24,52,1)_100%)]"
      aria-label="Hero section"
    >
      {/* Background decorative videos */}
      <video
        className="hidden lg:block absolute top-0 left-[calc(50.00%_-_750px)] w-[1500px] h-[1000px] opacity-5 object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/img/hero/white dots bg video top side.mp4" type="video/mp4" />
      </video>

      <video
        className="hidden lg:block absolute left-[calc(50.00%_-_975px)] bottom-px w-[1950px] h-[1300px] opacity-5 object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/img/hero/white dot bg video bottom.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute left-0 bottom-px w-full h-[100px] bg-[linear-gradient(360deg,rgba(29,24,52,1)_0%,rgba(29,24,52,0)_100%)]"
        aria-hidden="true"
      />

      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl-duplicate)] relative w-full z-10">
        {/* Hero Title and Company Logos Section */}
        <div className="flex flex-col max-w-[var(--5-containers-container-max-width-desktop)] items-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl)] px-0 md:px-4 lg:px-[var(--3-spacing-spacing-11xl-duplicate)] py-0 relative w-full">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-5xl)] relative w-full">
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-3xl)] relative w-full">
              <h1 className="relative flex items-center justify-center w-full mt-[-1.00px] font-display-lg-semibold font-[number:var(--display-lg-semibold-font-weight)] text-1-color-modes-colors-text-text-primary-on-brand text-[28px] sm:text-[36px] md:text-[40px] lg:text-[length:var(--display-lg-semibold-font-size)] text-center tracking-[var(--display-lg-semibold-letter-spacing)] leading-[36px] sm:leading-[44px] md:leading-[48px] lg:leading-[var(--display-lg-semibold-line-height)] [font-style:var(--display-lg-semibold-font-style)] px-4 md:px-0">
                Automate Success. Eliminate Bureaucracy.
              </h1>

              {/* Company Logos and Trust Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative w-full">
                <div
                  className="inline-flex items-center px-0 py-px relative flex-[0_0_auto]"
                  role="img"
                  aria-label="Trusted company logos"
                >
                  {companyLogos.map((logo) => (
                    <img
                      key={logo.id}
                      className={logo.className}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>

                <p className="relative flex items-center justify-center w-fit font-text-xl-medium font-[number:var(--text-xl-medium-font-weight)] text-1-color-modes-component-colors-alpha-alpha-white-90 text-base md:text-lg lg:text-[length:var(--text-xl-medium-font-size)] text-center tracking-[var(--text-xl-medium-letter-spacing)] leading-[var(--text-xl-medium-line-height)] whitespace-nowrap [font-style:var(--text-xl-medium-font-style)]">
                  Trusted by 540+ clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services and Dashboard Section */}
        <div className="inline-flex flex-col items-center justify-end gap-4 md:gap-6 relative flex-[0_0_auto] rounded-[var(--2-radius-radius-4xl)]">
          {/* Service Tabs */}
          <nav
            className="flex items-start gap-2 md:gap-2.5 px-4 md:px-6 py-3 md:py-4 relative w-full bg-[#473f7066] rounded-2xl overflow-hidden border border-solid border-incorpify-primary backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] overflow-x-auto scrollbar-hide"
            aria-label="Service categories"
          >
            {serviceCategories.map((category, index) => {
              const isActive = category.id === activeService;
              return (
                <button
                  key={category.id}
                  onClick={() => handleServiceClick(category.id, index)}
                  className={`inline-flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2.5 pt-2 md:pt-[var(--3-spacing-spacing-lg)] pr-2 md:pr-[var(--3-spacing-spacing-lg)] pb-2 md:pb-[var(--3-spacing-spacing-lg)] pl-2 md:pl-[var(--3-spacing-spacing-lg)] relative flex-shrink-0 md:flex-1 rounded-lg md:rounded-[var(--2-radius-radius-lg)] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] transition-all ${
                    isActive
                      ? "bg-1-color-modes-component-colors-alpha-alpha-white-40 border border-solid border-1-color-modes-colors-border-border-primary shadow-shadows-shadow-md"
                      : "bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] border-1-color-modes-colors-foreground-fg-senary-300 hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.15)_100%)]"
                  }`}
                  aria-pressed={isActive}
                  aria-label={category.label}
                >
                  <div className="inline-flex items-center gap-2 md:gap-3 relative flex-[0_0_auto]">
                    <img
                      className="relative w-3.5 h-3.5 md:w-4 md:h-4"
                      alt=""
                      src={category.icon}
                      aria-hidden="true"
                    />

                    <span
                      className={`relative w-fit mt-[-1.00px] text-1-color-modes-colors-text-text-primary-on-brand text-[10px] md:text-xs tracking-[var(--text-xs-${isActive ? "semibold" : "medium"}-letter-spacing)] leading-[var(--text-xs-${isActive ? "semibold" : "medium"}-line-height)] whitespace-nowrap [font-style:var(--text-xs-${isActive ? "semibold" : "medium"}-font-style)] ${isActive ? "font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)]" : "font-text-xs-medium font-[number:var(--text-xs-medium-font-weight)]"}`}
                    >
                      {category.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Dynamic Service Preview Image */}
          <article className="inline-flex flex-col items-start gap-2.5 p-4 md:p-6 relative flex-[0_0_auto] bg-[#473f7066] rounded-3xl border border-solid border-incorpify-primary backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
            <div className="relative w-full max-w-[1050px] aspect-[1050/689] rounded-[20px] overflow-hidden">
              {currentService && (
                <Image
                  key={activeService}
                  className="relative w-full h-full object-contain transition-opacity duration-500 ease-in-out"
                  alt={`${currentService.label} service preview`}
                  src={currentService.image}
                  width={1050}
                  height={689}
                  priority
                />
              )}
            </div>
          </article>
        </div>

        {/* CTA Button */}
        <PrimaryCTA ariaLabel="Get started with our services">
          Get started
        </PrimaryCTA>
      </div>

      {/* Certifications Banner */}
      <div className="w-full max-w-[1280px] relative flex-shrink-0">
        <Image
          className="w-full h-auto"
          alt="Licensed and certified by government authorities"
          src="/images/frame-2095585000.png"
          width={1280}
          height={120}
        />
      </div>
    </section>
  );
};
