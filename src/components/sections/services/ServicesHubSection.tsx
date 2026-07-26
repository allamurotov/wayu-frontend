import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";
import {
  BookIcon,
  BookSquareIcon,
  BriefcaseIcon,
  BrifecaseTickIcon,
  Buildings2Icon,
  Calendar2Icon,
  HandshakeIcon,
  HeadphoneIcon,
  HeartIcon,
  LampChargeIcon,
  Messages2Icon,
  PeopleIcon,
  ProfileTwoUserIcon,
  ShieldTickIcon,
  TeacherIcon,
  TestTubeIcon,
} from "@/components/icons/ServiceIcons";

const services = [
  { title: "Учеба за границей", icon: TeacherIcon, href: "/services/study-abroad" },
  { title: "Молодой новатор", icon: LampChargeIcon, href: "/services/young-innovator" },
  { title: "Юные соотечественники", icon: ProfileTwoUserIcon, href: "/services/young-compatriots" },
  { title: "Миграционное законодательство", icon: BriefcaseIcon, href: "/services/migration-law" },
  { title: "Учеба за границей", icon: TeacherIcon, href: "/services/study-abroad" },
  { title: "Страхование", icon: ShieldTickIcon, href: "/services/insurance" },
  { title: "Посольства и консульства", icon: Buildings2Icon, href: "/services/embassies" },
  { title: "Права и обязанности", icon: BookIcon, href: "/services/rights-and-obligations" },
  { title: "Юридическая лаборотория", icon: TestTubeIcon, href: "/services/legal-lab" },
  { title: "Для волонтеров", icon: PeopleIcon, href: "/services/volunteers" },
  { title: "События и мероприятия", icon: Calendar2Icon, href: "/services/events" },
  { title: "Для обращений", icon: HeadphoneIcon, href: "/services/inquiries" },
  { title: "Электронная библиотека", icon: BookSquareIcon, href: "/services/library" },
  { title: "Стажировка в Узбекистане", icon: BrifecaseTickIcon, href: "/services/internship" },
  { title: "Партнерство", icon: HandshakeIcon, href: "/services/partners" },
  { title: "Безвозмездная помощ", icon: HeartIcon, href: "/services/gratuitous-help" },
  { title: "Ча.Во.", icon: Messages2Icon, href: "/services/faq" },
];

export function ServicesHubSection() {
  return (
    <section className="mx-auto max-w-(--container-page) py-10">
      <h1 className="text-[32px] font-bold text-ink">Наши услуги и другие разделы</h1>

      <div className="mt-8 grid grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link
            key={`${service.title}-${index}`}
            href={service.href}
            className="group flex h-[191px] flex-col rounded-lg border border-border bg-white p-7 transition-shadow hover:shadow-[0_6px_16px_rgba(149,168,186,0.2)]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors group-hover:bg-accent">
              <service.icon className="h-9 w-9 text-accent transition-all group-hover:h-5 group-hover:w-5 group-hover:text-white" />
            </span>
            <h3 className="mt-7 line-clamp-2 h-[52px] shrink-0 text-lg font-bold leading-[26px] text-ink">
              {service.title}
            </h3>
            <span className="mt-3 flex shrink-0 items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              Перейти
              <ArrowRightIcon className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
