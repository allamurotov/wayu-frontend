import { ChevronRightIcon } from "@/components/icons/NewsIcons";

export function VacancyCtaSection() {
  return (
    <div className="relative mt-[74px] h-[147px] w-[889px] overflow-visible rounded-[14px] bg-[#22232c]">
      <div
        className="pointer-events-none absolute inset-0 rounded-[14px]"
        style={{
          background:
            "radial-gradient(540px 305px at 60% -50%, rgba(123,126,139,0.08), rgba(123,126,139,0))",
        }}
      />

      <div className="absolute left-8 top-6 flex w-[620px] flex-col gap-3">
        <p className="text-xl font-bold leading-[1.36] text-white">
          Если вы думаете что подходите к нашему компанию, то вперед к нам!
        </p>

        <a
          href="#"
          className="flex h-12 w-[218px] items-center justify-center gap-1 rounded-[10px] border border-[#dadde8] bg-[#22232c] text-base text-white"
        >
          Отправить резюме
          <ChevronRightIcon className="h-5 w-5" />
        </a>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/vacancies/cta-resume.png"
        alt=""
        className="pointer-events-none absolute left-[695px] top-[-59px] h-[202px] w-[202px] object-contain"
      />
    </div>
  );
}
