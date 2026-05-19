"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pricingTabs = ["Месяц", "Год"] as const;

type PricingTab = (typeof pricingTabs)[number];

const planPrices: Record<PricingTab, string[]> = {
  Месяц: ["0₽", "699₽", "1 499₽", "1 999₽"],
  Год: ["0₽", "6 990₽", "14 990₽", "19 990₽"],
};

const plans = [
  {
    title: "Бесплатный",
    description: "Попробуйте возможности без риска и откройте для себя Lumuse",
    period: "Навсегда",
    cta: "Попробовать",
    highlighted: false,
    badge: null,
    features: [
      "До 100 обращений к GPT 5 Nano",
      "До 20 изображений в FLUX DEV",
      "До 3 активных проектов",
      "Хватает для старта — но быстро захочется больше",
    ],
  },
  {
    title: "Базовый",
    description: "Для регулярной работы с текстами, изображениями и проектами",
    period: "Цена за период",
    cta: "Оформить подписку",
    highlighted: false,
    badge: {
      text: "20%",
      className: "bg-[var(--color-accent-faint)] text-[var(--color-accent)]",
    },
    features: [
      "Все возможности предыдущего уровня",
      "Большие лимиты для GPT 5 mini и GPT-5 Nano",
      "До 300 сообщений за месяц",
      "До 100 изображений за месяц",
      "Ведение задач и проектов в workspace",
    ],
  },
  {
    title: "Супер",
    description: "Откройте все возможности AI-ассистента вместе с Lumuse",
    period: "Цена за период",
    cta: "Оформить подписку",
    highlighted: true,
    badge: {
      text: "20%",
      className: "bg-[var(--color-accent)] text-white",
    },
    features: [
      "Все возможности предыдущего уровня",
      "Неограниченные лимиты для GPT 5 mini и GPT-5 Nano",
      "До 300 изображений вместе с FLUX DEV",
      "Автоматизируйте процессы и масштабируйте проекты",
      "Ранний доступ к новым функциям",
    ],
  },
  {
    title: "Ультра",
    description: "Повышайте продуктивность на максимум вместе с Lumuse",
    period: "Цена за период",
    cta: "Оформить подписку",
    highlighted: false,
    badge: {
      text: "20%",
      className: "bg-[var(--color-accent-faint)] text-[var(--color-accent)]",
    },
    features: [
      "Все возможности предыдущего уровня",
      "Генерируйте изображения без ограничений вместе с FLUX DEV",
      "Исследуйте и анализируйте данные",
      "Максимальная скорость с приоритетом",
      "Доступ к экспериментальным функциям",
    ],
  },
] as const;

const faqs = [
  {
    id: "item-1",
    question: "Что такое Lumuse?",
    answer:
      "Lumuse — AI-ассистент с рабочим пространством для создания контента, ведения задач и управления проектами в одном интерфейсе.",
  },
  {
    id: "item-2",
    question: "Какие нейросети внутри?",
    answer:
      "Внутри доступны современные текстовые и визуальные модели: GPT 5 Nano, GPT 5 mini, FLUX DEV и другие инструменты для ежедневных задач.",
  },
  {
    id: "item-3",
    question: "Чем отличается от Notion/Trello?",
    answer:
      "Lumuse объединяет проектный дашборд и AI-инструменты: ассистент помогает генерировать материалы, анализировать данные и сразу раскладывать работу по проектам.",
  },
  {
    id: "item-4",
    question: "Как происходит оплата?",
    answer:
      "Вы выбираете тариф и период оплаты, после чего оплачиваете подписку российской картой. Бесплатный тариф доступен без оплаты.",
  },
  {
    id: "item-5",
    question: "Можно ли вручную править структуру проектов?",
    answer:
      "Да. AI помогает собрать структуру быстрее, но вы можете вручную изменять задачи, разделы и материалы внутри workspace.",
  },
] as const;

export const PricingAndFaqSection = (): React.JSX.Element => {
  const [billingPeriod, setBillingPeriod] = useState<PricingTab>("Месяц");

  return (
    <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col items-start gap-[var(--gap-6xl)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="flex w-full flex-col items-start gap-[var(--gap-5xl)]">
        <header className="flex w-full flex-col items-center gap-[var(--gap-xl)]">
          <div className="flex w-full max-w-[628px] flex-col items-center gap-[var(--gap-md)]">
            <h2 className="text-center font-normal leading-[var(--h2-leading-tablet)] tracking-[var(--h2-tracking-tablet)] text-[var(--color-primary)] [font-family:'Onest',Helvetica] text-[var(--h2-size-mobile)] md:text-[var(--h2-size-tablet)] lg:text-[var(--h2-size)] lg:leading-[var(--h2-leading)] lg:tracking-[var(--h2-tracking)]">
              Простые и понятные тарифы
            </h2>
            <p className="max-w-[532px] text-center font-headline-headline-3 text-[length:var(--headline-headline-3-font-size)] font-[number:var(--headline-headline-3-font-weight)] leading-[var(--headline-headline-3-line-height)] tracking-[var(--headline-headline-3-letter-spacing)] text-[var(--color-primary-muted)] [font-style:var(--headline-headline-3-font-style)]">
              Начните бесплатно и подключайте больше возможностей по мере роста ваших проектов.
            </p>
          </div>
          <div className="inline-flex items-center rounded-[var(--radius-2xl)] border border-solid border-[var(--color-primary-faint)] bg-[var(--color-primary-faint)] p-1 shadow-[inset_0px_0px_36px_#c7c7c71f] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
            {pricingTabs.map((tab) => {
              const active = billingPeriod === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setBillingPeriod(tab)}
                  className={`inline-flex items-center justify-center rounded-[var(--radius-2xl)] px-5 py-2.5 font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] transition-colors [font-style:var(--text-body-medium-font-style)] ${
                    active
                      ? "bg-white text-[var(--color-primary)]"
                      : "text-[var(--color-primary-muted)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </header>

        <div className="flex w-full flex-col items-start gap-[var(--gap-sm)]">
          <div className="grid w-full grid-cols-1 gap-[var(--gap-sm)] md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, index) => (
              <Card
                key={plan.title}
                className={`relative flex h-full min-h-[var(--card-min-h)] flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-solid border-[var(--color-primary-faint)] shadow-none ${
                  plan.highlighted
                    ? "bg-[radial-gradient(circle_at_85%_0%,rgba(224,94,24,0.28),transparent_38%),var(--gradient-card)]"
                    : "bg-[var(--gradient-card)]"
                }`}
              >
                <CardContent className="relative flex h-full flex-col justify-between gap-[var(--gap-lg)] px-[var(--card-px)] py-[var(--card-py)]">
                  <div className="flex flex-col items-center gap-5">
                    <div className="flex w-full flex-col items-start gap-[var(--gap-md)]">
                      <div className="flex w-full flex-col items-start gap-1">
                        <div className="flex min-h-8 w-full items-center gap-2">
                          <h3 className="font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] text-[var(--color-primary)] [font-style:var(--headline-headline-2-font-style)]">
                            {plan.title}
                          </h3>
                          {plan.badge ? (
                            <Badge
                              className={`rounded-[var(--radius-badge)] px-2 py-0.5 font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] shadow-none hover:${plan.badge.className} ${plan.badge.className}`}
                            >
                              {plan.badge.text}
                            </Badge>
                          ) : null}
                        </div>
                        <p className="font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] text-[var(--color-primary-muted)] [font-style:var(--text-callout-medium-font-style)]">
                          {plan.description}
                        </p>
                      </div>
                      <div className="flex w-full flex-col items-start gap-0.5">
                        <p className="font-medium leading-[var(--price-leading)] tracking-[var(--price-tracking)] text-[var(--color-primary)] [font-family:'Onest',Helvetica] text-[var(--price-size)]">
                          {planPrices[billingPeriod][index]}
                        </p>
                        <span className="font-text-caption-medium text-[length:var(--text-caption-medium-font-size)] font-[number:var(--text-caption-medium-font-weight)] leading-[var(--text-caption-medium-line-height)] tracking-[var(--text-caption-medium-letter-spacing)] text-[var(--color-primary-muted)] [font-style:var(--text-caption-medium-font-style)] lg:text-[40px]">
                          {plan.title === "Бесплатный" ? plan.period : `${plan.period}: ${billingPeriod.toLowerCase()}`}
                        </span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      className={`h-auto w-full rounded-[var(--radius-pill)] px-4 py-3.5 ${
                        plan.highlighted
                          ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90"
                          : "border border-solid border-[var(--color-primary-faint)] bg-white text-[var(--color-primary)] hover:bg-white/80"
                      }`}
                      variant="ghost"
                    >
                      <span className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] [font-style:var(--text-body-medium-font-style)]">
                        {plan.cta}
                      </span>
                    </Button>
                  </div>
                  <ul className="flex w-full flex-col items-start gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex w-full items-start gap-2">
                        <Image
                          className="mt-0.5 shrink-0"
                          alt=""
                          src={feature.startsWith("Все возможности") ? "/icon-8.svg" : "/icon.svg"}
                          width={20}
                          height={20}
                        />
                        <span className="flex-1 font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] text-[var(--color-primary)] [font-style:var(--text-callout-medium-font-style)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="w-full rounded-[var(--radius-2xl)] border border-solid border-[var(--color-primary-faint)] bg-[var(--gradient-card)] shadow-none">
            <CardContent className="flex min-h-32 flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between lg:gap-12">
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] text-[var(--color-primary)] [font-style:var(--headline-headline-2-font-style)]">
                  Нужен тариф для команды?
                </h3>
                <p className="max-w-[670px] font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] text-[var(--color-primary-muted)] [font-style:var(--text-callout-medium-font-style)]">
                  Подберем лимиты, workspace и поддержку под задачи вашего отдела или компании.
                </p>
              </div>
              <Button
                type="button"
                className="h-auto shrink-0 rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-4 py-3.5 text-white hover:bg-[var(--color-primary)]/90"
              >
                <span className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] [font-style:var(--text-body-medium-font-style)]">
                  Связаться с отделом продаж
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="h-px w-full bg-[var(--color-primary-faint)]" />

      <section className="grid w-full gap-[var(--gap-2xl)] lg:grid-cols-[315px_1fr] lg:gap-[212px]">
        <div className="flex flex-col items-start gap-[var(--gap-2xl)]">
          <div className="flex flex-col items-start gap-[var(--gap-sm)]">
            <h2 className="max-w-[315px] font-normal leading-[48px] tracking-[-1.44px] text-[var(--color-primary)] [font-family:'Onest',Helvetica] text-4xl sm:text-5xl">
              Отвечаем на вопросы
            </h2>
            <p className="max-w-[315px] font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-[var(--color-primary-muted)] [font-style:var(--text-body-medium-font-style)]">
              Есть еще вопросы? Служба поддержки Lumuse ответит вам в ближайшее время.
            </p>
          </div>
          <Button
            type="button"
            className="h-auto rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-4 py-3.5 text-white hover:bg-[var(--color-primary)]/90"
          >
            <span className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] [font-style:var(--text-body-medium-font-style)]">
              Связаться с нами
            </span>
          </Button>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="flex w-full flex-col gap-[var(--gap-sm)]"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="overflow-hidden rounded-[var(--radius-2xl)] border border-solid border-[var(--color-primary-faint)] bg-[var(--gradient-card)] px-6 sm:px-8"
            >
              <AccordionTrigger className="group gap-5 py-4 text-left hover:no-underline [&>svg]:hidden">
                <div className="flex flex-1 items-start justify-between gap-5">
                  <span className="font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] text-[var(--color-primary)] [font-style:var(--headline-headline-2-font-style)]">
                    {faq.question}
                  </span>
                  <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-primary-faint)] before:absolute before:h-0.5 before:w-5 before:rounded-full before:bg-[var(--color-primary)] after:absolute after:h-5 after:w-0.5 after:rounded-full after:bg-[var(--color-primary)] after:transition-transform group-data-[state=open]:after:rotate-90" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pr-14 font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-[var(--color-primary-muted)] [font-style:var(--text-body-medium-font-style)]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};
