import React from 'react';
import { AnimatedMascot } from './AnimatedMascot';
import { VERIFIED_CONTACTS } from '../data/erpData';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Database, 
  Building2, 
  FileCheck2,
  Lock
} from 'lucide-react';

interface HeroProps {
  onNavigate: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <section className="relative pt-10 pb-16 lg:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Corporate Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                PT Shan Informasi Sistem
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                30+ Tahun Rekayasa ERP Lokal (Est. 1994)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Perangkat Lunak ERP Indonesia Terpadu untuk Kendali Finansial, Proyek, & Operasional Tanpa Batas
            </h1>

            {/* Subhead with Real Business Terminology */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              Sistem enterprise lokal yang menyatukan alur kerja kontraktor, manufaktur kawasan berikat, retail multi-cabang, hingga pengelolaan properti dalam satu platform andal dengan kepatuhan perpajakan 100% native.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Penguncian Pagu Anggaran RAP Proyek</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Kalkulasi PPh 21 Skema TER & e-Faktur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>IT Inventory Kawasan Berikat CEISA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Kedaulatan Data Tier 3/4 Jakarta (UU PDP)</span>
              </div>
            </div>

            {/* Dual CTAs & Hotline */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-orange-600/25 active:scale-95 transition-all flex items-center gap-2.5"
              >
                <span>Jadwalkan Konsultasi Solusi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin berkonsultasi mengenai solusi ERP enterprise untuk perusahaan kami.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base transition-colors flex items-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Hotline Sales</span>
              </a>

              <a
                href="#modul"
                className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors py-2"
              >
                Jelajahi Modul Vertikal &darr;
              </a>
            </div>

            {/* Trust Assurance Strip */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-blue-500" />
                <span>Single Database Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Audit-Ready SAK Indonesia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span>Garansi Hak Ekspor Data 100%</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Mascot Character with Speech Bubble & Quick Launcher (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-6 rounded-3xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-sm">
              <AnimatedMascot 
                onNavigate={onNavigate} 
                onOpenConsultation={onOpenConsultation} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
