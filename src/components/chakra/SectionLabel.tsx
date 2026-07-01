'use client'

import { Text } from '@chakra-ui/react'
import { theme } from './theme'

// Terminal 風のセクション見出しラベル（例: // works）
export default function SectionLabel({ children }: { children: string }) {
  return (
    <Text
      as="h2"
      fontFamily={theme.fontMono}
      fontSize="sm"
      color={theme.accent}
      letterSpacing="0.02em"
      mb={10}
    >
      {`// ${children.toLowerCase()}`}
    </Text>
  )
}
