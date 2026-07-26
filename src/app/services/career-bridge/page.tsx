import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { CareerBridgeAboutSection } from "@/components/sections/services/CareerBridgeAboutSection";
import { CareerBridgeVacanciesSection } from "@/components/sections/services/CareerBridgeVacanciesSection";
import { CareerBridgeGallerySection } from "@/components/sections/services/CareerBridgeGallerySection";

export default function CareerBridgePage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Карьерный мост" />
      <ServiceHeroSection title="Карьерный мост" />
      <CareerBridgeAboutSection />
      <CareerBridgeGallerySection />
      <CareerBridgeVacanciesSection />
    </main>
  );
}
