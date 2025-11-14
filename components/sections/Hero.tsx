'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Text Content */}
        <div className="bg-gray-50 flex items-center p-8 lg:p-16 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Trusted CPA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive Accounting, Tax, and Advisory Services for Your Business Success
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded font-semibold hover:bg-[#C10510] transition-all shadow-lg hover:shadow-xl"
                >
                  LEARN MORE
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Diagonal divider */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-white transform skew-x-[-12deg] origin-top-right z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-[#E30613] transform skew-x-[-12deg] origin-top-right z-10" style={{ right: '-64px' }}></div>
        </div>

        {/* Right Side - Image */}
        <div className="relative bg-gray-900 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop"
            alt="Professional CPA services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/40"></div>
        </div>
      </div>

      {/* Bottom Carousel */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-4 flex-1 overflow-x-auto">
              {[
                { id: 1, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=150&fit=crop', active: true },
                { id: 2, image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=150&fit=crop', active: false },
                { id: 3, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=150&fit=crop', active: false },
                { id: 4, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop', active: false },
              ].map((item) => (
                <div
                  key={item.id}
                  className={`relative w-32 h-20 rounded overflow-hidden flex-shrink-0 cursor-pointer group ${
                    item.active ? 'ring-2 ring-[#E30613]' : ''
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`Slide ${item.id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
            
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded transition-colors ml-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
