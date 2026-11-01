import React, { useEffect, useRef } from 'react';

export default function CurvedMarquee() {
  const containerRef = useRef(null);
  const textPathRef = useRef(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    let animationFrameId;
    let isVisible = true;

    const animate = () => {
      if (!isVisible) return;
      // Move text continuously along the curve
      offsetRef.current -= 0.6;
      if (offsetRef.current <= -1200) {
        offsetRef.current = 0;
      }
      if (textPathRef.current) {
        textPathRef.current.setAttribute('startOffset', `${offsetRef.current}px`);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  const marqueeText = "SOFTWARE BUILT FOR SCALE  •  SYSTEMS ARCHITECTURE  •  ENGINEERING EXCELLENCE  •  HIGH PERFORMANCE CODE  •  SOFTWARE BUILT FOR SCALE  •  SYSTEMS ARCHITECTURE  •  ENGINEERING EXCELLENCE  •  ";

  return (
    <div ref={containerRef} className="w-full relative overflow-visible pointer-events-none select-none -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-24 z-20">
      <svg
        viewBox="0 0 1440 370"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto block overflow-visible"
      >
        <defs>
          <path
            id="hero-marquee-curve"
            d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117 L 5000 507"
            fill="none"
          />
        </defs>

        {/* Seamless Hero Bridge: Fills the wedge above the marquee curve with Hero black (#000000) */}
        <path
          d="M -100 -50 L 1540 -50 L 1540 105.117 C 1166.5 74.6231 934.59 67.5984 712.699 90.6403 C 464.078 116.458 179.631 174.299 -43.0867 292.81 L -100 292.81 Z"
          fill="#000000"
        />

        {/* Deep Obsidian Curved Ribbon Background */}
        <path
          d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117"
          stroke="#0F172A"
          strokeWidth="154"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Marquee Text on Path */}
        <text
          fill="#FFFFFF"
          dominantBaseline="central"
          alignmentBaseline="central"
          fontSize="72"
          fontWeight="800"
          style={{
            fontFamily: 'Mdnichrometest, Impact, sans-serif',
            letterSpacing: '0.04em',
            dominantBaseline: 'central',
            alignmentBaseline: 'central'
          }}
        >
          <textPath
            ref={textPathRef}
            href="#hero-marquee-curve"
            startOffset="0px"
            dominantBaseline="central"
            alignmentBaseline="central"
          >
            {marqueeText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
