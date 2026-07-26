import { LibrarySidebarNav } from "@/components/sections/services/LibrarySidebarNav";
import { AboutDonateWidget } from "@/components/sections/about/AboutSupportWidgets";
import { LibraryBookCard, type LibraryBook } from "@/components/sections/services/LibraryBookCard";

const uniqueBooks: LibraryBook[] = [
  {
    slug: "bibikhanim",
    image: "/images/library/book1.png",
    title: "Бибиханим киссаси ёхуд тугалланмаган достон",
    author: "Хуршид Даврон",
    language: "на узбекском",
  },
  {
    slug: "bibikhanim",
    image: "/images/library/book2.png",
    title: "Ўзбекнинг гапи қизиқ",
    author: "Махмуд Саттор",
    language: "на узбекском",
  },
  {
    slug: "bibikhanim",
    image: "/images/library/book3.png",
    title: "Чол ва денгиз",
    author: "Эрнест Хемингуэй",
    language: "на узбекском",
  },
  {
    slug: "bibikhanim",
    image: "/images/library/book4.png",
    title: "Эрта қайтган турналар",
    author: "Чингиз Айтматов",
    language: "на узбекском",
  },
  {
    slug: "bibikhanim",
    image: "/images/library/book5.png",
    title: "Ўзбек халқ ижоди ёдгорликлари",
    author: "Хуршид Даврон",
    language: "на узбекском",
  },
  {
    slug: "bibikhanim",
    image: "/images/library/book6.png",
    title: "Ҳаётий ҳикматлар ва танбеҳлар",
    author: "Фёдор Достоевский",
    language: "на узбекском",
  },
];

const books: LibraryBook[] = [
  ...uniqueBooks,
  ...Array.from({ length: 4 }, () => uniqueBooks[0]),
];

export function LibraryListSection() {
  return (
    <section className="mx-auto flex max-w-(--container-page) items-start justify-between py-10">
      <div className="grid w-[882px] shrink-0 grid-cols-2 gap-6">
        {books.map((book, i) => (
          <LibraryBookCard key={`${book.slug}-${i}`} book={book} />
        ))}
      </div>

      <div className="flex w-[279px] shrink-0 flex-col gap-6">
        <LibrarySidebarNav />
        <AboutDonateWidget />
      </div>
    </section>
  );
}
