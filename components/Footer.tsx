import React from "react";
import Image from "next/image";
import Link from "next/link";

const servicesLinks = [
  "Incorporation",
  "Accounting & Tax",
  "Residency",
  "Banking",
  "Insurance",
  "Payroll",
  "Legal",
  "More",
];

const companyLinks = ["Careers", "Articles"];

const legalLinks = [
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Data Processing Agreement", href: "/legal/data-processing-agreement" },
];

const offices = ["Dubai", "Riyadh", "Dublin", "West Palm Beach"];

const socialIcons = [
  { src: "/img/social-icon.svg", alt: "LinkedIn", width: 14, height: 14 },
  { src: "/img/social-icon-1.svg", alt: "Twitter", width: 14, height: 14 },
  { src: "/img/social-icon-2.svg", alt: "Instagram", width: 14, height: 14 },
];

export const Footer = (): JSX.Element => {
  return (
    <footer
      className="flex flex-col w-full items-center px-4 md:px-8 lg:px-[100px] py-0 bg-incorpify-primary"
      role="contentinfo"
    >
      <div className="flex flex-col items-center gap-[var(--3-spacing-spacing-6xl-duplicate)] pt-[var(--3-spacing-spacing-7xl)] pb-[var(--3-spacing-spacing-6xl)] px-0 w-full max-w-[var(--5-containers-container-max-width-desktop)]">
        {/* Services Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[var(--3-spacing-spacing-6xl)] w-full">
          {/* Logo and Tagline */}
          <div className="flex flex-col w-full lg:w-60 items-start gap-[var(--3-spacing-spacing-4xl)]">
            <Link href="/" aria-label="Go to Incorpify homepage">
              <Image
                className="w-[160px] md:w-[194.63px] h-auto cursor-pointer hover:opacity-90 transition-opacity"
                alt="Incorpify Logo"
                src="/img/group-1.png"
                width={195}
                height={36}
              />
            </Link>

            <p className="w-full [font-family:'Inter',Helvetica] font-semibold text-1-color-modes-colors-text-text-white text-xl md:text-2xl tracking-[0] leading-7 md:leading-8">
              Simplify your business journey with Incorpify
            </p>
          </div>

          {/* Navigation Links */}
          <nav
            className="flex flex-col md:flex-row w-full lg:flex-1 items-start gap-8 md:gap-6 lg:gap-14"
            aria-label="Footer Navigation"
          >
            {/* Services Column */}
            <div className="flex flex-col min-w-[120px] flex-1 items-start gap-4">
              <h3 className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-1-color-modes-component-colors-utility-gray-utility-gray-400 text-sm tracking-[0] leading-5">
                Services
              </h3>

              <ul className="flex flex-col items-start gap-2 w-full">
                {servicesLinks.map((link, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center gap-[var(--3-spacing-spacing-md)]"
                  >
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-[var(--3-spacing-spacing-sm)] hover:text-white transition-colors"
                    >
                      <span className="w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-1-color-modes-component-colors-utility-gray-utility-gray-200 text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col w-full md:w-[200px] items-start gap-4">
              <h3 className="mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-1-color-modes-component-colors-utility-gray-utility-gray-400 text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                Company
              </h3>

              <ul className="flex flex-col items-start gap-2 w-full">
                {companyLinks.map((link, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center gap-[var(--3-spacing-spacing-md)]"
                  >
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-[var(--3-spacing-spacing-sm)] hover:text-white transition-colors"
                    >
                      <span className="w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-1-color-modes-component-colors-utility-gray-utility-gray-200 text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col min-w-[120px] flex-1 items-start gap-4">
              <h3 className="mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-1-color-modes-component-colors-utility-gray-utility-gray-400 text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                Legal
              </h3>

              <ul className="flex flex-col items-start gap-2 w-full">
                {legalLinks.map((link, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center gap-[var(--3-spacing-spacing-md)]"
                  >
                    <Link
                      href={link.href}
                      className="inline-flex items-center justify-center gap-[var(--3-spacing-spacing-sm)] hover:text-white transition-colors"
                    >
                      <span className="w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-1-color-modes-component-colors-utility-gray-utility-gray-200 text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Legal Section */}
        <div className="flex flex-col items-start gap-12 w-full">
          {/* Offices */}
          <section className="w-full">
            <div className="flex flex-col items-start gap-4">
              <h2 className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-1-color-modes-component-colors-utility-gray-utility-gray-400 text-sm tracking-[0] leading-5">
                Offices
              </h2>

              <nav
                className="w-full flex flex-wrap items-start gap-4"
                aria-label="Office locations"
              >
                {offices.map((office, index) => (
                  <React.Fragment key={index}>
                    <div className="inline-flex items-center gap-[var(--3-spacing-spacing-md)]">
                      <div className="inline-flex items-center justify-center gap-[var(--3-spacing-spacing-sm)]">
                        <span className="w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-1-color-modes-component-colors-utility-gray-utility-gray-200 text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                          {office}
                        </span>
                      </div>
                    </div>
                    {index < offices.length - 1 && (
                      <div className="inline-flex items-center gap-[var(--3-spacing-spacing-md)]">
                        <div className="inline-flex items-center justify-center gap-[var(--3-spacing-spacing-sm)]">
                          <span
                            className="w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-1-color-modes-component-colors-utility-gray-utility-gray-200 text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]"
                            aria-hidden="true"
                          >
                            |
                          </span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          </section>

          {/* Copyright and Social */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full">
            <div className="flex items-start gap-[var(--3-spacing-spacing-xl)]">
              <p className="w-fit mt-[-1.00px] font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#ffffffb2] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                © 2024 Incorpify All right reserved.
              </p>
            </div>

            <div className="flex flex-1 justify-start md:justify-end items-end gap-[var(--3-spacing-spacing-xl)]">
              <nav
                className="inline-flex items-center gap-[var(--3-spacing-spacing-3xl)]"
                aria-label="Social media links"
              >
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={icon.alt}
                    className="w-3.5 h-3.5 hover:opacity-70 transition-opacity"
                  >
                    <img
                      className="w-3.5 h-3.5 aspect-[1]"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

