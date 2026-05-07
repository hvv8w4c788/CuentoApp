import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../theme';
import type { Choice } from '../data/types';

interface Props {
  choice: Choice;
  index: number;
  onPress: (choice: Choice) => void;
  accentColor?: string;
}

const ICONS = ['🌿', '⚡️', '🌊', '🔥'];

export function ChoiceButton({ choice, index, onPress, accentColor = Colors.tealLight }: Props) {
  const handlePress = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    onPress(choice);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        Shadows.md,
        pressed && { opacity: 0.88, transform: [{ scale: 0.98 }] },
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: accentColor + '22' }]}>
        <Text style={styles.icon}>{ICONS[index % ICONS.length]}</Text>
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.text}>{choice.text}</Text>
        <Text style={[styles.hint, { color: accentColor }]}>{choice.hint}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { fontSize: 20 },
  textWrap: { flex: 1, gap: 2 },
  text: {
    fontFamily: Fonts.serifSemiBold,
    fontSize: FontSizes.md,
    color: Colors.cream,
    lineHeight: 22,
  },
  hint: {
    fontFamily: Fonts.sansMedium,
    fontSize: FontSizes.xs,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  arrow: {
    color: Colors.cream,
    fontSize: 24,
    opacity: 0.5,
  },
});
