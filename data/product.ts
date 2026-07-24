import type { ProductContent } from "@/types";

export const PRODUCT: ProductContent = {
  japaneseLabel: "御芝 · 純霊芝エッセンス",
  heading: "Mikei Red Reishi Essence.",
  description:
    "A concentrated essence drawn from four generations of wood-log cultivated red reishi. High potency, low dose, ritual daily.",
  specs: [
    { label: "Format", value: "30 capsules · one-month supply" },
    { label: "Ritual", value: "One capsule daily, ideally with vitamin C" },
    { label: "Origin", value: "Gunma, Japan · 群馬県" },
    { label: "Cultivation", value: "Proprietary strain, natural wood-log" },
  ],
  price: "£128",
  priceNote: "Ships Europe-wide",
  image: {
    src: "/images/product-essence.svg",
    alt: "Placeholder — Mikei Red Reishi Essence, 30 capsules",
    width: 640,
    height: 720,
  },
  addToCartLabel: "Add to Bag",
  findInStoreCta: { label: "Find In-Store", href: "#locator" },
};
