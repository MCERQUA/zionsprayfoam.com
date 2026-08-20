# Stitch design generation log — zionsprayfoam.com

Executed directly (fork), not via a further sub-delegation, per fork rules.

## Project
- `create_project` with title "Zion Spray Foam Insulation" (with punctuation/full descriptive
  title) failed with "Request contains an invalid argument." Retried with simpler title "Zion
  Spray Foam" — succeeded. Project: `projects/3913852371772412673`.

## Design system
- First attempt used `headlineFont: ROBOTO_SLAB`, `bodyFont: NUNITO_SANS` per the design brief —
  failed with "Request contains an invalid argument." (matches the pattern from every prior build
  this session: FRAUNCES and BITTER were both rejected too — Stitch's font enum is much more
  restrictive than the site's actual intended typography).
- Retried with `headlineFont: SPACE_GROTESK`, `bodyFont: WORK_SANS` (the known-working fallback
  from prior builds this session) — succeeded. Design system: `assets/5527617023268617922`
  ("Canyon Foam", LIGHT mode, customColor `#A03D24`).
- **The real coded build must apply the intended Roboto Slab / Nunito Sans pairing directly via
  next/font/google** — do not copy Stitch's rendered SPACE_GROTESK/WORK_SANS fonts literally.

## Screens — 4/4 generated successfully, zero retries needed beyond the two setup failures above
| Slug | HTML size | Screenshot size |
|---|---|---|
| home.html | 23,464 B | 54,543 B |
| attic-insulation.html | 25,465 B | 68,564 B |
| metal-building-insulation.html | 31,841 B (post-scrim-fix) | 64,450 B |
| get-a-quote.html | 16,604 B | 75,006 B |

All confirmed present on disk via `ls .stitch-pages/*.html`, all nonzero.

## Prompts used (abbreviated — full text in the generate calls)
- HOME: hero (H1 "Spray Foam Insulation for St. George & the Zion National Park Region", CTA
  "Get a Free Quote", phone top-right), trust bar, overview, 6-card service grid, why-choose-us,
  service-area section, FAQ preview, final CTA, footer.
- attic-insulation.html: page H1, "why attic insulation matters in this climate", what's-included,
  FAQ, related cross-links, CTA band.
- metal-building-insulation.html: page H1, "why pole barns and metal shops need spray foam",
  what's-included, FAQ, related cross-links, CTA band.
- get-a-quote.html: hero, 4-field form placeholder (Name, Phone, Property Type, Service Needed),
  trust section, what-happens-next steps.

## Scrim scan (pre-deploy gate checks for `absolute inset-0` overlays with any color-stop below
50% opacity)
- **home.html line 86:** `bg-gradient-to-r from-surface via-surface/90 to-surface/20` — weakest
  stop 20%. Inspected context: the H1/hero copy sits in the LEFT column of a 2-column grid, where
  the gradient is strongest (from-surface = ~opaque, via-surface/90 = 90%); the weak 20% stop is
  on the FAR RIGHT edge where the background image shows through, away from any text. Likely a
  false positive for the gate's non-spatial static check, but fixed anyway for consistency with
  every prior build this session and to keep the gate clean: raised the weak stop from `/20` to
  `/55`.
- attic-insulation.html line 318 and metal-building-insulation.html line 340: decorative
  opacity-10 background patterns (SVG data-URI dot grid / radial-gradient dot pattern) — do not
  match the gate's `(from|via|to|bg)-color/N` Tailwind-class regex (one uses `bg-[url(...)]` with
  a separate `opacity-10` utility, the other uses an inline `style` radial-gradient), so neither
  is a scrim-behind-text case and neither should trip the gate.
- metal-building-insulation.html line 131: `from-on-primary-container/95 via-on-primary-container/80
  to-transparent` — weakest numeric stop is 80%, well above the 50% floor. Fine as-is.
- get-a-quote.html: no `absolute inset-0` gradient/overlay found at all.

Net: one scrim fix applied (home.html), no other issues found.
