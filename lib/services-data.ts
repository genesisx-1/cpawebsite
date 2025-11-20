export interface Service {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  keyFeatures: string[]
  benefits: string[]
  whoNeedsThis: string[]
  image?: string
}

export const allServices: Service[] = [
  // Tax Services
  {
    id: 'tax-planning-strategy',
    title: 'Tax Planning & Strategy',
    category: 'Tax',
    description: 'Strategic tax planning services to minimize your tax liability and maximize savings through proactive planning.',
    longDescription: 'Our tax planning and strategy services help individuals and businesses minimize tax liability through proactive planning. We develop customized tax strategies aligned with your financial goals and business objectives, ensuring you take advantage of all available deductions, credits, and tax-saving opportunities.',
    keyFeatures: [
      'Year-round tax planning',
      'Tax strategy development',
      'Entity structure optimization',
      'Deduction maximization',
      'Tax-efficient investment strategies',
      'Multi-year tax planning'
    ],
    benefits: [
      'Minimize tax liability',
      'Maximize tax savings',
      'Improve cash flow',
      'Achieve financial goals',
      'Ensure compliance'
    ],
    whoNeedsThis: [
      'High-net-worth individuals',
      'Business owners',
      'Investors',
      'Executives',
      'Anyone seeking to minimize taxes'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  {
    id: 'state-local-tax',
    title: 'State & Local Tax',
    category: 'Tax',
    description: 'Expert state and local tax services to navigate complex multi-state tax requirements and minimize tax burden.',
    longDescription: 'We help businesses navigate complex state and local tax requirements including income tax, sales tax, property tax, and payroll tax. Our services ensure compliance while minimizing tax burden across all jurisdictions where you operate.',
    keyFeatures: [
      'Multi-state tax compliance',
      'Sales and use tax services',
      'State income tax planning',
      'Property tax services',
      'Payroll tax compliance',
      'State tax controversy support'
    ],
    benefits: [
      'Ensure multi-state compliance',
      'Minimize state tax burden',
      'Avoid penalties and interest',
      'Optimize state tax structure',
      'Resolve state tax disputes'
    ],
    whoNeedsThis: [
      'Multi-state businesses',
      'Companies with remote employees',
      'E-commerce businesses',
      'Retailers',
      'Organizations with property in multiple states'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: 'tax-compliance',
    title: 'Tax Compliance',
    category: 'Tax',
    description: 'Comprehensive tax compliance services to ensure accurate and timely filing of all required tax returns.',
    longDescription: 'We provide comprehensive tax compliance services including tax return preparation, filing, and ongoing support to ensure accurate and timely compliance with all tax obligations. Our team stays current with ever-changing tax laws and regulations.',
    keyFeatures: [
      'Tax return preparation',
      'Timely filing and extensions',
      'Tax payment planning',
      'Quarterly estimated tax calculations',
      'Amended return preparation',
      'IRS correspondence support'
    ],
    benefits: [
      'Accurate tax return preparation',
      'Timely filing and compliance',
      'Avoid penalties and interest',
      'Maximize deductions and credits',
      'Peace of mind'
    ],
    whoNeedsThis: [
      'Individuals',
      'Businesses',
      'Partnerships',
      'Corporations',
      'Estates and trusts'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: 'estate-trust-planning',
    title: 'Estate & Trust Planning',
    category: 'Tax',
    description: 'Comprehensive estate and trust planning services to preserve wealth and minimize estate taxes.',
    longDescription: 'We provide comprehensive estate and trust planning services to help individuals and families preserve wealth, minimize estate taxes, and ensure their wishes are carried out effectively. Our services include estate tax planning, trust administration, and wealth transfer strategies.',
    keyFeatures: [
      'Estate tax planning',
      'Trust planning and administration',
      'Gift tax strategies',
      'Estate administration support',
      'Charitable giving strategies',
      'Family wealth transfer planning'
    ],
    benefits: [
      'Minimize estate taxes',
      'Preserve family wealth',
      'Ensure wishes are carried out',
      'Protect beneficiaries',
      'Optimize wealth transfer'
    ],
    whoNeedsThis: [
      'High-net-worth individuals',
      'Families with significant assets',
      'Business owners',
      'Individuals planning for retirement',
      'Families with complex estates'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  {
    id: 'business-tax-services',
    title: 'Business Tax Services',
    category: 'Tax',
    description: 'Comprehensive business tax services including planning, compliance, and consulting for all business types.',
    longDescription: 'We provide comprehensive tax services for businesses of all sizes and types, including corporations, partnerships, LLCs, and sole proprietorships. Our services cover planning, compliance, and ongoing consulting to help businesses minimize tax liability and maximize savings.',
    keyFeatures: [
      'Business tax return preparation',
      'Tax planning and strategy',
      'Entity structure optimization',
      'Deduction maximization',
      'Tax credit identification',
      'Ongoing tax consulting'
    ],
    benefits: [
      'Minimize business tax liability',
      'Ensure compliance',
      'Maximize deductions and credits',
      'Optimize entity structure',
      'Improve cash flow'
    ],
    whoNeedsThis: [
      'Corporations',
      'Partnerships',
      'LLCs',
      'Sole proprietorships',
      'All business types'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  // Advisory Services
  {
    id: 'forensics-investigations',
    title: 'Forensics and Investigations',
    category: 'Advisory',
    description: 'Comprehensive forensic accounting and investigation services to uncover financial irregularities and support legal proceedings.',
    longDescription: 'Our forensic accounting and investigation services help businesses, attorneys, and individuals uncover financial fraud, embezzlement, and other financial irregularities. We provide expert analysis, documentation, and testimony to support legal proceedings and insurance claims.',
    keyFeatures: [
      'Fraud detection and investigation',
      'Financial document analysis',
      'Asset tracing and recovery',
      'Expert witness testimony',
      'Insurance claim investigations',
      'Due diligence reviews'
    ],
    benefits: [
      'Identify and quantify financial losses',
      'Support legal proceedings with expert analysis',
      'Recover misappropriated assets',
      'Prevent future fraud through improved controls',
      'Comprehensive documentation for litigation'
    ],
    whoNeedsThis: [
      'Businesses suspecting internal fraud',
      'Attorneys handling financial disputes',
      'Insurance companies processing claims',
      'Companies undergoing mergers or acquisitions',
      'Organizations facing regulatory investigations'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  {
    id: 'insurance-risk-recovery',
    title: 'Insurance Risk & Recovery',
    category: 'Advisory',
    description: 'Expert assistance with insurance claims, risk assessment, and recovery services to maximize your insurance benefits.',
    longDescription: 'We help businesses navigate complex insurance claims and maximize recovery from property damage, business interruption, and liability claims. Our team provides detailed documentation, loss quantification, and negotiation support.',
    keyFeatures: [
      'Insurance claim preparation and filing',
      'Business interruption loss calculations',
      'Property damage assessments',
      'Liability claim analysis',
      'Insurance policy review',
      'Claim negotiation support'
    ],
    benefits: [
      'Maximize insurance recovery',
      'Accelerate claim processing',
      'Ensure proper documentation',
      'Navigate complex policy language',
      'Professional representation in negotiations'
    ],
    whoNeedsThis: [
      'Businesses filing insurance claims',
      'Companies experiencing property damage',
      'Organizations with business interruption losses',
      'Businesses facing liability claims',
      'Companies reviewing insurance coverage'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  },
  {
    id: 'investment-banking-services',
    title: 'Investment Banking Services',
    category: 'Advisory',
    description: 'Strategic financial advisory services for mergers, acquisitions, capital raising, and corporate finance transactions.',
    longDescription: 'Our investment banking services provide strategic financial guidance for complex transactions including mergers, acquisitions, divestitures, and capital raising. We help businesses achieve their strategic objectives through expert financial analysis and deal structuring.',
    keyFeatures: [
      'M&A transaction advisory',
      'Capital raising and financing',
      'Business valuation services',
      'Due diligence support',
      'Deal structuring and negotiation',
      'Financial modeling and analysis'
    ],
    benefits: [
      'Expert guidance on complex transactions',
      'Maximize transaction value',
      'Identify and mitigate risks',
      'Access to capital markets',
      'Strategic financial planning'
    ],
    whoNeedsThis: [
      'Companies considering mergers or acquisitions',
      'Businesses seeking capital',
      'Organizations planning divestitures',
      'Companies evaluating strategic alternatives',
      'Businesses preparing for sale'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: 'management-consulting',
    title: 'Management Consulting',
    category: 'Advisory',
    description: 'Strategic management consulting to improve operations, enhance profitability, and drive organizational growth.',
    longDescription: 'Our management consulting services help businesses optimize operations, improve financial performance, and achieve strategic objectives. We provide actionable insights and implementation support to drive measurable results.',
    keyFeatures: [
      'Operational efficiency analysis',
      'Financial performance improvement',
      'Strategic planning and execution',
      'Process optimization',
      'Organizational restructuring',
      'Change management'
    ],
    benefits: [
      'Improve operational efficiency',
      'Enhance profitability',
      'Achieve strategic objectives',
      'Optimize resource allocation',
      'Drive sustainable growth'
    ],
    whoNeedsThis: [
      'Businesses seeking operational improvements',
      'Companies experiencing performance challenges',
      'Organizations planning strategic initiatives',
      'Businesses undergoing restructuring',
      'Companies preparing for growth'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
  },
  {
    id: 'ma-transaction-advisory',
    title: 'M&A and Transaction Advisory',
    category: 'Advisory',
    description: 'Comprehensive M&A advisory services to guide you through successful mergers, acquisitions, and divestitures.',
    longDescription: 'We provide end-to-end M&A advisory services including deal sourcing, valuation, due diligence, negotiation, and integration support. Our expertise helps ensure successful transactions that create value for all parties.',
    keyFeatures: [
      'Deal sourcing and evaluation',
      'Business valuation',
      'Due diligence coordination',
      'Deal structuring and negotiation',
      'Integration planning',
      'Post-merger integration support'
    ],
    benefits: [
      'Identify optimal acquisition targets',
      'Maximize transaction value',
      'Minimize transaction risks',
      'Ensure smooth integration',
      'Achieve strategic objectives'
    ],
    whoNeedsThis: [
      'Companies seeking acquisitions',
      'Businesses considering sale',
      'Organizations evaluating strategic alternatives',
      'Companies planning divestitures',
      'Businesses pursuing growth through M&A'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    id: 'people-strategy-solutions',
    title: 'People Strategy & Solutions',
    category: 'Advisory',
    description: 'Human resources and workforce consulting to optimize your talent strategy and organizational effectiveness.',
    longDescription: 'Our people strategy services help organizations optimize their workforce, improve employee engagement, and align human resources with business objectives. We provide comprehensive HR consulting and implementation support.',
    keyFeatures: [
      'Workforce planning and optimization',
      'Compensation and benefits analysis',
      'Organizational design',
      'Talent management strategies',
      'HR process improvement',
      'Change management support'
    ],
    benefits: [
      'Optimize workforce costs',
      'Improve employee engagement',
      'Align HR with business strategy',
      'Enhance organizational effectiveness',
      'Attract and retain top talent'
    ],
    whoNeedsThis: [
      'Organizations optimizing workforce',
      'Companies reviewing compensation',
      'Businesses restructuring operations',
      'Organizations improving HR processes',
      'Companies planning organizational changes'
    ],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop'
  },
  {
    id: 'privacy-data-protection',
    title: 'Privacy & Data Protection',
    category: 'Advisory',
    description: 'Comprehensive privacy and data protection consulting to ensure compliance with regulations and protect sensitive information.',
    longDescription: 'We help organizations navigate complex privacy regulations including GDPR, CCPA, and HIPAA. Our services include compliance assessments, policy development, and ongoing monitoring to protect sensitive data.',
    keyFeatures: [
      'Privacy compliance assessments',
      'Data protection policy development',
      'Regulatory compliance support',
      'Privacy risk assessments',
      'Incident response planning',
      'Ongoing compliance monitoring'
    ],
    benefits: [
      'Ensure regulatory compliance',
      'Protect sensitive information',
      'Reduce privacy risks',
      'Build customer trust',
      'Avoid costly penalties'
    ],
    whoNeedsThis: [
      'Organizations handling personal data',
      'Healthcare providers',
      'Financial services companies',
      'E-commerce businesses',
      'Companies subject to privacy regulations'
    ],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
  },
  {
    id: 'risk-resilience',
    title: 'Risk & Resilience',
    category: 'Advisory',
    description: 'Comprehensive risk management and business resilience consulting to protect your organization from threats.',
    longDescription: 'Our risk and resilience services help organizations identify, assess, and mitigate risks while building resilience to disruptions. We provide comprehensive risk management frameworks and business continuity planning.',
    keyFeatures: [
      'Risk assessment and analysis',
      'Enterprise risk management',
      'Business continuity planning',
      'Crisis management support',
      'Internal control evaluation',
      'Compliance risk assessment'
    ],
    benefits: [
      'Identify and mitigate risks',
      'Build organizational resilience',
      'Ensure business continuity',
      'Protect against disruptions',
      'Enhance stakeholder confidence'
    ],
    whoNeedsThis: [
      'Organizations managing enterprise risks',
      'Companies planning for disruptions',
      'Businesses in regulated industries',
      'Organizations with complex operations',
      'Companies seeking risk optimization'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  {
    id: 'turnaround-restructuring',
    title: 'Turnaround & Restructuring Services',
    category: 'Advisory',
    description: 'Expert turnaround and restructuring services to help distressed businesses recover and thrive.',
    longDescription: 'We provide comprehensive turnaround and restructuring services for businesses facing financial distress. Our team helps stabilize operations, improve cash flow, and develop sustainable recovery plans.',
    keyFeatures: [
      'Financial distress assessment',
      'Cash flow improvement',
      'Operational restructuring',
      'Creditor negotiation',
      'Business plan development',
      'Implementation support'
    ],
    benefits: [
      'Stabilize operations',
      'Improve cash flow',
      'Preserve business value',
      'Restore stakeholder confidence',
      'Achieve sustainable recovery'
    ],
    whoNeedsThis: [
      'Businesses facing financial distress',
      'Companies with cash flow challenges',
      'Organizations needing operational improvements',
      'Businesses restructuring operations',
      'Companies seeking turnaround support'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: 'valuation-capital-markets',
    title: 'Valuation & Capital Market Analysis',
    category: 'Advisory',
    description: 'Expert business valuation and capital market analysis to support transactions, financial reporting, and strategic decisions.',
    longDescription: 'We provide comprehensive valuation services for businesses, securities, and intangible assets. Our capital market analysis helps clients understand market dynamics and make informed financial decisions.',
    keyFeatures: [
      'Business valuation services',
      'Intangible asset valuation',
      'Capital market analysis',
      'Fair value assessments',
      'Transaction support',
      'Financial reporting valuations'
    ],
    benefits: [
      'Accurate business valuations',
      'Support for transactions',
      'Compliance with reporting requirements',
      'Informed strategic decisions',
      'Expert testimony support'
    ],
    whoNeedsThis: [
      'Companies planning transactions',
      'Businesses requiring fair value assessments',
      'Organizations preparing for sale',
      'Companies with reporting requirements',
      'Businesses making strategic decisions'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  // Audit & Assurance Services
  {
    id: 'financial-statement-audits',
    title: 'Financial Statement Audits',
    category: 'Audit & Assurance',
    description: 'Comprehensive financial statement audits to provide assurance on the accuracy and completeness of your financial reporting.',
    longDescription: 'We conduct thorough financial statement audits in accordance with generally accepted auditing standards (GAAS) and provide independent assurance on the accuracy and completeness of financial statements.',
    keyFeatures: [
      'GAAS-compliant audits',
      'Internal control evaluation',
      'Risk assessment',
      'Substantive testing',
      'Management letter recommendations',
      'Audit opinion issuance'
    ],
    benefits: [
      'Independent assurance on financial statements',
      'Identify control weaknesses',
      'Compliance with regulatory requirements',
      'Enhanced stakeholder confidence',
      'Improved financial reporting'
    ],
    whoNeedsThis: [
      'Public companies',
      'Organizations with audit requirements',
      'Companies seeking financing',
      'Businesses preparing for sale',
      'Organizations requiring independent assurance'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  },
  {
    id: 'internal-audit-services',
    title: 'Internal Audit Services',
    category: 'Audit & Assurance',
    description: 'Comprehensive internal audit services to evaluate and improve your organization\'s risk management and internal controls.',
    longDescription: 'Our internal audit services help organizations evaluate the effectiveness of risk management, internal controls, and governance processes. We provide independent, objective assurance and consulting services.',
    keyFeatures: [
      'Risk-based audit planning',
      'Internal control evaluation',
      'Process improvement recommendations',
      'Compliance assessments',
      'Fraud risk assessments',
      'Ongoing monitoring and support'
    ],
    benefits: [
      'Improve internal controls',
      'Identify and mitigate risks',
      'Enhance operational efficiency',
      'Ensure compliance',
      'Strengthen governance'
    ],
    whoNeedsThis: [
      'Organizations without internal audit function',
      'Companies seeking independent assessment',
      'Businesses improving controls',
      'Organizations with compliance requirements',
      'Companies managing enterprise risks'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  },
  {
    id: 'compliance-regulatory',
    title: 'Compliance & Regulatory',
    category: 'Audit & Assurance',
    description: 'Comprehensive compliance and regulatory services to ensure adherence to applicable laws, regulations, and standards.',
    longDescription: 'We help organizations navigate complex regulatory requirements and ensure compliance with applicable laws, regulations, and industry standards. Our services include compliance assessments, monitoring, and remediation support.',
    keyFeatures: [
      'Regulatory compliance assessments',
      'Policy and procedure development',
      'Compliance monitoring',
      'Regulatory reporting support',
      'Remediation planning',
      'Training and education'
    ],
    benefits: [
      'Ensure regulatory compliance',
      'Reduce compliance risks',
      'Avoid penalties and sanctions',
      'Build stakeholder confidence',
      'Maintain business operations'
    ],
    whoNeedsThis: [
      'Organizations in regulated industries',
      'Companies with compliance requirements',
      'Businesses preparing for regulatory exams',
      'Organizations improving compliance programs',
      'Companies managing regulatory changes'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  {
    id: 'risk-advisory',
    title: 'Risk Advisory',
    category: 'Audit & Assurance',
    description: 'Comprehensive risk advisory services to identify, assess, and mitigate risks across your organization.',
    longDescription: 'Our risk advisory services help organizations identify, assess, and mitigate risks that could impact business objectives. We provide comprehensive risk assessments and develop risk management strategies.',
    keyFeatures: [
      'Enterprise risk assessments',
      'Risk identification and analysis',
      'Risk mitigation strategies',
      'Internal control evaluation',
      'Risk monitoring and reporting',
      'Risk management framework development'
    ],
    benefits: [
      'Identify and prioritize risks',
      'Develop risk mitigation strategies',
      'Improve decision-making',
      'Protect business value',
      'Enhance stakeholder confidence'
    ],
    whoNeedsThis: [
      'Organizations managing enterprise risks',
      'Companies improving risk management',
      'Businesses in complex environments',
      'Organizations with regulatory requirements',
      'Companies seeking risk optimization'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  },
  {
    id: 'soc-examinations',
    title: 'SOC Examinations',
    category: 'Audit & Assurance',
    description: 'SOC 1, SOC 2, and SOC 3 examinations to provide assurance on your organization\'s controls and security practices.',
    longDescription: 'We conduct System and Organization Control (SOC) examinations to provide assurance on controls related to financial reporting, security, availability, processing integrity, confidentiality, and privacy.',
    keyFeatures: [
      'SOC 1 Type I and Type II examinations',
      'SOC 2 Type I and Type II examinations',
      'SOC 3 examinations',
      'Control design and operating effectiveness testing',
      'SOC report preparation',
      'Ongoing monitoring support'
    ],
    benefits: [
      'Demonstrate control effectiveness',
      'Meet customer and regulatory requirements',
      'Build trust with stakeholders',
      'Differentiate from competitors',
      'Support business growth'
    ],
    whoNeedsThis: [
      'Service organizations',
      'Cloud service providers',
      'Data centers',
      'Managed service providers',
      'Organizations with control requirements'
    ],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
  },
  {
    id: 'agreed-upon-procedures',
    title: 'Agreed-Upon Procedures',
    category: 'Audit & Assurance',
    description: 'Agreed-upon procedures engagements to perform specific procedures and report findings to specified parties.',
    longDescription: 'We perform agreed-upon procedures engagements where we perform specific procedures agreed upon by the parties and report our findings. These engagements provide limited assurance and are tailored to specific needs.',
    keyFeatures: [
      'Customized procedure development',
      'Specific procedure performance',
      'Detailed findings reporting',
      'Limited assurance provision',
      'Flexible engagement scope',
      'Cost-effective solutions'
    ],
    benefits: [
      'Tailored to specific needs',
      'Cost-effective assurance',
      'Detailed findings',
      'Flexible scope',
      'Quick turnaround'
    ],
    whoNeedsThis: [
      'Organizations with specific assurance needs',
      'Companies requiring limited assurance',
      'Businesses with budget constraints',
      'Organizations with targeted concerns',
      'Companies preparing for transactions'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  },
  // Bookkeeping Services
  {
    id: 'daily-transaction-recording',
    title: 'Daily Transaction Recording',
    category: 'Bookkeeping',
    description: 'Accurate and timely recording of daily business transactions to maintain up-to-date financial records.',
    longDescription: 'We provide comprehensive daily transaction recording services to ensure all business transactions are accurately and timely recorded in your accounting system. This includes sales, purchases, expenses, and other financial activities.',
    keyFeatures: [
      'Daily transaction entry',
      'Sales and revenue recording',
      'Expense tracking',
      'Purchase order processing',
      'Transaction categorization',
      'Real-time financial updates'
    ],
    benefits: [
      'Accurate financial records',
      'Up-to-date financial information',
      'Improved decision-making',
      'Time savings',
      'Reduced errors'
    ],
    whoNeedsThis: [
      'Small businesses',
      'Growing companies',
      'Businesses without dedicated bookkeeping staff',
      'Companies seeking accurate records',
      'Organizations needing timely financial data'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  },
  {
    id: 'accounts-payable-receivable',
    title: 'Accounts Payable & Receivable',
    category: 'Bookkeeping',
    description: 'Comprehensive accounts payable and receivable management to optimize cash flow and vendor relationships.',
    longDescription: 'We manage your accounts payable and receivable processes to ensure timely payments, optimize cash flow, and maintain strong vendor and customer relationships.',
    keyFeatures: [
      'Invoice processing',
      'Payment processing',
      'Vendor management',
      'Customer invoicing',
      'Collection management',
      'Cash flow optimization'
    ],
    benefits: [
      'Optimize cash flow',
      'Maintain vendor relationships',
      'Improve collection rates',
      'Reduce late payment fees',
      'Streamline processes'
    ],
    whoNeedsThis: [
      'Businesses managing multiple vendors',
      'Companies with complex billing',
      'Organizations seeking cash flow optimization',
      'Businesses with collection challenges',
      'Companies wanting streamlined processes'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: 'bank-reconciliation',
    title: 'Bank Reconciliation',
    category: 'Bookkeeping',
    description: 'Regular bank reconciliation services to ensure accuracy between your records and bank statements.',
    longDescription: 'We perform regular bank reconciliations to ensure your accounting records match your bank statements, identify discrepancies, and maintain accurate financial records.',
    keyFeatures: [
      'Monthly bank reconciliation',
      'Discrepancy identification',
      'Error correction',
      'Outstanding item tracking',
      'Reconciliation reporting',
      'Ongoing monitoring'
    ],
    benefits: [
      'Accurate financial records',
      'Identify errors and discrepancies',
      'Detect fraud early',
      'Ensure cash accuracy',
      'Compliance with accounting standards'
    ],
    whoNeedsThis: [
      'All businesses with bank accounts',
      'Companies requiring accurate cash records',
      'Organizations with multiple accounts',
      'Businesses preparing for audits',
      'Companies seeking financial accuracy'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  },
  {
    id: 'financial-statement-preparation',
    title: 'Financial Statement Preparation',
    category: 'Bookkeeping',
    description: 'Professional financial statement preparation including balance sheets, income statements, and cash flow statements.',
    longDescription: 'We prepare comprehensive financial statements including balance sheets, income statements, and cash flow statements in accordance with accounting standards to provide accurate financial reporting.',
    keyFeatures: [
      'Balance sheet preparation',
      'Income statement preparation',
      'Cash flow statement preparation',
      'Statement of changes in equity',
      'Financial statement analysis',
      'Notes to financial statements'
    ],
    benefits: [
      'Accurate financial reporting',
      'Compliance with accounting standards',
      'Informed decision-making',
      'Stakeholder confidence',
      'Professional presentation'
    ],
    whoNeedsThis: [
      'Businesses requiring financial statements',
      'Companies seeking financing',
      'Organizations preparing for audits',
      'Businesses making strategic decisions',
      'Companies with reporting requirements'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  }
]

export function getServiceById(id: string): Service | undefined {
  return allServices.find(service => service.id === id)
}

export function getServicesByCategory(category: string): Service[] {
  return allServices.filter(service => service.category === category)
}
