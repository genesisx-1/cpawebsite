'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import NewsArticles from '@/components/sections/NewsArticles'

const categories = ['All', 'Tax', 'Audit & Assurance', 'Advisory', 'Industry Trends']

const insights = [
  {
    slug: '2025-tax-planning-strategies',
    title: '2025 Tax Planning Strategies for Businesses',
    excerpt: 'Essential tax planning strategies to help your business minimize tax liability and maximize savings in 2025.',
    category: 'Tax',
    date: 'January 15, 2025',
    readTime: '5 min read',
    featured: true
  },
  {
    slug: 'understanding-new-audit-requirements',
    title: 'Understanding New Audit Requirements and Standards',
    excerpt: 'A comprehensive guide to recent changes in audit standards and how they affect your business compliance.',
    category: 'Audit & Assurance',
    date: 'January 8, 2025',
    readTime: '7 min read',
    featured: true
  },
  {
    slug: 'tax-deductions-small-business',
    title: 'Top Tax Deductions Every Small Business Should Know',
    excerpt: 'Discover the most valuable tax deductions available to small businesses and how to properly claim them.',
    category: 'Tax',
    date: 'December 20, 2024',
    readTime: '6 min read',
    featured: true
  },
  {
    slug: 'irs-tax-changes-2025',
    title: 'IRS Tax Law Changes for 2025: What You Need to Know',
    excerpt: 'Stay informed about the latest IRS tax law changes and how they impact your business and personal taxes.',
    category: 'Tax',
    date: 'December 10, 2024',
    readTime: '8 min read',
    featured: false
  },
  {
    slug: 'financial-planning-small-business',
    title: 'Financial Planning for Small Business Growth',
    excerpt: 'Key financial planning strategies to support sustainable business growth and long-term success.',
    category: 'Advisory',
    date: 'November 28, 2024',
    readTime: '5 min read',
    featured: false
  },
  {
    slug: 'quarterly-tax-estimates-guide',
    title: 'Quarterly Tax Estimates: A Complete Guide',
    excerpt: 'Everything you need to know about quarterly estimated tax payments and how to avoid penalties.',
    category: 'Tax',
    date: 'November 15, 2024',
    readTime: '6 min read',
    featured: false
  }
]

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Map our categories to News API categories
  const getNewsCategory = (category: string) => {
    const categoryMap: Record<string, string> = {
      'All': 'All',
      'Tax': 'Tax',
      'Audit & Assurance': 'Audit',
      'Advisory': 'Advisory',
      'Industry Trends': 'trends',
    }
    return categoryMap[category] || 'All'
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#E30613] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Insights</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Stay informed with the latest tax updates, accounting news, and financial insights
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#F7F9FB] border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-[#E30613] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {insights
              .filter((insight) => insight.featured)
              .map((insight) => (
                <article
                  key={insight.slug}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="h-48 bg-gradient-to-br from-[#0066CC] to-[#E30613] relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-[#E30613] px-3 py-1 rounded-full text-xs font-semibold">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{insight.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E30613] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {insight.excerpt}
                    </p>
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="inline-flex items-center gap-1 text-[#0066CC] font-medium hover:gap-2 transition-all group-hover:text-[#E30613]"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
          </div>

          {/* News Articles from API */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Latest News & Articles
          </h2>
          <NewsArticles 
            category={getNewsCategory(selectedCategory)} 
            limit={9}
          />
        </div>
      </section>
    </div>
  )
}

