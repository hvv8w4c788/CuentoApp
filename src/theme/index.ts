import { Platform } from 'react-native';

export const Colors = {
  // Primary brand
  forest: '#1a3020',
  teal: '#2d6a50',
  tealMid: '#3a8a68',
  tealLight: '#7ec9a8',

  // Warm accent
  amber: '#e8a030',
  amberDark: '#b07820',
  gold: '#d4a820',

  // Backgrounds
  cream: '#fdf8f0',
  parchment: '#f5ede0',
  white: '#ffffff',

  // Text
  ink: '#1a1814',
  inkLight: '#666057',
  inkFaint: '#9a9088',

  // Semantic
  bad: '#c04830',
  good: '#3a8a50',
  neutral: '#6878a8',

  // UI
  border: '#e8e0d4',
  borderDark: '#c8bfb0',
  overlay: 'rgba(0,0,0,0.4)',

  // Dark mode backgrounds
  darkBg: '#111810',
  darkCard: '#1e2a1e',
  darkBorder: '#2a3828',
  darkText: '#e8f0e8',
  darkTextFaint: '#7a9a7a',

  // Level badge colors
  levels: {
    A1: { bg: '#c8efd0', text: '#1a5028' },
    A2: { bg: '#c0e8f0', text: '#0a3a55' },
    B1: { bg: '#c8d0f0', text: '#1a2060' },
    B2: { bg: '#e0c8f0', text: '#3a1060' },
    C1: { bg: '#f0d8c0', text: '#5a2a00' },
    C2: { bg: '#f0c8c8', text: '#5a0a0a' },
  } as Record<string, { bg: string; text: string }>,

  // Ending gradients
  endings: {
    good: ['#1a5028', '#2d6a50'],
    neutral: ['#2a3060', '#4a5080'],
    bad: ['#5a1010', '#8a3020'],
  } as Record<string, string[]>,
};

export const Fonts = {
  serif: 'Lora_400Regular',
  serifSemiBold: 'Lora_600SemiBold',
  serifBold: 'Lora_700Bold',
  sans: 'DMSans_400Regular',
  sansMedium: 'DMSans_500Medium',
  sansBold: 'DMSans_700Bold',
};

export const FontSizes = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
};

export const Radii = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
};

export const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 84 : 64;
export const HEADER_HEIGHT = 56;
