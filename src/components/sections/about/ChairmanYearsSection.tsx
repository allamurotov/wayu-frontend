"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowNarrowRightIcon } from "@/components/icons/AboutIcons";

const years = [
  { year: "2017", name: "Шохрух\nБахтияров", image: "/images/about/year-2017-shokhrukh.png" },
  { year: "2018", name: "Дилфуза\nЮлиева", image: "/images/about/year-2018-dilfuza.png" },
  { year: "2019", name: "Мухаммад\nХакбердиев", image: "/images/about/year-2019-muhammad.png" },
  { year: "2020", name: "Айимгул\nКаликназарова", image: "/images/about/year-2020-ayimgul.png" },
  { year: "2022", name: "Мухаммад\nХакбердиев", image: "/images/about/year-2022-muhammad.png" },
];

const allYears = years.map((y) => y.year);
const INDICATOR_WIDTH = 36;

export function ChairmanYearsSection() {
  const [activeYear, setActiveYear] = useState("2017");
  const [flashYear, setFlashYear] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const labelRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const flashTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function goToYear(year: string) {
    setActiveYear(year);
    const card = cardRefs.current[year];
    if (card && scrollerRef.current) {
      const scroller = scrollerRef.current;
      const target = card.offsetLeft - scroller.clientWidth / 2 + card.clientWidth / 2;
      scroller.scrollTo({ left: target, behavior: "smooth" });
    }

    if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    setFlashYear(null);
    requestAnimationFrame(() => {
      setFlashYear(year);
      flashTimeoutRef.current = setTimeout(() => setFlashYear(null), 900);
    });
  }

  function goToNext(currentYear: string) {
    const idx = allYears.indexOf(currentYear);
    const nextYear = allYears[(idx + 1) % allYears.length];
    goToYear(nextYear);
  }

  function nearestYearFromRatio(ratio: number) {
    const index = Math.round(ratio * (allYears.length - 1));
    return allYears[Math.min(Math.max(index, 0), allYears.length - 1)];
  }

  function clampedLeftFromClientX(clientX: number) {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const raw = clientX - rect.left - INDICATOR_WIDTH / 2;
    return Math.min(Math.max(raw, 0), rect.width - INDICATOR_WIDTH);
  }

  function handlePointerDown(e: React.PointerEvent) {
    setIsDragging(true);
    setIndicatorLeft(clampedLeftFromClientX(e.clientX));

    function onMove(ev: PointerEvent) {
      setIndicatorLeft(clampedLeftFromClientX(ev.clientX));
    }
    function onUp(ev: PointerEvent) {
      const track = trackRef.current;
      if (track) {
        const rect = track.getBoundingClientRect();
        const ratio = Math.min(Math.max((ev.clientX - rect.left) / rect.width, 0), 1);
        goToYear(nearestYearFromRatio(ratio));
      }
      setIsDragging(false);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  useLayoutEffect(() => {
    if (isDragging) return;
    function measure() {
      const track = trackRef.current;
      const label = labelRefs.current[activeYear];
      if (!track || !label) return;
      const trackRect = track.getBoundingClientRect();
      const labelRect = label.getBoundingClientRect();
      setIndicatorLeft(labelRect.left - trackRect.left + labelRect.width / 2 - INDICATOR_WIDTH / 2);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeYear, isDragging]);

  return (
    <section className="w-full bg-[#f4f7fa] py-8">
      <div className="mx-auto max-w-(--container-page)">
        <h2 className="text-[44px] font-bold leading-[1.36] text-ink">Председатели</h2>
        <p className="mt-0.5 text-2xl font-medium text-muted">
          Всемирной ассоциации молодежи Узбекистана
        </p>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-9 flex scroll-smooth overflow-x-auto px-32 pb-2"
      >
        {years.map(({ year, name, image }, index) => {
          const photoTop = index % 2 === 0;
          const isFlashing = year === flashYear;

          const photoRow = (
            <div className="flex items-center gap-2 pt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={name.replace("\n", " ")}
                className={`h-16 w-16 rounded-lg object-cover ring-offset-2 transition-all ${
                  isFlashing
                    ? "scale-110 ring-[3px] ring-primary duration-150 ease-out"
                    : "ring-0 ring-primary/0 duration-700 ease-in"
                }`}
              />
              <p className="whitespace-pre-line text-xl font-bold leading-[1.3] text-ink">
                {name}
              </p>
            </div>
          );

          const yearRow = (
            <div className="flex items-center justify-between pb-4">
              <span className="text-[28px] font-bold text-primary">{year}</span>
              <button
                type="button"
                aria-label="Следующий год"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext(year);
                }}
                className="cursor-pointer rounded-full p-2 transition-transform hover:translate-x-1"
              >
                <ArrowNarrowRightIcon className="h-12 w-12 text-primary" />
              </button>
            </div>
          );

          return (
            <div key={year + name} className="flex shrink-0">
              {index > 0 && (
                <div className="flex h-[213px] w-6 shrink-0 items-center justify-center">
                  <div className="h-[187px] w-px bg-border" />
                </div>
              )}
              <div
                ref={(el) => {
                  cardRefs.current[year] = el;
                }}
                onClick={() => goToYear(year)}
                className="group flex h-[213px] w-[280px] shrink-0 cursor-pointer flex-col justify-between border-y border-border px-3"
              >
                {photoTop ? (
                  <>
                    {photoRow}
                    {yearRow}
                  </>
                ) : (
                  <>
                    {yearRow}
                    {photoRow}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-8 max-w-(--container-page)">
        <div ref={trackRef} className="relative h-0.5 w-full bg-border">
          <div
            onPointerDown={handlePointerDown}
            className={`absolute -top-[3px] h-2 w-9 cursor-pointer rounded bg-primary ${
              isDragging ? "" : "transition-[left] duration-300 ease-out"
            }`}
            style={{ left: indicatorLeft }}
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          {allYears.map((y) => (
            <button
              type="button"
              key={y}
              ref={(el) => {
                labelRefs.current[y] = el;
              }}
              onClick={() => goToYear(y)}
              className={`cursor-pointer text-lg font-bold transition-colors hover:text-primary ${
                y === activeYear ? "text-ink" : "text-muted"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
