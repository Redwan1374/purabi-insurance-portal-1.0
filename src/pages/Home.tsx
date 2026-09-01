import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { QuickQuote } from '../components/home/QuickQuote';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { ClaimTrackingCTA } from '../components/home/ClaimTrackingCTA';
import { TrustedPartners } from '../components/home/TrustedPartners';
import { WorkingProcess } from '../components/home/WorkingProcess';
import { NewsEvents } from '../components/home/NewsEvents';
import { MobileAppSection } from '../components/home/MobileAppSection';

interface HomePageProps {
  onOpenQuoteModal: (data?: any) => void;
  onOpenClaimModal: () => void;
  onOpenVideoModal: () => void;
}

export const Home: React.FC<HomePageProps> = ({
  onOpenQuoteModal,
  onOpenClaimModal,
  onOpenVideoModal,
}) => {
  useEffect(() => {
    document.title = 'Purabi General Insurance | Protecting Your Future';
    window.scrollTo(0, 0);
  }, []);

  const handleQuickQuoteSubmit = (data: { category: string; name: string; mobile: string }) => {
    onOpenQuoteModal(data);
  };

  const handleDiscoverMore = () => {
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* SECTION 1 — HERO */}
      <Hero
        onDiscoverMore={handleDiscoverMore}
        onWatchVideo={onOpenVideoModal}
      />

      {/* SECTION 2 — QUICK INSURANCE QUOTE */}
      <QuickQuote
        onSubmitQuote={handleQuickQuoteSubmit}
      />

      {/* SECTION 3 — CATEGORIES OF INSURANCE */}
      <CategoriesSection
        onSelectCategory={(catName) => onOpenQuoteModal({ category: catName })}
      />

      {/* SECTION 4 — CLAIM TRACKING CTA */}
      <ClaimTrackingCTA
        onOpenClaimModal={onOpenClaimModal}
      />

      {/* SECTION 5 — TRUSTED PARTNERS */}
      <TrustedPartners />

      {/* SECTION 6 — WORKING PROCESS */}
      <WorkingProcess />

      {/* SECTION 7 — NEWS & EVENTS */}
      <NewsEvents />

      {/* SECTION 8 — MOBILE APP */}
      <MobileAppSection />
    </div>
  );
};
