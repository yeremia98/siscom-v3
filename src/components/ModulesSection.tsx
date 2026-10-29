import React, { useState } from 'react';
import { ENTERPRISE_MODULES, EnterpriseModule } from '../data/erpData';
import { 
  HardHat, 
  Sparkles, 
  Building2, 
  Users, 
  Store, 
  Factory, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Layers
} from 'lucide-react';

interface ModulesSectionProps {
  onOpenConsultation: (sector?: string) => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('kontraktor');

  const selectedModule: EnterpriseModule = 
    ENTERPRISE_MODULES.find((m) => m.id === selectedModuleId) || ENTERPRISE_MODULES[0];

  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'kontraktor': return <HardHat className="w-5 h-5 text-orange-500" />;
      case 'exhibition': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'property': return <Building2 className="w-5 h-5 text-cyan-500" />;
      case 'hris': return <Users className="w-5 h-5 text-emerald-500" />;
      case 'retail': return <Store className="w-5 h-5 text-blue-500" />;
      case 'manufaktur': return <Factory className="w-5 h-5 text-violet-500" />;
      case 'rental': return <Truck className="w-5 h-5 text-rose-500" />;
      default: return <Layers className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="modul" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/25 mb-4">
            <span>Solusi Vertikal Spesifik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Modul Operasional yang Dirancang Khusus Sesuai Karakter Sektor Anda
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Menghilangkan pendekatan software generik yang kaku. Setiap modul membawa logika kerja nyata dari lapangan ke sistem pembukuan finansial secara presisi.
          </p>
        </div>

        {/* 2-Column AstroWind Layout: Left Navigation / Right Deep-Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List of 7 Modules */}
          <div className="lg:col-span-5 space-y-2.5">
            {ENTERPRISE_MODULES.map((mod) => {
              const isSelected = mod.id === selectedModuleId;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-orange-500 shadow-lg shadow-orange-500/10 ring-1 ring-orange-500/20'
                      : 'bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2.5 rounded-xl transition-colors duration-150 ${
                      isSelected ? 'bg-orange-500/15 text-orange-600 dark:text-orange-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                    }`}>
                      {getModuleIcon(mod.id)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-bold text-sm tracking-tight truncate ${
                          isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                        }`}>
                          {mod.name}
                        </h3>
                        {mod.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hidden sm:inline">
                            {mod.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5 font-normal">
                        {mod.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                    isSelected ? 'text-orange-600 dark:text-orange-400 translate-x-1' : 'text-slate-400 dark:text-slate-600 group-hover:text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Fungsionalitas Modul */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 block font-semibold">
                  {selectedModule.category}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {selectedModule.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {selectedModule.systemMetrics.map((met, i) => (
                  <div key={i} className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-right">
                    <span className="text-[10px] text-slate-500 block">{met.label}</span>
                    <strong className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">{met.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {selectedModule.summary}
            </p>

            {/* 3 Operational Capabilities Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedModule.operationalCapabilities.map((cap, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{cap.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Workflows Checklist */}
            <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2.5">
              <span className="text-xs font-bold text-slate-900 dark:text-slate-200 block">
                Alur Kerja Fungsional Terintegrasi:
              </span>
              <div className="space-y-2">
                {selectedModule.keyWorkflows.map((flow, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{flow}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Konsultasikan alur kerja spesifik <strong>{selectedModule.name}</strong> bersama tim kami.
              </span>
              <button
                onClick={() => onOpenConsultation(selectedModule.name)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Jadwalkan Konsultasi Sektor Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
