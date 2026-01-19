# Deployment Guide for Ride Along Software Services Website

## Overview
This guide provides step-by-step instructions for deploying the Ride Along website to production environments.

## Prerequisites
- Node.js 18+ and pnpm installed
- Git repository initialized
- Domain name configured (ride.co.zw)
- Email service account (SendGrid, Mailgun, AWS SES, or Resend)

## Pre-Deployment Checklist

### 1. Environment Configuration
- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in all email service credentials
- [ ] Set `NODE_ENV=production`
- [ ] Configure `NEXT_PUBLIC_SITE_URL=https://ride.co.zw`
- [ ] Add contact form recipient email

### 2. Code Quality
- [ ] Run `pnpm lint` and fix any linting errors
- [ ] Run `pnpm build` and verify build succeeds
- [ ] Test contact form locally: `pnpm dev`
- [ ] Test all navigation links and sections
- [ ] Verify responsive design on mobile devices

### 3. SEO & Performance
- [ ] Verify `robots.txt` is properly configured in public/
- [ ] Confirm sitemap.ts is generating correctly
- [ ] Test OpenGraph metadata using social sharing preview tools
- [ ] Check Core Web Vitals with Lighthouse
- [ ] Optimize images (use WebP format where possible)

### 4. Security
- [ ] Enable HTTPS (automatic on most hosting platforms)
- [ ] Remove any sensitive data from code
- [ ] Verify API routes have proper error handling
- [ ] Test contact form with invalid inputs
- [ ] Enable security headers in deployment

## Email Service Integration

### SendGrid (Recommended)
```bash
npm install @sendgrid/mail
```

Update `app/api/contact/route.ts`:
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

// In the POST handler:
await sgMail.send({
  to: process.env.CONTACT_EMAIL_RECIPIENT!,
  from: process.env.SENDGRID_FROM_EMAIL!,
  subject: validatedData.subject,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${validatedData.name}</p>
    <p><strong>Email:</strong> ${validatedData.email}</p>
    <p><strong>Message:</strong> ${validatedData.message}</p>
  `,
})
```

### Mailgun
```bash
npm install mailgun.js form-data
```

### AWS SES
```bash
npm install @aws-sdk/client-ses
```

### Resend
```bash
npm install resend
```

## Deployment Platforms

### Vercel (Recommended for Next.js)
1. Push code to GitHub
2. Go to vercel.com and sign in
3. Click "New Project" and import repository
4. Configure environment variables
5. Click "Deploy"

Vercel automatically handles:
- Edge caching
- Automatic scaling
- Preview deployments
- Analytics

### Netlify
1. Connect Git repository
2. Build command: `pnpm build`
3. Publish directory: `.next`
4. Set environment variables
5. Deploy

### Self-Hosted (Docker)
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN npm i -g pnpm && pnpm install --frozen-lockfile

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

## Post-Deployment

### Monitoring
- [ ] Set up error tracking (Sentry, Rollbar)
- [ ] Monitor application performance
- [ ] Set up uptime monitoring
- [ ] Configure email alerts for failures

### SEO Verification
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor indexing status
- [ ] Track rankings for target keywords

### Content Updates
- [ ] Establish process for updating contact information
- [ ] Plan regular content updates
- [ ] Test form submissions regularly
- [ ] Monitor email delivery

## Troubleshooting

### Contact Form Not Sending
1. Verify email service credentials in `.env.local`
2. Check API route logs
3. Test email service manually
4. Verify recipient email is correct

### Build Failures
1. Ensure all dependencies are installed: `pnpm install`
2. Check for TypeScript errors: `pnpm build`
3. Verify image paths in public/ directory
4. Clear Next.js cache: `rm -rf .next`

### Performance Issues
1. Optimize images using next/image
2. Enable compression in deployment
3. Use CDN for static assets
4. Monitor Core Web Vitals

## Security Best Practices

1. **Never commit .env files** - use .env.example instead
2. **Validate all form inputs** - already implemented with Zod
3. **Use HTTPS** - enforce in production
4. **Set security headers** - add to next.config.mjs if needed
5. **Keep dependencies updated** - run `pnpm update` regularly
6. **Monitor for vulnerabilities** - use `pnpm audit`

## Support & Maintenance

- Regular security updates
- Monitor error logs
- Test contact form monthly
- Update dependencies quarterly
- Backup important data

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)
- [Security Best Practices](https://nextjs.org/docs/security/headers)
