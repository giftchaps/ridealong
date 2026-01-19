import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MobilitySection } from "@/components/mobility-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Ride Along Software Services | Custom Software & Electric Mobility in Southern Africa',
  description: 'Southern African technology company delivering custom software solutions and sustainable electric mobility services. Based in Zambia, serving the entire region.',
  keywords: 'software development, custom software, mobile apps, web applications, electric mobility, Southern Africa, Zambia',
  authors: [{ name: 'Ride Along Software Services' }],
  creator: 'Ride Along Software Services',
  publisher: 'Ride Along Software Services',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://ride.co.zw',
    siteName: 'Ride Along Software Services',
    title: 'Ride Along Software Services | Custom Software & Electric Mobility',
    description: 'Southern African technology company delivering custom software solutions and sustainable electric mobility services.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ride Along Software Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ride Along Software Services',
    description: 'Custom software and sustainable mobility solutions for Southern Africa',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://ride.co.zw',
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
