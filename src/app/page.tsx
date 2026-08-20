import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, ArrowRight, Layers, Waves, CloudRain, Warehouse, Hammer, Wrench,
  ClipboardCheck, ShieldCheck, Sparkles, MapPin,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBar from "@/components/TrustBar";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, SERVICES, FAQS, SERVICE_AREAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spray Foam Insulation for St. George & the Zion National Park Region",
  description:
    "Zion Spray Foam installs residential and commercial spray foam insulation across Washington County and the Zion National Park gateway region. Call 844-967-5247.",
};

const SERVICE_ICONS: Record<string, typeof Layers> = {
  "attic-insulation": Layers,
  "crawl-space-insulation": Waves,
  "spray-foam-roofing": CloudRain,
  "metal-building-insulation": Warehouse,
  "new-construction-insulation": Hammer,
  "insulation-removal-repair": Wrench,
};

const PROCESS = [
  { icon: ClipboardCheck, title: "Request a quote", body: "Tell us your property type and what needs insulating — we'll confirm scope and give you a straightforward estimate." },
  { icon: ShieldCheck, title: "We assess the space", body: "Attic, crawl space, roofline, or building shell — we confirm square footage and any moisture or ventilation issues first." },
  { icon: Sparkles, title: "We install", body: "Foam applied to the correct thickness for your application, protecting surrounding surfaces, with proper cure time built in." },
  { icon: MapPin, title: "You get performance that lasts", body: "Spray foam doesn't sag or settle the way batt insulation does — the seal you get on day one is the seal you keep." },
];

const FAQ_PREVIEW = FAQS.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      {/* Hero — full-bleed image with scrim */}
      <section className="relative">
        <div className="relative h-[560px] sm:h-[600px]">
          <Image src="/images/hero-homepage.jpg" alt="Spray foam insulation being applied in an attic" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-bluff/95 via-bluff/80 to-bluff/55" />
          <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              <p className="text-ochre font-semibold text-sm uppercase tracking-wide mb-4">
                Spray Foam Insulation — Southern Utah
              </p>
              <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Spray Foam Insulation for St. George &amp; the Zion Gateway Region
              </h1>
              <p className="text-paper/85 text-lg leading-relaxed mb-8">
                Zion Spray Foam installs residential and commercial spray foam insulation across
                Washington County and the Zion National Park gateway — built for southern
                Utah&apos;s extreme summer heat and real high-desert winter swings. Licensed,
                insured, and local.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/get-a-quote/" className="rounded-full bg-canyon px-8 py-3.5 text-sm font-bold text-white hover:bg-canyonDark transition-colors">
                  Get a Free Quote
                </Link>
                <a href="#services" className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                  See Our Services
                </a>
              </div>
              <a href={SITE.phoneHref} className="mt-6 flex items-center gap-2 text-white font-bold text-lg hover:text-ochre transition-colors w-fit">
                <Phone size={20} className="text-ochre" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Overview */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-6">
            What Spray Foam Insulation Actually Does — and Why It Fits This Climate
          </h2>
          <p className="text-inkSoft leading-relaxed mb-4">
            Spray foam insulation isn&apos;t just a thicker version of the batt insulation most
            southern Utah homes were originally built with. It&apos;s a two-part liquid that
            expands on contact, filling every gap, seam, and stud cavity it touches, then cures
            into a solid air barrier and thermal barrier at the same time. That distinction —
            air barrier <em>and</em> thermal barrier in one material — is the whole reason it
            performs differently than fiberglass batts or blown-in cellulose, which slow heat
            transfer but do almost nothing to stop air from leaking through the small gaps
            around them.
          </p>
          <p className="text-inkSoft leading-relaxed mb-4">
            That difference matters more here than it does in most of the country. Southern Utah
            runs two genuinely different insulation problems in the same year: summer highs that
            regularly push past 100 degrees in St. George and the lower elevations, and winter
            nights in Hurricane, Washington, and especially the higher elevations toward Cedar
            City that drop well below freezing. Spray foam&apos;s air-sealing property works the
            same way regardless of which direction the temperature difference is running, which
            is exactly what a climate with a 60-plus degree annual swing actually needs.
          </p>
          <p className="text-inkSoft leading-relaxed">
            There&apos;s also a wind and dust factor that&apos;s easy to overlook. Southern
            Utah&apos;s red-rock terrain generates real wind-driven dust and sand, and older or
            poorly sealed homes in this region often show it. We install both open-cell and
            closed-cell spray foam, and which one makes sense depends on the application — we&apos;ll
            walk through which fits your project when you request a quote.
          </p>
        </div>
      </section>

      {/* Service grid */}
      <section id="services" className="bg-paperRaised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-3 text-center">
            Our Services
          </h2>
          <p className="text-inkSoft text-center max-w-2xl mx-auto mb-12">
            Residential and commercial spray foam insulation for every application across the
            Zion gateway region.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug] ?? Layers;
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/`}
                  className="group flex flex-col rounded-2xl bg-white border border-ink/10 p-6 hover:border-canyon hover:shadow-md transition-all"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-canyon/10 text-canyon mb-4">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-head font-bold text-ink mb-2 group-hover:text-canyon transition-colors">
                    {s.navLabel}
                  </h3>
                  <p className="text-sm text-inkSoft leading-relaxed mb-4 flex-1">{s.teaser}</p>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-canyon">
                    Learn more <ArrowRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose spray foam — inverted band */}
      <section className="bg-bluff">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-white mb-6">
            Why Choose Spray Foam Over Traditional Insulation
          </h2>
          <p className="text-paper/80 leading-relaxed mb-4">
            Batt and blown-in insulation are cheaper up front, and for some applications,
            that&apos;s a legitimate reason to choose them. But they&apos;re air-permeable by
            design — they slow conductive heat transfer, but they don&apos;t stop air
            infiltration, which in a climate with southern Utah&apos;s temperature swings and
            dust-laden wind is often where the real energy loss happens. Spray foam costs more to
            install, but it addresses both problems at once.
          </p>
          <p className="text-paper/80 leading-relaxed">
            There&apos;s a durability angle too. Batt insulation can sag, settle, or get
            compressed over time. Spray foam adheres directly to the surface it&apos;s applied to
            and doesn&apos;t sag or settle the same way, so the performance you get on install
            day is closer to the performance you still get years later.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-12 text-center">
            What a Real Installation Looks Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl bg-paperRaised border border-ink/10 p-6">
                <span className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 rounded-full bg-canyon text-white text-sm font-bold">
                  {i + 1}
                </span>
                <step.icon size={22} className="text-sage mb-4" />
                <h3 className="font-head font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-inkSoft leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-4 text-center">
            Serving Washington County &amp; the Zion Gateway Region
          </h2>
          <p className="text-inkSoft text-center max-w-2xl mx-auto mb-10">
            Wherever your property is in this corridor, we can very likely get to you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="flex items-center gap-1.5 rounded-full bg-white border border-ink/10 px-4 py-2 text-sm font-medium text-ink">
                <MapPin size={14} className="text-canyon" /> {area}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas/" className="text-canyon font-semibold hover:underline">
              See the full coverage map →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={FAQ_PREVIEW} />
          <div className="text-center mt-8">
            <Link href="/faq/" className="text-canyon font-semibold hover:underline">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-bluff">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready for Insulation That Actually Matches This Climate?
          </h2>
          <p className="text-paper/75 mb-8 max-w-2xl mx-auto">
            Tell us about your property and what you&apos;re looking for, and we&apos;ll put
            together a straightforward quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-a-quote/" className="rounded-full bg-canyon px-8 py-3.5 text-sm font-bold text-white hover:bg-canyonDark transition-colors">
              Get a Free Quote
            </Link>
            <a href={SITE.phoneHref} className="flex items-center gap-2 rounded-full border border-paper/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors">
              <Phone size={16} className="text-ochre" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
