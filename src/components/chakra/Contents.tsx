'use client'

import { Box, Flex, Text, SimpleGrid, Image, Link as ChakraLink } from '@chakra-ui/react'
import { motion } from 'motion/react'
import { FaArrowRight } from 'react-icons/fa'
import { theme } from './theme'
import { useReveal } from './useReveal'
import SectionLabel from './SectionLabel'
import { useContent } from './LocaleContext'

const MotionBox = motion.create(Box)

export default function Contents() {
  const { works } = useContent()
  const reveal = useReveal()

  return (
    <Box as="section" id="contents" py={{ base: 16, md: 24 }} px={{ base: 6, md: 10 }}>
      <Box maxW="1080px" mx="auto">
        <SectionLabel>{works.heading}</SectionLabel>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {works.items.map((work, index) => (
            <MotionBox key={work.title} {...reveal(index)}>
              <Box
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
                    <Image src={work.image} alt={work.title} w="100%" h="100%" objectFit="contain" p={4} />
                  </Box>
                )}
                <Box p={6}>
                  <Flex justify="space-between" align="baseline" mb={3} gap={4}>
                    <Text fontFamily={theme.fontDisplay} fontSize="lg" fontWeight="600" color={theme.text}>
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
                            fontSize="sm"
                            fontFamily={theme.fontMono}
                            color={theme.accent}
                            _hover={{ opacity: 0.8, textDecoration: 'none' }}
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
