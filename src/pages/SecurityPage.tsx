import React from 'react';
import { HOSTING_OPTIONS, ACCESS_CONTROL_FACTS } from '../content/security';
import { Button } from '../components/common/Button';
import { ChevronRight, Server, Shield, CheckCircle2, Lock, HardDrive } from 'lucide-react';

interface SecurityPageProps {
  onNavigate: (route: string) => void;
  onOpenDemo: () => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Keamanan Data</span>
      </nav>

      {/* Header */}
      <div className="border-b border-[var(--border-hairline)] pb-8 mb-10 text-left">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Infrastruktur & Penempatan
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
          Opsi Penempatan Sistem & Keamanan Data
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Pilihan implementasi fleksibel antara Private Cloud Server terkelola dan On-Premise lokal, dilengkapi backup berkala dan otorisasi hak akses bertingkat.
        </p>
      </div>

      {/* Hosting Options: Private Cloud vs On-Premise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {HOSTING_OPTIONS.map((opt, idx) => (
          <div
            key={idx}
            className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-1)] flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[var(--surface-2)] flex items-center justify-center text-[#FF6A1A] mb-4">
                {opt.type === 'cloud' ? <Server className="w-5 h-5" /> : <HardDrive className="w-5 h-5" />}
              </div>
              <h2 className="text-xl font-bold text-[var(--text-main)] mb-2">
                {opt.name}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {opt.summary}
              </p>

              <ul className="space-y-3 mb-6">
                {opt.features.map((ft, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A1A] shrink-0 mt-0.5" />
                    <span>{ft}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-hairline)]">
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                Sumber: SISCOM Brosur Hal. 8 & Company Profile Hal. 14
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Hak Akses & Kontrol Internal */}
      <div className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-2)] mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-5 h-5 text-[#FF6A1A]" />
          <h2 className="text-lg font-bold text-[var(--text-main)]">
            Kendali Hak Akses & Approval Bertingkat
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACCESS_CONTROL_FACTS.map((fact, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-hairline)]">
              <span className="font-mono text-xs text-[#FF6A1A] block mb-1">0{idx + 1}</span>
              <p className="text-xs text-[var(--text-main)] leading-relaxed">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Ribbon */}
      <div className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-1)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
            Konsultasikan Arsitektur Penempatan Server Anda
          </h3>
          <p className="text-xs text-[var(--text-muted)]">
            Tim teknis kami siap memetakan spesifikasi server yang optimal untuk volume data Anda.
          </p>
        </div>
        <Button variant="primary" onClick={onOpenDemo}>
          Jadwalkan demo
        </Button>
      </div>
    </div>
  );
};
