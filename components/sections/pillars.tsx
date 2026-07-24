import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Section } from "@/components/shared/section";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { PillarCard } from "@/components/cards/pillar-card";
import { PILLARS, PILLARS_HEADING } from "@/data/pillars";

export function Pillars() {
  return (
    <Section tone="paper" id="pillars">
      <Container>
        <SectionHeader
          japaneseLabel={PILLARS_HEADING.japaneseLabel}
          heading={PILLARS_HEADING.heading}
          lede={PILLARS_HEADING.lede}
        />

        <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.index}>
              <PillarCard {...pillar} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
