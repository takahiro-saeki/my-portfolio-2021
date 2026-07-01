'use client'

import { Box, Flex, Text, Image, Link as ChakraLink } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { theme } from './theme'
import { useReveal } from './useReveal'
import { getContent } from '@/content'

const MotionBox = motion.create(Box)

export default function Hero() {
  const { hero } = getContent()
  const reveal = useReveal()
  const nameLines = hero.name.split(' ')

  return (
    <Box as="section" minH="calc(100vh - 61px)" display="flex" alignItems="center">
      <Box w="100%" maxW="1080px" mx="auto" px={{ base: 6, md: 10 }} py={{ base: 16, md: 20 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 10, md: 12 }}
          align={{ base: 'flex-start', md: 'center' }}
        >
          <MotionBox {...reveal(0)} flex="1">
            <Text fontFamily={theme.fontMono} fontSize="sm" color={theme.accent} mb={5} letterSpacing="0.06em">
              {hero.role}
            </Text>

            <Box>
              {nameLines.map((line, i) => (
                <Text
                  key={i}
                  as="span"
                  display="block"
                  fontFamily={theme.fontDisplay}
                  fontWeight="700"
                  fontSize={{ base: '4xl', md: '6xl' }}
                  lineHeight="1.02"
                  letterSpacing="-0.02em"
                  color={theme.text}
                >
                  {line}
                </Text>
              ))}
            </Box>

            <Text mt={6} maxW="42ch" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.9" color={theme.textSecondary}>
              {hero.description}
            </Text>

            <Flex gap={4} mt={9} flexWrap="wrap">
              <ChakraLink
                href={hero.githubUrl}
                target="_blank"
                display="inline-flex"
                alignItems="center"
                gap={2}
                px={5}
                py={3}
                fontSize="sm"
                fontFamily={theme.fontMono}
                color={theme.bg}
                style={{ backgroundColor: theme.accent, borderRadius: theme.radius }}
                transition="opacity 0.2s"
                _hover={{ opacity: 0.85, textDecoration: 'none' }}
              >
                <FaGithub size={16} />
                {hero.ctaGithub}
              </ChakraLink>
              <ChakraLink
                href="#contact"
                display="inline-flex"
                alignItems="center"
                gap={2}
                px={5}
                py={3}
                fontSize="sm"
                fontFamily={theme.fontMono}
                color={theme.text}
                style={{ border: `1px solid ${theme.border}`, borderRadius: theme.radius }}
                transition="border-color 0.2s"
                _hover={{ borderColor: theme.accent, textDecoration: 'none' }}
              >
                {hero.ctaContact}
              </ChakraLink>
            </Flex>
          </MotionBox>

          <MotionBox {...reveal(2)}>
            <Box
              w={{ base: '128px', md: '188px' }}
              h={{ base: '128px', md: '188px' }}
              overflow="hidden"
              position="relative"
              style={{ borderRadius: theme.radius, border: `1px solid ${theme.border}` }}
            >
              <Image
                src="/images/hiro.jpeg"
                alt={hero.name}
                w="100%"
                h="100%"
                objectFit="cover"
                style={{ filter: 'grayscale(0.12) contrast(1.02)' }}
              />
            </Box>
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  )
}
