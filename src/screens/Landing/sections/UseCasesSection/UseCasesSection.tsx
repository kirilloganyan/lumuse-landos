"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const featureBullets = [
  {
    icon: "/icon-59.svg",
    text: "Высокая эффективность и первоклассные результаты",
  },
  {
    icon: "/icon-6.svg",
    text: "Комплексная экосистема AI для творчества и проектов",
  },
  {
    icon: "/icon.svg",
    text: "Постоянное развитие с использованием передовых AI-моделей",
  },
];

const modelCards = [
  {
    title: "Nano banana 2",
    description:
      "Продвинутый редактор изображений AI нового поколения от Google",
    image: "/frame-2131328950-2.svg",
    bottomGlow: "/rectangle-240647076.svg",
  },
  {
    title: "Flux 2 Pro",
    description: "Текст про эту нейронку и ее особенности, может что-то еще",
    image: "/frame-2131328950-3.svg",
  },
  {
    title: "GPT 5.5",
    description: "Текст про эту нейронку и ее особенности, может что-то еще",
    image: "/frame-2131328950.svg",
  },
  {
    title: "Gemini 3 Pro",
    description: "Текст про эту нейронку и ее особенности, может что-то еще",
    image: "/frame-2131328950-1.svg",
  },
];

const useCaseTabs = [
  {
    icon: "/file-plus-03.svg",
    title: "Управляй задачами и сроками",
    description: "",
    active: false,
  },
  {
    icon: "/layout-alt-04.svg",
    title: "AI прямо в трекере задач",
    description:
      "Нам бы сюда хотя бы чуток текста, чтобы совсем не было грустно и рассказать подробней о фиче, без воды",
    active: true,
  },
  {
    icon: "/magic-wand-01.svg",
    title: "Работай с текстом, контентом и с фото",
    description: "",
    active: false,
  },
];

const postMeta = [
  {
    label: "Срок исполнения:",
    value: "13 декабря 2025 • 13:20",
    icon: "/icon-16.svg",
  },
  {
    label: "Платформа:",
    value: "Вконтакте, Telegram, Одноклассники, Россграм, Snapchat",
    icon: "/icon-4.svg",
  },
  {
    label: "Статус:",
    value: "Черновик",
    icon: "/icon-2.svg",
  },
  {
    label: "Напомнить:",
    value: "За 6 часов",
  },
];

const notifyItems = [
  { icon: "/frame-1.svg", text: "@username" },
  { icon: "/frame.svg", text: "test@test.com" },
];

const mediaItems = [
  "/img-2-1.png",
  "/img-3-1.png",
  "/image-6.png",
  "/img-4-1.png",
];

const descriptionParagraphs = [
  "Разработка контентной стратегии и создание серии материалов для блога компании «УмныйДом Омск» – лидера на рынке умных технологий для дома в Омском регионе.",
  "2. Основная цель контента:",
  "Генерация лидов: Привлечение потенциальных клиентов через форму заявки на бесплатную консультацию.",
  "Повышение узнаваемости бренда: Позиционирование «УмныйДом Омск» как эксперта и надежного партнера.",
  "SEO-продвижение: Увеличение органического трафика по ключевым запросам, связанным с умным домом в Омске.",
];

const sidebarCards = [
  {
    bg: "bg-[var(--color-bg-white-50)]",
    icon: "/icon-19.svg",
    titleColor: "text-[var(--color-primary-subtle)]",
    title: "Название задачи",
    descriptionColor: "text-[var(--color-primary-muted)]",
    description:
      "Описание задачи максимум в 2 строки, чтобы было понятно о чем ..",
    thumbnails: [],
  },
  {
    bg: "bg-white",
    icon: "/icon-14.svg",
    titleColor: "text-[var(--color-primary-muted)]",
    title: "Название задачи",
    descriptionColor: "text-[var(--color-primary)]",
    description:
      "Разработка контентной стратегии и создание серии материалов...",
    thumbnails: [
      "/img-1-1.png",
      "/img-2-1.png",
      "/img-3-1.png",
      "/img-4-1.png",
    ],
  },
];

const aiPromptTags = [
  {
    label: "GPT 5 nano",
    trailingIcon: "/icon-4.svg",
  },
  {
    label: "Добавить файл",
    leadingIcon: "/plus-circle.svg",
  },
];

export const UseCasesSection = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState(1);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % modelCards.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + modelCards.length) % modelCards.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-primary)] py-24 text-white md:py-32">
      <img
        className="pointer-events-none absolute left-1/2 top-[-351px] hidden h-[398px] w-[3432px] max-w-none -translate-x-1/2 lg:block"
        alt="Rectangle"
        src="/rectangle-240647075.svg"
      />
      <div className="container relative z-10 mx-auto max-w-[var(--container-wide)] px-5 md:px-10 lg:px-[193px]">
        <header className="grid items-start gap-10 lg:grid-cols-[422px_421px] lg:justify-between">
          <h2 className="mt-[-1px] max-w-[422px] [font-family:'Onest',Helvetica] text-4xl font-normal leading-[1] tracking-[-1.92px] text-white md:text-5xl md:leading-[48px]">
            Создавайте и творите на работе и дома
          </h2>
          <ul className="flex max-w-[421px] flex-col gap-5 py-2">
            {featureBullets.map((item) => (
              <li key={item.text} className="flex items-start gap-4">
                <img className="h-6 w-6 shrink-0" alt=""  src={item.icon} />
                <p className="mt-[-1px] flex-1 font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] [font-style:var(--text-body-medium-font-style)] text-white">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </header>
        <div className="mt-16 flex flex-col items-center gap-6 lg:mt-[91px]">
          <div className="relative w-full">
            <div className="flex overflow-hidden">
              <div
                className="flex gap-3 transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${carouselIndex * (255 + 12)}px)`,
                }}
              >
                {modelCards.map((card, index) => (
                    <div key={card.title} className="w-[255px] flex-shrink-0">                    <Card className="relative h-[310px] overflow-hidden rounded-[var(--radius-2xl)] border-0 bg-[var(--color-bg-card-hover)] shadow-none">
                      <CardContent className="relative h-full p-0">
                        {card.bottomGlow ? (
                          <img
                            className="absolute bottom-[-12px] left-0 h-[168px] w-[322px] max-w-none"
                            alt="Rectangle"
                            src={card.bottomGlow}
                          />
                        ) : null}
                        <img
                          className={`absolute left-0 top-0 h-[233px] w-[254px] max-w-none ${index === 3 ? "left-px" : ""}`}
                          alt={card.title}
                          src={card.image}
                        />
                        <div
                          className={`absolute bottom-6 ${index === 0 ? "left-5" : "left-6"} flex w-[210px] flex-col gap-[5px]`}
                        >
                          <h3 className="mt-[-1px] font-headline-headline-3 text-[length:var(--headline-headline-3-font-size)] font-[number:var(--headline-headline-3-font-weight)] leading-[var(--headline-headline-3-line-height)] tracking-[var(--headline-headline-3-letter-spacing)] [font-style:var(--headline-headline-3-font-style)] text-white">
                            {card.title}
                          </h3>
                          <p className="font-text-body text-[length:var(--text-body-font-size)] font-[number:var(--text-body-font-weight)] leading-[var(--text-body-line-height)] tracking-[var(--text-body-letter-spacing)] [font-style:var(--text-body-font-style)] text-[var(--color-bg-white-80)]">
                            {card.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              onClick={handlePrev}
              className="absolute left-0 top-1/2 hidden h-auto -translate-y-1/2 rounded-[var(--radius-pill)] bg-[var(--color-bg-gray-ghost)] p-3.5 backdrop-blur-[10px] hover:bg-[var(--color-bg-gray-ghost-hover)] sm:inline-flex"
            >
              <img
                className="h-5 w-5 rotate-180"
                alt="Chevron left"
                src="/chevron-right.svg"
              />
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleNext}
              className="absolute right-0 top-1/2 hidden h-auto -translate-y-1/2 rounded-[var(--radius-pill)] bg-[var(--color-bg-gray-ghost)] p-3.5 backdrop-blur-[10px] hover:bg-[var(--color-bg-gray-ghost-hover)] sm:inline-flex"
            >
              <img
                className="h-5 w-5"
                alt="Chevron right"
                src="/chevron-right.svg"
              />
            </Button>
          </div>
          <div className="flex justify-center gap-2 p-2">
            {modelCards.map((card, index) => (
              <button
                key={card.title}
                type="button"
                onClick={() => setCarouselIndex(index)}
                aria-label={`Показать карточку ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${index === carouselIndex ? "bg-white" : "bg-[var(--color-bg-white-50)]"}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 grid gap-8 lg:mt-[84px] lg:grid-cols-[398px_minmax(0,632px)] lg:items-start lg:gap-6">
          <nav aria-label="Use cases">
            <div className="flex flex-col gap-2">
              {useCaseTabs.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`flex w-full items-start gap-3 overflow-hidden rounded-[var(--radius-2xl)] px-5 py-4 text-left transition ${
                      isActive
                        ? "bg-transparent opacity-100"
                        : "bg-transparent opacity-50 hover:opacity-70"
                    }`}
                  >
                    <img className="h-7 w-7 shrink-0" alt="" src={item.icon} />
                    <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
                      <div className="flex w-full items-center gap-2 px-0 py-0.5">
                        <div className="flex-1 mt-[-1px] font-headline-headline-3 text-[length:var(--headline-headline-3-font-size)] font-[number:var(--headline-headline-3-font-weight)] leading-[var(--headline-headline-3-line-height)] tracking-[var(--headline-headline-3-letter-spacing)] [font-style:var(--headline-headline-3-font-style)] text-white">
                          {item.title}
                        </div>
                      </div>
                      {item.description ? (
                        <p className="w-full font-text-body text-[length:var(--text-body-font-size)] font-[number:var(--text-body-font-weight)] leading-[var(--text-body-line-height)] tracking-[var(--text-body-letter-spacing)] [font-style:var(--text-body-font-style)] text-[var(--color-bg-white-80)]">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </nav>
          <div className="relative min-h-[467px] rounded-[var(--radius-2xl)]">
            <div className="relative ml-0 w-full max-w-[632px] lg:h-[467px]">
              <div className="relative w-full rounded-[13.23px] bg-[var(--color-bg-card)] p-0 lg:absolute lg:left-2.5 lg:top-0 lg:h-[378px] lg:w-[548px] lg:overflow-hidden">
                <div className="relative min-h-[378px] lg:pl-[161px]">
                  <aside className="flex w-full flex-col p-3 lg:absolute lg:left-0 lg:top-0 lg:h-[377px] lg:w-[161px] lg:p-0">
                    <button
                      type="button"
                      className="ml-0 inline-flex h-[13.23px] w-[35.9px] items-center justify-center gap-[0.94px] rounded-[20.79px] px-[3.78px] py-[2.83px] lg:ml-[9.4px] lg:mt-[9.4px]"
                    >
                      <span className="inline-flex h-[7.56px] items-center">
                        <img
                          className="h-[7.56px] w-[7.56px]"
                          alt=""
                          src="/icon-5.svg"
                        />
                        <span className="mb-[-0.22px] mt-[-0.22px] inline-flex items-center justify-center gap-[3.78px] px-[1.89px] py-0">
                          <span className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[5.7px] font-medium leading-[7.6px] tracking-[-0.06px] text-[var(--color-primary-muted)]">
                            Назад
                          </span>
                        </span>
                      </span>
                    </button>
                    <div className="ml-0 mt-3 inline-flex h-3 w-[94.28px] items-center gap-[2.83px] lg:ml-[9.4px] lg:mt-[5.7px]">
                      <img
                        className="h-[9.45px] w-[9.45px]"
                        alt=""
                        src="/icon-8.svg"
                      />
                      <span className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[9.4px] font-medium leading-[11.3px] tracking-[-0.19px] text-[var(--color-primary)]">
                        Название проекта
                      </span>
                    </div>
                    <div className="ml-0 mt-3 inline-flex h-[17.5px] w-[75.35px] items-center gap-[3.78px] lg:ml-[9.4px] lg:mt-[6.9px]">
                      <button
                        type="button"
                        className="inline-flex h-auto items-center justify-center gap-[0.94px] rounded-[20.79px] bg-[var(--color-primary-faint)] px-[4.72px] py-[3.78px]"
                      >
                        <span className="inline-flex items-center">
                          <img
                            className="h-[9.45px] w-[9.45px]"
                            alt=""
                            src="/plus-circle.svg"
                          />
                          <span className="inline-flex items-center justify-center gap-[3.78px] px-[2.83px] py-[0.47px]">
                            <span className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary-muted)]">
                              Добавить
                            </span>
                          </span>
                        </span>
                      </button>
                      <button
                        type="button"
                        aria-label="More"
                        className="inline-flex h-auto items-center justify-center gap-[0.94px] rounded-[20.79px] bg-[var(--color-primary-faint)] p-[3.78px]"
                      >
                        <img
                          className="h-[9.45px] w-[9.45px]"
                          alt=""
                          src="/dots-horizontal.svg"
                        />
                      </button>
                    </div>
                    <img
                      className="mt-4 w-full max-w-[141.72px] lg:ml-[9.4px] lg:mt-[6.1px]"
                      alt="Vector"
                      src="/vector-13.svg"
                    />
                    <div className="mt-4 flex w-full max-w-[141.72px] flex-col gap-[5.67px] lg:ml-[9.4px] lg:mt-[3.3px] lg:h-[142.21px]">
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          className="inline-flex items-center gap-[1.89px] px-0 py-[3.78px]"
                        >
                          <span className="inline-flex items-center justify-center gap-[3.78px] px-0 py-[0.47px]">
                            <span className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary)]">
                              Задачи и посты
                            </span>
                            <img
                              className="h-[7.56px] w-[7.56px]"
                              alt=""
                              src="/icon-4.svg"
                            />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-[1.89px] px-0 py-[3.78px]"
                        >
                          <span className="inline-flex items-center justify-center gap-[3.78px] px-0 py-[0.47px]">
                            <span className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary)]">
                              Все ярлыки
                            </span>
                            <img
                              className="h-[7.56px] w-[7.56px]"
                              alt=""
                              src="/icon-4.svg"
                            />
                          </span>
                        </button>
                      </div>
                      <div className="flex flex-col gap-[5.67px]">
                        {sidebarCards.map((card) => (
                          <div
                            key={card.description}
                            className={`flex w-[141.72px] flex-col gap-[7.56px] overflow-hidden rounded-[7.56px] p-[7.56px] ${card.bg}`}
                          >
                            <div className="flex flex-col gap-[1.89px]">
                              <div className="flex items-start gap-[3.78px]">
                                <div className="flex h-[7.56px] flex-1 items-center">
                                  <img
                                    className="h-[7.56px] w-[7.56px]"
                                    alt=""
                                    src={card.icon}
                                  />
                                  <span className="mb-[-0.22px] mt-[-0.22px] inline-flex items-center justify-center gap-[3.78px] px-[1.89px] py-0">
                                    <span
                                      className={`mt-[-0.47px] [font-family:'Onest',Helvetica] text-[5.7px] font-medium leading-[7.6px] tracking-[-0.06px] ${card.titleColor}`}
                                    >
                                      {card.title}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <p
                                className={`[font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] ${card.descriptionColor}`}
                              >
                                {card.description}
                              </p>
                            </div>
                            {card.thumbnails.length ? (
                              <div className="flex w-[120.94px] items-center gap-[1.89px]">
                                {card.thumbnails.map((thumb) => (
                                  <div
                                    key={thumb}
                                    className="h-[22.68px] w-[22.68px] rounded-[3.78px] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${thumb})` }}
                                  />
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </aside>
                  <div className="relative min-h-[378px] bg-[var(--color-bg-white-50)] lg:h-[467px] lg:w-[387px]">
                    <div className="px-4 pb-4 pt-4 lg:ml-[22.7px] lg:mr-[22.27px] lg:w-[342.03px] lg:px-0 lg:pb-0 lg:pt-[11.3px]">
                      <div className="flex items-center justify-between">
                        <div className="[font-family:'Onest',Helvetica] text-[9.4px] font-medium leading-[11.3px] tracking-[-0.19px] text-[var(--color-primary)]">
                          Название поста
                        </div>
                        <div className="inline-flex items-center gap-[3.78px]">
                          <div className="inline-flex items-center justify-center gap-[0.94px] rounded-[20.79px] bg-[var(--color-primary-faint)] px-[4.72px] py-[3.78px]">
                            <div className="inline-flex items-center">
                              <img
                                className="h-[9.45px] w-[9.45px]"
                                alt=""
                                src="/icon-51.svg"
                              />
                              <div className="inline-flex items-center justify-center gap-[3.78px] px-[2.83px] py-[0.47px]">
                                <div className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary-muted)]">
                                  AI Ассистен
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative h-[17.01px] w-[17.01px] overflow-hidden rounded-full bg-[var(--color-accent-green)]">
                            <div className="absolute inset-0 flex items-center justify-center text-center [font-family:'Onest',Helvetica] text-[9.4px] font-medium leading-[11.3px] tracking-[-0.19px] text-white">
                              A
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-[5.2px] inline-flex h-[17.5px] w-[145.7px] items-center gap-[3.78px]">
                        <div className="inline-flex items-center justify-center gap-[0.94px] rounded-[20.79px] bg-[var(--color-primary-faint)] px-[4.72px] py-[3.78px]">
                          <div className="inline-flex items-center">
                            <img
                              className="h-[9.45px] w-[9.45px]"
                              alt=""
                              src="/icon-3.svg"
                            />
                            <div className="inline-flex items-center justify-center gap-[3.78px] px-[2.83px] py-[0.47px]">
                              <div className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary-muted)]">
                                Превью
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center justify-center gap-[0.94px] rounded-[20.79px] bg-[var(--color-primary-faint)] px-[4.72px] py-[3.78px]">
                          <div className="inline-flex items-center">
                            <img
                              className="h-[9.45px] w-[9.45px]"
                              alt=""
                              src="/icon-23.svg"
                            />
                            <div className="inline-flex items-center justify-center gap-[3.78px] px-[2.83px] py-[0.47px]">
                              <div className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary-muted)]">
                                Редактировать
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          aria-label="More"
                          className="inline-flex h-auto items-center justify-center gap-[0.94px] rounded-[20.79px] bg-[var(--color-primary-faint)] p-[3.78px]"
                        >
                          <img
                            className="h-[9.45px] w-[9.45px]"
                            alt=""
                            src="/dots-horizontal.svg"
                          />
                        </button>
                      </div>
                      <div className="mt-[10.8px] flex flex-col gap-[11.34px]">
                        <div className="flex flex-col gap-[7.56px]">
                          {postMeta.map((item) => (
                            <div
                              key={item.label}
                              className="flex items-start gap-[8.5px]"
                            >
                              <div className="inline-flex items-center justify-center gap-[3.78px] px-0 py-[0.47px]">
                                <div className="mt-[-0.47px] w-[66.14px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary-muted)]">
                                  {item.label}
                                </div>
                              </div>
                              <div className="inline-flex items-center gap-[1.89px]">
                                <div
                                  className={`inline-flex items-center justify-center ${item.label === "Статус:" ? "gap-[2.83px]" : item.label === "Напомнить:" ? "gap-[5.67px]" : "gap-[3.78px]"} px-0 py-[0.47px]`}
                                >
                                  <div className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary)]">
                                    {item.value}
                                  </div>
                                </div>
                                {item.icon ? (
                                  <img
                                    className="h-[7.56px] w-[7.56px]"
                                    alt=""
                                    src={item.icon}
                                  />
                                ) : null}
                              </div>
                            </div>
                          ))}

                          <div className="flex items-start gap-[8.5px]">
                            <div className="inline-flex items-center justify-center gap-[3.78px] px-0 py-[0.47px]">
                              <div className="mt-[-0.47px] w-[66.14px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary-muted)]">
                                Уведомлять:
                              </div>
                            </div>
                            <div className="inline-flex items-start gap-[9.45px]">
                              {notifyItems.map((item, index) => (
                                <div
                                  key={item.text}
                                  className={`inline-flex items-center ${index === 0 ? "justify-center gap-[1.89px]" : "gap-[2.36px]"}`}
                                >
                                  <img
                                    className="h-[9.45px] w-[9.45px]"
                                    alt=""
                                    src={item.icon}
                                  />
                                  <div className="mt-[-0.25px] [font-family:'Onest',Helvetica] text-[6.6px] font-medium leading-[8.5px] tracking-[-0.13px] text-[var(--color-primary)]">
                                    {item.text}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <img
                          className="h-px w-full"
                          alt="Vector"
                          src="/vector-13.svg"
                        />
                        <div className="flex flex-col gap-[15.12px]">
                          <div className="flex flex-col gap-[15.12px]">
                            <div className="inline-flex flex-col items-start gap-[5.67px]">
                              <div className="flex w-full items-center gap-[3.78px]">
                                <div className="mt-[-0.47px] [font-family:'Onest',Helvetica] text-[7.6px] font-medium leading-[9.4px] tracking-[-0.15px] text-[var(--color-primary)]">
                                  Медиа
                                </div>
                              </div>
                              <div className="inline-flex items-center gap-[3.31px]">
                                {mediaItems.map((item) => (
                                  <div
                                    key={item}
                                    className="h-[56.69px] w-[56.69px] rounded-[7.56px] border-[0.47px] border-solid border-[var(--color-primary-faint)] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item})` }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full max-w-[317.46px] flex-col gap-[5.67px]">
                            <div className="flex items-center gap-[3.78px]">
                              <div className="[font-family:'Onest',Helvetica] text-[7.6px] font-medium leading-[9.4px] tracking-[-0.15px] text-[var(--color-primary)]">
                                Описание
                              </div>
                              <button
                                type="button"
                                aria-label="More description actions"
                                className="inline-flex h-auto items-center justify-center gap-[0.94px] rounded-[20.79px] p-[1.89px]"
                              >
                                <span className="inline-flex h-[7.56px] items-center">
                                  <img
                                    className="h-[7.56px] w-[7.56px]"
                                    alt=""
                                    src="/dots-horizontal.svg"
                                  />
                                </span>
                              </button>
                            </div>
                            <div className="flex h-[101px] flex-col items-start gap-[3.78px]">
                              {descriptionParagraphs.map((paragraph) => (
                                <p
                                  key={paragraph}
                                  className="[font-family:'Onest',Helvetica] text-[7.6px] font-normal leading-[9.4px] tracking-[-0.15px] text-[var(--color-primary)]"
                                >
                                  <span className="tracking-[-0.01px]">
                                    {paragraph}
                                  </span>
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                        <img
                          className="hidden h-px w-full"
                          alt="Vector"
                          src="/vector-13.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute left-[328px] top-[115px] hidden h-[356px] w-[152px] bg-[var(--color-primary)] opacity-30 blur-[60px] lg:block" />
                </div>
              </div>
              <Card className="relative mt-6 overflow-hidden rounded-[13.31px] border-0 bg-[var(--color-bg-card)] shadow-none backdrop-blur-[21.39px] lg:absolute lg:left-[358px] lg:top-[86px] lg:mt-0 lg:h-[369px] lg:w-[269px]">
                <CardContent className="relative h-full p-0">
                  <div className="absolute left-0 top-0 flex w-full items-center justify-between p-[9.51px]">
                    {["/icon-27.svg", "/icon-9.svg"].map((icon) => (
                      <button
                        key={icon}
                        type="button"
                        className="inline-flex h-auto items-center justify-center gap-[0.95px] rounded-[20.91px] border-[0.48px] border-solid border-[var(--color-primary-faint)] bg-white p-[3.8px]"
                      >
                        <span className="inline-flex items-center">
                          <img
                            className="h-[9.51px] w-[9.51px]"
                            alt=""
                            src={icon}
                          />
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="absolute left-[94px] top-[42px] h-[45px] w-[154px] rounded-[10px] bg-[#f6f6f6]" />
                  <div className="absolute left-[153px] top-[146px] h-[23px] w-[95px] rounded-[10px] bg-[#f6f6f6]" />
                  <div className="absolute left-[21px] top-[98px] flex h-[37px] w-[150px] flex-col">
                    <div className="h-[9px] rounded-[23.17px] bg-[var(--color-gray)] opacity-10" />
                    <div className="mt-[5px] h-[9px] w-[121px] rounded-[23.17px] bg-[var(--color-gray)] opacity-10" />
                    <div className="mt-[5.1px] h-[8.93px] w-[90.06px] rounded-[23.17px] bg-[var(--color-gray)] opacity-10" />
                  </div>
                  <div className="absolute left-[21px] top-[184px] flex h-[51px] w-[180px] flex-col gap-[5px]">
                    <div className="h-[9px] rounded-[23.17px] bg-[var(--color-gray)] opacity-10" />
                    <div className="h-[9px] w-[141px] rounded-[23.17px] bg-[var(--color-gray)] opacity-10" />
                    <div className="h-[9px] w-[174px] rounded-[23.17px] bg-[var(--color-gray)] opacity-10" />
                    <div className="h-[9px] w-[76px] rounded-[23.17px] bg-[var(--color-gray)] opacity-10" />
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 flex h-[57.03px] w-[calc(100%_-_19px)] flex-col items-start overflow-hidden rounded-[11.41px] bg-[var(--color-bg-white-50)] p-[5.7px] backdrop-blur-[9.51px]">
                    <div className="relative z-0 flex max-h-[159.69px] w-full flex-col items-start gap-[3.8px]">
                      <div className="relative flex w-full items-center justify-center gap-[3.8px] p-[3.8px]">
                        <div className="mt-[-0.48px] flex-1 [font-family:'Onest',Helvetica] text-[7.6px] font-normal leading-[9.5px] tracking-[-0.15px] text-[var(--color-primary-subtle)]">
                          Спроси о чем угодно
                        </div>
                        <div className="absolute left-1 top-[calc(50.00%_-_5px)] h-2.5 w-px bg-[var(--color-primary)]" />
                      </div>
                    </div>
                    <div className="relative z-[-1] h-[19.01px] w-full" />
                    <div className="absolute bottom-1.5 left-1.5 z-[1] flex w-[calc(100%_-_11px)] items-end justify-between">
                      <div className="inline-flex items-center gap-[3.8px]">
                        {aiPromptTags.map((tag) => (
                          <button
                            key={tag.label}
                            type="button"
                            className="inline-flex h-auto items-center justify-center gap-[0.95px] rounded-[20.91px] bg-[var(--color-primary-faint)] px-[4.75px] py-[3.8px]"
                          >
                            <span className="inline-flex items-center">
                              {tag.leadingIcon ? (
                                <img
                                  className="h-[9.51px] w-[9.51px]"
                                  alt=""
                                  src={tag.leadingIcon}
                                />
                              ) : null}
                              <span className="inline-flex items-center justify-center gap-[3.8px] px-[2.85px] py-[0.48px]">
                                <span className="mt-[-0.48px] [font-family:'Onest',Helvetica] text-[6.7px] font-medium leading-[8.6px] tracking-[-0.13px] text-[var(--color-primary-muted)]">
                                  {tag.label}
                                </span>
                              </span>
                              {tag.trailingIcon ? (
                                <img
                                  className="h-[9.51px] w-[9.51px]"
                                  alt=""
                                  src={tag.trailingIcon}
                                />
                              ) : null}
                            </span>
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="inline-flex h-auto items-center justify-center gap-[0.95px] rounded-[20.91px] bg-[var(--color-primary)] p-[3.8px] opacity-20"
                      >
                        <img
                          className="h-[9.51px] w-[9.51px]"
                          alt="Arrow right"
                          src="/arrow-right.svg"
                        />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Separator className="mt-0 opacity-0" />
      </div>
    </section>
  );
};
