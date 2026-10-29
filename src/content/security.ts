/**
 * Keamanan Data & Opsi Penerapan Sistem
 * Mengikuti fakta Bagian 3: Private Cloud Server & On-Premise.
 */

export interface HostingOption {
  type: string;
  name: string;
  summary: string;
  features: string[];
}

export const HOSTING_OPTIONS: HostingOption[] = [
  {
    type: 'cloud',
    name: 'Private Cloud Server SISCOM',
    summary:
      'Penyediaan server cloud khusus untuk mendukung operasional ERP secara online antar cabang tanpa biaya pembelian fisik server di awal.',
    features: [
      'Hosting aplikasi ERP terkelola',
      'Penyimpanan database terisolasi per perusahaan',
      'Fasilitas backup berkala minimal H-1 (dengan persetujuan klien)',
      'Monitoring berkala performa akses sistem',
      'Pengelolaan hak akses pengguna berjenjang',
    ],
  },
  {
    type: 'onpremise',
    name: 'On-Premise (Server Lokal Korporat)',
    summary:
      'Instalasi sistem ERP langsung di perangkat server milik perusahaan sendiri di kantor pusat atau ruang server lokal.',
    features: [
      'Kendali fisik perangkat server seutuhnya oleh tim IT internal perusahaan',
      'Dukungan operasional jaringan lokal (LAN) maupun jaringan tertutup (VPN)',
      'Pilihan operasional offline murni atau koneksi online terjadwal',
      'Dukungan pendampingan teknis dan perawatan berkala oleh tim SISCOM',
    ],
  },
];

export const ACCESS_CONTROL_FACTS = [
  'Otorisasi bertingkat: batasan menu, batas nominal transaksi, dan hak edit/hapus per pengguna',
  'Persetujuan bertingkat (multi-level approval) untuk transaksi pengadaan, kas keluar, dan penawaran',
  'Pencatatan riwayat perubahan (audit trail) pada dokumen penting perusahaan',
];
