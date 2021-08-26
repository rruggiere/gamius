import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native';
import { Platform } from 'react-native'
import Routes from './src/screens/routes';

export default function App() {
  return (      
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
        <Routes />
    </NavigationContainer>
  );
}
