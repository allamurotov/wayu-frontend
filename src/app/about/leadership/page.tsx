import { AboutSubBreadcrumb } from "@/components/sections/about/AboutSubBreadcrumb";
import { LeadershipContent } from "@/components/sections/about/LeadershipContent";

export default function LeadershipPage() {
  return (
    <main className="flex-1">
      <AboutSubBreadcrumb current="Руководство" />
      <LeadershipContent />
    </main>
  );
}
