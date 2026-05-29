"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const PlatformOverviewSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full px-4 py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col items-center gap-14 lg:gap-16">
        <header className="flex w-full max-w-[702px] flex-col items-center gap-8 text-center">
          <h2 className="max-w-[820px] [font-family:'Onest',Helvetica] text-[var(--h2-size-mobile)] font-normal leading-[1] tracking-[var(--h2-tracking-mobile)] text-[var(--color-primary)] lg:text-[var(--h2-size)] lg:tracking-[var(--h2-tracking)]">
            Все возможности искусственного интеллекта в&nbsp;одном месте
          </h2>
          <Button className="h-auto rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-4 py-3.5 font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-white hover:bg-[var(--color-primary)]">
            Попробовать бесплатно
          </Button>
        </header>
      </div>
    </section>
  );
};
