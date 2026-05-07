import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts, FontSizes, Spacing } from '../theme';
import { getStreakDays } from '../hooks/useStreak';

const DAY_LABELS = ['M', 'D', 'W', 'D', 'V', 'Z', 'Z'];

interface Props {
  activityLog: string[];
  streak: number;
  darkMode?: boolean;
}

export function StreakCalendar({ activityLog, streak, darkMode }: Props) {
  const days = getStreakDays(activityLog, 7);
  const textColor = darkMode ? Colors.darkText : Colors.ink;
  const faintColor = darkMode ? Colors.darkTextFaint : Colors.inkFaint;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.flame}>🔥</Text>
        <Text style={[styles.streakNum, { color: Colors.amber }]}>{streak}</Text>
        <Text style={[styles.streakLabel, { color: faintColor }]}>dagen op rij</Text>
      </View>
      <View style={styles.days}>
        {days.map((active, i) => {
          const today = new Date();
          const d = new Date(today);
          d.setDate(d.getDate() - (6 - i));
          const label = DAY_LABELS[d.getDay() === 0 ? 6 : d.getDay() - 1];
          return (
            <View key={i} style={styles.dayCol}>
              <View style={[styles.dot, active ? styles.dotActive : styles.dotInactive]} />
              <Text style={[styles.dayLabel, { color: faintColor }]}>{label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  flame: { fontSize: 18 },
  streakNum: {
    fontFamily: Fonts.sansBold,
    fontSize: FontSizes.xl,
  },
  streakLabel: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.sm,
    marginLeft: 2,
  },
  days: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  dayCol: {
    alignItems: 'center',
    gap: 3,
  },
  dot: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  dotActive: {
    backgroundColor: Colors.amber,
  },
  dotInactive: {
    backgroundColor: Colors.border,
  },
  dayLabel: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.xs,
  },
});
