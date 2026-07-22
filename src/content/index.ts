// 文言データの型付きローダー。
// 言語を追加する場合は Locale を拡張し、対応する JSON を下記 map に登録するだけでよい。

import ja from './ja.json'
import en from './en.json'
import type { Locale, SiteContent } from './types'

const content: Record<Locale, SiteContent> = {
  ja: ja as SiteContent,
  en: en as SiteContent,
}

export const defaultLocale: Locale = 'ja'
export const locales: Locale[] = ['ja', 'en']

export function isLocale(value: unknown): value is Locale {
  return value === 'ja' || value === 'en'
}

export function getContent(locale: Locale = defaultLocale): SiteContent {
  return content[locale] ?? content[defaultLocale]
}

export type { Locale, SiteContent } from './types'
