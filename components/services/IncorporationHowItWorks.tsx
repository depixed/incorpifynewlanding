"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface StepImage {
  type: "jurisdiction" | "documents" | "processing" | "approved" | "golive";
  mainImage?: string;
  overlayImage?: string;
  content?: {
    step: string;
    title: string;
    description: string;
  };
  stars?: Array<{
    className: string;
    src: string;
  }>;
  message?: string;
  confettiGif?: string;
  congratsTitle?: string;
  congratsMessage?: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  image: StepImage;
  isActive: boolean;
  alignment: "left" | "right";
}

const steps: Step[] = [
  {
    number: "01",
    title: "Select jurisdiction",
    description:
      "Tell us about your business and personal needs. Our AI recommends the best location based on costs, timelines, tax advantages, and legal structures. For you.",
    image: {
      type: "jurisdiction",
      mainImage: "/img/888-1.png",
      overlayImage: "/img/image-1374.png",
    },
    isActive: true,
    alignment: "right",
  },
  {
    number: "02",
    title: "Upload Documents",
    description:
      "Securely upload your ID, proof of address, and any relevant company documents. We'll guide you through exactly what's needed.",
    image: {
      type: "documents",
      content: {
        step: "1 of 3 steps",
        title: "Passport",
        description:
          "A government-issued document that serves as a form of identification and proof of citizenship. It is essential for international travel and often required for business incorporation in foreign countries, including the UAE.",
      },
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "03",
    title: "AI Document Processing",
    description:
      "We handle your submitted documents, verify them for compliance, and coordinate with authorities to ensure smooth approvals across jurisdictions.",
    image: {
      type: "processing",
        stars: [
          {
            className: "ml-[-5279.9px] w-[17.59px] h-[16.06px] mt-[-2745.1px]",
            src: "/img/star-1.svg",
          },
          {
            className: "ml-[51.6px] w-[13.03px] h-[13.22px] mt-[2753.1px]",
            src: "/img/star-4.svg",
          },
        ],
      message: "Just a moment, we working on this for you...",
    },
    isActive: false,
    alignment: "right",
  },
  {
    number: "04",
    title: "Get Approved",
    description:
      "Receive real-time updates as your company registration moves through government systems. We'll notify you the moment it's approved.",
    image: {
      type: "approved",
      confettiGif:
        "/img/https-lottiefiles-com-animations-confetti-partyyy-wa6zqqu2jw.gif",
      congratsTitle: "Congratulations!",
      congratsMessage: "You've finished onboarding with Incorpify!",
    },
    isActive: false,
    alignment: "left",
  },
  {
    number: "05",
    title: "Go Live",
    description:
      "Your business is officially active. Access your dashboard to manage licenses, apply for visas, open a bank account, and more—all in one place.",
    image: {
      type: "golive",
      mainImage: "/img/333-1.png",
      overlayImage: "/img/image-1374-1.png",
    },
    isActive: false,
    alignment: "right",
  },
];

export const IncorporationHowItWorks = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSteps, setActiveSteps] = useState<boolean[]>([true, false, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate progress through the section (0 to 1)
      const sectionStart = sectionTop - windowHeight / 2;
      const sectionEnd = sectionTop + sectionHeight - windowHeight / 2;
      const progress = Math.max(0, Math.min(1, (scrollPosition - sectionStart) / (sectionEnd - sectionStart)));

      setScrollProgress(progress);

      // Update active steps based on progress
      const newActiveSteps = steps.map((_, index) => {
        const stepProgress = (index + 1) / steps.length;
        return progress >= stepProgress - 0.15; // Activate slightly before reaching
      });
      setActiveSteps(newActiveSteps);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col w-full items-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-[var(--3-spacing-spacing-9xl)] pb-16 md:pb-20 lg:pb-[var(--3-spacing-spacing-9xl)] px-4 md:px-8 lg:px-[100px] relative bg-white"
      aria-labelledby="how-it-works-heading"
    >
      {/* Header */}
      <header className="flex flex-col items-center gap-4 md:gap-5 lg:gap-[var(--3-spacing-spacing-3xl)] relative w-full max-w-[1280px]">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[var(--3-spacing-spacing-md)] py-2 md:py-2.5 lg:pt-[var(--3-spacing-spacing-md)] px-3 md:px-4 lg:pr-[var(--3-spacing-spacing-lg-duplicate)] lg:pb-[var(--3-spacing-spacing-md)] lg:pl-[var(--3-spacing-spacing-lg-duplicate)] relative rounded-[40px] overflow-hidden border border-solid border-[#e4e7ec33] bg-[linear-gradient(0deg,rgba(79,26,214,0.08)_0%,rgba(153,153,153,0.1)_100%)] bg-nubien-framer-website-color-violet-47-8">
          <img
            className="relative w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6"
            alt=""
            src="/img/dataflow-03.svg"
            aria-hidden="true"
          />

          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-incorpify-primary text-sm tracking-[0] leading-5 whitespace-nowrap">
                How It Works
              </span>
            </div>
          </div>

          <div
            className="absolute top-0 left-[calc(50.00%_-_44px)] w-[89px] h-px bg-[linear-gradient(90deg,rgba(29,24,52,0)_0%,rgba(29,24,52,1)_50%,rgba(29,24,52,0)_100%)]"
            aria-hidden="true"
          />
        </div>

        <h2
          id="how-it-works-heading"
          className="relative w-full max-w-fit [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.72px] leading-8 md:leading-10 lg:leading-[44px]"
        >
          AI-Powered Business Incorporation, Step by Step
        </h2>
      </header>

      {/* Steps */}
      <div className="flex flex-col items-center relative w-full max-w-[1280px]">
        {steps.map((step, index) => (
          <article
            key={step.number}
            className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-14 relative self-stretch w-full"
          >
            {/* Left spacer for right-aligned content on desktop */}
            {step.alignment === "right" && (
              <div
                className="hidden lg:flex flex-col w-[500px] items-start gap-[var(--3-spacing-spacing-3xl)] pt-[var(--3-spacing-spacing-md)] pb-[var(--3-spacing-spacing-4xl)] px-0 relative"
                aria-hidden="true"
              />
            )}

            {/* Content on left side (for left-aligned steps) */}
            {step.alignment === "left" && (
              <div className="flex flex-col items-end gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-3xl)] pt-2 md:pt-[var(--3-spacing-spacing-md)] pb-8 md:pb-[var(--3-spacing-spacing-4xl)] px-0 relative w-full lg:w-[500px] order-2 lg:order-1">
                {/* Visual card */}
                <div className="relative w-full h-56 md:h-64 lg:h-72 rounded-2xl md:rounded-3xl overflow-hidden shadow-[inset_0px_0px_0.33px_0.33px_#ffffff,0px_20px_20px_-4px_#00000003,0px_6.38px_6.38px_-3px_#00000008,0px_2.41px_2.41px_-2px_#0000000a,0px_0.8px_0.8px_-1px_#0000000a] bg-[linear-gradient(180deg,rgba(246,241,252,0.5)_0%,rgba(255,255,255,0.5)_100%)] flex items-center justify-center p-4 md:p-6">
                  {/* Documents view */}
                  {step.image.type === "documents" && step.image.content && (
                    <div className="flex flex-col w-full max-w-[320px] items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)] border-[0.5px] border-solid border-gray-200">
                      <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                        <p className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-incorpifysecondary text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                          {step.image.content.step}
                        </p>

                        <h3 className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-incorpify-primary text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                          {step.image.content.title}
                        </h3>

                        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-gray-600 text-xs md:text-sm tracking-[0] leading-4 md:leading-5">
                          {step.image.content.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-start px-0 py-2 relative self-stretch w-full">
                        <div className="relative self-stretch w-full h-[2px] bg-gray-100 rounded-lg" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-px w-px h-0.5 rounded-[5.45px] bg-[linear-gradient(325deg,rgba(59,0,236,1)_0%,rgba(150,91,228,1)_100%)]" />
                      </div>
                    </div>
                  )}

                  {/* Approved view */}
                  {step.image.type === "approved" && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1 w-[300px] h-[300px] rounded-[50%] blur-[20px] [background:radial-gradient(50%_50%_at_42%_50%,rgba(77,18,234,0.06)_0%,rgba(77,18,234,0)_100%)]"
                        aria-hidden="true"
                      />

                      <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-[100px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] opacity-40"
                        aria-hidden="true"
                      />

                      <div className="relative flex flex-col items-center justify-center gap-3 w-full max-w-[320px]">
                        <img
                          className="w-full max-w-[300px] h-24 object-cover"
                          alt=""
                          src={step.image.confettiGif}
                          aria-hidden="true"
                        />

                        <div className="flex flex-col w-full items-center gap-2">
                          <p className="relative w-full bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-semibold text-transparent text-xl md:text-2xl text-center tracking-[-0.5px] leading-7 md:leading-8">
                            {step.image.congratsTitle}
                          </p>

                          <p className="relative w-full bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-semibold text-transparent text-sm md:text-base text-center tracking-[0] leading-[normal]">
                            {step.image.congratsMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text content - RIGHT-ALIGNED for left-side cards */}
                <div className="flex flex-col items-end gap-2 md:gap-[var(--3-spacing-spacing-md)] relative self-stretch w-full">
                  <h3 className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-xl md:text-2xl text-center lg:text-right tracking-[0] leading-7 md:leading-[30px]">
                    {step.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm md:text-base text-center lg:text-right tracking-[0] leading-5 md:leading-6">
                    {step.description}
                  </p>
                </div>
              </div>
            )}

            {/* Step number indicator */}
            <div className="flex lg:flex-col w-full lg:w-12 items-center lg:items-center relative lg:self-stretch order-1 lg:order-2">
              <div
                className={`${activeSteps[index] ? "z-[1] border-incorpifyprimary bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)]" : "bg-white border-gray-200"} flex flex-col w-10 h-10 md:w-12 md:h-12 items-center justify-center gap-3 p-3 relative ${index > 0 ? "z-[1]" : ""} rounded-[99px] border-[3px] border-solid flex-shrink-0 transition-all duration-500`}
              >
                <span
                  className={`relative w-fit ${activeSteps[index] ? "[font-family:'Inter',Helvetica] font-semibold text-white text-sm md:text-base" : "[font-family:'Inter',Helvetica] font-semibold text-gray-400 text-sm md:text-base"} tracking-[0] leading-5 md:leading-6 whitespace-nowrap`}
                >
                  {step.number}
                </span>
              </div>

              {/* Connector line - horizontal on mobile, vertical on desktop */}
              {index < steps.length - 1 && (
                <>
                  {/* Mobile horizontal line */}
                  <div className="flex lg:hidden h-1 w-full items-center relative flex-1 grow rounded-[var(--3-spacing-spacing-md)]">
                    {activeSteps[index] && (
                      <>
                        <div className="relative h-1 flex-1 grow bg-incorpifyprimary transition-all duration-500" />
                        <div className="relative h-1 flex-1 grow bg-gray-200" />
                      </>
                    )}
                    {!activeSteps[index] && (
                      <div className="relative h-1 flex-1 grow bg-gray-200" />
                    )}
                  </div>

                  {/* Desktop vertical line with progressive fill */}
                  <div className="hidden lg:flex flex-col w-1 items-start relative flex-1 grow -mt-4 z-0 rounded-[var(--3-spacing-spacing-md)] overflow-hidden">
                    {/* Background gray line */}
                    <div className="absolute inset-0 w-1 bg-gray-200" />
                    
                    {/* Progressive purple fill */}
                    <div 
                      className="absolute top-0 left-0 w-1 bg-[linear-gradient(180deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] transition-all duration-300"
                      style={{
                        height: activeSteps[index + 1] 
                          ? '100%' 
                          : activeSteps[index] 
                            ? `${Math.min(100, ((scrollProgress * steps.length) - index) * 100)}%` 
                            : '0%'
                      }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Content on right side (for right-aligned steps) */}
            {step.alignment === "right" && (
              <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-3xl)] pt-2 md:pt-[var(--3-spacing-spacing-md)] pb-8 md:pb-[var(--3-spacing-spacing-4xl)] px-0 relative w-full lg:w-[500px] order-2 lg:order-3">
                {/* Visual card */}
                <div className="relative w-full h-56 md:h-64 lg:h-72 rounded-2xl md:rounded-3xl overflow-hidden shadow-[inset_0px_0px_0.33px_0.33px_#ffffff,0px_20px_20px_-4px_#00000003,0px_6.38px_6.38px_-3px_#00000008,0px_2.41px_2.41px_-2px_#0000000a,0px_0.8px_0.8px_-1px_#0000000a] bg-[linear-gradient(180deg,rgba(246,241,252,0.5)_0%,rgba(255,255,255,0.5)_100%)] flex items-center justify-center p-4 md:p-6">
                  {/* Jurisdiction and GoLive view */}
                  {(step.image.type === "jurisdiction" ||
                    step.image.type === "golive") &&
                    step.image.mainImage &&
                    step.image.overlayImage && (
                      <>
                        <div className="absolute inset-0 w-full h-full">
                          <Image
                            className="w-full h-full object-cover opacity-60"
                            alt=""
                            src={step.image.mainImage}
                            width={500}
                            height={288}
                            style={{ objectPosition: 'center' }}
                          />
                        </div>

                        <div className="relative inline-flex flex-col items-start p-0.5 md:p-1 bg-[#1d18340f] rounded-lg overflow-hidden border-[0.17px] border-solid border-white shadow-[0px_10px_20px_-4px_#10182824] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                          <Image
                            className="relative w-[312px] md:w-[364px] h-[203px] md:h-[237px] object-cover rounded"
                            alt=""
                            src={step.image.overlayImage}
                            width={364}
                            height={237}
                          />
                        </div>
                      </>
                    )}

                  {/* Processing view */}
                  {step.image.type === "processing" && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-[240px] md:w-[280px] h-[240px] md:h-[280px] flex">
                        <div className="flex-1 w-full relative">
                          <div className="absolute w-full h-full top-0 left-0 bg-[#1d183405] rounded-[50%] border-[0.51px] border-solid border-gray-200 shadow-[0px_-0.51px_32.71px_#00000008] backdrop-blur-[15.33px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.33px)_brightness(100%)] opacity-50" />

                          <div className="absolute w-[77.78%] h-[77.78%] top-[11.11%] left-[11.11%] bg-[#1d18340a] rounded-[50%] border-[0.51px] border-solid border-gray-200 shadow-[0px_-0.51px_32.71px_#00000008] backdrop-blur-[15.33px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.33px)_brightness(100%)] opacity-50" />

                          <div className="absolute w-[55.56%] h-[55.56%] top-[22.22%] left-[22.22%] bg-[#1d18340f] rounded-[50%] border-[0.51px] border-solid border-gray-200 shadow-[0px_-0.51px_32.71px_#00000008] backdrop-blur-[15.33px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.33px)_brightness(100%)] opacity-50" />
                        </div>
                      </div>

                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1 w-[220px] md:w-[260px] h-[220px] md:h-[260px] rounded-[50%] blur-[20px] [background:radial-gradient(50%_50%_at_42%_50%,rgba(77,18,234,0.06)_0%,rgba(77,18,234,0)_100%)]"
                        aria-hidden="true"
                      />

                      <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-[80px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] opacity-40"
                        aria-hidden="true"
                      />

                      <div className="absolute top-1/2 -translate-y-8 left-1/2 -translate-x-1/2 w-full max-w-[280px] flex flex-col items-center gap-3">
                        <div className="w-16 h-16 flex items-center justify-center relative">
                          {step.image.stars?.map((star, starIndex) => (
                            <img
                              key={starIndex}
                              className="absolute w-6 h-6"
                              alt=""
                              src={star.src}
                              aria-hidden="true"
                              style={{
                                top: starIndex === 0 ? '0' : starIndex === 1 ? '30px' : '8px',
                                left: starIndex === 0 ? '12px' : starIndex === 1 ? '4px' : '30px',
                              }}
                            />
                          ))}
                        </div>

                        <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-xs md:text-sm text-center tracking-[0] leading-[normal]">
                          {step.image.message}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text content - LEFT-ALIGNED for right-side cards */}
                <div className="flex flex-col items-start gap-2 md:gap-[var(--3-spacing-spacing-md)] relative self-stretch w-full">
                  <h3 className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-incorpify-primary text-xl md:text-2xl text-center lg:text-left tracking-[0] leading-7 md:leading-[30px]">
                    {step.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm md:text-base text-center lg:text-left tracking-[0] leading-5 md:leading-6">
                    {step.description}
                  </p>
                </div>
              </div>
            )}

            {/* Right spacer for left-aligned content on desktop */}
            {step.alignment === "left" && (
              <div
                className="hidden lg:flex flex-col w-[500px] items-start gap-[var(--3-spacing-spacing-3xl)] pt-[var(--3-spacing-spacing-md)] pb-[var(--3-spacing-spacing-4xl)] px-0 relative order-3"
                aria-hidden="true"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

