import React, { useMemo } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useApp } from '../../../src/context/AppContext';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../../../src/theme';
import { loadStory } from '../../../src/utils/loadStory';
import type { EndingType } from '../../../src/data/types';

const ENDING_CONFIG: Record<EndingType, {
  bg: string; accent: string; title: string; subtitle: string; icon: string;
}> = {
  good: {
    bg: Colors.forest,
    accent: Colors.tealLight,
    title: '¡Buen final!',
    subtitle: 'Has tomado las mejores decisiones.',
    icon: '⭐️',
  },
  neutral: {
    bg: '#1e1a3e',
    accent: '#a080e0',
    title: 'Final neutro',
    subtitle: 'Un resultado equilibrado. ¿Qué hubiera pasado si...?',
    icon: '🌙',
  },
  bad: {
    bg: '#2a0e0e',
    accent: Colors.bad,
    title: 'Final difícil',
    subtitle: 'Las cosas no salieron bien. Inténtalo de nuevo.',
    icon: '🌧️',
  },
};

export default function EndingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { state, dispatch } = useApp();
  const router = useRouter();

  const story = useMemo(() => loadStory(id), [id]);

  const latestCompleted = useMemo(() => {
    return state.completedStories.filter(c => c.storyId === id).slice(-1)[0] ?? null;
  }, [state.completedStories, id]);

  const endingType: EndingType = (latestCompleted?.ending as EndingType) ?? 'neutral';
  const config = ENDING_CONFIG[endingType] ?? ENDING_CONFIG.neutral;

  const handleRetry = () => {
    if (story) {
      dispatch({ type: 'START_STORY', storyId: id, chapterId: story.startChapter });
      router.replace(`/story/${id}/chapter`);
    }
  };

  const handleHome = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={[styles.bg, { backgroundColor: config.bg }]}>
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          {/* Hero */}
          <View style={styles.hero}>
            <Text style={styles.heroIcon}>{config.icon}</Text>
            <Text style={[styles.heroTitle, { color: config.accent }]}>{config.title}</Text>
            <Text style={styles.heroSubtitle}>{config.subtitle}</Text>
          </View>

          {/* Story name */}
          {story && (
            <Text style={styles.storyName}>{story.title}</Text>
          )}

          {/* Stats */}
          {latestCompleted && (
            <View style={styles.statsRow}>
              <View style={[styles.statCard, { borderColor: config.accent + '44' }]}>
                <Text style={[styles.statValue, { color: config.accent }]}>
                  {latestCompleted.chaptersRead}
                </Text>
                <Text style={styles.statLabel}>Capítulos</Text>
              </View>
              <View style={[styles.statCard, { borderColor: config.accent + '44' }]}>
                <Text style={[styles.statValue, { color: config.accent }]}>
                  {latestCompleted.wordsEncountered}
                </Text>
                <Text style={styles.statLabel}>Palabras</Text>
              </View>
              <View style={[styles.statCard, { borderColor: config.accent + '44' }]}>
                <Text style={[styles.statValue, { color: config.accent }]}>
                  +{latestCompleted.xpEarned}
                </Text>
                <Text style={styles.statLabel}>XP</Text>
              </View>
            </View>
          )}

          {/* Actions */}
          <View style={styles.actions}>
            {endingType !== 'good' && (
              <Pressable
                style={[styles.btn, styles.btnSecondary, { borderColor: config.accent }]}
                onPress={handleRetry}
              >
                <Text style={[styles.btnText, { color: config.accent }]}>Leer otro final</Text>
              </Pressable>
            )}
            <Pressable style={[styles.btn, { backgroundColor: config.accent }]} onPress={handleHome}>
              <Text style={[styles.btnText, { color: Colors.forest }]}>Nueva historia</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1 },
  scroll: {
    padding: Spacing.xl,
    gap: Spacing.xl,
    paddingBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  hero: { alignItems: 'center', gap: Spacing.md },
  heroIcon: { fontSize: 80 },
  heroTitle: {
    fontFamily: Fonts.serifBold,
    fontSize: FontSizes['4xl'],
    textAlign: 'center',
  },
  heroSubtitle: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.md,
    color: Colors.cream,
    textAlign: 'center',
    opacity: 0.8,
  },
  storyName: {
    fontFamily: Fonts.serifBold,
    fontSize: FontSizes.xl,
    color: Colors.cream,
    textAlign: 'center',
    opacity: 0.6,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    width: '100%',
    justifyContent: 'center',
  },
  statCard: {
    flex: 1,
    maxWidth: 100,
    borderRadius: Radii.lg,
    borderWidth: 1.5,
    padding: Spacing.md,
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  statValue: { fontFamily: Fonts.sansBold, fontSize: FontSizes.xl },
  statLabel: { fontFamily: Fonts.sans, fontSize: FontSizes.xs, color: Colors.cream, opacity: 0.6 },
  actions: { width: '100%', gap: Spacing.md },
  btn: {
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    ...Shadows.md,
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  btnText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.md },
});
