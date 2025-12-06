'use client'

import { Box, VStack, Text, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import { ThemeMode, getTheme } from './theme'

const MotionBox = motion.create(Box)

interface ContactProps {
  mode: ThemeMode
}

export default function Contact({ mode }: ContactProps) {
  const theme = getTheme(mode)

  return (
    <Box id="contact" py={20} px={6}>
      <VStack gap={8} maxW="600px" mx="auto">
        <MotionBox
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          w="100%"
        >
          <Box
            borderRadius="2xl"
            p={10}
            textAlign="center"
            style={{
              background: theme.cardBg,
              border: theme.cardBorder,
              backdropFilter: mode === 'glass' ? 'blur(10px)' : 'none',
              boxShadow: theme.shadow,
            }}
          >
            <VStack gap={6}>
              <Box
                w="80px"
                h="80px"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={theme.accent}
                style={{
                  background: mode === 'dark' ? 'rgba(0, 212, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <FaEnvelope size={32} />
              </Box>

              <Text
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="bold"
                color={theme.text}
                bgGradient={theme.accentGradient}
                bgClip="text"
              >
                Contact
              </Text>

              <Text
                color={theme.textSecondary}
                fontSize="md"
                lineHeight="tall"
              >
                お問い合わせは下記Google Formからお願いします。
                <br />
                お仕事のご依頼やご質問など、お気軽にどうぞ。
              </Text>

              <ChakraLink
                href="https://forms.gle/wDGveE76AfxXXASz9"
                target="_blank"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                fontSize="lg"
                fontWeight="medium"
                color={mode === 'dark' ? '#0f0f23' : '#ffffff'}
                px={8}
                py={3}
                borderRadius="md"
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
                <HStack gap={2}>
                  <Text>Google Formを開く</Text>
                  <FaExternalLinkAlt size={14} />
                </HStack>
              </ChakraLink>
            </VStack>
          </Box>
        </MotionBox>
      </VStack>
    </Box>
  )
}
