"use client";

import { useState } from "react";
import { SearchIcon } from "@/components/icons/FigmaIcons";
import { SendIcon } from "@/components/icons/VacancyIcons";
import { SendMessageModal } from "@/components/sections/services/SendMessageModal";

const tags = [
  "безопасность",
  "атака",
  "ddos",
  "государственные",
  "антивирус",
  "мошенники",
  "карта",
  "OLX",
  "защита",
  "атака",
  "безопасность",
  "мошенники",
  "антивирус",
  "карта",
];

export function FaqSidebarWidgets() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex w-[379px] shrink-0 flex-col gap-6">
      <label className="flex h-12 items-center gap-2 rounded-md border border-border bg-white px-4">
        <SearchIcon className="h-5 w-5 text-muted" />
        <input
          type="text"
          placeholder="Поиск"
          className="h-full flex-1 bg-transparent text-base text-ink placeholder:text-ink"
        />
      </label>

      <div className="flex flex-col gap-3">
        <p className="text-base font-medium text-ink">Популярные теги</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-ink"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6">
        <p className="text-lg leading-snug text-ink">
          Не нашли ответа на ваш вопрос?
          <br />
          Свяжитесь с нами для получения нужной информации
        </p>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex h-11 w-fit items-center gap-2 rounded bg-primary px-4 text-sm font-bold text-white"
        >
          Отправить сообщение
          <SendIcon className="h-[18px] w-[18px]" />
        </button>
      </div>

      <SendMessageModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
