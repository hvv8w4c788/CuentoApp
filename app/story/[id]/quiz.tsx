import React, { useMemo, useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useApp } from '../../../src/context/AppContext';
import { ProgressBar } from '../../../src/components/ProgressBar';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../../../src/theme';
import { loadStory } from '../../../src/utils/loadStory';

const XP_PER_CHAPTER = 20;
const XP_PER_CORRECT = 10;

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { state, dispatch } = useApp();
  const router = useRouter();

  const story = useMemo(() => loadStory(id), [id]);

  // Build one question per chapter read, in order
  const questions = useMemo(() => {
    if (!story) return [];
    return state.chapterPath
      .map(cid => story.chapters[cid])
      .filter(Boolean)
      .map(ch => ch.quiz);
  }, [story, state.chapterPath]);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  if (!story || questions.length === 0) {
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

  const q = questions[currentQ];
  const isCorrect = selected !== null && selected === q.a;
  const isLast = currentQ === questions.length - 1;
  const progress = (currentQ + (confirmed ? 1 : 0)) / questions.length;

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
      setCorrectCount(c => c + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      const endingChapterId = state.chapterPath[state.chapterPath.length - 1];
      const endingChapter = story.chapters[endingChapterId];
      const ending = endingChapter?.ending ?? 'neutral';
      const wordsEncountered = state.chapterPath.reduce((acc, cid) => {
        const ch = story.chapters[cid];
        return acc + (ch?.vocab?.length ?? 0);
      }, 0);
      dispatch({
        type: 'COMPLETE_STORY',
        storyId: id,
        ending,
        chaptersRead: state.chapterPath.length,
        wordsEncountered,
        xpEarned: state.chapterPath.length * XP_PER_CHAPTER + correctCount * XP_PER_CORRECT,
      });
      router.replace(`/story/${id}/ending`);
    } else {
      setCurrentQ(i => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  };

  const optionStyle = (i: number) => {
    if (!confirmed) return selected === i ? styles.optSelected : styles.optDefault;
    if (i === q.a) return styles.optCorrect;
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

          <View style={styles.header}>
            <Text style={[styles.heading, { color: textColor }]}>Quiz final</Text>
            <Text style={[styles.counter, { color: subColor }]}>
              {currentQ + 1} / {questions.length}
            </Text>
          </View>

          <ProgressBar progress={progress} color={Colors.amber} height={4} />

          <View style={[styles.card, { backgroundColor: cardBg }, Shadows.sm]}>
            <Text style={[styles.question, { color: textColor }]}>{q.q}</Text>
          </View>

          <View style={styles.options}>
            {q.opts.map((opt, i) => (
              <Pressable
                key={i}
                onPress={() => handleSelect(i)}
                style={[styles.opt, optionStyle(i)]}
              >
                <Text style={[
                  styles.optText,
                  { color: confirmed && i === q.a ? Colors.white : textColor },
                ]}>
                  {opt}
                </Text>
                {confirmed && i === q.a && <Text style={styles.optCheck}>✓</Text>}
                {confirmed && i === selected && i !== q.a && <Text style={styles.optCross}>✗</Text>}
              </Pressable>
            ))}
          </View>

          {confirmed && (
            <View style={[styles.feedback, {
              backgroundColor: isCorrect ? Colors.good + '22' : Colors.bad + '22',
            }]}>
              <Text style={[styles.feedbackText, { color: isCorrect ? Colors.good : Colors.bad }]}>
                {isCorrect ? `¡Correcto! +${XP_PER_CORRECT} XP` : 'Incorrecto — ¡sigue practicando!'}
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
                  {isLast ? 'Ver final →' : 'Siguiente →'}
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
  header: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' },
  heading: { fontFamily: Fonts.serifBold, fontSize: FontSizes['2xl'] },
  counter: { fontFamily: Fonts.sansMedium, fontSize: FontSizes.md },
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
