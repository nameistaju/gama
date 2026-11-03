import React from 'react';
import { ArrowRight } from 'lucide-react';
import TextHighlight from './ui/text-highlight';
import GamaText from './GamaText';

export default function AboutUs({ onOpenContact }) {
  const scrollToContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        {/* Top Grid: Manifesto (Left) + Corporate Handshake Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Inspiring About Us Manifesto */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Section Headline (Pill removed as requested) */}
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
              Founded on the belief that software should be engineered with architectural discipline and artistic precision, <GamaText /> partners with ambitious enterprises to build platforms that withstand tomorrow's scale.
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

          {/* Right Column: Corporate Handshake Over Colorful Logo Image */}
          <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <img
                src="/Corporate Handshake Over Colorful Logo.png"
                alt="Corporate Handshake Over Colorful GAMA Logo"
                className="w-full h-auto object-contain select-none pointer-events-none rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
