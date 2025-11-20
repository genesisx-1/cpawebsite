import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Varun Saran CPA',
  description: 'Learn about Varun Saran CPA and our expertise in tax services.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#C9A961] to-[#D4AF37] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Varun Saran</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              A trusted CPA dedicated to helping businesses navigate complex financial challenges 
              and achieve sustainable growth through comprehensive tax services.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src="/about-image.jpg"
                  alt="Varun Saran - Professional Consultant"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Background</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Varun Saran is a Certified Public Accountant with extensive experience serving high net worth individuals, 
                  family offices, and businesses across multiple industries. 
                </p>
                <p>
                  His expertise encompasses tax planning and compliance for individuals, partnerships, corporations, trusts, 
                  and estates. He specializes in international taxation, expatriate taxation, real estate taxation, oil & gas 
                  taxation, estate & gift taxation, and family office management. He has served clients in industries including 
                  real estate, hospitality, medical practices, law firms, and investment management.
                </p>
                <p>
                  As Managing Partner of Varun Saran, CPA LLC, he provides comprehensive tax services including tax planning, 
                  compliance, international tax reporting, payroll services, and financial statement preparation. He is committed 
                  to helping clients navigate complex tax regulations while optimizing their financial outcomes.
                </p>
                <p>
                  When he's not working, Varun enjoys barbecuing with family and friends, and stays active playing pickleball, 
                  golf, and tennis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

