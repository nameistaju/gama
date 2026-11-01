import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import GamaLogo from './GamaLogo';

export default function FAQ({
  items,
  illustration,
  id = "faq",
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  title = <>THINGS YOU<br />MIGHT ASK</>,
  onOpenContact,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const defaultFaqs = [
    {
      q: "What types of software do you engineer?",
      a: "We engineer custom enterprise software, full-stack web platforms, iOS & Android applications, SaaS products, cloud infrastructure, and distributed APIs. From zero-to-one MVP architecture to high-load production systems, we build software designed to scale.",
    },
    {
      q: "How do you estimate software project timelines and pricing?",
      a: "We break projects into clear technical milestones based on architecture requirements, system complexity, and integrations. We provide transparent, upfront estimations with milestone-driven delivery rather than vague open-ended billing.",
    },
    {
      q: "What tech stack do you specialize in?",
      a: "Our core stack includes modern TypeScript, React, Next.js, Node.js, Python, Go, PostgreSQL, MongoDB, Redis, Docker, Kubernetes, AWS, and GCP. We select the optimal tools suited for your application's performance and scalability needs.",
    },
    {
      q: "Can you collaborate with our existing engineering team or codebase?",
      a: "Absolutely. We regularly audit existing codebases, refactor monolithic architectures into modular microservices, add new features, and embed seamlessly with client tech leads.",
    },
    {
      q: "Do you handle cloud deployment, DevOps, and ongoing maintenance?",
      a: "Yes. Every system we build includes automated CI/CD pipelines, containerization, staging environments, infrastructure monitoring, and post-launch SLA support.",
    },
    {
      q: "Do you work with clients globally?",
      a: "Yes. We work with innovative startups and enterprise businesses across the globe, maintaining transparent communication through Slack, GitHub, Linear, and weekly sprint reviews.",
    },
    {
      q: "How do you ensure code quality, security, and performance?",
      a: "Quality is embedded in our engineering culture: comprehensive automated testing, strict linting, type-safety, peer code reviews, OWASP security compliance, and performance profiling prior to production release.",
    },
  ];

  const faqs = items || defaultFaqs;
  const imageSrc = illustration || "/faq.png";

  const handleSelect = (idx) => {
    setOpenIndex(idx);
  };

  return (
    <section id={id} className="relative w-full py-20 md:py-32 px-4 sm:px-8 selection:bg-[#0F172A] selection:text-white overflow-hidden">
      {/* Background Image: Pastel Aurora Cloudscape.png */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/Pastel Aurora Cloudscape.png')" }}
      />
      {/* Soft atmospheric overlay for legibility */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ====================================================================
              LEFT COLUMN: EYEBROW, HUGE HEADLINE & ILLUSTRATION
              ==================================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-24 select-none">
            <div className="section-tag tracking-widest text-xs font-semibold uppercase text-[#0F172A]/70 mb-3">
              {eyebrow}
            </div>
            <h2 className="section-title text-[11vw] sm:text-[9vw] md:text-[68px] lg:text-[84px] font-display text-[#0F172A] font-black leading-[0.88] tracking-tight uppercase text-left mb-6 sm:mb-8">
              {title}
            </h2>

            {/* Illustration: faq.png */}
            <div className="w-full max-w-md lg:max-w-lg mt-2 sm:mt-4">
              <img
                src={imageSrc}
                alt="FAQ illustration"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain select-none drop-shadow-md"
              />
            </div>
          </div>

          {/* ====================================================================
              RIGHT COLUMN: TWO26 STYLE EDITORIAL CAPSULE ACCORDION
              ==================================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-3.5 w-full">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="w-full flex flex-col items-start">
                  {/* Question Capsule Pill */}
                  <button
                    type="button"
                    onClick={() => handleSelect(idx)}
                    aria-expanded={isOpen}
                    className={`text-left font-sans text-sm sm:text-base md:text-[17px] font-medium px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 ease-out cursor-pointer select-none outline-none ${
                      isOpen
                        ? 'w-full md:w-[60%] lg:w-[54%] rounded-[100px] border border-[#0457DF] bg-white text-[#0F172A] shadow-md ring-2 ring-[#0457DF]/15'
                        : 'w-full rounded-[100px] border border-slate-200/90 bg-white/95 text-[#0F172A] hover:bg-white shadow-xs'
                    }`}
                  >
                    <span className="leading-snug block">
                      {faq.q}
                    </span>
                  </button>

                  {/* Connected Expanded Answer Panel (Only for Active Item) */}
                  {isOpen && (
                    <div
                      role="region"
                      className="w-full flex flex-row items-end justify-end gap-2.5 sm:gap-3.5 mt-2.5 sm:mt-3 animate-in fade-in zoom-in-95 duration-350"
                    >
                      {/* Speech Bubble Answer Box */}
                      <div className="w-full md:w-[80%] lg:w-[74%] rounded-3xl md:rounded-tl-[28px] md:rounded-tr-[28px] md:rounded-bl-[28px] md:rounded-br-[8px] bg-white/95 border border-slate-200 shadow-sm p-6 sm:p-8 md:p-9 text-[#0F172A]/90 font-sans text-sm sm:text-base md:text-[16px] leading-relaxed">
                        <p>{faq.a}</p>
                      </div>

                      {/* Circular Brand Logo Badge */}
                      <div
                        aria-hidden="true"
                        className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md mb-1 border border-slate-200 overflow-hidden p-1.5"
                      >
                        <GamaLogo
                          variant="icon"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            CONSULTATION BANNER CARD BELOW FAQ (COMPACT & SLEEK)
            "Kickstart Your Project in Just 2 Weeks" + Blended Handshake Image
            ========================================================================= */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0457DF] via-[#034ec8] to-[#023fa3] py-7 sm:py-9 px-6 sm:px-10 md:px-12 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
          {/* Subtle decorative radial lights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#00D4FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-black tracking-tight text-white leading-tight mb-2.5">
                Kickstart Your Project in Just 2 Weeks
              </h3>

              {/* Supporting Copy */}
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg mb-5 font-normal">
                Schedule a free consultation with our engineering experts. Whether you&apos;re launching a new digital platform or scaling enterprise architecture, get the blueprints to move faster.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => onOpenContact && onOpenContact('Free Consultation')}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#0457DF] hover:bg-slate-100 font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-[0.98] flex items-center gap-1.5"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenContact && onOpenContact()}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/35 hover:border-white hover:bg-white/10 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Right: Blended Colorful G Ribbon Handshake Image */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
              <div className="relative flex items-center justify-center">
                <img
                  src="/Colorful G Ribbon Handshake.png"
                  alt="GAMA Partnership"
                  className="w-[230px] sm:w-[260px] md:w-[280px] lg:w-[310px] aspect-square object-contain select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.45) 18%, black 30%, black 70%, rgba(0,0,0,0.45) 82%, rgba(0,0,0,0.08) 92%, transparent 100%)',
                    maskImage:
                      'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.45) 18%, black 30%, black 70%, rgba(0,0,0,0.45) 82%, rgba(0,0,0,0.08) 92%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
