import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, TextInput } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useApp } from '../src/context/AppContext';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../src/theme';

const GOALS = [
  { id: 'fun', label: 'Por diversión', emoji: '🎉' },
  { id: 'travel', label: 'Para viajar', emoji: '✈️' },
  { id: 'work', label: 'Para trabajar', emoji: '💼' },
  { id: 'culture', label: 'Aprender cultura', emoji: '🎭' },
  { id: 'family', label: 'Con mi familia', emoji: '👨‍👩‍👧' },
];

export default function Goals() {
  const router = useRouter();
  const { dispatch } = useApp();
  const { level = 'A1' } = useLocalSearchParams<{ level: string }>();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [name, setName] = useState('');

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  const handleStart = () => {
    dispatch({
      type: 'SET_ONBOARDING_DONE',
      userName: name.trim() || 'Estudiante',
      level,
      goals: selectedGoals,
    });
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.bg}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backText}>←</Text>
          </Pressable>
          <Text style={styles.title}>¿Cómo te llamamos?</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Tu nombre (opcional)"
          placeholderTextColor={Colors.tealLight + '88'}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          returnKeyType="done"
          maxLength={30}
        />

        <Text style={styles.sectionTitle}>¿Por qué aprendes español?</Text>
        <Text style={styles.sectionSub}>Selecciona todas las que apliquen</Text>

        <View style={styles.goalsGrid}>
          {GOALS.map(goal => {
            const active = selectedGoals.includes(goal.id);
            return (
              <Pressable
                key={goal.id}
                onPress={() => toggleGoal(goal.id)}
                style={[styles.goalChip, active && styles.goalChipActive]}
              >
                <Text style={styles.goalEmoji}>{goal.emoji}</Text>
                <Text style={[styles.goalLabel, active && styles.goalLabelActive]}>
                  {goal.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.spacer} />

        <Pressable
          style={({ pressed }) => [styles.cta, pressed && { opacity: 0.85 }]}
          onPress={handleStart}
        >
          <Text style={styles.ctaText}>Empezar a aprender →</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: Colors.forest },
  safe: { flex: 1, paddingHorizontal: Spacing.xl },
  header: { paddingTop: Spacing.xl, paddingBottom: Spacing.lg },
  backBtn: { marginBottom: Spacing.sm },
  backText: { color: Colors.tealLight, fontSize: FontSizes.xl },
  title: { fontFamily: Fonts.serifBold, fontSize: FontSizes['3xl'], color: Colors.cream },
  input: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    padding: Spacing.lg,
    fontFamily: Fonts.sans,
    fontSize: FontSizes.lg,
    color: Colors.cream,
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontFamily: Fonts.serifSemiBold,
    fontSize: FontSizes.xl,
    color: Colors.cream,
    marginBottom: Spacing.xs,
  },
  sectionSub: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.sm,
    color: Colors.tealLight,
    marginBottom: Spacing.lg,
  },
  goalsGrid: { gap: Spacing.sm },
  goalChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    padding: Spacing.md,
    borderRadius: Radii.lg,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  goalChipActive: {
    borderColor: Colors.amber,
    backgroundColor: 'rgba(232,160,48,0.10)',
  },
  goalEmoji: { fontSize: 22 },
  goalLabel: {
    fontFamily: Fonts.sansMedium,
    fontSize: FontSizes.md,
    color: Colors.cream,
    opacity: 0.7,
  },
  goalLabelActive: { opacity: 1, color: Colors.amber },
  spacer: { flex: 1 },
  cta: {
    backgroundColor: Colors.amber,
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    marginBottom: Spacing.xl,
    ...Shadows.md,
  },
  ctaText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.lg, color: Colors.forest },
});
