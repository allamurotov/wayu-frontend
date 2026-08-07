import { AboutSubBreadcrumb } from "@/components/sections/about/AboutSubBreadcrumb";
import { AboutSidebarNav } from "@/components/sections/about/AboutSidebarNav";
import { AboutDonateWidget, AboutVolunteerWidget } from "@/components/sections/about/AboutSupportWidgets";
import { VacancyListSection } from "@/components/sections/about/VacancyListSection";
import { VacancyCtaSection } from "@/components/sections/about/VacancyCtaSection";
import { getAllVacancies } from "@/lib/api";

export default async function CareerPage() {
  const vacancies = await getAllVacancies();

  return (
    <main className="flex-1">
      <AboutSubBreadcrumb current="Карьера" />
      <div className="mx-auto max-w-(--container-page) pb-[66px] pt-8">
        <div className="flex gap-6">
          <VacancyListSection items={vacancies} />
          <div className="flex flex-col gap-6">
            <AboutSidebarNav active="career" />
            <AboutDonateWidget />
            <AboutVolunteerWidget />
          </div>
        </div>
        <VacancyCtaSection />
      </div>
    </main>
  );
}
