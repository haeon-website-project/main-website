import { Heading } from "@/components/shared/heading";
import type { RetailerHighlight } from "@/types";

export function RetailerCard({ name, subtitle, href }: RetailerHighlight) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-primary bg-background hover:bg-accent hover:border-accent flex flex-col items-center gap-2 border px-7 py-8 text-center transition-colors"
    >
      <Heading
        as="h3"
        variant="card"
        className="text-accent group-hover:text-background tracking-[0.14em] uppercase"
      >
        {name}
      </Heading>
      <span className="text-muted-foreground group-hover:text-background/70 font-sans text-[11px] tracking-[0.24em] uppercase">
        {subtitle}
      </span>
    </a>
  );
}
