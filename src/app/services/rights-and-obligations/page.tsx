import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { RightsObligationsSection } from "@/components/sections/services/RightsObligationsSection";

export default function RightsObligationsPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Права и обязанности" />
      <ServiceHeroSection title="Права и обязанности" />
      <RightsObligationsSection />
    </main>
  );
}
