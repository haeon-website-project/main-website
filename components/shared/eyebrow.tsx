import { cn } from "@/lib/utils";

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-muted-foreground font-sans text-[11px] font-medium tracking-[0.32em] uppercase",
        className,
      )}
      {...props}
    />
  );
}
