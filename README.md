# Docovery - Tech Company Website

Build solutions, Shape the future

## Overview

Docovery is a modern, full-featured Next.js web application for a tech company specializing in digital solutions. The application features a beautiful, responsive design with comprehensive pages, components, and API routes using email notifications via Nodemailer.

## Features

### Pages
- **Home** (`/`) - Landing page with hero section, services, about, team, and testimonials
- **Contact** (`/contact`) - Contact form with email integration
- **Blog** (`/blog`) - Blog posts with search and category filtering
- **Privacy Policy** (`/privacy-policy`) - GDPR-compliant privacy policy
- **Terms of Service** (`/terms-of-service`) - Legal terms and conditions

### Components
- **Navigation** - Responsive navigation bar with mobile menu
- **Footer** - Comprehensive footer with newsletter subscription, social links, and quick links
- **Reusable sections** - Hero sections, service cards, testimonials, etc.

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

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Email**: Nodemailer
- **Analytics**: Vercel Analytics

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
- Logo: Replace `/public/docovery_logo.svg` and `/public/docovery_logo_white.svg`
- Company details: Update in components (Navigation, Footer, etc.)
- Contact info: Update in `/app/contact/page.tsx` and Footer component

### Adding New Pages
1. Create new page in `app/[page-name]/page.tsx`
2. Add Navigation component at top
3. Add Footer component at bottom
4. Add route to Navigation component

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
│   ├── api/
│   │   ├── contact/route.ts
│   │   ├── newsletter/route.ts
│   │   └── demo-request/route.ts
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms-of-service/page.tsx
│   ├── layout.tsx
│   └── page.tsx (home)
├── components/
│   ├── Navigation.tsx
│   └── Footer.tsx
├── utils/
│   ├── emailConfig.ts
│   └── socialTeam.ts
├── public/
│   └── [images and assets]
├── styles/
│   └── globals.css
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
- Email: contact@docovery.com
- Phone: +243 123 456 789

## License

© 2025 Docovery. All rights reserved.

---

**Built with ❤️ by Docovery Team**