"use client";

import { useState } from "react";
import { ArrowDownIcon } from "@/components/icons/NewsIcons";

const questions = [
  {
    q: "Какие технические задачи рассматривает ДУК «Центр кибербезопасности»?",
  },
  {
    q: "Как часто и в каком порядке проводится обучение лица, ответственного за обеспечение информационной и кибербезопасности организации?",
  },
  {
    q: "В какое время и кем проводятся оценки в системе мониторинга информации и кибербезопасности?",
  },
  {
    q: "Как часто и при каких обстоятельствах пересматривается политика информационной безопасности организации?",
    a: "Политика информационной безопасности организации пересматривается каждый год при изменениях в информационных инфраструктурах, а также незапланированных.",
    tags: ["карта", "атака"],
  },
  {
    q: "Политика информационной безопасности организации разработана на основании какого нормативного документа и с какими организациями согласована?",
  },
  {
    q: "На основании какого нормативного документа проводится экспертиза (аудит) объектов информационной безопасности организации?",
  },
  {
    q: "В соответствии с каким нормативным документом проводится проверка официального сайта организации на соответствие требованиям информации?",
  },
];

export function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  return (
    <div className="flex w-[781px] shrink-0 flex-col divide-y divide-border rounded-lg border border-border">
      {questions.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="px-5 py-4">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-lg font-medium leading-snug text-ink">{item.q}</span>
              <ArrowDownIcon
                className={`h-6 w-6 shrink-0 text-ink transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && item.a && (
              <div className="mt-4 flex flex-col gap-3">
                {item.tags && (
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-soft px-3 py-1.5 text-sm font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-base leading-relaxed text-ink">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
