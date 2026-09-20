import type { Metadata } from "next";
import { Roboto_Slab, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-head",
  weight: ["500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
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
