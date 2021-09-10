import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from "../../global/styles/theme";

//Pages
import SignIn from '../../screens/signin';
import SignUp from '../../screens/signUp';
import ForgotPassword from '../../screens/forgotPassword';
import EmailVerification from '../../screens/emailVerification';
import ResetPassword from '../../screens/resetPassword';
import { RootStackParamList } from './rootStackParams';
import { MainTab } from '../MainTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MainStack() {
  return (    
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerStyle: {backgroundColor: theme.colors.background.main,}, headerTintColor:  theme.colors.background.main}}>
        <Stack.Screen  name="SignIn" component={SignIn} options={{headerShown: false}}/>        
        <Stack.Screen  name="MainTab" component={MainTab} options={{headerShown: false}}/>  
        <Stack.Screen  name="SignUp" component={SignUp} options={{headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false}}/>
        <Stack.Screen  name="ForgotPassword" component={ForgotPassword} options={{headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false}}/>
        <Stack.Screen  name="EmailVerification" component={EmailVerification} options={{headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false}}/>
        <Stack.Screen  name="ResetPassword" component={ResetPassword} options={{headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false}}/>
    </Stack.Navigator>
  );
}