import Link from "next/link";
import {
  InstagramIcon,
  TelegramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons/FigmaIcons";
import { MapPinIcon, WhatsappIcon } from "@/components/icons/FooterIcons";
import { CallIcon, SmsIcon } from "@/components/icons/WorldMapIcons";

const navLinks = [
  { label: "О нас", href: "/about" },
  { label: "Пожертвовангие", href: "/about/donations" },
  { label: "Новости", href: "/news" },
  { label: "Вам нужно знать", href: "/need-to-know" },
  { label: "Контакты", href: "/contacts" },
];

const socialLinks = [
  { label: "Telegram", href: "#", icon: TelegramIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

export function FooterSection() {
  return (
    <footer className="relative -mt-px h-[400px] w-full overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer/registan.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(19,23,33,0.88), rgba(19,23,33,1))",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/footer/watermark.svg"
        alt=""
        className="absolute -left-16 top-8 h-[640px] w-[622px] opacity-[0.02]"
      />

      <div className="relative mx-auto flex h-full max-w-(--container-page) flex-col items-center pt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/footer/wayu-logo-white.svg" alt="WAYU" className="h-[50px] w-auto" />

        <nav className="mt-9 flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-bold text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-6 max-w-[982px] text-center text-base leading-relaxed text-border">
          Мы помогаем нашим согражданам по всему миру и стремимся создать дружное, сплоченное
          соощбество узбекистанцев. Основной целью ассоциации является объединение граждан
          Республики Узбекистан по всему миру и оказания им нужной поддержки при необходимости.
        </p>

        <div className="mt-8 flex items-center gap-[54px]">
          <span className="flex items-center gap-1.5 text-sm font-bold text-white">
            <CallIcon className="h-4 w-4 text-muted" />
            +998 71 200 70 07
          </span>
          <Link
            href="mailto:info@wayu.uz"
            className="flex items-center gap-1.5 text-sm font-bold text-white"
          >
            <SmsIcon className="h-4 w-4 text-muted" />
            info@wayu.uz
          </Link>
          <span className="flex items-center gap-1.5 text-sm font-bold text-white">
            <WhatsappIcon className="h-4 w-4 text-muted" />
            +998 99 345 55 59
          </span>
          <span className="flex items-center gap-1.5 text-sm font-bold text-white">
            <MapPinIcon className="h-4 w-4 text-muted" />
            г. Ташкент, Мирзо-Улугбекский р-н, ул. Буюк Ипак Йули, дом 1
          </span>
        </div>

        <div className="mt-auto mb-6 w-full">
          <div className="h-px w-full bg-white/20" />
          <div className="mt-4 grid grid-cols-3 items-center">
            <span className="justify-self-start text-sm font-bold text-white">
              © 2022, Musofir. Все права защищены.
            </span>
            <div className="flex items-center justify-self-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center text-white"
                >
                  <Icon className="h-7 w-7" />
                </Link>
              ))}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/footer/wings-badge.svg"
              alt=""
              className="h-6 w-[45px] justify-self-end"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
