import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Award } from 'lucide-react';

export const TrustGuaranteeSection: React.FC = () => {
  const guarantees = [
    {
      code: 'SPEC-01',
      title: 'Free Reprint Guarantee',
      desc: 'In the event of guillotine cut deflection or deltaE color shift exceeding 1.2, we reprint your run immediately with express priority at zero fee.',
    },
    {
      code: 'SPEC-02',
      title: 'ISO 9001 Certified Press',
      desc: 'Calibrated color management systems with continuous spectrophotometer density profiling across Heidelberg and HP Indigo presses.',
    },
    {
      code: 'SPEC-03',
      title: 'PF / DF Hub Topology',
      desc: 'Dual-hub manufacturing in Mumbai & Delhi NCR mapped to local Delivery Franchises (DF) for guaranteed 24-48h dispatch across tier 1 & 2 pin codes.',
    },
    {
      code: 'SPEC-04',
      title: 'Automated Tax Compliance',
      desc: 'Direct GST tax invoices with structured line items and HSN codes enabling instantaneous B2B Input Tax Credit (ITC) claim reconciliation.',
    },
  ];

  return (
    <section className="py-16 bg-[#0C0D0E] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-2 font-mono text-xs">
              <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest">
                {item.code}
              </span>
              <h4 className="font-sans font-bold text-sm text-white">{item.title}</h4>
              <p className="text-xs text-[#9AA3B2] leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
