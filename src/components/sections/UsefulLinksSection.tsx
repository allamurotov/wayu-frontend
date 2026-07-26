import Link from "next/link";
import { ArrowForwardIcon, ExternalLinkIcon } from "@/components/icons/UsefulLinksIcons";

const links = [
  {
    title: "Официальный веб-сайт Президента Республики Узбекистан",
    url: "www.president.uz",
    icon: "/images/usefullinks/uz-emblem.png",
    wide: false,
  },
  {
    title: "Правительственный Портал Республики Узбекистан",
    url: "www.gov.uz",
    icon: "/images/usefullinks/uz-emblem.png",
    wide: false,
  },
  {
    title: "Министерство иностранных дел Республики Узбекистан",
    url: "www.mfa.uz",
    icon: "/images/usefullinks/uz-emblem.png",
    wide: false,
  },
  {
    title: "Министерство высшего и среднего специального образования Республики Узбекистан",
    url: "www.edu.uz",
    icon: "/images/usefullinks/edu-logo.png",
    wide: false,
  },
  {
    title: "Агентство по делам молодежи",
    url: "www.president.uz",
    icon: "/images/usefullinks/ittifoq-logo.png",
    wide: true,
  },
] as const;

export function UsefulLinksSection() {
  return (
    <section className="mx-auto max-w-(--container-page) py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-[32px] font-bold text-ink">Полезные ссылки</h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Назад"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-ink"
          >
            <ArrowForwardIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-ink"
          >
            <ArrowForwardIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-7 flex gap-6">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.url.startsWith("http") ? link.url : `https://${link.url}`}
            target="_blank"
            className="relative flex w-[218px] shrink-0 flex-col items-center rounded-lg border border-border bg-white px-4 pt-7 pb-6 text-center transition-shadow hover:shadow-[0_6px_16px_rgba(149,168,186,0.2)]"
          >
            <ExternalLinkIcon className="absolute right-4 top-5 h-6 w-6 text-primary" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={link.icon}
              alt=""
              className={link.wide ? "h-[60px] w-[158px] object-contain" : "h-16 w-16 object-contain"}
            />
            <h3 className="mt-4 text-sm font-medium text-ink">{link.title}</h3>
            <span className="mt-4 text-sm font-medium text-primary">{link.url}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
