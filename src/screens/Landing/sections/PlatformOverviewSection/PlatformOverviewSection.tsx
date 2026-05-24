"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

export const PlatformOverviewSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col items-center gap-14 md:gap-16">
        <header className="flex w-full max-w-[702px] flex-col items-center gap-8 text-center">
          <h2 className="max-w-[820px] [font-family:'Onest',Helvetica] text-[var(--h2-size-mobile)] font-normal leading-[1] tracking-[var(--h2-tracking-mobile)] text-[var(--color-primary)] sm:text-[var(--h2-size-tablet)] sm:tracking-[var(--h2-tracking-tablet)] lg:text-[var(--h2-size)] lg:tracking-[var(--h2-tracking)]">
            Все возможности искусственного интеллекта в&nbsp;одном месте
          </h2>
          <Button className="h-auto rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-4 py-3.5 font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-white hover:bg-[var(--color-primary)]">
            Попробовать бесплатно
          </Button>
        </header>
        <div className="flex w-full flex-col items-center gap-8 md:gap-14">
          <ToggleGroup
            type="single"
            defaultValue="assistant"
            className="inline-flex items-center rounded-[var(--radius-2xl)] border border-solid bg-[var(--color-primary-faint)] p-1 shadow-[inset_0px_0px_36px_#c7c7c71f] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]"
          >
            <ToggleGroupItem
              value="assistant"
              className="h-auto rounded-[var(--radius-2xl)] bg-white px-5 py-2.5 [font-family:'Onest',Helvetica] text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-[var(--color-primary)] data-[state=on]:bg-white data-[state=on]:text-[var(--color-primary)]"
              aria-label="Чат с ассистентом"
            >
              Чат с ассистентом
            </ToggleGroupItem>
            <ToggleGroupItem
              value="images"
              className="h-auto rounded-[var(--radius-2xl)] px-5 py-2.5 [font-family:'Onest',Helvetica] text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-[var(--color-primary-muted)] data-[state=on]:bg-white data-[state=on]:text-[var(--color-primary)]"
              aria-label="Генерация изображений"
            >
              Генерация изображений
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </section>
  );
};
