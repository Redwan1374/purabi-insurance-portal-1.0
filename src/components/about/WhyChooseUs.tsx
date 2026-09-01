import React from 'react';
import { ShieldCheck, RefreshCw, Zap, Play } from 'lucide-react';
import { ABOUT_BENEFITS } from '../../data/mockData';

interface WhyChooseUsProps {
  onWatchVideo?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onWatchVideo }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-white" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-white" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-white" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 font-['Poppins',sans-serif] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: 3 Benefit Cards (Col 1-6) */}
          <div className="lg:col-span-6 space-y-4">
            {ABOUT_BENEFITS.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-[#FAF7F5] hover:bg-white rounded-2xl p-5 sm:p-6 border border-[#ECE5E0] hover:border-[#B6422A]/30 hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
              >
                {/* Orange Square Icon Area */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#B6422A] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  {getIcon(benefit.icon)}
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#1E2329] group-hover:text-[#B6422A] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Why Choose Us Content & Image with Play Button (Col 7-12) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#B6422A] text-xs sm:text-sm font-bold uppercase tracking-wider block">
              WHY CHOOSE US
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2329] tracking-tight leading-snug">
              Why You Should Choose Our Insurance Policy's
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Choose our insurance policy for comprehensive coverage, reliable protection, hassle-free claims, and a customer-focused experience backed by experienced risk assessors.
            </p>

            {/* Large Family / Protection Image with Play Button */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#ECE2DD] aspect-16/9 bg-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1511883040705-6011fad9edfc?auto=format&fit=crop&w=1000&q=80"
                alt="Family Protected with PGICL Policy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

              {/* Centered Circular Play Button */}
              <button
                onClick={onWatchVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#B6422A] hover:bg-[#9E3520] text-white flex items-center justify-center shadow-xl shadow-black/30 group-hover:scale-110 transition-all duration-200 cursor-pointer"
                aria-label="Play company documentary video"
              >
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
