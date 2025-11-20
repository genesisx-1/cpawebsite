'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Receipt, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Tax Services',
    description: 'Expert tax planning, preparation, and compliance services to minimize your tax burden and maximize savings.',
    icon: Receipt,
    href: '/services#tax'
  }
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A tax professional with experience in a variety of tax matters
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#D4AF37] transition-all group cursor-pointer shadow-md hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center group-hover:bg-[#C9A961] transition-colors shadow-lg mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-[#D4AF37] font-medium hover:gap-2 transition-all group-hover:text-[#C9A961]"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#C9A961] font-semibold hover:text-[#D4AF37] transition-colors"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
