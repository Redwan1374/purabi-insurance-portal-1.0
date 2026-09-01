import React from 'react';
import { WORKING_PROCESS_STEPS } from '../../data/mockData';

export const WorkingProcess: React.FC = () => {
  return (
    <section id="process" className="relative w-full py-20 md:py-28 bg-[#12161A] overflow-hidden font-['Poppins',sans-serif]">
      {/* Background Image with Dark & Soft Blur Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Architecture Background"
          className="w-full h-full object-cover opacity-25 filter blur-xs"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0F1318]/90 via-[#0F1318]/85 to-[#0F1318]/95" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Translucent Glassmorphism Panel */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-14 border border-white/20 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-[#E26A54] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 block">
              INSURANCE SIMPLIFIED
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
              OUR WORKING PROCESS
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              A transparent, three-step automated journey to secure instant risk underwriting and dependable claim assistance.
            </p>
          </div>

          {/* Three Process Steps (Desktop 3 Columns, Mobile Stacked) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
            {WORKING_PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Circular Step Image with Numbered Orange Circle Badge */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-xl group-hover:border-[#B6422A] transition-all duration-300">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Numbered Orange Badge */}
                  <div className="absolute -bottom-2 -right-1 w-9 h-9 rounded-full bg-[#B6422A] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md border-2 border-white">
                    {step.step}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#E26A54] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
