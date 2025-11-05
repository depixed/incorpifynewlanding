"use client";

import React from "react";
import Image from "next/image";

export interface Feature {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  containerWidth?: string; // e.g., "w-full lg:w-[calc(45%-12px)]" for asymmetric layouts
  imageStyles: string; // Desktop positioning styles
  mobileImageStyles: string; // Mobile responsive styles
  specialRender?: "financial-insights" | "audits" | "default"; // Special rendering for specific card types
}

interface Badge {
  icon: string;
  text: string;
}

interface ServiceOurFeaturesProps {
  badge: Badge;
  heading: string;
  features: Feature[];
  layout?: "2-cards" | "4-cards" | "6-cards"; // Number of cards
}

export const ServiceOurFeatures = ({
  badge,
  heading,
  features,
  layout = "6-cards",
}: ServiceOurFeaturesProps): JSX.Element => {
  const renderFeatureCard = (feature: Feature, index: number) => {
    const isFinancialInsights = feature.specialRender === "financial-insights";
    const isAudits = feature.specialRender === "audits";

    return (
      <article
        key={index}
        className={`${
          feature.containerWidth || "w-full"
        } flex flex-col min-h-[350px] md:min-h-[400px] lg:h-[420px] items-start gap-4 md:gap-6 p-4 md:p-6 relative rounded-2xl lg:rounded-3xl overflow-hidden bg-white shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] border border-solid border-gray-200`}
      >
        <div className="relative flex-1 self-stretch w-full bg-gray-50 rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-solid border-gray-100">
          {/* Background gradient blur */}
          <div
            className={`hidden lg:block absolute top-0 left-[calc(50%_-_504px)] w-[1008px] h-[780px] rounded-[504px/390px] blur-[56.25px] ${
              index === 1 || index === 5
                ? "[background:radial-gradient(50%_50%_at_42%_50%,rgba(29,24,52,0.04)_0%,rgba(29,24,52,0)_100%)]"
                : "[background:radial-gradient(50%_50%_at_42%_50%,rgba(150,91,228,0.04)_0%,rgba(150,91,228,0)_100%)]"
            }`}
          />

          {/* Desktop Image Rendering with special cases */}
          {isFinancialInsights ? (
            <div className="hidden lg:flex flex-col w-[400px] items-start justify-center gap-[10.43px] absolute top-[41px] left-[calc(50%_-_220px)] rounded-[10.69px] overflow-hidden border-[0.43px] border-solid border-1-color-modes-colors-border-border-secondary rotate-[4deg] shadow-[0px_7.13px_7.13px_-3.56px_#10182808,0px_17.82px_21.38px_-3.56px_#10182814] backdrop-blur-[9.27px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9.27px)_brightness(100%)]">
              <img
                className={feature.imageStyles}
                alt={feature.imageAlt}
                src={feature.image}
              />
            </div>
          ) : isAudits ? (
            <div className="hidden lg:inline-flex flex-col items-start p-[7.17px] absolute top-[calc(50%_-_102px)] left-[calc(50%_-_215px)] bg-[#1d18340f] rounded-[16.73px] overflow-hidden border border-solid border-1-color-modes-colors-foreground-fg-white shadow-[0px_0.72px_1.43px_#1018280f,0px_0.72px_2.15px_#1018281a] backdrop-blur-[7.17px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.17px)_brightness(100%)]">
              <img
                className={feature.imageStyles}
                alt={feature.imageAlt}
                src={feature.image}
              />
            </div>
          ) : (
            <img
              className={`hidden lg:block ${feature.imageStyles}`}
              alt={feature.imageAlt}
              src={feature.image}
            />
          )}

          {/* Mobile/Tablet Image Rendering */}
          <div className="lg:hidden flex items-center justify-center w-full h-full p-4">
            <Image
              className={feature.mobileImageStyles}
              alt={feature.imageAlt}
              src={feature.image}
              width={400}
              height={300}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 md:gap-6 px-2 md:pr-[var(--3-spacing-spacing-md-duplicate)] md:pl-[var(--3-spacing-spacing-md-duplicate)] py-0 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2 md:gap-[var(--3-spacing-spacing-md)] relative self-stretch w-full">
            <h3 className="relative self-stretch mt-[-1.00px] font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-incorpify-primary text-lg md:text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-7 md:leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]">
              {feature.title}
            </h3>

            <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-sm md:text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-5 md:leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
              {feature.description}
            </p>
          </div>
        </div>
      </article>
    );
  };

  // Render layout based on number of cards
  const renderLayout = () => {
    switch (layout) {
      case "2-cards":
        // Single row with 2 cards
        return (
          <div className="flex flex-col lg:flex-row items-start gap-6 relative self-stretch w-full">
            {features.map((feature, index) => renderFeatureCard(feature, index))}
          </div>
        );

      case "4-cards":
        // Two rows with 2 cards each
        return (
          <>
            <div className="flex flex-col lg:flex-row items-start gap-6 relative self-stretch w-full">
              {features
                .slice(0, 2)
                .map((feature, index) => renderFeatureCard(feature, index))}
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-6 relative self-stretch w-full">
              {features
                .slice(2, 4)
                .map((feature, index) => renderFeatureCard(feature, index + 2))}
            </div>
          </>
        );

      case "6-cards":
      default:
        // Three rows with 2 cards each (asymmetric Bento layout)
        return (
          <>
            <div className="flex flex-col lg:flex-row items-start gap-6 relative self-stretch w-full">
              {features
                .slice(0, 2)
                .map((feature, index) => renderFeatureCard(feature, index))}
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-6 relative self-stretch w-full">
              {features
                .slice(2, 4)
                .map((feature, index) => renderFeatureCard(feature, index + 2))}
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-6 relative self-stretch w-full">
              {features
                .slice(4, 6)
                .map((feature, index) => renderFeatureCard(feature, index + 4))}
            </div>
          </>
        );
    }
  };

  return (
    <section
      className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[var(--3-spacing-spacing-6xl)] pt-12 md:pt-16 lg:pt-[var(--3-spacing-spacing-9xl)] pb-12 md:pb-16 lg:pb-[var(--3-spacing-spacing-9xl)] px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="features-heading"
    >
      {/* Section Header */}
      <header className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-3xl-duplicate)] relative w-full max-w-[1280px] mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-[var(--3-spacing-spacing-md)] pt-[var(--3-spacing-spacing-md)] pr-[var(--3-spacing-spacing-lg)] pb-[var(--3-spacing-spacing-md)] pl-[var(--3-spacing-spacing-lg)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)]">
          <img
            className="relative w-5 h-5 md:w-6 md:h-6"
            alt=""
            src={badge.icon}
            aria-hidden="true"
          />

          <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-incorpify-primary text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
            {badge.text}
          </span>

          {/* Decorative line */}
          <div
            className="absolute top-0 left-[calc(50%_-_44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
            aria-hidden="true"
          />
        </div>

        {/* Main Heading */}
        <h2
          id="features-heading"
          className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-[28px] md:text-[32px] lg:text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[36px] md:leading-[40px] lg:leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]"
        >
          {heading}
        </h2>
      </header>

      {/* Features Grid - Dynamic Bento Layout */}
      <div className="flex flex-col items-center gap-6 relative w-full max-w-[1280px] mx-auto">
        {renderLayout()}
      </div>
    </section>
  );
};

