import Link from "next/link";
import { ClockIcon } from "@/components/icons/AboutIcons";
import { LocationIcon } from "@/components/icons/EventsIcons";
import { MoneysIcon } from "@/components/icons/VacancyIcons";
import { VacancyLogoMark } from "@/components/icons/VacancyLogoMark";
import { getAllVacancies, vacancyTypeLabel, type VacancyItem } from "@/lib/api";

const FEATURED_IDS = [1, 4, 3, 2];

function VacancyCard({ vacancy }: { vacancy: VacancyItem }) {
  return (
    <Link
      href={`/about/career/${vacancy.id}`}
      className="flex h-[219px] w-[580px] shrink-0 snap-start flex-col rounded-lg border border-[#f4f7fa] bg-white p-6 shadow-[0_8px_24px_rgba(149,167,186,0.08)] transition-shadow hover:shadow-[0_8px_24px_rgba(149,167,186,0.2)]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-md border border-border bg-white">
          <VacancyLogoMark className="h-7 w-[27px]" />
        </div>
        <div>
          <p className="text-xl font-bold leading-6 text-ink">{vacancy.title}</p>
          <div className="mt-1.5 flex items-center gap-1.5">
            <LocationIcon className="h-3.5 w-3.5 text-accent" />
            <span className="text-sm font-medium text-ink">{vacancy.address}</span>
          </div>
        </div>
      </div>

      <p className="mt-5 text-base leading-[1.3] text-ink">{vacancy.description}</p>

      <span className="mt-auto flex items-center gap-[34px] border-t border-border pt-5">
        <span className="flex items-center gap-2">
          <MoneysIcon className="h-6 w-6 text-muted" />
          <span className="text-base font-bold text-ink">{vacancy.salary}</span>
        </span>
        <span className="flex items-center gap-2">
          <ClockIcon className="h-6 w-6 text-muted" />
          <span className="text-base font-bold text-ink">{vacancyTypeLabel(vacancy.type)}</span>
        </span>
      </span>
    </Link>
  );
}

export async function CareerBridgeVacanciesSection() {
  const all = await getAllVacancies();
  const cardVacancies = FEATURED_IDS.map((id) => all.find((v) => v.id === id)).filter(
    (v): v is VacancyItem => Boolean(v),
  );

  return (
    <section className="mx-auto max-w-(--container-page) py-10">
      <h2 className="text-[32px] font-bold text-ink">Вакансии</h2>

      <div className="no-scrollbar mt-8 flex snap-x gap-6 overflow-x-auto pb-2">
        {cardVacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </section>
  );
}
