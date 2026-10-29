import React from 'react';
import { COMPANY_INFO } from '../content/company';
import { SOLUTION_MODULES, VERTICAL_MODULES } from '../content/modules';
import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--surface-1)] text-left text-xs">
      {/* Top Security Banner */}
      <div className="border-b border-[var(--border-hairline)] bg-[var(--surface-2)]/60 py-3 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF6A1A] shrink-0" />
            <span>
              <strong>Peringatan Keamanan:</strong> Seluruh pembayaran tagihan dan lisensi resmi SISCOM hanya disalurkan ke rekening bank atas nama{' '}
              <strong className="text-[var(--text-main)]">{COMPANY_INFO.legalName}</strong>.
            </span>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/verifikasi')}
            className="text-[#FF6A1A] hover:underline font-mono shrink-0 cursor-pointer"
          >
            Verifikasi Kanal Resmi →
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1: Company Profile */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/aistudio/logo_sis_reverse_81db699c.png"
              alt="Logo SISCOM"
              width="28"
              height="28"
              className="w-7 h-7 rounded-full object-contain"
            />
            <div>
              <span className="font-heading font-bold text-sm text-[var(--text-main)] block">
                {COMPANY_INFO.brandName}
              </span>
              <span className="text-[10px] text-[var(--text-muted)] block">
                {COMPANY_INFO.legalName} • Berdiri sejak 1994
              </span>
            </div>
          </div>

          <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
            Rekayasa perangkat lunak akuntansi dan enterprise resource planning (ERP) untuk kendali finansial, proyek, dan rantai pasok industri di Indonesia.
          </p>

          <div className="space-y-2 text-[11px] text-[var(--text-muted)]">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF6A1A] shrink-0 mt-0.5" />
              <span>
                {COMPANY_INFO.address}{' '}
                <span className="text-amber-500 font-mono">({COMPANY_INFO.addressConfirmationNote})</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#FF6A1A] shrink-0" />
              <span>{COMPANY_INFO.phone} • WhatsApp: +62 812-9981-7515</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#FF6A1A] shrink-0" />
              <span>{COMPANY_INFO.emailSales} | {COMPANY_INFO.emailSupport}</span>
            </div>
          </div>
        </div>

        {/* Column 2: Modul Vertikal */}
        <div className="space-y-3">
          <h4 className="font-bold text-[var(--text-main)] font-mono text-[11px] uppercase tracking-wider">
            Modul Vertikal
          </h4>
          <ul className="space-y-1.5 text-[11px] text-[var(--text-muted)]">
            {VERTICAL_MODULES.map((mod) => (
              <li key={mod.slug}>
                <button
                  type="button"
                  onClick={() => onNavigate(`/modul-vertikal/${mod.slug}`)}
                  className="hover:text-[#FF6A1A] transition-colors cursor-pointer text-left"
                >
                  {mod.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Modul Solusi */}
        <div className="space-y-3">
          <h4 className="font-bold text-[var(--text-main)] font-mono text-[11px] uppercase tracking-wider">
            Modul Solusi
          </h4>
          <ul className="space-y-1.5 text-[11px] text-[var(--text-muted)]">
            {SOLUTION_MODULES.map((mod) => (
              <li key={mod.slug}>
                <button
                  type="button"
                  onClick={() => onNavigate(`/modul-solusi/${mod.slug}`)}
                  className="hover:text-[#FF6A1A] transition-colors cursor-pointer text-left"
                >
                  {mod.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Navigasi & Evaluasi */}
        <div className="space-y-3">
          <h4 className="font-bold text-[var(--text-main)] font-mono text-[11px] uppercase tracking-wider">
            Informasi Sistem
          </h4>
          <ul className="space-y-1.5 text-[11px] text-[var(--text-muted)]">
            <li>
              <button
                type="button"
                onClick={() => onNavigate('/metodologi')}
                className="hover:text-[#FF6A1A] transition-colors cursor-pointer"
              >
                Metodologi Implementasi
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('/komparasi')}
                className="hover:text-[#FF6A1A] transition-colors cursor-pointer"
              >
                Checklist Memilih ERP
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('/klien')}
                className="hover:text-[#FF6A1A] transition-colors cursor-pointer"
              >
                Sektor Industri Dilayani
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('/keamanan-data')}
                className="hover:text-[#FF6A1A] transition-colors cursor-pointer"
              >
                Opsi Penempatan & Server
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('/wawasan-fiskal')}
                className="hover:text-[#FF6A1A] transition-colors cursor-pointer"
              >
                Wawasan Fiskal & Sistem
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('/faq')}
                className="hover:text-[#FF6A1A] transition-colors cursor-pointer"
              >
                Pertanyaan Faktual (FAQ)
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('/tentang-siscom')}
                className="hover:text-[#FF6A1A] transition-colors cursor-pointer"
              >
                Tentang SISCOM & Linimasa
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('/kebijakan-privasi')}
                className="hover:text-[#FF6A1A] transition-colors cursor-pointer"
              >
                Kebijakan Privasi
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[var(--border-hairline)] py-4 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[var(--text-muted)]">
          <span>
            © 1994 - 2026 {COMPANY_INFO.legalName}. Seluruh hak cipta dilindungi undang-undang.
          </span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/verifikasi')}
              className="hover:underline cursor-pointer"
            >
              Kanal Resmi
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/kebijakan-privasi')}
              className="hover:underline cursor-pointer"
            >
              Privasi Formulir
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
