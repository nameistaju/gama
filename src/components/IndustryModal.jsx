import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, ShieldCheck, Database, Activity, Layers, Terminal } from 'lucide-react';
import { getIndustryBySlugOrName } from '../data/industriesData';
import { TechChip, TechLogo } from './TechLogo';

export default function IndustryModal({ industryId, onClose, onOpenContact }) {
  const [data, setData] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 (modal) to 1 (full page)
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!industryId) return;
    const found = getIndustryBySlugOrName(industryId);
    setData(found);
    setScrollProgress(0);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [industryId]);

  // Lock body scroll while modal is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!data) return null;

  // Handle scroll to smoothly expand to full page
  const handleScroll = (e) => {
    const st = e.currentTarget.scrollTop;
    // Over the first 140px of scrolling, transition from 0 to 1
    const p = Math.min(1, Math.max(0, st / 140));
    setScrollProgress(p);
  };

  // Interpolated styles for smooth expansion
  // At p = 0: floating modal (rounded-3xl, centered with padding/inset, max-w-5xl, 84vh)
  // At p = 1: full page (rounded-none, inset-0, 100vw, 100vh)
  const modalRadius = Math.round(28 * (1 - scrollProgress));
  const modalPadding = Math.round(16 * (1 - scrollProgress));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 transition-all duration-300"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop with Blur */}
      <div
        onClick={() => {
          if (scrollProgress < 0.2) onClose?.();
        }}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Floating Minimal Close Button (Replaces entire top navbar) */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 sm:top-7 sm:right-7 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 group"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
      </button>

      {/* The Morphing Modal Card */}
      <div
        ref={containerRef}
        style={{
          borderRadius: `${modalRadius}px`,
          width: scrollProgress === 1 ? '100vw' : `calc(100vw - ${modalPadding * 2}px)`,
          maxWidth: scrollProgress === 1 ? '100vw' : '1160px',
          height: scrollProgress === 1 ? '100vh' : '86vh',
          maxHeight: '100vh',
        }}
        className="relative z-10 flex flex-col bg-[#050B14] text-white border border-white/15 shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden transition-[width,height,border-radius,max-width] duration-200 ease-out"
      >
        {/* Scrollable Content Container */}
        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto overflow-x-hidden text-left scroll-smooth"
        >
          {/* ======================================================== */}
          {/* 1. HERO SECTION WITH IMAGE BACKGROUND (TCS Inspo)         */}
          {/* ======================================================== */}
          <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center px-6 sm:px-12 md:px-16 pt-16 sm:pt-20 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
            {/* Background Photography Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={data.heroImage || `/industries/${data.id}.png`}
                alt={data.name}
                className="w-full h-full object-cover object-center transform scale-[1.02] filter brightness-[0.82] contrast-[1.05]"
                loading="eager"
              />
              {/* High-end cinematic dark overlays for optimal readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-black/40" />
            </div>

            {/* Clean Minimal Hero Content matching Reference Image */}
            <div className="relative z-10 max-w-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {/* Breadcrumb matching TCS: INDUSTRY / EDUCATION */}
              <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-300 mb-4 sm:mb-6">
                INDUSTRY / {data.name.toUpperCase()}
              </div>

              {/* Bold Headline matching TCS: Education next: Immersive, personalized, connected */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5 sm:mb-6">
                {data.heroTitle || `${data.name} next: Boundaryless, real-time, resilient`}
              </h1>

              {/* Concise 2-line Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mb-8">
                {data.overview}
              </p>

              {/* Action Trigger */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    onOpenContact?.(data.name);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0457DF] hover:bg-[#00D4FF] text-white hover:text-[#0F172A] font-semibold text-sm transition-all duration-200 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
                >
                  <span>Consult with an Architect</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('architecture-pillars');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-md border border-white/15 transition-colors cursor-pointer"
                >
                  <span>Explore Architecture</span>
                </button>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* 2. THE MODERNIZATION PARADIGM                            */}
          {/* ======================================================== */}
          <section className="px-6 sm:px-12 md:px-16 py-14 sm:py-16 border-b border-white/10 bg-[#070e1a]/60">
            <div className="max-w-5xl">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  SYSTEM EVOLUTION
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  The Modernization Paradigm
                </h2>
                <p className="text-sm text-slate-400 mt-2">
                  How modern distributed engineering replaces legacy bottlenecks in {data.name.toLowerCase()}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Legacy Card */}
                <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20 text-left">
                  <div className="flex items-center gap-2 mb-3 text-red-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Traditional Bottleneck
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {data.shift.legacy}
                  </p>
                </div>

                {/* Modern GAMA Card */}
                <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-left">
                  <div className="flex items-center gap-2 mb-3 text-cyan-300 font-mono text-xs uppercase tracking-wider font-semibold">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    GAMA Architectural Standard
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {data.shift.modern}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* 3. CORE ENGINEERING PILLARS                              */}
          {/* ======================================================== */}
          <section id="architecture-pillars" className="px-6 sm:px-12 md:px-16 py-14 sm:py-16 border-b border-white/10">
            <div className="max-w-5xl">
              <div className="mb-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
                  TECHNICAL ARCHITECTURE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  Core Engineering Pillars
                </h2>
                <p className="text-sm text-slate-400 mt-2">
                  Four foundational technical capabilities engineered for deterministic reliability and scale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-left flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-mono font-bold text-white/30 group-hover:text-cyan-400 transition-colors">
                          0{idx + 1}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                          {idx === 0 && <Database className="w-4 h-4" />}
                          {idx === 1 && <Activity className="w-4 h-4" />}
                          {idx === 2 && <Layers className="w-4 h-4" />}
                          {idx === 3 && <ShieldCheck className="w-4 h-4" />}
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-cyan-200 transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Deterministic SLA</span>
                      <span className="text-cyan-400">99.999% Design Target</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* 4. REFERENCE TECHNOLOGY STACK                            */}
          {/* ======================================================== */}
          <section className="px-6 sm:px-12 md:px-16 py-14 sm:py-16 border-b border-white/10 bg-[#040810]">
            <div className="max-w-5xl">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  SYSTEM FOUNDATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  Reference Implementation Stack
                </h2>
                <p className="text-sm text-slate-400 mt-2">
                  Built on modern open-source protocols, memory-safe languages, and cloud-native standards.
                </p>
              </div>

              {/* Categorized Stack Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2.5">
                    <Terminal className="w-3.5 h-3.5" />
                    Runtime & Logic
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                    <div className="flex items-center -space-x-1">
                      <TechLogo name="Rust" className="w-4 h-4" />
                      <TechLogo name="Go" className="w-4 h-4 ml-1" />
                      <TechLogo name="TypeScript" className="w-4 h-4 ml-1" />
                    </div>
                    <span>Rust / Go / TS</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Memory safety, zero-copy serialization, high concurrency</div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2.5">
                    <Activity className="w-3.5 h-3.5" />
                    Stream Ingestion
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                    <div className="flex items-center -space-x-1">
                      <TechLogo name="Apache Kafka" className="w-4 h-4" />
                      <TechLogo name="WebSockets" className="w-4 h-4 ml-1" />
                    </div>
                    <span>Kafka / WebSockets</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Sub-second event propagation with low system overhead</div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2.5">
                    <Database className="w-3.5 h-3.5" />
                    Storage & Ledger
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                    <div className="flex items-center -space-x-1">
                      <TechLogo name="PostgreSQL" className="w-4 h-4" />
                      <TechLogo name="ClickHouse" className="w-4 h-4 ml-1" />
                    </div>
                    <span>Postgres / ClickHouse</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Columnar analytics and ACID transactional guarantees</div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Security & Enclave
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                    <div className="flex items-center -space-x-1">
                      <TechLogo name="eBPF" className="w-4 h-4" />
                      <TechLogo name="WireGuard" className="w-4 h-4 ml-1" />
                    </div>
                    <span>eBPF / Zero-Trust</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Kernel-level observability & cryptographic non-repudiation</div>
                </div>
              </div>

              {/* Core Stack Chips */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs uppercase font-mono text-slate-400 mr-2 tracking-wider">Specific Stack:</span>
                {data.techStack.map((tech) => (
                  <TechChip key={tech} name={tech} />
                ))}
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* 5. ENTERPRISE CONSULTATION CALL-TO-ACTION                */}
          {/* ======================================================== */}
          <section className="px-6 sm:px-12 md:px-16 py-16 sm:py-20 bg-gradient-to-t from-[#02050b] to-[#050B14]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Architecting the Future of {data.name}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Connect directly with our senior engineering team to review system requirements, migration roadmaps, or distributed system designs.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => {
                    onOpenContact?.(data.name);
                  }}
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] font-bold text-sm transition-all duration-200 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
                >
                  Schedule Architectural Review
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-colors cursor-pointer"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
