import { ContactsBreadcrumbSection } from "@/components/sections/contacts/ContactsBreadcrumbSection";
import { ContactsMapHero } from "@/components/sections/contacts/ContactsMapHero";
import { ContactsFormSection } from "@/components/sections/contacts/ContactsFormSection";
import { WorldMapSection } from "@/components/sections/WorldMapSection";

export default function ContactsPage() {
  return (
    <main className="flex-1">
      <ContactsBreadcrumbSection />
      <ContactsMapHero />
      <ContactsFormSection />
      <WorldMapSection />
    </main>
  );
}
