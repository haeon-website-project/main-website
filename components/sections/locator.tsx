"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { LOCATOR } from "@/data/locator";

const SHOW_STOCKIST_LIST = true;

export function Locator() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LOCATOR.stores;
    return LOCATOR.stores.filter(
      (store) => store.name.toLowerCase().includes(q) || store.address.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Section tone="paper" id="locator">
      <Container>
        <SectionHeader japaneseLabel={LOCATOR.eyebrow} heading={LOCATOR.heading} lede={LOCATOR.lede} />

        {SHOW_STOCKIST_LIST && (
          <>
            <div className="mb-9 flex flex-wrap gap-3">
              <div className="relative min-w-[240px] flex-1">
                <Search
                  className="text-muted-foreground pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2"
                  aria-hidden="true"
                />
                <label htmlFor="locator-search" className="sr-only">
                  Search stockists
                </label>
                <input
                  id="locator-search"
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={LOCATOR.searchPlaceholder}
                  className="border-border text-secondary focus:border-accent w-full border bg-transparent py-3.5 pr-4 pl-10 font-sans text-[13px] tracking-[0.04em] focus:outline-none"
                />
              </div>
            </div>

            <div className="border-border overflow-x-auto border">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    {[
                      LOCATOR.columns.srNo,
                      LOCATOR.columns.store,
                      LOCATOR.columns.address,
                      LOCATOR.columns.map,
                    ].map((heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="border-border text-muted-foreground border-b px-4 py-3.5 font-sans text-[10px] font-normal tracking-[0.28em] uppercase"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-muted-foreground px-4 py-12 text-center font-sans text-sm"
                      >
                        No stockists match your search.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((store, index) => (
                      <tr key={store.name} className="hover:bg-muted transition-colors">
                        <td className="border-border text-accent border-b px-4 py-4 font-sans text-sm font-medium tracking-[0.04em]">
                          {index + 1}
                        </td>
                        <td className="border-border font-display text-secondary border-b px-4 py-4 text-lg">
                          {store.name}
                        </td>
                        <td className="border-border text-foreground/75 border-b px-4 py-4 font-sans text-sm">
                          {store.address}
                        </td>
                        <td className="border-border border-b px-4 py-4 font-sans text-sm">
                          {store.mapUrl ? (
                            <a
                              href={store.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent underline-offset-2 hover:underline"
                            >
                              {store.mapLabel ?? LOCATOR.mapLinkLabel}
                            </a>
                          ) : (
                            <span className="text-muted-foreground">{"—"}</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}
