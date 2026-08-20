import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Zion Spray Foam",
  description: "How Zion Spray Foam collects and uses information submitted through zionsprayfoam.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="font-head text-3xl sm:text-4xl font-bold text-ink leading-tight mb-3">Privacy Policy</h1>
          <p className="text-inkSoft text-sm">Effective date: August 20, 2026</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
          <p className="text-inkSoft leading-relaxed">
            {SITE.name} (&quot;we,&quot; &quot;us&quot;) operates {SITE.domain} (the
            &quot;Site&quot;). This Privacy Policy explains what information we collect through
            the Site and how we use it.
          </p>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Information We Collect</h2>
            <p className="text-inkSoft leading-relaxed mb-3">
              <strong className="text-ink">Information you provide directly.</strong> When you
              submit a form on this Site — including the Get a Free Quote request form or the
              general contact form — we collect the information you enter, which may include your
              name, phone number, email address, property type, service needed, and any message
              or details you provide.
            </p>
            <p className="text-inkSoft leading-relaxed">
              <strong className="text-ink">Automatically collected information.</strong> Like most
              websites, this Site may collect basic technical information automatically, such as
              your browser type, general location (derived from IP address), pages visited, and
              referring website — used to understand how the Site is used and to identify how
              visitors found us.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">How We Use Your Information</h2>
            <p className="text-inkSoft leading-relaxed">
              We use the information you submit to respond to your quote request or inquiry,
              schedule an assessment or installation, and provide the requested service. We do
              not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Form Submissions and Third-Party Services</h2>
            <p className="text-inkSoft leading-relaxed">
              Forms on this Site are processed through our website hosting provider&apos;s
              form-handling service. Submitted information is transmitted securely and used
              solely for the purposes described above.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Data Retention</h2>
            <p className="text-inkSoft leading-relaxed">
              We retain information submitted through this Site for as long as reasonably
              necessary to respond to your inquiry, complete a quoted project, and maintain
              appropriate business records.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Your Choices</h2>
            <p className="text-inkSoft leading-relaxed">
              You may contact us at any time to ask what information we hold about you, to
              request corrections, or to request deletion, subject to any legal or legitimate
              business recordkeeping requirements.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Children&apos;s Privacy</h2>
            <p className="text-inkSoft leading-relaxed">
              This Site is intended for business use by property owners, builders, and adults
              requesting insulation services, and is not directed to children under 13. We do not
              knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Changes to This Policy</h2>
            <p className="text-inkSoft leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated effective date.
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
