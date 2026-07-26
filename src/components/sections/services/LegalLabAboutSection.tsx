import { SendIcon } from "@/components/icons/VacancyIcons";
import { PlayIcon } from "@/components/icons/PlayIcon";

const DESCRIPTION =
  "«Юридическая лаборатория» оказывает юридические консультации и консультации молодым людям из Узбекистана, которые учатся, работают или планируют выехать за границу с целью обучения и работы.";

export function LegalLabAboutSection() {
  return (
    <section className="mx-auto flex max-w-(--container-page) items-start justify-between py-10">
      <div className="mt-[60px] flex w-[586px] shrink-0 flex-col gap-9">
        <div className="flex flex-col gap-5">
          <h2 className="text-[32px] font-bold text-ink">О проекте</h2>
          <p className="text-base leading-[1.3] text-ink">{DESCRIPTION}</p>
        </div>

        <button
          type="button"
          className="flex h-[42px] w-[224px] items-center justify-center gap-2 rounded bg-primary text-sm font-bold text-white"
        >
          <SendIcon className="h-[18px] w-[18px]" />
          Получить консультацию
        </button>
      </div>

      <div className="relative h-[274px] w-[384px] shrink-0">
        <div className="absolute -left-6 top-6 h-[274px] w-[384px] rounded-lg border-2 border-primary" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/legal-lab/hero-photo.png"
          alt="Юридическая лаборатория"
          className="absolute left-0 top-0 h-[274px] w-[384px] rounded-lg object-cover"
        />

        <div className="absolute -left-[76px] top-[210px] flex w-[293px] items-center justify-between gap-4 rounded-lg bg-primary p-5 shadow-[10px_10px_20px_rgba(34,35,44,0.32)]">
          <p className="text-xl font-bold leading-[1.3] text-white">
            Посмотрите как получить консультацию
          </p>
          <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white/10">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
              <PlayIcon className="h-4 w-4" />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
