"use client";

import { useState } from "react";
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

const plans = [
    {
        title: "Бесплатный",
        description: "Попробуйте возможности без риска и откройте для себя Lumuse",
        price: "0₽",
        period: "Навсегда",
        cta: "Попробовать",
        highlighted: false,
        badge: null,
        features: [
            { icon: "/icon-8.svg", text: "До 100 обращений к GPT 5 Nano" },
            { icon: "/icon.svg", text: "До 20 изображений в FLUX DEV" },
            { icon: "/icon.svg", text: "До 3 активных проектов" },
            {
                icon: "/icon.svg",
                text: "Хватает для старта — но быстро захочется больше",
            },
        ],
    },
    {
        title: "Базовый",
        description: "Попробуйте возможности без риска и откройте для себя Lumuse",
        price: "6 990₽",
        period: "Цена за год",
        cta: "Оформить подписку",
        highlighted: false,
        badge: {
            text: "20%",
            className: "bg-[#fd53041a] text-[#e05e18]",
        },
        features: [
            { icon: "/icon-8.svg", text: "Все возможности предыдущего уровня" },
            { icon: "/icon.svg", text: "Большие лимиты для GPT 5 mini и GPT-5 Nano" },
            { icon: "/icon.svg", text: "До 300 сообщений за месяц" },
            { icon: "/icon.svg", text: "До 100 изображений за месяц" },
            { icon: "/icon.svg", text: "Ведение задач и проектов в workspace" },
        ],
    },
    {
        title: "Супер",
        description: "Откройте все возможности AI ассистента вместе с Lumuse",
        price: "14 990₽",
        period: "Цена за год",
        cta: "Оформить подписку",
        highlighted: true,
        badge: {
            text: "20%",
            className: "bg-[#e05e18] text-white",
        },
        bgImage: "/bg-gradient.svg",
        features: [
            { icon: "/icon-8.svg", text: "Все возможности предыдущего уровня" },
            {
                icon: "/icon.svg",
                text: "Неограниченные лимиты для GPT 5 mini и GPT-5 Nano",
            },
            { icon: "/icon.svg", text: "до 300 изображений вместе с FlUX DEV" },
            {
                icon: "/icon.svg",
                text: "Автоматизируйте процессы и масштабируйте проекты",
            },
            { icon: "/icon.svg", text: "Ранний доступ к новым функциям" },
        ],
    },
    {
        title: "Ультра",
        description: "Повышайте свою продуктивность на максимум вместе с Lumuse",
        price: "19 990₽",
        period: "Цена за год",
        cta: "Оформить подписку",
        highlighted: false,
        badge: {
            text: "20%",
            className: "bg-[#fd53041a] text-[#e05e18]",
        },
        features: [
            { icon: "/icon-8.svg", text: "Все возможности предыдущего уровня" },
            {
                icon: "/icon.svg",
                text: "Генерируйте изображения без ограничений вместе с FLUX DEV",
            },
            { icon: "/icon.svg", text: "Исследования и анализируйте данные" },
            { icon: "/icon.svg", text: "Максимальная скорость с приоритетом" },
            { icon: "/icon.svg", text: "Доступ к экспериментальным функциям" },
        ],
    },
] as const;

const faqs = [
    {
        id: "item-1",
        question: "Что такое lumuse?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: "item-2",
        question: "Какие нейросети внутри?",
        answer: "",
    },
    {
        id: "item-3",
        question: "Чем отличается от Notion/Trello?",
        answer: "",
    },
    {
        id: "item-4",
        question: "Как происходит оплата?",
        answer: "",
    },
    {
        id: "item-5",
        question: "Можно ли вручную править структуру проектов?",
        answer: "",
    },
] as const;

export const FrameSubsection = (): JSX.Element => {
    const [billingPeriod, setBillingPeriod] =
        useState<(typeof pricingTabs)[number]>("Месяц");

    return (
        <section className="relative ml-[103.1px] mt-[-0.6px] flex w-[1264px] flex-col items-start gap-20">
            <div className="flex w-full flex-col items-start gap-16">
                <header className="flex w-full flex-col items-center gap-8">
                    <div className="flex w-[628px] flex-col items-center gap-4">
                        <h2 className="w-full text-center [font-family:'Onest',Helvetica] text-[56px] font-normal leading-[56px] tracking-[-1.68px] text-[#141414]">
                            Простые и понятные тарифы
                        </h2>
                        <div className="flex w-full items-center justify-center gap-2 px-12">
                            <p className="flex flex-1 items-center justify-center text-center font-headline-headline-3 text-[length:var(--headline-headline-3-font-size)] font-[number:var(--headline-headline-3-font-weight)] leading-[var(--headline-headline-3-line-height)] tracking-[var(--headline-headline-3-letter-spacing)] text-[#14141499] [font-style:var(--headline-headline-3-font-style)]">
                                Начните бесплатно. Растите вместе с нами – это я спиздил,
                                кстати, надо переписать.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center gap-4">
                        <div className="inline-flex items-center rounded-3xl border border-solid border-[#1414140d] bg-[#1414140d] p-1 shadow-[inset_0px_0px_36px_#c7c7c71f] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
                            {pricingTabs.map((tab) => {
                                const active = billingPeriod === tab;

                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() => setBillingPeriod(tab)}
                                        className={`inline-flex items-center justify-center gap-2 rounded-3xl px-5 py-2.5 transition-colors ${
                                            active ? "bg-white text-[#141414]" : "text-[#14141499]"
                                        }`}
                                    >
                    <span className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] [font-style:var(--text-body-medium-font-style)]">
                      {tab}
                    </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </header>
                <div className="flex w-full flex-col items-start gap-3">
                    <div className="grid w-[1264px] grid-cols-4 gap-3">
                        {plans.map((plan) => (
                            <Card
                                key={plan.title}
                                className="relative flex h-full flex-col rounded-3xl border border-solid border-[#1414140d] bg-[linear-gradient(0deg,rgba(237,237,237,1)_0%,rgba(237,237,237,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%)] shadow-none"
                            >
                                {plan.bgImage ? (
                                    <img
                                        className="pointer-events-none absolute left-0 top-0 h-[100.33%] w-[100.97%] rotate-[-0.32deg] object-cover"
                                        alt="Bg gradient"
                                        src={plan.bgImage}
                                    />
                                ) : null}

                                <CardContent className="relative flex h-full flex-col justify-between gap-6 px-6 py-7">
                                    <div className="flex flex-col items-center gap-5">
                                        <div className="flex w-full flex-col items-start gap-4">
                                            <div className="flex w-full flex-col items-start gap-1">
                                                <div className="flex h-8 w-[259px] items-center gap-2">
                                                    <h3 className="whitespace-nowrap font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] text-[#141414] [font-style:var(--headline-headline-2-font-style)]">
                                                        {plan.title}
                                                    </h3>
                                                    {plan.badge ? (
                                                        <Badge
                                                            className={`rounded-[32px] px-2 py-0.5 font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] shadow-none hover:${plan.badge.className} ${plan.badge.className}`}
                                                        >
                                                            {plan.badge.text}
                                                        </Badge>
                                                    ) : null}
                                                </div>
                                                <p className="w-full font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] text-[#14141499] [font-style:var(--text-callout-medium-font-style)]">
                                                    {plan.description}
                                                </p>
                                            </div>
                                            <div className="flex w-full flex-col items-start gap-0.5">
                                                <p className="w-full [font-family:'Onest',Helvetica] text-[40px] font-medium leading-[44px] tracking-[-0.80px] text-[#141414]">
                                                    {plan.price}
                                                </p>
                                                <div className="inline-flex items-start gap-1">
                                                    <div className="inline-flex items-center gap-[5px]">
                            <span className="whitespace-nowrap font-text-caption-medium text-[length:var(--text-caption-medium-font-size)] font-[number:var(--text-caption-medium-font-weight)] leading-[var(--text-caption-medium-line-height)] tracking-[var(--text-caption-medium-letter-spacing)] text-[#14141499] [font-style:var(--text-caption-medium-font-style)]">
                              {plan.period}
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            type="button"
                                            className={`h-auto w-full rounded-[44px] px-4 py-3.5 ${
                                                plan.highlighted
                                                    ? "bg-[#141414] text-white hover:bg-[#141414]"
                                                    : "border border-solid border-[#1414140d] bg-white text-[#141414] hover:bg-white"
                                            }`}
                                            variant="ghost"
                                        >
                      <span className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] [font-style:var(--text-body-medium-font-style)]">
                        {plan.cta}
                      </span>
                                        </Button>
                                    </div>
                                    <div className="flex w-full flex-col items-start gap-2">
                                        <ul className="flex w-full flex-col items-start gap-3">
                                            {plan.features.map((feature, index) => (
                                                <li
                                                    key={`${plan.title}-${index}`}
                                                    className="flex w-full items-start gap-2"
                                                >
                                                    <img
                                                        className="relative mt-[-0.06px] h-[20.11px] w-[20.11px] shrink-0 rotate-[-0.32deg]"
                                                        alt="Icon"
                                                        src={feature.icon}
                                                    />
                                                    <span className="flex-1 font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] text-[#141414] [font-style:var(--text-callout-medium-font-style)]">
                            {feature.text}
                          </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <Card className="w-full rounded-3xl border border-solid border-[#1414140d] bg-[linear-gradient(0deg,rgba(237,237,237,1)_0%,rgba(237,237,237,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%)] shadow-none">
                        <CardContent className="flex min-h-32 items-center gap-12 px-6 py-6">
                            <img
                                className="h-20 w-20 shrink-0 rotate-[-0.32deg]"
                                alt="Frame"
                                src="/frame-65.svg"
                            />
                            <div className="flex flex-1 items-center justify-between gap-8">
                                <div className="flex w-[383px] flex-col items-start gap-1">
                                    <h3 className="w-full font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] text-[#141414] [font-style:var(--headline-headline-2-font-style)]">
                                        Решение для бизнеса
                                    </h3>
                                    <p className="w-full font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] text-[#14141499] [font-style:var(--text-callout-medium-font-style)]">
                                        Персональные доработки под ваши решения с увеличенными
                                        лимитами и безграничными доступами
                                    </p>
                                </div>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="h-auto rounded-[44px] bg-[#1414140d] px-4 py-3.5 text-[#14141499] hover:bg-[#1414140d] hover:text-[#14141499]"
                                >
                  <span className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] [font-style:var(--text-body-medium-font-style)]">
                    Связаться с отделом продаж
                  </span>
                                    <img
                                        className="h-[20.11px] w-[20.11px] rotate-[-0.32deg]"
                                        alt="Icon"
                                        src="/icon-7.svg"
                                    />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <img
                className="relative h-[8.14px] w-[1263.99px] rotate-[-0.32deg]"
                alt="Vector"
                src="/vector-34.svg"
            />
            <section className="flex w-full items-start gap-[212px]">
                <div className="inline-flex flex-col items-start gap-10">
                    <div className="inline-flex flex-col items-start gap-3">
                        <div className="inline-flex flex-col items-start gap-2">
                            <h2 className="w-[315px] [font-family:'Onest',Helvetica] text-5xl font-normal leading-[48px] tracking-[-1.44px] text-[#141414]">
                                Отвечаем на вопросы
                            </h2>
                            <p className="w-[315px] font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-[#14141499] [font-style:var(--text-body-medium-font-style)]">
                                Есть еще вопросы? Служба поддержки Lumuse ответит вам
                                в ближайшее время
                            </p>
                        </div>
                    </div>
                    <Button
                        type="button"
                        className="h-auto rounded-[44px] bg-[#141414] px-4 py-3.5 text-white hover:bg-[#141414]"
                    >
            <span className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] [font-style:var(--text-body-medium-font-style)]">
              Связаться с нами
            </span>
                    </Button>
                </div>
                <div className="flex flex-1 flex-col items-start gap-3 self-stretch rounded-3xl">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-1"
                        className="flex w-full flex-col gap-3"
                    >
                        {faqs.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className="overflow-hidden rounded-3xl border border-solid border-[#1414140d] bg-[linear-gradient(0deg,rgba(237,237,237,1)_0%,rgba(237,237,237,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%)] px-8 pr-5"
                            >
                                <AccordionTrigger className="gap-5 py-4 hover:no-underline [&>svg]:hidden">
                                    <div className="flex flex-1 items-start justify-between gap-5">
                                        <div className="flex flex-1 flex-col items-start justify-center gap-2 py-2 text-left">
                      <span className="font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] text-[#141414] [font-style:var(--headline-headline-2-font-style)]">
                        {faq.question}
                      </span>
                                            {faq.answer ? (
                                                <span className="font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] text-[#14141499] [font-style:var(--text-body-medium-font-style)]">
                          {faq.answer}
                        </span>
                                            ) : null}
                                        </div>
                                        <span className="inline-flex shrink-0 items-center justify-center rounded-[44px] bg-[#1414140d] p-3.5">
                      <img
                          className="h-[20.11px] w-[20.11px] rotate-[-0.32deg]"
                          alt="Icon"
                          src={
                              faq.id === "item-1" ? "/icon-3.svg" : "/icon-2.svg"
                          }
                      />
                    </span>
                                    </div>
                                </AccordionTrigger>
                                {faq.answer ? (
                                    <AccordionContent className="hidden" />
                                ) : (
                                    <AccordionContent className="hidden" />
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </section>
    );
};
