import { ServicesBreadcrumbSection } from "@/components/sections/services/ServicesBreadcrumbSection";
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { CountryDocumentsSection } from "@/components/sections/services/CountryDocumentsSection";

const countries = [
  { flag: "🇩🇪", country: "Германия" },
  { flag: "🇹🇷", country: "Турция" },
  { flag: "🇰🇷", country: "Южная Корея" },
  { flag: "🇺🇸", country: "США" },
  { flag: "🇰🇿", country: "Казахстан" },
  { flag: "🇷🇺", country: "Россия" },
  { flag: "🇰🇬", country: "Киргизия" },
  { flag: "🇯🇵", country: "Япония" },
  { flag: "🇨🇳", country: "Китайская Народная Республика" },
];

export default function InsurancePage() {
  return (
    <main className="flex-1">
      <ServicesBreadcrumbSection current="Страхование" />
      <ServiceHeroSection title="Страхование" />
      <CountryDocumentsSection countries={countries} />
    </main>
  );
}
