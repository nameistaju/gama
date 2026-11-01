import React from 'react';
import Prism from './ui/Prism';
import { Globe, GlobeSvg, GlobeGlow } from './ui/globe';
import TextHighlight from './ui/text-highlight';

export default function Hero({ onOpenContact }) {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="hero-section relative w-full h-[100dvh] min-h-[580px] md:min-h-[100dvh] text-white overflow-hidden flex flex-col items-center justify-start pt-20 sm:pt-28 md:pt-32 pb-0"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Prism WebGL Interactive Background Layer */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto" style={{ backgroundColor: '#000000' }}>
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          glow={1}
          colors={[]}
          saturation={1.5}
          noise={0}
          interactive={true}
          hoverStrength={2}
          inertia={0.05}
          intro={false}
          resolution={0.5}
          lightMode={false}
        />
      </div>

      {/* Hands Animated Layer: Transparent Human and Robot hands reaching together */}
      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <img
          src="/heroo.gif"
          alt="Human and AI hands reaching together"
          className="w-[120%] max-w-none sm:w-full md:w-[108%] lg:w-[104%] min-w-full h-auto max-h-[42vh] sm:max-h-[75vh] md:max-h-[85vh] translate-y-[10%] sm:translate-y-0 object-contain object-center pointer-events-none select-none drop-shadow-2xl"
          onError={(e) => { e.currentTarget.src = '/heroo.png'; }}
        />
      </div>

      {/* Earth Planet Visual Layer with Prism Chromatic Atmosphere (Solid deep black on mobile, smooth dissolve on desktop) */}
      <div
        className="absolute top-[56%] sm:top-[44%] md:top-[40%] lg:top-[38%] left-1/2 -translate-x-1/2 w-[165vw] sm:w-[140vw] md:w-[150vw] lg:w-[160vw] max-w-none pointer-events-none z-10 flex flex-col items-center justify-start select-none sm:[mask-image:linear-gradient(to_bottom,black_0%,black_65%,transparent_95%)] sm:[webkit-mask-image:linear-gradient(to_bottom,black_0%,black_65%,transparent_95%)]"
      >
        <GlobeGlow />
        <Globe className="w-full">
          <GlobeSvg className="w-full h-auto drop-shadow-[0_0_90px_rgba(0,229,255,0.45)]" />
        </Globe>
      </div>

      {/* Hero Content Container: Positioned cleanly ABOVE the hands on mobile, centered on desktop */}
      <div className="absolute top-[11%] xs:top-[12%] sm:top-[42%] md:top-[43%] left-1/2 -translate-x-1/2 z-20 w-full max-w-4xl px-4 sm:px-6 text-center flex flex-col items-center pointer-events-none select-none">
        {/* Refined Headline: responsive scaling */}
        <h1
          className="font-sans font-bold tracking-tight text-white leading-[1.22] sm:leading-[1.18] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-3xl text-[1.24rem] xs:text-[1.38rem] sm:text-[2rem] md:text-[clamp(1.6rem,3.2vw,3rem)]"
        >
          Where human ingenuity meets{' '}
          <TextHighlight color="#fde047" delay={0.3}>
            machine precision
          </TextHighlight>
          ,<br className="hidden sm:inline" />{' '}
          the future of software takes shape
        </h1>

        {/* Supporting text: visible on mobile as requested */}
        <p className="font-sans text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] text-white/80 font-normal tracking-normal leading-relaxed mt-1.5 xs:mt-2 sm:mt-3 max-w-[310px] xs:max-w-xs sm:max-w-lg drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          where human intuition and architectural precision move as one — engineering mission-critical digital systems built to scale.
        </p>

        {/* Single compact CTA Button with comfortable vertical spacing & touch-friendly tap target */}
        <div className="mt-3.5 xs:mt-4 sm:mt-5 flex items-center justify-center">
          <button
            onClick={scrollToServices}
            className="group pointer-events-auto inline-flex items-center gap-2 h-9 xs:h-10 px-5 xs:px-6 sm:h-11 sm:px-6 rounded-full bg-white text-[#0F172A] hover:bg-slate-100 transition-all duration-200 font-sans text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.4)] cursor-pointer hover:ring-2 hover:ring-white/40 active:scale-95"
          >
            <span>See it in action</span>
            <span className="transform group-hover:translate-x-0.5 transition-transform font-bold">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Seamless Progressive Bottom Dissolve: hidden on mobile per user instruction, active on desktop */}
      <div className="hidden sm:block absolute bottom-0 left-0 w-full sm:h-32 md:h-52 lg:h-64 bg-gradient-to-b from-transparent via-[#000000]/60 to-[#F8FAFC] pointer-events-none z-30" />
    </section>
  );
}
