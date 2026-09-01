import React from 'react';
import { Play, ArrowUpRight, ShieldCheck } from 'lucide-react';
import homeBg from '../../../home.jpg';

interface HeroProps {
  onDiscoverMore?: () => void;
  onWatchVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverMore, onWatchVideo }) => {
  return (
    <section className="relative w-full min-h-[560px] lg:min-h-[640px] flex items-center bg-[#15191E] overflow-hidden">
      {/* Background Image with Dark Professional Consultation Scene */}
      <div className="absolute inset-0 z-0">
        <img
          src={homeBg}
          alt="Professional Insurance Consultation at Purabi General Insurance"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark Multi-stop Overlay to ensure pristine contrast & match the screenshot */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0F1318]/95 via-[#0F1318]/80 to-[#0F1318]/40" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm font-medium mb-5">
            <ShieldCheck className="w-4 h-4 text-[#E26A54]" />
            <span>Protecting Value Through Innovation</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-5">
            Leading Insurance Solutions for <span className="text-white">Your Peace of Mind</span>
          </h1>

          {/* Body Text */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            Purabi General Insurance Company Limited (PGICL), established in 1988, is a leading insurer in Bangladesh, providing comprehensive asset protection for corporate organizations and families.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Discover More Button */}
            <button
              onClick={onDiscoverMore}
              className="px-7 py-3.5 rounded-full bg-[#B6422A] hover:bg-[#9E3520] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#B6422A]/30 transition-all duration-200 group cursor-pointer"
            >
              <span>DISCOVER MORE</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Watch Video Button */}
            <button
              onClick={onWatchVideo}
              className="flex items-center gap-3 text-white hover:text-[#E26A54] transition-colors py-2 px-3 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#B6422A] group-hover:border-[#B6422A] transition-all shadow-md">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">WATCH VIDEO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
