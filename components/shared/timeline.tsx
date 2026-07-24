import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/types";

interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

export function Timeline({ entries, className }: TimelineProps) {
  return (
    <ol className={cn("mt-8 flex flex-col gap-4", className)}>
      {entries.map((entry) => (
        <li key={entry.year} className="border-border flex items-baseline gap-6 border-b border-dashed pb-3">
          <span className="text-accent min-w-[4.5rem] font-sans text-xs tracking-[0.24em]">{entry.year}</span>
          <span className="font-display text-foreground/80 text-lg">{entry.text}</span>
        </li>
      ))}
    </ol>
  );
}
