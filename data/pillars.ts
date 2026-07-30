import type { PillarItem } from "@/types";

export const PILLARS_HEADING = {
  japaneseLabel: "霊芝の四つの徳",
  heading: "Four virtues, one mushroom.",
  lede: 'Reishi (Lingzhi, 霊芝) has been described in Traditional Chinese Medicine for over two millennia as the "Mushroom of Immortality" — a Superior Herb that calms spirit, tonifies qi and returns the body to equilibrium.',
};

export const PILLARS: PillarItem[] = [
  {
    index: "01 / 免疫",
    japaneseSmall: "免疫システムをサポートする",
    title: "Supports the immune system.",
    description: "Rich in bioactive polysaccharides with immune-modulating properties.",
  },
  {
    index: "02 / 心神",
    japaneseSmall: "健康な心血管系を維持する",
    title: "maintain a healthy cardiovascular system and circulatory health.",
    description: 'eases anxiety, quiets the mind, softens sleep.',
  },
  {
    index: "03 / 気",
    japaneseSmall: "体のエネルギーレベルを保つ",
    title: "Maintains wellbeing, Balances energy.",
    description: "A qi tonic — harmonizing vitality through the length of the day, without stimulation.",
  },
  {
    index: "04 / 均衡",
    japaneseSmall: "自然界で最も強力なアダプトゲン",
    title: "Nature's adaptogen.",
    description: "A simple herb that guides the body — gently, patiently — back toward equilibrium.",
  },
];
