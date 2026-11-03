import React from 'react';

/**
 * Renders the word "GAMA" with each of the 4 official brand logo colors in rich gradient text style:
 * G -> Blue (#0057EC)
 * A -> Red (#E01119)
 * M -> Green (#04CE7A)
 * A -> Orange / Yellow (#FCA602)
 */
export default function GamaText({ className = '' }) {
  return (
    <span className={`inline-inline tracking-tight font-extrabold select-none whitespace-nowrap ${className}`}>
      <span className="bg-gradient-to-b from-[#3884FF] to-[#0057EC] bg-clip-text text-transparent">G</span>
      <span className="bg-gradient-to-b from-[#FF4D42] to-[#E01119] bg-clip-text text-transparent">A</span>
      <span className="bg-gradient-to-b from-[#2EE88F] to-[#04CE7A] bg-clip-text text-transparent">M</span>
      <span className="bg-gradient-to-b from-[#FFBF33] to-[#FCA602] bg-clip-text text-transparent">A</span>
    </span>
  );
}
