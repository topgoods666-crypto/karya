"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { locales, localeShort, localeNames, type Locale } from "@/i18n/config";

export default function LangSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const stripped = pathname.replace(/^\/(zh|en|ms|id|th|vi)/, "") || "/";

  function setCookie(loc: Locale) {
    document.cookie = `NEXT_LOCALE=${loc}; path=/; max-age=31536000`;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="text-xs uppercase tracking-widest2 border border-ink/30 px-3 py-2 hover:border-ink transition flex items-center gap-1.5"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{localeShort[current]}</span>
        <span className="text-[9px]" aria-hidden>▼</span>
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 min-w-[180px] bg-cream border border-ink/15 shadow-lg z-50">
          {locales.map((l) => {
            const href = `/${l}${stripped === "/" ? "" : stripped}`;
            return (
              <li key={l}>
                <Link
                  href={href}
                  onClick={() => setCookie(l)}
                  className={`block px-4 py-2.5 text-sm hover:bg-cream-deep transition ${
                    l === current ? "text-champagne" : "text-ink"
                  }`}
                >
                  <span className="text-[10px] tracking-widest2 mr-2 opacity-50">
                    {localeShort[l]}
                  </span>
                  {localeNames[l]}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
