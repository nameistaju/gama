import React from 'react';

/**
 * GAMA Brand Logo & Wordmark
 * Features the official colorful gradient Ribbon 'G' symbol and authentic GAMA typography.
 */
export default function GamaLogo({
  variant = 'full', // 'full' | 'short' | 'icon' | 'footer'
  className = 'h-7 w-auto',
  color = 'currentColor',
  showTagline = true,
}) {
  // 1. Icon only (Ribbon G)
  if (variant === 'icon' || variant === 'short') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src="/gama-logo.png"
          alt="GAMA Logo Mark"
          className="h-full w-auto object-contain select-none pointer-events-none"
        />
      </div>
    );
  }

  // 2. Giant Footer Wordmark (Exact Vector GAMA from brand assets)
  if (variant === 'footer') {
    return (
      <div className={`w-full flex flex-col items-center select-none ${className}`}>
        <svg
          viewBox="230 588 1060 190"
          className="w-full h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[280px]"
          fill={color}
          role="img"
          aria-label="GAMA SOFTWARE SOLUTIONS"
        >
          {/* G */}
          <path d="M493,592 L325,593 L308,595 L283,604 L251,630 L237,655 L233,675 L233,692 L236,708 L244,726 L251,736 L267,751 L290,763 L304,767 L320,769 L401,769 L418,764 L431,753 L466,698 L422,699 L405,724 L391,736 L316,736 L292,727 L278,713 L273,703 L269,687 L270,674 L274,660 L282,648 L293,638 L316,628 L457,627Z" />
          <path d="M328,697 L467,697 L478,681 L480,672 L477,669 L470,667 L357,668Z" fill="#024BCE" />

          {/* A (First) */}
          <path d="M462,769 L511,768 L596,650 L604,644 L612,649 L692,767 L696,769 L739,769 L740,767 L625,604 L614,595 L598,594 L592,597 L577,614Z" />
          <path d="M661,769 L604,685 L600,687 L542,769Z" fill="#FEB824" />

          {/* M */}
          <path d="M989,602 L976,593 L965,593 L957,596 L948,603 L875,677 L872,678 L869,677 L793,601 L782,594 L766,594 L755,603 L752,612 L753,770 L792,769 L792,664 L795,661 L801,661 L862,722 L868,725 L875,725 L883,721 L943,661 L949,658 L955,662 L955,770 L992,770 L992,613Z" />

          {/* A (Second) */}
          <path d="M1004,769 L1050,770 L1058,762 L1139,649 L1147,643 L1153,647 L1213,735 L1239,769 L1286,769 L1286,767 L1171,607 L1158,595 L1143,593 L1133,597 L1126,603Z" />
          <path d="M1205,769 L1182,738 L1147,685 L1145,685 L1136,695 L1084,768Z" fill="#FD4F30" />
        </svg>
      </div>
    );
  }

  // 3. Full Brand Lockup (Used in Navbar, Contact Modal, Editorial About, etc.)
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Ribbon G Symbol */}
      <img
        src="/gama-logo.png"
        alt="GAMA Symbol"
        className="h-7 sm:h-8 md:h-9 w-auto object-contain shrink-0"
      />

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-none">
        <span
          className="font-display font-black tracking-tight text-xl sm:text-2xl md:text-[26px] leading-[0.9]"
          style={{ color: color === 'currentColor' ? 'inherit' : color }}
        >
          GAMA
        </span>
        {showTagline && (
          <span
            className="text-[8px] sm:text-[9px] tracking-[0.25em] font-bold uppercase mt-0.5 opacity-80 font-sans"
            style={{ color: color === 'currentColor' ? 'inherit' : color }}
          >
            SOFTWARE
          </span>
        )}
      </div>
    </div>
  );
}
