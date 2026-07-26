const staff = [
  {
    image: "/images/leadership/staff-yulieva.png",
    name: "Юллиева Дилфуза",
    role: "Заместитель председателя Всемирной ассоциации молодёжи Узбекистана",
    phone: "+998 (71) 203 55 11",
    email: "d.mirsadikov@csec.uz",
    schedule: "Еженедельно по четвергам: с 11:00 до 13:00",
  },
  {
    image: "/images/leadership/staff-komilov.png",
    name: "Комилов Акбаршох",
    role: "Начальник отдел по работе с обучающейся узбекистанской молодежью за рубежом",
    phone: "+998 (71) 203 55 11",
    email: "d.mirsadikov@csec.uz",
    schedule: "Еженедельно по четвергам: с 11:00 до 13:00",
  },
  {
    image: "/images/leadership/staff-hakberdiev.png",
    name: "Хакбердиев Мухаммад",
    role: "Начальник отдела по работе с трудящейся узбекистанской молодёжью за рубежом",
    phone: "+998 (71) 203 55 11",
    email: "r.yunusov@csec.uz",
    schedule: "Еженедельно по средам с 14:00 до 16:00",
  },
  {
    image: "/images/leadership/staff-turaev.png",
    name: "Тураев Хумоюн",
    role: "Начальник отдела по сотрудничеству с узбекскими диаспорами за рубежом",
    phone: "+998 (71) 203 55 11",
    email: "d.mirsadikov@csec.uz",
    schedule: "Еженедельно по четвергам: с 11:00 до 13:00",
  },
  {
    image: "/images/leadership/staff-kalyknazarova.png",
    name: "Калыкназарова Айымгуль",
    role: "Главный специалист отдела правовой защиты и консультации",
    phone: "+998 (71) 203 55 11",
    email: "d.mirsadikov@csec.uz",
    schedule: "Еженедельно по четвергам: с 11:00 до 13:00",
  },
  {
    image: "/images/leadership/staff-baxtiyarov-placeholder.png",
    name: "Бахтияров Шохрух",
    role: "Пресс секретарь",
    phone: "+998 (71) 203 55 11",
    email: "r.yunusov@csec.uz",
    schedule: "Еженедельно по средам с 14:00 до 16:00",
  },
];

function StaffCard({
  image,
  name,
  role,
  phone,
  email,
  schedule,
  onClick,
}: (typeof staff)[number] & { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`flex w-full flex-col items-center rounded-lg border border-border bg-white px-7 pb-6 text-center ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={name}
        className="-mt-[82px] h-[164px] w-[164px] rounded-full border border-[#dadde8] object-cover"
      />
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
      <div className="mt-4 w-full text-left">
        <p className="text-xs text-[#4e4f56]">Приемные дни</p>
        <p className="mt-0.5 text-sm font-medium text-ink">{schedule}</p>
      </div>
    </div>
  );
}

export function LeadershipStaffGrid({
  onSelect,
}: {
  onSelect?: (person: { name: string; role: string }) => void;
}) {
  return (
    <div className="mt-[152px] grid grid-cols-3 gap-x-4 gap-y-[130px]">
      {staff.map((person) => (
        <StaffCard
          key={person.name + person.role}
          {...person}
          onClick={onSelect ? () => onSelect(person) : undefined}
        />
      ))}
    </div>
  );
}
