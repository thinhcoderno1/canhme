import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://interdata.vn'
const pagePath = '/canhme/'
const pageUrl = `${siteUrl}${pagePath}`
const title = 'Canh Me InterData - Khuyến Mãi VPS, Cloud Server, Máy Chủ'
const description =
  'Canh Me là chuyên trang cập nhật ưu đãi VPS, Cloud Server, máy chủ và chỗ đặt máy chủ tại InterData. Xem hot deals, mã giảm giá và flash sale mới nhất.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
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
  ],
  authors: [{ name: 'InterData', url: siteUrl }],
  creator: 'InterData',
  publisher: 'Công ty Cổ phần Inter Group',
  category: 'Công nghệ thông tin',
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
        url: '/cloud-1022x800.png',
        width: 1024,
        height: 1024,
        alt: 'Canh Me InterData - khuyến mãi VPS và Cloud Server',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/cloud-1022x800.png'],
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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'InterData',
      legalName: 'Công ty Cổ phần Inter Group',
      url: siteUrl,
      logo: `${siteUrl}/interdata-logo.png`,
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
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${pageUrl}#deals`,
      name: 'Danh sách ưu đãi Canh Me InterData',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'VPS Start giảm 70%' },
        { '@type': 'ListItem', position: 2, name: 'VPS Pro giảm 68%' },
        { '@type': 'ListItem', position: 3, name: 'Cloud Turbo giảm 70%' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Canh Me', item: pageUrl },
      ],
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
