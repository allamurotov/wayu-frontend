import Link from "next/link";
import { ArrowRightIcon, LocationIcon } from "@/components/icons/EventsIcons";

type Event = {
  image: string;
  date: string;
  place: string;
  title: string;
  category: string;
  featured?: boolean;
};

const events: Event[] = [
  {
    image: "/images/events/event-1.png",
    date: "22 Ноябрь, 18:00",
    place: "Союз молодежи Узбекистана",
    title:
      "«Зарубежные инновационные идеи и технологии и перспективы их внедрения в экономику и социальную сферу Узбекистана»",
    category: "Международная конференция",
    featured: true,
  },
  {
    image: "/images/events/event-2.png",
    date: "8 Декабрь, 09:00",
    place: "Германия, Берлин",
    title: "30 июня - День молодежи Узбекистана пройдет в Германии",
    category: "Видеоконференция",
  },
  {
    image: "/images/events/event-3.png",
    date: "17 Декабрь, 09:00",
    place: "Союз молодежи Узбекистана",
    title: "«Зарубежные инновационные идеи и технологии и перспективы их внедрения»",
    category: "Видеоконференция",
  },
];

function EventCard({ event }: { event: Event }) {
  return (
    <Link
      href="/events"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border p-7 ${
        event.featured ? "w-[580px]" : "w-[278px]"
      } h-[391px] shrink-0`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={event.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(29,60,114,0.64), rgba(29,60,114,0.94))",
        }}
      />

      <div className="relative flex shrink-0 flex-col gap-0.5">
        <span className="text-xl font-bold text-white">{event.date}</span>
        <span className="flex items-center gap-1.5 text-sm font-medium text-white">
          <LocationIcon className="h-3.5 w-3.5" />
          {event.place}
        </span>
      </div>

      <div className="relative flex shrink-0 items-end justify-between gap-2">
        <div className="flex min-w-0 flex-col gap-4">
          <h3
            className={`line-clamp-2 min-w-0 font-bold text-white transition-colors duration-300 hover:text-accent ${
              event.featured ? "max-w-[516px] text-2xl" : "text-base"
            }`}
          >
            {event.title}
          </h3>
          <span className="text-sm font-medium text-white/70">{event.category}</span>
        </div>
      </div>
    </Link>
  );
}

export function EventsSection() {
  return (
    <section className="mx-auto max-w-(--container-page) py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-[32px] font-bold text-ink">Запланированные события</h2>
        <Link href="/events" className="flex items-center gap-2 text-base font-medium text-muted">
          Посмотреть все
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-7 flex gap-6">
        {events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </section>
  );
}
