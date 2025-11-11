"use client";

import React from "react";
import Image from "next/image";

interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const OtherServicesList = (): JSX.Element => {
  const serviceCards: ServiceCard[] = [
    {
      id: "office-space",
      icon: "/img/building-07.svg",
      title: "Office Space Solutions",
      description: "Get a complete business address and office space access in the UAE and KSA.",
    },
    {
      id: "trademark",
      icon: "/img/certificate-02.svg",
      title: "Trademark Registration",
      description: "Secure your brand integrity with fast and easy trademark filing.",
    },
    {
      id: "pro-services",
      icon: "/img/clipboard-check.svg",
      title: "PRO Services",
      description: "Government liaison for visas, licenses, and government clearances.",
    },
    {
      id: "will-drafting",
      icon: "/img/file-05.svg",
      title: "Will Drafting",
      description: "Create legally valid wills, tailored for expats and residents' needs.",
    },
    {
      id: "corporate-nominee",
      icon: "/img/briefcase-01.svg",
      title: "Corporate Nominee",
      description: "Appoint a local nominee director while maintaining full control securely.",
    },
    {
      id: "trade-license",
      icon: "/img/file-07.svg",
      title: "Trade License Amendments",
      description: "Update your trade license to add/remove shareholders, activities, or details.",
    },
    {
      id: "establishment-labor",
      icon: "/img/file-check-03.svg",
      title: "Establishment & Labor Card",
      description: "Apply for company and labor cards to hire legally in the GCC.",
    },
    {
      id: "license-liquidation",
      icon: "/img/certificate-02.svg",
      title: "License Liquidation",
      description: "License liquidation to be moved right after PRO services.",
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-[var(--3-spacing-spacing-7xl)] pb-16 md:pb-20 lg:pb-[var(--3-spacing-spacing-7xl)] px-4 md:px-8 lg:px-[var(--3-spacing-spacing-8xl)] relative bg-white"
      aria-labelledby="services-heading"
    >
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12 relative w-full max-w-[1280px]">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-3xl)] relative w-full max-w-[800px]">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[var(--3-spacing-spacing-md)] py-2 md:py-2.5 lg:pt-[var(--3-spacing-spacing-md)] px-3 md:px-4 lg:pr-[var(--3-spacing-spacing-lg)] lg:pb-[var(--3-spacing-spacing-md)] lg:pl-[var(--3-spacing-spacing-lg)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8">
            <img
              className="relative w-5 h-5 md:w-6 md:h-6"
              alt=""
              src="/img/server-06.svg"
              aria-hidden="true"
            />

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Services
                </span>
              </div>
            </div>

            <div
              className="absolute top-0 left-[calc(50.00%_-_44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
              aria-hidden="true"
            />
          </div>

          {/* Heading */}
          <h2
            id="services-heading"
            className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-8 md:leading-10 lg:leading-[44px]"
          >
            Explore Our Extra Business Services
          </h2>

          {/* Description */}
          <p className="relative w-full max-w-[600px] [font-family:'Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg text-center leading-6 md:leading-7 tracking-[0]">
            Comprehensive add-on solutions designed to simplify every step of your business journey.
          </p>
        </header>

        {/* Main Content - Two Columns */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1080px] items-start gap-6 md:gap-8 lg:gap-12 relative">
          {/* Left Column - Sticky Image */}
          <div className="relative w-full lg:w-auto lg:flex-1 flex items-start justify-center lg:sticky lg:top-24 lg:self-start">
            <figure className="relative w-full max-w-[500px] lg:max-w-none rounded-2xl lg:rounded-3xl overflow-hidden border border-solid border-gray-200 shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]">
              <div className="relative w-full aspect-[1740/2136]">
                <Image
                  className="relative w-full h-full object-cover"
                  alt="Office space with business professionals working"
                  src="/img/other-services-services.png"
                  width={1740}
                  height={2136}
                  priority
                />
              </div>
            </figure>
          </div>

          {/* Right Column - Scrollable Service Cards */}
          <div
            className="flex flex-col w-full lg:w-auto lg:flex-1 gap-4 md:gap-6 relative max-h-[800px] overflow-y-auto pr-2 custom-scrollbar"
            role="list"
          >
            {serviceCards.map((card) => (
              <article
                key={card.id}
                className="flex flex-row items-start gap-4 md:gap-5 p-6 md:p-8 relative self-stretch w-full bg-gray-50 rounded-2xl lg:rounded-3xl overflow-hidden border border-solid border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex-shrink-0"
                role="listitem"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-incorpify-primary flex items-center justify-center">
                  <img
                    className="relative w-6 h-6 md:w-7 md:h-7 filter brightness-0 invert"
                    alt=""
                    src={card.icon}
                    aria-hidden="true"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col items-start gap-2 relative flex-1 w-full">
                  <h3 className="relative self-stretch mt-[-1px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-xl md:text-2xl leading-7 md:leading-8 tracking-[0]">
                    {card.title}
                  </h3>
                  <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg leading-6 md:leading-7 tracking-[0]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

