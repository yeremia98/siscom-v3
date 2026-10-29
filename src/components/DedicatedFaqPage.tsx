import React, { useState } from 'react';
import { ENTERPRISE_FAQS } from '../data/erpData';
import { HelpCircle, ChevronDown, ChevronUp, Search, ArrowLeft, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface DedicatedFaqPageProps {
  onNavigate: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const DedicatedFaqPage: React.FC<DedicatedFaqPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = ENTERPRISE_FAQS.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-orange-600 dark:hover:text-orange-400 font-medium flex items-center gap-1 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </button>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-bold">Pusat Informasi & FAQ Enterprise</span>
        </div>

        {/* Header */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparansi Teknis & Tata Kelola</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Pertanyaan Umum Direksi & Tim IT
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
            Jawaban lugas dan mendalam seputar arsitektur basis data, kepatuhan perpajakan Indonesia, metodologi implementasi, serta opsi deployment On-Premise.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="w-4 h-4 absolute left-3.5 top-7 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari topik (misal: On-Premise, PPh 21, RAP, Odoo, UU PDP)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0 mt-0.5">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500">
              Tidak ditemukan jawaban untuk pencarian "{searchQuery}". Silakan hubungi konsultan kami langsung.
            </div>
          )}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-lg text-white">Memiliki Pertanyaan Spesifik Terkait Alur Bisnis Anda?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Tim rekayasa perangkat lunak dan konsultan senior kami berbasis di Jakarta siap berdiskusi langsung.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Pertanyaan Khusus')}
            className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 flex items-center gap-2 shrink-0 active:scale-95 transition-all"
          >
            <span>Hubungi Tim Konsultan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
