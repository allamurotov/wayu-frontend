"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/NewsIcons";

export function ServiceGallerySection({
  heading,
  images,
  id,
}: {
  heading: string;
  images: string[];
  id?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 302, behavior: "smooth" });
  };

  return (
    <section id={id} className="mx-auto max-w-(--container-page) scroll-mt-24 py-6">
      <div className="flex w-[882px] items-center justify-between">
        <h2 className="text-[22px] font-bold text-ink">{heading}</h2>
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
            alt={`${heading} ${i + 1}`}
            className="h-[164px] w-[278px] shrink-0 snap-start rounded-md object-cover"
          />
        ))}
      </div>
    </section>
  );
}
