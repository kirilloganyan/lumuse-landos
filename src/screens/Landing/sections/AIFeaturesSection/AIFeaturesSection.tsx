import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const topCards = [
  {
    title: "AI-креатив. ",
    description: "Прорывные решения в творчестве, бизнесе, блогинге и учебе",
    image: "/group-2131328941.png",
    imageAlt: "AI-креатив",
    className: "lg:col-span-3",
    imageClassName:
      "mt-6 h-auto w-full max-w-[760px] self-center object-contain",
  },
  {
    title: "Учеба и развитие. ",
    description: "От математики и языков до вайбкода",
    image: "/group-2131328944.png",
    imageAlt: "Учеба и развитие",
    className: "lg:col-span-2",
    imageClassName:
      "mt-6 h-auto w-full max-w-[412px] self-center object-contain",
  },
] as const;

const creativeMiniCards = [
  { title: "Идея для поста", width: "w-[203px]", outerClassName: "mt-[7px]" },
  { title: "Для поста", width: "w-[224.86px]", outerClassName: "" },
  { title: "Для блога", width: "w-[203px]", outerClassName: "mt-[7px]" },
] as const;

export const AIFeaturesSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full px-5 py-4 sm:px-6 lg:px-[var(--section-px-lg)]">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-[var(--card-gap)]">
        <p className="sr-only">
          На изображении показан блок из пяти светло-серых карточек с
          AI-возможностями: AI-креатив, учеба и развитие, полезные рекомендации,
          AI-текст и пространство для креатива.
        </p>
        <div className="grid w-full grid-cols-1 gap-[var(--card-gap)] lg:grid-cols-5">
          {topCards.map((card) => (
            <Card
              key={card.title}
              className={`overflow-hidden rounded-[var(--radius-2xl)] border-0 bg-[var(--color-bg-card)] shadow-none ${card.className}`}
            >
              <CardContent className="flex h-full min-h-[var(--card-min-h)] flex-col px-[var(--card-px)] pb-0 pt-[var(--card-pt)] sm:px-10">
                <header className="mx-auto max-w-[512px] text-center font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] [font-style:var(--headline-headline-2-font-style)]">
                  <span className="text-[var(--color-primary)]">{card.title}</span>
                  <span className="text-[var(--color-primary-muted)]">{card.description}</span>
                </header>
                <img
                  className={card.imageClassName}
                  alt={card.imageAlt}
                  src={card.image}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid w-full grid-cols-1 gap-[var(--card-gap)] lg:grid-cols-3">
          <Card className="overflow-hidden rounded-[var(--radius-2xl)] border-0 bg-[var(--color-bg-card)] shadow-none">
            <CardContent className="relative flex min-h-[var(--card-min-h)] flex-col px-[var(--card-px)] pb-[var(--card-pb)] pt-[var(--card-pt)] sm:px-10">
              <header className="mx-auto max-w-[360px] text-center font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] [font-style:var(--headline-headline-2-font-style)]">
                <span className="text-[var(--color-primary)]">Полезные рекомендации. </span>
                <span className="text-[var(--color-primary-muted)]">
                  Анализ вводных, сравнение вариантов и понятные решения
                </span>
              </header>
              <div className="mt-auto w-full pb-[35px]">
                <div className="relative mx-auto h-[165px] w-full max-w-[351px]">
                  <div className="absolute left-[35px] top-[77px] flex h-[88px] w-[274px] overflow-hidden rounded-[9px] border-[none] bg-[var(--color-bg-white-80)] opacity-50 backdrop-blur-[3.5px] backdrop-brightness-[100%] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[9px] before:p-[1.8px] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[background:linear-gradient(188deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.36)_100%)] before:[mask-composite:exclude] [-webkit-backdrop-filter:blur(3.5px)_brightness(100%)]">
                    <div className="-ml-1 h-[61px] w-[333px] bg-[var(--color-dark-blur)] blur-[7.22px] opacity-10" />
                  </div>
                  <div className="absolute left-[18px] top-[57px] flex h-[88px] w-[315px] overflow-hidden rounded-xl border-[none] bg-[var(--color-bg-white-80)] backdrop-blur-[3.5px] backdrop-brightness-[100%] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-xl before:p-[1.8px] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[background:linear-gradient(188deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.36)_100%)] before:[mask-composite:exclude] [-webkit-backdrop-filter:blur(3.5px)_brightness(100%)]">
                    <div className="-ml-1 mt-1.5 h-[61px] w-[333px] bg-[var(--color-dark-blur)] blur-[7.22px] opacity-10" />
                  </div>
                  <div className="absolute left-0 top-0 flex h-[120px] w-[351px] rounded-[20.28px] border-[none] bg-[var(--color-bg-white-70)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[20.28px] before:p-[1.8px] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[background:linear-gradient(197deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] before:[mask-composite:exclude]">
                    <div className="relative ml-[18.3px] mt-[16.1px] h-[87px] w-[321px]">
                      <img
                        className="absolute left-0 top-0 h-[21px] w-[21px]"
                        alt="Icon"
                        src="/icon-6.svg"
                      />
                      <div className="absolute left-[29px] top-0 flex h-5 w-[278px] items-center opacity-50 [font-family:'Onest',Helvetica] text-[15.7px] font-medium leading-[normal] tracking-[-0.31px] text-black">
                        Решение №1
                      </div>
                      <div className="absolute left-0 top-[31px] h-3.5 w-[319px] rounded-[32px] bg-[var(--color-gray)] opacity-10" />
                      <div className="absolute left-0 top-[52px] h-3.5 w-[307px] rounded-[32px] bg-[var(--color-gray)] opacity-10" />
                      <div className="absolute left-0 top-[73px] h-3.5 w-[206px] rounded-[32px] bg-[var(--color-gray)] opacity-10" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-[var(--radius-2xl)] border-0 bg-[var(--color-bg-card)] shadow-none">
            <CardContent className="relative flex min-h-[var(--card-min-h)] flex-col px-[var(--card-px)] pb-0 pt-[var(--card-pt)] sm:px-10">
              <header className="mx-auto max-w-[360px] text-center font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] [font-style:var(--headline-headline-2-font-style)]">
                <span className="text-[var(--color-primary)]">AI-текст. </span>
                <span className="text-[var(--color-primary-muted)]">
                  На любом языке и&nbsp;под любые задачи
                </span>
              </header>
              <div className="relative mt-auto flex w-full justify-start pb-0 pt-8">
                <div className="relative h-[297px] w-full max-w-[411px]">
                  <div className="relative ml-[21px] mt-[23px] h-[237px] w-[357.18px]">
                    <div className="absolute left-10 top-[161px] flex h-[76px] w-[204px] flex-col gap-1.5 rounded-[12.95px] border-[none] bg-[var(--color-bg-white-60)] opacity-40 shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[12.95px] before:p-[1.79px] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[background:linear-gradient(188deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.36)_100%)] before:[mask-composite:exclude] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]">
                      <div className="ml-3.5 mt-3.5 h-3 w-[171px] rounded-[32px] bg-[var(--color-gray)] opacity-20" />
                      <div className="ml-3.5 h-3 w-[120px] rounded-[32px] bg-[var(--color-gray)] opacity-20" />
                      <div className="ml-3.5 h-3 w-[156px] rounded-[32px] bg-[var(--color-gray)] opacity-20" />
                    </div>
                    <div className="absolute left-[126px] top-[105px] h-[77px] w-[222px] overflow-hidden rounded-[16.1px] border-[none] bg-[var(--color-bg-white-80)] backdrop-blur-[3.47px] backdrop-brightness-[100%] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[16.1px] before:p-[1.79px] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[background:linear-gradient(188deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.36)_100%)] before:[mask-composite:exclude] [-webkit-backdrop-filter:blur(3.47px)_brightness(100%)]">
                      <div className="absolute left-[18px] top-[11px] flex h-[54px] w-[197px] items-center [font-family:'Onest',Helvetica] text-[14.5px] font-medium leading-[normal] tracking-[-0.29px] text-[#00000099] opacity-80">
                        ご興味をお持ちいただき、ありがとうございます。ぜひ詳細をご確認ください。
                      </div>
                      <div className="absolute left-[-84px] top-[-27px] h-[60px] w-[270px] bg-[var(--color-dark-blur)] blur-[7.15px] opacity-[0.16]" />
                    </div>
                    <div className="absolute left-px top-7 h-[93px] w-[319px] overflow-hidden rounded-[20.1px] border-[none] bg-[var(--color-bg-white-70)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[20.1px] before:p-[1.79px] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[background:linear-gradient(197deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] before:[mask-composite:exclude] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]">
                      <div className="absolute left-[22px] top-[13px] flex h-[66px] w-[276px] items-center [font-family:'Onest',Helvetica] text-[17.6px] font-medium leading-[normal] tracking-[-0.35px] text-black">
                        Unlock new opportunities with our product — simple,
                        fast, and built for your growth.
                      </div>
                      <img
                        className="absolute left-[211px] top-[-33px] h-[119px] w-[134px]"
                        alt="Rectangle"
                        src="/rectangle-240647078.svg"
                      />
                      <img
                        className="absolute left-[270px] top-[-51px] h-[97px] w-[93px]"
                        alt="Rectangle"
                        src="/rectangle-240647079.svg"
                      />
                    </div>
                    <img
                      className="absolute left-[312px] top-0 h-[66px] w-[60px]"
                      alt="Group"
                      src="/group-2131328946.png"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-[var(--radius-2xl)] border-0 bg-[var(--color-bg-card)] shadow-none">
            <CardContent className="flex min-h-[var(--card-min-h)] flex-col px-[var(--card-px)] pb-[var(--card-pb)] pt-[var(--card-pt)] sm:px-10">
              <header className="mx-auto max-w-[360px] text-center font-headline-headline-2 text-[length:var(--headline-headline-2-font-size)] font-[number:var(--headline-headline-2-font-weight)] leading-[var(--headline-headline-2-line-height)] tracking-[var(--headline-headline-2-letter-spacing)] [font-style:var(--headline-headline-2-font-style)]">
                <span className="text-[var(--color-primary)]">
                  Пространство для креатива.{" "}
                </span>
                <span className="text-[var(--color-primary-muted)]">
                  Создавайте&nbsp;прорывные решения в&nbsp;творчестве, бизнесе,
                  блоггинге и&nbsp;учёбе
                </span>
              </header>
              <div className="mt-auto flex w-full justify-center pb-2 pt-8">
                <div className="flex w-full max-w-[671px] flex-wrap items-end justify-center gap-[20.1px]">
                  {creativeMiniCards.map((card, index) => (
                    <article
                      key={`${card.title}-${index}`}
                      className={`relative flex h-[130px] flex-col border-[none] bg-[var(--color-bg-white-70)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[background:linear-gradient(197deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] before:[mask-composite:exclude] ${card.width} ${card.outerClassName} ${
                        index === 1
                          ? "h-36 gap-[14.4px] rounded-[20px] before:rounded-[20px] before:p-0.5"
                          : "rounded-[16.28px] before:rounded-[16.28px] before:p-[1.8px]"
                      }`}
                    >
                      {index === 1 ? (
                        <>
                          <div className="relative ml-[16.6px] mt-[19.9px] flex h-[22.15px] w-[110.77px] items-center gap-[6.65px]">
                            <img
                              className="h-[19.94px] w-[19.94px]"
                              alt="File mini fill"
                              src="/file-mini-fill.svg"
                            />
                            <div className="mt-[-1.03px] flex w-fit items-center opacity-50 [font-family:'Onest',Helvetica] text-[17.4px] font-medium leading-[normal] tracking-[-0.35px] text-black">
                              {card.title}
                            </div>
                          </div>
                          <div className="ml-[16.6px] flex h-[64.25px] w-[178.34px] flex-col gap-[8.9px]">
                            <div className="h-[15.51px] rounded-[35.45px] bg-[var(--color-gray)] opacity-10" />
                            <div className="h-[15.51px] w-[140.68px] rounded-[35.45px] bg-[var(--color-gray)] opacity-10" />
                            <div className="h-[15.51px] w-[160.62px] rounded-[35.45px] bg-[var(--color-gray)] opacity-10" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="relative ml-[15px] mt-[18px] inline-flex h-5 items-center gap-1.5">
                            <img
                              className="h-[18px] w-[18px]"
                              alt="File mini fill"
                              src="/file-mini-fill.svg"
                            />
                            <div className="mt-[-1px] flex w-fit items-center opacity-50 [font-family:'Onest',Helvetica] text-[15.7px] font-medium leading-[normal] tracking-[-0.31px] text-black">
                              {card.title}
                            </div>
                          </div>
                          <div className="ml-[15px] mt-[13px] h-3.5 w-[161px] rounded-[32px] bg-[var(--color-gray)] opacity-10" />
                          <div className="ml-[15px] mt-2 h-3.5 w-[127px] rounded-[32px] bg-[var(--color-gray)] opacity-10" />
                          <div className="ml-[15px] mt-2 h-3.5 w-[145px] rounded-[32px] bg-[var(--color-gray)] opacity-10" />
                        </>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
