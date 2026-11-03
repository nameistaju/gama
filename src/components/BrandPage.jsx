import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Layers, Terminal, Compass } from 'lucide-react';

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
      icon: Terminal,
    },
    {
      number: '02',
      title: 'Radical Transparency',
      description:
        'Code-level accountability and unvarnished honesty. Our enterprise partners have direct access to senior systems architects who write production code, with zero opaque middle management.',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'Engineered for Durability',
      description:
        'Software built to run for decades without architectural collapse. We design active-active distributed topologies, zero-trust cryptographic enclaves, and self-healing cloud fabrics.',
      icon: Layers,
    },
    {
      number: '04',
      title: 'Compounding Partnership',
      description:
        'We do not engage in one-off transactional consulting. We co-engineer alongside forward-looking enterprise leadership, building enduring institutional muscle and proprietary software advantages.',
      icon: Compass,
    },
  ];

  const colorMeanings = [
    {
      color: 'bg-blue-500',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      title: 'Architectural Integrity',
      desc: 'Sovereign cloud resilience, active-active consensus, and deterministic SLAs that enterprises rely upon 24/7/365.',
    },
    {
      color: 'bg-amber-500',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
      title: 'Velocity & Dynamism',
      desc: 'Rapid iteration, kernel-level low-latency execution, and relentless drive to outperform legacy benchmarks.',
    },
    {
      color: 'bg-emerald-500',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      title: 'Autonomous Systems',
      desc: 'Sustainable edge computing, predictive industrial telemetry, and self-healing cyber-physical workflows.',
    },
    {
      color: 'bg-cyan-400',
      border: 'border-cyan-400/30',
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
                In an era dominated by superficial technological fads and brittle software wrappers, GAMA was established with a singular, resolute conviction: <strong className="text-white font-semibold">great digital systems are built to endure.</strong>
              </p>
              <p>
                Whether modernizing high-frequency financial ledgers, orchestrating private-boundary artificial intelligence, or automating multi-modal supply chains, we engineer from the kernel up. We believe software architecture is a long-term civic trust — where milliseconds matter, downtime is unacceptable, and failure is not an option.
              </p>
              <p>
                To our partners, GAMA is not a transactional IT contractor. We are co-architects who stand beside you through explosive scale, regulatory shifts, and technical transformations — building proprietary technology assets that compound in value for decades to come.
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
              The GAMA mark represents the convergence of complex enterprise realities into coherent, deterministic, and elegant software systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Center / Left: Visual Brand Mark */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-emerald-500/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <img
                src="/Colorful Folded Ribbon GAMMA Logo.png"
                alt="The GAMA Prism Mark"
                className="w-56 sm:w-64 h-auto object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="mt-8 text-center relative z-10">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  The Continuous Fold
                </span>
                <span className="text-sm text-slate-300">
                  Infinite resilience across sovereign cloud and edge
                </span>
              </div>
            </div>

            {/* Right: Chromatic Breakdown */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {colorMeanings.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border ${item.border} transition-all duration-300`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className={`w-3 h-3 rounded-full ${item.color} shadow-sm`} />
                    <h3 className={`font-semibold text-base ${item.text}`}>
                      {item.title}
                    </h3>
                  </div>
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
            Building software for enterprise scale is not about chasing the loudest buzzwords. It is about understanding the physics of distributed data, respecting hardware boundaries, and delivering deterministic performance when millions of transactions depend on it. That is the GAMA promise.
          </blockquote>

          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0457DF] via-[#00D4FF] to-[#10B981] p-0.5 shadow-md">
              <div className="w-full h-full rounded-full bg-[#080D17] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-wide">
                GAMA Systems Engineering
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
              The GAMA Engineering Standard
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Four non-negotiable operational principles that govern every platform we architect and every partnership we form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
            {brandPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-mono font-bold text-white/30 group-hover:text-cyan-400 transition-colors">
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-200 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Non-Negotiable Baseline</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. DARK BOTTOM CTA SECTION (bg1.png Ribbon Background)   */}
      {/* ======================================================== */}
      <section className="relative w-full text-white py-24 sm:py-32 px-6 sm:px-8 text-center overflow-hidden border-t border-white/10">
        {/* Background Image: bg1.png with cinematic dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg1.png"
            alt="GAMA Ribbon Core"
            className="w-full h-full object-cover object-center opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050b] via-[#050B14]/80 to-[#02050b]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
            Build Tomorrow With GAMA
          </h3>
          <p className="text-base sm:text-lg text-slate-200 font-light mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Partner directly with our systems engineering team to architect modern, resilient enterprise platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('Brand Consultation')}
              className="px-8 py-3.5 rounded-full bg-white text-[#0F172A] hover:bg-slate-100 font-bold text-sm transition-all duration-200 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              Connect with us
            </button>
            <button
              onClick={onBackHome}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
            >
              Explore Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
