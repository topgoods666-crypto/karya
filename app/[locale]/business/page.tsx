import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { type Locale } from "@/i18n/config";
import { renderTitle } from "@/lib/title";

export default async function BusinessPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const t = dict.business;

  return (
    <>
      <Header locale={params.locale} dict={dict} />

      <section className="container-x pt-24 pb-20">
        <p className="eyebrow mb-6">{t.eyebrow}</p>
        <h1 className="h-display text-5xl md:text-7xl max-w-4xl">
          {renderTitle({
            titleLine1: t.titleLine1,
            titleLine2: t.titleLine2,
            titleEm: t.titleEm,
          })}
        </h1>
        <p className="mt-10 text-ink/70 max-w-2xl leading-relaxed">{t.intro}</p>
      </section>

      <section className="container-x pb-32 space-y-px bg-ink/10">
        {t.lines.map((line) => (
          <div
            key={line.code}
            className="bg-cream p-10 md:p-16 grid lg:grid-cols-12 gap-10"
          >
            <div className="lg:col-span-4">
              <div className="text-xs tracking-widest2 text-champagne mb-4">
                {line.code}
              </div>
              <h2 className="font-display text-3xl md:text-4xl">{line.title}</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-ink/75 leading-relaxed mb-8">{line.intro}</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {line.details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-ink/70">
                    <span className="text-champagne mt-1.5">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-cream-deep/40 border-y border-ink/10 py-28">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5">{t.flowEyebrow}</p>
              <h2 className="h-display text-4xl md:text-5xl">{t.flowTitle}</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="text-ink/70 leading-relaxed">{t.flowDesc}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-ink/10">
            {t.flow.map((f) => (
              <div key={f.step} className="bg-cream p-8">
                <div className="font-display text-4xl text-champagne mb-4">{f.step}</div>
                <div className="font-medium mb-2">{f.title}</div>
                <p className="text-sm text-ink/65 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-28 text-center">
        <p className="eyebrow mb-5">{t.ctaEyebrow}</p>
        <h2 className="h-display text-4xl md:text-5xl mb-8">
          {t.ctaTitleStart}
          <span className="italic text-champagne"> {t.ctaTitleEm}</span>
        </h2>
        <Link href={`/${params.locale}/contact`} className="btn-primary">
          {t.ctaBtn}
        </Link>
      </section>

      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
