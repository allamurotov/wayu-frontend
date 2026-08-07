const links = [
  { key: "private", label: "Частные" },
  { key: "gov", label: "Государственные" },
];

export function PartnersSidebarNav() {
  return (
    <div className="w-[279px] shrink-0 rounded-lg border border-border bg-white">
      <p className="px-4 pt-4 text-2xl font-bold leading-[1.3] text-ink">
        Познакомьтесь с нашими партнерами
      </p>
      <div className="mt-3">
        {links.map((link, i) => (
          <div
            key={link.key}
            className={`relative flex h-[54px] items-center border-t border-border px-4 text-lg ${
              i === 1 ? "font-bold text-ink" : "font-medium text-[#7d7d7d]"
            }`}
          >
            {i === 1 && <span className="absolute left-0 top-0 h-full w-1.5 bg-primary" />}
            {link.label}
          </div>
        ))}
      </div>
    </div>
  );
}
