import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { CountryLawsListSection } from "@/components/sections/services/CountryLawsListSection";

export default function CountryLawsPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Законодательства стран" />
      <ServiceHeroSection title="Законодательства стран" />
      <CountryLawsListSection />
    </main>
  );
}
