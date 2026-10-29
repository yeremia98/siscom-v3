/**
 * SISCOM Enterprise ERP Master Dataset
 * Structured for AstroWind architecture and official corporate identity (siscom.co.id)
 */

export interface EnterpriseModule {
  id: string;
  name: string;
  category: string;
  badge?: string;
  tagline: string;
  summary: string;
  keyWorkflows: string[];
  operationalCapabilities: {
    title: string;
    description: string;
  }[];
  systemMetrics: {
    label: string;
    value: string;
  }[];
}

export interface EnterpriseFeature {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

export interface EnterpriseSuite {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  badge: string;
  accentColor: string;
  iconName: string;
  keyWorkflows: string[];
  businessValue: string[];
  complianceHighlights: string[];
  idealFor: string[];
}

export const VERIFIED_CONTACTS = {
  companyName: 'PT. Shan Informasi Sistem',
  brandName: 'SISCOM ERP',
  foundingYear: 1994,
  headOfficeAddress: 'City Resort Rukan Malibu Blok J No. 75-77 Mutiara Taman Palem, Cengkareng, Jakarta Barat 11730',
  marketingEmail: 'marketing@siscom.co.id',
  salesEmail: 'sales@siscom.co.id',
  supportEmail: 'support@siscom.co.id',
  marketingPhone1: '+62 21 5694 5002',
  marketingPhone2: '+62 21 5694 5003',
  whatsappSales: '0812-9981-7515',
  whatsappSupport: '0813-8133-3515',
  supportStatement: 'Dedicated Enterprise Support & Responsive Technical Assistance',
  taxStatement: 'Dukungan Kepatuhan Perpajakan & Pelaporan Finansial Standar Industri Indonesia',
  dataCenterLocation: 'Tier 3/4 Data Center Jakarta, Indonesia (Kedaulatan Data UU PDP No. 27/2022)',
  activeClientsCount: '2.500+',
  experienceYears: '30+ Tahun',
};

export const ENTERPRISE_CLIENTS = [
  {
    name: 'PT Mitra Pratama Mandiri',
    industry: 'Konstruksi & Infrastruktur Sipil',
    highlight: 'Kontrol Anggaran RAP Proyek & Kurva S Otomatis',
  },
  {
    name: 'PT Bahtera Distribusi Sentosa',
    industry: 'Distribusi FMCG & Multi-Gudang',
    highlight: 'Manajemen 40.000 SKU Multi-Cabang & WMS',
  },
  {
    name: 'PT Cipta Kreasi Pamerindo',
    industry: 'Exhibition Contractor & Booth Builder',
    highlight: 'Pengawasan Utilisasi Workshop & SPK Multi-Event',
  },
  {
    name: 'PT Graha Grafindo Nusantara',
    industry: 'Manufaktur Kemasan & Percetakan Industri',
    highlight: 'HPP Presisi Per Batch & BOM Multi-Level',
  },
  {
    name: 'PT Global Berikat Logistik',
    industry: 'Logistik Kawasan Berikat (CEISA Bea Cukai)',
    highlight: 'Sinkronisasi IT Inventory Real-Time Sesuai Perdirjen BC',
  },
  {
    name: 'PT Nusantara Retailindo Jaya',
    industry: 'Modern Retail & Multi-Branch Chain',
    highlight: 'Kasir Offline-Online Terpusat & e-Faktur Pajak Masa',
  },
];

export const ENTERPRISE_MODULES: EnterpriseModule[] = [
  {
    id: 'kontraktor',
    name: 'Kontraktor & Konstruksi',
    category: 'Konstruksi & Engineering',
    badge: 'Spesialisasi Proyek',
    tagline: 'Kendali Ketat RAP, Pengadaan Material Site, & Opname Fisik Lapangan',
    summary: 'Mencegah pembengkakan anggaran proyek konstruksi melalui validasi otomatis kuota Rencana Anggaran Pelaksanaan (RAP) sebelum Purchase Order diterbitkan.',
    keyWorkflows: [
      'Penyusunan WBS & Analisa Harga Satuan (AHS) terintegrasi',
      'Penguncian Pagu RAP (Budget Locking) pada setiap Purchase Request',
      'Kurva S otomatis berbasis realisasi biaya dan progres fisik',
      'Verifikasi opname fisik subkontraktor sebelum penerbitan BAP',
      'Otomatisasi pemotongan PPh Final Pasal 4 Ayat 2 & retensi termin',
    ],
    operationalCapabilities: [
      {
        title: 'RAP Budget Locking',
        description: 'Sistem secara otomatis menolak PO yang melebihi pagu RAP tanpa otorisasi bertingkat dari Direksi.',
      },
      {
        title: 'Kurva S Real-Time',
        description: 'Menyandingkan kurva rencana waktu terhadap pengeluaran biaya aktual lapangan secara presisi.',
      },
      {
        title: 'Laba Rugi Per Proyek',
        description: 'Menyajikan neraca laba rugi komparatif untuk setiap proyek aktif hingga masa pemeliharaan selesai.',
      },
    ],
    systemMetrics: [
      { label: 'Akurasi Pengadaan', value: '100% Sesuai RAP' },
      { label: 'Rekonsiliasi Opname', value: 'Terverifikasi Fisik' },
    ],
  },
  {
    id: 'exhibition',
    name: 'Exhibition Contractor',
    category: 'Event & Pameran',
    badge: 'Industri Kreatif & Konstruksi Booth',
    tagline: 'Orkestrasi SPK Multi-Event, Workshop Material, & Sewa Booth Cepat',
    summary: 'Dirancang khusus untuk kontraktor pameran dan booth builder dengan siklus produksi kilat, monitoring bahan baku workshop, serta utilisasi aset sewa dekorasi.',
    keyWorkflows: [
      'Manajemen penawaran desain 3D & estimasi biaya RAB per event',
      'Penerbitan Surat Perintah Kerja (SPK) terpisah untuk workshop & tim loading',
      'Kontrol stok material dekorasi (kayu, rangka besi, akrilik, lampu, printing)',
      'Manajemen inventaris aset sewa (furniture, showcase, signage display)',
      'Konsolidasi biaya produksi terhadap invoice penagihan event organizer',
    ],
    operationalCapabilities: [
      {
        title: 'Multi-Event Tracking',
        description: 'Memantau kesiapan puluhan booth di berbagai venue pameran secara paralel dari satu dashboard terpusat.',
      },
      {
        title: 'Logistik Loading & Unloading',
        description: 'Pencatatan akurat barang keluar dari gudang workshop hingga penarikan kembali pasca event selesai.',
      },
      {
        title: 'Analisa Margin Event',
        description: 'Menghitung profitabilitas riil tiap booth pameran dengan memperhitungkan upah lembur dan bahan terpakai.',
      },
    ],
    systemMetrics: [
      { label: 'Visibilitas Aset Sewa', value: 'Real-Time' },
      { label: 'Kendali Scrap Material', value: 'Termonitor Penuh' },
    ],
  },
  {
    id: 'property',
    name: 'Property Management',
    category: 'Real Estate & Pengelolaan Gedung',
    badge: 'Apartemen & Komersial',
    tagline: 'Otomatisasi Billing Tenancy, Iuran Pengelolaan (IPL), & Perawatan Fasilitas',
    summary: 'Platform manajemen properti terpadu untuk gedung perkantoran, kawasan pergudangan, apartemen, dan pusat perbelanjaan komersial.',
    keyWorkflows: [
      'Master data unit properti, layout denah, dan status ketersediaan sewa',
      'Perjanjian sewa (tenancy contract) dengan jadwal pembayaran termin',
      'Perhitungan otomatis tagihan IPL, sinking fund, pemakaian listrik & air',
      'Portal mandiri tenant untuk pengajuan permohonan kerja & invoice',
      'Penerbitan work order otomatis untuk perawatan preventif lift, genset, & AC',
    ],
    operationalCapabilities: [
      {
        title: 'Otomatisasi Penagihan Massal',
        description: 'Menerbitkan ratusan invoice IPL dan utilitas bulanan kepada penyewa dalam hitungan detik.',
      },
      {
        title: 'Monitoring Meteran Air & Listrik',
        description: 'Pencatatan angka meteran unit via mobile app dengan rumus tarif bertingkat dan PPN terintegrasi.',
      },
      {
        title: 'Helpdesk Perawatan Fasilitas',
        description: 'Melacak tiket keluhan penghuni dari pembuatan surat izin kerja hingga penyelesaian teknisi gedung.',
      },
    ],
    systemMetrics: [
      { label: 'Efisiensi Siklus Billing', value: '95% Otomatis' },
      { label: 'Kepatuhan Penagihan', value: 'Audit-Ready' },
    ],
  },
  {
    id: 'hris',
    name: 'HRIS & Enterprise Payroll',
    category: 'Manajemen SDM & Finansial',
    badge: 'Kepatuhan Regulasi Tenaga Kerja',
    tagline: 'Otomatisasi PPh 21 Skema TER 2024, BPJS, & Portal Mandiri Karyawan',
    summary: 'Solusi pengelolaan sumber daya manusia skala menengah-besar dengan perhitungan pajak gaji terkini, absensi multi-lokasi, dan integrasi jurnal payroll.',
    keyWorkflows: [
      'Perhitungan PPh 21 TER (Tarif Efektif Rata-rata) Kategori A, B, C otomatis',
      'Kalkulasi BPJS Ketenagakerjaan (JKK, JKM, JHT, JP) & BPJS Kesehatan',
      'Absensi mobile berbasis koordinat GPS, radius geofencing, & face recognition',
      'Employee Self-Service (ESS) untuk pengajuan cuti, lembur, dan slip gaji digital',
      'Jurnal otomatis biaya gaji per divisi/cabang ke General Ledger akuntansi',
    ],
    operationalCapabilities: [
      {
        title: 'Regulasi Pajak Gaji Terkini',
        description: 'Algoritma sistem selalu disesuaikan dengan PMK No. 168/2023 tanpa perlu modul tambahan.',
      },
      {
        title: 'Pengelolaan Shift Fleksibel',
        description: 'Mendukung jadwal kerja bergilir 24 jam untuk staf pabrik, perhotelan, retail, dan tenaga medis.',
      },
      {
        title: 'Keamanan Data Personalia',
        description: 'Data kompensasi dan rekam medis karyawan dilindungi enkripsi dengan hak akses terbatas tingkat direksi.',
      },
    ],
    systemMetrics: [
      { label: 'Kalkulasi Payroll', value: 'Zero Discrepancy' },
      { label: 'Kepatuhan Pajak & BPJS', value: 'Sesuai UU RI' },
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Multi-Branch POS',
    category: 'Perdagangan & Distribusi',
    badge: 'Toko Modern & Jaringan Cabang',
    tagline: 'Kasir Cepat Anti-Macet, Multi-Satuan Bertingkat, & Sinkronisasi Offline',
    summary: 'Sistem Point of Sale dan inventaris modern untuk jaringan toko retail, apotek, minimarket, dan toko bahan bangunan dengan ratusan ribu SKU.',
    keyWorkflows: [
      'Antarmuka kasir cepat dengan pemindaian barcode & pembayaran digital QRIS',
      'Mode transaksi offline-online: kasir tetap aktif saat internet padam',
      'Manajemen persediaan multi-satuan bertingkat (dus, pack, botol, pcs)',
      'Pengawasan First-Expired-First-Out (FEFO) dan peringatan barang mendekati kadaluwarsa',
      'Sinkronisasi otomatis stok cabang ke gudang pusat dan integrasi e-Faktur pajak',
    ],
    operationalCapabilities: [
      {
        title: 'Keandalan Offline Teruji',
        description: 'Menjamin kontinuitas operasional kasir tanpa hambatan koneksi internet lokal.',
      },
      {
        title: 'Promosi & Loyalty Terpusat',
        description: 'Mengatur skema diskon bundling, poin member, dan voucher belanja dari kantor pusat untuk seluruh cabang.',
      },
      {
        title: 'Stock Opname Cepat',
        description: 'Pemeriksaan stok harian menggunakan pemindai portabel tanpa harus menutup jam operasional toko.',
      },
    ],
    systemMetrics: [
      { label: 'Ketahanan Operasional', value: 'Offline-Ready' },
      { label: 'Sinkronisasi Multi-Cabang', value: 'Sub-Detik' },
    ],
  },
  {
    id: 'manufaktur',
    name: 'Manufaktur & Fabrikasi',
    category: 'Produksi & Industri Pengolahan',
    badge: 'HPP Presisi Per Batch',
    tagline: 'Bill of Materials Dinamis, Penjadwalan SPK, & Kalkulasi HPP Aktual',
    summary: 'Mengintegrasikan lantai pabrik dengan manajemen persediaan bahan baku, melacak scrap, dan menghitung Harga Pokok Penjualan (HPP) riil hingga ke level komponen.',
    keyWorkflows: [
      'Penyusunan Bill of Materials (BOM) multi-level beserta instruksi kerja mesin',
      'Penerbitan Surat Perintah Kerja (SPK) dan pemantauan Work In Progress (WIP)',
      'Alokasi biaya bahan baku, tenaga kerja langsung, dan overhead pabrik (BOP)',
      'Perhitungan HPP aktual per nomor batch produksi secara otomatis',
      'Pencatatan sisa bahan (scrap) dan pengawasan standar mutu (Quality Control)',
    ],
    operationalCapabilities: [
      {
        title: 'Presisi HPP Real-Time',
        description: 'Menghilangkan estimasi manual akhir bulan dengan kalkulasi biaya riil otomatis saat barang selesai dirakit.',
      },
      {
        title: 'Perencanaan Kebutuhan Bahan (MRP)',
        description: 'Menghitung kebutuhan pembelian bahan baku secara akurat berdasarkan pesanan penjualan yang masuk.',
      },
      {
        title: 'Efisiensi Lini Perakitan',
        description: 'Mengidentifikasi bottleneck pada stasiun kerja untuk menjaga utilitas mesin produksi tetap optimal.',
      },
    ],
    systemMetrics: [
      { label: 'Kalkulasi Biaya Produksi', value: 'Batch-Level Precision' },
      { label: 'Pengawasan Bahan Sisa', value: 'Terdokumentasi Penuh' },
    ],
  },
  {
    id: 'rental',
    name: 'Rental Aset & Alat Berat',
    category: 'Penyewaan & Utilitas Aset',
    badge: 'Armada & Peralatan Khusus',
    tagline: 'Penjadwalan Utilisasi Aset, Pengawasan Jam Kerja, & Log Servis Berkala',
    summary: 'Solusi terintegrasi untuk bisnis penyewaan alat berat (crane, excavator, genset), armada logistik, dan peralatan konstruksi dengan kalkulasi biaya operasi.',
    keyWorkflows: [
      'Kalender reservasi aset untuk mencegah bentrok jadwal pengiriman',
      'Pencatatan Surat Perintah Pengiriman (SPP) dan Berita Acara Serah Terima Aset',
      'Monitoring jam kerja mesin (Hour Meter) dan konsumsi bahan bakar lapangan',
      'Jadwal pemeliharaan preventif, penggantian suku cadang, dan uji kelayakan K3',
      'Penagihan sewa otomatis berdasarkan durasi hari, minggu, jam kerja, atau kontrak proyek',
    ],
    operationalCapabilities: [
      {
        title: 'Visibilitas Utilisasi Armada',
        description: 'Mengetahui posisi dan status operasional seluruh unit aset di berbagai lokasi proyek secara seketika.',
      },
      {
        title: 'Perpanjangan Masa Pakai Aset',
        description: 'Pengingat servis berkala otomatis untuk meminimalkan risiko kerusakan mendadak di lapangan.',
      },
      {
        title: 'Analisa Profitabilitas Aset',
        description: 'Membandingkan total pendapatan sewa terhadap biaya bahan bakar dan perbaikan unit selama siklus hidup aset.',
      },
    ],
    systemMetrics: [
      { label: 'Efisiensi Utilisasi Unit', value: 'Termonitor Maksimal' },
      { label: 'Ketertiban Perawatan', value: 'Preventif Terjadwal' },
    ],
  },
];

export const MEGA_MENU_SUITES: EnterpriseSuite[] = [
  {
    id: 'smartpos',
    slug: 'smartpos',
    title: 'SIS SmartPOS',
    category: 'Retail & Multi-Branch POS',
    badge: 'Retail Modern & Chain Store',
    tagline: 'Kasir Cepat Anti-Macet, Multi-Satuan Bertingkat, & Sinkronisasi Offline Teruji',
    summary: 'Platform Point of Sale dan inventaris modern untuk jaringan toko ritel, modern market, apotek, dan toko bahan bangunan dengan kemampuan transaksi offline berkelanjutan serta integrasi e-Faktur seketika.',
    accentColor: 'orange',
    iconName: 'ShoppingBag',
    keyWorkflows: [
      'Antarmuka kasir cepat pemindaian barcode kecepatan tinggi & QRIS dinamis',
      'Mode transaksi dual offline-online: kasir tetap beroperasi normal saat koneksi terputus',
      'Manajemen persediaan multi-satuan bertingkat (dus, karton, pack, botol, pieces)',
      'Otomatisasi First-Expired-First-Out (FEFO) dan peringatan tanggal kedaluwarsa barang',
      'Konsolidasi stok cabang ke gudang utama dan rekonsiliasi e-Faktur PPN otomatis',
    ],
    businessValue: [
      'Menghilangkan antrean kasir dengan respons transaksi sub-detik',
      'Mencegah kehilangan omset akibat pemadaman internet lokal',
      'Sentralisasi kebijakan harga, promo bundling, dan diskon member dari kantor pusat',
    ],
    complianceHighlights: [
      'Integrasi faktur pajak elektronik PPN 11% / 12% sesuai regulasi DJP',
      'Pencatatan mutasi kas kasir (cash drawer) dengan audit trail lengkap',
    ],
    idealFor: ['Supermarket & Minimarket', 'Apotek & Ritel Farmasi', 'Toko Bahan Bangunan & Hardware', 'Distributor Toko Berantai'],
  },
  {
    id: 'kontraktor',
    slug: 'kontraktor',
    title: 'SIS Construction One',
    category: 'Kontraktor & Jasa Konstruksi',
    badge: 'Spesialisasi Proyek & RAP',
    tagline: 'Kendali Ketat Pagu RAP, Pengadaan Material Site, & Opname Fisik Lapangan',
    summary: 'Sistem ERP spesialis konstruksi yang mengunci anggaran pelaksanaan (Budget Locking) pada setiap Purchase Request, menyajikan Kurva S real-time, dan mengontrol retensi termin subkontraktor.',
    accentColor: 'blue',
    iconName: 'Building2',
    keyWorkflows: [
      'Penyusunan WBS & Analisa Harga Satuan Pekerjaan (AHSP) terstruktur',
      'Penguncian Pagu RAP (Budget Locking) otomatis sebelum PO pengadaan site disetujui',
      'Generasi Kurva S otomatis komparasi rencana waktu terhadap pengeluaran biaya aktual',
      'Verifikasi Berita Acara Opname Fisik lapangan sebelum penerbitan sertifikat pembayaran termin',
      'Otomatisasi pemotongan PPh Final Konstruksi Pasal 4 Ayat 2 dan retensi masa pemeliharaan',
    ],
    businessValue: [
      'Mencegah pembengkakan biaya proyek akibat kebocoran pembelian material',
      'Memberikan visibilitas laba-rugi per proyek secara real-time kepada Direksi',
      'Menghilangkan sengketa progres pembayaran dengan bukti verifikasi opname fisik',
    ],
    complianceHighlights: [
      'Pemotongan PPh Final Jasa Konstruksi Pasal 4(2) sesuai klasifikasi kualifikasi LPJK',
      'Pemisahan pos beban proyek dan overhead kantor pusat sesuai PSAK SAK Indonesia',
    ],
    idealFor: ['Kontraktor Sipil & Gedung', 'General Contractor EPC', 'Subkontraktor MEP & Finishing', 'Kontraktor Pameran & Booth'],
  },
  {
    id: 'corehr',
    slug: 'corehr',
    title: 'SIS CoreHR',
    category: 'HRIS & Enterprise Payroll',
    badge: 'Kepatuhan Regulasi Ketenagakerjaan',
    tagline: 'Otomatisasi PPh 21 Skema TER PMK 168/2023, BPJS Terpadu, & Portal ESS Karyawan',
    summary: 'Platform tata kelola SDM enterprise yang mengotomatisasi kalkulasi gaji ribuan karyawan, skema pajak TER terkini, absensi multi-lokasi berbasis GPS/Face, dan jurnal biaya payroll terintegrasi.',
    accentColor: 'emerald',
    iconName: 'Users',
    keyWorkflows: [
      'Kalkulasi otomatis PPh 21 Skema Tarif Efektif Rata-Rata (TER Kategori A, B, C) & Pasal 17',
      'Perhitungan iuran BPJS Ketenagakerjaan (JKK, JKM, JHT, JP) & BPJS Kesehatan akurat',
      'Sistem absensi seluler dengan verifikasi geofencing GPS radius proyek dan pengenalan wajah',
      'Employee Self-Service (ESS) untuk slip gaji digital terenkripsi, pengajuan cuti, dan klaim lembur',
      'Penjurnalan otomatis beban gaji per departemen atau kode proyek langsung ke General Ledger',
    ],
    businessValue: [
      'Memangkas waktu siklus payroll bulanan dari hitungan hari menjadi beberapa menit',
      'Menjamin nihil selisih (zero discrepancy) antara absensi, lembur, dan slip gaji',
      'Mencegah denda perpajakan berkat rumus perhitungan pajak fiskal mutakhir',
    ],
    complianceHighlights: [
      '100% patuh Peraturan Menteri Keuangan PMK No. 168/2023 tentang PPh Pasal 21 TER',
      'Perhitungan batas plafon upah maksimal BPJS sesuai PP Ketenagakerjaan terbaru',
    ],
    idealFor: ['Perusahaan Manufaktur Pabrik', 'Korporasi Multi-Cabang', 'Perusahaan Jasa & Outsourcing', 'Rumah Sakit & Hospitality'],
  },
  {
    id: 'distribution',
    slug: 'distribution',
    title: 'SIS Distribution Suite',
    category: 'Distribusi & Supply Chain',
    badge: 'Multi-Gudang & WMS Terpadu',
    tagline: 'Orkestrasi Multi-Gudang, Pengiriman Rute Armada, & Manajemen Kuota Kredit Pelanggan',
    summary: 'Solusi terintegrasi untuk distributor nasional yang mengelola pergerakan puluhan ribu SKU, kontrol batas kredit (Credit Limit Locking), rute pengiriman sales canvasser, dan stok konsinyasi.',
    accentColor: 'indigo',
    iconName: 'Truck',
    keyWorkflows: [
      'Manajemen tata letak multi-gudang (rak, bin, lorong) dengan alokasi picking FIFO/FEFO',
      'Penguncian batas kredit (Credit Limit) dan jatuh tempo faktur piutang pelanggan secara otomatis',
      'Aplikasi mobile salesman untuk pencatatan Sales Order (SO) dan pelacakan rute kunjungan',
      'Penerbitan Surat Jalan (Delivery Order) bertingkat dan pengelolaan armada ekspedisi internal',
      'Pencatatan barang konsinyasi di gerai pihak ketiga serta rekonsiliasi retur penjualan cepat',
    ],
    businessValue: [
      'Mengurangi angka piutang macet melalui kontrol kredit otomatis di gerbang SO',
      'Meningkatkan akurasi pemenuhan pesanan (Order Fulfillment Rate) hingga 99,8%',
      'Transparansi ketersediaan stok riil di seluruh jaringan gudang wilayah',
    ],
    complianceHighlights: [
      'Pencatatan Surat Jalan resmi ber-barcode untuk verifikasi muatan di pos pemeriksaan',
      'Integrasi modul faktur komersial dan e-Faktur PPN faktur gabungan DJP',
    ],
    idealFor: ['Distributor FMCG & Consumer Goods', 'Distributor Bahan Kimia & Farmasi', 'Agen Tunggal Pemegang Merek (ATPM)', 'Distributor Elektronik & Sparepart'],
  },
  {
    id: 'berikat',
    slug: 'berikat',
    title: 'SIS Pusat Berikat',
    category: 'Kawasan Berikat & Gudang Berikat',
    badge: 'Kepatuhan Bea Cukai CEISA',
    tagline: 'Integrasi IT Inventory Bea Cukai Real-Time, Laporan BC 4.0/2.7, & Konversi Bahan Baku',
    summary: 'Sistem ERP berstandar Ditjen Bea Cukai untuk perusahaan manufaktur di Kawasan Berikat dan Gudang Berikat. Menghasilkan laporan IT Inventory 24/7 yang siap diaudit tanpa proses manual rekonsiliasi.',
    accentColor: 'amber',
    iconName: 'ShieldAlert',
    keyWorkflows: [
      'Pencatatan dokumen pabean BC 2.0 (impor), BC 2.3, BC 2.7, BC 4.0, dan BC 4.1 secara tersinkronisasi',
      'Konversi bahan baku impor menjadi barang jadi melalui Bill of Material (BOM) presisi pabean',
      'Portal IT Inventory Bea Cukai mandiri untuk akses auditor pabean sesuai Perdirjen BC PER-02/BC/2019',
      'Pencatatan scrap produksi, sisa bahan terbuang, dan barang subkontrak ke luar kawasan berikat',
      'Rekonsiliasi saldo buku pabean terhadap stock opname fisik gudang bahan baku dan barang jadi',
    ],
    businessValue: [
      'Mencegah pembekuan izin fasilitas Kawasan Berikat akibat ketidaksesuaian laporan IT Inventory',
      'Menghemat ratusan jam kerja tim logistik saat audit berkala Kantor Pengawasan Bea Cukai',
      'Pencatatan otomatis jaminan bea masuk dan fasilitas penangguhan pajak impor',
    ],
    complianceHighlights: [
      'Memenuhi Peraturan Direktur Jenderal Bea dan Cukai PER-02/BC/2019 tentang IT Inventory',
      'Format pelaporan mutasi bahan baku, barang dalam proses (WIP), barang jadi, dan sisa/scrap standar CEISA',
    ],
    idealFor: ['Pabrik Manufaktur Kawasan Berikat (KB)', 'Gudang Berikat Logistik', 'Eksportir Hasil Industri Tekstil & Alas Kaki', 'Perakitan Elektronik Berfasilitas KITE'],
  },
  {
    id: 'forex',
    slug: 'forex',
    title: 'SIS ForexSuite',
    category: 'Multi-Currency & Valas Akuntansi',
    badge: 'Multi-Mata Uang & Kurs Fiskal',
    tagline: 'Revaluasi Kurs Valas Harian BI/Kemenkeu, Akuntansi Selisih Kurs Realized/Unrealized',
    summary: 'Modul akuntansi valuta asing canggih untuk korporasi berorientasi ekspor-impor yang mencatat transaksi dalam berbagai mata uang (USD, EUR, SGD, CNY, JPY) dengan revaluasi kurs otomatis akhir periode.',
    accentColor: 'cyan',
    iconName: 'Coins',
    keyWorkflows: [
      'Sinkronisasi otomatis kurs tengah Bank Indonesia dan kurs pajak mingguan Kementerian Keuangan',
      'Pencatatan transaksi multi-currency pada level Purchase Order, Invoice, Piutang, dan Utang Dagang',
      'Perhitungan otomatis keuntungan/kerugian selisih kurs yang terealisasi (Realized Forex Gain/Loss)',
      'Jurnal revaluasi akhir bulan untuk saldo kas valas dan piutang belum tertagih (Unrealized Gain/Loss)',
      'Penyajian laporan keuangan komparatif dalam mata uang fungsional Rupiah dan mata uang pelaporan asing',
    ],
    businessValue: [
      'Menghilangkan kerumitan kalkulasi manual fluktuasi nilai tukar mata uang asing',
      'Memberikan gambaran riil eksposur risiko valas pada neraca keuangan perusahaan',
      'Audit akuntansi valas yang transparan dan dapat dilacak per nomor dokumen transaksi',
    ],
    complianceHighlights: [
      'Penerapan PSAK 10 (Pengaruh Perubahan Kurs Valuta Asing) Standar Akuntansi Keuangan Indonesia',
      'Pemisahan ketat antara laba rugi selisih kurs fiskal (PPh Badan) dan komersial',
    ],
    idealFor: ['Korporasi Perdagangan Internasional', 'Perusahaan Ekspor-Impor', 'Manufaktur dengan Bahan Baku Impor', 'Holding Perusahaan Multinasional'],
  },
];

export const BLOG_INSIGHTS = [
  {
    slug: 'panduan-pph-21-ter-2024',
    title: 'Panduan Implementasi PPh 21 Skema TER 2024 Sesuai PMK 168/2023 pada Payroll Perusahaan',
    category: 'Kepatuhan Pajak & Payroll',
    readTime: '6 Menit Baca',
    date: '2026-03-15',
    summary: 'Bagaimana skema Tarif Efektif Rata-Rata (TER) Kategori A, B, dan C mengubah perhitungan potongan pajak bulanan karyawan dan cara mengotomatisasinya di sistem ERP agar nihil denda.',
    author: 'Tim Konsultan Pajak & Finansial SISCOM',
    content: [
      'Pemberlakuan Peraturan Menteri Keuangan Nomor 168 Tahun 2023 membawa perubahan mendasar dalam tata cara pemotongan Pajak Penghasilan Pasal 21. Jika sebelumnya HRD harus menghitung perkiraan penghasilan neto disetahunkan setiap bulan, skema TER mempermudah pemotongan Januari hingga November menggunakan tabel persentase efektif.',
      'Namun, tantangan terbesar muncul pada masa pajak Desember, di mana perusahaan wajib menghitung kembali total pajak setahun menggunakan tarif Pasal 17 Ayat (1) huruf a UU PPh dan melakukan penyesuaian lebih/kurang bayar.',
      'Sistem SISCOM CoreHR dirancang native dengan rumus TER terkini. Begitu data absensi, tunjangan, dan lembur disahkan, sistem otomatis memetakan status PTKP karyawan ke tabel TER yang sah tanpa intervensi manual.',
    ],
  },
  {
    slug: 'mencegah-kebocoran-anggaran-rap-proyek',
    title: 'Strategi Mencegah Kebocoran Anggaran RAP Proyek Konstruksi Menggunakan Budget Locking',
    category: 'Konstruksi & Engineering',
    readTime: '8 Menit Baca',
    date: '2026-03-02',
    summary: 'Analisis empiris penyebab utama pembengkakan biaya proyek konstruksi dan mekanisme penguncian pagu RAP otomatis pada gerbang Purchase Request untuk menjaga margin laba.',
    author: 'Senior Project Engineering Specialist SISCOM',
    content: [
      'Rata-rata margin laba kontraktor berkisar antara 8% hingga 15%. Penyimpangan biaya material site sebesar 5% saja sudah mampu menggerus separuh profitabilitas proyek yang telah direncanakan.',
      'Penyebab klasik kebocoran adalah pengadaan mendesak di lapangan yang dilakukan tanpa memvalidasi sisa alokasi Rencana Anggaran Pelaksanaan (RAP). Seringkali manajemen kantor pusat baru mengetahui kelebihan biaya setelah invoice tagihan subkontraktor dan supplier menumpuk.',
      'Dengan fitur Budget Locking pada SIS Construction One, setiap pengajuan Purchase Request (PR) otomatis diverifikasi terhadap pos WBS proyek. Sistem secara tegas menolak pemrosesan PR yang melampaui sisa pagu RAP kecuali mendapatkan otorisasi berjenjang dari Dewan Direksi.',
    ],
  },
  {
    slug: 'standar-audit-it-inventory-kawasan-berikat',
    title: 'Kriteria Kelayakan Audit IT Inventory Bea Cukai Kawasan Berikat Sesuai PER-02/BC/2019',
    category: 'Kawasan Berikat & Logistik',
    readTime: '7 Menit Baca',
    date: '2026-02-18',
    summary: 'Poin-poin penting yang diperiksa oleh pemeriksa Bea Cukai dalam mengaudit subsistem IT Inventory dan bagaimana arsitektur ERP menjamin kepatuhan fasilitas penangguhan bea masuk.',
    author: 'Pakar Regulasi Kepabeanan SISCOM',
    content: [
      'Fasilitas Kawasan Berikat memberikan insentif penangguhan Bea Masuk dan tidak dipungutnya PPN impor bahan baku. Sebagai imbal baliknya, DJBC mewajibkan perusahaan memiliki sistem IT Inventory yang dapat diakses oleh petugas pemeriksa secara online 24 jam.',
      'Kriteria mutlak IT Inventory yang baik meliputi: continuous recording (pencatatan berkelanjutan), bukan sekadar sistem upload spreadsheet berkala; kemampuan menelusuri dokumen pabean (BC 2.0, BC 2.3, BC 2.7, BC 4.0) ke nomor batch bahan baku di gudang; serta rekonsiliasi WIP (Work In Progress) yang transparan.',
      'SIS Pusat Berikat menyediakan portal auditor independen dengan log aktivitas pengguna yang tidak dapat diubah (immutable audit log), menjamin fasilitas kepabeanan perusahaan Anda senantiasa aman dari pembekuan izin.',
    ],
  },
  {
    slug: 'konsolidasi-finansial-multi-entitas-tanpa-silo',
    title: 'Membangun Single Source of Truth: Konsolidasi Finansial Multi-Cabang & Multi-Entitas',
    category: 'Akuntansi & Keuangan Enterprise',
    readTime: '5 Menit Baca',
    date: '2026-01-25',
    summary: 'Mengapa spreadsheet manual menjadi bom waktu bagi perusahaan berkembang dan bagaimana arsitektur single-database menghasilkan neraca laba-rugi konsolidasian dalam hitungan detik.',
    author: 'Chief Financial Consultant SISCOM',
    content: [
      'Ketika korporasi berkembang memiliki beberapa pabrik, gudang regional, atau entitas anak usaha, penyusunan laporan keuangan bulanan kerap memakan waktu 2 hingga 3 minggu. Staf akuntansi menghabiskan waktu berharga untuk mencocokkan transaksi antar-perusahaan (intercompany transactions).',
      'Arsitektur basis data relasional tunggal SISCOM menghilangkan silo informasi dengan eliminasi transaksi intercompany otomatis saat laporan konsolidasian ditarik.',
      'Dewan Direksi dan CFO memperoleh laporan posisi keuangan, arus kas, dan rasio solvabilitas secara seketika pada hari pertama penutupan buku (Day-1 Financial Close).',
    ],
  },
];

export const ENTERPRISE_CAPABILITIES: EnterpriseFeature[] = [
  {
    id: 'single-database',
    title: 'Arsitektur Single Source of Truth',
    description: 'Seluruh divisi operasional, logistik, proyek, dan keuangan beroperasi pada satu basis data relasional terpadu yang konsisten dan patuh terhadap standar integritas data ACID.',
    highlight: 'Zero Data Silo',
  },
  {
    id: 'audit-trail',
    title: 'Keamanan Granular & Audit Trail Abadi',
    description: 'Hak akses didefinisikan secara spesifik per peran pengguna. Setiap penambahan, pengubahan, atau penghapusan data terekam lengkap beserta identitas pengguna dan cap waktu.',
    highlight: 'Enterprise Governance',
  },
  {
    id: 'deployment-choice',
    title: 'Fleksibilitas Private Cloud & Sovereign On-Premise',
    description: 'Pilihan penempatan sistem sesuai mandat keamanan korporat Anda: Private Cloud terkelola di Data Center Tier 3 Jakarta atau instalasi mandiri di server lokal gedung kantor Anda.',
    highlight: 'Data Sovereignty',
  },
  {
    id: 'tax-native',
    title: 'Dukungan Kepatuhan Perpajakan & Standar SAK Indonesia',
    description: 'Didesain secara khusus untuk regulasi fiskal Indonesia: e-Faktur terintegrasi, PPh 21 TER, PPh 23, PPh Final Konstruksi, serta format pelaporan keuangan Standar Akuntansi Keuangan.',
    highlight: '100% SAK Compliant',
  },
  {
    id: 'multi-branch',
    title: 'Konsolidasi Finansial Multi-Entitas & Multi-Cabang',
    description: 'Menghubungkan puluhan cabang, gudang, dan entitas anak perusahaan ke dalam satu laporan laba rugi konsolidasi secara instan tanpa kompilasi manual.',
    highlight: 'Instan Konsolidasi',
  },
  {
    id: 'support-tier',
    title: 'Dedicated Enterprise Support & Responsive Assistance',
    description: 'Didukung langsung oleh tim rekayasa perangkat lunak dan konsultan bisnis lokal berbasis di Jakarta dengan jaminan Service Level Agreement (SLA) respons terukur.',
    highlight: 'Local Expert Advisory',
  },
];

export const IMPLEMENTATION_STEPS = [
  {
    number: '01',
    title: 'Discovery & Business Process Mapping',
    description: 'Audit mendalam terhadap alur operasional, struktur hierarki persetujuan, dan tata kelola dokumen bisnis Anda untuk merumuskan dokumen Scope of Work (SOW) yang presisi.',
    duration: 'Minggu 1',
  },
  {
    number: '02',
    title: 'System Configuration & Data Migration',
    description: 'Penyusunan basis data, konfigurasi hak akses pengguna, integrasi bagan akun (COA), serta pembersihan dan migrasi master data saldo awal secara terstruktur.',
    duration: 'Minggu 2 - 3',
  },
  {
    number: '03',
    title: 'Role-Specific Hands-on Enablement',
    description: 'Pelatihan intensif berbasis studi kasus riil untuk masing-masing peran staf: tim lapangan, gudang, estimator, human resource, hingga akuntan kantor pusat.',
    duration: 'Minggu 4',
  },
  {
    number: '04',
    title: 'Supervised Go-Live & Formal Sign-Off',
    description: 'Pemberlakuan sistem aktif untuk pencatatan transaksi riil perusahaan yang didampingi secara langsung di lokasi oleh konsultan senior hingga terbit Berita Acara (BAST).',
    duration: 'Minggu 5 - 6',
  },
  {
    number: '05',
    title: 'Hypercare Warranty & Ongoing Strategic Partnership',
    description: 'Masa pengawasan intensif pasca go-live guna memastikan seluruh staf lancar dan laporan keuangan konsolidasi pertama dapat ditutup secara tepat waktu tanpa kendala.',
    duration: 'Berkelanjutan',
  },
];

export const ENTERPRISE_FAQS = [
  {
    question: 'Mengapa SISCOM ERP lebih unggul untuk industri di Indonesia dibandingkan Odoo atau SAP?',
    answer: 'SISCOM dibangun dari bawah ke atas dengan pemahaman mendalam terhadap regulasi bisnis di Indonesia. Kepatuhan perpajakan (PPh 21 skema TER 2024, e-Faktur, PPh Final Jasa Konstruksi), format dokumen operasional, serta alur bisnis seperti RAP proyek kontraktor atau booth pameran telah tersedia secara bawaan (native). Anda tidak dibebani biaya kustomisasi tinggi atau ketergantungan pada modul pihak ketiga yang rentan rusak saat regulasi pemerintah berganti.',
  },
  {
    question: 'Bagaimana penanganan keamanan data dan kepatuhan terhadap UU Perlindungan Data Pribadi (UU PDP)?',
    answer: 'Infrastruktur cloud SISCOM berlokasi secara fisik di Tier 3/4 Data Center Jakarta, menjamin kedaulatan data di wilayah yurisdiksi Indonesia. Seluruh transmisi data dilindungi protokol TLS 1.3 dengan enkripsi AES-256 pada media penyimpanan. Sistem dilengkapi pencatatan audit trail menyeluruh dan kepemilikan data seutuhnya tetap berada di tangan perusahaan Anda dengan hak ekspor penuh.',
  },
  {
    question: 'Apakah SISCOM ERP dapat dipasang pada server milik perusahaan kami sendiri (On-Premise)?',
    answer: 'Ya. SISCOM mendukung model penempatan sistem yang sepenuhnya fleksibel: Dedicated Private Cloud terkelola atau Sovereign On-Premise di pusat data milik gedung kantor Anda. Model On-Premise memberikan kendali fisik mutlak dan sangat ideal bagi entitas yang memiliki protokol kerahasiaan ketat atau lokasi cabang dengan keterbatasan internet.',
  },
  {
    question: 'Bagaimana pendekatan implementasi SISCOM untuk mencegah risiko kegagalan adopsi sistem oleh staf?',
    answer: 'Kegagalan implementasi umumnya bukan karena software, melainkan minimnya pendampingan manusia. SISCOM menerapkan metodologi implementasi 5-tahap teruji di mana konsultan senior kami hadir langsung mendampingi tim Anda dari pemetaan alur, migrasi master data, simulasi transaksi, hingga masa hypercare 30 hari pasca Go Live sampai terbit Berita Acara Serah Terima resmi.',
  },
  {
    question: 'Bagaimana dukungan teknis diberikan setelah sistem beroperasi aktif?',
    answer: 'Kami menyediakan Dedicated Enterprise Support & Responsive Technical Assistance yang dikelola langsung oleh tim spesialis lokal di Jakarta. Klien korporat mendapatkan kanal komunikasi terdedikasi dengan komitmen Service Level Agreement (SLA) waktu tanggap berjenjang, pendampingan saat terjadi pergantian staf, dan pembaruan regulasi perpajakan berkala.',
  },
  {
    question: 'Berapa lama rata-rata durasi waktu dari tahap kick-off hingga Go Live resmi?',
    answer: 'Durasi implementasi bervariasi bergantung pada skala entitas dan kompleksitas modul: 2 hingga 4 minggu untuk retail modern dan manajemen properti; 4 hingga 8 minggu untuk kontraktor proyek dan pabrik manufaktur. Setiap tahapan diatur secara ketat dalam Project Charter yang disepakati bersama di awal kerja sama.',
  },
];
