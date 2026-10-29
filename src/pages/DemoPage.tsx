import React, { useState } from 'react';
import { VERTICAL_MODULES } from '../content/modules';
import { COMPANY_INFO } from '../content/company';
import { Button } from '../components/common/Button';
import { Mascot } from '../components/common/Mascot';
import { ChevronRight, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface DemoPageProps {
  initialModule?: string;
  onNavigate: (route: string) => void;
}

export const DemoPage: React.FC<DemoPageProps> = ({ initialModule, onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedModule, setSelectedModule] = useState(initialModule || 'construction-one');
  const [userCount, setUserCount] = useState('11-50');
  const [branchCount, setBranchCount] = useState('1');
  const [deploymentPlan, setDeploymentPlan] = useState('Private Cloud Server');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [preferredTime, setPreferredTime] = useState('Pagi (09.00 - 12.00 WIB)');
  const [consentChecked, setConsentChecked] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !companyName || !whatsappNumber) return;

    // Prepare structured WhatsApp fallback message
    const message = `Halo Tim SISCOM, saya ingin menjadwalkan demo sistem ERP:
- Nama: ${fullName}
- Perusahaan: ${companyName}
- Modul Kebutuhan: ${selectedModule}
- Estimasi User: ${userCount}
- Jumlah Cabang: ${branchCount}
- Rencana Server: ${deploymentPlan}
- Waktu Demo Pilihan: ${preferredTime}`;

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappOfficial}?text=${encodeURIComponent(message)}`;
    
    // Attempt webhook if endpoint configured, else redirect to WA
    const endpoint = (import.meta as any).env?.VITE_LEAD_ENDPOINT;
    if (endpoint) {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          companyName,
          whatsappNumber,
          emailAddress,
          selectedModule,
          userCount,
          branchCount,
          deploymentPlan,
          preferredTime,
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {
        // silent fallback
      });
    }

    setIsSubmitted(true);

    // Open WhatsApp in new tab for direct consultation
    window.open(waUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="max-w-[700px] mx-auto px-4 py-16 text-center">
        <div className="p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-1)] flex flex-col items-center">
          <Mascot size={180} />
          <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mt-4 mb-2">
            Permintaan Terkirim
          </span>
          <h1 className="text-2xl font-bold text-[var(--text-main)] mb-3">
            Jadwal Demo Telah Kami Terima
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mb-6 leading-relaxed">
            Terima kasih, <strong className="text-[var(--text-main)]">{fullName}</strong> dari <strong className="text-[var(--text-main)]">{companyName}</strong>. Tim konsultan SISCOM akan mengonfirmasi slot waktu presentasi melalui nomor WhatsApp Anda ({whatsappNumber}).
          </p>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => onNavigate('/')}>
              Kembali ke Beranda
            </Button>
            <Button
              variant="primary"
              href={`https://wa.me/${COMPANY_INFO.whatsappOfficial}`}
              external
            >
              Buka WhatsApp Langsung
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 py-12 text-left">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-6 font-mono">
        <button type="button" onClick={() => onNavigate('/')} className="hover:underline">Beranda</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--text-main)] font-bold">Jadwalkan Demo</span>
      </nav>

      {/* Header */}
      <div className="border-b border-[var(--border-hairline)] pb-6 mb-8">
        <span className="font-mono text-xs text-[#FF6A1A] uppercase tracking-wider block mb-2">
          Konsultasi Sistem
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-2">
          Jadwalkan Demonstrasi Alur Kerja SISCOM ERP
        </h1>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Langkah 0{currentStep} dari 03: {currentStep === 1 ? 'Pilih Modul Industri' : currentStep === 2 ? 'Skala & Penempatan' : 'Kontak Narahubung'}
        </p>

        {/* Step indicator bar */}
        <div className="w-full bg-[var(--surface-2)] h-1.5 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-[#FF6A1A] h-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-1)]">
        {/* STEP 1: PILIH MODUL INDUSTRI */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <h2 className="text-base font-bold text-[var(--text-main)]">
              Pilih Fokus Modul Industri Sesuai Alur Bisnis Anda
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VERTICAL_MODULES.map((mod) => (
                <label
                  key={mod.slug}
                  className={`p-3.5 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${
                    selectedModule === mod.slug
                      ? 'border-[#FF6A1A] bg-[var(--surface-2)]'
                      : 'border-[var(--border-hairline)] bg-[var(--surface-1)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  <input
                    type="radio"
                    name="selectedModule"
                    value={mod.slug}
                    checked={selectedModule === mod.slug}
                    onChange={(e) => setSelectedModule(e.target.value)}
                    className="mt-1 accent-[#FF6A1A]"
                  />
                  <div>
                    <span className="text-xs font-bold text-[var(--text-main)] block">
                      {mod.name}
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">
                      {mod.shortTag}
                    </span>
                  </div>
                </label>
              ))}

              <label
                className={`p-3.5 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${
                  selectedModule === 'lainnya'
                    ? 'border-[#FF6A1A] bg-[var(--surface-2)]'
                    : 'border-[var(--border-hairline)] bg-[var(--surface-1)] hover:border-[var(--text-muted)]'
                }`}
              >
                <input
                  type="radio"
                  name="selectedModule"
                  value="lainnya"
                  checked={selectedModule === 'lainnya'}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  className="mt-1 accent-[#FF6A1A]"
                />
                <div>
                  <span className="text-xs font-bold text-[var(--text-main)] block">
                    Modul Lainnya / Custom Alur
                  </span>
                  <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">
                    Konsultasi alur kerja spesifik
                  </span>
                </div>
              </label>
            </div>

            <div className="pt-6 border-t border-[var(--border-hairline)] flex justify-end">
              <Button
                variant="primary"
                type="button"
                onClick={() => setCurrentStep(2)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="text-xs"
              >
                Lanjutkan ke Skala Organisasi
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: SKALA & PENEMPATAN */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-base font-bold text-[var(--text-main)]">
              Skala Pengguna & Preferensi Penempatan Server
            </h2>

            <div>
              <label className="block text-xs font-medium text-[var(--text-main)] mb-2">
                Estimasi Jumlah Pengguna Aktif Sistem (User)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['1-10 User', '11-50 User', '51-200 User', '>200 User'].map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUserCount(u)}
                    className={`py-2 px-3 text-xs rounded border transition-colors cursor-pointer ${
                      userCount === u
                        ? 'border-[#FF6A1A] bg-[var(--surface-2)] font-bold text-[#FF6A1A]'
                        : 'border-[var(--border-hairline)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--text-main)] mb-2">
                Jumlah Lokasi Kantor / Cabang / Gudang
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['1 Lokasi', '2-5 Cabang', '6-20 Cabang', '>20 Cabang'].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBranchCount(b)}
                    className={`py-2 px-3 text-xs rounded border transition-colors cursor-pointer ${
                      branchCount === b
                        ? 'border-[#FF6A1A] bg-[var(--surface-2)] font-bold text-[#FF6A1A]'
                        : 'border-[var(--border-hairline)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--text-main)] mb-2">
                Rencana Penempatan Sistem
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {['Private Cloud Server', 'On-Premise Server', 'Belum Tahu / Diskusi'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDeploymentPlan(d)}
                    className={`py-2.5 px-3 text-xs rounded border transition-colors cursor-pointer text-left ${
                      deploymentPlan === d
                        ? 'border-[#FF6A1A] bg-[var(--surface-2)] font-bold text-[#FF6A1A]'
                        : 'border-[var(--border-hairline)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-hairline)] flex justify-between items-center">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-xs text-[var(--text-muted)] hover:underline cursor-pointer"
              >
                ← Kembali
              </button>
              <Button
                variant="primary"
                type="button"
                onClick={() => setCurrentStep(3)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="text-xs"
              >
                Lanjutkan ke Kontak Narahubung
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: KONTAK NARAHUBUNG */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-[var(--text-main)]">
              Informasi Kontak Narahubung
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fn" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                  Nama Lengkap *
                </label>
                <input
                  id="fn"
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
                />
              </div>

              <div>
                <label htmlFor="cn" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                  Nama Perusahaan *
                </label>
                <input
                  id="cn"
                  type="text"
                  required
                  placeholder="Contoh: PT Bangun Cipta Pratama"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
                />
              </div>

              <div>
                <label htmlFor="wa" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  id="wa"
                  type="tel"
                  required
                  placeholder="Contoh: 081298765432"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
                />
              </div>

              <div>
                <label htmlFor="em" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                  Alamat Email (Opsional)
                </label>
                <input
                  id="em"
                  type="email"
                  placeholder="nama@perusahaan.co.id"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pt" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                Waktu Sesi Presentasi yang Disukai
              </label>
              <select
                id="pt"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full text-xs p-2.5 rounded-md border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
              >
                <option value="Pagi (09.00 - 12.00 WIB)">Pagi (09.00 - 12.00 WIB)</option>
                <option value="Siang (13.00 - 15.00 WIB)">Siang (13.00 - 15.00 WIB)</option>
                <option value="Sore (15.00 - 17.00 WIB)">Sore (15.00 - 17.00 WIB)</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-[var(--text-muted)] cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="mt-0.5 accent-[#FF6A1A]"
                />
                <span>
                  Saya menyetujui data di atas digunakan oleh tim SISCOM untuk keperluan konfirmasi jadwal demonstrasi sesuai ketentuan{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('/kebijakan-privasi')}
                    className="text-[#FF6A1A] underline"
                  >
                    Kebijakan Privasi
                  </button>
                  .
                </span>
              </label>
            </div>

            <div className="pt-6 border-t border-[var(--border-hairline)] flex justify-between items-center">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="text-xs text-[var(--text-muted)] hover:underline cursor-pointer"
              >
                ← Kembali
              </button>
              <Button
                variant="primary"
                type="submit"
                icon={<ArrowRight className="w-4 h-4" />}
                className="text-xs"
              >
                Jadwalkan demo
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
