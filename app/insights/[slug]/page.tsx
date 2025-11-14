import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

// This would typically come from Sanity CMS
const getPost = (slug: string) => {
  const posts: Record<string, any> = {
    '2025-tax-planning-strategies': {
      title: '2025 Tax Planning Strategies for Businesses',
      content: `
        <p>As we enter 2025, tax planning has become more critical than ever for businesses of all sizes. With changing tax laws and regulations, proactive tax planning can significantly impact your bottom line.</p>
        
        <h2>Key Tax Planning Strategies for 2025</h2>
        <p>Several important strategies can help businesses minimize their tax liability while remaining compliant:</p>
        
        <h3>1. Maximize Business Deductions</h3>
        <p>Take advantage of all available business deductions, including equipment purchases, home office expenses, vehicle expenses, and professional services. Section 179 expensing and bonus depreciation can provide significant tax savings for qualifying purchases.</p>
        
        <h3>2. Retirement Plan Contributions</h3>
        <p>Contributing to retirement plans like 401(k)s, SEP-IRAs, or SIMPLE IRAs not only helps secure your future but also provides immediate tax benefits. These contributions are typically tax-deductible and reduce your taxable income.</p>
        
        <h3>3. Timing of Income and Expenses</h3>
        <p>Strategically timing when you recognize income and pay expenses can help manage your tax liability. Consider deferring income to the next year or accelerating deductions into the current year when beneficial.</p>
        
        <h2>Recent Tax Law Changes</h2>
        <p>Stay informed about recent changes that may affect your business:</p>
        <ul>
          <li>Updated depreciation rules and limits</li>
          <li>Changes to business meal and entertainment deductions</li>
          <li>New credits and incentives for small businesses</li>
          <li>Updated state and local tax (SALT) deduction limits</li>
        </ul>
        
        <h2>Working with a CPA</h2>
        <p>Partnering with an experienced CPA can help you navigate complex tax regulations and identify opportunities for tax savings. A qualified CPA can provide personalized tax planning strategies tailored to your specific business situation.</p>
        
        <h2>Conclusion</h2>
        <p>Effective tax planning requires year-round attention, not just during tax season. By implementing these strategies and working with a trusted CPA, you can minimize your tax burden and maximize your business's financial success.</p>
      `,
      category: 'Tax',
      date: 'January 15, 2025',
      readTime: '5 min read'
    },
    'understanding-new-audit-requirements': {
      title: 'Understanding New Audit Requirements and Standards',
      content: `
        <p>Audit requirements and standards continue to evolve, and staying compliant is essential for businesses subject to audit. Understanding these changes can help you prepare and avoid potential issues.</p>
        
        <h2>Recent Audit Standard Updates</h2>
        <p>The auditing profession has seen several important updates in recent years:</p>
        
        <h3>1. Enhanced Auditor Reporting</h3>
        <p>New standards require auditors to provide more detailed reporting, including key audit matters and enhanced descriptions of auditor responsibilities. This provides stakeholders with greater transparency.</p>
        
        <h3>2. Quality Management Standards</h3>
        <p>Updated quality management standards require firms to establish robust quality control systems and processes to ensure consistent audit quality across all engagements.</p>
        
        <h3>3. Technology in Auditing</h3>
        <p>Auditors are increasingly using data analytics and technology tools to improve audit effectiveness and efficiency. This includes automated testing and continuous monitoring capabilities.</p>
        
        <h2>Preparing for an Audit</h2>
        <p>To ensure a smooth audit process:</p>
        <ol>
          <li>Maintain organized and complete financial records</li>
          <li>Document internal controls and processes</li>
          <li>Respond promptly to auditor requests</li>
          <li>Work closely with your CPA throughout the process</li>
          <li>Address any identified issues proactively</li>
        </ol>
        
        <h2>Internal Controls</h2>
        <p>Strong internal controls are essential for audit readiness. This includes segregation of duties, proper authorization procedures, and regular reconciliations. Your CPA can help assess and improve your internal control environment.</p>
      `,
      category: 'Audit & Assurance',
      date: 'January 8, 2025',
      readTime: '7 min read'
    },
    'tax-deductions-small-business': {
      title: 'Top Tax Deductions Every Small Business Should Know',
      content: `
        <p>Understanding available tax deductions is crucial for small business owners looking to minimize their tax liability. Here are the most valuable deductions you should be aware of.</p>
        
        <h2>Essential Business Deductions</h2>
        
        <h3>1. Business Equipment and Supplies</h3>
        <p>Deduct the cost of equipment, furniture, computers, and supplies used in your business. You can often take advantage of Section 179 expensing or bonus depreciation for larger purchases.</p>
        
        <h3>2. Home Office Deduction</h3>
        <p>If you use part of your home exclusively for business, you may qualify for the home office deduction. This can include a portion of your mortgage interest, property taxes, utilities, and maintenance costs.</p>
        
        <h3>3. Vehicle Expenses</h3>
        <p>Deduct business-related vehicle expenses using either the standard mileage rate or actual expenses method. Keep detailed records of business miles and expenses.</p>
        
        <h3>4. Professional Services</h3>
        <p>Fees paid to attorneys, accountants, consultants, and other professional service providers are generally deductible as business expenses.</p>
        
        <h3>5. Business Meals and Travel</h3>
        <p>Deduct business meals (subject to certain limitations) and travel expenses when traveling away from home for business purposes. Keep receipts and document the business purpose.</p>
        
        <h2>Record Keeping Requirements</h2>
        <p>Proper documentation is essential for claiming deductions. Maintain receipts, invoices, and records that support your business expenses. Your CPA can help you establish effective record-keeping systems.</p>
        
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Mixing personal and business expenses</li>
          <li>Failing to document business purpose</li>
          <li>Missing deduction opportunities</li>
          <li>Not keeping adequate records</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Maximizing your tax deductions requires careful planning and record-keeping. Working with a knowledgeable CPA can help ensure you're taking advantage of all available deductions while maintaining compliance with tax regulations.</p>
      `,
      category: 'Tax',
      date: 'December 20, 2024',
      readTime: '6 min read'
    },
    'irs-tax-changes-2025': {
      title: 'IRS Tax Law Changes for 2025: What You Need to Know',
      content: `
        <p>The IRS has announced several important tax law changes for 2025 that will affect businesses and individuals. Staying informed about these changes is crucial for effective tax planning.</p>
        
        <h2>Key Changes for 2025</h2>
        
        <h3>1. Standard Deduction Adjustments</h3>
        <p>The standard deduction amounts have been adjusted for inflation, providing taxpayers with slightly higher deduction amounts for 2025.</p>
        
        <h3>2. Tax Bracket Adjustments</h3>
        <p>Income tax brackets have been adjusted for inflation, which may result in lower effective tax rates for some taxpayers.</p>
        
        <h3>3. Retirement Contribution Limits</h3>
        <p>Contribution limits for 401(k) plans, IRAs, and other retirement accounts have been increased, allowing for greater tax-deferred savings.</p>
        
        <h2>Business Tax Changes</h2>
        <p>Several changes affect businesses:</p>
        <ul>
          <li>Updated depreciation limits and rules</li>
          <li>Changes to business meal deduction rules</li>
          <li>New small business tax credits</li>
          <li>Updated payroll tax thresholds</li>
        </ul>
        
        <h2>Planning Opportunities</h2>
        <p>These changes create planning opportunities for taxpayers. Consult with your CPA to understand how these changes specifically affect your situation and identify strategies to minimize your tax burden.</p>
      `,
      category: 'Tax',
      date: 'December 10, 2024',
      readTime: '8 min read'
    },
    'financial-planning-small-business': {
      title: 'Financial Planning for Small Business Growth',
      content: `
        <p>Effective financial planning is essential for small business growth and long-term success. A comprehensive financial plan helps you make informed decisions and achieve your business goals.</p>
        
        <h2>Key Components of Financial Planning</h2>
        
        <h3>1. Cash Flow Management</h3>
        <p>Maintaining positive cash flow is critical. Monitor your cash flow regularly, forecast future needs, and establish lines of credit for unexpected expenses.</p>
        
        <h3>2. Budgeting and Forecasting</h3>
        <p>Develop realistic budgets and financial forecasts to guide your business decisions. Regularly compare actual results to your budget and adjust as needed.</p>
        
        <h3>3. Tax Planning</h3>
        <p>Work with your CPA to develop tax strategies that minimize your tax liability while ensuring compliance. This includes timing of income and expenses, retirement planning, and taking advantage of available deductions.</p>
        
        <h2>Growth Strategies</h2>
        <p>Financial planning supports growth by:</p>
        <ul>
          <li>Identifying funding needs and sources</li>
          <li>Evaluating investment opportunities</li>
          <li>Managing debt effectively</li>
          <li>Planning for expansion</li>
        </ul>
        
        <h2>Working with Professionals</h2>
        <p>A qualified CPA can provide valuable financial planning guidance tailored to your business. They can help you develop strategies, analyze financial data, and make informed decisions that support your growth objectives.</p>
      `,
      category: 'Advisory',
      date: 'November 28, 2024',
      readTime: '5 min read'
    },
    'quarterly-tax-estimates-guide': {
      title: 'Quarterly Tax Estimates: A Complete Guide',
      content: `
        <p>If you're self-employed or have income not subject to withholding, you may need to make quarterly estimated tax payments. Understanding these requirements can help you avoid penalties and manage your cash flow.</p>
        
        <h2>Who Must Pay Estimated Taxes</h2>
        <p>You generally need to make estimated tax payments if:</p>
        <ul>
          <li>You expect to owe at least $1,000 in tax after subtracting withholding and credits</li>
          <li>Your withholding and credits will be less than 90% of your current year tax liability</li>
          <li>Your withholding and credits will be less than 100% of your prior year tax liability</li>
        </ul>
        
        <h2>Payment Deadlines</h2>
        <p>Estimated tax payments are due quarterly:</p>
        <ul>
          <li>April 15 - for income earned January 1 - March 31</li>
          <li>June 15 - for income earned April 1 - May 31</li>
          <li>September 15 - for income earned June 1 - August 31</li>
          <li>January 15 (of next year) - for income earned September 1 - December 31</li>
        </ul>
        
        <h2>Calculating Your Payments</h2>
        <p>Calculate your estimated tax based on your expected income, deductions, and credits for the year. You can use Form 1040-ES or work with your CPA to determine the appropriate amount.</p>
        
        <h2>Avoiding Penalties</h2>
        <p>To avoid underpayment penalties, ensure your estimated payments and withholding equal at least 90% of your current year tax or 100% of your prior year tax (110% for high-income taxpayers).</p>
        
        <h2>Conclusion</h2>
        <p>Properly managing quarterly estimated tax payments requires careful planning and calculation. Your CPA can help you determine your payment requirements and develop a strategy to meet your tax obligations while managing cash flow.</p>
      `,
      category: 'Tax',
      date: 'November 15, 2024',
      readTime: '6 min read'
    }
  }
  
  return posts[slug] || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Varunsaran CPA'
    }
  }
  
  return {
    title: `${post.title} - Varunsaran CPA`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160)
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#E30613] text-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-gray-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Insights
          </Link>
          <div className="mb-4">
            <span className="bg-white text-[#E30613] px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-gray-100">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-[#0066CC] prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 bg-[#F7F9FB]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help with Your Taxes?
          </h2>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can help you with your accounting, tax, and financial advisory needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#E30613] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C10510] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
