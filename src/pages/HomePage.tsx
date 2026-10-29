import React from 'react';
import { VERTICAL_MODULES } from '../content/modules';
import { COMPANY_INFO } from '../content/company';
import { Mascot } from '../components/common/Mascot';
import { Button } from '../components/common/Button';
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Clock, Building } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onOpenDemo: (moduleSlug?: string) => void;
  onQuickViewModule: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenDemo,
  onQuickViewModule,
}) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappOfficial}?text=${encodeURIComponent(
    'Halo Tim SISCOM, saya ingin konsultasi sistem ERP untuk perusahaan saya.'
  )}`;

  return (
    <div className="w-full">
      {/* SECTION 1: HERO (H1, 1 Kalimat, CTA Ganda, Baris Fakta Terverifikasi, HiSIS Mascot) */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[var(--border-hairline)] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Category Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[var(--border-hairline)] bg-[var(--surface-1)] text-xs font-mono text-[var(--text-muted)] mb-5">
              <span>ERP Indonesia untuk operasional & keuangan</span>
            </div>

            {/* H1 Headline - Lolos portability test, bebas kata terlarang */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.15] mb-4">
              Software ERP terpadu untuk kendali proyek, rantai pasok, dan pembukuan
            </h1>

            {/* 1 Kalimat Pengantar - Faktual, spesifik */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-2xl">
              Pencatatan transaksi terintegrasi dari RAB dan RAP kontraktor, mutasi stok distributor, formula BOM manufaktur, hingga jurnal buku besar otomatis.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <Button
                variant="primary"
                onClick={() => onOpenDemo()}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-sm"
              >
                Jadwalkan demo
              </Button>

              <Button
                variant="secondary"
                href={whatsappUrl}
                external
                icon={<MessageSquare className="w-4 h-4" />}
                className="w-full sm:w-auto text-sm"
              >
                Chat WhatsApp
              </Button>
            </div>

            {/* Baris Fakta Terverifikasi */}
            <div className="w-full pt-6 border-t border-[var(--border-hairline)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-[#FF6A1A] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold text-[var(--text-main)]">Sejak 1994</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Kantor pusat di Jakarta</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FF6A1A] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold text-[var(--text-main)]">08.30 - 22.00</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Dukungan Senin - Minggu</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FF6A1A] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold text-[var(--text-main)]">Cloud & On-Premise</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Backup data minimal H-1</span>
                </div>
              </div>
            </div>
          </div>

          {/* HiSIS AI Assistant Mascot Component */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Mascot
              size={300}
              showChatBubble
              chatTitle="HiSIS AI Assistant"
              chatMessage="Halo! Saya HiSIS. Silakan pilih sektor bisnis Anda di bawah atau klik tombol demo untuk menjadwalkan presentasi alur sistem."
              quickActions={[
                { label: 'RAB & RAP Kontraktor', action: () => onQuickViewModule('construction-one') },
                { label: 'Limit Kredit Distributor', action: () => onQuickViewModule('distribution-suite') },
                { label: 'Kalkulasi HPP Pabrik', action: () => onQuickViewModule('manufacturing-suite') },
                { label: 'Dokumen Pabean BC', action: () => onQuickViewModule('pusat-berikat') },
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: 7 KARTU MODUL VERTIKAL BENTO (Ringkas, dapat diklik untuk Quick View) */}
      <section className="py-16 md:py-24 border-b border-[var(--border-hairline)] bg-[var(--surface-1)]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-mono text-xs text-[#FF6A1A] tracking-wider uppercase block mb-1">
                Modul Vertikal Spesifik Industri
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
                Didesain untuk proses operasional spesifik sektor Anda
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/modul-vertikal')}
              className="text-xs font-bold text-[#FF6A1A] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
            >
              Lihat seluruh rincian modul vertikal →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VERTICAL_MODULES.map((mod, idx) => (
              <div
                key={mod.slug}
                onClick={() => onQuickViewModule(mod.slug)}
                className={`group rounded-lg p-5 border border-[var(--border-hairline)] bg-[var(--surface-2)] hover:border-[#FF6A1A] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="text-[11px] font-mono px-2 py-0.5 rounded border"
                      style={{
                        borderColor: mod.accentColor,
                        color: mod.accentColor,
                      }}
                    >
                      {mod.shortTag}
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] group-hover:text-[#FF6A1A] transition-colors">
                      Pratinjau cepat →
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-main)] mb-2 group-hover:text-[#FF6A1A] transition-colors">
                    {mod.name}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                    {mod.summary}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[var(--text-main)] mb-4">
                    {mod.highlightFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A1A] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[var(--border-hairline)] flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                  <span>Dokumen: {mod.documentCodes.slice(0, 3).join(', ')}</span>
                  <span className="text-[#FF6A1A] font-sans">Buka rincian</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CARA KERJA 3 BARIS (Tautan ke /metodologi) */}
      <section className="py-16 md:py-20 border-b border-[var(--border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="font-mono text-xs text-[#FF6A1A] tracking-wider uppercase block mb-1">
              Alur Penerapan Sistem
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-3">
              Tahapan implementasi transparan bersama tim konsultan
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Pendampingan terstruktur sejak analisis awal alur dokumen hingga sistem beroperasi mandiri di perusahaan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="p-5 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
              <span className="font-mono text-xs font-bold text-[#FF6A1A] block mb-2">01. Persiapan</span>
              <h3 className="text-sm font-bold text-[var(--text-main)] mb-1">Analisis Alur & Konfigurasi</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Pemetaan struktur bagan akun, alur otorisasi antar divisi, dan penyesuaian format formulir transaksi.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
              <span className="font-mono text-xs font-bold text-[#FF6A1A] block mb-2">02. Data & Training</span>
              <h3 className="text-sm font-bold text-[var(--text-main)] mb-1">Migrasi & Pelatihan Staf</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Pemindahan saldo awal dan master data, dilanjutkan sesi pelatihan bertingkat untuk seluruh pengguna.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
              <span className="font-mono text-xs font-bold text-[#FF6A1A] block mb-2">03. Go Live</span>
              <h3 className="text-sm font-bold text-[var(--text-main)] mb-1">Pendampingan & Dukungan VIP</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Pengawalan operasional perdana serta dukungan grup WhatsApp privat beranggotakan tim teknis dan akunting.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => onNavigate('/metodologi')}
              className="text-xs font-bold text-[#FF6A1A] hover:underline cursor-pointer"
            >
              Lihat matriks lengkap pembagian tugas implementasi →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: PITA CTA (Tepat 4 section untuk Beranda) */}
      <section className="py-14 md:py-16 bg-[var(--surface-1)]">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-2)]">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-1.5">
              Siap meninjau alur sistem yang sesuai dengan bisnis Anda?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Konsultan kami siap mendemonstrasikan modul fungsional sesuai skenario operasional industri Anda.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              variant="primary"
              onClick={() => onOpenDemo()}
              icon={<ArrowRight className="w-4 h-4" />}
              className="text-xs py-2 px-4"
            >
              Jadwalkan demo
            </Button>
            <Button
              variant="secondary"
              href={whatsappUrl}
              external
              icon={<MessageSquare className="w-4 h-4" />}
              className="text-xs py-2 px-4"
            >
              Chat WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
