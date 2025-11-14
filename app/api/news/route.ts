import { NextRequest, NextResponse } from 'next/server'

const NEWS_API_KEY = process.env.VITE_NEWS_API_KEY || process.env.NEWS_API_KEY
const NEWS_API_URL = 'https://newsapi.org/v2'

// CPA-relevant search queries based on category
const getCPAQuery = (category: string): string => {
  const queryMap: Record<string, string> = {
    'All': 'tax OR accounting OR CPA OR "tax law" OR "IRS" OR "financial planning"',
    'Strategy': 'tax planning OR "business tax" OR "corporate tax" OR "tax strategy"',
    'Technology': 'accounting software OR "financial technology" OR "tax software" OR fintech',
    'Innovation': 'accounting innovation OR "tax technology" OR "financial automation"',
    'Industry Trends': 'tax news OR accounting trends OR "CPA industry" OR "accounting profession"',
    'Tax': 'tax OR "tax law" OR IRS OR "tax reform" OR "tax planning" OR "tax compliance"',
    'Audit': 'audit OR "financial audit" OR "audit standards" OR "internal audit" OR "audit compliance"',
    'Advisory': 'financial advisory OR "business advisory" OR "tax advisory" OR "accounting advisory"',
    'trends': 'accounting news OR "financial news" OR "tax updates" OR "CPA news"'
  }
  return queryMap[category] || queryMap['All']
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category') || 'All'
    const pageSize = searchParams.get('pageSize') || '10'
    const page = searchParams.get('page') || '1'
    const query = searchParams.get('q')

    if (!NEWS_API_KEY) {
      return NextResponse.json(
        { error: 'News API key not configured' },
        { status: 500 }
      )
    }

    // Use the everything endpoint with CPA-relevant queries
    const searchQuery = query || getCPAQuery(category)
    
    // Build API URL with CPA-focused search terms
    // Focus on reputable financial and business news sources
    const apiUrl = `${NEWS_API_URL}/everything?q=${encodeURIComponent(searchQuery)}&pageSize=${Math.min(parseInt(pageSize) * 2, 50)}&page=${page}&sortBy=publishedAt&language=en`

    const response = await fetch(`${apiUrl}&apiKey=${NEWS_API_KEY}`, {
      headers: {
        'User-Agent': 'Varunsaran-CPA-Website/1.0',
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('News API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to fetch news', details: errorData },
        { status: response.status }
      )
    }

    const data = await response.json()

    // Filter and transform articles to be CPA-relevant
    const relevantKeywords = [
      'tax', 'accounting', 'cpa', 'irs', 'audit', 'financial', 'revenue', 
      'deduction', 'compliance', 'regulation', 'treasury', 'sec', 'gaap',
      'bookkeeping', 'payroll', 'business tax', 'corporate tax', 'estate tax',
      'tax planning', 'tax preparation', 'financial planning', 'accounting software'
    ]

    const articles = (data.articles || [])
      .filter((article: any) => {
        // Filter for CPA-relevant content
        const title = (article.title || '').toLowerCase()
        const description = (article.description || '').toLowerCase()
        const content = (article.content || '').toLowerCase()
        
        // Check if article contains relevant keywords
        const isRelevant = relevantKeywords.some(keyword => 
          title.includes(keyword) || description.includes(keyword) || content.includes(keyword)
        )
        
        // Also include business/finance news
        const isBusinessNews = title.includes('business') || 
                               title.includes('finance') || 
                               title.includes('economy') ||
                               description.includes('business') ||
                               description.includes('finance')
        
        return isRelevant || isBusinessNews
      })
      .map((article: any) => {
        // Determine category based on content
        let articleCategory = 'Tax'
        const titleLower = (article.title || '').toLowerCase()
        const descLower = (article.description || '').toLowerCase()
        
        if (titleLower.includes('audit') || descLower.includes('audit')) {
          articleCategory = 'Audit & Assurance'
        } else if (titleLower.includes('tax') || descLower.includes('tax') || titleLower.includes('irs')) {
          articleCategory = 'Tax'
        } else if (titleLower.includes('advisory') || descLower.includes('advisory') || titleLower.includes('consulting')) {
          articleCategory = 'Advisory'
        } else if (titleLower.includes('government') || descLower.includes('regulation') || descLower.includes('compliance')) {
          articleCategory = 'Industry Trends'
        }
        
        return {
          title: article.title,
          excerpt: article.description || article.content?.substring(0, 200) || '',
          content: article.content || article.description || '',
          author: article.author || 'News Source',
          publishedAt: article.publishedAt,
          url: article.url,
          imageUrl: article.urlToImage,
          source: article.source?.name || 'News',
          category: articleCategory,
        }
      })
      .slice(0, parseInt(pageSize)) // Limit to requested page size

    return NextResponse.json({
      articles,
      totalResults: articles.length,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
    })
  } catch (error) {
    console.error('News API error:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
