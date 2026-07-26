import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";
import { WayuEmblemIcon } from "@/components/icons/WayuEmblemIcon";

export function AboutIntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafbfc]">
      <div className="relative border-b border-border">
        <div className="mx-auto flex h-[42px] max-w-(--container-page) items-center gap-2 text-sm font-medium">
          <Link href="/" className="text-ink">
            Главная
          </Link>
          <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
          <span className="text-muted">О нас</span>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/about/intro-bg.png"
        alt=""
        className="absolute left-[1052px] top-[59px] h-[586px] w-[207px] object-cover"
        style={{ filter: "saturate(0.64)" }}
      />

      <div className="relative mx-auto max-w-(--container-page) pb-[173px] pt-[131px]">
        <div className="flex max-w-[678px] flex-col gap-6">
          <div className="flex items-center gap-5">
            <WayuEmblemIcon className="h-[100px] w-[100px] shrink-0" />
            <p className="text-[32px] uppercase leading-[1.2] text-ink">
              <span className="font-normal">Всемирная ассоциация</span>
              <br />
              <span className="font-bold">молодежи Узбекистан</span>
            </p>
          </div>

          <p className="text-xl leading-[1.3] text-ink">
            Мы помогаем нашим согражданам по всему миру. Целью ассоциации - объединить граждан
            Республики Узбекистан по всему миру и оказания им нужной поддержки при
            необходимости.
          </p>

          <Link
            href="/need-to-know"
            className="inline-flex w-fit items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-bold text-white"
          >
            Про деятельность Ассоциации
            <ArrowRightIcon className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
