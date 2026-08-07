const partners = {
  gov: {
    logo: "/icons/services/gov-emblem.svg",
    logoClassName: "h-12 w-12",
    title: "Правительственный портал Республики Узбекистан",
    url: "www.gov.uz",
    href: "https://www.gov.uz",
  },
  lex: {
    logo: "/icons/services/lex-wordmark.svg",
    logoClassName: "h-10 w-[81px]",
    title: "Национальная база данных законодательства РУз.",
    url: "www.lex.uz",
    href: "https://www.lex.uz",
  },
};

const cards = [
  partners.gov,
  partners.lex,
  partners.gov,
  partners.gov,
  partners.lex,
  partners.gov,
  partners.lex,
  partners.gov,
  partners.lex,
];

export function PartnersOrgGrid() {
  return (
    <div className="grid w-[882px] shrink-0 grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <a
          key={`${card.url}-${i}`}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-[190px] w-[278px] flex-col justify-between rounded-lg border border-[#cfdefa] bg-white p-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={card.logo} alt="" className={card.logoClassName} />
          <div>
            <p className="text-[15px] font-semibold leading-[1.3] text-ink">{card.title}</p>
            <p className="mt-2 text-sm font-medium text-primary">{card.url}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
