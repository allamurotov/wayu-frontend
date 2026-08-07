import { BriefcaseBoldIcon, Profile2UserBoldIcon, TeacherIcon } from "@/components/icons/AboutIcons";

const stats = [
  {
    icon: Profile2UserBoldIcon,
    value: "2 300 256",
    label: "Количество узбекистанцев за пределами страны",
  },
  {
    icon: TeacherIcon,
    value: "1 067 998",
    label: "Количество представительных пунктов ассоциации по всем миру",
  },
  {
    icon: BriefcaseBoldIcon,
    value: "1 232 002",
    label: "Количество узбекистанцев работающих вне Республики Узбекистан",
  },
];

export function StatsSection() {
  return (
    <section className="mx-auto max-w-(--container-page) py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-[32px] font-bold leading-[1.36] text-ink">
          Наша деятельность в числах
        </h2>
        <span className="text-sm text-muted">по состоянию на первое полугодие 2022 года</span>
      </div>

      <div className="mt-6 flex items-start justify-between">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex w-[381px] flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-[#dde9fb]">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-[28px] font-bold leading-[1.3] text-ink">{value}</p>
              <p className="mt-1 max-w-[339px] text-base text-[#565a6a]">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
