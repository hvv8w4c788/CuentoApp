import React from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView,
  Switch, Pressable, Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../src/context/AppContext';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../../src/theme';

const FONT_SIZES = ['small', 'medium', 'large'] as const;

export default function SettingsScreen() {
  const { state, dispatch } = useApp();
  const router = useRouter();

  const bg = state.darkMode ? Colors.darkBg : Colors.parchment;
  const cardBg = state.darkMode ? Colors.darkCard : Colors.white;
  const textColor = state.darkMode ? Colors.darkText : Colors.ink;
  const subColor = state.darkMode ? Colors.darkTextFaint : Colors.inkFaint;
  const borderColor = state.darkMode ? Colors.darkBorder : Colors.border;

  const handleReset = () => {
    Alert.alert(
      'Restablecer progreso',
      '¿Seguro? Perderás todo tu progreso, XP y vocabulario.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Restablecer',
          style: 'destructive',
          onPress: () => {
            dispatch({ type: 'RESET' });
            router.replace('/lang-select');
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.bg, { backgroundColor: bg }]}>
      <SafeAreaView style={styles.safe}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          <Text style={[styles.pageTitle, { color: textColor }]}>Ajustes</Text>

          {/* Appearance */}
          <View style={styles.section}>
            <Text style={[styles.sectionLabel, { color: subColor }]}>APARIENCIA</Text>
            <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.row}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowIcon}>🌙</Text>
                  <Text style={[styles.rowLabel, { color: textColor }]}>Modo oscuro</Text>
                </View>
                <Switch
                  value={state.darkMode}
                  onValueChange={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
                  trackColor={{ false: Colors.border, true: Colors.tealMid }}
                  thumbColor={state.darkMode ? Colors.amber : Colors.cream}
                />
              </View>

              <View style={[styles.divider, { backgroundColor: borderColor }]} />

              <View style={styles.columnRow}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowIcon}>Aa</Text>
                  <Text style={[styles.rowLabel, { color: textColor }]}>Tamaño de texto</Text>
                </View>
                <View style={styles.fontSizeRow}>
                  {FONT_SIZES.map(size => (
                    <Pressable
                      key={size}
                      onPress={() => dispatch({ type: 'SET_FONT_SIZE', value: size })}
                      style={[
                        styles.fontSizeBtn,
                        { borderColor },
                        state.fontSize === size && styles.fontSizeBtnActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.fontSizeBtnText,
                          { color: state.fontSize === size ? Colors.amber : subColor },
                        ]}
                      >
                        {size === 'small' ? 'A' : size === 'medium' ? 'A' : 'A'}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Learning */}
          <View style={styles.section}>
            <Text style={[styles.sectionLabel, { color: subColor }]}>APRENDIZAJE</Text>
            <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.row}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowIcon}>📖</Text>
                  <Text style={[styles.rowLabel, { color: textColor }]}>Mostrar vocabulario</Text>
                </View>
                <Switch
                  value={state.showVocab}
                  onValueChange={() => dispatch({ type: 'TOGGLE_VOCAB' })}
                  trackColor={{ false: Colors.border, true: Colors.tealMid }}
                  thumbColor={state.showVocab ? Colors.amber : Colors.cream}
                />
              </View>

              <View style={[styles.divider, { backgroundColor: borderColor }]} />

              <Pressable style={styles.row} onPress={() => router.push('/level-select')}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowIcon}>📊</Text>
                  <Text style={[styles.rowLabel, { color: textColor }]}>Nivel CEFR</Text>
                </View>
                <View style={styles.rowRight}>
                  <Text style={[styles.rowValue, { color: subColor }]}>{state.userLevel}</Text>
                  <Text style={[styles.chevron, { color: subColor }]}>›</Text>
                </View>
              </Pressable>
            </View>
          </View>

          {/* Account */}
          <View style={styles.section}>
            <Text style={[styles.sectionLabel, { color: subColor }]}>CUENTA</Text>
            <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
              {!state.isPro && (
                <>
                  <Pressable style={styles.row} onPress={() => router.push('/paywall')}>
                    <View style={styles.rowLeft}>
                      <Text style={styles.rowIcon}>✨</Text>
                      <Text style={[styles.rowLabel, { color: Colors.amber }]}>Actualizar a Pro</Text>
                    </View>
                    <Text style={[styles.chevron, { color: subColor }]}>›</Text>
                  </Pressable>
                  <View style={[styles.divider, { backgroundColor: borderColor }]} />
                </>
              )}

              {state.isPro && (
                <>
                  <View style={styles.row}>
                    <View style={styles.rowLeft}>
                      <Text style={styles.rowIcon}>✨</Text>
                      <Text style={[styles.rowLabel, { color: textColor }]}>Cuento Pro</Text>
                    </View>
                    <View style={styles.proBadge}>
                      <Text style={styles.proBadgeText}>ACTIVO</Text>
                    </View>
                  </View>
                  <View style={[styles.divider, { backgroundColor: borderColor }]} />
                </>
              )}

                  <Pressable style={styles.row} onPress={handleReset}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowIcon}>🔄</Text>
                  <Text style={[styles.rowLabel, { color: Colors.bad }]}>Restablecer progreso</Text>
                </View>
                <Text style={[styles.chevron, { color: subColor }]}>›</Text>
              </Pressable>
            </View>
          </View>

          {/* About */}
          <View style={styles.section}>
            <Text style={[styles.sectionLabel, { color: subColor }]}>ACERCA DE</Text>
            <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
              <View style={styles.row}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowIcon}>📱</Text>
                  <Text style={[styles.rowLabel, { color: textColor }]}>Versión</Text>
                </View>
                <Text style={[styles.rowValue, { color: subColor }]}>1.0.0</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1 },
  scroll: { padding: Spacing.xl, gap: Spacing.lg, paddingBottom: 100 },
  pageTitle: { fontFamily: Fonts.serifBold, fontSize: FontSizes['2xl'], marginBottom: Spacing.sm },
  section: { gap: Spacing.xs },
  sectionLabel: {
    fontFamily: Fonts.sansBold,
    fontSize: FontSizes.xs,
    letterSpacing: 1,
    paddingHorizontal: Spacing.xs,
  },
  card: {
    borderRadius: Radii.lg,
    borderWidth: 1,
    overflow: 'hidden',
    ...Shadows.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  columnRow: {
    flexDirection: 'column',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
  },
  rowLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, flex: 1 },
  rowRight: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  rowIcon: { fontSize: 18, width: 28 },
  rowLabel: { fontFamily: Fonts.sansMedium, fontSize: FontSizes.md },
  rowValue: { fontFamily: Fonts.sans, fontSize: FontSizes.sm },
  chevron: { fontSize: 20, fontFamily: Fonts.sans },
  divider: { height: StyleSheet.hairlineWidth, marginHorizontal: Spacing.md },
  fontSizeRow: { flexDirection: 'row', gap: Spacing.sm },
  fontSizeBtn: {
    width: 36,
    height: 36,
    borderRadius: Radii.md,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontSizeBtnActive: { borderColor: Colors.amber, backgroundColor: Colors.amber + '18' },
  fontSizeBtnText: { fontFamily: Fonts.sansBold },
  proBadge: {
    backgroundColor: Colors.amber + '22',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  proBadgeText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.xs, color: Colors.amber },
});
