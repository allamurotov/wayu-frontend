import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { YoungCompatriotsAboutSection } from "@/components/sections/services/YoungCompatriotsAboutSection";
import { ServiceGallerySection } from "@/components/sections/services/ServiceGallerySection";
import { ServiceHelpCtaSection } from "@/components/sections/services/ServiceHelpCtaSection";

const galleryImages = [
  "/images/young-compatriots/gallery1.png",
  "/images/young-compatriots/gallery2.png",
  "/images/young-compatriots/gallery3.png",
  "/images/young-compatriots/gallery4.png",
  "/images/young-compatriots/gallery5.png",
  "/images/young-compatriots/gallery6.png",
  "/images/young-compatriots/gallery7.png",
];

export default function YoungCompatriotsPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Юные соотечественники" />
      <ServiceHeroSection title="Юные соотечественники" />
      <YoungCompatriotsAboutSection />
      <ServiceGallerySection heading="Фотогалерея" images={galleryImages} />
      <ServiceHelpCtaSection />
    </main>
  );
}
