import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EditorialAbout() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  // Statement segments styled using GAMA logo brand colors and aesthetic 1:1 transparent sticker assets
  // Colors: Cobalt Blue (#0457DF), Sky Cyan (#0284C7), Golden Amber (#D97706), Emerald Green (#059669), Coral Red (#DC2626)
  const segments = [
    { text: "→ We engineer " },
    {
      text: "mission-critical software",
      color: "#0457DF",
      image: "/assets/Hand-Drawn Yellow Lightning Bolt.png",
      alt: "Mission-critical Lightning Bolt",
    },
    { text: " and " },
    {
      text: "high-performance digital platforms",
      color: "#0284C7",
      image: "/assets/Gradient Comet Lightning Logo.png",
      alt: "High-performance Rocket Comet",
    },
    { text: ". From bespoke enterprise systems to " },
    {
      text: "modern cloud solutions",
      color: "#D97706",
      image: "/assets/Cloud Storage with Flying Documents.png",
      alt: "Cloud Storage with Flying Documents",
    },
    { text: ", our dedicated engineering team builds " },
    {
      text: "resilient code",
      color: "#059669",
      image: "/assets/Ctrl Key Burden.png",
      alt: "Resilience & Control Key",
    },
    { text: " designed to " },
    {
      text: "scale effortlessly",
      color: "#DC2626",
    },
    { text: ". That's our promise." },
  ];

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const chars = textRef.current.querySelectorAll('.about-char');
    const badges = textRef.current.querySelectorAll('.about-badge');

    // Initial state: subtle dim opacity
    chars.forEach((c) => {
      gsap.set(c, {
        opacity: 0.22,
        color: c.dataset.color || '#0F172A',
      });
    });

    badges.forEach((b) => {
      gsap.set(b, {
        opacity: 0.35,
        scale: 0.8,
      });
    });

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: isMobile ? '+=1200' : '+=1600',
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Scrub characters from dim to full vivid color across scroll
      tl.to(
        chars,
        {
          opacity: 1,
          stagger: {
            amount: 0.85,
            from: 'start',
          },
          duration: 0.15,
          ease: 'none',
        },
        0
      );

      // Pop in 1:1 image sticker badges with spring bounce as words illuminate
      tl.to(
        badges,
        {
          opacity: 1,
          scale: 1,
          stagger: {
            amount: 0.85,
            from: 'start',
          },
          duration: 0.22,
          ease: 'back.out(2)',
        },
        0.05
      );

      // Hold pause before unpinning so user can read complete statement
      tl.to({}, { duration: 0.1 }, 0.9);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="editorial"
      ref={sectionRef}
      className="relative w-full bg-[#F8FAFC] h-[100dvh] min-h-[100dvh] px-4 sm:px-8 md:px-12 overflow-hidden flex flex-col items-center justify-center z-10"
    >
      {/* Editorial Statement styled with GAMA logo chromatic palette */}
      <div className="relative w-full max-w-5xl mx-auto text-left sm:text-center px-2 sm:px-6">
        <p
          ref={textRef}
          className="font-sans text-[17px] xs:text-[19px] sm:text-[22px] md:text-[36px] lg:text-[44px] font-semibold text-[#0F172A] leading-[1.68] sm:leading-[1.5] md:leading-[1.38] tracking-normal md:tracking-[-0.025em] select-none"
        >
          {segments.map((segment, sIdx) => {
            const hasColor = Boolean(segment.color);
            const words = segment.text.split(' ');

            return (
              <React.Fragment key={sIdx}>
                {words.map((word, wIdx) => (
                  <span key={`${sIdx}-${wIdx}`} className="inline-block whitespace-nowrap">
                    {word.split('').map((char, cIdx) => (
                      <span
                        key={`${sIdx}-${wIdx}-${cIdx}`}
                        className={`about-char inline-block transition-colors duration-100 ${
                          hasColor ? 'font-bold' : 'font-semibold'
                        }`}
                        data-color={segment.color || '#0F172A'}
                        style={{
                          opacity: 0.22,
                          color: segment.color || '#0F172A',
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    {wIdx < words.length - 1 && '\u00A0'}
                  </span>
                ))}

                {/* Aesthetic 1:1 Transparent Sticker Image */}
                {segment.image && (
                  <span className="about-badge inline-flex items-center justify-center w-7 h-7 xs:w-8 xs:h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 lg:w-16 lg:h-16 align-middle mx-1 sm:mx-2 md:mx-2.5 -mt-0.5 sm:-mt-1 md:-mt-2 select-none relative group/badge cursor-pointer">
                    <img
                      src={segment.image}
                      alt={segment.alt || ''}
                      className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover/badge:scale-125 group-hover/badge:rotate-6 pointer-events-auto"
                    />
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </p>
      </div>
    </section>
  );
}
