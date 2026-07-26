"use client";

const links = [
  { key: "zachem", label: "Зачем быть волонтеров", href: "#zachem" },
  { key: "koordinatory", label: "Координаторы", href: "#koordinatory" },
  { key: "preimushestva", label: "Преимущества волонтерства", href: "#preimushestva" },
];

export function VolunteersSidebarNav() {
  return (
    <div className="w-[279px] shrink-0 rounded-lg border border-border bg-white">
      <p className="px-4 pt-4 text-2xl font-bold leading-[1.3] text-ink">
        Коротко о волонтерстве
      </p>
      <div className="mt-3">
        {links.map((link, i) => (
          <a
            key={link.key}
            href={link.href}
            className={`relative flex h-[54px] items-center border-t border-border px-4 text-lg ${
              i === 0 ? "font-bold text-ink" : "font-medium text-[#7d7d7d]"
            }`}
          >
            {i === 0 && <span className="absolute left-0 top-0 h-full w-1.5 bg-primary" />}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
