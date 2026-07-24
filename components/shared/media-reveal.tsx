"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { MOTION } from "@/constants/site";
import type { SanityImage } from "@/types";

interface MediaRevealProps {
  image: SanityImage;
  className?: string;
  aspectClassName?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean;
}

export function MediaReveal({
  image,
  className,
  aspectClassName = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 40vw, 90vw",
  priority = false,
  overlay = true,
}: MediaRevealProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", aspectClassName, className)}
      initial={{ clipPath: "inset(6% 6% 6% 6% round 2px)", opacity: 0, scale: 1.04 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 2px)", opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: MOTION.durationLong, ease: MOTION.ease }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={image.blurDataURL ? "blur" : undefined}
        blurDataURL={image.blurDataURL}
        className="object-cover"
      />
      {overlay && (
        <div className="from-accent/20 to-secondary/30 absolute inset-0 bg-gradient-to-br via-transparent" />
      )}
    </motion.div>
  );
}
