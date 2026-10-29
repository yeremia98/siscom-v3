import React from 'react';
import { FISCAL_ARTICLES } from '../content/articles';
import { Button } from '../components/common/Button';
import { ChevronRight, ArrowRight, Clock, User, Calendar, BookOpen } from 'lucide-react';

interface ArticlesPageProps {
  activeSlug?: string;
  onNavigate: (route: string) => void;
  onOpenDemo: () => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  activeSlug,
  onNavigate,
  onOpenDemo,
}) => {
  const activeArticle = activeSlug
    ? FISCAL_ARTICLES.find((a) => a.slug === activeSlug)
    : undefined;

  // DETAIL ARTICLE VIEW
  if (activeArticle) {
    return (
      <div className="max-w-[800px] mx-auto px-4 py-10 text-left">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
          <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
          <ChevronRight className="w-3 h-3" />
          <button type="button" onClick={() => onNavigate('/wawasan-fiskal')} className="hover:underline">Wawasan Fiskal</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--text-main)] font-bold truncate max-w-[200px]">{activeArticle.title}</span>
        </nav>

        {/* Article Header */}
        <header className="border-b border-[var(--border-hairline)] pb-6 mb-8">
          <span className="text-xs font-mono text-[#FF6A1A] block mb-2 uppercase">
            {activeArticle.targetSystem}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-4 leading-tight">
            {activeArticle.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] font-mono">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{activeArticle.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Terbit: {activeArticle.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{activeArticle.readingTimeMinutes} menit baca</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose dark:prose-invert max-w-none mb-12 space-y-5 text-sm sm:text-base text-[var(--text-main)] leading-relaxed">
          {activeArticle.contentParagraphs.map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}
        </article>

        {/* Footer Meta */}
        <div className="p-4 rounded-lg bg-[var(--surface-2)] border border-[var(--border-hairline)] text-xs text-[var(--text-muted)] font-mono mb-12">
          Sumber data teknis: {activeArticle.metadata.source} • Diperbarui pada {activeArticle.updatedDate}
        </div>

        {/* Bottom CTA */}
        <div className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[var(--text-main)]">
              Ingin menerapkan alur ini di sistem perusahaan Anda?
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Jadwalkan demonstrasi langsung bersama tim analis kami.
            </p>
          </div>
          <Button variant="primary" onClick={onOpenDemo}>
            Jadwalkan demo
          </Button>
        </div>
      </div>
    );
  }

  // INDEX VIEW
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Wawasan Fiskal</span>
      </nav>

      <div className="border-b border-[var(--border-hairline)] pb-8 mb-10 text-left">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Pusat Wawasan Operasional
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
          Wawasan Alur Fiskal & Operasional Sistem
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
          Artikel teknis mendalam mengenai mekanisme kerja fitur SISCOM ERP: pengendalian RAB/RAP proyek, limit kredit distribusi, dan pencatatan dokumen pabean kawasan berikat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {FISCAL_ARTICLES.map((art) => (
          <div
            key={art.slug}
            className="p-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] hover:border-[#FF6A1A] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono text-[#FF6A1A]">
                  {art.targetSystem}
                </span>
                <span className="text-[11px] text-[var(--text-muted)] font-mono">
                  {art.readingTimeMinutes} mnt
                </span>
              </div>

              <h2 className="text-base font-bold text-[var(--text-main)] mb-2 line-clamp-2">
                {art.title}
              </h2>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-3">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between">
              <span className="text-[10px] text-[var(--text-muted)] font-mono">
                {art.publishDate}
              </span>
              <button
                type="button"
                onClick={() => onNavigate(`/wawasan-fiskal/${art.slug}`)}
                className="text-xs font-bold text-[#FF6A1A] hover:underline cursor-pointer flex items-center gap-1"
              >
                Baca artikel →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
