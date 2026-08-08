import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { handleHashLinkClick } from "@/lib/hash-link";
import type { CtaLink } from "@/types";
import type { VariantProps } from "class-variance-authority";

interface CtaButtonProps extends VariantProps<typeof buttonVariants> {
  cta: CtaLink;
  className?: string;
}

export function CtaButton({ cta, variant, size, className }: CtaButtonProps) {
  if (cta.external) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        nativeButton={false}
        render={<a href={cta.href} target="_blank" rel="noopener noreferrer" />}
      >
        {cta.label}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      nativeButton={false}
      render={<Link href={cta.href} onClick={(event) => handleHashLinkClick(event, cta.href)} />}
    >
      {cta.label}
    </Button>
  );
}
