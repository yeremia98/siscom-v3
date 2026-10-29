export interface ClientRecord {
  name: string;
  industry: string;
  hasPermission: boolean;
  source: string;
}

export interface IndustrySector {
  name: string;
  description: string;
  typicalProducts: string[];
}

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    name: 'Kontraktor & Konstruksi',
    description: 'Sipil, infrastruktur, MEP, interior, dan booth exhibition contractor.',
    typicalProducts: ['SIS Construction One', 'Akuntansi & Keuangan', 'Manajemen Aset'],
  },
  {
    name: 'Distribusi & Grosir',
    description: 'Bahan bangunan, komponen elektrik, sanitari, dan barang konsumsi.',
    typicalProducts: ['SIS Distribution Suite', 'WMS Multi-Gudang', 'Akuntansi'],
  },
  {
    name: 'Manufaktur & Pabrikasi',
    description: 'Pabrikasi logam, kemasan plastik, garmen, dan olahan makanan.',
    typicalProducts: ['SIS Manufacturing Suite', 'BOM Calculator', 'HPP Produksi'],
  },
  {
    name: 'Kawasan Berikat & Logistik',
    description: 'Perusahaan berorientasi ekspor dengan fasilitas penangguhan pabean.',
    typicalProducts: ['SIS PusatBerikat', 'Dokumen BC 2.3 & 4.0', 'Audit Trail'],
  },
  {
    name: 'Pedagang Valas & Money Changer',
    description: 'Konter penukaran valuta asing berizin dan transaksi multi-currency.',
    typicalProducts: ['SIS ForexSuite', 'Laporan Bank Indonesia', 'Kasir Valas'],
  },
  {
    name: 'Retail Modern & Apotek',
    description: 'Toko berantai multi-cabang, swalayan, toko aksesoris, dan apotek berizin.',
    typicalProducts: ['SIS SmartPOS', 'Modul Apotek (Batch & Resep)', 'Stok Opname'],
  },
  {
    name: 'Jasa & Korporasi',
    description: 'Perusahaan penyedia jasa profesional dan operasional multi-cabang.',
    typicalProducts: ['SIS CoreHR', 'Invoicing & Piutang', 'Laporan Keuangan'],
  },
];

// Seluruh nama dari brosur/company profile dengan status izin eksplisit (default: false sesuai protokol data Bagian 4)
export const RAW_CLIENT_LIST: ClientRecord[] = [
  { name: 'Jiniso', industry: 'Retail Fashion', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Master Dealer CGL', industry: 'Distributor', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Delcell', industry: 'Aksesoris & Gadget', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Ortholite PT Zhi Xing Indonesia', industry: 'Manufaktur', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Samsung', industry: 'Elektronik', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Speedwork Autocare', industry: 'Otomotif & Bengkel', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Telemarco', industry: 'Komunikasi', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Roemah Kebaya Vielga', industry: 'Retail Busana', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Snackzone', industry: 'Retail Makanan', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'PT Global Marketing Technology', industry: 'Teknologi', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Prima Handphone Specialist', industry: 'Retail Seluler', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Apollo Gadget Store', industry: 'Retail Gadget', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Pasadena Supermarket Cellular', industry: 'Retail Gadget', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Hagajaya KS Reefer Service', industry: 'Logistik Pendingin', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'TopFood', industry: 'Makanan & Restoran', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Assems', industry: 'Manufaktur', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Indoprima Exhibition', industry: 'Exhibition Contractor', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Aneka Logam', industry: 'Distributor Logam', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'PT Boo Young Indonesia', industry: 'Manufaktur', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'PT Alpha Utama Mandiri', industry: 'Perdagangan Umum', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'PT Nusa Alam Rubber', industry: 'Manufaktur Karet', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Joanne Studio', industry: 'Jasa Kecantikan', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Primastar', industry: 'Distributor', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Net Cellindo', industry: 'Retail Telekomunikasi', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'TSA PT Teman Sejahtera', industry: 'Perdagangan Umum', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Sicepat Ekspres', industry: 'Logistik & Ekspedisi', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Bahagia Idkho', industry: 'Distributor', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Kawata', industry: 'Manufaktur Plastik', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'PT Sinar Artha Mulia', industry: 'Distributor', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Alam Makmur', industry: 'Supermarket Bahan Bangunan', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Xiaomi', industry: 'Retail Elektronik', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Star Fit', industry: 'Kebugaran', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Smoot Elektrik', industry: 'Kendaraan Listrik', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'Gitalaras', industry: 'Jasa & Properti', hasPermission: false, source: 'Brosur Hal. 15' },
  { name: 'PT Mitra Usaha Konstruksi', industry: 'Kontraktor & Konstruksi', hasPermission: false, source: 'Brosur Hal. 15' },
];

export const VERIFIED_CLIENTS = RAW_CLIENT_LIST.filter((c) => c.hasPermission);
