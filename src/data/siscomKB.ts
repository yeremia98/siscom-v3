/**
 * SISCOM ERP Knowledge Base & Intelligence Engine
 * Comprehensive domain data for SISCOM ERP (PT Shan Informasi Sistem, est. 1994)
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  cta?: { label: string; route: string };
  category?: string;
}

export interface RouteContextInfo {
  name: string;
  description: string;
  faqs: FAQItem[];
}

export type GuardrailCategory = 'INJECTION' | 'SENSITIVE' | 'OFF_TOPIC';

export interface GuardrailCheckResult {
  blocked: boolean;
  category?: GuardrailCategory;
  reason?: string;
  response?: string;
}

// 1. Guardrail Patterns
// Injection patterns: prompt hijacking, roleplay jailbreaks, system prompt extractions
const RE_INJECTION_CI = /\b(ignore previous instructions|abaikan instruksi|abaikan perintah|system prompt|jailbreak|pretend you are|dan mode|bypass guardrail|you are now a|act as an unfiltered|lupakan batasan)\b/i;
const RE_INJECTION_CS = /\bDAN\b/; // Uppercase DAN (Do Anything Now)

// Sensitive requests: credentials, backend schemas, root access, keys
const RE_SENSITIVE = /\b(password|kata sandi|api[_\s]?key|secret[_\s]?key|kredensial|credential|source code|kode sumber|struktur database|connection string|db credentials|dump sql|database password|env file|\.env)\b/i;

// Off-topic requests: weather, cooking recipes, political matters, external stock/crypto speculation
const RE_OFF_TOPIC = /\b(resep masakan|resep masak|cuaca|prakiraan cuaca|pemilu|presiden|partai politik|sepak bola|klasemen bola|chord gitar|lirik lagu|ramalan bintang|zodiak|harga bitcoin|crypto trading|saham bursa|rekomendasi film|drama korea)\b/i;

export function checkGuardrails(query: string): GuardrailCheckResult {
  const trimmed = query.trim();

  // Check Prompt Injection
  if (RE_INJECTION_CI.test(trimmed) || RE_INJECTION_CS.test(trimmed)) {
    return {
      blocked: true,
      category: 'INJECTION',
      reason: 'Prompt injection attempt detected',
      response:
        'Mohon maaf, instruksi sistem HiSIS tidak dapat diubah atau dialihkan. Saya bertugas khusus memberikan konsultasi resmi seputar solusi sistem ERP SISCOM.',
    };
  }

  // Check Sensitive Data Access
  if (RE_SENSITIVE.test(trimmed)) {
    return {
      blocked: true,
      category: 'SENSITIVE',
      reason: 'Sensitive data / credential access requested',
      response:
        'Sesuai kebijakan tata kelola keamanan informasi SISCOM (ISO/IEC 27001 standard), asisten AI tidak memiliki akses terhadap kredensial rahasia, source code internal, maupun struktur database backend.',
    };
  }

  // Check Off-Topic
  if (RE_OFF_TOPIC.test(trimmed)) {
    return {
      blocked: true,
      category: 'OFF_TOPIC',
      reason: 'Off-topic query',
      response:
        'Pertanyaan tersebut berada di luar cakupan konsultasi bisnis SISCOM ERP. HiSIS siap membantu Anda mengenai fitur ERP, modul HRIS, manajemen akuntansi/fiskal, atau penjadwalan demo implementasi.',
    };
  }

  return { blocked: false };
}

// 2. Comprehensive Knowledge Base
export interface KBEntry {
  id: string;
  keywords: string[];
  title: string;
  answer: string;
  cta?: { label: string; route: string };
  topic: 'Fitur' | 'Kontraktor' | 'HRIS' | 'Akuntansi' | 'Harga' | 'Implementasi' | 'Umum';
}

export const SISCOM_KB_ENTRIES: KBEntry[] = [
  {
    id: 'kb-profil-siscom',
    keywords: ['siapa siscom', 'profil', 'sejarah', 'berdiri', 'pt shan informasi sistem', 'perusahaan', 'latar belakang'],
    title: 'Tentang SISCOM (PT Shan Informasi Sistem)',
    answer:
      'SISCOM (PT Shan Informasi Sistem) didirikan pada tahun 1994 di Jakarta. Berpengalaman lebih dari 30 tahun melayani ribuan korporasi di seluruh Indonesia mulai dari manufaktur, kontraktor, distribusi, farmasi, retail, hingga logistik.',
    cta: { label: 'Lihat Profil Perusahaan', route: '/tentang-siscom' },
    topic: 'Umum',
  },
  {
    id: 'kb-kontraktor',
    keywords: ['kontraktor', 'proyek', 'rab', 'rap', 'konstruksi', 'progres fisik', 's-curve', 'retensi', 'subkontraktor'],
    title: 'Modul Kontraktor & Manajemen Proyek',
    answer:
      'Modul Kontraktor SISCOM dirancang khusus untuk industri konstruksi: penyusunan RAB/RAP presisi, pemantauan kurva-S (S-Curve) progres fisik vs finansial, manajemen termin & retensi garansi, integrasi SPK subkontraktor, serta evaluasi laba rugi per nomor proyek secara real-time.',
    cta: { label: 'Jadwalkan Demo Kontraktor', route: '/demo' },
    topic: 'Kontraktor',
  },
  {
    id: 'kb-hris',
    keywords: ['hris', 'payroll', 'gaji', 'pph 21', 'ter pph 21', 'absensi', 'bpjs', 'karyawan', 'lembur', 'cuti', 'sdm'],
    title: 'SISCOM HRIS & Payroll Terintegrasi',
    answer:
      'SISCOM HRIS mengotomasi perhitungan payroll bulanan, formula TER PPh 21 terbaru sesuai PMK 168/2023, iuran BPJS Ketenagakerjaan & Kesehatan, absensi GPS mobile app / mesin biometric, serta integrasi otomatis jurnal beban gaji ke modul Buku Besar Akuntansi.',
    cta: { label: 'Jadwalkan Demo HRIS', route: '/demo' },
    topic: 'HRIS',
  },
  {
    id: 'kb-akuntansi',
    keywords: ['akuntansi', 'buku besar', 'jurnal', 'neraca', 'laba rugi', 'fiskal', 'e-faktur', 'pajak', 'ppn', 'arus kas', 'multicurrency'],
    title: 'Modul Finansial, Akuntansi & Kepatuhan Pajak',
    answer:
      'Modul Akuntansi SISCOM menyajikan bagan akun (COA) multi-cabang & multi-mata uang, auto-posting dari penjualan & pembelian, laporan neraca & laba-rugi per divisi, rekonsiliasi bank otomatis, serta ekspor format e-Faktur DJP dan kalkulasi PPh Badan.',
    cta: { label: 'Pelajari Modul Finansial', route: '/modul-solusi' },
    topic: 'Akuntansi',
  },
  {
    id: 'kb-manufaktur',
    keywords: ['manufaktur', 'pabrik', 'bill of material', 'bom', 'work order', 'hpp', 'biaya produksi', 'scrap', 'wip', 'assembly'],
    title: 'Modul Manufaktur & Kalkulasi HPP Aktual',
    answer:
      'Modul Manufaktur SISCOM mendukung multi-level Bill of Materials (BOM), perutean tahapan kerja (work routing), surat perintah kerja (SPK), alokasi biaya overhead & tenaga kerja langsung, penanganan waste/scrap, dan perhitungan Harga Pokok Produksi (HPP) aktual per batch.',
    cta: { label: 'Jadwalkan Demo Manufaktur', route: '/demo' },
    topic: 'Fitur',
  },
  {
    id: 'kb-distribusi',
    keywords: ['distribusi', 'gudang', 'multi gudang', 'batch number', 'expired date', 'lot', 'konsinyasi', 'kanvaser', 'surat jalan'],
    title: 'Modul Distribusi & Manajemen Rantai Pasok',
    answer:
      'Solusi Distribusi SISCOM mengelola multi-warehouse transfer, tracing nomor batch/lot & tanggal kedaluwarsa, pengaturan harga bertingkat, batas kredit pelanggan (credit limit), manajemen konsinyasi, dan integrasi mobile canvassing.',
    cta: { label: 'Lihat Solusi Distribusi', route: '/modul-vertikal' },
    topic: 'Fitur',
  },
  {
    id: 'kb-harga',
    keywords: ['harga', 'biaya', 'investasi', 'lisensi', 'paket', 'biaya implementasi', 'on-premise', 'cloud', 'subscription', 'beli putus'],
    title: 'Skema Lisensi & Model Investasi SISCOM',
    answer:
      'SISCOM menyediakan fleksibilitas skema lisensi: (1) On-Premise Perpetual (beli putus satu kali dengan kedaulatan data di server perusahaan), dan (2) Cloud Enterprise Subscription. Biaya implementasi disesuaikan dengan cakupan modul dan jumlah pengguna concurrent.',
    cta: { label: 'Konsultasi Penawaran Resmi', route: '/demo' },
    topic: 'Harga',
  },
  {
    id: 'kb-metodologi',
    keywords: ['metodologi', 'tahapan', 'implementasi', 'training', 'go-live', 'migrasi', 'sop', 'durasi implementasi'],
    title: 'Metodologi Implementasi 6 Langkah SISCOM',
    answer:
      'Implementasi SISCOM mengadopsi 6 langkah terstruktur: (1) Business Process Blueprinting, (2) System Configuration & Customization, (3) Data Migration & Cleansing, (4) User Acceptance Testing (UAT), (5) End-User Training, dan (6) Go-Live Support & Handover bergaransi.',
    cta: { label: 'Pelajari Metodologi', route: '/metodologi' },
    topic: 'Implementasi',
  },
  {
    id: 'kb-keamanan',
    keywords: ['keamanan', 'security', 'enkripsi', 'server', 'backup', 'iso 27001', 'lokasi server', 'audit trail'],
    title: 'Keamanan Data & Penempatan Server',
    answer:
      'Sistem SISCOM dilengkapi role-based access control (RBAC), row-level encryption, pencatatan jejak audit (audit trail) lengkap tanpa celah manipulasi, serta penempatan server di data center Tier-3 Indonesia sesuai ketentuan UU PDP.',
    cta: { label: 'Tinjau Keamanan Data', route: '/keamanan-data' },
    topic: 'Fitur',
  },
  {
    id: 'kb-integrasi',
    keywords: ['integrasi', 'api', 'pos', 'e-commerce', 'fingerprint', 'bank', 'whatsapp gateway', 'barcode'],
    title: 'Kemampuan Integrasi Sistem Eksternal',
    answer:
      'SISCOM mendukung RESTful API untuk bridging data ke mesin absensi biometric, sistem POS toko cabang, marketplace e-commerce, portal perbankan (corporate cash management), serta WhatsApp notification gateway.',
    cta: { label: 'Konsultasi Integrasi', route: '/demo' },
    topic: 'Fitur',
  },
];

// 3. Context-specific definitions
export const ROUTE_CONTEXT_MAP: Record<string, RouteContextInfo> = {
  '/': {
    name: 'Beranda SISCOM',
    description: 'Eksplorasi ekosistem ERP terpadu untuk percepatan bisnis Indonesia.',
    faqs: [
      {
        id: 'faq-home-1',
        question: 'Apa keunggulan SISCOM dibandingkan ERP lainnya?',
        answer: 'SISCOM berpengalaman sejak 1994, memiliki modul lengkap yang disesuaikan dengan regulasi perpajakan & bisnis di Indonesia, serta didukung opsi On-Premise maupun Cloud.',
        cta: { label: 'Jadwalkan Demo', route: '/demo' },
      },
      {
        id: 'faq-home-2',
        question: 'Berapa perkiraan durasi implementasi SISCOM ERP?',
        answer: 'Durasi berkisar antara 1 hingga 3 bulan tergantung skala modul, kesiapan data master, dan kompleksitas alur bisnis perusahaan Anda.',
        cta: { label: 'Pelajari Metodologi', route: '/metodologi' },
      },
      {
        id: 'faq-home-3',
        question: 'Apakah SISCOM bisa disesuaikan (customized) dengan alur kami?',
        answer: 'Ya, tim R&D in-house SISCOM melayani kustomisasi alur bisnis, form khusus, maupun penyesuaian laporan manajemen eksekutif.',
      },
      {
        id: 'faq-home-4',
        question: 'Bagaimana cara menjadwalkan presentasi & live demo produk?',
        answer: 'Anda dapat mengisi formulir demo online atau menghubungi tim advisory kami via WhatsApp resmi untuk penjadwalan demo tatap muka maupun daring.',
        cta: { label: 'Isi Formulir Demo', route: '/demo' },
      },
    ],
  },
  '/modul-solusi': {
    name: 'Modul ERP Solusi',
    description: 'Modul fungsional: Akuntansi, Pembelian, Penjualan, Stok, dan HRIS.',
    faqs: [
      {
        id: 'faq-solusi-1',
        question: 'Apakah jurnal akuntansi terbentuk secara otomatis?',
        answer: 'Ya. Seluruh transaksi dari modul Penjualan, Pembelian, Kas/Bank, dan Stok langsung membentuk jurnal akuntansi otomatis sesuai rule COA yang ditetapkan.',
      },
      {
        id: 'faq-solusi-2',
        question: 'Bagaimana integrasi perhitungan PPh 21 dengan modul Payroll?',
        answer: 'Modul HRIS SISCOM menghitung otomatis TER PPh 21 bulanan dan masa pajak terakhir, terintegrasi langsung dengan slip gaji dan pemotongan kas perusahaan.',
        cta: { label: 'Coba Demo HRIS', route: '/demo' },
      },
      {
        id: 'faq-solusi-3',
        question: 'Apakah mendukung multi gudang dan multi mata uang?',
        answer: 'Ya, sistem mendukung penanganan multi cabang, multi gudang antar pulau, serta konversi kurs valuta asing otomatis untuk laporan laba/rugi selisih kurs.',
      },
      {
        id: 'faq-solusi-4',
        question: 'Bisakah modul dibeli bertahap sesuai skala bisnis?',
        answer: 'Tentu. Anda dapat mengawali dari modul inti (Keuangan & Inventory), lalu menambah modul Produksi atau HRIS di kemudian hari tanpa migrasi ulang.',
      },
    ],
  },
  '/modul-vertikal': {
    name: 'Modul Vertikal Industri',
    description: 'Solusi sektoral mendalam: Kontraktor, Manufaktur, Distribusi & Retail.',
    faqs: [
      {
        id: 'faq-vertikal-1',
        question: 'Bagaimana SISCOM mengontrol RAB vs RAP proyek kontraktor?',
        answer: 'SISCOM mengunci batas belanja material dan subkon berdasarkan RAP. Setiap pengajuan SPK dan PO proyek akan divalidasi terhadap sisa anggaran per item pekerjaan.',
        cta: { label: 'Demo Modul Kontraktor', route: '/demo' },
      },
      {
        id: 'faq-vertikal-2',
        question: 'Apakah modul manufaktur mendukung perhitungan biaya overhead (BOP)?',
        answer: 'Ya, sistem mengalokasikan BOP dan upah buruh langsung ke dalam HPP produk jadi secara proporsional atau berdasarkan standar jam mesin.',
      },
      {
        id: 'faq-vertikal-3',
        question: 'Bagaimana SISCOM membantu distributor mengatasi dead stock?',
        answer: 'Sistem menyajikan laporan Aging Stock, Fast/Slow Moving Analysis, serta peringatan dini barang mendekati kedaluwarsa (near expiry alert).',
      },
      {
        id: 'faq-vertikal-4',
        question: 'Apakah tersedia solusi point of sale (POS) untuk ritel?',
        answer: 'Tersedia SISCOM POS yang tersinkronisasi langsung ke gudang pusat dan akuntansi secara periodik maupun real-time.',
      },
    ],
  },
  '/klien': {
    name: 'Klien & Sektor Industri',
    description: 'Portofolio korporasi dan ragam sektor bisnis yang telah go-live bersama SISCOM.',
    faqs: [
      {
        id: 'faq-klien-1',
        question: 'Perusahaan skala apa saja yang cocok menggunakan SISCOM?',
        answer: 'SISCOM melayani perusahaan berkembang (SME) hingga korporasi multi-anak perusahaan di bidang manufaktur, logistik, kontraktor, dan perdagangan besar.',
      },
      {
        id: 'faq-klien-2',
        question: 'Apakah ada referensi klien sejenis di industri saya?',
        answer: 'Dengan portofolio lebih dari 1.000 klien, tim kami dapat membagikan success story dan use case implementasi di sektor spesifik Anda.',
        cta: { label: 'Konsultasi dengan Expert', route: '/demo' },
      },
      {
        id: 'faq-klien-3',
        question: 'Bagaimana tingkat keberhasilan go-live implementasi SISCOM?',
        answer: 'SISCOM menerapkan metodologi UAT ketat dan pendampingan paralel run untuk menjamin tingkat keberhasilan transisi sistem hingga 100%.',
      },
      {
        id: 'faq-klien-4',
        question: 'Apakah disediakan kontrak SLA dukungan teknis purna jual?',
        answer: 'Ya, setiap klien mendapatkan jaminan Maintenance & Support resmi dengan SLA respon cepat dari tim helpdesk Jakarta.',
      },
    ],
  },
  '/layanan': {
    name: 'Layanan & Metodologi',
    description: 'Proses pendampingan, training SDM, dan garansi pasca implementasi.',
    faqs: [
      {
        id: 'faq-layanan-1',
        question: 'Apakah ada pendampingan migrasi data dari sistem lama?',
        answer: 'Tim konsultan SISCOM menyiapkan template migrasi data master (COA, Vendor, Pelanggan, Stok awal, Saldo piutang/utang) dan memvalidasi sebelum upload.',
      },
      {
        id: 'faq-layanan-2',
        question: 'Berapa sesi training yang disediakan untuk pengguna staf?',
        answer: 'Training diberikan secara komprehensif untuk staf operasional hingga level manajerial, dilengkapi panduan user manual dan video tutorial.',
      },
      {
        id: 'faq-layanan-3',
        question: 'Apakah melayani implementasi untuk cabang di luar Jabodetabek?',
        answer: 'Ya, SISCOM melayani implementasi di seluruh wilayah nusantara baik secara onsite maupun hybrid remote deployment.',
      },
      {
        id: 'faq-layanan-4',
        question: 'Bagaimana jika ada perubahan regulasi pajak dari pemerintah?',
        answer: 'SISCOM secara rutin merilis update kepatuhan pajak (seperti penyesuaian PPN 11%/12%, e-Bupot, dan formula PPh 21) bagi pelanggan aktif.',
        cta: { label: 'Tanya Tim Layanan', route: '/demo' },
      },
    ],
  },
  '/verifikasi': {
    name: 'Support & Kanal Resmi',
    description: 'Verifikasi kontak resmi PT Shan Informasi Sistem untuk keamanan transaksi.',
    faqs: [
      {
        id: 'faq-verif-1',
        question: 'Berapa nomor WhatsApp resmi marketing SISCOM ERP?',
        answer: 'Nomor WhatsApp resmi SISCOM ERP adalah 0812-9981-7515 (terverifikasi langsung ke tim advisory PT Shan Informasi Sistem).',
      },
      {
        id: 'faq-verif-2',
        question: 'Di mana lokasi kantor pusat PT Shan Informasi Sistem?',
        answer: 'Kantor pusat berlokasi di Jakarta Barat, melayani konsultasi operasional dan live meeting bisnis dari hari Senin hingga Jumat.',
      },
      {
        id: 'faq-verif-3',
        question: 'Rekening bank apa yang resmi digunakan untuk transaksi?',
        answer: 'Semua transaksi wajib ditujukan ke rekening atas nama badan hukum resmi: PT Shan Informasi Sistem, bukan atas nama perorangan.',
      },
      {
        id: 'faq-verif-4',
        question: 'Bagaimana cara membuat tiket bantuan teknis atau komplain?',
        answer: 'Pelanggan dapat menghubungi Customer Care hotline (021-5694-5002) atau menggunakan fitur buat tiket di asisten ini.',
      },
    ],
  },
  '/demo': {
    name: 'Jadwal Demo Sistem',
    description: 'Registrasi presentasi sistem terpandu disesuaikan dengan proses bisnis Anda.',
    faqs: [
      {
        id: 'faq-demo-1',
        question: 'Apakah sesi demo berbayar atau dipungut biaya?',
        answer: 'Sesi konsultasi awal dan demo sistem SISCOM ERP sepenuhnya GRATIS tanpa komitmen apa pun.',
        cta: { label: 'Daftar Sekarang', route: '/demo' },
      },
      {
        id: 'faq-demo-2',
        question: 'Berapa lama durasi sesi presentasi demo biasanya berlangsung?',
        answer: 'Umumnya berlangsung selama 45–60 menit, mencakup pembedahan alur modul yang relevan dan sesi tanya jawab teknis.',
      },
      {
        id: 'faq-demo-3',
        question: 'Apakah kami bisa meminta simulasi dengan contoh data perusahaan?',
        answer: 'Tentu. Anda dapat menginformasikan studi kasus alur operasional saat penjadwalan agar konsultan kami dapat menyiapkan simulasi riil.',
      },
      {
        id: 'faq-demo-4',
        question: 'Apakah demo bisa dilakukan secara online via Zoom / Teams?',
        answer: 'Bisa. Kami melayani presentasi tatap muka langsung di kantor Anda (Jabodetabek) maupun daring via Google Meet / Zoom.',
      },
    ],
  },
};

// Map route alias to key
export function getContextForRoute(route: string): { key: string; context: RouteContextInfo } {
  const cleanRoute = (route || '/').split('#')[0].split('?')[0];

  if (route.includes('#produk') || cleanRoute === '/modul-solusi' || cleanRoute.startsWith('/modul-solusi/')) {
    return { key: '/modul-solusi', context: ROUTE_CONTEXT_MAP['/modul-solusi'] };
  }
  if (cleanRoute === '/modul-vertikal' || cleanRoute.startsWith('/modul-vertikal/') || cleanRoute === '/industri') {
    return { key: '/modul-vertikal', context: ROUTE_CONTEXT_MAP['/modul-vertikal'] };
  }
  if (cleanRoute === '/klien') {
    return { key: '/klien', context: ROUTE_CONTEXT_MAP['/klien'] };
  }
  if (cleanRoute === '/metodologi' || cleanRoute === '/layanan') {
    return { key: '/layanan', context: ROUTE_CONTEXT_MAP['/layanan'] };
  }
  if (cleanRoute === '/verifikasi') {
    return { key: '/verifikasi', context: ROUTE_CONTEXT_MAP['/verifikasi'] };
  }
  if (cleanRoute === '/demo') {
    return { key: '/demo', context: ROUTE_CONTEXT_MAP['/demo'] };
  }
  return { key: '/', context: ROUTE_CONTEXT_MAP['/'] };
}

// 4. Keyword Scoring Engine
export interface MatchResult {
  entry: KBEntry;
  score: number;
}

export function searchKnowledgeBase(query: string): KBEntry | null {
  const normalized = query.toLowerCase().replace(/[^\w\s]/g, ' ');
  const tokens = normalized.split(/\s+/).filter((t) => t.length > 2);

  if (tokens.length === 0) return null;

  let bestEntry: KBEntry | null = null;
  let highestScore = 0;

  for (const entry of SISCOM_KB_ENTRIES) {
    let score = 0;

    // Check keyword exact matches
    for (const kw of entry.keywords) {
      const kwLower = kw.toLowerCase();
      if (normalized.includes(kwLower)) {
        score += 15;
      }
      for (const token of tokens) {
        if (kwLower.includes(token)) {
          score += 4;
        }
      }
    }

    // Check title matches
    const titleLower = entry.title.toLowerCase();
    for (const token of tokens) {
      if (titleLower.includes(token)) {
        score += 5;
      }
    }

    // Check answer matches
    const answerLower = entry.answer.toLowerCase();
    for (const token of tokens) {
      if (answerLower.includes(token)) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestEntry = entry;
    }
  }

  // Minimum threshold to prevent spurious random matches
  if (highestScore >= 4) {
    return bestEntry;
  }

  return null;
}
