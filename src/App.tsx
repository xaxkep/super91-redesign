import React from 'react';
import { FestivalThemeProvider } from './context/FestivalThemeContext';
import { ExpressDrawerProvider } from './context/ExpressDrawerContext';
import { TopAnnouncementStrip } from './components/layout/TopAnnouncementStrip';
import { SmartNavbar } from './components/layout/SmartNavbar';
import { CategoryHorizon } from './components/layout/CategoryHorizon';
import { FestivalHeroBanner } from './components/festival/FestivalHeroBanner';
import { FestivalCuratedShowcase } from './components/festival/FestivalCuratedShowcase';
import { ThemeSelectorPill } from './components/festival/ThemeSelectorPill';
import { HeroProductsSection } from './components/products/HeroProductsSection';
import { ExpressOrderDrawer } from './components/products/ExpressOrderDrawer';
import { AiPrintAdvisor } from './components/ai/AiPrintAdvisor';
import { SmartPreflightModal } from './components/ai/SmartPreflightModal';
import { SameDayExpressRibbon } from './components/discovery/SameDayExpressRibbon';
import { TactileFinishLab } from './components/discovery/TactileFinishLab';
import { IndustryKitsSection } from './components/discovery/IndustryKitsSection';
import { LiveOrderTicker } from './components/discovery/LiveOrderTicker';
import { TrustGuaranteeSection } from './components/discovery/TrustGuaranteeSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <FestivalThemeProvider>
      <ExpressDrawerProvider>
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
          {/* 1. Top Announcement Bar (Urgency Countdown & Active Seasonal Coupon) */}
          <TopAnnouncementStrip />

          {/* 2. Smart Navigation Header (Search Autocomplete, Pincode Speed, Cart Trigger) */}
          <SmartNavbar />

          {/* 3. FNP-Style Horizontal Category Horizon Bar */}
          <CategoryHorizon />

          <main className="flex-1">
            {/* 4. Adaptive Festival Hero Showcase + Instant Quote Estimator */}
            <FestivalHeroBanner />

            {/* 4b. Dynamic Festival Curated Collection Grid (High-Res Images & 1-Click Buy) */}
            <div id="festival-showcase">
              <FestivalCuratedShowcase />
            </div>

            {/* 5. Direct-to-Cart Hero Products Grid with True Infinite Scroll Engine */}
            <HeroProductsSection />

            {/* 6. Smartpress-Inspired AI Print Advisor (Smart Match Specification Matcher) */}
            <AiPrintAdvisor />

            {/* 7. Same-Day Express Dispatch Ribbon (24-Hour Dispatch Cutoff) */}
            <SameDayExpressRibbon />

            {/* 8. Tactile Finishes Laboratory (Velvet, Spot UV, Gold Foil, Kraft Eco-board) */}
            <TactileFinishLab />

            {/* 9. Curated Turnkey Industry Starter Suites */}
            <IndustryKitsSection />

            {/* 10. Social Proof Ticker Stream & Verified Customer Reviews */}
            <LiveOrderTicker />

            {/* 11. Press Facility Guarantees & ISO Certifications */}
            <TrustGuaranteeSection />
          </main>

          {/* 12. Full Commercial Web-to-Print Footer */}
          <Footer />

          {/* Slide-Out Express Order Drawer */}
          <ExpressOrderDrawer />

          {/* Smart Preflight Inspector Modal */}
          <SmartPreflightModal />

          {/* Interactive Floating Festival Theme Switcher Pill */}
          <ThemeSelectorPill />
        </div>
      </ExpressDrawerProvider>
    </FestivalThemeProvider>
  );
};

export default App;
