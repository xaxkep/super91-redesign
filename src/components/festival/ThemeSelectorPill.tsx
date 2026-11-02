import React, { useState } from 'react';
import { useFestivalTheme } from '../../context/FestivalThemeContext';
import { FESTIVAL_THEMES, type ThemeKey } from '../../data/festivalThemes';
import { Palette, Check, SlidersHorizontal, X } from 'lucide-react';

export const ThemeSelectorPill: React.FC = () => {
  const { themeKey, setThemeKey } = useFestivalTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const themeList: { key: ThemeKey; label: string; sub: string; dotColor: string }[] = [
    { key: 'diwali', label: 'Diwali Festive Edition', sub: 'Deep Aubergine & Warm Heritage Gold', dotColor: 'bg-[#C5A059]' },
    { key: 'newyear', label: 'Corporate 2026 Edition', sub: 'Midnight Slate & Precision Emerald', dotColor: 'bg-emerald-500' },
    { key: 'smartpress', label: 'Smartpress Minimalist', sub: 'Obsidian & Digital Offset Blue', dotColor: 'bg-blue-500' },
    { key: 'wedding', label: 'Haute Wedding & Bespoke', sub: 'Artisanal Deckle & Rose Gold Foil', dotColor: 'bg-[#B76E79]' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2 font-mono">
      {/* Expanded Theme Switcher Panel */}
      {isExpanded && (
        <div className="bg-[#0C0D0E]/95 backdrop-blur-md text-[#FAF9F5] p-4 rounded-xl shadow-2xl border border-white/20 w-80 animate-in fade-in slide-in-from-bottom-3 duration-150">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Festival Theme Engine
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white/40 hover:text-white p-1 rounded hover:bg-white/10"
              aria-label="Close theme panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#9AA3B2] mb-3 leading-relaxed font-sans">
            Select a seasonal campaign theme to dynamically adapt storewide palettes, curated collections, and promotional packaging offers:
          </p>

          <div className="space-y-1.5">
            {themeList.map((item) => {
              const isSelected = themeKey === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setThemeKey(item.key);
                    setIsExpanded(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-all btn-tactile ${
                    isSelected
                      ? 'bg-white/15 text-white border border-[#00AEEF] shadow-sm'
                      : 'hover:bg-white/5 text-white/60 hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.dotColor} shrink-0`} />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold tracking-tight font-sans text-white">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-white/40 font-mono">{item.sub}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Open festival theme switcher"
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#0C0D0E]/95 backdrop-blur-md text-white shadow-xl hover:bg-black active:scale-98 transition-all border border-white/20 group text-xs font-mono uppercase tracking-wider btn-tactile"
      >
        <span className="w-2 h-2 rounded-full bg-[#EC008C] animate-pulse" />
        <SlidersHorizontal className="w-3.5 h-3.5 text-[#00AEEF] group-hover:rotate-45 transition-transform" />
        <span>
          Theme: <strong className="text-white font-bold">{FESTIVAL_THEMES[themeKey].name.split(' ')[0]}</strong>
        </span>
      </button>
    </div>
  );
};
