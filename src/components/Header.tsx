import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SOLUTION_MODULES } from '../content/modules';
import { Button } from './common/Button';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

export const NAV_LABELS = {
  home: 'Beranda',
  solutions: 'Modul Solusi',
  verticals: 'Modul Vertikal',
  methodology: 'Metodologi',
  clients: 'Klien',
  about: 'Tentang SISCOM',
  more: 'Lainnya',
  comparison: 'Komparasi',
  security: 'Keamanan Data',
  articles: 'Wawasan Fiskal',
  faq: 'FAQ',
  cta: 'Jadwalkan demo',
};

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onOpenDemo }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setIsSolutionsOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (route: string) => {
    setIsSolutionsOpen(false);
    setIsMoreOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-[var(--border-hairline)] bg-[var(--surface-1)]/95 backdrop-blur-md transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 h-full flex items-center justify-between gap-4">
        {/* Brand Logo - Clean, without Est. 1994 badge */}
        <button
          type="button"
          onClick={() => handleNav('/')}
          className="flex items-center gap-2.5 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A] rounded p-1"
        >
          <img
            src="/assets/aistudio/logo_sis_reverse_81db699c.png"
            alt="Logo SISCOM"
            width="32"
            height="32"
            className="w-8 h-8 rounded-full object-contain"
          />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight text-[var(--text-main)] leading-none">
              SISCOM ERP
            </span>
            <span className="text-[10px] text-[var(--text-muted)] leading-none mt-0.5">
              PT Shan Informasi Sistem
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium text-[var(--text-muted)]">
          {/* Modul Solusi Dropdown */}
          <div ref={solutionsRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setIsSolutionsOpen(!isSolutionsOpen);
                setIsMoreOpen(false);
              }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded hover:text-[var(--text-main)] transition-colors cursor-pointer ${
                currentRoute.startsWith('/modul-solusi') ? 'text-[var(--text-main)] font-semibold' : ''
              }`}
              aria-expanded={isSolutionsOpen}
            >
              <span>{NAV_LABELS.solutions}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {isSolutionsOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-64 rounded-lg bg-[var(--surface-1)] border border-[var(--border-hairline)] shadow-xl p-2 z-50">
                <button
                  type="button"
                  onClick={() => handleNav('/modul-solusi')}
                  className="w-full text-left px-3 py-2 text-xs font-bold text-[#FF6A1A] hover:bg-[var(--surface-2)] rounded transition-colors"
                >
                  Semua Modul Solusi →
                </button>
                <div className="h-px bg-[var(--border-hairline)] my-1" />
                {SOLUTION_MODULES.map((mod) => (
                  <button
                    key={mod.slug}
                    type="button"
                    onClick={() => handleNav(`/modul-solusi/${mod.slug}`)}
                    className="w-full text-left px-3 py-2 text-xs text-[var(--text-main)] hover:bg-[var(--surface-2)] rounded transition-colors cursor-pointer truncate"
                  >
                    {mod.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Direct Nav Items */}
          <button
            type="button"
            onClick={() => handleNav('/modul-vertikal')}
            className={`px-2.5 py-1.5 rounded hover:text-[var(--text-main)] transition-colors cursor-pointer ${
              currentRoute.startsWith('/modul-vertikal') ? 'text-[var(--text-main)] font-semibold' : ''
            }`}
          >
            {NAV_LABELS.verticals}
          </button>

          <button
            type="button"
            onClick={() => handleNav('/metodologi')}
            className={`px-2.5 py-1.5 rounded hover:text-[var(--text-main)] transition-colors cursor-pointer ${
              currentRoute === '/metodologi' ? 'text-[var(--text-main)] font-semibold' : ''
            }`}
          >
            {NAV_LABELS.methodology}
          </button>

          <button
            type="button"
            onClick={() => handleNav('/klien')}
            className={`px-2.5 py-1.5 rounded hover:text-[var(--text-main)] transition-colors cursor-pointer ${
              currentRoute === '/klien' ? 'text-[var(--text-main)] font-semibold' : ''
            }`}
          >
            {NAV_LABELS.clients}
          </button>

          <button
            type="button"
            onClick={() => handleNav('/tentang-siscom')}
            className={`px-2.5 py-1.5 rounded hover:text-[var(--text-main)] transition-colors cursor-pointer ${
              currentRoute === '/tentang-siscom' ? 'text-[var(--text-main)] font-semibold' : ''
            }`}
          >
            {NAV_LABELS.about}
          </button>

          {/* Lainnya Dropdown */}
          <div ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setIsMoreOpen(!isMoreOpen);
                setIsSolutionsOpen(false);
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded hover:text-[var(--text-main)] transition-colors cursor-pointer"
              aria-expanded={isMoreOpen}
            >
              <span>{NAV_LABELS.more}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {isMoreOpen && (
              <div className="absolute top-full right-0 mt-1.5 w-48 rounded-lg bg-[var(--surface-1)] border border-[var(--border-hairline)] shadow-xl p-1.5 z-50">
                <button
                  type="button"
                  onClick={() => handleNav('/komparasi')}
                  className="w-full text-left px-3 py-2 text-xs text-[var(--text-main)] hover:bg-[var(--surface-2)] rounded transition-colors cursor-pointer"
                >
                  {NAV_LABELS.comparison}
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('/keamanan-data')}
                  className="w-full text-left px-3 py-2 text-xs text-[var(--text-main)] hover:bg-[var(--surface-2)] rounded transition-colors cursor-pointer"
                >
                  {NAV_LABELS.security}
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('/wawasan-fiskal')}
                  className="w-full text-left px-3 py-2 text-xs text-[var(--text-main)] hover:bg-[var(--surface-2)] rounded transition-colors cursor-pointer"
                >
                  {NAV_LABELS.articles}
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('/faq')}
                  className="w-full text-left px-3 py-2 text-xs text-[var(--text-main)] hover:bg-[var(--surface-2)] rounded transition-colors cursor-pointer"
                >
                  {NAV_LABELS.faq}
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('/verifikasi')}
                  className="w-full text-left px-3 py-2 text-xs text-[var(--text-main)] hover:bg-[var(--surface-2)] rounded transition-colors cursor-pointer border-t border-[var(--border-hairline)] mt-1 pt-2"
                >
                  Verifikasi Kanal Resmi
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-1)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
            aria-label="Ganti mode tampilan tema"
          >
            {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA - Unified label "Jadwalkan demo" */}
          <Button
            variant="primary"
            onClick={onOpenDemo}
            className="hidden sm:inline-flex text-xs py-2 px-3.5"
          >
            {NAV_LABELS.cta}
          </Button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-md border border-[var(--border-hairline)] text-[var(--text-main)] cursor-pointer"
            aria-label="Buka navigasi mobile"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Full screen / slide-in) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm h-full bg-[var(--surface-1)] border-l border-[var(--border-hairline)] p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-hairline)] mb-6">
                <span className="font-heading font-bold text-base text-[var(--text-main)]">
                  Menu Navigasi
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  aria-label="Tutup navigasi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Produk & Modul
                </div>
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => handleNav('/modul-solusi')}
                    className="w-full text-left py-2 px-3 rounded text-sm text-[var(--text-main)] hover:bg-[var(--surface-2)]"
                  >
                    {NAV_LABELS.solutions}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('/modul-vertikal')}
                    className="w-full text-left py-2 px-3 rounded text-sm text-[var(--text-main)] hover:bg-[var(--surface-2)]"
                  >
                    {NAV_LABELS.verticals}
                  </button>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] pt-3 border-t border-[var(--border-hairline)]">
                  Informasi Perusahaan
                </div>
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => handleNav('/metodologi')}
                    className="w-full text-left py-2 px-3 rounded text-sm text-[var(--text-main)] hover:bg-[var(--surface-2)]"
                  >
                    {NAV_LABELS.methodology}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('/klien')}
                    className="w-full text-left py-2 px-3 rounded text-sm text-[var(--text-main)] hover:bg-[var(--surface-2)]"
                  >
                    {NAV_LABELS.clients}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('/tentang-siscom')}
                    className="w-full text-left py-2 px-3 rounded text-sm text-[var(--text-main)] hover:bg-[var(--surface-2)]"
                  >
                    {NAV_LABELS.about}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('/komparasi')}
                    className="w-full text-left py-2 px-3 rounded text-sm text-[var(--text-main)] hover:bg-[var(--surface-2)]"
                  >
                    {NAV_LABELS.comparison}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('/keamanan-data')}
                    className="w-full text-left py-2 px-3 rounded text-sm text-[var(--text-main)] hover:bg-[var(--surface-2)]"
                  >
                    {NAV_LABELS.security}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('/wawasan-fiskal')}
                    className="w-full text-left py-2 px-3 rounded text-sm text-[var(--text-main)] hover:bg-[var(--surface-2)]"
                  >
                    {NAV_LABELS.articles}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('/faq')}
                    className="w-full text-left py-2 px-3 rounded text-sm text-[var(--text-main)] hover:bg-[var(--surface-2)]"
                  >
                    {NAV_LABELS.faq}
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-hairline)] mt-6">
              <Button
                variant="primary"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full justify-center text-sm"
              >
                {NAV_LABELS.cta}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
