"use client";

import React from "react";
import OrbitingCirclesGlobeDemo from "@/components/ui/orbiting-circles-02";

export function Integrations() {
  return (
    <section
      id="tech-stack"
      className="relative py-20 md:py-28 bg-[#F8FAFC] text-[#0F172A] overflow-hidden selection:bg-[#0F172A] selection:text-white border-t border-slate-200/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F172A] tracking-tight leading-tight">
            Tech Stack We Use
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
            From modern reactive frontends and distributed cloud architectures to frontier AI models and automated CI/CD pipelines — engineered for resilience, speed, and scale.
          </p>
        </div>

        {/* Orbiting Circles Globe Animation */}
        <div className="relative w-full flex justify-center items-end pt-4 pb-2">
          <OrbitingCirclesGlobeDemo />
        </div>
      </div>
    </section>
  );
}

export default Integrations;
