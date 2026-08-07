import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";
import { NeedToKnowSection } from "@/components/sections/about/NeedToKnowSection";
import { NeedToKnowLatestNews } from "@/components/sections/about/NeedToKnowLatestNews";

export default function NeedToKnowPage() {
  return (
    <main className="flex-1 bg-[#f7f9fa]">
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex h-[42px] max-w-(--container-page) items-center gap-2 text-sm font-medium">
          <Link href="/" className="text-ink">
            Главная
          </Link>
          <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
          <span className="text-muted">Вам нужно знать</span>
        </div>
      </div>
      <NeedToKnowSection />
      <NeedToKnowLatestNews />
    </main>
  );
}
