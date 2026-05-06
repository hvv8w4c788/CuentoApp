import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Pressable, SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../src/context/AppContext';
import { StoryCard } from '../../src/components/StoryCard';
import { StreakCalendar } from '../../src/components/StreakCalendar';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../../src/theme';
import { computeStreak } from '../../src/hooks/useStreak';

// Minimal registry until full story data is loaded
const REGISTRY = [
  { id: 'a1-1', level: 'A1', free: true, comingSoon: false },
  { id: 'a1-2', level: 'A1', free: false, comingSoon: false },
  { id: 'a1-3', level: 'A1', free: false, comingSoon: false },
  { id: 'a2-1', level: 'A2', free: true, comingSoon: false },
  { id: 'a2-2', level: 'A2', free: false, comingSoon: false },
  { id: 'a2-3', level: 'A2', free: false, comingSoon: false },
  { id: 'b1-1', level: 'B1', free: true, comingSoon: false },
  { id: 'b1-2', level: 'B1', free: false, comingSoon: false },
  { id: 'b1-3', level: 'B1', free: false, comingSoon: false },
  { id: 'b2-1', level: 'B2', free: true, comingSoon: false },
  { id: 'b2-2', level: 'B2', free: false, comingSoon: false },
  { id: 'b2-3', level: 'B2', free: false, comingSoon: false },
  { id: 'c1-1', level: 'C1', free: true, comingSoon: true },
  { id: 'c2-1', level: 'C2', free: true, comingSoon: true },
];

const STORY_META: Record<string, { title: string; genre: string; emoji: string; coverColor: string; accentColor: string; description: string }> = {
  'a1-1': { title: 'El Perro Perdido', genre: 'Aventura', emoji: '🐕', coverColor: '#2a3d2e', accentColor: '#7ab87e', description: 'Tu perro Coco no está en casa. Busca a tu fiel amigo por el vecindario.' },
  'a1-2': { title: 'Mi Primer Día en España', genre: 'Viaje', emoji: '✈️', coverColor: '#1e2a45', accentColor: '#6b9fd4', description: 'Llegas a España por primera vez. ¡Todo es nuevo y emocionante!' },
  'a1-3': { title: 'La Fiesta de Cumpleaños', genre: 'Familia', emoji: '🎂', coverColor: '#3d1a2e', accentColor: '#e87db8', description: 'Hoy es el cumpleaños de tu abuela. ¡Organiza la mejor fiesta de su vida!' },
  'a2-1': { title: 'El Misterio del Faro', genre: 'Misterio', emoji: '🏚️', coverColor: '#2a3d3a', accentColor: '#7ab8a0', description: 'El viejo faro de Valmaría lleva años apagado. Una noche las luces se encienden solas...' },
  'a2-2': { title: 'Un Verano en Barcelona', genre: 'Romance', emoji: '🌊', coverColor: '#1e2a45', accentColor: '#6b8fc9', description: 'Pasas el verano en Barcelona como estudiante de intercambio. Conoces a alguien especial.' },
  'a2-3': { title: 'La Ciudad de los Robots', genre: 'Ciencia ficción', emoji: '🤖', coverColor: '#1a2a3a', accentColor: '#5a9fd4', description: 'En el año 2075, un robot de limpieza empieza a hacer algo extraño: ¡crear arte!' },
  'b1-1': { title: 'La Startup', genre: 'Drama moderno', emoji: '💻', coverColor: '#1a1a2e', accentColor: '#8888ff', description: 'Tienes una idea brillante para una app. El camino al éxito está lleno de obstáculos.' },
  'b1-2': { title: 'El Intercambio', genre: 'Drama personal', emoji: '🌍', coverColor: '#1a3028', accentColor: '#60b090', description: 'Un año de intercambio en Ciudad de México. Aprender a pertenecer a otro mundo cambia todo.' },
  'b1-3': { title: 'El Detective Amateur', genre: 'Misterio', emoji: '🔍', coverColor: '#2a2018', accentColor: '#c8a860', description: 'Tu vecina desaparece dejando solo una nota críptica. Tú decides investigar.' },
  'b2-1': { title: 'La Periodista', genre: 'Thriller', emoji: '📰', coverColor: '#1a1f2e', accentColor: '#e8c060', description: 'Eres periodista de investigación. Descubres una corrupción que llega hasta las más altas esferas.' },
  'b2-2': { title: 'El Diplomático', genre: 'Thriller político', emoji: '🌐', coverColor: '#1e1a2e', accentColor: '#a080e0', description: 'Eres agregado cultural en una embajada. Un incidente te convierte en pieza clave de una crisis.' },
  'b2-3': { title: 'La Arquitecta', genre: 'Drama profesional', emoji: '🏛️', coverColor: '#2a1e14', accentColor: '#d4a060', description: 'Tu proyecto de vivienda social puede cambiar un barrio entero.' },
};

const LEVELS = ['Todos', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function getGreeting(name: string): string {
  const h = new Date().getHours();
  const time = h < 12 ? 'Buenos días' : h < 20 ? 'Buenas tardes' : 'Buenas noches';
  return `${time}, ${name || 'estudiante'} 👋`;
}

export default function HomeScreen() {
  const { state, dispatch } = useApp();
  const router = useRouter();
  const [levelFilter, setLevelFilter] = useState('Todos');

  const streak = computeStreak(state.activityLog);
  const filtered = REGISTRY.filter(r => levelFilter === 'Todos' || r.level === levelFilter);

  const handleStoryPress = (id: string, free: boolean) => {
    if (!free && !state.isPro) {
      router.push('/paywall');
      return;
    }
    dispatch({ type: 'LOG_ACTIVITY' });
    router.push(`/story/${id}/chapter`);
  };

  const bg = state.darkMode ? Colors.darkBg : Colors.parchment;
  const textColor = state.darkMode ? Colors.darkText : Colors.ink;
  const subColor = state.darkMode ? Colors.darkTextFaint : Colors.inkFaint;

  return (
    <View style={[styles.bg, { backgroundColor: bg }]}>
      <SafeAreaView style={styles.safe}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Greeting */}
          <View style={styles.header}>
            <Text style={[styles.greeting, { color: textColor }]}>{getGreeting(state.userName)}</Text>
            <StreakCalendar activityLog={state.activityLog} streak={streak} darkMode={state.darkMode} />
          </View>

          {/* Level filter */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll} contentContainerStyle={styles.filterContent}>
            {LEVELS.map(l => (
              <Pressable
                key={l}
                onPress={() => setLevelFilter(l)}
                style={[styles.filterChip, levelFilter === l && styles.filterChipActive]}
              >
                <Text style={[styles.filterText, levelFilter === l && styles.filterTextActive]}>{l}</Text>
              </Pressable>
            ))}
          </ScrollView>

          {/* Story list */}
          <View style={styles.storyList}>
            {filtered.map(entry => {
              const meta = STORY_META[entry.id];
              if (!meta) return null;
              const progress = state.storyProgress[entry.id];
              const completedChapters = progress ? Object.values(progress).filter(s => s === 'completed').length : 0;
              const progressRatio = completedChapters / 10;
              const isCompleted = state.completedStories.some(c => c.storyId === entry.id);

              return (
                <StoryCard
                  key={entry.id}
                  story={{ id: entry.id, level: entry.level, ...meta, chapters: {}, startChapter: 'c1' }}
                  free={entry.free}
                  isPro={state.isPro}
                  progress={progressRatio}
                  completed={isCompleted}
                  comingSoon={entry.comingSoon}
                  onPress={() => handleStoryPress(entry.id, entry.free)}
                  darkMode={state.darkMode}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1 },
  scroll: { padding: Spacing.xl, paddingBottom: 100 },
  header: { gap: Spacing.lg, marginBottom: Spacing.xl },
  greeting: { fontFamily: Fonts.serifBold, fontSize: FontSizes['2xl'] },
  filterScroll: { marginBottom: Spacing.xl, marginHorizontal: -Spacing.xl },
  filterContent: { paddingHorizontal: Spacing.xl, gap: Spacing.sm },
  filterChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: Radii.full,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: 'transparent',
  },
  filterChipActive: {
    borderColor: Colors.amber,
    backgroundColor: Colors.amber + '18',
  },
  filterText: {
    fontFamily: Fonts.sansMedium,
    fontSize: FontSizes.sm,
    color: Colors.inkFaint,
  },
  filterTextActive: { color: Colors.amber },
  storyList: { gap: 0 },
});
