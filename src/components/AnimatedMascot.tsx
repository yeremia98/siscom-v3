import React, { useState } from 'react';
import { MessageSquare, ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface AnimatedMascotProps {
  onNavigate: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const AnimatedMascot: React.FC<AnimatedMascotProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeSpeech, setActiveSpeech] = useState<string>(
    'Halo! Ada yang bisa saya bantu jelajahi mengenai modul ERP SISCOM?'
  );
  const [isHovered, setIsHovered] = useState(false);

  const quickActions = [
    {
      label: 'Kendali RAP Kontraktor',
      speech: 'Modul SIS Construction One mengunci pagu RAP otomatis agar biaya material site tidak bocor!',
      action: () => onNavigate('/product/kontraktor'),
    },
    {
      label: 'Kepatuhan PPh 21 TER',
      speech: 'Kalkulasi PPh 21 TER 2024 dan BPJS dihitung otomatis dalam sistem CoreHR sesuai PMK 168/2023.',
      action: () => onNavigate('/product/corehr'),
    },
    {
      label: 'IT Inventory Bea Cukai',
      speech: 'SIS Pusat Berikat terintegrasi dengan CEISA Bea Cukai untuk laporan dokumen pabean 24/7.',
      action: () => onNavigate('/product/berikat'),
    },
    {
      label: 'Jadwalkan Demo Solusi',
      speech: 'Konsultan senior kami siap mendemonstrasikan sistem secara langsung untuk alur bisnis Anda.',
      action: () => onOpenConsultation(),
    },
  ];

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Speech Bubble */}
      <div 
        className="w-full max-w-sm mb-3 relative z-20 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-sky-200 dark:border-sky-500/30 shadow-xl shadow-sky-500/10 text-left relative">
          {/* Decorative tail pointing down to mascot */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 dark:bg-slate-900/95 border-r border-b border-sky-200 dark:border-sky-500/30 rotate-45 transform" />

          {/* Speech Header */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse-led" />
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                Asisten Virtual SISCOM
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold border border-orange-500/20">
              Online
            </span>
          </div>

          {/* Speech Text */}
          <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 leading-snug">
            {activeSpeech}
          </p>

          {/* Interactive Chips */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
            {quickActions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveSpeech(item.speech);
                  setTimeout(() => {
                    item.action();
                  }, 400);
                }}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-sky-50 dark:bg-slate-800/80 dark:hover:bg-sky-950/50 text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300 font-semibold border border-slate-200 dark:border-slate-700/60 transition-all flex items-center gap-1 active:scale-95"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3 h-3 opacity-60" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Mascot Character with Float & Shadow */}
      <div className="relative group cursor-pointer" onClick={() => setActiveSpeech('Klik tombol navigasi atau jelajahi modul di bawah untuk melihat arsitektur lengkap!')}>
        {/* Antenna Glowing Aura */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-20 bg-sky-400/25 dark:bg-sky-500/35 rounded-full blur-xl animate-antenna-glow pointer-events-none" />

        {/* Mascot Image */}
        <div className="relative z-10 w-44 sm:w-52 md:w-60 h-auto animate-mascot-float">
          <picture>
            <source type="image/webp" srcSet="/assets/aistudio/maskot_siscom_72c6b49a.webp" />
            <img
              src="/assets/aistudio/maskot_siscom_72c6b49a.webp"
              alt="Maskot Resmi SISCOM ERP - Karakter Robot 3D Cerdas"
              width="240"
              height="240"
              className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </picture>
        </div>

        {/* Ground Drop Shadow */}
        <div className="w-32 sm:w-40 h-4 bg-slate-900/40 dark:bg-sky-900/30 rounded-full blur-md mx-auto -mt-3 animate-mascot-shadow" />
      </div>
    </div>
  );
};
