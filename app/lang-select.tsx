import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../src/context/AppContext';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../src/theme';

const LANGUAGES = [
  { code: 'es', name: 'Español',    flag: '🇪🇸', available: true },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', available: true },
  { code: 'fr', name: 'Français',   flag: '🇫🇷', available: false },
  { code: 'de', name: 'Deutsch',    flag: '🇩🇪', available: false },
  { code: 'it', name: 'Italiano',   flag: '🇮🇹', available: false },
];

export default function LangSelect() {
  const router = useRouter();
  const { dispatch } = useApp();
  const [selected, setSelected] = useState('es');

  const handleContinue = () => {
    dispatch({ type: 'SET_LANGUAGE', lang: selected });
    router.push('/level-select');
  };

  const lang = LANGUAGES.find(l => l.code === selected)!;

  return (
    <View style={styles.bg}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={styles.logo}>Verhaal</Text>
          <Text style={styles.tagline}>Learn Dutch by reading stories</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>I want to learn</Text>
          <View style={styles.langList}>
            {LANGUAGES.map(l => (
              <Pressable
                key={l.code}
                onPress={() => l.available && setSelected(l.code)}
                style={[
                  styles.langBtn,
                  l.available ? styles.langBtnActive : styles.langBtnDisabled,
                  selected === l.code && styles.langBtnSelected,
                ]}
              >
                <Text style={styles.flag}>{l.flag}</Text>
                <Text style={[styles.langName, !l.available && { color: Colors.inkFaint }]}>
                  {l.name}
                </Text>
                {!l.available && (
                  <View style={styles.soonTag}>
                    <Text style={styles.soonText}>Soon</Text>
                  </View>
                )}
                {selected === l.code && <Text style={styles.checkmark}>✓</Text>}
              </Pressable>
            ))}
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [styles.cta, pressed && { opacity: 0.85 }]}
          onPress={handleContinue}
        >
          <Text style={styles.ctaText}>
            Start learning {lang.name} {lang.flag} →
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: Colors.forest },
  safe: { flex: 1, padding: Spacing.xl, justifyContent: 'space-between' },
  header: { alignItems: 'center', paddingTop: Spacing['2xl'] },
  logo: {
    fontFamily: Fonts.serifBold,
    fontSize: FontSizes['5xl'],
    color: Colors.amber,
    letterSpacing: 2,
  },
  tagline: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.md,
    color: Colors.tealLight,
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
  section: { gap: Spacing.md },
  sectionLabel: {
    fontFamily: Fonts.sansBold,
    fontSize: FontSizes.sm,
    color: Colors.tealLight,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  langList: { gap: Spacing.sm },
  langBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: Radii.lg,
    borderWidth: 1.5,
    gap: Spacing.md,
    ...Shadows.sm,
  },
  langBtnActive: {
    borderColor: 'rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  langBtnSelected: {
    borderColor: Colors.amber,
    backgroundColor: 'rgba(232,160,48,0.08)',
  },
  langBtnDisabled: {
    borderColor: 'rgba(255,255,255,0.06)',
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  flag: { fontSize: 28 },
  langName: {
    flex: 1,
    fontFamily: Fonts.sansMedium,
    fontSize: FontSizes.lg,
    color: Colors.cream,
  },
  soonTag: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  soonText: { fontFamily: Fonts.sans, fontSize: FontSizes.xs, color: Colors.inkFaint },
  checkmark: { fontSize: 18, color: Colors.amber },
  cta: {
    backgroundColor: Colors.amber,
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    ...Shadows.md,
  },
  ctaText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.lg, color: Colors.forest },
});
