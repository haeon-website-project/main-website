import type { StoryContent } from "@/types";

export const STORY: StoryContent = {
  eyebrow: "The Mayuzumi Family · 黄家",
  heading: "Four generations. One mountain. One mushroom.",
  quote:
    "For centuries it was considered impossible to commercially cultivate red reishi. Fumimaru Mayuzumi found a way — a single wild strain in the mountains of Gunma, and the patience to grow it on natural wood logs, as nature intended.",
  quoteCite: "Nikkei Co., Gunma, Japan",
  body: "Since 1976, the Mayuzumi family has quietly refined the wood-log cultivation of their proprietary red reishi strain. No shortcuts, no synthetics — only oak logs, mountain water, and time. Every capsule of Mikei is drawn from this single lineage.",
  image: {
    src: "/images/story-mayuzumi.svg",
    alt: "Placeholder — the Mayuzumi family's wood-log reishi cultivation in Gunma, Japan",
    width: 900,
    height: 1200,
  },
  timeline: [
    { year: "1972", text: "Fumimaru Mayuzumi forages a rare strain of red reishi in the Gunma highlands." },
    { year: "1976", text: "Founds Nikkei Co. — pioneering commercial wood-log cultivation." },
    { year: "2003", text: "Mikei® Red Reishi Essence introduced to the Japanese apothecary market." },
    { year: "Today", text: "Stocked by Harrods, Selfridges, and Europe's finest health apothecaries." },
  ],
};
