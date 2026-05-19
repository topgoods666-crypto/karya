export const locales = ["zh", "en", "ms", "id", "th", "vi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  ms: "Bahasa Melayu",
  id: "Bahasa Indonesia",
  th: "ภาษาไทย",
  vi: "Tiếng Việt",
};

export const localeShort: Record<Locale, string> = {
  zh: "ZH",
  en: "EN",
  ms: "MS",
  id: "ID",
  th: "TH",
  vi: "VI",
};
