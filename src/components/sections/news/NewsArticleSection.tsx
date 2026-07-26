import Link from "next/link";
import {
  ArrowLeftIcon,
  EyeIcon,
  LinkIcon,
  PrinterIcon,
  ShareIcon,
} from "@/components/icons/NeedToKnowIcons";
import { uploadUrl, type NewsItem } from "@/lib/api";

function formatDate(isoDate: string) {
  const [y, m, d] = isoDate.split("-");
  return `${d}.${m}.${y}`;
}

export function NewsArticleSection({ article }: { article: NewsItem }) {
  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <section className="mx-auto max-w-(--container-page) py-9">
      <div className="flex items-start gap-4">
        <Link
          href="/news"
          aria-label="Назад"
          className="flex h-9 w-9 shrink-0 items-center justify-center text-ink"
        >
          <ArrowLeftIcon className="h-9 w-9" />
        </Link>

        <article className="flex-1 rounded-lg bg-white p-8">
          <div className="max-w-[782px]">
            <h1 className="text-[28px] font-bold leading-tight text-ink">{article.title}</h1>
            <div className="mt-3 flex items-center gap-3 text-base">
              <span className="text-muted">{formatDate(article.date)}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-muted" />
              <span className="text-primary">Новости</span>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={uploadUrl(article.image)}
              alt=""
              className="mt-6 h-[386px] w-full rounded-lg border border-[#f2f2f2] object-cover"
            />

            <div className="mt-6 flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
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
                  <EyeIcon className="h-5 w-5 text-muted" />—
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
