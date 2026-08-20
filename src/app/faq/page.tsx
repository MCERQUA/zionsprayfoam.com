import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ | Zion Spray Foam Insulation",
  description: "Answers to common questions about spray foam insulation — cost, materials, installation, and service area for southern Utah.",
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }]), faqSchema(FAQS)]} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-canyon font-semibold text-sm uppercase tracking-wide mb-3">FAQ</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            Frequently Asked Questions About Spray Foam Insulation
          </h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
