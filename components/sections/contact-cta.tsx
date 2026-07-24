import { Container } from "@/components/shared/container";
import { CtaButton } from "@/components/shared/cta-button";
import { Heading } from "@/components/shared/heading";
import { Reveal } from "@/components/shared/reveal";
import { Text } from "@/components/shared/text";
import { CONTACT_CTA } from "@/data/contact-cta";

export function ContactCta() {
  return (
    <section className="bg-ember text-paper py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Text variant="label" className="text-paper/70">
            {CONTACT_CTA.eyebrow}
          </Text>
          <Heading as="h2" variant="section" className="text-paper">
            {CONTACT_CTA.heading}
          </Heading>
          <Text variant="lede" className="text-paper/85">
            {CONTACT_CTA.body}
          </Text>
          <CtaButton cta={CONTACT_CTA.cta} variant="outline-inverse" size="lg" className="mt-2" />
        </Reveal>
      </Container>
    </section>
  );
}
