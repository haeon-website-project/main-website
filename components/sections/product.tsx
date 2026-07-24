"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { CtaButton } from "@/components/shared/cta-button";
import { Heading } from "@/components/shared/heading";
import { JapaneseAccent } from "@/components/shared/japanese-accent";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Button } from "@/components/ui/button";
import { MOTION } from "@/constants/site";
import { PRODUCT } from "@/data/product";

export function Product() {
  return (
    <Section tone="paper" id="product">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="relative isolate flex aspect-square items-center justify-center overflow-hidden bg-[radial-gradient(600px_400px_at_50%_40%,#f6ecd6,#e2d2b1)] p-14 md:p-16">
            <JapaneseAccent size="corner" aria-hidden="true" className="text-accent/10 absolute top-6 left-8">
              御芝
            </JapaneseAccent>
            <JapaneseAccent
              size="corner"
              aria-hidden="true"
              className="text-secondary/10 absolute right-8 bottom-6"
            >
              霊芝
            </JapaneseAccent>

            <motion.div
              className="relative z-10 aspect-[8/9] w-[70%]"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: MOTION.durationLong, ease: MOTION.ease }}
            >
              <Image
                src={PRODUCT.image.src}
                alt={PRODUCT.image.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="object-contain drop-shadow-[0_30px_40px_rgba(74,35,19,0.35)]"
              />
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <JapaneseAccent size="label" className="mb-3.5 block">
              {PRODUCT.japaneseLabel}
            </JapaneseAccent>
            <Heading as="h2" variant="section">
              {PRODUCT.heading}
            </Heading>
            <Text variant="lede" className="mt-6">
              {PRODUCT.description}
            </Text>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="border-border bg-border mt-8 grid grid-cols-1 gap-px border sm:grid-cols-2">
              {PRODUCT.specs.map((spec) => (
                <div key={spec.label} className="bg-background p-5">
                  <dt className="text-muted-foreground font-sans text-[10px] tracking-[0.28em] uppercase">
                    {spec.label}
                  </dt>
                  <dd className="text-secondary mt-1.5 text-xl">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <span className="mr-1 flex items-baseline gap-2">
                <span className="text-accent text-3xl font-medium">{PRODUCT.price}</span>
                <span className="text-muted-foreground font-sans text-[11px] tracking-[0.24em] uppercase">
                  {PRODUCT.priceNote}
                </span>
              </span>
              <Button variant="solid" size="lg">
                {PRODUCT.addToCartLabel}
              </Button>
              <CtaButton cta={PRODUCT.findInStoreCta} variant="outline" size="lg" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
