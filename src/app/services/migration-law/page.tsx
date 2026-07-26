import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { CountryDocumentsSection } from "@/components/sections/services/CountryDocumentsSection";

const countries = [
  { flag: "🇩🇪", country: "Германия" },
  { flag: "🇷🇺", country: "Россия" },
  { flag: "🇰🇷", country: "Южная Корея" },
  { flag: "🇹🇷", country: "Турция" },
  { flag: "🇺🇸", country: "США" },
  { flag: "🇯🇵", country: "Япония" },
  { flag: "🇰🇿", country: "Казахстан" },
  { flag: "🇨🇳", country: "Китайская Народная Республика" },
  { flag: "🇰🇬", country: "Киргизия" },
];

export default function MigrationLawPage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Миграционное законодательство" />
      <ServiceHeroSection title="Миграционное законодательство" />
      <CountryDocumentsSection countries={countries} />
    </main>
  );
}
