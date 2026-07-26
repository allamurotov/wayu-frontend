import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";
import { BookDetailSection } from "@/components/sections/services/BookDetailSection";
import { RecommendedBooksSection } from "@/components/sections/services/RecommendedBooksSection";

export default function BookDetailPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-border">
        <div className="mx-auto flex h-[42px] max-w-(--container-page) items-center gap-2 text-sm font-medium">
          <Link href="/" className="text-ink">
            Главная
          </Link>
          <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
          <Link href="/services" className="text-ink">
            Услуги и разделы
          </Link>
          <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
          <Link href="/services/library" className="text-ink">
            Электронная библиотека
          </Link>
          <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
          <span className="truncate text-muted">Бибиханим киссаси</span>
        </div>
      </div>
      <BookDetailSection />
      <RecommendedBooksSection />
    </main>
  );
}
