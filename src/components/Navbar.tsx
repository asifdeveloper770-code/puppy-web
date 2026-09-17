import React, { useState, useEffect } from 'react';
import { 
  Dog, 
  Menu, 
  X, 
  PhoneCall, 
  Heart, 
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  savedCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onNavigate,
  savedCount = 0
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Puppies (Products)' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Announcement top bar */}
      <div className="bg-amber-800 text-amber-100 text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2 tracking-wide">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>Spring 2026 Litters Now Available • 100% Health Guarantee & Nationwide Delivery</span>
        <span className="hidden md:inline-block text-amber-300 font-bold">• Call: +1 (800) 555-PAWS</span>
      </div>

      {/* Main Navbar */}
      <header 
        id="main-navbar"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3' 
            : 'bg-white/90 backdrop-blur-sm border-b border-stone-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button 
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <Dog className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-stone-900 font-serif">
                    Puppy<span className="text-amber-600">Haven</span>
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    <ShieldCheck className="w-2.5 h-2.5 text-amber-700" />
                    Verified
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 font-medium tracking-wide">
                  Ethical Purebred Sanctuary
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                      isActive
                        ? 'text-amber-800 bg-amber-100/70 font-bold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-amber-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Wishlist / Inquire badge */}
              <button
                id="wishlist-btn"
                onClick={() => handleNavClick('products')}
                className="relative p-2 rounded-lg text-stone-600 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                title="View Puppies"
                aria-label="View Puppies"
              >
                <Heart className="w-5 h-5 text-stone-600 hover:text-amber-600" />
                {savedCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {savedCount}
                  </span>
                )}
              </button>

              <button
                id="cta-contact-btn"
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-stone-900 text-white hover:bg-stone-800 shadow-sm hover:shadow transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Adopt / Inquire</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-navigation-drawer"
            className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
          >
            <div className="space-y-1 mb-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-amber-100 text-amber-900 font-bold'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-700' : 'text-stone-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-stone-500 px-1 py-1">
                <span>Direct Breeder Hotline:</span>
                <span className="font-semibold text-stone-800">+1 (800) 555-PAWS</span>
              </div>
              <button
                id="mobile-contact-cta"
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-700 text-white font-semibold text-sm shadow hover:bg-amber-800 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Contact & Schedule Visit</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
