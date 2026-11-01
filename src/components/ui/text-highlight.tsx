"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TextHighlightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  color?: string;
}

export function TextHighlight({
  children,
  className,
  delay = 0,
  duration = 0.6,
  color = "#fde047",
}: TextHighlightProps) {
  return (
    <span className={cn("relative inline-block pb-1", className)}>
      {/* Simple marker underline */}
      <motion.span
        className="absolute bottom-0 left-0 right-0 h-[8px] rounded-sm pointer-events-none"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          backgroundColor: color,
          transformOrigin: "left",
        }}
      />

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </span>
  );
}

export default TextHighlight;
