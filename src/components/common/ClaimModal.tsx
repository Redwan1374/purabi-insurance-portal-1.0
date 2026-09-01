import React, { useState } from 'react';
import { X, Search, CheckCircle, Clock, ShieldCheck, AlertCircle } from 'lucide-react';

interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimModal: React.FC<ClaimModalProps> = ({ isOpen, onClose }) => {
  const [claimId, setClaimId] = useState('');
  const [phone, setPhone] = useState('');
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!claimId.trim()) {
      setError('Please provide your Claim ID or Policy Number.');
      return;
    }
    setError('');
    setSearched(true);
  };

  const handleReset = () => {
    setSearched(false);
    setClaimId('');
    setPhone('');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 overflow-hidden">
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#B6422A]" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-5">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#B6422A]/10 text-[#B6422A] text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Claim Settlement Portal
          </div>
          <h3 className="text-2xl font-bold text-[#1E2329]">Track Your Claim Status</h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Real-time status tracking for Motor, Health, Fire & Marine insurance claims.
          </p>
        </div>

        {!searched ? (
          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Claim Tracking ID / Policy Number *
              </label>
              <input
                type="text"
                value={claimId}
                onChange={(e) => setClaimId(e.target.value)}
                placeholder="e.g. PGICL-CLM-2024-8921"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#B6422A] focus:ring-2 focus:ring-[#B6422A]/20 text-sm outline-hidden transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Registered Mobile Number (Optional)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="017XXXXXXXX"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#B6422A] focus:ring-2 focus:ring-[#B6422A]/20 text-sm outline-hidden transition-all"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-2.5 rounded-lg">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#B6422A] hover:bg-[#a03822] text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md mt-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Track Claim Now</span>
            </button>
          </form>
        ) : (
          <div className="space-y-4 animate-in fade-in">
            <div className="bg-[#FDF7F5] rounded-xl p-4 border border-[#B6422A]/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-500 font-medium">Claim ID:</span>
                <span className="text-xs font-bold text-[#B6422A]">{claimId}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg text-xs font-medium mb-3">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Under Final Verification — Disbursal within 24 Hours</span>
              </div>

              {/* Progress Steps */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="text-gray-800 font-medium">Claim Registered & KYC Verified</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="text-gray-800 font-medium">Surveyor Inspection Report Approved</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#B6422A] text-white flex items-center justify-center text-[10px] font-bold animate-pulse">
                    <Clock className="w-3 h-3" />
                  </div>
                  <span className="text-gray-900 font-semibold">Payment Disbursal Processing</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-medium transition-colors"
              >
                Track Another Claim
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-[#B6422A] text-white hover:bg-[#a03822] text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
          <span>Need help? Call hotline: <strong>+880 1714-044146</strong></span>
          <span>Sunday–Thursday</span>
        </div>
      </div>
    </div>
  );
};
