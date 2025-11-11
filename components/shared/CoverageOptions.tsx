"use client";

import React from "react";
import Image from "next/image";

interface CoverageCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface Badge {
  icon: string;
  text: string;
}

interface CoverageOptionsProps {
  badge: Badge;
  heading: string;
  cards: CoverageCard[];
}

export const CoverageOptions = ({
  badge,
  heading,
  cards,
}: CoverageOptionsProps): JSX.Element => {
  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-12 pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-24 px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="coverage-options-heading"
    >
      {/* Background blur */}
      <div
        className="hidden lg:block absolute top-[calc(50%-192px)] left-[calc(50%-500px)] w-[1000px] h-[492px] rounded-[500px/246px] blur-[45px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(29,24,52,0.08)_0%,rgba(29,24,52,0)_100%)]"
        aria-hidden="true"
      />

      <div className="flex flex-col items-center gap-8 md:gap-12 relative w-full max-w-[1280px]">
        {/* Header */}
        <header className="flex flex-col w-full max-w-[600px] items-center gap-6 relative">
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

          {/* Heading */}
          <h2
            id="coverage-options-heading"
            className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-[28px] md:text-[32px] lg:text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[36px] md:leading-[40px] lg:leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]"
          >
            {heading}
          </h2>
        </header>

        {/* Coverage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative w-full">
          {cards.map((card, index) => (
            <article
              key={index}
              className="flex flex-col h-[400px] md:h-[450px] lg:h-[500px] items-start relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] group cursor-pointer hover:shadow-[0px_8px_12px_-4px_rgba(16,24,40,0.06),0px_20px_24px_-8px_rgba(16,24,40,0.12)] transition-shadow duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={card.imageAlt}
                  src={card.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-2 z-10">
                <h3 className="relative font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-white text-xl md:text-2xl tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]">
                  {card.title}
                </h3>
                <p className="relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-white/90 text-sm md:text-base tracking-[var(--text-md-regular-letter-tracking)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

