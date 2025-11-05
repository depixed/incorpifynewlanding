"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PrimaryCTA {
  text: string;
  href: string;
  ariaLabel: string;
}

interface SecondaryCTA {
  text: string;
  href: string;
  ariaLabel: string;
  icon?: string;
}

interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ServiceHeroProps {
  title: string;
  description: string;
  primaryCta: PrimaryCTA;
  secondaryCta?: SecondaryCTA;
  heroImage: HeroImage;
  variant?: "accounting" | "incorporation";
}

export const ServiceHero = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  heroImage,
  variant = "accounting",
}: ServiceHeroProps): JSX.Element => {
  // Different layouts based on variant
  const isAccountingStyle = variant === "accounting";

  if (isAccountingStyle) {
    return (
      <section
        className="flex flex-col min-h-[600px] md:min-h-[700px] lg:min-h-[832px] items-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl)] relative bg-incorpifyprimary overflow-hidden pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20"
        aria-label="Hero section"
      >
        {/* Background decorative element */}
        <div
          className="hidden lg:block absolute left-[calc(50.00%_-_975px)] bottom-0 w-[1950px] h-[1300px] aspect-[1.5] opacity-5"
          aria-hidden="true"
        />

        <div className="flex flex-col lg:flex-row max-w-[1360px] items-center justify-center gap-8 md:gap-10 lg:gap-12 px-4 md:px-8 lg:pr-[var(--3-spacing-spacing-8xl)] lg:pl-[var(--3-spacing-spacing-8xl)] py-0 relative flex-1 w-full">
          {/* Left Content Section */}
          <div className="flex flex-col max-w-full lg:max-w-[var(--5-containers-container-max-width-desktop)] items-start gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl)] relative flex-1 w-full lg:w-auto">
            <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 relative self-stretch w-full">
              {/* Header Content */}
              <header className="flex flex-col items-start justify-center gap-3 md:gap-4 lg:gap-2 relative self-stretch w-full">
                <h1 className="relative w-full lg:w-[558px] mt-[-1.00px] font-display-lg-semibold font-[number:var(--display-lg-semibold-font-weight)] text-1-color-modes-colors-text-text-primary-on-brand text-[28px] sm:text-[36px] md:text-[40px] lg:text-[length:var(--display-lg-semibold-font-size)] tracking-[var(--display-lg-semibold-letter-spacing)] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[var(--display-lg-semibold-line-height)] [font-style:var(--display-lg-semibold-font-style)]">
                  {title}
                </h1>

                <p className="relative self-stretch font-text-xl-medium font-[number:var(--text-xl-medium-font-weight)] text-1-color-modes-component-colors-utility-gray-utility-gray-300 text-base md:text-lg lg:text-[length:var(--text-xl-medium-font-size)] tracking-[var(--text-xl-medium-letter-spacing)] leading-[24px] md:leading-[28px] lg:leading-[var(--text-xl-medium-line-height)] [font-style:var(--text-xl-medium-font-style)]">
                  {description}
                </p>
              </header>

              {/* CTA Buttons */}
              <nav
                className="inline-flex flex-col sm:flex-row items-start gap-3 md:gap-2 relative w-full sm:w-auto"
                aria-label="Primary call to action"
              >
                <Link href={primaryCta.href} className="w-full sm:w-auto">
                  <button
                    className="all-[unset] box-border w-full sm:w-auto inline-flex items-center justify-center gap-[var(--3-spacing-spacing-sm)] px-4 md:px-[var(--3-spacing-spacing-xl)] py-2.5 md:py-2.5 relative bg-1-color-modes-colors-foreground-fg-white rounded-[12px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[12px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-white/95 transition-colors cursor-pointer"
                    type="button"
                    aria-label={primaryCta.ariaLabel}
                  >
                    <span className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative">
                      <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-incorpifyprimary text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {primaryCta.text}
                      </span>
                    </span>
                  </button>
                </Link>

                {secondaryCta && (
                  <Link href={secondaryCta.href} className="w-full sm:w-auto">
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-[var(--3-spacing-spacing-sm)] px-4 md:px-[var(--3-spacing-spacing-xl)] py-2.5 md:py-2.5 relative rounded-[var(--2-radius-radius-md)] overflow-hidden hover:bg-white/10 transition-colors cursor-pointer bg-transparent border-[none]"
                      type="button"
                      aria-label={secondaryCta.ariaLabel}
                    >
                      <span className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative">
                        <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-1-color-modes-colors-text-text-primary-on-brand text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                          {secondaryCta.text}
                        </span>
                      </span>

                      {secondaryCta.icon && (
                        <img
                          className="relative w-5 h-5"
                          alt=""
                          src={secondaryCta.icon}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </Link>
                )}
              </nav>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full lg:flex-1 h-[400px] md:h-[500px] lg:h-[756px] flex items-center justify-center lg:justify-start">
            {/* Decorative gradient blur */}
            <div
              className="hidden lg:block absolute top-[calc(50%_-_250px)] left-[calc(50%_-_406px)] w-[812px] h-[500px] rounded-[405.81px/250px] rotate-[12.00deg] blur-[43.6px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(144,85,229,0.12)_0%,rgba(144,85,229,0)_100%)]"
              aria-hidden="true"
            />

            {/* Dashboard Image Container */}
            <figure className="relative w-full max-w-[500px] md:max-w-[600px] lg:max-w-none lg:absolute lg:top-[calc(50%_-_220px)] lg:left-0">
              <div className="inline-flex flex-col items-start p-3 md:p-[12.84px] w-full bg-[#473f7066] rounded-2xl lg:rounded-[30px] overflow-hidden border border-solid lg:border-[1.84px] border-incorpifyprimary shadow-[0px_20px_40px_-10px_#10182824] lg:shadow-[0px_34.23px_68.46px_-12.84px_#10182824]">
                <div className="relative w-full aspect-[603.57/474.33]">
                  <Image
                    className="relative w-full h-full object-cover rounded-lg"
                    alt={heroImage.alt}
                    src={heroImage.src}
                    width={heroImage.width}
                    height={heroImage.height}
                    priority
                  />
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    );
  }

  // Incorporation style
  return (
    <section
      className="flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-[var(--3-spacing-spacing-6xl)] pt-16 md:pt-20 lg:pt-[var(--3-spacing-spacing-11xl)] pr-4 md:pr-8 lg:pr-[var(--3-spacing-spacing-8xl)] pl-4 md:pl-8 lg:pl-[var(--3-spacing-spacing-8xl)] pb-12 md:pb-14 lg:pb-16 relative bg-incorpifyprimary"
      aria-label="Hero section"
    >
      {/* Background pattern */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-px w-full max-w-[1950px] h-[1300px] aspect-[1.5] opacity-5"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl)] px-4 md:px-8 lg:px-[100px] py-0 flex flex-col items-center relative w-full">
        <div className="justify-center gap-8 md:gap-9 lg:gap-10 self-stretch flex flex-col items-center relative w-full">
          <header className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full mt-16 md:mt-20 lg:mt-24">
            <h1 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-1-color-modes-colors-text-text-primary-on-brand text-3xl md:text-4xl lg:text-5xl text-center tracking-[-1.44px] leading-9 md:leading-10 lg:leading-[60px]">
              {title}
            </h1>

            <p className="relative flex items-center justify-center self-stretch [font-family:'Inter',Helvetica] font-medium text-1-color-modes-component-colors-utility-gray-utility-gray-300 text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 md:leading-7 lg:leading-[30px]">
              {description}
            </p>
          </header>

          <div className="inline-flex items-start gap-2 relative">
            <Link href={primaryCta.href}>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 md:gap-[var(--3-spacing-spacing-sm)] px-6 md:px-8 py-2 md:py-2.5 relative bg-1-color-modes-colors-foreground-fg-white rounded-xl overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label={primaryCta.ariaLabel}
              >
                <span className="inline-flex items-center justify-center px-2 py-0 relative">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-incorpifyprimary text-sm md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
                    {primaryCta.text}
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <figure className="inline-flex flex-col items-start pt-4 md:pt-5 lg:pt-[var(--3-spacing-spacing-xl)] pr-4 md:pr-5 lg:pr-[var(--3-spacing-spacing-xl)] pb-4 md:pb-5 lg:pb-[var(--3-spacing-spacing-xl)] pl-4 md:pl-5 lg:pl-[var(--3-spacing-spacing-xl)] relative bg-[#473f7066] rounded-2xl md:rounded-3xl lg:rounded-[32px] overflow-hidden border border-solid border-incorpifyprimary shadow-[0px_46.56px_93.11px_-17.46px_#10182824] max-w-full">
        <Image
          className="relative w-full max-w-[982.98px] h-auto object-cover"
          alt={heroImage.alt}
          src={heroImage.src}
          width={heroImage.width}
          height={heroImage.height}
          priority
        />
      </figure>
    </section>
  );
};

