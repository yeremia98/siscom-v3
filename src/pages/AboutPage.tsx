import React from 'react';
import { COMPANY_INFO } from '../content/company';
import { Timeline } from '../components/common/Timeline';
import { Mascot } from '../components/common/Mascot';
import { Button } from '../components/common/Button';
import { 
  ChevronRight, 
  Download, 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  Calendar,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: string) => void;
  onOpenDemo: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12 text-left">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Tentang SISCOM</span>
      </nav>

      {/* Header */}
      <div className="border-b border-[var(--border-hairline)] pb-8 mb-12">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Profil Korporat
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
          PT Shan Informasi Sistem (SISCOM ERP)
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed mb-6">
          Berdiri sejak tahun 1994 di Jakarta, PT Shan Informasi Sistem mengembangkan perangkat lunak ERP untuk manajemen operasional dan akuntansi bisnis di Indonesia.
        </p>

        {/* 4 Klaim Perusahaan Berlabel Sesuai Bagian 3 */}
        <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-hairline)] max-w-3xl">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-hairline)]">
            <span className="text-[11px] font-mono text-[#FF6A1A] uppercase">
              {COMPANY_INFO.claims.label}
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              Sumber: {COMPANY_INFO.claims.date}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--text-main)] block">
                {COMPANY_INFO.claims.clients}
              </span>
              <span className="text-xs text-[var(--text-muted)]">Klien</span>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--text-main)] block">
                {COMPANY_INFO.claims.products}
              </span>
              <span className="text-xs text-[var(--text-muted)]">Produk</span>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--text-main)] block">
                {COMPANY_INFO.claims.modules}
              </span>
              <span className="text-xs text-[var(--text-muted)]">Modul</span>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold text-[var(--text-main)] block">
                {COMPANY_INFO.claims.industries}
              </span>
              <span className="text-xs text-[var(--text-muted)]">Sektor Industri</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visi dan Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[#FF6A1A] uppercase mb-3 inline-block">
            Visi Perusahaan
          </span>
          <p className="text-sm sm:text-base font-semibold text-[var(--text-main)] leading-relaxed mb-4">
            "{COMPANY_INFO.vision.statement}"
          </p>
          <span className="text-[10px] font-mono text-[var(--text-muted)] opacity-60">
            Sumber: {COMPANY_INFO.vision.metadata.source}
          </span>
        </div>

        <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[#FF6A1A] uppercase inline-block">
              Misi Perusahaan
            </span>
            <span className="text-[10px] font-mono text-amber-500">
              Perlu konfirmasi versi final
            </span>
          </div>
          <ul className="space-y-2 mb-4">
            {COMPANY_INFO.mission.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A1A] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <span className="text-[10px] font-mono text-[var(--text-muted)] opacity-60">
            Sumber: {COMPANY_INFO.mission.metadata.source}
          </span>
        </div>
      </div>

      {/* Linimasa Perusahaan dengan Maskot HiSIS di Sisi */}
      <div className="mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-1">
            Sejarah Perkembangan
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
            Linimasa Rekayasa Sistem Sejak 1994
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <Timeline />
          </div>

          {/* Maskot HiSIS di sisi linimasa */}
          <div className="lg:col-span-4 sticky top-24 hidden lg:flex flex-col items-center p-6 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-1)]">
            <Mascot size={200} />
            <span className="font-mono text-xs font-bold text-[var(--text-main)] mt-3">
              HiSIS Virtual Assistant
            </span>
            <p className="text-[11px] text-[var(--text-muted)] text-center mt-1">
              Menemani perjalanan transformasi digital sistem perusahaan Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Kontak Kantor & Dokumen Profil Resmi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
          <h2 className="text-base font-bold text-[var(--text-main)] mb-4">
            Kantor Pusat & Saluran Komunikasi
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-[var(--text-muted)]">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#FF6A1A] shrink-0 mt-0.5" />
              <div>
                <p className="text-[var(--text-main)]">{COMPANY_INFO.address}</p>
                <span className="text-[10px] font-mono text-amber-500">
                  ({COMPANY_INFO.addressConfirmationNote})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#FF6A1A] shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#FF6A1A] shrink-0" />
              <span>{COMPANY_INFO.emailSales} | {COMPANY_INFO.emailSupport}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--border-hairline)]">
            <button
              type="button"
              onClick={() => onNavigate('/verifikasi')}
              className="text-xs font-bold text-[#FF6A1A] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Buka Halaman Verifikasi Kanal Resmi →
            </button>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-[var(--text-main)] mb-2">
              Unduhan Dokumen Resmi
            </h2>
            <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
              Unduh salinan PDF profil perusahaan dan spesifikasi modul ERP untuk bahan rapat internal manajemen.
            </p>
            <div className="space-y-2">
              <a
                href="/1__SISCOM_Company_Profile.pdf"
                download
                className="flex items-center justify-between p-3 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-2)] text-xs text-[var(--text-main)] hover:border-[#FF6A1A] transition-colors"
              >
                <span>Company Profile SISCOM (PDF)</span>
                <Download className="w-4 h-4 text-[#FF6A1A]" />
              </a>
              <a
                href="/Brosur_SISCOM_ERP_Software.pdf"
                download
                className="flex items-center justify-between p-3 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-2)] text-xs text-[var(--text-main)] hover:border-[#FF6A1A] transition-colors"
              >
                <span>Brosur Spesifikasi Modul SISCOM (PDF)</span>
                <Download className="w-4 h-4 text-[#FF6A1A]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Ribbon */}
      <div className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-2)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
            Siap Membahas Kebutuhan Sistem Bersama Tim SISCOM?
          </h3>
          <p className="text-xs text-[var(--text-muted)]">
            Jadwalkan sesi demonstrasi langsung bersama konsultan teknis kami.
          </p>
        </div>
        <Button variant="primary" onClick={onOpenDemo}>
          Jadwalkan demo
        </Button>
      </div>
    </div>
  );
};
