const links = [
  { key: "payments", label: "Платежи" },
  { key: "expenses", label: "Расходы" },
] as const;

export function DonationsSidebarNav({ active }: { active: (typeof links)[number]["key"] }) {
  return (
    <div className="w-[279px] shrink-0 rounded-lg border border-border bg-white">
      <p className="px-4 pt-4 text-2xl font-bold leading-[1.3] text-ink">Список пожертвований</p>
      <div className="mt-3">
        {links.map((link) => {
          const isActive = link.key === active;
          return (
            <div
              key={link.key}
              className={`relative flex h-[54px] items-center border-t border-border px-4 text-lg ${
                isActive ? "font-bold text-ink" : "font-medium text-[#7d7d7d]"
              }`}
            >
              {isActive && <span className="absolute left-0 top-0 h-full w-1.5 bg-primary" />}
              {link.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
