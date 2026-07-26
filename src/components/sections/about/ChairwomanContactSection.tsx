"use client";

import { CallIcon, SmsIcon } from "@/components/icons/WorldMapIcons";
import { ClockIcon } from "@/components/icons/AboutIcons";
import { GlobeEmblemIcon } from "@/components/icons/GlobeEmblemIcon";
import { PersonModal, usePersonModal } from "@/components/sections/about/PersonModal";

const contacts = [
  { icon: ClockIcon, label: "Дни приема:", value: "Понедельник-Пятница, 9-18:00" },
  { icon: CallIcon, label: "Номер телефона:", value: "+998 (71) 200 70 07" },
  { icon: SmsIcon, label: "Электронный адрес:", value: "n.kiyamova@wayu.uz" },
];

export function ChairwomanContactSection() {
  const modal = usePersonModal();

  return (
    <section className="mx-auto max-w-(--container-page) py-8">
      <div
        onClick={() =>
          modal.open({
            name: "Киямова Нилуфар",
            role: "Председатель всемирной ассоциации молодежи",
          })
        }
        className="relative flex h-[314px] cursor-pointer items-center gap-16 overflow-hidden rounded-lg border border-border bg-white px-8"
      >
        <GlobeEmblemIcon className="pointer-events-none absolute -right-14 -top-20 h-[452px] w-[439px] text-muted opacity-10" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about/chairwoman.png"
          alt="Киямова Нилуфар"
          className="relative h-[274px] w-[235px] shrink-0 rounded-lg object-cover"
        />

        <div className="relative flex max-w-[449px] flex-col gap-4">
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
      <PersonModal person={modal.person} onClose={modal.close} />
    </section>
  );
}
