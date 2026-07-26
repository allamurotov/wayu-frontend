import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";

export function AboutSubBreadcrumb({
  current,
  parent,
}: {
  current: string;
  parent?: { label: string; href: string };
}) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto flex h-[42px] max-w-(--container-page) items-center gap-2 text-sm font-medium">
        <Link href="/" className="text-ink">
          Главная
        </Link>
        <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
        <Link href="/about" className="text-ink">
          О нас
        </Link>
        <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
        {parent && (
          <>
            <Link href={parent.href} className="text-ink">
              {parent.label}
            </Link>
            <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
          </>
        )}
        <span className="text-muted">{current}</span>
      </div>
    </div>
  );
}
