"use client";

import { AboutSidebarNav } from "@/components/sections/about/AboutSidebarNav";
import { LeadershipChairmanCard } from "@/components/sections/about/LeadershipChairmanCard";
import { LeadershipStaffGrid } from "@/components/sections/about/LeadershipStaffGrid";
import { LeadershipCtaBanner } from "@/components/sections/about/LeadershipCtaBanner";
import { PersonModal, usePersonModal } from "@/components/sections/about/PersonModal";

export function LeadershipContent() {
  const modal = usePersonModal();

  return (
    <div className="mx-auto max-w-(--container-page) py-9">
      <div className="flex gap-6">
        <LeadershipChairmanCard
          onClick={() =>
            modal.open({
              name: "Киямова Нилуфар",
              role: "Председатель всемирной ассоциации молодежи",
            })
          }
        />
        <AboutSidebarNav active="leadership" />
      </div>
      <LeadershipStaffGrid onSelect={modal.open} />
      <LeadershipCtaBanner />
      <PersonModal person={modal.person} onClose={modal.close} />
    </div>
  );
}
