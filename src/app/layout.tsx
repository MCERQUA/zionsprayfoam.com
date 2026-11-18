import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const robotoSlab = localFont({
  src: [
    { path: "./fonts/RobotoSlab-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/RobotoSlab-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/RobotoSlab-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-head",
  adjustFontFallback: "Times New Roman",
});

const nunitoSans = localFont({
  src: [
    { path: "./fonts/NunitoSans-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/NunitoSans-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/NunitoSans-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/NunitoSans-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Spray Foam Insulation for St. George & the Zion National Park Region",
    template: "%s",
  },
  description:
    "Residential and commercial spray foam insulation for St. George, Hurricane, and the Zion National Park region of southwestern Utah. Call 844-967-5247.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${nunitoSans.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
