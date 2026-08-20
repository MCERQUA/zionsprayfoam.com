"use client";

import { useEffect, useRef } from "react";

/** AEO traffic-source capture — hidden fields, invisible, no design impact. */
export default function AeoFields() {
  const srcRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const p = new URLSearchParams(location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) {
        try {
          src = new URL(document.referrer).hostname;
        } catch {
          src = document.referrer;
        }
      }
      if (!src) src = "direct";
      if (srcRef.current) srcRef.current.value = src;
      if (urlRef.current) urlRef.current.value = location.href;
    } catch {
      // no-op
    }
  }, []);

  return (
    <>
      <input type="hidden" name="traffic_source" ref={srcRef} defaultValue="" />
      <input type="hidden" name="landing_url" ref={urlRef} defaultValue="" />
    </>
  );
}
