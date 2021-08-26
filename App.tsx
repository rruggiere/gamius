import React from 'react';
import { SignIn } from './src/screens/signin';
import { UserMenu } from './src/screens/userMenu';
import { View, StyleSheet } from 'react-native';
import { FooterMenu } from './src/components/footerMenu';
import { ProfileSuggest } from './src/screens/profileSuggest';


export default function App() {
  return (

    <View style={styles.container} >
      <ProfileSuggest />
      <View style={styles.footerMenu}>
        <FooterMenu />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  footerMenu: {
    position: 'absolute'
  }
});