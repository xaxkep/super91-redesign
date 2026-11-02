import React from 'react';
import { useFestivalTheme } from '../../context/FestivalThemeContext';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import { HERO_PRODUCTS } from '../../data/mockCatalog';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const FestivalCuratedShowcase: React.FC = () => {
  const { theme } = useFestivalTheme();
  const { openDrawer } = useExpressDrawer();

  const handleQuickBuy = (itemIdx: number) => {
    // Open drawer with corresponding base product
    const baseProduct = HERO_PRODUCTS[itemIdx % HERO_PRODUCTS.length];
    openDrawer(baseProduct);
  };

  return (
    <section className="py-16 bg-white border-b border-[#141619]/10 relative overflow-hidden transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#141619]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0C0D0E] text-white text-[10px] font-mono tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C] animate-pulse" />
              <span>{theme.editionBadge}</span>
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl text-[#141619] tracking-tight">
              {theme.collectionTitle}
            </h2>
            <p className="text-sm text-[#6E7787] mt-2 max-w-2xl font-normal leading-relaxed font-sans">
              {theme.collectionSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#141619] bg-[#FAF9F5] p-3 rounded-lg border border-[#141619]/10 shadow-2xs self-start md:self-auto">
            <span className="text-[#00AEEF] font-bold">100% CYAN</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#EC008C] font-bold">100% MAGENTA</span>
            <span className="text-slate-400">• Press Calibrated</span>
          </div>
        </div>

        {/* Dynamic Festival Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {theme.curatedProducts.map((prod, idx) => (
            <div
              key={prod.id}
              className="bg-[#FAF9F5] rounded-xl border border-[#141619]/10 shadow-specimen hover:shadow-sheet transition-all duration-300 flex flex-col justify-between overflow-hidden group specular-hover btn-tactile"
            >
              <div className="relative h-48 overflow-hidden bg-[#F3F1EA]">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-[#EC008C] text-white font-mono font-bold text-[10px] px-2 py-0.5 rounded shadow-xs">
                  {prod.savings}
                </div>
                <div className="absolute bottom-3 left-3 bg-[#0C0D0E]/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-white/90">
                  {prod.edition}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-sans font-bold text-sm text-[#141619] leading-snug group-hover:text-[#00AEEF] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#6E7787] mt-1.5 line-clamp-2 leading-relaxed font-sans">
                    {prod.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-[#141619]/8 pt-3">
                    {prod.specs.map((spec, specIdx) => (
                      <li key={specIdx} className="flex items-center gap-1.5 text-[11px] font-mono text-[#141619]/70">
                        <span className="w-1 h-1 rounded-full bg-[#00AEEF]" />
                        <span className="truncate">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#141619]/8 flex items-center justify-between font-mono">
                  <div>
                    <span className="text-[10px] text-[#9AA3B2] uppercase block">Direct Price</span>
                    <span className="font-bold text-base text-[#141619]">
                      {prod.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleQuickBuy(idx)}
                    className="px-3 py-2 rounded-lg bg-[#0C0D0E] hover:bg-[#00AEEF] hover:text-black text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-2xs font-bold btn-tactile"
                  >
                    <span>Instant Buy</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
