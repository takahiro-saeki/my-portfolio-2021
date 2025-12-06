'use client'

import { Box, VStack, Text, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaPlane, FaBaby } from 'react-icons/fa'
import { ThemeMode, getTheme } from './theme'
import textData from '@/data/text'

const MotionBox = motion.create(Box)

interface TimelineProps {
  mode: ThemeMode
}

const getIcon = (title: string) => {
  if (title.includes('生を受ける')) return FaBaby
  if (title.includes('留学')) return FaPlane
  if (title.includes('フリーランス')) return FaGraduationCap
  return FaBriefcase
}

export default function Timeline({ mode }: TimelineProps) {
  const theme = getTheme(mode)

  return (
    <Box id="timeline" py={20} px={6}>
      <VStack gap={12} maxW="900px" mx="auto">
        <Text
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          color={theme.text}
          bgGradient={theme.accentGradient}
          bgClip="text"
        >
          Timeline
        </Text>

        <Box position="relative" w="100%">
          {/* Center line */}
          <Box
            position="absolute"
            left={{ base: '20px', md: '50%' }}
            transform={{ base: 'none', md: 'translateX(-50%)' }}
            w="2px"
            h="100%"
            style={{
              background: mode === 'dark'
                ? 'linear-gradient(180deg, rgba(0, 212, 255, 0.5) 0%, rgba(124, 58, 237, 0.5) 100%)'
                : 'rgba(255, 255, 255, 0.3)',
            }}
          />

          <VStack gap={8} align="stretch">
            {textData.timeline.map((item, index) => {
              const Icon = getIcon(item.title)
              const isEven = index % 2 === 0

              return (
                <MotionBox
                  key={`${item.title}-${index}`}
                  initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Flex
                    direction={{ base: 'row', md: isEven ? 'row' : 'row-reverse' }}
                    align="flex-start"
                    gap={4}
                  >
                    {/* Icon */}
                    <Box
                      position="relative"
                      zIndex={1}
                      flexShrink={0}
                      display={{ base: 'flex', md: 'none' }}
                    >
                      <Box
                        w="40px"
                        h="40px"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color={theme.accent}
                        style={{
                          background: theme.cardBg,
                          border: theme.cardBorder,
                          backdropFilter: mode === 'glass' ? 'blur(10px)' : 'none',
                        }}
                      >
                        <Icon size={16} />
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box
                      flex={1}
                      ml={{ base: 0, md: isEven ? 0 : 'auto' }}
                      mr={{ base: 0, md: isEven ? 'auto' : 0 }}
                      maxW={{ base: '100%', md: 'calc(50% - 40px)' }}
                      textAlign={{ base: 'left', md: isEven ? 'right' : 'left' }}
                    >
                      <Box
                        borderRadius="xl"
                        p={5}
                        position="relative"
                        transition="all 0.3s ease"
                        style={{
                          background: theme.cardBg,
                          border: theme.cardBorder,
                          backdropFilter: mode === 'glass' ? 'blur(10px)' : 'none',
                          boxShadow: theme.shadow,
                        }}
                        _hover={{
                          transform: 'translateY(-4px)',
                        }}
                      >
                        <Text
                          fontSize="xs"
                          color={theme.accent}
                          fontWeight="bold"
                          mb={1}
                        >
                          {item.date}
                        </Text>
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color={theme.text}
                          mb={2}
                        >
                          {item.title}
                        </Text>
                        <Text
                          fontSize="sm"
                          color={theme.textSecondary}
                          lineHeight="tall"
                        >
                          {item.desc}
                        </Text>
                      </Box>
                    </Box>

                    {/* Desktop Icon */}
                    <Box
                      position="absolute"
                      left="50%"
                      transform="translateX(-50%)"
                      zIndex={1}
                      display={{ base: 'none', md: 'flex' }}
                    >
                      <Box
                        w="50px"
                        h="50px"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color={theme.accent}
                        style={{
                          background: theme.cardBg,
                          border: theme.cardBorder,
                          backdropFilter: mode === 'glass' ? 'blur(10px)' : 'none',
                          boxShadow: theme.shadow,
                        }}
                      >
                        <Icon size={20} />
                      </Box>
                    </Box>
                  </Flex>
                </MotionBox>
              )
            })}
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}
