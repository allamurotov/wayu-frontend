import { ExternalLinkIcon } from "@/components/icons/UsefulLinksIcons";

const partners = [
  {
    href: "https://www.lex.uz",
    logo: "/icons/services/lex-wordmark.svg",
    logoClassName: "h-10 w-[81px]",
    title: "Национальная база данных законодательства РУз.",
    url: "www.lex.uz",
  },
  {
    href: "https://www.gov.uz",
    logo: "/icons/services/gov-emblem.svg",
    logoClassName: "h-12 w-12",
    title: "Правительственный портал Республики Узбекистан",
    url: "www.gov.uz",
  },
];

const cards = [partners[0], partners[1], partners[0], partners[1], partners[0], partners[1]];

export function LegalLabPartnersSection() {
  return (
    <section className="mx-auto max-w-(--container-page) py-10">
      <h2 className="text-[32px] font-bold text-ink">Партнерские организации</h2>

      <div className="no-scrollbar mt-6 flex snap-x gap-6 overflow-x-auto pb-2">
        {cards.map((card, i) => (
          <a
            key={`${card.url}-${i}`}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-[190px] w-[278px] shrink-0 snap-start flex-col justify-between rounded-lg border border-[#cfdefa] bg-white p-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={card.logo} alt="" className={card.logoClassName} />
            <div>
              <p className="text-[15px] font-semibold leading-[1.3] text-ink">{card.title}</p>
              <p className="mt-2 text-sm font-medium text-primary">{card.url}</p>
            </div>

            <ExternalLinkIcon className="absolute right-4 top-4 h-6 w-6 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </section>
  );
}
