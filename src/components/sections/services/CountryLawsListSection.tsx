import Link from "next/link";
import { AboutDonateWidget } from "@/components/sections/about/AboutSupportWidgets";
import { FranceFlagIcon } from "@/components/icons/FranceFlagIcon";

export function CountryLawsListSection() {
  return (
    <section className="mx-auto flex max-w-(--container-page) items-start justify-between py-10">
      <div className="flex w-[882px] shrink-0 flex-col gap-6">
        <h2 className="text-[32px] font-bold text-ink">Законодательства стран</h2>

        <Link
          href="/services/country-laws/france"
          className="flex h-[104px] w-[432px] items-center gap-4 rounded-lg border border-border bg-white p-5"
        >
          <FranceFlagIcon className="h-16 w-16 shrink-0 rounded-md" />
          <p className="text-lg font-bold text-ink">Франция</p>
        </Link>
      </div>

      <div className="w-[279px] shrink-0">
        <AboutDonateWidget />
      </div>
    </section>
  );
}
