import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/get-dictionary";
import { type Locale } from "@/i18n/config";
import { renderTitle } from "@/lib/title";

export default async function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const t = dict.contact;

  return (
    <>
      <Header locale={params.locale} dict={dict} />

      <section className="container-x pt-24 pb-16">
        <p className="eyebrow mb-6">{t.eyebrow}</p>
        <h1 className="h-display text-5xl md:text-7xl max-w-3xl">
          {renderTitle({
            titleLine1: t.titleLine1,
            titleEm: t.titleEm,
            titleEnd: t.titleEnd,
          })}
        </h1>
        <p className="mt-10 text-ink/70 max-w-2xl leading-relaxed">{t.desc}</p>
      </section>

      <section className="container-x pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <form className="space-y-6 bg-cream-deep/40 p-8 md:p-10 border border-ink/10">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label={t.form.company} name="company" />
              <Field label={t.form.name} name="name" />
              <Field label={t.form.email} name="email" type="email" />
              <Field label={t.form.phone} name="phone" />
            </div>
            <div>
              <label className="block text-xs tracking-widest2 uppercase text-ink/55 mb-2">
                {t.form.type}
              </label>
              <select
                name="type"
                className="w-full bg-cream border border-ink/15 px-4 py-3 text-sm focus:border-ink outline-none"
              >
                {t.form.types.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-widest2 uppercase text-ink/55 mb-2">
                {t.form.message}
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full bg-cream border border-ink/15 px-4 py-3 text-sm focus:border-ink outline-none resize-none"
                placeholder={t.form.placeholder}
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              {t.form.submit} <span aria-hidden>→</span>
            </button>
            <p className="text-xs text-ink/45 leading-relaxed">{t.form.privacy}</p>
          </form>
        </div>

        <div className="lg:col-span-5 space-y-10">
          <div>
            <h2 className="font-display text-2xl mb-6">{t.directHeader}</h2>
            <ul className="space-y-5">
              {t.contacts.map((c) => (
                <li
                  key={c.value}
                  className="border-t border-ink/10 pt-5 flex justify-between items-baseline gap-6"
                >
                  <div>
                    <div className="text-xs tracking-widest2 uppercase text-ink/50 mb-1">
                      {c.label}
                    </div>
                    <a
                      href={`mailto:${c.value}`}
                      className="text-base font-medium hover:text-champagne transition"
                    >
                      {c.value}
                    </a>
                  </div>
                  <div className="text-xs text-ink/50 text-right">{c.note}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl mb-6">{t.officeHeader}</h2>
            <ul className="space-y-6">
              {t.offices.map((o) => (
                <li key={o.city} className="border-l-2 border-champagne pl-5">
                  <div className="font-medium mb-2">{o.city}</div>
                  <div className="text-sm text-ink/65 leading-relaxed">{o.addr}</div>
                  <div className="text-sm text-ink/65">{o.phone}</div>
                  <div className="text-xs tracking-widest2 uppercase text-ink/40 mt-2">
                    {o.role}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer locale={params.locale} dict={dict} />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-widest2 uppercase text-ink/55 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full bg-cream border border-ink/15 px-4 py-3 text-sm focus:border-ink outline-none"
      />
    </div>
  );
}
