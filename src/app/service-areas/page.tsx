import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { breadcrumbSchema } from "@/lib/schema";
import { SERVICE_AREAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Spray Foam Insulation Across the Zion Gateway Region",
  description: "Zion Spray Foam installs spray foam insulation across Washington County and the Zion National Park gateway region of southwestern Utah.",
};

const AREA_DETAIL: Record<string, string> = {
  "St. George": "our core service area, residential and commercial projects across the city",
  "Hurricane": "homes, new construction, and metal buildings along the Hurricane corridor",
  "Washington": "residential and new-construction insulation in one of the area's fastest-growing communities",
  "Springdale": "the Zion National Park gateway town itself, residential and short-term-rental properties",
  "Ivins": "residential insulation across Ivins and the Kayenta/Tuacahn area",
  "Santa Clara": "residential and commercial projects throughout Santa Clara",
  "Cedar City": "extending service north to Cedar City and the surrounding Iron County area",
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-canyon font-semibold text-sm uppercase tracking-wide mb-3">Service Areas</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6">
            Spray Foam Insulation Service Areas — Serving the Zion Gateway Region
          </h1>
          <p className="text-lg text-inkSoft leading-relaxed max-w-2xl">
            Zion Spray Foam installs residential and commercial spray foam insulation across
            Washington County and the broader Zion National Park gateway region of southwestern
            Utah. Wherever your property is in this corridor, we can very likely get to you —
            here&apos;s the core area we serve.
          </p>
        </div>
      </section>

      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <Image src="/images/southwest-desert-mood.jpg" alt="Southwestern Utah red-rock desert landscape" fill className="object-cover" priority />
      </div>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-head text-2xl font-bold text-ink mb-8">Cities and Areas We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_AREAS.map((area) => (
              <div key={area} className="rounded-xl bg-white border border-ink/10 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={18} className="text-canyon shrink-0" />
                  <h3 className="font-head font-bold text-ink">{area}</h3>
                </div>
                <p className="text-sm text-inkSoft leading-relaxed">{AREA_DETAIL[area]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">How Service Area Affects Your Project</h2>
            <p className="text-inkSoft leading-relaxed">
              Every project we quote includes travel and scheduling as part of the estimate,
              regardless of which city in our service area you&apos;re in — the main thing that
              changes by location is scheduling lead time, not whether we can take on your
              project. If your property is outside this core list but still within reasonable
              range of the Zion gateway region, reach out anyway — we can often accommodate
              properties beyond this list on a case-by-case basis, especially for larger
              commercial or metal building projects.
            </p>
          </div>
          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Residential and Commercial, Across the Region</h2>
            <p className="text-inkSoft leading-relaxed">
              We work on single-family homes, new-construction builds, metal shops and pole
              barns, and commercial buildings throughout Washington County and the surrounding
              area. Property type matters more for scheduling and crew size than for whether we
              can serve your location — tell us what you&apos;re working with when you request a
              quote and we&apos;ll take it from there.
            </p>
          </div>
          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">A Region With a Genuinely Demanding Climate</h2>
            <p className="text-inkSoft leading-relaxed">
              The Zion gateway region isn&apos;t a single, uniform climate — St. George and the
              lower-elevation communities run hot, dry desert summers with mild winters, while
              areas toward Cedar City and higher elevations see real winter cold and occasional
              snow. That range is exactly why we don&apos;t treat insulation as a one-size-fits-all
              product across our service area: a home in St. George and a barn near Cedar City
              may call for different foam types or application approaches, and we account for
              that in every quote rather than applying a single regional default.
            </p>
          </div>
        </div>
      </section>

      <CtaBand heading="Confirm We Serve Your Property" />
    </>
  );
}
