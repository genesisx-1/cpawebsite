import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights - Varun Saran CPA',
  description: 'Latest insights, articles, and updates on tax planning, accounting best practices, and financial advisory services.',
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

