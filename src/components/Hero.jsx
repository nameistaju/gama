import React, { useRef, useEffect } from 'react';
import './GamaHero.css';

const stars = [
  [6, 18], [12, 42], [24, 12], [32, 28], [42, 16], [54, 8], [68, 22], [82, 14], [90, 32],
  [94, 62], [8, 72], [22, 84], [38, 76], [58, 88], [72, 70], [86, 82],
];

export default function Hero({ onOpenContact, onSelectService }) {
  const heroRef = useRef(null);

  // Subtle interactive mouse parallax
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e) => {
      const r = hero.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty('--px', `${dx * 20}px`);
      hero.style.setProperty('--py', `${dy * 14}px`);
    };

    const handleMouseLeave = () => {
      hero.style.setProperty('--px', '0px');
      hero.style.setProperty('--py', '0px');
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('solutions') || document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="gm-hero-split">
      {/* Background Ambient Glow & Stars */}
      <div className="gm-split-glow" />

      {stars.map(([x, y], i) => (
        <i
          key={i}
          className="gm-split-star"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${(i % 5) * 0.6}s`,
          }}
        />
      ))}

      {/* Main Container: 2-Column Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <div className="gm-split-eyebrow">
            <span>GAMA TECHNOLOGIES · VISAKHAPATNAM</span>
          </div>

          {/* Main Heading */}
          <h1 className="gm-split-title">
            <span className="gm-split-title-white">ENGINEERING</span>
            <span className="gm-split-title-gradient">TOMORROW.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="gm-split-sub">
            Building intelligent digital solutions, together. We turn business challenges and ambitious ideas into dependable digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="gm-split-ctas">
            <button
              onClick={scrollToServices}
              className="gm-split-btn-primary"
            >
              <span>Explore Services</span>
              <span className="text-base font-bold">→</span>
            </button>

            <button
              onClick={() => onOpenContact && onOpenContact()}
              className="gm-split-btn-secondary"
            >
              <span>Start a Project</span>
              <span className="text-sm font-bold">↗</span>
            </button>
          </div>
        </div>

        {/* Right Column: Cyber Butterfly Visual (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="gm-split-butterfly-container">
            <div className="gm-split-butterfly-box">
              <img
                src="/cyber_butterfly_flap.gif"
                alt="GAMA Technologies Cyber Butterfly"
                className="gm-split-butterfly-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
