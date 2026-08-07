import Link from "next/link";
import { InstagramIcon, TelegramIcon, XIcon, YoutubeIcon } from "@/components/icons/FigmaIcons";
import { LocationIcon } from "@/components/icons/EventsIcons";

const ADDRESS = "Ташкент, Мирзо-Улугбекский р-н, ул. Буюк Ипак Йули, дом 1";
const MAP_QUERY = encodeURIComponent(ADDRESS);

const socialLinks = [
  { label: "Telegram", href: "#", icon: TelegramIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

export function ContactsMapHero() {
  return (
    <div className="relative h-[452px] w-full overflow-hidden">
      <iframe
        title="Офис Wayu на карте"
        src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="pointer-events-none relative mx-auto h-full max-w-(--container-page)">
        <div className="pointer-events-auto absolute left-0 top-8 w-[580px] rounded-lg border border-border bg-white p-5">
          <h1 className="text-2xl font-bold text-ink">Юридический адрес</h1>
          <p className="mt-2 text-base font-medium text-muted">
            &ldquo;Всемирная ассоциация молодёжи Узбекистана&rdquo;
          </p>

          <div className="mt-5 flex flex-col gap-4">
            <div>
              <p className="text-base font-medium text-muted">Email:</p>
              <p className="mt-1 text-base font-bold text-ink">info@wayu.uz</p>
            </div>
            <div>
              <p className="text-base font-medium text-muted">Телефон:</p>
              <p className="mt-1 flex gap-4 text-base font-bold text-ink">
                <span>+998 99 345 55 59</span>
                <span>+998 71 267 40 98</span>
              </p>
            </div>
            <div>
              <p className="text-base font-medium text-muted">Адрес:</p>
              <p className="mt-1 text-base font-bold text-ink">{ADDRESS}</p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center text-ink"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto absolute bottom-9 right-0 flex h-[42px] items-center gap-2 rounded bg-primary px-4 text-sm font-bold text-white"
        >
          <LocationIcon className="h-[18px] w-[18px]" />
          Как добраться
        </a>
      </div>
    </div>
  );
}
