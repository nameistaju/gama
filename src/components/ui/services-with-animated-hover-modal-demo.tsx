'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, Phone } from 'lucide-react';

export const servicesData = [
  {
    id: '01',
    title: 'Website Design & Development',
    displayTitle: '01 — Website Design & Development',
    category: 'WEB / DIGITAL EXPERIENCES',
    serviceKey: 'Website Design & Development',
    color: '#0F172A',
    src: '/service/websiteDesign.png',
    description: 'High-performance responsive websites, interactive landing pages, and web platforms built with clean code and modern frontends.',
  },
  {
    id: '02',
    title: 'Mobile App Development',
    displayTitle: '02 — Mobile App Development',
    category: 'ANDROID / MOBILE APPS',
    serviceKey: 'Mobile App Development',
    color: '#0F172A',
    src: '/service/AppDesign.png',
    description: 'Native and cross-platform mobile apps for iOS and Android, engineered with fluid UI and rock-solid offline-first architecture.',
  },
  {
    id: '03',
    title: 'AI & Intelligent Solutions',
    displayTitle: '03 — AI & Intelligent Solutions',
    category: 'AI / AUTOMATION',
    serviceKey: 'AI & Intelligent Solutions',
    color: '#0F172A',
    src: '/service/AI.png',
    description: 'Applied machine learning, custom LLM agent workflows, intelligent automation, and predictive engines designed to accelerate operations.',
  },
  {
    id: '04',
    title: 'UI/UX & Product Design',
    displayTitle: '04 — UI/UX & Product Design',
    category: 'RESEARCH / DESIGN / PROTOTYPE',
    serviceKey: 'UI/UX & Product Design',
    color: '#0F172A',
    src: '/service/UiUx.png',
    description: 'User-centric product discovery, wireframing, high-fidelity prototypes, and comprehensive design systems that convert.',
  },
  {
    id: '05',
    title: 'Custom Software & SaaS',
    displayTitle: '05 — Custom Software & SaaS',
    category: 'PLATFORMS / BUSINESS SOFTWARE',
    serviceKey: 'Custom Software & SaaS',
    color: '#0F172A',
    src: '/service/CustomSoftware.png',
    description: 'Multi-tenant SaaS architectures, distributed cloud backends, API gateways, and custom business software tailored to scale.',
  },
];

const scaleAnimation = {
  closed: {
    scale: 0,
    transition: { duration: 0.35, ease: [0.32, 0, 0.67, 0] },
    x: '-50%',
    y: '-50%',
  },
  enter: {
    scale: 1,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
    x: '-50%',
    y: '-50%',
  },
  initial: { scale: 0, x: '-50%', y: '-50%' },
};

interface ServicesProps {
  onOpenContact?: (serviceKey?: string) => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  const [modal, setModal] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  const handleServiceClick = (serviceKey: string) => {
    if (onOpenContact) {
      onOpenContact(serviceKey);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 overflow-hidden bg-[#F8FAFC] text-[#0F172A] relative selection:bg-[#0F172A] selection:text-white border-t border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 md:mb-20 pb-6 border-b border-slate-200/60">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0457DF] uppercase bg-blue-50/90 border border-blue-100 px-3 py-1 rounded-full inline-block shadow-sm mb-3">
              WHAT WE BUILD
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0F172A]">
              Services.
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg font-normal text-slate-500 leading-relaxed">
            From first ideas to finished products, we design and build digital experiences that help businesses move forward.
          </p>
        </div>

        {/* Services Rows Container */}
        <div className="relative flex flex-col w-full">
          {servicesData.map((project, index) => {
            const isExpanded = mobileExpanded === index;

            return (
              <div key={project.id} className="w-full">
                {/* Desktop / Tablet Row */}
                <div
                  onClick={() => handleServiceClick(project.serviceKey)}
                  onMouseEnter={() => setModal({ active: true, index })}
                  onMouseLeave={() => setModal({ active: false, index })}
                  className="group flex w-full cursor-pointer items-center justify-between border-t border-slate-200 px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 transition-all duration-300 hover:bg-white hover:px-6 md:hover:px-20 hover:shadow-sm"
                >
                  {/* Service Title */}
                  <h3 className="m-0 font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0F172A] tracking-tight transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#0457DF] group-hover:font-normal">
                    {project.displayTitle}
                  </h3>

                  {/* Right Side Category Label & Arrow */}
                  <div className="hidden sm:flex items-center gap-4 transition-all duration-300 group-hover:translate-x-1">
                    <span className="font-mono text-xs sm:text-sm tracking-wider text-slate-400 uppercase transition-colors group-hover:text-slate-700">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#0457DF] group-hover:text-[#0457DF] group-hover:bg-blue-50/50 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Mobile Expand Indicator */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileExpanded(isExpanded ? null : index);
                    }}
                    className="sm:hidden p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
                    aria-label="Expand service preview"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Mobile Tap-to-Preview Accordion Content */}
                <div
                  className={`sm:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 px-4 ${
                    isExpanded ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
                  }`}
                >
                  <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-md bg-[#0F172A]">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                  <button
                    onClick={() => handleServiceClick(project.serviceKey)}
                    className="mt-3 w-full py-2.5 px-4 rounded-lg bg-[#0457DF] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Contact Us About {project.title}</span>
                  </button>
                </div>
              </div>
            );
          })}
          {/* Bottom Border */}
          <div className="w-full border-t border-slate-200" />

          {/* Interactive Floating Desktop Modal & Cursor CTA */}
          <DesktopModal modal={modal} onSelect={handleServiceClick} />
        </div>
      </div>
    </section>
  );
}

interface DesktopModalProps {
  modal: { active: boolean; index: number };
  onSelect: (serviceKey: string) => void;
}

function DesktopModal({ modal, onSelect }: DesktopModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalContainer.current || !cursor.current || !cursorLabel.current) return;

    // Smooth cursor movement with GSAP quickTo
    const xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.7,
      ease: 'power3.out',
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.7,
      ease: 'power3.out',
    });

    const xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.45,
      ease: 'power3.out',
    });
    const yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.45,
      ease: 'power3.out',
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.4,
      ease: 'power3.out',
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.4,
      ease: 'power3.out',
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const activeService = servicesData[index] || servicesData[0];

  return (
    <>
      {/* Floating Image Preview Frame (Dark Navy Frame, Smooth Crossfade & Scale) */}
      <motion.div
        animate={active ? 'enter' : 'closed'}
        className="pointer-events-none fixed top-0 left-0 z-40 hidden md:flex h-60 w-60 md:h-64 md:w-64 items-center justify-center overflow-hidden rounded-2xl bg-[#0F172A] p-2 shadow-2xl border border-slate-700/60"
        initial="initial"
        ref={modalContainer}
        variants={scaleAnimation}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#0B0F19]">
          {servicesData.map((project, idx) => {
            const isCurrent = idx === index;
            return (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-300 ease-out flex items-center justify-center ${
                  isCurrent ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                }`}
              >
                <img
                  alt={project.title}
                  className="h-full w-full object-cover rounded-xl"
                  src={project.src}
                  loading="eager"
                />
                {/* Subtle bottom gradient & category badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/10 to-transparent flex items-end justify-between p-3">
                  <span className="text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Floating Circular "Contact Us" Action Button */}
      <motion.div
        animate={active ? 'enter' : 'closed'}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-[#0457DF] text-white shadow-xl shadow-[#0457DF]/40"
        initial="initial"
        ref={cursor}
        variants={scaleAnimation}
      />

      <motion.div
        animate={active ? 'enter' : 'closed'}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-transparent font-sans font-bold text-[10px] text-white text-center flex-col select-none"
        initial="initial"
        ref={cursorLabel}
        variants={scaleAnimation}
      >
        <span>Contact</span>
        <div className="flex items-center gap-1 mt-0.5">
          <span>Us</span>
          <Phone className="w-2.5 h-2.5" />
        </div>
      </motion.div>
    </>
  );
}
