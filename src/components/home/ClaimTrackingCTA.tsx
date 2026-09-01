import React from 'react';
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

interface ClaimTrackingCTAProps {
  onOpenClaimModal?: () => void;
}

export const ClaimTrackingCTA: React.FC<ClaimTrackingCTAProps> = ({ onOpenClaimModal }) => {
  return (
    <section id="claim-tracking" className="w-full bg-[#FFFFFF] py-14 md:py-20 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Happy Family / Client Cutout Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#EAE3DE]">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                alt="Happy Family with PGICL Insurance Coverage"
                className="w-full h-full object-cover object-center"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#B6422A] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1E2329]">Hassle-Free Settlement</div>
                  <div className="text-[11px] text-gray-600">Over 90% claims settled in &lt;48 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Light Pink Rounded Container */}
          <div className="lg:col-span-7">
            <div className="bg-[#FDF6F4] rounded-3xl p-8 sm:p-10 md:p-12 border border-[#ECE2DD] shadow-xs relative overflow-hidden">
              {/* Subtle background motif */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#B6422A]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <span className="text-[#B6422A] text-xs sm:text-sm font-bold uppercase tracking-wider block">
                  BE HAPPY TO GET INSURANCE
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2329] tracking-tight">
                  Start Tracking Your Claims
                </h2>

                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                  Enjoy peace of mind with hassle-free insurance. Track your claims effortlessly and stay informed every step of the way with live surveyor updates and automated disbursements.
                </p>

                {/* Actions Row */}
                <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                  <button
                    onClick={onOpenClaimModal}
                    className="px-7 py-3.5 rounded-full bg-[#B6422A] hover:bg-[#9E3520] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-[#B6422A]/25 transition-all duration-200 group cursor-pointer"
                  >
                    <span>Claim Coverage</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">OR</span>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#B6422A]">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-[11px] text-gray-500 font-medium">Mail Us Anytime:</span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-semibold text-[#1E2329] hover:text-[#B6422A] transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
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
