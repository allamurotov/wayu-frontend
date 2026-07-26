function Connector({ x, y, h, dot }: { x: number; y: number; h: number; dot?: boolean }) {
  return (
    <>
      <div
        className="absolute w-1 bg-[#d6dadd]"
        style={{ left: x - 2, top: y, height: h }}
      />
      {dot && (
        <div
          className="absolute h-4 w-4 rounded-full bg-[#d6dadd]"
          style={{ left: x - 8, top: y + h - 16 }}
        />
      )}
    </>
  );
}

export function StructureOrgChartSection() {
  return (
    <div className="relative h-[516px] w-[882px] shrink-0">
      <div className="absolute left-[201px] top-0 flex h-[92px] w-[480px] items-center justify-center rounded-lg bg-ink px-6 text-center text-xl font-bold leading-[1.3] text-white">
        Исполнительный комитет Центрального Совета Союза Молодежи Узбекистан
      </div>

      <Connector x={441} y={92} h={22} dot />

      <div className="absolute left-[302px] top-[128px] flex h-[92px] w-[278px] items-center justify-center rounded-lg border border-primary bg-white text-xl font-bold text-ink">
        Председатель
      </div>

      <Connector x={441} y={220} h={22} dot />

      <div className="absolute left-[302px] top-[254px] flex h-[92px] w-[278px] items-center justify-center rounded-lg border border-border bg-white text-center text-xl font-bold leading-[1.3] text-ink">
        Заместитель
        <br />
        председателя
      </div>

      <Connector x={441} y={346} h={36} />

      <div className="absolute left-[139px] top-[380px] h-1 w-[604px] bg-[#3761f7]" />
      <Connector x={139} y={382} h={34} dot />
      <Connector x={441} y={382} h={34} dot />
      <Connector x={743} y={382} h={34} dot />

      <div className="absolute left-0 top-[416px] flex h-[100px] w-[278px] items-center justify-center rounded-lg border border-accent bg-accent/[0.04] px-6 text-center text-base font-bold leading-[1.3] text-accent">
        Отдел по работе с обучающейся узбекистанской молодежью за рубежом
      </div>
      <div className="absolute left-[302px] top-[416px] flex h-[100px] w-[278px] items-center justify-center rounded-lg border border-accent bg-accent/[0.04] px-6 text-center text-base font-bold leading-[1.3] text-accent">
        Отдел по работе с трудящейся узбекистанской молодежью за рубежом
      </div>
      <div className="absolute left-[604px] top-[416px] flex h-[100px] w-[278px] items-center justify-center rounded-lg border border-accent bg-accent/[0.04] px-6 text-center text-base font-bold leading-[1.3] text-accent">
        Отдел по сотрудничеству с узбекскими диаспорами за рубежом
      </div>
    </div>
  );
}
