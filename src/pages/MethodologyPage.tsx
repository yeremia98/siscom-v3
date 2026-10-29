import React from 'react';
import { METHODOLOGY_STEPS } from '../content/methodology';
import { Button } from '../components/common/Button';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface MethodologyPageProps {
  onNavigate: (route: string) => void;
  onOpenDemo: () => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Metodologi</span>
      </nav>

      {/* Header */}
      <div className="border-b border-[var(--border-hairline)] pb-8 mb-10 text-left">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Tahapan Implementasi Sistem
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
          Metodologi 6 Langkah Implementasi ERP
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Kerangka kerja terstruktur dari layanan Custom Implementasi SISCOM untuk memastikan adopsi sistem yang terukur dari fase kick-off hingga pengoperasian mandiri.
        </p>
      </div>

      {/* 6 Steps Vertical Timeline */}
      <div className="mb-16">
        <div className="relative border-l border-[var(--border-hairline)] ml-4 sm:ml-8 space-y-10">
          {METHODOLOGY_STEPS.map((step) => (
            <div key={step.step} className="relative pl-6 sm:pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--surface-1)] border-2 border-[#FF6A1A]" />
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-xs font-bold text-[#FF6A1A]">
                  Langkah 0{step.step}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
                  {step.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-3xl mb-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabel "Anda Siapkan / SISCOM Kerjakan" */}
      <div className="mb-16">
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-main)] mb-1">
            Matriks Pembagian Tugas Implementasi
          </h2>
          <p className="text-xs text-[var(--text-muted)]">
            Transparansi pembagian peran antara tim internal klien dan tim teknis SISCOM.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[var(--surface-2)] border-b border-[var(--border-hairline)] font-mono text-[11px] text-[var(--text-muted)] uppercase">
              <tr>
                <th className="p-4 w-28">Tahapan</th>
                <th className="p-4 w-1/2">Yang Anda Siapkan (Klien)</th>
                <th className="p-4 w-1/2">Yang SISCOM Kerjakan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-hairline)]">
              {METHODOLOGY_STEPS.map((st) => (
                <tr key={st.step} className="hover:bg-[var(--surface-2)]/50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#FF6A1A] align-top">
                    Tahap 0{st.step}
                  </td>
                  <td className="p-4 text-[var(--text-muted)] leading-relaxed align-top">
                    {st.clientPrepares}
                  </td>
                  <td className="p-4 text-[var(--text-main)] leading-relaxed align-top">
                    {st.siscomDelivers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Ribbon */}
      <div className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-1)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
            Siap mendiskusikan jadwal kick-off untuk perusahaan Anda?
          </h3>
          <p className="text-xs text-[var(--text-muted)]">
            Konsultan kami siap membantu penyusunan jadwal dan pemetaan tim implementasi.
          </p>
        </div>
        <Button variant="primary" onClick={onOpenDemo} icon={<ArrowRight className="w-4 h-4" />}>
          Jadwalkan demo
        </Button>
      </div>
    </div>
  );
};
