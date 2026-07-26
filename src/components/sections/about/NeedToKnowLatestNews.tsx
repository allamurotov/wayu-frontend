import Link from "next/link";
import { CalendarIcon } from "@/components/icons/NewsIcons";
import { getAllNews, uploadUrl } from "@/lib/api";

function formatDate(isoDate: string) {
  const [y, m, d] = isoDate.split("-");
  return `${d}.${m}.${y}`;
}

export async function NeedToKnowLatestNews() {
  const items = (await getAllNews()).slice(0, 4);

  return (
    <section className="mx-auto max-w-(--container-page) pb-16">
      <h2 className="text-[32px] font-bold text-ink">Последние новости</h2>
      <div className="mt-6 grid grid-cols-4 gap-6">
        {items.map((item) => (
          <Link key={item.id} href={`/news/${item.id}`} className="flex flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={uploadUrl(item.image)}
              alt=""
              className="h-[165px] w-full rounded-lg object-cover"
            />
            <div className="mt-3.5 flex items-center">
              <span className="flex items-center gap-1.5 text-sm font-medium text-muted">
                <CalendarIcon className="h-4 w-4" />
                {formatDate(item.date)}
              </span>
            </div>
            <h3 className="mt-1.5 line-clamp-2 text-[15px] font-bold leading-snug text-ink">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
