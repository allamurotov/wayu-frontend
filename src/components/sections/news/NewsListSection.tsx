import Link from "next/link";
import { SearchIcon } from "@/components/icons/FigmaIcons";
import {
  ArrowDownIcon,
  ArrowRightSmallIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons/NewsIcons";
import { uploadUrl, type NewsItem } from "@/lib/api";

function formatDate(isoDate: string) {
  const [y, m, d] = isoDate.split("-");
  return `${d}.${m}.${y}`;
}

const pages = ["1", "2", "3", "...", "6"];

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

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.id}`} className="flex flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={uploadUrl(item.image)}
        alt=""
        className="h-[164px] w-[278px] rounded-lg object-cover"
      />
      <div className="mt-3.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-sm font-medium text-muted">
          <CalendarIcon className="h-4 w-4" />
          {formatDate(item.date)}
        </span>
        <span className="flex items-center gap-2 text-sm font-medium text-ink">
          Перейти
          <ArrowRightSmallIcon className="h-4 w-4 text-primary" />
        </span>
      </div>
      <h3 className="mt-1.5 line-clamp-2 text-[15px] font-bold leading-snug text-ink">
        {item.title}
      </h3>
    </Link>
  );
}

export function NewsListSection({ items }: { items: NewsItem[] }) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-(--container-page) pt-9">
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] font-bold text-ink">Новости</h1>
          <div className="flex items-center gap-6">
            <FilterDropdown label="Все регионы" />
            <FilterDropdown label="Все категории" />
            <div className="flex h-12 w-[278px] shrink-0 items-center gap-2 rounded bg-[#F5F6FA] px-3 text-base font-medium text-muted">
              <SearchIcon className="h-6 w-6" />
              Поиск
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-6">
          {items.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-end gap-4">
          <button
            type="button"
            aria-label="Предыдущая страница"
            className="flex h-10 w-10 items-center justify-center rounded bg-[#E1E1E1] border border-border text-ink"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="flex items-center gap-2">
            {pages.map((page, i) =>
              page === "..." ? (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded border border-border text-base font-bold text-[#91969B]"
                >
                  ...
                </span>
              ) : (
                <button
                  key={i}
                  type="button"
                  className={
                    page === "1"
                      ? "flex h-10 w-10 items-center justify-center rounded border border-[#2176BC] bg-[#EEF7FF] text-base font-bold text-primary"
                      : "flex h-10 w-10 items-center justify-center rounded border border-border text-base font-bold text-muted"
                  }
                >
                  {page}
                </button>
              ),
            )}
          </div>

          <button
            type="button"
            aria-label="Следующая страница"
            className="flex h-10 w-10 items-center justify-center rounded bg-[#E1E1E1] border border-border text-ink"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
