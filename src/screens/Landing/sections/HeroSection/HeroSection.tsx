import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const heroActions = [
  {
    label: "Попробовать бесплатно",
    variant: "default" as const,
    className:
      "h-auto rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-[var(--btn-pill-px)] py-[var(--btn-pill-py)] font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-white [font-style:var(--text-body-medium-font-style)] hover:bg-[var(--color-primary)]/90",
  }
];

export const HeroSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col items-center gap-[var(--gap-3xl)] px-4 pt-6 lg:px-8 lg:pt-10">
        <Badge className="flex h-auto items-center gap-2.5 rounded-[var(--radius-2xl)] border border-solid border-[var(--color-primary-faint)] bg-[var(--color-bg-white-50)] py-[var(--badge-py)] pl-3 pr-4 font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] text-[var(--color-primary-muted)] backdrop-blur-[2px] backdrop-brightness-[100%] [font-style:var(--text-callout-medium-font-style)] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
          <img
            className="h-6 w-6 shrink-0"
            alt="Frame"
            src="/frame-2131328921.svg"
          />
          <span className="whitespace-nowrap">Сгенировать контент</span>
        </Badge>
        <header className="flex w-full flex-col items-center gap-[var(--gap-lg)]">
          <h1 className="max-w-[1016px] text-center font-normal leading-[1.05] tracking-[var(--h1-tracking)] text-[var(--color-primary)] [font-family:'Onest',Helvetica] text-[var(--h1-size-mobile)] lg:text-7xl lg:leading-[var(--h1-leading)]">
            Одна подписка — топовые нейросети для контента, творчества и работы
          </h1>
          <div className="flex flex-col items-center">
            <div className="max-w-[584px] text-center text-base font-normal leading-5 tracking-[var(--text-body-letter-spacing)] text-[var(--color-primary)] [font-family:'Onest',Helvetica] lg:text-xl lg:tracking-[-0.40px]">
              <p className="mb-[24px] lg:mb-[72px]">
                Доступ без VPN. Оплата российской картой.
                Прозрачные тарифы без скрытых ограничений.
              </p>
            </div>
            <nav
              aria-label="Основные действия"
              className="flex flex-wrap mb-[100px] items-center justify-center gap-[var(--gap-sm)]"
            >
              {heroActions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.variant}
                  className={action.className}
                >
                  {action.label}
                </Button>
              ))}
            </nav>
          </div>
        </header>
      </div>
    </section>
  );
};
