"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AccessibilityIcon,
  GlobeIcon,
  InstagramIcon,
  MenuIcon,
  SearchIcon,
  TelegramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons/FigmaIcons";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Главная", href: "/", extraActivePaths: [] as string[] },
  { label: "о нас", href: "/about", extraActivePaths: ["/need-to-know"] },
  { label: "новости", href: "/news", extraActivePaths: [] as string[] },
  { label: "Наши проекты", href: "/projects", extraActivePaths: [] as string[] },
  { label: "контакты", href: "/contacts", extraActivePaths: [] as string[] },
];

const socialLinks = [
  { label: "Telegram", href: "#", icon: TelegramIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* Row 1: utility bar */}
      <div className="border-b border-border">
        <div className="mx-auto flex h-[73px] max-w-(--container-page) items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Возможности доступности"
              className="flex h-[72px] w-[62px] items-center justify-center bg-violet text-white"
            >
              <AccessibilityIcon className="h-10 w-10" />
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 text-base font-bold uppercase text-ink"
            >
              Русский
              <GlobeIcon className="h-5 w-5 text-muted" />
            </button>
          </div>

          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wayu-logo.svg"
              alt="WAYU — O‘zbekiston yoshlari umumjahon assotsiatsiyasi"
              width={296}
              height={36}
            />
          </Link>

          <div className="flex items-center">
            <button
              type="button"
              aria-label="Поиск"
              className="flex h-[72px] w-[72px] items-center justify-center bg-surface-soft"
            >
              <SearchIcon className="h-6 w-6 text-muted" />
            </button>
            <button
              type="button"
              aria-label="Меню"
              className="flex h-[72px] w-[72px] items-center justify-center bg-muted/20"
            >
              <MenuIcon className="h-6 w-6 text-muted" />
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: navigation */}
      <div className="border-b border-border">
        <div className="mx-auto flex h-[73px] max-w-(--container-page) items-center justify-between">
          <div className="flex flex-col">
            <span className="text-right text-base font-bold text-ink">
              +998 99 345 55 59
            </span>
            <Link
              href="/contacts"
              className="text-xs font-medium text-primary hover:underline"
            >
              Обратная связь
            </Link>
          </div>

          <nav className="flex items-center gap-14">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) ||
                    link.extraActivePaths.some((p) => pathname.startsWith(p));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1.5 text-base font-bold uppercase tracking-wide text-ink",
                    isActive &&
                      "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:text-primary"
              >
                <Icon className="h-7 w-7" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
