import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import SignIn from '../../screens/signin';
import { RootStackParamList } from './rootStackParams';
import { MainTab } from '../MainTab';

const Stack = createStackNavigator<RootStackParamList>();

export function MainStack() {
  return (    
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
        <Stack.Screen  name="SignIn" component={SignIn}/>        
        <Stack.Screen  name="MainTab" component={MainTab}/>
    </Stack.Navigator>
  );
}