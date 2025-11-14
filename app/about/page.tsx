import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Briefcase, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Varunsaran CPA',
  description: 'Learn about Varunsaran CPA firm and our expertise in accounting, tax, audit, and business advisory services.',
}

const experience = [
  {
    title: 'Senior Tax Partner',
    company: 'Leading CPA Firm',
    period: '2018 - Present',
    description: 'Led tax planning and compliance services for diverse client portfolio'
  },
  {
    title: 'Audit Manager',
    company: 'Regional Accounting Firm',
    period: '2015 - 2018',
    description: 'Managed audit engagements for mid-market and enterprise clients'
  },
  {
    title: 'Tax Specialist',
    company: 'Public Accounting Firm',
    period: '2012 - 2015',
    description: 'Provided tax preparation and planning services for businesses and individuals'
  }
]

const certifications = [
  'Certified Public Accountant (CPA)',
  'Certified Fraud Examiner (CFE)',
  'Certified Valuation Analyst (CVA)',
  'Enrolled Agent (EA)'
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
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                  alt="Varunsaran - Professional Consultant"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Background</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over a decade of experience in public accounting and financial advisory services, 
                  we specialize in helping organizations navigate complex financial challenges and ensure 
                  regulatory compliance.
                </p>
                <p>
                  Our approach combines deep accounting expertise with strategic business acumen, 
                  enabling clients to make informed financial decisions that drive measurable results. 
                  We've worked with businesses across various industries, from startups to established enterprises.
                </p>
                <p>
                  We're passionate about providing comprehensive CPA services including tax planning, 
                  audit services, and business advisory to help our clients achieve their financial goals 
                  and maintain compliance with ever-changing regulations.
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
                className="flex items-center gap-4 p-6 bg-[#F7F9FB] rounded-lg"
              >
                <div className="w-12 h-12 bg-[#0066CC] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-900 font-medium">{cert}</p>
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

