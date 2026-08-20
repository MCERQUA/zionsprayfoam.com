"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className="rounded-xl border border-ink/10 bg-white overflow-hidden">
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-head font-semibold text-ink">{item.q}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-canyon transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-inkSoft text-sm leading-relaxed">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
