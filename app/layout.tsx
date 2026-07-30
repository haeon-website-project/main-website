import type { Metadata } from "next";

import { JsonLd } from "@/components/shared/json-ld";
import { SITE } from "@/constants/site";
import { fontVariables } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Red Reishi Essence`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ["red reishi", "reishi mushroom", "adaptogen", "Mikei", "Gunma Japan", "wellness supplement"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Red Reishi Essence`,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Red Reishi Essence`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${fontVariables} min-h-screen font-sans antialiased`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
            description: SITE.description,
            foundingDate: SITE.since,
          }}
        />
        {children}
      </body>
    </html>
  );
}
