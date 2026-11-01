import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, Terminal, Cpu } from 'lucide-react';

// 4 Core Capabilities using the exact colors from the GAMA Logo
const outcomes = [
  {
    id: '01',
    title: 'PLATFORM MODERNIZATION',
    collapsedTitle: 'PLATFORM MODERNIZATION',
    description:
      'Upgrade your platform with a clear plan for faster delivery and better performance. AI-driven analysis, zero business disruption.',
    // GAMA Warm Amber / Gold
    activeBg: 'bg-[#FED789]',
    collapsedBg: 'bg-[#FED789]/85',
    hoverBg: 'hover:bg-[#FED789]',
    activeText: 'text-[#1E1B18]',
    dividerBorder: 'border-[#1E1B18]/15',
  },
  {
    id: '02',
    title: 'SOFTWARE DELIVERY',
    collapsedTitle: 'SOFTWARE DELIVERY',
    description:
      'Ship production-grade features at rapid cadence with agile engineering squads, robust automated testing, and clean architecture built for high velocity.',
    // GAMA Sky Cyan
    activeBg: 'bg-[#BAE6FD]',
    collapsedBg: 'bg-[#BAE6FD]/85',
    hoverBg: 'hover:bg-[#BAE6FD]',
    activeText: 'text-[#082F49]',
    dividerBorder: 'border-[#082F49]/15',
  },
  {
    id: '03',
    title: 'SPECIALISTS ON DEMAND',
    collapsedTitle: 'SPECIALISTS ON DEMAND',
    description:
      'Embed elite architects, principal engineers, and specialized tech leads directly into your product squads without lengthy recruiting cycles.',
    // GAMA Cobalt Blue
    activeBg: 'bg-[#BFDBFE]',
    collapsedBg: 'bg-[#BFDBFE]/85',
    hoverBg: 'hover:bg-[#BFDBFE]',
    activeText: 'text-[#0F172A]',
    dividerBorder: 'border-[#0F172A]/15',
  },
  {
    id: '04',
    title: 'SHIP AI',
    collapsedTitle: 'SHIP AI',
    description:
      'Add AI capabilities to your products and processes to enhance features, improve user experience, and optimise critical workflows.',
    // GAMA Coral / Rose Red
    activeBg: 'bg-[#FECDD3]',
    collapsedBg: 'bg-[#FECDD3]/85',
    hoverBg: 'hover:bg-[#FECDD3]',
    activeText: 'text-[#4C0519]',
    dividerBorder: 'border-[#4C0519]/15',
  },
];

export default function TangibleOutcomes({ onOpenContact }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="outcomes"
      className="relative w-full bg-[#F8FAFC] py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-12 selection:bg-[#0F172A] selection:text-white overflow-hidden"
    >
      

      <div className="relative max-w-6xl mx-auto">
        {/* Top Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8 sm:mb-12 pb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#0F172A]">
            See tangible outcomes
          </h2>
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-600 font-bold">
            WHAT WE DO
          </span>
        </div>

        {/* =========================================================================
            STACKED ACCORDION: MATCHING REFERENCE IMAGES 2 & 3
            ========================================================================= */}
        <div className="flex flex-col gap-2">
          {outcomes.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  setActiveIndex(index);
                  if (onOpenContact && isActive) {
                    onOpenContact(item.title);
                  }
                }}
                className={`relative overflow-hidden cursor-pointer transition-all duration-300 ease-out select-none rounded-sm ${
                  isActive
                    ? `${item.activeBg} ${item.activeText} shadow-md`
                    : `${item.collapsedBg} ${item.hoverBg} text-[#0F172A]/90 hover:text-[#0F172A]`
                }`}
                style={{
                  minHeight: isActive ? '230px' : '54px',
                }}
              >
                {/* Collapsed State Bar (Matching Reference: Just Title / ID) */}
                {!isActive && (
                  <div className="h-[54px] px-6 sm:px-8 flex items-center justify-between">
                    <span className="font-sans font-normal text-xs sm:text-sm tracking-wider uppercase text-[#0F172A]">
                      {item.collapsedTitle}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#0F172A]/40 transition-opacity" />
                  </div>
                )}

                {/* Expanded State Card (Matching Reference: Left content + divider + clean arrow) */}
                {isActive && (
                  <div className="flex flex-col md:flex-row items-stretch justify-between h-full min-h-[230px]">
                    {/* Left 70%: Top Title + Bottom Description */}
                    <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                      {/* Top Label */}
                      <div className="flex items-center gap-3 font-normal text-xs sm:text-sm tracking-wider uppercase">
                        <span>{item.id}</span>
                        <span>→</span>
                        <span>{item.title}</span>
                      </div>

                      {/* Bottom Description */}
                      <p className="mt-8 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-xl text-[#0F172A]/90">
                        {item.description}
                      </p>
                    </div>

                    {/* Right 30%: Thin Vertical Divider + Clean Arrow */}
                    <div
                      className={`md:w-64 lg:w-72 flex items-center justify-center border-t md:border-t-0 md:border-l ${item.dividerBorder} p-6 md:p-0`}
                    >
                      <div className="transform transition-transform duration-300 hover:translate-x-1">
                        <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8] text-[#0F172A]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

              </div>
    </section>
  );
}
