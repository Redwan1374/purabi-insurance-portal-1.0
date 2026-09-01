import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const HealthHero: React.FC = () => {
  return (
    <section className="relative w-full py-14 md:py-20 bg-[#C59B27] overflow-hidden font-['Poppins',sans-serif]">
      {/* Background Image with Warm Golden / Yellow / Medical Theme & Dark Translucent Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
          alt="Healthcare consultation"
          className="w-full h-full object-cover opacity-35 filter saturate-150"
        />
        {/* Golden-amber / dark multi-stop overlay matching the screenshot */}
        <div className="absolute inset-0 bg-linear-to-r from-[#533B08]/90 via-[#8A6715]/80 to-[#533B08]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Translucent Rounded Panel */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 border border-white/20 shadow-xl text-center">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80 mb-4 font-medium" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <span className="text-white font-semibold">Health Insurance</span>
          </nav>

          {/* Page Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug max-w-3xl mx-auto">
            Choose The Best Health Insurance Plan For Yourself And Your Family
          </h1>
        </div>
      </div>
    </section>
  );
};
