import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Minimal renderer for this project's controlled content format: ## headings,
 * **bold**, [text](url) links, > blockquotes, plain paragraphs. Not a general
 * markdown parser — content is fork-authored in this exact predictable shape.
 */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const tokenRe = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRe).filter((p) => p !== "");
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) return <strong key={key}>{boldMatch[1]}</strong>;
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <Link key={key} href={linkMatch[2]} className="text-canyon underline hover:text-canyonDark">
          {linkMatch[1]}
        </Link>
      );
    }
    return <span key={key}>{part}</span>;
  });
}

export function renderMarkdown(md: string): ReactNode[] {
  const blocks = md.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    const key = `block-${i}`;
    if (block.startsWith("## ")) {
      return (
        <h2 key={key} className="font-head text-2xl font-bold text-ink mt-10 mb-4 first:mt-0">
          {renderInline(block.slice(3).trim(), key)}
        </h2>
      );
    }
    if (block.startsWith("> ")) {
      return (
        <blockquote key={key} className="border-l-4 border-canyon pl-5 italic text-inkSoft leading-relaxed my-6">
          {renderInline(block.replace(/^>\s*/gm, "").trim(), key)}
        </blockquote>
      );
    }
    if (block.startsWith("---")) return null;
    return (
      <p key={key} className="text-inkSoft leading-relaxed mb-5">
        {renderInline(block.trim(), key)}
      </p>
    );
  });
}
