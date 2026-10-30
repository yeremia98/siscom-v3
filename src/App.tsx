/**
 * SISCOM ERP v3 - Minimalist Multi-Page SPA
 * Engineered under Swiss Minimalism & Anti-AI-Slop Constitution
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionModulesPage } from './pages/SolutionModulesPage';
import { VerticalModulesPage } from './pages/VerticalModulesPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { ClientsPage } from './pages/ClientsPage';
import { SecurityPage } from './pages/SecurityPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { DemoPage } from './pages/DemoPage';
import { VerificationPage } from './pages/VerificationPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ModuleQuickViewModal } from './components/ModuleQuickViewModal';
import { DemoModal } from './components/DemoModal';
import { VERTICAL_MODULES, SOLUTION_MODULES } from './content/modules';
import { FISCAL_ARTICLES } from './content/articles';
import { SiscomAIWidget } from './components/SiscomAIWidget';

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname;
    if (path && path !== '') return path;
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) return hash;
    return '/';
  });

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoInitialModule, setDemoInitialModule] = useState<string | undefined>(undefined);
  const [quickViewSlug, setQuickViewSlug] = useState<string | null>(null);

  // Sync route on popstate (browser back / forward)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentRoute(path);
      setQuickViewSlug(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title per route (Strictly <= 60 chars)
  useEffect(() => {
    let title = 'SISCOM ERP: Software ERP Terintegrasi Indonesia';

    if (currentRoute === '/') {
      title = 'SISCOM ERP: Software ERP Terintegrasi Indonesia';
    } else if (currentRoute.startsWith('/modul-solusi/')) {
      const slug = currentRoute.replace('/modul-solusi/', '');
      const mod = SOLUTION_MODULES.find((m) => m.slug === slug);
      if (mod) title = `${mod.name} | SISCOM ERP`;
    } else if (currentRoute === '/modul-solusi') {
      title = 'Modul Solusi Fungsional | SISCOM ERP';
    } else if (currentRoute.startsWith('/modul-vertikal/')) {
      const slug = currentRoute.replace('/modul-vertikal/', '');
      const mod = VERTICAL_MODULES.find((m) => m.slug === slug);
      if (mod) title = `${mod.name} | SISCOM ERP`;
    } else if (currentRoute === '/modul-vertikal') {
      title = 'Modul Vertikal Sektoral | SISCOM ERP';
    } else if (currentRoute === '/metodologi') {
      title = 'Metodologi 6 Langkah Implementasi | SISCOM ERP';
    } else if (currentRoute === '/klien') {
      title = 'Sektor Industri yang Dilayani | SISCOM ERP';
    } else if (currentRoute === '/keamanan-data') {
      title = 'Penempatan Server & Keamanan Data | SISCOM ERP';
    } else if (currentRoute === '/komparasi') {
      title = 'Checklist Memilih Vendor ERP | SISCOM ERP';
    } else if (currentRoute.startsWith('/wawasan-fiskal/')) {
      const slug = currentRoute.replace('/wawasan-fiskal/', '');
      const art = FISCAL_ARTICLES.find((a) => a.slug === slug);
      if (art) title = `${art.title} | SISCOM ERP`;
    } else if (currentRoute === '/wawasan-fiskal') {
      title = 'Wawasan Alur Fiskal & Sistem | SISCOM ERP';
    } else if (currentRoute === '/faq') {
      title = 'Pertanyaan Faktual (FAQ) | SISCOM ERP';
    } else if (currentRoute === '/tentang-siscom') {
      title = 'Tentang PT Shan Informasi Sistem | SISCOM ERP';
    } else if (currentRoute === '/demo') {
      title = 'Jadwalkan Demo Sistem ERP | SISCOM ERP';
    } else if (currentRoute === '/verifikasi') {
      title = 'Verifikasi Saluran Resmi | SISCOM ERP';
    } else if (currentRoute === '/kebijakan-privasi') {
      title = 'Kebijakan Privasi Data Formulir | SISCOM ERP';
    }

    document.title = title;
  }, [currentRoute]);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    setQuickViewSlug(null);
    try {
      window.history.pushState({}, '', route);
    } catch {
      window.location.hash = route;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemo = (moduleSlug?: string) => {
    setDemoInitialModule(moduleSlug);
    setIsDemoModalOpen(true);
  };

  const handleQuickView = (slug: string) => {
    setQuickViewSlug(slug);
    try {
      window.history.pushState({ quickView: slug }, '', `/modul-vertikal/${slug}`);
    } catch {
      // ignore
    }
  };

  const handleCloseQuickView = () => {
    setQuickViewSlug(null);
    try {
      if (window.location.pathname.startsWith('/modul-vertikal/')) {
        window.history.pushState({}, '', currentRoute);
      }
    } catch {
      // ignore
    }
  };

  // Route Rendering Logic
  const renderPage = () => {
    // 1. Home Page
    if (currentRoute === '/' || currentRoute === '') {
      return (
        <HomePage
          onNavigate={navigateTo}
          onOpenDemo={handleOpenDemo}
          onQuickViewModule={handleQuickView}
        />
      );
    }

    // 2. Modul Solusi (/modul-solusi and /modul-solusi/:slug, or /layanan)
    if (currentRoute.startsWith('/modul-solusi') || currentRoute === '/layanan') {
      const slug = currentRoute.replace('/modul-solusi', '').replace('/layanan', '').replace('/', '');
      return (
        <SolutionModulesPage
          activeSlug={slug || undefined}
          onNavigate={navigateTo}
          onOpenDemo={handleOpenDemo}
        />
      );
    }

    // 3. Modul Vertikal (/modul-vertikal and /modul-vertikal/:slug, or /industri)
    if (currentRoute.startsWith('/modul-vertikal') || currentRoute === '/industri') {
      const slug = currentRoute.replace('/modul-vertikal', '').replace('/industri', '').replace('/', '');
      return (
        <VerticalModulesPage
          activeSlug={slug || undefined}
          onNavigate={navigateTo}
          onOpenDemo={handleOpenDemo}
          onQuickView={handleQuickView}
        />
      );
    }

    // 4. Metodologi
    if (currentRoute === '/metodologi') {
      return <MethodologyPage onNavigate={navigateTo} onOpenDemo={() => handleOpenDemo()} />;
    }

    // 5. Klien
    if (currentRoute === '/klien') {
      return <ClientsPage onNavigate={navigateTo} onOpenDemo={() => handleOpenDemo()} />;
    }

    // 6. Keamanan Data
    if (currentRoute === '/keamanan-data') {
      return <SecurityPage onNavigate={navigateTo} onOpenDemo={() => handleOpenDemo()} />;
    }

    // 7. Komparasi
    if (currentRoute === '/komparasi') {
      return <ComparisonPage onNavigate={navigateTo} onOpenDemo={() => handleOpenDemo()} />;
    }

    // 8. Wawasan Fiskal (/wawasan-fiskal and /wawasan-fiskal/:slug)
    if (currentRoute.startsWith('/wawasan-fiskal')) {
      const slug = currentRoute.replace('/wawasan-fiskal', '').replace('/', '');
      return (
        <ArticlesPage
          activeSlug={slug || undefined}
          onNavigate={navigateTo}
          onOpenDemo={() => handleOpenDemo()}
        />
      );
    }

    // 9. FAQ
    if (currentRoute === '/faq') {
      return <FaqPage onNavigate={navigateTo} onOpenDemo={() => handleOpenDemo()} />;
    }

    // 10. Tentang SISCOM
    if (currentRoute === '/tentang-siscom') {
      return <AboutPage onNavigate={navigateTo} onOpenDemo={() => handleOpenDemo()} />;
    }

    // 11. Demo Form Page
    if (currentRoute === '/demo') {
      return <DemoPage onNavigate={navigateTo} />;
    }

    // 12. Verifikasi Kanal Resmi
    if (currentRoute === '/verifikasi') {
      return <VerificationPage onNavigate={navigateTo} />;
    }

    // 13. Kebijakan Privasi
    if (currentRoute === '/kebijakan-privasi') {
      return <PrivacyPolicyPage onNavigate={navigateTo} />;
    }

    // 14. Fallback 404
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-app)] text-[var(--text-main)] transition-colors duration-150">
      {/* Persistent Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenDemo={() => handleOpenDemo()}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full" id="main-content">
        {renderPage()}
      </main>

      {/* Persistent Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenDemo={() => handleOpenDemo()}
      />

      {/* Module Quick View Modal (Background Location Pattern) */}
      <ModuleQuickViewModal
        slug={quickViewSlug}
        onClose={handleCloseQuickView}
        onNavigateToFullPage={(slug) => navigateTo(`/modul-vertikal/${slug}`)}
        onOpenDemo={(slug) => handleOpenDemo(slug)}
      />

      {/* Global Demo Modal Triggered from Header / Ribbons */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialModule={demoInitialModule}
      />

      {/* Enterprise SISCOM AI Assistant Widget (Global Layout) */}
      <SiscomAIWidget
        currentRoute={currentRoute}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
