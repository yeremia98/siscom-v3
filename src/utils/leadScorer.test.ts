import test from 'node:test';
import assert from 'node:assert/strict';
import { scoreInboundLead, generateWhatsAppLink, parseUtmParams } from './leadScorer';

test('scoreInboundLead gives Tier A to enterprise contractor with corporate email', () => {
  const result = scoreInboundLead({
    fullName: 'Budi Santoso',
    workEmail: 'budi@adhimandiri.co.id',
    companyScale: '51-200',
    industry: 'Kontraktor & Konstruksi',
    primaryChallenges: ['Penguncian Anggaran RAP', 'Verifikasi Opname Proyek'],
  });

  assert.equal(result.grade, 'A');
  assert.ok(result.score >= 80);
  assert.equal(result.urgency, 'Tinggi (Hubungi < 1 Jam)');
  assert.ok(result.factors.some(f => f.includes('Domain corporate email')));
});

test('scoreInboundLead handles small business inquiry', () => {
  const result = scoreInboundLead({
    fullName: 'Siti Rahma',
    workEmail: 'siti.toko@gmail.com',
    companyScale: '1-5',
    industry: 'Retail & Multi-Branch POS',
    primaryChallenges: ['Kasir Offline-Online'],
  });

  assert.equal(result.grade, 'C');
  assert.ok(result.score <= 45);
});

test('generateWhatsAppLink generates clean prefilled message with official verified phone', () => {
  const link = generateWhatsAppLink({
    originPage: '/#modul',
    product: 'Exhibition Contractor',
    utmCampaign: 'enterprise_q4',
  });

  assert.ok(link.includes('6281299817515'), 'Must use official primary sales phone 0812-9981-7515');
  assert.ok(link.includes('Exhibition%20Contractor'));
});

test('parseUtmParams extracts tracking parameters cleanly', () => {
  const query = '?utm_source=google&utm_medium=cpc&utm_campaign=erp_enterprise&gclid=abc123xyz';
  const parsed = parseUtmParams(query);
  assert.equal(parsed['utm_source'], 'google');
  assert.equal(parsed['utm_medium'], 'cpc');
  assert.equal(parsed['gclid'], 'abc123xyz');
});
