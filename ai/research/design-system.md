# Design System — zionsprayfoam.com

Light, warm, corporate-adjacent local-service aesthetic per FLAGSHIP "NOT DARK" override. Fourth
distinct palette + typography pairing this session (indemnity site: rust/forest/amber + Fraunces/
Inter; ski-machine site: copper/saguaro/gold + Fraunces/Inter; alpine academy site: gold/juniper/
rust + Bitter/Work Sans). This site draws its palette directly from Zion National Park's actual
sandstone canyon geology — deep canyon red, sage-green pinyon-juniper, warm ochre — while staying
strictly warm-earth (zero purple, even though Zion's slot canyons do show purple-ish shadow tones
in photos — deliberately not used here, staying on the red/orange/tan side per the hard rule).

## Palette (exact hexes, hue-verified against the palette gate)
| Token | Hex | Role |
|---|---|---|
| `canyon` (primary) | `#A03D24` | Primary brand accent — CTAs, links, active states (deep canyon-sandstone red) |
| `canyonDark` | `#7E2F1B` | Hover/pressed states on canyon |
| `sage` (secondary green) | `#6B7355` | Secondary accent — trust bar, badges (desert sage/pinyon-juniper green, more olive/gray than prior builds' greens) |
| `sageDark` | `#535A42` | Hover/pressed states on sage |
| `ochre` (accent) | `#C08A3E` | Sparingly — stat callouts, highlighted terms |
| `bluff` (inverted band) | `#2E1F16` | Dark band background — warm canyon-shadow brown |
| `paper` (base bg) | `#F5EDE0` | Page background — warm sandstone cream |
| `paperRaised` | `#EADFC9` | Elevated/tinted band background |
| `ink` (text) | `#2B2318` | Body text — warm dark brown-black |
| `inkSoft` | `#5D5343` | Secondary/muted text |

Hue check: canyon hue ≈12°, sage hue ≈76°, ochre hue ≈35°, bluff hue ≈24° — all warm-earth or
natural-green, zero overlap with the banned 255-340° purple/rose band, no blue gradients.

## Typography
- **Headline:** Roboto Slab — a sturdy slab serif evoking rock strata/canyon geology, genuinely
  distinct from Fraunces (used twice already this session) and Bitter.
- **Body:** Nunito Sans — clean, warm, rounded-friendly, pairs well with a slab headline without
  reading cold or overly corporate.

## Section rhythm
Rotate: `paper` base → `paperRaised` tinted band → `bluff` inverted band (trust bar / CTA) →
occasional full-bleed image band with a neutral dark scrim (never below 50% opacity where copy
sits). Cards use white/paperRaised surfaces with a thin canyon/sage accent border.

## Motif
Canyon rock strata / desert-Southwest: layered-rock visual language (lucide-react: `layers`,
`mountain`, `flame` (spray application), `thermometer` (energy efficiency/R-value), `home`,
`warehouse` (metal buildings/pole barns), `shield-check`). Photography style: real-feeling
Southwest desert home/jobsite imagery — red-rock backdrop, warm desert light, actual insulation
application and attic/crawl-space work — not generic stock-contractor clichés.

## Stitch design-director brief (used verbatim as the create_design_system designMd + generate prompts)
"Local residential and commercial spray foam insulation installer serving the Zion National Park
gateway region of southwestern Utah (St. George, Hurricane, Washington, Springdale, Cedar City).
Light, warm, professional — palette drawn from the region's actual red-rock canyon geology, not a
generic contractor blue/gray. Palette: deep canyon-sandstone red #A03D24 primary, desert sage/
pinyon-juniper green #6B7355 secondary, warm ochre #C08A3E sparingly, warm sandstone cream
#F5EDE0 background, canyon-shadow brown #2E1F16 for dark inverted bands (never pure black, never
navy, never purple even though Zion's slot canyons show purple shadow tones in photos — stay on
the red/orange/tan side only). Headline font: Roboto Slab (sturdy slab serif, rock-strata
character). Body font: Nunito Sans. Motif: canyon rock strata / layered-Southwest — layers,
mountain, flame, thermometer, home, warehouse iconography. Section rhythm: alternate cream base,
tinted band, and a canyon-shadow-brown inverted trust band — never two adjacent sections share a
background. Tone: professional, climate-savvy — speaks to homeowners and builders dealing with
southwestern Utah's extreme desert heat and high-desert winter temperature swings. Primary CTA
throughout: 'Get a Free Quote' or 'Request an Estimate'. Zero purple/pink/blue-gradient, zero
emoji as UI icons."
