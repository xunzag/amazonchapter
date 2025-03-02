import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CookieConsent from './components/CookieConsent'
import JsonLd from './components/JsonLd'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amazon Chapter - Best E-Commerce Training Institute in Karachi",
  description: "Join Amazon Chapter for expert training in Amazon FBA, Shopify, TikTok Shop & Digital Marketing. Learn e-commerce from industry experts in Karachi. Practical training with lifetime support.",
  keywords: "amazon training karachi, amazon fba course, shopify course, tiktok shop training, e-commerce institute karachi, digital marketing course, amazon karachi, shopify karachi, tiktok shop karachi, digital marketing karachi",
  authors: [{ name: "Amazon Chapter" }],
  metadataBase: new URL('https://amazonchapter.com'),
  openGraph: {
    title: "Amazon Chapter - Best E-Commerce Training Institute in Karachi",
    description: "Expert training in Amazon FBA, Shopify, TikTok Shop & Digital Marketing. Transform your future with practical e-commerce education.",
    url: 'https://amazonchapter.com',
    siteName: 'Amazon Chapter',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amazon Chapter Training Institute'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Amazon Chapter - E-Commerce Training Institute",
    description: "Expert training in Amazon FBA, Shopify, TikTok Shop & Digital Marketing in Karachi.",
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: 'https://amazonchapter.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}

