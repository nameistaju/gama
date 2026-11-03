import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Layers, Terminal, Compass } from 'lucide-react';
import GamaText from './GamaText';

export default function BrandPage({ onOpenContact, onBackHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const brandPillars = [
    {
      number: '01',
      title: 'First-Principles Architecture',
      description:
        'We never build on fragile abstractions or superficial wrapper layers when sub-millisecond determinism and reliability are at stake. Every digital backbone is engineered from first principles.',
      icon: '/01-first-principles-architecture.png',
      image: '/pillar-first-principles.png',
    },
    {
      number: '02',
      title: 'Radical Transparency',
      description:
        'Code-level accountability and unvarnished honesty. Our enterprise partners have direct access to senior systems architects who write production code, with zero opaque middle management.',
      icon: '/02-radical-transparency.png',
      image: '/pillar-radical-transparency.png',
    },
    {
      number: '03',
      title: 'Engineered for Durability',
      description:
        'Software built to run for decades without architectural collapse. We design active-active distributed topologies, zero-trust cryptographic enclaves, and self-healing cloud fabrics.',
      icon: '/03-engineered-for-durability.png',
      image: '/pillar-engineered-durability.png',
    },
    {
      number: '04',
      title: 'Compounding Partnership',
      description:
        'We do not engage in one-off transactional consulting. We co-engineer alongside forward-looking enterprise leadership, building enduring institutional muscle and proprietary software advantages.',
      icon: '/04-compounding-partnership.png',
      image: '/pillar-compounding-partnership.png',
    },
  ];

  const colorMeanings = [
    {
      icon: '/architectural-integrity.png',
      border: 'border-blue-500/30 hover:border-blue-500/50',
      text: 'text-blue-400',
      title: 'Architectural Integrity',
      desc: 'Sovereign cloud resilience, active-active consensus, and deterministic SLAs that enterprises rely upon 24/7/365.',
    },
    {
      icon: '/velocity-and-dynamism.png',
      border: 'border-amber-500/30 hover:border-amber-500/50',
      text: 'text-amber-400',
      title: 'Velocity & Dynamism',
      desc: 'Rapid iteration, kernel-level low-latency execution, and relentless drive to outperform legacy benchmarks.',
    },
    {
      icon: '/autonomous-systems.png',
      border: 'border-emerald-500/30 hover:border-emerald-500/50',
      text: 'text-emerald-400',
      title: 'Autonomous Systems',
      desc: 'Sustainable edge computing, predictive industrial telemetry, and self-healing cyber-physical workflows.',
    },
    {
      icon: '/cognitive-precision.png',
      border: 'border-cyan-400/30 hover:border-cyan-400/50',
      text: 'text-cyan-300',
      title: 'Cognitive Precision',
      desc: 'Stream intelligence, private-boundary LLM orchestration, and high-throughput vector retrieval without data leakage.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070B12] text-white font-sans selection:bg-[#0457DF] selection:text-white">
      {/* ======================================================== */}
      {/* 1. CINEMATIC HERO SECTION                                 */}
      {/* ======================================================== */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 border-b border-white/10 bg-[#070B12]">
        {/* Background Image: brandhero.png */}
        <div className="absolute inset-0 z-0">
          <img
            src="/brandhero.png"
            alt="GAMA Autonomous Engineering & Precision Robotics"
            className="w-full h-full object-cover object-right lg:object-center transform scale-105"
          />
          {/* Subtle Dark Vignette & Gradient Overlays for optimal text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B12] via-[#070B12]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent to-[#070B12]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
          {/* Breadcrumbs & Back Home */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 sm:mb-8">
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Home</span>
            </button>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Who We Are</span>
            <span className="text-white/30">/</span>
            <span className="text-[#38BDF8]">Our Brand</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-md">
              Our Brand
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-200 font-light leading-relaxed drop-shadow">
              Where human ingenuity meets machine precision. Engineering the digital spine of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. EDITORIAL STATEMENT: WITH YOU FOR THE LONG RUN        */}
      {/* ======================================================== */}
      <section className="w-full bg-[#0B111D] py-18 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
                FOUNDATIONAL PROMISE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                With you for the long run
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              <p>
                In an era dominated by superficial technological fads and brittle software wrappers, <GamaText /> was established with a singular, resolute conviction: <strong className="text-white font-semibold">great digital systems are built to endure.</strong>
              </p>
              <p>
                Whether modernizing high-frequency financial ledgers, orchestrating private-boundary artificial intelligence, or automating multi-modal supply chains, we engineer from the kernel up. We believe software architecture is a long-term civic trust — where milliseconds matter, downtime is unacceptable, and failure is not an option.
              </p>
              <p>
                To our partners, <GamaText /> is not a transactional IT contractor. We are co-architects who stand beside you through explosive scale, regulatory shifts, and technical transformations — building proprietary technology assets that compound in value for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. THE GAMA MARK & CHROMATIC CONVERGENCE                 */}
      {/* ======================================================== */}
      <section className="w-full bg-[#060910] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] block mb-2">
              VISUAL IDENTITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              The Symbol of Convergence
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              The <GamaText /> mark represents the convergence of complex enterprise realities into coherent, deterministic, and elegant software systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Center / Left: Visual Brand Mark without box, text, or border */}
            <div className="lg:col-span-5 flex items-center justify-center p-2 sm:p-4">
              <img
                src="/3dlogo.gif"
                alt="The GAMA 3D Mark"
                className="w-64 sm:w-72 md:w-80 lg:w-96 max-w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
                loading="eager"
              />
            </div>

            {/* Right: 4 Cards with 1:1 Logos at top, no background around them */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left">
              {colorMeanings.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border ${item.border} transition-all duration-300 flex flex-col justify-start`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-4 select-none pointer-events-none"
                    loading="lazy"
                  />
                  <h3 className={`font-bold text-base sm:text-lg mb-2 ${item.text}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FOUNDER / ARCHITECTURAL MANIFESTO BLOCK               */}
      {/* ======================================================== */}
      <section className="w-full bg-[#080D17] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10 relative">
        <div className="max-w-4xl mx-auto text-left relative">
          {/* Big Stylized Quote Mark */}
          <div className="text-6xl sm:text-8xl text-cyan-500/20 font-serif leading-none select-none mb-4 -ml-2 sm:-ml-4">
            &ldquo;
          </div>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white font-light leading-relaxed tracking-tight mb-8">
            Building software for enterprise scale is not about chasing the loudest buzzwords. It is about understanding the physics of distributed data, respecting hardware boundaries, and delivering deterministic performance when millions of transactions depend on it. That is the <GamaText /> promise.
          </blockquote>

          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0457DF] via-[#00D4FF] to-[#10B981] p-0.5 shadow-md">
              <div className="w-full h-full rounded-full bg-[#080D17] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-wide">
                <GamaText /> Systems Engineering
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                Architectural Leadership & Founding Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. BRAND PILLARS: THE GAMA STANDARD                      */}
      {/* ======================================================== */}
      <section className="w-full bg-[#060A12] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-18 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] block mb-2">
              OUR COMMITMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              The <GamaText /> Engineering Standard
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Four non-negotiable operational principles that govern every platform we architect and every partnership we form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
            {brandPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl bg-[#0B101D] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                {/* 1. Realistic Photography Showcase Header */}
                <div className="relative w-full h-52 sm:h-64 overflow-hidden bg-slate-950 border-b border-white/10">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B101D] via-transparent to-black/35" />
                  
                  {/* Top Floating Number Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold tracking-widest shadow-lg">
                      <span className="text-cyan-400">PILLAR</span> {pillar.number}
                    </span>
                  </div>
                </div>

                {/* 2. Content with 3D Icon and Description */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3.5 sm:gap-4 mb-3.5">
                      <img
                        src={pillar.icon}
                        alt={`${pillar.title} 3D icon`}
                        className="w-11 h-11 sm:w-13 sm:h-13 object-contain shrink-0 select-none group-hover:scale-110 transition-transform duration-300 drop-shadow-md pointer-events-none"
                        loading="lazy"
                      />
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>Non-Negotiable Baseline</span>
                    </div>
                    <span className="text-slate-500 uppercase tracking-wider font-semibold">GAMA STANDARD</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. DARK BOTTOM CTA SECTION (bg1.png Ribbon Background)   */}
      {/* ======================================================== */}
      <section className="relative w-full text-white py-28 sm:py-36 px-6 sm:px-8 text-center overflow-hidden border-t border-white/10 bg-[#02050b] min-h-[460px] flex items-center justify-center">
        {/* Background Image: bg1.png with full logo visibility */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <img
            src="/bg1.png"
            alt="GAMA Ribbon Core"
            className="w-full h-full max-w-[1200px] object-contain object-center opacity-90 scale-105 sm:scale-115"
          />
          {/* Subtle edge blend into section bg */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050b] via-transparent to-[#02050b]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02050b] via-transparent to-[#02050b]" />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Build Tomorrow With <GamaText />
          </h3>
          <p className="text-base sm:text-lg text-slate-100 font-normal mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
            Partner directly with our systems engineering team to architect modern, resilient enterprise platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('Brand Consultation')}
              className="px-8 py-3.5 rounded-full bg-white text-[#0F172A] hover:bg-slate-100 font-bold text-sm transition-all duration-200 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
            >
              Connect with us
            </button>
            <button
              onClick={onBackHome}
              className="px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-white font-medium text-sm border border-white/25 backdrop-blur-md transition-colors cursor-pointer"
            >
              Explore Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
