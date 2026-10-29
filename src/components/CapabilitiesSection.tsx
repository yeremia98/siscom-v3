import React from 'react';
import { ENTERPRISE_CAPABILITIES } from '../data/erpData';
import { Check } from 'lucide-react';

interface CapabilitiesSectionProps {
  onOpenConsultation: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenConsultation }) => {
  const comparisonMatrix = [
    {
      feature: 'Kepatuhan Regulasi Pajak Indonesia (PPh 21 TER, e-Faktur, PPh Final Konstruksi)',
      siscom: 'Tersedia Native (Standar Bawaan Sistem)',
      odoo: 'Harus Menggunakan Modul Komunitas / Custom Code Rawan Rusak',
      salesforce: 'Memerlukan Add-On Partner Eksternal Mahal',
    },
    {
      feature: 'Biaya Penyesuaian Alur Bisnis (Customization)',
      siscom: 'Termasuk dalam Lingkup Pendampingan Resmi',
      odoo: 'Tarif Konsultan Python Per Jam Sangat Tinggi ($40-$100/jam)',
      salesforce: 'Tarif Konsultan Enterprise Developer Global',
    },
    {
      feature: 'Pilihan Deployment Server (Cloud & On-Premise)',
      siscom: 'Fleksibel: Private Cloud Tier 3 RI atau On-Premise Gedung Sendiri',
      odoo: 'Odoo Online Terbatas; On-Premise Butuh Tim DevOps Linux Khusus',
      salesforce: 'Hanya Multi-Tenant Public Cloud Global (Tanpa On-Premise)',
    },
    {
      feature: 'Kanal Dukungan Teknis & Jam Operasional',
      siscom: 'Dedicated Enterprise Support & Tim Lokal Jakarta',
      odoo: 'Ticketing Global Bahasa Inggris / Bergantung Mitra Lokal',
      salesforce: 'SLA Support Berjenjang Sesuai Kontrak Korporasi Global',
    },
    {
      feature: 'Kedaulatan Data Sesuai UU Perlindungan Data Pribadi (UU PDP)',
      siscom: 'Server Fisik Berada di Wilayah Hukum Indonesia (Jakarta)',
      odoo: 'Umumnya Ditempatkan di Data Center Luar Negeri',
      salesforce: 'Data Center Luar Negeri (Perlu Verifikasi Kepatuhan Data)',
    },
  ];

  return (
    <section id="fitur" className="py-20 bg-white dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/25 mb-4">
            <span>Arsitektur Enterprise Kelas Kakap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Fondasi Teknologi Tangguh yang Mengungguli Standar Konvensional
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Menghilangkan kompromi antara fleksibilitas alur lokal dan keandalan sistem berskala enterprise.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ENTERPRISE_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-slate-700 transition-all duration-150 space-y-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 font-semibold">
                  {cap.highlight}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{cap.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* AstroWind Enterprise Comparison Matrix: SISCOM vs Odoo vs Salesforce */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 space-y-6 shadow-sm">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 block font-semibold">
              Evaluasi Arsitektur Objektif
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Mengapa Perusahaan Indonesia Memilih SISCOM Dibandingkan Solusi Global?
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-normal">
              Analisa perbandingan menyeluruh terhadap kesesuaian operasional di Indonesia.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                  <th className="py-3 px-4 font-semibold">Dimensi Kritis</th>
                  <th className="py-3 px-4 font-bold text-orange-600 dark:text-orange-400 bg-orange-500/10 rounded-t-xl">
                    SISCOM Enterprise
                  </th>
                  <th className="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Odoo Enterprise</th>
                  <th className="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Salesforce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white dark:hover:bg-slate-900/80 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-800 dark:text-slate-300 align-top">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white bg-orange-500/5 align-top">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{row.siscom}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 align-top font-normal">
                      {row.odoo}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 align-top font-normal">
                      {row.salesforce}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
