import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title = 'Purabi General Insurance Overview',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#1E2329] rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        <div className="flex items-center justify-between p-4 px-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#B6422A]"></div>
            <h3 className="text-white font-medium text-sm md:text-base">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Simulation Screen */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
            alt="Video poster"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute text-center px-4">
            <div className="w-16 h-16 rounded-full bg-[#B6422A] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#B6422A]/40 mb-3 group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
            <p className="text-white font-semibold text-lg">35+ Years of Trust & Reliability</p>
            <p className="text-gray-300 text-xs mt-1">Corporate Documentary & Claim Settlement Process</p>
          </div>
        </div>

        <div className="p-4 bg-[#181B1F] flex items-center justify-between text-xs text-gray-400">
          <span>Purabi General Insurance Co. Ltd. Media Center</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#B6422A] text-white font-medium hover:bg-[#a03822] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
