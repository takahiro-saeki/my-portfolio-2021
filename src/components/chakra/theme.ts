// Terminal / Dev デザインのデザイントークン（単一テーマ）。
// 純黒寄りの背景＋若草グリーンの単色アクセント＋モノ書体。虹色グラデ・グロー（発光）は使わない。

export const theme = {
  // 配色
  bg: '#0A0A0B',
  surface: '#101012',
  surfaceHover: '#16161A',
  border: 'rgba(255, 255, 255, 0.10)',
  borderStrong: 'rgba(255, 255, 255, 0.18)',
  text: '#E6E6E6',
  textSecondary: '#7A7A7A',
  accent: '#7CFF6B',
  accentSoft: 'rgba(124, 255, 107, 0.10)',

  // 書体（layout.tsx で next/font が公開する CSS 変数を参照）
  fontDisplay: 'var(--font-mono), monospace',
  fontBody: 'var(--font-jp), var(--font-display), sans-serif',
  fontMono: 'var(--font-mono), monospace',

  // 形状
  radius: '4px',

  // 質感（極薄グリッド）
  gridLines:
    'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
  gridSize: '48px 48px',
} as const

export type Theme = typeof theme
