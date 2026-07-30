import { Container } from "@/components/shared/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { RetailerCard } from "@/components/cards/retailer-card";
import { RETAILERS } from "@/data/retailers";

export function RetailerStrip() {
  return (
    <section className="border-border bg-muted border-y py-14" aria-label="Where to find Mikei">
      <Container>
        <Reveal>
          <p className="text-muted-foreground mb-6 text-center font-sans text-[11px] font-medium tracking-[0.32em]">
            {RETAILERS.lead}
          </p>
        </Reveal>

        <StaggerGroup className="mx-auto mb-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {RETAILERS.featured.map((retailer) => (
            <StaggerItem key={retailer.name}>
              <RetailerCard {...retailer} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="font-display text-secondary flex flex-wrap items-center justify-center gap-3 text-lg italic md:text-xl">
            <span className="text-muted-foreground mr-2 font-sans text-[10px] font-medium tracking-[0.28em] uppercase not-italic">
              {RETAILERS.alsoLabel}
            </span>
            {RETAILERS.also.map((name, i) => (
              <span key={name} className="flex items-center gap-3">
                {i > 0 && <span className="text-primary">·</span>}
                {name}
              </span>
            ))}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
