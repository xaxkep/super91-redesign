import React, { useState } from 'react';
import { useExpressDrawer } from '../../context/ExpressDrawerContext';
import confetti from 'canvas-confetti';
import {
  X,
  UploadCloud,
  FileCheck2,
  AlertTriangle,
  Sparkles,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Phone,
  Trash2,
} from 'lucide-react';

export const ExpressOrderDrawer: React.FC = () => {
  const {
    isOpen,
    product,
    selectedTier,
    selectedPaper,
    selectedFinish,
    artworkName,
    artworkSizeMb,
    preflightReport,
    isPreflightModalOpen,
    pincode,
    closeDrawer,
    setArtwork,
    clearArtwork,
    openPreflightModal,
    incrementCart,
  } = useExpressDrawer();

  const [sendViaWhatsApp, setSendViaWhatsApp] = useState(false);
  const [isSuccessState, setIsSuccessState] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !product || !selectedTier || !selectedPaper || !selectedFinish) {
    return null;
  }

  const unitPrice =
    selectedTier.unitPrice * selectedPaper.priceModifier * selectedFinish.priceModifier;
  const baseSubtotal = Math.round(unitPrice * selectedTier.quantity);
  const gst = Math.round(baseSubtotal * 0.18);
  const totalPayable = baseSubtotal + gst;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeMb = parseFloat((file.size / (1024 * 1024)).toFixed(2));
      setArtwork(file.name, sizeMb);
    }
  };

  const handleOrderSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessState(true);
      incrementCart();

      // Confetti using 100% Cyan and 100% Magenta
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#00AEEF', '#EC008C', '#0C0D0E', '#FAF9F5'],
      });
    }, 700);
  };

  const resetAndClose = () => {
    setIsSuccessState(false);
    closeDrawer();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed Backdrop */}
      <div
        onClick={resetAndClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md sm:max-w-lg bg-[#FAF9F5] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-[#141619]/10">
          {/* Drawer Header with Authentic Cyan & Magenta Lockup */}
          <div className="p-5 border-b border-[#141619]/10 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#0C0D0E] flex items-center justify-center p-0.5 border border-white/10">
                <div className="w-full h-full rounded flex overflow-hidden">
                  <div className="w-1/2 h-full bg-[#00AEEF] flex items-center justify-center text-[10px] font-mono font-black text-white">
                    S
                  </div>
                  <div className="w-1/2 h-full bg-[#EC008C] flex items-center justify-center text-[10px] font-mono font-black text-white">
                    91
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-sans font-black text-base leading-tight">
                  <span className="text-[#00AEEF]">SUPER</span>
                  <span className="text-[#EC008C]">91</span>
                  <span className="text-[#141619] ml-1.5 font-bold">Express Order</span>
                </h3>
                <p className="text-[10px] font-mono text-[#6E7787] uppercase">
                  CENTRAL PRESS BOOKING DOCKET
                </p>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="p-1.5 rounded-lg text-[#6E7787] hover:text-[#141619] hover:bg-[#FAF9F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            {isSuccessState ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#00AEEF]/10 text-[#00AEEF] rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif italic text-3xl text-[#141619]">
                  Press Docket Confirmed
                </h4>
                <p className="text-xs text-[#6E7787] max-w-xs mx-auto leading-relaxed font-sans">
                  Your order run for <strong>{product.name}</strong> ({selectedTier.quantity} units) has been allocated to the HP Indigo press queue.
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#141619]/10 text-left text-xs space-y-2 max-w-xs mx-auto font-mono">
                  <div className="flex justify-between">
                    <span className="text-[#9AA3B2]">Docket Ref:</span>
                    <span className="font-bold text-[#141619]">S91-IND-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9AA3B2]">Process Colors:</span>
                    <span className="font-bold text-[#00AEEF]">100% Cyan + <span className="text-[#EC008C]">100% Magenta</span></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9AA3B2]">Dispatch Window:</span>
                    <span className="font-bold text-[#00AEEF]">Tomorrow by 11:00 AM</span>
                  </div>
                </div>
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-lg bg-[#0C0D0E] text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-black transition-colors"
                >
                  Return to Specimen Catalog
                </button>
              </div>
            ) : (
              <>
                {/* Product Summary Header */}
                <div className="flex gap-4 p-4 rounded-xl bg-white border border-[#141619]/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-lg object-cover border border-[#141619]/10"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-mono font-bold text-[#00AEEF] uppercase tracking-wider">
                      {product.category} &bull; {product.edition}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-[#141619] leading-snug">
                      {product.name}
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#141619] mt-1">
                      {selectedTier.quantity} units &bull; ₹{unitPrice.toFixed(2)} / unit
                    </span>
                  </div>
                </div>

                {/* Selected Specifications Breakdown */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold text-[#6E7787] uppercase tracking-wider">
                    Validated Specifications
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-white border border-[#141619]/10">
                      <span className="text-[10px] text-[#9AA3B2] uppercase block">Quantity</span>
                      <strong className="text-[#141619]">{selectedTier.quantity} pcs</strong>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#141619]/10">
                      <span className="text-[10px] text-[#9AA3B2] uppercase block">Caliper Gauge</span>
                      <strong className="text-[#141619] truncate block">{product.caliper}</strong>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#141619]/10 col-span-2">
                      <span className="text-[10px] text-[#9AA3B2] uppercase block">Substrate</span>
                      <strong className="text-[#00AEEF]">{selectedPaper.label}</strong>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#141619]/10 col-span-2">
                      <span className="text-[10px] text-[#9AA3B2] uppercase block">Tactile Finish</span>
                      <strong className="text-[#EC008C]">{selectedFinish.label}</strong>
                    </div>
                  </div>
                </div>

                {/* Step 2: Artwork Upload & Smart Preflight */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="font-bold text-[#6E7787] uppercase tracking-wider">
                      Print-Ready Artwork File
                    </span>
                    <span className="text-[#9AA3B2]">PDF, AI, CDR, TIFF</span>
                  </div>

                  {artworkName ? (
                    <div className="p-4 rounded-xl bg-white border border-[#00AEEF]/40 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center">
                          <FileCheck2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-mono font-bold text-[#141619] truncate max-w-[170px]">
                            {artworkName}
                          </div>
                          <div className="text-[10px] text-[#6E7787] font-mono">
                            {artworkSizeMb} MB &bull; 300 DPI Verified
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={openPreflightModal}
                          className="px-2.5 py-1.5 rounded bg-[#00AEEF] text-white text-[11px] font-mono uppercase tracking-wider hover:bg-[#0097D1] flex items-center gap-1 shadow-2xs font-bold"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>Inspect</span>
                        </button>
                        <button
                          onClick={clearArtwork}
                          className="p-1 text-[#9AA3B2] hover:text-[#EC008C]"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : sendViaWhatsApp ? (
                    <div className="p-4 rounded-xl bg-white border border-[#EC008C]/30 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2 text-[#141619]">
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <span>Artwork to be submitted via WhatsApp after payment.</span>
                      </div>
                      <button
                        onClick={() => setSendViaWhatsApp(false)}
                        className="text-[#00AEEF] font-bold underline"
                      >
                        Upload file
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="border-2 border-dashed border-[#141619]/15 hover:border-[#00AEEF] rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer bg-white hover:bg-[#FAF9F5] transition-all text-center group">
                        <UploadCloud className="w-7 h-7 text-[#9AA3B2] group-hover:text-[#00AEEF] transition-colors mb-1" />
                        <span className="text-xs font-mono font-bold text-[#141619]">
                          Click to select or drag artwork file
                        </span>
                        <span className="text-[10px] font-mono text-[#6E7787] mt-0.5">
                          Automated 300 DPI, 3mm Bleed & CMYK verification
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.cdr,.ai,.psd,.png,.jpg,.tiff"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>

                      <div className="flex items-center justify-between text-[11px] font-mono text-[#6E7787]">
                        <button
                          type="button"
                          onClick={() => setArtwork('SUPER91_Core_Executive_300DPI.pdf', 4.8)}
                          className="text-[#EC008C] hover:underline font-semibold flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3 text-[#EC008C]" />
                          <span>Load sample PDF (Preflight Demo)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSendViaWhatsApp(true)}
                          className="text-[#00AEEF] hover:underline font-bold"
                        >
                          WhatsApp Later
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Step 3: Logistics Docket */}
                <div className="p-4 rounded-xl bg-white border border-[#141619]/10 space-y-1 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#141619]">
                    <span className="flex items-center gap-2 font-bold">
                      <Truck className="w-4 h-4 text-[#00AEEF]" />
                      Destination Docket: {pincode}
                    </span>
                    <span className="text-[#00AEEF] bg-[#00AEEF]/10 px-2 py-0.5 rounded text-[10px] font-bold border border-[#00AEEF]/20">
                      DF ROUTE ACTIVE
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6E7787]">
                    Hyper-local dispatch from Central Production Hub directly to Delivery Franchise.
                  </p>
                </div>

                {/* Real-Time Price Receipt */}
                <div className="p-4 rounded-xl bg-[#0C0D0E] text-white space-y-2 font-mono text-xs border border-white/10 shadow-inner">
                  <div className="flex justify-between text-white/60 text-[11px]">
                    <span>Base Production Subtotal ({selectedTier.quantity} pcs)</span>
                    <span>₹{baseSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-white/60 text-[11px]">
                    <span>GST (18% Input Tax Credit Eligible)</span>
                    <span>₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-white/60 text-[11px]">
                    <span>Franchise Courier Handling</span>
                    <span className="text-[#00AEEF] font-bold">COMPLIMENTARY</span>
                  </div>
                  <div className="pt-2 border-t border-white/15 flex justify-between items-baseline text-sm">
                    <span className="text-[#EC008C] font-bold uppercase tracking-wider text-xs">
                      Total Payable
                    </span>
                    <span className="font-mono font-bold text-xl text-white">
                      ₹{totalPayable.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Actions */}
          {!isSuccessState && (
            <div className="p-5 border-t border-[#141619]/10 bg-white space-y-2">
              <button
                onClick={handleOrderSubmit}
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#00AEEF] to-[#0097D1] hover:from-[#0097D1] hover:to-[#007AA8] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-cyan-glow transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting Docket to CPH...</span>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Authorize & Pay ₹{totalPayable.toLocaleString('en-IN')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-[#9AA3B2] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" /> Free Reprint Assurance
                </span>
                <span>•</span>
                <span>ISO 9001:2015 Plant Protocol</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
