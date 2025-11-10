"use client";

import React from "react";
import Image from "next/image";

interface BankPartner {
  name: string;
  logo: string;
  alt: string;
}

interface BankPartnersProps {
  badge: {
    icon: string;
    text: string;
  };
  heading: string;
  partners: BankPartner[];
}

export const BankPartners = ({
  badge,
  heading,
  partners,
}: BankPartnersProps): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[var(--3-spacing-spacing-6xl)] pt-12 md:pt-16 lg:pt-[var(--3-spacing-spacing-9xl)] pb-12 md:pb-16 lg:pb-[var(--3-spacing-spacing-9xl)] px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="bank-partners-heading"
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
          id="bank-partners-heading"
          className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-[28px] md:text-[32px] lg:text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[36px] md:leading-[40px] lg:leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]"
        >
          {heading}
        </h2>
      </header>

      {/* Bank Partners Grid */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 relative w-full max-w-[1280px] mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full md:flex-1 max-w-[300px] px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 bg-gray-50 rounded-xl md:rounded-2xl border border-solid border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div className="relative w-full h-auto flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={200}
                height={80}
                className="w-full h-auto object-contain max-h-[60px] md:max-h-[80px]"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

