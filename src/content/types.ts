/**
 * Strict typing for content entries in accordance with SISCOM Data Protocol
 */

export type VerificationStatus = 'verified' | 'pending';

export interface ContentMetadata {
  status: VerificationStatus;
  source: string;
  lastUpdated?: string;
}

export interface CompanyInfo {
  legalName: string;
  brandName: string;
  foundedYear: number;
  headquarters: string;
  address: string;
  addressConfirmationNote: string;
  phone: string;
  whatsappOfficial: string;
  whatsappSupport: string;
  emailSales: string;
  emailSupport: string;
  social: {
    instagram: string;
    linkedin: string;
    youtube: string;
    youtubeVideoId: string;
  };
  claims: {
    clients: string;
    products: string;
    modules: string;
    industries: string;
    label: string;
    date: string;
  };
  vision: {
    statement: string;
    metadata: ContentMetadata;
  };
  mission: {
    items: string[];
    metadata: ContentMetadata;
  };
}

export interface TimelineEntry {
  year: number;
  milestone: string;
  detail: string;
  metadata: ContentMetadata;
}

export interface SolutionModule {
  slug: string;
  name: string;
  summary: string;
  functions: string[];
  features: string[];
  verticalsUsedIn: string[];
  sampleReportName: string;
  sampleReportFields: string[];
  metadata: ContentMetadata;
}

export interface VerticalModule {
  slug: string;
  name: string;
  shortTag: string;
  accentColor: string;
  tagline: string;
  summary: string;
  targetIndustries: string[];
  highlightFeatures: string[];
  supportingFeatures: string[];
  accountingFinanceIntegration: string[];
  deploymentOptions: string[];
  documentCodes: string[];
  brochurePdfName: string;
  metadata: ContentMetadata;
}

export interface MethodologyStep {
  step: number;
  title: string;
  description: string;
  clientPrepares: string;
  siscomDelivers: string;
  metadata: ContentMetadata;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  metadata: ContentMetadata;
}

export interface ComparisonChecklistItem {
  id: string;
  criterion: string;
  whyItMatters: string;
  siscomAnswer: string;
  isVerified: boolean;
  metadata: ContentMetadata;
}

export interface FiscalArticle {
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  updatedDate: string;
  readingTimeMinutes: number;
  targetSystem: string;
  excerpt: string;
  contentParagraphs: string[];
  metadata: ContentMetadata;
}
