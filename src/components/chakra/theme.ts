export type ThemeMode = 'dark' | 'glass'

export const themeStyles = {
  dark: {
    bg: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    cardBg: 'rgba(40, 40, 80, 0.95)',
    cardBorder: '1px solid rgba(0, 212, 255, 0.3)',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    accent: '#00d4ff',
    accentGradient: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
    headerBg: 'rgba(15, 15, 35, 0.98)',
    progressBg: 'rgba(0, 212, 255, 0.15)',
    progressFill: 'linear-gradient(90deg, #00d4ff 0%, #7c3aed 100%)',
    shadow: '0 8px 32px rgba(0, 212, 255, 0.15)',
    timelineColor: '#00d4ff',
  },
  glass: {
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    cardBg: 'rgba(255, 255, 255, 0.2)',
    cardBorder: '1px solid rgba(255, 255, 255, 0.4)',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.85)',
    accent: '#ffffff',
    accentGradient: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
    headerBg: 'rgba(255, 255, 255, 0.15)',
    progressBg: 'rgba(255, 255, 255, 0.25)',
    progressFill: 'linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%)',
    shadow: '0 8px 32px rgba(31, 38, 135, 0.4)',
    timelineColor: '#ffffff',
    backdropFilter: 'blur(10px)',
  },
}

export const getTheme = (mode: ThemeMode) => themeStyles[mode]
