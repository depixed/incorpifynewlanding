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
      className="absolute top-0 left-0 w-full h-[550px] md:h-[600px] lg:h-[468px] flex flex-col lg:flex-row items-stretch bg-white rounded-2xl lg:rounded-[32px] border border-solid border-1-color-modes-colors-foreground-fg-white shadow-[inset_0px_0px_1px_1px_#ffffff,0px_20px_20px_-4px_#00000003,0px_6.38px_6.38px_-3px_#00000008,0px_2.41px_2.41px_-2px_#0000000a,0px_0.8px_0.8px_-1px_#0000000a,0px_8px_8px_-4px_#10182808] overflow-hidden"
      style={{
        transform: `translateY(${finalTranslateY}vh)`,
        zIndex: zIndex,
        transition: 'transform 0.1s linear',
      }}
    >
      {/* Left Content Section */}
      <section className="flex flex-col w-full lg:w-[600px] items-start gap-6 md:gap-7 lg:gap-[var(--3-spacing-spacing-3xl)] p-6 md:p-8 lg:pt-[var(--3-spacing-spacing-4xl)] lg:pr-[var(--3-spacing-spacing-4xl)] lg:pb-[var(--3-spacing-spacing-4xl)] lg:pl-[var(--3-spacing-spacing-4xl)] relative">
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
        <div className="inline-flex items-start gap-2 relative">
          <PrimaryCTA ariaLabel="Get started with Extra Services">
            Get Started
          </PrimaryCTA>
        </div>
      </section>

      {/* Right Side - Service Details UI - Hidden on mobile, visible on tablet+ */}
      <aside
        className="hidden md:flex relative flex-1 self-stretch rounded-[0px_0px_16px_16px] md:rounded-[0px_20px_20px_0px] lg:rounded-[0px_40px_40px_0px] overflow-hidden border-l [border-left-style:solid] border-1-color-modes-component-colors-utility-purple-utility-purple-100"
        aria-label="Service selection interface"
      >
        <div className="relative w-full h-full">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt=""
            src="/img/111-1.png"
            aria-hidden="true"
          />

          {/* Service Selection UI Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[338px] h-[400px] flex flex-col gap-[18.6px]">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                className={`flex items-center gap-[7.53px] ${service.marginLeft} w-[303.86px] h-[62.97px] relative ${service.rotation || ""}`}
              >
                {/* Blur effects for first two items */}
                {(index === 0 || index === 1) && (
                  <div className="absolute top-0 left-0 w-[304px] h-[107px]">
                    <div className="top-[calc(50.00%_-_9px)] left-7 w-[276px] rounded-[138.12px/31.39px] absolute h-[63px] blur-[3.57px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(144,85,229,0.12)_0%,rgba(144,85,229,0)_100%)]" />
                    <div className={`top-[calc(50.00%_-_53px)] ${index === 0 ? 'left-0' : 'left-px'} w-[63px] rounded-[31.39px] absolute h-[63px] blur-[3.57px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(144,85,229,0.12)_0%,rgba(144,85,229,0)_100%)]`} />
                  </div>
                )}

                {/* Checkbox/Plus Icon */}
                <div
                  className={`${
                    service.isSelected
                      ? "relative w-[20.09px] h-[20.09px] rounded-[8369.97px] overflow-hidden shadow-shadows-shadow-xs-skeuomorphic bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] border-[color:var(--1-color-modes-component-colors-components-icons-featured-icons-modern-featured-icon-modern-border)]"
                      : "w-[20.09px] h-[20.09px] bg-white rounded-[8369.97px] border-[0.63px] border-solid border-incorpifyprimary shadow-shadows-shadow-xs-skeuomorphic relative overflow-hidden"
                  }`}
                >
                  <img
                    className="absolute top-[5px] left-[5px] w-2.5 h-2.5"
                    alt={service.isSelected ? "Check" : "Plus"}
                    src={
                      service.isSelected
                        ? "/img/check-1.svg"
                        : index === 2
                          ? "/img/plus-2.svg"
                          : index === 3
                            ? "/img/plus-1.svg"
                            : "/img/plus-2.svg"
                    }
                  />
                </div>

                {/* Service Card */}
                <div
                  className={`${
                    service.isSelected
                      ? index === 0
                        ? "mt-[-0.63px] mb-[-0.63px] flex w-[277.49px] items-start gap-[var(--3-spacing-spacing-xs)] pt-[var(--3-spacing-spacing-xl)] pr-[var(--3-spacing-spacing-xl)] pb-[var(--3-spacing-spacing-xl)] pl-[var(--3-spacing-spacing-xl)] relative mr-[-0.63px] bg-white rounded-[10.04px] border-[none] shadow-[0px_2.51px_3.77px_-1.26px_#10182808,0px_7.53px_10.04px_-2.51px_#10182814] before:content-[''] before:absolute before:inset-0 before:p-[0.63px] before:rounded-[10.04px] before:[background:linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                        : "mt-[-0.81px] mb-[-0.81px] flex w-[277.49px] items-start gap-[var(--3-spacing-spacing-xs)] pt-[var(--3-spacing-spacing-xl)] pr-[var(--3-spacing-spacing-xl)] pb-[var(--3-spacing-spacing-xl)] pl-[var(--3-spacing-spacing-xl)] relative mr-[-0.63px] bg-white rounded-[10.04px] border-[none] shadow-[0px_2.51px_3.77px_-1.26px_#10182808,0px_7.53px_10.04px_-2.51px_#10182814] before:content-[''] before:absolute before:inset-0 before:p-[0.63px] before:rounded-[10.04px] before:[background:linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                      : "flex w-[276.24px] items-start gap-[var(--3-spacing-spacing-xs)] pt-[var(--3-spacing-spacing-xl)] pr-[var(--3-spacing-spacing-xl)] pb-[var(--3-spacing-spacing-xl)] pl-[var(--3-spacing-spacing-xl)] relative mt-[-0.19px] mb-[-0.19px] bg-white rounded-[10.04px] border-[0.63px] border-solid border-1-color-modes-colors-border-border-secondary-duplicate"
                  }`}
                >
                  <div className="flex items-start gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
                    <div
                      className={`w-[25.11px] h-[25.11px] ${
                        service.isSelected
                          ? "bg-1-color-modes-colors-background-bg-brand-secondary rounded-[6.7px] shadow-[0px_0.63px_1.26px_#1018280d] relative overflow-hidden border-1-color-modes-colors-border-border-secondary"
                          : "bg-gray-50 rounded-[6.7px] border-[0.63px] border-solid border-gray-200 shadow-[0px_0.63px_1.26px_#1018280d] relative overflow-hidden"
                      }`}
                    >
                      <img
                        className="absolute top-1.5 left-1.5 w-[13px] h-[13px]"
                        alt={service.iconAlt}
                        src={service.icon}
                      />
                    </div>

                    <div className="flex flex-col items-start gap-[var(--3-spacing-spacing-xxs)] relative flex-1 grow">
                      <div className="inline-flex items-start gap-[var(--3-spacing-spacing-sm)] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-0.63px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-[10px] tracking-[0] leading-[15.1px] whitespace-nowrap">
                          {service.title}
                        </div>
                        {service.price && (
                          <div
                            className={`relative w-fit mt-[-0.63px] [font-family:'Inter',Helvetica] font-semibold ${
                              service.isSelected
                                ? "text-incorpify-primary"
                                : "text-gray-600"
                            } text-[10px] tracking-[0] leading-[15.1px] whitespace-nowrap`}
                          >
                            {service.price}
                          </div>
                        )}
                      </div>
                      <p
                        className={`relative self-stretch [font-family:'Inter',Helvetica] font-normal ${
                          service.isSelected
                            ? "text-gray-700"
                            : "text-gray-600"
                        } text-[8.8px] tracking-[0] leading-[12.6px]`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </article>
  );
};

