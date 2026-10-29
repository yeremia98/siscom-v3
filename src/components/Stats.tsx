import React from 'react';
import { VERIFIED_CONTACTS } from '../data/erpData';
import { Database, ShieldCheck, Clock, Award } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      metric: 'Single DB',
      title: 'Single Source of Truth',
      description: 'Seluruh transaksi proyek, stok, dan kas menjurnal otomatis tanpa silo data.',
      icon: Database,
    },
    {
      metric: '100% SAK',
      title: 'Kepatuhan Regulasi Fiskal',
      description: VERIFIED_CONTACTS.taxStatement,
      icon: ShieldCheck,
    },
    {
      metric: '1994',
      title: 'Tiga Dekade Rekayasa Lokal',
      description: 'Pengalaman rekayasa perangkat lunak enterprise berkesinambungan di Indonesia sejak 1994.',
      icon: Award,
    },
    {
      metric: 'Enterprise',
      title: 'Dukungan Teknis Terdedikasi',
      description: VERIFIED_CONTACTS.supportStatement,
      icon: Clock,
    },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-orange-500/40 dark:hover:border-slate-700 shadow-sm transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                      {item.metric}
                    </span>
                    <div className="p-2 rounded-lg bg-orange-500/10 dark:bg-slate-800/80 text-orange-600 dark:text-orange-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
