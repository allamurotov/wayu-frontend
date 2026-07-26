import { FaqAccordionSection } from "@/components/sections/services/FaqAccordionSection";
import { FaqSidebarWidgets } from "@/components/sections/services/FaqSidebarWidgets";

export function FaqSection() {
  return (
    <section className="mx-auto flex max-w-(--container-page) items-start justify-between py-10">
      <div className="flex w-[781px] shrink-0 flex-col gap-8">
        <FaqAccordionSection />
        <button
          type="button"
          className="flex h-[38px] w-[108px] items-center justify-center rounded border border-border text-sm font-medium text-ink"
        >
          Показать еще
        </button>
      </div>

      <FaqSidebarWidgets />
    </section>
  );
}
