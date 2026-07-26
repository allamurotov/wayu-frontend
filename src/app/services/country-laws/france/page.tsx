import Link from "next/link";
import { CountryLawDetailSection } from "@/components/sections/services/CountryLawDetailSection";
import { FranceFlagIcon } from "@/components/icons/FranceFlagIcon";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";

const TEXT =
  "Во исполнение приоритетных задач в сфере молодёжной политики поставленных Президентом Республики Узбекистан в ходе выступления с Посланием к Олий Мажлису Республики Узбекистан от 22 декабря 2017 года, Союзом молодёжи Узбекистана была создана негосударственная некоммерческая организация «Всемирная ассоциация молодёжи Узбекистана», с целью осуществления работы с молодёжью, обучающейся и трудящейся за рубежом, защита их прав и законных интересов, всесторонняя поддержка и стимулирование, воспитание в них духа патриотизма, а также содействие в нахождении своего места в обществе.";

export default function FranceCountryLawPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-border">
        <div className="mx-auto flex h-[42px] max-w-(--container-page) items-center gap-2 text-sm font-medium">
          <Link href="/" className="text-ink">
            Главная
          </Link>
          <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
          <Link href="/services" className="text-ink">
            Услуги и разделы
          </Link>
          <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
          <Link href="/services/country-laws" className="text-ink">
            Законодательства стран
          </Link>
          <ArrowRightIcon className="h-2 w-2 text-[#ccd2dd]" />
          <span className="truncate text-muted">Франция</span>
        </div>
      </div>
      <CountryLawDetailSection
        flag={<FranceFlagIcon className="h-16 w-16 shrink-0 rounded-md" />}
        title="Франция"
        text={TEXT}
      />
    </main>
  );
}
