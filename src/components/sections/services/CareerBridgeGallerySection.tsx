"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/NewsIcons";

const images = [
  "/images/career-bridge/gallery1.png",
  "/images/career-bridge/gallery2.png",
  "/images/career-bridge/gallery3.png",
  "/images/career-bridge/gallery4.png",
  "/images/career-bridge/gallery5.png",
  "/images/career-bridge/gallery6.png",
  "/images/career-bridge/gallery7.png",
];

export function CareerBridgeGallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 302, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-(--container-page) py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-[32px] font-bold text-ink">Фотогалерея</h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Назад"
            onClick={() => scroll(-1)}
            className="flex h-6 w-6 items-center justify-center text-ink"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Вперед"
            onClick={() => scroll(1)}
            className="flex h-6 w-6 items-center justify-center text-ink"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="no-scrollbar mt-6 flex snap-x gap-6 overflow-x-auto pb-2">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`Фотогалерея ${i + 1}`}
            className="h-[164px] w-[278px] shrink-0 snap-start rounded-md object-cover"
          />
        ))}
      </div>
    </section>
  );
}
