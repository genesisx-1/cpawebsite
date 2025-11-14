import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle, Users, FileText } from 'lucide-react'
import { getServiceById, allServices } from '@/lib/services-data'

export async function generateStaticParams() {
  return allServices.map((service) => ({
    serviceId: service.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ serviceId: string }> }): Promise<Metadata> {
  const { serviceId } = await params
  const service = getServiceById(serviceId)
  
  if (!service) {
    return {
      title: 'Service Not Found - Varunsaran CPA'
    }
  }
  
  return {
    title: `${service.title} - Varunsaran CPA`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = await params
  const service = getServiceById(serviceId)
  
  if (!service) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#E30613] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="bg-white text-[#E30613] px-4 py-2 rounded-full text-sm font-semibold">
                {service.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Service Image */}
              {service.image && (
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl mb-12">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Long Description */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-[#E30613]" />
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-[#F7F9FB] rounded-lg"
                    >
                      <CheckCircle className="h-6 w-6 text-[#E30613] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Who Needs This */}
                <div className="bg-[#F7F9FB] rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="h-6 w-6 text-[#E30613]" />
                    Who Needs This
                  </h3>
                  <ul className="space-y-3">
                    {service.whoNeedsThis.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#0066CC] mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#0066CC] to-[#E30613] rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-100 mb-6">
                    Let's discuss how we can help you with {service.title.toLowerCase()}.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-white text-[#0066CC] text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#F7F9FB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices
              .filter(s => s.category === service.category && s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.id}`}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E30613] transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedService.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
