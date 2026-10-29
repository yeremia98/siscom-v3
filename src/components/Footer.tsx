import React from 'react';
import { VERIFIED_CONTACTS, MEGA_MENU_SUITES } from '../data/erpData';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Lock,
  FileCheck2,
  AlertTriangle
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
  onOpenConsultation?: (sector?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate(href);
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 border-t border-slate-800 transition-colors">
      {/* Upper Security / Anti-Fraud Assurance Banner */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Peringatan Keamanan Transaksi:</strong> Seluruh pembayaran tagihan dan lisensi resmi SISCOM hanya disalurkan ke rekening bank atas nama <strong>PT Shan Informasi Sistem</strong>.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-semibold shrink-0">
            <span>Sertifikasi Tier 3 Jakarta</span>
            <span>•</span>
            <span>Patuh UU PDP No. 27/2022</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Company Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Corporate Brand & Headquarters (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3 select-none">
              <div className="w-11 h-11 rounded-full bg-white/10 p-1.5 flex items-center justify-center border border-white/20 shadow-md">
                <img
                  src="/assets/aistudio/logo_sis_reverse_81db699c.png"
                  alt="Logo Resmi PT Shan Informasi Sistem"
                  width="36"
                  height="36"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white font-mono tracking-tight">
                  SISCOM ERP
                </span>
                <span className="block text-xs text-slate-400 font-medium">
                  PT Shan Informasi Sistem • Pelopor ERP Sejak 1994
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Rekayasa software akuntansi dan enterprise resource planning karya anak bangsa yang didesain presisi untuk peraturan perundangan dan dinamika bisnis di Indonesia.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{VERIFIED_CONTACTS.headOfficeAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>
                  Telepon Kantor: {VERIFIED_CONTACTS.marketingPhone1} / {VERIFIED_CONTACTS.marketingPhone2}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>
                  Penjualan: {VERIFIED_CONTACTS.salesEmail} | Dukungan: {VERIFIED_CONTACTS.supportEmail}
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <a
                href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Sales SISCOM, saya ingin konsultasi kebutuhan ERP.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition flex items-center gap-1.5 font-bold"
              >
                <span>WhatsApp Sales: {VERIFIED_CONTACTS.whatsappSales}</span>
              </a>
              <a
                href={`https://wa.me/6281381333515?text=${encodeURIComponent('Halo Support SISCOM, saya butuh bantuan teknis.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 transition flex items-center gap-1.5 font-bold"
              >
                <span>Helpdesk: {VERIFIED_CONTACTS.whatsappSupport}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Modul Solusi Spesifik (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Jalur Modul Solusi
            </h4>
            <ul className="space-y-2">
              {MEGA_MENU_SUITES.map((suite) => (
                <li key={suite.id}>
                  <button
                    onClick={() => handleNavClick(`/product/${suite.slug}`)}
                    className="hover:text-orange-400 transition-colors text-left flex items-center justify-between w-full group"
                  >
                    <span>{suite.title}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-orange-400 font-mono">
                      &rarr;
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Arsitektur & Kepatuhan (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Standar Sistem
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('#modul')} className="hover:text-orange-400 transition">
                  Modul Vertikal
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#fitur')} className="hover:text-orange-400 transition">
                  Komparasi Odoo
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#metodologi')} className="hover:text-orange-400 transition">
                  Metodologi 5-Tahap
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#klien')} className="hover:text-orange-400 transition">
                  Portofolio Klien
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#kepatuhan')} className="hover:text-orange-400 transition">
                  Kedaulatan Data UU PDP
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#faq')} className="hover:text-orange-400 transition">
                  FAQ Enterprise
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/blog')} className="hover:text-orange-400 transition">
                  Wawasan Pajak & PMK
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Aksi Cepat Konsultasi (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Mulai Konsultasi
            </h4>
            <p className="text-slate-400 leading-relaxed font-normal">
              Konsultan senior kami siap menganalisis alur bisnis dan rancangan anggaran implementasi sistem Anda.
            </p>
            {onOpenConsultation && (
              <button
                onClick={() => onOpenConsultation()}
                className="w-full py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-center shadow-md transition active:scale-95"
              >
                Jadwalkan Konsultasi
              </button>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white/10 p-0.5 flex items-center justify-center">
              <img
                src="/assets/aistudio/logo_sis_reverse_81db699c.png"
                alt="SiS"
                width="16"
                height="16"
                className="w-full h-full object-contain"
              />
            </div>
            <span>
              &copy; 1994 - {new Date().getFullYear()} PT Shan Informasi Sistem. Seluruh Hak Cipta Dilindungi Undang-Undang.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-slate-300 cursor-pointer" onClick={() => handleNavClick('#kepatuhan')}>
              Kebijakan Privasi
            </span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer" onClick={() => handleNavClick('#kepatuhan')}>
              Perlindungan Data (UU PDP)
            </span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer" onClick={() => handleNavClick('#faq')}>
              Service Level Agreement
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
