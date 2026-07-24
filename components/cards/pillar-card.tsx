import { Heading } from "@/components/shared/heading";
import { JapaneseAccent } from "@/components/shared/japanese-accent";
import { Text } from "@/components/shared/text";
import type { PillarItem } from "@/types";

export function PillarCard({ index, japaneseSmall, title, description }: PillarItem) {
  return (
    <div className="border-border bg-muted border p-8 transition-transform duration-300 hover:-translate-y-1">
      <span className="text-primary font-sans text-xs tracking-[0.3em]">{index}</span>
      <JapaneseAccent size="small" className="text-accent mt-5 block">
        {japaneseSmall}
      </JapaneseAccent>
      <Heading as="h3" variant="card" className="mt-2">
        {title}
      </Heading>
      <Text variant="body" className="mt-4 text-base">
        {description}
      </Text>
    </div>
  );
}
