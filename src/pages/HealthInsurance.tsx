import React, { useEffect } from 'react';
import { HealthHero } from '../components/health/HealthHero';
import { HealthPlanSelector } from '../components/health/HealthPlanSelector';
import { HealthFAQ } from '../components/health/HealthFAQ';
import { HealthPlanFormData } from '../types';

interface HealthInsurancePageProps {
  onOpenQuoteModal: (data?: any) => void;
}

export const HealthInsurance: React.FC<HealthInsurancePageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    document.title = 'Health Insurance | Purabi General Insurance';
    window.scrollTo(0, 0);
  }, []);

  const handleShowPlans = (formData: HealthPlanFormData) => {
    onOpenQuoteModal({
      category: `Health Insurance (${formData.recipientType})`,
      name: formData.name,
      mobile: formData.mobile,
      recipientType: formData.recipientType,
      age: formData.age,
      coverageAmount: formData.coverageAmount,
    });
  };

  return (
    <div className="w-full">
      {/* SECTION 1 — HEALTH HERO */}
      <HealthHero />

      {/* SECTION 2 — HEALTH PLAN SELECTOR */}
      <HealthPlanSelector onShowPlans={handleShowPlans} />

      {/* SECTION 3 — FAQ ACCORDION */}
      <HealthFAQ />
    </div>
  );
};
