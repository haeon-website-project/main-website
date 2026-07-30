import type { FooterContent } from "@/types";

export const FOOTER: FooterContent = {
  description:
    "Distributed in Europe by Haeon Ltd., London. Cultivated in Gunma, Japan by the Mayuzumi family since 1976.",
  columns: [
    {
      heading: "Shop",
      links: [
        { label: "Red Reishi Essence", href: "#product" },
        { label: "Stockists", href: "#locator" },
      ],
    },
    {
      heading: "Learn",
      links: [
        { label: "The Mayuzumi Story", href: "#story" },
        { label: "The Daily Ritual", href: "#ritual" },
        { label: "Press & Editorial", href: "#press" },
      ],
    },
  ],
  contact: ["Haeon Ltd., London E1W 2WX", "+44 (0)20 7481 1777", "hello@mikei.co.uk"],
  social: [],
  legalLinks: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
  ],
  copyright: "© 2026 Mikei · Haeon Ltd.",
};
