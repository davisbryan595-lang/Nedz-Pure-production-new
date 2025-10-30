# Nedzpur Production - IT Services Demo Website

A premium, single-page Next.js website showcasing full-stack IT services including Backend, Frontend, Engineering, Automation, Data Analytics, and Software Testing.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, React, TypeScript
- **Stunning Design**: Glass morphism effects, smooth animations, gradient accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading, optimized images, minimal bundle size
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **SEO Ready**: Meta tags, Open Graph, JSON-LD structured data
- **Interactive Components**:
  - Parallax hero with video background
  - Animated service cards
  - Before/after image sliders
  - Auto-playing testimonials carousel
  - Lightbox gallery with masonry layout
  - Validated contact form with API integration
  - Interactive pricing tiers
  - Embedded Google Maps

## 📦 Installation

### Option 1: Using shadcn CLI (Recommended)

\`\`\`bash
npx shadcn@latest init
\`\`\`

Follow the prompts to set up the project.

### Option 2: Manual Installation

\`\`\`bash
# Clone or download the project
npm install

# Run development server
npm run dev
\`\`\`

Visit `http://localhost:3000` to see your site.

## 🎨 Customization

### Theme Colors

Edit `app/globals.css` to change the brand colors:

\`\`\`css
@theme inline {
  --color-brand-yellow: #FFD700;
  --color-brand-orange: #FFA500;
  --color-brand-green: #90EE90;
  --color-brand-blue: #ADD8E6;
}
\`\`\`

### Logo

Replace the logo by updating the image URL in:
- `components/navbar.tsx`
- `components/footer.tsx`
- Add your logo to `/public/logo.png`

### Content

Edit the JSON files in `/data` to update:
- `services.json` - Service offerings
- `pricing.json` - Pricing tiers
- `testimonials.json` - Client testimonials

### Contact Form

The contact form submits to `/api/contact`. To integrate with an email service:

1. Install your preferred email service SDK:
   \`\`\`bash
   npm install @sendgrid/mail
   # or
   npm install mailgun-js
   # or
   npm install resend
   \`\`\`

2. Add environment variables to `.env.local`:
   \`\`\`
   SENDGRID_API_KEY=your_api_key
   # or
   MAILGUN_API_KEY=your_api_key
   MAILGUN_DOMAIN=your_domain
   \`\`\`

3. Update `app/api/contact/route.ts` with your email service integration.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Environment Variables

Add these to your Vercel project settings:
- `SENDGRID_API_KEY` (or your email service credentials)
- Any other API keys you're using

## 📱 Sections

1. **Hero** - Full-screen hero with video background, animated headline, and CTAs
2. **Services** - Grid of 6 IT services with hover effects
3. **About** - Company mission, team composition, and timeline
4. **Gallery** - Masonry gallery with lightbox and before/after sliders
5. **Testimonials** - Auto-playing carousel with client reviews
6. **Pricing** - 3-tier pricing with monthly/yearly toggle
7. **Contact** - Validated form with map integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Validation**: React Hook Form + Zod
- **Carousel**: Embla Carousel
- **Image Optimization**: next/image

## 📄 License

This is a demo project for Nedzpur Production. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Email: contact@nedzpur.com
- Phone: +1 (631) 664-6632
- Location: Suffolk County, Long Island, NY

---

**Built with ❤️ by Nedzpur Production**
