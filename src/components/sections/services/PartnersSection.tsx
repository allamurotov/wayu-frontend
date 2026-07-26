import { AboutDonateWidget } from "@/components/sections/about/AboutSupportWidgets";
import { PartnersSidebarNav } from "@/components/sections/services/PartnersSidebarNav";
import { PartnersOrgGrid } from "@/components/sections/services/PartnersOrgGrid";

const PARAGRAPH_1 =
  "Всемирная ассоциация молодежи Узбекистана готова к сотрудничеству с организациями, желающими поддержать развитие молодежной политики Республики Узбекистан и социальной адаптации наших соотечественников в условиях проживания за рубежом. Молодежь считается значимым социальным слоем в определении будущего и потенциала каждого государства. Так как, состояние, судьба и будущее любого общества определяется потенциалом, уровнем духовности сознательности, проживающих в ней молодежи. Молодежь – это завтрашнее будущее общества, активная его часть, и если можно так выразиться, достойные наследники завтрашнего дня общества. Именно с этой точки зрения, молодежь всегда находится в фокусе внимания государства и общества. Ассоциация желает расширить круг партнерских организаций, которые разделяют цели её деятельности и призывает все заинтересованные стороны к взаимовыгодному сотрудничеству.";

const PARAGRAPH_2 =
  "При заинтересованности организацией для дальнейшего сотрудничества, детальную информацию о сфере деятельности могут отправить электронную почту нашей организации: info@wayu.uz";

export function PartnersSection() {
  return (
    <section className="mx-auto flex max-w-(--container-page) items-start justify-between py-10">
      <div className="flex w-[882px] shrink-0 flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-lg leading-[1.4] text-ink">{PARAGRAPH_1}</p>
          <p className="text-lg leading-[1.4] text-ink">{PARAGRAPH_2}</p>
        </div>

        <PartnersOrgGrid />
      </div>

      <div className="flex w-[279px] shrink-0 flex-col gap-6">
        <PartnersSidebarNav />
        <AboutDonateWidget />
      </div>
    </section>
  );
}
