import React, { useRef } from 'react';
import { CATEGORIES } from '../../data/mockCatalog';
import { useFestivalTheme } from '../../context/FestivalThemeContext';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const CategoryHorizon: React.FC = () => {
  const { theme } = useFestivalTheme();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white border-b border-[#141619]/8 py-2.5 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white shadow-md border border-[#141619]/10 items-center justify-center text-[#141619] hover:bg-[#FAF9F5] transition-all hidden sm:flex btn-tactile"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white shadow-md border border-[#141619]/10 items-center justify-center text-[#141619] hover:bg-[#FAF9F5] transition-all hidden sm:flex btn-tactile"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Active Festive Category Horizon Pills */}
          {theme.curatedCategories.map((festiveCat, fIdx) => (
            <a
              key={`festive-${fIdx}`}
              href="#festival-showcase"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0C0D0E] text-white hover:bg-[#00AEEF] hover:text-black border border-white/10 shrink-0 transition-all duration-200 btn-tactile shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C] animate-pulse" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold leading-tight whitespace-nowrap">
                  {festiveCat}
                </span>
                <span className="text-[8px] font-mono tracking-widest text-[#00AEEF] group-hover:text-black uppercase">
                  {theme.name.split(' ')[0]} Focus
                </span>
              </div>
            </a>
          ))}

          {/* Standard Catalog Categories Horizon */}
          {CATEGORIES.map((cat, idx) => (
            <a
              key={cat.id}
              href="#hero-products"
              className="group flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-white border border-[#141619]/8 hover:border-[#00AEEF]/40 shrink-0 transition-all duration-150 btn-tactile"
            >
              <span className="font-mono text-[10px] text-[#9AA3B2] group-hover:text-[#00AEEF] transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-[#141619] group-hover:text-black whitespace-nowrap">
                  {cat.name}
                </span>
                <span className="text-[9px] font-mono text-[#6E7787] uppercase tracking-wider">
                  {cat.tag}
                </span>
              </div>
            </a>
          ))}

          {/* Quick-Jump Section Horizon Badges */}
          <div className="h-6 w-px bg-[#141619]/10 mx-1 shrink-0 hidden sm:block" />

          <a
            href="#industry-suites"
            className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF9F5] border border-[#141619]/12 hover:border-[#EC008C] shrink-0 transition-all duration-150 btn-tactile shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-[#141619] whitespace-nowrap">
                Industry Suites
              </span>
              <span className="text-[9px] font-mono text-[#EC008C] uppercase tracking-wider">
                Turnkey Kits
              </span>
            </div>
          </a>

          <a
            href="#tactile-lab"
            className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF9F5] border border-[#141619]/12 hover:border-[#00AEEF] shrink-0 transition-all duration-150 btn-tactile shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-[#141619] whitespace-nowrap">
                Tactile Lab
              </span>
              <span className="text-[9px] font-mono text-[#00AEEF] uppercase tracking-wider">
                3D Reflection
              </span>
            </div>
          </a>

          <a
            href="#spec-studio"
            className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF9F5] border border-[#141619]/12 hover:border-[#0C0D0E] shrink-0 transition-all duration-150 btn-tactile shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0C0D0E]" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-[#141619] whitespace-nowrap">
                Spec Studio
              </span>
              <span className="text-[9px] font-mono text-[#6E7787] uppercase tracking-wider">
                Prepress Docket
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
