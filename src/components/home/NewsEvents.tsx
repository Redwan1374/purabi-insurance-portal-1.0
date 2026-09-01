import React, { useState } from 'react';
import { Calendar, ArrowUpRight, Clock, X } from 'lucide-react';
import { NEWS_AND_EVENTS } from '../../data/mockData';
import { NewsItem } from '../../types';

export const NewsEvents: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="w-full bg-[#FFFFFF] py-16 md:py-24 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[#B6422A] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 block">
            NEWS & EVENTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2329] tracking-tight mb-3">
            STAY UPDATED WITH THE LATEST HAPPENINGS
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Announcements, quarterly financial disclosures, CSR drives, and strategic insurance updates from Purabi General Insurance.
          </p>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_AND_EVENTS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-[#ECE5E0] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#B6422A]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#B6422A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date & Read Time */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 font-medium">
                    <span className="flex items-center gap-1 text-[#B6422A]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1E2329] group-hover:text-[#B6422A] transition-colors leading-snug line-clamp-2 mb-3">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <hr className="border-gray-100 mb-3" />

                  {/* Short Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Read More Button Footer */}
              <div className="px-6 pb-6 pt-1">
                <button
                  onClick={() => setSelectedArticle(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B6422A] hover:text-[#9E3520] transition-colors cursor-pointer group/btn"
                >
                  <span>Read More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/9 rounded-xl overflow-hidden mb-5">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
              <span className="text-[#B6422A] font-semibold">{selectedArticle.category}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#1E2329] mb-4">
              {selectedArticle.title}
            </h3>

            {selectedArticle.titleBn && (
              <p className="text-xs text-gray-500 italic mb-4">
                English Reference: {selectedArticle.titleBn}
              </p>
            )}

            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>{selectedArticle.description}</p>
              <p>
                Purabi General Insurance Company Limited (PGICL) continuously focuses on enhancing shareholder values, institutional compliance under the Insurance Development and Regulatory Authority (IDRA), and seamless customer experience across our 40+ branch networks in Bangladesh.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-xl bg-[#B6422A] text-white text-xs font-semibold hover:bg-[#9E3520] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
