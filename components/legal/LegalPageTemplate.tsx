"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export interface TextContent {
  id: string;
  text: string;
  isLink?: boolean;
  href?: string;
}

export interface Subsection {
  id: string;
  title: string;
  content: TextContent[];
}

export interface Section {
  id: string;
  title: string;
  subsections?: Subsection[];
  content?: TextContent[];
}

export interface NavigationItem {
  id: number;
  label: string;
  sectionId: string;
}

interface LegalPageTemplateProps {
  title: string;
  subtitle: string;
  navigationItems: NavigationItem[];
  sections: Section[];
}

export const LegalPageTemplate: React.FC<LegalPageTemplateProps> = ({
  title,
  subtitle,
  navigationItems,
  sections,
}) => {
  const [activeSection, setActiveSection] = useState<string>(
    navigationItems[0]?.sectionId || ""
  );

  const handleNavigationClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full bg-white">
        {/* Title Section */}
        <section className="flex flex-col w-full items-center gap-10 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 px-4 md:px-8 lg:px-10">
          <header className="flex flex-col items-center gap-4 w-full max-w-7xl">
            <h1 className="font-semibold text-incorpify-primary text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center tracking-tight leading-tight">
              {title}
            </h1>
            <p className="font-normal text-gray-600 text-base md:text-lg text-center leading-7">
              {subtitle}
            </p>
          </header>
        </section>

        {/* Main Content Section */}
        <div className="flex flex-col items-center w-full gap-12 md:gap-16 pt-12 md:pt-16 pb-16 md:pb-24 px-4 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 w-full max-w-7xl">
            {/* Navigation Sidebar */}
            <nav
              className="w-full lg:w-80 lg:sticky lg:top-24 flex-shrink-0"
              aria-label="Table of contents"
            >
              <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
                <ul className="flex flex-col gap-3">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavigationClick(item.sectionId)}
                        className={`w-full text-left px-5 py-3 rounded-lg transition-all ${
                          activeSection === item.sectionId
                            ? "bg-incorpify-primary text-white font-semibold"
                            : "text-gray-700 font-normal hover:bg-gray-100"
                        } text-sm md:text-base`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Content */}
            <article className="flex-1 w-full min-w-0">
              <div className="flex flex-col gap-12 md:gap-16">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    <h2 className="font-semibold text-incorpify-primary text-2xl md:text-3xl tracking-tight leading-tight mb-6 md:mb-8">
                      {section.title}
                    </h2>

                    {/* Direct content (for sections without subsections) */}
                    {section.content && section.content.length > 0 && (
                      <div className="flex flex-col gap-4 mb-6">
                        <p className="font-normal text-gray-700 text-base md:text-lg leading-relaxed">
                          {section.content.map((item) =>
                            item.isLink ? (
                              <a
                                key={item.id}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-incorpify-primary underline hover:opacity-80"
                              >
                                {item.text}
                              </a>
                            ) : (
                              <span key={item.id}>{item.text}</span>
                            )
                          )}
                        </p>
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections &&
                      section.subsections.map((subsection) => (
                        <div
                          key={subsection.id}
                          className="mb-8 last:mb-0"
                          id={subsection.id}
                        >
                          <h3 className="font-semibold text-gray-900 text-lg md:text-xl tracking-tight leading-tight mb-4">
                            {subsection.title}
                          </h3>
                          <div className="flex flex-col gap-3">
                            {subsection.content.map((item) => (
                              <p
                                key={item.id}
                                className="font-normal text-gray-700 text-base leading-relaxed pl-4"
                              >
                                {item.isLink ? (
                                  <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-incorpify-primary underline hover:opacity-80"
                                  >
                                    {item.text}
                                  </a>
                                ) : (
                                  item.text
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

