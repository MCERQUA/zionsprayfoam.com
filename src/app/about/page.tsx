import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Zion Spray Foam",
  description: "Residential and commercial spray foam insulation across the Zion National Park gateway region of southwestern Utah. Call 844-967-5247.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-canyon font-semibold text-sm uppercase tracking-wide mb-3">About</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            About Zion Spray Foam
          </h1>
        </div>
      </section>

      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <Image src="/images/about-crew.jpg" alt="Zion Spray Foam installation crew" fill className="object-cover" priority />
      </div>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-10">
          <p className="text-inkSoft leading-relaxed">
            Zion Spray Foam installs residential and commercial spray foam insulation across the
            Zion National Park gateway region of southwestern Utah — St. George, Hurricane,
            Washington, Springdale, Ivins, Santa Clara, and the greater Cedar City area.
          </p>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">What We Do</h2>
            <p className="text-inkSoft leading-relaxed">
              We install spray foam insulation in attics, crawl spaces, roof assemblies, metal
              buildings, and new construction, and we handle removal and repair when existing
              insulation — spray foam or otherwise — has failed or was never installed correctly.
              Every project starts with an honest assessment of what the space actually needs,
              not a default recommendation for whichever service happens to be easiest to sell.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Why We Focus on This Climate Specifically</h2>
            <p className="text-inkSoft leading-relaxed">
              Southern Utah&apos;s insulation needs aren&apos;t generic. The region runs
              genuinely extreme summer heat in the lower elevations, real winter cold at higher
              elevations toward Cedar City, wind-driven dust that finds its way through gaps
              traditional insulation leaves open, and a monsoon season that stresses roofs and
              building envelopes in ways slower, steadier rain climates don&apos;t. We built this
              business around understanding those specific conditions, not applying a
              one-size-fits-all national insulation playbook to a region that doesn&apos;t fit it.
            </p>
          </div>

          <div className="rounded-2xl bg-paperRaised border border-sage/20 p-6 sm:p-8">
            <h2 className="font-head text-xl font-bold text-ink mb-3">Licensed and Insured</h2>
            <p className="text-inkSoft leading-relaxed">
              We carry the licensing and insurance appropriate for residential and commercial
              spray foam installation work in Utah. That&apos;s a baseline expectation for any
              contractor working inside your home or business, and it&apos;s one we meet as a
              matter of course, not a selling point we lead with.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Residential and Commercial Both</h2>
            <p className="text-inkSoft leading-relaxed">
              Our work spans single-family homes, new-construction builds working directly with
              area builders, metal shops and pole barns common throughout the region&apos;s more
              rural and agricultural areas, and commercial buildings. That range means we see a
              lot of different insulation problems and applications, which shapes how we approach
              every new project — we&apos;re not applying residential-attic assumptions to a
              metal building job, or vice versa.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Our Approach to Quoting</h2>
            <p className="text-inkSoft leading-relaxed">
              We don&apos;t do sight-unseen quotes for anything beyond the most straightforward
              jobs, and we don&apos;t recommend removal or repair work on properties that
              don&apos;t actually need it. A quote from us reflects an honest look at your
              specific space — square footage, existing insulation condition, moisture or
              ventilation issues, and what you&apos;re actually trying to solve — rather than a
              generic per-square-foot number that ignores the details that actually drive cost
              and outcome.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-ink/10 p-6 sm:p-8">
            <h2 className="font-head text-xl font-bold text-ink mb-3">Serving the Zion Gateway Region</h2>
            <p className="text-inkSoft leading-relaxed mb-4">
              We work across St. George, Hurricane, Washington, Springdale, Ivins, Santa Clara,
              and the greater Cedar City area. See our{" "}
              <Link href="/service-areas/" className="text-canyon underline">Service Areas</Link>{" "}
              page for the full coverage picture, or just ask when you request a quote.
            </p>
            <p className="text-sm text-inkSoft">
              Call <a href={SITE.phoneHref} className="text-canyon font-semibold">{SITE.phone}</a> or
              email <a href={`mailto:${SITE.email}`} className="text-canyon font-semibold">{SITE.email}</a>.
              <br />
              {SITE.name} — {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
