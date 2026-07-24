import { Container } from "@/components/shared/container";
import { JapaneseAccent } from "@/components/shared/japanese-accent";
import { MediaReveal } from "@/components/shared/media-reveal";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Timeline } from "@/components/shared/timeline";
import { Heading } from "@/components/shared/heading";
import { STORY } from "@/data/story";

export function Story() {
  return (
    <Section tone="sand" id="story">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <MediaReveal image={STORY.image} aspectClassName="aspect-[3/4]" overlay={false} />
          <JapaneseAccent size="on-image" aria-hidden="true" className="absolute top-6 left-6">
            黄家
          </JapaneseAccent>
        </Reveal>

        <div>
          <Reveal>
            <Text variant="label" as="p">
              {STORY.eyebrow}
            </Text>
          </Reveal>

          <Reveal delay={0.06}>
            <Heading as="h2" variant="section" className="mt-4">
              {STORY.heading}
            </Heading>
          </Reveal>

          <Reveal delay={0.12}>
            <Text as="blockquote" variant="quote" className="mt-8">
              &ldquo;{STORY.quote}&rdquo;
              <cite className="text-muted-foreground mt-3.5 block font-sans text-[11px] font-normal tracking-[0.24em] uppercase not-italic">
                — {STORY.quoteCite}
              </cite>
            </Text>
          </Reveal>

          <Reveal delay={0.18}>
            <Text variant="body" className="mt-6 text-lg">
              {STORY.body}
            </Text>
          </Reveal>

          <Reveal delay={0.24}>
            <Timeline entries={STORY.timeline} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
