import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import { FooterSection } from "@/components/sections/FooterSection";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const golosText = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Wayu.uz",
  description: "O'zbekiston yoshlari umumjahon assotsiatsiyasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${golosText.variable} h-full antialiased`}>
      <body className="min-h-full">
        <div className="mx-auto flex min-h-full w-[1440px] flex-col">
          <Header />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
