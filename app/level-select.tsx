import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../src/theme';

const LEVELS = [
  { code: 'A1', label: 'Principiante', desc: 'Palabras básicas y frases simples', color: '#c8efd0', textColor: '#1a5028', available: true },
  { code: 'A2', label: 'Elemental', desc: 'Situaciones cotidianas simples', color: '#c0e8f0', textColor: '#0a3a55', available: true },
  { code: 'B1', label: 'Intermedio', desc: 'Temas familiares y cotidianos', color: '#c8d0f0', textColor: '#1a2060', available: true },
  { code: 'B2', label: 'Intermedio alto', desc: 'Textos complejos y abstractos', color: '#e0c8f0', textColor: '#3a1060', available: true },
  { code: 'C1', label: 'Avanzado', desc: 'Contenido exigente y flexible', color: '#f0d8c0', textColor: '#5a2a00', available: false },
  { code: 'C2', label: 'Maestría', desc: 'Dominio completo del idioma', color: '#f0c8c8', textColor: '#5a0a0a', available: false },
];

export default function LevelSelect() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.bg}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backText}>←</Text>
          </Pressable>
          <Text style={styles.title}>¿Cuál es tu nivel?</Text>
          <Text style={styles.subtitle}>Puedes cambiarlo después en ajustes</Text>
        </View>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {LEVELS.map(level => {
            const isSelected = selected === level.code;
            return (
              <Pressable
                key={level.code}
                onPress={() => level.available && setSelected(level.code)}
                style={({ pressed }) => [
                  styles.levelCard,
                  { backgroundColor: level.color + (level.available ? 'ff' : '66') },
                  isSelected && styles.levelCardSelected,
                  pressed && level.available && { opacity: 0.85, transform: [{ scale: 0.98 }] },
                  !level.available && styles.levelCardDisabled,
                ]}
              >
                <View style={styles.levelInfo}>
                  <View style={styles.levelRow}>
                    <Text style={[styles.levelCode, { color: level.textColor }]}>{level.code}</Text>
                    {isSelected && <Text style={styles.check}>✓</Text>}
                    {!level.available && (
                      <View style={styles.soonTag}>
                        <Text style={styles.soonText}>Pronto</Text>
                      </View>
                    )}
                  </View>
                  <Text style={[styles.levelLabel, { color: level.textColor }]}>{level.label}</Text>
                  <Text style={[styles.levelDesc, { color: level.textColor + 'aa' }]}>{level.desc}</Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>

        <Pressable
          style={[styles.cta, !selected && styles.ctaDisabled]}
          onPress={() => selected && router.push('/goals')}
          disabled={!selected}
        >
          <Text style={styles.ctaText}>Continuar →</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: Colors.forest },
  safe: { flex: 1, paddingHorizontal: Spacing.xl },
  header: { paddingVertical: Spacing.xl, gap: Spacing.xs },
  backBtn: { marginBottom: Spacing.sm },
  backText: { color: Colors.tealLight, fontSize: FontSizes.xl },
  title: { fontFamily: Fonts.serifBold, fontSize: FontSizes['3xl'], color: Colors.cream },
  subtitle: { fontFamily: Fonts.sans, fontSize: FontSizes.sm, color: Colors.tealLight },
  scroll: { flex: 1 },
  scrollContent: { gap: Spacing.sm, paddingBottom: Spacing.lg },
  levelCard: {
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    borderWidth: 2,
    borderColor: 'transparent',
    ...Shadows.sm,
  },
  levelCardSelected: {
    borderColor: Colors.amber,
    ...Shadows.md,
  },
  levelCardDisabled: { opacity: 0.5 },
  levelInfo: { gap: 2 },
  levelRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  levelCode: { fontFamily: Fonts.sansBold, fontSize: FontSizes.xl },
  check: { fontSize: 16, color: Colors.amber },
  soonTag: {
    backgroundColor: 'rgba(0,0,0,0.12)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  soonText: { fontFamily: Fonts.sans, fontSize: FontSizes.xs, color: '#555' },
  levelLabel: { fontFamily: Fonts.sansMedium, fontSize: FontSizes.md },
  levelDesc: { fontFamily: Fonts.sans, fontSize: FontSizes.sm },
  cta: {
    backgroundColor: Colors.amber,
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    marginBottom: Spacing.xl,
    ...Shadows.md,
  },
  ctaDisabled: { opacity: 0.4 },
  ctaText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.lg, color: Colors.forest },
});
