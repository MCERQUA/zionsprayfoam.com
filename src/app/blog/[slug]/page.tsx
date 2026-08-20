import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { renderMarkdown } from "@/lib/markdown";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS, SERVICES } from "@/lib/site";
import { BLOG_BODY } from "@/content/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.metaTitle, description: post.metaDescription };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const body = BLOG_BODY[slug];
  if (!post || !body) notFound();

  const related = post.relatedServices
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter(Boolean) as typeof SERVICES;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: post.title, path: `/blog/${post.slug}/` }]),
          articleSchema({ headline: post.title, description: post.metaDescription, datePublished: post.date, path: `/blog/${post.slug}/` }),
        ]}
      />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="flex items-center gap-2 text-canyon font-semibold text-sm uppercase tracking-wide mb-3">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <h1 className="font-head text-3xl sm:text-4xl font-bold text-ink leading-tight">{post.title}</h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
          {renderMarkdown(body)}
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paperRaised">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="font-head text-xl font-bold text-ink mb-4">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/`}
                  className="group flex items-center justify-between gap-3 rounded-xl bg-white border border-ink/10 px-5 py-4 hover:border-canyon transition-colors"
                >
                  <span className="font-medium text-ink group-hover:text-canyon transition-colors">{s.navLabel}</span>
                  <ArrowRight size={18} className="text-canyon shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
