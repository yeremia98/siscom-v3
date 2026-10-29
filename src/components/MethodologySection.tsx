import React from 'react';
import { IMPLEMENTATION_STEPS } from '../data/erpData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface MethodologySectionProps {
  onOpenConsultation: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="metodologi" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/25 mb-4">
            <span>Metodologi Teruji 5-Tahap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pendampingan End-to-End Hingga Serah Terima Go-Live Sukses
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Menghapus risiko kegagalan adopsi. Konsultan senior kami membimbing alur kerja organisasi Anda dari pemetaan dokumen hingga sistem beroperasi penuh.
          </p>
        </div>

        {/* AstroWind Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {IMPLEMENTATION_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-orange-500/50 dark:hover:border-slate-700 transition-colors duration-150 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-orange-600 dark:text-orange-500 font-mono">
                    {step.number}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Garansi Pendampingan Hypercare Pasca Go-Live
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-normal">
                Konsultan tetap mendampingi tim akunting Anda hingga penutupan buku periode pertama selesai dengan neraca seimbang.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 shrink-0 active:scale-95"
          >
            <span>Konsultasikan Roadmap Proyek Anda</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
