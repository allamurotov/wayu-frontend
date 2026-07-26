"use client";

import { useState } from "react";
import { ArrowDownIcon } from "@/components/icons/NewsIcons";

const tasks = [
  "Сбор, анализ и накопление данных о современных угрозах информационной безопасности, выработку рекомендаций и предложений по оперативному принятию эффективных организационных и программно-технических решений, обеспечивающих предотвращение актов незаконного проникновения в информационные системы, ресурсы и базы данных государственных органов и организаций;",
  "Взаимодействие с операторами и провайдерами сетей телекоммуникаций, правоохранительными органами в рамках проведения анализа, идентификации нарушителей, методов и средств, используемых при осуществлении несанкционированных либо деструктивных действий в информационном пространстве;",
  "Проведение аттестации, экспертизы и сертификации аппаратных средств и программных продуктов, информационно-коммуникационных технологий, телекоммуникационного оборудования и иных технических средств на объектах информатизации (за исключением государственных секретов);",
];

export function TasksSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleTasks = expanded ? tasks : tasks.slice(0, 2);

  return (
    <section className="mx-auto max-w-(--container-page) py-8">
      <h2 className="text-[32px] font-bold leading-[1.36] text-ink">В задачи Центра входят</h2>

      <div className="mt-5 flex flex-col gap-5">
        {visibleTasks.map((text) => (
          <div
            key={text}
            className="rounded-lg border border-[#dadde8] bg-[#fafafc] px-6 py-5"
          >
            <p className="text-base leading-[1.36] text-ink">{text}</p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-5 flex cursor-pointer items-center gap-2 rounded-[10px] bg-[#edeff5] px-6 py-2.5 text-sm font-bold text-[#22232c]"
      >
        {expanded ? "Скрыть" : "Показать все"}
        <ArrowDownIcon className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
    </section>
  );
}
