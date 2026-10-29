import React from 'react';
import { MEGA_MENU_SUITES, EnterpriseSuite, VERIFIED_CONTACTS } from '../data/erpData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Phone, 
  Sparkles,
  Layers,
  FileCheck2,
  Users
} from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenConsultation,
}) => {
  const currentSuite: EnterpriseSuite = 
    MEGA_MENU_SUITES.find((s) => s.slug === slug) || MEGA_MENU_SUITES[0];

  return (
    <div className="py-12 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-orange-600 dark:hover:text-orange-400 font-medium flex items-center gap-1 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </button>
          <span>/</span>
          <button
            onClick={() => {
              onNavigate('/');
              setTimeout(() => {
                const el = document.getElementById('modul');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-orange-600 dark:hover:text-orange-400 font-medium transition"
          >
            Modul Solusi
          </button>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-bold">{currentSuite.title}</span>
        </div>

        {/* Hero Header Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20">
              {currentSuite.category}
            </span>
            <span className="text-xs px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
              {currentSuite.badge}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {currentSuite.title}
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-300">
              {currentSuite.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-3xl">
              {currentSuite.summary}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenConsultation(currentSuite.category)}
              className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/20 transition flex items-center gap-2 active:scale-95"
            >
              <span>Jadwalkan Demo Solusi Ini</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/6281299817515?text=${encodeURIComponent(`Halo SISCOM, saya ingin mengetahui lebih detail mengenai modul ${currentSuite.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>Tanya Sales WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 2-Column Deep-Dive Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Workflows */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Alur Kerja Operasional Utama
              </h2>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {currentSuite.keyWorkflows.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Value & ROI */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Dampak Bisnis & Efisiensi Biaya
              </h2>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {currentSuite.businessValue.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance & Ideal For Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compliance & Regulation */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Kepatuhan Regulasi Indonesia
              </h2>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {currentSuite.complianceHighlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FileCheck2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Paling Sesuai Digunakan Oleh
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {currentSuite.idealFor.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">
              Siap Menguji Coba Modul {currentSuite.title}?
            </h3>
            <p className="text-xs text-slate-400">
              Dapatkan demonstrasi interaktif bersama konsultan fungsional kami.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation(currentSuite.category)}
            className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition shrink-0 active:scale-95"
          >
            Jadwalkan Konsultasi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};
