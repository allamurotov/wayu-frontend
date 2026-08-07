"use client";

import { useState } from "react";
import Link from "next/link";
import {
  InstagramIcon,
  TelegramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons/FigmaIcons";
import {
  ArrowDownIcon,
  ArrowRightSmallIcon,
  CalendarIcon,
  NotificationIcon,
} from "@/components/icons/NewsIcons";
import { uploadUrl, type NewsItem } from "@/lib/api";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatDate(isoDate: string) {
  const [y, m, d] = isoDate.split("-");
  return `${d}.${m}.${y}`;
}

const socialLinks = [
  { label: "Telegram", href: "#", icon: TelegramIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.id}`} className="flex w-[244px] shrink-0 flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={uploadUrl(item.image)}
        alt=""
        className="h-[164px] w-[244px] rounded-lg object-cover"
      />
      <div className="mt-4 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-sm font-medium text-muted">
          <CalendarIcon className="h-4 w-4" />
          {formatDate(item.date)}
        </span>
        <span className="flex items-center gap-1 text-sm font-medium text-ink">
          Перейти
          <ArrowRightSmallIcon className="h-4 w-4 text-primary" />
        </span>
      </div>
      <h3 className="mt-2 line-clamp-2 text-[15px] font-bold leading-snug text-ink">
        {item.title}
      </h3>
    </Link>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="mt-9 flex max-w-[355px] items-start gap-2 rounded-md bg-primary/10 p-4">
        <NotificationIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
        <p className="text-sm font-medium text-ink">
          Спасибо! Вы подписались на рассылку новостей.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-9 flex max-w-[355px] flex-col gap-2" onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email" className="text-base font-medium text-ink">
        Электронная почта
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="you@example.com"
        className={`h-11 rounded-md border bg-surface-soft px-4 text-base text-ink ${
          status === "error" ? "border-red-500" : "border-border"
        }`}
      />
      {status === "error" && (
        <p className="text-sm font-medium text-red-500">Введите корректный email-адрес</p>
      )}
      <button
        type="submit"
        className="mt-3 flex w-fit items-center gap-1 rounded-md bg-primary px-4 py-3 text-sm font-bold text-white"
      >
        <NotificationIcon className="h-[18px] w-[18px]" />
        Подписаться
      </button>
    </form>
  );
}

export function NewsSection({ items }: { items: NewsItem[] }) {
  return (
    <section className="w-full bg-[#F4F7FA]">
      <div className="flex">
        <div className="w-[507px] shrink-0 bg-border py-16 pl-32 pr-6">
          <h2 className="max-w-[355px] text-[36px] font-bold leading-tight text-ink">
            Получайте дозу свежих новостей на вашу почту
          </h2>

          <NewsletterForm />

          <div className="mt-11 max-w-[355px]">
            <h3 className="text-xl font-bold text-ink">Наши социальные сети</h3>
            <p className="mt-2 text-base font-medium leading-snug text-[#565E6A] opacity-80">
              Следите за нашей деятельностью и оставайтесь в курсе всех новостей через
              социальные сети.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 py-16 pr-32 pl-6">
          <div className="flex items-center justify-between">
            <h2 className="text-[28px] font-bold text-ink">Новости о нашей деятельности</h2>
            <Link href="/news" className="flex items-center gap-1.5 text-base font-medium text-muted">
              Все новости
              <ArrowDownIcon className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-6">
            {items.slice(0, 6).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
