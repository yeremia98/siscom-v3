import { CompanyInfo, TimelineEntry } from './types';

export const COMPANY_INFO: CompanyInfo = {
  legalName: 'PT Shan Informasi Sistem',
  brandName: 'SISCOM ERP',
  foundedYear: 1994,
  headquarters: 'Jakarta, Indonesia',
  address: 'City Resort Rukan Malibu Blok J No. 75-77, Mutiara Taman Palem, Cengkareng, Jakarta Barat 11730',
  addressConfirmationNote: 'Perlu konfirmasi pemilik',
  phone: '+62 21 5694 5002',
  whatsappOfficial: '6281299817515', // Default nomor resmi terverifikasi
  whatsappSupport: '6281381333515',
  emailSales: 'sales@siscom.co.id',
  emailSupport: 'support@siscom.co.id',
  social: {
    instagram: 'siscomsoftware',
    linkedin: 'SISCOM Software',
    youtube: 'SISCOM Software',
    youtubeVideoId: 'c2IJ1eBNXrU',
  },
  claims: {
    clients: '1.000+',
    products: '15+',
    modules: '100+',
    industries: '10+',
    label: 'Klaim perusahaan terdaftar',
    date: 'Brosur & Company Profile 2024',
  },
  vision: {
    statement:
      'Menjadi perusahaan penyedia software ERP terdepan yang menjadi andalan dan dipercaya oleh para pengusaha di Indonesia.',
    metadata: {
      status: 'verified',
      source: 'SISCOM Company Profile hal. 3',
    },
  },
  mission: {
    items: [
      'Menjadikan kepuasan setiap customer sebagai prioritas utama SISCOM.',
      'Menyediakan software ERP yang membantu mempermudah kontrol bisnis dan mudah dipahami oleh setiap client.',
      'Menyediakan software ERP dengan harga yang kompetitif dengan jaminan kualitas prima.',
      'Terus berinovasi mengikuti perkembangan dan menjawab kebutuhan pasar.',
      'Menyediakan tenaga kerja yang profesional dan terpercaya.',
    ],
    metadata: {
      status: 'verified',
      source: 'SISCOM Company Profile hal. 3 (versi brosur 4 butir: perlu konfirmasi versi final)',
    },
  },
};

export const TIMELINE_HISTORY: TimelineEntry[] = [
  {
    year: 1994,
    milestone: 'Pendirian Perusahaan',
    detail: 'Memulai perjalanan bisnis sebagai perusahaan penyedia hardware komputer di Jakarta.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
  {
    year: 1999,
    milestone: 'Fokus Software Akuntansi Desktop',
    detail: '100% beralih mengembangkan software akuntansi versi desktop on-premise.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
  {
    year: 2009,
    milestone: 'Ekspansi Pelanggan Nasional',
    detail: 'Dipercaya oleh pelanggan bisnis di berbagai wilayah Indonesia.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
  {
    year: 2013,
    milestone: 'Custom Made Software Akuntansi',
    detail: 'Menyediakan software akuntansi fleksibel yang disesuaikan dengan alur spesifik pelanggan.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
  {
    year: 2018,
    milestone: 'Peluncuran SISCOM Web-Based',
    detail: 'Mengembangkan software berbasis peramban (cloud) untuk akses jarak jauh antar cabang.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
  {
    year: 2019,
    milestone: 'Peluncuran SISCOM Mobile',
    detail: 'Menghadirkan aplikasi mobile untuk pemantauan data transaksi langsung dari ponsel.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
  {
    year: 2020,
    milestone: 'Integrasi POS & Web-Based',
    detail: 'Mengintegrasikan kasir POS langsung dengan sistem pencatatan inventori web-based.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
  {
    year: 2021,
    milestone: 'Modifikasi Alur Kerja Pelanggan',
    detail: 'Pengembangan kemampuan kustomisasi modul sesuai alur operasional unik tiap klien.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
  {
    year: 2022,
    milestone: 'Peluncuran Modul HRIS',
    detail: 'Meluncurkan sistem informasi manajemen SDM dan payroll terintegrasi.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
  {
    year: 2023,
    milestone: 'Ekosistem Lengkap SISCOM ERP',
    detail: 'Pengembangan berkelanjutan modul ERP komprehensif lintas industri konstruksi, manufaktur, dan distribusi.',
    metadata: { status: 'verified', source: 'SISCOM Company Profile hal. 5' },
  },
];
