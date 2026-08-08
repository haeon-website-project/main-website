import type { LucideIcon } from "lucide-react";

/**
 * Shared content contracts. Every section component reads one of these
 * shapes rather than literals, so a future CMS (Sanity) integration only
 * has to satisfy the interface — no component changes required.
 */

export interface SanityImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface LanguageOption {
  code: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface HeroContent {
  eyebrow: string;
  japaneseAccent: string;
  headingLine1: string;
  headingEmphasis: string;
  lede: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  visual: SanityImage;
  originStamp: string[];
  tagVertical: string;
}

export interface RetailerHighlight {
  name: string;
  subtitle: string;
  href: string;
}

export interface RetailerStrip {
  lead: string;
  featured: RetailerHighlight[];
  alsoLabel: string;
  also: string[];
}

export interface PillarItem {
  index: string;
  japaneseSmall: string;
  title: string;
  description: string;
}

export interface TimelineEntry {
  year: string;
  text: string;
}

export interface StoryContent {
  eyebrow: string;
  heading: string;
  quote: string;
  quoteCite: string;
  body: string;
  timeline: TimelineEntry[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductContent {
  heading: string;
  description: string;
  specs: ProductSpec[];
  price: string;
  priceNote: string;
  image: SanityImage;
  addToCartLabel: string;
  findInStoreCta: CtaLink;
}

export interface RitualStep {
  numeral: string;
  title: string;
  description: string;
}

export interface RitualContent {
  eyebrow: string;
  heading: string;
  lede: string;
  steps: RitualStep[];
}

export interface PressFeature {
  source: string;
  heading: string;
  quote: string;
  byline: string;
  image: SanityImage;
  href: string;
}

export interface PressCard {
  source: string;
  heading: string;
  quote: string;
  byline: string;
  href?: string;
}

export interface PressContent {
  eyebrow: string;
  heading: string;
  lede: string;
  feature: PressFeature;
  cards: PressCard[];
}

export interface StoreLocation {
  name: string;
  address: string;
  mapUrl?: string;
  mapLabel?: string;
}

export interface LocatorContent {
  eyebrow: string;
  heading: string;
  lede: string;
  searchPlaceholder: string;
  columns: { srNo: string; store: string; address: string; map: string };
  mapLinkLabel: string;
  stores: StoreLocation[];
}

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}

export interface FooterContent {
  description: string;
  columns: FooterColumn[];
  contact: string[];
  social: SocialLink[];
  legalLinks: NavItem[];
  copyright: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  japaneseTagline: string;
  since: string;
  description: string;
  url: string;
  ogImage: string;
  locale: string;
  languages: LanguageOption[];
}
