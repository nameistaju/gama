'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Layers, Code2, ShieldCheck, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// 5 Client Collaboration Milestones (How We Work with Clients)
const CLIENT_STEPS = [
  {
    step: '01',
    side: 'top',
    x: 720,
    y: 480, // Road valley
    title: 'Discovery & Strategy',
    subtitle: 'Alignment & Scope',
    desc: 'Deep dive into your product goals, technical constraints, and system specifications to establish an airtight roadmap.',
    tags: ['Technical Roadmap', 'Scope Definition'],
    icon: Compass,
    accentColor: '#0457DF', // GAMA Cobalt
  },
  {
    step: '02',
    side: 'bottom',
    x: 1300,
    y: 240, // Road crest
    title: 'Architecture & Design',
    subtitle: 'System Blueprints',
    desc: 'We architect database schemas, API contracts, and modular component design before writing production code.',
    tags: ['System Schemas', 'Sprint Planning'],
    icon: Layers,
    accentColor: '#FEB824', // GAMA Amber
  },
  {
    step: '03',
    side: 'top',
    x: 1880,
    y: 480, // Road valley
    title: 'Rapid Iterative Sprints',
    subtitle: 'Bi-Weekly Delivery',
    desc: 'Clean, robust code engineered in agile 2-week sprints with private staging environments for live client review.',
    tags: ['Live Staging', 'Async Demos'],
    icon: Code2,
    accentColor: '#0DBA6C', // GAMA Emerald
  },
  {
    step: '04',
    side: 'bottom',
    x: 2460,
    y: 240, // Road crest
    title: 'Security & Quality Hardening',
    subtitle: 'Battle-Testing',
    desc: 'End-to-end automated testing, vulnerability scanning, and load simulations to ensure peak stability.',
    tags: ['Automated Tests', 'Security Audit'],
    icon: ShieldCheck,
    accentColor: '#0457DF', // GAMA Cobalt
  },
  {
    step: '05',
    side: 'top',
    x: 3040,
    y: 480, // Road valley
    title: 'Launch & Continuous Scale',
    subtitle: 'Zero-Downtime Rollout',
    desc: 'Seamless production deployment, 24/7 cloud telemetry, and proactive feature evolution as your business scales.',
    tags: ['Zero-Downtime', 'Cloud Monitoring'],
    icon: Rocket,
    accentColor: '#0DBA6C', // GAMA Emerald
  },
];

// Continuous undulating curvy road path across the track
const CURVED_ROAD_D =
  'M 0 360 C 260 360, 480 480, 720 480 C 960 480, 1060 240, 1300 240 C 1540 240, 1640 480, 1880 480 C 2120 480, 2220 240, 2460 240 C 2700 240, 2800 480, 3040 480 C 3260 480, 3380 360, 3580 360 L 3900 360';

export default function ServicesPath() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const pathRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const path = pathRef.current;
    const car = carRef.current;
    if (!section || !track || !path || !car) return;

    const ctx = gsap.context(() => {
      const totalLen = path.getTotalLength();

      // Function to position car along the curved SVG path
      const updateCarPosition = (progress) => {
        const currentDist = progress * totalLen;
        const pt = path.getPointAtLength(currentDist);
        const lookAheadDist = Math.min(currentDist + 6, totalLen);
        const ptAhead = path.getPointAtLength(lookAheadDist);

        // Calculate tangent angle so the car points in the direction of the curve
        const angle = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * (180 / Math.PI);

        // Apply 3D translation & rotation to the car
        gsap.set(car, {
          x: pt.x,
          y: pt.y,
          rotation: angle,
          force3D: true,
        });
      };

      // Set initial car position at the starting line (progress = 0)
      updateCarPosition(0);

      // Horizontal track distance to travel
      const getDistance = () => track.scrollWidth - window.innerWidth;
      const totalDistance = getDistance();

      if (totalDistance > 0) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.min(totalDistance * 0.7, 1800)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;

            // 1. Horizontally translate the track
            gsap.set(track, {
              x: -p * totalDistance,
              force3D: true,
            });

            // 2. Drive the car along the curved road path
            updateCarPosition(p);
          },
        });
      }
    }, section);

    // Refresh after layout calculations settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-[#F8FAFC] select-none text-[#0F172A]"
    >
      {/* Background Subtle Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Main Horizontal Track - Translates horizontally on vertical scroll */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center will-change-transform"
        style={{ width: 'max-content' }}
      >
        {/* =========================================================================
            STATION 0: HOW WE WORK INTRO
            ========================================================================= */}
        <div className="w-[88vw] sm:w-[480px] lg:w-[540px] pl-6 sm:pl-12 lg:pl-16 pr-8 sm:pr-12 shrink-0 flex flex-col justify-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0457DF] uppercase mb-3 block">
            HOW WE WORK WITH CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] leading-[1.08] mb-4">
            From Blueprint to <span className="text-[#0457DF]">Global Scale</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-md mb-6">
            A transparent, sprint-driven engineering process engineered for velocity, technical clarity, and zero surprises.
          </p>
          <div className="inline-flex items-center gap-2.5 text-xs font-mono text-[#0457DF] font-semibold bg-blue-50/90 border border-blue-100 px-4 py-2 rounded-full w-fit shadow-sm">
            <span>Scroll down to navigate the roadmap</span>
            <span className="text-sm">→</span>
          </div>
        </div>

        {/* =========================================================================
            WINDING CURVED ROADWAY & SVG NETWORK
            ========================================================================= */}
        <div className="relative h-[720px] w-[3900px] flex items-center shrink-0">
          {/* Continuous Undulating Winding Road SVG */}
          <svg
            viewBox="0 0 3900 720"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            fill="none"
          >
            <defs>
              {/* Drop Shadow for the Asphalt Road Body */}
              <filter id="road-curb-shadow" x="-5%" y="-10%" width="110%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* 1. Road Outer Curb (Light Border Shoulder) */}
            <path
              d={CURVED_ROAD_D}
              stroke="#E2E8F0"
              strokeWidth="68"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#road-curb-shadow)"
            />

            {/* 2. Road Asphalt Body (Deep Obsidian #0F172A) */}
            <path
              d={CURVED_ROAD_D}
              stroke="#0F172A"
              strokeWidth="56"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 3. Centerline Lane Markings (White Dashed Divider) */}
            <path
              ref={pathRef}
              d={CURVED_ROAD_D}
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeDasharray="16 14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 4. Checkered Starting Line */}
            <line
              x1="300"
              y1="332"
              x2="300"
              y2="388"
              stroke="#FFFFFF"
              strokeWidth="10"
              strokeDasharray="10 10"
              opacity="0.85"
            />

            {/* 5. Checkered Finish Line at the End of the Road */}
            <line
              x1="3580"
              y1="332"
              x2="3580"
              y2="388"
              stroke="#FFFFFF"
              strokeWidth="12"
              strokeDasharray="10 10"
              opacity="0.95"
            />

            {/* 6. Milestone Anchor Pins and Dots */}
            {CLIENT_STEPS.map((step) => {
              const isTop = step.side === 'top';
              const cardAnchorY = isTop ? step.y - 100 : step.y + 100;

              return (
                <g key={`pin-${step.step}`}>
                  {/* Vertical Pin Line connecting Card to Road */}
                  <line
                    x1={step.x}
                    y1={step.y}
                    x2={step.x}
                    y2={cardAnchorY}
                    stroke={step.accentColor}
                    strokeWidth="2.5"
                    strokeDasharray="4 3"
                    opacity="0.75"
                  />

                  {/* Road Center Anchor Dot */}
                  <circle
                    cx={step.x}
                    cy={step.y}
                    r="6.5"
                    fill={step.accentColor}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                </g>
              );
            })}
          </svg>

          {/* =========================================================================
              THE DRIVING CAR (Smoothly driven along the SVG road curves)
              ========================================================================= */}
          <div
            ref={carRef}
            className="absolute top-0 left-0 w-32 sm:w-36 pointer-events-none z-30 will-change-transform"
            style={{
              transformOrigin: '50% 50%',
            }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              {/* Headlight Cone projecting forward to the right */}
              <div
                className="absolute left-[82%] top-1/2 -translate-y-1/2 w-32 h-10 bg-gradient-to-r from-amber-200/50 via-blue-400/20 to-transparent blur-md rounded-r-full pointer-events-none"
              />

              {/* Under-chassis soft shadow */}
              <div className="absolute -bottom-1 left-3 right-3 h-3 bg-black/50 blur-sm rounded-full" />

              {/* Car Vector SVG: Flipped horizontally so it points forward */}
              <img
                src="/car.svg"
                alt="Driving Car"
                className="w-full h-auto relative z-10 drop-shadow-md select-none transform -scale-x-100"
                draggable={false}
              />
            </div>
          </div>

          {/* =========================================================================
              5 CLIENT COLLABORATION MILESTONE CARDS (NO LOTTIE, MINIMAL & AESTHETIC)
              ========================================================================= */}
          {CLIENT_STEPS.map((step) => {
            const isTop = step.side === 'top';
            const Icon = step.icon;

            return (
              <div
                key={`card-${step.step}`}
                className="absolute z-20 pointer-events-auto group"
                style={{
                  left: `${step.x}px`,
                  top: isTop ? `${step.y - 110}px` : `${step.y + 110}px`,
                  transform: isTop ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
                  width: '320px',
                }}
              >
                <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(4,87,223,0.12)] hover:border-[#0457DF]/40 transition-all duration-300">
                  {/* Card Header: Icon + Step Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: `${step.accentColor}12`,
                        color: step.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2.2} />
                    </div>

                    <div
                      className="px-2.5 py-0.5 rounded-full text-white font-mono font-extrabold text-xs shadow-sm flex items-center gap-1"
                      style={{ backgroundColor: step.accentColor }}
                    >
                      <span className="text-[9px] opacity-80">STEP</span>
                      <span>{step.step}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0457DF] block mb-0.5">
                      {step.subtitle}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight leading-snug group-hover:text-[#0457DF] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mb-3">
                    {step.desc}
                  </p>

                  {/* Minimalist Tech / Deliverable Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium font-sans px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* =========================================================================
              FINISH LINE: WAVING RED FLAG 🚩 & PROJECT CALLOUT
              ========================================================================= */}
          <div
            className="absolute z-20 pointer-events-auto flex items-center gap-6"
            style={{
              left: '3640px',
              top: '360px',
              transform: 'translateY(-50%)',
            }}
          >
            {/* The Waving Red Flag at the finish line */}
            <div className="relative z-30 flex flex-col items-center">
              <div className="relative w-20 h-28 sm:w-24 sm:h-34 drop-shadow-xl transform -translate-y-6">
                <svg
                  viewBox="0 0 100 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Chrome Flagpole */}
                  <rect x="18" y="10" width="4" height="120" rx="2" fill="#94A3B8" />
                  <circle cx="20" cy="10" r="4.5" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
                  <ellipse cx="20" cy="128" rx="12" ry="4" fill="#64748B" />

                  {/* Flowing Red Banner Flag */}
                  <path
                    d="M22 14 C48 6, 68 24, 94 14 L94 64 C68 74, 48 56, 22 64 Z"
                    fill="#EF4444"
                    stroke="#DC2626"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  {/* 3D Wave Shading */}
                  <path
                    d="M22 14 C38 10, 52 18, 62 16 L62 66 C52 68, 38 60, 22 64 Z"
                    fill="#DC2626"
                    opacity="0.3"
                  />
                  {/* Gold Star Emblem in Flag Center */}
                  <path
                    d="M56 36 L58 41 L63 41.5 L59 45 L60.5 50 L56 47 L51.5 50 L53 45 L49 41.5 L54 41 Z"
                    fill="#FDE047"
                  />
                </svg>
              </div>

              <span className="text-[10px] font-mono font-bold tracking-widest text-red-600 uppercase bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full shadow-sm">
                FINISH LINE
              </span>
            </div>

            {/* Launch Project Callout Card */}
            <div className="w-[300px] sm:w-[330px] p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-left">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#0457DF] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full inline-block mb-3">
                READY TO COLLABORATE?
              </span>
              <h3 className="text-xl font-black text-[#0F172A] tracking-tight leading-snug mb-2">
                Let's Build Something Exceptional
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-5">
                Book a 20-minute discovery call to discuss your architecture, timeline, and deliverables.
              </p>
              <button
                onClick={() => {
                  const btn = document.querySelector('button[aria-label="Contact"], header button');
                  if (btn) btn.click();
                }}
                className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0F172A] text-white hover:bg-[#0457DF] transition-all duration-300 font-sans text-xs sm:text-sm font-semibold shadow-md cursor-pointer"
              >
                <span>Book Discovery Call</span>
                <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
