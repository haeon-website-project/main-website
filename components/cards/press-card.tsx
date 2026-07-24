import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import type { PressCard as PressCardType } from "@/types";

export function PressCard({ source, heading, quote, byline, href }: PressCardType) {
  return (
    <article className="border-border bg-background hover:border-accent flex flex-col gap-3.5 border p-8 transition-colors">
      <span className="text-accent font-sans text-[10px] tracking-[0.28em] uppercase">{source}</span>
      <Heading as="h4" variant="card" className="text-[1.375rem]">
        {heading}
      </Heading>
      <Text variant="quote" className="border-none pl-0 text-[1.1875rem] md:text-[1.1875rem]">
        {quote}
      </Text>
      <span className="text-muted-foreground mt-auto font-sans text-[11px] tracking-[0.2em] uppercase">
        {byline}
      </span>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="border-primary text-accent hover:border-secondary hover:text-secondary self-start border-b font-sans text-[11px] tracking-[0.24em] uppercase transition-colors"
        >
          Read the full article →
        </a>
      )}
    </article>
  );
}
