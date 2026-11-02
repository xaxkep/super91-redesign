import React from 'react';
import { useFestivalTheme } from '../../context/FestivalThemeContext';
import { ShoppingBag, Star, CheckCircle, ShieldCheck } from 'lucide-react';

const RECENT_ORDERS = [
  { name: 'Vikram Mehta', city: 'Mumbai', item: '500 Velvet Soft-Touch Cards (3D Spot UV)', time: '2m ago' },
  { name: 'Pooja Sharma', city: 'Bengaluru', item: '250 Custom Corrugated Mailer Boxes', time: '5m ago' },
  { name: 'Rohan Gupta', city: 'Delhi NCR', item: '2 Aluminum Roll-Up Standees (6×3 ft)', time: '8m ago' },
  { name: 'Ananya Deshmukh', city: 'Pune', item: '1,000 Tri-Fold Marketing Brochures', time: '12m ago' },
  { name: 'Siddharth Nair', city: 'Hyderabad', item: '100 Executive 2026 Leatherette Diaries', time: '16m ago' },
  { name: 'Kabir Singhania', city: 'Ahmedabad', item: '250 Rigid Confectionery Gold Boxes', time: '19m ago' },
  { name: 'Meera Chawla', city: 'Jaipur', item: '500 Hand-Deckled Cotton Gala Invitations', time: '23m ago' },
];

const CUSTOMER_REVIEWS = [
  {
    author: 'Aditya S. — Brand Director, Studio Meta',
    text: 'The 3D Scodix gold foil registration on our cards was micro-registered to perfection. Zero color shift, deep rich velvet blacks, and dispatched within 24 hours to our BKC studio.',
    product: 'Tactile Velvet Cards (400 GSM)',
  },
  {
    author: 'Neha K. — Founder, Veda Botanicals',
    text: 'Transitioning our unboxing packaging to Super91 reduced box unit costs by 35% without compromising kraft fiber caliper. The crash-lock structural fold saves 40 seconds per pack.',
    product: 'Engineered Corrugated E-Commerce Mailers',
  },
  {
    author: 'Dr. Sameer Joshi — Director, MedCon Expo',
    text: 'Ordered 4 roll-up standees yesterday afternoon. Arrived at the exhibition hall before 10 AM in pristine ballistic carry cases. Truly dependable for fast turnaround trade events.',
    product: 'Architectural Retractable Standees',
  },
];

export const LiveOrderTicker: React.FC = () => {
  const { theme } = useFestivalTheme();

  return (
    <section className="py-20 bg-white border-b border-[#141619]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Continuous 60fps Hardware-Accelerated Marquee Stream */}
        <div className="bg-[#0C0D0E] text-white py-3 px-4 rounded-xl overflow-hidden mb-16 shadow-lg border border-white/10 relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0C0D0E] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0C0D0E] to-transparent z-10 pointer-events-none" />

          <div className="animate-continuous-marquee flex items-center gap-8 font-mono text-xs">
            {/* Loop array twice for seamless continuous roll */}
            {[...RECENT_ORDERS, ...RECENT_ORDERS].map((order, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0 py-1">
                <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse shrink-0" />
                <span className="text-[#9AA3B2] uppercase text-[10px] tracking-wider">
                  PRESS DISPATCH #{idx + 401}:
                </span>
                <strong className="text-white font-medium">{order.name}</strong>
                <span className="text-[#9AA3B2] text-[11px]">({order.city})</span>
                <span className="text-white/20">•</span>
                <span className="text-[#EC008C] font-semibold">{order.item}</span>
                <span className="text-[10px] text-white/40 bg-white/5 px-1.5 py-0.5 rounded">
                  {order.time}
                </span>
                <span className="text-white/20 ml-4">/</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#141619]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#141619]/5 text-[#141619] text-[10px] font-mono tracking-widest uppercase mb-3 border border-[#141619]/10">
              <Star className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>VERIFIED PRODUCTION REVIEWS • 99.4% QUALITY SCORE</span>
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl text-[#141619] tracking-tight">
              Commercial Quality in the Field
            </h2>
          </div>
          <div className="font-mono text-xs text-[#6E7787] bg-[#FAF9F5] p-3 rounded-lg border border-[#141619]/10">
            PRESS RUN AUDIT: <strong className="text-[#141619]">45,000+ RUNS • 0% COLOR RE-PRESS DRIFT</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#FAF9F5] border border-[#141619]/10 flex flex-col justify-between shadow-2xs hover:shadow-sheet transition-all duration-300 specular-hover btn-tactile"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#00AEEF]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#00AEEF]" />
                  ))}
                </div>
                <p className="text-xs text-[#141619] leading-relaxed font-sans">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#141619]/8 mt-5 flex flex-col font-mono">
                <span className="text-xs font-bold text-[#141619]">
                  {rev.author}
                </span>
                <span className="text-[10px] text-[#6E7787] mt-0.5">
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};