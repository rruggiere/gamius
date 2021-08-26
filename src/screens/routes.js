import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from "../global/styles/theme";

//Pages
import SignIn from './signin';
import UserMenu from './userMenu';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (    
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerStyle: {backgroundColor: theme.colors.background.main,}, headerTintColor:  theme.colors.background.main}}>
        <Stack.Screen  name="SignIn" component={SignIn} options={{headerShown: false}}/>        
        <Stack.Screen  name="UserMenu" component={UserMenu}/>
    </Stack.Navigator>
  );
}