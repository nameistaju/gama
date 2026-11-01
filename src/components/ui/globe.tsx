"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function GlobeGlow({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute -top-36 left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl h-84 rounded-full blur-[110px] pointer-events-none opacity-85 bg-gradient-to-r from-violet-600/30 via-cyan-400/45 via-emerald-400/35 to-amber-400/30",
        className,
      )}
      {...props}
    />
  );
}

export function GlobeSvg({
  className,
  children,
  ...props
}: React.ComponentProps<"svg">) {
  // Horizon curve mathematical bezier matching globe-earth.png apex (512, 190)
  const horizonPath = "M -60 510 C 145 255, 350 190, 512 190 C 674 190, 879 255, 1084 510";

  return (
    <svg
      viewBox="0 100 1024 490"
      className={cn("w-full h-auto select-none overflow-visible", className)}
      preserveAspectRatio="xMidYMin meet"
      {...props}
    >
      <defs>
        {/* Clip path that removes all rectangular sky above the planet horizon */}
        <clipPath id="earthClip">
          <path d="M -100 550 C 145 255, 350 190, 512 190 C 674 190, 879 255, 1150 550 L 1150 850 L -100 850 Z" />
        </clipPath>

        {/* Prism Spectral Rainbow Gradient matching the Prism component */}
        <linearGradient id="prismAtmosphere" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.45" />    {/* Electric Violet */}
          <stop offset="12%" stopColor="#2563EB" stopOpacity="0.8" />     {/* Deep Blue */}
          <stop offset="26%" stopColor="#00D4FF" stopOpacity="1" />       {/* Bright Cyan */}
          <stop offset="40%" stopColor="#38BDF8" stopOpacity="1" />       {/* Sky Blue */}
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />       {/* White-Hot Center Flare */}
          <stop offset="60%" stopColor="#10B981" stopOpacity="0.95" />    {/* Emerald / Mint Green */}
          <stop offset="74%" stopColor="#F59E0B" stopOpacity="0.85" />    {/* Golden Amber */}
          <stop offset="88%" stopColor="#EC4899" stopOpacity="0.75" />    {/* Pink / Magenta */}
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />    {/* Violet */}
        </linearGradient>

        {/* Wide Spectral Atmospheric Bloom */}
        <linearGradient id="prismBloom" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
          <stop offset="15%" stopColor="#2563EB" stopOpacity="0.7" />
          <stop offset="30%" stopColor="#00D4FF" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
          <stop offset="68%" stopColor="#10B981" stopOpacity="0.85" />
          <stop offset="85%" stopColor="#F59E0B" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
        </linearGradient>

        {/* Ambient Chromatic Dome behind the horizon apex */}
        <radialGradient id="prismDome" cx="50%" cy="100%" r="65%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.45" />
          <stop offset="25%" stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="75%" stopColor="#7C3AED" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Glow Filters */}
        <filter id="glowWide" x="-30%" y="-50%" width="160%" height="200%">
          <feGaussianBlur stdDeviation="34" result="blur" />
        </filter>
        <filter id="glowMid" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="14" result="blur" />
        </filter>
        <filter id="glowSharp" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
        </filter>
      </defs>

      {/* Atmospheric Diffuse Chromatic Dome above the horizon apex */}
      <ellipse
        cx="512"
        cy="210"
        rx="490"
        ry="150"
        fill="url(#prismDome)"
        pointerEvents="none"
      />

      {/* Earth Horizon Continent Map Image (clean map with transparent sky, no dots) */}
      <image
        href="/globe-earth.png"
        x="0"
        y="0"
        width="1024"
        height="768"
        clipPath="url(#earthClip)"
        preserveAspectRatio="none"
      />

      {/* Deep Atmosphere Outer Spectral Bloom along Horizon Arc */}
      <path
        d={horizonPath}
        fill="none"
        stroke="url(#prismBloom)"
        strokeWidth="50"
        strokeLinecap="round"
        filter="url(#glowWide)"
        opacity="0.8"
        pointerEvents="none"
      />

      {/* Mid Chromatic Atmospheric Glow along Horizon Arc */}
      <path
        d={horizonPath}
        fill="none"
        stroke="url(#prismAtmosphere)"
        strokeWidth="20"
        strokeLinecap="round"
        filter="url(#glowMid)"
        opacity="0.95"
        pointerEvents="none"
      />

      {/* Intense Razor Atmospheric Rim along Horizon Arc with Prism Spectrum */}
      <path
        d={horizonPath}
        fill="none"
        stroke="url(#prismAtmosphere)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glowSharp)"
        opacity="1"
        pointerEvents="none"
      />

      {children}
    </svg>
  );
}

export function Globe({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center select-none",
        className,
      )}
      {...props}
    />
  );
}

export default Globe;
