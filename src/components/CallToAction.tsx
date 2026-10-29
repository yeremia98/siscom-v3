import React from 'react';
import { VERIFIED_CONTACTS } from '../data/erpData';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

interface CallToActionProps {
  onOpenConsultation: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 p-8 sm:p-14 overflow-hidden shadow-2xl">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/25">
              <span>Konsultasi Solusi & Analisis Kebutuhan Alur</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Siap Menghubungkan Seluruh Alur Operasional Bisnis Anda ke Dalam Satu Ekosistem Terpadu?
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Diskusikan tantangan proses bisnis Anda bersama tim konsultan senior SISCOM. Dapatkan pemetaan modul fungsional dan demonstrasi solusi yang disesuaikan dengan skenario industri Anda.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2 font-normal">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Konsultasi langsung bersama spesialis industri senior</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tanpa komitmen pembelian di muka</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kerahasiaan data bisnis dilindungi NDA & UU PDP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Respon cepat dalam waktu 1 jam kerja</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-orange-600/25 active:scale-95 transition-all flex items-center justify-center gap-2.5"
              >
                <span>Jadwalkan Konsultasi Solusi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi sistem ERP Enterprise.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Hotline Sales</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
