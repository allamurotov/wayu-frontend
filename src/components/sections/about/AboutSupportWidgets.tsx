import Link from "next/link";
import { HeartIcon, StarIcon } from "@/components/icons/AboutIcons";
import { GlobeEmblemIcon } from "@/components/icons/GlobeEmblemIcon";

export function AboutDonateWidget() {
  return (
    <div className="relative w-[279px] shrink-0 overflow-hidden rounded-lg bg-[#131721] px-4 pb-6 pt-9">
      <GlobeEmblemIcon className="absolute -right-6 -top-10 h-[130px] w-[130px] text-white/10" />
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium leading-tight text-white">
          Фонд поддержки узбекистанцев за границей
        </span>
      </div>
      <p className="mt-6 text-[32px] font-bold leading-[1.3] text-white">Чего ждете вы?</p>
      <p className="mt-2 text-lg text-white">Сотни наших соратников уже внесли свой вклад</p>
      <Link
        href="/about/donations"
        className="mt-6 flex h-[42px] w-fit items-center gap-2 rounded bg-primary px-4 text-sm font-bold text-white"
      >
        <HeartIcon className="h-[18px] w-[18px]" />
        Поддержать
      </Link>
    </div>
  );
}

export function AboutVolunteerWidget() {
  return (
    <div className="relative w-[279px] shrink-0 overflow-hidden rounded-lg border border-accent bg-white px-4 pb-6 pt-9">
      <GlobeEmblemIcon className="absolute -right-16 -top-10 h-[160px] w-[160px] text-primary/10" />
      <p className="text-2xl font-bold leading-[1.3] text-ink">Стать волонтером</p>
      <p className="mt-2 text-lg leading-snug text-[#565E6A]">
        Хотите стать волонтером, присоединяйтесь к нам
      </p>
      <Link
        href="#"
        className="mt-6 flex h-[42px] w-fit items-center gap-2 rounded bg-primary px-4 text-sm font-bold text-white"
      >
        <StarIcon className="h-[18px] w-[18px]" />
        Стать волонтером
      </Link>
    </div>
  );
}
