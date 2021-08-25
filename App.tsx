import React from 'react';
import { SignIn } from './src/screens/signin';
import { UserMenu } from './src/screens/userMenu';
import { View, StyleSheet } from 'react-native';
import { FooterMenu } from './src/components/footerMenu';

export default function App() {
  return (     
    
    <View style={styles.container} >
            <UserMenu/>    
            <FooterMenu/>
    </View>    
  );
}
const styles = StyleSheet.create({
container: {
  flex: 1
}
});