'use client'

import { Box, VStack, Text, HStack, Link as ChakraLink, Image, SimpleGrid } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { SiQiita, SiDevdotto } from 'react-icons/si'
import type { ThemeMode} from './theme';
import { getTheme } from './theme'

interface FooterProps {
  mode: ThemeMode
}

const externalLinks = [
  { label: 'もふパラ', url: 'http://takahiro-saeki.github.io/new-book/template/' },
  { label: 'GitHub', url: 'https://github.com/takahiro-saeki', icon: FaGithub },
  { label: 'dev.to', url: 'https://dev.to/hirodeath', icon: SiDevdotto },
  { label: 'Qiita', url: 'https://qiita.com/hiro123', icon: SiQiita },
]

export default function Footer({ mode }: FooterProps) {
  const theme = getTheme(mode)
  const currentYear = new Date().getFullYear()

  return (
    <Box
      as="footer"
      py={16}
      px={{ base: 6, md: 12 }}
      borderTop={theme.cardBorder}
    >
      <VStack gap={12} maxW="1200px" mx="auto" px={{ base: 0, md: 6 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} w="100%">
          {/* Profile Section */}
          <VStack align={{ base: 'center', md: 'flex-start' }} gap={4}>
            <HStack gap={4}>
              <Box
                borderRadius="full"
                overflow="hidden"
                w="60px"
                h="60px"
                border="2px solid"
                borderColor={theme.accent}
              >
                <Image
                  src="/images/hiro.jpeg"
                  alt="Takahiro Saeki"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
              <VStack align="flex-start" gap={0}>
                <Text fontWeight="bold" color={theme.text}>
                  ヒロ
                </Text>
                <Text fontSize="sm" color={theme.textSecondary}>
                  Frontend Developer
                </Text>
              </VStack>
            </HStack>
            <Text
              fontSize="sm"
              color={theme.textSecondary}
              textAlign={{ base: 'center', md: 'left' }}
              maxW="400px"
              lineHeight="tall"
            >
              三枝木貴浩、フロントエンドエンジニアを本業としている。
              自分がこれだと確信した事に突っ走る性格。
              趣味は音楽ゲームと運動、読書。猫が大好きです。
            </Text>
          </VStack>

          {/* Links Section */}
          <VStack align={{ base: 'center', md: 'flex-end' }} gap={4}>
            <Text fontWeight="bold" color={theme.text}>
              External Links
            </Text>
            <HStack gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'flex-end' }}>
              {externalLinks.map((link) => (
                <ChakraLink
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  color={theme.textSecondary}
                  fontSize="sm"
                  _hover={{ color: theme.accent }}
                  transition="color 0.2s"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  {link.icon && <link.icon />}
                  {link.label}
                </ChakraLink>
              ))}
            </HStack>
          </VStack>
        </SimpleGrid>

        {/* Copyright */}
        <Box
          pt={8}
          borderTop={theme.cardBorder}
          w="100%"
          textAlign="center"
        >
          <Text fontSize="sm" color={theme.textSecondary}>
            © 2015-{currentYear} Takahiro Saeki
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}
