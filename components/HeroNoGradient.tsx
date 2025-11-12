"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PrimaryCTA } from "./PrimaryCTA";

interface ServiceCategory {
  id: string;
  icon: string;
  label: string;
  image: string;
}

interface CompanyLogo {
  id: string;
  src: string;
  alt: string;
  className: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "incorporation",
    icon: "/img/building-07.svg",
    label: "Incorporation",
    image: "/img/hero/incorporation-tab-desktop.png",
  },
  {
    id: "accounting-tax",
    icon: "/img/calculator.svg",
    label: "Accounting & Tax",
    image: "/img/hero/Accounting&tax-tab-desktop.png",
  },
  {
    id: "visa-residency",
    icon: "/img/credit-card-02.svg",
    label: "Visa & Residency",
    image: "/img/hero/visa&residency-tab-desktop.png",
  },
  {
    id: "banking",
    icon: "/img/bank-note-02.svg",
    label: "Banking",
    image: "/img/hero/Banking-tab-desktop.png",
  },
  {
    id: "insurance",
    icon: "/img/shield-03.svg",
    label: "Insurance",
    image: "/img/hero/Insuranc-tab-desktop.png",
  },
  {
    id: "payroll",
    icon: "/img/user-check-01.svg",
    label: "Payroll",
    image: "/img/hero/payroll-tab-desktop.png",
  },
  {
    id: "legal",
    icon: "/img/scales-02.svg",
    label: "Legal",
    image: "/img/hero/Legal-tab-tsaktop.png",
  },
];

const companyLogos: CompanyLogo[] = [
  {
    id: "logo-1",
    src: "/img/company-logo.svg",
    alt: "Company logo",
    className: "relative flex-[0_0_auto] mb-[-4.00px] ml-[-2.00px]",
  },
  {
    id: "logo-2",
    src: "/img/company-logo-1.svg",
    alt: "Company logo",
    className: "relative flex-[0_0_auto] mb-[-4.00px] -ml-3",
  },
  {
    id: "logo-3",
    src: "/img/company-logo-2.svg",
    alt: "Company logo",
    className: "mr-[-2.00px] relative flex-[0_0_auto] mb-[-4.00px] -ml-3",
  },
];

export const HeroNoGradient = (): JSX.Element => {
  const [activeService, setActiveService] = useState("incorporation");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Update slider position when active tab changes
  useEffect(() => {
    const updateSliderPosition = () => {
      const activeTab = tabRefs.current[currentIndex];
      const nav = navRef.current;
      
      if (activeTab && nav) {
        const navRect = nav.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        setSliderStyle({
          left: tabRect.left - navRect.left,
          width: tabRect.width,
        });
      }
    };

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(updateSliderPosition, 10);
    window.addEventListener('resize', updateSliderPosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateSliderPosition);
    };
  }, [currentIndex]);

  // Initialize slider position on mount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const activeTab = tabRefs.current[0];
      const nav = navRef.current;
      
      if (activeTab && nav) {
        const navRect = nav.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        setSliderStyle({
          left: tabRect.left - navRect.left,
          width: tabRect.width,
        });
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  // Auto-rotation disabled - tabs only switch on manual click

  // Handle manual tab click
  const handleServiceClick = (categoryId: string, index: number) => {
    // Fade out current image
    setImageOpacity(0);
    
    // After fade out, change service and fade in
    setTimeout(() => {
      setActiveService(categoryId);
      setCurrentIndex(index);
      setImageOpacity(1);
    }, 300);
  };

  // Handle arrow navigation for mobile
  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : serviceCategories.length - 1;
    handleServiceClick(serviceCategories[newIndex].id, newIndex);
    scrollToActiveTab(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < serviceCategories.length - 1 ? currentIndex + 1 : 0;
    handleServiceClick(serviceCategories[newIndex].id, newIndex);
    scrollToActiveTab(newIndex);
  };

  // Scroll to active tab in mobile view
  const scrollToActiveTab = (index: number) => {
    const container = scrollContainerRef.current;
    const activeTab = tabRefs.current[index];
    
    if (container && activeTab) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      const scrollLeft = activeTab.offsetLeft - (containerRect.width / 2) + (tabRect.width / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Get current service image
  const currentService = serviceCategories.find(
    (service) => service.id === activeService
  );

  return (
    <section
      className="flex flex-col w-full items-center gap-8 md:gap-12 lg:gap-[var(--3-spacing-spacing-7xl)] pt-20 md:pt-28 lg:pt-[var(--3-spacing-spacing-11xl)] pb-12 md:pb-16 lg:pb-[var(--3-spacing-spacing-7xl)] px-4 md:px-6 lg:px-8 relative overflow-hidden bg-[linear-gradient(0deg,rgba(29,24,52,1)_0%,rgba(29,24,52,1)_100%)]"
      aria-label="Hero section"
    >
      {/* Background decorative videos */}
      <video
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-screen min-w-full h-[1000px] opacity-5 object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/img/hero/white dots bg video top side.mp4" type="video/mp4" />
      </video>

      <video
        className="hidden lg:block absolute bottom-px left-1/2 -translate-x-1/2 w-screen min-w-full h-[1300px] opacity-5 object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/img/hero/white dot bg video bottom.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute left-0 bottom-px w-full h-[100px] bg-[linear-gradient(360deg,rgba(29,24,52,1)_0%,rgba(29,24,52,0)_100%)]"
        aria-hidden="true"
      />

      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl-duplicate)] relative w-full z-10">
        {/* Hero Title and Company Logos Section */}
        <div className="flex flex-col max-w-[var(--5-containers-container-max-width-desktop)] items-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-4xl)] px-0 md:px-4 lg:px-[var(--3-spacing-spacing-11xl-duplicate)] py-0 relative w-full">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-5xl)] relative w-full">
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[var(--3-spacing-spacing-3xl)] relative w-full">
              <h1 className="relative flex items-center justify-center w-full mt-8 md:mt-12 lg:mt-16 font-display-lg-semibold font-[number:var(--display-lg-semibold-font-weight)] text-1-color-modes-colors-text-text-primary-on-brand text-[28px] sm:text-[36px] md:text-[40px] lg:text-[length:var(--display-lg-semibold-font-size)] text-center tracking-[var(--display-lg-semibold-letter-spacing)] leading-[36px] sm:leading-[44px] md:leading-[48px] lg:leading-[var(--display-lg-semibold-line-height)] [font-style:var(--display-lg-semibold-font-style)] px-4 md:px-0">
                Automate Success. Eliminate Bureaucracy.
              </h1>

              {/* Company Logos and Trust Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative w-full">
                <div
                  className="inline-flex items-center px-0 py-px relative flex-[0_0_auto]"
                  role="img"
                  aria-label="Trusted company logos"
                >
                  {companyLogos.map((logo) => (
                    <img
                      key={logo.id}
                      className={logo.className}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>

                <p className="relative flex items-center justify-center w-fit font-text-xl-medium font-[number:var(--text-xl-medium-font-weight)] text-1-color-modes-component-colors-alpha-alpha-white-90 text-base md:text-lg lg:text-[length:var(--text-xl-medium-font-size)] text-center tracking-[var(--text-xl-medium-letter-spacing)] leading-[var(--text-xl-medium-line-height)] whitespace-nowrap [font-style:var(--text-xl-medium-font-style)]">
                  Trusted by 540+ clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services and Dashboard Section */}
        <div className="inline-flex flex-col items-center justify-end gap-4 md:gap-6 relative flex-[0_0_auto] rounded-[var(--2-radius-radius-4xl)] w-full max-w-[1050px]">
          {/* Service Tabs with Navigation Arrows */}
          <div className="relative w-full flex items-center gap-3">
            {/* Tabs Container */}
            <nav
              ref={navRef}
              className="flex items-center justify-between md:justify-center gap-3 md:gap-2.5 px-3 md:px-6 py-2 md:py-4 relative flex-1 bg-[#473f7066] rounded-2xl overflow-hidden border border-solid border-incorpify-primary backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]"
              aria-label="Service categories"
            >
              {/* Left Arrow - Mobile Only, Inside Container */}
              <button
                onClick={handlePrevious}
                className="md:hidden flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Previous service"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div
                ref={scrollContainerRef}
                className="flex items-start gap-2 md:gap-2.5 md:w-full md:overflow-x-auto scrollbar-hide scroll-smooth justify-center md:justify-start"
              >
            {/* Sliding indicator - Desktop Only */}
            <div
              className="hidden md:block absolute top-3 md:top-4 bottom-3 md:bottom-4 bg-1-color-modes-component-colors-alpha-alpha-white-40 border border-solid border-1-color-modes-colors-border-border-primary shadow-shadows-shadow-md rounded-lg md:rounded-[var(--2-radius-radius-lg)] transition-all duration-500 ease-in-out pointer-events-none z-0"
              style={{
                left: `${sliderStyle.left}px`,
                width: `${sliderStyle.width}px`,
              }}
            />
            
            {serviceCategories.map((category, index) => {
              const isActive = category.id === activeService;
              return (
                <button
                  key={category.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  onClick={() => handleServiceClick(category.id, index)}
                  className={`inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-2.5 py-2 px-3 md:py-3 md:px-4 relative flex-shrink-0 md:flex-1 rounded-none md:rounded-[var(--2-radius-radius-lg)] md:backdrop-blur-md md:backdrop-brightness-[100%] md:[-webkit-backdrop-filter:blur(12px)_brightness(100%)] transition-all duration-300 z-10 ${
                    isActive
                      ? "bg-transparent md:bg-transparent border-none md:border-transparent shadow-none md:shadow-none"
                      : "hidden md:flex bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] border-1-color-modes-colors-foreground-fg-senary-300 hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.15)_100%)]"
                  }`}
                  aria-pressed={isActive}
                  aria-label={category.label}
                >
                  <div className="inline-flex items-center gap-3 md:gap-3 relative flex-[0_0_auto]">
                    <img
                      className="relative w-5 h-5 md:w-4 md:h-4 brightness-0 invert"
                      alt=""
                      src={category.icon}
                      aria-hidden="true"
                    />

                    <span
                      className={`relative w-fit mt-[-1.00px] text-1-color-modes-colors-text-text-primary-on-brand text-base md:text-xs tracking-[var(--text-xs-${isActive ? "semibold" : "medium"}-letter-spacing)] leading-[var(--text-xs-${isActive ? "semibold" : "medium"}-line-height)] whitespace-nowrap [font-style:var(--text-xs-${isActive ? "semibold" : "medium"}-font-style)] ${isActive ? "font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)]" : "font-text-xs-medium font-[number:var(--text-xs-medium-font-weight)]"}`}
                    >
                      {category.label}
                    </span>
                  </div>
                </button>
              );
            })}
              </div>

              {/* Right Arrow - Mobile Only, Inside Container */}
              <button
                onClick={handleNext}
                className="md:hidden flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Next service"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </nav>
          </div>

          {/* Dynamic Service Preview Image */}
          <article className="inline-flex flex-col items-start gap-2.5 p-4 md:p-6 relative flex-[0_0_auto] bg-[#473f7066] rounded-3xl border border-solid border-incorpify-primary backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
            <div className="relative w-full max-w-[1050px] aspect-[1050/689] rounded-[20px] overflow-hidden">
              {currentService && (
                <Image
                  key={activeService}
                  className="relative w-full h-full object-contain transition-opacity duration-300 ease-in-out"
                  style={{ opacity: imageOpacity }}
                  alt={`${currentService.label} service preview`}
                  src={currentService.image}
                  width={1050}
                  height={689}
                  priority
                />
              )}
            </div>
          </article>
        </div>

        {/* CTA Button - 25% smaller on mobile */}
        <div className="w-full md:w-auto px-4 md:px-0 scale-75 md:scale-100 mb-8 md:mb-0">
          <button
            className="w-full md:w-auto flex items-center justify-center gap-2.5 h-14 md:h-14 lg:h-[56px] px-8 md:px-6 lg:px-[22px] relative rounded-[12px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic bg-white md:bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[12px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer hover:opacity-90 transition-opacity"
            type="button"
            aria-label="Get started with our services"
          >
            <span className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative z-10">
              <span className="relative w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-incorpify-primary md:text-white text-lg lg:text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                Get started
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Certifications Banner */}
      <div className="w-full max-w-[1280px] relative flex-shrink-0 px-4 md:px-0 scale-[3] md:scale-110 origin-center">
        <Image
          className="w-full h-auto"
          alt="Licensed and certified by government authorities"
          src="/images/frame-2095585000.png"
          width={1280}
          height={120}
        />
      </div>
    </section>
  );
};
