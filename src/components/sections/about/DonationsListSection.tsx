import { SearchIcon } from "@/components/icons/FigmaIcons";
import { getAllDonations } from "@/lib/api";

function formatDate(isoDate: string) {
  const [y, m, d] = isoDate.split("-");
  return `${d}.${m}.${y}`;
}

function formatAmount(amount: number) {
  return `${amount.toLocaleString("ru-RU").replace(/,/g, " ")} UZS`;
}

export async function DonationsListSection() {
  const donations = await getAllDonations();

  return (
    <div className="w-[882px] shrink-0">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-bold text-ink">Платежи</h1>
        <div className="flex h-12 w-[335px] items-center gap-2 rounded bg-[#F5F6FA] px-3 text-base font-medium text-muted">
          <SearchIcon className="h-6 w-6" />
          Поиск по имени
        </div>
      </div>
      <p className="mt-4 text-xl text-ink">
        Платежи, переведенные по онлайновой системе в благотворительный проект «MUSOFIR»
      </p>

      <div className="mt-8 overflow-hidden rounded-lg border border-border">
        <div className="flex bg-[#F5F6FA] px-5 py-3">
          <span className="w-[66px] text-base font-medium text-muted">#</span>
          <span className="flex-1 text-base font-medium text-muted">Имя</span>
          <span className="w-[190px] text-base font-medium text-muted">Дата</span>
          <span className="w-[140px] text-base font-medium text-muted">Сумма</span>
        </div>
        {donations.map((row, i) => (
          <div
            key={row.id}
            className={`flex items-center px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-[#F7F9FA]"}`}
          >
            <span className="w-[66px] text-lg font-medium text-ink">{i + 1}</span>
            <span className="flex-1 text-lg font-medium text-ink">{row.fullName}</span>
            <span className="w-[190px] text-lg font-medium text-ink">{formatDate(row.date)}</span>
            <span className="w-[140px] text-lg font-medium text-ink">{formatAmount(row.amount)}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mx-auto mt-8 flex h-[43px] w-[156px] cursor-pointer items-center justify-center rounded bg-[#F7F9FA] text-base font-bold text-muted"
      >
        Загрузить ещё
      </button>
    </div>
  );
}
