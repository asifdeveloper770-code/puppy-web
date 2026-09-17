import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Check, 
  Heart, 
  Sparkles, 
  Calendar, 
  Scale, 
  Palette, 
  Award,
  PhoneCall
} from 'lucide-react';
import { Puppy } from '../types';

interface PuppyModalProps {
  puppy: Puppy | null;
  onClose: () => void;
  onAdopt: (puppy: Puppy) => void;
  isSaved?: boolean;
  onToggleSave?: (puppyId: string) => void;
}

export const PuppyModal: React.FC<PuppyModalProps> = ({
  puppy,
  onClose,
  onAdopt,
  isSaved = false,
  onToggleSave,
}) => {
  if (!puppy) return null;

  return (
    <div 
      id="puppy-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="puppy-detail-modal"
        className="bg-white rounded-3xl max-w-2xl w-full my-8 shadow-2xl border border-stone-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-100">
          <img
            src={puppy.imageUrl}
            alt={`${puppy.name} the ${puppy.breed}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          
          {/* Close button */}
          <button
            id="modal-close-icon-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Favorite button */}
          {onToggleSave && (
            <button
              id={`modal-fav-${puppy.id}`}
              onClick={() => onToggleSave(puppy.id)}
              className="absolute top-4 left-4 p-2 rounded-full bg-white/90 text-stone-700 hover:text-red-500 shadow-md transition-colors"
              aria-label="Save to favorites"
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
          )}

          {/* Title on image banner */}
          <div className="absolute bottom-4 left-4 right-4 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-xs font-bold mb-1">
                <Sparkles className="w-3 h-3" />
                <span>{puppy.healthStatus.registered}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
                {puppy.name}
              </h3>
              <p className="text-amber-200 text-sm font-medium">
                {puppy.breed} • {puppy.gender}
              </p>
            </div>
            <div className="bg-stone-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-700/80">
              <span className="text-[11px] uppercase tracking-wider text-stone-300 block">Adoption Fee</span>
              <span className="text-2xl font-black text-amber-400">
                ${puppy.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Quick specs grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>Age</span>
              </div>
              <span className="text-sm font-bold text-stone-800">{puppy.age}</span>
            </div>

            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                <Scale className="w-3.5 h-3.5 text-amber-600" />
                <span>Weight</span>
              </div>
              <span className="text-sm font-bold text-stone-800">{puppy.weight}</span>
            </div>

            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                <Palette className="w-3.5 h-3.5 text-amber-600" />
                <span>Color</span>
              </div>
              <span className="text-sm font-bold text-stone-800 truncate block">{puppy.color}</span>
            </div>

            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Registry</span>
              </div>
              <span className="text-sm font-bold text-stone-800">AKC Pedigree</span>
            </div>
          </div>

          {/* Personality description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Puppy Personality & Story
            </h4>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed bg-amber-50/40 p-4 rounded-xl border border-amber-100">
              {puppy.description}
            </p>
          </div>

          {/* Temperament tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Temperament & Social Traits
            </h4>
            <div className="flex flex-wrap gap-2">
              {puppy.temperament.map((trait, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200"
                >
                  ✓ {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Health & Medical Checklist */}
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Health Protection Included:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Up-to-date Core Vaccinations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Universal ISO Microchip Implanted</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>15-Point Veterinary Clearance Signed</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>1-Year Congenital Health Warranty</span>
              </div>
            </div>
            
            <p className="mt-3 text-[11px] text-stone-500 border-t border-stone-200/80 pt-2 italic">
              Parents Heritage: {puppy.parentsInfo}
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span className="font-semibold text-stone-800">Transparent Fee: ${puppy.price.toLocaleString()}</span>
            <span className="block text-[11px] text-stone-500">Includes complete starter pack, vet certificate & microchip.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-stone-600 hover:bg-stone-200/60 rounded-xl transition-colors"
            >
              Back to Puppies
            </button>
            <button
              id={`adopt-modal-submit-${puppy.id}`}
              onClick={() => onAdopt(puppy)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 shadow-md transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-200" />
              <span>Inquire & Reserve {puppy.name}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
