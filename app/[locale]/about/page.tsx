import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { type Locale } from "@/i18n/config";
import { renderTitle } from "@/lib/title";

export default async function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const t = dict.about;

  return (
    <>
      <Header locale={params.locale} dict={dict} />

      <section className="container-x pt-24 pb-20">
        <p className="eyebrow mb-6">{t.eyebrow}</p>
        <h1 className="h-display text-5xl md:text-7xl max-w-4xl">
          {renderTitle({
            titleLine1: t.titleLine1,
            titleEm: t.titleEm,
            titleEnd: t.titleEnd,
          })}
        </h1>
      </section>

      <section className="container-x pb-24 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] bg-gradient-to-br from-cream-deep to-champagne/30 sticky top-28">
            <div className="h-full flex items-end p-10">
              <div>
                <div className="font-display text-4xl mb-3">Karya</div>
                <div className="text-sm tracking-widest2 uppercase text-ink/50">
                  卡雅 · Beauty Supply Chain
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 text-ink/75 leading-loose">
          {t.intro.map((p, i) => (
            <p
              key={i}
              className={i === 0 ? "text-xl text-ink leading-relaxed" : ""}
            >
              {p}
            </p>
          ))}

          <div className="hairline my-12"></div>

          <h2 className="font-display text-3xl text-ink mb-4">{t.beliefHeader}</h2>
          <ul className="space-y-5">
            {t.beliefs.map((v) => (
              <li key={v.t} className="border-l-2 border-champagne pl-5">
                <div className="font-medium text-ink mb-1">{v.t}</div>
                <div className="text-sm">{v.d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-cream py-28">
        <div className="container-x">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-5">
            {t.milestoneEyebrow}
          </p>
          <h2 className="h-display text-4xl md:text-5xl text-cream mb-16">
            {t.milestoneTitle}
          </h2>

          <div className="grid md:grid-cols-5 gap-px bg-cream/10">
            {t.milestones.map((m) => (
              <div key={m.year} className="bg-ink p-8">
                <div className="font-display text-3xl text-champagne mb-3">{m.year}</div>
                <div className="font-medium text-cream mb-2">{m.title}</div>
                <p className="text-xs text-cream/60 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-28 text-center">
        <p className="eyebrow mb-5">{t.nextEyebrow}</p>
        <h2 className="h-display text-4xl md:text-5xl mb-8">{t.nextTitle}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`/${params.locale}/business`} className="btn-primary">
            {t.viewBusiness}
          </Link>
          <Link href={`/${params.locale}/contact`} className="btn-ghost">
            {t.contactBtn}
          </Link>
        </div>
      </section>

      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
