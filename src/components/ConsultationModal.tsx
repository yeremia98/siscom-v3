import React, { useState } from 'react';
import { EnterpriseConsultationData, LeadScoreResult } from '../types';
import { scoreInboundLead, generateWhatsAppLink } from '../utils/leadScorer';
import { analytics } from '../utils/analytics';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Phone
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSector?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledSector,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<EnterpriseConsultationData>({
    fullName: '',
    workEmail: '',
    whatsapp: '',
    companyName: '',
    industry: prefilledSector || 'Kontraktor & Konstruksi',
    companyScale: '21-50',
    primaryChallenges: ['Penguncian Anggaran & RAP Proyek'],
    preferredDeployment: 'cloud',
    inquiryScope: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [scoreResult, setScoreResult] = useState<LeadScoreResult | null>(null);

  if (!isOpen) return null;

  const handleChallengeToggle = (challenge: string) => {
    setFormData((prev) => {
      const exists = prev.primaryChallenges.includes(challenge);
      return {
        ...prev,
        primaryChallenges: exists
          ? prev.primaryChallenges.filter((c) => c !== challenge)
          : [...prev.primaryChallenges, challenge],
      };
    });
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.industry) errs.industry = 'Silakan tentukan sektor industri.';
    if (!formData.companyScale) errs.companyScale = 'Pilih rentang skala personel.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (formData.primaryChallenges.length === 0) {
      errs.primaryChallenges = 'Pilih minimal satu fokus tantangan utama.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Nama lengkap wajib diisi.';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      errs.workEmail = 'Email korporat kerja valid wajib diisi.';
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 9) {
      errs.whatsapp = 'Nomor WhatsApp valid wajib diisi.';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Nama perusahaan wajib diisi.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        analytics.track('form_step_complete', { step: 1, industry: formData.industry });
        setStep(2);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        analytics.track('form_step_complete', { step: 2, challenges: formData.primaryChallenges });
        setStep(3);
      }
    } else if (step === 3) {
      if (validateStep3()) {
        const result = scoreInboundLead(formData);
        setScoreResult(result);

        analytics.track('form_submit', {
          form_name: 'enterprise_consultation_3step',
          grade: result.grade,
          score: result.score,
          industry: formData.industry,
          company_scale: formData.companyScale,
        });

        setStep(4);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-xl w-full overflow-hidden flex flex-col max-h-[92vh] text-slate-800 dark:text-slate-100 transition-colors">
        {/* Modal Header */}
        <div className="p-5 px-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Konsultasi Arsitektur Solusi
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-mono">
                {step < 4 ? `Tahap ${step} dari 3` : 'Dikonfirmasi'}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {step === 1 && 'Sektor Industri & Skala Organisasi'}
              {step === 2 && 'Fokus Kebutuhan & Alur Kerja Spesifik'}
              {step === 3 && 'Informasi Kontak & Jadwal Sesi'}
              {step === 4 && 'Permintaan Konsultasi Diterima'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Tutup formulir konsultasi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {step < 4 && (
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 flex">
            <div
              className="bg-orange-500 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs flex-1 font-normal">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Sektor Industri Utama Perusahaan <span className="text-orange-500">*</span>
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                >
                  <option value="Kontraktor & Konstruksi">Kontraktor & Konstruksi (Sipil, MEP, Interior)</option>
                  <option value="Exhibition Contractor">Exhibition Contractor & Booth Builder</option>
                  <option value="Property Management">Property Management & Real Estate</option>
                  <option value="HRIS & Enterprise Payroll">HRIS & Enterprise Payroll (TER 2024)</option>
                  <option value="Retail & Multi-Branch POS">Retail & Multi-Branch POS</option>
                  <option value="Manufaktur & Fabrikasi">Manufaktur & Fabrikasi (BOM & HPP)</option>
                  <option value="Rental Aset & Alat Berat">Rental Aset & Alat Berat</option>
                </select>
                {errors.industry && <p className="text-[11px] text-rose-500 mt-1">{errors.industry}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Rentang Jumlah Karyawan / Personel Aktif <span className="text-orange-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['1-20 Personel', '21-50 Personel', '51-200 Personel', '>200 Personel'].map((sc) => (
                    <button
                      type="button"
                      key={sc}
                      onClick={() => setFormData({ ...formData, companyScale: sc.split(' ')[0] })}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition ${
                        formData.companyScale === sc.split(' ')[0]
                          ? 'border-orange-500 bg-orange-500/15 text-orange-600 dark:text-orange-400 shadow-sm'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {sc}
                    </button>
                  ))}
                </div>
                {errors.companyScale && <p className="text-[11px] text-rose-500 mt-1">{errors.companyScale}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Preferensi Penempatan Sistem (Deployment)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredDeployment: 'cloud' })}
                    className={`p-3 rounded-xl border text-left transition ${
                      formData.preferredDeployment === 'cloud'
                        ? 'border-orange-500 bg-orange-500/15 text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span className="font-bold text-xs block text-slate-900 dark:text-white">Private Cloud Indonesia</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Data Center Tier 3 Jakarta, backup terkelola</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredDeployment: 'on-premise' })}
                    className={`p-3 rounded-xl border text-left transition ${
                      formData.preferredDeployment === 'on-premise'
                        ? 'border-orange-500 bg-orange-500/15 text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span className="font-bold text-xs block text-slate-900 dark:text-white">On-Premise Server Sendiri</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Instalasi di ruang server kantor korporat</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Pilih Fokus Alur Kerja yang Perlu Dibenahi <span className="text-orange-500">*</span>
                </label>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mb-3">
                  Pilih fokus utama agar materi demonstrasi sesuai dengan tantangan riil perusahaan.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Penguncian Anggaran & RAP Proyek',
                    'Integrasi Pembukuan & General Ledger SAK',
                    'Manajemen Workshop & SPK Produksi',
                    'Kalkulasi Pajak PPh 21 TER & Payroll',
                    'Billing Otomatis Tenancy & Properti',
                    'Kasir Retail Cepat & Multi Cabang',
                    'Penjadwalan Sewa Alat & Log Servis',
                    'Otomatisasi Faktur Pajak & e-Faktur',
                  ].map((ch) => (
                    <button
                      type="button"
                      key={ch}
                      onClick={() => handleChallengeToggle(ch)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-medium flex items-center gap-2 transition ${
                        formData.primaryChallenges.includes(ch)
                          ? 'border-orange-500 bg-orange-500/15 text-orange-700 dark:text-orange-200 font-semibold'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                        formData.primaryChallenges.includes(ch)
                          ? 'bg-orange-500 border-orange-500 text-white dark:text-slate-950'
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950'
                      }`}>
                        {formData.primaryChallenges.includes(ch) && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className="truncate">{ch}</span>
                    </button>
                  ))}
                </div>
                {errors.primaryChallenges && <p className="text-[11px] text-rose-500 mt-1">{errors.primaryChallenges}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan kendala sistem lama atau jumlah entitas anak perusahaan..."
                  value={formData.inquiryScope}
                  onChange={(e) => setFormData({ ...formData, inquiryScope: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                ></textarea>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Nama Lengkap <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Budi Santoso"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Nama Perusahaan / Korporasi <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PT Bangun Jaya Perkasa"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                  {errors.companyName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Email Kerja (Corporate Domain) <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="budi@bangunjaya.co.id"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                  {errors.workEmail && <p className="text-[11px] text-rose-500 mt-0.5">{errors.workEmail}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Nomor WhatsApp PIC <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="0812XXXXXXXX"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                  {errors.whatsapp && <p className="text-[11px] text-rose-500 mt-0.5">{errors.whatsapp}</p>}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-2">
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Komitmen Respon:</strong> Tim spesialis solusi SISCOM akan menghubungi Anda via WhatsApp dalam waktu <strong>maksimal 1 jam kerja</strong> untuk konfirmasi jadwal video conference dan ringkasan arsitektur.
                </span>
              </div>
            </div>
          )}

          {step === 4 && scoreResult && (
            <div className="space-y-4 py-3 text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Jadwal Sesi Konsultasi Diterima</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-md mx-auto font-normal">
                  Terima kasih, <strong>{formData.fullName}</strong>. Data pengajuan konsultasi untuk <strong>{formData.companyName}</strong> telah diteruskan ke konsultan spesialis sektor <strong>{formData.industry}</strong> kami.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-left space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Prioritas Penugasan Konsultan:</span>
                  <span className="font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-[11px]">
                    Grade {scoreResult.grade} • {scoreResult.urgency}
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400">
                  Tim kami akan menyiapkan skenario demonstrasi modul:
                  <div className="mt-1 flex flex-wrap gap-1">
                    {formData.primaryChallenges.map((c, i) => (
                      <span key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-[10px]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={generateWhatsAppLink({
                    originPage: 'enterprise_consultation_confirmed',
                    product: formData.industry,
                    clientName: formData.fullName,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Kirim Konfirmasi Cepat ke WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="py-3 px-5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-300 font-semibold text-xs"
                >
                  Selesai
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 4 && (
          <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as any)}
                className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold text-xs flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>
            ) : (
              <span className="text-[10px] text-slate-500 font-mono">Dilindungi UU PDP No. 27/2022</span>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md flex items-center gap-2 active:scale-95 transition-all"
            >
              <span>{step === 3 ? 'Kirim Jadwal Konsultasi' : 'Lanjutkan'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
