import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileCTA } from '@/components/ui/StickyMobileCTA';
import { company } from '@/data/company';
import { generateLocalBusinessSchema } from '@/lib/schema/localBusiness';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | San Diego Pool Service`,
    template: `%s | ${company.name}`,
  },
  description: `Professional pool cleaning and maintenance services in San Diego County. Serving San Diego, Chula Vista, Carlsbad & 20+ cities. ${company.rating.count}+ 5-star reviews. Call ${company.phone}!`,
  keywords: [
    'pool service San Diego',
    'pool cleaning San Diego',
    'pool maintenance San Diego County',
    'San Diego pool company',
    'pool repair near me',
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(company.url),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logos/poollogic-logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logos/poollogic-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: `${company.name} | San Diego Pool Service`,
    description: `Professional pool cleaning and maintenance in San Diego. ${company.rating.count}+ 5-star reviews. Call ${company.phone}!`,
    url: company.url,
    siteName: company.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logos/poollogic-logo.png',
        width: 512,
        height: 512,
        alt: `${company.name} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | San Diego Pool Service`,
    description: `Professional pool cleaning and maintenance in San Diego. ${company.rating.count}+ 5-star reviews.`,
    images: ['/images/logos/poollogic-logo.png'],
  },
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
  verification: {
    // Add Google Search Console verification if needed
    // google: 'verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${company.url}/#website`,
    name: company.name,
    url: company.url,
    publisher: {
      '@type': 'Organization',
      '@id': `${company.url}/#organization`,
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* LocalBusiness Schema for entire site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
