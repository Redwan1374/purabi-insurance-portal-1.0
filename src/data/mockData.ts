import { InsuranceCategory, NewsItem, FAQItem, BenefitItem, ProcessStep } from '../types';

export const PRIMARY_BRAND_COLOR = '#B6422A';

export const COMPANY_INFO = {
  name: 'Purabi General Insurance Co. Ltd.',
  shortName: 'PGICL',
  establishedYear: '1988',
  incorporationDate: 'June 29, 1988',
  address: 'Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000.',
  email: 'purabinsurance@gmail.com',
  phone: '+880 1714-044146',
  hotline: '16254',
  officeHours: 'Sunday to Thursday : 10 AM to 6 PM',
  copyright: 'Copyright © 360D Soul Limited 2025. All rights reserved.',
};

export const QUICK_QUOTE_CATEGORIES: InsuranceCategory[] = [
  { id: 'health', name: 'Health', iconName: 'HeartPulse' },
  { id: 'car', name: 'Car', iconName: 'Car' },
  { id: 'travel', name: 'Travel', iconName: 'Plane' },
  { id: 'life', name: 'Life', iconName: 'ShieldPlus' },
  { id: 'marine', name: 'Marine', iconName: 'Ship' },
  { id: 'engineering', name: 'Engineering', iconName: 'HardHat' },
  { id: 'more', name: 'More', iconName: 'Plus' },
];

export const MAIN_INSURANCE_CATEGORIES = [
  {
    id: 'fire',
    title: 'Fire Insurance',
    description: 'Safeguard your commercial properties, industrial factories, and residential assets against unforeseen fire incidents and allied perils.',
    iconType: 'flame',
    color: '#E05338',
  },
  {
    id: 'health',
    title: 'Health Insurance',
    description: 'Comprehensive medical protection and cashless hospitalization coverage designed to secure you and your loved ones from high healthcare costs.',
    iconType: 'heart',
    color: '#34A853',
  },
  {
    id: 'motor',
    title: 'Motor Insurance',
    description: 'Complete bumper-to-bumper vehicle coverage against accidental damage, theft, third-party liability, and natural disasters across Bangladesh.',
    iconType: 'car',
    color: '#1A73E8',
  },
  {
    id: 'marine',
    title: 'Marine Insurance',
    description: 'End-to-end cargo, transit, and hull protection covering maritime imports, exports, and inland transit perils reliably.',
    iconType: 'ship',
    color: '#FBBC04',
  },
];

export const TRUSTED_PARTNERS = [
  { id: 'p1', name: 'Grameenphone', industry: 'Telecommunications', symbol: 'GP' },
  { id: 'p2', name: 'Beximco Pharmaceuticals', industry: 'Pharma & Industrial', symbol: 'BX' },
  { id: 'p3', name: 'Square Group', industry: 'Conglomerate', symbol: 'SQ' },
  { id: 'p4', name: 'Apex Footwear', industry: 'Footwear & Export', symbol: 'AP' },
  { id: 'p5', name: 'Walton Hi-Tech', industry: 'Electronics', symbol: 'WL' },
  { id: 'p6', name: 'PRAN-RFL Group', industry: 'Agro & Consumer Goods', symbol: 'PR' },
  { id: 'p7', name: 'BSRM Steels', industry: 'Manufacturing', symbol: 'BS' },
  { id: 'p8', name: 'The City Bank Ltd.', industry: 'Banking & Finance', symbol: 'CB' },
];

export const WORKING_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Get A Quotation',
    description: 'Answer a couple of questions, we\'ll provide accurate live quotes tailored to your exact coverage requirements.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80',
  },
  {
    step: '02',
    title: 'Complete the Application',
    description: 'Fill out standard minimal paperwork online or via agent support with fast KYC and immediate verification.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80',
  },
  {
    step: '03',
    title: 'Get your Insurance',
    description: 'Receive instant digital policy documents with 24/7 claim assistance, verified security, and hassle-free backing.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80',
  },
];

export const NEWS_AND_EVENTS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'পূরবী জেনারেল ইন্স্যুরেন্সের ৩৫তম বার্ষিক সাধারণ সভা সফলভাবে অনুষ্ঠিত',
    titleBn: 'Purabi General Insurance 35th Annual General Meeting Held Successfully',
    date: '18 July 2024',
    category: 'Corporate Notice',
    description: 'কোম্পানির ৩৫তম বার্ষিক সাধারণ সভায় শেয়ারহোল্ডারদের জন্য ১০% নগদ লভ্যাংশ অনুমোদন ও আগামী অর্থবছরের উন্নয়ন পরিকল্পনা ঘোষণা করা হয়েছে।',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    readTime: '3 min read',
  },
  {
    id: 'news-2',
    title: 'PGICL Enhances Automated Digital Claim Settlement Portal',
    titleBn: 'ডিজিটাল ক্লেইম সেটেলমেন্ট পোর্টাল আধুনিকায়ন করেছে পিজিআইসিএল',
    date: '05 August 2024',
    category: 'Innovation',
    description: 'Purabi General Insurance introduces a seamless digital claim submission system, shortening turnaround time to under 48 hours for verified health and motor claims.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    readTime: '4 min read',
  },
  {
    id: 'news-3',
    title: 'নবায়নযোগ্য জ্বালানি ও শিল্প খাতের জন্য নতুন ঝুঁকি ব্যবস্থাপনা পলিসি উন্মোচন',
    titleBn: 'Specialized Risk Management Policy Unveiled for Renewable Energy',
    date: '22 August 2024',
    category: 'New Products',
    description: 'বাংলাদেশের দ্রুত বর্ধনশীল সৌরবিদ্যুৎ ও টেকসই শিল্প কারখানার সুরক্ষায় আন্তর্জাতিক মানসম্মত বিশেষায়িত বীমা প্যাকেজ চালু করেছে পূরবী জেনারেল ইন্স্যুরেন্স।',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    readTime: '3 min read',
  },
];

export const HEALTH_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Health Insurance?',
    answer: 'Health Insurance is a legally binding risk-management policy where Purabi General Insurance Co. Ltd. covers medical expenses incurred due to illnesses, injuries, surgery, or hospitalization, providing financial protection and cashless network support.',
  },
  {
    id: 'faq-2',
    question: 'Why do you need a Health Insurance?',
    answer: 'Rising medical expenses and unexpected critical treatments can cause severe financial strain. Health insurance ensures access to top-tier private hospitals, diagnostic centers, and intensive care treatments without depleting your hard-earned family savings.',
  },
  {
    id: 'faq-3',
    question: 'Which Health Insurance policies are available now?',
    answer: 'PGICL offers individual health plans, family floater plans, corporate group health schemes, overseas emergency travel-health plans, and specialized senior citizen coverage.',
  },
  {
    id: 'faq-4',
    question: 'Individual Plan vs Family Floater Plan, what is the difference?',
    answer: 'An Individual Plan provides a dedicated sum insured for one specific person. A Family Floater Plan shares a single comprehensive sum insured across all family members (spouse, dependent children, and parents), making it economical and flexible.',
  },
  {
    id: 'faq-5',
    question: 'How to claim for Health Insurance coverage?',
    answer: 'You can claim either via Cashless Hospitalization at our network partner hospitals (show your PGICL Digital Health Card upon admission) or via Reimbursement by submitting bills, medical prescriptions, and discharge certificates through our portal or email.',
  },
  {
    id: 'faq-6',
    question: 'What happens after claiming Health Insurance coverage?',
    answer: 'Our dedicated claims assessment team reviews the submitted medical reports and hospital vouchers within 24 to 48 hours. Once verified, the claim amount is disbursed directly to your designated bank account or mobile wallet.',
  },
  {
    id: 'faq-7',
    question: 'Why is Purabi General Insurance the best place to buy Health Insurance policies?',
    answer: 'With over 27 years of trusted heritage, a 90%+ prompt claim settlement ratio, transparent pricing without hidden deductibles, and 24/7 dedicated customer support, Purabi General Insurance provides unparalleled security in Bangladesh.',
  },
  {
    id: 'faq-8',
    question: 'How to contact Purabi General Insurance?',
    answer: 'You can reach us at our head office at Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000, call our direct line at +880 1714-044146, or email us at purabinsurance@gmail.com.',
  },
];

export const ABOUT_BENEFITS: BenefitItem[] = [
  {
    id: 'benefit-1',
    title: '100% Safe Money',
    description: 'Your money is 100% secure with us, backed by strong financial solvency margins and disciplined reserve management ensuring complete peace of mind.',
    icon: 'ShieldCheck',
  },
  {
    id: 'benefit-2',
    title: 'Anytime Money Back',
    description: 'Access your money anytime with Anytime Money Back guarantees and pro-rata cancellation provisions for maximum financial convenience.',
    icon: 'RefreshCw',
  },
  {
    id: 'benefit-3',
    title: 'Fast Process',
    description: 'Experience a Fast Process with quick documentation, streamlined online approvals, and efficient solutions tailored strictly to your individual needs.',
    icon: 'Zap',
  },
];

export const PAYMENT_METHODS = [
  { id: 'visa', name: 'VISA', color: '#1A1F71' },
  { id: 'mastercard', name: 'Mastercard', color: '#EB001B' },
  { id: 'bkash', name: 'bKash', color: '#E2136E' },
  { id: 'nagad', name: 'Nagad', color: '#F7941D' },
  { id: 'rocket', name: 'Rocket', color: '#8C3494' },
  { id: 'upay', name: 'Upay', color: '#005CA9' },
  { id: 'taptapsend', name: 'TapTap Send', color: '#1B8057' },
  { id: 'cellfin', name: 'CellFin', color: '#0B713A' },
];
