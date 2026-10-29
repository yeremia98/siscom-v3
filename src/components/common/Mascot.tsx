import React, { useState, useEffect, useRef } from 'react';

const MASCOT_WAVE_MS = 1400;

interface MascotProps {
  variant?: 'idle' | 'peek' | 'hero' | 'thumbnail';
  className?: string;
  size?: number;
  showChatBubble?: boolean;
  chatTitle?: string;
  chatMessage?: string;
  quickActions?: { label: string; action: () => void }[];
}

export const Mascot: React.FC<MascotProps> = ({
  variant = 'idle',
  className = '',
  size = 280,
  showChatBubble = false,
  chatTitle = 'HiSIS AI Assistant',
  chatMessage = 'Halo! Saya HiSIS, asisten virtual SISCOM ERP. Ada modul atau alur kerja yang ingin Anda pelajari?',
  quickActions = [],
}) => {
  const [isWaving, setIsWaving] = useState(false);
  const [waveKey, setWaveKey] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const waveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Preload wave.gif during browser idle time
  useEffect(() => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        const img = new Image();
        img.src = '/mascot/wave.gif';
        if (img.decode) {
          img.decode().catch(() => {
            // silent catch
          });
        }
      });
    }
  }, []);

  const triggerWave = () => {
    setWaveKey((prev) => prev + 1);
    setIsWaving(true);
    if (waveTimerRef.current) clearTimeout(waveTimerRef.current);
    waveTimerRef.current = setTimeout(() => {
      setIsWaving(false);
    }, MASCOT_WAVE_MS);
  };

  const handlePointerEnter = () => {
    triggerWave();
  };

  const handlePointerLeave = () => {
    // Wave duration completes naturally through timer
  };

  if (hasError) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('HiSIS mascot asset unavailable, rendering null fallback.');
    }
    return null;
  }

  // Peek variant for dialog modal
  if (variant === 'peek') {
    return (
      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-[-28px] z-0 pointer-events-auto cursor-pointer ${className}`}
        style={{
          clipPath: 'inset(0 0 28px 0)',
          width: `${size}px`,
        }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={triggerWave}
        role="presentation"
        aria-hidden="true"
      >
        <div className="relative w-full aspect-square">
          <img
            src="/mascot/peek.webp"
            alt=""
            className="w-full h-full object-contain select-none"
            onError={() => setHasError(true)}
          />
          {isWaving && (
            <img
              key={`peek-wave-${waveKey}`}
              src="/mascot/wave.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-contain select-none transition-opacity duration-75 opacity-100"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Speech Bubble Container */}
      {showChatBubble && (
        <div className="w-full max-w-sm mb-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-1)] p-4 shadow-sm text-left">
          <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-[var(--border-hairline)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-[var(--text-main)] font-mono uppercase tracking-wide">
                {chatTitle}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsPlayingPreview(!isPlayingPreview)}
              className="text-[11px] text-[var(--text-muted)] hover:text-[#FF6A1A] transition-colors cursor-pointer"
              title="Pratinjau Animasi HiSIS"
            >
              {isPlayingPreview ? 'Hentikan Pratinjau' : 'Pratinjau Animasi'}
            </button>
          </div>

          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {chatMessage}
          </p>

          {quickActions.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-1.5 pt-2 border-t border-[var(--border-hairline)]">
              {quickActions.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={item.action}
                  className="text-left text-[11px] px-2.5 py-1.5 rounded bg-[var(--surface-2)] text-[var(--text-main)] hover:border-[#FF6A1A] hover:text-[#FF6A1A] border border-transparent transition-all cursor-pointer truncate"
                >
                  {item.label} →
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* HiSIS Mascot Body */}
      <div
        className={`relative cursor-pointer select-none ${isWaving ? 'mascot-float-paused' : 'mascot-float-wrapper'}`}
        style={{ width: `${size}px`, height: `${size}px` }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={triggerWave}
        role="presentation"
        aria-hidden="true"
      >
        {/* Base Idle / Wave Animation */}
        <div className="relative w-full h-full">
          <img
            src="/mascot/idle.webp"
            alt=""
            className={`w-full h-full object-contain transition-opacity duration-80 ${isWaving || isPlayingPreview ? 'opacity-0' : 'opacity-100'}`}
            onError={() => setHasError(true)}
          />

          {(isWaving || isPlayingPreview) && (
            <img
              key={`wave-active-${waveKey}`}
              src="/mascot/wave.gif"
              alt=""
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-80 opacity-100"
            />
          )}
        </div>
      </div>
    </div>
  );
};
