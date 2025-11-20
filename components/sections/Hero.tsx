'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="bg-gray-50 flex items-center p-6 sm:p-8 lg:p-16 min-h-[500px] sm:min-h-[600px]">
        <div className="max-w-4xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Trusted Tax Professional
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Strategic Tax Engineering
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-sm sm:text-base font-semibold hover:bg-[#B8860B] transition-all shadow-lg hover:shadow-xl"
              >
                LEARN MORE
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
