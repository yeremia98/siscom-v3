import React from 'react';
import { COMPANY_INFO } from '../content/company';
import { Button } from '../components/common/Button';
import { ChevronRight, ShieldCheck, AlertTriangle, Building, Phone, Mail } from 'lucide-react';

interface VerificationPageProps {
  onNavigate: (route: string) => void;
}

export const VerificationPage: React.FC<VerificationPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12 text-left">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Verifikasi Kanal Resmi</span>
      </nav>

      {/* Header */}
      <div className="border-b border-[var(--border-hairline)] pb-8 mb-10">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Keamanan & Transparansi
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
          Verifikasi Identitas & Saluran Resmi SISCOM
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Guna mencegah penipuan yang mengatasnamakan PT Shan Informasi Sistem, seluruh transaksi dan korespondensi resmi hanya dilakukan melalui saluran berikut.
        </p>
      </div>

      {/* Peringatan Rekening Bank Resmi */}
      <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/10 mb-10">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-sm sm:text-base font-bold text-[var(--text-main)] mb-1">
              Peringatan Keamanan Pembayaran Tagihan & Lisensi
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Seluruh pembayaran tagihan lisensi, kontrak pemeliharaan (MSC), dan jasa implementasi SISCOM hanya disalurkan ke rekening bank resmi atas nama perusahaan{' '}
              <strong className="text-[var(--text-main)] font-bold">PT Shan Informasi Sistem</strong>. SISCOM tidak pernah meminta pembayaran ke rekening pribadi staf atau pihak ketiga.
            </p>
          </div>
        </div>
      </div>

      {/* Saluran Resmi Terdaftar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
          <h2 className="text-base font-bold text-[var(--text-main)] mb-4 flex items-center gap-2">
            <Building className="w-4 h-4 text-[#FF6A1A]" />
            Entitas Badan Hukum & Kantor
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-[var(--text-muted)]">
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] block">Nama Badan Hukum:</span>
              <span className="text-[var(--text-main)] font-bold">{COMPANY_INFO.legalName}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] block">Merek Perangkat Lunak:</span>
              <span className="text-[var(--text-main)] font-bold">{COMPANY_INFO.brandName} (Terdaftar Sejak 1994)</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] block">Alamat Kantor Pusat:</span>
              <span className="text-[var(--text-main)]">{COMPANY_INFO.address}</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
          <h2 className="text-base font-bold text-[var(--text-main)] mb-4 flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#FF6A1A]" />
            Nomor Telepon & WhatsApp Resmi
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-[var(--text-muted)]">
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] block">Telepon Kantor (Hunting):</span>
              <span className="text-[var(--text-main)] font-mono font-bold">{COMPANY_INFO.phone}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] block">WhatsApp Konsultasi Sales:</span>
              <span className="text-[var(--text-main)] font-mono font-bold">+62 812-9981-7515</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] block">WhatsApp Helpdesk & Support:</span>
              <span className="text-[var(--text-main)] font-mono font-bold">+62 813-8133-3515</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] block">Domain & Email Resmi:</span>
              <span className="text-[var(--text-main)] font-mono">@siscom.co.id (sales@siscom.co.id)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
