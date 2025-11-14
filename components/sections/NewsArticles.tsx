'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, ExternalLink, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface NewsArticle {
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  url: string
  imageUrl?: string
  source: string
  category: string
}

interface NewsArticlesProps {
  category?: string
  limit?: number
}

export default function NewsArticles({ category = 'business', limit = 6 }: NewsArticlesProps) {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true)
        const params = new URLSearchParams({
          category: category || 'All',
          pageSize: limit.toString(),
        })

        const response = await fetch(`/api/news?${params}`)
        const data = await response.json()

        if (response.ok && data.articles) {
          setArticles(data.articles)
        } else {
          setError(data.error || 'Failed to load news')
        }
      } catch (err) {
        setError('Failed to fetch news articles')
        console.error('News fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [category, limit])

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return dateString
    }
  }

  const calculateReadTime = (content: string) => {
    const words = content.split(' ').length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-[#E30613]" />
        <span className="ml-3 text-gray-600">Loading articles...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-800">{error}</p>
        <p className="text-sm text-red-600 mt-2">
          Please check your News API configuration.
        </p>
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No articles found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <article
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
        >
          {article.imageUrl ? (
            <div className="h-48 relative overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to gradient if image fails to load
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.style.background = 'linear-gradient(to bottom right, #0066CC, #E30613)'
                }}
              />
            </div>
          ) : (
            <div className="h-48 bg-gradient-to-br from-[#0066CC] to-[#E30613]"></div>
          )}
          
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.publishedAt)}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4" />
              <span>{calculateReadTime(article.content || article.excerpt)}</span>
            </div>
            
            <div className="mb-2">
              <span className="bg-[#E30613] text-white px-3 py-1 rounded-full text-xs font-semibold">
                {article.source}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E30613] transition-colors line-clamp-2">
              {article.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {article.excerpt}
            </p>
            
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#0066CC] font-medium hover:gap-2 transition-all group-hover:text-[#E30613]"
            >
              Read Article
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}

