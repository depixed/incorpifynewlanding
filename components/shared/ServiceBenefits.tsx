"use client";

import React from "react";

interface BenefitCard {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  additionalImage?: {
    src: string;
    alt: string;
    className: string;
  };
  content?: React.ReactNode;
  gridSpan?: string; // e.g., "lg:col-span-2", "lg:row-span-2"
  height?: string; // e.g., "h-[340px]", "h-[400px]"
}

interface Badge {
  icon: string;
  text: string;
}

interface ServiceBenefitsProps {
  badge: Badge;
  heading: string;
  benefits: BenefitCard[];
  gridCols?: string; // e.g., "lg:grid-cols-3", "lg:grid-cols-2"
  backgroundBlur?: boolean;
}

export const ServiceBenefits = ({
  badge,
  heading,
  benefits,
  gridCols = "lg:grid-cols-3",
  backgroundBlur = true,
}: ServiceBenefitsProps): JSX.Element => {
  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-12 pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-24 px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="benefits-heading"
    >
      {/* Background blur */}
      {backgroundBlur && (
        <div
          className="hidden lg:block absolute top-[calc(50%-192px)] left-[calc(50%-500px)] w-[1000px] h-[492px] rounded-[500px/246px] blur-[45px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(29,24,52,0.08)_0%,rgba(29,24,52,0)_100%)]"
          aria-hidden="true"
        />
      )}

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
            id="benefits-heading"
            className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-[28px] md:text-[32px] lg:text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[36px] md:leading-[40px] lg:leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]"
          >
            {heading}
          </h2>
        </header>

        {/* Benefits Cards - Flexible Bento Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6 relative w-full`}
        >
          {benefits.map((card, index) => {
            const defaultHeight = card.height || "h-[340px]";

            return (
              <article
                key={index}
                className={`flex flex-col ${defaultHeight} items-start relative ${
                  card.gridSpan || ""
                } bg-gray-50 rounded-2xl lg:rounded-3xl overflow-hidden border border-solid border-gray-200 shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]`}
              >
                <div
                  className={`flex flex-col items-center gap-1 p-6 relative self-stretch w-full ${
                    index === 1 && benefits.length === 3 ? "h-[130px]" : ""
                  }`}
                >
                  <h3 className="relative self-stretch mt-[-1px] font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-incorpify-primary text-center text-lg md:text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-7 md:leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]">
                    {card.title}
                  </h3>

                  <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-center text-sm md:text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-tracking)] leading-5 md:leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                    {card.description}
                  </p>
                </div>

                {/* Custom content or image */}
                {card.content ? (
                  // Custom React content (for complex cards like IncorporationBenefits)
                  card.content
                ) : card.additionalImage ? (
                  // Image with additional overlay image
                  <div className="relative flex-1 self-stretch w-full overflow-hidden">
                    <img
                      className="absolute -top-1.5 left-[calc(50%-172px)] w-[317px] h-[216px] object-contain"
                      alt={card.imageAlt}
                      src={card.image}
                    />

                    <img
                      className={card.additionalImage.className}
                      alt={card.additionalImage.alt}
                      src={card.additionalImage.src}
                    />
                  </div>
                ) : (
                  // Simple image
                  <div className="relative flex-1 self-stretch w-full overflow-hidden">
                    <img
                      className="absolute inset-0 w-full h-full object-contain object-bottom"
                      alt={card.imageAlt}
                      src={card.image}
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

