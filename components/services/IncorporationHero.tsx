"use client";

import React from "react";
import Image from "next/image";
import { PrimaryCTA } from "../PrimaryCTA";

export const IncorporationHero = (): JSX.Element => {
  const handleGetStartedClick = () => {
    console.log("Get Started button clicked");
  };

  return (
    <section
      className="flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-[var(--3-spacing-spacing-11xl)] pr-4 md:pr-8 lg:pr-[var(--3-spacing-spacing-8xl)] pl-4 md:pl-8 lg:pl-[var(--3-spacing-spacing-8xl)] pb-12 md:pb-14 lg:pb-16 relative bg-incorpifyprimary"
      aria-label="Hero section"
    >
      {/* Background pattern - optional, keeping for potential future use */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-px w-full max-w-[1950px] h-[1300px] aspect-[1.5] opacity-5"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl)] px-4 md:px-8 lg:px-[100px] py-0 flex flex-col items-center relative w-full">
        <div className="justify-center gap-8 md:gap-9 lg:gap-10 self-stretch flex flex-col items-center relative w-full">
          <header className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full mt-16 md:mt-20 lg:mt-24">
            <h1 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-1-color-modes-colors-text-text-primary-on-brand text-3xl md:text-4xl lg:text-5xl text-center tracking-[-1.44px] leading-9 md:leading-10 lg:leading-[60px]">
              Set up your Company powered by AI
            </h1>

            <p className="relative flex items-center justify-center self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-component-colors-utility-gray-utility-gray-300 text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 md:leading-7 lg:leading-[30px]">
              Company formation in the UAE, KSA, Kuwait, Qatar and more.
              Seamless, digital, and fast.
            </p>
          </header>

          <div className="inline-flex items-start gap-2 relative">
            <button
              type="button"
              onClick={handleGetStartedClick}
              className="inline-flex items-center justify-center gap-2 md:gap-[var(--3-spacing-spacing-sm)] px-6 md:px-8 py-2 md:py-2.5 relative bg-1-color-modes-colors-foreground-fg-white rounded-xl overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Get started with company formation"
            >
              <span className="inline-flex items-center justify-center px-2 py-0 relative">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-incorpifyprimary text-sm md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
                  Get Started Now
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <figure className="inline-flex flex-col items-start pt-4 md:pt-5 lg:pt-[var(--3-spacing-spacing-xl)] pr-4 md:pr-5 lg:pr-[var(--3-spacing-spacing-xl)] pb-4 md:pb-5 lg:pb-[var(--3-spacing-spacing-xl)] pl-4 md:pl-5 lg:pl-[var(--3-spacing-spacing-xl)] relative bg-[#473f7066] rounded-2xl md:rounded-3xl lg:rounded-[32px] overflow-hidden border border-solid border-incorpifyprimary shadow-[0px_46.56px_93.11px_-17.46px_#10182824] max-w-full">
        <Image
          className="relative w-full max-w-[982.98px] h-auto object-cover"
          alt="Company formation platform interface showing free zone options including IFZA, Meydan City, and Dubai Multi Commodities Centre"
          src="/img/tv-316.png"
          width={983}
          height={645}
          priority
        />
      </figure>
    </section>
  );
};

