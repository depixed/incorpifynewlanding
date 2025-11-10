"use client";

import React from "react";
import Image from "next/image";

interface BenefitCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overlayImage?: {
    src: string;
    alt: string;
    className: string;
  };
}

export const VisaBenefits = (): JSX.Element => {
  const benefitCards: BenefitCard[] = [
    {
      id: "trusted-professionals",
      title: "Trusted by Global Professionals",
      description: "Over two decades of trust with Directors, Expats, and Global Teams.",
      image: "/img/visa-residency-benefits/Benefits 1.png",
      imageAlt: "Trusted by global professionals",
    },
    {
      id: "digital-compliance",
      title: "Fully Digital Compliance",
      description: "No paperwork. 100% online. Always up-to-date.",
      image: "/img/visa-residency-benefits/Benefits 2.png",
      imageAlt: "Fully digital compliance",
    },
    {
      id: "centralized-dashboard",
      title: "Centralized Application Dashboard",
      description: "One place to track, manage, and update everything.",
      image: "/img/visa-residency-benefits/Benefit 3.png",
      imageAlt: "Centralized application dashboard",
    },
    {
      id: "automated-alerts",
      title: "Automated Alerts & Tracking",
      description: "Real-time updates and smart renewal reminders.",
      image: "/img/visa-residency-benefits/Benefits 4.png",
      imageAlt: "Automated alerts and tracking",
      overlayImage: {
        src: "/img/visa-residency-benefits/with Benefits 4.png",
        alt: "Alert icon",
        className: "absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain z-10",
      },
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-12 pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-24 px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="visa-benefits-heading"
    >
      <div className="flex flex-col items-center gap-8 md:gap-12 relative w-full max-w-[1280px]">
        {/* Header */}
        <header className="flex flex-col w-full max-w-[800px] items-center gap-6 relative">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 pt-2 pr-3 pb-2 pl-3 relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)]">
            <img
              className="relative w-5 h-5 md:w-6 md:h-6"
              alt=""
              src="/img/stars-02.svg"
              aria-hidden="true"
            />

            <span className="relative w-fit mt-[-1px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-incorpify-primary text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
              Benefits
            </span>

            {/* Decorative line */}
            <div
              className="absolute top-0 left-[calc(50%-44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
              aria-hidden="true"
            />
          </div>

          {/* Heading */}
          <h2
            id="visa-benefits-heading"
            className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-[28px] md:text-[32px] lg:text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[36px] md:leading-[40px] lg:leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]"
          >
            Why Fast Track Your Visa & Residency with Incorpify?
          </h2>
        </header>

        {/* Benefits Cards - Custom Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative w-full">
          {benefitCards.map((card, index) => {
            // Card 1 (trusted-professionals) and Card 4 (automated-alerts): 1/3 width (col-span-1)
            // Card 2 (digital-compliance) and Card 3 (centralized-dashboard): 2/3 width (col-span-2)
            const colSpan = index === 0 || index === 3 ? "md:col-span-1" : "md:col-span-2";
            
            return (
            <article
              key={card.id}
              className={`flex flex-col h-[340px] md:h-[380px] lg:h-[400px] items-start relative bg-gray-50 rounded-2xl lg:rounded-3xl overflow-hidden border border-solid border-gray-200 shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] ${colSpan}`}
              role="listitem"
            >
              {/* Card Header */}
              <div className="flex flex-col items-start gap-2 p-6 relative self-stretch w-full">
                <h3 className="relative self-stretch mt-[-1px] font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-incorpify-primary text-lg md:text-xl lg:text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-7 md:leading-8 lg:leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]">
                  {card.title}
                </h3>

                <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-sm md:text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-tracking)] leading-5 md:leading-6 [font-style:var(--text-md-regular-font-style)]">
                  {card.description}
                </p>
              </div>

              {/* Card Image */}
              <div className="relative flex-1 self-stretch w-full overflow-hidden">
                <Image
                  className="absolute inset-0 w-full h-full object-contain object-bottom"
                  alt={card.imageAlt}
                  src={card.image}
                  width={500}
                  height={300}
                  priority
                />

                {/* Overlay image for 4th card */}
                {card.overlayImage && (
                  <Image
                    className={card.overlayImage.className}
                    alt={card.overlayImage.alt}
                    src={card.overlayImage.src}
                    width={96}
                    height={96}
                  />
                )}
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

