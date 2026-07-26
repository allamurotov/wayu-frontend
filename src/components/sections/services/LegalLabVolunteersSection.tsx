const volunteers = [
  {
    image: "/images/leadership/staff-turaev.png",
    name: "Тураев Хумоюн",
    role: "Начальник отдела по сотрудничеству с узбекскими диаспорами за рубежом",
    phone: "+998 (71) 203 55 11",
    email: "d.mirsadikov@csec.uz",
  },
  {
    image: "/images/leadership/staff-kalyknazarova.png",
    name: "Калыкназарова Айымгуль",
    role: "Главный специалист отдела правовой защиты и консультации",
    phone: "+998 (71) 203 55 11",
    email: "d.mirsadikov@csec.uz",
  },
];

const bakhtiyarov = {
  name: "Бахтияров Шохрух",
  role: "Пресс секретарь",
  phone: "+998 (71) 203 55 11",
  email: "r.yunusov@csec.uz",
};

function GenericAvatarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden="true">
      <circle cx="48" cy="28" r="16" fill="currentColor" />
      <ellipse cx="48" cy="68" rx="28" ry="16" fill="currentColor" />
    </svg>
  );
}

function StaffCard({
  image,
  name,
  role,
  phone,
  email,
}: {
  image?: string;
  name: string;
  role: string;
  phone: string;
  email: string;
}) {
  return (
    <div className="flex w-full flex-col items-center rounded-lg border border-border bg-white px-7 pb-6 text-center">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={name}
          className="-mt-[82px] h-[164px] w-[164px] rounded-full border border-[#dadde8] object-cover"
        />
      ) : (
        <span className="-mt-[82px] flex h-[164px] w-[164px] items-center justify-center rounded-full border border-[#dadde8] bg-white text-[#cdd2e1]">
          <GenericAvatarIcon className="h-24 w-24" />
        </span>
      )}
      <p className="mt-6 text-xl font-bold text-ink">{name}</p>
      <p className="mt-3 text-base leading-snug text-primary">{role}</p>
      <div className="mt-5 h-px w-16 bg-border" />
      <div className="mt-4 flex w-full items-start justify-between gap-4 text-left">
        <div>
          <p className="text-xs text-[#4e4f56]">Номер телефона</p>
          <p className="mt-0.5 text-sm font-medium text-ink">{phone}</p>
        </div>
        <div>
          <p className="text-xs text-[#4e4f56]">Адрес электронной почты</p>
          <p className="mt-0.5 text-sm font-medium text-ink">{email}</p>
        </div>
      </div>
    </div>
  );
}

export function LegalLabVolunteersSection() {
  return (
    <section className="mx-auto max-w-(--container-page) py-6">
      <h2 className="text-[32px] font-bold text-ink">Волонтеры</h2>

      <div className="mt-[152px] grid grid-cols-3 gap-6">
        {volunteers.map((person) => (
          <StaffCard key={person.name} {...person} />
        ))}
        <StaffCard {...bakhtiyarov} />
      </div>

      <div className="mt-[106px] grid grid-cols-3 gap-6">
        {volunteers.map((person) => (
          <StaffCard key={`dup-${person.name}`} {...person} />
        ))}
      </div>
    </section>
  );
}
