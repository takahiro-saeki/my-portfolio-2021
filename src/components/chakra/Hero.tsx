'use client'

import { Box, Flex, Text, Image, Link as ChakraLink } from '@chakra-ui/react'
import { motion } from 'motion/react'
import { FaGithub } from 'react-icons/fa'
import { GlyphRain } from '@/components/canvasui/GlyphRain'
import { theme } from './theme'
import { useReveal } from './useReveal'
import { useContent } from './LocaleContext'

const MotionBox = motion.create(Box)
const CYBER_GLYPH_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function Hero() {
  const { hero } = useContent()
  const reveal = useReveal()
  const nameLines = hero.name.split(' ')

  return (
    <GlyphRain
      charset={CYBER_GLYPH_CHARSET}
      cell={17}
      color={[0.24, 0.62, 0.22]}
      headColor={[0.49, 1, 0.42]}
      speed={0.12}
      speedVariance={0.35}
      density={0.055}
      trail={0.42}
      glow={0.65}
      mutate={0.15}
      flicker={0.08}
      layers={1}
      dim={0.04}
      light={0.8}
      lightRadius={180}
      relief={0.02}
      stir={0.3}
      stirRadius={210}
      style={{ minHeight: 'calc(100dvh - 61px)' }}
    >
      <Box
        as="section"
        minH="calc(100dvh - 61px)"
        display="flex"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Box w="100%" maxW="1120px" mx="auto" px={{ base: 6, md: 10 }} py={{ base: 20, md: 16 }}>
          <Flex
            direction={{ base: 'column-reverse', md: 'row' }}
            gap={{ base: 20, md: 16 }}
            align="center"
            justify="space-between"
          >
            <MotionBox {...reveal(0)} flex="1" maxW="680px" alignSelf={{ base: 'stretch', md: 'center' }}>
              <Flex align="center" gap={3} mb={6}>
                <Box w="28px" h="1px" flexShrink={0} style={{ backgroundColor: theme.accent }} />
                <Text
                  fontFamily={theme.fontMono}
                  fontSize="xs"
                  color={theme.accent}
                  letterSpacing="0.12em"
                >
                  {hero.role.toUpperCase()} / {hero.availability.toUpperCase()}
                </Text>
              </Flex>

              <Box as="h1">
                {nameLines.map((line, i) => (
                  <Text
                    key={line}
                    as="span"
                    display="block"
                    fontFamily={theme.fontDisplay}
                    fontWeight="700"
                    fontSize={{ base: '4xl', md: '6xl' }}
                    lineHeight="1.02"
                    letterSpacing="-0.03em"
                    color={i === nameLines.length - 1 ? theme.accent : theme.text}
                  >
                    {line}
                  </Text>
                ))}
              </Box>

              <Text mt={6} maxW="46ch" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.9" color={theme.textSecondary}>
                {hero.description}
              </Text>

              <Flex gap={3} mt={9} flexWrap="wrap">
                <ChakraLink
                  href={hero.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  minH="44px"
                  px={5}
                  fontSize="sm"
                  fontFamily={theme.fontMono}
                  color={theme.bg}
                  style={{ backgroundColor: theme.accent, borderRadius: theme.radius }}
                  transition="opacity 0.2s"
                  _hover={{ opacity: 0.85, textDecoration: 'none' }}
                  _focusVisible={{ outline: `2px solid ${theme.accent}`, outlineOffset: '2px' }}
                >
                  <FaGithub size={16} />
                  {hero.ctaGithub}
                </ChakraLink>
                <ChakraLink
                  href="#contact"
                  display="inline-flex"
                  alignItems="center"
                  minH="44px"
                  px={5}
                  fontSize="sm"
                  fontFamily={theme.fontMono}
                  color={theme.text}
                  style={{ border: `1px solid ${theme.borderStrong}`, borderRadius: theme.radius }}
                  transition="border-color 0.2s"
                  _hover={{ borderColor: theme.accent, textDecoration: 'none' }}
                  _focusVisible={{ outline: `2px solid ${theme.accent}`, outlineOffset: '2px' }}
                >
                  {hero.ctaContact}
                </ChakraLink>
              </Flex>
            </MotionBox>

            <MotionBox
              {...reveal(2)}
              position="relative"
              w={{ base: '190px', md: '310px' }}
              h={{ base: '190px', md: '310px' }}
              flexShrink={0}
            >
              <Box
                position="absolute"
                inset={{ base: '-12px', md: '-18px' }}
                aria-hidden="true"
                style={{
                  border: `1px solid ${theme.border}`,
                  backgroundImage: theme.gridLines,
                  backgroundSize: '24px 24px',
                }}
              />

              <Text
                position="absolute"
                top="-30px"
                right="-18px"
                zIndex={1}
                px={2}
                py={1}
                fontFamily={theme.fontMono}
                fontSize="10px"
                color={theme.accent}
                style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
              >
                {hero.canvasLabel.toUpperCase()}
              </Text>

              <Box
                w="100%"
                h="100%"
                overflow="hidden"
                position="relative"
                style={{ borderRadius: theme.radius, border: `1px solid ${theme.borderStrong}` }}
              >
                <Image
                  src="/images/hiro.jpeg"
                  alt={hero.name}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  style={{ filter: 'grayscale(0.35) contrast(1.08)' }}
                />
              </Box>

              <Flex
                position="absolute"
                left="-18px"
                bottom="-32px"
                gap={2}
                align="center"
                color={theme.textSecondary}
                fontFamily={theme.fontMono}
                fontSize="10px"
              >
                <Box w="5px" h="5px" borderRadius="full" style={{ backgroundColor: theme.accent }} />
                {hero.identityLabel.toUpperCase()}
              </Flex>
            </MotionBox>
          </Flex>
        </Box>

        <Text
          display={{ base: 'none', sm: 'block' }}
          position="absolute"
          right={{ base: 4, md: 8 }}
          bottom={5}
          color="rgba(255,255,255,.16)"
          fontFamily={theme.fontMono}
          fontSize="10px"
          letterSpacing="0.1em"
          aria-hidden="true"
        >
          {hero.signalHint.toUpperCase()}
        </Text>
      </Box>
    </GlyphRain>
  )
}
