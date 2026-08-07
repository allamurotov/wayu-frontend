import { LibraryBookCard, type LibraryBook } from "@/components/sections/services/LibraryBookCard";

const books: LibraryBook[] = [
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

export function RecommendedBooksSection() {
  return (
    <section className="mx-auto max-w-(--container-page) pb-10">
      <h2 className="text-[32px] font-bold text-ink">Рекомендуемые</h2>
      <div className="mt-6 grid grid-cols-2 gap-6">
        {books.map((book) => (
          <LibraryBookCard key={book.title} book={book} />
        ))}
      </div>
    </section>
  );
}
