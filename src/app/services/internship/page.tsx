import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { InternshipFormSection } from "@/components/sections/services/InternshipFormSection";

export default function InternshipPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Стажировка в Узбекистане" />
      <InternshipFormSection />
    </main>
  );
}
