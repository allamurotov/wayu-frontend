import { notFound } from "next/navigation";
import { NewsBreadcrumbSection } from "@/components/sections/news/NewsBreadcrumbSection";
import { NewsArticleSection } from "@/components/sections/news/NewsArticleSection";
import { NeedToKnowLatestNews } from "@/components/sections/about/NeedToKnowLatestNews";
import { ApiError, getOneNews } from "@/lib/api";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getOneNews(Number(id)).catch((err) => {
    if (err instanceof ApiError && err.status === 404) return null;
    throw err;
  });
  if (!article) notFound();

  return (
    <main className="flex-1 bg-[#f7f9fa]">
      <NewsBreadcrumbSection current={article.title} />
      <NewsArticleSection article={article} />
      <NeedToKnowLatestNews />
    </main>
  );
}
