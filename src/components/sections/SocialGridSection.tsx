import Link from "next/link";
import { ExternalLinkIcon } from "@/components/icons/UsefulLinksIcons";
import { InstagramOutlineIcon } from "@/components/icons/SocialGridIcons";
import { getAllInstagramPosts, uploadUrl } from "@/lib/api";

export async function SocialGridSection() {
  const posts = await getAllInstagramPosts();

  return (
    <section className="pt-8">
      <div className="mx-auto flex max-w-(--container-page) items-center justify-between">
        <h2 className="text-[32px] font-bold text-ink">Следите за нами</h2>
        <Link
          href="https://instagram.com/wayu.uz"
          target="_blank"
          className="flex items-center gap-2 text-2xl font-bold text-[#565E6A]"
        >
          <InstagramOutlineIcon className="h-8 w-8" />
          wayu.uz
        </Link>
      </div>

      <div className="no-scrollbar mt-4 flex gap-0 overflow-x-auto">
        {posts.map((post, i) => (
          <Link
            key={post.id}
            href={post.link}
            target="_blank"
            className={`group relative h-[280px] w-[280px] shrink-0 ${i > 0 ? "-ml-px" : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={uploadUrl(post.image)} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-primary/50 opacity-0 transition-opacity group-hover:opacity-100" />
            <ExternalLinkIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </section>
  );
}
