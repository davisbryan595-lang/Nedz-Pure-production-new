import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nedzpur Production | Full-Stack IT Services - Suffolk County, NY",
  description:
    "Visualization to the horizon. Premium IT services including Backend, Frontend, Engineering, Automation, Data Analytics, and Software Testing in Suffolk County, Long Island.",
  keywords:
    "IT services, software development, backend, frontend, automation, data analytics, Suffolk County, Long Island, NY",
  openGraph: {
    title: "Nedzpur Production | Full-Stack IT Services",
    description: "Visualization to the horizon. Premium IT services in Suffolk County, Long Island.",
    type: "website",
    locale: "en_US",
    siteName: "Nedzpur Production",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nedzpur Production | Full-Stack IT Services",
    description: "Visualization to the horizon. Premium IT services in Suffolk County, Long Island.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nedzpur Production",
              image: "/logo.png",
              "@id": "",
              url: "",
              telephone: "+16316646632",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Suffolk County",
                addressLocality: "Long Island",
                addressRegion: "NY",
                postalCode: "11733",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.9168,
                longitude: -72.8506,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: ["https://www.linkedin.com/company/nedzpur-production", "https://twitter.com/nedzpur"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
