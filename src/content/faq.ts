import { FaqItem } from './types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Implementasi',
    question: 'Apakah SISCOM ERP dapat dipasang pada server milik perusahaan sendiri (On-Premise)?',
    answer:
      'Ya. SISCOM menyediakan dua opsi penempatan sistem: On-Premise pada server fisik di kantor Anda atau Private Cloud Server yang dikelola bersama fasilitas backup berkala minimal H-1.',
    metadata: { status: 'verified', source: 'SISCOM Brosur Hal. 8 & Company Profile Hal. 14' },
  },
  {
    id: 'faq-2',
    category: 'Modul',
    question: 'Bagaimana SISCOM Construction One mengendalikan biaya proyek kontraktor?',
    answer:
      'Sistem membandingkan realisasi pengadaan material dan SPK subkontraktor terhadap pagu RAP yang telah disahkan, menyusun kurva S otomatis dari time schedule, serta mengelola termin dan retensi pembayaran.',
    metadata: { status: 'verified', source: 'SISCOM Brosur Hal. 6' },
  },
  {
    id: 'faq-3',
    category: 'Kustomisasi',
    question: 'Apakah formulir transaksi dan laporan dapat dimodifikasi sesuai kebutuhan perusahaan?',
    answer:
      'Ya. Formulir transaksi (seperti invoice, surat jalan, purchase order) dan laporan operasional dapat disesuaikan dengan format tata letak yang diinginkan klien.',
    metadata: { status: 'verified', source: 'SISCOM Brosur Hal. 8 & Company Profile Hal. 11' },
  },
  {
    id: 'faq-4',
    category: 'Dukungan',
    question: 'Bagaimana bentuk layanan dukungan teknis harian bagi klien SISCOM?',
    answer:
      'Dukungan publik tersedia melalui live chat, email, dan telepon di jam kerja. Bagi klien VIP, disediakan grup WhatsApp privat beranggotakan project manager, supervisor, dan tim akuntansi dari hari Senin sampai Minggu pukul 08.30 sampai 22.00.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile Hal. 9' },
  },
  {
    id: 'faq-5',
    category: 'Modul',
    question: 'Bagaimana SISCOM Distribution Suite mencegah risiko piutang macet?',
    answer:
      'Sistem menyediakan fitur batas limit kredit per pelanggan, laporan umur piutang (aging schedule) dengan peringatan jatuh tempo, dan pemantauan order yang belum terkirim.',
    metadata: { status: 'verified', source: 'SISCOM Brosur Hal. 11' },
  },
  {
    id: 'faq-6',
    category: 'Regulasi',
    question: 'Dokumen pabean apa saja yang dapat dikelola pada modul SIS PusatBerikat?',
    answer:
      'Modul mengelola pencatatan arus masuk dan keluar barang untuk dokumen BC 2.3, BC 4.0, pelacakan konversi bahan baku ke barang jadi, serta penyiapan data audit pabean.',
    metadata: { status: 'verified', source: 'SISCOM Brosur Hal. 12' },
  },
  {
    id: 'faq-7',
    category: 'Modul',
    question: 'Apakah modul SIS ForexSuite memfasilitasi pelaporan Bank Indonesia?',
    answer:
      'Ya. Selain transaksi Buy and Sell valas di kasir dan mutasi brankas fisik, sistem menyiapkan rekapitulasi data transaksi valas yang sesuai dengan format laporan Bank Indonesia.',
    metadata: { status: 'verified', source: 'SISCOM Brosur Hal. 8' },
  },
  {
    id: 'faq-8',
    category: 'Training',
    question: 'Bagaimana opsi pelatihan bagi staf dan karyawan baru di masa mendatang?',
    answer:
      'Pelatihan dapat dilaksanakan secara online melalui Google Meet, Zoom, atau AnyDesk, in-house di kantor SISCOM Jakarta, atau on-site di kantor klien (tersedia paket 1 minggu atau 1 bulan). Klien dengan kontrak pemeliharaan (MSC) juga berhak atas sesi pelatihan tambahan jika ada pergantian staf.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile Hal. 9, 11' },
  },
];
