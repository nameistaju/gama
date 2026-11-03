import React, { useState, useEffect, useRef } from 'react';
import { X, Maximize2, Minimize2, ArrowRight, ShieldCheck, Cpu, Database, Activity, Layers, Terminal } from 'lucide-react';
import { getServiceBySlugOrName } from '../data/servicesData';

export default function ServiceModal({ serviceId, onClose, onOpenContact }) {
  const [data, setData] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 (modal) to 1 (full page)
  const [isForcedFull, setIsForcedFull] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!serviceId) return;
    const found = getServiceBySlugOrName(serviceId);
    setData(found);
    setScrollProgress(0);
    setIsForcedFull(false);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [serviceId]);

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
    if (isForcedFull) return;
    const st = e.currentTarget.scrollTop;
    // Over the first 140px of scrolling, transition from 0 to 1
    const p = Math.min(1, Math.max(0, st / 140));
    setScrollProgress(p);
  };

  const effectiveProgress = isForcedFull ? 1 : scrollProgress;

  // Interpolated styles for smooth expansion
  const modalRadius = Math.round(28 * (1 - effectiveProgress));
  const modalPadding = Math.round(16 * (1 - effectiveProgress));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 transition-all duration-300"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop with Blur */}
      <div
        onClick={() => {
          if (effectiveProgress < 0.2) onClose?.();
        }}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Floating Minimal Close Button */}
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
          width: effectiveProgress === 1 ? '100vw' : `calc(100vw - ${modalPadding * 2}px)`,
          maxWidth: effectiveProgress === 1 ? '100vw' : '1160px',
          height: effectiveProgress === 1 ? '100vh' : '86vh',
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
          {/* Hero Section */}
          <section className="relative px-6 sm:px-12 md:px-16 pt-12 sm:pt-16 pb-14 bg-gradient-to-b from-[#0a1526] via-[#050B14] to-[#050B14] border-b border-white/10">
            {/* Background Glow */}
            <div
              className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-gradient-to-tr from-cyan-500/20 to-blue-600/10 blur-[130px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400">
                <Cpu className="w-3.5 h-3.5" />
                <span>ENTERPRISE SPECIFICATION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
                {data.name}
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-cyan-200/90 font-light leading-relaxed mb-6">
                {data.headline}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
                {data.overview}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap items-center gap-2 mb-10">
                <span className="text-xs uppercase font-mono text-slate-400 mr-2">Core Stack:</span>
                {data.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    onOpenContact?.(data.name);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0457DF] hover:bg-[#00D4FF] text-white hover:text-[#0F172A] font-semibold text-sm transition-all duration-200 shadow-lg cursor-pointer"
                >
                  <span>Consult with a Systems Architect</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('service-pillars');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-colors cursor-pointer"
                >
                  <span>View Technical Pillars</span>
                </button>
              </div>
            </div>
          </section>

          {/* Section 1: The Architectural Paradigm Shift */}
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

          {/* Section 2: Core Engineering Pillars */}
          <section id="service-pillars" className="px-6 sm:px-12 md:px-16 py-14 sm:py-16 border-b border-white/10">
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

          {/* Section 3: Technical Blueprint & Infrastructure */}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2">
                    <Terminal className="w-3.5 h-3.5" />
                    Runtime & Logic
                  </div>
                  <div className="text-sm font-semibold text-white">Rust / Go / Python</div>
                  <div className="text-xs text-slate-400 mt-1">Memory safety, zero-copy serialization, high concurrency</div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2">
                    <Activity className="w-3.5 h-3.5" />
                    Data & Telemetry
                  </div>
                  <div className="text-sm font-semibold text-white">Kafka / Prometheus / eBPF</div>
                  <div className="text-xs text-slate-400 mt-1">Sub-second event propagation with low system overhead</div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2">
                    <Database className="w-3.5 h-3.5" />
                    Storage & Lakehouse
                  </div>
                  <div className="text-sm font-semibold text-white">ClickHouse / Iceberg / PG</div>
                  <div className="text-xs text-slate-400 mt-1">Columnar analytics and ACID transactional guarantees</div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Security & Mesh
                  </div>
                  <div className="text-sm font-semibold text-white">mTLS / WireGuard / SPIFFE</div>
                  <div className="text-xs text-slate-400 mt-1">Zero-trust cryptographic isolation and strict micro-segmentation</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Enterprise Consultation Call-to-Action */}
          <section className="px-6 sm:px-12 md:px-16 py-16 sm:py-20 bg-gradient-to-t from-[#02050b] to-[#050B14]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Partner with GAMA on {data.name}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Connect directly with our engineering leadership to review system requirements, migration roadmaps, or distributed system designs.
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
