'use client'

import { Box } from '@chakra-ui/react'
import Header from '@/components/chakra/Header'
import Hero from '@/components/chakra/Hero'
import Contents from '@/components/chakra/Contents'
import Skills from '@/components/chakra/Skills'
import Timeline from '@/components/chakra/Timeline'
import Contact from '@/components/chakra/Contact'
import Footer from '@/components/chakra/Footer'
import { theme } from '@/components/chakra/theme'

export default function Home() {
  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      style={{ backgroundColor: theme.bg, color: theme.text, fontFamily: theme.fontBody }}
    >
      {/* 極薄グリッドの質感（グロー/floatの代わり） */}
      <Box
        position="fixed"
        inset={0}
        zIndex={0}
        pointerEvents="none"
        style={{ backgroundImage: theme.gridLines, backgroundSize: theme.gridSize }}
      />

      <Box position="relative" zIndex={1}>
        <Header />

        <Box as="main" pt="61px">
          <Hero />
          <Contents />
          <Skills />
          <Timeline />
          <Contact />
        </Box>

        <Footer />
      </Box>
    </Box>
  )
}
