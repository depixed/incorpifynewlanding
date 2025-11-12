"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PrimaryCTA } from "./PrimaryCTA";

interface FeatureCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconAlt,
  title,
  description,
  isActive = false,
  onClick,
}) => {
  const bgClass = isActive
    ? "bg-incorpify-primary"
    : "bg-1-color-modes-colors-foreground-fg-white";
  const textColorClass = isActive ? "text-incorpify-primary" : "text-[#1d1834]"; // Dark purple for active, navy for others
  const descriptionColorClass = "text-gray-600"; // Gray for all descriptions
  const shadowClass = isActive
    ? "shadow-[inset_0px_0px_1px_1px_#ffffff,0px_20px_20px_-4px_#00000003,0px_6.38px_6.38px_-3px_#00000008,0px_2.41px_2.41px_-2px_#0000000a,0px_0.8px_0.8px_-1px_#0000000a,0px_4px_24px_6px_#1d18340a]"
    : "";

  return (
    <article
      onClick={onClick}
      className={`flex items-start gap-5 md:gap-6 lg:gap-8 p-4 md:p-5 lg:pt-[var(--3-spacing-spacing-3xl)] lg:pr-[var(--3-spacing-spacing-3xl)] lg:pb-[var(--3-spacing-spacing-3xl)] lg:pl-[var(--3-spacing-spacing-3xl)] relative w-full rounded-2xl overflow-hidden ${shadowClass} bg-[linear-gradient(180deg,rgba(254,254,254,0.5)_0%,rgba(255,255,255,0.5)_100%)] cursor-pointer transition-all hover:shadow-lg`}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div
        className={`relative w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex-shrink-0 ${bgClass} rounded-full overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-full before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
      >
        <img
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 transition-all duration-300 ${
            isActive 
              ? "brightness-0 invert filter" 
              : "brightness-0 opacity-40 filter"
          }`}
          alt={iconAlt}
          src={icon}
        />
      </div>

      <div className="flex flex-col justify-center gap-3 md:gap-4 lg:gap-[var(--3-spacing-spacing-xl)] flex-1">
        <div className="flex flex-col items-start gap-1.5 md:gap-2 lg:gap-[var(--3-spacing-spacing-xs)] w-full">
          <h3
            className={`relative text-left w-full mt-[-1.00px] font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] ${textColorClass} text-base md:text-lg lg:text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]`}
          >
            {title}
          </h3>

          <p
            className={`relative text-left w-full font-text-md-regular font-[number:var(--text-md-regular-font-weight)] ${descriptionColorClass} text-sm md:text-base lg:text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[1.5] [font-style:var(--text-md-regular-font-style)] line-clamp-2 min-h-[3em]`}
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

interface Feature {
  id: string;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  image: string;
  background?: string;
  overlayImage?: string;
}

export const WhyIncorpify = (): JSX.Element => {
  const [activeFeatureId, setActiveFeatureId] = useState("3x-faster");

  const features: Feature[] = [
    {
      id: "3x-faster",
      icon: "/img/zap-fast.svg",
      iconAlt: "Zap fast",
      title: "3x Faster Setup",
      description:
        "Form your company with AI guidance, saving time and cutting costs.",
      image: "/img/why-choose-us/3x faster.png",
      background: "/img/why-choose-us/bg Variant=1.png",
      overlayImage: "/img/why-choose-us/with 3x faster.png",
    },
    {
      id: "all-in-one",
      icon: "/img/intersect-square.svg",
      iconAlt: "Intersect square",
      title: "All-in-One Platform",
      description:
        "Manage everything from setup to scale in one seamless place.",
      image: "/img/why-choose-us/all in one.png",
      background: "/img/why-choose-us/bg Variant=2.png",
    },
    {
      id: "zero-paperwork",
      icon: "/img/file-check-03.svg",
      iconAlt: "File check",
      title: "Zero Paperwork, Full Clarity",
      description: "Streamline processes with complete transparency.",
      image: "/img/why-choose-us/zero paperwor.png",
      background: "/img/why-choose-us/bg Variant=3.png",
    },
    {
      id: "trusted",
      icon: "/img/heart-hand.svg",
      iconAlt: "Heart hand",
      title: "Trusted & Proven",
      description:
        "Backed by elite technology and trusted by 550+ satisfied clients.",
      image: "/img/why-choose-us/trusted and proven.png",
      background: undefined, // No background for this one
    },
  ];

  const activeFeature = features.find((f) => f.id === activeFeatureId) || features[0];

  return (
    <section
      className="flex flex-col items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24 px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="why-incorpify-heading"
    >
      {/* Background blur effect */}
      <div
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-px w-full max-w-[1080px] h-[800px] rounded-[540px/400px] blur-[60.49px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(29,24,52,0.12)_0%,rgba(29,24,52,0)_100%)]"
        aria-hidden="true"
      />

      <header className="flex flex-col items-center gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-3xl)] relative w-full max-w-[1280px] z-10">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[var(--3-spacing-spacing-md)] py-2 md:py-2.5 lg:pt-[var(--3-spacing-spacing-md)] px-3 md:px-4 lg:pr-[var(--3-spacing-spacing-lg)] lg:pb-[var(--3-spacing-spacing-md)] lg:pl-[var(--3-spacing-spacing-lg)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8">
          <img
            className="relative w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6"
            alt=""
            src="/img/check-circle-broken.svg"
            aria-hidden="true"
          />

          <div className="inline-flex flex-col items-start relative">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-incorpify-primary text-xs md:text-sm lg:text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
              Why Choose Us
            </span>
          </div>

          <div
            className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
            aria-hidden="true"
          />
        </div>

        {/* Heading */}
        <h1
          id="why-incorpify-heading"
          className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-2xl md:text-3xl lg:text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[32px] md:leading-[40px] lg:leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)] px-4 md:px-8"
        >
          Everything you need, all in one place with Incorpify
        </h1>
      </header>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1280px] items-start gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl-duplicate)] relative z-10">
        {/* Dynamic Image with Background - Visible on all screens */}
        <div className="relative w-full lg:w-[616px] lg:flex-shrink-0">
          <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:min-h-[616px]">
            {/* Background Image (if exists) - Full Height */}
            {activeFeature.background && (
              <div className="absolute inset-0 z-0">
                <Image
                  className="w-full h-full object-cover"
                  alt=""
                  src={activeFeature.background}
                  width={616}
                  height={616}
                  priority
                  aria-hidden="true"
                />
              </div>
            )}
            {/* Feature Image */}
            <div className="relative z-10">
              <Image
                key={activeFeatureId}
                className="relative w-full h-auto transition-opacity duration-500 ease-in-out"
                alt={`${activeFeature.title} - Incorpify platform feature`}
                src={activeFeature.image}
                width={616}
                height={616}
                priority
              />
            </div>
            {/* Overlay Image (if exists) - Left Center */}
            {activeFeature.overlayImage && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                <Image
                  key={`overlay-${activeFeatureId}`}
                  className="relative transition-opacity duration-500 ease-in-out"
                  alt=""
                  src={activeFeature.overlayImage}
                  width={200}
                  height={200}
                  priority
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </div>

        {/* Features and CTA Section */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl)] flex-1 w-full">
          {/* Feature Cards */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-3xl)] w-full">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                iconAlt={feature.iconAlt}
                title={feature.title}
                description={feature.description}
                isActive={feature.id === activeFeatureId}
                onClick={() => setActiveFeatureId(feature.id)}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 lg:gap-[var(--3-spacing-spacing-lg-duplicate)] w-full sm:w-auto">
            <PrimaryCTA ariaLabel="Get started with Incorpify">
              Get Started
            </PrimaryCTA>

            <button
              className="flex items-center justify-center gap-2 md:gap-2.5 h-12 md:h-14 lg:h-[56px] px-5 md:px-6 lg:px-[22px] relative rounded-lg overflow-hidden cursor-pointer bg-transparent border-none hover:bg-gray-50 transition-colors"
              type="button"
              aria-label="Schedule a meeting with Incorpify"
            >
              <span className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative">
                <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-incorpify-primary text-sm md:text-base lg:text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                  Schedule Meeting
                </span>
              </span>

              <svg
                className="relative w-5 h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-incorpify-primary"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

