import { SendIcon } from "@/components/icons/VacancyIcons";
import { PlayIcon } from "@/components/icons/PlayIcon";

const DESCRIPTION =
  "Проект стартовал в феврале 2019 года. Основной целью данного проекта является информирование молодых узбекистанцев, обучающихся в зарубежных странах и вернувшихся в Узбекистан после завершения обучения, о вакансиях, имеющихся в министерствах, ведомствах, организациях и частных предприятиях Узбекистана, заключается в обмене мнениями о проводимых реформах. реализуются и оказывать помощь в обеспечении их работой.\nЕсли у вас возникли трудности с трудоустройством в Узбекистане после окончания зарубежного вуза, то этот проект для вас!";

export function CareerBridgeAboutSection() {
  return (
    <section className="mx-auto flex max-w-(--container-page) gap-16 py-10">
      <div className="flex w-[586px] shrink-0 flex-col gap-9">
        <div className="flex flex-col gap-5">
          <h2 className="text-[32px] font-bold text-ink">О проекте</h2>
          <p className="whitespace-pre-line text-base leading-[1.3] text-ink">{DESCRIPTION}</p>
        </div>

        <button
          type="button"
          className="flex h-[42px] w-[224px] items-center justify-center gap-2 rounded bg-primary text-sm font-bold text-white"
        >
          <SendIcon className="h-[18px] w-[18px]" />
          Отправить резюме
        </button>
      </div>

      <div className="relative mt-5 h-[274px] w-[384px] shrink-0">
        <div className="absolute -left-6 top-6 h-[274px] w-[384px] rounded-lg border-2 border-primary" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/career-bridge/collage.png"
          alt="Карьерный мост"
          className="absolute left-0 top-0 h-[274px] w-[384px] rounded-lg object-cover"
        />

        <div className="absolute -left-[76px] top-[210px] flex w-[293px] items-center justify-between gap-4 rounded-lg bg-primary p-5 shadow-[10px_10px_20px_rgba(34,35,44,0.32)]">
          <p className="text-xl font-bold leading-[1.3] text-white">
            Подробнее о проекте Карьерный мост
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
