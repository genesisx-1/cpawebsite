import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Briefcase, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Varunsaran CPA',
  description: 'Learn about Varunsaran CPA firm and our expertise in accounting, tax, audit, and business advisory services.',
}

const experience = [
  {
    title: 'Managing Partner',
    company: 'Varun Saran, CPA LLC',
    period: 'Feb 2025 - Present',
    description: 'Providing comprehensive tax planning and compliance services to businesses and families across multiple industries globally. Specializing in expatriate taxation, international tax compliance (FBAR, BOI, Forms 5471/5472, FATCA), and serving high net worth individuals and family offices.'
  },
  {
    title: 'Tax Associate',
    company: 'BDO',
    period: 'Jun 2024 - Jan 2025',
    description: 'Provided expert tax advice and compliance services to high net worth individuals and family offices. Specialized in Gift & Estate Tax, Individual Tax, Partnership Tax, and Fiduciary Taxation. Developed family tax planning strategies including Family Limited Partnerships and grantor trust entities.'
  },
  {
    title: 'Tax Professional',
    company: 'Varun Saran, CPA LLC',
    period: 'Dec 2023 - May 2024',
    description: 'Delivered tax compliance and planning services for corporations, flow-through entities, and tax-exempt organizations. Served medical professionals, educators, and high net worth individuals. Provided international tax compliance, payroll services, and financial statement preparation. Specialized in real estate taxation, investment management taxation, and family office management.'
  },
  {
    title: 'Tax Accountant',
    company: 'RREAF Holdings',
    period: 'Aug 2023 - Nov 2023',
    description: 'Provided tax compliance and specialized accounting services for real estate entities including hotels, parking lots, and residential apartment complexes. Worked on real estate taxation and taxation of foreign partners (Form 8805), collaborating with COO and cross-functional teams.'
  },
  {
    title: 'Tax Associate',
    company: 'Barker Viggato, PLLC',
    period: 'Jan 2023 - Apr 2023',
    description: 'Served high net worth clients in real estate/hospitality, medical practices, law firms, and investment management. Specialized in REIT, RIC (Mutual Funds), and Delaware Statutory Trusts (DST) taxation. Handled complex tax engagements for corporations, partnerships, trusts, estates, and high net worth individuals.'
  },
  {
    title: 'Senior Tax Manager',
    company: 'VP Office LLC',
    period: 'Jul 2020 - Dec 2022',
    description: 'Collaborated with partners to provide tailored tax advice, bookkeeping, payroll processing, and financial reporting. Prepared various tax returns including amended returns, represented clients during IRS audits, and mentored colleagues. Ensured compliance with tax regulations while optimizing tax outcomes for clients.'
  },
  {
    title: 'Tax Associate',
    company: 'Whitley Penn',
    period: 'Jul 2018 - Jan 2019',
    description: 'Handled diverse tax returns with focus on oil and gas interests. Provided tax compliance and planning services for 1040s, 1065s, 1120/1120-S, 1041s, and 990s. Specialized in §613 statutory/percentage depletion methods and served businesses in upstream, midstream, and downstream oil & gas production.'
  }
]

const certifications = [
  {
    name: 'Certified Public Accountant (CPA)',
    issuer: 'Texas State Board of Public Accountancy',
    issued: 'Feb 2022',
    description: 'Licensed CPA with expertise in ASC 740 Tax Provisions, U.S. Generally Accepted Accounting Principles (GAAP), and comprehensive tax services'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Johnson Manufacturing',
    role: 'CFO',
    quote: 'Varunsaran provided exceptional tax planning and audit services that helped us navigate complex financial challenges. Their expertise and attention to detail exceeded our expectations.'
  },
  {
    name: 'Michael Chen',
    company: 'Chen & Associates',
    role: 'Owner',
    quote: 'Working with Varunsaran was a game-changer. Their expertise in tax planning and business advisory helped us make informed financial decisions and maximize our savings.'
  },
  {
    name: 'Emily Rodriguez',
    company: 'Rodriguez Retail Group',
    role: 'President',
    quote: 'The comprehensive accounting and advisory services provided by Varunsaran were instrumental in our business growth and financial success.'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#E30613] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Varunsaran</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              A trusted CPA firm dedicated to helping businesses navigate complex financial challenges 
              and achieve sustainable growth through comprehensive accounting, tax, and advisory services.
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
                  family offices, and businesses across multiple industries. With a career spanning over 8 years, he has 
                  worked at prestigious firms including BDO, Barker Viggato, and Whitley Penn, before establishing his own practice.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-[#F7F9FB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-gray-600">A track record of delivering transformative results</p>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#E30613]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E30613] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-[#0066CC] font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Credentials</h2>
            <p className="text-lg text-gray-600">Professional qualifications and expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-[#F7F9FB] rounded-lg border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0066CC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-sm text-[#0066CC] font-medium mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 mb-2">Issued {cert.issued}</p>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F7F9FB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">What clients say about working together</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

