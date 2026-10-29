/**
 * SISCOM ERP (siscom.co.id) SPA Main Application
 * Enterprise Grade Prototype with 3D Mascot, Dark/Light Theme Switching,
 * Verified Corporate Data, Interactive Multi-Step Consultation, and Full Modular Architecture.
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ModulesSection } from './components/ModulesSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { MethodologySection } from './components/MethodologySection';
import { ClientPortfolioSection } from './components/ClientPortfolioSection';
import { SecurityCompliance } from './components/SecurityCompliance';
import { FaqSection } from './components/FaqSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { ConsultationModal } from './components/ConsultationModal';
import { ProductDetailPage } from './components/ProductDetailPage';
import { DedicatedBlogPage } from './components/DedicatedBlogPage';
import { DedicatedFaqPage } from './components/DedicatedFaqPage';

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname;
    if (path && path !== '/') return path;
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) return hash;
    return '/';
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSector, setConsultationSector] = useState<string | undefined>(undefined);

  // Handle browser popstate navigation (Back / Forward)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentRoute(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openConsultation = (sector?: string) => {
    setConsultationSector(sector);
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationSector(undefined);
  };

  const handleNavigate = (route: string) => {
    // If it's a section anchor on home page
    if (route.startsWith('#') || route.startsWith('/#')) {
      const anchorId = route.replace('/#', '').replace('#', '');
      if (currentRoute !== '/') {
        setCurrentRoute('/');
        try {
          window.history.pushState({}, '', '/');
        } catch {
          // ignore
        }
      }
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    setCurrentRoute(route);
    try {
      window.history.pushState({}, '', route);
    } catch {
      window.location.hash = route;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Resolver
  const renderCurrentRoute = () => {
    if (currentRoute === '/' || currentRoute === '') {
      return (
        <main>
          <Hero 
            onNavigate={handleNavigate} 
            onOpenConsultation={(sector) => openConsultation(sector)} 
          />
          <Stats />
          <ModulesSection 
            onOpenConsultation={(sector) => openConsultation(sector)} 
          />
          <CapabilitiesSection 
            onOpenConsultation={() => openConsultation()} 
          />
          <MethodologySection 
            onOpenConsultation={() => openConsultation()} 
          />
          <ClientPortfolioSection 
            onOpenConsultation={(sector) => openConsultation(sector)} 
          />
          <SecurityCompliance />
          <FaqSection 
            onNavigate={handleNavigate} 
            onOpenConsultation={(sector) => openConsultation(sector)} 
          />
          <CallToAction 
            onOpenConsultation={() => openConsultation()} 
          />
        </main>
      );
    }

    if (currentRoute.startsWith('/product/')) {
      const slug = currentRoute.replace('/product/', '');
      return (
        <ProductDetailPage 
          slug={slug} 
          onNavigate={handleNavigate} 
          onOpenConsultation={(sector) => openConsultation(sector)} 
        />
      );
    }

    if (currentRoute === '/blog') {
      return (
        <DedicatedBlogPage 
          onNavigate={handleNavigate} 
          onOpenConsultation={(sector) => openConsultation(sector)} 
        />
      );
    }

    if (currentRoute === '/faq') {
      return (
        <DedicatedFaqPage 
          onNavigate={handleNavigate} 
          onOpenConsultation={(sector) => openConsultation(sector)} 
        />
      );
    }

    // Default fallback to home
    return (
      <main>
        <Hero 
          onNavigate={handleNavigate} 
          onOpenConsultation={(sector) => openConsultation(sector)} 
        />
        <Stats />
        <ModulesSection 
          onOpenConsultation={(sector) => openConsultation(sector)} 
        />
        <CapabilitiesSection 
          onOpenConsultation={() => openConsultation()} 
        />
        <MethodologySection 
          onOpenConsultation={() => openConsultation()} 
        />
        <ClientPortfolioSection 
          onOpenConsultation={(sector) => openConsultation(sector)} 
        />
        <SecurityCompliance />
        <FaqSection 
          onNavigate={handleNavigate} 
          onOpenConsultation={(sector) => openConsultation(sector)} 
        />
        <CallToAction 
          onOpenConsultation={() => openConsultation()} 
        />
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans selection:bg-orange-500 selection:text-white transition-colors duration-200">
      <Header 
        currentRoute={currentRoute} 
        onNavigate={handleNavigate} 
        onOpenConsultation={(sector) => openConsultation(sector)} 
      />

      <div className="flex-1">
        {renderCurrentRoute()}
      </div>

      <Footer 
        onNavigate={handleNavigate} 
        onOpenConsultation={(sector) => openConsultation(sector)} 
      />

      {/* Floating Action Speed Dial Widget */}
      <FloatingWidgets 
        onOpenConsultation={(sector) => openConsultation(sector)} 
      />

      {/* Interactive Multi-Step Consultation & Lead Scoring Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={closeConsultation} 
        prefilledSector={consultationSector} 
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
