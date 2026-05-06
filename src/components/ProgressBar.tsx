import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Colors } from '../theme';

interface Props {
  progress: number; // 0–1
  color?: string;
  height?: number;
  backgroundColor?: string;
}

export function ProgressBar({ progress, color = Colors.amber, height = 4, backgroundColor = Colors.border }: Props) {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  return (
    <View style={[styles.track, { height, backgroundColor }]}>
      <View style={[styles.fill, { width: `${clampedProgress * 100}%`, backgroundColor: color, height }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    borderRadius: 999,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: 999,
  },
});
