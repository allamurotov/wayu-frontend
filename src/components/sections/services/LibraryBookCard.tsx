import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/EventsIcons";
import { GlobeIcon } from "@/components/icons/FigmaIcons";
import { ProfileTwoUserIcon } from "@/components/icons/ServiceIcons";

export type LibraryBook = {
  slug: string;
  image: string;
  title: string;
  author: string;
  language: string;
};

export function LibraryBookCard({ book }: { book: LibraryBook }) {
  return (
    <div className="flex h-[208px] w-[429px] gap-4 rounded-lg border border-border bg-white p-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={book.image}
        alt={book.title}
        className="h-[176px] w-[118px] shrink-0 rounded-md object-cover"
      />
      <div className="flex flex-1 flex-col">
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-ink">{book.title}</h3>
        <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-muted">
          <ProfileTwoUserIcon className="h-5 w-5" />
          {book.author}
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-muted">
          <GlobeIcon className="h-5 w-5" />
          {book.language}
        </div>
        <Link
          href={`/services/library/${book.slug}`}
          className="mt-auto flex h-[38px] w-fit items-center gap-2 rounded border border-border px-4 text-sm font-medium text-ink"
        >
          Подробнее
          <ArrowRightIcon className="h-[18px] w-[18px] text-primary" />
        </Link>
      </div>
    </div>
  );
}
