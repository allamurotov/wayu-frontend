import { ProfileTwoUserIcon } from "@/components/icons/ServiceIcons";
import { MoneyLinearIcon } from "@/components/icons/MoneyLinearIcon";
import { HeartIcon } from "@/components/icons/ServiceIcons";

const features = [
  {
    icon: ProfileTwoUserIcon,
    title: "Поддержка",
    description:
      "Выявление и поддержка наших соотечественников, нуждающихся в социальной защите за рубежом",
  },
  {
    icon: MoneyLinearIcon,
    title: "Пожертвование",
    description:
      "Создание системы привлечения пожертвований от иностранных и местных организаций и граждан",
  },
  {
    icon: HeartIcon,
    title: "Развитие благотворительности",
    description: "Развитие культуры благотворительности среди граждан независимо от возраста",
  },
];

export function LegalLabFeaturesSection() {
  return (
    <section className="mx-auto max-w-(--container-page) py-6">
      <div className="grid grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col gap-4">
            <Icon className="h-9 w-9 text-accent" />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold leading-[1.2] text-ink">{title}</h3>
              <p className="text-[15px] font-medium leading-[1.3] text-ink">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
