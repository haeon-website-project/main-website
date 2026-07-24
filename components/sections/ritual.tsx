import { Container } from "@/components/shared/container";
import { JapaneseAccent } from "@/components/shared/japanese-accent";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { RITUAL } from "@/data/ritual";

export function Ritual() {
  return (
    <section
      className="text-line relative overflow-hidden bg-[linear-gradient(180deg,#2f3a25,#1f2718)] py-20 md:py-28 lg:py-[120px]"
      id="ritual"
    >
      <JapaneseAccent
        size="watermark"
        aria-hidden="true"
        className="text-sand/5 pointer-events-none absolute top-16 right-16"
      >
        {RITUAL.eyebrow}
      </JapaneseAccent>

      <Container className="relative">
        <SectionHeader heading={RITUAL.heading} lede={RITUAL.lede} inverse />

        <StaggerGroup className="bg-sand/10 grid grid-cols-1 gap-px sm:grid-cols-3">
          {RITUAL.steps.map((step) => (
            <StaggerItem key={step.title}>
              <div className="bg-moss-deep h-full p-11">
                <span className="font-jp text-primary/85 text-[4.5rem] leading-none">{step.numeral}</span>
                <h4 className="font-display text-sand mt-3.5 text-[1.625rem]">{step.title}</h4>
                <p className="text-line mt-3 text-base">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
