import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Sparkles,
  CalendarCheck,
  Award
} from 'lucide-react';

interface HeroProps {
  onExplorePuppies: () => void;
  onExploreServices: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExplorePuppies, 
  onExploreServices,
  onContactUs
}) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-amber-50/70 via-white to-amber-50/30">
      {/* Decorative subtle background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Clear Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-200/80 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Certified Ethical Breeder • 1-Year Health Guarantee</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15] font-serif mb-6">
              Bring Home Your Healthy, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600">
                Purebred Puppy
              </span> With Love
            </h1>

            {/* Subtitle / Description */}
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              Every puppy at PuppyHaven is hand-raised in our family sanctuary, 15-point veterinary checked, fully vaccinated, microchipped, and pre-socialized for your home. Transparent pricing with verified AKC pedigrees.
            </p>

            {/* CTAs with clear primary button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                id="hero-cta-explore-puppies"
                onClick={onExplorePuppies}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-amber-700 hover:bg-amber-800 active:bg-amber-900 shadow-lg shadow-amber-700/25 hover:shadow-xl hover:shadow-amber-700/30 transition-all duration-200 group"
              >
                <span>Browse Available Puppies</span>
                <ArrowRight className="w-5 h-5 text-amber-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-services"
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 shadow-sm hover:border-stone-400 transition-all duration-200"
              >
                <span>View Care Services</span>
              </button>
            </div>

            {/* Key trust bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-stone-200/80 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">100% Vet Certified</h2>
                  <p className="text-[11px] text-stone-500">15-point medical exam</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">1-Year Guarantee</h2>
                  <p className="text-[11px] text-stone-500">Genetic health backing</p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start gap-2.5">
                <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-stone-800 leading-tight">Nationwide Travel</h2>
                  <p className="text-[11px] text-stone-500">In-cabin flight nanny</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Puppy Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Puppy Feature Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl shadow-stone-300/60 border border-stone-200/90">
                <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85"
                    alt="Golden Retriever puppy Oliver"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {/* Status tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    <span>Available Today</span>
                  </div>

                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-bold">
                    Purebred AKC
                  </div>

                  {/* Puppy bottom banner on image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white drop-shadow-sm font-serif">Oliver (Golden Retriever)</h3>
                      <p className="text-xs text-amber-100 font-medium">9 Weeks Old • Male • 8.4 lbs</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-stone-300 block">Adoption Price</span>
                      <span className="text-xl font-extrabold text-amber-300">$1,450</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Quick Highlights */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between gap-2 text-xs text-stone-600 mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Vaccinated & Microchipped
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Potty & Crate Started
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      id="hero-meet-oliver-btn"
                      onClick={onExplorePuppies}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 text-amber-700" />
                      <span>Meet Oliver & Siblings</span>
                    </button>
                    <button
                      id="hero-schedule-visit-btn"
                      onClick={onContactUs}
                      className="py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-stone-600" />
                      <span>Book Visit</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Social Proof Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  ★ 4.9
                </div>
                <div>
                  <div className="flex text-amber-500 text-xs mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs font-extrabold text-stone-900">1,250+ Adopted Puppies</p>
                  <p className="text-[11px] text-stone-500">5-Star Family Ratings</p>
                </div>
              </div>

              {/* Floating Health Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-stone-200 items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Health Pledge</p>
                  <p className="text-xs font-bold text-stone-900">Zero Inbreeding Verified</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
