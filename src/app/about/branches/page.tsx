import { AboutSubBreadcrumb } from "@/components/sections/about/AboutSubBreadcrumb";
import { AboutSidebarNav } from "@/components/sections/about/AboutSidebarNav";
import { AboutDonateWidget, AboutVolunteerWidget } from "@/components/sections/about/AboutSupportWidgets";
import { BranchesListSection } from "@/components/sections/about/BranchesListSection";

export default function BranchesPage() {
  return (
    <main className="flex-1">
      <AboutSubBreadcrumb current="Представительства" />
      <div className="mx-auto flex max-w-(--container-page) gap-6 py-9">
        <BranchesListSection />
        <div className="flex flex-col gap-6">
          <AboutSidebarNav active="branches" />
          <AboutDonateWidget />
          <AboutVolunteerWidget />
        </div>
      </div>
    </main>
  );
}
