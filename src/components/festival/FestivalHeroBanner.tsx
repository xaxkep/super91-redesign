import React, { useState } from 'react';
import { useFestivalTheme } from '../../context/FestivalThemeContext';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import { HERO_PRODUCTS } from '../../data/mockCatalog';
import { ArrowRight, CheckCircle2, Sliders, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export const FestivalHeroBanner: React.FC = () => {
  const { theme } = useFestivalTheme();
  const { openDrawer } = useExpressDrawer();

  const [activeStockIndex, setActiveStockIndex] = useState(0);
  const [activeFinishIndex, setActiveFinishIndex] = useState(1);
  const [activeQty, setActiveQty] = useState(250);
  const [specimenTilt, setSpecimenTilt] = useState({ x: 0, y: 0 });

  const flagshipProduct = HERO_PRODUCTS[0];
  const matchedTier =
    flagshipProduct.quantityTiers.find((t) => t.quantity === activeQty) ||
    flagshipProduct.quantityTiers[1];

  const selectedStock = flagshipProduct.paperStocks[activeStockIndex];
  const selectedFinish = flagshipProduct.finishes[activeFinishIndex];

  const calculatedUnitPrice =
    matchedTier.unitPrice * selectedStock.priceModifier * selectedFinish.priceModifier;
  const baseSubtotal = Math.round(calculatedUnitPrice * matchedTier.quantity);
  const gst = Math.round(baseSubtotal * 0.18);
  const totalPayable = baseSubtotal + gst;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setSpecimenTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setSpecimenTilt({ x: 0, y: 0 });
  };

  return (
    <section className={`relative overflow-hidden ${theme.bgAtmosphere} text-[#FAF9F5] pt-12 pb-20 border-b border-white/10 transition-colors duration-700`}>
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-dark-grain opacity-35 pointer-events-none" />

      {/* Cyan & Magenta ambient gradient flares in corners */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#00AEEF]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#EC008C]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Editorial Authority with High-Res Festival Hero Image Background */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono tracking-wider text-[#FAF9F5] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-[#00AEEF] font-bold">100% CYAN</span>
              <span className="text-white/20">/</span>
              <span className="text-[#EC008C] font-bold">100% MAGENTA</span>
              <span className="text-white/20">|</span>
              <span className="text-white/70">{theme.editionBadge}</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-serif italic text-4xl sm:text-6xl tracking-tight leading-[1.05]">
                <span className="text-[#00AEEF]">{theme.heroHeadlineSerif.split(',')[0]}</span>
                <span className="text-white">,</span>
              </h1>
              <div className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-[52px] tracking-tight leading-[1.08] text-white">
                {theme.heroHeadlineSans}
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#9AA3B2] max-w-xl font-normal leading-relaxed font-sans">
              {theme.heroSubheadline}
            </p>

            {/* High-Resolution Dynamic Thematic Hero Photo Strip */}
            <div className="relative rounded-xl overflow-hidden border border-white/15 max-w-xl group specular-hover shadow-2xl">
              <img
                src={theme.heroImage}
                alt={theme.heroImageAlt}
                className="w-full h-44 sm:h-52 object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-4">
                <div className="flex items-center justify-between w-full font-mono text-xs">
                  <span className="text-white font-bold">{theme.heroImageAlt}</span>
                  <span className="text-[#00AEEF] text-[10px] bg-black/60 px-2 py-0.5 rounded border border-white/10">
                    SEASONAL SPECIMEN
                  </span>
                </div>
              </div>
            </div>

            {/* Allowance Docket Strip */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 max-w-xl flex items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#FAF9F5]/80">
                <span className="text-[#00AEEF]">❖</span>
                <span className="text-[11px] leading-tight">{theme.heroTagline}</span>
              </div>
              <div className="shrink-0 bg-[#EC008C]/20 text-[#EC008C] border border-[#EC008C]/40 px-2.5 py-1 rounded font-bold text-[11px] tracking-wider">
                {theme.activeCoupon}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#hero-products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#00AEEF] hover:bg-[#0097D1] text-white font-mono font-bold text-xs tracking-wider uppercase shadow-cyan-glow transition-all btn-tactile"
              >
                <span>Inspect Production Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#tactile-lab"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-white font-mono text-xs border border-white/15 transition-all btn-tactile"
              >
                <span>Tactile Specimen Lab</span>
                <ArrowRight className="w-3 h-3 text-[#EC008C]" />
              </a>
            </div>
          </div>

          {/* Right Column: Physical Tactile Press Proof Stage (with subtle float animation) */}
          <div className="lg:col-span-5">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-[#141619] rounded-2xl p-6 sm:p-7 text-[#FAF9F5] shadow-2xl border border-white/15 relative overflow-hidden animate-gentle-float"
            >
              {/* Top Stage Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                  <span className="font-bold text-white uppercase tracking-wider">
                    Interactive Specimen Stage
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#EC008C]/20 text-[#EC008C] border border-[#EC008C]/40">
                  SAVE {matchedTier.savingsPercent}% (SCALE TIER)
                </span>
              </div>

              {/* Physical Card Simulation Frame with Perspective Mouse Tilt */}
              <div
                style={{
                  transform: `perspective(600px) rotateX(${specimenTilt.y}deg) rotateY(${specimenTilt.x}deg)`,
                  transition: 'transform 0.1s ease-out',
                }}
                className="relative h-44 rounded-xl bg-gradient-to-br from-[#1C1E22] to-[#0E1012] p-5 border border-white/15 flex flex-col justify-between shadow-2xl overflow-hidden mb-5 group cursor-crosshair"
              >
                <div className="absolute inset-0 spot-uv-shimmer opacity-40 pointer-events-none" />

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[9px] font-mono tracking-widest text-[#00AEEF] uppercase font-bold">
                    {selectedStock.label.split(' ')[0]} {selectedStock.label.split(' ')[1]} &bull; {flagshipProduct.caliper}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">CALIBRATED PROOF</span>
                </div>

                <div className="relative z-10 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest">
                    <span className="text-[#00AEEF] font-bold">SUPER</span>
                    <span className="text-[#EC008C] font-bold">91</span>
                    <span className="text-white/60 ml-1.5 font-normal">EXECUTIVE SPECIMEN</span>
                  </div>
                  <div className="font-serif italic text-2xl text-white">
                    Artisanal Tactile Finish
                  </div>
                </div>

                <div className="flex items-center justify-between relative z-10 text-[10px] font-mono text-[#9AA3B2]">
                  <span className="text-[#EC008C] font-semibold">{selectedFinish.label}</span>
                  <span className="text-white/60">Tilt cursor to reflect light</span>
                </div>
              </div>

              {/* Physical Spec Switchers */}
              <div className="space-y-4 font-mono text-xs">
                {/* Paper Substrate Toggle */}
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#9AA3B2] mb-1.5 uppercase">
                    <span>1. Paper Substrate</span>
                    <span className="text-[#00AEEF] font-bold">{selectedStock.label}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {flagshipProduct.paperStocks.map((stock, idx) => (
                      <button
                        key={stock.id}
                        onClick={() => setActiveStockIndex(idx)}
                        className={`py-2 px-2 rounded-lg text-[10px] font-mono transition-all border text-left btn-tactile ${
                          activeStockIndex === idx
                            ? 'bg-[#00AEEF] text-white font-bold border-[#00AEEF] shadow-sm'
                            : 'bg-white/5 hover:bg-white/10 text-white/70 border-white/10'
                        }`}
                      >
                        <div className="truncate">{stock.label.split(' ')[0]} {stock.label.split(' ')[1]}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tactile Coating Toggle */}
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#9AA3B2] mb-1.5 uppercase">
                    <span>2. Tactile Coating</span>
                    <span className="text-[#EC008C] font-bold">{selectedFinish.label}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {flagshipProduct.finishes.map((fin, idx) => (
                      <button
                        key={fin.id}
                        onClick={() => setActiveFinishIndex(idx)}
                        className={`py-2 px-2 rounded-lg text-[10px] font-mono transition-all border text-left btn-tactile ${
                          activeFinishIndex === idx
                            ? 'bg-[#EC008C] text-white font-bold border-[#EC008C] shadow-sm'
                            : 'bg-white/5 hover:bg-white/10 text-white/70 border-white/10'
                        }`}
                      >
                        <div className="truncate">{fin.label.split(' ')[0]} {fin.label.split(' ')[1]}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Tier Curve */}
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#9AA3B2] mb-1.5 uppercase">
                    <span>3. Quantity Ladder</span>
                    <span className="text-white font-mono font-bold">₹{calculatedUnitPrice.toFixed(2)}/unit</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {flagshipProduct.quantityTiers.map((tier) => (
                      <button
                        key={tier.quantity}
                        onClick={() => setActiveQty(tier.quantity)}
                        className={`py-1.5 px-1 rounded-lg text-xs font-mono transition-all border btn-tactile ${
                          activeQty === tier.quantity
                            ? 'bg-white text-[#0C0D0E] font-bold border-white'
                            : 'bg-white/5 hover:bg-white/10 text-white/60 border-white/10'
                        }`}
                      >
                        <div>{tier.quantity}</div>
                        {tier.savingsPercent > 0 && (
                          <div className="text-[9px] text-[#EC008C] font-bold">-{tier.savingsPercent}%</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Real-Time Receipt Summary */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-white/60 text-[11px]">
                    <span>Base Subtotal ({matchedTier.quantity} pcs)</span>
                    <span>₹{baseSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-white/60 text-[11px]">
                    <span>Standard GST (18% ITC Eligible)</span>
                    <span>₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between items-baseline text-sm">
                    <span className="text-[#00AEEF] font-bold uppercase tracking-wider text-xs">
                      Total Payable
                    </span>
                    <span className="font-mono font-bold text-lg text-white">
                      ₹{totalPayable.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* 1-Click Buy Button with Micro-Spring Tactile Feedback */}
                <button
                  onClick={() => openDrawer(flagshipProduct, matchedTier, selectedStock, selectedFinish)}
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#00AEEF] to-[#0097D1] hover:from-[#0097D1] hover:to-[#007AA8] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-cyan-glow transition-all flex items-center justify-center gap-2 group btn-tactile"
                >
                  <span>Configure & Instant Press Proof</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
