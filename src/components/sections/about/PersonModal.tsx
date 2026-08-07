"use client";

import { useState } from "react";
import { CloseIcon } from "@/components/icons/AboutModalIcons";

export type PersonModalData = {
  name: string;
  role: string;
};

const responsibilities = [
  "Разработка и применение методов и средств мониторинга инцидентов информационной безопасности, а также предотвращение инцидентов информационной безопасности в сети Интернет;",
  "Разработка предложений и рекомендаций по обеспечению информационной безопасности источников информации национального сегмента сети Интернет;",
  "Мониторинг информационной безопасности информационных ресурсов национального сегмента сети Интернет;",
  "Разработка предложений и рекомендаций по обеспечению информационной безопасности источников информации в национальном сегменте сети Интернет;",
  "Сотрудничать с органами государственной власти и местного самоуправления, правоохранительными органами, операторами, провайдерами, а также пользователями национального сегмента сети Интернет по вопросам предотвращения инцидентов в сети Интернет.",
  "Разработка предложений и рекомендаций по обеспечению информационной безопасности источников информации национального сегмента сети Интернет;",
];

const biography = `Родился 24 июля 1957 г. в Зааминском районе Джизакской области Узбекской ССР.
Премьер-министр Республики Узбекистан (12 декабря 2003 — 14 декабря 2016).
До 1990-х г Ш. Мирзиёев ( Мирзиеев) был секретарем комсомольской организации ТИИИМСХ, позднее — парторгом института.
В 1990 г Ш.Мирзиеев был избран депутатом Верховного совета Узбекистана, а в 1994 г он был избран и в новый Парламент страны (Олий Мажлис).
В 1992 г Ш. Мирзиёев стал хокимом (главой администрации) Мирзо-Улугбекского района Ташкента.
В 1996 г указом президента Узбекистана И. Каримова Мирзиёев был назначен хокимом Джизакской области Узбекистана.
В 1999 г он переизбирался в Олий Мажлис 2го созыва от Джизакской области, и сохранял мандат до 2004 г.
В 2001 г Ш. Мирзиёев стал хакимом Самаркандской области Узбекистана. Занимал этот пост в течение 2 лет до перехода на работу в правительство.
С 12 декабря 2003 г был назначен премьер-министром Узбекистана. Работая на этом посту он превратился в крупнейшего политического тяжеловеса республики.`;

export function PersonModal({ person, onClose }: { person: PersonModalData | null; onClose: () => void }) {
  const [tab, setTab] = useState<"tasks" | "bio">("tasks");

  if (!person) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[566px] w-[584px] flex-col overflow-hidden rounded-lg bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between bg-[#fbfbfb] px-5 py-5">
          <div className="flex items-center gap-4 text-xl font-bold text-ink">
            <button
              type="button"
              onClick={() => setTab("tasks")}
              className={tab === "tasks" ? "text-ink" : "text-muted"}
            >
              Задачи
            </button>
            <button
              type="button"
              onClick={() => setTab("bio")}
              className={tab === "bio" ? "text-ink" : "text-muted"}
            >
              Биография
            </button>
          </div>
          <button type="button" aria-label="Закрыть" onClick={onClose} className="cursor-pointer">
            <CloseIcon className="h-6 w-6 text-[#f96062]" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 pb-6 pt-4">
          <p className="text-lg font-bold text-ink">{person.name}</p>
          <p className="text-sm text-primary">{person.role}</p>

          {tab === "tasks" ? (
            <ul className="mt-4 flex flex-col gap-4">
              {responsibilities.map((item, i) => (
                <li key={i} className="flex gap-3 text-base leading-snug text-ink">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 flex flex-col gap-4 text-base leading-snug text-ink">
              {biography.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function usePersonModal() {
  const [person, setPerson] = useState<PersonModalData | null>(null);
  return {
    person,
    open: (p: PersonModalData) => setPerson(p),
    close: () => setPerson(null),
  };
}
