import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { LegalLabAboutSection } from "@/components/sections/services/LegalLabAboutSection";
import { LegalLabFeaturesSection } from "@/components/sections/services/LegalLabFeaturesSection";
import { LegalLabPartnersSection } from "@/components/sections/services/LegalLabPartnersSection";
import { LegalLabVolunteersSection } from "@/components/sections/services/LegalLabVolunteersSection";

export default function LegalLabPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Юридическая лаборатория" />
      <ServiceHeroSection title="Юридическая лаборатория" />
      <LegalLabAboutSection />
      <LegalLabFeaturesSection />
      <LegalLabPartnersSection />
      <LegalLabVolunteersSection />
    </main>
  );
}
