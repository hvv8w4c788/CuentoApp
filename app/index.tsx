import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useApp } from '../src/context/AppContext';
import { View, ActivityIndicator } from 'react-native';
import { Colors } from '../src/theme';

export default function Index() {
  const { state } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (state.onboardingDone) {
      router.replace('/(tabs)');
    } else {
      router.replace('/lang-select');
    }
  }, [state.onboardingDone]);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.forest, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator color={Colors.amber} />
    </View>
  );
}
