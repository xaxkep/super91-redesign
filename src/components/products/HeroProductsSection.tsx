import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HERO_PRODUCTS, ADDITIONAL_DISCOVERY_PRODUCTS, type Product } from '../../data/mockCatalog';
import { HeroProductCard } from './HeroProductCard';

const COMBINED_CATALOG: Product[] = [...HERO_PRODUCTS, ...ADDITIONAL_DISCOVERY_PRODUCTS];

const BATCH_SIZE = 6;

export const HeroProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [streamCycle, setStreamCycle] = useState(1);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Visiting Cards',
    'Rigid & Mailer Packaging',
    'Editorial Brochures & Flyers',
    'Architectural Displays & Standees',
    '2026 Executive Planners',
    'Technical Vinyl & Foil Labels',
    'Executive Merchandising Suites',
  ];

  // Base pool for the active category
  const activePool =
    activeCategory === 'All'
      ? COMBINED_CATALOG
      : COMBINED_CATALOG.filter((p) => p.category === activeCategory);

  // Initialize or reset when category changes
  useEffect(() => {
    setStreamCycle(1);
    setDisplayedProducts(activePool.slice(0, BATCH_SIZE));
  }, [activeCategory]);

  // Infinite loader function
  const loadNextBatch = useCallback(() => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);

    setTimeout(() => {
      setDisplayedProducts((prev) => {
        const currentCount = prev.length;
        const poolLen = activePool.length;
        if (poolLen === 0) return prev;

        // Grab next items from pool, cycling infinitely if needed
        const nextItems: Product[] = [];
        for (let i = 0; i < BATCH_SIZE; i++) {
          const rawIndex = (currentCount + i) % poolLen;
          const cycleNumber = Math.floor((currentCount + i) / poolLen) + 1;
          const baseItem = activePool[rawIndex];

          const streamItem: Product = {
            ...baseItem,
            id: `${baseItem.id}-cycle-${cycleNumber}-${currentCount + i}`,
            edition: baseItem.edition,
          };
          nextItems.push(streamItem);
        }

        return [...prev, ...nextItems];
      });

      setStreamCycle((prev) => prev + 1);
      setIsLoadingMore(false);
    }, 350);
  }, [isLoadingMore, activePool]);

  // IntersectionObserver for true infinite scroll on sentinel
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && !isLoadingMore) {
          loadNextBatch();
        }
      },
      {
        root: null,
        rootMargin: '300px', // Proactive fetch before user reaches exact bottom
        threshold: 0.1,
      }
    );

    observer.observe(sentinel);
    return () => {
      observer.disconnect();
    };
  }, [loadNextBatch, isLoadingMore]);

  return (
    <section id="hero-products" className="py-20 bg-[#FAF9F5] border-b border-[#141619]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#141619]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0C0D0E] text-white text-[10px] font-mono tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
              <span>COMMERCIAL PRINT CATALOG</span>
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl text-[#141619] tracking-tight">
              Direct-to-Cart Print Catalog
            </h2>
            <p className="text-sm text-[#6E7787] mt-2 max-w-2xl font-normal leading-relaxed">
              Configure quantity tiers, paper stocks, and tactile finishes directly on each product card. Instant live pricing with zero hidden prepress setup fees.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#141619] bg-white px-3 py-2 rounded-lg border border-[#141619]/10 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>
                Showing <strong className="font-bold">{displayedProducts.length}</strong> Products
              </span>
            </div>
          </div>
        </div>

        {/* Architectural Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-8 no-scrollbar">
          {categories.map((tab) => {
            const isActive = activeCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all btn-tactile ${
                  isActive
                    ? 'bg-[#0C0D0E] text-white font-bold shadow-xs'
                    : 'bg-white text-[#6E7787] hover:text-[#141619] border border-[#141619]/10 hover:border-[#00AEEF]/40'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Specimen Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <HeroProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Infinite Scroll Sentinel & Subtle Status Loader */}
        <div
          ref={sentinelRef}
          className="mt-14 pt-8 border-t border-[#141619]/10 flex flex-col items-center justify-center min-h-[60px]"
        >
          {isLoadingMore && (
            <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-[#141619]/10 shadow-sm font-mono text-xs text-[#141619]">
              <div className="flex gap-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#EC008C] animate-bounce [animation-delay:0.15s]" />
                <span className="w-2 h-2 rounded-full bg-[#0C0D0E] animate-bounce [animation-delay:0.3s]" />
              </div>
              <span className="text-[#6E7787]">Loading more products...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};