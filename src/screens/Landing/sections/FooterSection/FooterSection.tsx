import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const navigationGroups = [
  ["Возможности", "Цены", "FAQ"],
  ["Телеграм", "Вконтакте", "hello@lumuse.ai"],
];

const legalLinks = [
  "Политика конфиденциальности",
  "Пользовательское соглашение",
];

export const FooterSection = (): React.JSX.Element => {
  return (
    <footer className="relative w-full overflow-hidden rounded-t-[var(--radius-footer)] bg-[var(--color-primary-faint)]">
      <Image
        className="pointer-events-none absolute -top-[52px] left-1/4 w-[1430px] max-w-none select-none opacity-70"
        alt=""
        src="/rectangle-240647075.svg"
        width={1430}
        height={263}
      />
      <Image
        className="pointer-events-none absolute -top-[52px] left-[39%] w-[1205px] max-w-none select-none opacity-50"
        alt=""
        src="/rectangle-240647075.svg"
        width={1205}
        height={135}
      />
      <Image
        className="pointer-events-none absolute -top-[153px] left-[29%] w-[795px] max-w-none select-none opacity-60"
        alt=""
        src="/rectangle-240647075.svg"
        width={795}
        height={372}
      />
      <Card className="relative z-10 border-0 bg-[linear-gradient(180deg,#E29972_0%,#E05D17_50%,rgba(224,93,23,0)_100%)] shadow-none">
        <CardContent className="mx-auto flex min-h-[420px] w-full max-w-[var(--container-footer)] flex-col justify-between px-6 pb-16 pt-[76px] sm:px-10 lg:px-[90px] lg:pb-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <a href="#" className="shrink-0" aria-label="Lumuse — наверх страницы">
              <Image
                className="h-auto w-[249px] max-w-full"
                alt="Lumuse"
                src="/frame-2131328921.svg"
                width={249}
                height={58}
              />
            </a>
            <nav
              aria-label="Навигация в футере"
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16 lg:grid-cols-[189px_185px] lg:gap-6"
            >
              {navigationGroups.map((group, groupIndex) => (
                <ul
                  key={`group-${groupIndex}`}
                  className="flex min-w-0 flex-col items-start gap-3"
                >
                  {group.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="font-text-body-medium text-left text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-[var(--color-primary)] [font-style:var(--text-body-medium-font-style)]"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>
          </div>
          <div className="mt-12 flex flex-col gap-4 pt-6 text-[var(--color-primary-muted)] md:flex-row md:items-center md:justify-between">
            <p className="font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] [font-style:var(--text-callout-medium-font-style)]">
              Lumuse, 2026. Все права защищены
            </p>
            <nav
              aria-label="Юридическая навигация"
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
