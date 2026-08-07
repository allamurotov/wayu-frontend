import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";
import {
  Buildings2Icon,
  BriefcaseIcon,
  LampChargeIcon,
  ProfileTwoUserIcon,
  TeacherIcon,
} from "@/components/icons/ServiceIcons";

const services = [
  { title: "Учеба за границей", icon: TeacherIcon, href: "/services/study-abroad" },
  { title: "Карьерный мост", icon: BriefcaseIcon, href: "/services/career-bridge" },
  { title: "Молодой новатор", icon: LampChargeIcon, href: "/services/young-innovator" },
  {
    title: "Миграционное законодательство",
    icon: BriefcaseIcon,
    href: "/services/migration-law",
  },
  {
    title: "Юные соотечественники",
    icon: ProfileTwoUserIcon,
    href: "/services/young-compatriots",
  },
  { title: "Посольства и консульства", icon: Buildings2Icon, href: "/services/embassies" },
];

export function ServicesSection() {
  return (
    <section className="-mt-px w-full bg-accent py-8">
      <div className="mx-auto flex max-w-(--container-page) items-center justify-between">
        <h2 className="text-[32px] font-bold text-white">Услуги и разделы</h2>
        <Link href="/services" className="flex items-center gap-2 text-base font-medium text-white">
          Посмотреть все
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="no-scrollbar mt-6 flex snap-x gap-6 overflow-x-auto px-32 pb-2">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group flex w-[278px] shrink-0 snap-start flex-col rounded-lg border border-border bg-white p-7 transition-shadow hover:shadow-[0_6px_16px_rgba(149,168,186,0.2)]"
          >
            <service.icon className="h-9 w-9 shrink-0 text-muted transition-colors group-hover:text-accent" />
            <h3 className="mt-7 line-clamp-2 h-[52px] shrink-0 text-lg font-bold leading-[26px] text-ink">
              {service.title}
            </h3>
            <span className="mt-3 flex shrink-0 items-center gap-2 text-sm font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100">
              Перейти
              <ArrowRightIcon className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
