import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "./i18n/config";

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) {
    return cookie as Locale;
  }

  const accept = request.headers.get("accept-language") || "";
  const langs = accept
    .split(",")
    .map((l) => l.split(";")[0].trim().toLowerCase());

  for (const l of langs) {
    if (l.startsWith("zh")) return "zh";
    const short = l.split("-")[0];
    if ((locales as readonly string[]).includes(short)) return short as Locale;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|brands|images|.*\\..*).*)"],
};
