import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '../../src/components/TabBar';
import { useApp } from '../../src/context/AppContext';

export default function TabsLayout() {
  const { state } = useApp();
  return (
    <Tabs
      tabBar={props => <TabBar {...props} darkMode={state.darkMode} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="vocab" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
