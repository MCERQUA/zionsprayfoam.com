"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mountain } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-head font-bold text-ink text-base sm:text-lg shrink-0">
          <Mountain className="text-canyon shrink-0" size={26} />
          <span className="leading-tight">{SITE.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-ink">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-canyon transition-colors cursor-pointer">Services</button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="rounded-xl bg-white border border-ink/10 shadow-lg p-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}/`}
                      className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-paperRaised hover:text-canyon transition-colors"
                    >
                      {s.navLabel}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {NAV.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-canyon transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={SITE.phoneHref} className="flex items-center gap-1.5 font-bold text-ink hover:text-canyon transition-colors">
            <Phone size={16} className="text-canyon" />
            {SITE.phone}
          </a>
          <Link
            href="/get-a-quote/"
            className="rounded-full bg-canyon px-5 py-2.5 text-sm font-bold text-white hover:bg-canyonDark transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          className="lg:hidden text-ink cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-paper px-4 py-4 space-y-1">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-paperRaised hover:text-canyon"
              onClick={() => setOpen(false)}
            >
              {s.navLabel}
            </Link>
          ))}
          <div className="h-px bg-ink/10 my-2" />
          {NAV.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-paperRaised hover:text-canyon"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 px-3 py-2.5 font-bold text-ink"
          >
            <Phone size={16} className="text-canyon" />
            {SITE.phone}
          </a>
          <Link
            href="/get-a-quote/"
            className="block text-center rounded-full bg-canyon px-5 py-3 text-sm font-bold text-white mt-2"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
