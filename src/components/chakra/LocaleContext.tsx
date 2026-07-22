'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import { getContent, isLocale, defaultLocale } from '@/content'
import type { Locale, SiteContent } from '@/content'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  // 静的HTMLは常に既定(日本語)でレンダリングし、hydration後にクライアント側で判定して反映する。
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // 初回判定: URLパラメータ(?lang=) を最優先、なければブラウザ言語、どちらもなければ既定(ja)
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('lang')
    if (isLocale(param)) {
      setLocaleState(param)
      return
    }
    const browser = navigator.language?.toLowerCase() ?? ''
    if (browser.startsWith('en')) {
      setLocaleState('en')
    }
  }, [])

  // <html lang> を現在の言語に同期（アクセシビリティ）
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  // 言語切替時は URLパラメータ も更新して共有・リロード時に維持する
  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url.toString())
  }, [])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider')
  return ctx
}

// 現在の言語に対応した文言を返す
export function useContent(): SiteContent {
  const { locale } = useLocale()
  return getContent(locale)
}
