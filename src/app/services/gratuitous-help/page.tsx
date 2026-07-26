import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { GratuitousHelpInfoSection } from "@/components/sections/services/GratuitousHelpInfoSection";
import { ServiceHelpCtaSection } from "@/components/sections/services/ServiceHelpCtaSection";

export default function GratuitousHelpPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Безвозмездная помощ" />
      <ServiceHeroSection title="Безвозмездная помощь" />
      <GratuitousHelpInfoSection />
      <ServiceHelpCtaSection />
    </main>
  );
}
