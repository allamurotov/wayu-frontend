import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";

export function ServicesBreadcrumbSection({ current }: { current?: string }) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto flex h-[42px] max-w-(--container-page) items-center gap-2 text-sm font-medium">
        <Link href="/" className="text-ink">
          Главная
        </Link>
        <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
        {current ? (
          <>
            <Link href="/services" className="text-ink">
              Услуги и разделы
            </Link>
            <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
            <span className="truncate text-muted">{current}</span>
          </>
        ) : (
          <span className="text-muted">Услуги и разделы</span>
        )}
      </div>
    </div>
  );
}
