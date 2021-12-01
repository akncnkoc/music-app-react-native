import React from 'react';
import { NativeBaseProvider } from 'native-base';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <WelcomeScreen />
    </NativeBaseProvider>
  );
}