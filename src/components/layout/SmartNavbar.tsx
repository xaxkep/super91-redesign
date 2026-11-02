import React, { useState } from 'react';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import { useFestivalTheme } from '../../context/FestivalThemeContext';
import {
  Search,
  ShoppingBag,
  Sliders,
  MapPin,
  Building,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const SmartNavbar: React.FC = () => {
  const { cartCount, pincode, setPincode } = useExpressDrawer();
  const { theme } = useFestivalTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [tempPincode, setTempPincode] = useState(pincode);

  const searchIndex = [
    { name: 'Tactile Velvet Cards (400 GSM)', category: 'Visiting Cards', spec: 'Scodix 3D Gold' },
    { name: 'Engineered Corrugated Mailers', category: 'Packaging', spec: 'Litho Bleed E-Flute' },
    { name: 'Architectural Retractable Standee (6×3 ft)', category: 'Displays', spec: 'Greyback Light-Block' },
    { name: 'Precision Scored Marketing Catalogues', category: 'Brochures', spec: 'Speedmaster XL 106' },
    { name: 'Executive 2026 Debossed Planner', category: 'Stationery', spec: 'Hydraulic Heat Stamp' },
  ];

  const handlePincodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempPincode.length === 6) {
      setPincode(tempPincode);
      setIsPincodeModalOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#141619]/8 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Authentic Super91 Brand Mark (100% Cyan of Super & 100% Magenta of 91) */}
          <div className="flex items-center gap-4 shrink-0">
            <a href="#" className="flex items-center gap-3.5 group">
              {/* Dual-Tone CMYK Emblem */}
              <div className="w-10 h-10 rounded-lg bg-[#0C0D0E] flex items-center justify-center p-0.5 border border-white/10 shadow-sm group-hover:scale-102 transition-transform">
                <div className="w-full h-full rounded-[6px] flex overflow-hidden">
                  <div className="w-1/2 h-full bg-[#00AEEF] flex items-center justify-center text-[11px] font-mono font-black text-white">
                    S
                  </div>
                  <div className="w-1/2 h-full bg-[#EC008C] flex items-center justify-center text-[11px] font-mono font-black text-white">
                    91
                  </div>
                </div>
              </div>

              {/* Exact Brand Wordmark */}
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <div className="font-sans font-black text-2xl tracking-tighter leading-none">
                    <span className="text-[#00AEEF]">SUPER</span>
                    <span className="text-[#EC008C]">91</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-1.5 py-0.5 rounded bg-[#141619]/5 text-[#141619]/70 border border-[#141619]/10">
                    PRINTS24
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                  <span className="text-[9px] font-mono tracking-wider text-[#6E7787] uppercase">
                    100% Cyan &bull; 100% Magenta Press Hub
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Architectural Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg relative">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA3B2]" />
              <input
                type="text"
                placeholder="Search substrate, GSM weight, or finish (e.g. 400 GSM, Scodix, E-Flute)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                className="w-full pl-10 pr-12 py-2.5 rounded-lg border border-[#141619]/12 bg-white text-xs font-medium text-[#141619] placeholder-[#9AA3B2] focus:outline-none focus:ring-1 focus:ring-[#00AEEF] focus:border-[#00AEEF] transition-all shadow-2xs"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#9AA3B2] bg-[#FAF9F5] px-1.5 py-0.5 rounded border border-[#141619]/10">
                /
              </span>
            </div>

            {/* Predictive Autocomplete Dropdown */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-sheet border border-[#141619]/10 py-2.5 px-1.5 z-50 animate-in fade-in duration-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#9AA3B2] px-3 pb-1.5">
                  Production Catalog Index
                </div>
                {searchIndex.map((item, idx) => (
                  <a
                    key={idx}
                    href="#hero-products"
                    className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#FAF9F5] transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-[#141619] group-hover:text-[#00AEEF] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-[#6E7787] font-mono">{item.spec}</div>
                    </div>
                    <span className="text-[10px] font-mono text-[#9AA3B2] uppercase">
                      {item.category}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search Toggle Button */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden p-2.5 rounded-lg bg-white border border-[#141619]/12 text-[#141619] hover:bg-[#FAF9F5] transition-colors shadow-2xs btn-tactile"
              aria-label="Toggle mobile search"
            >
              <Search className="w-4 h-4 text-[#141619]" />
            </button>

            {/* Pincode Radar with Cyan Indicator */}
            <button
              onClick={() => setIsPincodeModalOpen(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-[#141619] bg-white border border-[#141619]/12 hover:border-[#00AEEF] transition-all shadow-2xs btn-tactile"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
              <span>DF ROUTE:</span>
              <span className="font-bold underline decoration-[#00AEEF] underline-offset-2">{pincode}</span>
            </button>

            {/* Specification Studio CTA */}
            <a
              href="#ai-print-advisor"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold text-[#141619] bg-white hover:bg-[#00AEEF] hover:text-black border border-[#141619]/15 transition-all shadow-2xs group btn-tactile"
            >
              <Sliders className="w-3.5 h-3.5 text-[#00AEEF] group-hover:text-black transition-colors" />
              <span>Spec Studio</span>
            </a>

            {/* Cart Trigger with Magenta Badge */}
            <a
              href="#hero-products"
              className="relative p-2.5 rounded-lg bg-[#0C0D0E] text-white hover:bg-black transition-colors flex items-center justify-center shadow-xs btn-tactile"
              title="Review Active Production Order"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#EC008C] text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#FAF9F5] shadow-xs">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>

        {/* Mobile Search Tray (When toggled) */}
        {isMobileSearchOpen && (
          <div className="md:hidden pb-3 pt-1 border-t border-[#141619]/8 animate-in fade-in slide-in-from-top-1">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA3B2]" />
              <input
                type="text"
                autoFocus
                placeholder="Search substrate, GSM, Scodix, Box..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#00AEEF] bg-white text-xs font-medium text-[#141619] focus:outline-none shadow-xs font-mono"
              />
            </div>
          </div>
        )}
      </div>

      {/* Pincode Modal */}
      {isPincodeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-[#141619]/15 relative">
            <button
              onClick={() => setIsPincodeModalOpen(false)}
              className="absolute top-4 right-4 text-[#9AA3B2] hover:text-[#141619]"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />
              <h3 className="font-mono font-bold text-sm text-[#141619] uppercase tracking-wider">
                Franchise Delivery Docket
              </h3>
            </div>
            <p className="text-xs text-[#6E7787] mb-4 leading-relaxed font-sans">
              Enter Indian PIN code to locate nearest Production Franchise (PF) and Delivery Franchise (DF) automated routing node.
            </p>
            <form onSubmit={handlePincodeSubmit} className="space-y-3 font-mono">
              <input
                type="text"
                maxLength={6}
                value={tempPincode}
                onChange={(e) => setTempPincode(e.target.value.replace(/\D/g, ''))}
                placeholder="400001"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#141619]/20 text-sm font-mono tracking-widest text-[#141619] focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#00AEEF] hover:bg-[#0097D1] text-white text-xs font-mono uppercase tracking-wider font-bold rounded-lg transition-colors shadow-sm"
              >
                Sync Logistics Route
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};
