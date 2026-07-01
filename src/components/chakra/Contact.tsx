'use client'

import { Box, Text, Link as ChakraLink } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { theme } from './theme'
import { useReveal } from './useReveal'
import SectionLabel from './SectionLabel'
import { getContent } from '@/content'

const MotionBox = motion.create(Box)

export default function Contact() {
  const { contact } = getContent()
  const reveal = useReveal()

  return (
    <Box as="section" id="contact" py={{ base: 16, md: 24 }} px={{ base: 6, md: 10 }}>
      <Box maxW="1080px" mx="auto">
        <SectionLabel>{contact.heading}</SectionLabel>

        <MotionBox {...reveal(0)}>
          <Box
            p={{ base: 8, md: 12 }}
            style={{
              backgroundColor: theme.surface,
              border: `1px solid ${theme.border}`,
              borderRadius: theme.radius,
            }}
          >
            <Text fontFamily={theme.fontDisplay} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color={theme.text} letterSpacing="-0.01em">
              Let&apos;s talk.
            </Text>
            <Text mt={4} maxW="48ch" fontSize="sm" color={theme.textSecondary} lineHeight="1.9">
              {contact.body}
            </Text>
            <ChakraLink
              href={contact.formUrl}
              target="_blank"
              display="inline-flex"
              alignItems="center"
              gap={2}
              mt={8}
              px={6}
              py={3}
              fontSize="sm"
              fontFamily={theme.fontMono}
              color={theme.bg}
              style={{ backgroundColor: theme.accent, borderRadius: theme.radius }}
              transition="opacity 0.2s"
              _hover={{ opacity: 0.85, textDecoration: 'none' }}
            >
              {contact.button} <FaArrowRight size={11} />
            </ChakraLink>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  )
}
