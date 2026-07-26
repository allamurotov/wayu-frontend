import { CallIcon, SmsIcon } from "@/components/icons/WorldMapIcons";
import { ClockIcon } from "@/components/icons/AboutIcons";

const contacts = [
  { icon: ClockIcon, label: "Дни приема:", value: "Понедельник-Пятница, 9-18:00" },
  { icon: CallIcon, label: "Номер телефона:", value: "+998 (71) 200 70 07" },
  { icon: SmsIcon, label: "Электронный адрес:", value: "sh.baxtiyorov@wayu.uz" },
];

export function LeadershipChairmanCard({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`flex h-[314px] w-[882px] shrink-0 items-center gap-6 rounded-lg border border-border bg-white p-5 ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/about/chairwoman.png"
        alt="Киямова Нилуфар"
        className="h-[274px] w-[235px] shrink-0 rounded-lg object-cover"
      />

      <div className="flex flex-col gap-4">
        <div>
          <p className="text-2xl font-bold leading-[1.3] text-ink">Киямова Нилуфар</p>
          <span className="text-xl text-primary">Председатель всемирной ассоциации молодежи</span>
        </div>

        <div className="h-px w-[81px] bg-border" />

        <div className="flex flex-col gap-3">
          {contacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-2 text-base">
              <Icon className="h-5 w-5 text-muted" />
              <span className="text-[#4e4f56]">{label}</span>
              <span className="font-bold text-ink">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
