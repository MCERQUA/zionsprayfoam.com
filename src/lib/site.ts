export const SITE = {
  name: "Zion Spray Foam",
  shortName: "Zion Spray Foam",
  domain: "zionsprayfoam.com",
  url: "https://zionsprayfoam.com",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  tagline: "Spray foam insulation for the Zion National Park region of southwestern Utah.",
};

export const SERVICE_AREAS = [
  "St. George", "Hurricane", "Washington", "Springdale", "Ivins", "Santa Clara", "Cedar City",
];

export type ServicePage = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  teaser: string;
};

export const SERVICES: ServicePage[] = [
  {
    slug: "attic-insulation",
    navLabel: "Attic Insulation",
    h1: "Attic Spray Foam Insulation",
    metaTitle: "Attic Spray Foam Insulation | Zion Spray Foam",
    metaDescription:
      "Attic spray foam insulation for St. George, Hurricane, and the Zion National Park region. Seal out desert heat and high-desert cold. Call 844-967-5247.",
    teaser: "Your attic is where the biggest energy losses happen — seal it right, once.",
  },
  {
    slug: "crawl-space-insulation",
    navLabel: "Crawl Space Insulation",
    h1: "Crawl Space Spray Foam Insulation",
    metaTitle: "Crawl Space Spray Foam Insulation | Zion Spray Foam",
    metaDescription:
      "Crawl space spray foam insulation for southwestern Utah homes. Stop moisture, drafts, and energy loss at the source. Call 844-967-5247.",
    teaser: "The crawl space nobody thinks about is often the source of drafts, moisture, and high bills.",
  },
  {
    slug: "spray-foam-roofing",
    navLabel: "Spray Foam Roofing",
    h1: "Spray Foam Roof Insulation",
    metaTitle: "Spray Foam Roof Insulation | Zion Spray Foam",
    metaDescription:
      "Spray foam roof insulation for residential and light-commercial buildings in southern Utah. Call 844-967-5247.",
    teaser: "A roof that's actually sealed — not just shingled — for extreme desert sun and winter swings.",
  },
  {
    slug: "metal-building-insulation",
    navLabel: "Metal Building & Pole Barn Insulation",
    h1: "Metal Building & Pole Barn Spray Foam Insulation",
    metaTitle: "Metal Building & Pole Barn Insulation | Zion Spray Foam",
    metaDescription:
      "Spray foam insulation for metal buildings, pole barns, and agricultural shops across Washington County, UT. Call 844-967-5247.",
    teaser: "Metal buildings amplify heat and cold — spray foam is the fix agricultural and shop owners actually need.",
  },
  {
    slug: "new-construction-insulation",
    navLabel: "New Construction Insulation",
    h1: "New Construction Spray Foam Insulation",
    metaTitle: "New Construction Spray Foam Insulation | Zion Spray Foam",
    metaDescription:
      "Spray foam insulation for new home construction in St. George and the growing Washington County market. Call 844-967-5247.",
    teaser: "Build it right the first time — spray foam is easiest and most effective before the drywall goes up.",
  },
  {
    slug: "insulation-removal-repair",
    navLabel: "Insulation Removal & Repair",
    h1: "Spray Foam Insulation Removal & Repair",
    metaTitle: "Spray Foam Insulation Removal & Repair | Zion Spray Foam",
    metaDescription:
      "Removal and repair of old, degraded, or improperly installed spray foam insulation in southern Utah. Call 844-967-5247.",
    teaser: "Old or failed insulation isn't just inefficient — it can be actively working against you.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  excerpt: string;
  relatedServices: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cost-of-spray-foam-southern-utah",
    title: "How Much Does Spray Foam Insulation Cost in Southern Utah?",
    metaTitle: "How Much Does Spray Foam Insulation Cost in Southern Utah?",
    metaDescription: "What actually drives spray foam insulation pricing in the St. George/Zion region — square footage, foam type, and access.",
    date: "2026-09-10",
    excerpt: "What actually drives spray foam insulation pricing in the St. George/Zion region — square footage, foam type, and access.",
    relatedServices: ["attic-insulation"],
  },
  {
    slug: "open-cell-vs-closed-cell",
    title: "Open Cell vs. Closed Cell Spray Foam: Which Is Right for Your Southern Utah Home?",
    metaTitle: "Open Cell vs. Closed Cell Spray Foam Insulation",
    metaDescription: "The real differences between open cell and closed cell spray foam, and which fits different parts of a southern Utah home.",
    date: "2026-09-24",
    excerpt: "The real differences between open cell and closed cell spray foam, and which fits different parts of a southern Utah home.",
    relatedServices: ["attic-insulation", "crawl-space-insulation"],
  },
  {
    slug: "does-spray-foam-lower-home-value",
    title: "Does Spray Foam Insulation Lower Home Value? Separating Fact from Myth",
    metaTitle: "Does Spray Foam Insulation Lower Home Value?",
    metaDescription: "An honest look at where the spray-foam-lowers-value concern comes from, and what actually matters for resale.",
    date: "2026-10-08",
    excerpt: "An honest look at where the spray-foam-lowers-value concern comes from, and what actually matters for resale.",
    relatedServices: ["insulation-removal-repair"],
  },
  {
    slug: "spray-foam-for-southern-utah-climate",
    title: "Why Spray Foam Insulation Makes Sense for Southern Utah's Climate",
    metaTitle: "Why Spray Foam Makes Sense for Southern Utah's Climate",
    metaDescription: "Extreme desert summer heat and real high-desert winter cold — why spray foam handles both better than traditional insulation.",
    date: "2026-10-22",
    excerpt: "Extreme desert summer heat and real high-desert winter cold — why spray foam handles both better than traditional insulation.",
    relatedServices: ["new-construction-insulation", "metal-building-insulation"],
  },
];

export const FAQS: { q: string; a: string; category: string }[] = [
  { category: "Cost & Basics", q: "How much does spray foam insulation cost?", a: "Pricing depends on square footage, the type of foam (open cell vs. closed cell), and how accessible the space is. Tell us about your property and we'll put together a straightforward quote — no hidden fees." },
  { category: "Cost & Basics", q: "Does spray foam insulation lower home value?", a: "Not when it's installed correctly by a qualified installer — the concern usually traces back to poorly-installed or DIY foam causing moisture or structural issues, not spray foam itself. Properly installed spray foam is a recognized, valuable upgrade in most real estate markets." },
  { category: "Cost & Basics", q: "How long does installation take?", a: "Most residential attic or crawl space jobs are completed in a single day. Larger projects — new construction, metal buildings, or whole-home retrofits — may take longer depending on scope. We'll give you a realistic timeline when you request a quote." },
  { category: "Open Cell vs. Closed Cell", q: "What's the difference between open cell and closed cell spray foam?", a: "Open cell foam is lighter, less expensive, and better at sound dampening, but has a lower R-value per inch and isn't a moisture barrier. Closed cell foam is denser, has a higher R-value per inch, and acts as its own moisture barrier — a better fit for crawl spaces, roofing, and areas with moisture exposure." },
  { category: "Open Cell vs. Closed Cell", q: "Which type do I need for my home?", a: "It depends on the space — attics, crawl spaces, and roofing each have different moisture and performance considerations. We'll recommend the right type for each area of your project rather than a one-size-fits-all answer." },
  { category: "Performance", q: "What R-value does spray foam provide?", a: "Closed cell foam typically provides roughly R-6 to R-7 per inch, and open cell around R-3.5 to R-4 per inch — both meaningfully higher per inch than traditional batt or blown insulation, which is part of why spray foam performs so well in tight spaces." },
  { category: "Performance", q: "Does spray foam actually work in extreme desert heat?", a: "Yes — spray foam's air-sealing property is what matters most in extreme heat, since it stops hot air infiltration that traditional insulation doesn't fully block. Combined with its insulating R-value, it reduces cooling costs more effectively than fiberglass or blown insulation in a hot climate." },
  { category: "Performance", q: "Is spray foam insulation safe once it's cured?", a: "Yes — once fully cured (typically within 24-48 hours), spray foam is chemically stable and doesn't off-gas the way it does during application. Professional installers follow standard safety protocols during the application process itself." },
  { category: "Installation & Existing Homes", q: "Can spray foam be installed in an existing home, or only new construction?", a: "Both — spray foam works well in existing homes (attics and crawl spaces are the most common retrofit applications) as well as new construction, where it's often easiest to install before drywall goes up." },
  { category: "Installation & Existing Homes", q: "Do you work on metal buildings and pole barns, not just houses?", a: "Yes — metal buildings and pole barns are a significant part of what we do in this region, given how common agricultural and shop buildings are locally. See our Metal Building & Pole Barn Insulation page for details." },
  { category: "Installation & Existing Homes", q: "What if my existing spray foam insulation is old or failing?", a: "We handle removal and repair of degraded or improperly installed spray foam as its own service — old foam can crack, pull away, or trap moisture in ways that actively work against your home's performance. See our Insulation Removal & Repair page." },
  { category: "Service Area", q: "Do you serve areas outside St. George?", a: "Yes — we serve the greater Zion National Park gateway region of southwestern Utah, including St. George, Hurricane, Washington, Springdale, Ivins, Santa Clara, and Cedar City. See our service areas page for the full coverage list." },
];
