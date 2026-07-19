// 文言データの型付きローダー。
// 将来 en.json を追加したら Locale を 'ja' | 'en' に拡張し、下記 map に足すだけで切替可能になる。

import ja from './ja.json'
import type { Locale, SiteContent } from './types'

const content: Record<Locale, SiteContent> = {
  ja: ja as SiteContent,
}

export const defaultLocale: Locale = 'ja'

export function getContent(locale: Locale = defaultLocale): SiteContent {
  return content[locale]
}

export type { Locale, SiteContent } from './types'
