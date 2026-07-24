"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Dark mode is architected (see `.dark` tokens in app/globals.css) but not
 * yet exposed to users — no toggle is rendered. Flip `enableSystem` and add
 * a theme-toggle control when the brand is ready to ship it.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
