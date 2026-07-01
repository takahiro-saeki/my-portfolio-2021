// サイト文言の型定義。将来の英語版追加時は Locale を拡張し、en.json を足すだけで済む。

export type Locale = 'ja'

export interface NavItem {
  label: string
  href: string
}

export interface WorkItem {
  title: string
  description: string
  image: string
  link: string | null
  tag: string
}

export interface SkillCategory {
  /** skillData.ts のキーと対応（数値スコアと結合する） */
  key: string
  title: string
  note: string
}

export interface TimelineEntry {
  title: string
  date: string
  desc: string
}

export interface FooterLink {
  label: string
  url: string
  icon?: 'github' | 'qiita' | 'devto'
}

export interface SiteContent {
  nav: NavItem[]
  hero: {
    role: string
    name: string
    description: string
    ctaGithub: string
    ctaContact: string
    githubUrl: string
  }
  works: {
    heading: string
    items: WorkItem[]
  }
  skills: {
    heading: string
    categories: SkillCategory[]
  }
  timeline: {
    heading: string
    items: TimelineEntry[]
  }
  contact: {
    heading: string
    body: string
    button: string
    formUrl: string
  }
  footer: {
    name: string
    role: string
    bio: string
    linksHeading: string
    /** {year} は表示時に現在の年へ置換される */
    copyright: string
    links: FooterLink[]
  }
}
