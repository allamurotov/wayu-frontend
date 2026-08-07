import { AboutDonateWidget } from "@/components/sections/about/AboutSupportWidgets";
import { ArrowRightSmallIcon, CalendarIcon } from "@/components/icons/NewsIcons";

const EXCERPT =
  "Положение о порядке признания и нострификации (установления эквивалентн...";

const cards = [
  { image: "/images/study-abroad/card1.png", date: "13.10.2022", title: "Положение о порядке нострификации" },
  {
    image: "/images/study-abroad/card4.png",
    date: "13.10.2022",
    title: "Правила и рекомендации обучения в зарубежных странах",
  },
  {
    image: "/images/study-abroad/card5.png",
    date: "13.10.2022",
    title: "Процедуры перевода учебы в Узбекистан",
  },
  {
    image: "/images/study-abroad/card3.png",
    date: "13.10.2022",
    title: "Подтверждена дата следующего рейса Ташкент - Сеул - Ташкент",
  },
  {
    image: "/images/study-abroad/card2.png",
    date: "13.10.2022",
    title: "Учебные курсы узбекского языка для детей в зарубежных странах",
  },
];

export function StudyAbroadCardsSection() {
  return (
    <section className="mx-auto flex max-w-(--container-page) items-start justify-between py-10">
      <div className="grid w-[882px] shrink-0 grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="group flex flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt=""
              className="h-[165px] w-[278px] rounded-lg object-cover"
            />
            <div className="mt-3.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm font-medium text-muted">
                <CalendarIcon className="h-4 w-4" />
                {card.date}
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100">
                Перейти
                <ArrowRightSmallIcon className="h-4 w-4 text-primary" />
              </span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug text-ink">{card.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted">{EXCERPT}</p>
          </div>
        ))}
      </div>

      <div className="w-[279px] shrink-0">
        <AboutDonateWidget />
      </div>
    </section>
  );
}
