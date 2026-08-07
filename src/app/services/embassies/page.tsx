import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { EmbassiesSection } from "@/components/sections/services/EmbassiesSection";

export default function EmbassiesPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Посольства и консульства" />
      <ServiceHeroSection title="Посольства и консульства" />
      <EmbassiesSection />
    </main>
  );
}
