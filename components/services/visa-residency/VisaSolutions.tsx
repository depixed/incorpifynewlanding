"use client";

import React from "react";
import Image from "next/image";

interface SolutionCard {
  id: string;
  tag: {
    icon: string;
    text: string;
  };
  title: string;
  description: string;
}

export const VisaSolutions = (): JSX.Element => {
  const solutionCards: SolutionCard[] = [
    {
      id: "business-owner-investor",
      tag: {
        icon: "/img/building-07.svg",
        text: "Business Owner / Investor Visa",
      },
      title: "Seamless Incorporation, Simplified",
      description:
        "Start and scale your enterprise with long-term residency benefits.",
    },
    {
      id: "employee-visa",
      tag: {
        icon: "/img/user-check-01.svg",
        text: "Employee Visa",
      },
      title: "Effortless Talent Onboarding",
      description:
        "Onboard talent smoothly with fully compliant, efficient visa processing.",
    },
    {
      id: "family-sponsorship",
      tag: {
        icon: "/img/users-01.svg",
        text: "Family Sponsorship",
      },
      title: "Reunite with Ease",
      description:
        "Streamline incorporation so you can put more energy into growing your vision.",
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-[var(--3-spacing-spacing-7xl)] pb-16 md:pb-20 lg:pb-[var(--3-spacing-spacing-7xl)] px-4 md:px-8 lg:px-[var(--3-spacing-spacing-8xl)] relative bg-white"
      aria-labelledby="solutions-heading"
    >
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12 relative w-full max-w-[1280px]">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-3xl)] relative w-full max-w-[800px]">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[var(--3-spacing-spacing-md)] py-2 md:py-2.5 lg:pt-[var(--3-spacing-spacing-md)] px-3 md:px-4 lg:pr-[var(--3-spacing-spacing-lg)] lg:pb-[var(--3-spacing-spacing-md)] lg:pl-[var(--3-spacing-spacing-lg)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8">
            <img
              className="relative w-5 h-5 md:w-6 md:h-6"
              alt=""
              src="/img/lightbulb-02.svg"
              aria-hidden="true"
            />

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Solutions
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
            id="solutions-heading"
            className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-8 md:leading-10 lg:leading-[44px]"
          >
            Tailored Visa Solutions to Suit Your Goals
          </h2>
        </header>

        {/* Main Content - Two Columns */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1080px] items-start gap-6 md:gap-8 lg:gap-12 relative">
          {/* Left Column - Solution Cards */}
          <div
            className="flex flex-col w-full lg:w-auto lg:flex-1 gap-4 md:gap-6 relative"
            role="list"
          >
            {solutionCards.map((card) => (
              <article
                key={card.id}
                className="flex flex-col items-start gap-4 md:gap-5 p-6 md:p-8 relative self-stretch w-full bg-gray-50 rounded-2xl lg:rounded-3xl overflow-hidden border border-solid border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                role="listitem"
              >
                {/* Card Tag */}
                <div className="inline-flex items-center justify-center gap-2 py-1.5 px-3 relative rounded-[20px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)]">
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src={card.tag.icon}
                    aria-hidden="true"
                  />
                  <span className="relative w-fit mt-[-1px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-xs tracking-[0] leading-4 whitespace-nowrap">
                    {card.tag.text}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
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

          {/* Right Column - Main Image */}
          <div className="relative w-full lg:w-auto lg:flex-1 flex items-center justify-center">
            <figure className="relative w-full max-w-[500px] lg:max-w-none rounded-2xl lg:rounded-3xl overflow-hidden border border-solid border-gray-200 shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]">
              <div className="relative w-full aspect-[1716/2304]">
                <Image
                  className="relative w-full h-full object-cover"
                  alt="Person holding visa card"
                  src="/img/visa-residency-solution.png"
                  width={1716}
                  height={2304}
                  priority
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

