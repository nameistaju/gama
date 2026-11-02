import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import TextHighlight from './ui/text-highlight';

export default function SolutionsSection({ onOpenContact, onSelectIndustry }) {
  // 'industries' | 'services' | null
  const [activePopup, setActivePopup] = useState(null);

  // Industries list matching Image 2 with exact 3-column grouping
  const industriesCol1 = [
    'Banking',
    'Capital Markets',
    'Insurance',
    'Communications, Media, and Information Services',
  ];

  const industriesCol2 = [
    'Consumer Packaged Goods and Distribution',
    'Education',
    'Energy, Resources, and Utilities',
    'Life Sciences',
    'Healthcare',
  ];

  const industriesCol3 = [
    'High Tech',
    'Retail',
    'Manufacturing',
    'Public Services',
    'Travel and Logistics',
  ];

  // Services list matching selected items from user reference
  const servicesCol1 = [
    'Artificial Intelligence and Data & Analytics',
    'AI-led Data Centres',
  ];

  const servicesCol2 = [
    'Cloud',
    'Consulting',
  ];

  const servicesCol3 = [
    'Industrial Autonomy & Engineering',
    'Network Solutions and Services',
  ];

  const handleIndustryClick = (name) => {
    if (onSelectIndustry) {
      onSelectIndustry(name);
    } else if (onOpenContact) {
      onOpenContact(name);
    }
  };

  const handleItemClick = (name) => {
    if (onOpenContact) {
      onOpenContact(name);
    }
  };

  return (
    <section
      id="solutions"
      className="relative w-full bg-[#000000] text-white pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 overflow-hidden z-20"
    >
      {/* Background Subtle Gradient Flares */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[160px] pointer-events-none opacity-15 bg-gradient-to-r from-[#0457DF] via-[#00D4FF] to-[#059669]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Heading matching Image 1 */}
        <div className="mb-10 sm:mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.18] max-w-4xl">
            Cutting edge solutions to{' '}
            <TextHighlight color="#38BDF8" delay={0.2}>
              power up
            </TextHighlight>{' '}
            your business
          </h2>
        </div>

        {/* Dynamic Display Area: Switches between 2 Cards and In-Place Popup */}
        <div className="relative min-h-[520px] sm:min-h-[560px] md:min-h-[580px] w-full">
          {/* ======================================================== */}
          {/* VIEW 1: THE TWO CARDS (DEFAULT VIEW - IMAGE 1)           */}
          {/* ======================================================== */}
          {!activePopup && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full animate-fadeIn">
              
              {/* Card 1: Industries */}
              <div
                onClick={() => setActivePopup('industries')}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#121620] border border-white/10 hover:border-white/25 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(4,87,223,0.2)]"
              >
                {/* Image Area */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-slate-900">
                  <img
                    src="/indust.png"
                    alt="Industries"
                    className="w-full h-full object-cover select-none pointer-events-none transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Content Area */}
                <div className="p-6 sm:p-8 flex items-end justify-between gap-4">
                  <div className="text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-[#38BDF8] transition-colors">
                      Industries
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-normal">
                      Select your industry. Discover our impact.
                    </p>
                  </div>

                  {/* Circular Action Button */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0457DF] group-hover:bg-[#00D4FF] text-white group-hover:text-[#0F172A] flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card 2: Services */}
              <div
                onClick={() => setActivePopup('services')}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#121620] border border-white/10 hover:border-white/25 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(0,212,255,0.2)]"
              >
                {/* Image Area */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-slate-900">
                  <img
                    src="/Services.png"
                    alt="Services"
                    className="w-full h-full object-cover select-none pointer-events-none transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Content Area */}
                <div className="p-6 sm:p-8 flex items-end justify-between gap-4">
                  <div className="text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-[#38BDF8] transition-colors">
                      Services
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-normal">
                      Experience our services. Transform your business.
                    </p>
                  </div>

                  {/* Circular Action Button */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0457DF] group-hover:bg-[#00D4FF] text-white group-hover:text-[#0F172A] flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* VIEW 2: INDUSTRIES POPUP OVERLAY (IN-PLACE - IMAGE 2)    */}
          {/* ======================================================== */}
          {activePopup === 'industries' && (
            <div className="w-full rounded-3xl bg-[#061427] border border-white/15 p-8 sm:p-12 text-white shadow-[0_25px_80px_rgba(0,0,0,0.9)] animate-fadeIn">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Industries
                </h3>

                <button
                  onClick={() => setActivePopup(null)}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 hover:border-white text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                  aria-label="Close Industries Popup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 3 Columns matching Image 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-left">
                {/* Column 1 */}
                <div className="space-y-4">
                  {industriesCol1.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleIndustryClick(item)}
                      className="w-full text-left text-sm sm:text-base text-slate-200 hover:text-[#38BDF8] hover:translate-x-1 transition-all py-1.5 cursor-pointer block leading-snug"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  {industriesCol2.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleIndustryClick(item)}
                      className="w-full text-left text-sm sm:text-base text-slate-200 hover:text-[#38BDF8] hover:translate-x-1 transition-all py-1.5 cursor-pointer block leading-snug"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  {industriesCol3.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleIndustryClick(item)}
                      className="w-full text-left text-sm sm:text-base text-slate-200 hover:text-[#38BDF8] hover:translate-x-1 transition-all py-1.5 cursor-pointer block leading-snug"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* VIEW 3: SERVICES POPUP OVERLAY (IN-PLACE - IMAGE 3)      */}
          {/* ======================================================== */}
          {activePopup === 'services' && (
            <div className="w-full rounded-3xl bg-[#061427] border border-white/15 p-8 sm:p-12 text-white shadow-[0_25px_80px_rgba(0,0,0,0.9)] animate-fadeIn">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Services
                </h3>

                <button
                  onClick={() => setActivePopup(null)}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 hover:border-white text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                  aria-label="Close Services Popup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 3 Columns matching Image 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-left">
                {/* Column 1 */}
                <div className="space-y-4">
                  {servicesCol1.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleItemClick(item)}
                      className="w-full text-left text-sm sm:text-base text-slate-200 hover:text-[#38BDF8] hover:translate-x-1 transition-all py-1.5 cursor-pointer block leading-snug"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  {servicesCol2.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleItemClick(item)}
                      className="w-full text-left text-sm sm:text-base text-slate-200 hover:text-[#38BDF8] hover:translate-x-1 transition-all py-1.5 cursor-pointer block leading-snug"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  {servicesCol3.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleItemClick(item)}
                      className="w-full text-left text-sm sm:text-base text-slate-200 hover:text-[#38BDF8] hover:translate-x-1 transition-all py-1.5 cursor-pointer block leading-snug"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Seamless Transition Gradient into the Light Editorial Section */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 sm:h-28 md:h-36 bg-gradient-to-b from-transparent via-[#F8FAFC]/40 to-[#F8FAFC] pointer-events-none select-none z-10"
        aria-hidden="true"
      />
    </section>
  );
}
