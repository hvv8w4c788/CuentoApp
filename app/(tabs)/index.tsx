import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Pressable, SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../src/context/AppContext';
import { StoryCard } from '../../src/components/StoryCard';
import { StreakCalendar } from '../../src/components/StreakCalendar';
import { Colors, Fonts, FontSizes, Spacing, Radii } from '../../src/theme';
import { computeStreak } from '../../src/hooks/useStreak';
import { STORY_REGISTRY } from '../../src/data/registry';

const LEVELS_BY_LANG: Record<string, string[]> = {
  nl: ['All', 'A1', 'A2'],
};

function getGreeting(name: string): string {
  const h = new Date().getHours();
  const time = h < 12 ? 'Goedemorgen' : h < 18 ? 'Goedemiddag' : 'Goedenavond';
  return `${time}, ${name || 'student'} 👋`;
}

export default function HomeScreen() {
  const { state, dispatch } = useApp();
  const router = useRouter();
  const [levelFilter, setLevelFilter] = useState('All');

  const streak = computeStreak(state.activityLog);
  const lang = state.selectedLanguage ?? 'nl';
  const levels = LEVELS_BY_LANG[lang] ?? LEVELS_BY_LANG.nl;

  const stories = STORY_REGISTRY.filter(
    s => s.lang === lang && (levelFilter === 'All' || s.level === levelFilter)
  );

  const handleStoryPress = (id: string) => {
    dispatch({ type: 'LOG_ACTIVITY' });
    router.push(`/story/${id}/chapter`);
  };

  const bg = state.darkMode ? Colors.darkBg : Colors.parchment;
  const textColor = state.darkMode ? Colors.darkText : Colors.ink;
  const subColor = state.darkMode ? Colors.darkTextFaint : Colors.inkFaint;

  return (
    <View style={[styles.bg, { backgroundColor: bg }]}>
      <SafeAreaView style={styles.safe}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          <View style={styles.header}>
            <Text style={[styles.greeting, { color: textColor }]}>
              {getGreeting(state.userName)}
            </Text>
            <StreakCalendar activityLog={state.activityLog} streak={streak} darkMode={state.darkMode} />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll} contentContainerStyle={styles.filterContent}>
            {levels.map(l => (
              <Pressable
                key={l}
                onPress={() => setLevelFilter(l)}
                style={[styles.filterChip, levelFilter === l && styles.filterChipActive]}
              >
                <Text style={[styles.filterText, levelFilter === l && styles.filterTextActive]}>{l}</Text>
              </Pressable>
            ))}
          </ScrollView>

          <View style={styles.storyList}>
            {stories.map(entry => {
              const progress = state.storyProgress[entry.id];
              const completedChapters = progress
                ? Object.values(progress).filter(s => s === 'completed').length
                : 0;
              const isCompleted = state.completedStories.some(c => c.storyId === entry.id);

              return (
                <StoryCard
                  key={entry.id}
                  story={{
                    id: entry.id,
                    level: entry.level,
                    title: entry.title,
                    genre: entry.genre,
                    emoji: entry.emoji,
                    coverColor: entry.coverColor,
                    accentColor: entry.accentColor,
                    description: entry.description,
                    chapters: {},
                    startChapter: '',
                  }}
                  progress={completedChapters / 10}
                  completed={isCompleted}
                  comingSoon={entry.comingSoon ?? false}
                  onPress={() => handleStoryPress(entry.id)}
                  darkMode={state.darkMode}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1 },
  scroll: { padding: Spacing.xl, paddingBottom: 100 },
  header: { gap: Spacing.lg, marginBottom: Spacing.xl },
  greeting: { fontFamily: Fonts.serifBold, fontSize: FontSizes['2xl'] },
  filterScroll: { marginBottom: Spacing.xl, marginHorizontal: -Spacing.xl },
  filterContent: { paddingHorizontal: Spacing.xl, gap: Spacing.sm },
  filterChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: Radii.full,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: 'transparent',
  },
  filterChipActive: {
    borderColor: Colors.amber,
    backgroundColor: Colors.amber + '18',
  },
  filterText: {
    fontFamily: Fonts.sansMedium,
    fontSize: FontSizes.sm,
    color: Colors.inkFaint,
  },
  filterTextActive: { color: Colors.amber },
  storyList: { gap: 0 },
});
