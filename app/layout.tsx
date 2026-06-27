import type { Metadata, Viewport } from 'next'
import './globals.css'
import { faqs } from './components/data'
import { withAssetPrefix } from './lib/assetPrefix'
import { GoogleAnalytics } from '@next/third-parties/google'


const siteUrl = 'https://interdata.vn'
const pagePath = '/canhme/'
const pageUrl = `${siteUrl}${pagePath}`
const ogImage = "https://interdata.vn/assets/promotions/banner-birthday-2026.jpg"
const favicon = withAssetPrefix('/icon.png')

const title = 'Canh Me - Khuyến Mãi, Siêu Ưu Đãi VPS & Cloud Server'
const description =
  'Đừng bỏ lỡ! Siêu ưu đãi VPS & Cloud Server InterData tiết kiệm đến 81%, SSD NVMe U.2, uptime 99.9%. Hot deals, coupon, flash sale mới nhất. Săn deal hot hôm nay!'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | InterData',
  },
  description,
  applicationName: 'InterData',
  keywords: [
    'Canh Me InterData',
    'khuyến mãi VPS',
    'mã giảm giá VPS',
    'ưu đãi Cloud Server',
    'khuyến mãi máy chủ',
    'InterData canhme',
    'thuê VPS giá ưu đãi',
    'flash sale VPS',
    'VPS AMD EPYC giá rẻ',
    'Cloud Server NVMe',
  ],
  authors: [{ name: 'InterData', url: siteUrl }],
  creator: 'InterData',
  publisher: 'Công ty Cổ phần Inter Group',
  category: 'Công nghệ thông tin',
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  alternates: {
    canonical: pagePath,
    languages: {
      'vi-VN': pagePath,
      'x-default': pagePath,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: pagePath,
    siteName: 'InterData',
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1022,
        height: 800,
        alt: 'Canh Me InterData - khuyến mãi VPS và Cloud Server',
        type: 'image/png',
      },
    ],
  },
  icons: {
    icon: favicon,
    apple: favicon,
    shortcut: favicon,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@interdata',
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
  colorScheme: 'light dark',
}


const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'InterData',
      legalName: 'Công ty Cổ phần Inter Group',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/interdata-logo.png`,
        width: 3393,
        height: 1182,
      },
      image: `${siteUrl}${ogImage}`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84-1900-636-822',
        contactType: 'customer support',
        areaServed: 'VN',
        availableLanguage: ['Vietnamese'],
      },
      sameAs: ['https://www.facebook.com/interdata.com.vn/'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'InterData',
      inLanguage: 'vi-VN',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: 'vi-VN',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      primaryImageOfPage: `${siteUrl}${ogImage}`,
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Canh Me', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" dir="ltr">
      <head>
        <link rel="preconnect" href="https://support.interdata.vn" />
        <link rel="dns-prefetch" href="https://support.interdata.vn" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        
      </head>

      <body>{children}</body>
    <GoogleAnalytics gaId='G-BHY0XZSXPX' />
    </html>
  )
}
