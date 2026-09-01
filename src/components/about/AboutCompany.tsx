import React from 'react';
import { Award, Users, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const AboutCompany: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Image Collage with Overlapping Badges (Col 1-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-md mx-auto">
              {/* Primary Large Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#ECE2DD] aspect-4/3 sm:aspect-square bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Purabi General Insurance Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge 1: 27+ YEARS OF EXPERIENCE (Top Left / Right) */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-[#ECE2DD] flex items-center gap-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#B6422A] text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1E2329] leading-none">27+</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider mt-0.5">
                    YEARS OF EXPERIENCE
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: 1000k+ SATISFIED CLIENTS (Bottom Right) */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-[#ECE2DD] flex items-center gap-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#B6422A] text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1E2329] leading-none">1000k+</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider mt-0.5">
                    SATISFIED CLIENTS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Company Story & Statistics Information Card (Col 7-12) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#B6422A] text-xs sm:text-sm font-bold uppercase tracking-wider block">
              ABOUT US
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2329] tracking-tight leading-snug">
              We’re Providing Best Insurance Policy's
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Purabi General Insurance Company Limited (PGICL), established on June 29, 1998, is a leading insurer in Bangladesh, providing comprehensive general insurance services. Licensed under the Insurance Act, 1938, PGICL offers a wide range of protection beyond life insurance, ensuring your peace of mind with reliable and innovative solutions.
            </p>

            {/* Statistics / Information Card */}
            <div className="bg-[#FAF7F5] rounded-2xl p-6 border border-[#ECE2DD] shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* 90% Success Rate Stat (Col 1-5) */}
                <div className="sm:col-span-5 border-b sm:border-b-0 sm:border-r border-gray-200/80 pb-4 sm:pb-0 sm:pr-4 text-center sm:text-left">
                  <div className="text-4xl sm:text-5xl font-bold text-[#B6422A] leading-none mb-1">
                    90%
                  </div>
                  <div className="text-xs font-bold text-[#1E2329] uppercase tracking-wider">
                    SUCCESS RATE
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">Prompt claim approvals</p>
                </div>

                {/* Bullet Points (Col 6-12) */}
                <div className="sm:col-span-7 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#B6422A] shrink-0" />
                    <span>Comprehensive Coverage</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#B6422A] shrink-0" />
                    <span>Customer-Centric Approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#B6422A] shrink-0" />
                    <span>Commitment to Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
