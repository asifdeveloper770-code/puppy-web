import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  HeartHandshake, 
  Award, 
  Gift, 
  Check, 
  ArrowRight,
  HelpCircle,
  X
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon map
  const renderIcon = (name: string) => {
    const iconClass = "w-6 h-6 text-amber-700";
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Truck':
        return <Truck className={iconClass} />;
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} />;
      case 'Award':
        return <Award className={iconClass} />;
      case 'Gift':
        return <Gift className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-stone-50/70 border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Dedicated Breeder & Pet Care Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif mb-4">
            Everything Your New Puppy Needs To Flourish
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            From the moment our puppies are born until decades into their journey with your family, our comprehensive veterinary, training, and lifetime adoption services ensure a joyous transition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-200">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-stone-900 mb-2.5 font-serif group-hover:text-amber-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Key Checklist Highlights */}
                <ul className="space-y-2 mb-6">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Detail Modal Trigger */}
              <div className="pt-4 border-t border-stone-100">
                <button
                  id={`view-service-details-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 transition-colors"
                >
                  <span>Read Full Medical & Care Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner / Assurance */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Lifelong Ethical Commitment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mb-3">
                Have specific questions about our puppy health protocol or travel?
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                We are proud of our zero-inbreeding lineage checks, open video visits, and personalized flight nanny delivery. Talk directly with our veterinary and adoption counselor.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                id="services-speak-counselor-btn"
                onClick={onContactClick}
                className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm text-center shadow-lg transition-colors"
              >
                Inquire With a Puppy Counselor
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>Zero obligation, 100% transparent guidance</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          id="service-detail-modal-backdrop"
          className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div 
            id="service-detail-modal"
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  {renderIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    {selectedService.badge || 'PuppyHaven Service'}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 font-serif">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                id="close-service-modal-btn"
                onClick={() => setSelectedService(null)}
                className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-sm text-stone-700 leading-relaxed bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                {selectedService.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">
                  What’s Included in This Service:
                </h4>
                <ul className="space-y-2">
                  {selectedService.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onContactClick();
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow"
              >
                Ask Questions About This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
