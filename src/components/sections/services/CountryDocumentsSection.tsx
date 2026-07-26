import { AboutDonateWidget } from "@/components/sections/about/AboutSupportWidgets";
import { ImportIcon } from "@/components/icons/ServiceDocIcons";

export type CountryDocument = {
  flag: string;
  country: string;
};

export function CountryDocumentsSection({ countries }: { countries: CountryDocument[] }) {
  return (
    <section className="mx-auto flex max-w-(--container-page) items-start justify-between py-10">
      <div className="grid w-[882px] shrink-0 grid-cols-2 gap-6">
        {countries.map((c) => (
          <div
            key={c.country}
            className="flex h-[104px] w-full items-center gap-4 rounded-lg border border-border bg-white p-5"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-surface-soft text-3xl">
              {c.flag}
            </span>
            <div className="flex-1">
              <p className="text-lg font-bold leading-tight text-ink">{c.country}</p>
              <button
                type="button"
                className="mt-2 flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                <ImportIcon className="h-5 w-5" />
                Скачать
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[279px] shrink-0">
        <AboutDonateWidget />
      </div>
    </section>
  );
}
