import Link from "next/link";
import { CallIcon, SmsIcon } from "@/components/icons/WorldMapIcons";
import { getAllBranches, getAllCountries, getAllRepresentatives, uploadUrl } from "@/lib/api";

export async function BranchesListSection() {
  const [branches, countries, representatives] = await Promise.all([
    getAllBranches(),
    getAllCountries(),
    getAllRepresentatives(),
  ]);
  const countryById = new Map(countries.map((c) => [c.id, c]));
  const repById = new Map(representatives.map((r) => [r.id, r]));

  return (
    <div className="grid w-[882px] shrink-0 grid-cols-2 gap-6">
      {branches.map((branch) => {
        const country = countryById.get(branch.countryId);
        const rep = repById.get(branch.representativeId);
        if (!country || !rep) return null;

        return (
          <Link
            key={branch.id}
            href={`/about/branches/${branch.id}`}
            className="flex min-h-[136px] w-full items-start gap-4 rounded-lg border border-border bg-white p-5"
          >
            <div className="relative shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={uploadUrl(rep.image)}
                alt={rep.fullName}
                className="h-16 w-16 rounded-md border border-border object-cover"
              />
              <span className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-white text-sm">
                {country.flag}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-base font-bold leading-tight text-ink">{rep.fullName}</p>
              <p className="mt-1 text-sm text-primary">{country.title}</p>
              <div className="mt-2 h-px w-[81px] bg-border" />
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1.5">
                <span className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-ink">
                  <CallIcon className="h-5 w-5 shrink-0 text-muted" />
                  {branch.phoneNumber}
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-[#4e4f56]">
                  <SmsIcon className="h-5 w-5 shrink-0 text-muted" />
                  {rep.email}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
