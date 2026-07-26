import { BranchesListSection } from "@/components/sections/about/BranchesListSection";

export function VolunteersCoordinatorsSection() {
  return (
    <section
      id="koordinatory"
      className="mx-auto flex max-w-(--container-page) scroll-mt-24 justify-start py-6"
    >
      <div className="flex w-[882px] shrink-0 flex-col gap-6">
        <h2 className="text-[22px] font-bold text-ink">Координаторы</h2>
        <BranchesListSection />
      </div>
    </section>
  );
}
