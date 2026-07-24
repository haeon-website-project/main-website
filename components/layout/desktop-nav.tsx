"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

interface DesktopNavProps {
  items: NavItem[];
  className?: string;
}

export function DesktopNav({ items, className }: DesktopNavProps) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <nav className={cn("hidden shrink-0 lg:block", className)} aria-label="Primary">
      <ul className="flex items-center gap-6 xl:gap-9">
        {items.map((item) => {
          const hasChildren = Boolean(item.children?.length);

          return (
            <li
              key={item.label}
              className="relative shrink-0"
              onMouseEnter={() => hasChildren && setOpenLabel(item.label)}
              onMouseLeave={() => hasChildren && setOpenLabel(null)}
            >
              <Link
                href={item.href}
                className="text-secondary hover:text-accent block font-sans text-[11px] tracking-[0.24em] whitespace-nowrap uppercase transition-colors"
                aria-haspopup={hasChildren ? "true" : undefined}
                aria-expanded={hasChildren ? openLabel === item.label : undefined}
              >
                {item.label}
              </Link>

              {hasChildren && (
                <AnimatePresence>
                  {openLabel === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="border-border bg-popover shadow-card absolute top-full left-1/2 z-40 mt-4 w-64 -translate-x-1/2 border p-2"
                    >
                      <ul className="flex flex-col">
                        {item.children!.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="text-secondary hover:bg-muted hover:text-accent block px-4 py-2.5 font-sans text-[13px] tracking-[0.04em] transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
