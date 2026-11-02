import React from 'react';
import { Phone, Mail, MapPin, Building, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090A] text-[#9AA3B2] text-xs font-mono border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column with Cyan & Magenta Wordmark */}
          <div className="lg:col-span-2 space-y-4">
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
              <div className="font-sans font-black text-xl tracking-tight leading-none">
                <span className="text-[#00AEEF]">SUPER</span>
                <span className="text-[#EC008C]">91</span>
              </div>
              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/10 text-white/70 border border-white/10">
                PRINTS24 INDUSTRIAL
              </span>
            </div>
            <p className="text-xs text-[#6E7787] leading-relaxed max-w-sm font-sans">
              India's premier commercial web-to-print and custom packaging infrastructure. Powered by 100% Cyan and 100% Magenta process calibration, industrial digital offset presses, and hyper-local franchise dispatch.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-white border border-white/10 text-xs font-mono hover:bg-white/10 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>WhatsApp Bulk Quotations Desk</span>
              </a>
            </div>
          </div>

          {/* Catalog Index */}
          <div>
            <h4 className="font-mono font-bold text-white text-xs uppercase tracking-wider mb-3">
              Production Catalog
            </h4>
            <ul className="space-y-1 text-[#6E7787]">
              <li><a href="#hero-products" className="py-1 inline-flex items-center hover:text-white transition-colors">Tactile Velvet Cards (400 GSM)</a></li>
              <li><a href="#hero-products" className="py-1 inline-flex items-center hover:text-white transition-colors">Corrugated Shipping Mailers</a></li>
              <li><a href="#hero-products" className="py-1 inline-flex items-center hover:text-white transition-colors">Retractable Standees (6×3 ft)</a></li>
              <li><a href="#hero-products" className="py-1 inline-flex items-center hover:text-white transition-colors">Scored Marketing Catalogues</a></li>
              <li><a href="#hero-products" className="py-1 inline-flex items-center hover:text-white transition-colors">Polymeric Die-Cut Labels</a></li>
              <li><a href="#hero-products" className="py-1 inline-flex items-center hover:text-white transition-colors">2026 Executive Planners</a></li>
            </ul>
          </div>

          {/* Technical Laboratory */}
          <div>
            <h4 className="font-mono font-bold text-white text-xs uppercase tracking-wider mb-3">
              Press Finishes Lab
            </h4>
            <ul className="space-y-1 text-[#6E7787]">
              <li><a href="#tactile-lab" className="py-1 inline-flex items-center hover:text-white transition-colors">Velvet Soft-Touch BOPP</a></li>
              <li><a href="#tactile-lab" className="py-1 inline-flex items-center hover:text-white transition-colors">Scodix Ultra 3D Polymer (100μm)</a></li>
              <li><a href="#tactile-lab" className="py-1 inline-flex items-center hover:text-white transition-colors">Raised Vacuum Gold Foil (24K)</a></li>
              <li><a href="#tactile-lab" className="py-1 inline-flex items-center hover:text-white transition-colors">Finnish Virgin Kraft Pulp</a></li>
              <li><a href="#ai-print-advisor" className="py-1 inline-flex items-center hover:text-white transition-colors">Specification Studio Docket</a></li>
            </ul>
          </div>

          {/* Enterprise & Franchise */}
          <div>
            <h4 className="font-mono font-bold text-white text-xs uppercase tracking-wider mb-3">
              Franchise & Enterprise
            </h4>
            <ul className="space-y-1 text-[#6E7787]">
              <li><a href="#" className="py-1 inline-flex items-center gap-1 hover:text-white transition-colors">Production Franchise (PF) <ArrowUpRight className="w-3 h-3 text-white/30" /></a></li>
              <li><a href="#" className="py-1 inline-flex items-center gap-1 hover:text-white transition-colors">Delivery Franchise (DF) <ArrowUpRight className="w-3 h-3 text-white/30" /></a></li>
              <li><a href="#" className="py-1 inline-flex items-center hover:text-white transition-colors">Corporate Gifting Desk</a></li>
              <li><a href="#" className="py-1 inline-flex items-center hover:text-white transition-colors">GST Tax Credit Documentation</a></li>
              <li><a href="#" className="py-1 inline-flex items-center hover:text-white transition-colors">Terms of Press & Reprint Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#6E7787]">
          <div>
            © {new Date().getFullYear()} Super91 (Prints24). Commercial Web-to-Print Infrastructure.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/70">
              <Building className="w-3.5 h-3.5 text-[#00AEEF]" /> CPH Press Hubs: Mumbai (West) & Delhi NCR (North)
            </span>
            <span>•</span>
            <span>ISO 9001:2015 Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
