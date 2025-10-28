"use client";

import React from "react";
import Image from "next/image";
import { PrimaryCTA } from "./PrimaryCTA";

interface Feature {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface ServiceFeatureCardProps {
  category: string;
  categoryIcon: string;
  title: string;
  description: string;
  features: Feature[];
  backgroundImage: string;
  foregroundImage: string;
  ctaText: string;
  cardIndex: number;
  scrollProgress: number;
  totalCards: number;
}

export const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({
  category,
  categoryIcon,
  title,
  description,
  features,
  backgroundImage,
  foregroundImage,
  ctaText,
  cardIndex,
  scrollProgress,
  totalCards,
}) => {
  // Calculate the vertical position based on scroll progress
  // Each card starts at 100vh below and slides up as you scroll
  const cardProgress = scrollProgress - cardIndex;
  const translateY = Math.max(0, Math.min(1, 1 - cardProgress)) * 100;
  
  // First card is always at position 0 (top)
  const finalTranslateY = cardIndex === 0 ? 0 : translateY;
  
  // Z-index increases with card index so later cards appear on top
  const zIndex = 10 + cardIndex;

  return (
    <article
      className="absolute top-0 left-0 w-full h-[550px] md:h-[600px] lg:h-[468px] flex flex-col lg:flex-row items-stretch bg-white rounded-2xl lg:rounded-[32px] border border-solid border-1-color-modes-colors-foreground-fg-white shadow-[inset_0px_0px_1px_1px_#ffffff,0px_20px_20px_-4px_#00000003,0px_6.38px_6.38px_-3px_#00000008,0px_2.41px_2.41px_-2px_#0000000a,0px_0.8px_0.8px_-1px_#0000000a,0px_8px_8px_-4px_#10182808] overflow-hidden"
      style={{
        transform: `translateY(${finalTranslateY}vh)`,
        zIndex: zIndex,
        transition: 'transform 0.1s linear',
      }}
    >
      {/* Content Section */}
      <section className="flex flex-col w-full lg:w-[600px] items-start gap-6 md:gap-7 lg:gap-[var(--3-spacing-spacing-3xl)] p-6 md:p-8 lg:pt-[var(--3-spacing-spacing-4xl)] lg:pr-[var(--3-spacing-spacing-4xl)] lg:pb-[var(--3-spacing-spacing-4xl)] lg:pl-[var(--3-spacing-spacing-4xl)] relative">
        {/* Category Badge */}
        <div className="inline-flex items-start gap-2 md:gap-[var(--3-spacing-spacing-md)] relative">
          <div className="inline-flex items-center justify-center gap-2 md:gap-[var(--3-spacing-spacing-xs)] px-3 md:px-3.5 py-2 md:py-2.5 relative rounded-full overflow-hidden bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8 border-1-color-modes-component-colors-components-buttons-secondary-button-secondary-border">
            <img
              className="relative w-4 h-4 md:w-5 md:h-5"
              alt={categoryIcon}
              src={categoryIcon}
              aria-hidden="true"
            />

            <div className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#344054] text-xs md:text-sm tracking-[0] leading-5 whitespace-nowrap">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <header className="flex flex-col items-start justify-center gap-2 relative w-full">
          <h3 className="relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-xl md:text-2xl tracking-[0] leading-7 md:leading-8">
            {title}
          </h3>

          <p className="relative flex items-center justify-start w-full [font-family:'Inter',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0] leading-6 md:leading-7">
            {description}
          </p>
        </header>

        {/* Features Grid */}
        <div className="flex flex-col items-start gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-xl)] relative w-full">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-3 relative w-full">
            {features.slice(0, 2).map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex flex-col items-start justify-center gap-1 relative flex-1 w-full"
              >
                <div className="flex items-center gap-3 md:gap-[var(--3-spacing-spacing-lg)] relative w-full">
                  <img
                    className="relative w-5 h-5 md:w-6 md:h-6"
                    alt={feature.iconAlt}
                    src={feature.icon}
                    aria-hidden="true"
                  />

                  <h4 className="relative text-left flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                    {feature.title}
                  </h4>
                </div>

                <p className="relative text-left w-full [font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-3 relative w-full">
            {features.slice(2, 4).map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex flex-col items-start justify-center gap-1 md:gap-[var(--3-spacing-spacing-xs)] relative flex-1 w-full"
              >
                <div className="flex items-center gap-3 md:gap-[var(--3-spacing-spacing-lg)] relative w-full">
                  <img
                    className="relative w-5 h-5 md:w-6 md:h-6"
                    alt={feature.iconAlt}
                    src={feature.icon}
                    aria-hidden="true"
                  />

                  <h4 className="relative text-left flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                    {feature.title}
                  </h4>
                </div>

                <p className="relative text-left w-full [font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="inline-flex items-start gap-2 relative">
          <PrimaryCTA ariaLabel={`Get started with ${category}`}>
            {ctaText}
          </PrimaryCTA>
        </div>
      </section>

      {/* Image Section - Hidden on mobile, visible on tablet+ */}
      <aside
        className="hidden md:flex relative flex-1 self-stretch rounded-[0px_0px_16px_16px] md:rounded-[0px_20px_20px_0px] lg:rounded-[0px_40px_40px_0px] overflow-hidden border-l [border-left-style:solid] border-1-color-modes-component-colors-utility-purple-utility-purple-100"
        aria-label={`${category} dashboard preview`}
      >
        <div className="relative w-full h-full">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt=""
            src={backgroundImage}
            aria-hidden="true"
          />

          <Image
            className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[20px] w-[80%] md:w-[462px] h-auto"
            alt={`Dashboard interface showing ${category} features`}
            src={foregroundImage}
            width={462}
            height={405}
            priority
          />
        </div>
      </aside>
    </article>
  );
};

