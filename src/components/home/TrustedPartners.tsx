import React from 'react';
import { TRUSTED_PARTNERS } from '../../data/mockData';

export const TrustedPartners: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <section className={`w-full bg-[#FFFFFF] py-14 md:py-20 font-['Poppins',sans-serif] border-t border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-[#B6422A] text-xs font-bold uppercase tracking-wider mb-2 block">
            CORPORATE ALLIANCES
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E2329] tracking-tight">
            OUR GENUINE TRUSTED PARTNERS & CLIENTS
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Providing institutional underwriting and risk mitigation to Bangladesh's leading enterprises.
          </p>
        </div>

        {/* Logos Grid inside bordered boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUSTED_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-[#FAF8F6] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#ECE5E0] hover:border-[#B6422A]/40 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group min-h-[110px]"
            >
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="w-8 h-8 rounded-lg bg-white group-hover:bg-[#B6422A] text-gray-800 group-hover:text-white border border-gray-200 group-hover:border-[#B6422A] flex items-center justify-center font-black text-xs transition-colors">
                  {partner.symbol}
                </span>
                <span className="font-bold text-sm sm:text-base text-[#1E2329] group-hover:text-[#B6422A] transition-colors">
                  {partner.name}
                </span>
              </div>
              <span className="text-[11px] text-gray-500 font-medium">{partner.industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
