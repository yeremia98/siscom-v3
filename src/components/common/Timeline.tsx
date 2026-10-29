import React from 'react';
import { TIMELINE_HISTORY } from '../../content/company';

export const Timeline: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <ol className="relative border-l border-[var(--border-hairline)] ml-4 sm:ml-8 space-y-8 sm:space-y-12">
        {TIMELINE_HISTORY.map((item, idx) => (
          <li key={idx} className="relative pl-6 sm:pl-8 group">
            {/* Timeline bullet with year tag */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--surface-1)] border-2 border-[#FF6A1A] group-hover:scale-125 transition-transform" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="font-mono text-base font-bold text-[#FF6A1A] tracking-wider shrink-0">
                {item.year}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
                {item.milestone}
              </h3>
            </div>

            <p className="mt-1.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
              {item.detail}
            </p>

            <div className="mt-2 text-[10px] text-[var(--text-muted)] font-mono opacity-60">
              Sumber: {item.metadata.source}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
