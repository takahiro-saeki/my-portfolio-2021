'use client'

import { Box, VStack, Text, SimpleGrid, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { ThemeMode} from './theme';
import { getTheme } from './theme'
import skillData from '@/data/skillData'
import text from '@/data/text'

const MotionBox = motion.create(Box)

interface SkillsProps {
  mode: ThemeMode
}

interface ProgressBarProps {
  name: string
  score: number
  theme: ReturnType<typeof getTheme>
  mode: ThemeMode
  delay: number
}

function ProgressBar({ name, score, theme, mode, delay }: ProgressBarProps) {
  return (
    <Box mb={3}>
      <HStack justify="space-between" mb={1}>
        <Text fontSize="sm" color={theme.text} fontWeight="medium">
          {name}
        </Text>
        <Text fontSize="xs" color={theme.textSecondary}>
          {score}%
        </Text>
      </HStack>
      <Box
        h="8px"
        borderRadius="full"
        overflow="hidden"
        style={{ background: theme.progressBg }}
      >
        <MotionBox
          h="100%"
          borderRadius="full"
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            background: theme.progressFill,
            boxShadow: mode === 'dark' ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none',
          }}
        />
      </Box>
    </Box>
  )
}

export default function Skills({ mode }: SkillsProps) {
  const theme = getTheme(mode)

  return (
    <Box id="skills" py={20} px={6}>
      <VStack gap={12} maxW="1200px" mx="auto">
        <Text
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          color={theme.text}
          bgGradient={theme.accentGradient}
          bgClip="text"
        >
          Skills
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="100%">
          {text.skill.map((skillCategory, categoryIndex) => (
            <MotionBox
              key={skillCategory.key}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                borderRadius="xl"
                p={6}
                h="100%"
                style={{
                  background: theme.cardBg,
                  border: theme.cardBorder,
                  backdropFilter: mode === 'glass' ? 'blur(10px)' : 'none',
                  boxShadow: theme.shadow,
                }}
              >
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color={theme.accent}
                  mb={4}
                >
                  {skillCategory.title}
                </Text>

                {skillData[skillCategory.key]?.map((skill, skillIndex) => (
                  <ProgressBar
                    key={skill.name}
                    name={skill.name}
                    score={skill.score}
                    theme={theme}
                    mode={mode}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}

                <Text
                  fontSize="xs"
                  color={theme.textSecondary}
                  mt={4}
                  lineHeight="tall"
                >
                  {skillCategory.note}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}
