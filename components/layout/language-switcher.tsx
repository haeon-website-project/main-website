"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import type { LanguageOption } from "@/types";

interface LanguageSwitcherProps {
  languages: LanguageOption[];
  className?: string;
}

export function LanguageSwitcher({ languages, className }: LanguageSwitcherProps) {
  const [active, setActive] = useState(languages[0]?.code);

  return (
    <div className={cn("flex items-center gap-1.5", className)} role="group" aria-label="Language">
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => setActive(lang.code)}
          aria-pressed={active === lang.code}
          className={cn(
            "text-muted-foreground border border-transparent px-2 py-1 font-sans text-[11px] tracking-[0.18em] uppercase transition-colors",
            active === lang.code ? "border-primary text-accent" : "hover:text-accent",
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
