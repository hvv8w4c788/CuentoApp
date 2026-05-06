import React from 'react';
import { Stack } from 'expo-router';

export default function StoryLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name="chapter" />
      <Stack.Screen name="choice" />
      <Stack.Screen name="quiz" />
      <Stack.Screen name="ending" />
    </Stack>
  );
}
