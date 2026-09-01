import React, { useState } from 'react';
import {
  HeartPulse,
  Car,
  Plane,
  ShieldPlus,
  Ship,
  HardHat,
  Plus,
  ArrowUpRight,
  User,
  Phone,
  AlertCircle
} from 'lucide-react';
import { QUICK_QUOTE_CATEGORIES } from '../../data/mockData';

interface QuickQuoteProps {
  onSubmitQuote: (data: { category: string; name: string; mobile: string }) => void;
}

export const QuickQuote: React.FC<QuickQuoteProps> = ({ onSubmitQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('health');
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; mobile?: string }>({});

  const iconMap: Record<string, React.ReactNode> = {
    health: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />,
    car: <Car className="w-5 h-5 sm:w-6 sm:h-6" />,
    travel: <Plane className="w-5 h-5 sm:w-6 sm:h-6" />,
    life: <ShieldPlus className="w-5 h-5 sm:w-6 sm:h-6" />,
    marine: <Ship className="w-5 h-5 sm:w-6 sm:h-6" />,
    engineering: <HardHat className="w-5 h-5 sm:w-6 sm:h-6" />,
    more: <Plus className="w-5 h-5 sm:w-6 sm:h-6" />,
  };

  const handleValidationAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; mobile?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Please enter your mobile number';
    } else if (!/^(\+?88)?01[3-9]\d{8}$/.test(mobile.replace(/\s+/g, '')) && mobile.length < 8) {
      newErrors.mobile = 'Enter a valid 11-digit mobile number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmitQuote({
      category: selectedCategory,
      name: name.trim(),
      mobile: mobile.trim(),
    });
  };

  return (
    <section className="w-full bg-[#FDF6F4] py-12 md:py-16 border-b border-[#EAE3DE] font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-[#ECE5E1] p-6 sm:p-8 md:p-10">
          {/* Top Category Selector Icons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 pb-8 border-b border-gray-100">
            {QUICK_QUOTE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex flex-col items-center gap-2 transition-all duration-200 cursor-pointer group p-1.5 focus:outline-hidden`}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? 'bg-[#B6422A] text-white shadow-md shadow-[#B6422A]/25 scale-105'
                        : 'bg-[#FDF7F5] text-gray-700 hover:bg-[#FBEAE6] hover:text-[#B6422A] border border-gray-200/80'
                    }`}
                  >
                    {iconMap[cat.id]}
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-medium tracking-tight transition-colors ${
                      isActive ? 'text-[#B6422A] font-bold' : 'text-gray-700 group-hover:text-[#B6422A]'
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Quote Inputs Form */}
          <form onSubmit={handleValidationAndSubmit} className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start max-w-4xl mx-auto">
              {/* Name Input */}
              <div className="sm:col-span-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Your Full Name"
                    className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm text-[#1E2329] placeholder-gray-400 bg-[#FAFAFA] focus:bg-white focus:ring-2 focus:ring-[#B6422A]/20 focus:border-[#B6422A] outline-hidden transition-all ${
                      errors.name ? 'border-red-400 bg-red-50/30' : 'border-gray-200'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 pl-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Mobile Input */}
              <div className="sm:col-span-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      if (errors.mobile) setErrors({ ...errors, mobile: undefined });
                    }}
                    placeholder="017XXXXXXXX"
                    className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm text-[#1E2329] placeholder-gray-400 bg-[#FAFAFA] focus:bg-white focus:ring-2 focus:ring-[#B6422A]/20 focus:border-[#B6422A] outline-hidden transition-all ${
                      errors.mobile ? 'border-red-400 bg-red-50/30' : 'border-gray-200'
                    }`}
                  />
                </div>
                {errors.mobile && (
                  <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 pl-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.mobile}</span>
                  </p>
                )}
              </div>

              {/* Get Price Button */}
              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#B6422A] hover:bg-[#9E3520] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#B6422A]/25 transition-all duration-200 group cursor-pointer"
                >
                  <span>Get Price</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
