import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import aboutBg from '../../../about.jpg';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#15191E] overflow-hidden font-['Poppins',sans-serif]">
      {/* Professional Insurance Consultation Scene with Dark Multi-stop Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBg}
          alt="Insurance Advisory & Executive Leadership"
          className="w-full h-full object-cover opacity-35 filter brightness-90"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0F1318]/95 via-[#0F1318]/85 to-[#0F1318]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Translucent Rounded Panel */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80 mb-4 font-medium" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <span className="text-white font-semibold">About Us</span>
          </nav>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
            Securing Your Future With Confidence
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Driven by a vision of trust and reliability, we aim not just to sell policies, but to build lasting relationships with our clients—supporting you through every stage of life.
          </p>
        </div>
      </div>
    </section>
  );
};
