import { CallIcon, SmsIcon } from "@/components/icons/WorldMapIcons";
import { LocationIcon } from "@/components/icons/EventsIcons";

export type BranchDetail = {
  name: string;
  country: string;
  role: string;
  phone: string;
  email: string;
  profileImage: string;
  bannerImage?: string;
  timeline: string[];
};

export function BranchDetailSection({ branch }: { branch: BranchDetail }) {
  return (
    <div className="w-[882px] shrink-0 rounded-lg border border-ink bg-white p-5">
      <div className="flex gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={branch.profileImage}
          alt={branch.name}
          className="h-[180px] w-[164px] shrink-0 rounded-md border border-ink object-cover"
        />
        <div>
          <p className="text-2xl font-bold leading-[1.3] text-[#05111c]">{branch.name}</p>
          <p className="mt-1 max-w-[395px] text-base text-primary">{branch.role}</p>
          <div className="mt-4 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-base font-medium text-[#05111c]">
              <SmsIcon className="h-5 w-5 text-muted" />
              {branch.email}
            </span>
            <span className="flex items-center gap-2 text-base font-medium text-[#05111c]">
              <CallIcon className="h-5 w-5 text-muted" />
              {branch.phone}
            </span>
          </div>
        </div>
      </div>

      {branch.timeline.length > 0 && (
        <>
          <p className="mt-8 text-xl font-bold text-ink">Основные задачи правления</p>
          <ul className="mt-4 flex flex-col gap-4">
            {branch.timeline.map((item, i) => (
              <li key={i} className="flex gap-3 text-base leading-snug text-ink">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function BranchMapBanner({ image }: { image: string }) {
  return (
    <div className="relative left-1/2 h-[452px] w-screen -translate-x-1/2 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative mx-auto h-full max-w-(--container-page)">
        <div className="absolute right-[280px] top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white">
          <LocationIcon className="h-6 w-6 text-primary" />
        </div>
        <a
          href="#"
          className="absolute bottom-9 right-6 flex h-[42px] items-center gap-2 rounded bg-primary px-4 text-sm font-bold text-white"
        >
          <LocationIcon className="h-[18px] w-[18px]" />
          Как добраться
        </a>
      </div>
    </div>
  );
}
