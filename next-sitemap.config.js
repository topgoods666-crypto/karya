/** @type {import('next-sitemap').IConfig} */
const SITE_URL = process.env.SITE_URL || "https://karya.com";

const locales = ["zh", "en", "ms", "id", "th", "vi"];
const defaultLocale = "zh";

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "public",

  alternateRefs: locales.map((l) => ({
    href: `${SITE_URL}/${l}`,
    hreflang: l === "zh" ? "zh-CN" : l,
  })),

  transform: async (config, path) => {
    const stripped = path.replace(/^\/(zh|en|ms|id|th|vi)/, "") || "/";
    const locale = path.match(/^\/(zh|en|ms|id|th|vi)/)?.[1];

    const alternateRefs = locales.map((l) => ({
      href: `${SITE_URL}/${l}${stripped === "/" ? "" : stripped}`,
      hreflang: l === "zh" ? "zh-CN" : l,
      hrefIsAbsolute: true,
    }));

    alternateRefs.push({
      href: `${SITE_URL}/${defaultLocale}${stripped === "/" ? "" : stripped}`,
      hreflang: "x-default",
      hrefIsAbsolute: true,
    });

    return {
      loc: path,
      changefreq: "weekly",
      priority: stripped === "/" ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
      alternateRefs,
    };
  },

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
