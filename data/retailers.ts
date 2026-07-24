import type { RetailerStrip } from "@/types";

export const RETAILERS: RetailerStrip = {
  lead: "Trusted by London's most storied houses",
  featured: [
    { name: "Harrods", subtitle: "Knightsbridge · Since 1849", href: "https://www.harrods.com/" },
    {
      name: "John Bell & Croyden",
      subtitle: "The King's Pharmacy · Wigmore St, Est. 1798",
      href: "https://johnbellcroyden.co.uk/",
    },
  ],
  alsoLabel: "Also found at",
  also: ["Selfridges", "Fortnum & Mason", "Le Bon Marché", "KaDeWe", "La Rinascente"],
};
