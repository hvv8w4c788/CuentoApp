import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useApp } from '../../src/context/AppContext';
import { LevelBadge } from '../../src/components/LevelBadge';
import { ProgressBar } from '../../src/components/ProgressBar';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../../src/theme';
import { computeStreak } from '../../src/hooks/useStreak';

const XP_PER_LEVEL = 500;
const AVATAR_EMOJIS = ['🦊', '🐺', '🦅', '🐬', '🦁', '🌺', '⭐️', '🌙'];

function getAvatar(name: string): string {
  if (!name) return '🦊';
  const idx = name.charCodeAt(0) % AVATAR_EMOJIS.length;
  return AVATAR_EMOJIS[idx];
}

const ENDING_LABELS: Record<string, { label: string; color: string; icon: string }> = {
  good: { label: 'Buen final', color: Colors.good, icon: '⭐️' },
  neutral: { label: 'Final neutro', color: Colors.neutral, icon: '🌙' },
  bad: { label: 'Final difícil', color: Colors.bad, icon: '🌧️' },
};

export default function ProfileScreen() {
  const { state } = useApp();
  const streak = computeStreak(state.activityLog);
  const xpInLevel = state.totalXP % XP_PER_LEVEL;
  const levelNum = Math.floor(state.totalXP / XP_PER_LEVEL) + 1;

  const bg = state.darkMode ? Colors.darkBg : Colors.parchment;
  const cardBg = state.darkMode ? Colors.darkCard : Colors.white;
  const textColor = state.darkMode ? Colors.darkText : Colors.ink;
  const subColor = state.darkMode ? Colors.darkTextFaint : Colors.inkFaint;

  return (
    <View style={[styles.bg, { backgroundColor: bg }]}>
      <SafeAreaView style={styles.safe}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Hero */}
          <View style={[styles.heroCard, { backgroundColor: Colors.forest }]}>
            <Text style={styles.avatar}>{getAvatar(state.userName)}</Text>
            <Text style={styles.heroName}>{state.userName || 'Estudiante'}</Text>
            <View style={styles.heroRow}>
              <LevelBadge level={state.userLevel} size="md" />
              {state.isPro && (
                <View style={styles.proBadge}>
                  <Text style={styles.proBadgeText}>PRO ✨</Text>
                </View>
              )}
            </View>
            <View style={styles.xpBar}>
              <View style={styles.xpLabels}>
                <Text style={styles.xpLabel}>Nivel {levelNum}</Text>
                <Text style={styles.xpLabel}>{xpInLevel} / {XP_PER_LEVEL} XP</Text>
              </View>
              <ProgressBar progress={xpInLevel / XP_PER_LEVEL} color={Colors.amber} height={8} backgroundColor="rgba(255,255,255,0.15)" />
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            {[
              { label: 'Historias', value: state.completedStories.length, icon: '📚' },
              { label: 'Racha', value: streak, icon: '🔥' },
              { label: 'Palabras', value: state.vocabDeck.length, icon: '📝' },
            ].map(s => (
              <View key={s.label} style={[styles.statCard, { backgroundColor: cardBg }, Shadows.sm]}>
                <Text style={styles.statIcon}>{s.icon}</Text>
                <Text style={[styles.statValue, { color: textColor }]}>{s.value}</Text>
                <Text style={[styles.statLabel, { color: subColor }]}>{s.label}</Text>
              </View>
            ))}
          </View>

          {/* Completed stories */}
          {state.completedStories.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: textColor }]}>Historias completadas</Text>
              <View style={styles.completedList}>
                {state.completedStories.map((c, i) => {
                  const info = ENDING_LABELS[c.ending] ?? ENDING_LABELS.neutral;
                  return (
                    <View key={i} style={[styles.completedRow, { backgroundColor: cardBg }, Shadows.sm]}>
                      <View style={[styles.endingDot, { backgroundColor: info.color }]}>
                        <Text style={styles.endingIcon}>{info.icon}</Text>
                      </View>
                      <View style={styles.completedInfo}>
                        <Text style={[styles.completedId, { color: textColor }]}>{c.storyId}</Text>
                        <Text style={[styles.completedSub, { color: subColor }]}>
                          {info.label} · {c.xpEarned} XP · {c.wordsEncountered} palabras
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1 },
  scroll: { padding: Spacing.xl, gap: Spacing.xl, paddingBottom: 100 },
  heroCard: {
    borderRadius: Radii.xl,
    padding: Spacing.xl,
    alignItems: 'center',
    gap: Spacing.sm,
    ...Shadows.md,
  },
  avatar: { fontSize: 56 },
  heroName: { fontFamily: Fonts.serifBold, fontSize: FontSizes['2xl'], color: Colors.cream },
  heroRow: { flexDirection: 'row', gap: Spacing.sm, alignItems: 'center' },
  proBadge: {
    backgroundColor: Colors.amber,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
  proBadgeText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.xs, color: Colors.forest },
  xpBar: { width: '100%', gap: Spacing.xs, marginTop: Spacing.sm },
  xpLabels: { flexDirection: 'row', justifyContent: 'space-between' },
  xpLabel: { fontFamily: Fonts.sans, fontSize: FontSizes.xs, color: Colors.tealLight },
  statsRow: { flexDirection: 'row', gap: Spacing.md },
  statCard: {
    flex: 1,
    borderRadius: Radii.lg,
    padding: Spacing.md,
    alignItems: 'center',
    gap: 2,
  },
  statIcon: { fontSize: 22 },
  statValue: { fontFamily: Fonts.sansBold, fontSize: FontSizes.xl },
  statLabel: { fontFamily: Fonts.sans, fontSize: FontSizes.xs },
  section: { gap: Spacing.md },
  sectionTitle: { fontFamily: Fonts.serifSemiBold, fontSize: FontSizes.xl },
  completedList: { gap: Spacing.sm },
  completedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: Radii.lg,
    gap: Spacing.md,
  },
  endingDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  endingIcon: { fontSize: 16 },
  completedInfo: { flex: 1, gap: 2 },
  completedId: { fontFamily: Fonts.sansMedium, fontSize: FontSizes.md },
  completedSub: { fontFamily: Fonts.sans, fontSize: FontSizes.xs },
});
