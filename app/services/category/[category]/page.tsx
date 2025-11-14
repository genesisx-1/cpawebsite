import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { getServicesByCategory, allServices } from '@/lib/services-data'

const categoryMap: Record<string, { title: string; description: string }> = {
  'advisory': {
    title: 'Advisory Services',
    description: 'Strategic business advisory services to help you navigate complex financial decisions and drive sustainable growth.'
  },
  'audit-assurance': {
    title: 'Audit & Assurance Services',
    description: 'Comprehensive audit and assurance services to ensure financial accuracy, regulatory compliance, and stakeholder confidence.'
  },
  'tax': {
    title: 'Tax Services',
    description: 'Expert tax planning, preparation, and compliance services to minimize your tax burden and maximize savings.'
  },
  'bookkeeping': {
    title: 'Bookkeeping Services',
    description: 'Professional bookkeeping services to maintain accurate financial records and support your business operations.'
  }
}

export async function generateStaticParams() {
  return [
    { category: 'advisory' },
    { category: 'audit-assurance' },
    { category: 'tax' },
    { category: 'bookkeeping' }
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const categoryInfo = categoryMap[category]
  
  if (!categoryInfo) {
    return {
      title: 'Category Not Found - Varunsaran CPA'
    }
  }
  
  return {
    title: `${categoryInfo.title} - Varunsaran CPA`,
    description: categoryInfo.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryInfo = categoryMap[category]
  
  if (!categoryInfo) {
    return <div>Category not found</div>
  }

  // Map URL category to data category
  const categoryMapping: Record<string, string> = {
    'advisory': 'Advisory',
    'audit-assurance': 'Audit & Assurance',
    'tax': 'Tax',
    'bookkeeping': 'Bookkeeping',
    'bookkeeping-services': 'Bookkeeping'
  }

  // Map URL category to data category and get services
  const dataCategory = categoryMapping[category] || category
  const services = getServicesByCategory(dataCategory)

  // Get all categories for the sidebar
  const allCategories = [
    { name: 'Advisory', slug: 'advisory', count: getServicesByCategory('Advisory').length },
    { name: 'Audit & Assurance', slug: 'audit-assurance', count: getServicesByCategory('Audit & Assurance').length },
    { name: 'Tax', slug: 'tax', count: getServicesByCategory('Tax').length },
    { name: 'Bookkeeping Services', slug: 'bookkeeping', count: getServicesByCategory('Bookkeeping').length }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#E30613] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {categoryInfo.title}
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Categories */}
            <div className="lg:col-span-3 border-r border-gray-200 pr-6">
              <div className="sticky top-24">
                <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  Services <ArrowRight className="h-4 w-4" />
                </h2>
                <ul className="space-y-1">
                  {allCategories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/services/${cat.slug}`}
                        className={`block px-3 py-2 rounded transition-colors flex items-center justify-between group ${
                          category === cat.slug
                            ? 'bg-gray-100 text-[#E30613] font-semibold'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <ArrowRight className={`h-4 w-4 transition-colors ${
                          category === cat.slug ? 'text-[#E30613]' : 'text-gray-400 group-hover:text-[#E30613]'
                        }`} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content - Services List */}
            <div className="lg:col-span-9">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {categoryInfo.title}
              </h2>
              <div className="space-y-6">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="block group"
                  >
                    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-200 rounded-lg hover:border-[#E30613] hover:shadow-lg transition-all">
                      {service.image && (
                        <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E30613] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full"
                            >
                              <CheckCircle className="h-3 w-3 text-[#E30613]" />
                              {feature}
                            </span>
                          ))}
                          {service.keyFeatures.length > 3 && (
                            <span className="text-sm text-gray-500">
                              +{service.keyFeatures.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="inline-flex items-center gap-2 text-[#0066CC] font-medium group-hover:text-[#E30613] transition-colors">
                          Learn More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
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
            Let's discuss how we can help you with {categoryInfo.title.toLowerCase()}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#E30613] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C10510] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

