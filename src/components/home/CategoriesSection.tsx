import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Heart, Car, Ship, ArrowUpRight } from 'lucide-react';
import { MAIN_INSURANCE_CATEGORIES } from '../../data/mockData';

interface CategoriesSectionProps {
  onSelectCategory?: (category: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'flame':
        return <Flame className="w-7 h-7 text-[#E05338]" />;
      case 'heart':
        return <Heart className="w-7 h-7 text-[#34A853]" />;
      case 'car':
        return <Car className="w-7 h-7 text-[#1A73E8]" />;
      case 'ship':
        return <Ship className="w-7 h-7 text-[#D97706]" />;
      default:
        return <Heart className="w-7 h-7 text-[#B6422A]" />;
    }
  };

  return (
    <section id="categories" className="w-full bg-[#FFFFFF] py-16 md:py-24 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[#B6422A] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 block">
            OUR PRODUCT PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2329] tracking-tight mb-3">
            CATEGORIES OF INSURANCE
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Tailored general insurance policies crafted to protect industrial installations, maritime freight, motor fleets, and family healthcare with dependable underwriting.
          </p>
        </div>

        {/* 4 Cards Grid (Desktop 4, Tablet 2, Mobile 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MAIN_INSURANCE_CATEGORIES.map((item) => {
            const isHealth = item.id === 'health';
            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF7F5] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#ECE5E1] hover:border-[#B6422A]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-[#FAF7F5] border border-gray-100 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-all duration-300">
                    {getIcon(item.iconType)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1E2329] group-hover:text-[#B6422A] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row with Circular Arrow Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
                  <span className="text-xs font-semibold text-gray-500 group-hover:text-[#B6422A] transition-colors">
                    {isHealth ? 'Explore Plan' : 'View Coverage'}
                  </span>

                  {isHealth ? (
                    <Link
                      to="/health-insurance"
                      className="w-10 h-10 rounded-full bg-white group-hover:bg-[#B6422A] text-gray-700 group-hover:text-white border border-gray-200 group-hover:border-[#B6422A] flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:shadow-md"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => onSelectCategory && onSelectCategory(item.title)}
                      className="w-10 h-10 rounded-full bg-white group-hover:bg-[#B6422A] text-gray-700 group-hover:text-white border border-gray-200 group-hover:border-[#B6422A] flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:shadow-md cursor-pointer"
                      aria-label={`Get details for ${item.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom See More Button */}
        <div className="flex justify-center">
          <Link
            to="/health-insurance"
            className="px-8 py-3.5 rounded-full bg-[#B6422A] hover:bg-[#9E3520] text-white font-semibold text-sm flex items-center gap-2 shadow-md shadow-[#B6422A]/20 transition-all duration-200 group"
          >
            <span>See More</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
