import React, { useState } from 'react';
import { VERTICAL_MODULES } from '../content/modules';
import { COMPANY_INFO } from '../content/company';
import { Dialog } from './common/Dialog';
import { Button } from './common/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModule?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  initialModule,
}) => {
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

    const message = `Halo Tim SISCOM, saya ingin menjadwalkan demo sistem ERP:
- Nama: ${fullName}
- Perusahaan: ${companyName}
- Modul Kebutuhan: ${selectedModule}
- Estimasi User: ${userCount}
- Jumlah Cabang: ${branchCount}
- Rencana Server: ${deploymentPlan}
- Waktu Demo Pilihan: ${preferredTime}`;

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappOfficial}?text=${encodeURIComponent(message)}`;

    setIsSubmitted(true);
    window.open(waUrl, '_blank');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={handleResetAndClose}
      title="Jadwalkan Demonstrasi Alur Kerja SISCOM ERP"
      description={`Langkah 0${currentStep} dari 03: ${
        currentStep === 1
          ? 'Pilih Modul Industri'
          : currentStep === 2
          ? 'Skala Organisasi'
          : 'Kontak Narahubung'
      }`}
      showMascotPeek={true}
      maxWidth="max-w-xl"
    >
      {isSubmitted ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[var(--text-main)]">
            Permintaan Terkirim
          </h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm mx-auto">
            Terima kasih, {fullName}. Tim konsultan SISCOM akan segera mengonfirmasi slot waktu presentasi melalui nomor WhatsApp Anda ({whatsappNumber}).
          </p>
          <Button variant="primary" onClick={handleResetAndClose} className="text-xs">
            Selesai
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <label className="block text-xs font-medium text-[var(--text-main)]">
                Pilih Modul Industri Utama *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                {VERTICAL_MODULES.map((m) => (
                  <button
                    key={m.slug}
                    type="button"
                    onClick={() => setSelectedModule(m.slug)}
                    className={`p-3 rounded border text-left cursor-pointer transition-colors ${
                      selectedModule === m.slug
                        ? 'border-[#FF6A1A] bg-[var(--surface-2)]'
                        : 'border-[var(--border-hairline)] bg-[var(--surface-1)] hover:border-[var(--text-muted)]'
                    }`}
                  >
                    <span className="text-xs font-bold text-[var(--text-main)] block">
                      {m.name}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)] block">
                      {m.shortTag}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)] flex justify-end">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="text-xs"
                >
                  Lanjutkan
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[var(--text-main)] mb-1.5">
                  Estimasi Jumlah Pengguna (User)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['1-10', '11-50', '51-200', '>200'].map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUserCount(u)}
                      className={`py-2 text-xs rounded border transition-colors cursor-pointer text-center ${
                        userCount === u
                          ? 'border-[#FF6A1A] bg-[var(--surface-2)] text-[#FF6A1A] font-bold'
                          : 'border-[var(--border-hairline)] text-[var(--text-muted)]'
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-main)] mb-1.5">
                  Pilihan Penempatan Server
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Private Cloud Server', 'On-Premise Server'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDeploymentPlan(d)}
                      className={`p-2.5 text-xs rounded border transition-colors cursor-pointer text-left ${
                        deploymentPlan === d
                          ? 'border-[#FF6A1A] bg-[var(--surface-2)] text-[#FF6A1A] font-bold'
                          : 'border-[var(--border-hairline)] text-[var(--text-muted)]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)] flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs text-[var(--text-muted)] hover:underline"
                >
                  ← Kembali
                </button>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="text-xs"
                >
                  Lanjutkan
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-3">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                  Nama Lengkap *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="Nama Anda"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-xs p-2 rounded border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
                />
              </div>

              <div>
                <label htmlFor="modal-company" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                  Nama Perusahaan *
                </label>
                <input
                  id="modal-company"
                  type="text"
                  required
                  placeholder="PT / CV Nama Perusahaan"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-xs p-2 rounded border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
                />
              </div>

              <div>
                <label htmlFor="modal-wa" className="block text-xs font-medium text-[var(--text-main)] mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  id="modal-wa"
                  type="tel"
                  required
                  placeholder="08xxxxxxxxxx"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="w-full text-xs p-2 rounded border border-[var(--border-hairline)] bg-[var(--surface-2)] text-[var(--text-main)] focus:outline-none focus:border-[#FF6A1A]"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2 text-[11px] text-[var(--text-muted)] cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-0.5 accent-[#FF6A1A]"
                  />
                  <span>Data Anda hanya digunakan untuk konfirmasi jadwal demo.</span>
                </label>
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)] flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-xs text-[var(--text-muted)] hover:underline"
                >
                  ← Kembali
                </button>
                <Button variant="primary" type="submit" className="text-xs py-2 px-4">
                  Jadwalkan demo
                </Button>
              </div>
            </div>
          )}
        </form>
      )}
    </Dialog>
  );
};
