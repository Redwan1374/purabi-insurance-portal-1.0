import React, { useState } from 'react';
import {
  User,
  Users,
  HeartHandshake,
  Shield,
  ArrowUpRight,
  Check,
  AlertCircle,
  Phone,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { HealthPlanFormData } from '../../types';

interface HealthPlanSelectorProps {
  onShowPlans: (data: HealthPlanFormData) => void;
}

export const HealthPlanSelector: React.FC<HealthPlanSelectorProps> = ({ onShowPlans }) => {
  const [recipientType, setRecipientType] = useState<'Self' | 'Couple' | 'Family' | 'Parents'>('Self');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('26-35 Years');
  const [coverageAmount, setCoverageAmount] = useState('1 lac to 5 lac');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [errors, setErrors] = useState<{ name?: string; mobile?: string; terms?: string }>({});

  const recipientOptions = [
    { id: 'Self', label: 'For Self', icon: User },
    { id: 'Couple', label: 'For Couple', icon: HeartHandshake },
    { id: 'Family', label: 'For Family', icon: Users },
    { id: 'Parents', label: 'For Parents', icon: Shield },
  ] as const;

  const coverageOptions = [
    'Show all plan',
    'Up to 1 lac',
    '1 lac to 5 lac',
    '5 lac to 10 lac',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; mobile?: string; terms?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Please enter your mobile number';
    } else if (mobile.length < 8) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }

    if (!agreeTerms) {
      newErrors.terms = 'Please accept the Terms of Service to continue';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onShowPlans({
      recipientType,
      name: name.trim(),
      mobile: mobile.trim(),
      age,
      coverageAmount,
      agreeTerms,
    });
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Health Insurance Illustration & Trust Features (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#ECE2DD] aspect-4/3 sm:aspect-square bg-linear-to-br from-[#FDF7F5] to-[#FBEAE6]">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                alt="Medical healthcare consultation"
                className="w-full h-full object-cover mix-blend-multiply"
              />

              {/* Floating Feature Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg space-y-2">
                <div className="flex items-center gap-2 text-[#B6422A] font-bold text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>Cashless Hospitalization Network</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-snug">
                  Covering 350+ renowned partner hospitals & diagnostics across Dhaka, Chittagong, and all divisional cities.
                </p>
                <div className="flex items-center gap-3 pt-1 text-[10px] text-gray-700 font-medium">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Pre & Post Care</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Critical Care</span>
                </div>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#FAF7F5] p-3 rounded-xl border border-gray-100">
                <div className="text-sm sm:text-base font-bold text-[#B6422A]">350+</div>
                <div className="text-[10px] text-gray-500 font-medium">Network Hospitals</div>
              </div>
              <div className="bg-[#FAF7F5] p-3 rounded-xl border border-gray-100">
                <div className="text-sm sm:text-base font-bold text-[#B6422A]">24/7</div>
                <div className="text-[10px] text-gray-500 font-medium">Medical Assistance</div>
              </div>
              <div className="bg-[#FAF7F5] p-3 rounded-xl border border-gray-100">
                <div className="text-sm sm:text-base font-bold text-[#B6422A]">90%+</div>
                <div className="text-[10px] text-gray-500 font-medium">Claim Approval</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Large White Card with Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#ECE2DD] shadow-xl relative">
              {/* Top Recipient Selector: For Self | For Couple | For Family | For Parents */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Select Who You Want to Insure:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {recipientOptions.map((opt) => {
                    const isSelected = recipientType === opt.id;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setRecipientType(opt.id)}
                        className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#B6422A] text-white border-[#B6422A] shadow-md shadow-[#B6422A]/20'
                            : 'bg-[#FAF8F6] text-gray-700 border-gray-200/80 hover:bg-[#FDF2EF] hover:border-[#B6422A]/40'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Mobile in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Your Name *
                    </label>
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
                        placeholder="e.g. Tanvir Ahmed"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#1E2329] placeholder-gray-400 bg-[#FAFAFA] focus:bg-white focus:ring-2 focus:ring-[#B6422A]/20 focus:border-[#B6422A] outline-hidden transition-all ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Mobile Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Mobile Number *
                    </label>
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
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#1E2329] placeholder-gray-400 bg-[#FAFAFA] focus:bg-white focus:ring-2 focus:ring-[#B6422A]/20 focus:border-[#B6422A] outline-hidden transition-all ${
                          errors.mobile ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                        }`}
                      />
                    </div>
                    {errors.mobile && (
                      <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.mobile}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Age Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Age of the Eldest Member *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1E2329] bg-[#FAFAFA] focus:bg-white focus:ring-2 focus:ring-[#B6422A]/20 focus:border-[#B6422A] outline-hidden transition-all appearance-none cursor-pointer"
                    >
                      <option value="18-25 Years">18 - 25 Years</option>
                      <option value="26-35 Years">26 - 35 Years</option>
                      <option value="36-45 Years">36 - 45 Years</option>
                      <option value="46-60 Years">46 - 60 Years</option>
                      <option value="60+ Years (Senior Citizen)">60+ Years (Senior Citizen)</option>
                    </select>
                  </div>
                </div>

                {/* Health Coverage Amount Pills */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Health Coverage Amount:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {coverageOptions.map((amount) => {
                      const isSelected = coverageAmount === amount;
                      return (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setCoverageAmount(amount)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-[#B6422A] text-white border-[#B6422A] shadow-xs'
                              : 'bg-[#FAF8F6] text-gray-700 border-gray-200 hover:bg-[#FDF2EF]'
                          }`}
                        >
                          {amount}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="pt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => {
                        setAgreeTerms(e.target.checked);
                        if (errors.terms) setErrors({ ...errors, terms: undefined });
                      }}
                      className="w-4 h-4 rounded text-[#B6422A] focus:ring-[#B6422A] border-gray-300 cursor-pointer"
                    />
                    <span className="text-xs text-gray-600">
                      I agree with the <span className="text-[#B6422A] font-semibold underline">Terms of Service</span> and Insurance Disclosure Policy.
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1 pl-6">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.terms}</span>
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#B6422A] hover:bg-[#9E3520] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#B6422A]/25 transition-all duration-200 group cursor-pointer"
                  >
                    <span>See Plans</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
