import type { RetailerStrip } from "@/types";

export const RETAILERS: RetailerStrip = {
  lead: "Trusted by London's most established stores",
  featured: [
    { name: "Harrods", subtitle: "Knightsbridge · Since 1849", href: "https://www.harrods.com/" },
    {
      name: "John Bell & Croyden",
      subtitle: "Wigmore St, Est. 1798",
      href: "https://johnbellcroyden.co.uk/",
    },
    {
      name: "Selfridges",
      subtitle: "400 Oxford Street, London · Since 1909",
      href: "https://www.selfridges.com/GB/en/stores/london/",
    },
  ],
  alsoLabel: "Also found at",
  also: ["Life Pharmacy @ Knightsbridge", "Life Pharmacy @ Oxford St", "Hayatt Pharmacy @ Knightsbridge", "Hayatt Pharmacy @ Oxford Street", "Omniya @ Knightsbridge", "Gould Pharmacy North Audley St", "Audley Pharmacy South Audley St", "Dolphin Fitness", "Batoul Clinic Maddox St"],
};
