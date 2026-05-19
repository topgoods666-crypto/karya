export type Dict = {
  meta: { title: string; description: string };
  nav: {
    home: string; about: string; business: string; contact: string; cta: string;
  };
  home: {
    hero: {
      eyebrow: string; titleLine1: string; titleEm: string; titleLine2: string;
      desc: string; ctaPrimary: string; ctaGhost: string;
    };
    stats: { num: string; label: string }[];
    services: {
      eyebrow: string; title: string; desc: string;
      items: { no: string; title: string; desc: string }[];
    };
    brands: {
      eyebrow: string; title: string; desc: string; disclaimer: string;
    };
    why: {
      eyebrow: string; title: string; quote: string; quoteAttr: string;
      items: { t: string; d: string }[];
    };
    finalCta: {
      eyebrow: string; titleStart: string; titleEm: string; desc: string; button: string;
    };
  };
  about: {
    eyebrow: string; titleLine1: string; titleEm: string; titleEnd: string;
    intro: string[]; beliefHeader: string;
    beliefs: { t: string; d: string }[];
    milestoneEyebrow: string; milestoneTitle: string;
    milestones: { year: string; title: string; desc: string }[];
    nextEyebrow: string; nextTitle: string; viewBusiness: string; contactBtn: string;
  };
  business: {
    eyebrow: string; titleLine1: string; titleEm: string; titleLine2: string; intro: string;
    lines: { code: string; title: string; intro: string; details: string[] }[];
    flowEyebrow: string; flowTitle: string; flowDesc: string;
    flow: { step: string; title: string; desc: string }[];
    ctaEyebrow: string; ctaTitleStart: string; ctaTitleEm: string; ctaBtn: string;
  };
  contact: {
    eyebrow: string; titleLine1: string; titleEm: string; titleEnd: string; desc: string;
    form: {
      company: string; name: string; email: string; phone: string;
      type: string; types: string[]; message: string; placeholder: string;
      submit: string; privacy: string;
    };
    directHeader: string;
    contacts: { label: string; value: string; note: string }[];
    officeHeader: string;
    offices: { city: string; addr: string; phone: string; role: string }[];
  };
  footer: {
    about: string; navHeader: string; contactHeader: string;
    contactItems: string[]; rights: string; tagline: string;
  };
};
