'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getServiceIdFromName } from '@/lib/service-mapping'

const servicesMenu = {
  title: 'Services',
  categories: [
    {
      name: 'Advisory',
      items: [
        'Forensics and Investigations',
        'Insurance Risk & Recovery',
        'Investment Banking Services',
        'Management Consulting',
        'M&A and Transaction Advisory',
        'People Strategy & Solutions',
        'Privacy & Data Protection',
        'Risk & Resilience',
        'Turnaround & Restructuring Services',
        'Valuation & Capital Market Analysis'
      ]
    },
    {
      name: 'Audit & Assurance',
      items: [
        'Financial Statement Audits',
        'Internal Audit Services',
        'Compliance & Regulatory',
        'Risk Advisory',
        'SOC Examinations',
        'Agreed-Upon Procedures'
      ]
    },
    {
      name: 'Tax',
      items: [
        'Tax Planning & Strategy',
        'International Tax',
        'State & Local Tax',
        'Tax Compliance',
        'Estate & Trust Planning',
        'Business Tax Services'
      ]
    }
  ],
  featured: [
    {
      title: '2025 Tax Strategist Survey',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      category: 'Tax',
      href: '/insights'
    },
    {
      title: 'Strategic Oversight and Governance',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      category: 'Advisory',
      href: '/insights'
    },
    {
      title: 'Turning Tax Complexities Into Success',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      category: 'Tax',
      href: '/insights'
    }
  ]
}

const insightsMenu = {
  title: 'Insights',
  categories: [
    { name: 'Tax Updates', href: '/insights/category/tax-updates' },
    { name: 'Audit & Assurance', href: '/insights/category/audit-assurance' },
    { name: 'Advisory Services', href: '/insights/category/advisory-services' },
    { name: 'Industry Trends', href: '/insights/category/industry-trends' }
  ],
  featured: [
    {
      title: '2025 Tax Strategist Survey',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      href: '/insights'
    },
    {
      title: 'Strategic Oversight and Governance',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      href: '/insights'
    },
    {
      title: 'Turning Tax Complexities Into Success',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      href: '/insights'
    }
  ]
}

const aboutMenu = {
  title: 'About',
  items: [
    { name: 'Our Firm', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Our Approach', href: '/about#approach' },
    { name: 'Careers', href: '/about#careers' }
  ]
}

const contactMenu = {
  title: 'Contact',
  items: [
    { name: 'Get in Touch', href: '/contact' },
    { name: 'Request a Consultation', href: '/contact?type=consultation' },
    { name: 'Office Locations', href: '/contact#locations' }
  ]
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState(0)
  
  const navigation = [
    { name: 'Services', hasDropdown: true },
    { name: 'Insights', hasDropdown: true },
    { name: 'About', hasDropdown: true },
    { name: 'Contact', hasDropdown: true }
  ]

  return (
    <header 
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-[#E30613] transition-colors"
          >
            Varunsaran
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setHoveredMenu(item.name)}
                onMouseLeave={() => item.hasDropdown && setHoveredMenu(null)}
              >
                <Link
                  href={item.name === 'Services' ? '/services' : item.name === 'Insights' ? '/insights' : item.name === 'About' ? '/about' : '/contact'}
                  className={`flex items-center gap-1 text-gray-700 hover:text-[#E30613] transition-colors font-medium py-2 ${
                    hoveredMenu === item.name ? 'text-[#E30613]' : ''
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    hoveredMenu === item.name ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )
                  )}
                </Link>
              </div>
            ))}
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <Link
              href="/contact"
              className="bg-[#E30613] text-white px-4 sm:px-6 py-2 rounded text-sm sm:text-base font-semibold hover:bg-[#C10510] transition-colors"
            >
              CONTACT
            </Link>
          </div>
          
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Services Dropdown Menu */}
      <AnimatePresence>
        {hoveredMenu === 'Services' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50"
            onMouseEnter={() => setHoveredMenu('Services')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                {/* Left Panel - Categories */}
                <div className="lg:col-span-3 lg:border-r lg:border-gray-200 lg:pr-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                    Services <ArrowRight className="h-4 w-4" />
                  </h3>
                  <ul className="space-y-1">
                    {servicesMenu.categories.map((category, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => setSelectedCategory(idx)}
                          className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center justify-between group ${
                            selectedCategory === idx ? 'bg-gray-100' : 'hover:bg-gray-50'
                          }`}
                        >
                          <span className={`${selectedCategory === idx ? 'text-[#E30613] font-semibold' : 'text-gray-700'} group-hover:text-[#E30613] transition-colors text-sm`}>
                            {category.name}
                          </span>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#E30613] transition-colors" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Middle Panel - Selected Category Items */}
                <div className="lg:col-span-5 lg:border-r lg:border-gray-200 lg:pr-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">
                    {servicesMenu.categories[selectedCategory].name}
                  </h3>
                  <ul className="space-y-1">
                    {servicesMenu.categories[selectedCategory].items.map((item, idx) => {
                      const serviceId = getServiceIdFromName(item)
                      return (
                        <li key={idx}>
                          <Link
                            href={`/services/${serviceId}`}
                            className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 hover:text-[#E30613] transition-colors text-sm"
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* Right Panel - Featured */}
                <div className="lg:col-span-4 hidden lg:block">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">FEATURED</h3>
                  <div className="space-y-4">
                    {servicesMenu.featured.map((feature, idx) => (
                      <Link
                        key={idx}
                        href={feature.href || '/insights'}
                        className="block group"
                      >
                        <div className="relative h-32 mb-2 rounded overflow-hidden">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 1024px) 0px, 200px"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#E30613] transition-colors">
                            {feature.title}
                          </span>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#E30613] transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Insights Dropdown Menu */}
        {hoveredMenu === 'Insights' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50"
            onMouseEnter={() => setHoveredMenu('Insights')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-4 lg:border-r lg:border-gray-200 lg:pr-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {insightsMenu.categories.map((cat, idx) => (
                      <li key={idx}>
                        <Link
                          href={cat.href}
                          className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 hover:text-[#E30613] transition-colors text-sm"
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-8 hidden lg:block">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">FEATURED</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {insightsMenu.featured.map((feature, idx) => (
                      <Link
                        key={idx}
                        href={feature.href}
                        className="block group"
                      >
                        <div className="relative h-32 mb-2 rounded overflow-hidden">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 1024px) 0px, 300px"
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-[#E30613] transition-colors">
                          {feature.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* About Dropdown Menu */}
        {hoveredMenu === 'About' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50"
            onMouseEnter={() => setHoveredMenu('About')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              <div className="max-w-md">
                <h3 className="text-sm font-bold text-gray-900 mb-4">About</h3>
                <ul className="space-y-2">
                  {aboutMenu.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 hover:text-[#E30613] transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Contact Dropdown Menu */}
        {hoveredMenu === 'Contact' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50"
            onMouseEnter={() => setHoveredMenu('Contact')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              <div className="max-w-md">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Contact</h3>
                <ul className="space-y-2">
                  {contactMenu.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 hover:text-[#E30613] transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.name === 'Services' ? '/services' : item.name === 'Insights' ? '/insights' : item.name === 'About' ? '/about' : '/contact'}
                  className="block text-gray-700 hover:text-[#E30613] transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
