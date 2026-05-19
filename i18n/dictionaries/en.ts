import type { Dict } from "./type";

const dict: Dict = {
  meta: {
    title: "Karya | International Beauty Supply Chain",
    description:
      "Karya — a Hong Kong based supply chain partner for international beauty brands. Wholesale, cross-border distribution, and brand sourcing for retail partners worldwide.",
  },
  nav: {
    home: "Home", about: "About", business: "Business",
    contact: "Contact", cta: "Partner with us",
  },
  home: {
    hero: {
      eyebrow: "International Beauty Supply Chain",
      titleLine1: "Connecting global beauty brands",
      titleEm: "right",
      titleLine2: "with every [EM] retail channel",
      desc: "Karya is a supply chain partner dedicated to international beauty brands. With stable brand sourcing, rigorous compliance, and a global fulfilment network, we deliver dependable supply chain solutions for retailers and emerging brands.",
      ctaPrimary: "Our business", ctaGhost: "Request a quote",
    },
    stats: [
      { num: "15+", label: "International beauty brands" },
      { num: "30+", label: "Countries & regions covered" },
      { num: "10 yrs", label: "Supply chain experience" },
      { num: "200+", label: "Channel partners" },
    ],
    services: {
      eyebrow: "Our Services",
      title: "From brand sourcing to retail shelves\nA full-stack beauty supply chain",
      desc: "Our services run on three lines — sourcing, fulfilment, and channels. Whether you are a retailer looking for stable supply or a brand looking to expand overseas, Karya offers a model that fits.",
      items: [
        { no: "01", title: "International brand wholesale", desc: "Authorised access to leading European, American, Japanese and Korean beauty brands. Stable, traceable supply with flexible SKU mixing." },
        { no: "02", title: "Cross-border fulfilment", desc: "Customs clearance, warehousing, and returns handling across Southeast Asia, Middle East and Eastern Europe. FBA, overseas warehouse, and direct-ship models available." },
        { no: "03", title: "Brand sourcing & matchmaking", desc: "Connecting emerging brands with regional distributors. Market entry strategy, first-order assortment, and local compliance support." },
        { no: "04", title: "Channel-specific programs", desc: "Tailored assortments and pricing for CS chains, marketplaces, travel retail, and live commerce channels." },
      ],
    },
    brands: {
      eyebrow: "Brand Partners",
      title: "Brand portfolio",
      desc: "We maintain stable supply and authorised partnerships with dozens of international beauty brands across premium skincare, makeup, fragrance and personal care. The names below are representative.",
      disclaimer: "* Brand names are listed as an industry reference. Specific authorisation and partnership scope is governed by signed agreements.",
    },
    why: {
      eyebrow: "Why Karya", title: "Why work with us",
      quote: "Stability is the\nmost expensive\nsupply chain skill", quoteAttr: "— Karya operating principle",
      items: [
        { t: "Traceable brand authorisation", d: "Every product comes through brand-owner or officially authorised channels. No grey market." },
        { t: "Compliance & localisation", d: "Customs filing, cosmetic registration, and multilingual labelling across major target markets." },
        { t: "Flexible engagement models", d: "Spot wholesale, made-to-order, exclusive distribution, brand-side operations and more." },
        { t: "Regional market insight", d: "Selection advice and sell-through data feedback drawn from years of cross-border operation." },
      ],
    },
    finalCta: {
      eyebrow: "Get in touch", titleStart: "Let's talk about your", titleEm: "channel",
      desc: "Whether you are a retailer in search of stable supply, or a brand looking to expand abroad, we welcome an honest first conversation.",
      button: "Start an enquiry",
    },
  },
  about: {
    eyebrow: "About Karya",
    titleLine1: "A supply chain company trusted",
    titleEm: "equally", titleEnd: "by brands and retailers",
    intro: [
      "Karya is a supply chain partner dedicated to international beauty brands. Our core proposition is simple — every product that reaches the shelf should have a clear, compliant, traceable origin.",
      "Over the past decade, cross-border beauty has shifted from grey wholesale to a branded, compliant, digital business. A new generation of trust-led supply chain partners is replacing the old layered diversion model — and is becoming the partner of choice for brands entering new markets and retailers building new categories. Karya intends to be a long-term participant in that shift.",
      "Headquartered in Hong Kong, Karya distributes premium European, American, Japanese and Korean skincare, makeup and fragrance brands, serving retail chains, marketplaces and emerging channels across Southeast Asia, the Middle East, Eastern Europe and Latin America.",
    ],
    beliefHeader: "What we believe",
    beliefs: [
      { t: "Stability beats opportunity", d: "In supply chain, sustained reliable supply is worth ten times a one-off bargain." },
      { t: "Compliance is the floor", d: "We refuse grey-market sources. Every product comes from brand owners or their authorised channels." },
      { t: "Long-term first", d: "We prefer partners we can serve for ten years over customers we serve for one order." },
    ],
    milestoneEyebrow: "Milestones", milestoneTitle: "Our journey",
    milestones: [
      { year: "2014", title: "Founded in Hong Kong", desc: "Started international beauty brand wholesale and built our first generation of brand sourcing." },
      { year: "2017", title: "Cross-border network", desc: "Built distribution and overseas warehouse coverage for Southeast Asia; began serving regional retail chains." },
      { year: "2020", title: "Brand sourcing upgrade", desc: "Established direct authorisation or long-term supply agreements with leading European and American beauty groups." },
      { year: "2023", title: "Digital fulfilment", desc: "Adopted digital order and inventory management; brought fulfilment lead time to industry-leading levels." },
      { year: "2026", title: "Global synergy", desc: "Expanded into the Middle East, Eastern Europe and Latin America with retail partners across 30+ countries and regions." },
    ],
    nextEyebrow: "Next Step", nextTitle: "Want to know what we can do?",
    viewBusiness: "Our business", contactBtn: "Contact us",
  },
  business: {
    eyebrow: "Our Business",
    titleLine1: "Four business lines", titleEm: "complete", titleLine2: "One [EM] supply chain",
    intro: "Our business is split into four clear lines so every type of partner — retail chains, marketplaces, emerging brands, live commerce — can find the model that fits.",
    lines: [
      { code: "BL-01", title: "International brand wholesale",
        intro: "Authorised access to leading European, American, Japanese and Korean beauty brands. Stable, compliant, traceable supply for retail partners.",
        details: ["Premium skincare, makeup, fragrance, personal care", "Single-SKU to mixed container assortments", "Spot, forward and stocked supply models", "Authorised channels and authentication support"] },
      { code: "BL-02", title: "Cross-border fulfilment",
        intro: "Built on regional overseas warehouses and compliant clearance, we offer end-to-end fulfilment from drop-ship to full container transfers.",
        details: ["Coverage across SEA, Middle East, Eastern Europe, LATAM", "Cosmetic filing, customs, local labelling end-to-end", "FBA-prep / overseas warehouse / direct-ship options", "Returns, expiry and shrinkage tracking standardised"] },
      { code: "BL-03", title: "Brand sourcing & matchmaking",
        intro: "We bridge emerging beauty brands with regional distributors with market entry strategy, first-order assortment and local compliance.",
        details: ["Target market demand and pricing analysis", "Channel placement guidance (CS / e-com / live)", "First-order assortment and rollout cadence", "Local compliance and marketing alignment"] },
      { code: "BL-04", title: "Channel-specific programs",
        intro: "Differentiated assortments, pricing and marketing support tailored to each channel format.",
        details: ["CS chains: core lines plus seasonal hero SKUs", "Marketplaces: hero selections plus gift / sample sets", "Travel retail and live commerce: scarce-supply allocation", "B2B wholesale and group buying: custom quotes and quotas"] },
    ],
    flowEyebrow: "How we work", flowTitle: "How we collaborate",
    flowDesc: "From a first enquiry to recurring replenishment, four clear stages standardise the workflow so you know what happens at every step.",
    flow: [
      { step: "01", title: "Brief", desc: "Understand your channel type, target markets, category mix and budget." },
      { step: "02", title: "Proposal & quote", desc: "Build an assortment proposal with pricing and lead times based on current sourcing." },
      { step: "03", title: "Contract & first order", desc: "Sign the partnership agreement; lock in first-order goods, payment and shipping." },
      { step: "04", title: "Fulfil & support", desc: "Track orders, expiry and after-sales end-to-end; build a steady replenishment cadence." },
    ],
    ctaEyebrow: "Ready?", ctaTitleStart: "Tell us which line",
    ctaTitleEm: "fits", ctaBtn: "Start an enquiry",
  },
  contact: {
    eyebrow: "Contact",
    titleLine1: "An honest conversation", titleEm: "ten emails", titleEnd: "often beats [EM]",
    desc: "Fill in the form below or email us directly. All enquiries receive a reply within 24 hours, usually faster on business days.",
    form: {
      company: "Company *", name: "Contact name *", email: "Email *", phone: "Phone / WhatsApp",
      type: "Partnership type",
      types: ["Wholesale", "Cross-border / overseas warehouse", "Brand authorisation", "Channel-specific program", "Other"],
      message: "Your enquiry *", placeholder: "Target market, categories, budget, first-order intent",
      submit: "Submit enquiry", privacy: "By submitting, you agree we may use the information above to reply to your enquiry. We will not use it for any other purpose.",
    },
    directHeader: "Direct contact",
    contacts: [
      { label: "Partnerships", value: "bd@karya.com", note: "New partnerships / channels" },
      { label: "Wholesale enquiries", value: "sales@karya.com", note: "Spot supply / quotes" },
      { label: "Brand sourcing", value: "brand@karya.com", note: "Authorisation / regional distributorship" },
    ],
    officeHeader: "Office",
    offices: [
      { city: "Hong Kong", addr: "Kwun Tong, Kowloon, Hong Kong",
        phone: "+852 0000 0000", role: "HQ · International brand sourcing / cross-border fulfilment" },
    ],
  },
  footer: {
    about: "Karya — supply chain partner for international beauty brands. Connecting global brand owners with regional retail partners through stable sourcing, compliant clearance, and one-stop fulfilment.",
    navHeader: "Navigation", contactHeader: "Contact",
    contactItems: ["Email: sales@karya.com", "Partnerships: bd@karya.com", "Address: Hong Kong"],
    rights: "All rights reserved.",
    tagline: "International Beauty Supply Chain",
  },
};

export default dict;
