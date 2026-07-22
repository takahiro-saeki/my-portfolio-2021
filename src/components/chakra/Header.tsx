'use client'

import { useState } from 'react'
import { Box, Flex, Text, Link as ChakraLink, HStack, VStack } from '@chakra-ui/react'
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'motion/react'
import { theme } from './theme'
import { useContent, useLocale } from './LocaleContext'
import { locales } from '@/content'

const MotionBox = motion.create(Box)

function LocaleToggle() {
  const { locale, setLocale } = useLocale()
  return (
    <HStack gap={0} style={{ border: `1px solid ${theme.border}`, borderRadius: '4px' }} overflow="hidden">
      {locales.map((l) => {
        const active = l === locale
        return (
          <Box
            as="button"
            key={l}
            onClick={() => setLocale(l)}
            px={2.5}
            py={1}
            fontSize="xs"
            fontFamily={theme.fontMono}
            cursor="pointer"
            aria-pressed={active}
            aria-label={`Switch to ${l.toUpperCase()}`}
            color={active ? theme.bg : theme.textSecondary}
            style={{ backgroundColor: active ? theme.accent : 'transparent' }}
            transition="color 0.2s, background-color 0.2s"
            _hover={active ? undefined : { color: theme.accent }}
          >
            {l.toUpperCase()}
          </Box>
        )
      })}
    </HStack>
  )
}

export default function Header() {
  const content = useContent()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        style={{
          backgroundColor: 'rgba(10, 10, 11, 0.82)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <Flex maxW="1080px" mx="auto" px={{ base: 5, md: 10 }} py={3} align="center" justify="space-between">
          <ChakraLink href="/" _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize="sm"
              fontWeight="600"
              color={theme.text}
              fontFamily={theme.fontMono}
              letterSpacing="0.08em"
              _hover={{ color: theme.accent }}
              transition="color 0.2s"
            >
              SAEKI<Box as="span" color={theme.accent}>.TS</Box>
            </Text>
          </ChakraLink>

          <HStack gap={7} display={{ base: 'none', md: 'flex' }}>
            {content.nav.map((item) => (
              <ChakraLink
                key={item.label}
                href={item.href}
                color={theme.textSecondary}
                fontSize="xs"
                fontFamily={theme.fontMono}
                letterSpacing="0.06em"
                _hover={{ color: theme.accent, textDecoration: 'none' }}
                transition="color 0.2s"
              >
                {item.label.toUpperCase()}
              </ChakraLink>
            ))}
          </HStack>

          <HStack gap={4}>
            <LocaleToggle />

            <ChakraLink
              href={content.hero.githubUrl}
              target="_blank"
              color={theme.textSecondary}
              _hover={{ color: theme.accent }}
              transition="color 0.2s"
              display={{ base: 'none', md: 'flex' }}
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </ChakraLink>

            <Box
              display={{ base: 'flex', md: 'none' }}
              as="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              color={theme.text}
              _hover={{ color: theme.accent }}
              transition="color 0.2s"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </Box>
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MotionBox
            position="fixed"
            top="49px"
            left={0}
            right={0}
            bottom={0}
            zIndex={99}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            display={{ base: 'block', md: 'none' }}
            style={{ backgroundColor: 'rgba(10, 10, 11, 0.97)', backdropFilter: 'blur(16px)' }}
          >
            <VStack gap={0} py={2}>
              {content.nav.map((item, index) => (
                <MotionBox
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  w="100%"
                >
                  <ChakraLink
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    display="flex"
                    alignItems="center"
                    gap={3}
                    py={4}
                    px={6}
                    color={theme.text}
                    fontSize="md"
                    fontFamily={theme.fontMono}
                    _hover={{ color: theme.accent, background: theme.accentSoft, textDecoration: 'none' }}
                    transition="all 0.2s"
                    style={{ borderBottom: `1px solid ${theme.border}` }}
                  >
                    <Box as="span" color={theme.accent} fontSize="xs">
                      0{index + 1}
                    </Box>
                    {item.label}
                  </ChakraLink>
                </MotionBox>
              ))}
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  )
}
