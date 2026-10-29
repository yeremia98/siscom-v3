import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, X, Sparkles, Headset, FileText } from 'lucide-react';
import { VERIFIED_CONTACTS } from '../data/erpData';

interface FloatingWidgetsProps {
  onOpenConsultation: (sector?: string) => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenConsultation }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDialOpen, setIsDialOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas halaman"
          className="w-11 h-11 rounded-full bg-slate-900/90 dark:bg-slate-800/90 hover:bg-orange-600 dark:hover:bg-orange-600 text-white shadow-xl border border-slate-700/60 dark:border-slate-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 active:scale-95 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}

      {/* Floating Speed Dial Expanded Menu */}
      {isDialOpen && (
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-2.5 w-72 mb-2 animate-in slide-in-from-bottom-3 duration-200 text-slate-800 dark:text-slate-100">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Layanan Korporat SISCOM
              </span>
            </div>
            <button
              onClick={() => setIsDialOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Option 1: WhatsApp Hotline */}
          <a
            href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM ERP, saya ingin konsultasi sistem enterprise untuk perusahaan kami.')}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsDialOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-emerald-500/20 text-slate-800 dark:text-slate-200 transition group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                WhatsApp Advisory
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">0812-9981-7515</p>
            </div>
          </a>

          {/* Option 2: Marketing Phone */}
          <a
            href="tel:+622156945002"
            onClick={() => setIsDialOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-sky-500/20 text-slate-800 dark:text-slate-200 transition group"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
              <Headset className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400">
                Kantor Pusat Marketing
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">+62 21 5694 5002 / 5003</p>
            </div>
          </a>

          {/* Option 3: Form Konsultasi Solusi */}
          <button
            onClick={() => {
              setIsDialOpen(false);
              onOpenConsultation('Floating Widget');
            }}
            className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-950/40 border border-orange-500/20 text-slate-800 dark:text-slate-200 transition group text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                Formulir Konsultasi Solusi
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Jadwalkan presentasi tim senior</p>
            </div>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsDialOpen(!isDialOpen)}
        aria-label="Buka kontak layanan korporat"
        className="h-13 px-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-xs shadow-2xl shadow-orange-600/40 flex items-center gap-2.5 active:scale-95 transition-all duration-200 border border-orange-400/40"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Hubungi Konsultan</span>
      </button>
    </div>
  );
};
