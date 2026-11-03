import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Phone, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenContact, onSelectIndustry, onSelectService, currentView, onNavigate, experienceProgress = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mega Menu State
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'what-we-do' | 'who-we-are' | null
  const [activeSubCategory, setActiveSubCategory] = useState('industries'); // 'industries' | 'services'
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState('industries');

  const lastScrollYRef = useRef(0);
  const rootRef = useRef(null);
  const megaMenuContainerRef = useRef(null);
  const megaCloseTimeoutRef = useRef(null);
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

  // Industry & Service definitions matching user screenshots (TCS inspiration)
  const industriesList = [
    'Banking',
    'Capital Markets',
    'Consumer Packaged Goods and Distribution',
    'Communications, Media, and Information Services',
    'Education',
    'Energy, Resources, and Utilities',
    'Healthcare',
    'High Tech',
    'Insurance',
    'Life Sciences',
    'Manufacturing',
    'Public Services',
    'Retail',
    'Travel and Logistics',
  ];

  const servicesList = [
    'Artificial Intelligence and Data & Analytics',
    'AI-led Data Centres',
    'Cloud',
    'Consulting',
    'Industrial Autonomy & Engineering',
    'Network Solutions and Services',
  ];

  const handleMegaMenuOpen = (menu) => {
    if (megaCloseTimeoutRef.current) {
      clearTimeout(megaCloseTimeoutRef.current);
      megaCloseTimeoutRef.current = null;
    }
    setActiveMegaMenu(menu);
  };

  const handleMegaMenuClose = () => {
    if (megaCloseTimeoutRef.current) {
      clearTimeout(megaCloseTimeoutRef.current);
    }
    megaCloseTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 280);
  };

  const toggleMegaMenu = (menu) => {
    if (megaCloseTimeoutRef.current) {
      clearTimeout(megaCloseTimeoutRef.current);
      megaCloseTimeoutRef.current = null;
    }
    setActiveMegaMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaMenuContainerRef.current && !megaMenuContainerRef.current.contains(e.target)) {
        if (megaCloseTimeoutRef.current) {
          clearTimeout(megaCloseTimeoutRef.current);
        }
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (megaCloseTimeoutRef.current) clearTimeout(megaCloseTimeoutRef.current);
    };
  }, []);

  // Smart hide on scroll down, reveal on scroll up + transparent on hero vs dark fill below
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Transparent on hero section (<= 20px), solid dark filled background when scrolled below
      setIsScrolled(currentScrollY > 20);

      if (mobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      const delta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else if (delta > 6) {
        setIsVisible(false);
        setActiveMegaMenu(null);
      } else if (delta < -6) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

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
        gsap.set(stemRef.current, { strokeDashoffset: 160 });
        gsap.set(crossRef.current, { strokeWidth: 4, strokeDashoffset: 0 });
        tl.set(overlayRef.current, { display: 'block', opacity: 1, visibility: 'visible', pointerEvents: 'auto' });
        tl.set(itemsRef.current.filter(Boolean), { opacity: 1, y: 0, scale: 1 });
      } else {
        tl.set(overlayRef.current, { display: 'block', visibility: 'visible', pointerEvents: 'auto' });
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        }, 0);

        tl.to(svgRef.current, { rotation: 45, duration: 0.85, ease: 'power3.inOut', transformOrigin: '50% 50%' }, 0);
        tl.to(stemRef.current, { strokeDashoffset: 160, duration: 0.85, ease: 'power2.inOut' }, 0);
        tl.to(crossRef.current, { strokeWidth: 4, strokeDashoffset: 0, duration: 0.6, ease: 'power2.inOut' }, 0.2);

        tl.fromTo(
          itemsRef.current.filter(Boolean),
          { opacity: 0, y: -20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.05,
            ease: 'back.out(1.5)',
          },
          0.15
        );
      }
    });
  };

  const closeMenu = () => {
    if (currentTlRef.current) {
      currentTlRef.current.kill();
    }
    setMobileMenuOpen(false);
    unlockScroll();

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    ctxRef.current?.add(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlayRef.current, { display: 'none', visibility: 'hidden', pointerEvents: 'none' });
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
        tl.to(svgRef.current, { rotation: 0, duration: 0.85, ease: 'power3.inOut', transformOrigin: '50% 50%' }, 0);
        tl.to(stemRef.current, { strokeDashoffset: 0, duration: 0.85, ease: 'power2.inOut' }, 0);
        tl.to(crossRef.current, { strokeWidth: 0, strokeDashoffset: 20, duration: 0.6, ease: 'power2.inOut' }, 0);

        tl.to(itemsRef.current.filter(Boolean), {
          opacity: 0,
          y: 20,
          scale: 0.8,
          duration: 0.25,
          stagger: 0.04,
          ease: 'power2.in',
        }, 0);

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

  useEffect(() => {
    if (mobileMenuOpen) {
      closeMenu();
    }
  }, [currentView]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <div ref={rootRef}>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out pointer-events-none ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`w-full px-5 md:px-8 py-3.5 sm:py-4 pointer-events-auto transition-all duration-300 ${
            isScrolled
              ? 'bg-[#060913]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.65)]'
              : 'bg-transparent border-b border-transparent shadow-none backdrop-blur-none'
          }`}
        >
          <div ref={megaMenuContainerRef} className="relative max-w-7xl mx-auto">
            <nav className="flex items-center justify-between">
              {/* Left Section: Wordmark Logo (gama_white_wordmark_transparent.png) + Desktop Nav Links */}
              <div className="flex items-center gap-3 lg:gap-5">
                {/* Left Brand Logo: gama_white_wordmark_transparent.png */}
                <button
                  onClick={() => {
                    setActiveMegaMenu(null);
                    onNavigate('home');
                  }}
                  className="flex items-center shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105"
                  aria-label="GAMA Technologies Home"
                >
                  <img
                    src="/gama_white_wordmark_transparent.png"
                    alt="GAMA Technologies"
                    className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto max-w-[170px] sm:max-w-[210px] md:max-w-[230px] object-contain select-none pointer-events-none"
                  />
                </button>

                {/* Desktop Nav Links: What we do, Who we are, About us, FAQ */}
                <div className="hidden md:flex items-center gap-1.5 lg:gap-2.5">
                  {/* What We Do Trigger Pill */}
                  <div
                    className="relative"
                    onMouseEnter={() => handleMegaMenuOpen('what-we-do')}
                    onMouseLeave={handleMegaMenuClose}
                  >
                    <button
                      onClick={() => toggleMegaMenu('what-we-do')}
                      className={`inline-flex items-center gap-1.5 px-3.5 lg:px-4 py-2 rounded-full font-sans text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                        activeMegaMenu === 'what-we-do'
                          ? 'bg-white/20 text-white shadow-sm ring-1 ring-white/30'
                          : 'bg-white/[0.08] text-white/90 hover:bg-white/15 hover:text-white border border-white/10'
                      }`}
                    >
                      <span>What we do</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMegaMenu === 'what-we-do' ? 'rotate-180 text-white' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Who We Are Trigger Pill */}
                  <div
                    className="relative"
                    onMouseEnter={() => handleMegaMenuOpen('who-we-are')}
                    onMouseLeave={handleMegaMenuClose}
                  >
                    <button
                      onClick={() => toggleMegaMenu('who-we-are')}
                      className={`inline-flex items-center gap-1.5 px-3.5 lg:px-4 py-2 rounded-full font-sans text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                        activeMegaMenu === 'who-we-are'
                          ? 'bg-white/20 text-white shadow-sm ring-1 ring-white/30'
                          : 'bg-white/[0.08] text-white/90 hover:bg-white/15 hover:text-white border border-white/10'
                      }`}
                    >
                      <span>Who we are</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMegaMenu === 'who-we-are' ? 'rotate-180 text-white' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  </div>

                  {/* About Us Direct Anchor Pill */}
                  <button
                    onClick={() => {
                      setActiveMegaMenu(null);
                      onNavigate('about');
                    }}
                    className={`px-3.5 lg:px-4 py-2 rounded-full font-sans text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      currentView === 'about'
                        ? 'bg-white/20 text-white shadow-sm ring-1 ring-white/30'
                        : 'bg-white/[0.08] text-white/90 hover:bg-white/15 hover:text-white border border-white/10'
                    }`}
                  >
                    About us
                  </button>

                  {/* FAQ Direct Anchor Pill */}
                  <button
                    onClick={() => {
                      setActiveMegaMenu(null);
                      onNavigate('faq');
                    }}
                    className={`px-3.5 lg:px-4 py-2 rounded-full font-sans text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      currentView === 'faq'
                        ? 'bg-white/20 text-white shadow-sm ring-1 ring-white/30'
                        : 'bg-white/[0.08] text-white/90 hover:bg-white/15 hover:text-white border border-white/10'
                    }`}
                  >
                    FAQ
                  </button>
                </div>
              </div>

              {/* Right Section: Contact Us CTA + gama-logo.png (Desktop) + Mobile Menu Toggle */}
              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                {/* Contact Us CTA (Desktop Only) */}
                <button
                  onClick={() => {
                    setActiveMegaMenu(null);
                    onOpenContact();
                  }}
                  className="hidden md:inline-flex group relative items-center gap-2.5 pl-4 sm:pl-5 pr-2 py-1.5 rounded-full bg-white text-[#0F172A] hover:bg-[#38BDF8] hover:text-[#0F172A] transition-all font-sans text-sm font-semibold shadow-sm cursor-pointer border border-white hover:border-[#38BDF8]"
                >
                  <span>Contact Us</span>
                  <span className="w-6 h-6 rounded-full bg-[#0457DF] text-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-3.5 h-3.5 text-white" />
                  </span>
                </button>

                {/* Right Brand Symbol Logo: gama-logo.png (Desktop Only) */}
                <button
                  onClick={() => {
                    setActiveMegaMenu(null);
                    onNavigate('home');
                  }}
                  className="hidden md:flex items-center justify-center shrink-0 cursor-pointer transition-transform duration-200 hover:scale-110 ml-1"
                  aria-label="GAMA Ribbon Symbol"
                >
                  <img
                    src="/gama-logo.png"
                    alt="GAMA Logo Symbol"
                    className="h-8 sm:h-9 md:h-10 w-auto object-contain select-none pointer-events-none drop-shadow-md"
                  />
                </button>

                {/* Mobile Menu Toggle Button (<768px Only) */}
                <button
                  ref={toggleButtonRef}
                  onClick={toggleMenu}
                  type="button"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                  className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0457DF]"
                >
                  <svg
                    ref={svgRef}
                    className="two26-toggle-svg w-6 h-6"
                    viewBox="0 0 34 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      ref={stemRef}
                      className="toggle-circle"
                      d="M7.01247 34.0204C7.01247 34.0204 10.1314 34.0204 20.8246 34.0204C31.5179 34.0204 31.2364 16.0204 20.8246 16.0205C10.4128 16.0205 9.00975 16.0196 9.00975 16.0196C5.0415 16.0196 2 12.8812 2 9.00979C2 5.13839 5.13839 2 9.00979 2C12.8679 2.01076 15.9893 5.1363 16 8.98937V34.5196"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      strokeLinecap="round"
                      style={{ strokeDasharray: '52.6, 111.029', strokeDashoffset: 0 }}
                    />
                    <path
                      ref={crossRef}
                      className="toggle-cross"
                      d="M6 24.52H26"
                      stroke="#FFFFFF"
                      strokeWidth="0"
                      strokeLinecap="round"
                      style={{ strokeDasharray: '20, 20', strokeDashoffset: 20 }}
                    />
                  </svg>
                </button>
              </div>
            </nav>

          {/* ======================================================== */}
          {/* DESKTOP MEGA MENU 1: WHAT WE DO (TCS Inspo)              */}
          {/* ======================================================== */}
          {activeMegaMenu === 'what-we-do' && (
            <div
              className="hidden md:block absolute top-full left-0 w-full pt-3 pointer-events-auto"
              onMouseEnter={() => {
                if (megaCloseTimeoutRef.current) {
                  clearTimeout(megaCloseTimeoutRef.current);
                  megaCloseTimeoutRef.current = null;
                }
              }}
              onMouseLeave={handleMegaMenuClose}
            >
              <div className="w-full rounded-3xl bg-[#090D16]/98 border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl p-7 lg:p-8 text-white grid grid-cols-12 gap-6 lg:gap-8 animate-fadeIn">
                
                {/* Col 1: Infrastructure to Intelligence overview */}
                <div className="col-span-4 flex flex-col justify-between border-r border-white/10 pr-6">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#38BDF8] block mb-2">
                      What We Do
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                      Infrastructure to Intelligence
                    </h3>
                    <p className="text-xs lg:text-[13px] text-slate-300 font-normal leading-relaxed mb-6">
                      Navigate the AI era with confidence. GAMA helps you turn AI into a strategic partner that empowers talent, reimagines processes, and accelerates business transformation.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveMegaMenu(null);
                      onNavigate('services');
                    }}
                    className="inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-white hover:text-[#38BDF8] transition-colors group cursor-pointer"
                  >
                    <span>Unlock enterprise intelligence</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Col 2: Navigation Categories (Industries vs Services) */}
                <div className="col-span-3 border-r border-white/10 pr-4 flex flex-col gap-2">
                  <button
                    onMouseEnter={() => setActiveSubCategory('industries')}
                    onClick={() => setActiveSubCategory('industries')}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                      activeSubCategory === 'industries'
                        ? 'bg-white/10 text-white border border-white/15 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>Industries</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>

                  <button
                    onMouseEnter={() => setActiveSubCategory('services')}
                    onClick={() => setActiveSubCategory('services')}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                      activeSubCategory === 'services'
                        ? 'bg-white/10 text-white border border-white/15 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>Services</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                </div>

                {/* Col 3: Content List (2 Columns) */}
                <div className="col-span-5 pl-2">
                  {activeSubCategory === 'industries' ? (
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
                        Target Industries ({industriesList.length})
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 max-h-[300px] overflow-y-auto pr-1">
                        {industriesList.map((ind) => (
                          <button
                            key={ind}
                            onClick={() => {
                              setActiveMegaMenu(null);
                              if (onSelectIndustry) {
                                onSelectIndustry(ind);
                              } else {
                                onOpenContact(ind);
                              }
                            }}
                            className="text-left text-xs lg:text-[13px] text-slate-300 hover:text-[#38BDF8] hover:translate-x-1 transition-all py-1 cursor-pointer truncate"
                            title={ind}
                          >
                            {ind}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
                        Enterprise Services ({servicesList.length})
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 max-h-[300px] overflow-y-auto pr-1">
                        {servicesList.map((srv) => (
                          <button
                            key={srv}
                            onClick={() => {
                              setActiveMegaMenu(null);
                              if (onSelectService) {
                                onSelectService(srv);
                              } else {
                                onOpenContact(srv);
                              }
                            }}
                            className="text-left text-xs lg:text-[13px] text-slate-300 hover:text-[#38BDF8] hover:translate-x-1 transition-all py-1 cursor-pointer truncate"
                            title={srv}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* DESKTOP MEGA MENU 2: WHO WE ARE (TCS Inspo)              */}
          {/* ======================================================== */}
          {activeMegaMenu === 'who-we-are' && (
            <div
              className="hidden md:block absolute top-full left-0 w-full pt-3 pointer-events-auto"
              onMouseEnter={() => {
                if (megaCloseTimeoutRef.current) {
                  clearTimeout(megaCloseTimeoutRef.current);
                  megaCloseTimeoutRef.current = null;
                }
              }}
              onMouseLeave={handleMegaMenuClose}
            >
              <div className="w-full rounded-3xl bg-[#090D16]/98 border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl p-7 lg:p-8 text-white grid grid-cols-12 gap-8 animate-fadeIn">
                
                {/* Col 1: About Us Manifesto */}
                <div className="col-span-5 flex flex-col justify-between border-r border-white/10 pr-6">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#34D399] block mb-2">
                      Who We Are
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                      About Us
                    </h3>
                    <p className="text-xs lg:text-[13px] text-slate-300 font-normal leading-relaxed mb-6">
                      We deliver excellence and create value for customers and communities – everyday. With the best talent and the latest technology we help customers turn complexity into opportunities and create meaningful change.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveMegaMenu(null);
                      onNavigate('about');
                    }}
                    className="inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-white hover:text-[#34D399] transition-colors group cursor-pointer"
                  >
                    <span>Discover the difference</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Col 2: Brand and Values Only */}
                <div className="col-span-7 pl-6 flex flex-col justify-center divide-y divide-white/10 gap-2">
                  <button
                    onClick={() => {
                      setActiveMegaMenu(null);
                      onNavigate('brand');
                    }}
                    className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/[0.06] transition-all cursor-pointer text-left"
                  >
                    <div>
                      <div className="text-base sm:text-lg font-semibold text-white group-hover:text-[#38BDF8] transition-colors mb-0.5">
                        Brand
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400">Where human ingenuity meets machine precision</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#38BDF8] group-hover:translate-x-1.5 transition-all" />
                  </button>

                  <button
                    onClick={() => {
                      setActiveMegaMenu(null);
                      onNavigate('values');
                    }}
                    className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/[0.06] transition-all cursor-pointer text-left pt-5"
                  >
                    <div>
                      <div className="text-base sm:text-lg font-semibold text-white group-hover:text-[#34D399] transition-colors mb-0.5">
                        Values
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400">Architectural discipline and unwavering integrity</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#34D399] group-hover:translate-x-1.5 transition-all" />
                  </button>
                </div>

              </div>
            </div>
          )}

          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* MOBILE DRAWER MENU OVERLAY (<768px)                      */}
      {/* ======================================================== */}
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
          className="flex flex-col items-end gap-3.5 min-h-full"
        >
          {/* Mobile Accordion 1: What We Do */}
          <div
            ref={(el) => {
              itemsRef.current[0] = el;
              firstLinkRef.current = el;
            }}
            className="w-full flex flex-col items-end"
          >
            <button
              onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
              className="font-sans font-medium text-[20px] leading-[1.2] px-7 py-4 rounded-full w-auto self-end cursor-pointer active:scale-[0.96] transition-all bg-white text-[#0F172A] shadow-sm border border-slate-200 inline-flex items-center gap-2"
            >
              <span>What we do</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileWhatWeDoOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileWhatWeDoOpen && (
              <div className="mt-2 w-full max-w-sm rounded-2xl bg-white border border-slate-200 p-4 shadow-lg flex flex-col gap-3 animate-fadeIn">
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setMobileCategory('industries')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      mobileCategory === 'industries'
                        ? 'bg-white text-[#0F172A] shadow-sm'
                        : 'text-slate-600'
                    }`}
                  >
                    Industries ({industriesList.length})
                  </button>
                  <button
                    onClick={() => setMobileCategory('services')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      mobileCategory === 'services'
                        ? 'bg-white text-[#0F172A] shadow-sm'
                        : 'text-slate-600'
                    }`}
                  >
                    Services ({servicesList.length})
                  </button>
                </div>

                <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                  {(mobileCategory === 'industries' ? industriesList : servicesList).map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        closeMenu();
                        if (mobileCategory === 'industries' && onSelectIndustry) {
                          onSelectIndustry(item);
                        } else if (mobileCategory === 'services' && onSelectService) {
                          onSelectService(item);
                        } else {
                          onOpenContact(item);
                        }
                      }}
                      className="w-full text-left text-xs py-1.5 px-2.5 hover:bg-slate-50 rounded-lg text-slate-700 truncate"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Accordion 2: Who We Are */}
          <div
            ref={(el) => {
              itemsRef.current[1] = el;
            }}
            className="w-full flex flex-col items-end"
          >
            <button
              onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
              className="font-sans font-medium text-[20px] leading-[1.2] px-7 py-4 rounded-full w-auto self-end cursor-pointer active:scale-[0.96] transition-all bg-white text-[#0F172A] shadow-sm border border-slate-200 inline-flex items-center gap-2"
            >
              <span>Who we are</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileWhoWeAreOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileWhoWeAreOpen && (
              <div className="mt-2 w-full max-w-sm rounded-2xl bg-white border border-slate-200 p-4 shadow-lg flex flex-col gap-2 animate-fadeIn">
                <button
                  onClick={() => {
                    closeMenu();
                    onNavigate('about');
                  }}
                  className="w-full text-left font-semibold text-sm py-2 px-2.5 hover:bg-slate-50 rounded-lg text-[#0F172A] flex items-center justify-between"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
                <button
                  onClick={() => {
                    closeMenu();
                    onNavigate('brand');
                  }}
                  className="w-full text-left text-xs py-2 px-2.5 hover:bg-slate-50 rounded-lg text-slate-700 flex items-center justify-between"
                >
                  <span>Brand</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
                <button
                  onClick={() => {
                    closeMenu();
                    onNavigate('values');
                  }}
                  className="w-full text-left text-xs py-2 px-2.5 hover:bg-slate-50 rounded-lg text-slate-700 flex items-center justify-between"
                >
                  <span>Values</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile About Us Link */}
          <button
            ref={(el) => {
              itemsRef.current[2] = el;
            }}
            onClick={() => {
              closeMenu();
              onNavigate('about');
            }}
            className="font-sans font-medium text-[20px] leading-[1.2] px-7 py-4 rounded-full w-auto self-end cursor-pointer active:scale-[0.96] transition-all bg-white text-[#0F172A] shadow-sm border border-slate-200"
          >
            About us
          </button>

          {/* Mobile FAQ Link */}
          <button
            ref={(el) => {
              itemsRef.current[3] = el;
            }}
            onClick={() => {
              closeMenu();
              onNavigate('faq');
            }}
            className="font-sans font-medium text-[20px] leading-[1.2] px-7 py-4 rounded-full w-auto self-end cursor-pointer active:scale-[0.96] transition-all bg-white text-[#0F172A] shadow-sm border border-slate-200"
          >
            FAQ
          </button>

          {/* Contact Us CTA (Mobile) */}
          <button
            ref={(el) => {
              itemsRef.current[4] = el;
            }}
            onClick={() => {
              closeMenu();
              onOpenContact();
            }}
            className="group relative inline-flex items-center gap-3 pl-6 pr-2.5 h-[48px] rounded-full bg-[#0F172A] text-white hover:bg-black active:scale-[0.96] transition-all duration-120 font-sans text-[15px] font-medium shadow-sm cursor-pointer self-end mt-1"
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
