export function ServiceHeroSection({
  title,
  photoSrc = "/images/career-bridge/hueSat.png",
}: {
  title: string;
  photoSrc?: string;
}) {
  return (
    <section className="relative h-[202px] w-full overflow-hidden bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/services/hero-wave-bg.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto h-full max-w-(--container-page)">
        <h1 className="pt-10 text-[32px] font-bold text-ink">{title}</h1>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          className="absolute right-[190px] top-6 h-[414px] w-[146px] rounded-lg object-cover"
          style={{ filter: "saturate(0.65)" }}
        />
      </div>
    </section>
  );
}
