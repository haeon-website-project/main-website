import { Heading } from "@/components/shared/heading";
import { JapaneseAccent } from "@/components/shared/japanese-accent";
import { Reveal } from "@/components/shared/reveal";
import { Text } from "@/components/shared/text";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  japaneseLabel?: string;
  heading: string;
  lede?: string;
  inverse?: boolean;
  className?: string;
}

export function SectionHeader({ japaneseLabel, heading, lede, inverse, className }: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-14 flex flex-wrap items-end justify-between gap-10", className)}>
      <Heading as="h2" variant="section" className={inverse ? "text-sand" : undefined}>
        {japaneseLabel && (
          <JapaneseAccent
            size="small"
            className={cn("mb-3 block text-2xl", inverse ? "text-stone" : undefined)}
          >
            {japaneseLabel}
          </JapaneseAccent>
        )}
        {heading}
      </Heading>
      {lede && (
        <Text variant="body" className={cn("max-w-sm text-lg", inverse ? "text-line" : "text-foreground/70")}>
          {lede}
        </Text>
      )}
    </Reveal>
  );
}
