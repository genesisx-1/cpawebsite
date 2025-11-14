import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Varunsaran CPA',
  description: 'Get in touch to discuss your accounting, tax, and financial advisory needs and how we can help achieve your business goals.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

