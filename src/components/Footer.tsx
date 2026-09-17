import React, { useState } from 'react';
import { 
  Dog, 
  ShieldCheck, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter,
  Send
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setIsSubscribed(true);
    setEmailInput('');
  };

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-md">
                <Dog className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-serif">
                Puppy<span className="text-amber-500">Haven</span>
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We are a certified ethical sanctuary dedicated to raising purebred puppies with loving hearts, robust genetics, full veterinary clearances, and lifetime family support.
            </p>

            {/* Social Links as requested */}
            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                Follow Our Nursery Updates & Litter Stories
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    id={`social-link-${social.name.toLowerCase()}`}
                    className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-amber-600 hover:border-amber-600 transition-all duration-200"
                    aria-label={`Follow on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products')} 
                  className="hover:text-amber-400 transition-colors"
                >
                  Available Puppies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-amber-400 transition-colors"
                >
                  Health & Care Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-amber-400 transition-colors"
                >
                  About Our Sanctuary
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact & Schedule
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Breeds */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Featured Breeds
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Golden Retriever Puppies</li>
              <li>French Bulldog Puppies</li>
              <li>Cavalier King Charles</li>
              <li>Maltipoo (Hypoallergenic)</li>
              <li>Pembroke Welsh Corgi</li>
              <li>Siberian Husky Puppies</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Litter Announcement Club
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Get notified first when new purebred litters are born and receive our free 30-Day New Puppy Owner Handbook.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You're subscribed! Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
            )}

            <div className="flex items-center gap-2 text-[11px] text-stone-500">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>We never sell data. Unsubscribe at any time.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} PuppyHaven Sanctuary LLC. All rights reserved.</p>
          
          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            <span>for healthy puppies and loving families</span>
          </div>

          <div className="flex items-center gap-4 text-stone-500">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Adoption</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer">1-Year Health Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
