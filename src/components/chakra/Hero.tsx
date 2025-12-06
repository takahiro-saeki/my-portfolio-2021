'use client'

import { Box, VStack, Text, HStack, Image, Link as ChakraLink } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import type { ThemeMode} from './theme';
import { getTheme } from './theme'

const MotionBox = motion.create(Box)
const MotionText = motion.create(Text)

interface HeroProps {
  mode: ThemeMode
}

export default function Hero({ mode }: HeroProps) {
  const theme = getTheme(mode)

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        inset={0}
        style={{
          backgroundImage: 'url(/images/forest.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        style={{
          background: mode === 'dark'
            ? 'linear-gradient(135deg, rgba(15, 15, 35, 0.85) 0%, rgba(26, 26, 46, 0.9) 50%, rgba(22, 33, 62, 0.85) 100%)'
            : 'linear-gradient(135deg, rgba(102, 126, 234, 0.75) 0%, rgba(118, 75, 162, 0.8) 50%, rgba(240, 147, 251, 0.75) 100%)',
          backdropFilter: mode === 'glass' ? 'blur(8px)' : 'blur(2px)',
        }}
      />

      {/* Glow Effect */}
      {mode === 'dark' && (
        <Box
          position="absolute"
          inset={0}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
          }}
          pointerEvents="none"
        />
      )}

      <VStack gap={6} textAlign="center" zIndex={1}>
        <MotionBox
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            borderRadius="full"
            overflow="hidden"
            w="150px"
            h="150px"
            border="4px solid"
            borderColor={theme.accent}
            boxShadow={theme.shadow}
          >
            <Image
              src="/images/hiro.jpeg"
              alt="Takahiro Saeki"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </MotionBox>

        <MotionText
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="bold"
          color={theme.text}
          bgGradient={theme.accentGradient}
          bgClip="text"
        >
          Takahiro Saeki
        </MotionText>

        <MotionText
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          fontSize={{ base: 'lg', md: 'xl' }}
          color={theme.textSecondary}
          letterSpacing="wider"
        >
          Frontend Developer
        </MotionText>

        <MotionBox
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <HStack gap={4} mt={4} flexWrap="wrap" justify="center">
            <ChakraLink
              href="https://github.com/takahiro-saeki"
              target="_blank"
              fontSize="lg"
              fontWeight="medium"
              color={theme.text}
              px={6}
              py={3}
              borderRadius="md"
              display="inline-flex"
              alignItems="center"
              gap={2}
              _hover={{
                transform: 'translateY(-2px)',
                opacity: 0.9,
                textDecoration: 'none',
              }}
              transition="all 0.2s"
              style={{
                background: mode === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                border: theme.cardBorder,
                backdropFilter: mode === 'glass' ? 'blur(10px)' : 'none',
              }}
            >
              <FaGithub size={18} />
              <Text as="span">GitHub</Text>
            </ChakraLink>
            <ChakraLink
              href="#contact"
              fontSize="lg"
              fontWeight="medium"
              color={mode === 'dark' ? '#0f0f23' : '#ffffff'}
              px={6}
              py={3}
              borderRadius="md"
              display="inline-flex"
              alignItems="center"
              gap={2}
              _hover={{
                opacity: 0.9,
                transform: 'translateY(-2px)',
                textDecoration: 'none',
              }}
              transition="all 0.2s"
              style={{
                background: theme.accentGradient,
              }}
            >
              <FaEnvelope size={18} />
              <Text as="span">Contact</Text>
            </ChakraLink>
          </HStack>
        </MotionBox>
      </VStack>
    </Box>
  )
}
