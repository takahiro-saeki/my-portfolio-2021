'use client'

import { Box } from '@chakra-ui/react'
import Header from '@/components/chakra/Header'
import Hero from '@/components/chakra/Hero'
import Contents from '@/components/chakra/Contents'
import Skills from '@/components/chakra/Skills'
import Timeline from '@/components/chakra/Timeline'
import Contact from '@/components/chakra/Contact'
import Footer from '@/components/chakra/Footer'
import { themeStyles } from '@/components/chakra/theme'

export default function Home() {
  const mode = 'dark'
  const theme = themeStyles[mode]

  return (
    <Box
      minH="100vh"
      color={theme.text}
      position="relative"
      style={{
        background: theme.bg,
      }}
    >
      {/* Animated background elements */}
      <Box
        position="fixed"
        top="20%"
        left="10%"
        w="300px"
        h="300px"
        borderRadius="full"
        pointerEvents="none"
        animation="float 8s ease-in-out infinite"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <Box
        position="fixed"
        bottom="20%"
        right="10%"
        w="400px"
        h="400px"
        borderRadius="full"
        pointerEvents="none"
        animation="float 10s ease-in-out infinite reverse"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <Header mode={mode} />

      <Box as="main" pt="64px">
        <Hero mode={mode} />
        <Contents mode={mode} />
        <Skills mode={mode} />
        <Timeline mode={mode} />
        <Contact mode={mode} />
      </Box>

      <Footer mode={mode} />

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </Box>
  )
}
