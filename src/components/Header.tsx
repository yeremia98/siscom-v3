import React, { useState } from 'react';
import { useTheme, Theme } from '../context/ThemeContext';
import { MEGA_MENU_SUITES, VERIFIED_CONTACTS } from '../data/erpData';
import { 
  Sun, 
  Moon, 
  Monitor, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Sparkles,
  Building2,
  Users,
  ShoppingBag,
  Truck,
  ShieldAlert,
  Coins
} from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onOpenConsultation }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const getSuiteIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4 text-orange-500" />;
      case 'Building2': return <Building2 className="w-4 h-4 text-blue-500" />;
      case 'Users': return <Users className="w-4 h-4 text-emerald-500" />;
      case 'Truck': return <Truck className="w-4 h-4 text-indigo-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 text-amber-500" />;
      case 'Coins': return <Coins className="w-4 h-4 text-cyan-500" />;
      default: return <Sparkles className="w-4 h-4 text-orange-500" />;
    }
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsProductMenuOpen(false);
    if (href.startsWith('#')) {
      if (currentRoute !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById(href.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(href.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Corporate Badge */}
        <div 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3.5 cursor-pointer group select-none"
        >
          {/* Official SiS Circular Logo */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 dark:bg-white/10 p-1.5 flex items-center justify-center shadow-md shadow-sky-500/10 group-hover:scale-105 transition-transform border border-slate-800 dark:border-white/20">
            <img
              src="/assets/aistudio/logo_sis_reverse_81db699c.png"
              alt="Logo Resmi SISCOM ERP - PT Shan Informasi Sistem"
              width="36"
              height="36"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white font-mono">
                SISCOM
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded-full bg-orange-500 text-white shadow-xs">
                ERP
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              PT Shan Informasi Sistem • Est. 1994
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
          {/* Modul Dropdown */}
          <div className="relative" onMouseLeave={() => setIsProductMenuOpen(false)}>
            <button
              onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
              onMouseEnter={() => setIsProductMenuOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span>Modul Solusi</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductMenuOpen ? 'rotate-180 text-orange-500' : ''}`} />
            </button>

            {/* Mega Dropdown */}
            {isProductMenuOpen && (
              <div className="absolute top-full left-0 w-[540px] p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl grid grid-cols-2 gap-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Jalur Produk Spesifik Industri
                  </span>
                  <button
                    onClick={() => handleNavClick('#modul')}
                    className="text-xs text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Lihat Ikhtisar Modul</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {MEGA_MENU_SUITES.map((suite) => (
                  <button
                    key={suite.id}
                    onClick={() => handleNavClick(`/product/${suite.slug}`)}
                    className="flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60"
                  >
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 transition shrink-0 shadow-xs">
                      {getSuiteIcon(suite.iconName)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 flex items-center gap-1">
                        <span>{suite.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 font-normal">
                        {suite.badge}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('#modul')}
            className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Modul Vertikal
          </button>

          <button
            onClick={() => handleNavClick('#fitur')}
            className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Komparasi Odoo
          </button>

          <button
            onClick={() => handleNavClick('#metodologi')}
            className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Metodologi
          </button>

          <button
            onClick={() => handleNavClick('#klien')}
            className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Klien
          </button>

          <button
            onClick={() => handleNavClick('#kepatuhan')}
            className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Keamanan Data
          </button>

          <button
            onClick={() => handleNavClick('#faq')}
            className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            FAQ
          </button>

          <button
            onClick={() => handleNavClick('/blog')}
            className="px-3.5 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Wawasan Fiskal
          </button>
        </nav>

        {/* Right Action Cluster: Theme Switcher + CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Switcher Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center justify-center shadow-xs"
              aria-label="Pilih Mode Tampilan"
              title="Ganti Tema (Dark / Light / System)"
            >
              {resolvedTheme === 'dark' ? (
                <Moon className="w-4 h-4 text-orange-400" />
              ) : (
                <Sun className="w-4 h-4 text-orange-500" />
              )}
            </button>

            {isThemeMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 p-1.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl z-50 text-xs font-semibold animate-in fade-in duration-150">
                <button
                  onClick={() => {
                    setTheme('light');
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    theme === 'light'
                      ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Mode Terang</span>
                </button>
                <button
                  onClick={() => {
                    setTheme('dark');
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Mode Gelap</span>
                </button>
                <button
                  onClick={() => {
                    setTheme('system');
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    theme === 'system'
                      ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Sistem Bawaan</span>
                </button>
              </div>
            )}
          </div>

          {/* Primary Consultation Button */}
          <button
            onClick={() => onOpenConsultation()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-600/20 active:scale-95 transition-all"
          >
            <span>Jadwalkan Konsultasi</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 lg:hidden hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            aria-label="Buka Menu Navigasi"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
            <button
              onClick={() => handleNavClick('/')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Beranda
            </button>
            <button
              onClick={() => handleNavClick('#modul')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Modul Vertikal Khusus
            </button>
            <button
              onClick={() => handleNavClick('#fitur')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Komparasi SISCOM vs Odoo
            </button>
            <button
              onClick={() => handleNavClick('#metodologi')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Metodologi Implementasi 5-Tahap
            </button>
            <button
              onClick={() => handleNavClick('#klien')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Portofolio Klien Korporat
            </button>
            <button
              onClick={() => handleNavClick('#kepatuhan')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Kedaulatan Data & Keamanan
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              FAQ Sistem ERP
            </button>
            <button
              onClick={() => handleNavClick('/blog')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Wawasan Regulasi & Pajak
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xl bg-orange-600 text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Jadwalkan Konsultasi Solusi</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin bertanya mengenai modul software ERP.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Sales: 0812-9981-7515</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
