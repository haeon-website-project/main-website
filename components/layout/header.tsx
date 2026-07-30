"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { CtaButton } from "@/components/shared/cta-button";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { HEADER_HIDE_THRESHOLD_PX } from "@/constants/site";
import { PRIMARY_NAV } from "@/data/navigation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";
import type { CtaLink } from "@/types";

const HEADER_CTA: CtaLink = { label: "Buy Mikei Now", href: "#product" };

export function Header() {
  const { isScrolled, isHidden } = useScrollDirection(HEADER_HIDE_THRESHOLD_PX);

  return (
    <motion.header
      animate={{ y: isHidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-border bg-background/90 supports-backdrop-filter:bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between gap-6 py-2.5">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/mikei-logo.png"
            alt="Mikei"
            width={287}
            height={300}
            priority
            className="h-16 w-auto md:h-20"
          />
        </Link>

        <DesktopNav items={PRIMARY_NAV} />

        <div className="flex items-center gap-5">
          <CtaButton cta={HEADER_CTA} size="sm" className="hidden md:inline-flex" />
          <MobileNav items={PRIMARY_NAV} cta={HEADER_CTA} />
        </div>
      </Container>
    </motion.header>
  );
}
