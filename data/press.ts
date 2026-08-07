import type { PressContent } from "@/types";

export const PRESS: PressContent = {
  eyebrow: "メディア掲載",
  heading: "As seen in the press.",
  lede: "Mikei Red Reishi has been featured across the UK's most-read titles, from Daily Mail Online and Daily Express to Daily Star, alongside endorsements from Britain's leading nutritionists.",
  feature: {
    source: "Daily Star · Fashion & Beauty",
    heading: "Magic mushrooms: Kim Kardashian's secret to younger-looking skin.",
    quote:
      "The reality TV star has been smearing on anti-ageing Japanese red reishi mushrooms to keep her skin looking taut, smooth and glowing… From London to Vancouver, Tokyo to New York, millions of health-conscious consumers are discovering the benefits of the mushroom in the form of Red Reishi Essence.",
    byline: "Laura Mitchell · Daily Star",
    href: "https://www.dailystar.co.uk/fashion-beauty/395039/Kim-Kardashian-beauty-secret",
    image: {
      src: "/images/press-feature-reishi.webp",
      alt: "Sliced red reishi mushrooms",
      width: 732,
      height: 1024,
    },
  },
  cards: [
    {
      source: "Daily Express · Health",
      heading: '"Could these mushrooms boost sex drive and reduce stress?"',
      quote:
        "Taking Red Reishi for a consistent period of time will help improve your immune system's health and capabilities at dealing with the stress placed upon us.",
      byline: "Rhiannon Lambert · Registered Nutritionist",
      href: "https://www.express.co.uk/life-style/health/682362/Red-reishi-mushroom-boost-sex-drive-reduce-stress",
    },
    {
      source: "Mail Online · Health",
      heading: "Lisa Snowdon on how therapy, mindfulness and reishi helped her fight depression.",
      quote:
        '"It\'s time to end the taboos around mental health." The TV star reveals the daily rituals, including Mikei Red Reishi, that anchor her wellbeing.',
      byline: "Daily Mail Online · Health",
      href: "https://www.dailymail.co.uk/health/article-5320033/Lisa-Snowden-reveals-fought-depression.html",
    },
    {
      source: "Patrick Holford · Nutritionist",
      heading: '"Red reishi is one of the three most reputable adaptogens."',
      quote:
        "The three most reputable adaptogens are the ginseng family, reishi mushroom (also known as lingzhi in China) and rhodiola. Of all the adaptogenic herbs that help give stress resilience and an energy boost, I like reishi and ginseng the best.",
      byline: "Patrick Holford · Nutritional Therapist & Author",
    },
  ],
};
