import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Users, Award, BookOpen } from 'lucide-react';
import GamaText from './GamaText';

export default function ValuesPage({ onOpenContact, onBackHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [hoveredIdx, setHoveredIdx] = useState(null);

  const valuesList = [
    {
      title: 'Leading Change',
      icon: Zap,
      image: '/Leading Change.png',
      description:
        'Embrace innovation and adapt rapidly to frontiers in technology, AI, and distributed business systems — leading our organization and our customers to outperform and achieve sustainable, compounding growth.',
    },
    {
      title: 'Integrity',
      icon: ShieldCheck,
      image: '/Integrity.png',
      description:
        'Be authentic, honest, and uncompromisingly transparent in all our interactions and architectures — building lasting trust and enterprise credibility through every commitment we make.',
    },
    {
      title: 'Respect for Individual',
      icon: Users,
      image: '/Respect for Individual.png',
      description:
        'Value the contribution of each and every team member and client partner — fostering a collaborative atmosphere, honoring diverse perspectives, and celebrating collective success as one unified team.',
    },
    {
      title: 'Excellence',
      icon: Award,
      image: '/Excellence.png',
      description:
        'Be passionate in striving for the highest architectural and design standards in everything we build — taking full accountability for exceeding expectations in reliability, speed, and durability.',
    },
    {
      title: 'Learning and Sharing',
      icon: BookOpen,
      image: '/Learning and Sharing.png',
      description:
        'The technology landscape evolves at lightning speed. We continuously learn, seek frontier challenges, take determined action to stay ahead, and generously share our collective engineering knowledge.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-white">
      {/* ======================================================== */}
      {/* 1. HERO SECTION WITH values1.png BACKGROUND (TCS Way)     */}
      {/* ======================================================== */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-slate-950 pt-28 sm:pt-32 pb-16 sm:pb-20">
        {/* Background Image: values1.png */}
        <div className="absolute inset-0 z-0">
          <img
            src="/values1.png"
            alt="The GAMA Team - Innovation by Design"
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.75] contrast-[1.05]"
          />
          {/* Subtle Dark Gradient Overlay for optimal text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 w-full">
          {/* Back Button & Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 sm:mb-6">
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Home</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">Who We Are</span>
            <span className="text-slate-500">/</span>
            <span className="text-[#38BDF8]">The <GamaText /> Way</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl mb-6">
            Driving Innovation and Success, the <GamaText /> Way
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
            Where human ingenuity meets machine precision. Our values define how we build tomorrow, together.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MAIN VALUES MANIFESTO & LIST SECTION (Clean White)   */}
      {/* ======================================================== */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          {/* Big Editorial Lead Paragraph */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal text-slate-900 leading-[1.35] tracking-tight mb-14 sm:mb-20">
            At <GamaText />, our values guide our decisions, shape our culture, and inspire us to achieve our shared vision. The <GamaText /> Values are integral to the <GamaText /> Way.
          </h2>

          {/* Values List with Interactive Hover Image Preview */}
          <div className="space-y-8 sm:space-y-10">
            {valuesList.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  className="relative pb-8 sm:pb-10 border-b border-slate-100 last:border-b-0 transition-colors"
                >
                  <div className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
                    {/* Interactive Title with Popover Hover Image */}
                    <div
                      className="relative inline-block group/val cursor-pointer"
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <span className="text-slate-950 font-bold text-lg sm:text-xl inline-block mr-2 group-hover/val:text-[#0057EC] transition-colors underline decoration-slate-300 decoration-dotted underline-offset-4 group-hover/val:decoration-[#0057EC]">
                        {item.title}:
                      </span>

                      {/* Floating image preview positioned above the text */}
                      <div
                        className={`pointer-events-none absolute bottom-full left-0 mb-4 z-40 w-72 sm:w-84 p-2 bg-white rounded-2xl shadow-2xl border border-slate-200/90 transition-all duration-300 ease-out origin-bottom-left ${
                          isHovered
                            ? 'opacity-100 scale-100 translate-y-0 visible'
                            : 'opacity-0 scale-95 translate-y-2 invisible'
                        }`}
                        style={{
                          filter: 'drop-shadow(0 20px 25px rgba(15, 23, 42, 0.25))',
                        }}
                      >
                        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-950">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                            <span className="text-xs font-bold tracking-wide drop-shadow">
                              {item.title}
                            </span>
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-slate-100">
                              Core Value
                            </span>
                          </div>
                        </div>
                        {/* Caret pointing down */}
                        <div className="absolute -bottom-1.5 left-8 w-3.5 h-3.5 bg-white border-r border-b border-slate-200/90 transform rotate-45" />
                      </div>
                    </div>

                    <span>{item.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. DARK BOTTOM CTA SECTION (bg1.png Ribbon Background)   */}
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
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Unlock Enterprise Intelligence
          </h3>
          <p className="text-base sm:text-lg text-slate-100 font-normal mb-8 sm:mb-10 drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
            Reimagine your future.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('Enterprise Consultation')}
              className="px-8 py-3.5 rounded-full bg-white text-[#0F172A] hover:bg-slate-100 font-bold text-sm transition-all duration-200 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
            >
              Connect with us
            </button>
            <button
              onClick={() => onOpenContact('Careers & Talent')}
              className="px-8 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-white font-medium text-sm border border-white/25 backdrop-blur-md transition-colors cursor-pointer"
            >
              Join our team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
