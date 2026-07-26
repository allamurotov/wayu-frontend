"use client";

import { CloseIcon, PlayCircleIcon } from "@/components/icons/AboutModalIcons";

export function VideoLightbox({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6"
      onClick={onClose}
    >
      <div className="w-full max-w-[1093px]" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <p className="max-w-[654px] text-base font-bold text-white">
            Yaponiyadagi Nagoya universiteti Yuridik Universiteti uchun 15ta grant ajratishini
            e’lon qildi
          </p>
          <button type="button" aria-label="Закрыть" onClick={onClose} className="cursor-pointer">
            <CloseIcon className="h-8 w-8 text-white" />
          </button>
        </div>

        <button
          type="button"
          className="group relative block aspect-[1062/598] w-full cursor-pointer overflow-hidden rounded-lg border border-border"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/video-thumbnail.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020c17] via-[#020c17]/50 to-transparent" />
          <PlayCircleIcon className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-white transition-transform group-hover:scale-110" />
        </button>
      </div>
    </div>
  );
}
