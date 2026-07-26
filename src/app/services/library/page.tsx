import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { LibraryListSection } from "@/components/sections/services/LibraryListSection";

export default function LibraryPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Электронная библиотека" />
      <ServiceHeroSection title="Электронная библиотека" />
      <LibraryListSection />
    </main>
  );
}
