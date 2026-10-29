import React from 'react';
import { SOLUTION_MODULES } from '../content/modules';
import { Button } from '../components/common/Button';
import { ArrowRight, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

interface SolutionModulesPageProps {
  activeSlug?: string;
  onNavigate: (route: string) => void;
  onOpenDemo: (module?: string) => void;
}

export const SolutionModulesPage: React.FC<SolutionModulesPageProps> = ({
  activeSlug,
  onNavigate,
  onOpenDemo,
}) => {
  const activeModule = activeSlug
    ? SOLUTION_MODULES.find((m) => m.slug === activeSlug)
    : undefined;

  // Single Detail View if activeSlug exists
  if (activeModule) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
          <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
          <ChevronRight className="w-3 h-3" />
          <button type="button" onClick={() => onNavigate('/modul-solusi')} className="hover:underline">Modul Solusi</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-main)] font-bold">{activeModule.name}</span>
        </nav>

        {/* Header Block */}
        <div className="border-b border-[var(--border-hairline)] pb-8 mb-8">
          <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
            Modul Solusi Fungsional
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
            {activeModule.name}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
            {activeModule.summary}
          </p>
        </div>

        {/* Functions & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
            <h2 className="text-base font-bold text-[var(--text-main)] mb-4">
              Fungsi Operasional Modul
            </h2>
            <ul className="space-y-3">
              {activeModule.functions.map((fn, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6A1A] shrink-0 mt-0.5" />
                  <span>{fn}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
            <h2 className="text-base font-bold text-[var(--text-main)] mb-4">
              Fitur Pencatatan Utama
            </h2>
            <ul className="space-y-3">
              {activeModule.features.map((ft, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6A1A] shrink-0 mt-0.5" />
                  <span>{ft}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mockup Laporan Contoh Data */}
        <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-2)] mb-12">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-hairline)]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#FF6A1A]" />
              <span className="text-sm font-bold text-[var(--text-main)]">
                {activeModule.sampleReportName}
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-1)] border border-[var(--border-hairline)] text-[var(--text-muted)]">
              Contoh Data Format
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {activeModule.sampleReportFields.map((field, idx) => (
              <div key={idx} className="p-3 rounded bg-[var(--surface-1)] border border-[var(--border-hairline)]">
                <span className="text-[11px] text-[var(--text-muted)] block mb-1">{field}</span>
                <span className="font-mono text-xs font-bold text-[var(--text-main)]">
                  {idx === 0 ? 'TRX-2024-001' : idx === 1 ? 'Rp 142.500.000' : idx === 2 ? 'Rp 87.200.000' : 'Rp 55.300.000'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Ribbon */}
        <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[var(--text-main)]">
              Ingin melihat alur transaksi modul ini secara langsung?
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Jadwalkan demonstrasi bersama konsultan teknis kami.
            </p>
          </div>
          <Button variant="primary" onClick={() => onOpenDemo(activeModule.slug)}>
            Jadwalkan demo
          </Button>
        </div>
      </div>
    );
  }

  // Index View (All 5 modules)
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Modul Solusi</span>
      </nav>

      <div className="border-b border-[var(--border-hairline)] pb-8 mb-10 text-left">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Kategori Modul Fungsional
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
          Jalur Modul Solusi Fungsional
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Struktur modul inti SISCOM ERP yang menangani alur pembukuan, rantai pasok, kalkulasi biaya pabrikasi, dan pengendalian anggaran.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {SOLUTION_MODULES.map((mod) => (
          <div
            key={mod.slug}
            className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] hover:border-[#FF6A1A] transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-muted)] uppercase mb-3 inline-block">
                Modul Inti
              </span>
              <h2 className="text-lg font-bold text-[var(--text-main)] mb-2">
                {mod.name}
              </h2>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                {mod.summary}
              </p>

              <ul className="space-y-1.5 text-xs text-[var(--text-main)] mb-6">
                {mod.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-[var(--text-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A1A]" />
                    <span className="line-clamp-1">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
              <button
                type="button"
                onClick={() => onNavigate(`/modul-solusi/${mod.slug}`)}
                className="text-xs font-bold text-[#FF6A1A] hover:underline cursor-pointer flex items-center gap-1"
              >
                Buka lembar modul →
              </button>
              <button
                type="button"
                onClick={() => onOpenDemo(mod.slug)}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer"
              >
                Minta demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
