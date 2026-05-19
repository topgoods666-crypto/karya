import type { Locale } from "./config";

const dictionaries = {
  zh: () => import("./dictionaries/zh").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  ms: () => import("./dictionaries/ms").then((m) => m.default),
  id: () => import("./dictionaries/id").then((m) => m.default),
  th: () => import("./dictionaries/th").then((m) => m.default),
  vi: () => import("./dictionaries/vi").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
