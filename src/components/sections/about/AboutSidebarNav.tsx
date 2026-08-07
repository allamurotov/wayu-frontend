import Link from "next/link";

const links = [
  { key: "leadership", label: "Руководство", href: "/about/leadership" },
  { key: "structure", label: "Структура центра", href: "/about/structure" },
  { key: "branches", label: "Представительства", href: "/about/branches" },
  { key: "career", label: "Карьера", href: "/about/career" },
] as const;

export function AboutSidebarNav({ active }: { active: (typeof links)[number]["key"] }) {
  return (
    <div className="w-[279px] shrink-0 rounded-lg border border-border bg-white">
      <p className="px-4 pt-4 text-2xl font-bold leading-[1.3] text-ink">
        Про деятельность Ассоциации
      </p>
      <div className="mt-3">
        {links.map((link) => {
          const isActive = link.key === active;
          return (
            <Link
              key={link.key}
              href={link.href}
              className={`relative flex h-[54px] items-center border-t border-border px-4 text-lg ${
                isActive ? "font-bold text-ink" : "font-medium text-[#7d7d7d]"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1.5 bg-primary" />
              )}
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
