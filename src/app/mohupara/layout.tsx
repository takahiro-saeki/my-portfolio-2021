import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'もふもふパラダイス',
  description: 'もふもふパラダイスはフロントエンドの技術を中心に同人活動を行うサークルです。React.js、Web Components、Node.js、ECMAScript2015などの技術書を頒布しています。',
  keywords: ['もふもふパラダイス', '同人誌', '技術書', 'React', 'Web Components', 'Node.js', 'ECMAScript', 'フロントエンド'],
  openGraph: {
    title: 'もふもふパラダイス',
    description: 'フロントエンド技術を中心に同人活動を行うサークル「もふもふパラダイス」の公式サイトです。',
    url: 'https://takahiro-saeki.tech/mohupara',
    images: [
      {
        url: '/images/mohupara/mohupara.png',
        width: 1200,
        height: 630,
        alt: 'もふもふパラダイス',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'もふもふパラダイス',
    description: 'フロントエンド技術を中心に同人活動を行うサークルです。',
    images: ['/images/mohupara/mohupara.png'],
  },
  alternates: {
    canonical: 'https://takahiro-saeki.tech/mohupara',
  },
}

export default function MohuparaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
