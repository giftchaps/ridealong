import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ride Along Software Services | Software Development & Electric Mobility in Southern Africa',
  description: 'Leading Southern African technology company delivering custom software development, mobile apps, web applications, and sustainable electric mobility services. Based in Zambia, serving the entire region.',
  generator: 'Next.js',
  applicationName: 'Ride Along Software Services',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'software development Southern Africa',
    'custom software Zambia', 
    'mobile app development Africa',
    'web applications Lusaka',
    'electric mobility solutions',
    'fleet management systems',
    'ride sharing platform',
    'sustainable transport Africa',
    'tech company Zambia'
  ],
  authors: [{ name: 'Ride Along Software Services', url: 'https://www.your-ride-now.com' }],
  creator: 'Ride Along Software Services',
  publisher: 'Ride Along Software Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.your-ride-now.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ride Along Software Services | Custom Software & Electric Mobility',
    description: 'Leading Southern African technology company delivering innovative software solutions and sustainable mobility services.',
    url: 'https://www.your-ride-now.com',
    siteName: 'Ride Along Software Services',
    locale: 'en_ZA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/logo.png',
    },
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
