import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MobilitySection } from "@/components/mobility-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.your-ride-now.com'),
  title: {
    default: 'Ride Along Software Services | Custom Software & Electric Mobility Solutions',
    template: '%s | Ride Along Software Services'
  },
  description: 'Leading Southern African technology company delivering custom software development, mobile apps, web applications, and sustainable electric mobility services. Based in Zambia, serving the entire region with innovative tech solutions.',
  keywords: [
    'software development',
    'custom software solutions', 
    'mobile app development',
    'web applications',
    'electric mobility',
    'Southern Africa technology',
    'Zambia software company',
    'fleet management systems',
    'ride sharing platform',
    'sustainable transport',
    'tech solutions Africa'
  ],
  authors: [{ name: 'Ride Along Software Services', url: 'https://www.your-ride-now.com' }],
  creator: 'Ride Along Software Services',
  publisher: 'Ride Along Software Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.your-ride-now.com',
    siteName: 'Ride Along Software Services',
    title: 'Ride Along Software Services | Custom Software & Electric Mobility Solutions',
    description: 'Leading Southern African technology company delivering custom software development and sustainable electric mobility services. Expert solutions for businesses across the region.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ride Along Software Services - Custom Software & Electric Mobility Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ride Along Software Services | Custom Software & Electric Mobility',
    description: 'Leading Southern African tech company delivering custom software and sustainable mobility solutions',
    images: ['/images/og-image.png'],
    creator: '@ridealongtech',
  },
  alternates: {
    canonical: 'https://www.your-ride-now.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <MobilitySection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
