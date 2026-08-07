import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { PartnersSection } from "@/components/sections/services/PartnersSection";

export default function PartnersPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Партнерство" />
      <ServiceHeroSection title="Партнерство" />
      <PartnersSection />
    </main>
  );
}
