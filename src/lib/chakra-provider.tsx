'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e3f2fd' },
          100: { value: '#bbdefb' },
          200: { value: '#90caf9' },
          300: { value: '#64b5f6' },
          400: { value: '#42a5f5' },
          500: { value: '#2196f3' },
          600: { value: '#1e88e5' },
          700: { value: '#1976d2' },
          800: { value: '#1565c0' },
          900: { value: '#0d47a1' },
        },
        accent: {
          50: { value: '#fce4ec' },
          100: { value: '#f8bbd9' },
          200: { value: '#f48fb1' },
          300: { value: '#f06292' },
          400: { value: '#ec407a' },
          500: { value: '#e91e63' },
          600: { value: '#d81b60' },
          700: { value: '#c2185b' },
          800: { value: '#ad1457' },
          900: { value: '#880e4f' },
        },
      },
    },
  },
})

export function ChakraProviderClient({
  children,
}: {
  children: React.ReactNode
}) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}
