import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpDown, 
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { Puppy } from '../types';
import { PUPPIES_DATA } from '../data/puppiesData';
import { PuppyModal } from './PuppyModal';

interface ProductsSectionProps {
  onSelectPuppyForInquiry: (puppy: Puppy) => void;
  savedPuppyIds: string[];
  onToggleSavePuppy: (puppyId: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectPuppyForInquiry,
  savedPuppyIds,
  onToggleSavePuppy,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');
  const [activePuppyModal, setActivePuppyModal] = useState<Puppy | null>(null);

  const categories = [
    { id: 'all', label: 'All Puppies' },
    { id: 'family', label: 'Family Friendly' },
    { id: 'small', label: 'Small & Apartment' },
    { id: 'hypoallergenic', label: 'Hypoallergenic' },
    { id: 'active', label: 'Active & Athletic' },
  ];

  // Filter and sort puppies
  const filteredPuppies = useMemo(() => {
    return PUPPIES_DATA.filter((pup) => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || pup.category === selectedCategory;
      
      // Search filter
      const matchesSearch = 
        pup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pup.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pup.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pup.temperament.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Products • Available Purebred Puppies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif mb-4">
            Meet Our Healthy, Purebred Puppies
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Every puppy listed is ready for their forever home, fully vet-certified, microchipped, and vaccinated with complete pedigree records. Transparent pricing with no hidden fees.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200/90 mb-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input and Sort Selection */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Search box */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search breed or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Sort dropdown */}
              <div className="relative shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none bg-white border border-stone-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Breed Name (A-Z)</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* Puppies Grid */}
        {filteredPuppies.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
            <p className="text-stone-600 font-medium mb-3">No puppies found matching your search or filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-amber-700 text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPuppies.map((pup) => {
              const isSaved = savedPuppyIds.includes(pup.id);
              return (
                <div
                  key={pup.id}
                  id={`puppy-card-${pup.id}`}
                  className="group bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Image and overlay badges */}
                  <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                    <img
                      src={pup.imageUrl}
                      alt={`${pup.name} - ${pup.breed}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Dark gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80" />

                    {/* Age and Gender Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                        {pup.age} • {pup.gender}
                      </span>
                    </div>

                    {/* Wishlist toggle button */}
                    <button
                      id={`fav-btn-${pup.id}`}
                      onClick={() => onToggleSavePuppy(pup.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md text-stone-700 hover:text-red-500 shadow-sm transition-colors"
                      title={isSaved ? 'Remove from saved' : 'Save puppy'}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>

                    {/* Puppy Name and Price Bottom Image Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <h3 className="text-2xl font-bold font-serif leading-tight">
                          {pup.name}
                        </h3>
                        <p className="text-xs text-amber-200 font-medium">
                          {pup.breed}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase text-stone-300 block">Price</span>
                        <span className="text-xl font-extrabold text-amber-400">
                          ${pup.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Breed Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Color & Size quick meta */}
                      <div className="flex items-center justify-between text-xs text-stone-500 pb-3 mb-3 border-b border-stone-100">
                        <span>Color: <strong className="text-stone-800">{pup.color}</strong></span>
                        <span>Est. Weight: <strong className="text-stone-800">{pup.weight}</strong></span>
                      </div>

                      {/* Temperament traits */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {pup.temperament.slice(0, 3).map((t, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-amber-50 text-amber-900 border border-amber-200/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Certified health bullets */}
                      <div className="space-y-1.5 mb-5 text-[11px] text-stone-600">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>15-Point Vet Checked & Vaccinated</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                          <span>Universal ISO Microchip & Pedigree</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-2">
                      <button
                        id={`view-details-${pup.id}`}
                        onClick={() => setActivePuppyModal(pup)}
                        className="py-2.5 px-3 rounded-xl text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200/80 transition-colors text-center"
                      >
                        View Full Details
                      </button>

                      <button
                        id={`adopt-btn-${pup.id}`}
                        onClick={() => {
                          onSelectPuppyForInquiry(pup);
                        }}
                        className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <PhoneCall className="w-3 h-3 text-amber-200" />
                        <span>Inquire Now</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Full Puppy Details Modal */}
      <PuppyModal
        puppy={activePuppyModal}
        onClose={() => setActivePuppyModal(null)}
        onAdopt={(pup) => {
          setActivePuppyModal(null);
          onSelectPuppyForInquiry(pup);
        }}
        isSaved={activePuppyModal ? savedPuppyIds.includes(activePuppyModal.id) : false}
        onToggleSave={onToggleSavePuppy}
      />
    </section>
  );
};
