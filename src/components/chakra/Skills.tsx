'use client'

import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { theme } from './theme'
import { useReveal } from './useReveal'
import SectionLabel from './SectionLabel'
import { getContent } from '@/content'
import skillData from '@/data/skillData'

const MotionBox = motion.create(Box)

function SkillBar({ name, score, index }: { name: string; score: number; index: number }) {
  return (
    <Box mb={3}>
      <Flex justify="space-between" align="center" mb={1.5}>
        <Text fontFamily={theme.fontMono} fontSize="xs" color={theme.text}>
          {name}
        </Text>
        <Text fontFamily={theme.fontMono} fontSize="xs" color={theme.textSecondary}>
          {score}
        </Text>
      </Flex>
      <Box h="2px" position="relative" style={{ backgroundColor: theme.border }}>
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          h="2px"
          style={{ backgroundColor: theme.accent }}
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.04, ease: 'easeOut' }}
        />
      </Box>
    </Box>
  )
}

export default function Skills() {
  const { skills } = getContent()
  const reveal = useReveal()

  return (
    <Box as="section" id="skills" py={{ base: 16, md: 24 }} px={{ base: 6, md: 10 }}>
      <Box maxW="1080px" mx="auto">
        <SectionLabel>{skills.heading}</SectionLabel>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {skills.categories.map((category, categoryIndex) => (
            <MotionBox key={category.key} {...reveal(categoryIndex)}>
              <Box
                p={6}
                h="100%"
                style={{
                  backgroundColor: theme.surface,
                  border: `1px solid ${theme.border}`,
                  borderRadius: theme.radius,
                }}
              >
                <Flex align="center" gap={2} mb={5}>
                  <Box w="6px" h="6px" style={{ backgroundColor: theme.accent }} />
                  <Text fontFamily={theme.fontDisplay} fontSize="md" fontWeight="600" color={theme.text}>
                    {category.title}
                  </Text>
                </Flex>

                {skillData[category.key]?.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} name={skill.name} score={skill.score} index={skillIndex} />
                ))}

                <Text fontSize="xs" color={theme.textSecondary} mt={4} lineHeight="1.8">
                  {category.note}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
