"use client";

import React from "react";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  alt: string;
}

interface BackedByProps {
  badge: {
    icon: string;
    text: string;
  };
  heading: string;
  description: string;
  partners: Partner[];
}

export const BackedBy = ({
  badge,
  heading,
  description,
  partners,
}: BackedByProps): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[var(--3-spacing-spacing-6xl)] pt-12 md:pt-16 lg:pt-[var(--3-spacing-spacing-9xl)] pb-12 md:pb-16 lg:pb-[var(--3-spacing-spacing-9xl)] px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="backed-by-heading"
    >
      {/* Section Header */}
      <header className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-3xl-duplicate)] relative w-full max-w-[1280px] mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 pt-2 pr-3 pb-2 pl-3 relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)]">
          <img
            className="relative w-5 h-5 md:w-6 md:h-6"
            alt=""
            src={badge.icon}
            aria-hidden="true"
          />

          <span className="relative w-fit mt-[-1px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-incorpify-primary text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
            {badge.text}
          </span>

          {/* Decorative line */}
          <div
            className="absolute top-0 left-[calc(50%-44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
            aria-hidden="true"
          />
        </div>

        {/* Main Heading */}
        <h2
          id="backed-by-heading"
          className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-[28px] md:text-[32px] lg:text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[36px] md:leading-[40px] lg:leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]"
        >
          {heading}
        </h2>

        {/* Description */}
        <p className="relative w-full max-w-[600px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-sm md:text-base lg:text-[length:var(--text-md-regular-font-size)] text-center tracking-[var(--text-md-regular-letter-tracking)] leading-5 md:leading-6 lg:leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
          {description}
        </p>
      </header>

      {/* Partners Grid Container */}
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 relative w-full">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-4 md:px-6 lg:px-8 py-6 md:py-8 bg-white rounded-xl md:rounded-2xl border border-solid border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:border-gray-300 hover:shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] transition-all"
            >
              <div className="relative w-full h-auto flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={150}
                  height={60}
                  className="w-full h-auto object-contain max-h-[50px] md:max-h-[60px] grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

