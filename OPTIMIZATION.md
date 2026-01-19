# Performance & Optimization Guide

## Overview
This document provides recommendations for optimizing your website for production deployment.

## Image Optimization

### Current Setup
Next.js Image optimization is enabled in `next.config.mjs`:
```javascript
images: {
  unoptimized: true,  // Can be set to false on Vercel for better optimization
}
```

### Recommendations

1. **For Vercel Deployment**: Set `unoptimized: false` to use Vercel's Image Optimization
   ```javascript
   images: {
     // unoptimized: false, (default)
   }
   ```

2. **Image Format**:
   - Use WebP format for better compression
   - Provide fallback PNG/JPG for older browsers
   - Use responsive srcset for different screen sizes

3. **Image Sizes**:
   - Hero image: max 1920x1080px
   - Service icons: 64x64px
   - Logo: 128x128px
   - Optimize all images with TinyPNG or similar tools

4. **File Size Guidelines**:
   - Hero image: < 200KB
   - Service images: < 100KB each
   - Total page images: < 500KB

### Implementation
```tsx
<Image
  src="/images/hero-city.jpg"
  alt="Southern African cityscape"
  width={1920}
  height={1080}
  priority  // For above-the-fold images
  placeholder="blur"  // Add blurred placeholder
/>
```

## CSS Optimization

### Current Setup
- Using Tailwind CSS 4 with PostCSS
- All unused styles are removed in production
- CSS is minified automatically

### Optimization Tips
1. Avoid inline styles - use Tailwind classes
2. Limit custom CSS - use Tailwind utilities
3. Remove unused components before deployment
4. Regular CSS audit: `@apply` directives should be minimal

## JavaScript Optimization

### Code Splitting
Next.js automatically code-splits your components:
- Each page gets its own bundle
- Shared code is automatically extracted
- No manual code splitting needed

### Bundle Analysis
Run this to check bundle size:
```bash
npm install -D @next/bundle-analyzer

# Then add to next.config.mjs:
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer({
  // ... existing config
})

# Build with analysis:
ANALYZE=true npm run build
```

### Dependency Optimization
```bash
# Check for unused dependencies
npx depcheck

# Update dependencies safely
pnpm update

# Remove unused packages
pnpm remove package-name
```

## Rendering Strategy

### Current Approach
- **Static Generation**: Most pages rendered at build time
- **Client-Side Rendering**: Components with `"use client"` directive
- **Dynamic Routes**: None currently (good for performance)

### Optimization
```tsx
// For static pages
export const revalidate = 3600 // ISR: revalidate every hour

// For dynamic content
export const dynamic = 'force-dynamic'

// For incremental static regeneration
export const dynamicParams = false
```

## Caching Strategy

### HTTP Headers
Should be configured in deployment (Vercel handles automatically):
```
Cache-Control: public, max-age=31536000, immutable  // Static assets
Cache-Control: public, max-age=3600, s-maxage=86400 // HTML pages
Cache-Control: private, max-age=0, must-revalidate  // Dynamic content
```

### Browser Caching
- Static assets: 1 year cache
- HTML pages: 1 hour cache
- API responses: No cache (already configured)

## Font Optimization

### Current Setup
Using Next.js Font optimization:
```tsx
import { Geist, Geist_Mono } from 'next/font/google'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
```

### Benefits
- Fonts are downloaded at build time
- No layout shift (CLS = 0)
- Self-hosted by default
- Optimized font subsets

## Core Web Vitals Optimization

### Largest Contentful Paint (LCP)
- Preload hero image: `priority` on Image component ✅
- Minimize render-blocking resources ✅
- Avoid large layout shifts

### First Input Delay (FID)
- Minimize JavaScript processing
- Use React Server Components where possible
- Defer non-critical JavaScript

### Cumulative Layout Shift (CLS)
- Define image dimensions ✅
- Use `placeholder="blur"` for images
- Avoid inserting content above existing content

### Monitoring
```bash
# Use web-vitals package
npm install web-vitals

# Add to app/layout.tsx:
'use client'
import { reportWebVitals } from 'web-vitals'

export function Vitals() {
  reportWebVitals(console.log)
}
```

## Database & API Optimization

### Current Status
- No database (static website)
- API endpoint for contact form only

### If Adding Dynamic Content
- Use edge functions for low latency
- Cache API responses with ISR
- Use database query optimization
- Implement pagination for large datasets

## Monitoring & Analytics

### Vercel Analytics (Already Integrated)
```tsx
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout() {
  return (
    <html>
      <body>
        {/* content */}
        <Analytics />
      </body>
    </html>
  )
}
```

### Additional Monitoring
1. **Google Analytics 4**
   ```tsx
   // Add to app/layout.tsx
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

2. **Sentry (Error Tracking)**
   ```bash
   npm install @sentry/nextjs
   npx @sentry/wizard@latest -i nextjs
   ```

3. **Datadog (Performance Monitoring)**
   - Advanced monitoring for production
   - Optional for most websites

## Deployment Optimizations

### Vercel (Recommended)
- ✅ Automatic image optimization
- ✅ Edge caching worldwide
- ✅ Automatic deployment preview
- ✅ Analytics included
- ✅ Serverless functions

### Environment Variables
```bash
# Production .env.local
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://ride.co.zw
SENDGRID_API_KEY=xxx
SENDGRID_FROM_EMAIL=noreply@ride.co.zw
```

## Build Optimization

### Production Build
```bash
pnpm build
# Output:
# ✓ Creating an optimized production build
# ✓ Compiled successfully
# ✓ Linting and checking validity of types
```

### Build Configuration
Already optimized in `next.config.mjs`:
- TypeScript strict mode ✅
- Image optimization ✅
- CSS minification ✅
- JS minification ✅

## Performance Checklist

- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check Core Web Vitals on real devices
- [ ] Test on 3G network speed
- [ ] Monitor bundle size (< 100KB JS)
- [ ] Verify image optimization
- [ ] Test caching headers
- [ ] Monitor API response times
- [ ] Set up error tracking (Sentry)
- [ ] Enable analytics
- [ ] Monitor email deliverability

## Common Performance Issues

### Issue: Slow Page Load
**Solution**: 
- Check image sizes
- Reduce JavaScript
- Enable caching
- Use CDN

### Issue: Large Bundle
**Solution**:
- Analyze with bundle analyzer
- Remove unused dependencies
- Use dynamic imports for heavy libraries
- Code split aggressively

### Issue: High CPU Usage
**Solution**:
- Profile with DevTools
- Optimize React components
- Avoid unnecessary re-renders
- Use React.memo for expensive components

### Issue: Email Delivery Issues
**Solution**:
- Check API key is valid
- Verify email domain
- Check DKIM/SPF records
- Review spam folder
- Test with SendGrid dashboard

## Resources

- [Next.js Performance Optimization](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Vercel Analytics](https://vercel.com/analytics)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

---

**Last Updated:** January 2026
