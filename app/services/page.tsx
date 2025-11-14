import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Shield, Receipt, Calculator, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Varunsaran CPA',
  description: 'Comprehensive CPA services including Advisory, Audit & Assurance, Tax Services, and Bookkeeping Services for your business.',
}

const services = [
  {
    id: 'advisory',
    title: 'Advisory',
    icon: FileText,
    description: 'Strategic business advisory services to help you navigate complex financial decisions, mergers, acquisitions, and drive sustainable growth.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    benefits: [
      'Financial planning and analysis',
      'M&A transaction advisory',
      'Business valuation services',
      'Risk management consulting',
      'Strategic financial guidance'
    ],
    deliverables: [
      'Financial analysis reports',
      'Strategic recommendations',
      'Valuation reports',
      'Risk assessment documentation'
    ]
  },
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    icon: Shield,
    description: 'Comprehensive audit and assurance services to ensure financial accuracy, regulatory compliance, and stakeholder confidence.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    benefits: [
      'Financial statement audits',
      'Internal audit services',
      'Compliance reviews',
      'SOC examinations',
      'Agreed-upon procedures'
    ],
    deliverables: [
      'Audit reports and opinions',
      'Internal control assessments',
      'Compliance documentation',
      'Management letters'
    ]
  },
  {
    id: 'tax',
    title: 'Tax Services',
    icon: Receipt,
    description: 'Expert tax planning, preparation, and compliance services to minimize your tax burden and maximize savings while ensuring full compliance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    benefits: [
      'Tax planning and strategy',
      'Tax return preparation',
      'State and local tax services',
      'International tax consulting',
      'Estate and trust planning'
    ],
    deliverables: [
      'Tax returns and filings',
      'Tax planning strategies',
      'Compliance documentation',
      'Tax savings analysis'
    ]
  },
  {
    id: 'bookkeeping-services',
    title: 'Bookkeeping Services',
    icon: Calculator,
    description: 'Professional bookkeeping services to maintain accurate financial records, track transactions, and ensure compliance with accounting standards.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    benefits: [
      'Daily transaction recording',
      'Accounts payable and receivable management',
      'Bank reconciliation services',
      'Financial statement preparation',
      'Monthly and quarterly reporting'
    ],
    deliverables: [
      'Accurate financial records',
      'Monthly financial statements',
      'Bank reconciliation reports',
      'Transaction documentation'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#E30613] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Comprehensive CPA services designed to support your business financial needs and ensure compliance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-[#E30613] rounded-lg flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <Link href={`/services/${service.id}`}>
                        <h2 className="text-3xl font-bold text-gray-900 hover:text-[#E30613] transition-colors cursor-pointer">
                          {service.title}
                        </h2>
                      </Link>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-[#E30613] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Deliverables</h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F7F9FB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you with your accounting, tax, and financial advisory needs
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#E30613] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C10510] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
