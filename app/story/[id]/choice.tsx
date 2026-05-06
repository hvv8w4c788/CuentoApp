import React, { useMemo } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useApp } from '../../../src/context/AppContext';
import { ChoiceButton } from '../../../src/components/ChoiceButton';
import { Colors, Fonts, FontSizes, Spacing, Radii } from '../../../src/theme';
import { loadStory } from '../../../src/utils/loadStory';
import type { Choice } from '../../../src/data/types';

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

  const handleChoice = (choice: Choice) => {
    dispatch({ type: 'ADVANCE_CHAPTER', storyId: id, chapterId: choice.next });
    router.push(`/story/${id}/quiz`);
  };

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
                choice={choice}
                index={i}
                onPress={handleChoice}
                accentColor={story.accentColor}
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
