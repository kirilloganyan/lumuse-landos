"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AIFeaturesSection } from "./sections/AIFeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { PlatformOverviewSection } from "./sections/PlatformOverviewSection/PlatformOverviewSection";
import { PricingAndFaqSection } from "./sections/PricingAndFaqSection";
import { UseCasesSection } from "./sections/UseCasesSection";

const navigationItems = [
  { label: "Возможности", href: "#ai-features" },
  { label: "Цены", href: "#pricing-faq" },
  { label: "FAQ", href: "#pricing-faq" },
];

export const Landing = (): React.JSX.Element => {
  return (
    <div className="min-h-screen w-full bg-[var(--color-bg-page)]">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/50 backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
        <div className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between gap-[var(--gap-md)] px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex min-w-0 items-center gap-[var(--gap-sm)] sm:gap-[var(--gap-lg)]">
            <a href="#" className="shrink-0">
              <img
                className="h-8 w-[127px]"
                alt="Frame"
                src="/frame-2131328921.svg"
              />
            </a>
            <img
              className="hidden h-9 w-px shrink-0 sm:block"
              alt="Vector"
              src="/icon-54.svg"
            />
            <nav aria-label="Основная навигация" className="hidden sm:block">
              <ul className="flex items-center gap-[var(--gap-lg)] px-2">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] whitespace-nowrap text-[var(--color-primary)] [font-style:var(--text-body-medium-font-style)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-[var(--gap-xs)] sm:gap-[var(--gap-sm)]">
            <Button
              variant="ghost"
              className="h-auto rounded-[var(--radius-pill)] px-3 py-3 text-[var(--color-primary-muted)] hover:bg-transparent hover:text-[var(--color-primary)] sm:px-4 sm:py-3.5"
            >
              <span className="inline-flex items-center">
                <img className="h-5 w-5" alt="Icon" src="/icon-54.svg" />
                <span className="px-1.5 font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] whitespace-nowrap [font-style:var(--text-body-medium-font-style)]">
                  Войти
                </span>
              </span>
            </Button>
            <Button className="h-auto rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-[var(--btn-px)] py-[var(--btn-py)] text-white hover:bg-[var(--color-primary)]/90">
              <span className="px-1.5 font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] whitespace-nowrap [font-style:var(--text-body-medium-font-style)]">
                Попробовать
              </span>
            </Button>
          </div>
        </div>
      </header>
      <main className="relative flex w-full flex-col overflow-hidden pt-[68px] sm:pt-[80px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[748px] bg-[var(--gradient-hero-top)]" />
        <div className="pointer-events-none absolute left-0 right-0 top-[48%] h-[1560px] bg-[var(--gradient-hero-mid)]" />
        <HeroSection />
        <section className="relative z-10 mx-auto w-full max-w-[var(--container-content)] px-4 py-8 sm:py-10">
          <img
            className="mx-auto h-12 w-full max-w-[var(--container-content)]"
            alt="Frame"
            src="/frame-2131328938.svg"
          />
        </section>
        <section id="ai-features" className="relative z-10 w-full">
          <AIFeaturesSection />
        </section>
        <section className="relative z-10 w-full">
          <UseCasesSection />
        </section>
        <section className="relative z-10 w-full">
          <PlatformOverviewSection />
        </section>
        <section id="pricing-faq" className="relative z-10 w-full">
          <PricingAndFaqSection />
        </section>
        <FooterSection />
      </main>
    </div>
  );
};
