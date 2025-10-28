"use client";

import React from "react";

interface BenefitCard {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const IncorporationBenefits = (): JSX.Element => {
  const benefitCards: BenefitCard[] = [
    {
      title: "AI-powered execution",
      description: "Incorpify uses AI not just to automate, but to execute.",
      content: (
        <div className="relative flex-1 self-stretch w-full grow">
          <div className="flex w-[336.14px] items-start justify-end gap-[var(--3-spacing-spacing-md)] absolute top-[37px] left-[-17px]">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-end justify-center gap-[12.88px] pt-[var(--3-spacing-spacing-xl)] pr-[var(--3-spacing-spacing-xl)] pb-[var(--3-spacing-spacing-xl)] pl-[var(--3-spacing-spacing-xl)] relative flex-[0_0_auto] rounded-[4.83px_0px_4.83px_4.83px] bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)]">
                <div className="inline-flex items-start gap-[var(--3-spacing-spacing-xl)] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start justify-center gap-[1.61px] relative flex-[0_0_auto]">
                    <p className="relative mt-[-0.40px] [font-family:'Inter',Helvetica] font-medium text-[color:var(--1-color-modes-colors-text-text-white)] text-[5.6px] tracking-[0] leading-[8.1px]">
                      Can you give me a quick summary of our financials for this
                      quarter?
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="relative w-[5.64px] h-[4.83px]"
                alt="Vector"
                src="/img/vector.svg"
              />
            </div>
          </div>
          <div className="flex w-[336px] items-start gap-[var(--3-spacing-spacing-xl-duplicate)] pl-0 pr-[64.41px] py-0 absolute top-[74px] left-[13px]">
            <div className="relative w-[19.32px] h-[19.32px] bg-1-color-modes-colors-foreground-fg-white rounded-[4093.87px] shadow-[0px_0.81px_1.61px_-0.81px_#1018280f,0px_1.61px_3.22px_-0.81px_#1018281a]">
              <img
                className="absolute w-full h-full top-0 left-0 object-cover"
                alt="Contrast border"
                src="/img/contrast-border.svg"
              />
              <img
                className="absolute right-px bottom-px w-1.5 h-1.5"
                alt="Verified tick"
                src="/img/verified-tick.svg"
              />
            </div>
            <div className="flex flex-col items-end justify-center gap-[var(--3-spacing-spacing-xl)] p-[var(--3-spacing-spacing-xl)] relative flex-1 grow bg-white rounded-[4.83px] border-[0.4px] border-solid border-1-color-modes-colors-border-border-secondary shadow-[0px_1.61px_2.42px_-0.81px_#10182808,0px_4.83px_6.44px_-1.61px_#10182814] mb-2">
              <div className="flex items-center gap-[4.83px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start justify-center gap-[1.61px] relative flex-1 grow">
                  <div className="flex items-center gap-[var(--3-spacing-spacing-md)] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-0.40px] [font-family:'Inter',Helvetica] font-medium text-gray-900 text-[6.4px] tracking-[0] leading-[9.7px] whitespace-nowrap">
                      AI Advisor
                    </div>
                    <div className="relative w-[1.61px] h-[1.61px] bg-1-color-modes-colors-foreground-fg-quaternary-500 rounded-[0.81px]" />
                    <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-gray-500 text-[5.6px] tracking-[0] leading-[8.1px] whitespace-nowrap">
                      09.10 AM
                    </div>
                  </div>
                  <div className="flex items-center gap-[var(--3-spacing-spacing-xl)] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col h-[38px] items-start gap-[5.64px]">
                      <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-colors-text-text-primary-900 text-[5.6px] tracking-[0] leading-[8.1px]">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#101828] text-[5.6px] tracking-[0] leading-[8.1px]">
                          Sure! For Q2 2025 (April – June):
                        </span>
                      </p>
                      <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-colors-text-text-primary-900 text-[5.6px] tracking-[0] leading-[8.1px]">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#101828] text-[5.6px] tracking-[0] leading-[8.1px]">
                          Revenue (YTD): AED 1,250,000 (+12% from last year)
                        </span>
                      </p>
                      <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-colors-text-text-primary-900 text-[5.6px] tracking-[0] leading-[8.1px]">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#101828] text-[5.6px] tracking-[0] leading-[8.1px]">
                          Expenses (YTD): AED 780,000 (+8% from last year)
                        </span>
                      </p>
                      <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-colors-text-text-primary-900 text-[5.6px] tracking-[0] leading-[8.1px]">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#101828] text-[5.6px] tracking-[0] leading-[8.1px]">
                          Pending Entries: 12 journal entries need to be posted.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[-4985px] left-[-4090px] w-[60px] h-[60px]"
            alt="Component"
            src="/img/component-4.png"
          />
          <img
            className="absolute top-[calc(50.00%_-_32px)] left-[calc(50.00%_+_53px)] w-[107px] h-[107px] object-cover"
            alt="Element a"
            src="/img/14-a-1.png"
          />
        </div>
      ),
    },
    {
      title: "Zero Paperwork",
      description: "Launch and manage your company with complete clarity.",
      content: (
        <div className="relative flex-1 self-stretch w-full grow">
          <div className="relative top-[calc(50.00%_-_82px)] left-[calc(50.00%_-_150px)] w-[300px] h-[164px] flex flex-col gap-[16.2px]">
            <div className="flex -ml-20 h-[43.77px] w-[220px] self-center relative items-center gap-[4.65px] px-[11.63px] py-[9.3px] bg-white rounded-lg overflow-hidden border border-solid border-gray-200 shadow-lg">
              <img
                className="relative w-[23.26px] h-[23.26px]"
                alt="Face id"
                src="/img/face-id.svg"
              />
              <div className="flex flex-col items-start justify-center gap-[1.16px] relative flex-1 grow">
                <div className="relative w-fit mt-[-0.58px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                  Emirates ID
                </div>
                <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-gray-600 text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                  Biometric: Scheduled – 16 May
                </p>
              </div>
              <div className="relative w-[24px] h-[24px] flex items-center justify-center flex-shrink-0">
                <img
                  className="absolute w-full h-full"
                  alt="Background"
                  src="/img/background-1.svg"
                />
                <img
                  className="absolute w-[21px] h-[21px]"
                  alt="Line"
                  src="/img/line-1.svg"
                />
                <div className="relative [font-family:'Inter',Helvetica] font-semibold text-gray-900 text-[5.8px] text-center tracking-[0] leading-[9.3px] whitespace-nowrap z-10">
                  4/5
                </div>
              </div>
            </div>
            <div className="ml-20 flex w-[220px] h-[43.77px] relative items-center gap-[4.65px] px-[11.63px] py-[9.3px] bg-white rounded-lg overflow-hidden border border-solid border-gray-200 shadow-lg">
              <img
                className="relative w-[23.26px] h-[23.26px]"
                alt="File lock"
                src="/img/file-lock-02.svg"
              />
              <div className="flex flex-col items-start justify-center gap-[1.16px] relative flex-1 grow">
                <div className="relative w-fit mt-[-0.58px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                  Trade license
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-gray-600 text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                  Trade name approval
                </div>
              </div>
              <div className="relative w-[24px] h-[24px] flex items-center justify-center flex-shrink-0">
                <img
                  className="absolute w-full h-full"
                  alt="Background"
                  src="/img/background-1.svg"
                />
                <img
                  className="absolute w-[21px] h-[21px]"
                  alt="Line"
                  src="/img/line.svg"
                />
                <div className="relative [font-family:'Inter',Helvetica] font-semibold text-gray-900 text-[5.8px] text-center tracking-[0] leading-[9.3px] whitespace-nowrap z-10">
                  2/6
                </div>
              </div>
            </div>
            <div className="flex w-[220px] h-[43.77px] relative items-center gap-[4.65px] px-[11.63px] py-[9.3px] bg-white rounded-lg overflow-hidden border border-solid border-gray-200 shadow-lg">
              <img
                className="relative w-[23.26px] h-[23.26px]"
                alt="Certificate"
                src="/img/certificate-02.svg"
              />
              <div className="flex flex-col items-start justify-center gap-[1.16px] relative flex-1 grow">
                <div className="relative w-fit mt-[-0.58px] [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                  Corporate tax
                </div>
                <div className="inline-flex items-center gap-[3.49px] relative flex-[0_0_auto]">
                  <div className="relative w-[9.3px] h-[9.3px]">
                    <div className="absolute w-[80.00%] h-full top-0 left-[17.50%] bg-[url(/img/page-background.svg)] bg-[100%_100%]">
                      <img
                        className="absolute w-[35.94%] h-[28.75%] top-0 left-[59.04%]"
                        alt="Earmark"
                        src="/img/earmark.svg"
                      />
                    </div>
                    <div className="inline-flex items-start gap-[1.86px] px-[0.7px] py-[0.47px] absolute w-[68.75%] h-[42.25%] top-[43.88%] left-0 bg-primitives-colors-error-600 rounded-[0.47px]">
                      <div className="relative w-fit mt-[-0.23px] [font-family:'Inter',Helvetica] font-bold text-1-color-modes-colors-foreground-fg-white text-[2.3px] text-center tracking-[0] leading-[normal]">
                        PDF
                      </div>
                    </div>
                  </div>
                  <div className="relative w-fit mt-[-0.58px] [font-family:'Inter',Helvetica] font-medium text-gray-600 text-[8.1px] tracking-[0] leading-[11.6px] whitespace-nowrap">
                    taxreturn_sept2024.pdf
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "All-in-one dashboard",
      description:
        "From setup to banking and taxes, all in one smart dashboard.",
      content: (
        <div className="relative flex-1 self-stretch w-full grow">
          <div className="flex flex-col w-[169px] items-start gap-2 absolute top-[73px] left-[18px] rotate-[-4.00deg]">
            <div className="flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
              <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
                <img
                  className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                  alt="Stars"
                  src="/img/stars-01.svg"
                />
                <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                  Advanced AI
                </div>
              </div>
            </div>
            <div className="w-[169px] shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814] flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
              <div className="flex w-[151.53px] items-center gap-[var(--3-spacing-spacing-lg)] relative mr-[-0.01px]">
                <div className="absolute top-1 left-0.5 w-[11px] h-[11px] bg-1-color-modes-component-colors-utility-blue-utility-blue-50" />
                <img
                  className="relative w-[16.33px] h-[16.33px] ml-[-0.51px] rotate-[4.00deg]"
                  alt="Bar chart square"
                  src="/img/bar-chart-square-02.svg"
                />
                <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-incorpify-primary text-[11.7px] tracking-[0] leading-[17.5px]">
                  Dashboard
                </div>
              </div>
            </div>
            <div className="self-stretch w-full flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
              <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
                <img
                  className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                  alt="File"
                  src="/img/file-06.svg"
                />
                <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                  Financial Reports
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[169px] items-start gap-2 absolute top-3 left-40 rotate-[-4.00deg]">
            <div className="self-stretch w-full flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
              <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
                <img
                  className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                  alt="Calculator"
                  src="/img/calculator.svg"
                />
                <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                  Accounting
                </div>
              </div>
            </div>
            <div className="self-stretch w-full flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
              <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
                <img
                  className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                  alt="Certificate"
                  src="/img/certificate-02-1.svg"
                />
                <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                  Taxes
                </div>
              </div>
            </div>
            <div className="self-stretch w-full flex items-center gap-[5.83px] pr-[var(--3-spacing-spacing-lg)] pl-[var(--3-spacing-spacing-lg)] py-[5.83px] relative flex-[0_0_auto] bg-white rounded-[var(--2-radius-radius-md)] overflow-hidden border-[0.73px] border-solid border-gray-200">
              <div className="flex items-center gap-[var(--3-spacing-spacing-lg)] relative flex-1 grow">
                <img
                  className="relative w-[15.55px] h-[15.55px] ml-[-0.49px] rotate-[4.00deg]"
                  alt="Bank note"
                  src="/img/bank-note-02.svg"
                />
                <div className="relative flex-1 mt-[-0.73px] [font-family:'Inter',Helvetica] font-medium text-gray-700 text-[11.7px] tracking-[0] leading-[17.5px]">
                  Banking
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-[var(--3-spacing-spacing-7xl)] pb-16 md:pb-20 lg:pb-[var(--3-spacing-spacing-7xl)] px-4 md:px-8 lg:px-[var(--3-spacing-spacing-8xl)] relative bg-white"
      aria-labelledby="benefits-heading"
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
                Benefits
              </span>
            </div>
          </div>

          <div
            className="absolute top-0 left-[calc(50.00%_-_44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
            aria-hidden="true"
          />
        </div>

        <h1
          id="benefits-heading"
          className="relative w-full max-w-[800px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-incorpify-primary text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-8 md:leading-10 lg:leading-[44px]"
        >
          Why Choose Incorpify?
        </h1>
      </header>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-[24px] relative w-full max-w-[1280px] mx-auto">
        {benefitCards.map((card, index) => (
          <article
            key={index}
            className="flex flex-col h-[340px] items-start relative w-full lg:flex-1 lg:grow bg-gray-50 rounded-3xl overflow-hidden border border-solid border-gray-200 shadow-[0px_20px_20px_-4px_#00000003,0px_6.38px_6.38px_-3px_#00000008,0px_2.41px_2.41px_-2px_#0000000a,0px_0.8px_0.8px_-1px_#0000000a,inset_0px_0px_1px_1px_#ffffff]"
          >
            <header className="flex flex-col items-start gap-1 p-6 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] font-bold text-incorpify-primary text-xl tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)]">
                {card.title}
              </h3>
              <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-gray-600 text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                {card.description}
              </p>
            </header>
            {card.content}
          </article>
        ))}
      </div>
    </section>
  );
};
