import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote | Zion Spray Foam",
  description: "Request a spray foam insulation quote for your southern Utah property. Call 844-967-5247.",
};

const NEXT_STEPS = [
  { title: "We'll reach out", body: "Usually within one business day, to confirm your property type and the space needing insulation." },
  { title: "We give you a real estimate", body: "Most residential jobs from a conversation and a few photos; larger projects get an in-person walkthrough." },
  { title: "No sight-unseen guessing", body: "Complex or removal/repair projects get a proper look before we commit to a number." },
  { title: "No obligation", body: "Requesting a quote starts a conversation about what your property actually needs." },
];

export default function GetAQuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Get a Free Quote", path: "/get-a-quote/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-canyon font-semibold text-sm uppercase tracking-wide mb-3">Get a Quote</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6 max-w-3xl">
            Get a Free Quote
          </h1>
          <p className="text-lg text-inkSoft leading-relaxed max-w-2xl">
            Tell us about your property and what you need insulated, and we&apos;ll follow up
            with a straightforward estimate — no pressure, no obligation.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-10">
            <div>
              <h2 className="font-head text-2xl font-bold text-ink mb-4">What Happens After You Submit</h2>
              <ul className="space-y-4">
                {NEXT_STEPS.map((step) => (
                  <li key={step.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-sage shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ink">{step.title}</p>
                      <p className="text-sm text-inkSoft leading-relaxed">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-head text-2xl font-bold text-ink mb-4">What to Have Ready</h2>
              <p className="text-inkSoft leading-relaxed">
                Knowing your property type (residential, new construction, metal building, or
                commercial), which space needs insulation (attic, crawl space, roofline, or a
                full metal building shell), and roughly how soon you&apos;re looking to move
                forward helps us give you accurate information faster. If you&apos;re not sure
                exactly what your property needs, that&apos;s fine too — describe the problem
                you&apos;re trying to solve and we&apos;ll help you figure out the right service.
              </p>
            </div>

            <div className="rounded-xl bg-paperRaised border border-sage/20 p-5">
              <p className="text-sm text-inkSoft leading-relaxed">
                We&apos;re upfront that a straightforward attic or crawl space quote can often be
                handled over the phone or with a few photos, but larger, more complex, or
                removal/repair projects need an in-person look before we commit to a number —
                guessing at scope on a project with unknown moisture damage or existing
                insulation condition doesn&apos;t do either of us any favors.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-ink/10 p-5">
              <p className="text-sm text-inkSoft leading-relaxed">
                {SITE.name} is licensed and insured for residential and commercial spray foam
                insulation work across the Zion gateway region of southwestern Utah.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
