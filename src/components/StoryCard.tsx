import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../theme';
import { LevelBadge } from './LevelBadge';
import { ProgressBar } from './ProgressBar';
import type { Story } from '../data/types';

interface Props {
  story: Story;
  free: boolean;
  isPro: boolean;
  progress: number; // 0–1
  completed: boolean;
  comingSoon?: boolean;
  onPress: () => void;
  darkMode?: boolean;
}

export function StoryCard({ story, free, isPro, progress, completed, comingSoon, onPress, darkMode }: Props) {
  const locked = !free && !isPro;
  const textColor = darkMode ? Colors.darkText : Colors.ink;
  const subColor = darkMode ? Colors.darkTextFaint : Colors.inkFaint;
  const cardBg = darkMode ? Colors.darkCard : Colors.white;

  return (
    <Pressable
      onPress={comingSoon ? undefined : onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: cardBg },
        Shadows.md,
        pressed && !comingSoon && { opacity: 0.85 },
      ]}
    >
      {/* Color cover strip */}
      <View style={[styles.cover, { backgroundColor: story.coverColor }]}>
        <Text style={styles.emoji}>{story.emoji}</Text>
        {locked && (
          <View style={styles.lockBadge}>
            <Text style={styles.lockIcon}>🔒</Text>
          </View>
        )}
        {comingSoon && (
          <View style={styles.soonBadge}>
            <Text style={styles.soonText}>Binnenkort</Text>
          </View>
        )}
        {completed && (
          <View style={styles.completedBadge}>
            <Text style={styles.completedIcon}>✓</Text>
          </View>
        )}
      </View>

      {/* Info */}
      <View style={styles.info}>
        <View style={styles.row}>
          <LevelBadge level={story.level} size="sm" />
          <Text style={[styles.genre, { color: subColor }]}>{story.genre}</Text>
        </View>
        <Text style={[styles.title, { color: textColor }]} numberOfLines={2}>{story.title}</Text>
        <Text style={[styles.desc, { color: subColor }]} numberOfLines={2}>{story.description}</Text>
        {progress > 0 && !completed && (
          <View style={styles.progressWrap}>
            <ProgressBar progress={progress} height={3} />
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radii.lg,
    overflow: 'hidden',
    marginBottom: Spacing.md,
    flexDirection: 'row',
  },
  cover: {
    width: 80,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 32,
  },
  lockBadge: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockIcon: { fontSize: 10 },
  soonBadge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 3,
    alignItems: 'center',
  },
  soonText: {
    fontFamily: Fonts.sansBold,
    fontSize: FontSizes.xs,
    color: Colors.cream,
  },
  completedBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: Colors.good,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedIcon: { fontSize: 11, color: Colors.white },
  info: {
    flex: 1,
    padding: Spacing.md,
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  genre: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.xs,
  },
  title: {
    fontFamily: Fonts.serifBold,
    fontSize: FontSizes.md,
    lineHeight: 22,
  },
  desc: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.sm,
    lineHeight: 18,
  },
  progressWrap: {
    marginTop: 4,
  },
});
