import Link from "next/link";
import {
  ArrowLeftIcon,
  ShareIcon,
  LinkIcon,
  EyeIcon,
  PrinterIcon,
} from "@/components/icons/NeedToKnowIcons";

export function CountryLawDetailSection({
  flag,
  title,
  text,
}: {
  flag: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <section className="mx-auto max-w-(--container-page) py-10">
      <div className="flex gap-5">
        <Link
          href="/services/country-laws"
          aria-label="Назад"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink"
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </Link>

        <div className="flex w-[782px] flex-col gap-5">
          <div className="flex items-center gap-4">
            {flag}
            <h1 className="text-2xl font-bold text-ink">{title}</h1>
          </div>

          <p className="text-lg leading-[1.4] text-ink">{text}</p>

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
                <EyeIcon className="h-5 w-5 text-muted" />9 873
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
      </div>
    </section>
  );
}
