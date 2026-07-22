'use client'

import { Box, Flex, Text, HStack, VStack, Link as ChakraLink, Image, SimpleGrid } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { FaGithub } from 'react-icons/fa'
import { SiQiita, SiDevdotto } from 'react-icons/si'
import { theme } from './theme'
import { useContent } from './LocaleContext'

const iconMap: Record<string, IconType> = {
  github: FaGithub,
  qiita: SiQiita,
  devto: SiDevdotto,
}

export default function Footer() {
  const { footer } = useContent()
  const currentYear = new Date().getFullYear()
  const copyright = footer.copyright.replace('{year}', String(currentYear))

  return (
    <Box as="footer" py={14} px={{ base: 6, md: 10 }} style={{ borderTop: `1px solid ${theme.border}` }}>
      <Box maxW="1080px" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          {/* Profile */}
          <VStack align="flex-start" gap={4}>
            <HStack gap={4}>
              <Box
                overflow="hidden"
                w="52px"
                h="52px"
                style={{ borderRadius: theme.radius, border: `1px solid ${theme.border}` }}
              >
                <Image src="/images/hiro.jpeg" alt={footer.name} w="100%" h="100%" objectFit="cover" />
              </Box>
              <VStack align="flex-start" gap={0}>
                <Text fontFamily={theme.fontDisplay} fontWeight="600" color={theme.text}>
                  {footer.name}
                </Text>
                <Text fontFamily={theme.fontMono} fontSize="xs" color={theme.textSecondary}>
                  {footer.role}
                </Text>
              </VStack>
            </HStack>
            <Text fontSize="sm" color={theme.textSecondary} maxW="400px" lineHeight="1.85">
              {footer.bio}
            </Text>
          </VStack>

          {/* Links */}
          <VStack align={{ base: 'flex-start', md: 'flex-end' }} gap={4}>
            <Text fontFamily={theme.fontMono} fontSize="xs" color={theme.textSecondary} letterSpacing="0.08em">
              {`// ${footer.linksHeading.toLowerCase()}`}
            </Text>
            <HStack gap={5} flexWrap="wrap" justify={{ base: 'flex-start', md: 'flex-end' }}>
              {footer.links.map((link) => {
                const Icon = link.icon ? iconMap[link.icon] : undefined
                return (
                  <ChakraLink
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    color={theme.textSecondary}
                    fontSize="sm"
                    fontFamily={theme.fontMono}
                    _hover={{ color: theme.accent, textDecoration: 'none' }}
                    transition="color 0.2s"
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                  >
                    {Icon && <Icon size={14} />}
                    {link.label}
                  </ChakraLink>
                )
              })}
            </HStack>
          </VStack>
        </SimpleGrid>

        <Flex pt={8} mt={10} style={{ borderTop: `1px solid ${theme.border}` }} align="center" flexWrap="wrap" gap={2}>
          <Text fontFamily={theme.fontMono} fontSize="xs" color={theme.textSecondary}>
            {copyright}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}
