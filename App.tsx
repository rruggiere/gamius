import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { MainStack } from './src/stacks/MainStack';

import 'react-native-gesture-handler';


export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <MainStack />
      </NavigationContainer>
    </>
  );
}
