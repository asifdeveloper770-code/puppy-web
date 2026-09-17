import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle, 
  Star, 
  Sparkles,
  Home,
  Stethoscope
} from 'lucide-react';
import { ABOUT_STATS, ABOUT_VALUES, TESTIMONIALS_DATA } from '../data/aboutData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-stone-50/60 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-700" />
            <span>About PuppyHaven Sanctuary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif mb-4">
            Raised With Heart, Backed By Science
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Founded with an uncompromising belief that every puppy deserves to begin life surrounded by family affection, veterinary diligence, and acres of sunshine.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Sanctuary Imagery Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
                alt="Puppies playing freely in lush grass at PuppyHaven"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold mb-2">
                  Ethical Family Estate
                </span>
                <h3 className="text-xl font-bold font-serif">
                  12 Acres of Green Play Grounds & Loving Home Nurseries
                </h3>
                <p className="text-xs text-stone-200 mt-1">
                  Our parent dogs and puppies live right alongside us with 24/7 human warmth.
                </p>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900">On-Staff Veterinary Care</h4>
                <p className="text-[11px] text-stone-500">Daily health monitoring & preventative care protocols</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Philosophy */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif mb-5 leading-tight">
              A Gentle, Loving Alternative To Factory Kennels
            </h3>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
              At <strong>PuppyHaven</strong>, we started with a straightforward promise: to stand entirely against high-volume commercial puppy mills. Every single litter we welcome is thoughtfully planned with comprehensive genetic DNA screenings and OFA orthopedic certifications.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              Our puppies sleep indoors in sanitized, cozy nurseries, are gently handled from birth, and get early socialization with household routines, children, and friendly adult canine mentors. When you welcome a PuppyHaven companion, you adopt a well-adjusted family member.
            </p>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_VALUES.map((val, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    <h4 className="text-xs font-bold text-stone-900">{val.title}</h4>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-normal">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Stats Row */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
            {ABOUT_STATS.map((stat, i) => (
              <div key={i} className={`pt-4 lg:pt-0 ${i > 0 ? 'lg:pl-6' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-800 font-serif mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-stone-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials / Adoption Stories */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif mb-2">
              Stories From Our Adoptive Families
            </h3>
            <p className="text-stone-600 text-sm">
              Real families who found their furry soulmates through PuppyHaven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Rating stars */}
                  <div className="flex text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <img
                    src={t.authorImage}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-stone-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{t.author}</h4>
                    <p className="text-[11px] text-stone-500">{t.location} • <span className="text-amber-700 font-medium">{t.puppyBreed}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
