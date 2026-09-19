'use client'

import { useState } from 'react'
import { Box, Button, Flex, Text, SimpleGrid, Image, Link as ChakraLink } from '@chakra-ui/react'
import { motion } from 'motion/react'
import { FaArrowRight } from 'react-icons/fa'
import { theme } from './theme'
import { useReveal } from './useReveal'
import SectionLabel from './SectionLabel'
import { useContent } from './LocaleContext'
import type { WorkItem } from '@/content/types'

const MotionBox = motion.create(Box)

export default function Contents() {
  const { works } = useContent()
  const reveal = useReveal()
  const [category, setCategory] = useState<'all' | WorkItem['category']>('all')
  const visibleWorks = works.items.filter((work) => category === 'all' || work.category === category)

  return (
    <Box as="section" id="contents" py={{ base: 16, md: 24 }} px={{ base: 6, md: 10 }}>
      <Box maxW="1080px" mx="auto">
        <SectionLabel>{works.heading}</SectionLabel>

        <Flex role="group" aria-label={works.filterLabel} gap={2} flexWrap="wrap" mb={4}>
          {works.filters.map((filter) => (
            <Button
              key={filter.value}
              type="button"
              aria-pressed={category === filter.value}
              aria-controls="works-grid"
              onClick={() => setCategory(filter.value)}
              minH="44px"
              px={4}
              borderRadius={theme.radius}
              border="1px solid"
              borderColor={category === filter.value ? theme.accent : theme.borderStrong}
              bg={category === filter.value ? theme.accentSoft : theme.surface}
              color={category === filter.value ? theme.accent : theme.text}
              fontFamily={theme.fontMono}
              fontSize="sm"
              _hover={{ bg: theme.surfaceHover }}
              _focusVisible={{ outline: `2px solid ${theme.accent}`, outlineOffset: '3px' }}
            >
              {filter.label}
            </Button>
          ))}
        </Flex>
        <Text aria-live="polite" aria-atomic="true" fontSize="sm" color={theme.textSecondary} mb={6}>
          {works.resultLabel.replace('{count}', String(visibleWorks.length))}
        </Text>

        <SimpleGrid id="works-grid" columns={{ base: 1, md: 2 }} gap={6}>
          {visibleWorks.map((work, index) => (
            <MotionBox key={work.title} {...reveal(index)}>
              <Box
                as="article"
                h="100%"
                overflow="hidden"
                style={{
                  backgroundColor: theme.surface,
                  border: `1px solid ${theme.border}`,
                  borderRadius: theme.radius,
                }}
                transition="border-color 0.25s, transform 0.25s"
                _hover={{ borderColor: theme.accent, transform: 'translateY(-4px)' }}
              >
                {work.image && (
                  <Box style={{ aspectRatio: '16 / 9', borderBottom: `1px solid ${theme.border}` }}>
                    <Image src={work.image} alt={work.title} loading="lazy" w="100%" h="100%" objectFit="contain" p={4} />
                  </Box>
                )}
                <Box p={6}>
                  {work.status && (
                    <Text display="inline-block" px={2} py={1} mb={3} fontSize="xs" color={theme.accent} bg={theme.accentSoft} borderRadius={theme.radius}>
                      {work.status}
                    </Text>
                  )}
                  <Flex justify="space-between" align="baseline" mb={3} gap={4}>
                    <Text as="h3" fontFamily={theme.fontDisplay} fontSize="lg" fontWeight="600" color={theme.text}>
                      {work.title}
                    </Text>
                    <Text fontFamily={theme.fontMono} fontSize="xs" color={theme.textSecondary} flexShrink={0}>
                      {String(index + 1).padStart(2, '0')}
                    </Text>
                  </Flex>
                  <Text fontSize="sm" color={theme.textSecondary} lineHeight="1.8" mb={4}>
                    {work.description}
                  </Text>
                  <Flex justify="space-between" align="center" gap={4} flexWrap="wrap">
                    <Text fontFamily={theme.fontMono} fontSize="xs" color={theme.textSecondary}>
                      {work.tag}
                    </Text>
                    <Flex gap={4} flexWrap="wrap">
                      {work.links.map((link) => {
                        const isExternal = link.url.startsWith('http')
                        return (
                          <ChakraLink
                            key={link.url}
                            href={link.url}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            display="inline-flex"
                            alignItems="center"
                            gap={1.5}
                            minH="44px"
                            fontSize="sm"
                            fontFamily={theme.fontMono}
                            color={theme.accent}
                            _hover={{ opacity: 0.8, textDecoration: 'none' }}
                            _focusVisible={{ outline: `2px solid ${theme.accent}`, outlineOffset: '3px' }}
                          >
                            {link.label} <FaArrowRight size={11} />
                          </ChakraLink>
                        )
                      })}
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
