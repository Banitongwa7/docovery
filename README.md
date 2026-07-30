# Docovery - Tech Company Website

Build solutions, Shape the future

## Overview

Docovery is a Next.js (App Router) marketing site for a digital studio based in
Kinshasa, positioned for fintech startups, SaaS platforms and financial
institutions. The design language is clean, structured and finance-oriented,
with GSAP-driven scroll choreography and Lenis smooth scrolling.

## Features

### Pages
- **Home** (`/`) - Hero, key metrics, services grid, process, case studies, values, testimonials, CTA
- **Services** (`/services`) - The eight areas of expertise, each with deliverables and stack
- **Case Studies** (`/case-studies`, `/case-studies/[slug]`) - Anonymised fintech / SaaS engagements
- **Blog** (`/blog`, `/blog/[slug]`) - Articles with search, category filter and related posts
- **About** (`/about`) - Story, metrics, values and founding team
- **Contact** (`/contact`) - Validated contact form, contact channels and booking link
- **Privacy Policy** (`/privacy-policy`) - GDPR-compliant privacy policy
- **Terms of Service** (`/terms-of-service`) - Legal terms and conditions

Legacy `/blog/<numeric-id>` URLs still resolve to the matching article.

### Architecture
- `lib/` holds every piece of content as typed data (`site`, `services`, `company`, `case-studies`, `posts`, `legal`, `validation`) — pages stay presentational.
- `components/motion/` holds the animation primitives: `Reveal`, `Stagger`, `SplitHeading`, `Counter`.
- `components/sections/` holds composable page sections reused across routes.
- `components/providers/` wires global smooth scrolling and the shared project-request dialog.

### Animation rules
- GSAP is only ever started through `useGSAP(..., { scope })` so tweens and
  ScrollTriggers are reverted automatically on route changes — never `useEffect`.
- Plugins are registered once, client-side only, in `lib/gsap.ts`.
- Animated nodes carry `data-anim` and start at `opacity: 0` (anti-FOUC). Three
  safety nets keep content readable: a reduced-motion override, a `<noscript>`
  override in the root layout, and the animation itself.
- Lenis is driven by `gsap.ticker` (`autoRaf: false`) so ScrollTrigger and the
  smooth scroll share one loop. Reduced-motion visitors get native scrolling —
  Lenis is unmounted rather than paused.

### API Routes
All API routes use email-only (no database) as requested:

1. **`/api/contact`** - Handles contact form submissions
   - Sends email to admin
   - Sends auto-reply to user
   - Validates input

2. **`/api/newsletter`** - Handles newsletter subscriptions
   - Sends notification to admin
   - Sends welcome email to subscriber
   - Validates email format

3. **`/api/demo-request`** - Handles demo/consultation requests
   - Sends request details to admin
   - Sends confirmation email to requester
   - Validates input

## Email Configuration

### Setup Instructions

1. **Create Email Account**
   You can use Gmail, Outlook, or any SMTP service. For Gmail:
   - Enable 2-factor authentication
   - Generate an app-specific password
   - Use this password in your environment variables

2. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Email Configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   EMAIL_FROM=noreply@docovery.com
   EMAIL_TO=contact@docovery.com

   # App Configuration
   NEXT_PUBLIC_SITE_URL=https://docovery.vercel.app
   ```

3. **Gmail Setup (Recommended)**
   - Go to Google Account settings
   - Enable 2-Step Verification
   - Go to App passwords (under Security)
   - Generate a new app password for "Mail"
   - Use this 16-character password as `EMAIL_PASSWORD`

4. **Alternative Email Services**
   
   **Outlook/Office365:**
   ```javascript
   service: 'outlook',
   auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASSWORD,
   }
   ```

   **Custom SMTP:**
   ```javascript
   host: 'smtp.yourprovider.com',
   port: 587,
   secure: false,
   auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASSWORD,
   }
   ```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS 4 (`@theme` tokens in `styles/globals.css`)
- **Scroll animation**: GSAP + ScrollTrigger + SplitText via `@gsap/react` (`useGSAP`)
- **Smooth scroll**: Lenis (`lenis/react` → `<ReactLenis root>`)
- **Micro-interactions**: Framer Motion
- **Forms**: React Hook Form + Zod (shared schemas, validated on client *and* server)
- **Icons**: lucide-react (brand glyphs are local SVGs in `components/ui/BrandIcons.tsx`)
- **Email**: Nodemailer
- **Analytics**: Vercel Analytics

> Tailwind v4 compiles through `@tailwindcss/postcss`, which handles vendor
> prefixing itself — a separate `autoprefixer` step is not used and would
> conflict with the v4 pipeline.

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   Create `.env.local` with your email credentials (see above)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Email Templates

The application includes professional HTML email templates for:
- Contact form submissions
- Newsletter subscriptions (welcome email)
- Demo requests
- Auto-replies

All templates are located in `utils/emailConfig.ts` and can be customized.

## Customization

### Updating Company Information
All shared facts live in `lib/`, not in components:
- Contact details, socials, navigation: `lib/site.ts`
- Metrics, values, process, team, testimonials: `lib/company.ts`
- Services: `lib/services.ts` · Case studies: `lib/case-studies.ts` · Articles: `lib/posts.ts`
- Legal copy: `lib/legal.ts`
- Logo: replace `/public/docovery_logo.svg` and `/public/docovery_logo_white.svg`

### Adding New Pages
1. Create `app/[page-name]/page.tsx` and export a `metadata` object.
2. Compose it from `components/ui/PageHero` and `components/sections/*` — the
   navbar and footer come from the root layout, so don't add them per page.
3. Add the route to `navItems` in `lib/site.ts` and to `app/sitemap.ts`.

### Modifying Email Templates
Edit templates in `utils/emailConfig.ts`:
```typescript
export const emailTemplates = {
  contact: (data) => ({
    subject: "...",
    html: "...",
    text: "..."
  }),
  // Add more templates
}
```

## Project Structure

```
docovery/
├── app/
│   ├── api/{contact,newsletter,demo-request}/route.ts
│   ├── about/page.tsx
│   ├── blog/page.tsx · blog/[slug]/page.tsx
│   ├── case-studies/page.tsx · case-studies/[slug]/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── privacy-policy/page.tsx · terms-of-service/page.tsx
│   ├── layout.tsx · page.tsx · not-found.tsx · sitemap.ts
├── components/
│   ├── blog/        ArticleBody, BlogExplorer, ShareLinks
│   ├── forms/       ContactForm, NewsletterForm, ProjectRequestModal
│   ├── layout/      Navbar, Footer, ScrollToTop
│   ├── legal/       LegalDocument
│   ├── motion/      Reveal, SplitHeading, Counter
│   ├── providers/   SmoothScroll, ProjectModalProvider
│   ├── sections/    Hero, Metrics, ServicesGrid, Process, CaseStudiesPreview,
│   │                Values, Testimonials, CTASection
│   └── ui/          PageHero, SectionHeader, Button, ProjectCTA, BrandIcons
├── lib/             site, services, company, case-studies, posts, legal,
│                    validation, gsap, utils
├── utils/emailConfig.ts
├── public/          [images and assets]
├── styles/globals.css
└── .env.local (create this)
```

## Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Import repository on Vercel
   - Add environment variables in project settings
   - Deploy

3. **Add Environment Variables on Vercel**
   Go to Project Settings → Environment Variables and add:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_FROM`
   - `EMAIL_TO`
   - `NEXT_PUBLIC_SITE_URL`

## Security Considerations

1. **Never commit `.env.local`** - It's in `.gitignore` by default
2. **Use app-specific passwords** - Don't use your main email password
3. **Validate all inputs** - All API routes include validation
4. **Rate limiting** - Consider adding rate limiting for production
5. **CORS** - Configure CORS if needed for your domain

## Testing API Routes

### Test Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "message": "This is a test message"
  }'
```

### Test Newsletter
```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User"
  }'
```

### Test Demo Request
```bash
curl -X POST http://localhost:3000/api/demo-request \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "service": "Web Development",
    "message": "I need a demo"
  }'
```

## Troubleshooting

### Email Not Sending

1. **Check environment variables**
   - Ensure `.env.local` exists
   - Verify variable names match exactly
   - Restart dev server after changes

2. **Gmail issues**
   - Enable "Less secure app access" OR use app-specific password
   - Check if 2FA is enabled (required for app passwords)

3. **Check console logs**
   - Look for specific error messages
   - Verify SMTP settings

### Common Errors

```
Error: Invalid login
→ Check EMAIL_USER and EMAIL_PASSWORD

Error: Message failed
→ Check EMAIL_FROM and EMAIL_TO

Error: Connection timeout
→ Check internet connection and SMTP port
```

## Support

For questions or issues:
- Email: contact@docovery.net
- Phone: +243 81 072 6861
- Office: Kinshasa, RD Congo

## License

© 2025 Docovery. All rights reserved.

---

**Built with ❤️ by Docovery Team**