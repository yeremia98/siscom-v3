export type ActiveSection = 
  | 'hero' 
  | 'modules' 
  | 'capabilities' 
  | 'methodology' 
  | 'compliance' 
  | 'faq';

export interface EnterpriseConsultationData {
  fullName: string;
  workEmail: string;
  whatsapp: string;
  companyName: string;
  industry: string;
  companyScale: string;
  primaryChallenges: string[];
  preferredDeployment: 'cloud' | 'on-premise' | 'hybrid';
  preferredDate?: string;
  inquiryScope?: string;
}

export interface LeadScoreResult {
  score: number;
  grade: 'A' | 'B' | 'C';
  urgency: 'Tinggi (Hubungi < 1 Jam)' | 'Menengah (Hubungi < 4 Jam)' | 'Rendah (Follow-up Standar)';
  factors: string[];
}
