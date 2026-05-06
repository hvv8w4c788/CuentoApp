import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Colors, Fonts, FontSizes, Shadows } from '../theme';

const TABS = [
  { name: 'index', label: 'Inicio', icon: '📚' },
  { name: 'vocab', label: 'Vocab', icon: '🃏' },
  { name: 'profile', label: 'Perfil', icon: '⭐️' },
  { name: 'settings', label: 'Ajustes', icon: '⚙️' },
];

interface Props extends BottomTabBarProps {
  darkMode?: boolean;
}

export function TabBar({ state, descriptors, navigation, darkMode }: Props) {
  const insets = useSafeAreaInsets();
  const bg = darkMode ? Colors.darkCard : Colors.white;
  const borderColor = darkMode ? Colors.darkBorder : Colors.border;

  return (
    <View style={[styles.container, { backgroundColor: bg, borderTopColor: borderColor, paddingBottom: insets.bottom || 8 }, Shadows.lg]}>
      {state.routes.map((route, index) => {
        const tab = TABS.find(t => t.name === route.name) ?? { label: route.name, icon: '●' };
        const focused = state.index === index;
        const color = focused ? Colors.amber : (darkMode ? Colors.darkTextFaint : Colors.inkFaint);

        return (
          <Pressable
            key={route.key}
            onPress={() => {
              const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
              if (!focused && !event.defaultPrevented) navigation.navigate(route.name);
            }}
            style={styles.tab}
          >
            <Text style={[styles.icon, focused && styles.iconFocused]}>{tab.icon}</Text>
            <Text style={[styles.label, { color }]}>{tab.label}</Text>
            {focused && <View style={[styles.indicator, { backgroundColor: Colors.amber }]} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    gap: 2,
  },
  icon: {
    fontSize: 22,
    opacity: 0.5,
  },
  iconFocused: {
    opacity: 1,
  },
  label: {
    fontFamily: Fonts.sansMedium,
    fontSize: FontSizes.xs,
  },
  indicator: {
    position: 'absolute',
    top: -8,
    width: 20,
    height: 3,
    borderRadius: 2,
  },
});
