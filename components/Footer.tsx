import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries/type";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  return (
    <footer className="bg-ink text-cream/80 mt-32">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-display text-3xl text-cream">KARYA</span>
            <span className="text-[11px] tracking-widest2 uppercase">卡雅</span>
          </div>
          <p className="text-sm leading-relaxed max-w-md text-cream/60">
            {dict.footer.about}
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest2 text-champagne mb-5">
            {dict.footer.navHeader}
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link href={`/${locale}`} className="hover:text-cream transition">{dict.nav.home}</Link></li>
            <li><Link href={`/${locale}/about`} className="hover:text-cream transition">{dict.nav.about}</Link></li>
            <li><Link href={`/${locale}/business`} className="hover:text-cream transition">{dict.nav.business}</Link></li>
            <li><Link href={`/${locale}/contact`} className="hover:text-cream transition">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest2 text-champagne mb-5">
            {dict.footer.contactHeader}
          </div>
          <ul className="space-y-3 text-sm text-cream/70">
            {dict.footer.contactItems.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/40">
          <span>© {new Date().getFullYear()} Karya 卡雅. {dict.footer.rights}</span>
          <span>{dict.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
