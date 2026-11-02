import React, { useState } from 'react';
import type { Product, QuantityTier, SpecOption } from '../../data/mockCatalog';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProductCardProps {
  product: Product;
}

const getShortPaperLabel = (label: string) => {
  if (label.includes('400 GSM')) return '400g Virgin';
  if (label.includes('350 GSM')) return '350g Silk';
  if (label.includes('450 GSM')) return '450g Cotton';
  if (label.includes('White Clay')) return 'Clay Kraft';
  if (label.includes('Natural Brown')) return 'Brown Kraft';
  if (label.includes('Reinforced')) return '5-Ply Flute';
  if (label.includes('Anti-Curl')) return 'Anti-Curl PET';
  if (label.includes('Tension')) return 'Tension Poly';
  if (label.includes('170 GSM')) return '170g Silk';
  if (label.includes('250 GSM')) return '250g Heavy';
  if (label.includes('300 GSM')) return '300g Organic';
  if (label.includes('Ultra-White')) return 'Polymeric';
  if (label.includes('Prismatic')) return 'Prism Foil';
  if (label.includes('Optical Clear')) return 'Clear Vinyl';
  if (label.includes('Italian')) return 'Thermo PU';
  if (label.includes('Belgian')) return 'Linen Cloth';
  return label.split(' ').slice(0, 2).join(' ');
};

const getShortFinishLabel = (label: string) => {
  if (label.includes('Velvet')) return 'Velvet Matte';
  if (label.includes('Raised 3D Gold')) return '3D Gold Foil';
  if (label.includes('Scodix')) return 'Scodix UV';
  if (label.includes('Anti-Scuff')) return 'Anti-Scuff';
  if (label.includes('Hot Stamped')) return 'Hot Foil';
  if (label.includes('Anti-Glare')) return 'Anti-Glare';
  if (label.includes('High-Saturation')) return 'Luster Gloss';
  if (label.includes('Double-Sided')) return 'Double Silk';
  if (label.includes('Front Cover')) return 'Spot UV';
  if (label.includes('Outdoor UV')) return 'UV Barrier';
  if (label.includes('High-Gloss')) return 'Gloss Poly';
  if (label.includes('Deep Hydraulic')) return 'Blind Deboss';
  if (label.includes('24K Warm')) return '24K Gilt';
  return label.split(' ').slice(0, 2).join(' ');
};

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
      {/* 1. Compact Editorial Specimen Image Header */}
      <div className="relative h-36 sm:h-40 overflow-hidden bg-[#F3F1EA] shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1 z-10">
          <span className="px-2 py-0.5 rounded bg-[#0C0D0E]/90 text-white font-mono text-[9px] tracking-wider uppercase backdrop-blur-md">
            {product.edition}
          </span>
          {product.isSameDayEligible && (
            <span className="px-1.5 py-0.5 rounded bg-[#00AEEF] text-white font-mono text-[9px] font-bold tracking-wider uppercase shadow-xs">
              24H DISPATCH
            </span>
          )}
        </div>

        {/* Caliper Footnote */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-[#0C0D0E]/90 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-mono text-white/90">
          <span className="text-[#00AEEF] truncate max-w-[120px]">{product.caliper}</span>
          <span className="text-[#EC008C] truncate max-w-[150px] font-semibold">{product.pressTechnology}</span>
        </div>
      </div>

      {/* 2. Compact Specimen Information & Unmistakable Option Groups */}
      <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#6E7787] uppercase tracking-wider mb-0.5">
            <span>{product.category}</span>
            <div className="flex items-center gap-1 text-[#141619]">
              <Star className="w-3 h-3 text-[#EC008C] fill-[#EC008C]" />
              <span className="font-bold">{product.rating}</span>
              <span className="text-[#9AA3B2]">({product.reviewsCount})</span>
            </div>
          </div>
          <h3 className="font-sans font-bold text-base text-[#141619] tracking-tight truncate group-hover:text-[#00AEEF] transition-colors">
            {product.name}
          </h3>
          <p className="text-[11px] text-[#6E7787] mt-0.5 leading-snug line-clamp-1">
            {product.description}
          </p>
        </div>

        {/* Technical Attributes Control Strip (Compact 1-Row Groups) */}
        <div className="space-y-2.5 pt-2 border-t border-[#141619]/10">
          {/* Step 1: Quantity Ladder */}
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono mb-1 uppercase">
              <span className="font-bold text-[#141619] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
                <span>1. Quantity:</span>
              </span>
              <span className="text-[#EC008C] font-bold text-[9px]">
                {selectedTier.savingsPercent > 0 ? `Save ${selectedTier.savingsPercent}%` : 'Base'}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {product.quantityTiers.map((tier) => {
                const isSelected = selectedTier.quantity === tier.quantity;
                return (
                  <button
                    key={tier.quantity}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`py-1 px-1 rounded-md text-[11px] font-mono transition-all border text-center cursor-pointer btn-tactile ${
                      isSelected
                        ? 'bg-[#0C0D0E] text-white font-bold border-[#0C0D0E] shadow-2xs ring-1 ring-[#00AEEF]'
                        : 'bg-white hover:bg-[#FAF9F5] text-[#141619] border-[#141619]/15'
                    }`}
                  >
                    <div className="font-bold leading-tight">{tier.quantity}</div>
                    <div className={`text-[8px] leading-tight ${isSelected ? 'text-[#00AEEF]' : 'text-[#6E7787]'}`}>
                      ₹{tier.unitPrice.toFixed(1)}/u
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Substrate Stock (Horizontal 1-Row Radio Chips) */}
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono mb-1 uppercase">
              <span className="font-bold text-[#141619] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                <span>2. Substrate:</span>
              </span>
              <span className="text-[9px] font-mono text-[#00AEEF] font-bold truncate max-w-[160px]">
                {selectedPaper.label}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {product.paperStocks.map((paper) => {
                const isSelected = selectedPaper.id === paper.id;
                return (
                  <button
                    key={paper.id}
                    type="button"
                    onClick={() => setSelectedPaper(paper)}
                    className={`py-1.5 px-1.5 rounded-md text-[10px] font-mono transition-all border text-center flex items-center justify-center gap-1 cursor-pointer group/opt btn-tactile ${
                      isSelected
                        ? 'bg-[#00AEEF]/10 text-[#0C0D0E] font-bold border-[#00AEEF] ring-1 ring-[#00AEEF]'
                        : 'bg-white hover:bg-[#FAF9F5] text-[#444] border-[#141619]/15 hover:border-[#00AEEF]/40'
                    }`}
                    title={paper.label}
                  >
                    {/* Visual Radio Circle */}
                    <div
                      className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'border-[#00AEEF] bg-[#00AEEF]'
                          : 'border-[#141619]/30 bg-white group-hover/opt:border-[#00AEEF]'
                      }`}
                    >
                      {isSelected && <span className="w-1 h-1 rounded-full bg-white" />}
                    </div>
                    <span className="truncate">{getShortPaperLabel(paper.label)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Tactile Coating (Horizontal 1-Row Radio Chips) */}
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono mb-1 uppercase">
              <span className="font-bold text-[#141619] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
                <span>3. Finish:</span>
              </span>
              <span className="text-[9px] font-mono text-[#EC008C] font-bold truncate max-w-[160px]">
                {selectedFinish.label}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {product.finishes.map((finish) => {
                const isSelected = selectedFinish.id === finish.id;
                return (
                  <button
                    key={finish.id}
                    type="button"
                    onClick={() => setSelectedFinish(finish)}
                    className={`py-1.5 px-1.5 rounded-md text-[10px] font-mono transition-all border text-center flex items-center justify-center gap-1 cursor-pointer group/opt btn-tactile ${
                      isSelected
                        ? 'bg-[#EC008C]/10 text-[#0C0D0E] font-bold border-[#EC008C] ring-1 ring-[#EC008C]'
                        : 'bg-white hover:bg-[#FAF9F5] text-[#444] border-[#141619]/15 hover:border-[#EC008C]/40'
                    }`}
                    title={finish.label}
                  >
                    {/* Visual Radio Circle */}
                    <div
                      className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'border-[#EC008C] bg-[#EC008C]'
                          : 'border-[#141619]/30 bg-white group-hover/opt:border-[#EC008C]'
                      }`}
                    >
                      {isSelected && <span className="w-1 h-1 rounded-full bg-white" />}
                    </div>
                    <span className="truncate">{getShortFinishLabel(finish.label)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Live Price Calculation & Instant Express Buy Button */}
        <div className="pt-2.5 border-t border-[#141619]/10 space-y-2">
          <div className="flex items-baseline justify-between font-mono">
            <div className="flex flex-col">
              <span className="text-[9px] text-[#9AA3B2] uppercase">Live Rate</span>
              <span className="text-xs font-bold text-[#141619]">
                ₹{calculatedUnitPrice.toFixed(2)}/u
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[9px] text-[#9AA3B2] uppercase">Total ({selectedTier.quantity} pcs + GST)</span>
              <span className="font-sans font-black text-xl text-[#141619] tracking-tight">
                ₹{totalPayable.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <button
            onClick={() => openDrawer(product, selectedTier, selectedPaper, selectedFinish)}
            className="w-full py-2.5 px-3 rounded-lg bg-[#0C0D0E] hover:bg-[#00AEEF] hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider shadow-tactile transition-all flex items-center justify-center gap-1.5 group/btn btn-tactile"
          >
            <span>Express Buy (Slide-Out)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
