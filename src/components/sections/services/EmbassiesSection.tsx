import { AboutDonateWidget } from "@/components/sections/about/AboutSupportWidgets";
import { EmbassiesSidebarNav } from "@/components/sections/services/EmbassiesSidebarNav";
import { EmbassiesListSection } from "@/components/sections/services/EmbassiesListSection";

export function EmbassiesSection() {
  return (
    <section className="mx-auto flex max-w-(--container-page) items-start justify-between py-10">
      <EmbassiesListSection />

      <div className="flex w-[279px] shrink-0 flex-col gap-6">
        <EmbassiesSidebarNav />
        <AboutDonateWidget />
      </div>
    </section>
  );
}
