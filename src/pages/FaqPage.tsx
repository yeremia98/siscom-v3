import React, { useState } from 'react';
import { FAQ_ITEMS } from '../content/faq';
import { Mascot } from '../components/common/Mascot';
import { Button } from '../components/common/Button';
import { ChevronRight, ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (route: string) => void;
  onOpenDemo: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenDemo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ 'faq-1': true });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">FAQ</span>
      </nav>

      {/* Header with Mascot HiSIS beside title */}
      <div className="border-b border-[var(--border-hairline)] pb-8 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-left">
          <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
            Pertanyaan yang Sering Diajukan
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-3">
            Pertanyaan Faktual Seputar SISCOM ERP
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
            Jawaban transparan berdasarkan spesifikasi teknis dan ketentuan operasional resmi PT Shan Informasi Sistem.
          </p>
        </div>

        {/* Mascot HiSIS beside FAQ title */}
        <div className="shrink-0 hidden md:block">
          <Mascot size={110} />
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mb-10 relative">
        <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Cari topik pertanyaan (misal: On-Premise, RAP, pabean, training)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] text-xs sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
        />
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-3xl space-y-3 mb-16">
        {filteredFaqs.map((faq) => {
          const isOpen = !!openItems[faq.id];
          return (
            <div
              key={faq.id}
              className="rounded-lg border border-[var(--border-hairline)] bg-[var(--surface-1)] overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleItem(faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--surface-2)]/60 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[#FF6A1A] border border-[var(--border-hairline)] uppercase">
                    {faq.category}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[var(--text-main)]">
                    {faq.question}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-hairline)] pt-4">
                  <p className="mb-3">{faq.answer}</p>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] opacity-60">
                    Sumber: {faq.metadata.source}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA Ribbon */}
      <div className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-2)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
            Punya Pertanyaan Spesifik Mengenai Kasus Bisnis Anda?
          </h3>
          <p className="text-xs text-[var(--text-muted)]">
            Hubungi konsultan kami langsung untuk pembahasan lebih mendalam.
          </p>
        </div>
        <Button variant="primary" onClick={onOpenDemo} icon={<ArrowRight className="w-4 h-4" />}>
          Jadwalkan demo
        </Button>
      </div>
    </div>
  );
};
