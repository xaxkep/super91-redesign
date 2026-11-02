import React, { useState, useEffect } from 'react';
import { useFestivalTheme } from '../../context/FestivalThemeContext';
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const TopAnnouncementStrip: React.FC = () => {
  const { theme } = useFestivalTheme();
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 38, seconds: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0C0D0E] text-[#9AA3B2] text-[11px] font-mono tracking-tight py-2 px-4 border-b border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Dispatch Urgency & Press Topology with Cyan Pulse */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap sm:flex-nowrap">
          <span className="flex items-center gap-1.5 text-white font-medium shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse shadow-cyan-glow" />
            <span className="text-[#00AEEF] font-bold">CPH</span> PRESS DISPATCH
          </span>
          <span className="text-white/20 hidden sm:inline">/</span>
          <span className="text-white/80 hidden lg:inline truncate max-w-xs">
            <strong className="text-[#00AEEF]">{theme.name.toUpperCase()}</strong>: {theme.seasonLabel}
          </span>
          <span className="text-white/20 hidden sm:inline">/</span>
          <span className="text-[#9AA3B2] shrink-0">
            Cutoff in{' '}
            <strong className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </strong>{' '}
            <span className="hidden sm:inline">for Next-Day Delivery</span>
          </span>
        </div>

        {/* Right: Active Seasonal Allowance & Studio Proof Link */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px] shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[#9AA3B2] hidden sm:inline">Code:</span>
            <span className="text-[#EC008C] font-bold tracking-wider bg-[#EC008C]/15 px-2 py-0.5 rounded border border-[#EC008C]/30 text-[10px] sm:text-xs">
              {theme.activeCoupon}
            </span>
            <span className="hidden md:inline text-white/50">({theme.couponDiscount})</span>
          </div>

          <span className="hidden md:inline text-white/20">|</span>

          <a
            href="#ai-print-advisor"
            className="hidden md:inline-flex items-center gap-1 text-[#00AEEF] hover:text-white transition-colors"
          >
            <span>Specification Studio</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
