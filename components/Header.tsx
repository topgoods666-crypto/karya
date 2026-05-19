import Link from "next/link";
import LangSwitcher from "./LangSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries/type";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const nav = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/business`, label: dict.nav.business },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-ink/10">
      <div className="container-x flex items-center justify-between h-20">
        <Link href={`/${locale}`} className="flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-wide">KARYA</span>
          <span className="text-[11px] tracking-widest2 text-ink/60 uppercase">
            卡雅
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 hover:text-ink transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}/contact`}
            className="hidden md:inline-flex text-xs uppercase tracking-widest2 border border-ink px-4 py-2.5 hover:bg-ink hover:text-cream transition"
          >
            {dict.nav.cta}
          </Link>
          <LangSwitcher current={locale} />
        </div>
      </div>
    </header>
  );
}
