"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

const topActionTags = [
  { icon: "/icon-44.svg", label: "Превью" },
  { icon: "/icon-56.svg", label: "Редактировать" },
];

const postDetails = [
  {
    label: "Срок исполнения:",
    value: "13 декабря 2025 • 13:20",
    icon: "/icon-45.svg",
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

const notificationItems = [
  { icon: "/frame-2.svg", label: "@username" },
  { icon: "/frame-3.svg", label: "test@test.com" },
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

const projectCards = [
  {
    muted: true,
    icon: "/icon-19.svg",
    title: "Название задачи",
    description:
      "Описание задачи максимум в 2 строки, чтобы было понятно о чем ..",
    media: [],
  },
  {
    muted: false,
    icon: "/icon-58.svg",
    title: "Название задачи",
    description:
      "Разработка контентной стратегии и создание серии материалов...",
    media: [
      "..//img-1-1.png",
      "..//img-2-1.png",
      "..//img-3-1.png",
      "..//img-4-1.png",
    ],
  },
];

const sidebarMainItems = [
  { icon: "/icon-53.svg", label: "Workspace", active: true },
  { icon: "/icon-62.svg", label: "Новый чат" },
  { icon: "/icon-61.svg", label: "Генерация" },
  { icon: "/icon-1.svg", label: "Проекты" },
  { icon: "/icon-15.svg", label: "Посты" },
];

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
          <Card className="w-full overflow-hidden rounded-[var(--radius-card-platform)] border border-[var(--color-primary-faint)] bg-[var(--color-bg-page)] shadow-[0px_20px_120px_#0000000f]">
            <CardContent className="p-0">
              <div className="grid min-h-[625px] grid-cols-1 lg:grid-cols-[219px_minmax(0,1fr)]">
                <aside className="flex min-h-full flex-col gap-4 overflow-hidden border-b border-[var(--color-primary-faint)] bg-[var(--color-bg-page)] p-4 lg:border-b-0 lg:border-r lg:p-[15.6px]">
                  <div className="flex items-center justify-between">
                    <div className="relative h-[28.15px] w-[93.83px]">
                      <img
                        className="absolute left-[5%] top-[calc(50.00%_-_10px)] h-5 w-[19.32%]"
                        alt="Subtract"
                        src="/subtract.svg"
                      />
                      <img
                        className="absolute left-[32.13%] top-[26.25%] h-[47.48%] w-[61.02%]"
                        alt="Shape"
                        src="/shape.svg"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      className="h-auto rounded-[var(--radius-toggle)] bg-[var(--color-primary-faint)] p-[6.26px] hover:bg-[var(--color-primary-ghost)]"
                    >
                      <img
                        className="h-[15.64px] w-[15.64px]"
                        alt="Icon"
                        src="/icon-49.svg"
                      />
                    </Button>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <div className="flex flex-col gap-[3.13px] px-[9.38px]">
                      {sidebarMainItems.map((item, index) => (
                        <button
                          key={`${item.label}-${index}`}
                          type="button"
                          className="flex items-center gap-[6.26px] rounded-[15.64px] px-[12.51px] py-[7.82px] text-left transition-colors hover:bg-white/50"
                        >
                          <div className="flex h-[15.64px] flex-1 items-center gap-[6.26px]">
                            <img
                              className="h-[15.64px] w-[15.64px]"
                              alt="Icon"
                              src={item.icon}
                            />
                            <span
                              className={`mt-[-0.46px] flex-1 [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] ${
                                item.active
                                  ? "text-[var(--color-accent)]"
                                  : "text-[var(--color-primary-muted)]"
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-[6.26px] rounded-[18.77px] px-[6.26px] py-[9.38px]">
                      <img
                        className="h-px flex-1"
                        alt="Line"
                        src="/vector-15.svg"
                      />
                    </div>
                    <div className="flex flex-col gap-[3.13px] px-[9.38px]">
                      <div className="flex items-center gap-[6.26px] rounded-[18.77px] px-[9.38px] pb-[3.13px] pt-[9.38px]">
                        <div className="flex h-[12.51px] flex-1 items-center">
                          <div className="inline-flex items-center justify-center gap-[6.26px] px-[3.13px] py-0">
                            <span className="mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[9.4px] font-medium leading-[12.5px] tracking-[-0.09px] text-[var(--color-primary-muted)]">
                              Недавние
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="flex items-center gap-[6.26px] rounded-[15.64px] px-[12.51px] py-[7.82px] text-left transition-colors hover:bg-white/50"
                      >
                        <div className="flex h-[15.64px] flex-1 items-center gap-[6.26px]">
                          <img
                            className="h-[15.64px] w-[15.64px]"
                            alt="Icon"
                            src="/icon-8.svg"
                          />
                          <span className="mt-[-0.46px] flex-1 [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary-muted)]">
                            Название проекта
                          </span>
                        </div>
                      </button>
                    </div>
                  </nav>
                </aside>
                <div className="bg-[var(--gradient-card)]">
                  <div className="grid min-h-full grid-cols-1 lg:grid-cols-[266px_minmax(0,1fr)]">
                    <aside className="flex flex-col border-b border-[var(--color-primary-faint)] p-4 lg:border-b-0 lg:border-r lg:p-[15.6px]">
                      <Button
                        variant="ghost"
                        className="h-auto w-fit rounded-[var(--radius-toggle)] px-[6.26px] py-[4.69px] hover:bg-[var(--color-primary-faint)]"
                      >
                        <span className="inline-flex h-[12.51px] items-center">
                          <img
                            className="h-[12.51px] w-[12.51px]"
                            alt="Icon"
                            src="/icon-5.svg"
                          />
                          <span className="mb-[-0.24px] ml-[3.13px] mr-0 mt-[-0.24px] inline-flex items-center justify-center gap-[6.26px] px-[3.13px] py-0">
                            <span className="mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[9.4px] font-medium leading-[12.5px] tracking-[-0.09px] text-[var(--color-primary-muted)]">
                              Назад
                            </span>
                          </span>
                        </span>
                      </Button>
                      <div className="mt-[9.4px] inline-flex items-center gap-[4.69px]">
                        <img
                          className="h-[15.64px] w-[15.64px]"
                          alt="Icon"
                          src="/icon-8.svg"
                        />
                        <h3 className="mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[15.6px] font-medium leading-[18.8px] tracking-[-0.31px] text-[var(--color-primary)]">
                          Название проекта
                        </h3>
                      </div>
                      <div className="mt-[12.3px] flex items-center gap-[6.26px]">
                        <Button
                          variant="ghost"
                          className="h-auto rounded-[var(--radius-toggle)] bg-[var(--color-primary-faint)] px-[7.82px] py-[6.26px] hover:bg-[var(--color-primary-ghost)]"
                        >
                          <span className="inline-flex items-center">
                            <img
                              className="h-[15.64px] w-[15.64px]"
                              alt="Plus circle"
                              src="/plus-circle-1.svg"
                            />
                            <span className="inline-flex items-center justify-center gap-[6.26px] px-[4.69px] py-[0.78px]">
                              <span className="mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary-muted)]">
                                Добавить
                              </span>
                            </span>
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          className="h-auto rounded-[var(--radius-toggle)] bg-[var(--color-primary-faint)] p-[6.26px] hover:bg-[var(--color-primary-ghost)]"
                        >
                          <img
                            className="h-[15.64px] w-[15.64px]"
                            alt="Icon"
                            src="/dots-horizontal.svg"
                          />
                        </Button>
                      </div>
                      <img
                        className="mt-[10px] h-px w-full max-w-[234.58px]"
                        alt="Vector"
                        src="/vector-15.svg"
                      />
                      <div className="mt-[6px] flex w-full max-w-[234.58px] flex-col gap-[9.38px]">
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            className="inline-flex items-center gap-[3.13px] px-0 py-[6.26px]"
                          >
                            <span className="inline-flex items-center justify-center gap-[6.26px] px-0 py-[0.78px]">
                              <span className="mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary)]">
                                Задачи и посты
                              </span>
                              <img
                                className="h-[12.51px] w-[12.51px]"
                                alt="Icon"
                                src="/icon-4.svg"
                              />
                            </span>
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center gap-[3.13px] px-0 py-[6.26px]"
                          >
                            <span className="inline-flex items-center justify-center gap-[6.26px] px-0 py-[0.78px]">
                              <span className="mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary)]">
                                Все ярлыки
                              </span>
                              <img
                                className="h-[12.51px] w-[12.51px]"
                                alt="Icon"
                                src="/icon-4.svg"
                              />
                            </span>
                          </button>
                        </div>
                        <div className="flex flex-col gap-[9.38px]">
                          {projectCards.map((card, index) => (
                            <article
                              key={`${card.title}-${index}`}
                              className={`flex w-full flex-col gap-[12.51px] overflow-hidden rounded-[12.51px] p-[12.51px] ${
                                card.muted ? "bg-[var(--color-bg-white-50)]" : "bg-white"
                              }`}
                            >
                              <div className="flex flex-col gap-[3.13px]">
                                <div className="flex items-start gap-[6.26px]">
                                  <div className="flex h-[12.51px] flex-1 items-center">
                                    <img
                                      className="h-[12.51px] w-[12.51px]"
                                      alt="Icon"
                                      src={card.icon}
                                    />
                                    <span className="mb-[-0.24px] ml-[3.13px] mt-[-0.24px] inline-flex items-center justify-center gap-[6.26px] px-[3.13px] py-0">
                                      <span
                                        className={`mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[9.4px] font-medium leading-[12.5px] tracking-[-0.09px] ${
                                          card.muted
                                            ? "text-[var(--color-primary-subtle)]"
                                            : "text-[var(--color-primary-muted)]"
                                        }`}
                                      >
                                        {card.title}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <p
                                  className={`[font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] ${
                                    card.muted
                                      ? "text-[var(--color-primary-muted)]"
                                      : "text-[var(--color-primary)]"
                                  }`}
                                >
                                  {card.description}
                                </p>
                              </div>
                              {card.media.length > 0 && (
                                <div className="flex w-full max-w-[200.18px] items-center gap-[3.13px]">
                                  {card.media.map((item, mediaIndex) => (
                                    <div
                                      key={`${item}-${mediaIndex}`}
                                      className="h-[37.53px] w-[37.53px] rounded-[6.26px] bg-cover bg-center"
                                      style={{
                                        backgroundImage: `url(${item})`,
                                      }}
                                    />
                                  ))}
                                </div>
                              )}
                            </article>
                          ))}
                        </div>
                      </div>
                    </aside>
                    <main className="flex min-h-full flex-col border-[var(--color-primary-faint)] lg:border-l">
                      <div className="flex items-center justify-between px-4 pb-0 pt-5 lg:px-[37.5px] lg:pt-[18.8px]">
                        <h3 className="whitespace-nowrap [font-family:'Onest',Helvetica] text-[15.6px] font-medium leading-[18.8px] tracking-[-0.31px] text-[var(--color-primary)]">
                          Название поста
                        </h3>
                        <div className="inline-flex items-center gap-[6.26px]">
                          <div className="inline-flex items-center justify-center rounded-[var(--radius-toggle)] bg-[var(--color-primary-faint)] px-[7.82px] py-[6.26px]">
                            <div className="inline-flex items-center">
                              <img
                                className="h-[15.64px] w-[15.64px]"
                                alt="Icon"
                                src="/icon-51.svg"
                              />
                              <div className="inline-flex items-center justify-center gap-[6.26px] px-[4.69px] py-[0.78px]">
                                <span className="mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary-muted)]">
                                  AI Ассистен
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="relative h-[28.15px] w-[28.15px] overflow-hidden rounded-full bg-[var(--color-accent-green)]">
                            <div className="flex h-full w-full items-center justify-center text-center [font-family:'Onest',Helvetica] text-[15.6px] font-medium leading-[18.8px] tracking-[-0.31px] text-white">
                              A
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 pt-[8.5px] lg:px-[35.2px]">
                        <div className="inline-flex items-center gap-[6.26px]">
                          {topActionTags.map((tag) => (
                            <div
                              key={tag.label}
                              className="inline-flex items-center justify-center rounded-[var(--radius-toggle)] bg-[var(--color-primary-faint)] px-[7.82px] py-[6.26px]"
                            >
                              <div className="inline-flex items-center">
                                <img
                                  className="h-[15.64px] w-[15.64px]"
                                  alt="Icon"
                                  src={tag.icon}
                                />
                                <div className="inline-flex items-center justify-center gap-[6.26px] px-[4.69px] py-[0.78px]">
                                  <span className="mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary-muted)]">
                                    {tag.label}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}

                          <Button
                            variant="ghost"
                            className="h-auto rounded-[var(--radius-toggle)] bg-[var(--color-primary-faint)] p-[6.26px] hover:bg-[var(--color-primary-ghost)]"
                          >
                            <img
                              className="h-[15.64px] w-[15.64px]"
                              alt="Icon"
                              src="/dots-horizontal.svg"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[18.77px] px-4 pb-6 pt-[17.8px] lg:px-[37.5px]">
                        <div className="flex flex-col gap-[12.51px]">
                          {postDetails.map((detail) => (
                            <div
                              key={detail.label}
                              className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-[14.07px]"
                            >
                              <div className="inline-flex items-center justify-center gap-[6.26px] px-0 py-[0.78px]">
                                <span className="w-[109.47px] [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary-muted)]">
                                  {detail.label}
                                </span>
                              </div>
                              <div className="inline-flex items-center gap-[3.13px]">
                                <div className="inline-flex items-center justify-center gap-[6.26px] px-0 py-[0.78px]">
                                  <span className="whitespace-nowrap [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary)]">
                                    {detail.value}
                                  </span>
                                </div>
                                {detail.icon && (
                                  <img
                                    className="h-[12.51px] w-[12.51px]"
                                    alt="Icon"
                                    src={detail.icon}
                                  />
                                )}
                              </div>
                            </div>
                          ))}

                          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-[14.07px]">
                            <div className="inline-flex items-center justify-center gap-[6.26px] px-0 py-[0.78px]">
                              <span className="w-[109.47px] [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary-muted)]">
                                Уведомлять:
                              </span>
                            </div>
                            <div className="inline-flex flex-wrap items-start gap-[15.64px]">
                              {notificationItems.map((item) => (
                                <div
                                  key={item.label}
                                  className="inline-flex items-center justify-center gap-[3.13px]"
                                >
                                  <img
                                    className="h-[15.64px] w-[15.64px]"
                                    alt="Frame"
                                    src={item.icon}
                                  />
                                  <span className="mt-[-0.46px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[10.9px] font-medium leading-[14.1px] tracking-[-0.22px] text-[var(--color-primary)]">
                                    {item.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <img
                          className="h-px w-full"
                          alt="Vector"
                          src="/vector-15.svg"
                        />
                        <div className="flex flex-col gap-[25.02px]">
                          <section className="inline-flex flex-col items-start gap-[9.38px]">
                            <div className="flex items-center gap-[6.26px]">
                              <h4 className="mt-[-0.78px] whitespace-nowrap [font-family:'Onest',Helvetica] text-[12.5px] font-medium leading-[15.6px] tracking-[-0.25px] text-[var(--color-primary)]">
                                Медиа
                              </h4>
                            </div>
                            <div className="inline-flex flex-wrap items-center gap-[5.47px]">
                              {mediaItems.map((item, index) => (
                                <div
                                  key={`${item}-${index}`}
                                  className="h-[93.83px] w-[93.83px] rounded-[12.51px] border-[0.78px] border-solid border-[var(--color-primary-faint)] bg-cover bg-center"
                                  style={{ backgroundImage: `url(${item})` }}
                                />
                              ))}
                            </div>
                          </section>
                          <section className="flex w-full max-w-[525.47px] flex-col items-start gap-[9.38px]">
                            <div className="flex items-center gap-[6.26px]">
                              <h4 className="[font-family:'Onest',Helvetica] text-[12.5px] font-medium leading-[15.6px] tracking-[-0.25px] text-[var(--color-primary)]">
                                Описание
                              </h4>
                              <Button
                                variant="ghost"
                                className="h-auto rounded-[var(--radius-toggle)] p-[3.13px] hover:bg-[var(--color-primary-faint)]"
                              >
                                <span className="inline-flex h-[12.51px] items-center">
                                  <img
                                    className="h-[12.51px] w-[12.51px]"
                                    alt="Dots horizontal"
                                    src="/dots-horizontal.svg"
                                  />
                                </span>
                              </Button>
                            </div>
                            <div className="flex min-h-[166px] flex-col gap-[6.26px]">
                              {descriptionParagraphs.map((paragraph, index) => (
                                <p
                                  key={`${paragraph.slice(0, 20)}-${index}`}
                                  className="[font-family:'Onest',Helvetica] text-[12.5px] font-normal leading-[15.6px] tracking-[-0.25px] text-[var(--color-primary)]"
                                >
                                  <span className="tracking-[-0.03px]">
                                    {paragraph}
                                  </span>
                                </p>
                              ))}
                            </div>
                          </section>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
