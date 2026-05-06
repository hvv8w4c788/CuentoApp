import React, { useMemo, useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useApp } from '../../../src/context/AppContext';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../../../src/theme';
import type { Story } from '../../../src/data/types';

const XP_CORRECT = 10;

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

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { state, dispatch } = useApp();
  const router = useRouter();

  const story = useMemo(() => loadStory(id), [id]);
  const chapter = useMemo(
    () => (story && state.currentChapterId ? story.chapters[state.currentChapterId] : null),
    [story, state.currentChapterId]
  );

  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);

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

  const { quiz, ending, choices } = chapter;
  const isCorrect = selected === quiz.a;
  const isEnding = !!ending;

  const bg = state.darkMode ? Colors.darkBg : Colors.parchment;
  const textColor = state.darkMode ? Colors.darkText : Colors.ink;
  const subColor = state.darkMode ? Colors.darkTextFaint : Colors.inkFaint;
  const cardBg = state.darkMode ? Colors.darkCard : Colors.white;

  const handleSelect = (i: number) => {
    if (confirmed) return;
    setSelected(i);
  };

  const handleConfirm = () => {
    if (selected === null || confirmed) return;
    setConfirmed(true);
    if (isCorrect) {
      dispatch({ type: 'ADD_XP', amount: XP_CORRECT });
    }
  };

  const handleNext = () => {
    if (isEnding) {
      const wordsEncountered = state.chapterPath.reduce((acc, cid) => {
        const ch = story.chapters[cid];
        return acc + (ch?.vocab?.length ?? 0);
      }, 0);
      dispatch({
        type: 'COMPLETE_STORY',
        storyId: id,
        ending: ending!,
        chaptersRead: state.chapterPath.length,
        wordsEncountered,
        xpEarned: state.chapterPath.length * 20 + (isCorrect ? XP_CORRECT : 0),
      });
      router.replace(`/story/${id}/ending`);
    } else if (choices.length > 0) {
      router.replace(`/story/${id}/choice`);
    } else {
      router.replace(`/story/${id}/chapter`);
    }
  };

  const optionStyle = (i: number) => {
    if (!confirmed) {
      return selected === i ? styles.optSelected : styles.optDefault;
    }
    if (i === quiz.a) return styles.optCorrect;
    if (i === selected) return styles.optWrong;
    return styles.optDefault;
  };

  return (
    <View style={[styles.bg, { backgroundColor: bg }]}>
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={[styles.backText, { color: textColor }]}>←</Text>
          </Pressable>

          <Text style={[styles.heading, { color: textColor }]}>Prueba tu comprensión</Text>

          <View style={[styles.card, { backgroundColor: cardBg }, Shadows.sm]}>
            <Text style={[styles.question, { color: textColor }]}>{quiz.q}</Text>
          </View>

          <View style={styles.options}>
            {quiz.opts.map((opt, i) => (
              <Pressable
                key={i}
                onPress={() => handleSelect(i)}
                style={[styles.opt, optionStyle(i)]}
              >
                <Text style={[
                  styles.optText,
                  { color: confirmed && i === quiz.a ? Colors.white : textColor },
                ]}>
                  {opt}
                </Text>
                {confirmed && i === quiz.a && (
                  <Text style={styles.optCheck}>✓</Text>
                )}
                {confirmed && i === selected && i !== quiz.a && (
                  <Text style={styles.optCross}>✗</Text>
                )}
              </Pressable>
            ))}
          </View>

          {confirmed && (
            <View style={[styles.feedback, { backgroundColor: isCorrect ? Colors.good + '22' : Colors.bad + '22' }]}>
              <Text style={[styles.feedbackText, { color: isCorrect ? Colors.good : Colors.bad }]}>
                {isCorrect ? `¡Correcto! +${XP_CORRECT} XP` : 'Incorrecto — ¡sigue practicando!'}
              </Text>
            </View>
          )}

          <View style={styles.footer}>
            {!confirmed ? (
              <Pressable
                style={[styles.btn, selected === null && styles.btnDisabled]}
                onPress={handleConfirm}
                disabled={selected === null}
              >
                <Text style={styles.btnText}>Comprobar</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.btn} onPress={handleNext}>
                <Text style={styles.btnText}>
                  {isEnding ? 'Ver final →' : choices.length > 0 ? 'Elegir →' : 'Siguiente →'}
                </Text>
              </Pressable>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1 },
  scroll: { padding: Spacing.xl, gap: Spacing.xl, paddingBottom: 60 },
  backBtn: { padding: Spacing.sm, alignSelf: 'flex-start' },
  backText: { fontSize: FontSizes.xl },
  heading: { fontFamily: Fonts.serifBold, fontSize: FontSizes['2xl'] },
  card: { borderRadius: Radii.lg, padding: Spacing.lg },
  question: { fontFamily: Fonts.sansMedium, fontSize: FontSizes.lg, lineHeight: FontSizes.lg * 1.5 },
  options: { gap: Spacing.sm },
  opt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Radii.lg,
    padding: Spacing.md,
    borderWidth: 2,
  },
  optDefault: { borderColor: Colors.border, backgroundColor: 'transparent' },
  optSelected: { borderColor: Colors.tealMid, backgroundColor: Colors.tealMid + '18' },
  optCorrect: { borderColor: Colors.good, backgroundColor: Colors.good },
  optWrong: { borderColor: Colors.bad, backgroundColor: Colors.bad + '22' },
  optText: { fontFamily: Fonts.sansMedium, fontSize: FontSizes.md, flex: 1 },
  optCheck: { color: Colors.white, fontSize: FontSizes.md },
  optCross: { color: Colors.bad, fontSize: FontSizes.md },
  feedback: { borderRadius: Radii.lg, padding: Spacing.md, alignItems: 'center' },
  feedbackText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.md },
  footer: { marginTop: Spacing.md },
  btn: {
    backgroundColor: Colors.forest,
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    ...Shadows.md,
  },
  btnDisabled: { opacity: 0.4 },
  btnText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.md, color: Colors.cream },
});
