"use client";

import React from "react";
import { PrimaryCTA } from "./PrimaryCTA";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  icon: string;
  iconAlt: string;
  isSelected: boolean;
  rotation?: string;
  marginLeft?: string;
}

interface FeatureItem {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface ExtraServicesCardProps {
  cardIndex: number;
  scrollProgress: number;
  totalCards: number;
}

export const ExtraServicesCard: React.FC<ExtraServicesCardProps> = ({
  cardIndex,
  scrollProgress,
  totalCards,
}) => {
  // Calculate the vertical position based on scroll progress
  const cardProgress = scrollProgress - cardIndex;
  const translateY = Math.max(0, Math.min(1, 1 - cardProgress)) * 100;
  
  const finalTranslateY = cardIndex === 0 ? 0 : translateY;
  const zIndex = 10 + cardIndex;

  const servicesRow1: FeatureItem[] = [
    {
      icon: "/img/building-07.svg",
      iconAlt: "Building",
      title: "Workspace Setup",
      description: "Flex, virtual, or permanent.",
    },
    {
      icon: "/img/briefcase-01.svg",
      iconAlt: "Briefcase",
      title: "Business Essentials",
      description: "Trademark & PRO services.",
    },
  ];

  const servicesRow2: FeatureItem[] = [
    {
      icon: "/img/folder.svg",
      iconAlt: "Folder",
      title: "Gov Docs",
      description: "Trade license & labor cards.",
    },
    {
      icon: "/img/slash-circle-02.svg",
      iconAlt: "Slash circle",
      title: "Company Closure",
      description: "Smooth exit support.",
    },
  ];

  const serviceDetails: ServiceItem[] = [
    {
      id: "1",
      title: "Corporate bank account",
      description: "Open a UAE corporate account with expert guidance and zero hassle.",
      icon: "/img/file-attachment-02.svg",
      iconAlt: "File attachment",
      isSelected: true,
      rotation: "rotate-[2.00deg]",
      marginLeft: "ml-[1.0px]",
    },
    {
      id: "2",
      title: "Fast track visa",
      description: "Fast-track your UAE visa with expert, priority processing.",
      price: "AED 1,500",
      icon: "/img/credit-card-02.svg",
      iconAlt: "Credit card",
      isSelected: true,
      marginLeft: "ml-[34.5px]",
    },
    {
      id: "3",
      title: "Accounting",
      description: "Comprehensive accounting—bookkeeping, tax, payroll, and reporting.",
      price: "AED 5,000",
      icon: "/img/calculator.svg",
      iconAlt: "Calculator",
      isSelected: false,
      rotation: "rotate-[2.00deg]",
      marginLeft: "ml-[1.0px]",
    },
    {
      id: "4",
      title: "Corporate tax registration",
      description: "We manage your UAE corporate tax registration and compliance.",
      price: "AED 2,000",
      icon: "/img/certificate-02.svg",
      iconAlt: "Certificate",
      isSelected: false,
      marginLeft: "ml-[34.5px]",
    },
    {
      id: "5",
      title: "Trademark registration",
      description: "Protect your brand with end-to-end trademark registration support.",
      price: "AED 3,100",
      icon: "/img/asterisk-01.svg",
      iconAlt: "Asterisk",
      isSelected: false,
      rotation: "rotate-[2.00deg]",
      marginLeft: "ml-[1.0px]",
    },
  ];

  return (
    <article
      className="absolute top-0 left-0 w-full h-auto md:h-auto lg:h-[468px] flex flex-col lg:flex-row items-stretch bg-white rounded-2xl lg:rounded-[32px] border border-solid border-1-color-modes-colors-foreground-fg-white shadow-[inset_0px_0px_1px_1px_#ffffff,0px_20px_20px_-4px_#00000003,0px_6.38px_6.38px_-3px_#00000008,0px_2.41px_2.41px_-2px_#0000000a,0px_0.8px_0.8px_-1px_#0000000a,0px_8px_8px_-4px_#10182808] overflow-hidden"
      style={{
        transform: `translateY(${finalTranslateY}vh)`,
        zIndex: zIndex,
        transition: 'transform 0.1s linear',
      }}
    >
      {/* Image Section - Top on mobile, hidden on desktop */}
      <aside
        className="lg:hidden relative w-full h-[220px] md:h-[280px] rounded-[16px_16px_0px_0px] overflow-hidden border-b [border-style:solid] border-1-color-modes-component-colors-utility-purple-utility-purple-100"
        aria-label="Extra services preview"
      >
        <div className="relative w-full h-full">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt=""
            src="/img/111-1.png"
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center py-8">
            <img
              className="w-[90%] md:w-[80%] h-auto max-h-full object-contain"
              alt="Extra services"
              src="/img/our-features/more.png"
            />
          </div>
        </div>
      </aside>

      {/* Left Content Section */}
      <section className="flex flex-col w-full lg:w-[600px] items-start gap-4 md:gap-6 lg:gap-[var(--3-spacing-spacing-3xl)] p-4 md:p-6 lg:pt-[var(--3-spacing-spacing-4xl)] lg:pr-[var(--3-spacing-spacing-4xl)] lg:pb-[var(--3-spacing-spacing-4xl)] lg:pl-[var(--3-spacing-spacing-4xl)] relative">
        {/* Category Badge */}
        <div className="inline-flex items-start gap-2 md:gap-[var(--3-spacing-spacing-md)] relative">
          <div className="inline-flex items-center justify-center gap-2 md:gap-[var(--3-spacing-spacing-xs)] px-3 md:px-3.5 py-2 md:py-2.5 relative rounded-full overflow-hidden bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8 border-1-color-modes-component-colors-components-buttons-secondary-button-secondary-border">
            <img
              className="relative w-4 h-4 md:w-5 md:h-5"
              alt="Dots grid"
              src="/img/dots-grid.svg"
              aria-hidden="true"
            />
            <div className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#344054] text-xs md:text-sm tracking-[0] leading-5 whitespace-nowrap">
                More
              </span>
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <header className="flex flex-col items-start justify-center gap-2 relative w-full">
          <h3 className="relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-xl md:text-2xl tracking-[0] leading-7 md:leading-8">
            Extra Services. Fully Covered
          </h3>
          <p className="relative flex items-center justify-start w-full [font-family:'Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0] leading-6 md:leading-7">
            Incorpify handles trademarks, PRO services, and license updates to keep you compliant and growing.
          </p>
        </header>

        {/* Features Grid */}
        <div className="flex flex-col items-start gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-xl)] relative w-full">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-3 relative w-full">
            {servicesRow1.map((service, featureIndex) => (
              <div
                key={featureIndex}
                className="flex flex-col items-start justify-center gap-1 relative flex-1 w-full"
              >
                <div className="flex items-center gap-3 md:gap-[var(--3-spacing-spacing-lg)] relative w-full">
                  <img
                    className="relative w-5 h-5 md:w-6 md:h-6"
                    alt={service.iconAlt}
                    src={service.icon}
                    aria-hidden="true"
                  />
                  <h4 className="relative text-left flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                    {service.title}
                  </h4>
                </div>
                <p className="relative text-left w-full [font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-3 relative w-full">
            {servicesRow2.map((service, featureIndex) => (
              <div
                key={featureIndex}
                className="flex flex-col items-start justify-center gap-1 md:gap-[var(--3-spacing-spacing-xs)] relative flex-1 w-full"
              >
                <div className="flex items-center gap-3 md:gap-[var(--3-spacing-spacing-lg)] relative w-full">
                  <img
                    className="relative w-5 h-5 md:w-6 md:h-6"
                    alt={service.iconAlt}
                    src={service.icon}
                    aria-hidden="true"
                  />
                  <h4 className="relative text-left flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                    {service.title}
                  </h4>
                </div>
                <p className="relative text-left w-full [font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full md:w-auto">
          <PrimaryCTA 
            ariaLabel="Get started with Extra Services"
            className="w-full md:w-auto"
          >
            Get Started
          </PrimaryCTA>
        </div>
      </section>

      {/* Image Section - Desktop only (right side) */}
      <aside
        className="hidden lg:flex relative flex-1 self-stretch rounded-[0px_40px_40px_0px] overflow-hidden border-l [border-left-style:solid] border-1-color-modes-component-colors-utility-purple-utility-purple-100"
        aria-label="Extra services preview"
      >
        <div className="relative w-full h-full">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt=""
            src="/img/111-1.png"
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center py-12 px-8">
            <img
              className="w-full h-auto max-h-full object-contain"
              alt="Extra services"
              src="/img/our-features/more.png"
            />
          </div>
        </div>
      </aside>
    </article>
  );
};

