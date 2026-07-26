import { StarIcon } from "@/components/icons/AboutIcons";
import { GlobeEmblemIcon } from "@/components/icons/GlobeEmblemIcon";

export function ServiceHelpCtaSection({ id }: { id?: string } = {}) {
  return (
    <section id={id} className="mx-auto max-w-(--container-page) scroll-mt-24 py-10">
      <div className="relative flex w-[882px] flex-col overflow-hidden rounded-md bg-[#0d2855] px-10 py-8">
        <GlobeEmblemIcon className="pointer-events-none absolute -right-6 -top-6 h-[488px] w-[474px] text-accent/10" />

        <h2 className="relative max-w-[401px] text-[36px] font-bold leading-[1.3] text-white">
          Как ты можешь помочь?
        </h2>
        <p className="relative mt-4 max-w-[548px] text-lg leading-[1.4] text-white">
          Если ты обладатель свободного времени, пройди регистрацию, и получай бесценный опыт и
          новые знакомства!
        </p>
        <button
          type="button"
          className="relative mt-6 flex h-12 w-fit items-center gap-2 rounded bg-accent px-6 text-base font-bold text-white"
        >
          <StarIcon className="h-5 w-5" />
          Стать волонтером
        </button>
      </div>
    </section>
  );
}
