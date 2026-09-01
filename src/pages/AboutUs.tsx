import React, { useEffect } from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { AboutCompany } from '../components/about/AboutCompany';
import { ClaimTrackingCTA } from '../components/home/ClaimTrackingCTA';
import { WhyChooseUs } from '../components/about/WhyChooseUs';
import { TrustedPartners } from '../components/home/TrustedPartners';

interface AboutUsPageProps {
  onOpenClaimModal: () => void;
  onOpenVideoModal: () => void;
}

export const AboutUs: React.FC<AboutUsPageProps> = ({
  onOpenClaimModal,
  onOpenVideoModal,
}) => {
  useEffect(() => {
    document.title = 'About Us | Purabi General Insurance';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* SECTION 1 — ABOUT HERO */}
      <AboutHero />

      {/* SECTION 2 — ABOUT COMPANY */}
      <AboutCompany />

      {/* SECTION 3 — CLAIM TRACKING CTA (Consistent with Home) */}
      <ClaimTrackingCTA onOpenClaimModal={onOpenClaimModal} />

      {/* SECTION 4 — WHY CHOOSE US */}
      <WhyChooseUs onWatchVideo={onOpenVideoModal} />

      {/* SECTION 5 — TRUSTED PARTNERS (Reused Component) */}
      <TrustedPartners />
    </div>
  );
};
