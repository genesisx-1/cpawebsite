import { Metadata } from 'next'
import Link from 'next/link'
import { Receipt, Calculator, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Varun Saran CPA',
  description: 'Comprehensive CPA services including Tax Services and Bookkeeping Services for your business.',
}

const services = [
  {
    id: 'tax',
    title: 'Tax Services',
    icon: Receipt,
    description: 'Expert tax planning, preparation, and compliance services to minimize your tax burden and maximize savings while ensuring full compliance.',
    benefits: [
      'Tax planning and strategy',
      'Tax return preparation',
      'State and local tax services',
    ],
    deliverables: [
      'Tax returns and filings',
      'Tax planning strategies',
      'Compliance documentation',
      'Tax savings analysis'
    ]
  },
 
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#C9A961] to-[#D4AF37] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            A tax professional with experience in a variety of tax matters
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service) => {
              const Icon = service.icon
              
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="max-w-4xl mx-auto"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <Link href={`/services/${service.id}`}>
                      <h2 className="text-3xl font-bold text-gray-900 hover:text-[#D4AF37] transition-colors cursor-pointer">
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
                            <CheckCircle className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
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
                            <CheckCircle className="h-5 w-5 text-[#C9A961] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
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
            className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
