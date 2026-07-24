import { cn } from "@/lib/utils";

type SectionTone = "paper" | "sand" | "moss-deep";

const toneClasses: Record<SectionTone, string> = {
  paper: "bg-background text-foreground",
  sand: "bg-muted text-foreground",
  "moss-deep": "bg-moss-deep text-sand",
};

interface SectionProps extends React.ComponentProps<"section"> {
  tone?: SectionTone;
}

export function Section({ tone = "paper", className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 md:py-28 lg:py-[120px]", toneClasses[tone], className)} {...props}>
      {children}
    </section>
  );
}
