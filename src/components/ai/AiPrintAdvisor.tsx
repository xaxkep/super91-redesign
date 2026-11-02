import React, { useState } from 'react';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import { HERO_PRODUCTS } from '../../data/mockCatalog';
import { Sliders, ArrowRight, ShieldCheck, CheckCircle2, FileText, CornerDownRight } from 'lucide-react';

interface PrintDocket {
  title: string;
  industry: string;
  substrate: string;
  caliper: string;
  finish: string;
  pressMethod: string;
  rationale: string;
  productId: string;
  suggestedQty: number;
}

const SPEC_DOCKETS: Record<string, PrintDocket> = {
  'Luxury Architectural Portfolio': {
    title: 'Luxury Architectural Portfolio',
    industry: 'High-End Real Estate & Architecture',
    substrate: '250 GSM Triple-Coated Heavyweight Art Paper + 400 GSM Outer Cover',
    caliper: '24 pt Reinforced Spine',
    finish: 'Both-Side Thermal Silk Lamination + Architectural 3D Spot UV over Elevations',
    pressMethod: 'HP Indigo 12000 Liquid ElectroInk (7-Color Extended Gamut)',
    rationale:
      'High-net-worth real estate buyers judge structural reliability through physical paper weight and low specular sheen. Silk coating absorbs ambient halogen gallery lights while raised polymer accents create depth over technical floorplans.',
    productId: 'prod-brochure-trifold',
    suggestedQty: 500,
  },
  'All-Weather Gourmet Hospitality Menu': {
    title: 'All-Weather Gourmet Hospitality Menu',
    industry: 'Boutique Restaurants & Rooftop Cafes',
    substrate: '350 GSM Synthetic Polymer Core (Tear-Proof & Oil-Resistant)',
    caliper: '14 pt Synthetic Sheet',
    finish: '125μm Thermal Encapsulated Matte Seal with Sealed Trim Edges',
    pressMethod: 'Thermal Bonded Dry Toner with High Pigment Density',
    rationale:
      'Sanitizer wipes, acidic citrus spills, and grease rapidly disintegrate standard coated art cards. Encapsulated polymer substrates survive 10,000+ guest touches with zero dog-eared corners or ink feathering.',
    productId: 'prod-brochure-trifold',
    suggestedQty: 50,
  },
  'Circular Sustainable Confectionery Box': {
    title: 'Circular Sustainable Confectionery Box',
    industry: 'Artisan Confectionery & Clean Beauty',
    substrate: 'Recycled Natural Kraft Brown E-Flute (350 GSM Virgin Outer Skin)',
    caliper: '1.8mm Crash-Lock Corrugated',
    finish: 'Deep Hydraulic Blind Deboss + Soy-Based Water Barrier Coating',
    pressMethod: 'Direct-to-Flute Litho Lamination with Water-Based Inks',
    rationale:
      'Eco-conscious luxury buyers detect synthetic laminated films immediately. Natural unbleached kraft fibers communicate authentic circularity, while deep blind debossing provides unmistakable physical luxury without metallic foils.',
    productId: 'prod-box-rigid',
    suggestedQty: 250,
  },
  'Executive Handshake Business Identity': {
    title: 'Executive Handshake Business Identity',
    industry: 'Venture Capital, Legal & Corporate Leadership',
    substrate: '400 GSM Extra-Rigid Finnish Virgin Art Board',
    caliper: '18 pt Heavyweight Board',
    finish: 'Velvet Soft-Touch Suede Coating + Registered 24K Hot Stamped Foil',
    pressMethod: 'HP Indigo 12000 + Hydraulic Heated Magnesium Foil Matrix',
    rationale:
      'Cards lighter than 350 GSM flex easily in the hand, subconsciously communicating fragility. 400 GSM delivers unyielding firmness, and hot-stamped 24K foil reflects ambient office light during boardroom introductions.',
    productId: 'prod-vc-velvet',
    suggestedQty: 250,
  },
};

export const AiPrintAdvisor: React.FC = () => {
  const { openDrawer } = useExpressDrawer();
  const [selectedDocketKey, setSelectedDocketKey] = useState<string>('Executive Handshake Business Identity');

  const currentDocket = SPEC_DOCKETS[selectedDocketKey];

  const handleApplyToDrawer = () => {
    const targetProduct =
      HERO_PRODUCTS.find((p) => p.id === currentDocket.productId) || HERO_PRODUCTS[0];
    openDrawer(targetProduct);
  };

  return (
    <section id="spec-studio" className="py-20 bg-[#0C0D0E] text-[#FAF9F5] border-b border-white/10 relative overflow-hidden scroll-mt-20">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-dark-grain opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/10 text-[#00AEEF] text-[10px] font-mono tracking-widest uppercase mb-3 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C] animate-pulse" />
              <span>PRODUCTION SPECIFICATION STUDIO</span>
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl text-white tracking-tight">
              Print Engineering, Demystified
            </h2>
            <p className="text-sm text-[#9AA3B2] mt-2 max-w-xl font-normal leading-relaxed">
              Eliminate technical guesswork. Select your commercial application to generate a certified production docket with calibrated substrate weights, coating chemistry, and press instructions.
            </p>
          </div>

          <div className="font-mono text-xs text-white/60 bg-white/5 p-3 rounded-lg border border-white/10">
            DOCKET REVISION: <strong className="text-[#00AEEF]">v2026.04 CMYK SPEC</strong>
          </div>
        </div>

        {/* Use-Case Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {Object.keys(SPEC_DOCKETS).map((key) => {
            const isSelected = selectedDocketKey === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedDocketKey(key)}
                className={`p-4 rounded-xl text-left transition-all border font-mono text-xs btn-tactile ${
                  isSelected
                    ? 'bg-[#181A1E] text-white border-[#00AEEF] shadow-tactile ring-1 ring-[#00AEEF]/30'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 border-white/10'
                }`}
              >
                <div className="text-[10px] text-[#00AEEF] uppercase tracking-wider mb-1 font-bold">
                  SPEC 0{Object.keys(SPEC_DOCKETS).indexOf(key) + 1}
                </div>
                <div className="font-sans font-bold text-sm tracking-tight">{key}</div>
              </button>
            );
          })}
        </div>

        {/* The Official Specification Docket Card */}
        <div className="bg-[#141619] rounded-2xl border border-white/15 p-6 sm:p-8 shadow-2xl relative specular-hover">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-mono font-bold text-xs border border-[#00AEEF]/20">
                DOC
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#00AEEF] uppercase tracking-widest block font-bold">
                  <span className="text-[#00AEEF]">SUPER</span><span className="text-[#EC008C]">91</span> CERTIFIED SPECIFICATION DOCKET
                </span>
                <h3 className="font-sans font-bold text-lg text-white">
                  {currentDocket.title}
                </h3>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Press Tolerances Calibrated</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Technical Parameters Table */}
            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Substrate & Pulp</span>
                  <span className="text-white font-medium">{currentDocket.substrate}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Caliper Gauge</span>
                  <span className="text-white font-medium">{currentDocket.caliper}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Tactile Chemistry</span>
                  <span className="text-[#EC008C] font-medium">{currentDocket.finish}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Press Calibration</span>
                  <span className="text-white font-medium">{currentDocket.pressMethod}</span>
                </div>
              </div>

              {/* Engineering Rationale */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <CornerDownRight className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <p className="text-xs text-[#9AA3B2] leading-relaxed">
                  <strong className="text-white font-mono uppercase text-[11px] block mb-1">
                    Press Engineering Rationale:
                  </strong>
                  {currentDocket.rationale}
                </p>
              </div>
            </div>

            {/* Quick Action Side-Box */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between space-y-4 font-mono text-xs">
              <div>
                <span className="text-[10px] text-white/50 uppercase block mb-1">
                  Direct Press Routing
                </span>
                <div className="text-sm font-bold text-white mb-1">
                  Docket Ready for Dispatch
                </div>
                <p className="text-[11px] text-[#9AA3B2] leading-relaxed">
                  Automatically configure the slide-out booking drawer with these exact certified material parameters.
                </p>
              </div>

              <button
                onClick={handleApplyToDrawer}
                className="w-full py-3 px-4 rounded-lg bg-[#00AEEF] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-wider shadow-tactile transition-all flex items-center justify-center gap-2 group btn-tactile"
              >
                <span>Load Docket Into Drawer</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
