import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar,
  MessageSquare,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { InquiryFormData, Puppy } from '../types';
import { PUPPIES_DATA } from '../data/puppiesData';

interface ContactSectionProps {
  selectedPuppy?: Puppy | null;
  onClearSelectedPuppy?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  selectedPuppy,
  onClearSelectedPuppy
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    breedInterest: 'Any / Need Guidance',
    preferredDate: '',
    message: '',
    hasYard: 'yes-fenced',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    name: string;
    puppy: string;
  } | null>(null);

  // Sync selected puppy if passed
  useEffect(() => {
    if (selectedPuppy) {
      setFormData(prev => ({
        ...prev,
        puppyId: selectedPuppy.id,
        puppyName: selectedPuppy.name,
        breedInterest: `${selectedPuppy.name} (${selectedPuppy.breed})`,
        message: prev.message || `Hello! I am interested in adopting ${selectedPuppy.name} (${selectedPuppy.breed}, $${selectedPuppy.price.toLocaleString()}). I would love to schedule a video call or sanctuary visit to meet them!`,
      }));
    }
  }, [selectedPuppy]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      const refId = 'PH-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        id: refId,
        name: formData.fullName,
        puppy: formData.breedInterest,
      });

      // Clear form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        breedInterest: 'Any / Need Guidance',
        preferredDate: '',
        message: '',
        hasYard: 'yes-fenced',
      });
      if (onClearSelectedPuppy) onClearSelectedPuppy();
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
            <span>Contact & Adoption Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif mb-4">
            Connect With Our Puppy Family
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Whether you are ready to reserve a puppy, schedule an in-person or live video nursery tour, or ask about our health protocols, we are here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Sanctuary Details & Visiting Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-stone-900 text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-amber-600/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Sanctuary Headquarters
              </span>
              <h3 className="text-2xl font-bold font-serif mb-6">
                PuppyHaven Estate & Care Center
              </h3>

              <div className="space-y-5 text-sm text-stone-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider text-stone-400">Toll-Free Phone:</strong>
                    <a href="tel:+18005557297" className="text-base text-amber-300 font-semibold hover:underline">
                      +1 (800) 555-PAWS (7297)
                    </a>
                    <p className="text-xs text-stone-400">Available Daily: 8:00 AM – 8:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider text-stone-400">Adoption Email:</strong>
                    <a href="mailto:adopt@puppyhaven.com" className="text-stone-200 hover:text-white hover:underline">
                      adopt@puppyhaven.com
                    </a>
                    <p className="text-xs text-stone-400">Guaranteed response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider text-stone-400">Sanctuary Address:</strong>
                    <p className="text-stone-200 leading-snug">
                      742 Evergreen Meadow Way, Rolling Hills Estate, CA 90274
                    </p>
                    <p className="text-xs text-stone-400">Private visits scheduled for sanitary nursery protection</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-amber-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider text-stone-400">Visiting Hours:</strong>
                    <p className="text-stone-200">Monday – Sunday: 9:00 AM – 7:00 PM</p>
                    <p className="text-xs text-amber-300/90 font-medium">Appointments available for puppy meet-and-greets</p>
                  </div>
                </div>
              </div>

              {/* Safety badge */}
              <div className="mt-8 pt-6 border-t border-stone-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-xs text-stone-300">
                  Strict bio-security protocols in place to protect unvaccinated newborn puppies.
                </p>
              </div>
            </div>

            {/* Quick Consultation Perks */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>What Happens After You Inquire:</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Personal consultation call with our adoption specialist</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Real-time HD video walkthrough to watch the puppy play live</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Copy of parent DNA testing & veterinarian vaccination history</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Adoption & Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-stone-200 shadow-md">
              
              {/* If already submitted successfully */}
              {submittedData ? (
                <div id="contact-success-notification" className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Inquiry Received Successfully!
                    </span>
                    <h3 className="text-2xl font-bold text-stone-900 font-serif mt-1">
                      Thank You, {submittedData.name}!
                    </h3>
                    <p className="text-stone-600 text-sm mt-2 max-w-md mx-auto">
                      Your inquiry regarding <strong>{submittedData.puppy}</strong> has been assigned reference ID: <span className="font-mono font-bold text-amber-800">{submittedData.id}</span>. Our adoption director will contact you within 2 hours.
                    </p>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-xl text-xs text-stone-600 max-w-sm mx-auto border border-stone-200">
                    A confirmation email and SMS with meeting guidelines has been dispatched.
                  </div>

                  <button
                    onClick={() => setSubmittedData(null)}
                    className="px-6 py-2.5 bg-stone-900 text-white text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form id="adoption-contact-form" onSubmit={handleSubmit} className="space-y-5">
                  
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 font-serif mb-1">
                      Puppy Adoption & Visit Request Form
                    </h3>
                    <p className="text-xs text-stone-500">
                      Fill out this form to reserve your puppy or book a complimentary meet & greet.
                    </p>
                  </div>

                  {/* Highlight banner if specific puppy is pre-selected */}
                  {selectedPuppy && (
                    <div className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-700" />
                        <span>Inquiring about: <strong>{selectedPuppy.name}</strong> ({selectedPuppy.breed} - ${selectedPuppy.price.toLocaleString()})</span>
                      </div>
                      <button
                        type="button"
                        onClick={onClearSelectedPuppy}
                        className="text-amber-800 font-bold hover:underline ml-2"
                      >
                        Change
                      </button>
                    </div>
                  )}

                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. eleanor@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone & Puppy Breed of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +1 (555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Puppy / Breed Choice *
                      </label>
                      <select
                        value={formData.breedInterest}
                        onChange={(e) => setFormData({ ...formData, breedInterest: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      >
                        <option value="Any / Need Guidance">Any Puppy / Need Recommendation</option>
                        {PUPPIES_DATA.map((pup) => (
                          <option key={pup.id} value={`${pup.name} (${pup.breed}) - $${pup.price}`}>
                            {pup.name} — {pup.breed} (${pup.price.toLocaleString()})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Home Environment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Preferred Visit / Call Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Home Environment
                      </label>
                      <select
                        value={formData.hasYard}
                        onChange={(e) => setFormData({ ...formData, hasYard: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      >
                        <option value="yes-fenced">House with Fenced Yard</option>
                        <option value="house-open">House with Open Yard</option>
                        <option value="apartment">Apartment / Condo (Active Walks)</option>
                        <option value="acreage">Farm / Ranch / Large Acreage</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Questions or Details *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your home, previous dog experience, or questions regarding our health guarantee and transport options..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-adoption-inquiry-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-700/20 transition-all duration-200 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-200" />
                        <span>Send Adoption Inquiry & Schedule Visit</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-stone-400 text-center">
                    🔒 We respect your privacy. No spam. All personal data is held under ethical sanctuary protection.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
