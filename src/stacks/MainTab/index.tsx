
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RootTabParamList } from './rootTabParams';
import { ProfileSuggest } from '../../screens/profileSuggest';
import { UserMenu } from '../../screens/userMenu';
import { FooterMenu } from '../../components/footerMenu';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function MainTab() {
  return (
    <BottomTab.Navigator
    tabBar={props=> <FooterMenu {...props} />}     
    screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="ProfileSuggest" component={ProfileSuggest} />
      {/* <BottomTab.Screen name="UserMenu" component={UserMenu} /> */}
    </BottomTab.Navigator>
  );
}