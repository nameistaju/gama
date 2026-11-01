"use client";

import React from "react";
import OrbitingCirclesGlobeDemo from "@/components/ui/orbiting-circles-02";

export function Integrations() {
  return (
    <section
      id="tech-stack"
      className="relative pt-16 sm:pt-20 md:pt-28 pb-0 bg-[#F8FAFC] text-[#0F172A] overflow-hidden selection:bg-[#0F172A] selection:text-white border-t border-slate-200/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-4">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F172A] tracking-tight leading-tight">
            Tech Stack We Use
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
            From modern reactive frontends and distributed cloud architectures to frontier AI models and automated CI/CD pipelines — engineered for resilience, speed, and scale.
          </p>
        </div>
      </div>

      {/* Orbiting Circles Globe Animation flush with section bottom */}
      <div className="relative w-full flex justify-center items-end p-0 m-0">
        <OrbitingCirclesGlobeDemo />
      </div>
    </section>
  );
}

export default Integrations;
