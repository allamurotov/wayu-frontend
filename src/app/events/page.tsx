import { EventsBreadcrumbSection } from "@/components/sections/events/EventsBreadcrumbSection";
import { EventsHeaderBar, EventsListSection } from "@/components/sections/events/EventsListSection";
import { AboutDonateWidget, AboutVolunteerWidget } from "@/components/sections/about/AboutSupportWidgets";
import { getAllEventCategories, getAllEvents } from "@/lib/api";

export default async function EventsPage() {
  const [events, categories] = await Promise.all([getAllEvents(), getAllEventCategories()]);

  return (
    <main className="flex-1">
      <EventsBreadcrumbSection />
      <EventsHeaderBar />
      <div className="mx-auto flex max-w-(--container-page) gap-6 py-6">
        <EventsListSection items={events} categories={categories} />
        <div className="flex shrink-0 flex-col gap-6">
          <AboutDonateWidget />
          <AboutVolunteerWidget />
        </div>
      </div>
    </main>
  );
}
