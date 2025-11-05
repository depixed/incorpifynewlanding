"use client";

import React, { useState } from "react";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface Badge {
  icon: string;
  text: string;
}

interface SupportCard {
  heading: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
}

interface ServiceFAQProps {
  badge: Badge;
  heading: string;
  faqs: FAQItem[];
  supportCard?: SupportCard;
}

export const ServiceFAQ = ({
  badge,
  heading,
  faqs,
  supportCard,
}: ServiceFAQProps): JSX.Element => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(faqs.length > 0 ? faqs[0].id : null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-20 md:pt-24 lg:pt-32 pb-20 md:pb-24 lg:pb-32 px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="faq-heading"
    >
      {/* Background blur effect */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1080px] h-[800px] rounded-[540px/400px] blur-[60.49px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(29,24,52,0.06)_0%,rgba(29,24,52,0)_100%)]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1080px] items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-7xl)] flex flex-col relative">
        <header className="inline-flex flex-col items-center gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-3xl)] relative">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[var(--3-spacing-spacing-md)] py-2 md:py-2.5 lg:pt-[var(--3-spacing-spacing-md)] px-3 md:px-4 lg:pr-[var(--3-spacing-spacing-lg)] lg:pb-[var(--3-spacing-spacing-md)] lg:pl-[var(--3-spacing-spacing-lg)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8">
            <img
              className="relative w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6"
              alt=""
              src={badge.icon}
              aria-hidden="true"
            />

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="items-start self-stretch w-full flex flex-col relative flex-[0_0_auto]">
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-incorpify-primary text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            </div>

            <div
              className="absolute top-0 left-[calc(50.00%_-_44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
              aria-hidden="true"
            />
          </div>

          <h2
            id="faq-heading"
            className="relative w-fit font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-8 md:leading-10 lg:leading-[44px] whitespace-nowrap"
          >
            {heading}
          </h2>
        </header>

        {/* FAQ List */}
        <div
          className="flex flex-col max-w-[800px] items-start gap-4 md:gap-6 relative w-full"
          aria-label="FAQ List"
        >
          {faqs.map((item) => (
            <article
              key={item.id}
              className={`flex flex-col items-center ${
                openFaqId === item.id
                  ? "p-4 md:p-6"
                  : "pt-6 md:pt-[var(--3-spacing-spacing-3xl)] pb-4 md:pb-6 px-4 md:px-6"
              } relative self-stretch w-full rounded-xl md:rounded-2xl overflow-hidden shadow-[inset_0px_0px_1px_1px_#ffffff,0px_20px_20px_-4px_#00000003,0px_6.38px_6.38px_-3px_#00000008,0px_2.41px_2.41px_-2px_#0000000a,0px_0.8px_0.8px_-1px_#0000000a] transition-all duration-300 ease-in-out ${
                openFaqId === item.id
                  ? "bg-1-color-modes-component-colors-utility-gray-utility-gray-100"
                  : "bg-[linear-gradient(180deg,rgba(254,254,254,0.5)_0%,rgba(255,255,255,0.5)_100%)]"
              }`}
            >
              <button
                className={`items-${
                  openFaqId === item.id ? "start" : "center"
                } gap-3 md:gap-4 flex relative self-stretch w-full cursor-pointer`}
                onClick={() => toggleFaq(item.id)}
                aria-expanded={openFaqId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <div className="flex flex-col items-start gap-2 md:gap-[var(--3-spacing-spacing-md)] relative flex-1 grow">
                  <h3
                    className={`relative self-stretch ${
                      openFaqId === item.id ? "mt-[-1.00px]" : "mt-[-1.00px]"
                    } ${
                      openFaqId === item.id
                        ? "[font-family:'Inter',Helvetica] font-medium"
                        : "[font-family:'Inter',Helvetica] font-medium"
                    } text-incorpify-primary ${
                      openFaqId === item.id ? "text-base md:text-lg" : "text-base md:text-lg"
                    } tracking-[0] ${
                      openFaqId === item.id ? "leading-6 md:leading-7" : "leading-6 md:leading-7"
                    }`}
                  >
                    {item.question}
                  </h3>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.answer && (
                      <p
                        id={`faq-answer-${item.id}`}
                        className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm md:text-base tracking-[0] leading-5 md:leading-6"
                      >
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>

                <img
                  className="relative w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ease-in-out"
                  style={{
                    transform: openFaqId === item.id ? "rotate(0deg)" : "rotate(0deg)",
                  }}
                  alt={openFaqId === item.id ? "Collapse" : "Expand"}
                  src={openFaqId === item.id ? "/img/minus.svg" : "/img/plus-6.svg"}
                  aria-hidden="true"
                />
              </button>
            </article>
          ))}
        </div>

        {/* Contact Support Card */}
        {supportCard && (
          <aside className="flex flex-col max-w-[800px] items-center gap-6 md:gap-8 pb-8 md:pb-10 pt-8 md:pt-10 px-6 md:px-8 relative w-full bg-[#f9fafb] rounded-2xl overflow-hidden border border-solid border-gray-200 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]">
            <div className="flex-col items-start gap-4 md:gap-6 px-2 md:pr-[var(--3-spacing-spacing-md-duplicate)] md:pl-[var(--3-spacing-spacing-md-duplicate)] py-0 flex relative self-stretch w-full">
              <div className="flex flex-col items-start gap-2 md:gap-[var(--3-spacing-spacing-md)] relative self-stretch w-full">
                <h3 className="relative flex items-end justify-center self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-lg md:text-xl text-center tracking-[0] leading-7 md:leading-[30px]">
                  {supportCard.heading}
                </h3>

                <p className="relative flex items-end justify-center self-stretch [font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm md:text-base text-center tracking-[0] leading-5 md:leading-6">
                  {supportCard.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 md:gap-[var(--3-spacing-spacing-lg-duplicate)] relative self-stretch w-full mt-2">
              <button className="inline-flex items-center justify-center gap-2 md:gap-[var(--3-spacing-spacing-sm)] pt-3 md:pt-[var(--3-spacing-spacing-lg-duplicate)] pb-3 md:pb-[var(--3-spacing-spacing-lg-duplicate)] px-4 md:px-[18px] relative bg-1-color-modes-component-colors-components-buttons-secondary-button-secondary-bg rounded-lg md:rounded-[var(--2-radius-radius-md)] overflow-hidden border border-solid border-1-color-modes-component-colors-components-buttons-secondary-button-secondary-border shadow-shadows-shadow-xs-skeuemorphic cursor-pointer hover:opacity-90 transition-opacity">
                <img
                  className="relative w-4 h-4 md:w-5 md:h-5"
                  alt=""
                  src={supportCard.buttonIcon}
                  aria-hidden="true"
                />

                <span className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative">
                  <span className="relative w-fit mt-[-1.00px] bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-semibold text-transparent text-sm md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
                    {supportCard.buttonText}
                  </span>
                </span>
              </button>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
};

