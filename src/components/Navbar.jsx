import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Phone } from 'lucide-react';
import GamaLogo from './GamaLogo';

export default function Navbar({ onOpenContact, currentView, onNavigate, experienceProgress = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [mobilePricingOpen, setMobilePricingOpen] = useState(
    currentView === 'websites' || currentView === 'marketing'
  );
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  const rootRef = useRef(null);
  const pricingRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const svgRef = useRef(null);
  const stemRef = useRef(null);
  const crossRef = useRef(null);
  const overlayRef = useRef(null);
  const contentContainerRef = useRef(null);
  const firstLinkRef = useRef(null);
  const itemsRef = useRef([]);
  const currentTlRef = useRef(null);
  const ctxRef = useRef(null);

  const isNightNav = currentView === 'experience' && experienceProgress > 0.55;

  const handlePricingMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setPricingOpen(true);
  };

  const handlePricingMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setPricingOpen(false);
    }, 280);
  };

  const handlePricingClick = (e) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setPricingOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pricingRef.current && !pricingRef.current.contains(e.target)) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
        }
        setPricingOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Smart hide on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      // Keep navbar visible if mobile drawer is open
      if (mobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;

      // Always show when near the very top of the page
      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else if (delta > 6) {
        // Scrolling DOWN -> hide navbar
        setIsVisible(false);
        if (pricingOpen) setPricingOpen(false);
      } else if (delta < -6) {
        // Scrolling UP -> reveal navbar
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen, pricingOpen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const lockScroll = () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };

  const unlockScroll = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, rootRef);
    ctxRef.current = ctx;

    return () => {
      if (currentTlRef.current) currentTlRef.current.kill();
      ctx.revert();
      unlockScroll();
    };
  }, []);

  const openMenu = () => {
    if (currentTlRef.current) {
      currentTlRef.current.kill();
    }
    setMobileMenuOpen(true);
    lockScroll();

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    ctxRef.current?.add(() => {
      const tl = gsap.timeline();
      currentTlRef.current = tl;

      if (prefersReduced) {
        gsap.set(svgRef.current, { rotation: 45, transformOrigin: '50% 50%' });
        gsap.set(stemRef.current, { strokeDashoffset: -85.5 });
        gsap.set(crossRef.current, { strokeWidth: 4, strokeDashoffset: 0 });
        gsap.set(overlayRef.current, { visibility: 'visible', pointerEvents: 'auto' });
        tl.to(overlayRef.current, { opacity: 1, duration: 0.2, ease: 'power2.out' }, 0)
          .to(itemsRef.current.filter(Boolean), { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, duration: 0.2, ease: 'power2.out' }, 0);
      } else {
        // Toggle morph
        tl.to(svgRef.current, { rotation: 45, duration: 0.85, ease: 'power3.inOut', transformOrigin: '50% 50%' }, 0);
        tl.to(stemRef.current, { strokeDashoffset: -85.5, duration: 0.85, ease: 'power2.inOut' }, 0);
        tl.to(crossRef.current, { strokeWidth: 4, strokeDashoffset: 0, duration: 0.6, ease: 'power2.inOut' }, 0.2);

        // Overlay fade in
        gsap.set(overlayRef.current, { visibility: 'visible', pointerEvents: 'auto' });
        tl.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0);

        // Children spring in one by one with slight tilt
        const validChildren = itemsRef.current.filter(Boolean);
        validChildren.forEach((child, i) => {
          tl.fromTo(
            child,
            {
              opacity: 0,
              x: -35,
              y: 50,
              scale: 0.4,
              rotation: gsap.utils.random(-10, 10),
              transformOrigin: 'center center',
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.75,
              ease: 'back.out(2.2)',
            },
            0.15 + i * 0.09
          );
        });
      }

      tl.call(() => {
        firstLinkRef.current?.focus();
      });
    });
  };

  const closeMenu = (onAfterClose) => {
    if (currentTlRef.current) {
      currentTlRef.current.kill();
    }
    setMobileMenuOpen(false);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    ctxRef.current?.add(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlayRef.current, { visibility: 'hidden', pointerEvents: 'none' });
          unlockScroll();
          toggleButtonRef.current?.focus();
          if (typeof onAfterClose === 'function') {
            onAfterClose();
          }
        },
      });
      currentTlRef.current = tl;

      if (prefersReduced) {
        gsap.set(svgRef.current, { rotation: 0, transformOrigin: '50% 50%' });
        gsap.set(stemRef.current, { strokeDashoffset: 0 });
        gsap.set(crossRef.current, { strokeWidth: 0, strokeDashoffset: 20 });
        tl.to([overlayRef.current, ...itemsRef.current.filter(Boolean)], {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.inOut',
        });
      } else {
        // Toggle morph reverses
        tl.to(svgRef.current, { rotation: 0, duration: 0.85, ease: 'power3.inOut', transformOrigin: '50% 50%' }, 0);
        tl.to(stemRef.current, { strokeDashoffset: 0, duration: 0.85, ease: 'power2.inOut' }, 0);
        tl.to(crossRef.current, { strokeWidth: 0, strokeDashoffset: 20, duration: 0.6, ease: 'power2.inOut' }, 0);

        // Children stagger out
        tl.to(itemsRef.current.filter(Boolean), {
          opacity: 0,
          y: 20,
          scale: 0.8,
          duration: 0.25,
          stagger: 0.04,
          ease: 'power2.in',
        }, 0);

        // Overlay fades out
        tl.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        }, 0.1);
      }
    });
  };

  const toggleMenu = () => {
    if (mobileMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Close menu on route/view change
  useEffect(() => {
    if (mobileMenuOpen) {
      closeMenu();
    }
  }, [currentView]);

  // Close menu on hash change
  useEffect(() => {
    const handleHashChange = () => {
      if (mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [mobileMenuOpen]);

  // Close menu when viewport reaches >= 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Focus trap and Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!mobileMenuOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key === 'Tab') {
        const focusables = [
          toggleButtonRef.current,
          ...itemsRef.current.filter(Boolean),
        ];
        if (focusables.length === 0) return;
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'capabilities', label: 'Capabilities', action: () => onNavigate('capabilities') },
    { id: 'services', label: 'Services', action: () => onNavigate('services') },
    { id: 'about', label: 'About us', action: () => onNavigate('about') },
    { id: 'faq', label: 'FAQ', action: () => onNavigate('faq') },
  ];

  return (
    <div ref={rootRef}>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-5 md:px-8 py-5 transition-all duration-300 ease-in-out pointer-events-none ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
            isVisible ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {/* Left Pill Links (Desktop Only) */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2.5">
            <button
              onClick={() => onNavigate('capabilities')}
              className={`px-3.5 lg:px-4 py-2 rounded-full font-sans text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentView === 'capabilities'
                  ? 'bg-[#0F172A] text-white shadow-sm ring-1 ring-[#0457DF]/40'
                  : 'bg-white/95 text-[#0F172A] hover:bg-[#0F172A] hover:text-white shadow-sm border border-[#E2E8F0] hover:border-[#0F172A]'
              }`}
            >
              Capabilities
            </button>

            <button
              onClick={() => onNavigate('services')}
              className={`px-3.5 lg:px-4 py-2 rounded-full font-sans text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentView === 'services'
                  ? 'bg-[#0F172A] text-white shadow-sm ring-1 ring-[#0457DF]/40'
                  : 'bg-white/95 text-[#0F172A] hover:bg-[#0F172A] hover:text-white shadow-sm border border-[#E2E8F0] hover:border-[#0F172A]'
              }`}
            >
              Services
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`px-3.5 lg:px-4 py-2 rounded-full font-sans text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentView === 'about'
                  ? 'bg-[#0F172A] text-white shadow-sm ring-1 ring-[#0457DF]/40'
                  : 'bg-white/95 text-[#0F172A] hover:bg-[#0F172A] hover:text-white shadow-sm border border-[#E2E8F0] hover:border-[#0F172A]'
              }`}
            >
              About us
            </button>

            <button
              onClick={() => onNavigate('faq')}
              className={`px-3.5 lg:px-4 py-2 rounded-full font-sans text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentView === 'faq'
                  ? 'bg-[#0F172A] text-white shadow-sm ring-1 ring-[#0457DF]/40'
                  : 'bg-white/95 text-[#0F172A] hover:bg-[#0F172A] hover:text-white shadow-sm border border-[#E2E8F0] hover:border-[#0F172A]'
              }`}
            >
              FAQ
            </button>
          </div>

          {/* Brand Logo: GAMA Multicolor Gradient Logo.png only on mobile, dual hover on desktop */}
          <button
            onClick={() => onNavigate('home')}
            className="group relative flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105 md:absolute md:left-1/2 md:-translate-x-1/2 h-8 sm:h-9 md:h-10 w-auto max-w-[140px] sm:w-32 md:w-36 shrink-0"
            aria-label="GAMA Software Home"
          >
            {/* Mobile Only Logo: GAMA Multicolor Gradient Logo.png */}
            <img
              src="/GAMA Multicolor Gradient Logo.png"
              alt="GAMA Multicolor Gradient Logo"
              className="block md:hidden h-7 sm:h-8 w-auto max-w-full object-contain select-none pointer-events-none"
            />

            {/* Desktop Default: gama-logo.png (Ribbon G only, hidden on mobile) */}
            <img
              src="/gama-logo.png"
              alt="GAMA Logo"
              className="hidden md:block h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity duration-300 ease-in-out group-hover:opacity-0 select-none pointer-events-none"
            />

            {/* Desktop Hover: GAMA Multicolor Gradient Logo.png */}
            <img
              src="/GAMA Multicolor Gradient Logo.png"
              alt="GAMA Multicolor Gradient Logo"
              className="hidden md:block absolute inset-0 m-auto h-8 sm:h-9 md:h-10 w-auto max-w-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 select-none pointer-events-none"
            />
          </button>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Fullscreen Toggle (Desktop Only) */}
            <button
              onClick={toggleFullscreen}
              className="hidden md:flex w-9 h-9 rounded-full bg-white/95 hover:bg-white text-[#0F172A] hover:text-[#0457DF] border border-[#E2E8F0] items-center justify-center transition-all duration-200 shadow-sm cursor-pointer hover:border-[#0F172A]/30"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              )}
            </button>

            {/* Contact Us CTA (Desktop Only) */}
            <button
              onClick={onOpenContact}
              className="hidden md:inline-flex group relative items-center gap-2.5 pl-4 sm:pl-5 pr-2 py-1.5 rounded-full bg-[#0F172A] text-white hover:bg-black transition-all font-sans text-sm font-medium shadow-sm cursor-pointer border border-[#0F172A] hover:border-black ring-1 ring-transparent hover:ring-[#0457DF]/40"
            >
              <span>Contact Us</span>
              <span className="w-6 h-6 rounded-full bg-[#0457DF] text-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Mobile Menu Toggle Button (<768px Only) */}
            <button
              ref={toggleButtonRef}
              onClick={toggleMenu}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden two26-toggle-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0457DF]"
            >
              <svg
                ref={svgRef}
                className="w-full h-full"
                viewBox="-2 6.52 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transformOrigin: '50% 50%' }}
              >
                {/* Looping Stem Path */}
                <path
                  ref={stemRef}
                  className="toggle-stem"
                  d="M7.01247 34.0204C7.01247 34.0204 10.1314 34.0204 20.8246 34.0204C31.5179 34.0204 31.2364 16.0204 20.8246 16.0205C10.4128 16.0205 9.00975 16.0196 9.00975 16.0196C5.0415 16.0196 2 12.8812 2 9.00979C2 5.13839 5.13839 2 9.00979 2C12.8679 2.01076 15.9893 5.1363 16 8.98937V34.5196"
                  stroke="#0F172A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ strokeDasharray: '52.6, 111.029', strokeDashoffset: 0 }}
                />
                {/* Horizontal Crossbar Path */}
                <path
                  ref={crossRef}
                  className="toggle-cross"
                  d="M6 24.52H26"
                  stroke="#0F172A"
                  strokeWidth="0"
                  strokeLinecap="round"
                  style={{ strokeDasharray: '20, 20', strokeDashoffset: 20 }}
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        style={{
          opacity: 0,
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
        onClick={(e) => {
          if (e.target === overlayRef.current || e.target === contentContainerRef.current) {
            closeMenu();
          }
        }}
        className="fixed inset-0 h-[100svh] z-[48] bg-[#F8FAFC]/95 backdrop-blur-md md:hidden overflow-y-auto"
      >
        <div
          ref={contentContainerRef}
          style={{
            paddingTop: 'max(100px, calc(env(safe-area-inset-top) + 100px))',
            paddingRight: '20px',
            paddingLeft: '20px',
            paddingBottom: 'max(32px, env(safe-area-inset-bottom))',
          }}
          className="flex flex-col items-end gap-[14px] min-h-full"
        >
          {navItems.map((item, index) => {
            const isBlackPill = currentView === item.id;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  itemsRef.current[index] = el;
                  if (index === 0) firstLinkRef.current = el;
                }}
                onClick={() => {
                  closeMenu();
                  item.action();
                }}
                className={`font-sans font-medium text-[22px] leading-[1.2] px-8 py-[18px] rounded-full w-auto self-end cursor-pointer active:scale-[0.96] transition-transform duration-120 ${
                  isBlackPill
                    ? 'bg-[#0F172A] text-white shadow-sm ring-1 ring-[#0457DF]/40'
                    : 'bg-white text-[#0F172A] hover:bg-[#0F172A] hover:text-white shadow-sm border border-slate-200'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Contact Us CTA (Mobile) */}
          <button
            ref={(el) => {
              itemsRef.current[navItems.length] = el;
            }}
            onClick={() => {
              closeMenu();
              onOpenContact();
            }}
            className="group relative inline-flex items-center gap-3 pl-6 pr-2.5 h-[46px] rounded-full bg-[#0F172A] text-white hover:bg-black active:scale-[0.96] transition-all duration-120 font-sans text-[15px] font-medium shadow-sm cursor-pointer self-end"
          >
            <span>Contact Us</span>
            <span className="w-8 h-8 rounded-full bg-[#0457DF] text-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
