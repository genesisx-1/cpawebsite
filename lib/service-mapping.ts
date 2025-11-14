// Map service display names to service IDs
export const serviceNameToId: Record<string, string> = {
  // Advisory Services
  'Forensics and Investigations': 'forensics-investigations',
  'Insurance Risk & Recovery': 'insurance-risk-recovery',
  'Investment Banking Services': 'investment-banking-services',
  'Management Consulting': 'management-consulting',
  'M&A and Transaction Advisory': 'ma-transaction-advisory',
  'People Strategy & Solutions': 'people-strategy-solutions',
  'Privacy & Data Protection': 'privacy-data-protection',
  'Risk & Resilience': 'risk-resilience',
  'Turnaround & Restructuring Services': 'turnaround-restructuring',
  'Valuation & Capital Market Analysis': 'valuation-capital-markets',
  
  // Audit & Assurance
  'Financial Statement Audits': 'financial-statement-audits',
  'Internal Audit Services': 'internal-audit-services',
  'Compliance & Regulatory': 'compliance-regulatory',
  'Risk Advisory': 'risk-advisory',
  'SOC Examinations': 'soc-examinations',
  'Agreed-Upon Procedures': 'agreed-upon-procedures',
  
  // Tax Services
  'Tax Planning & Strategy': 'tax-planning-strategy',
  'International Tax': 'international-tax',
  'State & Local Tax': 'state-local-tax',
  'Tax Compliance': 'tax-compliance',
  'Estate & Trust Planning': 'estate-trust-planning',
  'Business Tax Services': 'business-tax-services',
  
  // Bookkeeping Services
  'Daily Transaction Recording': 'daily-transaction-recording',
  'Accounts Payable & Receivable': 'accounts-payable-receivable',
  'Bank Reconciliation': 'bank-reconciliation',
  'Financial Statement Preparation': 'financial-statement-preparation',
}

export function getServiceIdFromName(name: string): string {
  return serviceNameToId[name] || name.toLowerCase().replace(/\s+/g, '-')
}
