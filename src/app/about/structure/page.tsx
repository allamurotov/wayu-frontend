import { AboutSubBreadcrumb } from "@/components/sections/about/AboutSubBreadcrumb";
import { AboutSidebarNav } from "@/components/sections/about/AboutSidebarNav";
import { AboutDonateWidget, AboutVolunteerWidget } from "@/components/sections/about/AboutSupportWidgets";
import { StructureOrgChartSection } from "@/components/sections/about/StructureOrgChartSection";

export default function StructurePage() {
  return (
    <main className="flex-1">
      <AboutSubBreadcrumb current="Структура центра" />
      <div className="mx-auto flex max-w-(--container-page) gap-6 py-9">
        <StructureOrgChartSection />
        <div className="flex flex-col gap-6">
          <AboutSidebarNav active="structure" />
          <AboutDonateWidget />
          <AboutVolunteerWidget />
        </div>
      </div>
    </main>
  );
}
