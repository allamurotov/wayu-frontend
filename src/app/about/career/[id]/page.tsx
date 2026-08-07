import { notFound } from "next/navigation";
import { AboutSubBreadcrumb } from "@/components/sections/about/AboutSubBreadcrumb";
import { VacancySingleSection } from "@/components/sections/about/VacancySingleSection";
import { ApiError, getOneVacancy } from "@/lib/api";

export default async function VacancySinglePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vacancy = await getOneVacancy(Number(id)).catch((err) => {
    if (err instanceof ApiError && err.status === 404) return null;
    throw err;
  });
  if (!vacancy) notFound();

  return (
    <main className="flex-1 bg-[#f7f9fa]">
      <AboutSubBreadcrumb current={vacancy.title} parent={{ label: "Карьера", href: "/about/career" }} />
      <VacancySingleSection vacancy={vacancy} />
    </main>
  );
}
