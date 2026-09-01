import React from 'react';

export const PaymentLogos: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* VISA */}
      <div className="h-9 px-3 bg-white rounded-md border border-gray-200/80 shadow-xs flex items-center justify-center transition-all hover:border-[#B6422A]/40 hover:shadow-sm" title="VISA">
        <span className="font-black italic tracking-tighter text-[#1A1F71] text-base leading-none">VISA</span>
      </div>

      {/* Mastercard */}
      <div className="h-9 px-3 bg-white rounded-md border border-gray-200/80 shadow-xs flex items-center justify-center gap-1 transition-all hover:border-[#B6422A]/40 hover:shadow-sm" title="Mastercard">
        <div className="flex items-center -space-x-1.5">
          <div className="w-4 h-4 rounded-full bg-[#EB001B] opacity-95"></div>
          <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90"></div>
        </div>
        <span className="text-[10px] font-bold text-gray-700 ml-1">mastercard</span>
      </div>

      {/* bKash */}
      <div className="h-9 px-3 bg-white rounded-md border border-gray-200/80 shadow-xs flex items-center justify-center gap-1.5 transition-all hover:border-[#B6422A]/40 hover:shadow-sm" title="bKash">
        <div className="w-3.5 h-3.5 bg-[#E2136E] transform rotate-45 rounded-xs flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-xs"></div>
        </div>
        <span className="font-bold text-[#E2136E] text-xs tracking-tight">bKash</span>
      </div>

      {/* Nagad */}
      <div className="h-9 px-3 bg-white rounded-md border border-gray-200/80 shadow-xs flex items-center justify-center gap-1 transition-all hover:border-[#B6422A]/40 hover:shadow-sm" title="Nagad">
        <div className="w-3.5 h-3.5 rounded-full bg-[#F7941D] flex items-center justify-center text-white text-[9px] font-black">
          ন
        </div>
        <span className="font-bold text-[#F7941D] text-xs tracking-tight">নগদ</span>
      </div>

      {/* Rocket */}
      <div className="h-9 px-3 bg-white rounded-md border border-gray-200/80 shadow-xs flex items-center justify-center gap-1 transition-all hover:border-[#B6422A]/40 hover:shadow-sm" title="Rocket">
        <div className="w-3.5 h-3.5 bg-[#8C3494] rounded-sm flex items-center justify-center text-white text-[8px] font-bold">
          🚀
        </div>
        <span className="font-bold text-[#8C3494] text-xs tracking-tight">Rocket</span>
      </div>

      {/* Upay */}
      <div className="h-9 px-3 bg-white rounded-md border border-gray-200/80 shadow-xs flex items-center justify-center gap-1 transition-all hover:border-[#B6422A]/40 hover:shadow-sm" title="Upay">
        <div className="w-3.5 h-3.5 rounded-full bg-[#005CA9] flex items-center justify-center text-white text-[8px] font-bold">
          u
        </div>
        <span className="font-bold text-[#005CA9] text-xs tracking-tight">upay</span>
      </div>

      {/* TapTap Send */}
      <div className="h-9 px-2.5 bg-white rounded-md border border-gray-200/80 shadow-xs flex items-center justify-center gap-1 transition-all hover:border-[#B6422A]/40 hover:shadow-sm" title="TapTap Send">
        <div className="w-3.5 h-3.5 rounded-full bg-[#1B8057] flex items-center justify-center text-white text-[7px] font-bold">
          ⚡
        </div>
        <span className="font-semibold text-gray-800 text-[11px] tracking-tight">taptap<span className="text-[#1B8057]">send</span></span>
      </div>

      {/* CellFin */}
      <div className="h-9 px-2.5 bg-white rounded-md border border-gray-200/80 shadow-xs flex items-center justify-center gap-1 transition-all hover:border-[#B6422A]/40 hover:shadow-sm" title="CellFin">
        <div className="w-3 h-3 rounded-xs bg-[#0B713A]"></div>
        <span className="font-bold text-[#0B713A] text-[11px] tracking-tight">CellFin</span>
      </div>
    </div>
  );
};
