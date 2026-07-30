"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/shared/container";
import { CtaButton } from "@/components/shared/cta-button";
import { Emphasis, Heading } from "@/components/shared/heading";
import { JapaneseAccent } from "@/components/shared/japanese-accent";
import { MediaReveal } from "@/components/shared/media-reveal";
import { Reveal } from "@/components/shared/reveal";
import { Text } from "@/components/shared/text";
import { HERO } from "@/data/hero";
import { MOTION } from "@/constants/site";

export function Hero() {
  return (
    <section className="bg-hero-aurora relative overflow-hidden pt-8 pb-24 md:pb-32">
      <JapaneseAccent
        size="watermark"
        aria-hidden="true"
        className="pointer-events-none absolute top-16 -right-4 [writing-mode:vertical-rl]"
      >
        {HERO.japaneseAccent}
      </JapaneseAccent>

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <Text variant="label" as="p">
              {HERO.eyebrow}
            </Text>
          </Reveal>

          <Reveal delay={0.08}>
            <Heading as="h1" variant="display" className="mt-6">
              {HERO.headingLine1}
              <br />
              <Emphasis>{HERO.headingEmphasis}</Emphasis>
            </Heading>
          </Reveal>

          <Reveal delay={0.16}>
            <Text variant="lede" className="mt-7 max-w-[32rem]">
              {HERO.lede}
            </Text>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-4">
              <CtaButton cta={HERO.primaryCta} variant="solid" size="lg" />
              <CtaButton cta={HERO.secondaryCta} variant="outline" size="lg" />
            </div>
          </Reveal>
        </div>

        <Reveal immediate className="relative">
          <MediaReveal image={HERO.visual} priority className="shadow-soft" />

          <div
            aria-hidden="true"
            className="font-jp bg-background text-accent absolute top-10 -left-1 px-3.5 py-2.5 text-[10px] tracking-[0.36em] [writing-mode:vertical-rl]"
          >
            {HERO.tagVertical}
          </div>

          <div
            aria-hidden="true"
            className="border-sand/70 text-sand absolute right-6 bottom-6 flex size-28 items-center justify-center rounded-full border text-center font-sans text-[10px] tracking-[0.28em] uppercase backdrop-blur-xs"
          >
            <span>
              {HERO.originStamp.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </span>
          </div>
        </Reveal>
      </Container>

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-8 flex justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: MOTION.ease }}
      >
        <ChevronDown className="text-muted-foreground size-5" />
      </motion.div>
    </section>
  );
}
