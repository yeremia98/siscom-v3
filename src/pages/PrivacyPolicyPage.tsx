import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (route: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-12 text-left">
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Kebijakan Privasi</span>
      </nav>

      <div className="border-b border-[var(--border-hairline)] pb-6 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-2">
          Kebijakan Privasi & Perlindungan Data Formulir
        </h1>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Terakhir diperbarui: 24 Oktober 2024
        </p>
      </div>

      <div className="prose dark:prose-invert text-xs sm:text-sm text-[var(--text-muted)] space-y-6 leading-relaxed">
        <section>
          <h2 className="text-sm sm:text-base font-bold text-[var(--text-main)] mb-2">
            1. Informasi yang Kami Kumpulkan
          </h2>
          <p>
            Saat Anda mengisi formulir penjadwalan demo atau formulir permintaan referensi di situs SISCOM, kami mengumpulkan data terbatas berupa: nama lengkap, nama perusahaan, nomor WhatsApp, alamat email, estimasi skala pengguna, dan sektor industri Anda.
          </p>
        </section>

        <section>
          <h2 className="text-sm sm:text-base font-bold text-[var(--text-main)] mb-2">
            2. Tujuan Penggunaan Data
          </h2>
          <p>
            Data yang Anda kirimkan hanya digunakan untuk: (a) mengonfirmasi slot waktu sesi demonstrasi alur kerja SISCOM ERP; (b) menyiapkan skenario modul fungsional yang relevan dengan bidang industri perusahaan Anda; dan (c) korespondensi teknis terkait penawaran lisensi sistem.
          </p>
        </section>

        <section>
          <h2 className="text-sm sm:text-base font-bold text-[var(--text-main)] mb-2">
            3. Kerahasiaan Data & Pihak Ketiga
          </h2>
          <p>
            PT Shan Informasi Sistem tidak menjual, menyewakan, atau membagikan data kontak Anda kepada pihak ketiga untuk kepentingan periklanan. Seluruh data operasional bisnis klien di lingkungan Private Cloud Server atau On-Premise dilindungi perjanjian kerahasiaan (NDA) yang disepakati bersama.
          </p>
        </section>

        <section>
          <h2 className="text-sm sm:text-base font-bold text-[var(--text-main)] mb-2">
            4. Kontak Perlindungan Data
          </h2>
          <p>
            Apabila Anda memiliki pertanyaan atau ingin memperbarui/menghapus data narahubung yang tersimpan, Anda dapat menghubungi kami melalui email: <strong className="text-[var(--text-main)]">support@siscom.co.id</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};
