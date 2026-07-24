import type { SiteConfig } from "@/types";

export const SITE: SiteConfig = {
  name: "Mikei",
  shortName: "Mikei",
  japaneseTagline: "御芝 · Since 1976",
  since: "1976",
  description:
    "Mikei Red Reishi Essence — wood-log cultivated in Gunma, Japan since 1976 by the Mayuzumi family. Available at Harrods, Selfridges and fine European retailers.",
  url: "https://www.mikei.co.uk",
  ogImage: "/og-image.jpg",
  locale: "en_GB",
  languages: [
    { code: "en", label: "EN" },
    { code: "zh", label: "中文" },
    { code: "fr", label: "FR" },
  ],
};

export const ROUTES = {
  home: "/",
  story: "/#story",
  product: "/#product",
  ritual: "/#ritual",
  press: "/#press",
  locator: "/#locator",
} as const;

export const MOTION = {
  durationShort: 0.4,
  durationBase: 0.6,
  durationLong: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
  staggerStep: 0.08,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const HEADER_HIDE_THRESHOLD_PX = 80;
