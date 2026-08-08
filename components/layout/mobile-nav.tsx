"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { CtaButton } from "@/components/shared/cta-button";
import { handleHashLinkClick } from "@/lib/hash-link";
import type { CtaLink, NavItem } from "@/types";

interface MobileNavProps {
  items: NavItem[];
  cta: CtaLink;
}

export function MobileNav({ items, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="text-secondary"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="bg-ink/40 fixed inset-0 z-[60] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="bg-background shadow-soft fixed inset-y-0 right-0 z-[61] flex w-[86%] max-w-sm flex-col gap-10 px-8 py-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-accent text-lg tracking-[0.2em] uppercase">Menu</span>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="text-secondary size-6" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Primary">
                <ul className="flex flex-col gap-6">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={(event) => {
                          setOpen(false);
                          handleHashLinkClick(event, item.href);
                        }}
                        className="font-display text-secondary hover:text-accent text-2xl transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-border mt-auto border-t pt-6">
                <CtaButton cta={cta} className="w-full justify-center" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
