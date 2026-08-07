import { QuoteMarkIcon } from "@/components/icons/ChairmanIcons";

export function ChairmanSection() {
  return (
    <section className="mx-auto max-w-(--container-page) pb-8 pt-[140px]">
      <div className="relative min-h-[291px] overflow-visible rounded-lg bg-[#F4F7FA] py-8">
        <QuoteMarkIcon className="absolute left-8 top-8 h-[22px] w-[27.6px] text-muted" />

        <div className="ml-[88px] max-w-[593px] pr-8">
          <p className="text-base font-medium leading-snug text-ink">
            Сегодня сколько нашей молодежи учится и работает за границей. Конечно, среди них
            немало тех, кто нашел свой путь и живет в чужой стране, как никто другой. Но тоска по
            родине мучает любого человека.
          </p>
          <p className="mt-3 text-base font-medium leading-snug text-ink">
            Поэтому необходимо усилить работу по установлению с ними постоянного контакта, защите
            их прав и интересов, поддержке желающих вернуться в нашу страну.
          </p>

          <div className="mt-8">
            <p className="text-xl font-bold text-ink">Шавкат Миромонович Мирзиёев</p>
            <p className="text-base font-medium text-primary">
              Президент Республики Узбекистан
            </p>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/chairman/president.png"
          alt="Шавкат Миромонович Мирзиёев"
          className="absolute right-0 h-[418px] w-[426px] rounded-br-lg object-cover"
          style={{ top: -127 }}
        />
      </div>
    </section>
  );
}
