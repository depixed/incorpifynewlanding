"use client";

import React from "react";
import { PrimaryCTA } from "./PrimaryCTA";

export const ReadyToLaunch = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-12 md:pt-16 lg:pt-[var(--3-spacing-spacing-7xl)] pb-12 md:pb-16 lg:pb-[var(--3-spacing-spacing-7xl)] px-4 md:px-8 lg:px-20 relative bg-white overflow-hidden"
      aria-labelledby="review-heading"
    >
      {/* Background blur effects */}
      <div
        className="right-0 md:right-[100px] lg:right-[666px] absolute top-1/2 -translate-y-1/2 w-[500px] md:w-[600px] lg:w-[700px] h-[350px] md:h-[425px] lg:h-[500px] rounded-[250px/175px] md:rounded-[300px/212.5px] lg:rounded-[350px/250px] blur-[40px] md:blur-[48px] lg:blur-[56.25px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(115,35,219,1)_0%,rgba(115,35,219,0)_100%)] opacity-[0.12]"
        aria-hidden="true"
      />

      <div
        className="left-0 md:left-[-50px] lg:left-[-74px] absolute top-1/2 -translate-y-1/2 w-[500px] md:w-[600px] lg:w-[700px] h-[350px] md:h-[425px] lg:h-[500px] rounded-[250px/175px] md:rounded-[300px/212.5px] lg:rounded-[350px/250px] blur-[40px] md:blur-[48px] lg:blur-[56.25px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(115,35,219,1)_0%,rgba(115,35,219,0)_100%)] opacity-[0.12]"
        aria-hidden="true"
      />

      <div className="flex flex-col items-start relative w-full max-w-[1280px]">
        <article className="flex items-center justify-center pt-8 md:pt-10 lg:pt-[var(--3-spacing-spacing-6xl-duplicate)] pr-6 md:pr-8 lg:pr-[var(--3-spacing-spacing-6xl-duplicate)] pb-8 md:pb-10 lg:pb-[var(--3-spacing-spacing-6xl-duplicate)] pl-6 md:pl-8 lg:pl-[var(--3-spacing-spacing-6xl-duplicate)] relative self-stretch w-full bg-incorpifyprimary rounded-3xl md:rounded-[32px] lg:rounded-[40px] overflow-hidden">
          {/* Top pattern image */}
          <div
            className="absolute w-full h-[46.00%] top-0 left-0 bg-[url(/img/1xoqma4saawbcrdkisjfixups-png.png)] bg-cover bg-[50%_50%] opacity-100"
            aria-hidden="true"
          />

          {/* Bottom pattern image */}
          <div className="flex flex-col w-full h-[300px] md:h-[350px] lg:h-[400px] items-start justify-center absolute top-0 left-0 opacity-40">
            <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
              <div
                className="relative flex-1 self-stretch w-full grow bg-[url(/img/image.png)] bg-cover bg-[50%_50%]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Border overlay */}
          <div
            className="absolute w-full h-full top-0 left-0 rounded-[16px] md:rounded-[18px] lg:rounded-[20px] border border-solid border-[#ffffff12]"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="flex flex-col w-full max-w-[680px] items-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl)] relative z-10">
            <header className="flex flex-col items-center gap-5 md:gap-6 lg:gap-[var(--nubien-framer-website-item-spacing-30)] relative self-stretch w-full">
              {/* Badge */}
              <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[var(--3-spacing-spacing-md)] py-2 md:py-2.5 lg:pt-[var(--3-spacing-spacing-md)] px-3 md:px-4 lg:pr-[var(--3-spacing-spacing-lg)] lg:pb-[var(--3-spacing-spacing-md)] lg:pl-[var(--3-spacing-spacing-lg)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-1-color-modes-colors-text-text-primary-on-brand text-sm tracking-[0] leading-5 whitespace-nowrap">
                      Become a Part of Us
                    </p>
                  </div>
                </div>

                <div
                  className="absolute top-0 left-[calc(50.00%_-_44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
                  aria-hidden="true"
                />
              </div>

              <h2
                id="review-heading"
                className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[-1.44px] leading-9 md:leading-10 lg:leading-[60px]"
              >
                Ready to Launch and Scale Faster with AI?
              </h2>
            </header>

            <div className="flex flex-col w-full max-w-[520px] items-center relative">
              <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[color:var(--1-color-modes-colors-text-text-white-duplicate)] text-xs md:text-sm text-center tracking-[0] leading-[18px] md:leading-5">
                Take the next step today—form your company, streamline
                compliance, and unlock growth with Incorpify.
              </p>
            </div>

            {/* CTA Buttons */}
            <nav className="flex flex-col items-center justify-center relative self-stretch w-full">
              <div className="inline-flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative">
                <button
                  className="flex w-full md:w-[180px] h-12 md:h-14 items-center justify-center gap-2.5 pt-3 md:pt-[var(--3-spacing-spacing-xl)] pb-3 md:pb-[var(--3-spacing-spacing-xl)] px-5 md:px-[22px] relative bg-white rounded-xl overflow-hidden border border-solid border-gray-200 shadow-shadows-shadow-xs-skeuemorphic cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                  type="button"
                  aria-label="Get started with Incorpify"
                >
                  <div className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-base md:text-lg tracking-[0] leading-6 md:leading-7 whitespace-nowrap">
                      Get started
                    </span>
                  </div>
                </button>

                <button
                  className="flex w-full md:w-[181px] h-12 md:h-14 items-center justify-center gap-2.5 pt-3 md:pt-[var(--3-spacing-spacing-xl)] pb-3 md:pb-[var(--3-spacing-spacing-xl)] px-5 md:px-[22px] relative rounded-xl overflow-hidden border border-solid border-1-color-modes-colors-foreground-fg-white shadow-shadows-shadow-xs-skeuemorphic cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-1-color-modes-colors-foreground-fg-white"
                  type="button"
                  aria-label="Request a demo of Incorpify"
                >
                  <div className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-base md:text-lg tracking-[0] leading-6 md:leading-7 whitespace-nowrap">
                      Request demo
                    </span>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </section>
  );
};

