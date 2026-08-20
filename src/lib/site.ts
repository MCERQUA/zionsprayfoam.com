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
  { category: "Cost & Value", q: "How much does spray foam insulation cost?", a: "Cost depends on square footage, the specific application (attic, crawl space, roofline, or metal building), and whether open-cell or closed-cell foam is the right fit. Request a quote with your project details and we'll give you a straight number rather than a generic per-square-foot estimate that ignores the specifics." },
  { category: "Cost & Value", q: "Does spray foam insulation lower home value?", a: "No — properly installed spray foam is generally viewed as a value-adding energy efficiency upgrade, not a liability. Concerns about lowered home value usually trace back to poorly installed foam causing moisture or ventilation problems down the line, not the material itself when installed correctly." },
  { category: "Cost & Value", q: "Is spray foam worth the higher upfront cost compared to fiberglass?", a: "For most southern Utah applications, yes — the combined air-sealing and thermal performance typically pays back the higher installation cost through lower energy bills over time, and the durability (no sagging or settling) means that performance holds up longer than batt insulation does." },
  { category: "The Material Itself", q: "What's the difference between open-cell and closed-cell spray foam?", a: "Closed-cell foam is denser, offers a higher R-value per inch, adds structural rigidity, and has better moisture resistance. Open-cell foam is lighter, less expensive per square foot, and performs well for sound dampening and general air-sealing in applications that don't need closed-cell's added density." },
  { category: "The Material Itself", q: "Is spray foam insulation safe once it's cured?", a: "Yes — cured spray foam is chemically inert and doesn't off-gas the way it does during application and the initial curing period. We follow standard curing and re-entry timelines to make sure the space is safe before anyone spends time in it." },
  { category: "The Material Itself", q: "What R-value does spray foam provide?", a: "R-value depends on foam type and thickness — closed-cell foam typically delivers a higher R-value per inch than open-cell. We size every application to meet or exceed the R-value appropriate for the specific space and southern Utah's climate zone." },
  { category: "The Material Itself", q: "Does spray foam actually work in extreme heat?", a: "Yes — spray foam's air-sealing performance works the same regardless of which direction the temperature difference runs, which is exactly what makes it effective in a climate with both extreme summer heat and real winter cold, rather than just one or the other." },
  { category: "Installation", q: "How long does spray foam insulation installation take?", a: "Most residential attic or crawl space jobs are completed in a single day. Larger commercial, metal building, or new-construction projects can take longer depending on square footage and complexity." },
  { category: "Installation", q: "Can spray foam be installed in an existing home, or only new construction?", a: "Both — we retrofit existing homes, attics, and crawl spaces, and we install in new-construction framing before drywall goes up. The approach and access considerations differ, but both are common projects for us." },
  { category: "Installation", q: "Do I need to leave my home during installation?", a: "For most residential jobs, no — but the specific space being sprayed needs to be vacated during application and through the curing period, which we'll walk you through before we start." },
  { category: "Removal & Repair", q: "How do I know if my existing insulation needs to be removed rather than just topped off?", a: "Insulation that's wet, moldy, pest-damaged, or was applied incorrectly the first time generally needs removal rather than covering over — adding new material on top of a failed system doesn't fix the underlying problem." },
  { category: "Booking", q: "How far in advance should I request a quote?", a: "As early as you can, especially heading into summer when demand for attic and crawl space work picks up. For larger commercial or metal building projects, earlier is even more important since those jobs require more scheduling lead time." },
  { category: "Booking", q: "Do you serve areas outside St. George?", a: "Yes — we serve St. George, Hurricane, Washington, Springdale, Ivins, Santa Clara, and the greater Cedar City area. See our Service Areas page for the full coverage list." },
  { category: "Metal Buildings & New Construction", q: "Does spray foam really stop condensation in a metal building?", a: "Yes — closed-cell spray foam creates a continuous vapor barrier directly against the metal surface, which is what actually prevents the \"sweating\" condensation problem metal buildings are prone to. Traditional batt insulation doesn't seal tightly enough against metal to solve this the same way." },
  { category: "Metal Buildings & New Construction", q: "Do you coordinate directly with builders on new-construction timelines?", a: "Yes — we regularly work directly with builders and general contractors, scheduling insulation after rough-in and inspection but before drywall, coordinated around the overall build timeline rather than requiring the project to work around ours." },
];
