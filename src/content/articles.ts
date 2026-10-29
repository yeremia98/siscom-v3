import { FiscalArticle } from './types';

export const FISCAL_ARTICLES: FiscalArticle[] = [
  {
    slug: 'alur-rab-rap-kurva-s-kontraktor',
    title: 'Alur Pengendalian RAB, RAP, dan Kurva S pada Proyek Konstruksi',
    author: 'Tim Teknis SISCOM ERP',
    publishDate: '12 Januari 2024',
    updatedDate: '14 Oktober 2024',
    readingTimeMinutes: 4,
    targetSystem: 'SIS Construction One',
    excerpt:
      'Penjelasan teknis bagaimana sistem memetakan Rencana Anggaran Biaya (RAB) penawaran menjadi Rencana Anggaran Pelaksanaan (RAP) serta menghasilkan Kurva S otomatis.',
    contentParagraphs: [
      'Pada industri jasa konstruksi, tantangan terbesar manajemen sering kali terletak pada selisih antara nilai penawaran proyek (RAB) dengan biaya aktual pelaksanaan di lapangan (RAP). Ketika pembelian material dan penunjukan subkontraktor berjalan tanpa pagu yang terukur, deviasi biaya baru disadari setelah proyek mendekati tahap penyelesaian.',
      'Di dalam modul SIS Construction One, setiap item pekerjaan dari Rencana Anggaran Biaya (RAB) yang disetujui owner dipecah menjadi rincian biaya langsung pada Rencana Anggaran Pelaksanaan (RAP). Rincian ini mencakup tiga unsur utama: volume material beserta harga satuan taksiran, alokasi upah tenaga kerja mandor atau subkontraktor, serta biaya sewa alat berat.',
      'Ketika staf proyek mengajukan Purchase Requisition (PR) untuk pembelian material, sistem langsung membandingkan akumulasi pengadaan sebelumnya terhadap pagu sisa anggaran pada kode item tersebut. Jika nilai pembelian melebihi pagu yang telah ditentukan, sistem memberikan notifikasi penahanan transaksi untuk diverifikasi oleh manajer proyek.',
      'Selain pengendalian pagu, jadwal kerja (time schedule) yang diinput ke dalam sistem langsung menghasilkan Kurva S rencana. Setiap kali berita acara opname kemajuan fisik (Certificate of Payment - COP) diinput dari lapangan, Kurva S realisasi akan terbit berdampingan dengan kurva rencana sehingga deviasi progres dapat diketahui lebih dini.',
    ],
    metadata: { status: 'verified', source: 'SISCOM Brosur Hal. 6' },
  },
  {
    slug: 'pengendalian-piutang-dan-limit-kredit-distributor',
    title: 'Mekanisme Batas Kredit Pelanggan dan Aging Schedule pada Distribusi',
    author: 'Tim Teknis SISCOM ERP',
    publishDate: '28 Februari 2024',
    updatedDate: '18 September 2024',
    readingTimeMinutes: 3,
    targetSystem: 'SIS Distribution Suite',
    excerpt:
      'Bagaimana penetapan batas kredit dan analisis umur piutang mencegah penumpukan faktur macet pada operasional distributor dan grosir.',
    contentParagraphs: [
      'Bagi perusahaan distributor dengan ratusan pelanggan toko dan toko kelontong, perputaran kas sangat bergantung pada kepatuhan pembayaran faktur jatuh tempo. Masalah umum yang kerap terjadi adalah salesman tetap membuat Sales Order (SO) baru kepada pelanggan yang masih memiliki tagihan lewat tanggal jatuh tempo.',
      'Melalui SIS Distribution Suite, manajemen dapat menetapkan batas maksimal kredit (credit limit) dan batas tempo hari pembayaran pada master pelanggan. Setiap pembuatan order baru akan memvalidasi dua parameter: total nilai faktur yang belum lunas ditambah nilai order baru tidak boleh melampaui plafon kredit, dan tidak ada faktur yang telah melewati masa toleransi jatuh tempo.',
      'Laporan Aging Schedule di dalam sistem secara otomatis mengelompokkan saldo piutang berjalan ke dalam rentang umur: 1 sampai 30 hari, 31 sampai 60 hari, 61 sampai 90 hari, dan di atas 90 hari. Data ini dapat difilter per salesman, per wilayah pengiriman, maupun per kategori pelanggan.',
      'Dengan sistem yang terintegrasi langsung ke modul buku kas dan bank, setiap pembayaran yang diterima melalui transfer bank atau setoran penagih akan mencocokkan nomor faktur terkait dan secara otomatis membuka kembali sisa plafon kredit pelanggan tersebut.',
    ],
    metadata: { status: 'verified', source: 'SISCOM Brosur Hal. 11' },
  },
  {
    slug: 'pencatatan-dokumen-bc-kawasan-berikat',
    title: 'Pencatatan Dokumen Pabean BC 2.3 dan BC 4.0 pada Kawasan Berikat',
    author: 'Tim Teknis SISCOM ERP',
    publishDate: '15 April 2024',
    updatedDate: '20 Agustus 2024',
    readingTimeMinutes: 4,
    targetSystem: 'SIS PusatBerikat',
    excerpt:
      'Tinjauan teknis alur pencatatan bahan baku impor dan barang jadi pada dokumen kepabeanan untuk kebutuhan audit kepabeanan.',
    contentParagraphs: [
      'Perusahaan yang beroperasi dengan fasilitas Kawasan Berikat memperoleh penangguhan bea masuk atas bahan baku dan barang modal impor yang ditujukan untuk diproses menjadi komoditas ekspor. Sebagai konsekuensinya, perusahaan diwajibkan memiliki pencatatan persediaan yang dapat dipertanggungjawabkan kepada otoritas bea dan cukai.',
      'Sistem SIS PusatBerikat menyediakan modul pencatatan dokumen pabean yang terintegrasi dengan kartu stok gudang. Dokumen BC 2.3 digunakan untuk mencatat pemasukan barang impor ke kawasan berikat, mencakup nomor pendaftaran, tanggal dokumen, kode valuta, nilai pabean CIF, dan identitas kontainer pengangkut.',
      'Untuk bahan baku atau kemasan yang didatangkan dari tempat lain dalam daerah pabean (TLDDP), sistem menggunakan dokumen BC 4.0. Seluruh transaksi penerimaan fisik di gudang diverifikasi kesesuaiannya dengan nomor dokumen pabean terkait sebelum kuantitas stok bertambah pada kartu persediaan.',
      'Saat proses produksi menghasilkan barang jadi, formula pemakaian bahan baku (konversi) diverifikasi secara otomatis. Hal ini memastikan bahwa saldo sisa bahan baku impor, bahan setengah jadi, scrap sisa produksi, dan produk jadi ekspor selalu sinkron saat audit berkala dilakukan.',
    ],
    metadata: { status: 'verified', source: 'SISCOM Brosur Hal. 12' },
  },
];
