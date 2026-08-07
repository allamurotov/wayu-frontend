import Link from "next/link";
import { SearchIcon } from "@/components/icons/FigmaIcons";
import { ArrowDownIcon } from "@/components/icons/NewsIcons";
import { ArrowRightIcon, LocationIcon } from "@/components/icons/EventsIcons";
import { uploadUrl, type EventCategoryItem, type EventItem } from "@/lib/api";

const MONTHS_GENITIVE = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

function formatEventDate(isoDate: string) {
  const [, m, d] = isoDate.split("-").map(Number);
  return `${d} ${MONTHS_GENITIVE[m - 1]}`;
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex h-12 w-[240px] shrink-0 items-center justify-between rounded bg-[#F5F6FA] px-3 text-base font-medium text-ink"
    >
      {label}
      <ArrowDownIcon className="h-5 w-5 text-muted" />
    </button>
  );
}

export function EventsHeaderBar() {
  return (
    <div className="mx-auto flex max-w-(--container-page) items-center justify-between pt-9">
      <h1 className="text-[32px] font-bold text-ink">Запланированные события</h1>
      <div className="flex items-center gap-4">
        <FilterDropdown label="Все категории" />
        <div className="flex h-12 w-[278px] shrink-0 items-center gap-2 rounded bg-[#F5F6FA] px-3 text-base font-medium text-muted">
          <SearchIcon className="h-6 w-6" />
          Поиск
        </div>
      </div>
    </div>
  );
}

function EventCard({ event, categoryTitle }: { event: EventItem; categoryTitle?: string }) {
  return (
    <Link
      href="#"
      className="group flex h-[233px] w-[881px] shrink-0 items-stretch overflow-hidden rounded-lg border border-border bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={uploadUrl(event.image)}
        alt=""
        className="h-full w-[308px] shrink-0 object-cover"
      />
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {categoryTitle && <span className="text-base font-medium text-accent">{categoryTitle}</span>}
          <h3 className="mt-2 line-clamp-2 text-2xl font-bold leading-snug text-ink">
            {event.title}
          </h3>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-xl font-bold text-ink">{formatEventDate(event.date)}</span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-ink">
              <LocationIcon className="h-3.5 w-3.5 text-accent" />
              {event.address}
            </span>
          </div>
          <span className="flex items-center gap-2 text-base font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
            Перейти
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function EventsListSection({
  items,
  categories,
}: {
  items: EventItem[];
  categories: EventCategoryItem[];
}) {
  const categoryById = new Map(categories.map((c) => [c.id, c.title]));

  return (
    <div className="flex w-[881px] shrink-0 flex-col gap-6">
      <div className="flex flex-col gap-6">
        {items.map((event) => (
          <EventCard key={event.id} event={event} categoryTitle={categoryById.get(event.categoryId)} />
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
