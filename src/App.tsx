import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Puppy } from './types';
import { ArrowUp, PhoneCall } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedPuppyForInquiry, setSelectedPuppyForInquiry] = useState<Puppy | null>(null);
  const [savedPuppyIds, setSavedPuppyIds] = useState<string[]>(['pup-1']);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll spy to update active navbar item
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'products', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handlePuppyInquiry = (puppy: Puppy) => {
    setSelectedPuppyForInquiry(puppy);
    scrollToSection('contact');
  };

  const handleToggleSavePuppy = (puppyId: string) => {
    setSavedPuppyIds(prev => 
      prev.includes(puppyId) ? prev.filter(id => id !== puppyId) : [...prev, puppyId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/20 text-stone-800">
      {/* 1. Top Navbar with 4 requested pages (Home, Products, Services, About, Contact) & Mobile Menu */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        savedCount={savedPuppyIds.length}
      />

      <main className="flex-1">
        {/* 2. Hero Section with clear call-to-action button */}
        <Hero
          onExplorePuppies={() => scrollToSection('products')}
          onExploreServices={() => scrollToSection('services')}
          onContactUs={() => scrollToSection('contact')}
        />

        {/* 3. Detailed Services Section (as requested: "aur phir services ka section add kr dena... followed by a detailed services section") */}
        <ServicesSection
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 4. Products (Puppies) Section with pictures, breed details, and prices */}
        <ProductsSection
          onSelectPuppyForInquiry={handlePuppyInquiry}
          savedPuppyIds={savedPuppyIds}
          onToggleSavePuppy={handleToggleSavePuppy}
        />

        {/* 5. About Us Section (as requested: "or about mein hmare bary mein add kr dena") */}
        <AboutSection />

        {/* 6. Contact Section with interactive form (as requested: "contact k lye hmara contact ka form bana kr do") */}
        <ContactSection
          selectedPuppy={selectedPuppyForInquiry}
          onClearSelectedPuppy={() => setSelectedPuppyForInquiry(null)}
        />
      </main>

      {/* 7. Footer with social media links and brand information */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          id="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-stone-900 text-white shadow-lg hover:bg-amber-700 transition-all duration-200 border border-stone-700"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick Mobile Inquire floating action */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-20">
        <button
          onClick={() => scrollToSection('contact')}
          className="w-full py-3 px-4 rounded-xl bg-amber-700 text-white font-bold text-xs shadow-xl flex items-center justify-center gap-2 border border-amber-600/50"
        >
          <PhoneCall className="w-4 h-4 text-amber-200" />
          <span>Inquire About a Puppy / Schedule Visit</span>
        </button>
      </div>
    </div>
  );
}
