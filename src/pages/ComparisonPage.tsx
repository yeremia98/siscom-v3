import React from 'react';
import { ERP_CHECKLIST } from '../content/comparison';
import { Button } from '../components/common/Button';
import { ChevronRight, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';

interface ComparisonPageProps {
  onNavigate: (route: string) => void;
  onOpenDemo: () => void;
}

export const ComparisonPage: React.FC<ComparisonPageProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Komparasi & Evaluasi</span>
      </nav>

      {/* Header */}
      <div className="border-b border-[var(--border-hairline)] pb-8 mb-10 text-left">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Panduan Evaluasi Solusi
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
          Checklist 10 Pertanyaan Memilih Vendor ERP
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Gunakan daftar periksa obyektif ini saat membandingkan vendor ERP untuk memastikan kepatuhan alur bisnis, opsi penempatan server, dan kepastian dukungan purna jual.
        </p>
      </div>

      {/* Table Checklist */}
      <div className="overflow-x-auto rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] mb-16">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-[var(--surface-2)] border-b border-[var(--border-hairline)] font-mono text-[11px] text-[var(--text-muted)] uppercase">
            <tr>
              <th className="p-4 w-12">No</th>
              <th className="p-4 w-1/3">Kriteria Evaluasi</th>
              <th className="p-4 w-1/4">Mengapa Ini Krusial</th>
              <th className="p-4 w-1/3">Jawaban / Solusi SISCOM</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-hairline)]">
            {ERP_CHECKLIST.map((item, idx) => (
              <tr key={item.id} className="hover:bg-[var(--surface-2)]/50 transition-colors">
                <td className="p-4 font-mono font-bold text-[#FF6A1A] align-top">
                  0{idx + 1}
                </td>
                <td className="p-4 font-bold text-[var(--text-main)] align-top">
                  {item.criterion}
                </td>
                <td className="p-4 text-[var(--text-muted)] align-top">
                  {item.whyItMatters}
                </td>
                <td className="p-4 align-top">
                  <div className="flex items-start gap-2">
                    {item.isVerified ? (
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A1A] shrink-0 mt-0.5" />
                    ) : (
                      <HelpCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    )}
                    <span className="text-[var(--text-main)] leading-relaxed">
                      {item.siscomAnswer}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA Ribbon */}
      <div className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-2)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
            Uji Langsung Pertanyaan di Atas pada Skenario Bisnis Anda
          </h3>
          <p className="text-xs text-[var(--text-muted)]">
            Tim konsultan kami siap menjawab rincian alur kerja saat sesi demonstrasi langsung.
          </p>
        </div>
        <Button variant="primary" onClick={onOpenDemo} icon={<ArrowRight className="w-4 h-4" />}>
          Jadwalkan demo
        </Button>
      </div>
    </div>
  );
};
