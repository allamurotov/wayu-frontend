import Link from "next/link";
import { ClockIcon } from "@/components/icons/AboutIcons";
import { LocationIcon, ArrowRightIcon } from "@/components/icons/EventsIcons";
import { MoneysIcon } from "@/components/icons/VacancyIcons";
import { VacancyLogoMark } from "@/components/icons/VacancyLogoMark";
import { ArrowDownIcon } from "@/components/icons/NewsIcons";
import { vacancyTypeLabel, type VacancyItem } from "@/lib/api";

function VacancyCard({ vacancy }: { vacancy: VacancyItem }) {
  return (
    <Link
      href={`/about/career/${vacancy.id}`}
      className="group relative block h-[219px] w-[881px] rounded-lg border border-[#f4f7fa] bg-white shadow-[0_8px_28px_rgba(149,167,186,0.09)] transition-[border-color,box-shadow] hover:border-accent hover:shadow-[0_8px_28px_rgba(149,167,186,0.28)]"
    >
      <div className="absolute left-6 top-6 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-md border border-border bg-white">
        <VacancyLogoMark className="h-7 w-[27px]" />
      </div>

      <div className="absolute left-[92px] top-[26px] w-[calc(881px-92px-24px)]">
        <p className="text-xl font-bold leading-6 text-ink">{vacancy.title}</p>
        <div className="mt-[6px] flex items-center gap-1.5">
          <LocationIcon className="h-3.5 w-3.5 text-accent" />
          <span className="text-sm font-medium text-ink">{vacancy.address}</span>
        </div>
      </div>

      <p className="absolute left-6 top-24 w-[833px] text-base leading-[1.3] text-ink">
        {vacancy.description}
      </p>

      <span className="absolute left-6 top-[158px] h-px w-[857px] bg-border" />

      <div className="absolute left-6 top-[177px] flex items-center gap-[34px]">
        <div className="flex items-center gap-2">
          <MoneysIcon className="h-6 w-6 text-muted group-hover:text-accent" />
          <span className="text-base font-bold text-ink">{vacancy.salary}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-6 w-6 text-muted group-hover:text-accent" />
          <span className="text-base font-bold text-ink">{vacancyTypeLabel(vacancy.type)}</span>
        </div>
      </div>

      <span className="absolute left-[769px] top-[180px] flex items-center gap-2 text-base font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
        Перейти
        <ArrowRightIcon className="h-4 w-4" />
      </span>
    </Link>
  );
}

export function VacancyListSection({ items }: { items: VacancyItem[] }) {
  return (
    <div className="flex w-[881px] shrink-0 flex-col gap-7">
      <div className="flex flex-col gap-6">
        {items.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
      <button
        type="button"
        className="flex h-11 w-fit items-center gap-1 self-center rounded bg-[#e1e9f2] px-6 py-3 text-base font-medium text-ink"
      >
        Показать еще
        <ArrowDownIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
