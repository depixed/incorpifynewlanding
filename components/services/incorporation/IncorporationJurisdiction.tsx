"use client";

import React from "react";

interface JurisdictionCard {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
}

export const IncorporationJurisdiction = (): JSX.Element => {
  const jurisdictionCards: JurisdictionCard[] = [
    {
      id: "uae-mainland",
      title: "UAE Mainland",
      description: "Full local access with wide legal freedom",
      backgroundImage: "/img/incorporation-jurisdiction-card-1.png",
    },
    {
      id: "uae-freezone",
      title: "UAE Freezone",
      description: "100% ownership, minimal taxes",
      backgroundImage: "/img/incorporation-jurisdiction-card-2.png",
    },
    {
      id: "saudi-arabia",
      title: "Saudi Arabia",
      description: "Tap into the fastest-growing GCC economy",
      backgroundImage: "/img/incorporation-jurisdiction-card-3.png",
    },
    {
      id: "kuwait",
      title: "Kuwait",
      description: "Gateway to GCC markets with strong financial stability",
      backgroundImage: "/img/incorporation-jurisdiction-card-4.png",
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-[var(--3-spacing-spacing-7xl)] pb-16 md:pb-20 lg:pb-[var(--3-spacing-spacing-7xl)] px-4 md:px-8 lg:px-[var(--3-spacing-spacing-8xl)] relative bg-white"
      aria-labelledby="jurisdiction-heading"
    >
      <header className="flex flex-col items-center gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-3xl)] relative w-full max-w-[1280px]">
        <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[var(--3-spacing-spacing-md)] py-2 md:py-2.5 lg:pt-[var(--3-spacing-spacing-md)] px-3 md:px-4 lg:pr-[var(--3-spacing-spacing-lg)] lg:pb-[var(--3-spacing-spacing-md)] lg:pl-[var(--3-spacing-spacing-lg)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8">
          <img
            className="relative w-5 h-5 md:w-6 md:h-6"
            alt=""
            src="/img/marker-pin-06.svg"
            aria-hidden="true"
          />

          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-sm tracking-[0] leading-5 whitespace-nowrap">
                Jurisdiction
              </span>
            </div>
          </div>

          <div
            className="absolute top-0 left-[calc(50.00%_-_44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
            aria-hidden="true"
          />
        </div>

        <h1
          id="jurisdiction-heading"
          className="relative w-full max-w-[800px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-8 md:leading-10 lg:leading-[44px]"
        >
          Flexible and Global Set up
        </h1>
      </header>

      <div
        className="flex flex-col md:flex-row w-full max-w-[1080px] items-start gap-4 md:gap-6 relative"
        role="list"
      >
        {jurisdictionCards.map((card) => (
          <article
            key={card.id}
            className="relative flex-1 self-stretch grow rounded-2xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-cover bg-center bg-no-repeat border border-solid border-gray-200 min-h-[320px] md:min-h-[380px] lg:min-h-[420px] overflow-hidden"
            style={{ backgroundImage: `url(${card.backgroundImage})` }}
            role="listitem"
          >
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="flex flex-col gap-1">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-8 tracking-[0]">
                  {card.title}
                </h2>

                <p className="[font-family:'Inter',Helvetica] font-normal text-gray-200 text-sm md:text-base lg:text-lg leading-5 md:leading-6 lg:leading-7 tracking-[0]">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
