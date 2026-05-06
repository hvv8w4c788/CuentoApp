import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts, FontSizes } from '../theme';

interface Props {
  level: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LevelBadge({ level, size = 'md' }: Props) {
  const colors = Colors.levels[level] ?? { bg: '#e0e0e0', text: '#444' };
  const textSize = size === 'sm' ? FontSizes.xs : size === 'lg' ? FontSizes.md : FontSizes.sm;
  const padding = size === 'sm' ? { paddingHorizontal: 6, paddingVertical: 2 } : { paddingHorizontal: 10, paddingVertical: 4 };

  return (
    <View style={[styles.badge, { backgroundColor: colors.bg }, padding]}>
      <Text style={[styles.text, { color: colors.text, fontSize: textSize }]}>{level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  text: {
    fontFamily: Fonts.sansBold,
    letterSpacing: 0.5,
  },
});
