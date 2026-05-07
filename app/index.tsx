import { Redirect } from 'expo-router';
import { useApp } from '../src/context/AppContext';
import { View, ActivityIndicator } from 'react-native';
import { Colors } from '../src/theme';

export default function Index() {
  const { state } = useApp();

  if (!state.isLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.forest, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={Colors.amber} />
      </View>
    );
  }

  return <Redirect href={state.onboardingDone ? '/(tabs)' : '/lang-select'} />;
}