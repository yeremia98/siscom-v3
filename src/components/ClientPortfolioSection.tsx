import React from 'react';
import { ENTERPRISE_CLIENTS, VERIFIED_CONTACTS } from '../data/erpData';
import { ShieldCheck, Award, Building, CheckCircle, Factory, Network, ArrowRight } from 'lucide-react';

interface ClientPortfolioSectionProps {
  onOpenConsultation: (sector?: string) => void;
}

export const ClientPortfolioSection: React.FC<ClientPortfolioSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="klien" className="py-20 px-4 sm:px-6 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Portofolio & Rekam Jejak Industri Indonesia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Dipercaya 2.500+ Perusahaan Skala Menengah & Korporasi Sejak 1994
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            Dari kontraktor proyek berskala nasional hingga pabrik manufaktur di kawasan berikat, SISCOM ERP menjadi tulang punggung operasional dan kendali finansial bebas kompromi.
          </p>
        </div>

        {/* Enterprise Client Verification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTERPRISE_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-orange-500/40 dark:hover:border-orange-500/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {client.industry}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Terverifikasi</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {client.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  <strong className="text-slate-800 dark:text-slate-200 font-semibold">Implementasi Inti: </strong>
                  {client.highlight}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Sistem: Dedicated Private / On-Premise</span>
                <span className="font-semibold text-orange-600 dark:text-orange-400">100% Native RI</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scalability Proof Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-xl font-bold text-white flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Standar Keandalan Data Center Indonesia & Audit-Ready</span>
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Infrastruktur berlokasi di Tier 3/4 Data Center Jakarta sesuai mandat UU Perlindungan Data Pribadi (UU PDP No. 27/2022). Siap diaudit oleh Kantor Pajak (DJP), BPKP, maupun Auditor Pabean Ditjen Bea Cukai.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Portofolio Klien')}
            className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/30 flex items-center gap-2 shrink-0 active:scale-95 transition-all"
          >
            <span>Konsultasikan Kebutuhan Industri Anda</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
