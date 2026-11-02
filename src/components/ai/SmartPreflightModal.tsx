import React, { useState } from 'react';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ZoomIn,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const SmartPreflightModal: React.FC = () => {
  const {
    isPreflightModalOpen,
    closePreflightModal,
    artworkName,
    selectedFinish,
  } = useExpressDrawer();

  const [activeInspectionTab, setActiveInspectionTab] = useState<'texture' | 'bleed' | 'resolution' | 'cmyk'>('texture');

  if (!isPreflightModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dimmed Backdrop */}
      <div
        onClick={closePreflightModal}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
      />

      <div className="bg-[#FAF9F5] rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-[#141619]/15 relative z-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#141619]/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0C0D0E] text-[#C5A059] flex items-center justify-center font-mono font-bold text-xs">
              PF
            </div>
            <div>
              <h3 className="font-sans font-bold text-base text-[#141619] leading-tight">
                Preflight Inspection Station
              </h3>
              <p className="text-[11px] font-mono text-[#6E7787]">
                {artworkName || 'Sample-Artwork-300DPI.pdf'} • ISO 12647-2 Compliance Check
              </p>
            </div>
          </div>
          <button
            onClick={closePreflightModal}
            className="p-1.5 rounded-lg text-[#6E7787] hover:text-[#141619] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 my-5 border-b border-[#141619]/10 pb-3 overflow-x-auto font-mono text-xs">
          {[
            { id: 'texture', label: '1. 3D Tactile Sweep' },
            { id: 'bleed', label: '2. 3mm Guillotine Bleed' },
            { id: 'resolution', label: '3. 300 DPI Resolution' },
            { id: 'cmyk', label: '4. FOGRA39 CMYK Gamut' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveInspectionTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all uppercase tracking-wider text-[11px] ${
                activeInspectionTab === tab.id
                  ? 'bg-[#0C0D0E] text-white font-bold'
                  : 'bg-white text-[#6E7787] hover:text-[#141619] border border-[#141619]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Inspection Canvas */}
        <div className="space-y-4">
          {activeInspectionTab === 'texture' && (
            <div className="space-y-3">
              <div className="relative h-60 rounded-xl bg-[#0C0D0E] flex items-center justify-center p-6 spot-uv-shimmer border border-white/10 shadow-inner overflow-hidden">
                <div className="text-center space-y-2 relative z-10 font-mono">
                  <div className="inline-block px-3 py-1 rounded bg-white/10 text-[#C5A059] text-[10px] uppercase font-bold tracking-widest border border-white/15">
                    {selectedFinish?.label || '3D Raised Scodix Polymer Finish'}
                  </div>
                  <div className="font-serif italic text-2xl sm:text-3xl text-white tracking-wide metallic-gold-foil">
                    SUPER91 SPECIMEN
                  </div>
                  <p className="text-[11px] text-white/60 max-w-sm mx-auto font-sans leading-relaxed">
                    Digital light tilt simulation: Verifying polymer deposition height and 24K hot foil vacuum bonding registration.
                  </p>
                </div>
              </div>
              <div className="text-xs font-mono text-[#6E7787] bg-white p-3 rounded-xl border border-[#141619]/10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Micro-embossing registration accuracy verified to within 0.05mm press tolerance.</span>
              </div>
            </div>
          )}

          {activeInspectionTab === 'bleed' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="relative h-60 rounded-xl bg-white border-2 border-dashed border-rose-400 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] text-rose-600 font-bold uppercase">
                  <span>◀ 3.0mm Outer Bleed Trim Line ▶</span>
                  <span className="bg-rose-50 px-2 py-0.5 rounded border border-rose-200">Hydraulic Blade Cut</span>
                </div>
                <div className="m-auto border-2 border-emerald-600 bg-emerald-50/50 p-5 rounded-lg text-center">
                  <span className="text-xs font-bold text-emerald-900 block uppercase tracking-wider">
                    Safe Typography & Logo Perimeter
                  </span>
                  <p className="text-[11px] text-emerald-700 mt-1 font-sans">
                    All vital graphic elements are safely nestled 4.0mm inside the final trim boundary.
                  </p>
                </div>
                <div className="text-center text-[10px] text-[#9AA3B2]">
                  Trim Size: 89.0mm × 54.0mm • Document Bleed Canvas: 95.0mm × 60.0mm
                </div>
              </div>
              <div className="text-xs font-mono text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Bleed Check: PASSED. Zero risk of white unprinted edges after guillotine finishing.</span>
              </div>
            </div>
          )}

          {activeInspectionTab === 'resolution' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-5 rounded-xl bg-white border border-[#141619]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#6E7787] uppercase">Raster Graphics Resolution</span>
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    300.4 DPI (Press Ready)
                  </span>
                </div>
                <div className="w-full bg-[#FAF9F5] h-2 rounded-full overflow-hidden border border-[#141619]/10">
                  <div className="bg-emerald-600 h-full w-full" />
                </div>
                <div className="text-[11px] text-[#6E7787] font-sans leading-relaxed">
                  Every embedded bitmap exceeds the 300 DPI industry standard. Output verified for continuous-tone liquid electro-ink deposition.
                </div>
              </div>
            </div>
          )}

          {activeInspectionTab === 'cmyk' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-5 rounded-xl bg-white border border-[#141619]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#6E7787] uppercase">Color Gamut Calibration</span>
                  <span className="font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    ISO Coated v2 (FOGRA39)
                  </span>
                </div>
                <div className="text-[11px] text-[#6E7787] font-sans leading-relaxed">
                  Automatic gamut remapping: Out-of-gamut screen RGB phosphors have been translated into ink saturation values with deltaE &lt; 1.2 fidelity.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-4 border-t border-[#141619]/10 flex items-center justify-between font-mono text-xs">
          <span className="text-emerald-800 flex items-center gap-1.5 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Preflight Docket: Verified 100/100
          </span>
          <button
            onClick={closePreflightModal}
            className="px-4 py-2 rounded-lg bg-[#0C0D0E] text-white font-mono uppercase tracking-wider text-xs hover:bg-black transition-colors flex items-center gap-1.5"
          >
            <span>Confirm & Return</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
