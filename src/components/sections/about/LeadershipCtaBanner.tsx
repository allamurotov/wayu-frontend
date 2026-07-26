import { ChevronRightIcon } from "@/components/icons/NewsIcons";

export function LeadershipCtaBanner() {
  return (
    <div className="relative mx-auto mt-24 flex h-[147px] w-[889px] items-center overflow-visible rounded-2xl bg-ink px-14">
      <div className="max-w-[430px]">
        <p className="text-xl font-bold text-white">
          Если вы думаете что подходите к нашему компанию, то вперед к нам!
        </p>
        <a
          href="#"
          className="mt-6 inline-flex h-12 items-center gap-2 rounded-[10px] border border-[#dadde8] px-6 text-base text-white"
        >
          Отправить резюме
          <ChevronRightIcon className="h-5 w-5" />
        </a>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/leadership/cta-resume.png"
        alt=""
        className="pointer-events-none absolute right-16 -top-14 h-[202px] w-[202px] object-contain"
      />
    </div>
  );
}
