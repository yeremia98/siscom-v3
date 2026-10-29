import { MethodologyStep } from './types';

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: 1,
    title: 'Analisis Kebutuhan & Alur Kerja Bisnis',
    description:
      'Tim konsultan SISCOM menganalisis alur transaksi riil perusahaan Anda, mulai dari prosedur operasional, otorisasi divisi, hingga kebutuhan format dokumen kerja.',
    clientPrepares: 'Struktur organisasi, bagan akun (COA) berjalan, dan contoh formulir transaksi fisik.',
    siscomDelivers: 'Dokumen pemetaan modul fungsional dan blueprint alur sistem.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile & Brosur (Custom Implementasi)' },
  },
  {
    step: 2,
    title: 'Konfigurasi Sistem & Parameter Modul',
    description:
      'Penyetelan sistem sesuai hierarki bisnis: pembuatan master cabang, hak akses per pengguna, penetapan alur approval bertingkat, dan format formulir transaksi khusus.',
    clientPrepares: 'Daftar nama pengguna, hak otorisasi tiap jabatan, dan format cetakan dokumen yang diinginkan.',
    siscomDelivers: 'Lingkungan sistem siap uji yang telah dikonfigurasi parameter operasionalnya.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile & Brosur (Custom Implementasi)' },
  },
  {
    step: 3,
    title: 'Migrasi & Validasi Master Data',
    description:
      'Proses pemindahan data master dari spreadsheet atau sistem lama ke dalam basis data SISCOM ERP.',
    clientPrepares: 'Data master barang, master pelanggan, master pemasok, dan saldo awal neraca dalam format template.',
    siscomDelivers: 'Pengecekan konsistensi data, impor database, dan verifikasi saldo awal neraca bersama tim akuntansi.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile & Brosur (Custom Implementasi)' },
  },
  {
    step: 4,
    title: 'Integrasi Alur Antar Divisi & Perangkat',
    description:
      'Penyelarasan aliran data antar divisi operasional (gudang, pembelian, produksi, penjualan) langsung ke pembukuan buku besar.',
    clientPrepares: 'SOP pengujian transaksi antar bagian dan perangkat kasir/komputer operasional.',
    siscomDelivers: 'Pengujian koneksi jaringan, verifikasi integrasi kasir/printer barcode, dan simulasi alur end-to-end.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile & Brosur (Custom Implementasi)' },
  },
  {
    step: 5,
    title: 'Pelatihan Pengguna Berjenjang (Training)',
    description:
      'Pelatihan operasional untuk seluruh staf pengguna. Dapat dilaksanakan secara online, in-house di kantor SISCOM Jakarta, atau on-site di kantor klien.',
    clientPrepares: 'Jadwal alokasi waktu staf dan partisipasi PIC kunci tiap divisi.',
    siscomDelivers: 'Buku panduan operasional, modul praktik simulasi, dan pendampingan latihan entri data riil.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile & Brosur (Layanan Training)' },
  },
  {
    step: 6,
    title: 'Pendampingan Go Live & Dukungan Purna Jual',
    description:
      'Pengawasan langsung pada hari pertama operasional live sampai sistem berjalan mandiri. Dilanjutkan dengan dukungan VIP Customer Support.',
    clientPrepares: 'Pelaksanaan transaksi harian penuh menggunakan sistem baru.',
    siscomDelivers: 'Grup WhatsApp privat khusus didampingi project manager, supervisor, dan tim akuntansi (Senin-Minggu 08.30-22.00).',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 9' },
  },
];
