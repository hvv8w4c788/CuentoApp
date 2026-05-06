import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import * as Speech from 'expo-speech';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../theme';
import type { VocabEntry } from '../data/types';

interface Props {
  entry: VocabEntry;
  onRate: (word: string, rating: 'hard' | 'known') => void;
  darkMode?: boolean;
}

export function VocabFlipCard({ entry, onRate, darkMode }: Props) {
  const rotation = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${interpolate(rotation.value, [0, 1], [0, 180])}deg` }],
    backfaceVisibility: 'hidden',
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${interpolate(rotation.value, [0, 1], [180, 360])}deg` }],
    backfaceVisibility: 'hidden',
  }));

  const flip = () => {
    const toValue = flipped ? 0 : 1;
    rotation.value = withTiming(toValue, { duration: 400 });
    setFlipped(!flipped);
  };

  const speak = () => {
    Speech.speak(entry.word, { language: 'es-ES', rate: 0.85 });
  };

  const cardBg = darkMode ? Colors.darkCard : Colors.white;
  const textColor = darkMode ? Colors.darkText : Colors.ink;
  const subColor = darkMode ? Colors.darkTextFaint : Colors.inkFaint;

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={flip} style={styles.cardContainer}>
        {/* Front */}
        <Animated.View style={[styles.card, { backgroundColor: cardBg }, frontStyle, Shadows.lg]}>
          <Text style={[styles.word, { color: textColor }]}>{entry.word}</Text>
          <Pressable onPress={speak} style={styles.speakBtn}>
            <Text style={styles.speakIcon}>🔊</Text>
          </Pressable>
          <Text style={[styles.tapHint, { color: subColor }]}>Toca para voltear</Text>
        </Animated.View>

        {/* Back */}
        <Animated.View style={[styles.card, styles.cardBack, { backgroundColor: Colors.forest }, backStyle, Shadows.lg]}>
          <Text style={styles.definition}>{entry.definition}</Text>
          {entry.example && (
            <Text style={styles.example}>"{entry.example}"</Text>
          )}
          <Text style={styles.tapHint2}>Toca para volver</Text>
        </Animated.View>
      </Pressable>

      {flipped && (
        <View style={styles.buttons}>
          <Pressable
            style={[styles.rateBtn, styles.hardBtn]}
            onPress={() => onRate(entry.word, 'hard')}
          >
            <Text style={styles.rateBtnText}>😅 Difícil</Text>
          </Pressable>
          <Pressable
            style={[styles.rateBtn, styles.knownBtn]}
            onPress={() => onRate(entry.word, 'known')}
          >
            <Text style={styles.rateBtnText}>✓ Lo sé</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const CARD_HEIGHT = 220;

const styles = StyleSheet.create({
  wrapper: { gap: Spacing.lg },
  cardContainer: { height: CARD_HEIGHT },
  card: {
    position: 'absolute',
    width: '100%',
    height: CARD_HEIGHT,
    borderRadius: Radii.xl,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
    gap: Spacing.sm,
  },
  cardBack: {},
  word: {
    fontFamily: Fonts.serifBold,
    fontSize: FontSizes['3xl'],
    textAlign: 'center',
  },
  speakBtn: {
    padding: Spacing.sm,
  },
  speakIcon: { fontSize: 22 },
  tapHint: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.xs,
    position: 'absolute',
    bottom: Spacing.md,
  },
  definition: {
    fontFamily: Fonts.serifSemiBold,
    fontSize: FontSizes.xl,
    color: Colors.cream,
    textAlign: 'center',
  },
  example: {
    fontFamily: Fonts.serif,
    fontSize: FontSizes.sm,
    color: Colors.tealLight,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  tapHint2: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.xs,
    color: Colors.tealLight,
    position: 'absolute',
    bottom: Spacing.md,
  },
  buttons: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  rateBtn: {
    flex: 1,
    paddingVertical: Spacing.md,
    borderRadius: Radii.md,
    alignItems: 'center',
  },
  hardBtn: { backgroundColor: Colors.bad + '22', borderWidth: 1, borderColor: Colors.bad + '44' },
  knownBtn: { backgroundColor: Colors.good + '22', borderWidth: 1, borderColor: Colors.good + '44' },
  rateBtnText: {
    fontFamily: Fonts.sansMedium,
    fontSize: FontSizes.md,
    color: Colors.ink,
  },
});
