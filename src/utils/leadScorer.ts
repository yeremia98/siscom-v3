import { EnterpriseConsultationData, LeadScoreResult } from '../types';

/**
 * Enterprise Lead Qualification & Prioritization Engine
 * Categorizes enterprise inquiries into Tier A, B, or C for immediate consultant assignment
 */
export function scoreInboundLead(data: Partial<EnterpriseConsultationData>): LeadScoreResult {
  let score = 25; // Base verified inquiry score
  const factors: string[] = ['Form pendaftaran konsultasi terverifikasi (+25)'];

  // Company scale factor
  if (data.companyScale === '51-200' || data.companyScale === '201-500+' || data.companyScale === '>500') {
    score += 30;
    factors.push('Skala perusahaan menengah/besar (>50 personel) (+30)');
  } else if (data.companyScale === '21-50') {
    score += 20;
    factors.push('Skala perusahaan berkembang (21-50 personel) (+20)');
  } else if (data.companyScale === '6-20') {
    score += 10;
    factors.push('Skala UKM bertumbuh (6-20 personel) (+10)');
  }

  // Corporate email validation
  if (data.workEmail) {
    const isFreeEmail = /@(gmail|yahoo|hotmail|outlook|ymail|icloud)\.com$/i.test(data.workEmail.trim());
    if (!isFreeEmail && data.workEmail.includes('@') && data.workEmail.includes('.')) {
      score += 20;
      factors.push('Domain corporate email terverifikasi (+20)');
    }
  }

  // Priority industries
  const priorityIndustries = [
    'Kontraktor & Konstruksi',
    'Exhibition Contractor',
    'Property Management',
    'Manufaktur & Fabrikasi',
    'Rental Aset & Alat Berat',
  ];
  if (data.industry && priorityIndustries.includes(data.industry)) {
    score += 15;
    factors.push(`Sektor fokus enterprise: ${data.industry} (+15)`);
  }

  // Multi-challenge or multi-module scope
  if (data.primaryChallenges && data.primaryChallenges.length >= 2) {
    score += 10;
    factors.push(`Kebutuhan integrasi multi-divisi (${data.primaryChallenges.length} tantangan) (+10)`);
  }

  const finalScore = Math.min(100, score);

  let grade: 'A' | 'B' | 'C' = 'C';
  let urgency: LeadScoreResult['urgency'] = 'Rendah (Follow-up Standar)';

  if (finalScore >= 70) {
    grade = 'A';
    urgency = 'Tinggi (Hubungi < 1 Jam)';
  } else if (finalScore >= 45) {
    grade = 'B';
    urgency = 'Menengah (Hubungi < 4 Jam)';
  }

  return {
    score: finalScore,
    grade,
    urgency,
    factors,
  };
}

/**
 * Prepares compliant WhatsApp prefilled message containing lead source, product, and UTM tags
 * Official primary verified contact: 0812-9981-7515 (Sales WhatsApp)
 */
export function generateWhatsAppLink(params: {
  originPage: string;
  product?: string;
  source?: string;
  utmCampaign?: string;
  clientName?: string;
}): string {
  const officialPhone = '6281299817515'; // 0812-9981-7515
  
  const textParts = [
    `Halo Tim SISCOM ERP, saya ingin konsultasi sistem enterprise.`,
    params.product ? `Sektor / Minat: ${params.product}` : `Halaman Asal: ${params.originPage}`,
    params.utmCampaign ? `[Ref: ${params.utmCampaign}]` : '',
    params.clientName ? `Nama: ${params.clientName}` : '',
  ].filter(Boolean);

  const encodedMessage = encodeURIComponent(textParts.join('\n'));
  return `https://wa.me/${officialPhone}?text=${encodedMessage}`;
}

export function parseUtmParams(queryString: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!queryString) return params;
  
  const searchParams = new URLSearchParams(queryString.startsWith('?') ? queryString.slice(1) : queryString);
  searchParams.forEach((val, key) => {
    if (key.startsWith('utm_') || key === 'gclid' || key === 'fbclid') {
      params[key] = val;
    }
  });
  
  return params;
}
