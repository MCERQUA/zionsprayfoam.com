import type { ServiceContent } from "@/components/ServiceLayout";

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "attic-insulation": {
    slug: "attic-insulation",
    image: "/images/service-attic.jpg",
    intro:
      "For most southern Utah homes, the attic is where the biggest insulation upgrade opportunity lives. It's the surface most directly exposed to summer roof temperatures that can climb well past 150 degrees, and it's usually the least-upgraded part of a home built more than a decade or two ago. Spray foam attic insulation addresses both the heat gain problem and the air leakage that traditional batt insulation leaves behind.",
    sections: [
      {
        heading: "Why the Attic Matters So Much in This Climate",
        body: [
          "Heat doesn't just radiate down through an attic — it also moves through every gap, gable vent, can-light housing, and top-plate seam that traditional insulation doesn't seal. In St. George and the surrounding area, that means a hot attic isn't just sitting above your living space, it's actively pushing heated air into it through dozens of small openings most homeowners never see. The reverse happens in winter, when conditioned indoor air escapes upward through the same gaps. Spray foam seals those gaps as part of the application itself, which is the main reason it outperforms batt insulation of a similar R-value in real-world energy bills, not just on paper.",
        ],
      },
      {
        heading: "Open-Cell vs. Closed-Cell for Attics",
        body: [
          "Both types of spray foam work in an attic application, and which one makes sense depends on your specific roof structure and budget. Open-cell foam is lighter, less expensive per square foot, and still delivers strong air-sealing performance — a common choice for standard attic applications. Closed-cell foam costs more but delivers a higher R-value per inch and adds some rigidity to the roof deck, which can matter for older or less structurally robust roof framing. We'll recommend the right option after seeing your specific attic, not before.",
        ],
      },
      {
        heading: "Vented vs. Unvented (Conditioned) Attics",
        body: [
          "Spray foam attic insulation can be installed two different ways: along the attic floor (leaving the attic itself vented and unconditioned, similar to how batt insulation is usually installed) or directly to the underside of the roof deck (creating a sealed, conditioned attic space). Roof-deck application is increasingly common in newer builds and full insulation retrofits because it brings ductwork and HVAC equipment inside the conditioned envelope, which can meaningfully improve efficiency if your air handler or ductwork lives in the attic. We'll walk through which approach fits your home's existing structure and HVAC layout.",
        ],
      },
      {
        heading: "What to Expect on Installation Day",
        body: [
          "Most residential attic jobs are completed in a single day. We'll protect surrounding surfaces, apply the foam to the correct thickness for your target R-value, and let it fully cure before anyone re-enters the space — cured spray foam is inert and safe, but the curing window matters and we'll walk you through the timeline before we start. Older attics with existing batt or blown-in insulation may need that material removed first, which we can handle as part of the same project.",
        ],
      },
      {
        heading: "Signs Your Attic Insulation Needs an Upgrade",
        body: [
          "A few reliable signs it's time to look at attic insulation: noticeably hot upstairs rooms in summer that never quite cool down even with the AC running, visibly thin, compressed, or disturbed batt insulation when you look into the attic, unusually high summer cooling bills relative to home size, and dust accumulation in the attic that suggests outside air is finding its way in. None of these are dramatic on their own, but together they're a strong signal that the attic is underperforming.",
        ],
      },
    ],
    faq: [
      { q: "How much R-value does spray foam attic insulation provide?", a: "It depends on foam type and thickness — closed-cell foam typically delivers a higher R-value per inch than open-cell, and we'll size the application to meet or exceed the R-value appropriate for southern Utah's climate zone." },
      { q: "Can spray foam be added over existing attic insulation?", a: "In some cases, yes, though degraded or moisture-damaged existing insulation is usually better removed first so the new foam adheres properly and any underlying issues are visible before sealing." },
    ],
    relatedSlugs: ["crawl-space-insulation", "spray-foam-roofing"],
  },

  "crawl-space-insulation": {
    slug: "crawl-space-insulation",
    image: "/images/service-crawlspace.jpg",
    intro:
      "Crawl spaces are one of the most commonly overlooked parts of a home's insulation envelope — out of sight, rarely inspected, and often insulated (if at all) with materials that have sagged, fallen, or gotten wet years ago. Spray foam crawl space insulation closes off a surprisingly large source of energy loss and, done correctly, addresses moisture problems that traditional insulation makes worse rather than better.",
    sections: [
      {
        heading: "Why Crawl Spaces Are a Bigger Deal Than Most Homeowners Realize",
        body: [
          "A poorly sealed crawl space is functionally an open connection between your living space and the outside — or the ground — depending on how it was originally built. Cold or hot air moves up through uninsulated or poorly insulated crawl space ceilings, and the ground beneath an unsealed crawl space is a constant source of moisture that traditional fiberglass batt insulation absorbs, sags under, and eventually stops insulating altogether. In southern Utah's climate, a crawl space also has to deal with genuine summer heat radiating up from the ground and real winter cold settling in overnight, which means an underperforming crawl space works against your HVAC system in both directions across the year, not just one.",
        ],
      },
      {
        heading: "Spray Foam vs. Batt Insulation in a Crawl Space",
        body: [
          "Traditional fiberglass batts stapled between crawl space floor joists are the most common approach in older homes, and they're also one of the most common insulation failures we see — batts sag out of place, absorb ground moisture, and lose most of their effective R-value within a few years in a damp or poorly ventilated crawl space. Spray foam applied directly to the crawl space walls or the underside of the subfloor doesn't sag, doesn't absorb moisture the same way, and creates a genuine air seal rather than just a thermal buffer that's slowly falling out of place.",
        ],
      },
      {
        heading: "Encapsulation vs. Insulation-Only Approaches",
        body: [
          "Depending on your crawl space's ventilation, moisture history, and structure, spray foam can be part of a full crawl space encapsulation (sealing the space with a vapor barrier in addition to insulating) or a more targeted insulation-only approach on the subfloor. Full encapsulation is a bigger project but addresses moisture and pest issues more comprehensively; a targeted approach is a lower-cost option for crawl spaces without significant moisture problems. We'll assess your specific crawl space and recommend the right scope rather than defaulting to the most expensive option.",
        ],
      },
      {
        heading: "What to Expect on Installation Day",
        body: [
          "Crawl space work involves confined-space access, so we'll walk the space (or review photos/video if direct access is limited) before quoting to understand square footage, moisture conditions, and any existing insulation that needs to come out first. Installation itself is typically completed in a single day for residential crawl spaces, with proper ventilation and cure time built into the schedule before the space is closed back up.",
        ],
      },
      {
        heading: "Signs Your Crawl Space Needs Attention",
        body: [
          "Cold floors in winter directly above the crawl space, a musty smell in ground-floor rooms, visible moisture or sagging insulation when the crawl space is inspected, and unexplained increases in heating or cooling costs are all common signs that a crawl space is underperforming. Pest activity is another indicator worth taking seriously — gaps large enough to let air and moisture through a crawl space are often large enough for rodents and insects too.",
        ],
      },
    ],
    faq: [
      { q: "Does spray foam in a crawl space cause moisture problems?", a: "Properly installed spray foam, matched to the right vapor-permeability rating for your specific crawl space, doesn't trap moisture the way people sometimes assume — the real risk comes from mismatched materials or skipping ventilation assessment, which is why we evaluate moisture conditions before recommending a specific approach." },
      { q: "Do you handle crawl space encapsulation, or just insulation?", a: "We handle both — a targeted insulation-only approach for crawl spaces without significant moisture issues, or a full encapsulation with vapor barrier for spaces that need more comprehensive treatment." },
    ],
    relatedSlugs: ["attic-insulation", "insulation-removal-repair"],
  },

  "spray-foam-roofing": {
    slug: "spray-foam-roofing",
    image: "/images/service-roofing.jpg",
    intro:
      "Roofline insulation is a different job than attic-floor insulation, and it matters for a specific set of homes: vaulted or cathedral ceilings with no traditional attic space above them, conditioned attics designed to bring HVAC equipment inside the insulated envelope, and roofs that need both thermal performance and an added layer of protection against southern Utah's intense summer sun and occasional monsoon-season downpours.",
    sections: [
      {
        heading: "Why Roofline Application Is Different From Attic-Floor Insulation",
        body: [
          "When a home has a vaulted ceiling, there's no flat attic floor to insulate — the insulation has to go directly against the underside of the roof deck, following the same slope as the ceiling below it. This application method seals the entire roof assembly as one continuous air barrier, rather than insulating a horizontal plane below an open attic space. It's also the approach used for conditioned (unvented) attics, where the goal is bringing the whole attic volume — including any ductwork or HVAC equipment inside it — into the home's conditioned envelope instead of leaving it exposed to outdoor temperature swings.",
        ],
      },
      {
        heading: "Closed-Cell Foam and Roof Protection",
        body: [
          "Roofline applications typically call for closed-cell spray foam specifically, because its higher density and moisture resistance matter more on a roof deck than they do on an attic floor. Closed-cell foam also adds a measurable amount of structural rigidity to the roof assembly, which can be a genuine benefit on older roof decks or in areas that see occasional high wind. Beyond insulation performance, a well-applied closed-cell foam roof application creates a continuous seal that resists moisture intrusion at seams and penetrations — a real consideration in a climate that swings between intense dry heat and sudden, heavy monsoon rain.",
        ],
      },
      {
        heading: "Vaulted Ceilings and Conditioned Attics",
        body: [
          "Homes with vaulted or open-beam ceilings are common in parts of the Zion gateway region, and they present a specific insulation challenge: there's often minimal cavity depth to work with, which makes an efficient, high-R-value-per-inch material like closed-cell spray foam a practical fit where thicker batt insulation simply won't fit the available space. For conditioned attic conversions, roofline spray foam is typically paired with sealing all attic vents, since the goal is bringing the space fully inside the building envelope rather than keeping it vented to the outside.",
        ],
      },
      {
        heading: "What to Expect on Installation Day",
        body: [
          "Roofline projects require careful attention to ventilation requirements and local building code, since improperly designed unvented roof assemblies can create moisture problems if the assembly isn't detailed correctly. We assess your specific roof structure, existing ventilation, and code requirements before recommending a vented or unvented approach, then apply the foam in controlled passes to the correct thickness. Most residential roofline projects are completed in one to two days depending on square footage and roof complexity.",
        ],
      },
      {
        heading: "Who This Is For",
        body: [
          "This service fits homes with vaulted or cathedral ceilings and no traditional flat attic, homeowners converting a vented attic to a conditioned one, and anyone whose roof assembly needs both insulation and an added moisture barrier. If your home has a standard flat attic floor with room to insulate horizontally, our Attic Insulation service is usually the more cost-effective option — we'll tell you honestly which one fits your specific roof.",
        ],
      },
    ],
    faq: [
      { q: "Do I need roofline insulation, or is attic-floor insulation enough?", a: "It depends on your roof structure — if you have a standard flat attic with a floor to insulate, attic-floor insulation is usually more cost-effective. Roofline insulation is for vaulted ceilings, conditioned attic conversions, or roofs where the attic floor isn't a practical insulation plane." },
      { q: "Does spray foam roofing require special ventilation?", a: "Unvented (conditioned) roof assemblies require correct detailing to avoid moisture problems — we assess your specific structure and local code requirements before recommending an approach, and design the ventilation strategy accordingly." },
    ],
    relatedSlugs: ["attic-insulation", "metal-building-insulation"],
  },

  "metal-building-insulation": {
    slug: "metal-building-insulation",
    image: "/images/service-metal-building.jpg",
    intro:
      "Metal shops, pole barns, and agricultural buildings are a real, common part of the built landscape across Washington County and the surrounding Zion gateway region — and metal buildings have insulation needs that residential attic or crawl space work doesn't fully cover. Spray foam is the standard solution for a metal building for a specific reason: it's one of the only insulation materials that solves the condensation problem metal buildings are prone to, not just the temperature-control problem.",
    sections: [
      {
        heading: "Why Metal Buildings Need a Different Approach",
        body: [
          "Metal conducts heat and cold far more efficiently than a wood-framed wall or roof, and it also encourages condensation when warm, moist interior air contacts a cold metal surface — a phenomenon commonly called \"sweating\" in metal building circles. That condensation drips onto equipment, stored materials, livestock, or vehicles depending on how the building is used, and left unaddressed it leads to rust, mold, and material damage over time. Traditional fiberglass batts don't stop this condensation problem, because they don't create a continuous air seal against the metal surface — spray foam does, which is why it's become the standard insulation choice for pole barns, agricultural buildings, and metal shops in climates with real temperature swings like southern Utah's.",
        ],
      },
      {
        heading: "Closed-Cell Foam for Metal Buildings",
        body: [
          "Metal building applications typically call for closed-cell spray foam, applied directly to the interior of the metal panels. Closed-cell foam's higher density creates a genuine vapor barrier against the metal surface, which is what actually stops the condensation problem rather than just slowing heat transfer. It also adds structural rigidity to the building shell — a real, if secondary, benefit for pole barns and metal shops that weren't engineered with additional interior bracing.",
        ],
      },
      {
        heading: "What This Service Covers",
        body: [
          "We insulate metal shop buildings, pole barns, agricultural structures, and other metal-frame commercial or personal-use buildings across the region. Applications range from a single-bay shop to larger agricultural or commercial structures, and we size the project — foam thickness, coverage area, and any specific condensation-prone zones like near large doors or unheated sections — to your building's actual use case rather than a one-size-fits-all approach.",
        ],
      },
      {
        heading: "Working Buildings vs. Climate-Controlled Buildings",
        body: [
          "Not every metal building needs the same insulation strategy. A working shop that's occasionally heated or cooled has different requirements than a fully climate-controlled space used for storage of temperature-sensitive equipment, or a barn housing livestock that needs year-round temperature moderation without full HVAC. We'll talk through how you actually use the building — and what problems you're trying to solve, whether that's condensation, energy cost, comfort, or all three — before recommending a specific scope.",
        ],
      },
      {
        heading: "What to Expect on Installation Day",
        body: [
          "Metal building projects are quoted based on square footage and building complexity (roof pitch, number of large openings, existing insulation if any). Installation typically takes one to several days depending on building size. We coordinate access and timing around your building's actual use, since many metal shops and barns need to stay at least partially operational during the project.",
        ],
      },
    ],
    faq: [
      { q: "Will spray foam actually stop condensation (\"sweating\") in my metal building?", a: "Yes — that's the primary reason closed-cell spray foam is the standard choice for metal buildings. It creates a continuous vapor barrier directly against the metal surface, which is what actually prevents condensation, unlike batt insulation that leaves gaps for moist air to reach the cold metal." },
      { q: "Can you insulate an existing metal building, or only new construction?", a: "Both — we insulate metal buildings during construction and as a retrofit on existing structures, including buildings with prior insulation that's failed or was never installed correctly." },
    ],
    relatedSlugs: ["new-construction-insulation", "insulation-removal-repair"],
  },

  "new-construction-insulation": {
    slug: "new-construction-insulation",
    image: "/images/service-new-construction.jpg",
    intro:
      "Insulating during new construction is a fundamentally different opportunity than retrofitting an existing home — the framing is open, every cavity is fully accessible, and there's no existing insulation, ductwork clutter, or finished drywall to work around. For builders and homeowners building new in the St. George area and across the Zion gateway region, that access is the chance to get the building envelope right from the start instead of upgrading it years later.",
    sections: [
      {
        heading: "Why New Construction Is the Best Time to Install Spray Foam",
        body: [
          "Retrofitting spray foam into an existing home means working around finished walls, existing electrical and plumbing runs, and limited access to some cavities — all solvable, but all adding time and cost compared to installing into open framing. New construction removes those constraints entirely. Every wall cavity, roofline, and rim joist is fully accessible, which means more complete, more consistent coverage and a genuinely continuous air barrier across the whole building envelope, not just the areas that were easiest to reach in a retrofit.",
        ],
      },
      {
        heading: "Working With Builders",
        body: [
          "We work directly with builders and general contractors on new-construction projects, coordinating our stage of the build with framing, rough electrical and plumbing, and pre-drywall inspections. Spray foam insulation typically goes in after rough-in is complete and inspected but before drywall, which means scheduling matters — we coordinate directly with your build timeline rather than requiring you to work around ours. If you're a builder managing multiple projects or phases, we can also discuss a standing arrangement for insulation across your build schedule rather than quoting each project one at a time.",
        ],
      },
      {
        heading: "What Homeowners Building New Should Know",
        body: [
          "If you're building a custom home and choosing your own insulation rather than going with whatever your builder defaults to, spray foam is worth strong consideration specifically because of southern Utah's climate — the same air-sealing and dual-direction thermal performance that makes it valuable in a retrofit matters even more when you're deciding how to build the envelope from scratch. It's also worth discussing with your builder or architect early, since spray foam's rigidity and the way it seals cavities can affect certain framing and mechanical decisions that are much easier to design around from the start than to retrofit later.",
        ],
      },
      {
        heading: "Open-Cell, Closed-Cell, or a Hybrid Approach",
        body: [
          "New construction gives us the flexibility to design the insulation system to the building rather than working within an existing structure's constraints. That often means a hybrid approach — closed-cell foam in areas that benefit most from its higher R-value and moisture resistance (roofline, below-grade, or exterior-facing walls), open-cell foam in interior applications where sound dampening matters more than moisture resistance, and attention to how the whole system works together as a continuous envelope rather than treating each area in isolation.",
        ],
      },
      {
        heading: "What to Expect on Installation Day",
        body: [
          "New construction projects are quoted based on square footage and the specific insulation plan for the building — which areas get closed-cell, which get open-cell, and any additional considerations for conditioned attics or unusual framing. We coordinate with your builder's schedule and typically complete the insulation stage within the timeline allotted before drywall begins, minimizing any impact to the overall build schedule.",
        ],
      },
    ],
    faq: [
      { q: "Do you work with builders directly, or only with homeowners?", a: "Both — we regularly coordinate directly with builders and general contractors on new-construction projects, and we also work with homeowners who are selecting their own insulation for a custom build." },
      { q: "Is spray foam more expensive than standard insulation for new construction?", a: "The material and installation cost more upfront than batt insulation, but for new construction specifically, the labor efficiency of spraying into open framing partially offsets that difference, and the long-term energy savings continue to add up over the life of the building." },
    ],
    relatedSlugs: ["metal-building-insulation", "attic-insulation"],
  },
};
