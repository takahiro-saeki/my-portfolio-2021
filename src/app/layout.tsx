import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import { ChakraProviderClient } from '@/lib/chakra-provider'
import './globals.css'

const siteUrl = 'https://takahiro-saeki.tech'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Takahiro Saeki - Frontend Developer',
    template: '%s | Takahiro Saeki',
  },
  description: '三枝木貴浩のポートフォリオサイトです。フロントエンドエンジニアとして、React、TypeScript、Next.jsなどのモダンな技術を使用した開発を行っています。',
  keywords: ['フロントエンドエンジニア', 'React', 'TypeScript', 'Next.js', 'ポートフォリオ', '三枝木貴浩', 'Takahiro Saeki'],
  authors: [{ name: '三枝木貴浩', url: siteUrl }],
  creator: '三枝木貴浩',
  publisher: '三枝木貴浩',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Takahiro Saeki - Frontend Developer',
    description: '三枝木貴浩のポートフォリオサイトです。フロントエンドエンジニアとして活動しています。',
    url: siteUrl,
    siteName: 'Takahiro Saeki Portfolio',
    images: [
      {
        url: '/images/ts.png',
        width: 1200,
        height: 630,
        alt: 'Takahiro Saeki Portfolio',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Takahiro Saeki - Frontend Developer',
    description: '三枝木貴浩のポートフォリオサイトです。',
    images: ['/images/ts.png'],
    creator: '@hirodeath',
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/ts.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
  },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '三枝木貴浩',
  alternateName: 'Takahiro Saeki',
  description: 'フロントエンドエンジニア',
  url: siteUrl,
  image: `${siteUrl}/images/hiro.jpeg`,
  sameAs: [
    'https://github.com/takahiro-saeki',
    'https://qiita.com/hiro123',
    'https://dev.to/hirodeath',
  ],
  jobTitle: 'Frontend Developer',
  knowsAbout: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'CSS', 'Web Development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ChakraProviderClient>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ChakraProviderClient>
      </body>
    </html>
  )
}
