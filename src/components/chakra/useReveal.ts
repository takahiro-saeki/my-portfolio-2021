'use client'

import { useReducedMotion } from 'framer-motion'

// スクロール時の控えめな出現アニメ。prefers-reduced-motion 有効時は無効化する。
export function useReveal() {
  const reduce = useReducedMotion()
  return (i = 0) =>
    reduce
      ? {}
      : {
          initial: { y: 16, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true, margin: '-40px' },
          transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as const },
        }
}
