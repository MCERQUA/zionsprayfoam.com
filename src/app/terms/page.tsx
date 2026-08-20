import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | Zion Spray Foam",
  description: "Terms of use for zionsprayfoam.com, operated by Zion Spray Foam.",
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms of Use", path: "/terms/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="font-head text-3xl sm:text-4xl font-bold text-ink leading-tight mb-3">Terms of Use</h1>
          <p className="text-inkSoft text-sm">Effective date: August 20, 2026</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
          <p className="text-inkSoft leading-relaxed">
            Welcome to {SITE.domain} (the &quot;Site&quot;), operated by {SITE.name} (&quot;we,&quot;
            &quot;us&quot;). By using this Site, you agree to these Terms of Use.
          </p>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Quotes and Service</h2>
            <p className="text-inkSoft leading-relaxed">
              Submitting a form on this Site is a quote request, not a confirmed booking or
              binding estimate — final pricing is confirmed after we review your project details
              and, for larger or more complex projects, complete an in-person assessment. Scope,
              materials, and pricing for your specific project will be confirmed directly before
              any work begins.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Use of the Site</h2>
            <p className="text-inkSoft leading-relaxed">
              You agree to use this Site only for lawful purposes. You may not attempt to
              interfere with the Site&apos;s normal operation, misuse any form on the Site, or
              submit false information through any form for fraudulent purposes.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Intellectual Property</h2>
            <p className="text-inkSoft leading-relaxed">
              The content, design, and organization of this Site are the property of {SITE.name}{" "}
              unless otherwise noted. You may view and reference this content for personal or
              business informational use, but may not republish, redistribute, or reproduce
              substantial portions of this Site&apos;s content without our permission.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">No Warranty</h2>
            <p className="text-inkSoft leading-relaxed">
              This Site and its content are provided &quot;as is,&quot; without warranties of any
              kind, express or implied. Installation timelines, material availability, and
              project-specific factors can vary; specifics for your project will be confirmed
              directly with you as part of the quote and scheduling process.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Limitation of Liability</h2>
            <p className="text-inkSoft leading-relaxed">
              To the fullest extent permitted by law, {SITE.name} is not liable for any damages
              arising from your use of, or reliance on, this Site&apos;s content, separate from
              any service agreement terms confirmed directly for a booked project.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Third-Party Links</h2>
            <p className="text-inkSoft leading-relaxed">
              This Site may reference or link to third-party resources. We are not responsible
              for the content or accuracy of third-party sites.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Service Area</h2>
            <p className="text-inkSoft leading-relaxed">
              Services described on this Site are provided within our stated service area in
              southwestern Utah. Requests from outside that area may be evaluated on a
              case-by-case basis and are not guaranteed to be accepted.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Changes to These Terms</h2>
            <p className="text-inkSoft leading-relaxed">
              We may update these Terms of Use from time to time. Continued use of the Site after
              changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="rounded-xl bg-paperRaised border border-ink/10 p-6">
            <h2 className="font-head text-lg font-bold text-ink mb-2">Contact Us</h2>
            <p className="text-sm text-inkSoft leading-relaxed">
              {SITE.name}<br />
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br />
              Phone: <a href={SITE.phoneHref} className="text-canyon">{SITE.phone}</a><br />
              Email: <a href={`mailto:${SITE.email}`} className="text-canyon">{SITE.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
