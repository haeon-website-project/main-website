import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("font-display", {
  variants: {
    variant: {
      lede: "text-xl text-foreground/85 md:text-[1.25rem]",
      body: "text-lg text-foreground/80",
      quote: "border-l-2 border-primary pl-6 text-2xl italic text-secondary md:text-[1.75rem]",
      caption: "font-sans text-[13px] leading-relaxed text-muted-foreground",
      label: "font-sans text-[11px] font-medium tracking-[0.24em] text-muted-foreground uppercase",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

interface TextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: "p" | "span" | "blockquote";
}

export function Text({ as: Tag = "p", variant, className, ...props }: TextProps) {
  return <Tag className={cn(textVariants({ variant }), className)} {...props} />;
}
