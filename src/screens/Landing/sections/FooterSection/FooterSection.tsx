import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const navigationLinks = ["Возможности", "Цены", "FAQ"];
const contactLinks = ["Телеграм", "Вконтакте", "hello@lumuse.ai"];
const legalLinks = [
  "Политика конфиденциальности",
  "Пользовательское соглашение",
];

export const FooterSection = (): React.JSX.Element => {
  return (
    <footer className="relative w-full overflow-hidden rounded-t-[var(--radius-footer)] bg-[var(--color-primary-faint)]">
      <img
        className="pointer-events-none absolute -top-[52px] left-1/4 w-[1430px] max-w-none"
        alt="Rectangle"
        src="/rectangle-240647075-1.svg"
      />
      <img
        className="pointer-events-none absolute -top-[52px] left-[39%] w-[1205px] max-w-none"
        alt="Rectangle"
        src="/rectangle-240647075-3.svg"
      />
      <img
        className="pointer-events-none absolute -top-[153px] left-[29%] w-[795px] max-w-none"
        alt="Rectangle"
        src="/rectangle-240647075-2.svg"
      />
      <Card className="relative z-10 border-0 bg-transparent shadow-none">
        <CardContent className="mx-auto flex min-h-[420px] w-full max-w-[var(--container-footer)] flex-col justify-between px-6 pb-20 pt-[76px] sm:px-10 lg:px-[90px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="shrink-0">
              <img
                className="h-auto w-[249px] max-w-full"
                alt="Lumuse"
                src="/frame-2131328920.svg"
              />
            </div>
            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16 lg:gap-6"
            >
              <ul className="flex min-w-0 flex-col items-start gap-3">
                {navigationLinks.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-[var(--color-primary)] [font-style:var(--text-body-medium-font-style)]"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="flex min-w-0 flex-col items-start gap-3">
                {contactLinks.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="font-text-body-medium text-left text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-[var(--color-primary)] [font-style:var(--text-body-medium-font-style)]"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-transparent pt-6 text-[var(--color-primary-muted)] md:flex-row md:items-center md:justify-between">
            <p className="font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] [font-style:var(--text-callout-medium-font-style)]">
              Lumuse, 2026. Все права защищены
            </p>
            <nav
              aria-label="Legal navigation"
              className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10"
            >
              {legalLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  className="text-left font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] text-[var(--color-primary-muted)] [font-style:var(--text-callout-medium-font-style)] md:text-right"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
