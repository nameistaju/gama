import React, { useRef, useEffect } from 'react';
import './GamaHero.css';

const Icon = {
  layers: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
      <path d="M16 4 4 10l12 6 12-6-12-6Z" />
      <path d="m4 16 12 6 12-6" />
      <path d="m4 22 12 6 12-6" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="18" height="18" rx="2" />
      <rect x="12.5" y="12.5" width="7" height="7" rx="1" />
      <path d="M11 3v4M16 3v4M21 3v4M11 25v4M16 25v4M21 25v4M3 11h4M3 16h4M3 21h4M25 11h4M25 16h4M25 21h4" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
      <path d="M16 3 4 9.5v13L16 29l12-6.5v-13L16 3Z" />
      <path d="m4 9.5 12 6.5 12-6.5M16 16v13" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10 9-7 7 7 7M22 9l7 7-7 7M18 6l-4 20" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 25a6 6 0 0 1-.8-11.9A8 8 0 0 1 23.5 11 6.5 6.5 0 0 1 23 25H9Z" />
    </svg>
  ),
  bars: (
    <svg viewBox="0 0 32 32" fill="currentColor">
      <rect x="4" y="17" width="5.5" height="11" rx="1" />
      <rect x="13" y="11" width="5.5" height="17" rx="1" />
      <rect x="22" y="4" width="5.5" height="24" rx="1" />
    </svg>
  ),
};

const chips = [
  { cls: 'c-it', icon: Icon.layers, label: 'IT Services', id: 'it-services' },
  { cls: 'c-ai', icon: Icon.chip, label: 'AI Solutions', id: 'ai-solutions' },
  { cls: 'c-pe', icon: Icon.cube, label: 'Product\nEngineering', id: 'product-engineering' },
  { cls: 'c-web', icon: Icon.code, label: 'Web Development', id: 'web-development' },
  { cls: 'c-cloud', icon: Icon.cloud, label: 'Cloud & DevOps', id: 'cloud-devops' },
  { cls: 'c-data', icon: Icon.bars, label: 'Data &\nAnalytics', id: 'data-analytics' },
];

const stars = [
  [8, 14], [14, 46], [22, 8], [33, 30], [41, 12], [58, 9], [66, 24], [76, 10], [84, 36],
  [92, 20], [95, 48], [5, 60], [27, 56], [73, 58], [88, 66], [12, 76], [60, 70],
];

export default function Hero({ onOpenContact, onSelectService }) {
  const heroRef = useRef(null);

  // Subtle mouse parallax effect matching reference
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e) => {
      const r = hero.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty('--px', `${dx * 22}px`);
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

  const scrollToExplore = () => {
    const el = document.getElementById('solutions') || document.getElementById('services') || document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChipClick = (chipId) => {
    if (onSelectService) {
      onSelectService(chipId);
    } else {
      scrollToExplore();
    }
  };

  return (
    <section ref={heroRef} className="gm-hero">
      {/* Background Cosmic SVG Waves & Radar Rings */}
      <svg className="gm-bg" viewBox="0 0 1672 941" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="gmWaveL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2a5cff" />
            <stop offset=".5" stopColor="#35b8ff" />
            <stop offset="1" stopColor="#8a5cff" />
          </linearGradient>
          <linearGradient id="gmWaveR" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0" stopColor="#ff8a2a" />
            <stop offset=".45" stopColor="#ffb25a" />
            <stop offset="1" stopColor="#2bd4ff" />
          </linearGradient>
          <linearGradient id="gmSwoshL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6a3cff" stopOpacity="0" />
            <stop offset=".5" stopColor="#7c5cff" />
            <stop offset="1" stopColor="#2a8cff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gmSwoshR" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a8cff" stopOpacity="0" />
            <stop offset=".5" stopColor="#2fb4ff" />
            <stop offset="1" stopColor="#2a5cff" stopOpacity="0" />
          </linearGradient>
          <filter id="gmBlur"><feGaussianBlur stdDeviation="9" /></filter>
        </defs>

        <circle cx="835" cy="450" r="350" fill="none" stroke="#5aa8ff" strokeOpacity=".35" strokeWidth="1.5" />
        <circle cx="835" cy="450" r="300" fill="none" stroke="#5aa8ff" strokeOpacity=".15" strokeWidth="1" strokeDasharray="2 8" />
        <path d="M835 100v70" stroke="#5aa8ff" strokeOpacity=".5" />

        {/* Side Swooshes */}
        <path d="M0 400C200 430 330 540 500 650" stroke="url(#gmSwoshL)" strokeWidth="16" fill="none" filter="url(#gmBlur)" opacity=".7" />
        <path d="M0 400C200 430 330 540 500 650" stroke="url(#gmSwoshL)" strokeWidth="2.5" fill="none" />
        <path d="M1672 385C1500 410 1380 500 1250 610" stroke="url(#gmSwoshR)" strokeWidth="16" fill="none" filter="url(#gmBlur)" opacity=".7" />
        <path d="M1672 385C1500 410 1380 500 1250 610" stroke="url(#gmSwoshR)" strokeWidth="2.5" fill="none" />

        {/* Bottom Waves */}
        <path d="M0 770C200 735 380 800 560 880C650 918 710 941 780 941H0Z" fill="url(#gmWaveL)" opacity=".28" />
        <path d="M0 770C200 735 380 800 560 880C650 918 710 941 780 941" stroke="url(#gmWaveL)" strokeWidth="3" fill="none" />
        <path d="M0 790C200 755 370 820 540 900" stroke="url(#gmWaveL)" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" fill="none" />
        <path d="M0 815C190 785 350 845 500 925" stroke="url(#gmWaveL)" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" fill="none" />

        <path d="M1672 760C1560 715 1460 715 1380 790C1300 865 1200 941 1090 941H1672Z" fill="url(#gmWaveR)" opacity=".3" />
        <path d="M1672 760C1560 715 1460 715 1380 790C1300 865 1200 941 1090 941" stroke="url(#gmWaveR)" strokeWidth="3" fill="none" />
        <path d="M1672 785C1565 745 1470 748 1395 815C1320 880 1230 930 1150 941" stroke="url(#gmWaveR)" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" fill="none" />
        <path d="M1672 810C1570 775 1480 782 1410 840" stroke="url(#gmWaveR)" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" fill="none" />
      </svg>

      {/* Twinkling Stars */}
      {stars.map(([x, y], i) => (
        <i
          key={i}
          className="gm-star"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${(i % 6) * 0.5}s`,
          }}
        />
      ))}

      {/* Floating Glassmorphism Service Chips */}
      {chips.map((c) => (
        <div
          key={c.cls}
          onClick={() => handleChipClick(c.id)}
          className={`gm-chip ${c.cls}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') handleChipClick(c.id); }}
        >
          <span className="gm-chip-ico">{c.icon}</span>
          <span className="gm-chip-label">{c.label}</span>
        </div>
      ))}

      {/* Multicolour Butterfly GIF in the Center */}
      <div className="gm-butterfly-wrap">
        <div className="gm-glow-layer" />
        <div className="gm-body-bob">
          <img
            src="/cyber_butterfly_flap.gif"
            alt="GAMA Technologies Cyber Butterfly"
            className="gm-butterfly-img"
          />
        </div>
      </div>

      {/* Eyebrow */}
      <div className="gm-eyebrow">
        <i />
        <span>GAMA TECHNOLOGIES · BUILDING TOMORROW TOGETHER</span>
        <i />
      </div>

      {/* Main Title with Iridescent Gradient Accent */}
      <h1 className="gm-title">
        Where human ingenuity meets<br />
        machine precision,<br />
        <em>the future of software</em> takes shape.
      </h1>

      {/* Subtitle */}
      <p className="gm-sub">
        Engineering intelligent digital experiences, scalable software and technology<br className="hidden sm:inline" />
        {' '}that moves businesses forward.
      </p>

      {/* CTA Buttons */}
      <div className="gm-cta">
        <button
          onClick={scrollToExplore}
          className="gm-btn gm-btn-solid cursor-pointer"
        >
          <span>Explore What We Do</span>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16m-6-6 6 6-6 6" />
          </svg>
        </button>

        <button
          onClick={() => onOpenContact && onOpenContact()}
          className="gm-btn gm-btn-ghost cursor-pointer"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" className="shrink-0">
            <circle cx="12" cy="12" r="11" fill="#fff" />
            <path d="M10 7.5v9l7-4.5-7-4.5Z" fill="#06144a" />
          </svg>
          <span>Watch Our Story</span>
        </button>
      </div>

      {/* Scroll to Explore Indicator */}
      <button
        onClick={scrollToExplore}
        className="gm-scroll cursor-pointer"
        aria-label="Scroll to explore"
      >
        <svg viewBox="0 0 22 34" width="22" height="34" fill="none" stroke="#fff" strokeOpacity=".85" strokeWidth="1.5">
          <rect x="1.5" y="1.5" width="19" height="31" rx="9.5" />
          <path d="M11 7v7" strokeLinecap="round" />
        </svg>
        <span>Scroll to Explore</span>
        <svg viewBox="0 0 16 10" width="16" height="10" fill="none" stroke="#7fb6ff" strokeWidth="1.5">
          <path d="m2 2 6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
