const links = [
  "Книги",
  "Журналы",
  "Школьная литература",
  "Книги для чтения",
  "Родной язык",
  "Литературные книги",
  "Сказки",
];

export function LibrarySidebarNav() {
  return (
    <div className="w-[279px] shrink-0 rounded-lg border border-border bg-white">
      <p className="px-4 pt-4 text-2xl font-bold leading-[1.3] text-ink">
        Каталог нашей библиотеки
      </p>
      <div className="mt-3">
        {links.map((label, i) => (
          <div
            key={label}
            className={`relative flex h-[54px] items-center border-t border-border px-4 text-lg ${
              i === 5 ? "font-bold text-ink" : "font-medium text-[#7d7d7d]"
            }`}
          >
            {i === 5 && <span className="absolute left-0 top-0 h-full w-1.5 bg-primary" />}
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
