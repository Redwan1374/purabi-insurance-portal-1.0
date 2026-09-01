import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PaymentLogos } from './PaymentLogos';
import { COMPANY_INFO } from '../../data/mockData';

interface FooterProps {
  onOpenQuoteModal?: () => void;
  onOpenClaimModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal, onOpenClaimModal }) => {
  return (
    <footer className="w-full bg-[#FDF7F5] border-t border-[#EBE6E3] font-['Poppins',sans-serif] text-[#1E2329] pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* -----------------------------
            CTA AREA (Top Box)
            ----------------------------- */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 border border-[#EAE3DE] shadow-sm mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative overflow-hidden">
          {/* Subtle decorative background circle */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[#B6422A]/5 pointer-events-none" />

          <div className="space-y-1.5 z-10">
            <span className="text-[#B6422A] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Are you ready?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2329] tracking-tight">
              Get Your Insurance Now!
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-lg">
              Instant policy issue, 24/7 digital claims support, and tailor-made asset protection for you and your family.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 rounded-full bg-[#B6422A] hover:bg-[#9E3520] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg group cursor-pointer"
            >
              <span>Buy Now</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* -----------------------------
            MAIN FOOTER GRID
            ----------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-gray-200/80">
          {/* Brand & Description (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo />
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Purabi General Insurance Company Limited (PGICL), established in 1988, is committed to safeguarding corporate assets and family futures across Bangladesh with honesty, precision, and prompt claim settlements.
            </p>

            {/* Office Hours */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200/80 text-xs text-gray-700">
                <Clock className="w-3.5 h-3.5 text-[#B6422A]" />
                <span>
                  <strong>Office Hours:</strong> {COMPANY_INFO.officeHours}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E2329]">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#B6422A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-[#B6422A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/health-insurance" className="text-gray-600 hover:text-[#B6422A] transition-colors">
                  Health Insurance
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenClaimModal}
                  className="text-gray-600 hover:text-[#B6422A] transition-colors text-left"
                >
                  Track Claims
                </button>
              </li>
              <li>
                <Link to="/#news" className="text-gray-600 hover:text-[#B6422A] transition-colors">
                  Blogs & News
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-[#B6422A] font-semibold hover:underline"
                >
                  Pay Premium Online ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Payment Channels (Col 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E2329]">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#B6422A] hover:border-[#B6422A] transition-all shadow-2xs font-bold text-xs"
                title="Facebook"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#B6422A] hover:border-[#B6422A] transition-all shadow-2xs font-bold text-xs"
                title="Twitter / X"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#B6422A] hover:border-[#B6422A] transition-all shadow-2xs font-bold text-xs"
                title="Instagram"
              >
                📷
              </a>
            </div>

            {/* Payment Channels */}
            <div className="pt-2">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Supported Payment Methods
              </h4>
              <PaymentLogos />
            </div>
          </div>
        </div>

        {/* -----------------------------
            BOTTOM FOOTER
            ----------------------------- */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{COMPANY_INFO.copyright}</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600">
            <button onClick={onOpenQuoteModal} className="hover:text-[#B6422A] transition-colors">
              Teams & Condition
            </button>
            <button onClick={onOpenQuoteModal} className="hover:text-[#B6422A] transition-colors">
              Privacy & Policy
            </button>
            <button onClick={onOpenQuoteModal} className="hover:text-[#B6422A] transition-colors">
              Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
