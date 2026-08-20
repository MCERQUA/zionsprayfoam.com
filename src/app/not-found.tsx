import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-canyon font-head text-6xl font-bold mb-4">404</p>
        <h1 className="font-head text-2xl font-bold text-ink mb-4">Page Not Found</h1>
        <p className="text-inkSoft mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Try one of our services, or call{" "}
          <a href={SITE.phoneHref} className="text-canyon font-semibold">{SITE.phone}</a> if you
          need help.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-canyon px-8 py-3.5 text-sm font-bold text-white hover:bg-canyonDark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
