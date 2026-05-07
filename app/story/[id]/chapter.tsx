import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView,
  Pressable, ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useApp } from '../../../src/context/AppContext';
import { ProgressBar } from '../../../src/components/ProgressBar';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../../../src/theme';
import { loadStory } from '../../../src/utils/loadStory';
import type { VocabEntry } from '../../../src/data/types';

const FONT_SIZE_MAP = { small: 15, medium: 17, large: 20 };

export default function ChapterScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { state, dispatch } = useApp();
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const [activeVocab, setActiveVocab] = useState<string | null>(null);

  const story = useMemo(() => loadStory(id), [id]);

  const chapterId = state.currentChapterId;
  const chapter = useMemo(
    () => (story && chapterId ? story.chapters[chapterId] : null),
    [story, chapterId]
  );

  useEffect(() => {
    if (!story) return;
    if (!state.currentStoryId || state.currentStoryId !== id) {
      dispatch({ type: 'START_STORY', storyId: id, chapterId: story.startChapter });
    }
  }, []);

  useEffect(() => {
    if (chapter?.vocab) {
      const entries: VocabEntry[] = chapter.vocab.map(v => ({
        word: v.w,
        definition: v.d,
        example: v.example ?? '',
        storyId: id,
        mastery: 'new',
        interval: 0,
        nextReview: null,
      }));
      dispatch({ type: 'ADD_VOCAB', words: entries });
    }
  }, [chapterId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
    setActiveVocab(null);
  }, [chapterId]);

  if (!story || !chapter) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={Colors.amber} />
      </View>
    );
  }

  const maxChapterNum = Math.max(...Object.values(story.chapters).map(ch => ch.num));
  const progress = chapter.num / maxChapterNum;

  const fontSize = FONT_SIZE_MAP[state.fontSize] ?? 17;
  const bg = state.darkMode ? Colors.darkBg : Colors.parchment;
  const textColor = state.darkMode ? Colors.darkText : Colors.ink;
  const subColor = state.darkMode ? Colors.darkTextFaint : Colors.inkFaint;
  const cardBg = state.darkMode ? Colors.darkCard : Colors.white;

  const vocabMap: Record<string, string> = {};
  chapter.vocab.forEach(v => { vocabMap[v.w.toLowerCase()] = v.d; });

  const handleContinue = () => {
    if (chapter.ending) {
      router.push(`/story/${id}/quiz`);
    } else if (chapter.choices.length > 0) {
      router.push(`/story/${id}/choice`);
    }
  };

  return (
    <View style={[styles.bg, { backgroundColor: bg }]}>
      <SafeAreaView style={styles.safe}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={[styles.backText, { color: textColor }]}>←</Text>
          </Pressable>
          <View style={styles.topCenter}>
            <Text style={[styles.storyTitle, { color: textColor }]} numberOfLines={1}>
              {story.title}
            </Text>
            <Text style={[styles.chapterLabel, { color: subColor }]}>
              Cap. {chapter.num}
            </Text>
          </View>
          <View style={styles.topRight} />
        </View>

        {/* Progress bar */}
        <View style={styles.progressWrap}>
          <ProgressBar progress={progress} color={Colors.amber} height={3} />
        </View>

        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {/* Chapter title */}
          <Text style={[styles.chapterTitle, { color: textColor }]}>{chapter.title}</Text>

          {/* Story text */}
          <Text style={[styles.storyText, { color: textColor, fontSize, lineHeight: fontSize * 1.75 }]}>
            {chapter.text}
          </Text>

          {/* Vocab panel */}
          {state.showVocab && chapter.vocab.length > 0 && (
            <View style={[styles.vocabPanel, { backgroundColor: cardBg }]}>
              <Text style={[styles.vocabHeader, { color: subColor }]}>💡 Vocabulario</Text>
              {chapter.vocab.map(v => (
                <Pressable
                  key={v.w}
                  onPress={() => setActiveVocab(activeVocab === v.w ? null : v.w)}
                  style={styles.vocabRow}
                >
                  <Text style={[styles.vocabWord, { color: Colors.tealMid }]}>{v.w}</Text>
                  {activeVocab === v.w && (
                    <Text style={[styles.vocabDef, { color: subColor }]}>{v.d}</Text>
                  )}
                </Pressable>
              ))}
            </View>
          )}

          {/* CTA */}
          <Pressable style={styles.cta} onPress={handleContinue}>
            <Text style={styles.ctaText}>
              {chapter.choices.length > 0 ? 'Tomar una decisión →' : chapter.ending ? 'Quiz final →' : 'Continuar →'}
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.parchment },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  backBtn: { padding: Spacing.sm, minWidth: 44 },
  backText: { fontSize: FontSizes.xl },
  topCenter: { flex: 1, alignItems: 'center' },
  storyTitle: { fontFamily: Fonts.sansMedium, fontSize: FontSizes.sm },
  chapterLabel: { fontFamily: Fonts.sans, fontSize: FontSizes.xs },
  topRight: { minWidth: 44 },
  progressWrap: { paddingHorizontal: Spacing.xl },
  scroll: { padding: Spacing.xl, gap: Spacing.lg, paddingBottom: 60 },
  chapterTitle: {
    fontFamily: Fonts.serifBold,
    fontSize: FontSizes['2xl'],
    lineHeight: FontSizes['2xl'] * 1.3,
  },
  storyText: {
    fontFamily: Fonts.serif,
  },
  vocabPanel: {
    borderRadius: Radii.lg,
    padding: Spacing.md,
    gap: Spacing.sm,
    ...Shadows.sm,
  },
  vocabHeader: { fontFamily: Fonts.sansMedium, fontSize: FontSizes.sm },
  vocabRow: { paddingVertical: 4, gap: 2 },
  vocabWord: { fontFamily: Fonts.sansMedium, fontSize: FontSizes.md },
  vocabDef: { fontFamily: Fonts.sans, fontSize: FontSizes.sm },
  cta: {
    backgroundColor: Colors.forest,
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    marginTop: Spacing.md,
    ...Shadows.md,
  },
  ctaText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.md, color: Colors.cream },
});
