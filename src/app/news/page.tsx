import { NewsBreadcrumbSection } from "@/components/sections/news/NewsBreadcrumbSection";
import { NewsListSection } from "@/components/sections/news/NewsListSection";
import { getAllNews } from "@/lib/api";

export default async function NewsPage() {
  const items = await getAllNews();

  return (
    <main className="flex-1">
      <NewsBreadcrumbSection />
      <NewsListSection items={items} />
    </main>
  );
}
