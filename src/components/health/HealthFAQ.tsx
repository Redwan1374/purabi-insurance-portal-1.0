import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { HEALTH_FAQS } from '../../data/mockData';

export const HealthFAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']); // First open by default

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 border-t border-gray-100 font-['Poppins',sans-serif]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6422A]/10 text-[#B6422A] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2329] tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Everything you need to know about Purabi General Insurance health policies, premiums & claims.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {HEALTH_FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#FAF7F5] border-[#B6422A]/30 shadow-xs'
                    : 'bg-[#F9F7F5] hover:bg-[#F5F2EF] border-transparent'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#1E2329] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#B6422A] text-white'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/50 mt-1 animate-in fade-in duration-150">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
