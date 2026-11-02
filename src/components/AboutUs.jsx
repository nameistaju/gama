import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Target, Award, CheckCircle2, Compass, Cpu, Layers } from 'lucide-react';
import TextHighlight from './ui/text-highlight';

export default function AboutUs({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('brand');

  const scrollToContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const brandHighlights = [
    {
      icon: Cpu,
      title: 'Human Ingenuity & Machine Precision',
      desc: 'We engineer at the precise intersection where human intuition and architectural discipline unite to build resilient systems.',
    },
    {
      icon: ShieldCheck,
      title: 'Mission-Critical Engineering',
      desc: 'Bespoke enterprise architectures built with zero tolerance for failure, designed to operate with 99.99% reliability.',
    },
    {
      icon: Layers,
      title: 'Global Scalability by Design',
      desc: 'From cloud-native data centers to distributed microservices, our code is crafted to handle exponential demand effortlessly.',
    },
  ];

  const valuesHighlights = [
    {
      icon: Target,
      title: 'Excellence in Every Line',
      desc: 'We reject cookie-cutter templates. Every architecture, database index, and frontend interaction is built with relentless craft.',
    },
    {
      icon: Award,
      title: 'Measurable Enterprise Impact',
      desc: 'We define success not by vanity deliverables, but by tangible business acceleration, uptime, and competitive superiority.',
    },
    {
      icon: Compass,
      title: 'Radical Transparency & Stewardship',
      desc: 'True engineering partnership grounded in honesty, open architectural reviews, and unwavering accountability for what we ship.',
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#000000] text-white pt-16 sm:pt-24 md:pt-28 pb-20 sm:pb-28 overflow-hidden z-20"
    >
      {/* Background Ambient Glow Accents */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20 bg-gradient-to-tr from-[#0457DF] via-[#00D4FF] to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 translate-x-1/3 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-15 bg-gradient-to-bl from-[#7C3AED] via-[#0457DF] to-transparent"
        aria-hidden="true"
      />

      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Top Grid: Manifesto Header (Left) + Interactive Brand & Values Selector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Inspiring About Us Manifesto */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold tracking-wider uppercase mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span>Who We Are</span>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.14] mb-6">
              About{' '}
              <TextHighlight color="#38BDF8" delay={0.2}>
                Us
              </TextHighlight>
            </h2>

            {/* Core Manifesto Text (Inspired directly by TCS inspiration) */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
              We deliver excellence and create value for customers and communities — everyday. With the best talent and the latest technology, we help customers turn complexity into opportunities and create meaningful change.
            </p>

            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed mb-8 max-w-xl">
              Founded on the belief that software should be engineered with architectural discipline and artistic precision, GAMA partners with ambitious enterprises to build platforms that withstand tomorrow's scale.
            </p>

            {/* Discover the Difference CTA Button */}
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#0F172A] hover:bg-[#00D4FF] hover:text-[#0F172A] transition-all duration-300 font-sans text-sm sm:text-base font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] cursor-pointer active:scale-95"
            >
              <span>Discover the difference</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Column: Brand & Values Interactive Showcase */}
          <div className="lg:col-span-6 w-full">
            {/* Tab Controls */}
            <div className="flex items-center p-1.5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6 w-full sm:w-fit">
              <button
                onClick={() => setActiveTab('brand')}
                id="about-brand"
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-sans text-sm sm:text-base font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'brand'
                    ? 'bg-white text-[#0F172A] shadow-md ring-1 ring-white/40'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Our Brand
              </button>
              <button
                onClick={() => setActiveTab('values')}
                id="about-values"
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-sans text-sm sm:text-base font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'values'
                    ? 'bg-white text-[#0F172A] shadow-md ring-1 ring-white/40'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Our Values
              </button>
            </div>

            {/* Content Cards Container */}
            <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              {activeTab === 'brand' ? (
                <div className="flex flex-col gap-5 transition-opacity duration-300 animate-fadeIn">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#0457DF]/20 border border-[#0457DF]/40 flex items-center justify-center text-[#38BDF8]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">The GAMA Brand Promise</h3>
                      <p className="text-xs sm:text-sm text-slate-400">Engineering distinction built for generational durability</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {brandHighlights.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="group p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/15 transition-all duration-200 flex items-start gap-4 text-left"
                        >
                          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4 text-[#38BDF8]" />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-5 transition-opacity duration-300 animate-fadeIn">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#059669]/20 border border-[#059669]/40 flex items-center justify-center text-[#34D399]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Core Architectural Values</h3>
                      <p className="text-xs sm:text-sm text-slate-400">The guiding tenets behind every platform we construct</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {valuesHighlights.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="group p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/15 transition-all duration-200 flex items-start gap-4 text-left"
                        >
                          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4 text-[#34D399]" />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Seamless Transition Gradient into the Light Editorial / Globe Section */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 sm:h-28 md:h-36 bg-gradient-to-b from-transparent via-[#F8FAFC]/40 to-[#F8FAFC] pointer-events-none select-none z-10"
        aria-hidden="true"
      />
    </section>
  );
}
