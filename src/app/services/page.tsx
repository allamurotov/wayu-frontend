import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServicesHubSection } from "@/components/sections/services/ServicesHubSection";

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection />
      <ServicesHubSection />
    </main>
  );
}
