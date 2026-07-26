import { ChairmanSection } from "@/components/sections/ChairmanSection";
import { DonateSection } from "@/components/sections/DonateSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SocialGridSection } from "@/components/sections/SocialGridSection";
import { UsefulLinksSection } from "@/components/sections/UsefulLinksSection";
import { WorldMapSection } from "@/components/sections/WorldMapSection";
import { getAllNews } from "@/lib/api";

export default async function Home() {
  const news = await getAllNews();

  return (
    <main className="flex-1">
      <DonateSection />
      <HeroSection />
      <ChairmanSection />
      <EventsSection />
      <NewsSection items={news} />
      <ServicesSection />
      <WorldMapSection />
      <UsefulLinksSection />
      <SocialGridSection />
    </main>
  );
}
