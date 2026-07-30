import Image from "next/image";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Text } from "@/components/shared/text";
import { PressCard } from "@/components/cards/press-card";
import { PRESS } from "@/data/press";

export function Press() {
  return (
    <Section tone="sand" id="press">
      <Container>
        <SectionHeader japaneseLabel={PRESS.eyebrow} heading={PRESS.heading} lede={PRESS.lede} />

        <Reveal className="border-border bg-background mb-14 grid grid-cols-1 border lg:grid-cols-2">
          <div className="relative min-h-[280px] md:min-h-[420px]">
            <Image
              src={PRESS.feature.image.src}
              alt={PRESS.feature.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-9 md:p-14">
            <span className="text-accent font-sans text-[10px] tracking-[0.28em] uppercase">
              {PRESS.feature.source}
            </span>
            <Heading as="h3" variant="card" className="text-[1.9rem]">
              {PRESS.feature.heading}
            </Heading>
            <Text variant="quote" className="text-lg">
              &ldquo;{PRESS.feature.quote}&rdquo;
            </Text>
            <span className="text-muted-foreground font-sans text-[11px] tracking-[0.24em] uppercase">
              {PRESS.feature.byline}
            </span>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRESS.cards.map((card) => (
            <StaggerItem key={card.heading}>
              <PressCard {...card} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
