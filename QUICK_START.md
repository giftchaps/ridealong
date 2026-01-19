# Quick Start Guide

## For Developers

### Local Development
```bash
# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local

# Start development server
pnpm dev

# Open browser
open http://localhost:3000
```

### Testing
```bash
# Check TypeScript
pnpm build

# Run linter
pnpm lint

# Test contact form at http://localhost:3000#contact
```

## For DevOps/Deployment

### Prerequisites
- Domain configured (ride.co.zw)
- Email service account (SendGrid recommended)
- Git repository access

### Setup Environment
```bash
# Copy template
cp .env.example .env.local

# Add credentials for your chosen email service:
SENDGRID_API_KEY=your_key_here
SENDGRID_FROM_EMAIL=noreply@ride.co.zw
CONTACT_EMAIL_RECIPIENT=hello@ride.co.zw
```

### Deploy to Vercel (Recommended)
```bash
# 1. Push to GitHub
git push origin main

# 2. Go to vercel.com
# 3. Click "New Project" and select repository
# 4. Add environment variables from .env.local
# 5. Click "Deploy"
```

### Deploy to Netlify
```bash
# Build command: pnpm build
# Publish directory: .next
# Add environment variables in Netlify UI
# Deploy
```

### Production Build
```bash
# Test build locally
pnpm build
pnpm start

# Should run at http://localhost:3000
```

## Email Service Setup

### SendGrid (5 min setup)
1. Sign up at sendgrid.com
2. Create API key
3. Add to `.env.local`: `SENDGRID_API_KEY=...`
4. Update `app/api/contact/route.ts` with SendGrid code

### Mailgun (5 min setup)
1. Sign up at mailgun.com
2. Create API key
3. Add to `.env.local`: `MAILGUN_API_KEY=...`
4. Update `app/api/contact/route.ts` with Mailgun code

See `DEPLOYMENT.md` for detailed setup.

## After Deployment

### SEO
```bash
# 1. Go to Google Search Console
# 2. Add property: https://ride.co.zw
# 3. Submit sitemap: https://ride.co.zw/sitemap.xml
# 4. Wait 24-48 hours for indexing
```

### Monitoring
- Set up Google Analytics
- Monitor contact form submissions
- Track email deliverability

### Maintenance
- Review logs weekly
- Test contact form monthly
- Update dependencies quarterly

## Important Files

| File | Purpose | When to Use |
|------|---------|-----------|
| `.env.example` | Environment template | Copy for new deployments |
| `DEPLOYMENT.md` | Full deployment guide | During setup |
| `IMPROVEMENTS.md` | What was improved | Understanding changes |
| `LAUNCH_CHECKLIST.md` | Pre-launch checklist | Before going live |
| `OPTIMIZATION.md` | Performance guide | For optimization |
| `README.md` | Project overview | For team onboarding |

## Troubleshooting

### Contact form not sending?
1. Check `.env.local` has correct email credentials
2. Verify email service account is active
3. Check API logs in email service dashboard
4. Test with `curl` to isolate issue

### Build failing?
1. Run `pnpm install` to ensure all deps
2. Check `pnpm build` output for errors
3. Verify `next.config.mjs` is correct
4. Delete `.next` folder and rebuild

### Deployment stuck?
1. Check git is up to date
2. Verify environment variables are set
3. Check for build errors in logs
4. Redeploy from platform dashboard

## Key URLs

- **Home**: https://ride.co.zw
- **Sitemap**: https://ride.co.zw/sitemap.xml
- **Contact API**: https://ride.co.zw/api/contact (POST only)

## Support Contacts

- **Company**: hello@ride.co.zw
- **Phone**: +260 961 195 728
- **Website**: https://ride.co.zw

---

**Document Version**: 1.0
**Last Updated**: January 2026
