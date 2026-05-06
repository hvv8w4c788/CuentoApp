import React, { useMemo } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useApp } from '../../../src/context/AppContext';
import { ChoiceButton } from '../../../src/components/ChoiceButton';
import { Colors, Fonts, FontSizes, Spacing, Radii } from '../../../src/theme';
import type { Story } from '../../../src/data/types';

function loadStory(id: string): Story | null {
  try {
    switch (id) {
      case 'a1-1': return require('../../../src/data/story-a1-1').storyA1_1;
      case 'a1-2': return require('../../../src/data/story-a1-2').storyA1_2;
      case 'a1-3': return require('../../../src/data/story-a1-3').storyA1_3;
      case 'a2-1': return require('../../../src/data/story-a2-1').storyA2_1;
      case 'a2-2': return require('../../../src/data/story-a2-2').storyA2_2;
      case 'a2-3': return require('../../../src/data/story-a2-3').storyA2_3;
      case 'b1-1': return require('../../../src/data/story-b1-1').storyB1_1;
      case 'b1-2': return require('../../../src/data/story-b1-2').storyB1_2;
      case 'b1-3': return require('../../../src/data/story-b1-3').storyB1_3;
      case 'b2-1': return require('../../../src/data/story-b2-1').storyB2_1;
      case 'b2-2': return require('../../../src/data/story-b2-2').storyB2_2;
      case 'b2-3': return require('../../../src/data/story-b2-3').storyB2_3;
      default: return null;
    }
  } catch {
    return null;
  }
}

export default function ChoiceScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { state, dispatch } = useApp();
  const router = useRouter();

  const story = useMemo(() => loadStory(id), [id]);
  const chapter = useMemo(
    () => (story && state.currentChapterId ? story.chapters[state.currentChapterId] : null),
    [story, state.currentChapterId]
  );

  if (!story || !chapter) {
    return (
      <View style={styles.bg}>
        <SafeAreaView style={styles.safe}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backText}>←</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    );
  }

  const handleChoice = (nextChapterId: string) => {
    dispatch({ type: 'ADVANCE_CHAPTER', storyId: id, chapterId: nextChapterId });
    router.push(`/story/${id}/quiz`);
  };

  const CHOICE_ICONS = ['🔵', '🟢', '🟡', '🔴'];

  return (
    <View style={styles.bg}>
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backText}>←</Text>
          </Pressable>

          <View style={styles.heroArea}>
            <Text style={styles.emoji}>{story.emoji}</Text>
            <Text style={styles.headline}>¿Qué decides?</Text>
            <Text style={styles.subhead}>{chapter.title}</Text>
          </View>

          <View style={styles.choices}>
            {chapter.choices.map((choice, i) => (
              <ChoiceButton
                key={i}
                icon={CHOICE_ICONS[i] ?? '🔵'}
                text={choice.text}
                hint={choice.hint}
                onPress={() => handleChoice(choice.next)}
                darkMode
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: Colors.forest },
  safe: { flex: 1 },
  scroll: { padding: Spacing.xl, paddingBottom: 60, gap: Spacing.xl },
  backBtn: { padding: Spacing.sm, alignSelf: 'flex-start' },
  backText: { fontSize: FontSizes.xl, color: Colors.cream },
  heroArea: { alignItems: 'center', gap: Spacing.md, paddingVertical: Spacing.xl },
  emoji: { fontSize: 72 },
  headline: {
    fontFamily: Fonts.serifBold,
    fontSize: FontSizes['3xl'],
    color: Colors.cream,
    textAlign: 'center',
  },
  subhead: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.md,
    color: Colors.tealLight,
    textAlign: 'center',
  },
  choices: { gap: Spacing.md },
});
