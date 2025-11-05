"use client";

import React from "react";
import Image from "next/image";

export const OurUsers = (): JSX.Element => {
  const userCards = [
    {
      id: 1,
      image: "/img/our-users/Card 1.png",
      alt: "Card for Startups",
      title: "For Startups",
      description: "Set up lean and stay investor-ready from day one",
    },
    {
      id: 2,
      image: "/img/our-users/Card 2.png",
      alt: "Card for Consultant",
      title: "For Consultant",
      description: "Manage global operations and banking seamlessly",
    },
    {
      id: 3,
      image: "/img/our-users/Card 3.png",
      alt: "Card for SMEs",
      title: "For SMEs",
      description: "Control all company activities in one place",
    },
    {
      id: 4,
      image: "/img/our-users/Card 4.png",
      alt: "Card for Holding Structures",
      title: "For Holding Structures",
      description: "Manage cross-border entities compliantly",
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-[var(--3-spacing-spacing-9xl)] pb-16 md:pb-20 lg:pb-[var(--3-spacing-spacing-9xl)] px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="users-heading"
    >
      {/* Background blur effect */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[100px] w-full max-w-[810px] h-[600px] rounded-[405px/300px] blur-[45.36px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(29,24,52,0.12)_0%,rgba(29,24,52,0)_100%)]"
        aria-hidden="true"
      />

      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-7xl)] relative w-full max-w-[1280px]">
        <header className="flex flex-col w-full max-w-[600px] items-center gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-3xl)] relative">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[var(--3-spacing-spacing-md)] py-2 md:py-2.5 lg:pt-[var(--3-spacing-spacing-md)] px-3 md:px-4 lg:pr-[var(--3-spacing-spacing-lg)] lg:pb-[var(--3-spacing-spacing-md)] lg:pl-[var(--3-spacing-spacing-lg)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8">
            <img
              className="relative w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6"
              alt=""
              src="/img/user-check-01.svg"
              aria-hidden="true"
            />

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-incorpify-primary text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Our Users
                </span>
              </div>
            </div>

            <div
              className="absolute top-0 left-[calc(50.00%_-_44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
              aria-hidden="true"
            />
          </div>

          <h2
            id="users-heading"
            className="relative w-full font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-8 md:leading-10 lg:leading-[44px]"
          >
            Built for Every Business Player
          </h2>
        </header>

        {/* User Cards Grid */}
        <div
          className="flex flex-col md:flex-row h-auto md:h-[360px] items-stretch gap-4 md:gap-6 relative w-full"
          role="list"
        >
          {userCards.map((card) => (
            <div
              key={card.id}
              className="relative flex-1 self-stretch grow"
              role="listitem"
            >
              <Image
                className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                alt={card.alt}
                src={card.image}
                width={300}
                height={360}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

