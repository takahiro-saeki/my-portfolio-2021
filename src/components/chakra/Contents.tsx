'use client'

import { Box, VStack, Text, SimpleGrid, Image, Link as ChakraLink } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { ThemeMode, getTheme } from './theme'

const MotionBox = motion.create(Box)

interface ContentsProps {
  mode: ThemeMode
}

const contents = [
  {
    title: 'ポートフォリオサイト',
    description: '私、三枝木貴浩のポートフォリオサイト',
    image: '/images/ts.png',
    link: null,
  },
  {
    title: 'もふもふパラダイス',
    description: 'もふもふパラダイスの公式サイトです。',
    image: '/images/mohupara.png',
    link: '/mohupara',
  },
]

export default function Contents({ mode }: ContentsProps) {
  const theme = getTheme(mode)

  return (
    <Box id="contents" py={20} px={6}>
      <VStack gap={12} maxW="1200px" mx="auto">
        <Text
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          color={theme.text}
          bgGradient={theme.accentGradient}
          bgClip="text"
        >
          Contents
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="100%">
          {contents.map((content, index) => (
            <MotionBox
              key={content.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                borderRadius="xl"
                overflow="hidden"
                transition="all 0.3s ease"
                style={{
                  background: theme.cardBg,
                  border: theme.cardBorder,
                  backdropFilter: mode === 'glass' ? 'blur(10px)' : 'none',
                  boxShadow: theme.shadow,
                }}
                _hover={{
                  transform: 'translateY(-8px)',
                }}
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  <Image
                    src={content.image}
                    alt={content.title}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
                <Box p={6}>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color={theme.text}
                    mb={2}
                  >
                    {content.title}
                  </Text>
                  <Text color={theme.textSecondary} fontSize="sm" mb={4}>
                    {content.description}
                  </Text>
                  {content.link && (
                    <ChakraLink
                      href={content.link}
                      display="inline-flex"
                      alignItems="center"
                      gap={2}
                      color={theme.accent}
                      fontSize="sm"
                      fontWeight="medium"
                      _hover={{ opacity: 0.8 }}
                    >
                      サイトを見る <FaExternalLinkAlt size={12} />
                    </ChakraLink>
                  )}
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}
