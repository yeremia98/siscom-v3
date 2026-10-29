import React from 'react';
import { Mascot } from '../components/common/Mascot';
import { Button } from '../components/common/Button';

interface NotFoundPageProps {
  onNavigate: (route: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[600px] mx-auto px-4 py-20 text-center flex flex-col items-center">
      <Mascot size={180} />
      <span className="font-mono text-xs font-bold text-[#FF6A1A] tracking-wider uppercase mt-4 mb-2">
        Galat 404
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-3">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-sm mb-6 leading-relaxed">
        Tautan yang Anda tuju mungkin telah dipindahkan atau belum tersedia. Silakan kembali ke beranda untuk menelusuri modul SISCOM ERP.
      </p>
      <Button variant="primary" onClick={() => onNavigate('/')}>
        Kembali ke Beranda
      </Button>
    </div>
  );
};
