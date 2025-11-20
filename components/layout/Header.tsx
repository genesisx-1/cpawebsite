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
      name: 'Tax',
      items: [
        'Tax Planning & Strategy',
        'State & Local Tax',
        'Tax Compliance',
        'Business Tax Services'
      ]
    }
  ]
}

const insightsMenu = {
  title: 'Insights',
  categories: [
    { name: 'Tax Updates', href: '/insights/category/tax-updates' },
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
    { name: 'About', hasDropdown: false },
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
            className="flex items-center h-12"
          >
            <Image
              src="/logo.jpg"
              alt="Varun Saran, CPA LLC"
              width={200}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
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
                  href={item.name === 'Services' ? '/services' : item.name === 'About' ? '/about' : '/contact'}
                  className={`flex items-center gap-1 text-gray-700 hover:text-[#D4AF37] transition-colors font-medium py-2 ${
                    hoveredMenu === item.name ? 'text-[#D4AF37]' : ''
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
              className="bg-[#D4AF37] text-white px-4 sm:px-6 py-2 rounded text-sm sm:text-base font-semibold hover:bg-[#B8860B] transition-colors"
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
                          <span className={`${selectedCategory === idx ? 'text-[#D4AF37] font-semibold' : 'text-gray-700'} group-hover:text-[#D4AF37] transition-colors text-sm`}>
                            {category.name}
                          </span>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#D4AF37] transition-colors" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Middle Panel - Selected Category Items */}
                <div className="lg:col-span-9">
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
                            className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 hover:text-[#D4AF37] transition-colors text-sm"
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>

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
                        className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 hover:text-[#D4AF37] transition-colors text-sm"
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
                  href={item.name === 'Services' ? '/services' : item.name === 'About' ? '/about' : '/contact'}
                  className="block text-gray-700 hover:text-[#D4AF37] transition-colors font-medium py-2"
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
