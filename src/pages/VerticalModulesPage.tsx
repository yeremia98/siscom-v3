import React from 'react';
import { VERTICAL_MODULES } from '../content/modules';
import { COMPANY_INFO } from '../content/company';
import { Button } from '../components/common/Button';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  Building2, 
  Layers, 
  FileCheck,
  Server,
  MessageSquare
} from 'lucide-react';

interface VerticalModulesPageProps {
  activeSlug?: string;
  onNavigate: (route: string) => void;
  onOpenDemo: (moduleSlug?: string) => void;
  onQuickView: (slug: string) => void;
}

export const VerticalModulesPage: React.FC<VerticalModulesPageProps> = ({
  activeSlug,
  onNavigate,
  onOpenDemo,
  onQuickView,
}) => {
  const activeModule = activeSlug
    ? VERTICAL_MODULES.find((m) => m.slug === activeSlug)
    : undefined;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappOfficial}?text=${encodeURIComponent(
    `Halo Tim SISCOM, saya ingin konsultasi mengenai modul ${activeModule?.name || 'SISCOM ERP'}.`
  )}`;

  // DETAIL VIEW
  if (activeModule) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
          <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
          <ChevronRight className="w-3 h-3" />
          <button type="button" onClick={() => onNavigate('/modul-vertikal')} className="hover:underline">Modul Vertikal</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-main)] font-bold">{activeModule.name}</span>
        </nav>

        {/* Header Block */}
        <div className="border-b border-[var(--border-hairline)] pb-8 mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className="text-xs font-mono px-2.5 py-1 rounded border"
              style={{
                borderColor: activeModule.accentColor,
                color: activeModule.accentColor,
              }}
            >
              {activeModule.shortTag}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Dokumen: {activeModule.documentCodes.join(', ')}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
            {activeModule.name}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed mb-6">
            {activeModule.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              onClick={() => onOpenDemo(activeModule.slug)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Jadwalkan demo
            </Button>
            <Button
              variant="secondary"
              href={whatsappUrl}
              external
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Chat WhatsApp
            </Button>
            <a
              href={`/${activeModule.brochurePdfName}`}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-hairline)] rounded-md hover:bg-[var(--surface-2)] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh brosur spesifikasi</span>
            </a>
          </div>
        </div>

        {/* Target Industries */}
        <div className="mb-10 p-5 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
            Sektor Industri Terkait
          </h2>
          <div className="flex flex-wrap gap-2">
            {activeModule.targetIndustries.map((ind, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md bg-[var(--surface-2)] text-xs text-[var(--text-main)] border border-[var(--border-hairline)]"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Highlight Features vs Supporting Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[var(--border-hairline)]">
              <FileCheck className="w-4 h-4 text-[#FF6A1A]" />
              <h2 className="text-base font-bold text-[var(--text-main)]">
                Fitur Unggulan Modul
              </h2>
            </div>
            <ul className="space-y-3">
              {activeModule.highlightFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6A1A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)]">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[var(--border-hairline)]">
              <Layers className="w-4 h-4 text-[#FF6A1A]" />
              <h2 className="text-base font-bold text-[var(--text-main)]">
                Fitur Pendukung Operasional
              </h2>
            </div>
            <ul className="space-y-3">
              {activeModule.supportingFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6A1A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Integration & Deployment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-2)]">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-[#FF6A1A]" />
              <h3 className="text-sm font-bold text-[var(--text-main)]">
                Integrasi Akuntansi & Keuangan Otomatis
              </h3>
            </div>
            <ul className="space-y-2">
              {activeModule.accountingFinanceIntegration.map((item, i) => (
                <li key={i} className="text-xs text-[var(--text-muted)]">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-2)]">
            <div className="flex items-center gap-2 mb-3">
              <Server className="w-4 h-4 text-[#FF6A1A]" />
              <h3 className="text-sm font-bold text-[var(--text-main)]">
                Opsi Penerapan Sistem
              </h3>
            </div>
            <ul className="space-y-2">
              {activeModule.deploymentOptions.map((opt, i) => (
                <li key={i} className="text-xs text-[var(--text-muted)]">
                  • {opt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Ribbon */}
        <div className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
              Jadwalkan Peninjauan Langsung untuk {activeModule.name}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Diskusikan alur kerja spesifik perusahaan Anda bersama konsultan industri senior kami.
            </p>
          </div>
          <Button variant="primary" onClick={() => onOpenDemo(activeModule.slug)}>
            Jadwalkan demo
          </Button>
        </div>
      </div>
    );
  }

  // INDEX VIEW (7 Vertical Modules)
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Modul Vertikal</span>
      </nav>

      <div className="border-b border-[var(--border-hairline)] pb-8 mb-10 text-left">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Paket Vertikal Sektoral
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
          Modul ERP Vertikal Sesuai Industri
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Setiap vertikal dirancang berdasarkan terminologi, alur persetujuan, dan kepatuhan dokumen fisik yang lazim digunakan pada masing-masing sektor usaha.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {VERTICAL_MODULES.map((mod) => (
          <div
            key={mod.slug}
            className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] hover:border-[#FF6A1A] transition-all flex flex-col justify-between"
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
                <span className="text-[11px] text-[var(--text-muted)] font-mono">
                  {mod.documentCodes[0]}
                </span>
              </div>

              <h2 className="text-lg font-bold text-[var(--text-main)] mb-2">
                {mod.name}
              </h2>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                {mod.summary}
              </p>

              <ul className="space-y-1.5 text-xs text-[var(--text-main)] mb-6">
                {mod.highlightFeatures.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-[var(--text-muted)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A1A] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
              <button
                type="button"
                onClick={() => onQuickView(mod.slug)}
                className="text-xs text-[var(--text-muted)] hover:text-[#FF6A1A] cursor-pointer"
              >
                Pratinjau cepat
              </button>
              <button
                type="button"
                onClick={() => onNavigate(`/modul-vertikal/${mod.slug}`)}
                className="text-xs font-bold text-[#FF6A1A] hover:underline cursor-pointer flex items-center gap-1"
              >
                Halaman penuh →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
