"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";
import { PlayIcon } from "@/components/icons/AboutIcons";
import { VideoLightbox } from "@/components/sections/about/VideoLightbox";

export function AboutInfoSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="mx-auto max-w-(--container-page) py-8">
      <div className="flex items-start justify-between gap-8">
        <div className="flex max-w-[586px] flex-col justify-between" style={{ minHeight: 312 }}>
          <div>
            <h2 className="text-[44px] font-bold leading-[1.36] text-ink">Чем мы занимаемся</h2>
            <p className="mt-3 text-base leading-[1.3] text-ink">
              Во исполнение приоритетных задач в сфере молодёжной политики поставленных
              Президентом Республики Узбекистан в ходе выступления с Посланием к Олий Мажлису
              Республики Узбекистан от 22 декабря 2017 года, Союзом молодёжи Узбекистана была
              создана негосударственная некоммерческая организация «Всемирная ассоциация
              молодёжи Узбекистана», с целью осуществления работы с молодёжью, обучающейся и
              трудящейся за рубежом, защита их прав и законных интересов, всесторонняя
              поддержка и стимулирование, воспитание в них духа патриотизма, а также
              содействие в нахождении своего места в обществе.
            </p>
          </div>
          <Link href="/need-to-know" className="flex items-center gap-2 text-base font-medium text-accent">
            Вам нужно знать
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative h-[274px] w-[384px] shrink-0">
          <div className="absolute -left-6 top-6 h-[274px] w-[384px] rounded-lg border-2 border-primary" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/onas-photo.png"
            alt=""
            className="absolute inset-0 h-[274px] w-[384px] rounded-lg border border-border object-cover"
          />
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="absolute -bottom-9 left-0 flex w-[293px] cursor-pointer items-center gap-4 rounded-lg bg-primary p-4 text-left shadow-[10px_10px_20px_rgba(34,35,44,0.32)]"
          >
            <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center">
              <div className="absolute h-[70px] w-[70px] rounded-full bg-white/10" />
              <div className="absolute h-[50px] w-[50px] rounded-full bg-white/20" />
              <PlayIcon className="relative h-[19px] w-[19px] text-white" />
            </div>
            <p className="text-lg font-bold leading-[1.3] text-white">
              Немного о нашей деятельности)
            </p>
          </button>
        </div>
      </div>
      <VideoLightbox open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
