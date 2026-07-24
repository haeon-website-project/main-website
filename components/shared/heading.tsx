import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-display text-secondary", {
  variants: {
    variant: {
      display: "text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] font-normal tracking-[-0.01em]",
      section: "text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.02] font-normal tracking-[-0.005em]",
      subsection: "text-[clamp(1.5rem,2.4vw,1.75rem)] leading-[1.15] font-normal",
      card: "text-[1.625rem] leading-[1.2] font-normal",
    },
  },
  defaultVariants: {
    variant: "section",
  },
});

interface HeadingProps
  extends Omit<React.ComponentProps<"h2">, "color">, VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({ as: Tag = "h2", variant, className, ...props }: HeadingProps) {
  return <Tag className={cn(headingVariants({ variant }), className)} {...props} />;
}

export function Emphasis({ className, ...props }: React.ComponentProps<"em">) {
  return <em className={cn("text-accent font-normal italic", className)} {...props} />;
}
