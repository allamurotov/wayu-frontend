import { FaqBreadcrumbSection } from "@/components/sections/FaqBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { FaqSection } from "@/components/sections/services/FaqSection";

export default function FaqPage() {
  return (
    <main className="flex-1">
      <FaqBreadcrumbSection />
      <ServiceHeroSection title="Ча.Во." />
      <FaqSection />
    </main>
  );
}
