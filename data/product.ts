import type { ProductContent } from "@/types";

export const PRODUCT: ProductContent = {
  heading: "Mikei Red Reishi Essence.",
  description:
    "A concentrated essence drawn from four generations of wood-log cultivated red reishi. High potency, ritual daily.",
  specs: [
    { label: "Format", value: "30 capsules · one-month supply" },
    { label: "Ritual", value: "One capsule daily, ideally with vitamin C" },
    { label: "Origin", value: "Gunma, Japan · 群馬県" },
    { label: "Cultivation", value: "Proprietary strain, natural wood-log" },
  ],
  price: "£47.99",
  priceNote: "Ships Europe-wide",
  image: {
    src: "/images/mikei-red-reishi-essence-product-photo.webp",
    alt: "Mikei Red Reishi Essence, 30 vegetarian capsules",
    width: 700,
    height: 757,
  },
  addToCartLabel: "Add to Bag",
  findInStoreCta: { label: "Find In-Store", href: "#locator" },
};
