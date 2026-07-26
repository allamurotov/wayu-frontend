import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { VolunteersInfoSection } from "@/components/sections/services/VolunteersInfoSection";
import { VolunteersCoordinatorsSection } from "@/components/sections/services/VolunteersCoordinatorsSection";
import { ServiceHelpCtaSection } from "@/components/sections/services/ServiceHelpCtaSection";

export default function VolunteersPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Для волонтеров" />
      <ServiceHeroSection title="Для волонтеров" />
      <VolunteersInfoSection />
      <VolunteersCoordinatorsSection />
      <ServiceHelpCtaSection id="preimushestva" />
    </main>
  );
}
