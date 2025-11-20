'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

const insights = [
  {
    title: '2025 Tax Planning Strategies for Businesses',
    excerpt: 'Essential tax planning strategies to help your business minimize tax liability and maximize savings in 2025.',
    category: 'Tax',
    date: 'January 15, 2025',
    slug: '2025-tax-planning-strategies'
  },
  {
    title: 'Financial Planning for Small Business Growth',
    excerpt: 'Key financial planning strategies to support sustainable business growth and long-term success.',
    category: 'Advisory',
    date: 'December 20, 2024',
    slug: 'financial-planning-small-business'
  }
]

export default function InsightsPreview() {
  return (
    <section className="py-20 bg-[#F7F9FB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest tax updates, accounting news, and financial insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg inline-block">
                    {insight.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{insight.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {insight.excerpt}
                </p>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center gap-1 text-[#C9A961] font-medium hover:gap-2 transition-all group-hover:text-[#D4AF37]"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors shadow-md hover:shadow-lg"
          >
            View All Insights
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
