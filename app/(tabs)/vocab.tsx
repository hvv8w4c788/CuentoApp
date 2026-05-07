import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { useApp } from '../../src/context/AppContext';
import { VocabFlipCard } from '../../src/components/VocabFlipCard';
import { Colors, Fonts, FontSizes, Spacing } from '../../src/theme';
import type { VocabEntry } from '../../src/data/types';

export default function VocabScreen() {
  const { state, dispatch } = useApp();
  const [index, setIndex] = useState(0);

  const today = new Date().toISOString().slice(0, 10);
  const due = useMemo(() => {
    const all = state.vocabDeck.filter(v => !v.nextReview || v.nextReview <= today);
    return all.length > 0 ? all : state.vocabDeck.slice(0, 10);
  }, [state.vocabDeck, today]);

  const bg = state.darkMode ? Colors.darkBg : Colors.parchment;
  const textColor = state.darkMode ? Colors.darkText : Colors.ink;
  const subColor = state.darkMode ? Colors.darkTextFaint : Colors.inkFaint;

  if (state.vocabDeck.length === 0) {
    return (
      <View style={[styles.bg, { backgroundColor: bg }]}>
        <SafeAreaView style={styles.safe}>
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🃏</Text>
            <Text style={[styles.emptyTitle, { color: textColor }]}>No words yet</Text>
            <Text style={[styles.emptyText, { color: subColor }]}>
              Read a story to add words to your deck.
            </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  const current = due[index % due.length];

  const handleRate = (word: string, rating: 'hard' | 'known') => {
    dispatch({ type: 'RATE_VOCAB', word, rating });
    setIndex(i => i + 1);
  };

  const progress = (index % due.length) / due.length;

  return (
    <View style={[styles.bg, { backgroundColor: bg }]}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: textColor }]}>Vocabulary</Text>
          <Text style={[styles.count, { color: subColor }]}>
            {(index % due.length) + 1} / {due.length} today
          </Text>
        </View>

        {/* Dot progress */}
        <View style={styles.dots}>
          {due.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i < index % due.length
                  ? styles.dotDone
                  : i === index % due.length
                  ? styles.dotCurrent
                  : styles.dotPending,
              ]}
            />
          ))}
        </View>

        <View style={styles.cardArea}>
          <VocabFlipCard
            entry={current}
            onRate={handleRate}
            darkMode={state.darkMode}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1 },
  header: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  title: { fontFamily: Fonts.serifBold, fontSize: FontSizes['2xl'] },
  count: { fontFamily: Fonts.sans, fontSize: FontSizes.sm },
  dots: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.xl,
    gap: 4,
    flexWrap: 'wrap',
    marginBottom: Spacing.xl,
  },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotDone: { backgroundColor: Colors.amber },
  dotCurrent: { backgroundColor: Colors.tealMid },
  dotPending: { backgroundColor: Colors.border },
  cardArea: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    justifyContent: 'center',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing['2xl'],
    gap: Spacing.md,
  },
  emptyEmoji: { fontSize: 64 },
  emptyTitle: { fontFamily: Fonts.serifBold, fontSize: FontSizes['2xl'], textAlign: 'center' },
  emptyText: { fontFamily: Fonts.sans, fontSize: FontSizes.md, textAlign: 'center', lineHeight: 24 },
});
