import Link from "next/link";
import {
  ArrowLeftIcon,
  EyeIcon,
  LinkIcon,
  PrinterIcon,
  QuoteIcon,
  ShareIcon,
} from "@/components/icons/NeedToKnowIcons";

const goals = [
  "Обобщение и анализ проблем и стремлений узбекистанской молодёжи за рубежом совместно с соответствующими организациями;",
  "Подготовка методичек для узбекистанской молодёжи, планирующих обучение и (или) работу за рубежом;",
  "Создание базы данных всей узбекистанской молодёжи, проживающих за рубежом, а также, поддерживание связей с ними;",
  "Привлечение квалифицированных узбекистанцев, проживающих за рубежом к реализуемым в нашей стране проектам государственного значения, а также, привлечение молодых специалистов к деятельности министерств, ведомств и высших учебных заведений на конкурсной основе;",
  "Формирование базы данных узбекистанской молодёжи за рубежом, их адресов, телефонных номеров учебных заведений, предприятий и организаций;",
  "Создание круглосуточного веб-портала в интернете, страниц в социальных сетях и предоставление услуг и рекомендаций для молодых людей, планирующих выехать или выехавших за границу;",
  "Организация деятельности Ассоциации с дипломатическими представительствами Узбекистана в государствах, где самое большое количество узбекистанской молодёжи;",
  "Ознакомление молодёжи Узбекистана, проживающих за рубежом информацией об истории, культуре, узбекском языке и литературе Узбекистана, о богатом культурном наследии наших великих предков и о вкладе в мировую цивилизацию;",
  "Поднятие духа патриотизма и гордости среди соотечественников за рубежом, а также, пропаганда здорового образа жизни, путем организации встреч, торжеств, фестивалей и литературных вечеров со знаменитостями;",
  "Информирование молодёжи за рубежом о проводимых в Узбекистане реформах, принимаемых текущих нормативно-правовых актах, о благоприятной предпринимательской среде и о создающихся рабочих местах;",
  "Помощь в адаптации, возвратившимся соотечественникам на историческую родину, а также содействие им в нахождении своего места в обществе;",
  "Целенаправленные меры по защите молодёжи от различных угроз (экстремизм, терроризм, организованная преступность, торговля людьми и т. д.), оказание правовой и психологической помощи молодым соотечественникам, попавшим в неблагоприятные обстоятельства или ставшими жертвами таких обстоятельств;",
  "Организация встреч представителей государственных органов с членами филиалов Ассоциации за рубежом.",
];

export function NeedToKnowSection() {
  return (
    <section className="mx-auto max-w-(--container-page) py-9">
      <div className="flex items-center gap-4">
        <Link
          href="/about"
          aria-label="Назад"
          className="flex h-9 w-9 items-center justify-center text-ink"
        >
          <ArrowLeftIcon className="h-9 w-9" />
        </Link>
        <h1 className="text-[32px] font-bold text-ink">Вам нужно знать</h1>
      </div>

      <article className="mt-6 overflow-hidden rounded-lg bg-white">
        <div className="relative h-[320px] w-full overflow-hidden bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/need-to-know/skyline-precise.svg"
            alt=""
            className="absolute bottom-0 left-0 h-[195px] w-auto max-w-none"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/monument.png"
            alt=""
            className="absolute bottom-0 left-[74%] h-full w-auto object-contain"
          />
        </div>

        <div className="mx-auto max-w-[782px] px-6 py-10">
          <h2 className="text-2xl font-bold text-ink">
            Информация о Всемирной ассоциации молодёжи Узбекистана
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            Во исполнение приоритетных задач в сфере молодёжной политики поставленных Президентом
            Республики Узбекистан в ходе выступления с Посланием к Олий Мажлису Республики
            Узбекистан от 22 декабря 2017 года, Союзом молодёжи Узбекистана была создана
            негосударственная некоммерческая организация «Всемирная ассоциация молодёжи
            Узбекистана», с целью осуществления работы с молодёжью, обучающейся и трудящейся за
            рубежом, защита их прав и законных интересов, всесторонняя поддержка и
            стимулирование, воспитание в них духа патриотизма, а также содействие в нахождении
            своего места в обществе.
          </p>

          <h3 className="mt-8 text-lg font-bold text-ink">
            Основными целями и задачами Всемирной ассоциации молодёжи Узбекистана являются:
          </h3>
          <ul className="mt-4 flex flex-col gap-4">
            {goals.map((item, i) => (
              <li key={i} className="flex gap-3 text-lg leading-relaxed text-ink">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-4 rounded-xl bg-[#C7DCFF] p-5">
            <QuoteIcon className="h-8 w-8 shrink-0 text-primary" />
            <p className="text-lg leading-relaxed text-ink">
              На сегодняшний день представители Всемирной ассоциации молодёжи Узбекистана
              осуществляют свою деятельность в Китайской Народной Республике, Российской
              Федерации, Германии, Турции, Японии, Республике Корея, Республике Беларусь,
              Бельгии, Великобритании, Египте, Латвии, Казахстане и Украине.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex h-9 cursor-pointer items-center gap-4 rounded-md bg-border pl-3 text-base text-ink transition-colors hover:bg-accent/15"
              >
                Поделиться
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#C7DCFF]">
                  <ShareIcon className="h-5 w-5 text-primary" />
                </span>
              </button>
              <button
                type="button"
                className="flex h-9 cursor-pointer items-center gap-4 rounded-md bg-border pl-3 text-base text-ink transition-colors hover:bg-accent/15"
              >
                Ссылка
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#C7DCFF]">
                  <LinkIcon className="h-5 w-5 text-primary" />
                </span>
              </button>
            </div>
            <div className="flex items-center gap-6 text-ink">
              <span className="flex items-center gap-1.5 text-base font-medium">
                <EyeIcon className="h-5 w-5 text-muted" />9 873
              </span>
              <button
                type="button"
                aria-label="Печать"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-accent/15"
              >
                <PrinterIcon className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
