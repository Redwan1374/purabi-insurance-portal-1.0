import React from 'react';
import { ShieldCheck, Bell, FileCheck, Smartphone } from 'lucide-react';

export const MobileAppSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-14 md:py-20 font-['Poppins',sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Rounded Light Pink/White Container */}
        <div className="bg-[#FDF6F4] rounded-3xl border border-[#ECE2DD] p-8 sm:p-12 md:p-14 lg:pb-0 relative overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (Col 1-7) */}
            <div className="lg:col-span-7 space-y-5 text-left z-10">
              <span className="text-[#B6422A] text-xs sm:text-sm font-bold uppercase tracking-wider block">
                GET OUR MOBILE APP
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2329] tracking-tight">
                EXPERIENCED OUR MOBILE APP
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                Manage your insurance portfolio on the go. Download the Purabi General Insurance Mobile App to view policy certificates, renew premiums in one tap, track surveyor inspections, and access 24/7 road & medical assistance.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2">
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#B6422A]/10 text-[#B6422A] flex items-center justify-center shrink-0">
                    <FileCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Instant Policy Details</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#B6422A]/10 text-[#B6422A] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Live Claim Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#B6422A]/10 text-[#B6422A] flex items-center justify-center shrink-0">
                    <Bell className="w-3.5 h-3.5" />
                  </div>
                  <span>Renewal Alerts</span>
                </div>
              </div>

              {/* App Store / Google Play Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {/* Google Play */}
                <a
                  href="#download-play"
                  onClick={(e) => { e.preventDefault(); alert('PGICL Mobile App will be launched shortly on Google Play Store.'); }}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1E2329] text-white hover:bg-black transition-all shadow-sm"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.424V3.238c0-.54.22-1.03.609-1.424zM15.207 13.414l2.42 2.42-12.01 6.862 9.59-9.282zM15.207 10.586L5.617 1.304 17.627 8.166l-2.42 2.42zM18.847 9.387l3.033 1.733c.72.411.72 1.579 0 1.99l-3.033 1.733-2.64-2.64 2.64-2.816z"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] uppercase tracking-wider text-gray-300">GET IT ON</div>
                    <div className="text-xs sm:text-sm font-semibold">Google Play</div>
                  </div>
                </a>

                {/* Apple App Store */}
                <a
                  href="#download-appstore"
                  onClick={(e) => { e.preventDefault(); alert('PGICL Mobile App will be launched shortly on Apple App Store.'); }}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1E2329] text-white hover:bg-black transition-all shadow-sm"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.92.04-2.07.63-2.73 1.4-.58.67-1.1 1.76-.96 2.82 1.03.08 2.12-.53 2.75-1.28z"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] uppercase tracking-wider text-gray-300">Download on the</div>
                    <div className="text-xs sm:text-sm font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Phone Mockup (Col 8-12) */}
            <div className="lg:col-span-5 flex justify-center items-end relative pt-6 lg:pt-0">
              <div className="relative w-64 sm:w-72 md:w-80 lg:-mb-12 shadow-2xl rounded-[38px] border-8 border-gray-900 bg-gray-900 overflow-hidden transform lg:translate-y-6">
                {/* Speaker Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-20 flex items-center justify-center">
                  <div className="w-8 h-1 bg-gray-700 rounded-full" />
                </div>

                {/* Phone Screen UI */}
                <div className="bg-[#FAF7F5] p-4 pt-8 text-left space-y-3 font-['Poppins',sans-serif]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded bg-[#B6422A] text-white flex items-center justify-center text-[10px] font-bold">P</div>
                      <span className="text-xs font-bold text-gray-900">PGICL Portal</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">Active</span>
                  </div>

                  <div className="bg-[#B6422A] text-white rounded-2xl p-4 shadow-sm">
                    <div className="text-[10px] opacity-80 uppercase tracking-wider">Comprehensive Health Cover</div>
                    <div className="text-base font-bold mt-0.5">৳ 500,000 Sum Insured</div>
                    <div className="text-[10px] opacity-90 mt-2 flex justify-between">
                      <span>Policy: PG-2024-883</span>
                      <span>Valid till: Dec 2026</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-2xs space-y-1.5">
                    <div className="text-[11px] font-bold text-gray-800">Quick Services</div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-medium text-gray-600 pt-1">
                      <div className="p-1.5 bg-[#FDF6F4] rounded-lg text-[#B6422A] font-semibold">Track Claim</div>
                      <div className="p-1.5 bg-[#FDF6F4] rounded-lg text-[#B6422A] font-semibold">Pay Bill</div>
                      <div className="p-1.5 bg-[#FDF6F4] rounded-lg text-[#B6422A] font-semibold">Hotline</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-gray-800">
                      <span>Recent Claim #8921</span>
                      <span className="text-emerald-600">Approved</span>
                    </div>
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
