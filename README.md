# Varunsaran.com - Consulting Website

A modern, professional consulting website built with Next.js 14, inspired by BDO's design aesthetic.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Sanity CMS** for content management (configured but not yet connected)
- **Lucide React** for icons

## Features

- ✅ Responsive design (mobile-first)
- ✅ Modern, professional UI inspired by BDO
- ✅ Smooth animations with Framer Motion
- ✅ SEO-optimized pages
- ✅ Contact form (ready for email integration)
- ✅ Blog/Insights section
- ✅ Services showcase
- ✅ About page with testimonials

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then fill in your Sanity CMS credentials and other API keys.

3. **Run the development server:**
```bash
npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/app
  /about          # About page
  /contact        # Contact page
  /insights       # Blog/Insights listing
    /[slug]       # Individual blog post
  /services       # Services page
  layout.tsx      # Root layout with Header/Footer
  page.tsx        # Home page

/components
  /layout         # Header, Footer
  /sections       # Hero, ServicesPreview, InsightsPreview, CTA

/lib
  /sanity         # Sanity CMS client and queries
```

## Next Steps

### 1. Set Up Sanity CMS

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Install Sanity CLI: `npm install -g @sanity/cli`
3. Initialize Sanity in your project: `sanity init`
4. Create schemas for:
   - Services
   - Insights/Blog Posts
   - Testimonials
   - Site Settings

### 2. Set Up Contact Form API

The contact form is now integrated with Resend API! 

1. **Get a Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Go to API Keys and create a new key
   - Copy your API key

2. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=your-email@example.com
   VITE_NEWS_API_KEY=your_news_api_key_here
   ```

3. **Verify Your Domain (Optional but Recommended):**
   - In Resend dashboard, add and verify your domain
   - Update the `from` field in `/app/api/contact/route.ts` to use your verified domain

The contact form will now send emails directly to your inbox!

### 3. News API Integration

The Insights page now fetches real-time news articles from NewsAPI.org!

1. **Get a News API Key:**
   - Sign up at [newsapi.org](https://newsapi.org)
   - Get your free API key from the dashboard
   
2. **Environment Variable** - Add to `.env.local`:
   ```
   VITE_NEWS_API_KEY=your_news_api_key_here
   ```

3. **For Netlify Deployment:**
   - Go to your Netlify site dashboard
   - Navigate to Site settings → Environment variables
   - Add a new variable:
     - Key: `VITE_NEWS_API_KEY`
     - Value: Your News API key (the same one you're using)
   - Redeploy your site for changes to take effect
   
   **Note:** The code will also check for `NEWS_API_KEY` as a fallback, so either variable name will work in Netlify.

4. **Features:**
   - Fetches latest business and technology news
   - Category filtering (Strategy, Technology, Innovation, Industry Trends)
   - Real-time article updates
   - Click articles to read full stories on original sources

The News API is integrated and will automatically fetch articles when you visit the Insights page!

### 4. Add Search Functionality

Consider integrating:
- Algolia
- MeiliSearch
- Or a simple client-side search

### 4. Deploy to Netlify

1. Push your code to GitHub
2. Import project in Netlify (or use Netlify CLI: `netlify deploy --prod`)
3. **Add Environment Variables in Netlify:**
   - Go to Site settings → Environment variables
   - Add the following variables:
     - `VITE_NEWS_API_KEY` - Your News API key from newsapi.org (or `NEWS_API_KEY` as fallback)
     - `RESEND_API_KEY` - Your Resend API key (if using contact form)
     - `CONTACT_EMAIL` - Email address for contact form submissions
4. Redeploy your site for environment variables to take effect

**Note:** Environment variables set in Netlify are only available at build time and runtime for server-side code. Make sure to redeploy after adding new variables.

## Customization

### Colors

Update colors in `app/globals.css`:
- Primary: `#E30613` (Red)
- Secondary: `#0066CC` (Blue)
- Text: `#2C3E50`
- Background: `#FFFFFF`

### Content

Currently using static content. Once Sanity is set up, content will be managed through the CMS.

## License

Private project for Varunsaran.com
