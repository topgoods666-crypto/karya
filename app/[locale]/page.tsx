import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/get-dictionary";
import { type Locale } from "@/i18n/config";
import { renderTitle, newlineToBr } from "@/lib/title";

export const runtime = "edge";

const brands = [
  "L'ORÉAL", "ESTÉE LAUDER", "LANCÔME", "DIOR", "SHISEIDO",
  "SK-II", "LA MER", "CLARINS", "BIOTHERM", "ARMANI",
  "GIVENCHY", "YSL", "GUERLAIN", "CHANEL", "KIEHL'S",
];

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const t = dict.home;

  return (
    <>
      <Header locale={params.locale} dict={dict} />

      <section className="relative overflow-hidden">
        <div className="container-x pt-24 md:pt-32 pb-24 md:pb-40 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">{t.hero.eyebrow}</p>
            <h1 className="h-display text-5xl md:text-7xl lg:text-[88px] tracking-tight">
              {renderTitle({
                titleLine1: t.hero.titleLine1,
                titleLine2: t.hero.titleLine2,
                titleEm: t.hero.titleEm,
              })}
            </h1>
            <p className="mt-10 text-base md:text-lg text-ink/70 max-w-2xl leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href={`/${params.locale}/business`} className="btn-primary">
                {t.hero.ctaPrimary}
                <span aria-hidden>→</span>
              </Link>
              <Link href={`/${params.locale}/contact`} className="btn-ghost">
                {t.hero.ctaGhost}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="aspect-[3/4] bg-gradient-to-br from-cream-deep via-cream to-champagne/30 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[140px] text-ink/8 leading-none">K</span>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-[10px] tracking-widest2 uppercase text-ink/50 mb-2">EST.</div>
                <div className="font-display text-2xl">Karya 卡雅</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-deep/40">
        <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {t.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl">{s.num}</div>
              <div className="mt-3 text-xs uppercase tracking-widest2 text-ink/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">{t.services.eyebrow}</p>
            <h2 className="h-display text-4xl md:text-5xl">
              {newlineToBr(t.services.title)}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-ink/70 leading-relaxed">{t.services.desc}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {t.services.items.map((s) => (
            <div key={s.no} className="bg-cream p-10 md:p-12">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-xs tracking-widest2 text-champagne">{s.no}</span>
                <span className="text-xs tracking-widest2 text-ink/30 uppercase">Service</span>
              </div>
              <h3 className="font-display text-2xl mb-4">{s.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest2 text-champagne mb-5">{t.brands.eyebrow}</p>
              <h2 className="h-display text-4xl md:text-5xl text-cream">
                {t.brands.title}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="text-cream/70 leading-relaxed">{t.brands.desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-px bg-cream/10">
            {brands.map((b) => (
              <div
                key={b}
                className="bg-ink aspect-[5/3] flex items-center justify-center px-2"
              >
                <span className="font-display text-base md:text-lg text-cream/80 tracking-widest text-center">
                  {b}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-cream/40">{t.brands.disclaimer}</p>
        </div>
      </section>

      <section className="container-x py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-gradient-to-tr from-champagne/40 via-cream-deep to-cream relative">
              <div className="absolute bottom-10 left-10 right-10">
                <div className="font-display italic text-3xl">
                  &ldquo;{newlineToBr(t.why.quote)}&rdquo;
                </div>
                <div className="mt-4 text-xs tracking-widest2 uppercase text-ink/50">
                  {t.why.quoteAttr}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-5">{t.why.eyebrow}</p>
            <h2 className="h-display text-4xl md:text-5xl mb-8">{t.why.title}</h2>
            <ul className="space-y-6">
              {t.why.items.map((item) => (
                <li key={item.t} className="border-t border-ink/10 pt-6">
                  <div className="flex gap-6">
                    <span className="text-champagne font-display text-xl">·</span>
                    <div>
                      <h3 className="font-medium mb-1.5">{item.t}</h3>
                      <p className="text-sm text-ink/65 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <div className="container-x py-24 text-center">
          <p className="eyebrow mb-5">{t.finalCta.eyebrow}</p>
          <h2 className="h-display text-4xl md:text-6xl mb-8">
            {t.finalCta.titleStart}
            <span className="italic text-champagne"> {t.finalCta.titleEm}</span>
          </h2>
          <p className="text-ink/65 max-w-xl mx-auto mb-10">{t.finalCta.desc}</p>
          <Link href={`/${params.locale}/contact`} className="btn-primary">
            {t.finalCta.button}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
