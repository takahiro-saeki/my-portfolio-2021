'use client'

import { useState } from 'react'
import { Box, Flex, Text, Link as ChakraLink, HStack, VStack } from '@chakra-ui/react'
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeMode, getTheme } from './theme'

const MotionBox = motion.create(Box)

interface HeaderProps {
  mode: ThemeMode
}

const navItems = [
  { label: 'Contents', href: '#contents' },
  { label: 'Skills', href: '#skills' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ mode }: HeaderProps) {
  const theme = getTheme(mode)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        transition="all 0.3s ease"
        style={{
          background: theme.headerBg,
          backdropFilter: mode === 'glass' ? 'blur(10px)' : 'none',
          borderBottom: theme.cardBorder,
        }}
      >
        <Flex
          maxW="1200px"
          mx="auto"
          px={6}
          py={3}
          align="center"
          justify="space-between"
        >
          <ChakraLink href="/" _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={theme.text}
              bgGradient={theme.accentGradient}
              bgClip="text"
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            >
              TAKAHIRO SAEKI
            </Text>
          </ChakraLink>

          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <ChakraLink
                key={item.label}
                href={item.href}
                color={theme.textSecondary}
                fontSize="sm"
                fontWeight="medium"
                _hover={{ color: theme.accent }}
                transition="color 0.2s"
              >
                {item.label}
              </ChakraLink>
            ))}
          </HStack>

          <HStack gap={4}>
            <ChakraLink
              href="https://github.com/takahiro-saeki"
              target="_blank"
              color={theme.text}
              _hover={{ color: theme.accent }}
              transition="color 0.2s"
            >
              <FaGithub size={24} />
            </ChakraLink>

            {/* Mobile Menu Button */}
            <Box
              display={{ base: 'flex', md: 'none' }}
              as="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              color={theme.text}
              _hover={{ color: theme.accent }}
              transition="color 0.2s"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </Box>
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <MotionBox
            position="fixed"
            top="64px"
            left={0}
            right={0}
            bottom={0}
            zIndex={99}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            display={{ base: 'block', md: 'none' }}
            style={{
              background: theme.headerBg,
              backdropFilter: 'blur(20px)',
            }}
          >
            <VStack gap={0} py={4}>
              {navItems.map((item, index) => (
                <MotionBox
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  w="100%"
                >
                  <ChakraLink
                    href={item.href}
                    onClick={handleNavClick}
                    display="block"
                    py={4}
                    px={6}
                    color={theme.text}
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{
                      color: theme.accent,
                      background: mode === 'dark' ? 'rgba(0, 212, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                    }}
                    transition="all 0.2s"
                    style={{
                      borderBottom: theme.cardBorder,
                    }}
                  >
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
