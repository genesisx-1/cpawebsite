import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import NewsArticles from '@/components/sections/NewsArticles'

const categoryMap: Record<string, { title: string; description: string }> = {
  'tax-updates': {
    title: 'Tax Updates',
    description: 'Stay informed with the latest tax news, IRS updates, tax law changes, and tax planning strategies to help you navigate the complex tax landscape.'
  },
  'audit-assurance': {
    title: 'Audit & Assurance',
    description: 'Comprehensive insights on audit standards, compliance requirements, financial reporting, and assurance services to keep your business compliant.'
  },
  'advisory-services': {
    title: 'Advisory Services',
    description: 'Strategic business advisory insights covering financial planning, risk management, business consulting, and strategic guidance for growth.'
  },
  'industry-trends': {
    title: 'Industry Trends',
    description: 'Latest trends, regulatory changes, and industry developments affecting the accounting profession and financial services sector.'
  }
}

// Map URL slugs to News API categories
const newsCategoryMap: Record<string, string> = {
  'tax-updates': 'Tax',
  'audit-assurance': 'Audit',
  'advisory-services': 'Advisory',
  'industry-trends': 'trends'
}

export async function generateStaticParams() {
  return [
    { category: 'tax-updates' },
    { category: 'audit-assurance' },
    { category: 'advisory-services' },
    { category: 'industry-trends' }
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
    title: `${categoryInfo.title} - Insights | Varunsaran CPA`,
    description: categoryInfo.description,
  }
}

// Static insights data for each category
const staticInsights: Record<string, Array<{
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  featured: boolean
}>> = {
  'tax-updates': [
    {
      slug: '2025-tax-planning-strategies',
      title: '2025 Tax Planning Strategies for Businesses',
      excerpt: 'Essential tax planning strategies to help your business minimize tax liability and maximize savings in 2025.',
      date: 'January 15, 2025',
      readTime: '5 min read',
      featured: true
    },
    {
      slug: 'irs-tax-changes-2025',
      title: 'IRS Tax Law Changes for 2025: What You Need to Know',
      excerpt: 'Stay informed about the latest IRS tax law changes and how they impact your business and personal taxes.',
      date: 'December 10, 2024',
      readTime: '8 min read',
      featured: true
    },
    {
      slug: 'tax-deductions-small-business',
      title: 'Top Tax Deductions Every Small Business Should Know',
      excerpt: 'Discover the most valuable tax deductions available to small businesses and how to properly claim them.',
      date: 'December 20, 2024',
      readTime: '6 min read',
      featured: false
    },
    {
      slug: 'quarterly-tax-estimates-guide',
      title: 'Quarterly Tax Estimates: A Complete Guide',
      excerpt: 'Everything you need to know about quarterly estimated tax payments and how to avoid penalties.',
      date: 'November 15, 2024',
      readTime: '6 min read',
      featured: false
    }
  ],
  'audit-assurance': [
    {
      slug: 'understanding-new-audit-requirements',
      title: 'Understanding New Audit Requirements and Standards',
      excerpt: 'A comprehensive guide to recent changes in audit standards and how they affect your business compliance.',
      date: 'January 8, 2025',
      readTime: '7 min read',
      featured: true
    },
    {
      slug: 'internal-control-best-practices',
      title: 'Internal Control Best Practices for Small Businesses',
      excerpt: 'Learn how to implement effective internal controls to protect your business assets and ensure accurate financial reporting.',
      date: 'December 5, 2024',
      readTime: '6 min read',
      featured: true
    },
    {
      slug: 'soc-examinations-guide',
      title: 'SOC Examinations: What Service Organizations Need to Know',
      excerpt: 'A comprehensive guide to SOC 1 and SOC 2 examinations for service organizations.',
      date: 'November 22, 2024',
      readTime: '7 min read',
      featured: false
    }
  ],
  'advisory-services': [
    {
      slug: 'financial-planning-small-business',
      title: 'Financial Planning for Small Business Growth',
      excerpt: 'Key financial planning strategies to support sustainable business growth and long-term success.',
      date: 'November 28, 2024',
      readTime: '5 min read',
      featured: true
    },
    {
      slug: 'business-valuation-methods',
      title: 'Understanding Business Valuation Methods',
      excerpt: 'Learn about different business valuation approaches and when to use each method for your business.',
      date: 'November 10, 2024',
      readTime: '6 min read',
      featured: true
    },
    {
      slug: 'risk-management-strategies',
      title: 'Effective Risk Management Strategies for Businesses',
      excerpt: 'Discover how to identify, assess, and mitigate risks that could impact your business operations and financial performance.',
      date: 'October 25, 2024',
      readTime: '5 min read',
      featured: false
    }
  ],
  'industry-trends': [
    {
      slug: 'accounting-profession-trends-2025',
      title: 'Accounting Profession Trends for 2025',
      excerpt: 'Explore the key trends shaping the accounting profession in 2025 and how they impact CPA firms and their clients.',
      date: 'January 5, 2025',
      readTime: '6 min read',
      featured: true
    },
    {
      slug: 'regulatory-changes-2025',
      title: 'Key Regulatory Changes Affecting Businesses in 2025',
      excerpt: 'Stay informed about important regulatory changes that could impact your business operations and compliance requirements.',
      date: 'December 18, 2024',
      readTime: '7 min read',
      featured: true
    },
    {
      slug: 'future-of-accounting',
      title: 'The Future of Accounting: Trends and Predictions',
      excerpt: 'Insights into how technology and changing regulations are shaping the future of the accounting profession.',
      date: 'November 30, 2024',
      readTime: '6 min read',
      featured: false
    }
  ]
}

export default async function InsightsCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryInfo = categoryMap[category]
  const newsCategory = newsCategoryMap[category] || 'All'
  
  if (!categoryInfo) {
    return <div>Category not found</div>
  }

  const featuredInsights = staticInsights[category]?.filter(i => i.featured) || []
  const allInsights = staticInsights[category] || []

  // Get all categories for the sidebar
  const allCategories = [
    { name: 'Tax Updates', slug: 'tax-updates' },
    { name: 'Audit & Assurance', slug: 'audit-assurance' },
    { name: 'Advisory Services', slug: 'advisory-services' },
    { name: 'Industry Trends', slug: 'industry-trends' }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#E30613] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-gray-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Insights
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
                  Categories <ArrowRight className="h-4 w-4" />
                </h2>
                <ul className="space-y-1">
                  {allCategories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/insights/category/${cat.slug}`}
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

            {/* Right Content - Articles */}
            <div className="lg:col-span-9">
              {/* Featured Articles */}
              {featuredInsights.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {featuredInsights.map((insight) => (
                      <article
                        key={insight.slug}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group border border-gray-200"
                      >
                        <div className="h-48 bg-gradient-to-br from-[#0066CC] to-[#E30613] relative">
                          <div className="absolute top-4 left-4">
                            <span className="bg-white text-[#E30613] px-3 py-1 rounded-full text-xs font-semibold">
                              {categoryInfo.title}
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
                </div>
              )}

              {/* All Articles */}
              {allInsights.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
                  <div className="space-y-4">
                    {allInsights.map((insight) => (
                      <article
                        key={insight.slug}
                        className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#E30613] hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
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
                            <p className="text-gray-600 mb-4">
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
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Latest News from API */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News & Articles</h2>
                <NewsArticles 
                  category={newsCategory} 
                  limit={12}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

