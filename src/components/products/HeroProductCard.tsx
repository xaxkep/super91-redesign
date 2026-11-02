import React, { useState } from 'react';
import type { Product, QuantityTier, SpecOption } from '../../data/mockCatalog';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import { ArrowRight, Star, Clock, ShieldCheck, Zap } from 'lucide-react';

interface HeroProductCardProps {
  product: Product;
}

export const HeroProductCard: React.FC<HeroProductCardProps> = ({ product }) => {
  const { openDrawer } = useExpressDrawer();

  const [selectedTier, setSelectedTier] = useState<QuantityTier>(
    product.quantityTiers.find((t) => t.isPopular) || product.quantityTiers[1] || product.quantityTiers[0]
  );
  const [selectedPaper, setSelectedPaper] = useState<SpecOption>(product.paperStocks[0]);
  const [selectedFinish, setSelectedFinish] = useState<SpecOption>(product.finishes[0]);

  const calculatedUnitPrice =
    selectedTier.unitPrice * selectedPaper.priceModifier * selectedFinish.priceModifier;
  const baseSubtotal = Math.round(calculatedUnitPrice * selectedTier.quantity);
  const gst = Math.round(baseSubtotal * 0.18);
  const totalPayable = baseSubtotal + gst;

  return (
    <div className="bg-white rounded-2xl border border-[#141619]/10 shadow-specimen hover:shadow-sheet transition-all duration-300 flex flex-col justify-between overflow-hidden group specular-hover">
      {/* Editorial Specimen Image Header */}
      <div className="relative h-60 overflow-hidden bg-[#F3F1EA]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
          loading="lazy"
        />

        {/* Top Spec Badges with 100% Cyan & 100% Magenta Accents */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-md bg-[#0C0D0E]/90 text-white font-mono text-[10px] tracking-wider uppercase backdrop-blur-md">
            {product.edition}
          </span>
          {product.isSameDayEligible && (
            <span className="px-2 py-1 rounded-md bg-[#00AEEF] text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-xs">
              24H DISPATCH
            </span>
          )}
        </div>

        {/* Caliper & Press Spec Footnote */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[#0C0D0E]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-mono text-white/80">
          <span className="text-[#00AEEF]">{product.caliper}</span>
          <span className="text-[#EC008C] truncate max-w-[170px] font-semibold">{product.pressTechnology}</span>
        </div>
      </div>

      {/* Specimen Description & Specs */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <div className="flex items-center justify-between mb-1 text-[11px] font-mono text-[#6E7787] uppercase tracking-wider">
            <span>{product.category}</span>
            <div className="flex items-center gap-1 text-[#141619]">
              <Star className="w-3 h-3 text-[#EC008C] fill-[#EC008C]" />
              <span className="font-bold">{product.rating}</span>
              <span className="text-[#9AA3B2]">({product.reviewsCount})</span>
            </div>
          </div>
          <h3 className="font-sans font-bold text-lg text-[#141619] tracking-tight group-hover:text-[#00AEEF] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-[#6E7787] mt-1.5 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Technical Attributes Control Strip */}
        <div className="space-y-4 pt-3 border-t border-[#141619]/10">
          {/* 1. Quantity Run Ladder with Savings */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono mb-2 uppercase">
              <span className="font-bold text-[#141619] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EC008C]" />
                <span>1. Select Quantity Run:</span>
              </span>
              <span className="text-[#EC008C] font-bold text-[10px] bg-[#EC008C]/10 px-2 py-0.5 rounded">
                {selectedTier.savingsPercent > 0 ? `Save ${selectedTier.savingsPercent}% on scale` : 'Base Tier'}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {product.quantityTiers.map((tier) => {
                const isSelected = selectedTier.quantity === tier.quantity;
                return (
                  <button
                    key={tier.quantity}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`py-2 px-1 rounded-lg text-xs font-mono transition-all border text-center cursor-pointer relative btn-tactile ${
                      isSelected
                        ? 'bg-[#0C0D0E] text-white font-bold border-[#0C0D0E] shadow-sm ring-2 ring-[#00AEEF]/50'
                        : 'bg-white hover:bg-[#FAF9F5] text-[#141619] border-[#141619]/15 hover:border-[#141619]/40'
                    }`}
                  >
                    <div className="font-bold">{tier.quantity}</div>
                    <div className={`text-[9px] ${isSelected ? 'text-[#00AEEF]' : 'text-[#6E7787]'}`}>
                      ₹{tier.unitPrice.toFixed(2)}/u
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Paper Substrate Selector (Unmistakable Radio Circles & Cyan Highlights) */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono mb-2 uppercase">
              <span className="font-bold text-[#141619] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />
                <span>2. Select Substrate Stock:</span>
              </span>
              <span className="text-[10px] font-mono text-[#00AEEF] font-bold">
                Option Active
              </span>
            </div>
            <div className="space-y-1.5">
              {product.paperStocks.map((paper) => {
                const isSelected = selectedPaper.id === paper.id;
                return (
                  <button
                    key={paper.id}
                    type="button"
                    onClick={() => setSelectedPaper(paper)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-mono transition-all border text-left cursor-pointer group/opt btn-tactile ${
                      isSelected
                        ? 'bg-[#00AEEF]/10 text-[#0C0D0E] font-bold border-[#00AEEF] shadow-2xs ring-1 ring-[#00AEEF]'
                        : 'bg-white hover:bg-[#FAF9F5] text-[#333] border-[#141619]/15 hover:border-[#00AEEF]/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Radio Circle Affordance */}
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'border-[#00AEEF] bg-[#00AEEF]'
                            : 'border-[#141619]/30 bg-white group-hover/opt:border-[#00AEEF]'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="truncate">{paper.label}</span>
                    </div>
                    {paper.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#00AEEF]/15 text-[#00AEEF] shrink-0 font-mono">
                        {paper.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Tactile Coating Selector (Unmistakable Radio Circles & Magenta Highlights) */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono mb-2 uppercase">
              <span className="font-bold text-[#141619] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EC008C]" />
                <span>3. Select Tactile Coating:</span>
              </span>
              <span className="text-[10px] font-mono text-[#EC008C] font-bold">
                Option Active
              </span>
            </div>
            <div className="space-y-1.5">
              {product.finishes.map((finish) => {
                const isSelected = selectedFinish.id === finish.id;
                return (
                  <button
                    key={finish.id}
                    type="button"
                    onClick={() => setSelectedFinish(finish)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-mono transition-all border text-left cursor-pointer group/opt btn-tactile ${
                      isSelected
                        ? 'bg-[#EC008C]/10 text-[#0C0D0E] font-bold border-[#EC008C] shadow-2xs ring-1 ring-[#EC008C]'
                        : 'bg-white hover:bg-[#FAF9F5] text-[#333] border-[#141619]/15 hover:border-[#EC008C]/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Radio Circle Affordance */}
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'border-[#EC008C] bg-[#EC008C]'
                            : 'border-[#141619]/30 bg-white group-hover/opt:border-[#EC008C]'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="truncate">{finish.label}</span>
                    </div>
                    {finish.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#EC008C]/15 text-[#EC008C] shrink-0 font-mono">
                        {finish.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Price Receipt & Express Buy */}
        <div className="pt-4 border-t border-[#141619]/10 space-y-3">
          <div className="flex items-baseline justify-between font-mono">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#9AA3B2] uppercase">Live Configured Unit Rate</span>
              <span className="text-xs font-bold text-[#141619]">
                ₹{calculatedUnitPrice.toFixed(2)} / unit
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-[#9AA3B2] uppercase">Total ({selectedTier.quantity} pcs + 18% GST)</span>
              <span className="font-sans font-extrabold text-2xl text-[#141619] tracking-tight">
                ₹{totalPayable.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <button
            onClick={() => openDrawer(product, selectedTier, selectedPaper, selectedFinish)}
            className="w-full py-3 px-4 rounded-lg bg-[#0C0D0E] hover:bg-[#00AEEF] hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider shadow-tactile transition-all flex items-center justify-center gap-2 group/btn btn-tactile"
          >
            <span>Express Buy (Slide-Out)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
