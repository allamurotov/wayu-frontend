import Link from "next/link";
import {
  ArrowLeftIcon,
  EyeIcon,
  LinkIcon,
  PrinterIcon,
  ShareIcon,
} from "@/components/icons/NeedToKnowIcons";
import { ClockIcon } from "@/components/icons/AboutIcons";
import { CallIcon } from "@/components/icons/WorldMapIcons";
import { MoneysIcon, SendIcon } from "@/components/icons/VacancyIcons";
import { vacancyTypeLabel, type VacancyItem } from "@/lib/api";

function BulletList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-ink">{heading}</h2>
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <p className="text-lg leading-[1.4] text-ink">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function VacancySingleSection({ vacancy }: { vacancy: VacancyItem }) {
  return (
    <section className="mx-auto max-w-(--container-page) pb-16 pt-8">
      <div className="flex items-start gap-4">
        <Link
          href="/about/career"
          aria-label="Назад"
          className="flex h-9 w-9 shrink-0 items-center justify-center text-ink"
        >
          <ArrowLeftIcon className="h-9 w-9" />
        </Link>

        <article className="flex-1 rounded-lg bg-white p-8">
          <div className="mx-auto flex w-[782px] flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-[28px] font-bold leading-tight text-ink">{vacancy.title}</h1>
              <div className="flex items-center gap-7">
                <div className="flex items-center gap-2">
                  <MoneysIcon className="h-6 w-6 text-muted" />
                  <span className="text-base font-bold text-ink">{vacancy.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CallIcon className="h-6 w-6 text-muted" />
                  <span className="text-base font-bold text-ink">{vacancy.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-6 w-6 text-muted" />
                  <span className="text-base font-bold text-ink">{vacancyTypeLabel(vacancy.type)}</span>
                </div>
              </div>
            </div>

            <p className="whitespace-pre-line text-lg leading-[1.4] text-ink">{vacancy.description}</p>

            <div className="h-px w-full bg-[#05111c]/12" />

            <BulletList
              heading="Описание работы"
              items={[
                `Должность - ${vacancy.title};`,
                "Страна - Узбекистан, г.Ташкент;",
                "Обязанности - Внутренняя и внешняя работа по кибербезопасности;",
              ]}
            />

            <BulletList
              heading="Условия трудоустройства и оплаты"
              items={[
                "Заработная плата - 100 000 - 150 000 сум в час (в зависимости от квалификации);",
                "Рабочее время в день/месяц - 8-12 часов в день, 5-6 дней в неделю;",
                "Билет - за свой счет;",
                "Проживание - бесплатно. 3-6 человек в номере;",
              ]}
            />

            <BulletList
              heading="Требования"
              items={[
                "Среднее или высшее техническое образование;",
                "Опыт выявления уязвимостей в веб-ресурсах;",
                "Умение программировать на скриптовом языке: Python, Perl, Bash, Powershell (также приветствуется опыт работы на других языках: S/C#/C++/Java/PHP);",
                "Знание иностранного языка - Не ожидается;",
              ]}
            />

            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-[5px] rounded bg-primary text-base font-bold text-white"
            >
              Отправить резюме
              <SendIcon className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-between border-t border-ink/10 pt-5">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="flex h-9 cursor-pointer items-center gap-4 rounded-md bg-border pl-3 text-base text-ink transition-colors hover:bg-accent/15"
                >
                  Поделиться
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#C7DCFF]">
                    <ShareIcon className="h-5 w-5 text-primary" />
                  </span>
                </button>
                <button
                  type="button"
                  className="flex h-9 cursor-pointer items-center gap-4 rounded-md bg-border pl-3 text-base text-ink transition-colors hover:bg-accent/15"
                >
                  Ссылка
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#C7DCFF]">
                    <LinkIcon className="h-5 w-5 text-primary" />
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-6 text-ink">
                <span className="flex items-center gap-1.5 text-base font-medium">
                  <EyeIcon className="h-5 w-5 text-muted" />
                  9 873
                </span>
                <button
                  type="button"
                  aria-label="Печать"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-accent/15"
                >
                  <PrinterIcon className="h-5 w-5 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
