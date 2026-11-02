import React, { useState } from 'react';
import { TACTILE_FINISHES } from '../../data/mockCatalog';
import { Sparkles, Sliders, ArrowRight, Eye, ShieldCheck, Sun } from 'lucide-react';

export const TactileFinishLab: React.FC = () => {
  const [activeFinishId, setActiveFinishId] = useState(TACTILE_FINISHES[0].id);
  const [lightAngle, setLightAngle] = useState(45);

  const activeFinish =
    TACTILE_FINISHES.find((f) => f.id === activeFinishId) || TACTILE_FINISHES[0];

  return (
    <section id="tactile-lab" className="py-20 bg-white border-b border-[#141619]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#141619]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#141619]/5 text-[#141619] text-[10px] font-mono tracking-widest uppercase mb-3 border border-[#141619]/10">
              <Sun className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>SENSORY FINISHES LABORATORY</span>
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl text-[#141619] tracking-tight">
              The Science of Physical Touch
            </h2>
            <p className="text-sm text-[#6E7787] mt-2 max-w-xl font-normal leading-relaxed">
              Print is an emotional and tactile medium. Inspect how our industrial-grade laminations, high-build UV polymers, and vacuum-metallized hot foils reflect ambient lighting and feel against the fingertip.
            </p>
          </div>

          <div className="font-mono text-xs text-[#6E7787]">
            MICRO-PROFILE: <strong className="text-[#141619]">{activeFinish.specCode}</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Finish Selector Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {TACTILE_FINISHES.map((finish) => {
              const isSelected = activeFinishId === finish.id;
              return (
                <div
                  key={finish.id}
                  onClick={() => setActiveFinishId(finish.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border font-mono text-xs btn-tactile ${
                    isSelected
                      ? 'bg-[#0C0D0E] text-white border-[#00AEEF] shadow-sheet scale-101 ring-1 ring-[#00AEEF]/30'
                      : 'bg-[#FAF9F5] hover:bg-[#F3F1EA] text-[#141619] border-[#141619]/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans font-bold text-sm tracking-tight">
                      {finish.name}
                    </span>
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#C5A059] text-[#0C0D0E]'
                          : 'bg-[#141619]/5 text-[#6E7787]'
                      }`}
                    >
                      {finish.badge}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] block ${
                      isSelected ? 'text-[#C5A059]' : 'text-[#6E7787]'
                    }`}
                  >
                    {finish.sensoryTag}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Sensory Spotlight Chamber with Interactive Light Tilt */}
          <div className="lg:col-span-7">
            <div className="bg-[#0C0D0E] text-[#FAF9F5] rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden space-y-6">
              {/* Chamber Header & Light Angle Slider */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-widest block">
                    TACTILE REFLECTION CHAMBER
                  </span>
                  <h3 className="font-sans font-bold text-xl text-white mt-0.5">
                    {activeFinish.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-white/10">
                  <span className="text-[10px] text-white/50 uppercase">Light Angle:</span>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={lightAngle}
                    onChange={(e) => setLightAngle(Number(e.target.value))}
                    aria-label="Adjust light reflection angle"
                    className="w-24 h-6 accent-[#C5A059] cursor-pointer"
                  />
                  <span className="font-bold text-[#C5A059] text-[11px]">{lightAngle}°</span>
                </div>
              </div>

              {/* Dynamic Texture Swatch Simulation */}
              <div
                style={{
                  background:
                    activeFinish.id === 'gold-hot-foil'
                      ? `linear-gradient(${lightAngle}deg, #785824 0%, #C5A059 30%, #FFF3D1 50%, #9E7D3B 70%, #5E4319 100%)`
                      : activeFinish.id === 'scodix-spot-uv'
                      ? `radial-gradient(circle at ${lightAngle}% 50%, rgba(255,255,255,0.4) 0%, rgba(30,58,138,0.3) 40%, #0F172A 100%)`
                      : activeFinish.id === 'velvet-matte'
                      ? '#1C1E22'
                      : '#5C4033',
                }}
                className="h-44 rounded-xl p-6 flex flex-col justify-between border border-white/20 shadow-inner relative overflow-hidden transition-all duration-300"
              >
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-white/80 z-10">
                  <span>{activeFinish.specCode}</span>
                  <span>{activeFinish.microThickness}</span>
                </div>

                <div className="text-center z-10">
                  <div className="font-serif italic text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                    <span className="text-[#00AEEF]">SUPER</span><span className="text-[#EC008C]">91</span> ARCHITECTURAL SPECIMEN
                  </div>
                  <div className="text-[11px] font-mono text-white/80 mt-1 uppercase tracking-wider">
                    {activeFinish.sensoryTag}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-white/80 z-10">
                  <span>Reflectance: {activeFinish.lightReflectance}</span>
                  <span>Drag slider above to tilt light sweep</span>
                </div>
              </div>

              {/* Technical Specifications Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="text-[10px] text-white/40 uppercase block mb-1">
                    Micro-Deposition Depth
                  </span>
                  <span className="text-white font-medium">{activeFinish.microThickness}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="text-[10px] text-white/40 uppercase block mb-1">
                    Specular Reflectance
                  </span>
                  <span className="text-[#C5A059] font-medium">{activeFinish.lightReflectance}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#9AA3B2] leading-relaxed">
                <strong className="text-white font-mono uppercase text-[11px] block mb-1">
                  Tactile Physics:
                </strong>
                {activeFinish.description}
              </div>

              <div className="pt-2 flex items-center justify-between font-mono text-xs">
                <span className="text-white/50 text-[11px]">
                  Request an unboxing swatch deck with physical samples.
                </span>
                <a
                  href="#hero-products"
                  className="px-4 py-2 rounded-lg bg-[#C5A059] hover:bg-[#D4AF37] text-[#0C0D0E] font-bold tracking-wider uppercase transition-all flex items-center gap-1.5"
                >
                  <span>Apply to Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
