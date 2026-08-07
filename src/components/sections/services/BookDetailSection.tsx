import { ImportIcon } from "@/components/icons/ServiceDocIcons";
import { ProfileTwoUserIcon, Calendar2Icon } from "@/components/icons/ServiceIcons";
import { GlobeIcon } from "@/components/icons/FigmaIcons";
import { DocumentTextIcon } from "@/components/icons/LibraryIcons";

const meta = [
  { icon: ProfileTwoUserIcon, label: "Автор:", value: "Худшид Дарвон" },
  { icon: Calendar2Icon, label: "Год:", value: "2012" },
  { icon: GlobeIcon, label: "Язык:", value: "на узбекском" },
  { icon: DocumentTextIcon, label: "Страница:", value: "300" },
];

const DESCRIPTION =
  'Имам аль-Бухари вошел в историю тем, что впервые собрал в своем сборнике исключительно достоверные хасиды (высказывания и поступки) Пророка Мухаммада (да благословит Его Аллах и приветствует), проделав при этом колоссальный труд. Из этого многообразия сообщений о Пророке (да благословит Его Аллах и приветствует), с которым он познакомился в различных уголках Халифата, аль-Бухари отобрал путем тщательного анализа чуть более 1%, так что в сборник "Сахих" (что значит - "Достоверный свод") вошло всего 7275 хадисов. Хотя существуют и другие сборники хадисов, именно "Сахих" аль-Бухари признается в исламском мире самым надежным и важным источником в этой области. Изданный в прошлом году русский текст "Мухтасара" содержал порядка 80% арабского оригинала. И вот - свершилось! Полный текст "Мухтасара" аз-Зубайди на русском языке выходит в свет сегодня. В него вошли все 2134 хадиса, отобранные имамом аз-Зубайди, вниманию читателя предлагаются дополнительно переведенные "Книга о джихаде" и "Книга о военных походах", а также ряд других хадисов, не вошедшие в первое издание.';

export function BookDetailSection() {
  return (
    <section className="mx-auto max-w-(--container-page) py-10">
      <div className="flex gap-6">
        <div className="relative h-[298px] w-[258px] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/library/book1.png"
            alt=""
            className="absolute -top-[29px] left-0 h-[356px] w-[258px] rounded-lg object-cover blur-sm brightness-75"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/library/book1.png"
            alt="Бибиханим киссаси ёхуд тугалланмаган достон"
            className="absolute left-[29px] top-[53px] h-[247px] w-[193px] rounded-md object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <h1 className="text-[32px] font-bold leading-tight text-ink">
            Бибиханим киссаси ёхуд тугалланмаган достон
          </h1>

          <div className="mt-4 flex flex-col gap-2">
            {meta.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2 text-base">
                <span className="flex items-center gap-1.5 text-muted">
                  <Icon className="h-5 w-5" />
                  {label}
                </span>
                <span className="font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-6 flex h-[38px] w-[125px] items-center justify-center gap-2 rounded bg-primary text-sm font-bold text-white"
          >
            Скачать книгу
            <ImportIcon className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-ink">Описание</h2>
        <p className="text-lg leading-[1.4] text-ink">{DESCRIPTION}</p>
      </div>
    </section>
  );
}
