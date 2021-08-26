import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native';
import { Platform } from 'react-native'
import Routes from './src/screens/routes';

const type = { base: (Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif'), bold: (Platform.OS === 'ios' ? 'HelveticaNeue-Bold' : 'arial'), emphasis: (Platform.OS === 'ios' ? 'HelveticaNeue-Italic' : 'sans-serif') }

export default function App() {
  return (      
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
        <Routes />
    </NavigationContainer>
  );
}