import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Zion Spray Foam",
  description: "Questions about a spray foam insulation project in southern Utah? Contact Zion Spray Foam. Call 844-967-5247.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-canyon font-semibold text-sm uppercase tracking-wide mb-3">Contact</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6">
            Contact Zion Spray Foam
          </h1>
          <p className="text-lg text-inkSoft leading-relaxed max-w-2xl">
            Have a question about a specific project, whether we serve your area, or what type
            of insulation fits your situation? Reach out directly, or use the form below and
            we&apos;ll get back to you promptly.
          </p>
          <p className="text-inkSoft leading-relaxed max-w-2xl mt-4">
            If you&apos;re ready to get pricing on a specific project, the fastest path is the{" "}
            <Link href="/get-a-quote/" className="text-canyon underline font-semibold">
              Get a Free Quote
            </Link>{" "}
            request form instead — this contact form is best for general questions that
            don&apos;t need a full project quote yet.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-6">Direct Contact</h2>
            <div className="space-y-4 mb-8">
              <a href={SITE.phoneHref} className="flex items-center gap-3 text-ink hover:text-canyon transition-colors">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-canyon/10 text-canyon shrink-0">
                  <Phone size={18} />
                </span>
                <span className="font-semibold">{SITE.phone}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-ink hover:text-canyon transition-colors">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-canyon/10 text-canyon shrink-0">
                  <Mail size={18} />
                </span>
                <span className="font-semibold">{SITE.email}</span>
              </a>
              <div className="flex items-start gap-3 text-ink">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-canyon/10 text-canyon shrink-0">
                  <MapPin size={18} />
                </span>
                <span className="font-semibold">
                  {SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-paperRaised border border-ink/10 p-5 mb-6">
              <p className="text-sm text-inkSoft leading-relaxed">
                <strong className="text-ink">What we can help with:</strong> whether a specific
                property type (metal building, existing home, new construction) fits our
                services, whether open-cell or closed-cell foam makes more sense for a specific
                application, and general questions about how the quoting and installation
                process works.
              </p>
            </div>

            <p className="text-sm text-inkSoft">
              {SITE.name} serves St. George, Hurricane, Washington, Springdale, Ivins, Santa
              Clara, and the greater Cedar City area. We aim to respond within one business day —
              for a time-sensitive project, calling directly is fastest.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
