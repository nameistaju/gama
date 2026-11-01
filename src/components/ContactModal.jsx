import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Copy, Check, Phone, Mail, MapPin, X, ArrowRight } from 'lucide-react';

const serviceOptions = [
  'Website Design & Development',
  'Mobile App Development',
  'AI & Intelligent Solutions',
  'UI/UX & Product Design',
  'Custom Software & SaaS',
  'Cloud Architecture & DevOps',
];

const budgetOptions = [
  'Less than $10,000',
  '$10,000 — $25,000',
  '$25,000 — $50,000',
  '$50,000 — $100,000',
  '$100,000+',
];

export default function ContactModal({ isOpen, onClose, initialService = '' }) {
  const modalRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || '',
    budget: '',
    message: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    if (modalRef.current) {
      modalRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@gama.software');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      id="gama-contact-page"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label="Contact GAMA Technologies"
      className="fixed inset-0 z-[100] text-white overflow-y-auto selection:bg-[#0457DF] selection:text-white outline-none"
    >
      {/* 1. Background Image: Dreamy Pastel Rainbow Gradient.png */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none -z-10"
        style={{ backgroundImage: "url('/Dreamy Pastel Rainbow Gradient.png')" }}
      />
      {/* Glassmorphic dark overlay for readability and contrast */}
      <div className="fixed inset-0 bg-[#0A0E1A]/65 backdrop-blur-xl pointer-events-none -z-10" />

      {/* Main Page Container */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-6 sm:py-8 min-h-screen flex flex-col justify-between">
        
        {/* =========================================================================
            TOP NAVBAR: BRAND LOGO + CLOSE BUTTON
            ========================================================================= */}
        <header className="flex items-center justify-between pb-8 sm:pb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <img
              src="/gama-logo.png"
              alt="GAMA Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <span className="font-black text-lg tracking-tight text-white hidden sm:inline-block">
              GAMA <span className="text-slate-400 font-normal">TECHNOLOGIES</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/90 bg-white/[0.04] hover:bg-white/[0.12] hover:border-slate-500 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm"
            aria-label="Close contact page"
          >
            <span>Close</span>
            <X className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </header>

        {/* =========================================================================
            HERO SECTION: "LET'S WORK TOGETHER!" + ROTATING "GET IN TOUCH" STAMP
            ========================================================================= */}
        <section className="pt-10 sm:pt-14 md:pt-18 pb-0">
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-10">
            {/* Left Headline & Subtitle */}
            <div className="max-w-3xl pb-8 sm:pb-12">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.0] sm:leading-[0.96]">
                Let&apos;s work <br />
                <span className="text-white">together!</span>
              </h1>
              <p className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-xl">
                Let us help you become even greater at what you do. Fill out the following form and we will get back to you in the next 24 hours.
              </p>
            </div>

            {/* Right: Retro Call Us Comic Sticker (2.5x bigger, touching the line directly) */}
            <div className="self-center md:self-end shrink-0 flex items-end">
              <img
                src="/Retro Call Us Comic Sticker.png"
                alt="Call Us"
                className="w-72 sm:w-96 md:w-[440px] lg:w-[490px] h-auto object-contain drop-shadow-2xl select-none block -mb-[3px]"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            TWO-COLUMN MAIN BODY: QUESTIONNAIRE FORM (LEFT) + CONTACT DETAILS (RIGHT)
            ========================================================================= */}
        <section className="pt-6 sm:pt-10 pb-16 border-t border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* -----------------------------------------------------------------
                LEFT COLUMN (8 COLS): NUMBERED MINIMALIST QUESTIONNAIRE
                ----------------------------------------------------------------- */}
            <div className="lg:col-span-8">
              {formSubmitted ? (
                <div className="p-8 sm:p-12 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#0DBA6C]/20 border border-[#0DBA6C]/40 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-[#0DBA6C]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Message Received!
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name || 'friend'}</span>. Our engineering leads will review your inquiry and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-slate-700 bg-white/5 hover:bg-white/15 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-10">
                  
                  {/* (01) Name */}
                  <div className="group flex flex-col">
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 mb-2">
                      <span className="font-mono text-xs text-slate-400 border border-slate-700/80 px-2 py-0.5 rounded-full">
                        01
                      </span>
                      <span>What&apos;s your name?</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Type your full name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full bg-transparent border-b border-slate-700/90 focus:border-[#0457DF] pb-3 text-base sm:text-lg text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* (02) Email */}
                  <div className="group flex flex-col">
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 mb-2">
                      <span className="font-mono text-xs text-slate-400 border border-slate-700/80 px-2 py-0.5 rounded-full">
                        02
                      </span>
                      <span>What&apos;s your email address?</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full bg-transparent border-b border-slate-700/90 focus:border-[#0457DF] pb-3 text-base sm:text-lg text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* (03) Phone Number */}
                  <div className="group flex flex-col">
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 mb-2">
                      <span className="font-mono text-xs text-slate-400 border border-slate-700/80 px-2 py-0.5 rounded-full">
                        03
                      </span>
                      <span>What&apos;s your phone number?</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full bg-transparent border-b border-slate-700/90 focus:border-[#0457DF] pb-3 text-base sm:text-lg text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* (04) Company Name */}
                  <div className="group flex flex-col">
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 mb-2">
                      <span className="font-mono text-xs text-slate-400 border border-slate-700/80 px-2 py-0.5 rounded-full">
                        04
                      </span>
                      <span>What&apos;s your company/organization name?</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type your company/organization name"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="w-full bg-transparent border-b border-slate-700/90 focus:border-[#0457DF] pb-3 text-base sm:text-lg text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* (05) Services */}
                  <div className="group flex flex-col">
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 mb-2">
                      <span className="font-mono text-xs text-slate-400 border border-slate-700/80 px-2 py-0.5 rounded-full">
                        05
                      </span>
                      <span>What services are you looking for?</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full bg-transparent border-b border-slate-700/90 focus:border-[#0457DF] pb-3 pr-8 text-base sm:text-lg text-white outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0F172A] text-slate-400">
                          Choose from a list here
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0F172A] text-white py-2">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-2 bottom-3 text-slate-400 text-sm">
                        ⌄
                      </div>
                    </div>
                  </div>

                  {/* (06) Budget */}
                  <div className="group flex flex-col">
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 mb-2">
                      <span className="font-mono text-xs text-slate-400 border border-slate-700/80 px-2 py-0.5 rounded-full">
                        06
                      </span>
                      <span>What have you budgeted for this project?</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.budget}
                        onChange={(e) => handleChange('budget', e.target.value)}
                        className="w-full bg-transparent border-b border-slate-700/90 focus:border-[#0457DF] pb-3 pr-8 text-base sm:text-lg text-white outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0F172A] text-slate-400">
                          Choose from a list here
                        </option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0F172A] text-white py-2">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-2 bottom-3 text-slate-400 text-sm">
                        ⌄
                      </div>
                    </div>
                  </div>

                  {/* (07) Project Description */}
                  <div className="group flex flex-col">
                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 mb-2">
                      <span className="font-mono text-xs text-slate-400 border border-slate-700/80 px-2 py-0.5 rounded-full">
                        07
                      </span>
                      <span>Tell us about your project</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please type your project description"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full bg-transparent border-b border-slate-700/90 focus:border-[#0457DF] pb-3 text-base sm:text-lg text-white placeholder-slate-500 outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-slate-600 hover:border-white text-white hover:bg-white hover:text-[#0A0E1A] transition-all duration-300 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase cursor-pointer shadow-xl hover:shadow-[#0457DF]/20 active:scale-[0.98]"
                    >
                      <span>SEND MESSAGE</span>
                      <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold text-sm">
                        ↗
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* -----------------------------------------------------------------
                RIGHT COLUMN (4 COLS): CONTACT DETAILS (CALL US, ADDRESS, SOCIALS)
                ----------------------------------------------------------------- */}
            <div className="lg:col-span-4 flex flex-col gap-10 lg:pl-6">
              
              {/* Call Us */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
                  CALL US
                </span>
                <div className="flex flex-col gap-1.5 text-base sm:text-lg font-medium text-white">
                  <a
                    href="tel:+917396668037"
                    className="hover:text-[#00D4FF] transition-colors"
                  >
                    +91 73966 68037
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-[#00D4FF] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
                  EMAIL US
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:contact@gama.software"
                    className="text-base sm:text-lg font-medium text-white hover:text-[#00D4FF] transition-colors"
                  >
                    contact@gama.software
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#0DBA6C]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Address */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
                  ADDRESS
                </span>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  GAMA Technologies HQ<br />
                  HITEC City, Hyderabad, Telangana<br />
                  India — Global Delivery Across US, EU & APAC
                </p>
              </div>

              {/* Social Media Links */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
                  CONNECT WITH US
                </span>
                <div className="flex items-center gap-4 text-slate-400">
                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-slate-700/80 bg-white/[0.03] hover:bg-white/10 hover:border-slate-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Twitter / X"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-slate-700/80 bg-white/[0.03] hover:bg-white/10 hover:border-slate-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-slate-700/80 bg-white/[0.03] hover:bg-white/10 hover:border-slate-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-slate-700/80 bg-white/[0.03] hover:bg-white/10 hover:border-slate-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74V9.93H5.06v8.57h2.8z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            BOTTOM FOOTER
            ========================================================================= */}
        <footer className="pt-8 pb-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 GAMA Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button type="button" onClick={() => {}} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button type="button" onClick={() => {}} className="hover:text-slate-300 transition-colors">
              Terms of Service
            </button>
          </div>
          <div>
            Crafted for Mission-Critical Engineering
          </div>
        </footer>

      </div>
    </div>
  );
}
