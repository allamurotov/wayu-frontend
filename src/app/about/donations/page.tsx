import { AboutSubBreadcrumb } from "@/components/sections/about/AboutSubBreadcrumb";
import { DonationsSidebarNav } from "@/components/sections/about/DonationsSidebarNav";
import { DonationsListSection } from "@/components/sections/about/DonationsListSection";
import { AboutDonateWidget, AboutVolunteerWidget } from "@/components/sections/about/AboutSupportWidgets";

export default function DonationsPage() {
  return (
    <main className="flex-1">
      <AboutSubBreadcrumb current="Список пожертвований" />
      <div className="mx-auto flex max-w-(--container-page) gap-6 py-9">
        <DonationsListSection />
        <div className="flex flex-col gap-6">
          <DonationsSidebarNav active="payments" />
          <AboutDonateWidget />
          <AboutVolunteerWidget />
        </div>
      </div>
    </main>
  );
}
