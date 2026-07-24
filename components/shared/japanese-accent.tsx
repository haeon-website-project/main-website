import { cn } from "@/lib/utils";

interface JapaneseAccentProps extends React.ComponentProps<"span"> {
  size?: "label" | "small" | "watermark" | "on-image" | "corner";
}

const sizeClasses: Record<NonNullable<JapaneseAccentProps["size"]>, string> = {
  label: "text-base tracking-[0.14em] text-accent",
  small: "text-sm text-foreground/70",
  watermark: "text-[clamp(4rem,10vw,9rem)] leading-none text-accent/10 select-none",
  "on-image": "text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-paper/90 drop-shadow-lg select-none",
  corner: "text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] select-none",
};

export function JapaneseAccent({ size = "label", className, ...props }: JapaneseAccentProps) {
  return <span className={cn("font-jp", sizeClasses[size], className)} {...props} />;
}
