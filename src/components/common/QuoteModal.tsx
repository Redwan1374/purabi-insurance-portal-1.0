import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    category?: string;
    name?: string;
    mobile?: string;
    recipientType?: string;
    age?: string;
    coverageAmount?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#B6422A]" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mt-2">
          <div className="w-14 h-14 bg-[#B6422A]/10 text-[#B6422A] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-[#1E2329]">Quote Request Received!</h3>
          <p className="text-gray-600 text-sm mt-1">
            Thank you, <span className="font-semibold text-gray-900">{data.name || 'Valued Customer'}</span>. A certified PGICL insurance specialist is calculating your live premium rates.
          </p>
        </div>

        <div className="mt-6 bg-[#FDF7F5] rounded-xl p-4 border border-[#B6422A]/15 text-left text-xs sm:text-sm space-y-2">
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-gray-500 font-medium">Selected Category/Plan:</span>
            <span className="font-semibold text-[#B6422A] capitalize">{data.category || data.recipientType || 'Health Protection'}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
            <span className="text-gray-500 font-medium">Contact Number:</span>
            <span className="font-semibold text-gray-800">{data.mobile || '+880 17XXXXXXXX'}</span>
          </div>
          {data.coverageAmount && (
            <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
              <span className="text-gray-500 font-medium">Coverage Range:</span>
              <span className="font-semibold text-gray-800">{data.coverageAmount}</span>
            </div>
          )}
          {data.age && (
            <div className="flex justify-between">
              <span className="text-gray-500 font-medium">Age Group:</span>
              <span className="font-semibold text-gray-800">{data.age}</span>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-5 py-3 rounded-xl bg-[#B6422A] hover:bg-[#a03822] text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span>Proceed to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
