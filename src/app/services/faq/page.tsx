import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { FaqSection } from "@/components/sections/services/FaqSection";

export default function ServicesFaqPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Ча.Во." />
      <ServiceHeroSection title="Ча.Во." />
      <FaqSection />
    </main>
  );
}
