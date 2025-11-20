# Quick Start Guide

## 🚀 Getting Started

Your modern consulting website is ready! Here's how to get it running:

### 1. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### 2. What's Included

✅ **Complete Website Structure**
- Home page with Hero, Services Preview, Insights, and CTA sections
- Services page with detailed service descriptions
- Insights/Blog page with article listings
- Individual blog post pages
- About page with experience and testimonials
- Contact page with functional form

✅ **Design Features**
- BDO-inspired professional design
- Responsive mobile-first layout
- Smooth Framer Motion animations
- Modern color scheme (Red #E30613, Blue #0066CC)

✅ **SEO & Performance**
- SEO-optimized metadata on all pages
- Sitemap and robots.txt
- Static page generation for performance

### 3. Next Steps

#### Connect Sanity CMS (Optional but Recommended)

1. Create account at [sanity.io](https://sanity.io)
2. Create a new project
3. Install Sanity CLI: `npm install -g @sanity/cli`
4. Initialize: `sanity init`
5. Add your project ID and dataset to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

#### Set Up Contact Form

The contact form is ready but needs email integration. Choose one:

**Option 1: Resend (Recommended)**
```bash
npm install resend
```
Then update `/app/contact/page.tsx` to use Resend API.

**Option 2: EmailJS**
```bash
npm install @emailjs/browser
```
Configure in the contact form component.

#### Customize Content

- Update service descriptions in `/app/services/page.tsx`
- Add your blog posts in `/app/insights/page.tsx` and `/app/insights/[slug]/page.tsx`
- Update your bio in `/app/about/page.tsx`
- Modify footer links and social media in `/components/layout/Footer.tsx`

#### Deploy to Vercel

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### 4. Customization Tips

**Colors**: Edit CSS variables in `/app/globals.css`
**Fonts**: Change in `/app/layout.tsx` (currently using Inter)
**Logo**: Replace "Varun Saran" text in Header with your logo image

### 5. Project Structure

```
/app              # Next.js pages
/components       # Reusable components
  /layout        # Header, Footer
  /sections      # Home page sections
/lib             # Utilities and Sanity config
/public          # Static assets
```

### Need Help?

- Check the main `README.md` for detailed documentation
- Review Next.js docs: https://nextjs.org/docs
- Sanity docs: https://www.sanity.io/docs

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**

