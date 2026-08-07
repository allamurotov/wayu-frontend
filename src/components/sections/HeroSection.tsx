import Link from "next/link";
import { StarIcon } from "@/components/icons/HeroIcons";

export function HeroSection() {
  return (
    <section className="relative h-[440px] w-full">
      <div className="absolute inset-x-0 top-[85px] h-[355px] overflow-hidden bg-surface-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/hero/skyline.svg"
          alt=""
          className="absolute -left-[93px] top-[57px] w-[1566px] max-w-none opacity-40"
        />
      </div>

      <div className="relative mx-auto max-w-(--container-page)">
        <div className="absolute right-0 top-0 h-[440px] w-[207px] overflow-hidden rounded-b-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/monument.png"
            alt="Musofir fondi ramziy tasviri"
            className="absolute inset-0 h-full w-full object-cover object-top saturate-[0.65]"
          />
        </div>

        <div className="relative pt-[149px] pb-[64px]">
          <div className="flex max-w-[603px] items-center gap-3">
            <h2 className="text-[32px] font-bold text-ink">О благотворительном проекте</h2>
            <span className="flex items-center gap-2 rounded-full bg-ink px-4 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/hero/musofir-mini-white.svg"
                alt="Musofir"
                className="h-[18px] w-auto"
              />
            </span>
          </div>

          <p className="mt-4 max-w-[882px] text-lg font-medium leading-snug text-[#565E6A] opacity-80">
            Благотворительный проект «Musofir» - оказание материальной помощи гражданам
            Республики Узбекистан, работающим и обучающимся за рубежом, и нашим
            соотечественникам, нуждающимся в социальной защите, за счет поступивших
            пожертвований.
          </p>

          <div className="mt-9 flex items-center gap-4">
            <Link
              href="/about"
              className="flex items-center gap-1 rounded-md bg-primary px-4 py-3 text-sm font-bold text-white"
            >
              <StarIcon className="h-[18px] w-[18px]" />
              Подробнее о проекте
            </Link>

            <div className="flex items-center gap-4">
              <Link href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/hero/appstore.svg" alt="App Store" className="h-[42px] w-auto" />
              </Link>
              <Link href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/hero/googleplay.svg"
                  alt="Google Play"
                  className="h-[42px] w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
