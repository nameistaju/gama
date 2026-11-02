import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ValuesPage from './components/ValuesPage';
import SolutionsSection from './components/SolutionsSection';
import CurvedMarquee from './components/CurvedMarquee';
import EditorialAbout from './components/EditorialAbout';
import ScrollExpand from './components/ScrollExpand';
import AIWorkforceSection from './components/AIWorkforceSection';
import Services from './components/ui/services-with-animated-hover-modal-demo';
import FeaturesWithPanel from './components/ui/features-with-panel';
import Integrations from './components/ui/integrations-4-2';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import GamaLoader from './components/GamaLoader';
import GlobeSection from './components/GlobeSection';
import TangibleOutcomes from './components/TangibleOutcomes';
import TextHighlight from './components/ui/text-highlight';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#values') {
      return 'values';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#values') {
        setCurrentView('values');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenContact = (service = '') => {
    if (typeof service === 'string' && service) {
      setSelectedService(service);
    }
    setContactOpen(true);
  };

  // Smooth scroll and view handler
  const handleNavigate = (target) => {
    if (target === 'contact') {
      setContactOpen(true);
      return;
    }

    if (target === 'values') {
      setCurrentView('values');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      try {
        window.history.pushState(null, '', '#values');
      } catch (e) {}
      return;
    }

    if (target === 'home') {
      if (currentView !== 'home') {
        setCurrentView('home');
        try {
          window.history.pushState(null, '', '#');
        } catch (e) {}
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      try {
        window.history.pushState(null, '', '#');
      } catch (e) {}
      setTimeout(() => {
        const elementMap = {
          capabilities: 'services',
          'what-we-do': 'solutions',
          solutions: 'solutions',
          industries: 'solutions',
          services: 'solutions',
          'who-we-are': 'about',
          brand: 'about',
          about: 'about',
          faq: 'faq',
        };
        const targetId = elementMap[target] || target;
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const elementMap = {
      capabilities: 'services',
      'what-we-do': 'solutions',
      solutions: 'solutions',
      industries: 'solutions',
      services: 'solutions',
      'who-we-are': 'about',
      brand: 'about',
      about: 'about',
      faq: 'faq',
    };

    const targetId = elementMap[target] || target;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0F172A] selection:text-white overflow-x-clip font-sans">
      {/* GAMA Logo Animated Loader */}
      {!loaderComplete && (
        <GamaLoader onComplete={() => setLoaderComplete(true)} />
      )}

      {/* Top Header & Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {currentView === 'values' ? (
        <main>
          <ValuesPage
            onOpenContact={handleOpenContact}
            onBackHome={() => handleNavigate('home')}
          />
          <Footer
            onOpenContact={() => setContactOpen(true)}
            onNavigate={handleNavigate}
          />
        </main>
      ) : (
        /* Main Home Page Sections */
        <main>
          {/* 1. Hero Headline & Video Showcase (Fits in 1 Glance / 100vh) */}
          <Hero onOpenContact={() => setContactOpen(true)} />

        {/* About Us Section: Inspired by TCS Who We Are (Brand & Values) */}
        <AboutUs onOpenContact={handleOpenContact} />

        {/* Cutting Edge Solutions: Industries & Services In-Place Popup */}
        <SolutionsSection onOpenContact={handleOpenContact} />

        {/* Global Infrastructure Curved Earth Section */}
        <GlobeSection />

        {/* 3. Editorial Statement with Software Engineering Focus */}
        <EditorialAbout />

        {/* What We Do - Tangible Outcomes Accordion */}
        <TangibleOutcomes onOpenContact={() => setContactOpen(true)} />

        {/* 4. Interactive ScrollExpand Showcase (expand.png) */}
        <ScrollExpand
          src="/expand.png"
          mobileSrc="/expand_mobile.png.png"
          alt="GAMA Software - Don't follow the future. Build it."
          title={(
            <>
              Don't follow the future.{' '}
              <TextHighlight color="#fde047">Build it.</TextHighlight>
            </>
          )}
          scrollHint="Scroll to expand"
          startWidth={46}
          startHeight={58}
          startRadius={28}
          endRadius={0}
          mediaZoom={1.16}
          scrollDistance={1.0}
          holdDistance={0.25}
          overlayScrim={0.55}
        >
          <div className="max-w-xl flex flex-col items-start gap-4 sm:gap-5 text-left pointer-events-auto">
            <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-white/95 leading-relaxed drop-shadow-md">
              A new generation of technology builders turning bold ideas into intelligent digital experiences.
            </p>
            <button
              onClick={() => handleNavigate('services')}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-white text-[#0F172A] hover:bg-[#0457DF] hover:text-white transition-all duration-300 font-sans text-sm sm:text-base font-semibold shadow-xl hover:ring-2 hover:ring-white/40 cursor-pointer"
            >
              <span>Explore How We Build</span>
              <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold">↗</span>
            </button>
          </div>
        </ScrollExpand>

        {/* 5. AI Workforce / Capabilities Bento Section */}
        <AIWorkforceSection onOpenContact={handleOpenContact} />

        {/* 6. Interactive Services with Animated Hover Modal */}
        <Services onOpenContact={handleOpenContact} />

        {/* 7. Features with Interactive Sticky Panel */}
        <FeaturesWithPanel />

        {/* 6. Modern Tech Stack & Integrations Showcase */}
        <Integrations />

        {/* 4. FAQ Section with Illustration & Accordions */}
        <FAQ onOpenContact={handleOpenContact} />

        {/* 5. Blue Footer with Giant GAMA Wordmark */}
        <Footer
          onOpenContact={() => setContactOpen(true)}
          onNavigate={handleNavigate}
        />
      </main>
      )}

      {/* Full-Screen "Let's Talk" Contact Experience */}
      {contactOpen && (
        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
          initialService={selectedService}
        />
      )}
    </div>
  );
}
