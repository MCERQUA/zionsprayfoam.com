import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ServiceLayout from "@/components/ServiceLayout";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SERVICES, getService } from "@/lib/site";
import { SERVICE_CONTENT } from "@/content/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.metaTitle, description: service.metaDescription };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  const content = SERVICE_CONTENT[slug];
  if (!service || !content) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: service.navLabel, path: `/${service.slug}/` }]),
          faqSchema(content.faq),
        ]}
      />
      <ServiceLayout content={content} />
    </>
  );
}
