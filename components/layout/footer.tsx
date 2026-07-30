import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { JapaneseAccent } from "@/components/shared/japanese-accent";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { SITE } from "@/constants/site";
import { FOOTER } from "@/data/footer";

export function Footer() {
  return (
    <footer className="bg-abyss text-line pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-flex w-fit flex-col items-start gap-2.5">
              <span className="bg-paper inline-flex px-4 py-2.5">
                <Image
                  src="/images/mikei-logo.png"
                  alt="Mikei"
                  width={287}
                  height={300}
                  className="h-7 w-auto"
                />
              </span>
              <JapaneseAccent size="small" className="text-stone">
                {SITE.japaneseTagline}
              </JapaneseAccent>
            </Link>
            <p className="text-stone mt-5 max-w-[20rem] font-sans text-[13px] leading-relaxed">
              {FOOTER.description}
            </p>
          </div>

          {FOOTER.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h5 className="text-sand mb-5 font-sans text-[11px] tracking-[0.28em] uppercase">
                {column.heading}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-line hover:text-clay font-sans text-[13px] tracking-[0.02em] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h5 className="text-sand mb-5 font-sans text-[11px] tracking-[0.28em] uppercase">
              Stay Informed
            </h5>
            <ul className="text-line mb-6 flex flex-col gap-2.5 font-sans text-[13px]">
              {FOOTER.contact.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <NewsletterForm />

            {FOOTER.social.length > 0 && (
              <ul className="mt-6 flex gap-4">
                {FOOTER.social.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-line hover:text-clay transition-colors"
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="border-line/15 text-stone mt-16 flex flex-wrap justify-between gap-5 border-t pt-6 font-sans text-[11px] tracking-[0.2em] uppercase">
          <div>{FOOTER.copyright}</div>
          <div className="flex gap-6">
            {FOOTER.legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-clay transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
