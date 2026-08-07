import { AboutInfoSection } from "@/components/sections/about/AboutInfoSection";
import { AboutIntroSection } from "@/components/sections/about/AboutIntroSection";
import { ChairmanYearsSection } from "@/components/sections/about/ChairmanYearsSection";
import { ChairwomanContactSection } from "@/components/sections/about/ChairwomanContactSection";
import { StatsSection } from "@/components/sections/about/StatsSection";
import { TasksSection } from "@/components/sections/about/TasksSection";
import { SocialGridSection } from "@/components/sections/SocialGridSection";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutIntroSection />
      <AboutInfoSection />
      <ChairmanYearsSection />
      <ChairwomanContactSection />
      <TasksSection />
      <StatsSection />
      <SocialGridSection />
    </main>
  );
}
