// Sanity GROQ queries for fetching content
// These will be used once Sanity CMS is fully configured

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  features,
  deliverables,
  order
}`

export const insightsQuery = `*[_type == "insight"] | order(publishDate desc) {
  _id,
  title,
  slug,
  excerpt,
  content,
  category,
  featuredImage,
  publishDate,
  readTime,
  featured
}`

export const insightBySlugQuery = `*[_type == "insight" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  category,
  featuredImage,
  publishDate,
  readTime
}`

export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  name,
  company,
  role,
  quote,
  image
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteTitle,
  tagline,
  socialLinks,
  contactInfo
}`

