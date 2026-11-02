import React from 'react';
import { HERO_PRODUCTS } from '../../data/mockCatalog';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import { Zap, Clock, ArrowRight } from 'lucide-react';

export const SameDayExpressRibbon: React.FC = () => {
  const { openDrawer } = useExpressDrawer();
  const expressProducts = HERO_PRODUCTS.filter((p) => p.isSameDayEligible);

  return (
    <section className="py-12 bg-white border-b border-[#141619]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#0C0D0E] text-[#00AEEF] flex items-center justify-center font-mono font-bold text-xs border border-white/10">
              24H
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans font-bold text-lg text-[#141619] tracking-tight">
                  Emergency Press Dispatch Queue
                </h3>
                <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ACTIVE TODAY
                </span>
              </div>
              <p className="text-xs text-[#6E7787] font-mono">
                Order by 14:00 IST for guaranteed same-day printing and overnight courier routing.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#141619] bg-[#FAF9F5] px-3 py-1.5 rounded-lg border border-[#141619]/10 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span>Today's Guillotine Cutoff: <strong className="text-[#EC008C]">14:00 IST</strong></span>
          </div>
        </div>

        {/* Express Specimen Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expressProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#FAF9F5] rounded-xl p-4 border border-[#141619]/10 hover:border-[#00AEEF]/40 transition-all flex items-center justify-between gap-4 group specular-hover shadow-2xs"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#141619]/10 group-hover:scale-105 transition-transform"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono font-bold text-[#6E7787] uppercase block">
                  {prod.category}
                </span>
                <h4 className="text-xs font-bold text-[#141619] truncate group-hover:text-[#00AEEF] transition-colors">
                  {prod.name}
                </h4>
                <div className="flex items-center gap-2 mt-1 font-mono">
                  <span className="text-xs font-bold text-[#141619]">
                    From ₹{prod.quantityTiers[1].unitPrice.toFixed(2)}/u
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold">
                    • In Stock CPH
                  </span>
                </div>
              </div>
              <button
                onClick={() => openDrawer(prod)}
                className="p-2.5 rounded-lg bg-[#0C0D0E] hover:bg-[#00AEEF] hover:text-black text-white transition-colors shrink-0 btn-tactile shadow-2xs"
                title="1-Click Express Order"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
