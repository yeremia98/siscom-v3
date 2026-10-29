import React, { useState } from 'react';
import { INDUSTRY_SECTORS } from '../content/clients';
import { COMPANY_INFO } from '../content/company';
import { Button } from '../components/common/Button';
import { ChevronRight, ArrowRight, ShieldCheck, Mail, Building } from 'lucide-react';

interface ClientsPageProps {
  onNavigate: (route: string) => void;
  onOpenDemo: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate, onOpenDemo }) => {
  const [requestedIndustry, setRequestedIndustry] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReference = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail || !requestedIndustry) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Klien & Industri</span>
      </nav>

      {/* Header */}
      <div className="border-b border-[var(--border-hairline)] pb-8 mb-10 text-left">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Jangkauan Sektor Industri
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
          Industri yang Dilayani SISCOM ERP
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Sejak tahun 1994, SISCOM telah mendukung berbagai jenis badan usaha di Indonesia dengan solusi sistem yang disesuaikan menurut kompleksitas operasional tiap bidang.
        </p>
      </div>

      {/* Sektor Industri Berdasarkan Brosur Resmi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {INDUSTRY_SECTORS.map((sec, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] hover:border-[#FF6A1A] transition-colors"
          >
            <div className="w-8 h-8 rounded bg-[var(--surface-2)] flex items-center justify-center text-[#FF6A1A] mb-4">
              <Building className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-[var(--text-main)] mb-2">
              {sec.name}
            </h2>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
              {sec.description}
            </p>
            <div className="pt-3 border-t border-[var(--border-hairline)]">
              <span className="text-[11px] font-mono text-[var(--text-muted)] block mb-1.5">
                Modul lazim digunakan:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {sec.typicalProducts.map((p, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-main)] border border-[var(--border-hairline)]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Protokol Data: Formulir Permintaan Referensi Klien */}
      <div className="max-w-2xl mx-auto p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-1)] mb-16 text-left">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-[#FF6A1A]" />
          <h2 className="text-lg font-bold text-[var(--text-main)]">
            Minta Referensi Klien di Industri Anda
          </h2>
        </div>
        <p className="text-xs text-[var(--text-muted)] mb-6 leading-relaxed">
          Sesuai etika kerahasiaan bisnis dan protokol perlindungan data, SISCOM hanya membagikan kontak referensi klien aktif setelah ada persetujuan kedua belah pihak.
        </p>

        {submitted ? (
          <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
            Terima kasih. Permintaan referensi untuk sektor <strong className="text-white">{requestedIndustry}</strong> telah kami terima. Tim konsultan kami akan menghubungi Anda melalui alamat email <strong className="text-white">{clientEmail}</strong>.
          </div>
        ) : (
          <form onSubmit={handleSubmitReference} className="space-y-4">
            <div>
              <label htmlFor="ref-industry" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                Pilih Sektor Usaha Anda *
              </label>
              <select
                id="ref-industry"
                required
                value={requestedIndustry}
                onChange={(e) => setRequestedIndustry(e.target.value)}
                className="w-full text-xs p-2.5 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
              >
                <option value="">-- Pilih Sektor --</option>
                {INDUSTRY_SECTORS.map((s, idx) => (
                  <option key={idx} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="ref-email" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                Email Perusahaan Anda *
              </label>
              <input
                id="ref-email"
                type="email"
                required
                placeholder="nama@perusahaan.co.id"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full text-xs p-2.5 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
              />
            </div>

            <Button variant="primary" type="submit" className="w-full justify-center text-xs">
              Kirim Permintaan Referensi
            </Button>
          </form>
        )}
      </div>

      {/* CTA Ribbon */}
      <div className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-2)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
            Ingin berkonsultasi mengenai kesesuaian alur bisnis Anda?
          </h3>
          <p className="text-xs text-[var(--text-muted)]">
            Jadwalkan sesi demonstrasi langsung bersama konsultan SISCOM.
          </p>
        </div>
        <Button variant="primary" onClick={onOpenDemo} icon={<ArrowRight className="w-4 h-4" />}>
          Jadwalkan demo
        </Button>
      </div>
    </div>
  );
};
