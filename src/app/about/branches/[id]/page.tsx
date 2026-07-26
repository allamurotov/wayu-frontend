import { notFound } from "next/navigation";
import { AboutSubBreadcrumb } from "@/components/sections/about/AboutSubBreadcrumb";
import { AboutSidebarNav } from "@/components/sections/about/AboutSidebarNav";
import { AboutDonateWidget, AboutVolunteerWidget } from "@/components/sections/about/AboutSupportWidgets";
import { BranchDetailSection, BranchMapBanner, type BranchDetail } from "@/components/sections/about/BranchDetailSection";
import { ApiError, getAllCountries, getAllRepresentatives, getOneBranch, uploadUrl } from "@/lib/api";

const germanyTimeline = [
  "Бедиев Камолиддин Асомиддинович родился 26 марта 1980 г. в Иштиханском районе Самаркандской области. В сентябре 1998 г. поступил на дневное отделение Узбекского Государственного университета мировых языков на факультет немецкой филологии, который окончил в июне 2002 г. по специальности «переводчик»",
  "С 2002 г. по 2003 г. являлся практикантом в Национальном информационном агентстве Узбекистана",
  "С 2003 г. по 2007 г. обучался на факультете немецкой филологии и истории Берлинского технического университета в Германии",
  "С 2007 г. по 2011 г. являлся магистром факультета коммуникации и немецкого языка Берлинского технического университета (Германия), был участником языкового курса немецкого языка для юристов в институте Гёте (Бонн, Германия), являлся переводчиком для сопровождения делегаций из Республики Узбекистан и стран Центральной Азии в проекте по международному правовому сотрудничеству правительства Германии",
  "С 2011 г. по 2012 г. осуществлял свою деятельность как преподаватель в школе «Образование и Интеграция» в Берлине",
  "С 2012 г. по 2013 г. преподавал в школе «Нетбил» в Берлине",
  "С 2013 г. по настоящее время работает преподавателем в начальной школе им. Херрмана-Щульца в Берлине, а также является переводчиком для различных мероприятий посольства Республики Узбекистан в Федеративной Республике Германия",
  "С января 2018 г. по настоящее время является представителем Всемирной ассоциации молодёжи Узбекистана в Германии",
];

const countryPrepositional: Record<string, string> = {
  Германия: "Германии",
  Россия: "России",
  "Южная Корея": "Южной Корее",
  Турция: "Турции",
  Япония: "Японии",
  Беларусь: "Беларуси",
  Бельгия: "Бельгии",
  Великобритания: "Великобритании",
  Египет: "Египте",
  Латвия: "Латвии",
  Малайзия: "Малайзии",
  Китай: "Китае",
  Казахстан: "Казахстане",
  Украина: "Украине",
};

export default async function BranchDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const branch = await getOneBranch(Number(id)).catch((err) => {
    if (err instanceof ApiError && err.status === 404) return null;
    throw err;
  });
  if (!branch) notFound();

  const [countries, representatives] = await Promise.all([getAllCountries(), getAllRepresentatives()]);
  const country = countries.find((c) => c.id === branch.countryId);
  const rep = representatives.find((r) => r.id === branch.representativeId);
  if (!country || !rep) notFound();

  const isGermany = country.title === "Германия";

  const detail: BranchDetail = isGermany
    ? {
        name: "Бедиев Камолиддин Асомиддинович",
        country: country.title,
        role: "Представитель Всемирной ассоциации молодёжи Узбекистана в Германии",
        phone: branch.phoneNumber,
        email: rep.email,
        profileImage: uploadUrl("image/rep-germany.png"),
        bannerImage: uploadUrl("image/germany-banner.png"),
        timeline: germanyTimeline,
      }
    : {
        name: rep.fullName,
        country: country.title,
        role: `Представитель Всемирной ассоциации молодёжи Узбекистана в ${countryPrepositional[country.title] ?? country.title}`,
        phone: branch.phoneNumber,
        email: rep.email,
        profileImage: uploadUrl(rep.image),
        timeline: [],
      };

  return (
    <main className="flex-1">
      <AboutSubBreadcrumb
        current={detail.country}
        parent={{ label: "Представительства", href: "/about/branches" }}
      />
      <div className="mx-auto flex max-w-(--container-page) gap-6 py-9">
        <BranchDetailSection branch={detail} />
        <div className="flex shrink-0 flex-col gap-6">
          <AboutSidebarNav active="branches" />
          <AboutDonateWidget />
          <AboutVolunteerWidget />
        </div>
      </div>
      {detail.bannerImage && <BranchMapBanner image={detail.bannerImage} />}
    </main>
  );
}
