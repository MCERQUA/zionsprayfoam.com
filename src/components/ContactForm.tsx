"use client";

import { useState, FormEvent } from "react";
import AeoFields from "./AeoFields";
import { SITE } from "@/lib/site";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get("bot-field")) return;

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-paperRaised border border-canyon/20 p-8 text-center">
        <p className="font-head text-xl font-bold text-ink mb-2">Message sent.</p>
        <p className="text-inkSoft text-sm">
          Thanks for reaching out — we&apos;ll get back to you shortly. For anything urgent, call{" "}
          <a href={SITE.phoneHref} className="text-canyon font-semibold">{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white border border-ink/10 p-6 sm:p-8 space-y-4 shadow-sm"
    >
      <input type="hidden" name="form-name" value="contact" />
      <AeoFields />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label className="block text-sm font-medium text-ink mb-1">Full Name</label>
        <input
          required
          name="name"
          type="text"
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-canyon"
          placeholder="Jane Smith"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Phone</label>
          <input
            required
            name="phone"
            type="tel"
            className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-canyon"
            placeholder="(555) 555-0100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Email</label>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-canyon"
            placeholder="jane@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Message</label>
        <textarea
          required
          name="message"
          rows={4}
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-canyon"
          placeholder="Tell us about your project."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-canyonDark">
          Something went wrong. Please call{" "}
          <a href={SITE.phoneHref} className="underline">{SITE.phone}</a> instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-canyon px-6 py-3 text-sm font-bold text-white hover:bg-canyonDark transition-colors disabled:opacity-60 cursor-pointer"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
