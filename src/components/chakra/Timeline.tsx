'use client'

import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { theme } from './theme'
import { useReveal } from './useReveal'
import SectionLabel from './SectionLabel'
import { getContent } from '@/content'

const MotionBox = motion.create(Box)

export default function Timeline() {
  const { timeline } = getContent()
  const reveal = useReveal()

  return (
    <Box as="section" id="timeline" py={{ base: 16, md: 24 }} px={{ base: 6, md: 10 }}>
      <Box maxW="1080px" mx="auto">
        <SectionLabel>{timeline.heading}</SectionLabel>

        <Box style={{ borderLeft: `1px solid ${theme.border}` }} pl={{ base: 7, md: 9 }} maxW="760px">
          {timeline.items.map((item, index) => (
            <MotionBox
              key={`${item.title}-${item.date}`}
              {...reveal(index)}
              position="relative"
              pb={index === timeline.items.length - 1 ? 0 : { base: 9, md: 11 }}
            >
              {/* ノード */}
              <Box
                position="absolute"
                left={{ base: '-29px', md: '-37px' }}
                top="5px"
                w="9px"
                h="9px"
                style={{
                  backgroundColor: theme.bg,
                  border: `1.5px solid ${theme.accent}`,
                  borderRadius: '50%',
                }}
              />
              <Text fontFamily={theme.fontMono} fontSize="xs" color={theme.accent} mb={1.5}>
                {item.date}
              </Text>
              <Text fontFamily={theme.fontDisplay} fontSize="md" fontWeight="600" color={theme.text} mb={1.5}>
                {item.title}
              </Text>
              <Text fontSize="sm" color={theme.textSecondary} lineHeight="1.85">
                {item.desc}
              </Text>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
