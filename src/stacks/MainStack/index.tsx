import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from "../../global/styles/theme";

//Pages
import SignIn from '../../screens/signin';
import SignUp from '../../screens/signUp';
import { UserMenu } from '../../screens/userMenu';
import ForgotPassword from '../../screens/forgotPassword';
import EmailVerification from '../../screens/emailVerification';
import ResetPassword from '../../screens/resetPassword';
import { RootStackParamList } from './rootStackParams';
import { MainTab } from '../MainTab';
import ChangePassword from '../../screens/changePassword';
import ChangeEmail from '../../screens/changeEmail';
import ChangeEmailVerification from '../../screens/changeEmailVerification';
import DisableAccount from '../../screens/disableAccount';
import { EditPerfil } from '../../screens/userProfile';
import FilterProfile from '../../screens/filterProfileSuggest';
import GameProfile from '../../screens/gameProfile';
import BlockedUsers from '../../screens/blockedUsers';
import { ConversationScreen } from '../../screens/conversation';
import { Chat } from '../../screens/chat';


import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import chatImage from '../../assets/nocturne_iconprofile.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH, faBan, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Stack = createNativeStackNavigator<RootStackParamList>();

function LogoTitle() {
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View style={{ width: '100%', flexDirection: 'row', }}>
      <Image
        style={{
          borderWidth: 1,
          borderRadius: 100,
          borderColor: 'black',
          alignContent: 'center',
          alignItems: 'center',
          padding: '5%',
          width: 45,
          height: 45,
          marginTop: '-1%',
          marginLeft: '2%'
        }}
        source={chatImage}
      />
      <Text style={{ color: theme.colors.heading.main, fontSize: 20, marginLeft: '1%', marginTop: '2%' }}> Alexandre Lott </Text>
      <Menu
        style={
          {
            backgroundColor: theme.colors.backgroundButton
          }
        }
        visible={visible}
        anchor={
          <TouchableOpacity
            onPress={showMenu}>
            <FontAwesomeIcon style={{ color: 'white', height: '100%', marginTop: '4%', marginLeft: '47.2%' }} icon={faEllipsisH} size={25} />
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>Bloquear</MenuItem>
        <MenuDivider color={theme.colors.background.main} />
        <MenuItem onPress={hideMenu}>Reportar</MenuItem>
      </Menu>


    </View>
  );
}

export function MainStack() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerStyle: { backgroundColor: theme.colors.background.main, }, headerTintColor: theme.colors.background.main }}>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="UserMenu" component={UserMenu} options={{ headerShown: false }} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="ChangeEmailVerification" component={ChangeEmailVerification} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="DisableAccount" component={DisableAccount} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="EditPerfil" component={EditPerfil} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="FilterProfile" component={FilterProfile} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name="GameProfile" component={GameProfile} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
      <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
      <Stack.Screen name="ConversationScreen" component={ConversationScreen} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false, headerTitle: () => <LogoTitle /> }} />
      <Stack.Screen name="BlockedUsers" component={BlockedUsers} options={{ headerTintColor: '#fff', headerBackTitleVisible: false, title: '', headerShadowVisible: false }} />
    </Stack.Navigator>
  );
}