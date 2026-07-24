import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border font-sans text-[11px] font-medium tracking-[0.28em] uppercase transition-all duration-300 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "border-accent bg-accent text-accent-foreground hover:bg-transparent hover:text-accent",
        outline:
          "border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground",
        "outline-inverse": "border-sand/70 bg-transparent text-sand hover:bg-sand hover:text-moss-deep",
        link: "border-transparent p-0! tracking-[0.24em] text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3.5",
        sm: "px-5 py-2.5 text-[10px]",
        lg: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
