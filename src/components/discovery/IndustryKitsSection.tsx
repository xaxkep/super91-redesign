import React from 'react';
import { INDUSTRY_KITS, SEASONAL_INDUSTRY_KITS, type IndustryKit } from '../../data/mockCatalog';
import { useFestivalTheme } from '../../context/FestivalThemeContext';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import { HERO_PRODUCTS } from '../../data/mockCatalog';
import { Briefcase, ArrowRight, Sparkles } from 'lucide-react';

export const IndustryKitsSection: React.FC = () => {
  const { theme } = useFestivalTheme();
  const { openDrawer } = useExpressDrawer();

  // Combine seasonal kit with base kits
  const seasonalKit = SEASONAL_INDUSTRY_KITS[theme.id];
  const displayedKits = seasonalKit
    ? [seasonalKit, ...INDUSTRY_KITS.filter((k) => k.id !== seasonalKit.id).slice(0, 3)]
    : INDUSTRY_KITS;

  const handleOrderKit = (kitIndex: number) => {
    const product = HERO_PRODUCTS[kitIndex % HERO_PRODUCTS.length];
    openDrawer(product);
  };

  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-[#141619]/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#141619]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0C0D0E] text-white text-[10px] font-mono tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00AEEF] animate-pulse" />
              <span>DYNAMIC INDUSTRY ARCHITECTURE • {theme.name.toUpperCase()}</span>
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl text-[#141619] tracking-tight">
              Curated Production Suites
            </h2>
            <p className="text-sm text-[#6E7787] mt-2 max-w-xl font-normal leading-relaxed">
              Complete brand collateral calibrated for enterprise launches and festive runs. Paper stocks, finishes, and envelope geometries color-matched across all assets.
            </p>
          </div>

          <div className="font-mono text-xs text-[#6E7787] bg-white p-3 rounded-lg border border-[#141619]/10 shadow-2xs">
            SUITE BUNDLE SAVINGS: <strong className="text-[#EC008C]">UP TO 42% ON VOLUME RUNS</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedKits.map((kit: IndustryKit, idx: number) => {
            const isSeasonal = seasonalKit && kit.id === seasonalKit.id;

            return (
              <div
                key={kit.id}
                className={`bg-white rounded-xl border ${
                  isSeasonal
                    ? 'border-[#00AEEF] ring-2 ring-[#00AEEF]/20'
                    : 'border-[#141619]/10'
                } shadow-specimen hover:shadow-sheet transition-all duration-300 flex flex-col justify-between overflow-hidden group specular-hover`}
              >
                <div className="relative h-44 overflow-hidden bg-[#F3F1EA]">
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    loading="lazy"
                  />
                  {isSeasonal && (
                    <div className="absolute top-3 left-3 bg-[#00AEEF] text-black font-mono font-bold text-[9px] uppercase px-2 py-0.5 rounded shadow-xs tracking-wider">
                      SEASONAL FOCUS
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-[#EC008C] text-white font-mono font-bold text-[10px] px-2 py-0.5 rounded shadow-xs">
                    {kit.savings}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#141619] leading-snug group-hover:text-[#00AEEF] transition-colors">
                      {kit.title}
                    </h3>
                    <p className="text-xs text-[#6E7787] mt-1 line-clamp-2 leading-relaxed">
                      {kit.subtitle}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-[#141619]/8 pt-3">
                      {kit.items.map((item: string, itemIdx: number) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs text-[#141619]/80 font-mono">
                          <span className="text-[#00AEEF] mt-0.5">•</span>
                          <span className="leading-tight text-[11px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#141619]/8 flex items-center justify-between font-mono">
                    <div>
                      <span className="text-[10px] text-[#9AA3B2] uppercase block">Bundle Total</span>
                      <span className="font-bold text-base text-[#141619]">
                        {kit.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrderKit(idx)}
                      className="px-4 py-2.5 min-h-[42px] rounded-lg bg-[#0C0D0E] hover:bg-[#00AEEF] hover:text-black text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-2xs font-bold btn-tactile"
                      aria-label={`Order ${kit.title}`}
                    >
                      <span>Order Suite</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
