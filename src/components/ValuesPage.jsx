import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Users, Award, BookOpen } from 'lucide-react';

export default function ValuesPage({ onOpenContact, onBackHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const valuesList = [
    {
      title: 'Leading Change',
      icon: Zap,
      description:
        'Embrace innovation and adapt rapidly to frontiers in technology, AI, and distributed business systems — leading our organization and our customers to outperform and achieve sustainable, compounding growth.',
    },
    {
      title: 'Integrity',
      icon: ShieldCheck,
      description:
        'Be authentic, honest, and uncompromisingly transparent in all our interactions and architectures — building lasting trust and enterprise credibility through every commitment we make.',
    },
    {
      title: 'Respect for Individual',
      icon: Users,
      description:
        'Value the contribution of each and every team member and client partner — fostering a collaborative atmosphere, honoring diverse perspectives, and celebrating collective success as one unified team.',
    },
    {
      title: 'Excellence',
      icon: Award,
      description:
        'Be passionate in striving for the highest architectural and design standards in everything we build — taking full accountability for exceeding expectations in reliability, speed, and durability.',
    },
    {
      title: 'Learning and Sharing',
      icon: BookOpen,
      description:
        'The technology landscape evolves at lightning speed. We continuously learn, seek frontier challenges, take determined action to stay ahead, and generously share our collective engineering knowledge.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-white pt-24 sm:pt-28">
      {/* ======================================================== */}
      {/* 1. HERO SECTION WITH values1.png BACKGROUND (TCS Way)     */}
      {/* ======================================================== */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden bg-slate-950">
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
            <span className="text-[#38BDF8]">The GAMA Way</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl mb-6">
            Driving Innovation and Success, the GAMA Way
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
          {/* Big Editorial Lead Paragraph (matching TCS exact phrasing) */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal text-slate-900 leading-[1.35] tracking-tight mb-14 sm:mb-20">
            At GAMA, our values guide our decisions, shape our culture, and inspire us to achieve our shared vision. The GAMA Values are integral to the GAMA Way.
          </h2>

          {/* Values List */}
          <div className="space-y-8 sm:space-y-10">
            {valuesList.map((item, idx) => (
              <div
                key={idx}
                className="group pb-8 sm:pb-10 border-b border-slate-100 last:border-b-0 transition-colors"
              >
                <div className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
                  <span className="text-slate-950 font-bold text-lg sm:text-xl inline-block mr-2 group-hover:text-[#0457DF] transition-colors">
                    {item.title}:
                  </span>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. DARK BOTTOM CTA SECTION (TCS Inspo)                   */}
      {/* ======================================================== */}
      <section className="w-full bg-[#090D16] text-white py-20 sm:py-28 px-6 sm:px-8 text-center relative overflow-hidden">
        {/* Subtle radial ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0457DF]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
            Unlock Enterprise Intelligence
          </h3>
          <p className="text-base sm:text-lg text-slate-400 font-normal mb-8 sm:mb-10">
            Reimagine your future.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('Enterprise Consultation')}
              className="px-8 py-3 rounded-full border border-white/25 hover:border-white text-white font-medium text-sm transition-all duration-200 hover:bg-white hover:text-[#0F172A] cursor-pointer shadow-sm hover:scale-[1.02]"
            >
              Connect with us
            </button>
            <button
              onClick={() => onOpenContact('Careers & Talent')}
              className="px-8 py-3 rounded-full border border-white/25 hover:border-white text-white font-medium text-sm transition-all duration-200 hover:bg-white hover:text-[#0F172A] cursor-pointer shadow-sm hover:scale-[1.02]"
            >
              Join our team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
