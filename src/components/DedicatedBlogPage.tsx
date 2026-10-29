import React, { useState } from 'react';
import { BLOG_INSIGHTS } from '../data/erpData';
import { BookOpen, Calendar, Clock, ArrowLeft, ArrowRight, UserCheck, ShieldCheck, Tag } from 'lucide-react';

interface DedicatedBlogPageProps {
  onNavigate: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const DedicatedBlogPage: React.FC<DedicatedBlogPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);

  const activeArticle = BLOG_INSIGHTS.find((a) => a.slug === selectedArticleSlug);

  return (
    <div className="py-12 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-orange-600 dark:hover:text-orange-400 font-medium flex items-center gap-1 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </button>
          <span>/</span>
          {activeArticle ? (
            <>
              <button
                onClick={() => setSelectedArticleSlug(null)}
                className="hover:text-orange-600 dark:hover:text-orange-400 transition"
              >
                Pusat Wawasan & Regulasi
              </button>
              <span>/</span>
              <span className="text-slate-900 dark:text-white font-bold truncate max-w-xs">{activeArticle.title}</span>
            </>
          ) : (
            <span className="text-slate-900 dark:text-white font-bold">Pusat Wawasan & Regulasi Bisnis</span>
          )}
        </div>

        {activeArticle ? (
          /* Single Article Reader View */
          <article className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-200">
            <button
              onClick={() => setSelectedArticleSlug(null)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Semua Artikel</span>
            </button>

            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider inline-block">
                {activeArticle.category}
              </span>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {activeArticle.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                <span className="flex items-center gap-1 font-medium">
                  <UserCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeArticle.author}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeArticle.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeArticle.readTime}</span>
                </span>
              </div>
            </div>

            {/* Article Content Paragraphs */}
            <div className="prose dark:prose-invert max-w-none space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xl font-bold">Butuh Konsultasi Kepatuhan Regulasi untuk Perusahaan Anda?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Diskusikan tantangan alur perpajakan dan operasional Anda dengan konsultan ERP senior SISCOM secara tatap muka atau daring.
              </p>
              <button
                onClick={() => onOpenConsultation(activeArticle.category)}
                className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm flex items-center gap-2 active:scale-95 transition-all shadow-lg shadow-orange-600/30"
              >
                <span>Jadwalkan Diskusi dengan Konsultan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ) : (
          /* Blog Insights Grid View */
          <div className="space-y-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Pusat Wawasan Industri, Perpajakan & ERP</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Wawasan Bisnis & Regulasi Indonesia
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal">
                Ulasan mendalam seputar kepatuhan perpajakan DJP, kontrol anggaran proyek konstruksi, standar IT Inventory kepabeanan, dan tata kelola finansial multi-cabang.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BLOG_INSIGHTS.map((article) => (
                <div
                  key={article.slug}
                  onClick={() => setSelectedArticleSlug(article.slug)}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-orange-500/50 cursor-pointer transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-bold px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                        {article.category}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed font-normal">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{article.author}</span>
                    <span className="font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Baca Lengkap</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
