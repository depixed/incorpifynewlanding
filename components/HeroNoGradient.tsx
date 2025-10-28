"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PrimaryCTA } from "./PrimaryCTA";

interface ServiceCategory {
  id: string;
  icon: string;
  label: string;
}

interface CompanyLogo {
  id: string;
  src: string;
  alt: string;
  className: string;
}

interface CompanyInfoCard {
  id: string;
  type: "company" | "registration" | "dates";
  logo?: string;
  logoClass?: string;
  title: string;
  details: string[];
  hasGradientBg?: boolean;
  iconSrc?: string;
  iconClass?: string;
  hasEllipsis?: boolean;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "incorporation",
    icon: "/img/building-07.svg",
    label: "Incorporation",
  },
  {
    id: "accounting-tax",
    icon: "/img/calculator.svg",
    label: "Accounting & Tax",
  },
  {
    id: "visa-residency",
    icon: "/img/credit-card-02.svg",
    label: "Visa & Residency",
  },
  {
    id: "banking",
    icon: "/img/bank-note-02.svg",
    label: "Banking",
  },
  {
    id: "insurance",
    icon: "/img/shield-03.svg",
    label: "Insurance",
  },
  {
    id: "payroll",
    icon: "/img/user-check-01.svg",
    label: "Payroll",
  },
  {
    id: "legal",
    icon: "/img/scales-02.svg",
    label: "Legal",
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

const companyInfoCards: CompanyInfoCard[] = [
  {
    id: "company-details",
    type: "company",
    logo: "/img/wio-logo.svg",
    logoClass:
      "relative w-[69.16px] h-[69.16px] ml-[-1.15px] rotate-[-2.00deg]",
    title: "FutureVision Tech",
    details: ["Software Development & IT Consultancy", "Manager: John Smith"],
  },
  {
    id: "registration-details",
    type: "registration",
    hasGradientBg: true,
    iconSrc: "/img/icon.svg",
    iconClass:
      "absolute w-[83.33%] h-[75.00%] top-[8.10%] left-[2.90%] rotate-[-2.00deg]",
    title: "Registration Details",
    details: [
      "License: CN-2025-44892",
      "Company registration: 9876543",
      "Office: 1205, Emirates Towers, Sheikh Zayed Road, Dubai, UAE",
      "Limited Liability Company (LLC)",
    ],
    hasEllipsis: true,
  },
  {
    id: "key-dates",
    type: "dates",
    hasGradientBg: true,
    iconSrc: "/img/icon-1.svg",
    iconClass:
      "absolute w-[75.00%] h-[83.33%] top-[3.61%] left-[7.45%] rotate-[-2.00deg]",
    title: "Key Dates",
    details: [
      "Incorporation: 15 February 2025",
      "License Expiry: 14 February 2026",
    ],
  },
];

export const HeroNoGradient = (): JSX.Element => {
  const [activeService, setActiveService] = useState("incorporation");

  return (
    <section
      className="flex flex-col w-full max-w-[1280px] mx-auto items-center gap-8 md:gap-12 lg:gap-[var(--3-spacing-spacing-7xl)] pt-20 md:pt-28 lg:pt-[var(--3-spacing-spacing-11xl)] pb-12 md:pb-16 lg:pb-[var(--3-spacing-spacing-7xl)] px-4 md:px-6 lg:px-8 relative overflow-hidden bg-[linear-gradient(0deg,rgba(29,24,52,1)_0%,rgba(29,24,52,1)_100%)]"
      aria-label="Hero section"
    >
      {/* Background decorative elements */}
      <div
        className="hidden lg:block left-[calc(50.00%_-_975px)] bottom-px w-[1950px] h-[1300px] absolute aspect-[1.5] opacity-5"
        aria-hidden="true"
      />

      <div
        className="hidden lg:block top-0 left-[calc(50.00%_-_750px)] w-[1500px] h-[1000px] absolute aspect-[1.5] opacity-5"
        aria-hidden="true"
      />

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
            {serviceCategories.map((category) => {
              const isActive = category.id === activeService;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveService(category.id)}
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

          {/* Dashboard Preview with Company Info Cards */}
          <article className="inline-flex flex-col items-start gap-2.5 p-4 md:p-6 relative flex-[0_0_auto] bg-[#473f7066] rounded-3xl border border-solid border-incorpify-primary backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
            <div className="relative w-full max-w-[1050px] aspect-[1050/689] rounded-[20px] overflow-hidden">
              {/* Desktop/Tablet View - Dashboard with Cards */}
              <div className="hidden md:block relative w-full h-full">
                <div className="inline-flex flex-col items-start p-[16.9px] absolute top-[calc(50.00%_-_269px)] left-[calc(50.00%_-_805px)] bg-1-color-modes-component-colors-alpha-alpha-white-30 rounded-[33.8px] overflow-hidden backdrop-blur-[50.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50.7px)_brightness(100%)] border-1-color-modes-colors-foreground-fg-white">
                  <Image
                    className="relative w-[954.1px] h-[596.4px] object-cover"
                    alt="Dashboard preview showing company information"
                    src="/img/tv-333.png"
                    width={954}
                    height={596}
                    priority
                  />
                </div>

                <div className="flex flex-col w-[494px] h-[604px] items-start justify-center gap-[17.83px] absolute top-[calc(50.00%_-_303px)] left-[516px] rotate-[2.00deg] shadow-[0px_105.33px_210.66px_-39.5px_#10182824]">
                  <div className="flex flex-col items-start gap-[26.75px] p-[26.75px] relative flex-1 self-stretch w-full grow bg-1-color-modes-colors-foreground-fg-white rounded-[26.85px] border-[1.68px] border-solid border-1-color-modes-colors-border-border-secondary">
                    <header className="flex flex-col items-start gap-[22.29px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-start gap-[17.83px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start justify-center gap-[4.46px] relative flex-1 self-stretch grow">
                          <h2 className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-1-color-modes-colors-text-text-secondary-700 text-[22.3px] tracking-[0] leading-[33.4px]">
                            Company information
                          </h2>
                        </div>

                        <div className="inline-flex items-center gap-[13.37px] relative flex-[0_0_auto]">
                          <button
                            className="all-[unset] box-border inline-flex items-center justify-center gap-[4.46px] px-[13.37px] py-[8.92px] relative flex-[0_0_auto] rounded-[8.92px] overflow-hidden"
                            aria-label="See all company information"
                          >
                            <div className="inline-flex items-center justify-center px-[2.23px] py-0 relative flex-[0_0_auto]">
                              <span className="relative w-fit mt-[-1.11px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-secondary text-[15.6px] tracking-[0] leading-[22.3px] whitespace-nowrap">
                                See all
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </header>

                    <div className="flex flex-col items-start gap-[17.83px] relative flex-1 self-stretch w-full grow">
                      {companyInfoCards.map((card) => (
                        <div
                          key={card.id}
                          className="flex flex-col min-w-[258.57px] items-start gap-[8.92px] px-[22.29px] py-[13.37px] relative flex-1 self-stretch w-full grow bg-1-color-modes-component-colors-utility-gray-utility-gray-50 rounded-[8.92px] overflow-hidden"
                        >
                          <div className="flex items-center justify-center gap-[17.83px] relative flex-1 self-stretch w-full grow">
                            {card.type === "company" && card.logo && card.logoClass ? (
                              <img
                                className={card.logoClass}
                                alt={`${card.title} logo`}
                                src={card.logo}
                              />
                            ) : (
                              <div className="relative w-[66.87px] h-[66.87px] rounded-[6.69px] overflow-hidden bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)]">
                                <div className="relative top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] w-9 h-9 opacity-[0.84]">
                                  <img
                                    className={card.iconClass}
                                    alt=""
                                    src={card.iconSrc}
                                    aria-hidden="true"
                                  />
                                </div>
                              </div>
                            )}

                            <div
                              className={`flex flex-col items-start justify-center gap-[2.23px] relative flex-1 grow ${card.type === "registration" ? "mt-[-0.42px] mb-[-0.42px]" : ""}`}
                            >
                              <div
                                className={
                                  card.type === "company" || card.type === "dates"
                                    ? "inline-flex items-start gap-[4.46px] relative flex-[0_0_auto]"
                                    : ""
                                }
                              >
                                <h3 className="relative w-fit mt-[-1.11px] [font-family:'Inter',Helvetica] font-semibold text-1-color-modes-colors-text-text-secondary-700 text-[15.6px] tracking-[0] leading-[22.3px] whitespace-nowrap">
                                  {card.title}
                                </h3>
                              </div>

                              {card.details.map((detail, index) => (
                                <p
                                  key={index}
                                  className={`${
                                    card.hasEllipsis && index === 3
                                      ? "self-stretch overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]"
                                      : "w-fit whitespace-nowrap"
                                  } relative [font-family:'Inter',Helvetica] font-medium text-1-color-modes-colors-text-text-quaternary-500 text-[15.6px] tracking-[0] leading-[22.3px]`}
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View - Simple Dashboard Image */}
              <div className="block md:hidden relative w-full h-full">
                <Image
                  className="relative w-full h-full object-cover rounded-lg"
                  alt="Platform dashboard preview showing incorporation services"
                  src="/images/image-1376.svg"
                  width={1050}
                  height={689}
                  priority
                />
              </div>
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
