import { Card, CardContent } from "@/components/ui/card";
import {JSX} from "react";

const navigationGroups = [
    ["Возможности", "Цены", "FAQ"],
    ["Телеграм", "Вконтакте", "hello@lumuse.ai"],
];

const footerLinks = [
    "Политика конфиденциальности",
    "Пользовательское соглашение",
];

export const FrameWrapperSubsection = (): JSX.Element => {
    return (
        <footer className="ml-[15.1px] w-[1440px]">
            <div className="mb-6 text-sm text-[#14141499] font-text-callout-medium tracking-[var(--text-callout-medium-letter-spacing)] leading-[var(--text-callout-medium-line-height)]">
                На изображении показан широкий светлый футер с мягким полупрозрачным
                фоном, скруглением только сверху, логотипом слева, двумя колонками
                навигационных ссылок справа, декоративными SVG-формами в верхней части и
                строкой с копирайтом и юридическими ссылками снизу.
            </div>
            <Card className="relative h-[420px] w-[1440px] overflow-hidden rounded-t-[48px] rounded-b-none border-0 bg-[#1414140d] shadow-none">
                <CardContent className="p-0">
                    <img
                        className="pointer-events-none absolute -top-14 left-[342px] h-[263px] w-[1432px] rotate-[-0.32deg] select-none"
                        alt="Rectangle"
                        src="/rectangle-240647075-2.svg"
                    />
                    <img
                        className="pointer-events-none absolute left-[568px] top-[-55px] h-[135px] w-[1206px] rotate-[-0.32deg] select-none"
                        alt="Rectangle"
                        src="/rectangle-240647075-1.svg"
                    />
                    <img
                        className="pointer-events-none absolute left-[415px] top-[-156px] h-[372px] w-[797px] rotate-[-0.32deg] select-none"
                        alt="Rectangle"
                        src="/rectangle-240647075.svg"
                    />
                    <div className="relative flex h-full flex-col">
                        <div className="flex items-start justify-between px-[90px] pt-[75px]">
                            <img
                                className="h-[58px] w-[249px] rotate-[-0.32deg]"
                                alt="Frame"
                                src="/frame-2131328920.svg"
                            />
                            <nav
                                aria-label="Footer navigation"
                                className="grid w-[528px] grid-cols-[189px_185px_1fr] gap-x-6"
                            >
                                {navigationGroups.map((group, groupIndex) => (
                                    <ul
                                        key={`group-${groupIndex}`}
                                        className="flex flex-col items-start gap-3"
                                    >
                                        {group.map((item, itemIndex) => (
                                            <li key={`${item}-${itemIndex}`} className="list-none">
                                                <button
                                                    type="button"
                                                    className="h-auto p-0 text-left font-text-body-medium text-[length:var(--text-body-medium-font-size)] font-[number:var(--text-body-medium-font-weight)] leading-[var(--text-body-medium-line-height)] tracking-[var(--text-body-medium-letter-spacing)] whitespace-nowrap text-[#141414] [font-style:var(--text-body-medium-font-style)]"
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                                <div className="h-[84px] w-[194px]" aria-hidden="true" />
                            </nav>
                        </div>
                        <div className="mt-auto flex items-center justify-between px-[90px] pb-[81px]">
                            <p className="font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] whitespace-nowrap text-[#14141499] [font-style:var(--text-callout-medium-font-style)]">
                                Lumuse, 2026. Все права защищены
                            </p>
                            <nav
                                aria-label="Legal navigation"
                                className="flex items-center gap-[37px]"
                            >
                                {footerLinks.map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        className="h-auto p-0 text-right font-text-callout-medium text-[length:var(--text-callout-medium-font-size)] font-[number:var(--text-callout-medium-font-weight)] leading-[var(--text-callout-medium-line-height)] tracking-[var(--text-callout-medium-letter-spacing)] whitespace-nowrap text-[#14141499] [font-style:var(--text-callout-medium-font-style)]"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </footer>
    );
};
