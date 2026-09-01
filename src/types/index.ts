export interface InsuranceCategory {
  id: string;
  name: string;
  iconName: string;
  description?: string;
  badge?: string;
  image?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  titleBn?: string;
  date: string;
  category: string;
  description: string;
  image: string;
  readTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  type: string;
  badgeColor?: string;
}

export interface QuickQuoteFormData {
  category: string;
  name: string;
  mobile: string;
}

export interface HealthPlanFormData {
  recipientType: 'Self' | 'Couple' | 'Family' | 'Parents';
  name: string;
  mobile: string;
  age: string;
  coverageAmount: string;
  agreeTerms: boolean;
}
