import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Lora_400Regular, Lora_600SemiBold, Lora_700Bold } from '@expo-google-fonts/lora';
import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider, useApp } from '../src/context/AppContext';
import { View, ActivityIndicator } from 'react-native';
import { Colors } from '../src/theme';

function AppNavigator() {
  const { state } = useApp();
  return (
    <>
      <StatusBar style={state.darkMode ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="lang-select" />
        <Stack.Screen name="level-select" />
        <Stack.Screen name="goals" />
        <Stack.Screen name="paywall" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="story/[id]/chapter" />
        <Stack.Screen name="story/[id]/choice" />
        <Stack.Screen name="story/[id]/quiz" />
        <Stack.Screen name="story/[id]/ending" />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_600SemiBold,
    Lora_700Bold,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.forest, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={Colors.amber} />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppProvider>
          <AppNavigator />
        </AppProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
