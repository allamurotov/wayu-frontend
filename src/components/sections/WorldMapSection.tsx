import { CallIcon, SearchIconSmall, SmsIcon } from "@/components/icons/WorldMapIcons";

const pins = [
  { top: "39.83%", left: "74.72%" },
  { top: "73.10%", left: "91.74%" },
  { top: "43.97%", left: "56.32%" },
  { top: "34.48%", left: "56.11%" },
  { top: "23.62%", left: "58.40%" },
  { top: "28.62%", left: "55.28%" },
  { top: "44.31%", left: "62.22%" },
  { top: "31.90%", left: "52.01%", size: 32 },
  { top: "46.21%", left: "48.33%" },
  { top: "22.07%", left: "47.71%" },
  { top: "30.00%", left: "49.17%" },
  { top: "47.24%", left: "97.29%" },
  { top: "48.10%", left: "92.99%" },
];

const representatives = [
  {
    country: "Великобритания,",
    city: "Лондон",
    name: "Хасанов Садрижаҳон Бобир ўғли",
    phone: "+44 800 193 0800",
    email: "s.xasanov@wayu.uz",
  },
  {
    country: "Бельгия,",
    city: "Брюссель",
    name: "Насибуллина Камила Хамзаевна",
    phone: "+32 46 690 0259",
    email: "k.nasibullina@wayu.uz",
  },
  {
    country: "Германия,",
    city: "Берлин",
    name: "Бедиев Камолиддин Асомиддинович",
    phone: "+49 211 568 4962",
    email: "k.berdiyev@wayu.uz",
  },
  {
    country: "Латвия,",
    city: "Рига",
    name: "Бедиев Камолиддин Асомиддинович",
    phone: "+49 211 568 4962",
    email: "k.berdiyev@wayu.uz",
  },
];

export function WorldMapSection() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-(--container-page)">
        <h2 className="text-[32px] font-bold text-ink">Мы в международной арене</h2>
      </div>

      <div className="relative mt-6 h-[580px] w-full overflow-hidden bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/worldmap/map.png"
          alt="Карта присутствия Wayu в мире"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {pins.map((pin, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src="/icons/worldmap/pin.svg"
            alt=""
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: pin.top, left: pin.left, width: pin.size ?? 24, height: pin.size ?? 24 }}
          />
        ))}

        <div className="absolute left-32 top-0 h-full w-[479px] bg-surface-soft">
          <div className="border-b border-border p-4">
            <label className="flex h-11 items-center gap-2 rounded-md border border-border bg-white px-4">
              <SearchIconSmall className="h-4 w-4 text-muted" />
              <input
                type="text"
                placeholder="Поиск"
                className="w-full text-base text-ink placeholder:text-muted"
              />
            </label>
          </div>

          <div className="flex max-h-[492px] flex-col gap-3 overflow-y-auto p-4">
            {representatives.map((rep, i) => (
              <div
                key={i}
                className="rounded-md border border-border bg-white p-4 shadow-[0_8px_28px_rgba(149,168,186,0.08)]"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-ink">{rep.country}</span>
                  <span className="text-lg font-medium text-ink">{rep.city}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#565E6A]">{rep.name}</p>
                <div className="mt-4 flex items-center gap-8">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-ink">
                    <CallIcon className="h-4 w-4 text-muted" />
                    {rep.phone}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-ink">
                    <SmsIcon className="h-4 w-4 text-muted" />
                    {rep.email}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
