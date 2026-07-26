import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { StudyAbroadCardsSection } from "@/components/sections/services/StudyAbroadCardsSection";

export default function StudyAbroadPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Учеба за границей" />
      <ServiceHeroSection title="Учеба за границей" />
      <StudyAbroadCardsSection />
    </main>
  );
}
