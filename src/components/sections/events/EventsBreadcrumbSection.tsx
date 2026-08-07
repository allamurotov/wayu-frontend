import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";

export function EventsBreadcrumbSection() {
  return (
    <div className="border-b border-border">
      <div className="mx-auto flex h-[42px] max-w-(--container-page) items-center gap-2 text-sm font-medium">
        <Link href="/" className="text-ink">
          Главная
        </Link>
        <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
        <span className="text-muted">Запланированные события</span>
      </div>
    </div>
  );
}
