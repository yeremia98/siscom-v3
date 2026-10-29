import React from 'react';
import { VERTICAL_MODULES } from '../content/modules';
import { Dialog } from './common/Dialog';
import { Button } from './common/Button';
import { CheckCircle2, ArrowRight, Download, ExternalLink } from 'lucide-react';

interface ModuleQuickViewModalProps {
  slug: string | null;
  onClose: () => void;
  onNavigateToFullPage: (slug: string) => void;
  onOpenDemo: (slug: string) => void;
}

export const ModuleQuickViewModal: React.FC<ModuleQuickViewModalProps> = ({
  slug,
  onClose,
  onNavigateToFullPage,
  onOpenDemo,
}) => {
  if (!slug) return null;

  const moduleData = VERTICAL_MODULES.find((m) => m.slug === slug);
  if (!moduleData) return null;

  return (
    <Dialog
      isOpen={!!slug}
      onClose={onClose}
      title={moduleData.name}
      description={moduleData.shortTag}
      showMascotPeek={true}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6 text-left">
        {/* Summary */}
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          {moduleData.summary}
        </p>

        {/* Highlight Features */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-main)] mb-3">
            Fitur Utama:
          </h3>
          <ul className="space-y-2">
            {moduleData.highlightFeatures.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A1A] shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Document Codes & Deployment */}
        <div className="p-4 rounded-lg bg-[var(--surface-2)] border border-[var(--border-hairline)] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-[11px] font-mono text-[var(--text-muted)] block">Format Dokumen Fisik:</span>
            <span className="font-mono font-bold text-[var(--text-main)]">
              {moduleData.documentCodes.join(', ')}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-[var(--text-muted)] block">Opsi Penempatan:</span>
            <span className="text-[var(--text-main)]">
              {moduleData.deploymentOptions.join(' • ')}
            </span>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-4 border-t border-[var(--border-hairline)] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigateToFullPage(moduleData.slug);
            }}
            className="text-xs font-bold text-[#FF6A1A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            Buka Halaman Spesifikasi Penuh →
          </button>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              onClick={onClose}
              className="text-xs py-2 px-3"
            >
              Tutup
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                onClose();
                onOpenDemo(moduleData.slug);
              }}
              icon={<ArrowRight className="w-4 h-4" />}
              className="text-xs py-2 px-3.5"
            >
              Jadwalkan demo
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
