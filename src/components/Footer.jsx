'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import GamaText from './GamaText';

export default function Footer({ onOpenContact, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Horizon curve mathematical bezier matching globe-earth.png apex (512, 190)
  const horizonPath = 'M -60 510 C 145 255, 350 190, 512 190 C 674 190, 879 255, 1084 510';

  return (
    <footer
      className="relative w-full bg-[#050A18] text-white pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12 overflow-hidden flex flex-col justify-between selection:bg-[#00D4FF] selection:text-[#050A18] min-h-[520px] sm:min-h-[560px] border-t border-slate-800/60"
      style={{
        background: 'radial-gradient(120% 80% at 50% 0%, #0A1428 0%, #050A18 60%, #020611 100%)',
      }}
    >
      {/* Subtle Top & Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[260px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container (Layered safely above the Earth) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 md:px-12 flex flex-col justify-between flex-grow">
        {/* Top Area: Brand (Left) & Explore Navigation (Right) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 md:gap-16 pb-20 sm:pb-24">
          {/* Left Section — Brand */}
          <div className="flex flex-col items-start max-w-md">
            <div
              onClick={() => (onNavigate ? onNavigate('home') : scrollToTop())}
              className="inline-flex items-center cursor-pointer group"
            >
              <img
                src="/gama_white_wordmark_transparent.png"
                alt="GAMA Technologies"
                className="h-9 sm:h-10 md:h-11 w-auto max-w-[220px] sm:max-w-[250px] object-contain group-hover:scale-105 transition-transform duration-200 select-none pointer-events-none"
              />
            </div>

            <p className="font-sans text-sm sm:text-[15px] text-slate-400 font-normal leading-relaxed mt-4 sm:mt-5">
              We build intelligent, scalable digital solutions that turn ambitious ideas into real-world impact.
            </p>
          </div>

          {/* Right Section — Explore Navigation */}
          <div className="flex flex-col items-start md:items-end">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 sm:mb-5">
              Explore
            </span>

            <nav className="flex flex-col md:items-end gap-3 sm:gap-3.5 font-sans">
              <button
                onClick={() => (onNavigate ? onNavigate('home') : scrollToTop())}
                className="text-sm sm:text-base text-slate-300 hover:text-white hover:translate-x-1 md:hover:-translate-x-1 transition-all cursor-pointer text-left md:text-right"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate && onNavigate('capabilities')}
                className="text-sm sm:text-base text-slate-300 hover:text-white hover:translate-x-1 md:hover:-translate-x-1 transition-all cursor-pointer text-left md:text-right"
              >
                Capabilities
              </button>
              <button
                onClick={() => onNavigate && onNavigate('services')}
                className="text-sm sm:text-base text-slate-300 hover:text-white hover:translate-x-1 md:hover:-translate-x-1 transition-all cursor-pointer text-left md:text-right"
              >
                Services
              </button>
              <button
                onClick={() => onNavigate && onNavigate('about')}
                className="text-sm sm:text-base text-slate-300 hover:text-white hover:translate-x-1 md:hover:-translate-x-1 transition-all cursor-pointer text-left md:text-right"
              >
                About Us
              </button>
              <button
                onClick={onOpenContact}
                className="text-sm sm:text-base text-slate-300 hover:text-[#00D4FF] hover:translate-x-1 md:hover:-translate-x-1 transition-all cursor-pointer inline-flex items-center gap-1.5 text-left md:text-right font-medium"
              >
                <span>Contact Us</span>
                <Phone className="w-3.5 h-3.5 text-[#00D4FF]" />
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Divider, Copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-sans">
          <span>© 2026 <GamaText /> Technologies. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <span className="transform group-hover:-translate-y-0.5 transition-transform font-bold">↑</span>
          </button>
        </div>
      </div>

      {/* Seamless Earth Planet Horizon (Positioned primarily in the bottom section behind content) */}
      <div
        className="absolute -bottom-16 sm:-bottom-24 md:-bottom-56 lg:-bottom-72 left-1/2 -translate-x-1/2 w-[145vw] sm:w-[135vw] md:w-[125vw] max-w-[1600px] pointer-events-none select-none z-0 flex flex-col items-center"
        style={{
          maskImage: 'linear-gradient(to top, black 0%, black 50%, rgba(0,0,0,0.6) 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 50%, rgba(0,0,0,0.6) 75%, transparent 100%)',
        }}
      >
        {/* Diffuse Atmospheric Glow behind Horizon Apex */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[85vw] max-w-4xl h-48 rounded-full blur-[100px] pointer-events-none opacity-80 bg-gradient-to-r from-violet-600/25 via-cyan-400/40 via-emerald-400/25 to-amber-400/20" />

        {/* Curved Earth SVG with Hero Prism Atmosphere & Clean Continents (No Dots) */}
        <svg
          viewBox="0 110 1024 400"
          className="w-full h-auto select-none overflow-visible drop-shadow-[0_0_80px_rgba(0,212,255,0.4)]"
          preserveAspectRatio="xMidYMin meet"
        >
          <defs>
            {/* Precise clipPath for planet continents following horizon curve */}
            <clipPath id="footerEarthClip">
              <path d="M -100 550 C 145 255, 350 190, 512 190 C 674 190, 879 255, 1150 550 L 1150 850 L -100 850 Z" />
            </clipPath>

            {/* Prism Spectral Rainbow Gradient (Matching Hero section) */}
            <linearGradient id="footerPrismAtmosphere" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.45" />    {/* Electric Violet */}
              <stop offset="12%" stopColor="#2563EB" stopOpacity="0.8" />     {/* Deep Blue */}
              <stop offset="26%" stopColor="#00D4FF" stopOpacity="1" />       {/* Bright Cyan */}
              <stop offset="40%" stopColor="#38BDF8" stopOpacity="1" />       {/* Sky Blue */}
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />       {/* White-Hot Center Flare */}
              <stop offset="60%" stopColor="#10B981" stopOpacity="0.95" />    {/* Emerald / Mint Green */}
              <stop offset="74%" stopColor="#F59E0B" stopOpacity="0.85" />    {/* Golden Amber */}
              <stop offset="88%" stopColor="#EC4899" stopOpacity="0.75" />    {/* Pink / Magenta */}
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />    {/* Violet */}
            </linearGradient>

            {/* Wide Spectral Atmospheric Bloom */}
            <linearGradient id="footerPrismBloom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
              <stop offset="15%" stopColor="#2563EB" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#00D4FF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
              <stop offset="68%" stopColor="#10B981" stopOpacity="0.85" />
              <stop offset="85%" stopColor="#F59E0B" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
            </linearGradient>

            {/* Glow Filters */}
            <filter id="footerGlowWide" x="-30%" y="-50%" width="160%" height="200%">
              <feGaussianBlur stdDeviation="30" result="blur" />
            </filter>
            <filter id="footerGlowMid" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="12" result="blur" />
            </filter>
            <filter id="footerGlowSharp" x="-10%" y="-30%" width="120%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
            </filter>
          </defs>

          {/* Clean Earth Map Image without ANY beacon dots */}
          <image
            href="/globe-earth.png"
            x="0"
            y="0"
            width="1024"
            height="768"
            clipPath="url(#footerEarthClip)"
            preserveAspectRatio="none"
          />

          {/* Deep Atmosphere Outer Spectral Bloom along Horizon Arc */}
          <path
            d={horizonPath}
            fill="none"
            stroke="url(#footerPrismBloom)"
            strokeWidth="45"
            strokeLinecap="round"
            filter="url(#footerGlowWide)"
            opacity="0.8"
            pointerEvents="none"
          />

          {/* Mid Chromatic Atmospheric Glow along Horizon Arc */}
          <path
            d={horizonPath}
            fill="none"
            stroke="url(#footerPrismAtmosphere)"
            strokeWidth="18"
            strokeLinecap="round"
            filter="url(#footerGlowMid)"
            opacity="0.95"
            pointerEvents="none"
          />

          {/* Intense Razor Atmospheric Rim along Horizon Arc with Prism Spectrum */}
          <path
            d={horizonPath}
            fill="none"
            stroke="url(#footerPrismAtmosphere)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#footerGlowSharp)"
            opacity="1"
            pointerEvents="none"
          />
        </svg>
      </div>

      {/* Layered transparent gradient to gently soften the Earth's lower horizon into deep navy */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020611] via-[#050A18]/60 to-transparent pointer-events-none z-[1]" />
    </footer>
  );
}
