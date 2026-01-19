# Ride Along Software Services Website

A modern, responsive website built with Next.js 16, React 19, and TypeScript for Ride Along Software Services - a Southern African technology company delivering custom software solutions and sustainable electric mobility services.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach with responsive sections
- ✨ Smooth animations and transitions
- 🎯 Performance optimized with Next.js Image optimization
- 🔍 SEO optimized with metadata and sitemap
- 📧 Functional contact form with validation
- 🌓 Dark mode support with next-themes
- ♿ Accessible UI components from Radix UI
- ⚡ Fast build times with TypeScript strict mode

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/       # Contact form API endpoint
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # XML sitemap generation
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── header.tsx         # Navigation header
│   ├── hero-section.tsx   # Hero banner
│   ├── services-section.tsx
│   ├── mobility-section.tsx
│   ├── why-us-section.tsx
│   ├── contact-section.tsx # Contact form
│   └── footer.tsx         # Footer
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── images/           # Image files
│   └── robots.txt        # Search engine robots file
└── styles/               # Additional stylesheets
```

## Getting Started

### Prerequisites
- Node.js 18 or higher
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd website-content-draft
```

2. **Install dependencies**
```bash
pnpm install
# or: npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your email service credentials:
```env
# Example with SendGrid
SENDGRID_API_KEY=your_api_key_here
SENDGRID_FROM_EMAIL=noreply@ride.co.zw
CONTACT_EMAIL_RECIPIENT=hello@ride.co.zw
```

4. **Run the development server**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code (if prettier is configured)
pnpm format
```

## Technologies Used

- **Framework:** [Next.js 16](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Type Safety:** [TypeScript 5](https://www.typescriptlang.org/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Form Validation:** [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)

## Form Submission

The contact form is fully functional with:
- ✅ Client-side validation with Zod
- ✅ Server-side validation
- ✅ Error handling and user feedback
- ✅ Loading states
- ✅ Success/error messages

To enable email notifications:

1. Choose an email service (SendGrid, Mailgun, AWS SES, or Resend)
2. Add credentials to `.env.local`
3. Update the API route in `app/api/contact/route.ts` with email sending logic

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions.

## SEO Optimization

- 📋 XML Sitemap at `/sitemap.xml`
- 🤖 Robots.txt configuration for search engines
- 🏷️ OpenGraph and Twitter metadata
- 📝 Semantic HTML structure
- 🔗 Internal linking optimization
- 📱 Mobile-responsive design

## Performance

- ⚡ Next.js Image optimization
- 🚀 Static generation where possible
- 💾 Automatic code splitting
- 📦 Minified CSS and JavaScript
- 🎯 Core Web Vitals optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The website is optimized for deployment on:
- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://www.netlify.com)
- Self-hosted servers with Docker
- AWS, Google Cloud, or Azure

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## License

Copyright © 2026 Ride Along Software Services. All rights reserved.

## Support

For issues or questions:
- Email: hello@ride.co.zw
- Phone: +260 961 195 728
- Website: https://ride.co.zw

## Contributing

For internal development, ensure:
1. Code follows TypeScript strict mode guidelines
2. Components use the provided UI component library
3. All form inputs are validated
4. New features include appropriate error handling
5. SEO metadata is updated for new pages

---

**Last Updated:** January 2026
