"use client";

import React from "react";

export const IncorporationFeaturedTitle = (): JSX.Element => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-7xl)] px-4 md:px-8 py-20 md:py-28 lg:py-[200px] relative bg-white"
      aria-labelledby="ai-jurisdiction-heading"
    >
      <div className="inline-flex flex-col items-center justify-center relative gap-0 max-w-full">
        <h2
          id="ai-jurisdiction-heading"
          className="w-full max-w-[896px] mt-[-1.00px] relative bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-semibold text-transparent text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-8 md:leading-10 lg:leading-[44px] px-4"
        >
          Tell us about your business
        </h2>

        <p className="w-full max-w-[680px] relative bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-semibold text-transparent text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-8 md:leading-10 lg:leading-[44px] px-4">
          our AI recommends the ideal jurisdiction with clear timelines, setup
          costs, and key benefits.
        </p>

        {/* Decorative sparkle icons - positioned absolutely on larger screens */}
        <img
          className="hidden lg:block absolute top-[172px] left-[688px] w-[60px] h-[60px]"
          alt=""
          src="/img/component-4.svg"
          aria-hidden="true"
        />

        <img
          className="hidden lg:block absolute top-[-58px] left-[116px] w-[60px] h-[60px]"
          alt=""
          src="/img/component-6.svg"
          aria-hidden="true"
        />
      </div>

      {/* Decorative concentric circles */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[499px] lg:h-[500px] opacity-10"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[85.57%] h-[85.4%] rounded-[50%] border border-solid border-incorpifysecondary shadow-[0px_-0.39px_24.74px_#00000008] backdrop-blur-[11.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.6px)_brightness(100%)]" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[69.74%] h-[69.6%] rounded-[50%] border border-solid border-incorpifysecondary shadow-[0px_-0.39px_24.74px_#00000008] backdrop-blur-[11.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.6px)_brightness(100%)]" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[54.31%] h-[54.2%] rounded-[50%] border border-solid border-incorpifysecondary shadow-[0px_-0.39px_24.74px_#00000008] backdrop-blur-[11.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.6px)_brightness(100%)]" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[38.68%] h-[38.6%] rounded-[50%] border border-solid border-incorpifysecondary shadow-[0px_-0.39px_24.74px_#00000008] backdrop-blur-[11.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.6px)_brightness(100%)]" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full rounded-[50%] border border-solid border-incorpifysecondary shadow-[0px_-0.39px_24.74px_#00000008] backdrop-blur-[11.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.6px)_brightness(100%)]" />
      </div>
    </section>
  );
};

