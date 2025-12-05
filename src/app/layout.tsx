import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import './globals.css'

export const metadata: Metadata = {
  title: 'Takahiro Saeki - Frontend Developer',
  description: '三枝木貴浩のポートフォリオサイトです。',
  openGraph: {
    title: 'Takahiro Saeki - Frontend Developer',
    description: '三枝木貴浩のポートフォリオサイトです。',
    url: 'https://takahiro-saeki.tech',
    siteName: 'Takahiro Saeki Portfolio',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
