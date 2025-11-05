"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Services", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "About", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
];

const servicesList = [
  { label: "Incorporation", href: "/services/incorporation" },
  { label: "Accounting & Tax", href: "/services/accounting-tax" },
  { label: "Visa & Residency", href: "/services/visa-residency" },
  { label: "Banking", href: "/services/banking" },
  { label: "Insurance", href: "/services/insurance" },
  { label: "Payroll", href: "/services/payroll" },
  { label: "Legal", href: "/services/legal" },
  { label: "Other Services", href: "/services/other-services" },
];

export const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    if (servicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  return (
    <header className="w-full h-[72px] flex items-center justify-center bg-transparent backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(29,24,52,1)_0%,rgba(29,24,52,0)_100%)] fixed top-0 left-0 z-50">
      <div className="flex max-w-[var(--5-containers-container-max-width-desktop)] items-center gap-[var(--3-spacing-spacing-xl)] px-4 md:px-8 lg:px-[var(--3-spacing-spacing-5xl)] py-0 w-full">
        {/* Logo */}
        <div className="flex items-center gap-[var(--3-spacing-spacing-6xl)] flex-1">
          <Link href="/" aria-label="Go to Incorpify homepage">
            <Image
              className="relative w-[120px] md:w-[140px] h-auto cursor-pointer hover:opacity-90 transition-opacity"
              alt="Incorpify Logo"
              src="/img/group-1.png"
              width={140}
              height={26}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:inline-flex items-center gap-[var(--3-spacing-spacing-xxs-duplicate)]"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationItems.map((item, index) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={index}
                    ref={dropdownRef}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="inline-flex items-center justify-center gap-[var(--3-spacing-spacing-xxs-duplicate)] pt-[var(--3-spacing-spacing-xs-duplicate)] pr-[var(--3-spacing-spacing-sm)] pb-[var(--3-spacing-spacing-xs-duplicate)] pl-[var(--3-spacing-spacing-sm)] rounded-[var(--2-radius-radius-md)] overflow-hidden hover:bg-white/10 transition-colors"
                      aria-haspopup="true"
                      aria-expanded={servicesDropdownOpen}
                    >
                      <div className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs-duplicate)] pl-[var(--3-spacing-spacing-xxs-duplicate)] py-0">
                        <span className="w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[color:var(--primitives-colors-base-white)] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                          {item.label}
                        </span>
                      </div>

                      <img
                        className={`relative w-4 h-4 transition-transform ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                        alt=""
                        src="/img/chevron-down-1.svg"
                        aria-hidden="true"
                      />
                    </button>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-[#1d1834] rounded-lg shadow-lg border border-white/10 py-2 z-50">
                        {servicesList.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block px-4 py-2.5 text-white hover:bg-white/10 transition-colors font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[length:var(--text-md-semibold-font-size)]"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={index}
                  href={`#${item.label.toLowerCase()}`}
                  className="inline-flex items-center justify-center gap-[var(--3-spacing-spacing-xxs-duplicate)] pt-[var(--3-spacing-spacing-xs-duplicate)] pr-[var(--3-spacing-spacing-sm)] pb-[var(--3-spacing-spacing-xs-duplicate)] pl-[var(--3-spacing-spacing-sm)] rounded-[var(--2-radius-radius-md)] overflow-hidden hover:bg-white/10 transition-colors"
                  aria-haspopup={item.hasDropdown ? "true" : undefined}
                >
                  <div className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs-duplicate)] pl-[var(--3-spacing-spacing-xxs-duplicate)] py-0">
                    <span className="w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[color:var(--primitives-colors-base-white)] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                      {item.label}
                    </span>
                  </div>

                  {item.hasDropdown && (
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/img/chevron-down-1.svg"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:inline-flex items-center gap-[var(--3-spacing-spacing-lg-duplicate)]">
          <button
            type="button"
            className="all-[unset] box-border inline-flex h-10 items-center justify-center gap-[var(--3-spacing-spacing-xs)] pt-[var(--3-spacing-spacing-md)] pr-[var(--3-spacing-spacing-lg)] pb-[var(--3-spacing-spacing-md)] pl-[var(--3-spacing-spacing-lg)] rounded-[var(--2-radius-radius-md-duplicate)] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-lg before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Login to your account"
          >
            <div className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0">
              <span className="w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[color:var(--primitives-colors-base-white)] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                Login
              </span>
            </div>
          </button>

          <button
            type="button"
            className="all-[unset] box-border inline-flex h-10 items-center justify-center gap-[var(--3-spacing-spacing-xs)] pt-[var(--3-spacing-spacing-md)] pr-[var(--3-spacing-spacing-lg)] pb-[var(--3-spacing-spacing-md)] pl-[var(--3-spacing-spacing-lg)] bg-1-color-modes-colors-foreground-fg-white rounded-[var(--2-radius-radius-md-duplicate)] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-lg before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-white/95 transition-colors cursor-pointer"
            aria-label="Get started with Incorpify"
          >
            <div className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0">
              <span className="w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-incorpifyprimary text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                Get started
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#1d1834] border-t border-white/10 md:hidden">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navigationItems.map((item, index) => {
              if (item.label === "Services") {
                return (
                  <div key={index} className="flex flex-col">
                    <button
                      type="button"
                      className="flex items-center justify-between px-4 py-3 rounded-md hover:bg-white/10 transition-colors"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    >
                      <span className="font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[color:var(--primitives-colors-base-white)] text-[length:var(--text-md-semibold-font-size)]">
                        {item.label}
                      </span>
                      <img
                        className={`w-4 h-4 transition-transform ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                        alt=""
                        src="/img/chevron-down-1.svg"
                        aria-hidden="true"
                      />
                    </button>
                    {servicesDropdownOpen && (
                      <div className="flex flex-col pl-4 py-2 space-y-1">
                        {servicesList.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors font-text-sm-semibold"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={index}
                  href={`#${item.label.toLowerCase()}`}
                  className="flex items-center justify-between px-4 py-3 rounded-md hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[color:var(--primitives-colors-base-white)] text-[length:var(--text-md-semibold-font-size)]">
                    {item.label}
                  </span>
                  {item.hasDropdown && item.label !== "Services" && (
                    <img
                      className="w-4 h-4"
                      alt=""
                      src="/img/chevron-down-1.svg"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <button
                type="button"
                className="w-full h-10 flex items-center justify-center rounded-md border-[none] bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] shadow-shadows-shadow-xs-skeuomorphic hover:opacity-90 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-white text-[length:var(--text-sm-semibold-font-size)]">
                  Login
                </span>
              </button>
              <button
                type="button"
                className="w-full h-10 flex items-center justify-center rounded-md bg-white hover:bg-white/95 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[var(--incorpify-primary)] text-[length:var(--text-sm-semibold-font-size)]">
                  Get started
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
