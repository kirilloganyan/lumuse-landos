import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumuse - AI-ассистент с дашбордом",
  description:
    "AI-ассистент с дашбордом для создания и ведения проектов. Доступ к множеству нейросетей без VPN.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
